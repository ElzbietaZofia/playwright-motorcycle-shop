import { expect, Page } from '@playwright/test'

export class CartPage {

    constructor(private page: Page) { }

    menuTabMotorbike = this.page.locator('#menu-main-menu').getByText('Motorbike')
    motorbikeTabJackets = this.page.getByRole('listitem').filter({ hasText: 'Motorbike SHOP Mens Riding Gear Leather Suits Jackets Gloves Boots Shoes Pants H' }).getByRole('link', { name: 'Jackets' }).first()
    itemJacket = this.page.getByTitle('HEKLA ABSOLUTESHELL™ PRO 20K JACKET', { exact: true })
    itemJacketSize = this.page.locator('span').filter({ hasText: '44' }).nth(1)
    removeItemTextButton = this.page.getByRole('button', { name: 'Remove product SPRINGBOK 3L ABSOLUTESHELL™ JACKET' })
    yesRemoveModalButton = this.page.locator('div.modal:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > button:nth-child(2)')


    addToCartButton = this.page.getByRole('button', { name: 'Add to Cart' })
    menuTabWintersports = this.page.getByText('Winter Sports')
    winterTabGloves = this.page.getByRole('listitem').filter({ hasText: 'Winter Sports SHOP Mens Clothing Jackets Gloves Ski Pants Technical layers All P' }).getByRole('link', { name: 'Gloves', exact: true }).first()
    itemGloves = this.page.getByTitle('HP GLOVES', { exact: true })
    itemGlovesSize = this.page.locator('.varAttr-wrapper > .attribute > #size-1 > div:nth-child(3) > .size-value')
    cartIcon = this.page.getByRole('link', { name: 'Cart 1 Items' })
    paymentButton = this.page.getByRole('button', { name: 'Continue to Payment' })
    checkoutLoggedoutCustomerHeading = this.page.getByRole('heading', { name: 'Customer' })

    cartItemField1 = this.page.locator('.col-lg-7').first()
    cartItemField2 = this.page.locator('div:nth-child(2) > div:nth-child(3) > .col-lg-7')
    cartTotalPrice = this.page.locator('.product-price')

    async addingItemsToCart() {
        await this.menuTabMotorbike.click()
        await this.motorbikeTabJackets.click()
        await this.itemJacket.click()
        await this.itemJacketSize.click()
        await this.addToCartButton.click()
        await this.menuTabWintersports.click()
        await this.winterTabGloves.click()
        await this.itemGloves.click()
        await this.itemGlovesSize.click()
        await this.addToCartButton.click()
    }
    async assertItemsInCart() {
        await expect.soft(this.cartItemField1).toBeVisible()
        await expect.soft(this.cartItemField2).toBeVisible()
    }

    async removingItemsFromCart() {
        await this.cartIcon.click()
        await this.removeItemTextButton.click()
        await this.yesRemoveModalButton.click()
    }
    async assertCartAfterRemoving() {
        await expect(this.cartTotalPrice).toHaveText('€ 149,95')
    }

}