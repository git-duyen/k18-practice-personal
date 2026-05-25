import { APIRequestContext, expect } from '@playwright/test';

export interface LoginCredentials {
    email: string;
    password: string;
}

export interface User {
    name: string;
    email: string;
    password: string;
    facebook: string;
    avatar: string;
    hobbies: string;
    role: string;
}

export class UserManagementApiPage {
    private request: APIRequestContext;
    private baseUrl: string = 'https://material.playwrightvn.com/api/user-management/v1';

    constructor(request: APIRequestContext) {
        this.request = request;
    }

    /**
     * Login user and get authentication token
     * @param credentials - Login credentials (email and password)
     * @returns Token string for authenticated requests
     */
    async login(credentials: LoginCredentials): Promise<string> {
        const loginResponse = await this.request.post(`${this.baseUrl}/login.php`, {
            data: credentials
        });

        expect(loginResponse.status()).toBe(200);
        
        const loginResponseBody = await loginResponse.json();
        expect(loginResponseBody.data.token).toBeDefined();
        
        return loginResponseBody.data.token;
    }

    /**
     * Create a new user
     * @param userData - User information
     * @param token - Admin authentication token
     * @returns Created user data with ID
     */
    async createUser(userData: User, token: string): Promise<any> {
        const createUserResponse = await this.request.post(`${this.baseUrl}/users.php`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
            data: userData
        });

        expect(createUserResponse.status()).toBe(201);
        
        const createUserResponseBody = await createUserResponse.json();
        expect(createUserResponseBody.user).toBeDefined();
        expect(createUserResponseBody.user.id).toBeDefined();
        
        return createUserResponseBody.user;
    }

    /**
     * Get all users
     * @param token - Admin authentication token
     * @returns Array of users
     */
    async getAllUsers(token: string): Promise<any[]> {
        const getUsersResponse = await this.request.get(`${this.baseUrl}/users.php`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });

        expect(getUsersResponse.status()).toBe(200);
        
        const getUsersResponseBody = await getUsersResponse.json();
        expect(Array.isArray(getUsersResponseBody.users)).toBeTruthy();
        expect(getUsersResponseBody.users.length).toBeGreaterThan(0);
        
        return getUsersResponseBody.users;
    }

    /**
     * Get a specific user by ID
     * @param userId - User ID
     * @param token - Admin authentication token
     * @returns User data
     */
    async getUserById(userId: number, token: string): Promise<any> {
        const getUserResponse = await this.request.get(`${this.baseUrl}/user.php?id=${userId}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });

        expect(getUserResponse.status()).toBe(200);
        
        const getUserResponseBody = await getUserResponse.json();
        expect(getUserResponseBody.user).toBeDefined();
        
        return getUserResponseBody.user;
    }

    /**
     * Update user information
     * @param userId - User ID to update
     * @param userData - Updated user information
     * @param token - Admin authentication token
     * @returns Updated user data
     */
    async updateUser(userId: number, userData: Partial<User>, token: string): Promise<any> {
        const updateUserResponse = await this.request.put(`${this.baseUrl}/user.php?id=${userId}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
            data: userData
        });

        expect(updateUserResponse.status()).toBe(200);
        
        const updateUserResponseBody = await updateUserResponse.json();
        expect(updateUserResponseBody.user).toBeDefined();
        
        return updateUserResponseBody.user;
    }

    /**
     * Delete a user
     * @param userId - User ID to delete
     * @param token - Admin authentication token
     * @returns Response from delete
     */
    async deleteUser(userId: number, token: string): Promise<any> {
            const deleteUserResponse = await this.request.delete(`${this.baseUrl}/users.php`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
            data: {
                    id: userId
                }
        });
        const deleteUserResponseBody = await deleteUserResponse.json();
        expect(deleteUserResponse.status()).toBe(200);

        return deleteUserResponseBody;
    }

    /**
     * Generate random user data for testing
     * @returns Random user object
     */
    static generateRandomUser(): User {
        const randomPrefix = Math.random().toString(36).substring(2, 10);
        return {
            name: `TestUser${randomPrefix}`,
            email: `testuser${randomPrefix}@example.com`,
            password: 'password123',
            facebook: 'https://facebook.com/testuser',
            avatar: 'https://i.pravatar.cc/150?img=20',
            hobbies: 'coding, testing',
            role: 'user'
        };
    }
}
