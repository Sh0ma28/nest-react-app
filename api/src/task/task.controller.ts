import {
	Controller,
	Get,
	Post,
	Body,
	Patch,
	Param,
	Delete
} from '@nestjs/common'
import { TaskService } from './task.service'
import { CreateTaskDto } from './dto/create-task.dto'
import { UpdateTaskDto } from './dto/update-task.dto'
import { Auth } from 'src/decorators/auth.decorator'
import { CurrentUser } from 'src/decorators/user.decorator'

@Controller('tasks')
export class TaskController {
	constructor(private readonly taskService: TaskService) {}

	@Auth()
	@Post()
	async create(
		@Body() createTaskDto: CreateTaskDto,
		@CurrentUser('id') userId: number
	) {
		return this.taskService.create(createTaskDto, userId)
	}

	@Auth()
	@Get()
	async findAll(@CurrentUser('id') userId: number) {
		return this.taskService.findAll(userId)
	}

	@Auth()
	@Get(':id')
	async findOne(@Param('id') id: string, @CurrentUser('id') userId: number) {
		return this.taskService.findOne(+id, userId)
	}

	@Auth()
	@Patch(':id')
	async update(
		@Param('id') id: string,
		@Body() updateTaskDto: UpdateTaskDto,
		@CurrentUser('id') userId: number
	) {
		return this.taskService.update(+id, updateTaskDto, userId)
	}

	@Auth()
	@Delete(':id')
	async delete(@Param('id') id: string, @CurrentUser('id') userId: number) {
		return this.taskService.delete(+id, userId)
	}
}
