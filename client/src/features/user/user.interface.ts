export interface IUser {
  username: string
}

export interface IInitialState {
  user: IUser | null
  isLoading: boolean
}

export interface IToken {
  user: IUser
  accessToken: string
  refreshToken: string
}

export interface IAuth {
  username: string
  password: string
}
