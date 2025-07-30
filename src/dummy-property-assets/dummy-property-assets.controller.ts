import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { DummyPropertyAssetsService } from './dummy-property-assets.service';
import { DummyPropertyDto } from 'src/dto/dummyPropertyDto';
@Controller('dummy-property-assets')
export class DummyPropertyAssetsController {
  constructor(
    private readonly dummyPropertyAssetsService: DummyPropertyAssetsService,
  ) {}
  @Post('create')
  async create(
    @Res() response: Response,
    @Body() dummyPropertyDto: DummyPropertyDto,
  ) {
    const newDummy =
      await this.dummyPropertyAssetsService.create(dummyPropertyDto);
    return response.status(HttpStatus.CREATED).json(newDummy);
  }

  @Get('getall')
  async findAll() {
    return await this.dummyPropertyAssetsService.findAll();
  }
}
