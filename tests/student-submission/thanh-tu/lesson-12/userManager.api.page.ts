import { APIRequestContext, expect } from '@playwright/test';

export interface CreateUserPayload {
  name: string;
  email: string;
  password: string;
  facebook: string;
  avatar: string;
  hobbies: string;
  role: 'user' | 'admin';
}

export interface User extends CreateUserPayload {
  id: string;
}

export class UserManagementApiPage {
  request: APIRequestContext;
  baseURL: string;

  constructor(request: APIRequestContext) {
    this.request = request;
    this.baseURL = 'https://material.playwrightvn.com/api/user-management/v1';
  }

  async login(email: string, password: string) {
    const res = await this.request.post(this.baseURL + '/login.php', {
      data: {
        email,
        password,
      },
    });
    expect(res.status()).toBe(200);
    return res.json();
  }

  async createUser(data: CreateUserPayload, token: string): Promise<User> {
    const res = await this.request.post(this.baseURL + '/users.php', {
      headers: { authorization: `Bearer ${token}` },
      data,
    });
    expect(res.status()).toBe(201);
    const json = await res.json();
    expect(json).toHaveProperty('user');
    return json.user;
  }

  async getUsers(token: string) {
    const res = await this.request.get(this.baseURL + '/users.php', {
      headers: { authorization: `Bearer ${token}` },
    });
    expect(res.status()).toBe(200);
    const json = await res.json();
    return json.users;
  }

  async deleteUser(id: string, token: string) {
    const res = await this.request.delete(this.baseURL + '/users.php', {
      headers: { authorization: `Bearer ${token}` },
      data: { id },
    });
    expect(res.ok()).toBeTruthy();
  }
}
