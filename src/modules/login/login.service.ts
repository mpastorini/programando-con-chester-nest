import { Injectable } from '@nestjs/common';
import { BaseService } from '../base-services/base.service';
import { Login } from './login.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class LoginService extends BaseService<Login> {
  constructor(
    @InjectRepository(Login)
    private readonly loginRepository: Repository<Login>
  ) {
    super(loginRepository);
  }
}
