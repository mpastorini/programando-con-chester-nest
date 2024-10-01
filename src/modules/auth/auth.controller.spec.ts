import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller';
import { JwtService } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { UsersService } from '../users/users.service';

describe('AuthController', () => {
  let controller: AuthController;
  let jwtService: JwtService;
  let authService: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [
        {
          provide: AuthService, // Mock del AuthService
          useValue: {
            singIn: jest
              .fn()
              .mockResolvedValue({ access_token: 'mockedJwtToken' }), // Mock de la función singIn
          },
        },
        {
          provide: JwtService,
          useValue: {
            sign: jest.fn().mockReturnValue('mockedJwtToken'),
          },
        },
        {
          provide: UsersService, // Mockea UsersService si es necesario
          useValue: {
            findOne: jest.fn().mockResolvedValue({
              username: 'testUser',
              userId: 1,
              password: 'hashedPassword', // Simula un hash de contraseña
            }),
          },
        },
      ],
    }).compile();

    controller = module.get<AuthController>(AuthController);
    jwtService = module.get<JwtService>(JwtService);
    authService = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
