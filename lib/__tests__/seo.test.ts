import { describe, expect, it } from "vitest"
import { publicRoutes } from "@/lib/seo"

describe("publicRoutes", () => {
  it("only exposes the current public website surface", () => {
    expect(publicRoutes.map((route) => route.path)).toEqual([
      "/",
      "/method",
      "/platform",
      "/team",
      "/contact",
      "/accessibility",
      "/privacy",
      "/terms",
    ])
  })
})
