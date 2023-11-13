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
		await this.validateParent(dto)
		return this.prisma.task.create({
			data: {
				...dto,
				userId
			}
		})
	}

	async findAll(userId: number) {
		return this.prisma.task.findMany({
			where: {
				userId: userId
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
		await this.validateParent(dto)
		return this.prisma.task.update({
			where: {
				id: id
			},
			data: {
				...dto,
				userId
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
		const task = await this.prisma.task.findUnique({
			where: {
				id: id
			}
		})
		if (!task) throw new NotFoundException('Task not found')
		if (task.userId !== userId)
			throw new BadRequestException('User is not a task owner')
		return task
	}

	async validateParent(dto: TaskDto) {
		const { parentId } = dto
		if (parentId) {
			const parent = this.prisma.task.findUnique({
				where: {
					id: parentId
				}
			})
			if (!parent) throw new BadRequestException('Parent task not exist')
		}
	}
}
