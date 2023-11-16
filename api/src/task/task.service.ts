import {
	BadRequestException,
	Injectable,
	NotFoundException
} from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { TaskDto } from './dto/task.dto'

@Injectable()
export class TaskService {
	constructor(private prisma: PrismaService) {}

	async create(dto: TaskDto, userId: number) {
		const task = await this.prisma.task.create({
			data: {
				title: '',
				user: {
					connect: {
						id: userId
					}
				}
			}
		})
		return this.update(task.id, dto, userId)
	}

	async findAll(userId: number) {
		return this.prisma.task.findMany({
			where: {
				userId
			},
			orderBy: {
				id: 'desc'
			}
		})
	}

	async findOne(id: number, userId: number) {
		const task = await this.validateOwner(id, userId)
		return task
	}

	async update(id: number, dto: TaskDto, userId: number) {
		await this.validateOwner(id, userId)
		const { title, description, parentId, status, children } = dto
		if (parentId) {
			await this.validateParent(parentId)
			await this.prisma.task.update({
				where: {
					id
				},
				data: {
					parent: {
						connect: {
							id: parentId
						}
					}
				}
			})
		}
		return this.prisma.task.update({
			where: {
				id
			},
			data: {
				title,
				description,
				status
			}
		})
	}

	async delete(id: number, userId: number) {
		await this.validateOwner(id, userId)
		return this.prisma.task.delete({
			where: {
				id
			}
		})
	}

	async validateOwner(id: number, userId: number) {
		const task = await this.prisma.task.findUnique({
			where: {
				id
			}
		})
		if (!task) throw new NotFoundException('Task not found')
		if (task.userId !== userId)
			throw new BadRequestException('User is not a task owner')
		return task
	}

	async validateParent(id: number) {
		if (id) {
			const parent = this.prisma.task.findUnique({
				where: {
					id
				}
			})
			if (!parent) throw new BadRequestException('Parent task not exist')
		}
	}
}
