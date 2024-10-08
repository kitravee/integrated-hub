// @ts-nocheck
// TODO: Fix type of db related to NeonHttpDatabase and SqlFlavorOptions

import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { db, users, accounts, sessions, verificationTokens } from "@repo/db";
import { Adapter } from "next-auth/adapters";

import { createUser, getUser } from "./action";

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
