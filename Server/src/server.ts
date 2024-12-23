import app from "./app"; // Import the express app
import db from "./models";
const PORT = process.env.PORT || 5000;

// Sync the database and then start the server
db.sequelize
  .sync({ force: false }) // Adjust as necessary for your environment
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err: Error) => {
    console.error("Error connecting to the database:", err);
  });
