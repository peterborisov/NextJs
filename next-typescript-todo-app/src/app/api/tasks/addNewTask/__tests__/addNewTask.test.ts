/**
 * @jest-environment node
 */

import { GET } from "../route";
import { NextRequest } from "next/server";

describe("Tasks ID API route", () => {
  it("should return data with status 200", async () => {
    const req = new NextRequest(
      new Request("localhost:3000/tasks/addNewTask"),
      {},
    );

    const response = await GET(req);

    expect(response.status).toBe(200);
  });
});
