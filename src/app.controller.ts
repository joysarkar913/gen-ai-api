import { Controller, Get, Query, BadRequestException } from '@nestjs/common';
import { AppService } from './app.service.js';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello(@Query('prompt') prompt: string,@Query("req") req:string): Promise<string> {
    if (!prompt) {
      throw new BadRequestException('request error');
    }
    
    return await this.appService.getHello(prompt,req);
  }
}