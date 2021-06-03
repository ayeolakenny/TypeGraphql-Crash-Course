import { User } from "../entities/User";
import { Arg, Args, Mutation, Query, Resolver } from "type-graphql";
import { UserArgs, UserInput } from "../types";

const users = [
  {
    id: 1,
    firstname: "John",
    lastname: "Doe",
    age: 29,
    email: "john@john.com",
    confirmed: true,
  } as User,
  {
    id: 2,
    firstname: "Jane",
    lastname: "Doe",
    age: 30,
    email: "jane@jane.com",
    confirmed: false,
  } as User,
];

@Resolver(() => User)
export class UserResolver {
  @Query(() => [User], { nullable: true })
  async users(): Promise<User[] | null> {
    // logic to get users
    return users;
  }

  @Query(() => User, { nullable: true })
  async user(@Args() data: UserArgs): Promise<User | undefined | null> {
    const user = users.find((user) => user.id === data.id);
    if (data.firstname === user?.firstname) return user;
    else return null;
  }

  @Mutation(() => User)
  async addUser(
    @Arg("data") { confirmed, firstname, lastname, age, email }: UserInput
  ): Promise<User> {
    const newUser = {
      id: Math.random(),
      confirmed,
      email,
      firstname,
      lastname,
      age,
    } as User;
    users.push(newUser);
    return newUser;
  }
}
