import { APIRequestContext, expect, request } from "@playwright/test";
import { InfoUser } from "./user.type";

export class LoginPage {
  request: APIRequestContext;
  baseURL: string;

  constructor(request: APIRequestContext) {
    this.request = request;
    this.baseURL =
      "https://material.playwrightvn.com/api/user-management/v1/login.php";
  }

  async login(infoLogin: InfoUser) {
    const response = await this.request.post(this.baseURL, {
      data: infoLogin,
    });

    expect(response.status()).toBe(200);
    const body = await response.json();
    return body;
  }
}
