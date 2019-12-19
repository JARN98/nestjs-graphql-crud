import { InputType, Field } from 'type-graphql';

@InputType()
export class PublicationInput {
  @Field()
  readonly title: string;
  @Field()
  readonly content: string;

}