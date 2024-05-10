import express, { Express } from "express";
import router from "./router";

const app: Express = express();

app.use('/', router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});