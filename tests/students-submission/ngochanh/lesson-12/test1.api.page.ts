import { APIRequestContext, expect } from '@playwright/test'

export class LogIn {
    request: APIRequestContext;
    baseURL: string = 'https://material.playwrightvn.com/api/user-management/v1/login.php';
    constructor(request: APIRequestContext) {
        this.request = request;
    }
    async logIn(email: string, password: string) {
        const response = await this.request.post(this.baseURL, {
            data: {
                email: email,
                password: password
            }
        });
        expect(response.status()).toBe(200);
        const responseJson = await response.json();
        return responseJson;
    }
}