import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { stringify } from 'querystring';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async singIn(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }
    //here desestruct a pass because the user not need show this
    const { password, ...result } = user;

    return result;
  }
}
