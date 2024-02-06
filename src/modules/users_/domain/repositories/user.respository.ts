// create interfaces repositories for user domain
// example:
import type { UserType } from '../user.type';
import type { UserEmail } from '../value-obects/user.email';
export interface IUserRepository {
  getUserFromRepository(email: UserEmail): Promise<UserType | undefined>;
}