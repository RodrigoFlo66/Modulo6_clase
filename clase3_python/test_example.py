from playwright.sync_api import sync_playwright

def test_example_domain():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        page.goto("https://example.com")
        title = page.title()
        print(title)   # debería imprimir "Example Domain"
        assert title == "Example Domain"
        browser.close()
