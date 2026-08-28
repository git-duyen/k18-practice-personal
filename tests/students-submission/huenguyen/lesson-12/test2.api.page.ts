import { APIRequestContext, expect } from "@playwright/test";
import { InfoUser } from "./user.type";

export class CreateUser {
  request: APIRequestContext;
  baseURL: string;

  constructor(request: APIRequestContext) {
    this.request = request;
    this.baseURL = "https://material.playwrightvn.com/api/user-management/v1";
  }

  async login(infoLogin: InfoUser) {
    const response = await this.request.post(`${this.baseURL}/login.php`, {
      data: infoLogin,
    });

    expect(response.status()).toBe(200);
    const body = await response.json();
    return body;
  }

  async delete(id: number) {
    const response = await this.request.delete(`${this.baseURL}/users.php`, {
      data: { id },
    });
    const statusCode = response.status();
    return statusCode;
  }

  async create(infoUser: InfoUser) {
    const response = await this.request.post(`${this.baseURL}/users.php`, {
      data: infoUser,
    });
    expect.soft(response.status()).toBe(201);
    const body = await response.json();
    return body;
  }

  async list() {
    const response = await this.request.get(`${this.baseURL}/users.php`);
    expect.soft(response.status()).toBe(200);
    const body = await response.json();
    return body;
  }
}
