// import { Request, Response } from "express";
// import dataSource from "../utils";
// import { Skill } from "../entity/Skill";

// const skillController = {
// 	create: async (req: Request, res: Response) => {
// 		await dataSource
// 			.getRepository(Skill)
// 			.save(req.body)
// 			.then(() => {
// 				res.send("Created skill");
// 			})
// 			.catch((error) => {
// 				// res.send("Error while creating skill");
// 				res.send(error);
// 				// console.log("bibi", error);
// 			});
// 	},
// 	read: (req: Request, res: Response) => {
// 		dataSource
// 			.getRepository(Skill)
// 			.find()
// 			.then((skills) => {
// 				res.send(skills);
// 			})
// 			.catch(() => {
// 				res.send("Error while reading skill");
// 			});
// 	},
// 	update: async function (req: Request, res: Response): Promise<void> {
// 		// const repository = dataSource.getRepository(Skill);
// 		try {
// 			await dataSource.getRepository(Skill).update(req.params.id, req.body);
// 		} catch (error: any) {
// 			if (error.code === "SQLITE_CONSTRAINT") {
// 				console.log("bibi", error.code);
// 				// return res.status(409).send("Skill already exists");
// 				res.status(409).send("Skill already exists");
// 			}
// 			return;
// 			// console.log(error.code);
// 		}
// 		res.send("The skill as been updated");
// 	},
// 	// update: async function (req, res) {
// 	//     try{
// 	//         const skill = await dataSource.getRepository(Skill).findOneBy({
// 	//             id: req.params.id,
// 	//         })
// 	//         dataSource.getRepository(Skill).merge(skill, req.body)
// 	//         const results = await dataSource.getRepository(Skill).save(skill);
// 	//         return res.send(results)
// 	//     } catch{
// 	//         res.send("Error while updating skill");
// 	//     }
// 	//     }
// 	delete: (req: Request, res: Response) => {
// 		dataSource
// 			.getRepository(Skill)
// 			.delete(req.params.id)
// 			.then(() => {
// 				res.send("Remove skill");
// 			})
// 			.catch(() => {
// 				res.send("Error while removing skill");
// 			});
// 	},
// };
// export default skillController;
