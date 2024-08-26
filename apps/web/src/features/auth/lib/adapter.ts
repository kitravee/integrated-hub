import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { db, users, accounts, sessions, verificationTokens } from "@repo/db";
import { Adapter } from "next-auth/adapters";
import { createUser, getUser } from "./action";
import { SqlFlavorOptions } from "@auth/drizzle-adapter/lib/utils";

// TODO: workaround by force type SqlFlavorOptions
const tmpDB = db as unknown as SqlFlavorOptions;
export const adapter: Adapter = {
  ...DrizzleAdapter(tmpDB, {
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
