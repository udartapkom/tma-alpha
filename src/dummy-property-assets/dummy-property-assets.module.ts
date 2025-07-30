import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DummyPropertyAssetsService } from './dummy-property-assets.service';
import { DummyPropertyAssetsController } from './dummy-property-assets.controller';
import { DummuPropertySchema, DummyProperty } from '../schemas/dummy-property.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: DummyProperty.name, schema: DummuPropertySchema}])],
  controllers: [DummyPropertyAssetsController],
  providers: [DummyPropertyAssetsService],
})
export class DummyPropertyAssetsModule {}
