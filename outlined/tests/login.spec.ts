import {test, expect} from '@playwright/test';

test("Attempt to log in with valid creds", async ({page}) =>
     {
	     await page.goto("/login");
	     //Now in login, try to enter credentials
	     const username = await page.getByPlaceholder("name@example.com").fill("tobybsmith121@gmail.com");
	     const pw = await page.getByPlaceholder("enter your password ").fill("password");
	     const lg = await page.getByRole("button").getByTitle("Submit").click();
	     await page.waitForUrl("/main");
	     //Now if we are in main we are logged in, else we are not logged in
	     const mainCriteria = await page.getByTitle("Search by keyword");
	     expect(mainCriteria.textContent("Search by keyword"));
     });
