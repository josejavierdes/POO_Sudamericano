import { Module } from '@nestjs/common';
import { CreaturaService } from './creatura.service';
import { CreaturaController } from './creatura.controller';

@Module({
  controllers: [CreaturaController],
  providers: [CreaturaService],
})
export class CreaturaModule {}
