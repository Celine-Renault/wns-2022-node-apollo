import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from "typeorm";
import { Wilder } from "./Wilder";
import { ObjectType, Field } from "type-graphql";

@ObjectType()
@Entity()
export class Skill {
	@Field()
	@PrimaryGeneratedColumn()
	id: number;

	@Field()
	@Column({ unique: true })
	name: string;

	// @Column()
	// vote: number; -- grade (note)

	@Field(() => [Wilder])
	@ManyToMany((type) => Wilder, (wilder) => wilder.skills)
	wilder: Wilder[];
}

// columns: {
// 	id: {
// 		primary: true,
// 		generated: true,
// 		type: "int",
// 	},
