import { Page } from "@playwright/test";

export class MainMenuComponent {
    constructor(private page: Page) { }



    tabMotorbike = this.page.locator('#menu-main-menu').getByText('Motorbike')
    categoryWoman = this.page.getByText('Womens').first()
    subCategoryHelmets = this.page.getByRole('listitem').filter({ hasText: 'Motorbike SHOP Mens Riding Gear Leather Suits Jackets Gloves Boots Shoes Pants H' }).getByRole('link', { name: 'Helmets' }).nth(1)
    subCategoryLeatherSuits = this.page.getByRole('link', { name: 'Leather Suits' }).nth(1)
    tabWintersports = this.page.getByText('Winter Sports', { exact: true })
    subCategoryMens = this.page.getByText('Mens').nth(2)
    subCategoryBackProtectors = this.page.getByRole('link', { name: 'Back protectors' }).nth(2)
    subCategoryGoggles = this.page.getByRole('link', { name: 'Goggles' }).first()

}