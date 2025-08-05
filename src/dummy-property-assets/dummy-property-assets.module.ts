import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DummyPropertyAssetsService } from './dummy-property-assets.service';
import { DummyPropertyAssetsController } from './dummy-property-assets.controller';
import {
  DummuPropertySchema,
  DummyProperty,
} from '../schemas/dummy-property.schema';
import {
  FileDocument,
  FileSchema
} from '../schemas/file.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: DummyProperty.name, schema: DummuPropertySchema },
      { name: FileDocument.name, schema: FileSchema}
    ]),
  ],
  controllers: [DummyPropertyAssetsController],
  providers: [DummyPropertyAssetsService],
})
export class DummyPropertyAssetsModule {}
