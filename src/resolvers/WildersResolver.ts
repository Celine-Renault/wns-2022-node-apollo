import { Arg, Mutation, Query } from "type-graphql";
import { Wilder } from "../entity/Wilder";
// import { Skill } from "../entity/Skill";
import dataSource from "../utils";
import { Skill } from "../entity/Skill";

export class WildersResolver {
	@Query(() => [Wilder])
	async getAllWilders(): Promise<Wilder[]> {
		const wilders = await dataSource.manager.find(Wilder, {
			relations: {
				skills: true,
			},
		});
		return wilders;
	}

	@Mutation(() => Wilder)
	async addWilder(
		@Arg("name") name: string,
		@Arg("city") city: string
	): Promise<Wilder> {
		const wilderToCreate = new Wilder();
		wilderToCreate.name = name;
		wilderToCreate.city = city;

		// return await dataSource.getRepository(Wilder, wilderToCreate).save();
		return await dataSource.manager.save(Wilder, wilderToCreate);
	}

	@Mutation(() => Wilder)
	async addSkillToWilder(
		@Arg("wilderId") wilderId: number,
		@Arg("skillId") skillId: number
	): Promise<Wilder> {
		// On récupére le wilder par son identifiant
		const wilderToUpdate = await dataSource
			.getRepository(Wilder)
			.findOneBy({ id: wilderId });
		if (wilderToUpdate === null) {
			throw new Error("Wilder to update not found");
		}

		// On récupére la compétence par son identifiant
		const skillToAdd = await dataSource
			.getRepository(Skill)
			.findOneBy({ id: skillId });
		if (skillToAdd === null) {
			throw new Error("Skill to add not found");
		}

		// On ajoute la compétence à la liste de compétences du wilder.
		wilderToUpdate.skills.push(skillToAdd);

		// On sauvegarde la modification de la liste des compétences, côté BDD (SQL)
		await dataSource.manager.save(wilderToUpdate);

		// On retourne le wilder mis à jour
		return wilderToUpdate;
	}
}
