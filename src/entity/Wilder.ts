import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	ManyToMany,
	JoinTable,
} from "typeorm";
import { Skill } from "./Skill";

import { Field, ObjectType } from "type-graphql";

@ObjectType()
@Entity()
export class Wilder {
	@Field()
	@PrimaryGeneratedColumn()
	id: number;

	@Field()
	@Column()
	name: string;

	@Field()
	@Column()
	city: string;

	@Field(() => [Skill])
	@ManyToMany(() => Skill, (skill) => skill.wilder, { eager: true })
	@JoinTable()
	skills: Skill[];

	// @ManyToMany(() => Skill)
	// @JoinTable()
	// skills: Skill[];
}
