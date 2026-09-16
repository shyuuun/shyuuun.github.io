import { test, expect } from "@playwright/test";

test.describe("Home page", () => {
	test.beforeEach(async ({ page }) => {
		await page.goto("/");
	});

	test("renders hero, identity, and all sections", async ({ page }) => {
		await expect(
			page.getByRole("heading", { name: "Frederick Vigilia" }),
		).toBeVisible();
		await expect(
			page.getByText("Software Developer ✧ Hobbyist"),
		).toBeVisible();

		await expect(page.locator("#about")).toBeVisible();
		await expect(page.locator("#projects")).toBeVisible();
		await expect(page.locator("#experience")).toBeVisible();
		await expect(page.locator("#contact")).toBeVisible();
		await expect(page.locator("#github")).toBeVisible();
	});

	test("renders the stats grid", async ({ page }) => {
		const about = page.locator("#about");
		await expect(about.getByText("15")).toBeVisible();
		await expect(about.getByText("Projects")).toBeVisible();
		await expect(about.getByText("2+")).toBeVisible();
		await expect(about.getByText("Years experience")).toBeVisible();
		await expect(about.getByText("100+")).toBeVisible();
		await expect(about.getByText("Coffees enjoyed")).toBeVisible();
	});

	test("shows the profile image with theme-aware alt text", async ({ page }) => {
		await expect(
			page.getByAltText("My cosplay image in dark theme"),
		).toBeVisible();
	});

	test("renders project cards with their status badges", async ({ page }) => {
		const projects = page.locator("#projects");
		await expect(
			projects.getByRole("heading", { name: "Hoppura: Cosplay Community" }),
		).toBeVisible();
		await expect(projects.getByText("In Progress")).toBeVisible();
		await expect(projects.getByText("Closed testing")).toBeVisible();

		await expect(
			projects.getByRole("heading", { name: "Lost in Bytes" }),
		).toBeVisible();
		await expect(projects.getByText("Completed").first()).toBeVisible();

		await expect(
			projects.getByRole("heading", { name: "Philgo" }),
		).toBeVisible();
	});

	test("external project links open in a new tab", async ({ page }) => {
		const hoppura = page.getByRole("link", { name: "Visit hoppura.com" });
		await expect(hoppura).toHaveAttribute("href", "https://hoppura.com");
		await expect(hoppura).toHaveAttribute("target", "_blank");
		await expect(hoppura).toHaveAttribute("rel", "noreferrer");

		const lostInBytes = page.getByRole("link", { name: "Visit Lost in Bytes" });
		await expect(lostInBytes).toHaveAttribute(
			"href",
			"https://lostinbytes.com",
		);
		await expect(lostInBytes).toHaveAttribute("target", "_blank");
		await expect(lostInBytes).toHaveAttribute("rel", "noreferrer");

		const philgoWeb = page.getByRole("link", { name: "Visit Philgo (Web)" });
		await expect(philgoWeb).toHaveAttribute("href", "https://philgo.com");
		await expect(philgoWeb).toHaveAttribute("target", "_blank");
		await expect(philgoWeb).toHaveAttribute("rel", "noreferrer");

		const philgoMobile = page.getByRole("link", {
			name: "Visit Philgo (Mobile)",
		});
		await expect(philgoMobile).toHaveAttribute(
			"href",
			"https://play.google.com/store/apps/details?id=com.withcenter.philgo&hl=en",
		);
		await expect(philgoMobile).toHaveAttribute("target", "_blank");
		await expect(philgoMobile).toHaveAttribute("rel", "noreferrer");
	});

	test("navigates to /projects via the More Projects link", async ({
		page,
	}) => {
		await page.getByRole("link", { name: "More Projects" }).click();
		await expect(page).toHaveURL(/\/projects$/);
		await expect(
			page.getByRole("heading", { name: "Projects" }),
		).toBeVisible();
	});

	test("renders the marquee section", async ({ page }) => {
		await expect(page.getByText("full stack developer").first()).toBeVisible();
		await expect(page.getByText("coffee lover").first()).toBeVisible();
	});
});