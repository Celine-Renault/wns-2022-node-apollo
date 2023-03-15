import express from "express";
import cors from "cors";
import dataSource from "./utils";

import skillController from "./controller/skill_controller";
import wilderController from "./controller/wilder";

const app = express();

// middleware
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
	res.send("Hello World");
});

// const wilderController = new WilderController();
app.post("/api/wilder", wilderController.create);
app.get("/api/wilder", wilderController.read);
app.put("/api/wilder/:id", wilderController.update);
app.delete("/api/wilder/:id", wilderController.delete);

// const skillController = new SkillController();
app.post("/api/skill", skillController.create);
app.get("/api/skill", skillController.read);
app.put("/api/skill/:id", skillController.update);
app.delete("/api/skill/:id", skillController.delete);

// Root Wilder & Skill
app.post("/api/wilder/:wilderId/skill/:skillId/add", wilderController.addSkill);

const start = async (): Promise<void> => {
	await dataSource.initialize();
	app.listen(5000, () => console.log("Server started on 5000"));
};
void start(); // rules eslint funciton qui retourne une promesse pour l ignorer ajouter void
