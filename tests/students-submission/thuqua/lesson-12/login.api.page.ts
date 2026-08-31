import { APIRequestContext, expect } from "@playwright/test";

export class LoginApiPage {
  request: APIRequestContext;
  baseUrl: string;
  adminEmail: string;
  adminPassword: string;
  userEmail: string;
  userPassword: string;

  constructor(request: APIRequestContext) {
    this.request = request;
    this.baseUrl = "https://material.playwrightvn.com/api/user-management/v1";
    this.adminEmail = "admin@example.com";
    this.adminPassword = "password";
    this.userEmail = "john@example.com";
    this.userPassword = "password";
  }

  async login(email: string, password: string) {
    const response = await this.request.post(`${this.baseUrl}/login.php`, {
      data: {
        email: email,
        password: password,
      },
    });

    const status = response.status();
    const responseBody = await response.json();
    const token = responseBody.data ? responseBody.data.token : undefined;

    return {
      status: status,
      token: token,
    };
  }

  async loginAsAdmin() {
    return this.login(this.adminEmail, this.adminPassword);
  }

  async loginAsUser() {
    return this.login(this.userEmail, this.userPassword);
  }
}
