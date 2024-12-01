import { registerDecorator, ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator';
import { UsuarioRepository } from '../usuario.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
@ValidatorConstraint({ async: true })
export class EmailUnicaoValidator implements ValidatorConstraintInterface {

    constructor(private usuarioRepository: UsuarioRepository) {}

    async validate(email: string, validationArguments?: ValidationArguments): Promise<boolean> {
       const existe = await this.usuarioRepository.validaEmail(email);

       return !existe;
    }
}

export const EmailUnico = (opcoesDeValidacao: ValidationOptions) => {
    return (object: object, propertyName: string) => {
        registerDecorator({
            target: object.constructor,
            propertyName: propertyName,
            options: opcoesDeValidacao,
            constraints: [],
            validator: EmailUnicaoValidator,
        });
    };
}   

