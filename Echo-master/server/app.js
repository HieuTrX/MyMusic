require("app-module-path").addPath(__dirname);
const api = require("./routes/api");
const path = require("path");

module.exports = function(app) {
  app.use("/api", api);

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../public/index.html"));
  });

  if (app.get("env") === "development") {
    app.use((err, req, res, next) => {
      res.status(err.status || 500);
      if (err.errors) {
        res.json({ error: true, errors: err.errors, message: err.message });
      } else {
        res.send(err.stack);
      }
    });
  }

  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    if (err.errors && Object.keys(err.errors).length) {
      res.json({
        error: true,
        errors: err.errors || {}
      });
    } else {
      res.send(err.message);
    }
  });
};
