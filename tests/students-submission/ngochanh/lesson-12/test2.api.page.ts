import { APIRequestContext, expect } from '@playwright/test'

export class CreateUser {
    request: APIRequestContext;
    baseURL = 'https://material.playwrightvn.com/api/user-management/v1';

    constructor(request: APIRequestContext) {
        this.request = request;
    }

    async logIn(email: string, password: string) {
        const response = await this.request.post(`${this.baseURL}/login.php`, {
            data: {
                email: email,
                password: password
            }
        });
        expect(response.status()).toBe(200);
        const responseJson = await response.json();
        return responseJson;
    }

    async deleteUser(token: string, id: number) {
        const response = await this.request.delete(`${this.baseURL}/users.php`, {
            headers: {
                'Authorization': `Bearer ${token}`
            },
            data: {
                id: id
            }
        })
        expect(response.status()).toBe(200);
        const responseJson = await response.json();
        return responseJson;
    }

    // async createUser(token: string, name: string, email: string, password: string, facebook: string, avatar: string, hobbies: string, role: string) {
    //     const response = await this.request.post(`${this.baseURL}/users.php`, {
    //         headers: {
    //             'Authorization': `Bearer ${token}`,
    //         },
    //         data: {
    //             name: name,
    //             email: email,
    //             password: password,
    //             facebook: facebook,
    //             avatar: avatar,
    //             hobbies: hobbies,
    //             role: role
    //         }
    //     })
    //     expect(response.status()).toBe(201);
    //     const responseJson = await response.json();
    //     return responseJson;
    // }

    async createUser(token: string, userData: { name: string; email: string; password: string; facebook?: string; avatar?: string; hobbies?: string; role: string; }) {
        const response = await this.request.post(`${this.baseURL}/users.php`, {
            headers: { 'Authorization': `Bearer ${token}` },
            data: userData
        });
        expect(response.status()).toBe(201);
        const responseJson = await response.json();
        return responseJson;
    }

    async getUser(token: string) {
        const response = await this.request.get(`${this.baseURL}/users.php`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        expect(response.status()).toBe(200);
        const responseJson = await response.json();
        return responseJson;
    }
}