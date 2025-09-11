from playwright.sync_api import Page

class LoginPage:
    def __init__(self, page: Page):
        self.page = page
        self.user_input = "input[data-test='username']"
        self.password_input = "input[data-test='password']"
        self.submit_button = "button[data-test='login-button']"
        self.error_message = "h3[data-test='error']"

    def goto(self, base_url: str):
        self.page.goto(base_url)

    def login(self, username, password):
        self.page.fill(self.user_input, username)
        self.page.fill(self.password_input, password)
        self.page.click(self.submit_button)

    def error_message(self):
        if self.error_message:
            return self.error_message.text_content()
        return None
