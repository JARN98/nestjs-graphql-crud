import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Publications } from './interface/publications.interface';
import { PublicationDto } from './dto/publications.dto';
import { PublicationInput } from './publications-input.input';

@Injectable()
export class PublicationsService {
  constructor(@InjectModel('Publication') private publicationModel: Model<Publications>) { }

  async findAll(): Promise<PublicationDto[]> {
    return await this.publicationModel.find().exec();
  }

  async create(publicationDto: PublicationInput): Promise<PublicationInput> {
    const createdPublication = new this.publicationModel(publicationDto);
    return await createdPublication.save();
  }

  async findOne(id: string): Promise<PublicationDto> {
    return await this.publicationModel.findOne({ _id: id });
  }

  async delete(id: string): Promise<PublicationDto> {
    return await this.publicationModel.findByIdAndRemove(id);
  }

  async update(id: string, item: Publications): Promise<PublicationDto> {
    return await this.publicationModel.findByIdAndUpdate(id, item, { new: true });
  }
}
