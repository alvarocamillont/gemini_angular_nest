import { Controller, Post } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { ChatService } from './chat.service';

@ApiTags('chat')
@Controller('chat')
export class ChatController {
  constructor(private service: ChatService) {}

  @ApiResponse({ status: 201 })
  @Post()
  insert() {
    return this.service.generateContentAPI();
  }
}
