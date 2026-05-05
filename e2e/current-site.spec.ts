import { expect, test } from "@playwright/test"

const publicPages = [
  "/",
  "/method",
  "/platform",
  "/team",
  "/contact",
  "/privacy",
  "/terms",
  "/accessibility",
]

test.describe("current public site", () => {
  for (const path of publicPages) {
    test(`${path} renders without horizontal overflow`, async ({ page }) => {
      await page.goto(path)
      await expect(page.locator("h1").first()).toBeVisible()

      const dimensions = await page.evaluate(() => ({
        scrollWidth: document.documentElement.scrollWidth,
        clientWidth: document.documentElement.clientWidth,
      }))

      expect(dimensions.scrollWidth).toBeLessThanOrEqual(
        dimensions.clientWidth + 1,
      )
    })
  }
})
