import { Injectable } from '@nestjs/common';
import { CriaUsuarioDto } from './dto/criar.usuario.dto';

@Injectable()
export class UsuarioRepository {
    private usuarios: CriaUsuarioDto[] = [];

    async salvar(usuario: CriaUsuarioDto) {
        this.usuarios.push(usuario);
    }

    async listar() {
        return this.usuarios;
        
    }

    async validaEmail(email: string) {
        const existe = this.usuarios.find((usuario) => usuario.email === email);
        return existe !== undefined;
    }
}