import { PrismaClient } from "@prisma/client";

let db: PrismaClient;

declare global {
  var __db: PrismaClient | undefined;
}

// check if db connection exists
if (!global.__db) {
  global.__db = new PrismaClient();
}

db = global.__db;

export { db };
