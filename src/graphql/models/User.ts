import { Field, Int, ObjectType } from '@nestjs/graphql';
import { UserSetting } from './UserSetting';

@ObjectType()
export class User {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @Field((type) => Int)
  id: number;

  @Field()
  username: string;

  @Field({ nullable: true })
  displayName?: string;

  @Field({ nullable: true })
  settings?: UserSetting;
}
