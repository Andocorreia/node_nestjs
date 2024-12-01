import { IsEmail, IsNotEmpty, Min, MinLength } from 'class-validator';
import { EmailUnico } from '../validacao/email.unico.validator';

export class CriaUsuarioDto {
  
    @IsNotEmpty({message: 'Nome é obrigatório'})
    nome: string;

    @IsEmail(undefined, { message: 'Email é obrigatório' })
    @EmailUnico({message: 'Email já cadastrado'})
    email: string;

    @MinLength(6, {message: 'Senha deve ter no mínimo 6 caracteres'})
    senha: string;

    @Min(18, {message: 'Idade deve ser maior ou igual a 18'})
    idade: number;

}