import { timestamp, pgTable, text } from "drizzle-orm/pg-core";
import { workspacePlans } from "./constants";
import { relations } from "drizzle-orm";
import { usersToWorkspaces } from "../user-to-workspaces";
import { skus } from "../skus";
import { pages } from "../pages";

export const workspaces = pgTable("workspace", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  slug: text("slug").notNull().unique(),
  name: text("name"),
  plan: text("plan", { enum: workspacePlans }),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export const workspaceRelations = relations(workspaces, ({ many }) => ({
  usersToWorkspaces: many(usersToWorkspaces),
  skus: many(skus),
  pages: many(pages),
}));
