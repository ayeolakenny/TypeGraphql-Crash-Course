// firstname
// lastname
// age
// confirmed
// email

import { Field, ObjectType } from "type-graphql";

@ObjectType({ description: "User shema" })
export class User {
  @Field({ nullable: false, description: "User unique id" })
  id: number;
  @Field({ nullable: false, description: "User firstname" })
  firstname: string;
  @Field({ nullable: false, description: "User lastname" })
  lastname: string;
  @Field({ nullable: true, description: "User email" })
  email: string;
  @Field({ nullable: true, description: "User age" })
  age?: number;
  confirmed: boolean;
}
