import { ArgsType, Field, InputType } from "type-graphql";
// import { minLength } from "class-validator";

@ArgsType()
export class UserArgs {
  @Field()
  id: number;

  @Field()
  firstname: string;
}

@InputType()
export class UserInput {
  @Field()
  firstname: string;

  @Field()
  lastname: string;

  @Field({ nullable: true })
  age?: number;

  @Field()
  confirmed: boolean;

  @Field()
  email?: string;
}
