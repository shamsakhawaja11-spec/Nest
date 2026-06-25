/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PrismaService } from 'src/database/prisma.service';
import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
  imports: [
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: {
        expiresIn: 60*5,
      },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, PrismaService,JwtStrategy],
})
export class AuthModule {}