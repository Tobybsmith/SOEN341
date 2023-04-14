import { test, expect } from '@playwright/test';

test("Try to create a Notify component", async ({ page }) =>
     {
	     //The main route
	     await page.goto('/');
	     const result = await page.getByTestId("mission-statement");
	     expect(result).textContent("Unknown Error!");
     });
