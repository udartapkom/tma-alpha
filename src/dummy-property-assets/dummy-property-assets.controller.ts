import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { DummyPropertyAssetsService } from './dummy-property-assets.service';

@Controller('dummy-property-assets')
export class DummyPropertyAssetsController {
  constructor(private readonly dummyPropertyAssetsService: DummyPropertyAssetsService) {}
  @Post('create')
  async create(@Res() response, @Body() dummyPropert: any) {
    const newDummy = await this.dummyPropertyAssetsService.create(dummyPropert);
    return response.status(HttpStatus.CREATED).json(newDummy);
  }
  @Get('getall')
  async findAll() {
    return this.dummyPropertyAssetsService.findAll();
  }
}
