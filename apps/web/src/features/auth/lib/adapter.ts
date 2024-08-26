// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { db, users, accounts, sessions, verificationTokens } from "@repo/db";
import { Adapter } from "next-auth/adapters";
import { createUser, getUser } from "./action";
import { SqlFlavorOptions } from "@auth/drizzle-adapter/lib/utils";

export const adapter: Adapter = {
  ...DrizzleAdapter(db, {
    usersTable: users,
    accountsTable: accounts,
    sessionsTable: sessions,
    verificationTokensTable: verificationTokens,
  }),
  createUser: async (data) => {
    return await createUser(data);
  },
  getUser: async (id) => {
    return await getUser(id);
  },
};
