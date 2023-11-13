import { BadRequestException, Injectable } from '@nestjs/common'
import { CreateTaskDto } from './dto/create-task.dto'
import { UpdateTaskDto } from './dto/update-task.dto'
import { PrismaService } from 'src/prisma.service'

@Injectable()
export class TaskService {
	constructor(private prisma: PrismaService) {}

	async create(dto: CreateTaskDto, userId: number) {
		return this.prisma.task.create({
			data: {
				title: dto.title,
				description: dto.description,
				user: {
					connect: {
						id: userId
					}
				},
				parent: {
					connect: {
						id: dto.parentId
					}
				}
			}
		})
	}

	async findAll(userId: number) {
		return this.prisma.task.findMany({
			where: {
				userId: userId
			},
			orderBy: {
				createdAt: 'desc'
			}
		})
	}

	async findOne(id: number, userId: number) {
		await this.validateOwner(id, userId)

		return this.prisma.task.findUnique({
			where: {
				id: id
			}
		})
	}

	async update(id: number, dto: UpdateTaskDto, userId: number) {
		await this.validateOwner(id, userId)

		return this.prisma.task.update({
			where: {
				id: id
			},
			data: {
				title: dto.title,
				description: dto.description,
				user: {
					connect: {
						id: userId
					}
				},
				parent: {
					connect: {
						id: dto.parentId
					}
				}
			}
		})
	}

	async delete(id: number, userId: number) {
		await this.validateOwner(id, userId)
		return this.prisma.task.delete({
			where: {
				id: id
			}
		})
	}

	async validateOwner(id: number, userId: number) {
		const task = await this.prisma.task.findUniqueOrThrow({
			where: {
				id: id
			}
		})
		if (task.userId !== userId) throw new BadRequestException()
	}
}
