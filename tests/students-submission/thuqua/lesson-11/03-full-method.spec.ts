import { test } from '@playwright/test';
import { request } from 'http';

test.describe("Full method", async () => {
    let id: any;

    test("1. Create to do", async ({ request }) => {
        const response = await request.post('https://material.playwrightvn.com/api/todo-app/v1/todo.php', {
            data: {
                "title": "Xin chao, toi la Thu Qua",
                "description": "Write comprehensive doc for the API",
                "status": "pending",
                "priority": "high",
                "due_date": "2025-10-25 17:00:00",
                "user_id": 1
            }
        });

        const responseJson = await response.json();
        console.log(responseJson);
        id = responseJson.todo.id;
        console.log(id);
    });

    test("2. Delete todo", async ({ request }) => {
        // Delete todo co id o step 1
        const response = await request.delete('https://material.playwrightvn.com/api/todo-app/v1/todo.php', {
            data: {
                "id": id
            }
        });

        const responseJson = await response.json();
        console.log(responseJson);
    });
})