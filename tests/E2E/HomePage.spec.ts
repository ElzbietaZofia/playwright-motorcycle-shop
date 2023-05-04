import { test, expect } from '@playwright/test'
import { LoginPage } from '../../page-objects/LoginPage'
import { HomePage } from '../../page-objects/HomePage'
import { FooterComponent } from '../../components/footer.components'

test.describe("Home page main menu", () => {
	let loginPage: LoginPage
	let homePage: HomePage

	test.beforeEach(async ({ page }) => {
		loginPage = new LoginPage(page)
		homePage = new HomePage(page)
		await homePage.visit()
	})

	test('Open Helmets subcategory', async ({ page }) => {

		await homePage.acceptCookiesHomePage()
		await homePage.openMenuTabHelmets()
		await homePage.assertHelmetsURL()
	})

	test('Open Leather Suits subcategory', async ({ page }) => {
		await homePage.acceptCookiesHomePage()
		await homePage.openMenuTabLeatherSuits()
		await homePage.assertLeatherSuits()
	})

	test('Open Back Protectors subcategory', async ({ page }) => {
		await homePage.acceptCookiesHomePage()
		await homePage.openMenuTabBackProtectors()
		await homePage.assertBackProtectors()
	})

})

test.describe("Footer PRODUCTS test", () => {
	let loginPage: LoginPage
	let homePage: HomePage
	let footerComponent: FooterComponent

	test.beforeEach(async ({ page }) => {
		loginPage = new LoginPage(page)
		homePage = new HomePage(page)
		footerComponent = new FooterComponent(page)

		await homePage.visit()
	})

	test('Open Footer Warranty List', async ({ page }) => {
		footerComponent.clickOnLabel('Waranty List')
		await homePage.assertFooterWarranty()
	})

	test('Open Footer Products FAQ', async ({ page }) => {
		footerComponent.clickOnLabel('Product FAQ')
		await homePage.assertFooterProductFAQ()
	})

	test('Open Footer Cleaning List', async ({ page }) => {
		footerComponent.clickOnLabel('Cleaning List')
		await homePage.assertFooterCleaning()
	})

	test('Open Footer Technology List', async ({ page }) => {
		footerComponent.clickOnLabel('Technology List')
		await homePage.assertFooterTechnology()
	})


})

test.describe("Footer HELP tests", () => {
	let loginPage: LoginPage
	let homePage: HomePage

	test.beforeEach(async ({ page }) => {
		loginPage = new LoginPage(page)
		homePage = new HomePage(page)
		await homePage.visit()
	})

	test('Open Footer Contact', async ({ page }) => {
		await homePage.openFooterContact()
		await homePage.assertFooterContact()
	})

	test('Open Footer FAQ', async ({ page }) => {
		await homePage.openFooterFAQ()
		await homePage.assertFooterFAQ()
	})

	test('Open Footer Payments', async ({ page }) => {
		await homePage.openFooterPayments()
		await homePage.assertFooterPayments()
	})

	test('Open Footer Shipping', async ({ page }) => {
		await homePage.openFooterShipping()
		await homePage.assertFooterShipping()
	})

	test('Open Footer Return Policy', async ({ page }) => {
		await homePage.openReturnPolicy()
		await homePage.assertReturnPolicy()
	})

	test('Open Footer Terms', async ({ page }) => {
		await homePage.openTerms()
		await homePage.assertTerms()
	})

	test('Open Footer Orders', async ({ page }) => {
		await homePage.openOrders()
		await homePage.assertOrders()
	})

})
