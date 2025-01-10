import app from "./app";
import db from "./models";
const PORT = process.env.PORT || 5000;

db.sequelize
  .sync({ force: false })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err: Error) => {
    console.error("Error connecting to the database:", err);
  });
