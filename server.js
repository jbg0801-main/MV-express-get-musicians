const app = require("./src/app");
const { db } = require("./db/connection")
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
