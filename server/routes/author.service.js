const db = require("../utils/db.server");

const listAuthors = async () => {
  return db.author.findMany({
    include: {
      Author: true,
    },
  });
};

module.exports = { listAuthors };
