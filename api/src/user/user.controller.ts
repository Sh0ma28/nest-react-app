import { Controller, Get } from '@nestjs/common'
import { UserService } from './user.service'
import { CurrentUser } from 'src/decorators/user.decorator'
import { Auth } from 'src/decorators/auth.decorator'

@Controller('user')
export class UserController {
	constructor(private readonly userService: UserService) {}

	@Get()
	@Auth()
	async get(@CurrentUser('id') id: number) {
		return this.userService.byId(id)
	}
}
