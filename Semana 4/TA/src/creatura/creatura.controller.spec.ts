import { Test, TestingModule } from '@nestjs/testing';
import { CreaturaController } from './creatura.controller';
import { CreaturaService } from './creatura.service';

describe('CreaturaController', () => {
  let controller: CreaturaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CreaturaController],
      providers: [CreaturaService],
    }).compile();

    controller = module.get<CreaturaController>(CreaturaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
