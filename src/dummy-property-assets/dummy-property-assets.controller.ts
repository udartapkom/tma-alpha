import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { DummyPropertyAssetsService } from './dummy-property-assets.service';
import { DummyPropertyDto } from 'src/dto/dummyPropertyDto';
@Controller('dummy-property-assets')
export class DummyPropertyAssetsController {
  constructor(
    private readonly dummyPropertyAssetsService: DummyPropertyAssetsService,
  ) {}
  @Post('create')
  async create(@Res() response, @Body() dummyPropertyDto: DummyPropertyDto) {
    const newDummy =
      await this.dummyPropertyAssetsService.create(dummyPropertyDto);
    return {
      statusCode: HttpStatus.CREATED,
      data: newDummy,
    };
  }

  @Get('getall')
  async findAll() {
    return await this.dummyPropertyAssetsService.findAll();
  }
}
