import { db, eq, users } from "@repo/db";

import type { AdapterUser } from "next-auth/adapters";

export async function createUser(
  data: Omit<AdapterUser, "id">
): Promise<AdapterUser> {
  const { ...rest } = data;

  const newUsers = await db
    .insert(users)
    .values({ email: rest.email, name: rest.name, image: rest.image })
    .returning({
      id: users.id,
      email: users.email,
      emailVerified: users.emailVerified,
    });

  // TODO: Implement store
  const user = newUsers[0] as AdapterUser;
  return user;
}

export async function getUser(id: string) {
  const user = await db
    .select({
      id: users.id,
      email: users.email,
      emailVerified: users.emailVerified,
    })
    .from(users)
    .where(eq(users.id, id));
  return (user[0] as AdapterUser) || null;
}
