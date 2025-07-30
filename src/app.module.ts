import { Module } from '@nestjs/common';
import { Connection } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { DummyPropertyAssetsModule } from './dummy-property-assets/dummy-property-assets.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/tmaAlpha', {
      onConnectionCreate: (connection: Connection) => {
        connection.on('connected', () => console.log('connected'));
        connection.on('open', () => console.log('open'));
        connection.on('disconnected', () => console.log('disconnected'));
        connection.on('reconnected', () => console.log('reconnected'));
        connection.on('disconnecting', () => console.log('disconnecting'));
        return connection;
      },
    }),
    DummyPropertyAssetsModule,
  ],
  exports: [MongooseModule],
})
export class AppModule {}
