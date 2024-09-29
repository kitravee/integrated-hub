import { db, eq, users } from "@repo/db";
import NextAuth from "next-auth";
import github from "next-auth/providers/github";
import google from "next-auth/providers/google";

import { adapter } from "./adapter";

export const { handlers, signIn, signOut, auth } = NextAuth({
  debug: process.env.NODE_ENV === "development",
  adapter,
  providers: [
    github({
      allowDangerousEmailAccountLinking: true,
    }),
    google({
      allowDangerousEmailAccountLinking: true,
      authorization: {
        params: {
          prompt: "select_account",
        },
      },
    }),
  ],
  callbacks: {
    async signIn(params) {
      if (params.account?.provider === "google") {
        if (!params.profile) return true;
        if (Number.isNaN(Number(params.user.id))) return true;

        await db
          .update(users)
          .set({
            image: params.profile.picture,
            name: `${params.profile.given_name} ${params.profile.family_name}`,
          })
          .where(eq(users.id, String(params.user.id)));
      }
      if (params.account?.provider === "github") {
        if (!params.profile) return true;
        if (Number.isNaN(Number(params.user.id))) return true;

        await db
          .update(users)
          .set({
            name: params.profile.name,
            image: String(params.profile.avatar),
          })
          .where(eq(users.id, String(params.user.image)));
      }

      return true;
    },
    async session(params) {
      return params.session;
    },
  },
  events: {
    // That should probably done in the callback method instead
    async createUser(params) {
      if (!params.user.id || !params.user.email) {
        throw new Error("User id & email is required");
      }

      // await sendEmail({
      //   from: "Thibault Le Ouay Ducasse <thibault@openstatus.dev>",
      //   subject: "Welcome to OpenStatus.",
      //   to: [params.user.email],
      //   react: WelcomeEmail(),
      // });

      const { id: userId, email, image } = params.user;

      if (process.env.NODE_ENV !== "development") {
        // await analytics.identify(userId, { email, userId });
        // await trackAnalytics({ event: "User Created", userId, email });
        // await identifyUser({ user: params.user });
      }
    },

    async signIn(params) {
      if (params.isNewUser) return;
      if (!params.user.id || !params.user.email) return;

      const { id: userId, email } = params.user;
    },
  },
  pages: {
    signIn: "/",
    newUser: "/",
  },
});
