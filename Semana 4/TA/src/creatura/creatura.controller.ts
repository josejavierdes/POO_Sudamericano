import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreaturaService } from './creatura.service';
import { CreateCreaturaDto } from './dto/create-creatura.dto';
import { UpdateCreaturaDto } from './dto/update-creatura.dto';

@Controller('creatura')
export class CreaturaController {
  constructor(private readonly creaturaService: CreaturaService) {}

  @Post()
  create(@Body() createCreaturaDto: CreateCreaturaDto) {
    return this.creaturaService.create(createCreaturaDto);
  }

  @Get()
  findAll() {
    return this.creaturaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.creaturaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCreaturaDto: UpdateCreaturaDto) {
    return this.creaturaService.update(+id, updateCreaturaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.creaturaService.remove(+id);
  }
}
