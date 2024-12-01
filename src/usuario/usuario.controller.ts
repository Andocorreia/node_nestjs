import { Body, Controller, Get, Post } from '@nestjs/common';
import { CriaUsuarioDto } from './dto/criar.usuario.dto';
import { UsuarioRepository } from './usuario.repository';

@Controller('/usuarios')
export class UsuarioController {
    
    constructor(private usuarioRepository: UsuarioRepository) {}
   
    @Post()
    async criarUsuatio(@Body() dadosUsuario: CriaUsuarioDto) {
        
        return this.usuarioRepository.salvar(dadosUsuario)
    }

    @Get()
    async listarUsuarios() {
        return this.usuarioRepository.listar()
    }   
    
}