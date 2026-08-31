import {test, expect} from '@playwright/test';
import {TodoApiPage } from './01-todo.api.page';

test( 'Get all todos', async ({request}) => {
    const todoApiPage = new TodoApiPage(request);
    const responseJson = await todoApiPage.getAll();

    expect(responseJson.todos.length).toEqual(8);
});

test( 'Get todo with id = 3', async ({request}) => {
    const todoApiPage = new TodoApiPage(request);
    const responseJson = await todoApiPage.getTodo(3);
    console.log(responseJson);

    expect(responseJson.todo.title).toContain("Update");
    expect(responseJson.todo.priority).toEqual("low");
});

