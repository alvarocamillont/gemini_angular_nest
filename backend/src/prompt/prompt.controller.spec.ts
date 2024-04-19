import { Test, TestingModule } from '@nestjs/testing';
import { PromptController } from './prompt.controller';

describe('PromptController', () => {
  let controller: PromptController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PromptController],
    }).compile();

    controller = module.get<PromptController>(PromptController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
