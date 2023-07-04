function Veiculo(modelo, ano, tipoMotor) {
  this.modelo = modelo;
  this.ano = ano;
  this.tipoMotor = tipoMotor;

  let _acelerar = "";

  this.setAcelerar = function (tipoMotor) {
    if (tipoMotor == "combustão") {
      _acelerar = "vruumm";
    } else {
      _acelerar = ".....";
    }
  };

  this.getAcelerar = function () {
    return _acelerar;
  };
}

function MotorCombustao(modelo, ano, tipoMotor) {
  Veiculo.call(this, modelo, ano, tipoMotor);
  this.setAcelerar(tipoMotor);
  this.acelerar = this.getAcelerar();
}

function MotorEletrico(modelo, ano, tipoMotor) {
  Veiculo.call(this, modelo, ano, tipoMotor);
  this.setAcelerar(tipoMotor);
  this.acelerar = this.getAcelerar();
}

let carro1 = new MotorCombustao("Marea", 1990, "combustão");
let carro2 = new MotorEletrico("Tesla", 2022, "eletrico");

let carro3 = new MotorCombustao("Voyage", 2020, "combustão");

console.log(carro1);
console.log(carro2);
console.log(carro3);
