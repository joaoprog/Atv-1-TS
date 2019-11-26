namespace hospital{
    export abstract class Funcionario{
        private _codFuncionario:number;

        public getCodFuncionario(){
            return this._codFuncionario;
        }

        public setCodFuncionario(codFuncionario:number){
            this._codFuncionario = codFuncionario;
        }
    }
}