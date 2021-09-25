const MachineOption = require('./machine');
const inquirer = require('inquirer');
const options = require('../data');
const gameby = require('../data/by');

class User extends MachineOption{
  constructor({ opt, name, selected }) { 
    super({ opt });
    this._name = name;
    this._selected = selected;
    this._sort = this.sort()
  }
  set name(string){
    this._name = string;
  }
  set selected(string){
    this._selected = string;
  }

  get name(){
    return this._name;
  }

  get selected(){
    return this._selected;
  }

  logic(){
    if(this._selected === this._sort){
      return `${this._name}, a maquina escolheu ${this._sort} e você escolheu ${this._selected} - resultado => você empatou!`
    } else if (
      (this._selected === 'Pedra' && this._sort === 'Tesoura') ||
      (this._selected === 'Tesoura' && this._sort === 'Papel') ||
      (this._selected === 'Papel' && this._sort === 'Pedra')
    ){
      return `${this._name}, a maquina escolheu ${this._sort} e você escolheu ${this._selected} - resultado => você ganhou!`
    } else {
      return `${this._name}, a maquina escolheu ${this._sort} e você escolheu ${this._selected} - resultado => você perdeu!`
    }
  }
  game(){
    console.info(gameby);
    return inquirer.prompt([
      {
        name: 'name',
        message: 'Qual seu nome?',
        default: 'Jogador'
      },
      {
        type: 'list',
        name: 'jokenpo',
        message: 'Selecione uma dessas opções',
        choices: options
      }
    ]).then((resposta) => {
      this._name = resposta.name
      this._selected = resposta.jokenpo
      console.info(`${this.logic()}`)
    })
  }
}

module.exports = User;