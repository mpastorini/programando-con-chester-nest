import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from './create-user.dto';
import { User } from '../users/user.entity';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async singUp(createUserDto: CreateUserDto): Promise<User> {
    const { username, password, email } = createUserDto;

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = this.usersService.create({
      ...createUserDto,
      password: hashedPassword,
    });

    return newUser;
  }

  async singIn(
    username: string,
    pass: string
  ): Promise<{ acces_token: string }> {
    const user = await this.usersService.findOne(username);
    if (!user || !(await bcrypt.compare(pass, user.password))) {
      throw new UnauthorizedException('Invalid credentials');
    }
    //here desestruct a pass because the user not need show this
    const payload = { sub: user.id, username: user.username };

    return { acces_token: await this.jwtService.signAsync(payload) };
  }
}
