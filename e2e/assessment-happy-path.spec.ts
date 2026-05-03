import { test, expect } from "@playwright/test"

/**
 * Full happy path:
 *   /assessment -> start -> answer all questions -> see score reveal ->
 *   lead capture form rendered (booking widget appears post-submit, but the
 *   test stops at form visibility to avoid mocking Resend in E2E).
 */
test.describe("AI Readiness Assessment happy path", () => {
  test("user lands, completes the quiz, sees score and lead capture", async ({ page }) => {
    await page.goto("/assessment")

    await expect(
      page.getByRole("heading", { name: /Where does your firm stand on AI/i }),
    ).toBeVisible()

    // Begin
    await page.getByRole("button", { name: /Begin the assessment/i }).click()

    // Loop through every question. The first answer in each question is always
    // visible because question screens appear one at a time. Picking the first
    // option keeps the test independent of question wording.
    let safetyCounter = 0
    while (safetyCounter < 12) {
      safetyCounter += 1

      const seeYourScore = page.getByRole("button", { name: /See your score/i })
      const continueBtn = page.getByRole("button", { name: /^Continue/i })

      // Pick the first radio option visible on screen.
      const firstOption = page.locator('input[type="radio"]').first()
      await firstOption.waitFor({ state: "attached" })
      // The radio is visually hidden behind a label, so click the visible label.
      await page.locator("label").first().click()

      if (await seeYourScore.isVisible().catch(() => false)) {
        await seeYourScore.click()
        break
      }
      if (await continueBtn.isVisible().catch(() => false)) {
        await continueBtn.click()
      } else {
        break
      }
    }

    // Score reveal
    await expect(
      page.getByText(/Your AI Readiness score/i).first(),
    ).toBeVisible()
    await expect(
      page.getByText(/Three deployments that fit/i).first(),
    ).toBeVisible()

    // Lead capture form rendered
    await expect(
      page.getByRole("heading", { name: /Get the detailed report/i }),
    ).toBeVisible()
    await expect(page.getByLabel(/Email/i)).toBeVisible()
    await expect(page.getByLabel(/Firm/i)).toBeVisible()
  })

  test("back button preserves prior answers", async ({ page }) => {
    await page.goto("/assessment")
    await page.getByRole("button", { name: /Begin the assessment/i }).click()

    // Answer Q1
    const firstOption = page.locator('input[type="radio"]').first()
    await firstOption.waitFor({ state: "attached" })
    const q1OptionValue = await firstOption.getAttribute("value")
    await page.locator("label").first().click()
    await page.getByRole("button", { name: /^Continue/i }).click()

    // On Q2, click Back
    await page.getByRole("button", { name: /Back/i }).click()

    // Q1's selected radio should still be checked.
    await expect(
      page.locator(`input[type="radio"][value="${q1OptionValue}"]`).first(),
    ).toBeChecked()
  })
})
