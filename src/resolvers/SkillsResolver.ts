import { Skill } from "../entity/Skill";
// import { Arg, Int, Mutation, Query } from "type-graphql";
import { Arg, Mutation, Query } from "type-graphql";
import dataSource from "../utils";

export class SkillsResolver {
	@Query(() => [Skill])
	async getAllSkills(): Promise<Skill[]> {
		const skills = await dataSource.manager.find(Skill, {
			relations: {
				wilder: true, // a ajouter ici fiat reference au eager: true de l'entite
			},
		});
		return skills;
	}

	@Mutation(() => [Skill])
	async deleteSkill(@Arg("skillId") skillId: number): Promise<Skill[]> {
		await dataSource.getRepository(Skill).delete({ id: skillId });

		const skills = await dataSource.getRepository(Skill).find();

		return skills;
	}

	@Mutation(() => Skill)
	async updateSkill(
		@Arg("skillId") skillId: number,
		@Arg("name") name: string
	): Promise<Skill> {
		const skillToUpdate = await dataSource
			.getRepository(Skill)
			.findOneBy({ id: skillId });
		if (skillToUpdate === null) {
			throw new Error("Skill not found");
		}

		dataSource.getRepository(Skill).merge(skillToUpdate, { name });
		await dataSource.getRepository(Skill).save(skillToUpdate);

		return skillToUpdate;
	}
}
