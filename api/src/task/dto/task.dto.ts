import { IsNumber, IsOptional, IsString } from 'class-validator'

export class TaskDto {
	@IsString()
	title: string

	@IsOptional()
	@IsString()
	description: string

	@IsOptional()
	@IsNumber()
	parentId: number
}
