import os
import base64
from playwright.sync_api import sync_playwright

edge_path = r'C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe'
cert_dir = r'c:\MyProject\0xFE1C\public\certificates'
renderer_html = os.path.join(cert_dir, 'renderer.html')

tasks = [
    ('hmti-litbang-certificate.pdf', 'hmti-cert-page1.png', 1),
    ('hmti-litbang-certificate.pdf', 'hmti-cert-page2.png', 2),
    ('cisco-python-pcap-certificate.pdf', 'cisco-python-cert.png', 1),
    ('ubsi-digital-transformation-certificate.pdf', 'ubsi-seminar-cert.png', 1),
]

with sync_playwright() as p:
    browser = p.chromium.launch(executable_path=edge_path)
    page = browser.new_page()
    page.goto('file:///' + renderer_html.replace('\\', '/'))
    page.wait_for_timeout(1500)

    for pdf_file, out_name, page_num in tasks:
        pdf_path = os.path.join(cert_dir, pdf_file)
        with open(pdf_path, 'rb') as f:
            b64 = base64.b64encode(f.read()).decode('utf-8')

        print(f'Rendering {pdf_file} (Page {page_num})...')
        dim = page.evaluate('''(args) => window.renderPdf(args.data, args.pageNum)''', {'data': b64, 'pageNum': page_num})
        page.wait_for_function('window.isRendered === true')
        page.wait_for_timeout(500)

        canvas = page.locator('#pdf-canvas')
        out_path = os.path.join(cert_dir, out_name)
        canvas.screenshot(path=out_path)
        print(f'Saved {out_name}')

    browser.close()
print('All certificates rendered successfully!')
