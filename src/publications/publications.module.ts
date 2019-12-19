import { Module } from '@nestjs/common';
import { PublicationsService } from './publications.service';
import { PublicationsResolver } from './publications.resolver';
import PublicationSchema from './schema/publication.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Publication', schema: PublicationSchema }])
  ],
  providers: [PublicationsService, PublicationsResolver]
})
export class PublicationsModule { }
