import { Controller } from '@nestjs/common';
import { LoginService } from './login.service';
import { BaseController } from '../base-services/base.controller';
import { Login } from './login.entity';

@Controller('login')
export class LoginController extends BaseController<Login> {
  constructor(private readonly loginService: LoginService) {
    super(loginService);
  }
}
