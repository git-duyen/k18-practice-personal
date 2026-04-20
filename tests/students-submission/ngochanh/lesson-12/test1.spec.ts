import { expect, test } from '@playwright/test'
import { LogIn } from './test1.api.page';

test('Login success', async ({ request }) => {
    const logInRequest = new LogIn(request);
    await test.step('Login Admin', async () => {
        const email = 'admin@example.com';
        const password = 'password';

        const responseJson = await logInRequest.logIn(email, password);
        expect(responseJson.data.token).toBeTruthy();
    })

    await test.step('Login User', async () => {
        const email = 'john@example.com';
        const password = 'password';

        const responseJson = await logInRequest.logIn(email, password);
        expect(responseJson.data.token).toBeTruthy();
    })
})