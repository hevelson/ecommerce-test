import { StatusCodes } from "http-status-codes";

import { ServiceResponse } from "@/helpers/serviceResponse";
import User, { type IUser } from "@/models/User";
import { logger } from "@/server";

export default class UserService {
  private model = User;

  // Retrieves all users from the database
  async findAll(): Promise<ServiceResponse<IUser[] | null>> {
    try {
      const users = await this.model.findAll();
      if (!users || users.length === 0) {
        return ServiceResponse.failure("No Users found", null, StatusCodes.NOT_FOUND);
      }
      return ServiceResponse.success<IUser[]>("Users found", users);
    } catch (ex) {
      const errorMessage = `Error finding all users: $${(ex as Error).message}`;
      logger.error(errorMessage);
      return ServiceResponse.failure(
        "An error occurred while retrieving users.",
        null,
        StatusCodes.INTERNAL_SERVER_ERROR,
      );
    }
  }

  // Retrieves a single user by their ID
  async findById(id: number): Promise<ServiceResponse<IUser | null>> {
    try {
      const user = await this.model.findOne({ where: { id } });
      if (!user) {
        return ServiceResponse.failure("User not found", null, StatusCodes.NOT_FOUND);
      }
      return ServiceResponse.success<IUser>("User found", user);
    } catch (ex) {
      const errorMessage = `Error finding user with id ${id}:, ${(ex as Error).message}`;
      logger.error(errorMessage);
      return ServiceResponse.failure("An error occurred while finding user.", null, StatusCodes.INTERNAL_SERVER_ERROR);
    }
  }
}

export const userService = new UserService();
