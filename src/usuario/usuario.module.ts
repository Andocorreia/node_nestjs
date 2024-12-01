import { Module } from '@nestjs/common';
import { UsuarioController } from './usuario.controller';
import { UsuarioRepository } from './usuario.repository';
import { EmailUnicaoValidator } from './validacao/email.unico.validator';

@Module({  controllers: [UsuarioController] , providers: [UsuarioRepository, EmailUnicaoValidator] })
export class UsuarioModule{}