import { StatusCodes } from "http-status-codes";
import request from "supertest";

import type { ServiceResponse } from "@/helpers/serviceResponse";
import User from "@/models/User";
import { app } from "@/server";

describe("User API Endpoints", () => {
  describe("GET /users/:id", () => {
    it("should return a user for a valid ID", async () => {
      // Creating the user
      const newUser = await User.create({
        first_name: "João",
        last_name: "Silva",
        email: "joao@example.com",
        password: "123456",
        address: "Rua um",
        phone_number: "15987654321",
      });

      // Requesting User
      const response = await request(app).get(`/api/v1/users/${newUser.get('id')}`);
      const responseBody: ServiceResponse<User> = response.body;

      // Assert
      expect(response.statusCode).toEqual(StatusCodes.OK);
      expect(responseBody.success).toBeTruthy();
      expect(responseBody.message).toContain("User found");
      compareUsers(newUser.toJSON(), responseBody.responseObject);
    });

    it("should return a not found error for non-existent ID", async () => {
      // Arrange
      const testId = Number.MAX_SAFE_INTEGER;

      // Act
      const response = await request(app).get(`/api/v1/users/${testId}`);
      const responseBody: ServiceResponse = response.body;

      // Assert
      expect(response.statusCode).toEqual(StatusCodes.NOT_FOUND);
      expect(responseBody.success).toBeFalsy();
      expect(responseBody.message).toContain("User not found");
      expect(responseBody.responseObject).toBeNull();
    });

    it("should return a bad request for invalid ID format", async () => {
      // Act
      const invalidInput = "abc";
      const response = await request(app).get(`/api/v1/users/${invalidInput}`);
      const responseBody: ServiceResponse = response.body;

      // Assert
      expect(response.statusCode).toEqual(StatusCodes.BAD_REQUEST);
      expect(responseBody.success).toBeFalsy();
      expect(responseBody.message).toContain("Invalid input");
      expect(responseBody.responseObject).toBeNull();
    });
  });
});

function compareUsers(mockUser: User, responseUser: User) {
  if (!mockUser || !responseUser) {
    throw new Error("Invalid test data: mockUser or responseUser is undefined");
  }

  expect(responseUser.first_name).toEqual(mockUser.first_name);
  expect(responseUser.last_name).toEqual(mockUser.last_name);
  expect(responseUser.email).toEqual(mockUser.email);
  expect(responseUser.address).toEqual(mockUser.address);
  expect(responseUser.phone_number).toEqual(mockUser.phone_number);
}
