import {
  Args,
  Int,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { User } from '../models/User';
import { mockUsers } from 'src/__mocks__/mockUser';
import { UserSetting } from '../models/UserSetting';
import { mockUserSettings } from 'src/__mocks__/mockUserSettings';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
@Resolver((of) => User)
export class UserResolver {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @Query((returns) => User, { nullable: true })
  getUserById(@Args('id', { type: () => Int }) id: number) {
    return mockUsers.find((user) => user.id === id);
  }

  @Query(() => [User])
  getUsers() {
    return mockUsers;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @ResolveField((returns) => UserSetting, { name: 'settings', nullable: true })
  getUserSettings(@Parent() user: User) {
    return mockUserSettings.find((setting) => setting.userId === user.id);
  }
}
