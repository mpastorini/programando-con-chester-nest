import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';
import { UnauthorizedException } from '@nestjs/common';

describe('AuthService', () => {
  let service: AuthService;
  let jwtService: JwtService;
  let usersService: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        {
          provide: JwtService,
          useValue: {
            signAsync: jest.fn().mockReturnValue('mockedJwtToken'),
          },
        },
        {
          provide: UsersService,
          useValue: {
            findOne: jest.fn().mockResolvedValue({
              id: 1,
              username: 'testUser',
              password: await bcrypt.hash('password', 10),
            }),
          },
        },
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
    jwtService = module.get<JwtService>(JwtService);
    usersService = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  it('should return a JWT token', async () => {
    const username = 'testUser';
    const password = 'password';

    const result = await service.singIn(username, password);

    expect(result).toEqual({ acces_token: 'mockedJwtToken' });
    expect(usersService.findOne).toHaveBeenCalledWith(username);
    expect(jwtService.signAsync).toHaveBeenCalledWith({
      username: 'testUser',
      sub: 1,
    });
  });

  it('should throw an UnauthorizedException if credentials are invalid', async () => {
    jest
      .spyOn(bcrypt, 'compare')
      .mockImplementation((plainText: string, hashed: string) => {
        return Promise.resolve(false);
      });
    const username = 'testUser';
    const password = 'wrongPassword';

    await expect(service.singIn(username, password)).rejects.toThrow(
      UnauthorizedException
    );
  });
});
