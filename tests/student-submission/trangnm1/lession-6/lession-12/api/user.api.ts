import { APIRequestContext, expect } from "@playwright/test";

export class UserAPI {
    constructor(
        private request: APIRequestContext,
        private token: string
    ) { }
    async createUser(
        name: string,
        email: string,
        password: string,
        facebook: string,
        avatar: string,
        hobbies: string,
        role: string
    ) {
        const response = await this.request.post(
            "https://material.playwrightvn.com/api/user-management/v1/users.php",
            {
                headers: {
                    Authorization: `Bearer ${this.token}`,
                },

                data: {
                    name,
                    email,
                    password,
                    facebook,
                    hobbies,
                    role,
                },
            }
        );

        expect(response.status()).toBe(201);

        return await response.json();
    }

    async getUsers() {
        const response = await this.request.get(
            "https://material.playwrightvn.com/api/user-management/v1/users.php",
            {
                headers: {
                    Authorization: `Bearer ${this.token}`,
                },
            }
        );

        expect(response.status()).toBe(200);

        return await response.json();
    }

    async deleteUser(userId: number) {
        const response = await this.request.delete(
            "https://material.playwrightvn.com/api/user-management/v1/users.php",
            {
                headers: {
                    Authorization: `Bearer ${this.token}`,
                },
                data: {
                    "id": userId
                }
            }
        );
        const responseJson = await response.json();
        console.log(responseJson);

        expect(response.status()).toBe(200);
    }
}