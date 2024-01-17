const db = require("../utils/db.server");

const listAuthors = async () => {
  return db.author.findMany({
    include: {
      Author: true,
    },
    // select: {
    //   id: true,
    //   firstName: true,
    //   lastName: true,
    //   email: true,
    // },
  });
};

module.exports = { listAuthors };
