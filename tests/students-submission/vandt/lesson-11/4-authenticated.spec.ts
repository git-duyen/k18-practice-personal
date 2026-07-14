import {test} from '@playwright/test';

   test("Request method - POST", async ({request})=> {
      const baseURL = "https://material.playwrightvn.com/api/user-management/v1";

      //Login lay ra token
      const loginResponse = await request.post(`${baseURL}/login.php`, {
         data: {
            "email": "admin@example.com",
            "password": "password"
         }
      });

      const loginResponseJson = await loginResponse.json();
      const token = loginResponseJson.data.token;

      //Call api voi token o tren
      const userResponse = await request.get(`${baseURL}/users.php`,{
         headers: {
            Authorization : `Bearer ${token}`
         }
      });

      const userResponseJson = await userResponse.json();
      console.log(userResponseJson);
   });

