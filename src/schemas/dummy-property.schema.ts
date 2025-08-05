import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type DummyPropertyDocument = HydratedDocument<DummyProperty>;
@Schema()
export class DummyProperty {
  @Prop({ required: true })
  id: number;
  @Prop({ required: true })
  imageID: number;
  @Prop({ required: true })
  name: string;
  @Prop({ required: true })
  location: string;
  @Prop({ required: true })
  sharesAvailable: number;
  @Prop({ required: true })
  sharePriceTON: number;
  @Prop([{ type: Types.ObjectId, ref: 'File' }])
  files: Types.ObjectId[];
}
export const DummuPropertySchema = SchemaFactory.createForClass(DummyProperty);
