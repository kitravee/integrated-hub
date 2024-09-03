import { relations } from "drizzle-orm";
import { users } from "./users";
import { usersToWorkspaces } from "../user-to-workspaces";

export const userRelations = relations(users, ({ many }) => ({
  usersToWorkspaces: many(usersToWorkspaces),
}));
