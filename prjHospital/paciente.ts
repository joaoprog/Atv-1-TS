///<reference path='pessoa.ts'/>

namespace hospital{
    export abstract class Paciente{
        private _codPaciente:number;

        public getCodPaciente(){
            return this._codPaciente;
        }

        public setCodPaciente(codPaciente:number){
            this._codPaciente = codPaciente;
        }
    }
}