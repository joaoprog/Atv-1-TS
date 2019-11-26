namespace hospital{
    export abstract class Enfermeiro{
        private _coren:number;

        public getCoren(){
            return this._coren;
        }

        public setCoren(coren:number){
            this._coren = coren;
        }
    }
}