import { test, expect } from "@playwright/test";

const ORIGIN = "http://localhost:4173";

test.describe("Navigation and routes", () => {
	test("nav links scroll to their sections", async ({ page }) => {
		await page.goto("/");

		await page.getByRole("link", { name: "About me" }).click();
		await expect(page).toHaveURL(/#about/);
		await expect(page.locator("#about")).toBeInViewport();

		await page.getByRole("link", { name: "Experience" }).click();
		await expect(page).toHaveURL(/#experience/);
		await expect(page.locator("#experience")).toBeInViewport();

		await page.getByRole("link", { name: "Contact" }).click();
		await expect(page).toHaveURL(/#contact/);
		await expect(page.locator("#contact")).toBeInViewport();
	});

	test("brand logo returns to the homepage", async ({ page }) => {
		await page.goto("/");
		await page.getByRole("link", { name: "kokutaro.dev" }).click();
		await expect(page).toHaveURL("/");
	});

	test("renders footer copyright and 88 buttons", async ({ page }) => {
		await page.goto("/");
		await expect(
			page.getByText("© 2026 Frederick Vigilia."),
		).toBeVisible();

		const buttonAlts = [
			"1 gif",
			"anime gif",
			"archlinux gif",
			"bikobatanari gif",
			"gameboy png",
		];
		for (const alt of buttonAlts) {
			const img = page.getByAltText(alt);
			await expect(img).toBeVisible();
			await expect
				.poll(
					() =>
						img.evaluate(
							(el) =>
								(el as HTMLImageElement).complete &&
								(el as HTMLImageElement).naturalWidth > 0,
						),
					{ timeout: 5_000 },
				)
				.toBe(true);
		}
	});

	test("/projects loads", async ({ page }) => {
		await page.goto("/projects");
		await expect(page).toHaveURL(/\/projects/);
		await expect(page.getByText("/projects")).toBeVisible();
		await expect(
			page.getByRole("heading", {
				name: "More projects are under construction.",
			}),
		).toBeVisible();
	});

	test("/gear loads and lists gear cards", async ({ page }) => {
		await page.goto("/gear");
		await expect(
			page.getByRole("heading", { name: "My Gear!" }),
		).toBeVisible();
		for (const name of [
			"MacBook Air M1",
			"UGREEN Uno 6-in-1 Hub (Violet)",
			"ASUS TUF VG279QE5A",
			"Gen 75 Elecfox Keyboard",
			"Rakk Alti Mouse",
			"Hand-built 60% Ortholinear Keyboard",
		]) {
			await expect(page.getByRole("heading", { name })).toBeVisible();
		}
	});

	test("/sitemap.xml lists the site routes", async ({ request }) => {
		const res = await request.get(`/sitemap.xml`);
		expect(res.ok()).toBeTruthy();
		const body = await res.text();
		expect(body).toContain(
			'<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
		);
		for (const url of [
			"https://kokutaro.dev/",
			"https://kokutaro.dev/projects",
			"https://kokutaro.dev/gear",
		]) {
			expect(body).toContain(`<loc>${url}</loc>`);
		}
	});
});

test.describe("Static export integrity", () => {
	for (const path of ["/", "/projects", "/gear"]) {
		test(`${path} loads without JS errors or broken same-origin requests`, async ({
			page,
		}) => {
			// Pending asset the owner is adding; treat its 404 as known for now.
			const allowedMissing =
				path === "/gear" ? new Set([`${ORIGIN}/custom_keeb.webp`]) : null;

			const problems: string[] = [];
			page.on("pageerror", (err) =>
				problems.push(`pageerror: ${err.message}`),
			);
			page.on("response", (res) => {
				if (
					res.status() >= 400 &&
					res.url().startsWith(ORIGIN)
				) {
					problems.push(`${res.status()} ${res.url()}`);
				}
			});

			await page.goto(path);
			await expect(page.locator("main")).toBeVisible();
			// Let deferred loads (sounds, images) settle before asserting.
			await page.waitForTimeout(1500);

			const blocking = problems.filter((problem) => {
				if (allowedMissing && problem.startsWith("404 ")) {
					const url = problem.slice("404 ".length);
					if (allowedMissing.has(url)) return false;
				}
				return true;
			});
			expect(blocking).toEqual([]);
		});
	}
});