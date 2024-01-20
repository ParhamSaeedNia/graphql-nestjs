import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { UserSetting } from '../models/UserSetting';
import { CreateUserSettingsInput } from '../utils/CreateUserSettingsInput';
import { mockUserSettings } from 'src/__mocks__/mockUserSettings';

@Resolver()
export class UserSettingsResolver {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @Mutation((returns) => UserSetting)
  createUserSettings(
    @Args('createUserSettingsData')
    createUserSettingsData: CreateUserSettingsInput,
  ) {
    const { userId, receiveEmails, receiveNotifications } =
      createUserSettingsData;

    const newSetting = { userId, receiveEmails, receiveNotifications };
    mockUserSettings.push(newSetting);
    console.log(newSetting);
    return newSetting;
  }
}
