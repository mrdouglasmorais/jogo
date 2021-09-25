class MachineOption{
  constructor({ opt }){
    this._opt = opt;
  }

  sort(){
    const sortResult = Math.floor(Math.random() * 3 - 0);
    return this._opt[sortResult].name
  }

  set opt(option){
    this._opt = option;
  }

  get opt(){
    return this._opt;
  }
}

module.exports = MachineOption;