import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getList(): string[] {
    return ['Cаня', 'Паша', 'Олег'];
  }
}
