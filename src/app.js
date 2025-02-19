import express from "express";

const app = express();
app.use(express.json());

app.get("/", (req,res) => {
    res.status(200).send("Hello Express");
});

export default app;