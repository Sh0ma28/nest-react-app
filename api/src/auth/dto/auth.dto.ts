import { MinLength, IsString } from 'class-validator'

export class AuthDto {
	@MinLength(3, {
		message: 'Username must be at least 3 characters long'
	})
	@IsString()
	username: string

	@MinLength(3, {
		message: 'Password must be at least 3 characters long'
	})
	@IsString()
	password: string
}
