/**
 * @jest-environment node
 */

import { NextRequest } from "next/server";
import { GET } from "../route";

describe("Task id route", () => {
  it("should return data with status 200", async () => {
    const response = await GET({}, 1);
    const body = await response.json();

    expect(response.status).toBe(200);
    expect(body.length).toBe(2);
  });
});
