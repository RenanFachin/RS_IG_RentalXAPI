import { Repository, getRepository } from 'typeorm'
import { ICreateUserTokenDTO } from '../../../dtos/ICreateUserTokenDTO'
import { IUsersTokensRepository } from '../../../repositories/IUsersTokensRepository'
import { UserTokens } from '../entities/UserTokens'

class UsersTokensRepository implements IUsersTokensRepository {
  private repository: Repository<UserTokens>
  constructor() {
    this.repository = getRepository(UserTokens)
  }

  async create({
    user_id,
    expires_date,
    refresh_token,
  }: ICreateUserTokenDTO): Promise<UserTokens> {
    const userToken = this.repository.create({
      expires_date,
      refresh_token,
      user_id,
    })

    await this.repository.save(userToken)

    return userToken
  }
}

export { UsersTokensRepository }
