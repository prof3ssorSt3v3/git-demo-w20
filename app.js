const friends = require("./friends.json");
const family = require("./family.json");

const app = {
  init: () => {
    console.log("app running");
  }
};

setTimeout(app.init, 1000);
