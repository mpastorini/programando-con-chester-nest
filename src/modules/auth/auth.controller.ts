import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from './create-user.dto';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { LoginUserDto } from './login-user.dto';
import { AuthGuard } from './auth.guard';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  @ApiBody({ type: LoginUserDto })
  async singIn(@Body() singInDto: Record<string, any>) {
    return this.authService.singIn(singInDto.username, singInDto.password);
  }
  @UseGuards(AuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }

  @Post('register')
  @ApiBody({ type: CreateUserDto })
  async singUp(@Body() createUserDto: CreateUserDto) {
    const user = await this.authService.singUp(createUserDto);
    return { message: 'User created successfully', user };
  }
}
//should type a custom OK or Not for user creation
