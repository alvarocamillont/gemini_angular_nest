import { Body, Controller, Post } from '@nestjs/common';
import { ApiBody } from '@nestjs/swagger';
import { GenerateTextDto } from './generate-text.dto';
import { PromptService } from './prompt.service';
import { GenAiResponse } from './response.interface';

@Controller('prompt')
export class PromptController {
  constructor(private service: PromptService) {}

  @ApiBody({
    description: 'Prompt',
    required: true,
    type: GenerateTextDto,
  })
  @Post('text')
  generateText(@Body() dto: GenerateTextDto): Promise<GenAiResponse> {
    return this.service.generateText(dto.prompt);
  }
}
