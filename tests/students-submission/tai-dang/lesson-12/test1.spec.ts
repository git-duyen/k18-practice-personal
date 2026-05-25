import { test, expect } from '@playwright/test';
import { UserManagementApiPage, LoginCredentials } from './user-management.api.page';

test.describe('User Management API - Login Tests', () => {
    let apiPage: UserManagementApiPage;

    const adminCredentials: LoginCredentials = {
        email: 'admin@example.com',
        password: 'password'
    };

    const userCredentials: LoginCredentials = {
        email: 'john@example.com',
        password: 'password'
    };

    test.beforeEach(async ({ request }) => {
        apiPage = new UserManagementApiPage(request);
    });

    test('Login admin success', async () => {
        // Verify admin login successfully and token is returned
        const adminToken = await apiPage.login(adminCredentials);
        
        expect(adminToken).toBeDefined();
        expect(typeof adminToken).toBe('string');
        expect(adminToken.length).toBeGreaterThan(0);
    });

    test('Login user success', async () => {
        // Verify user login successfully and token is returned
        const userToken = await apiPage.login(userCredentials);
        
        expect(userToken).toBeDefined();
        expect(userToken.length).toBeGreaterThan(0);
    });
});
