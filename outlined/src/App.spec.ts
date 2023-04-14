import { test, expect } from '@playwright/experimental-ct-svelte'
import Notify from './components/misc/Notify.svelte'

test.use(
	{
		viewport: { width: 500, height: 500}
	});

test("Notify", async ({mount})) => {
	const notify = await mount(Notify);
	await expect(notify).toContainText("null");
}

