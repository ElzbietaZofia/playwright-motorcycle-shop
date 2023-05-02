import { test, expect } from '@playwright/test'
import { LoginPage } from '../../page-objects/LoginPage'
import { HomePage } from '../../page-objects/HomePage'
import { CartPage } from '../../page-objects/Cart'

test.describe("Cart", () => {
    let loginPage: LoginPage
    let homePage: HomePage
    let cartPage: CartPage

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page)
        homePage = new HomePage(page)
        cartPage = new CartPage(page)

        await homePage.visit()
    })


    test("Adding and removing items logged out user", async ({ page }) => {

        await cartPage.addingItemsToCart()
        await cartPage.assertItemsInCart()
        await cartPage.removingItemsFromCart()
        await cartPage.assertCartAfterRemoving()
    })

    test('Adding and removing items logged in user', async ({ page }) => {

        const userEmailValid = "mecaxa4624@soombo.com"
        const userPasswordValid = "Haslo1234"

        await loginPage.login(userEmailValid, userPasswordValid)
        await cartPage.addingItemsToCart()
        await cartPage.assertItemsInCart()
        await cartPage.removingItemsFromCart()
        await cartPage.assertCartAfterRemoving()
    })


})
