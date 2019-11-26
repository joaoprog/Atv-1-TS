namespace hospital{
    export abstract class Hospital{
        private _nome:string;
        private _enfermeiros:Array<Enfermeiro> = [];
        private _medicos:Array<Medico> = [];
        private _pacientes:Array<Paciente> = [];

        public getNome(){
            return this._nome;
        }

        public setNome(nome:string){
            this._nome = nome;
        }

        public getEnfermeiro(){
            return this._enfermeiros;
        }

        public setEspecialidade(enfermeiro:Enfermeiro){
            this._enfermeiros.push(enfermeiro);
        }

        public getMedicos(){
            return this._medicos;
        }

        public setMedicos(medicos:Medico){
            this._medicos.push(medicos);
        }

        public getPacientes(){
            return this._pacientes;
        }

        public setPacientes(pacientes:Paciente){
            this._pacientes.push(pacientes);
        }
    }
}