import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UserSetting {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @Field((type) => Int)
  userId: number;

  @Field({ defaultValue: false })
  recieveNotifications: boolean;

  @Field({ defaultValue: false })
  recieveEmails: boolean;
}
