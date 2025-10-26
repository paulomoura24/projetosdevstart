# 🏋️‍♂️ Dados dos Atletas

Este projeto, desenvolvido em **JavaScript**, tem como objetivo criar uma aplicação capaz de **armazenar informações de atletas** e **calcular automaticamente parâmetros importantes**, como categoria, IMC (Índice de Massa Corporal) e média válida de notas atribuídas por jurados.

O sistema foi proposto como uma evolução do projeto anterior _Pontuação dos Atletas_, agora utilizando **programação orientada a objetos**.

---

## 📘 Descrição do Projeto

A aplicação define uma **classe `Atleta`** que centraliza todos os dados e comportamentos referentes a um atleta.

Cada atleta possui:
- Nome  
- Idade  
- Peso  
- Altura  
- Notas (5 notas atribuídas por jurados)

Com base nessas informações, o sistema calcula:
- 🏅 **Categoria** — de acordo com a idade  
- ⚖️ **IMC (Índice de Massa Corporal)**  
- 📊 **Média válida** — descartando a maior e a menor nota  

---

## 🧩 Estrutura do Projeto

📂 dados-dos-atletas/
├── dadosAtletas.js # Código principal (classe Atleta e execução)
├── README.md # Documentação do projeto


---

## 💻 Tecnologias Utilizadas

- **JavaScript (ES6+)**
- **Node.js** (para execução no terminal)
- Editor de código (VS Code recomendado)

---

## ⚙️ Como Executar

### 🖥️ Opção 1: Executar no navegador
1. Crie um arquivo chamado `dadosAtletas.js`
2. Cole o código do projeto.
3. Abra o **console do navegador** (F12 → Console).
4. Veja os resultados impressos.

### 💡 Opção 2: Executar via Node.js
1. Certifique-se de ter o **Node.js** instalado.  
2. No terminal, navegue até a pasta do projeto.
3. Execute o comando:

   ```bash
   node dadosAtletas.js

📜 Exemplo de Entrada

const atleta = new Atleta(
  "Cesar Abascal",
  30,
  80,
  1.70,
  [10, 9.34, 8.42, 10, 7.88]
);

📊 Exemplo de Saída

Nome: Cesar Abascal
Idade: 30
Peso: 80
Altura: 1.7
Notas: 10,9.34,8.42,10,7.88
Categoria: Adulto
IMC: 27.68166089965398
Média válida: 9.25333333

🧠 Regras de Cálculo

🔹 Categoria (por idade)
| Faixa etária  | Categoria     |
| ------------- | ------------- |
| 9 a 11 anos   | Infantil      |
| 12 e 13 anos  | Juvenil       |
| 14 e 15 anos  | Intermediário |
| 16 a 30 anos  | Adulto        |
| Demais idades | Sem categoria |

🔹 IMC
IMC = peso / (altura * altura)

🔹 Média Válida

Ordena as notas.

Remove a maior e a menor.

Calcula a média das três restantes.

🧩 Principais Métodos da Classe Atleta

| Método                 | Descrição                                        |
| ---------------------- | ------------------------------------------------ |
| `calculaCategoria()`   | Define a categoria conforme a idade.             |
| `calculaIMC()`         | Calcula o Índice de Massa Corporal.              |
| `calculaMediaValida()` | Calcula a média das três notas intermediárias.   |
| `obtemNomeAtleta()`    | Retorna o nome do atleta.                        |
| `obtemIdadeAtleta()`   | Retorna a idade do atleta.                       |
| `obtemPesoAtleta()`    | Retorna o peso do atleta.                        |
| `obtemNotasAtleta()`   | Retorna as notas do atleta.                      |
| `obtemCategoria()`     | Retorna a categoria calculada.                   |
| `obtemIMC()`           | Retorna o IMC calculado.                         |
| `obtemMediaValida()`   | Retorna a média válida.                          |
| `resumo()`             | Exibe todas as informações formatadas do atleta. |

📦 Exemplo com Vários Atletas

const atletas = [
  new Atleta("Cesar Abascal", 30, 80, 1.70, [10, 9.34, 8.42, 10, 7.88]),
  new Atleta("Fernando Puntel", 13, 68, 1.75, [8, 10, 10, 7, 9.33]),
  new Atleta("Daiane Jelinsky", 15, 56, 1.62, [7, 10, 9.5, 9.5, 8]),
  new Atleta("Bruno Castro", 20, 82, 1.80, [10, 10, 10, 9, 9.5])
];

for (let atleta of atletas) {
  console.log("\n" + atleta.resumo());
}

🚀 Possíveis Melhorias Futuras

 Criar uma interface web interativa (HTML + CSS + JS)

 Permitir entrada dinâmica de atletas e notas

 Exportar resultados para JSON ou CSV

 Implementar testes automatizados (Jest)

 Adicionar validações de entrada

✨ Autor

Paulo Sérgio Queiroz Moura
📅 Projeto desenvolvido em 2025 / Projeto de Certificação DEVstart
📘 Projeto educacional em JavaScript — foco em Programação Orientada a Objetos

📝 Licença

Este projeto é de uso livre para fins educacionais.