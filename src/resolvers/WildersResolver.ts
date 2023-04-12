import { Query } from "type-graphql";
import { Wilder } from "../entity/Wilder";
import dataSource from "../utils";

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
	// async getAllSkills():  Promise<Skill[]> {
	//     const skills = await dataSource.getRepository(Skill).find();
	//     return skills;
	// }
}
