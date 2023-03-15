import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	ManyToMany,
	JoinTable,
} from "typeorm";
import { Skill } from "./Skill";

@Entity()
export class Wilder {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	name: string;

	@Column()
	city: string;

	@ManyToMany(() => Skill)
	@JoinTable()
	skills: Skill[];
}

// columns: {
//     id: {
//         primary: true,
//         generated: true,
//         type: "int"
//     },
//     name: {
//         type: "text",
//     },
//     city: {
//         type: "text",
//         nullable: true,
//     },
// },
// relations:{
//     skills: {
//         target: "Skill",
//         type: "many-to-many",
//         joinTable: true,
//         eager: true,
