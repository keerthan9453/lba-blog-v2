import { db } from "../utils/db.server";

export const listAuthors = async () => {
  return db.author.findMany({
    select: {
      id: true,
      firstName: true,
      lastName: true,
      email: true,
    },
  });
};
