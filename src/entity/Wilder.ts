import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	ManyToMany,
	JoinTable,
} from "typeorm";
import { Skill } from "./Skill";
import { Field, ObjectType, ID } from "type-graphql";

@ObjectType()
@Entity()
export class Wilder {
	@Field(() => ID) // specific field to Primary Key, type ID key and not a number like typescript
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
