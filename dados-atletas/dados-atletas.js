class Atleta {
  constructor(nome, idade, peso, altura, notas) {
    this.nome = nome;
    this.idade = idade;
    this.peso = peso;
    this.altura = altura;
    this.notas = Array.isArray(notas) ? notas.slice() : [];  
    this._categoria = null;
    this._imc = null;
    this._mediaValida = null;
  }

  calculaCategoria() {
    const idade = this.idade;
    if (idade >= 9 && idade <= 11) {
      this._categoria = "Infantil";
    } else if (idade === 12 || idade === 13) {
      this._categoria = "Juvenil";
    } else if (idade === 14 || idade === 15) {
      this._categoria = "Intermediário";
    } else if (idade >= 16 && idade <= 30) {
      this._categoria = "Adulto";
    } else {
      this._categoria = "Sem categoria";
    }
    return this._categoria;
  }

  calculaIMC() {
    if (!this.altura || this.altura <= 0) {
      this._imc = NaN;
    } else {
      this._imc = this.peso / (this.altura * this.altura);
    }
    return this._imc;
  }

  calculaMediaValida() {
    if (!Array.isArray(this.notas) || this.notas.length < 5) {
      this._mediaValida = NaN;
      return this._mediaValida;
    }

    const copia = this.notas.slice();

    copia.sort((a, b) => a - b);

    const notasComputadas = copia.slice(1, 4); 

    let soma = 0;
    notasComputadas.forEach(n => soma += n);

    this._mediaValida = soma / notasComputadas.length;
    return this._mediaValida;
  }

  obtemNomeAtleta() {
    return this.nome;
  }

  obtemIdadeAtleta() {
    return this.idade;
  }

  obtemPesoAtleta() {
    return this.peso;
  }

  obtemAlturaAtleta() {
    return this.altura;
  }

  obtemNotasAtleta() {
    return this.notas.slice();
  }

  obtemCategoria() {
    if (this._categoria === null) this.calculaCategoria();
    return this._categoria;
  }

  obtemIMC() {
    if (this._imc === null) this.calculaIMC();
    return this._imc;
  }

  obtemMediaValida() {
    if (this._mediaValida === null) this.calculaMediaValida();
    return this._mediaValida;
  }

  resumo() {
    const nome = this.obtemNomeAtleta();
    const idade = this.obtemIdadeAtleta();
    const peso = this.obtemPesoAtleta();
    const altura = this.obtemAlturaAtleta();
    const notas = this.obtemNotasAtleta();
    const categoria = this.obtemCategoria();
    const imc = this.obtemIMC();
    const media = this.obtemMediaValida();

    return (
`Nome: ${nome}
Idade: ${idade}
Peso: ${peso}
Altura: ${altura}
Notas: ${notas.join(",")}
Categoria: ${categoria}
IMC: ${imc}
Média válida: ${typeof media === "number" ? media.toFixed(8) : media}`
    );
  }
}

const atletas = [
  new Atleta("Cesar Abascal", 30, 80, 1.70, [10, 9.34, 8.42, 10, 7.88]),
  new Atleta("Fernando Puntel", 13, 68, 1.75, [8, 10, 10, 7, 9.33]),
  new Atleta("Daiane Jelinsky", 15, 56, 1.62, [7, 10, 9.5, 9.5, 8]),
  new Atleta("Bruno Castro", 20, 82, 1.80, [10, 10, 10, 9, 9.5])
];

for (let i = 0; i < atletas.length; i++) {
  console.log("");
  console.log(atletas[i].resumo());
}
