import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from './create-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  async singIn(@Body() singInDto: Record<string, any>) {
    return this.authService.singIn(singInDto.username, singInDto.password);
  }

  @Post('register')
  async singUp(@Body() createUserDto: CreateUserDto) {
    const user = await this.authService.singUp(createUserDto);

    return { message: 'User created successfully', user };
  }
}
//should type a custom OK or Not for user creation
