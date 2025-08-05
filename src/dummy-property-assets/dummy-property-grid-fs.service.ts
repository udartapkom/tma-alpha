import { Injectable } from '@nestjs/common';
import { GridFSBucket, Db } from 'mongodb';
import { Connection } from 'mongoose';
import { nanoid } from 'nanoid';
import { PassThrough  } from 'stream';

@Injectable()
export class GridFsService {
  private gridFsBucket?: GridFSBucket;
  private db?: Db;
  constructor (private connection: Connection) {
    this.db = connection.db;
    if (!this.db) {
      throw new Error('MongoDB connection not available');
    } else {
      this.gridFsBucket = new GridFSBucket(this.db);
    }
  }
  async uploadFile(file: Express.Multer.File): Promise<string> {
    if (!this.gridFsBucket || !this.db) {
      throw new Error('GridFS bucket not initialized');
    }

    const filename = `${nanoid()}-${file.originalname}`;
    const uploadStream = this.gridFsBucket.openUploadStream(filename);

    // Преобразуем buffer в поток
    const passThroughStream = new PassThrough();

    // Записываем буфер в поток
    passThroughStream.end(file.buffer);

    return new Promise((resolve, reject) => {
      passThroughStream
        .pipe(uploadStream)
        .on('finish', () => resolve(filename))
        .on('error', (error) => reject(error));
    });
  }
}