import { test, expect } from '@playwright/test'
import { getRandomString } from '../../utils/data-helpers'

test.describe.parallel('API Testing', () => {
    const baseUrl = 'https://www.dainese.com'

    test('API Test - Response Status', async ({ request }) => {
        const response = await request.get(`${baseUrl}/pl/en/motorbike/jackets`)
        expect(response.status()).toBe(200)
    })

    test('API Test - Assert Invalid Endpoint', async ({ request }) => {
        const response = await request.get(`${baseUrl}/non-existing-endpoint`)
        expect(response.status()).toBe(404)
    })

    test('POST Request - Login', async ({ request }) => {
        const response = await request.post(`${baseUrl}/on/demandware.store/Sites-Dainese_ROW-Site/en_PL/Login-Show`, {
            data: {
                email: 'mecaxa4624@soombo.com',
                password: 'Haslo1234',
            },
        })
        expect(response.status()).toBe(200)
    })

    test('POST Request - Login Fail', async ({ request }) => {
        const randomPassword = await getRandomString()
        const response = await request.post(`${baseUrl}/on/demandware.store/Sites-Dainese_ROW-Site/en_PL/Login-Show`, {
            data: {
                email: 'invalid@invamvnmvlid.com',
                password: randomPassword
            },
        })
        expect(response.status()).toBe(400)
    })

})