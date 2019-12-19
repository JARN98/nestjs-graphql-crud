import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { PublicationsService } from './publications.service';
import { PublicationDto } from './dto/publications.dto';
import { PublicationInput } from './publications-input.input';


@Resolver('Publications')
export class PublicationsResolver {
  constructor(private readonly publicationsService: PublicationsService) { }

  @Query(() => [PublicationDto])
  async publications(): Promise<PublicationDto[]> {
    return this.publicationsService.findAll();
  }

  @Query(() => PublicationDto)
  async onePublication(@Args('id') id: string): Promise<PublicationDto> {
    return this.publicationsService.findOne(id);
  }

  @Mutation(() => PublicationDto)
  async createPublication(@Args('input') input: PublicationInput): Promise<PublicationDto> {
    return this.publicationsService.create(input);
  }

  @Mutation(() => PublicationDto)
  async updatePublication(
    @Args('id') id: string,
    @Args('input') input: PublicationInput,
  ): Promise<PublicationDto> {
    return this.publicationsService.update(id, input);
  }

  @Mutation(() => PublicationDto)
  async deletePublication(@Args('id') id: string): Promise<PublicationDto> {
    return this.publicationsService.delete(id);
  }
}
