import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

@Schema({ timestamps: true })
export class FileDocument {
  @Prop({ required: true })
  filename: string;
  @Prop( { required: true })
  contentType: string;
  @Prop({ required: true })
  length: number;
}
export const FileSchema = SchemaFactory.createForClass(FileDocument);