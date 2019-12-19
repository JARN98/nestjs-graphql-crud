import { IsNotEmpty, Length, IsString } from "class-validator";
import { ObjectType, Field, Int, ID } from 'type-graphql';

@ObjectType()
export class PublicationDto {
  @Field(() => ID)
  @IsString()
  readonly _id?: string;

  @Field()
  @Length(1, 250)
  @IsNotEmpty()
  readonly title: String;

  @Field()
  @Length(1, 10000)
  readonly content: String;
}