import { expect, Page } from '@playwright/test'

export class LoginPage {

    constructor(private page: Page) { }

    myAccountButton = this.page.getByRole('button', { name: 'My Account' })
    myAccuontLabel = this.page.getByText('My Account').nth(1)
    inputEmail = this.page.locator('#login-form-email')
    inputPassword = this.page.locator('#login-form-password')
    submitLogin = this.page.getByRole('button', { name: 'Login' })
    loginErrorMessage = this.page.getByText('Invalid login or password. Remember that password is case-sensitive. Please try ')
    emptyEmailMessage = this.page.locator('#form-email-error')
    emptyPasswordMessage = this.page.locator('#form-password-error')
    accountHeaderTitle = this.page.locator('.account-header-title')
    logoutLabel = this.page.getByText('Logout')


    async login(username: string, password: string): Promise<void> {
        await this.myAccountButton.click()
        await this.myAccuontLabel.click()
        await this.inputEmail.type(username)
        await this.inputPassword.type(password)
        await this.submitLogin.click()
    }

    async logout() {
        await this.myAccountButton.click()
        await this.logoutLabel.click()
    }

    async assertLoginErrorMessage() {
        await expect(this.loginErrorMessage).toContainText('Invalid login or password. Remember that password is case-sensitive. Please try again.')
    }

    async assertEmptyLoginMessage() {
        await expect(this.emptyEmailMessage).toContainText('Please fill out this field.')
    }
    async assertEmptyPasswordMessage() {
        await expect(this.emptyPasswordMessage).toContainText('Please fill out this field.')
    }

    async assertAccountHeader() {
        await expect(this.accountHeaderTitle).toContainText('Hello Meca Somboo')
    }

    async assertLogoutUrl() {
        await expect(this.page).toHaveURL('https://www.dainese.com/pl/en/')
    }
}