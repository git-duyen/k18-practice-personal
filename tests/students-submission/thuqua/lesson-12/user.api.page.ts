import { APIRequestContext } from "@playwright/test";

export class UserApiPage {
  request: APIRequestContext;
  baseUrl: string;

  defaultUserData: {
    name: string;
    password: string;
    facebook: string;
    avatar: string;
    hobbies: string;
    role: string;
  };

  constructor(request: APIRequestContext) {
    this.request = request;
    this.baseUrl = "https://material.playwrightvn.com/api/user-management/v1";

    this.defaultUserData = {
      name: "New User",
      password: "password",
      facebook: "https://facebook.com/newuser",
      avatar: "https://i.pravatar.cc/150?img=20",
      hobbies: "Reading, Coding",
      role: "user",
    };
  }

  private authHeader(token: string) {
    return {
      Authorization: `Bearer ${token}`,
    };
  }

  async createUser(token: string) {
    const userData = {
      name: this.defaultUserData.name,
      email: `newuser_${Date.now()}@example.com`,
      password: this.defaultUserData.password,
      facebook: this.defaultUserData.facebook,
      avatar: this.defaultUserData.avatar,
      hobbies: this.defaultUserData.hobbies,
      role: this.defaultUserData.role,
    };

    const response = await this.request.post(`${this.baseUrl}/users.php`, {
      headers: this.authHeader(token),
      data: userData,
    });

    const status = response.status();

    const responseBody = await response.json();
    const user = responseBody.user;

    return {
      status: status,
      user: user,
    };
  }

  async getUsers(token: string) {
    const response = await this.request.get(`${this.baseUrl}/users.php`, {
      headers: this.authHeader(token),
    });

    const status = response.status();
    const responseBody = await response.json();

    const users = responseBody.users ? responseBody.users : [];

    return {
      status: status,
      users: users,
    };
  }

  async deleteUser(token: string, userId: number) {
    const response = await this.request.delete(`${this.baseUrl}/users.php`, {
      headers: this.authHeader(token),
      data: {
        id: userId,
      },
    });

    return {
      status: response.status(),
    };
  }
}
