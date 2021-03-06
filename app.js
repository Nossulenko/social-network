const express = require('express');
const app = express();


// bring in routes
const postRoutes = require("./routes/post");

// middleware
app.use(morgan("dev"));
app.use("/", postRoutes);

const port = 8080
app.listen(port, () => {
    console.log(`A Node js API is listening on port: ${port}`);
});