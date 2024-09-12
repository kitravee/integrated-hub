import { db } from "./db";
import { users, workspaces, skus, pages, usersToWorkspaces } from "./schema";
import crypto from "crypto";

const randomUUID = () => crypto.randomUUID();

const randomUUIDs = {
  techCorp: randomUUID(),
  bizInc: randomUUID(),
};

// Seed Users
type UserArray = [
  { id: string; name: string; email: string },
  { id: string; name: string; email: string },
];

const usersData: UserArray = [
  {
    id: `alice-${randomUUID()}`,
    name: "Alice",
    email: `alice@${randomUUID()}.com`,
  },
  { id: `bob-${randomUUID()}`, name: "Bob", email: `bob@${randomUUID()}.com` },
];

await db.insert(users).values(usersData);

// Seed Workplaces
await db.insert(workspaces).values([
  {
    id: randomUUIDs.techCorp,
    name: "Tech Corp",
    slug: randomUUIDs.techCorp,
    createdAt: new Date(),
    updatedAt: new Date(),
    plan: "free",
  },
  {
    id: randomUUIDs.bizInc,
    name: "Biz Inc",
    slug: randomUUIDs.bizInc,
    createdAt: new Date(),
    updatedAt: new Date(),
    plan: "free",
  },
]);

// Seed SKUs
await db.insert(skus).values([
  {
    name: "Laptop",
    workplaceId: randomUUIDs.techCorp,
    price: 1500,
    currency: "USD",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "Mouse",
    workplaceId: randomUUIDs.techCorp,
    price: 50,
    currency: "USD",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
]);

// Seed Pages
await db.insert(pages).values([
  {
    name: "Home",
    slug: "home",
    workspaceId: randomUUIDs.techCorp,
    id: `home-page-${randomUUID()}`,
    updatedAt: new Date(),
  },
  {
    name: "About",
    slug: "about",
    workspaceId: randomUUIDs.bizInc,
    id: `about-page-${randomUUID()}`,
    updatedAt: new Date(),
  },
]);

// Seed UserWorkplaces (Many-to-Many relationship)
await db.insert(usersToWorkspaces).values([
  { userId: usersData[0].id, workspaceId: randomUUIDs.techCorp },
  { userId: usersData[1].id, workspaceId: randomUUIDs.bizInc },
]);

console.log("Database seeding completed.");
