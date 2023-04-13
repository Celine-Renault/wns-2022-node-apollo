import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from "typeorm";
// BaseEntity,
import { Wilder } from "./Wilder";
import { ObjectType, Field } from "type-graphql";

@ObjectType()
@Entity()
// export class Skill extends BaseEntity {
export class Skill {
	// ajout de Skill extends BaseEntity pour eviter de repeter dataSource.getRepository(Skill) dans le SkillsResolver
	@Field()
	@PrimaryGeneratedColumn()
	id: number;

	@Field()
	@Column({ unique: true })
	name: string;

	// @Column()
	// vote: number; -- grade (note)

	@Field(() => [Wilder])
	@ManyToMany((type) => Wilder, (wilder) => wilder.skills) // pas oblige d'ajouter  { eager: true }, je peux le mettre uniqument c^té graphqm
	wilder: Wilder[];
}

// columns: {
// 	id: {
// 		primary: true,
// 		generated: true,
// 		type: "int",
// 	},
