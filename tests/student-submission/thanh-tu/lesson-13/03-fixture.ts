import { test as base, expect } from '@playwright/test';
import { MaterialPage, RegisterPage, ProductPage, TodoPage, PersonalNotePage } from './03-pom';

type MaterialFixture = {
  materialPage: MaterialPage;
  registerPage: RegisterPage;
  productPage: ProductPage;
  todoPage: TodoPage;
  personalNotePage: PersonalNotePage;
};

export const test = base.extend<MaterialFixture>({
  materialPage: async ({ page }, use) => {
    const materialPage = new MaterialPage(page);
    materialPage.openMaterialPage();
    await expect(
      page.getByRole('heading', {
        name: 'Tài liệu học automation test',
      }),
    ).toBeVisible();

    await use(materialPage);

    console.log('End of Test');
  },
  registerPage: async ({ page, materialPage }, use) => {
    const registerPage = new RegisterPage(page);

    await registerPage.gotoPage('register');

    await use(registerPage);
  },

  productPage: async ({ page, materialPage }, use) => {
    const productPage = new ProductPage(page);

    await productPage.gotoPage('product');

    await use(productPage);
  },

  todoPage: async ({ page, materialPage }, use) => {
    const todoPage = new TodoPage(page);

    await todoPage.gotoPage('todo');

    await use(todoPage);
  },

  personalNotePage: async ({ page, materialPage }, use) => {
    const personalNotePage = new PersonalNotePage(page);

    await personalNotePage.gotoPage('note');

    await use(personalNotePage);
  },
});


export { expect } from '@playwright/test';
