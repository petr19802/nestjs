import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get('list')
  getList(): string[] {
    return this.appService.getList();
  }

}
