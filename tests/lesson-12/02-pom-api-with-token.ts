import { APIRequestContext } from '@playwright/test';

export class TodoApiPage {
    request: APIRequestContext;
    baseUrl: string;
    token: string = '';

    constructor(request: APIRequestContext, baseUrl: string) {
        this.request = request;
        this.baseUrl = baseUrl;
    }

    setToken(token: string) {
        this.token = token;
    }
}