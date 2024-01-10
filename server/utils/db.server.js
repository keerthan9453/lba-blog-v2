import { PrismaClient } from "@prisma/client";

// export const db = new PrismaClient();

// singleton pattern to ensure only one single instance of PrismaClient is created
let db: PrismaClient;

// declare a global variable __db. This is done to reuse the existing
// prismaClient instance if it exists, instead of creating a new one every time
declare global {
  var __db: PrismaClient | undefined;
}

// check if db global PrismaClient instance exists. If not, create a new one
if (!global.__db) {
  global.__db = new PrismaClient();
}

// assign the global PrismaClient instance to the db variable
db = global.__db;

export { db };
