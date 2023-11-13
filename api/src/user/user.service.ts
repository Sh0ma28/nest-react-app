import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'

@Injectable()
export class UserService {
	constructor(private prisma: PrismaService) {}

	async byId(id: number) {
		const user = await this.prisma.user.findUnique({
			where: {
				id: id
			},
			select: {
				id: true,
				username: true,
				password: false,
				tasks: true
			}
		})
		if (!user) throw new NotFoundException('User not found')
		return user
	}
}
