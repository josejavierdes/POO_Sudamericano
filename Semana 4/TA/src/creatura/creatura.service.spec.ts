import { Test, TestingModule } from '@nestjs/testing';
import { CreaturaService } from './creatura.service';

describe('CreaturaService', () => {
  let service: CreaturaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreaturaService],
    }).compile();

    service = module.get<CreaturaService>(CreaturaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
