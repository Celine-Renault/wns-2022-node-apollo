import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Skill {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	name: string;

	@Column({ unique: true })
	vote: number;
}

// columns: {
// 	id: {
// 		primary: true,
// 		generated: true,
// 		type: "int",
// 	},
// 	name: {
// 		type: "text",
// 		unique: true,
// 	},
// },
