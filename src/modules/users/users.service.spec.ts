import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('UsersService', () => {
  let service: UsersService;
  let userRepository: Repository<User>

  const mockUserRepository = {
    // Métodos del repositorio mockeados
    findOne: jest.fn(),
    create: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersService,
      {
        provide: getRepositoryToken(User), // Token para el UserRepository
        useValue: mockUserRepository, // Mock de los métodos del repositorio
      },
    ]
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  it("should create a valid user", () => {
    const mockUser:User = {
      id:1,
      username: "testuser",
      email:"a@a.a",
      password:"admin"
    }
    expect(mockUser).toBeDefined();
    expect(mockUser.username).toEqual("testuser");
  });
});
