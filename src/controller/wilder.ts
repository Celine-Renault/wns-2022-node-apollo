// import dataSource from "../utils";
// import { Request, Response } from "express";
// import { Wilder } from "../entity/Wilder";
// import { Skill } from "../entity/Skill";

// // Interfaces with TypeScript
// // interface IController {
// //     [key: string]: (arg0: Request, arg1: Response) => {}
// // };
// // const wilderController: IController= {
// // 	create: async (req, res) => {};
// // }

// const wilderController = {
// 	create: (req: Request, res: Response) => {
// 		dataSource
// 			.getRepository(Wilder)
// 			.save(req.body)
// 			.then(() => {
// 				res.send("Created wilder");
// 			})
// 			.catch((error) => {
// 				console.log(error);

// 				res.send("Error while creating wilder");
// 			});
// 	},
// 	read: (req: Request, res: Response) => {
// 		dataSource
// 			.getRepository(Wilder)
// 			.find()
// 			.then((data) => {
// 				res.send(data);
// 			})
// 			.catch(() => {
// 				res.send("Error while reading wilder");
// 			});
// 	},
// 	update: (req: Request, res: Response) => {
// 		dataSource
// 			.getRepository(Wilder)
// 			.update(req.params.id, req.body)
// 			.then(() => {
// 				res.send("Update wilder");
// 			})
// 			.catch(() => {
// 				res.send("Error while updating wilder");
// 			});
// 	},
// 	delete: async (req: Request, res: Response): Promise<void> => {
// 		// async = promesse ici qui ne retourne rien donc j'ajoute Promise<void> - void : rien
// 		// const repository = dataSource.getRepository(Wilder); // syntaxe plus courte à mettre ligne 55 datasource.repository(Wilder)...
// 		try {
// 			// je fais tourner des instructions si ca ne marche pas je rentre dans le catch error
// 			// trouve un wilder par identifiant
// 			const user = await dataSource
// 				.getRepository(Wilder)
// 				.findOneBy({ id: parseInt(req.params.id) }); // fonction JS qui prend une string et la convertie en nombre
// 			//  req.params.id correspond a l 'id dans l'url(le chemin) qui lui est une string - notre id attend un  ombre donc ca cree un erreur - utilisation de parsInt() pour regler l erreur
// 			if (user === null) {
// 				throw new Error(); // connecte au catch (error)
// 			}
// 			await dataSource.getRepository(Wilder).delete(req.params.id);
// 			res.send("Delete wilder");
// 		} catch (error) {
// 			// res.statuts(500).json("Test error 500");
// 			res.status(404).send("Test error 404");
// 		}
// 	},
// 	addSkill: async (req: Request, res: Response) => {
// 		try {
// 			// recuperation du premier wilder a mettre a jour
// 			const wilderToUpdate = await dataSource.getRepository(Wilder).findOneBy({
// 				id: parseInt(req.params.wilderId), // function JS parsInt to convert id url string in type number
// 			});
// 			console.log("wilderToUpdate", wilderToUpdate);

// 			if (wilderToUpdate == null) {
// 				return res.status(404).send("Wilder not found");
// 			}

// 			// recuperation de la competence a ajouter
// 			const skillToAdd = await dataSource.getRepository(Skill).findOneBy({
// 				id: parseInt(req.params.skillId), // function JS parsInt to convert id url string in type number
// 			});
// 			console.log("skillToAdd", skillToAdd);

// 			if (skillToAdd == null) {
// 				return res.status(404).send("Skill not found");
// 			}

// 			wilderToUpdate.skills = [...wilderToUpdate.skills, skillToAdd]; // push()
// 			await dataSource.getRepository(Wilder).save(wilderToUpdate);
// 			res.send("Skill added");
// 		} catch (error) {
// 			console.log(error);
// 			res.send("Error adding skill to wilder");
// 		}
// 	},
// };
// export default wilderController;
