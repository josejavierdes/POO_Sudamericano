import { Injectable } from '@nestjs/common';
import { CreateCreaturaDto } from './dto/create-creatura.dto';
import { UpdateCreaturaDto } from './dto/update-creatura.dto';

@Injectable()
export class CreaturaService {
  create(createCreaturaDto: CreateCreaturaDto) {
    return 'This action adds a new creatura';
  }

  findAll() {
    return `This action returns all creatura`;
  }

  findOne(id: number) {
    return `This action returns a #${id} creatura`;
  }

  update(id: number, updateCreaturaDto: UpdateCreaturaDto) {
    return `This action updates a #${id} creatura`;
  }

  remove(id: number) {
    return `This action removes a #${id} creatura`;
  }
}
