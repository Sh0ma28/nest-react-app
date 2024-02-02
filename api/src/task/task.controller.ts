import {
	Controller,
	Get,
	Post,
	Body,
	Patch,
	Param,
	Delete,
	ValidationPipe,
	UsePipes
} from '@nestjs/common'
import { TaskService } from './task.service'
import { TaskDto } from './dto/task.dto'
import { Auth } from 'src/decorators/auth.decorator'
import { CurrentUser } from 'src/decorators/user.decorator'

@Controller('tasks')
export class TaskController {
	constructor(private readonly taskService: TaskService) {}

	@UsePipes(
		new ValidationPipe({
			whitelist: true
		})
	)
	@Auth()
	@Post()
	async create(@Body() dto: TaskDto, @CurrentUser('id') userId: number) {
		return this.taskService.create(dto, userId)
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

	@UsePipes(
		new ValidationPipe({
			whitelist: true
		})
	)
	@Auth()
	@Patch(':id')
	async update(
		@Param('id') id: string,
		@Body() dto: TaskDto,
		@CurrentUser('id') userId: number
	) {
		return this.taskService.update(+id, dto, userId)
	}

	@Auth()
	@Delete(':id')
	async delete(@Param('id') id: string, @CurrentUser('id') userId: number) {
		return this.taskService.delete(+id, userId)
	}
}
