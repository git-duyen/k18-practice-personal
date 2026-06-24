import { APIRequestContext, expect } from "@playwright/test";

export class UserApiPage {
    request: APIRequestContext;
    baseUrl: string;
    token: string = "";

    constructor(request: APIRequestContext) {
        this.request = request;
        this.baseUrl = "https://material.playwrightvn.com/api/user-management/v1";
    }

    async login(email: string, password: string) {
        const response = await this.request.post(`${this.baseUrl}/login.php`,
            {
                data: {
                    email,
                    password,
                },
            }
        );

        expect(response.status()).toBe(200);
        const responseJson = await response.json();
        this.token = responseJson.data.token;
        return responseJson;
    }

    async createUser(userData: object) {
        const response = await this.request.post(`${this.baseUrl}/users.php`,
            {
                headers: {
                    Authorization: `Bearer ${this.token}`,
                },
                data: userData,
            }
        );

        expect(response.status()).toBe(201);

        return await response.json();
    }
    async getUsers() {
        const response = await this.request.get(`${this.baseUrl}/users.php`,
            {
                headers: {
                    Authorization: `Bearer ${this.token}`,
                },
            }
        );
        expect(response.status()).toBe(200);

        return await response.json();
    }

    async deleteUser(id: number) {
        const response = await this.request.delete(`${this.baseUrl}/users.php`,
            {
                headers: {
                    Authorization: `Bearer ${this.token}`,
                },
                data: { id },
            }
        );
        expect(response.status()).toBe(200);
        return await response.json();
    }
}
