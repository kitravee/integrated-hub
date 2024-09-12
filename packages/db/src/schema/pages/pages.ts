import { pgTable, text, timestamp } from "drizzle-orm/pg-core";
import { workspaces } from "../workspaces";
import { relations } from "drizzle-orm";

export const pages = pgTable("page", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  workspaceId: text("workspace_id")
    .references(() => workspaces.id, { onDelete: "cascade" })
    .notNull(),
  name: text("name").notNull(),
  slug: text("slug").notNull(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export const pagesRelations = relations(pages, ({ one }) => ({
  workspace: one(workspaces, {
    fields: [pages.workspaceId],
    references: [workspaces.id],
  }),
}));
