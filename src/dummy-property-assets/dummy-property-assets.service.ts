import { Injectable } from '@nestjs/common';
import {
  DummyProperty,
  DummyPropertyDocument,
} from '../schemas/dummy-property.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { DummyPropertyDto } from 'src/dto/dummyPropertyDto';

@Injectable()
export class DummyPropertyAssetsService {
  constructor(
    @InjectModel(DummyProperty.name)
    private dummuPropertyModel: Model<DummyPropertyDocument>,
  ) {}
  async create(createDummy: DummyPropertyDto): Promise<DummyProperty> {
    const createdDummy = new this.dummuPropertyModel(createDummy);
    return await this.dummuPropertyModel.create(createdDummy);
  }
  async findAll(): Promise<DummyProperty[]> {
    return this.dummuPropertyModel.find().exec();
  }
}
