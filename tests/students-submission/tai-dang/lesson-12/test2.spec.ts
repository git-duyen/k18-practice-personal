import { test, expect } from '@playwright/test';
import { UserManagementApiPage, LoginCredentials, User } from './user-management.api.page';

test.describe('User Management API - Create, Get Users, Verify created user and delete created user after test', () => {
    test.describe.configure({ mode: 'serial' });
    let adminToken: string;
    let createdUserId: number;
    let createdUserEmail: string;

    const adminCredentials: LoginCredentials = {
        email: 'admin@example.com',
        password: 'password'
    };

    test.beforeAll(async ({ request }) => {
        const apiPage = new UserManagementApiPage(request);
        
        // Login with admin credentials to get token
        adminToken = await apiPage.login(adminCredentials);
        expect(adminToken).toBeDefined();
    });

    test('Create user', async ({ request }) => {
        const apiPage = new UserManagementApiPage(request);
        
        await test.step('Generate random user data', async () => {
            // This step is implicit in the next step, but documented here
        });

        await test.step('Create a new user', async () => {
            const newUserData = UserManagementApiPage.generateRandomUser();
            
            const createdUser = await apiPage.createUser(newUserData, adminToken);
            
            expect(createdUser).toBeDefined();
            expect(createdUser.id).toBeDefined();
            
            // Store created user info for later verification
            createdUserId = createdUser.id;
            createdUserEmail = createdUser.email;
            
            console.log('Created user ID:', createdUserId, 'Email:', createdUserEmail);
        });
    });

    test('Get all users and verify created user exists', async ({ request }) => {
        const apiPage = new UserManagementApiPage(request);
        
        await test.step('Retrieve all users', async () => {
            const allUsers = await apiPage.getAllUsers(adminToken);
            
            expect(Array.isArray(allUsers)).toBeTruthy();
            expect(allUsers.length).toBeGreaterThan(0);
            console.log('Total users:', allUsers.length);
        });

        await test.step('Verify created user exists in user list', async () => {
            const allUsers = await apiPage.getAllUsers(adminToken);
            
            // Check if the created user exists in the user list
            const foundUser = allUsers.find((user: any) => 
                user.email === createdUserEmail || user.id === createdUserId
            );
            
            expect(foundUser).toBeDefined();
            console.log('Found created user in list:', JSON.stringify(foundUser, null, 2));
            
            // Verify the user details
            expect(foundUser.email).toBe(createdUserEmail);
            expect(foundUser.id).toBe(createdUserId);
        });
    });

    test.afterAll('Delete created user', async ({ request }) => {
        if (createdUserId) {
            const apiPage = new UserManagementApiPage(request);
            
            await test.step('Delete user', async () => {
                const deleteResponse = await apiPage.deleteUser(createdUserId, adminToken);
                
                expect(deleteResponse).toBeDefined();
                console.log('User deleted successfully:', createdUserEmail);
            });
        }
    });
});
