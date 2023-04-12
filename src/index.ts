import dataSource from "./utils";
import { ApolloServer, gql } from "apollo-server";
// import { ApolloServerPluginLandingPageLocalDefault } from "apollo-server-core";
import { Wilder } from "./entity/Wilder";
import { Skill } from "./entity/Skill";

const typeDefs = gql`
	type Wilder {
		id: ID
		name: String
		city: String
		skills: [Skill]
	}
	type Skill {
		id: ID
		name: String
	}
	type Query {
		getAllWilders: [Wilder]
		getAllSkills: [Skill]
	}
	type Mutation {
		# addWilder(name: String, city: String): Wilder
		createSkill(name: String): Skill
	}
`;

// operations
const resolvers = {
	Query: {
		// get list wilders since ORM BD
		getAllWilders: async () => {
			const wilders = await dataSource.manager.find(Wilder, {
				relations: {
					skills: true,
				},
			});
			// return list of wilders
			return wilders;
		},
		getAllSkills: async () => {
			const skills = await dataSource.getRepository(Skill).find();
			return skills;
		},
	},
	Mutation: {
		createSkill: async (_: any, args: { name: string }) => {
			const skillToCreate = new Skill();
			skillToCreate.name = args.name;
			return await dataSource.getRepository(Skill).save(skillToCreate);
			// return await dataSource.manager.save(Skill, skillToCreate);
		},
	},
};

const start = async (): Promise<void> => {
	await dataSource.initialize();

	const server = new ApolloServer({
		typeDefs,
		resolvers,
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

// const wilders = [
// 	{
// 		id: 0,
// 		city: "Tokyo",
// 		name: "Kate Chopin",
// 	},
// 	{
// 		id: 1,
// 		city: "London",
// 		name: "Paul Auster",
// 	},
// ];
