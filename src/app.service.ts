import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! Tobiloba';
  }
  getGreeting(): string {
    return 'Tobi is greeting you for the first Time in history';
  }
}
