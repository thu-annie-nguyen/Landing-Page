// tests/basic.spec.js
const { test, expect } = require('@playwright/test');

const BASE_URL = process.env.BASE_URL || 'http://localhost:3000';

test('trang load được với title đúng', async ({ page }) => {
  await page.goto(BASE_URL);
  // Title song ngữ, mặc định VI
  await expect(page).toHaveTitle(/Thư Annie Nguyễn/i);
});

test('ảnh hero hiển thị đúng', async ({ page }) => {
  await page.goto(BASE_URL);
  const hero = page.locator('.hero-photo');
  await expect(hero).toBeVisible();
});

test('chuyển ngôn ngữ EN ↔ VI', async ({ page }) => {
  await page.goto(BASE_URL);

  const navCourses = page.locator('a[href="#courses"]');
  const btnEN = page.locator('.lang-switcher [data-lang="en"]');
  const btnVI = page.locator('.lang-switcher [data-lang="vi"]');
  const heroCta = page.locator('.hero-cta span:first-child');

  // Mặc định VI
  await expect(navCourses).toHaveText(/Khoá Học/i);
  await expect(heroCta).toHaveText(/Executive Overview/i);

  // Chuyển sang EN
  await btnEN.click();
  await expect(navCourses).toHaveText(/Courses/i);
  await expect(heroCta).toHaveText(/Book an Executive Overview/i);

  // Chuyển lại VI
  await btnVI.click();
  await expect(navCourses).toHaveText(/Khoá Học/i);
});