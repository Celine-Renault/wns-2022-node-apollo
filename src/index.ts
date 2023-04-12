import dataSource from "./utils";
import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";
import { WildersResolver } from "./resolvers/WildersResolver";
import { SkillsResolver } from "./resolvers/SkillsResolver";

// const typeDefs = gql`
// 	type Wilder {
// 		id: ID
// 		name: String
// 		city: String
// 		skills: [Skill]
// 	}
// 	type Skill {
// 		id: ID
// 		name: String
// 	}
// 	type Query {
// 		getAllWilders: [Wilder]
// 		getAllSkills: [Skill]
// 	}
// 	type Mutation {
// 		# addWilder(name: String, city: String): Wilder
// 		createSkill(name: String): Skill
// 	}
// `;

// operations
// const resolvers = {
// 	Query: {
// get list wilders since ORM BD
// getAllWilders: async () => {
// 	const wilders = await dataSource.manager.find(Wilder, {
// 		relations: {
// 			skills: true,
// 		},
// 	});
// 	// return list of wilders
// 	return wilders;
// },
// 		getAllSkills: async () => {
// 			const skills = await dataSource.getRepository(Skill).find();
// 			return skills;
// 		},
// 	},
// 	Mutation: {
// 		createSkill: async (_: any, args: { name: string }) => {
// 			const skillToCreate = new Skill();
// 			skillToCreate.name = args.name;
// 			return await dataSource.getRepository(Skill).save(skillToCreate);
// 			// return await dataSource.manager.save(Skill, skillToCreate);
// 		},
// 	},
// };

const start = async (): Promise<void> => {
	await dataSource.initialize();
	const schema = await buildSchema({
		resolvers: [WildersResolver, SkillsResolver],
	});
	const server = new ApolloServer({
		// typeDefs,
		// resolvers,
		schema,
	});
	try {
		// server.listen().then(({ url }) => { // plus de then car on utilise une fonction asynchrone
		//     console.log(`🚀  Server ready at ${url}`);
		// });
		const { url } = await server.listen({ port: 5000 });
		console.log(`Server started at port ${url}`);
	} catch {
		console.log("Error starting the server");
	}
};
void start();
