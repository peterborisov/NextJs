/**
 * @jest-environment node
 */

import { testApiHandler } from "next-test-api-route-handler"; // Must always be first
import * as appHandler from "../route";

describe("Tasks API route", () => {
  it("GET returns 200", async () => {
    await testApiHandler({
      appHandler,
      test: async ({ fetch }) => {
        const response = await fetch({ method: "GET" });
        expect(response.status).toBe(200);
      },
    });
  });
});
