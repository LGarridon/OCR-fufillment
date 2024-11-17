import { Test, TestingModule } from '@nestjs/testing';
import { ApiController } from './api.controller';
import { OcrModule } from '../ocr/ocr.module';

describe('ApiController', () => {
  let controller: ApiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ApiController],
      imports: [OcrModule]
    }).compile();

    controller = module.get<ApiController>(ApiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
