import { EnumTaskStatus } from '@prisma/client'
import { IsArray, IsEnum, IsNumber, IsOptional, IsString } from 'class-validator'

export class TaskDto {
	@IsString()
	title: string

	@IsOptional()
	@IsString()
	description: string

	@IsOptional()
	@IsNumber()
	parentId: number

	@IsOptional()
	@IsString()
	status: EnumTaskStatus

	@IsArray()
	children: number[]
}
