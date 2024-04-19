import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ChatModule } from './chat/chat.module';
import { PromptModule } from './prompt/prompt.module';

@Module({
  imports: [ChatModule, ConfigModule.forRoot({ isGlobal: true }), PromptModule],
})
export class AppModule {}
