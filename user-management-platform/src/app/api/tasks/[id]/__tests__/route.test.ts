/**
 * @jest-environment node
 */

import { testApiHandler } from "next-test-api-route-handler"; // Must always be first
import * as appHandler from "../route";
import { GET } from "../route";
import { NextRequest } from "next/server";

describe("Tasks ID API route", () => {
  it("GET returns 500", async () => {
    await testApiHandler({
      appHandler,
      test: async ({ fetch }) => {
        const response = await fetch({ method: "GET" });
        expect(response.status).toBe(500);
      },
    });
  });

  it("should return data with status 200", async () => {
    const req = new NextRequest(new Request("localhost:3000/tasks/1"), {});
    const requestObj = {
      params: { id: 1 },
    };

    const response = await GET(req, requestObj);
    const body = await response.json();

    expect(response.status).toBe(200);
    expect(body.task.id).toBe(1);
  });
});
