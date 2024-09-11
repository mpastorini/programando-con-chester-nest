import { Body, Controller, Post } from '@nestjs/common';
import { LoginService } from './login.service';
import { BaseController } from '../base-services/base.controller';
import { Login } from './login.entity';
import { userDto } from '../dto/user.dto';

@Controller('login')
export class LoginController extends BaseController<Login> {
  constructor(private readonly loginService: LoginService) {
    super(loginService);
  }

  create(@Body() createLogin: userDto) {
    return this.loginService.create(createLogin);
  }
}
