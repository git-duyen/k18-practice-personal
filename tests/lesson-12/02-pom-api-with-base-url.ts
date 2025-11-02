import { APIRequestContext } from '@playwright/test';

export class TodoApiPage {
    request: APIRequestContext;
    baseUrl: string;

    constructor(request: APIRequestContext, baseUrl: string) {
        this.request = request;
        this.baseUrl = baseUrl;
    }
}