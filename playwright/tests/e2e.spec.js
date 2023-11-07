// @ts-check
const { test, expect, request } = require("@playwright/test");

test.describe("end to end test", async () => {
  test.beforeEach("to have title", async ({ page }) => {
    await page.goto("http://localhost:3000/");

    await expect(page.getByText("The Blog Website")).toBeVisible();
  });

  test.afterEach(async ({ page }) => {
    const context = await request.newContext({
      baseURL: "http://127.0.0.1:8000",
    });
    const newIGTTask = await context.post("/blog/deleteblog", {
      headers: {
        Accept: "application/json",
      },
      data: {
        title: "A dummy blog",
      },
    });
    const res = await newIGTTask.json();
    if (res.message === "Blog deleted successfully") {
      console.log("Test Passed!");
    } else {
      console.log("Test Failed!");
    }
  });

  test("check whether a new blog is getting created", async ({ page }) => {
    await page.goto("http://localhost:3000/");

    const blogTitle = "A dummy blog";
    const blogBody =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    const blogAuthor = "xyzw";

    const createButton = page.getByRole("button", { name: "New Blog" });
    await createButton.click();

    await expect(page.getByText("Add a New Blog")).toBeVisible();

    await page.getByPlaceholder("Title").fill(blogTitle);
    await page.getByPlaceholder("Lorem Ipsum...").fill(blogBody);
    await page.getByPlaceholder("xyz...").fill(blogAuthor);

    const submitButton = page.getByRole("button", { name: "Add Blog" });
    await submitButton.click();

    const homeButton = page.getByRole("button", { name: "Home" });
    await homeButton.click();
    await expect(page.getByText("A dummy blog")).toBeVisible();
  });
});
