import { pgTable, primaryKey, text, timestamp } from "drizzle-orm/pg-core";
import { workspaces } from "../workspaces/workspace";
import { users } from "../users";
import { workspaceRole } from "../workspaces";
import { relations } from "drizzle-orm";

export const usersToWorkspaces = pgTable(
  "users_to_workspaces",
  {
    userId: text("user_id")
      .notNull()
      .references(() => users.id),
    workspaceId: text("workspace_id")
      .notNull()
      .references(() => workspaces.id),
    role: text("role", { enum: workspaceRole }).notNull().default("member"),
    createdAt: timestamp("created_at").notNull().defaultNow(),
  },
  (usersToWorkspaces) => ({
    pk: primaryKey({
      columns: [usersToWorkspaces.userId, usersToWorkspaces.workspaceId],
    }),
  })
);

export const usersToWorkspaceRelations = relations(
  usersToWorkspaces,
  ({ one }) => ({
    workspace: one(workspaces, {
      fields: [usersToWorkspaces.workspaceId],
      references: [workspaces.id],
    }),
    user: one(users, {
      fields: [usersToWorkspaces.userId],
      references: [users.id],
    }),
  })
);
