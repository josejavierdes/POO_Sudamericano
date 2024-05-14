import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { CreaturesModule } from './creatures/creatures.module';
import { CreaturaModule } from './creatura/creatura.module';

@Module({
  imports: [PrismaModule, CreaturesModule, CreaturaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
