import { Page } from "@playwright/test";

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

}





