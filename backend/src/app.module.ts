import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ChatModule } from './chat/chat.module';

@Module({
  imports: [ChatModule, ConfigModule.forRoot({ isGlobal: true })],
})
export class AppModule {}
