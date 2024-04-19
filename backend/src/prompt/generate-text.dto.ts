import { ApiProperty } from '@nestjs/swagger';

export class GenerateTextDto {
  @ApiProperty({
    name: 'prompt',
    description: 'prompt of the question',
    type: 'string',
    required: true,
  })
  prompt: string;
}
