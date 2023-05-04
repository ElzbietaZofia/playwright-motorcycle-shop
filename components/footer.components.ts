import { Page, expect, Locator } from "@playwright/test";

export class FooterComponent {
    constructor(private page: Page) { }

    helpContainer = this.page.locator('#menu-footer-menu li')
    productsContainer = this.page.locator('#menu-footer-menu').getByText('Products Warranty Dainese Authentic FAQ - Products Cleaning & Treatment Technolo')
    daineseContainer = this.page.locator('#menu-footer-menu').getByText('Dainese Press Area Retailer Area Dainese Stores Dainese ARchivio Careers Code of')

    contactList = this.page.getByRole('link', { name: 'Contact us' })
    faqList = this.page.getByRole('link', { name: 'FAQ - Ecommerce' })
    paymentsList = this.page.getByRole('link', { name: 'Payments' })
    shippingList = this.page.getByRole('link', { name: 'Shipping' })
    returnList = this.page.getByRole('link', { name: 'Return Policy' })
    termsList = this.page.getByRole('link', { name: 'Terms & Conditions' })
    ordersList = this.page.getByRole('link', { name: 'My orders' })

    warrantyList = this.page.getByRole('link', { name: 'Warranty' })
    productsFAQList = this.page.getByRole('link', { name: 'FAQ - Products' })
    cleaningList = this.page.getByRole('link', { name: 'Cleaning & Treatment' })
    technologyList = this.page.locator('#menu-footer-menu').getByRole('link', { name: 'Technology & Materials' })
    docsList = this.page.getByRole('link', { name: 'Conformity Docs' })
    customList = this.page.getByRole('link', { name: 'Custom Works' })

    async clickOnLabel(labelName) {
        switch (labelName) {
            case 'Warranty List':
                await this.warrantyList.click()
                break
            case 'Product FAQ':
                await this.productsFAQList.click()
                break
            case 'Cleaning List':
                await this.cleaningList.click()
                break
            case 'Technology List':
                await this.technologyList.click()
                break
            
        }
    }


}



