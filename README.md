# Sudoku-IA
Trabalho de IA do sétimo termo do curso de BCC

### Descrição:
O trabalho utiliza backtrack para resolver o sudoku, devido a ajustes na interface não é possível inserir dados manualment nos campos do sudoku, apenas resolver os sudokus predefinidos.

Caso deseje inserir algum sudoku para ser resolvido, modifique o arquivo dentro de src/data/index.tsx, pode inseri-lo dentro de qualquer categoria (easy , medium, hard), basta usar o formato de matriz [][], com os campos em branco com o valor -1;

Exemplo :  
>      [  
>       [ 1, 6,-1, 7, 3, 2, 4,-1, 9],  
>       [-1,-1,-1,-1,-1,-1,-1, 7, 5],  
>       [ 2,-1, 7,-1, 5, 8,-1,-1,-1],  
>       [ 9,-1,-1,-1,-1,-1,-1, 5, 6],  
>       [-1, 3, 8, 5,-1, 1,-1,-1, 7],  
>       [ 7, 5, 2, 9,-1,-1,-1,-1,-1],  
>       [-1, 2, 6,-1, 9, 5,-1,-1, 4],  
>       [-1,-1,-1,-1,-1,-1, 3, 6,-1],  
>       [ 4, 1,-1,-1, 2,-1,-1,-1,-1],  
>      ],

**Lembre-se que a categoria do Sudoku é formado para ser uma vetor de matrizes, não esquecer o "[" e "]," entre a matriz.**

Para gerar o Sudoku é feito um sorteio dos que estão cadastrados dentro de 'data', para exigir que determinado sudoku seja escolhido altere o retorno da função "_getSudokuNumber_" dentro de redux/actions/sudoku.tsx para a posição do vetor que deseja 


> No final deste ReadMe tem um exemplo matriz vazia para ser preenchida pelos valores que desejar.

### Para Rodar o Projeto
Como o projeto foi feito com ReactJs, Redux e Typescript, ele precisa ter o Node instalado, e para iniciar a aplicação precisa do Yarn instalado.

*Esses comandos devem ser usados dentro do diretóri do projeto (_sudoku_).

**Para instalar as dependencias utilize:**
>yarn install

**Para iniciar a aplicação utilize dentro :**
>yarn start

Caso _yarn start_ não funcione verifique se não há nenhum processo executando na porta 3000


Exemplo de Matriz em branco : 
>       [
>           [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
>           [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
>           [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
>           [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
>           [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
>           [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
>           [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
>           [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
>           [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
>       ],
