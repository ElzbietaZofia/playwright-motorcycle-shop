import { test, expect } from '@playwright/test'
import { ContactPage } from '../../page-objects/Contact'
import { HomePage } from '../../page-objects/HomePage'
import { contactFormData } from '../../test-data/contact.data'

test.describe("Contact Page", () => {
    let contactPage: ContactPage
    let homePage: HomePage


    test.beforeEach(async ({ page }) => {
        contactPage = new ContactPage(page)
        homePage = new HomePage(page)

        await homePage.visit()
        await homePage.footer.contactList.click()
    })

    const name = contactFormData.name
    const surname = contactFormData.surname
    const email = contactFormData.email
    const question = contactFormData.question

    test("Successful form submission", async ({ page }) => {

        await contactPage.fillContactForm(name, surname, email, question)
        await contactPage.assertSuccessfulSubmission()
    })

    test("Empty form submission", async ({ page }) => {

        await contactPage.emptyContactForm()
        await contactPage.assertEmptyFormSubmission()
    })

})


