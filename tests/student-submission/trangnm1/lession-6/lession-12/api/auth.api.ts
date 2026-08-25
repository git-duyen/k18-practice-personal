import { APIRequestContext, expect } from "@playwright/test";

export class AuthAPI {
    constructor(private request: APIRequestContext) {}

    async login(email: string, password: string) {
        const response = await this.request.post(
            "https://material.playwrightvn.com/api/user-management/v1/login.php",
            {
                data: {
                    email,
                    password,
                },
            }
        );

        expect(response.status()).toBe(200);

        const responseJson = await response.json();

        expect(responseJson).toHaveProperty("data.token");

        return responseJson.data.token;
    }
}