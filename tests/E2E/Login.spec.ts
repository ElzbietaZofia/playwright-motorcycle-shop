
import { test, expect } from '@playwright/test'
import { LoginPage } from '../../page-objects/LoginPage'
import { HomePage } from '../../page-objects/HomePage'
import { getRandomString } from '../../utils/data-helpers'
import { loginData } from '../../test-data/login.data'

test.describe("Login and Logout", () => {
	let loginPage: LoginPage
	let homePage: HomePage

	test.beforeEach(async ({ page }) => {
		loginPage = new LoginPage(page)
		homePage = new HomePage(page)

		await homePage.visit()
	})

	const userEmailInvalid = loginData.userEmailInvalid
	const userEmailValid = loginData.userEmailValid
	const userPasswordValid = loginData.userPasswordValid


	test("Negative scenario invalid email and invalid password", async ({ page }) => {

		const randomPassword = await getRandomString()

		await loginPage.login(userEmailInvalid, randomPassword)
		await loginPage.assertLoginErrorMessage()
	})

	test("Negative scenario valid email and invalid password", async ({ page }) => {

		const randomPassword = await getRandomString()

		await loginPage.login(userEmailValid, randomPassword)
		await loginPage.assertLoginErrorMessage()
	})

	test("Negative scenario invalid email and valid password", async ({ page }) => {

		await loginPage.login(userEmailInvalid, userPasswordValid)
		await loginPage.assertLoginErrorMessage()
	})

	test("Negative scenario empty email and empty password", async ({ page }) => {

		await loginPage.login("", "")
		await loginPage.assertEmptyLoginMessage()
		await loginPage.assertEmptyPasswordMessage()
	})

	test("Positive scenario", async ({ page }) => {

		await loginPage.login(userEmailValid, userPasswordValid)
		await loginPage.assertAccountHeader()
		await loginPage.logout()
		await loginPage.assertLogoutUrl()
	})
})


