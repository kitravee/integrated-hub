import { relations } from "drizzle-orm";
import { serial, text, timestamp } from "drizzle-orm/pg-core";
import { pgTable, integer } from "drizzle-orm/pg-core";
import { workspaces } from "../workspaces";

export const skus = pgTable("sku", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  workplaceId: text("workplace_id")
    .references(() => workspaces.id, { onDelete: "cascade" })
    .notNull(),
  name: text("name").notNull(),
  description: text("description"),
  price: integer("price").notNull(),
  currency: text("currency").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export const skusRelations = relations(skus, ({ one }) => ({
  workplace: one(workspaces, {
    fields: [skus.workplaceId],
    references: [workspaces.id],
  }),
}));
