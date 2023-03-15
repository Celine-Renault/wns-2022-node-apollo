import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from "typeorm";
import { Wilder } from "./Wilder";

@Entity()
export class Skill {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ unique: true })
	name: string;

	// @Column()
	// vote: number;

	@ManyToMany((type) => Wilder, (wilder) => wilder.skills)
	wilder: Wilder[];
}

// columns: {
// 	id: {
// 		primary: true,
// 		generated: true,
// 		type: "int",
// 	},
