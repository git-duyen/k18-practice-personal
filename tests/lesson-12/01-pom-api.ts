import { APIRequestContext } from '@playwright/test';

export class TodoApiPage {
    request: APIRequestContext;

    constructor(request: APIRequestContext) {
        this.request = request;
    }
}