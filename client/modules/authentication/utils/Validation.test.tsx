import { describe, expect, test } from "@jest/globals";
import "@testing-library/jest-dom";
import { createAuthSchema } from "./validation_helpers";

describe("Login Validation", () => {
  test("Missing username and password", async () => {
    const validate = async () => {
      await createAuthSchema.validate(
        { username: "", password: "" },
        { abortEarly: false }
      );
    };

    await expect(validate).rejects.toThrowError();
  });

  test("Missing username, having password", async () => {
    const validate = async () => {
      await createAuthSchema.validate(
        { username: "", password: "password" },
        { abortEarly: false }
      );
    };

    await expect(validate).rejects.toThrowError();
  });

  test("Missing password, having username", async () => {
    const validate = async () => {
      await createAuthSchema.validate(
        { username: "username", password: "" },
        { abortEarly: false }
      );
    };

    await expect(validate).rejects.toThrowError();
  });

  test("Having both password and username", async () => {
    const validate = async () => {
      await createAuthSchema.validate(
        { username: "username", password: "password" },
        { abortEarly: false }
      );
    };

    await expect(validate).resolves.toBeNull;
  });
});
