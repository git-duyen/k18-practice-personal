import {test} from '@playwright/test';

test("1.Create todo", async ({request})=> {
   const response = await request.post('https://material.playwrightvn.com/api/todo-app/v1/todo.php', {
      data: {
         "title": "Van DT",
         "description": "Kk",
         "status": "pending",
         "priority": "high",
         "due_date": "2025-10-25T17:00:00",
         "user_id": 1
      }
   });
   const responseJson = await response.json();
   console.log(responseJson);
})