# 🏅 Pontuação dos Atletas

Este projeto em **JavaScript** calcula a média de notas de atletas em uma competição de ginástica artística, considerando apenas as **três notas do meio** (desconsiderando a maior e a menor nota).  

---

## 📘 Descrição

Cada atleta recebe **cinco notas** atribuídas por diferentes jurados, que avaliam critérios como:
- Tempo de duração da apresentação
- Originalidade da coreografia
- Postura do atleta
- Dificuldade das acrobacias
- Sincronismo

A média final é calculada eliminando a **maior** e a **menor** nota e, em seguida, realizando a média das **três notas restantes**.

---

## 🧩 Estrutura do Projeto

📂 pontuacao-atletas/
├── pontuacaoAtletas.js # Código principal do projeto
├── README.md # Descrição do projeto


---

## 💻 Tecnologias Utilizadas

- **JavaScript (ES6+)**
- **Node.js** (opcional, caso execute no terminal)
- Editor de código (VS Code, por exemplo)

---

## ⚙️ Como Executar o Projeto

### 🖥️ Opção 1: Executar no navegador
1. Crie um arquivo `pontuacaoAtletas.js`
2. Cole o código do projeto.
3. Abra o **console do navegador** (F12 > Console).
4. Veja o resultado das médias calculadas.

### 💡 Opção 2: Executar via Node.js
1. Certifique-se de ter o Node instalado.
2. No terminal, navegue até a pasta do projeto.
3. Execute:
   ```bash
   node pontuacaoAtletas.js

🧮 Exemplo de Entrada
let atletas = [
  { nome: "Cesar Abascal", notas: [10, 9.34, 8.42, 10, 7.88] },
  { nome: "Fernando Puntel", notas: [8, 10, 10, 7, 9.33] },
  { nome: "Daiane Jelinsky", notas: [7, 10, 9.5, 9.5, 8] },
  { nome: "Bruno Castro", notas: [10, 10, 10, 9, 9.5] }
];

📊 Exemplo de Saída
Atleta: Cesar Abascal
Notas Obtidas: 10, 9.34, 8.42, 10, 7.88
Média Válida: 9.253333

Atleta: Fernando Puntel
Notas Obtidas: 8, 10, 10, 7, 9.33
Média Válida: 9.110000

Atleta: Daiane Jelinsky
Notas Obtidas: 7, 10, 9.5, 9.5, 8
Média Válida: 9.000000

Atleta: Bruno Castro
Notas Obtidas: 10, 10, 10, 9, 9.5
Média Válida: 9.833333

🧠 Lógica Utilizada

1. Ordenar as notas em ordem crescente (.sort()).
2. Remover a menor e a maior nota (.slice(1, 4))
3. Somar as três notas restantes (.forEach()).
4. Calcular a média (soma / notas.length).
5. Exibir o resultado no console (console.log()).

✨ Autor

Paulo Sérgio Queiroz Moura
📅 Projeto desenvolvido em 2025 / Projeto de Certificação DEVstart
📘 Projeto educativo em JavaScript — cálculo de médias e manipulação de arrays

📝 Licença

Este projeto é de uso livre para fins educacionais.