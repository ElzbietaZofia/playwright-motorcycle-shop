import { expect, Page } from '@playwright/test'

export class ContactPage {

    constructor(private page: Page) { }

    formInputName = this.page.getByLabel('Name*', { exact: true })
    formInputSurname = this.page.getByLabel('Surname*')
    formDropListCountry = this.page.getByRole('combobox', { name: 'Country*' })
    formDropListLanguage = this.page.getByRole('combobox', { name: 'Language*' })
    formInputEmail = this.page.getByLabel('Email*')
    formInputPhone = this.page.getByLabel('Phone (please insert country code)*')
    formDropListEnquiry = this.page.getByRole('combobox', { name: 'Enquiry Type*' })
    formInputQuestion = this.page.getByLabel('Type your Question here*')
    checkboxAgreement = this.page.locator('#primary').getByText('I agree to the use of my personal data for email communications that reflect my ')
    submitButton = this.page.getByRole('button', { name: 'Submit', exact: true })
    successMessage = this.page.locator('.submitted-message > p:nth-child(1)')
    emptyFormMessage = this.page.locator('hs-error-msg li')



    async fillContactForm(name: string, surname: string, email: string, question: string): Promise<void> {
        await this.formInputName.type(name)
        await this.formInputSurname.type(surname)
        await this.formDropListCountry.selectOption('France')
        await this.formDropListLanguage.selectOption('English')
        await this.formInputEmail.type(email)
        await this.formInputPhone.type('48567345057')
        await this.formDropListEnquiry.selectOption('Product Info')
        await this.formInputQuestion.type(question)
        await this.checkboxAgreement.check()
        await this.submitButton.click()
    }

    async assertSuccessfulSubmission() {
        await expect(this.successMessage).toHaveText('Thanks for your message!')
    }
    async emptyContactForm() {
        await this.formInputName.type("")
        await this.formInputSurname.type("")
        await this.formDropListCountry.selectOption("France")
        await this.formDropListLanguage.selectOption("English")
        await this.formInputEmail.type("")
        await this.formInputPhone.type("")
        await this.formDropListEnquiry.selectOption('Product Info')
        await this.formInputQuestion.type("")
        await this.checkboxAgreement.check()
        await this.submitButton.click()
    }

    async assertEmptyFormSubmission() {
        await expect(this.emptyFormMessage).toHaveText('Please complete this required field.')
    }

}
