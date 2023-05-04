import { expect, Locator, Page } from '@playwright/test'
import { MainMenuComponent } from '../components/mainMenu.components'
import { FooterComponent } from '../components/footer.components'

export class HomePage {

    constructor(private page: Page) { }

    mainMenu = new MainMenuComponent(this.page)
    footer = new FooterComponent(this.page)

    acceptCookies = this.page.getByRole('button', { name: 'Accept All Cookies' })
    responsiveLogo = this.page.locator('.hidden-md-down')


    async acceptCookiesHomePage() {
        await this.acceptCookies.click()
    }

    async openMenuTabHelmets() {
        await this.mainMenu.tabMotorbike.hover()
        await this.mainMenu.categoryWoman.click()
        await this.mainMenu.subCategoryHelmets.click()
    }

    async assertHelmetsURL() {
        await expect(this.page).toHaveURL('https://www.dainese.com/pl/en/helmets/')
    }

    async openMenuTabLeatherSuits() {
        await this.mainMenu.tabMotorbike.hover()
        await this.mainMenu.categoryWoman.click()
        await this.mainMenu.subCategoryLeatherSuits.click()
    }

    async assertLeatherSuits() {
        await expect(this.page).toHaveURL('https://www.dainese.com/pl/en/women/women-leather-suits/')
    }

    async openMenuTabBackProtectors() {
        await this.mainMenu.tabWintersports.click()
        await this.mainMenu.subCategoryMens.click()
        await this.mainMenu.subCategoryBackProtectors.click()
    }

    async assertBackProtectors() {
        await expect(this.page).toHaveURL('https://www.dainese.com/pl/en/ski-safety/back/')
    }

    async visit() {
        await this.page.goto("/")
    }

    async clickOnLogo() {
        await this.responsiveLogo.click()
    }

    async openFooterContact() {
        await this.footer.contactList.click()
    }

    async assertFooterContact() {
        await expect(this.page).toHaveURL('https://www.dainese.com/pl/en/dainese/contact-us/contact-dainese.html')
    }

    async openFooterFAQ() {
        await this.footer.faqList.click()
    }

    async assertFooterFAQ() {
        await expect(this.page).toHaveURL('https://www.dainese.com/pl/en/general-faq.html')
    }

    async openFooterPayments() {
        await this.footer.paymentsList.click()
    }

    async assertFooterPayments() {
        await expect(this.page).toHaveURL('https://www.dainese.com/pl/en/general-faq.html?section=payments')
    }

    async openFooterShipping() {
        await this.footer.shippingList.click()
    }

    async assertFooterShipping() {
        await expect(this.page).toHaveURL('https://www.dainese.com/pl/en/general-faq.html?section=shipping')
    }

    async openReturnPolicy() {
        await this.footer.returnList.click()
    }

    async assertReturnPolicy() {
        await expect(this.page).toHaveURL('https://www.dainese.com/pl/en/general-faq.html?section=returns')
    }

    async openTerms() {
        await this.footer.termsList.click()
    }

    async assertTerms() {
        await expect(this.page).toHaveURL('https://www.dainese.com/pl/en/terms-and-conditions.html')
    }

    async openOrders() {
        await this.footer.ordersList.click()
    }

    async assertOrders() {
        await expect(this.page).toHaveURL('https://www.dainese.com/on/demandware.store/Sites-Dainese_ROW-Site/en_PL/Login-Show?rurl=1')
    }

    async assertFooterWarranty() {
        await expect(this.page).toHaveURL('https://warranty.dainese.com/registration')
    }

    async assertFooterProductFAQ() {
        await expect(this.page).toHaveURL('https://www.dainese.com/pl/en/product-faq.html')
    }

    async assertFooterCleaning() {
        await expect(this.page).toHaveURL('https://www.dainese.com/pl/en/product-faq.html?section=garment-cleaning')
    }

    async assertFooterTechnology() {
        await expect(this.page).toHaveURL('https://www.dainese.com/pl/en/technologies/')
    }

}




