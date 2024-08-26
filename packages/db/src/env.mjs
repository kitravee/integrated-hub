import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

export const env = createEnv({
  server: {
    DRIZZLE_DATABASE_URL: z.string().min(1),
  },

  runtimeEnv: {
    DRIZZLE_DATABASE_URL: process.env.NEXT_DRIZZLE_DATABASE_URL,
  },
  skipValidation: true,
});
