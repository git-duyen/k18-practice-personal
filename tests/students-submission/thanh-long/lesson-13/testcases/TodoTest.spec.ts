import { test } from '../fixture.ts'; 
import { TodoPage } from '../pages/TodoPage.ts';



test('Register Page', async ({ page, materialPage }) => {
    const todoPage = new TodoPage(page);
    
    await materialPage.gotoPage('Todo Page');

    await todoPage.acceptDialog();

    await todoPage.add100Task('Task 1');
    await todoPage.deleteOddTask(); 
    
    await todoPage.verifyTask90InViewport();
    await todoPage.verifyTask21NotInViewport();
});