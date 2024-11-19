# Dream-Builder-2
Para esse projeto integrador, iremos continuar 'Contruindo os Sonhos' dos vestibulandos que desejam ingressar na Fatec Franca. Dando continuidade ao projeto passado [Dream Builder](https://github.com/duartegab/Dream-Builder/), nesse semestre focamos na parte prática da plataforma (como os simulados disponibilizados, plataformas para redação e exercícios, página de descanso para o usuário e a criação de dashboards de desempenho e cronogramas), que é crucial na rotina pré-vestibular. Além disso, com a criação de um Gerenciador de Tarefas, iremos fornecer novas funcionalidades ao projeto, como dados exclusivos das últimas edições de prova disponíveis para consulta e formulários direcionados para acompanharmos a evolução e opnião de cada usuário. Assim, o estudante contará com diversos parâmetros importantes para conseguir ingressar na universidade.



## Instruções para acessar o projeto 🖥️
Para poder ter o acesso ao projeto, é necessário ir ao início desse repositório [Dream Builder 2](https://github.com/duartegab/Dream-Builder-2/), ir em <> Code e depois em Download ZIP. Assim você consegue pegar todo o código local em uma pasta compactada.
Abrindo a pasta que está dentro da pasta ZIP em seu VSCode, é necessário somente alguns comandos no terminal (para estar familiarizado com o Node.js):


npm init (caso ainda não instalou o Node.js em seu VSCode)


npm install express (para ativar as bibliotecas principais do Node.js)



Depois, verifique se existe esse trecho de código em seu arquivo package.json:

```json
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon node app.js"  
  },
```



Se sim, agora continue com os comandos:


npm start (para inicializar o projeto)


npm install ejs (para instalar as extensões da linguagem EJS)


npm install mysql2 (para instalar as extensões do MySql)


Agora, copie o conteúdo da [Base de Dados](https://github.com/duartegab/Dream-Builder-2/blob/main/BASE%20DE%20DADOS%20-%20DREAMBUILDER2.sql) e cole em dentro de um novo arquivo em seu MySql. 

Em seu arquivo, execute todos os comandos (desde a criação da base até a criação da última tabela)


Em seu VSCode, vá ao arquivo [conexao.js](https://github.com/duartegab/Dream-Builder-2/blob/main/api/config/conexao.js) e altere os dados da variável conexao de acordo com os seus dados. Exemplo:

```sql
var conexao = mysql.createConnection({
    user: 'seuuser',
    password: 'suasenha',
    host: 'localhost',
    port: 3306
});
```

Por fim:

npm start (para rodar sua porta local)

cole o seguinte endereço na barra de endereço do seu navegador:

localhost:3010

Assim, você conseguirá rodar todo o projeto em seu servidor local =)



## Dream-Builder-2 no Desenvolvimento Web 2 📂
Durante nosso 2º Semestre, tivemos as instruções necessárias para aprimorarmos a nossa jornada como desenvolvedores web. Aprendemos todos os conceitos necessários de rotas, callback, conexão entre servidor e requisitante, back-end e sua ligação com o front-end e com o banco de dados. Além disso, realizamos muitos projetos e provas práticas, que nos deixou mais preparados para os desafios do mercado. 

A disciplina de Desenvolvimento Web 2 foi crucial no 'Dream Builder 2' pois, por conta dela, conseguirmos criar nosso gerenciador, que conecta tanto os dados de nossa base, como o site do front-end, além da criação de rotas interativas e dinâmicas. 

Também aprendemos o bom uso de 3 linguagens cruciais para manter um bom back-end:

No JavaScript, aprendemos usar suas funções e versatilidade para criar uma API completa, indo desde a elaboração das rotas e configuração de elementos estáticos, até funções de callback e gerenciamento de dados . 

Com json, aprendemos manter variáveis de dados que podem ser executadas em nossas próprias rotas API (geralmente usado em projetos pequenos, com pouco volume de dados). 

Por fim, utilizamos o EJS, para uma melhor ligação entre o back-end e o front-end, dando uma boa visão final para o usuário!

### Site 🚀
Quer ver o resultado de todo esse aprendizado? 

Copie o endereço na barra de seu navegador e dê o start em seu terminal.

```
localhost:3010
``` 

Aproveite a experiência!



### Gifs 🎥
Se você quer ver algumas partes do site, se liga nos gifs que preparei pra você!

Processo de Cadastro e Login no Sistema:
![Gif](https://github.com/duartegab/Dream-Builder-2/blob/main/login-cadastro.gif)

Formulário de Acompanhamento de Evolução:
![Gif](https://github.com/duartegab/Dream-Builder-2/blob/main/evolucao.gif)

Tabela de Consulta das Edições do Vestibular:
![Gif](https://github.com/duartegab/Dream-Builder-2/blob/main/edicao.gif)

Direcionamento ao Menu Inical do Site do Projeto:
![Gif](https://github.com/duartegab/Dream-Builder-2/blob/main/menu.gif)

Página voltada para Cronogramas Específicos:
![Gif](https://github.com/duartegab/Dream-Builder-2/blob/main/cronograma.gif)

Página voltada para o Descanso do Usuário:
![Gif](https://github.com/duartegab/Dream-Builder-2/blob/main/pausa.gif)




## Dream-Builder na Engenharia de Software 2📋
A disciplina de Engenharia de Software 2 também foi fundamental para que o nosso projeto desse continuidade. Com ela, aprofundamos melhor os conceitos de Desenvolvimento Ágil e Processos de Software, BPMN, UML e Diagrama de Classes baseado em POO, nos fazendo crescer enquanto Gerenciador de Projetos. 
Sendo assim, realizamos o nosso projeto baseado no Modelo Incremental, podendo através dessas 3 entregas, ampliar nossos conhecimentos e agregar mais valor ao mesmo.

Ao dar um bom ínicio em nossa entrega incremental (dando viabilidade e levantando e elicitando requisitos), entendemos o nosso público final e como podíamos resolver seus problemas da melhor forma. Começamos então criando os processos de atividade principais do projeto (BPMN) e depois com RF, RNF e RN levantadas, entender as funcionalidades com os processos de atividade para criar nossos Casos de Uso. 

Assim, em nossa segunda entrega, conseguimos detalhar cada processo de atividade que acontecia baseado nos requisitos. Gerando nossa prototipação das telas, que tem como base todos os acontecimentos, de cada utilidade do projeto. Podendo também entender a complexidade entre os UC's como um todo, relacionando os atores, extensões e inclusões em todo o sistema.

Por fim, agregamos tudo isso no nosso conhecimento de Programação Orientada a Objetos, que faz a transição de um mundo real para o mundo virtual, assim conseguindo documentar as principais funcionalidades, elementos e utilidades do site, bem como suas multiplicidades, relações de polimorfismo e herança.

### Prints 📷
Separei pra ti alguns prints dessa documentação, veja só:

-> Processo de Atividade dos Formulários do Gerenciador de Tarefas:
![1](https://github.com/duartegab/Dream-Builder-2/blob/main/bpmn.png)

-> Modelo de Negócio Canvas, visando os principais objetivos do site para o público externo:
![2](https://github.com/duartegab/Dream-Builder-2/blob/main/canvas.jpeg)

-> Diagrama de Casos de Uso, relacionando o sistema com os atores e inclusões / extensões (dependendo de cada UC):
![3](https://github.com/duartegab/Dream-Builder-2/blob/main/diagramauc.png)

### Elevator Pitch 🎞️

Elevator Pitch, é uma metodologia usada para levantar os principais pontos do projeto (Problemas, Soluções e Diferenciais)...

Quer ver como esse Elevator Pitch funciona na prática? Clique em [Vídeo](https://youtu.be/VSzCHJBV0cw).

Para ver o material de apoio (Slides do Elevator Pitch), é só clicar aqui em [Slides](https://github.com/duartegab/Dream-Builder-2/blob/main/DREAM%20BUILDER%20-%20PITCH1.pptx) e depois em View Raw.

### Documento RUF 📝
Se você também ficou interessado em como Documentar o seu próprio Software, é só clicar nos [RUF](https://github.com/duartegab/Dream-Builder-2/blob/main/Documentação%20Final%20-%20Dream%20Builder%202.docx) e depois em View Raw.



## Dream-Builder no Banco de Dados Relacional 🗃️
Por fim, também tivemos a disciplina de Banco de Dados Relacional ao longo do Semestre. Ela foi essencial para o nosso projeto, com ela aprofundados todo o nosso cohecimento na área, indo desde uma boa modelagem (criando Diagramas de Entidade-Relacionamento) até conhecimentos específicos na linguagem MySql.

No ínicio do Semestre, revisamos inúmeros conceitos de entidades, atributos, relacionamentos e cardinalidades. Outro conceito abordado foi a transição para o modelo lógico, incluindo valores como VARCHAR, DECIMAL, INT e etc. Além dos trabalhos práticos realizados, entendemos como essas relações são fundamentais para iniciar no banco de dados físico.

Assim podemos ampliar nossas consultas, usando WHERE, AND or OR, e também usando os conceitos de chave primária e estrangeira. Tudo isso foi necessário para saber utilizar recursos como INNER JOIN para buscar dados num local específico, COUNT para realizar contagens quando preciso. Atualmente, fazemos uso da VIEW para realizar consultas distintas e do ORDER BY para ordenar dados de acordo com nossas necessidades!

### Consultando 👀
Se você quer ver essas consultas na prática, veja o que preparei pra você!:

Função utilizando Banco de Dados para salvar os dados do formulário:
```js
function salvar(dados, callback) {
    const query = `
        INSERT INTO formulario (nome, idade, situacao, curso, feedback, pagina, dificuldade, experiencia, utilidade, recomendacao) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const valores = [
        dados.nome,
        dados.idade,
        dados.situacao,
        dados.curso,
        dados.feedback,
        dados.pagina,
        dados.dificuldade,
        dados.experiencia,
        dados.utilidade,
        dados.recomendacao
    ];
    conexao.query(query, valores, callback);
}
```
![Gif](https://github.com/duartegab/Dream-Builder-2/blob/main/login-cadastro.gif)

Formulário de Acompanhamento de Evolução:
![Gif](https://github.com/duartegab/Dream-Builder-2/blob/main/evolucao.gif)

Tabela de Consulta das Edições do Vestibular:
![Gif](https://github.com/duartegab/Dream-Builder-2/blob/main/edicao.gif)

Direcionamento ao Menu Inical do Site do Projeto:
![Gif](https://github.com/duartegab/Dream-Builder-2/blob/main/menu.gif)

Página voltada para Cronogramas Específicos:
![Gif](https://github.com/duartegab/Dream-Builder-2/blob/main/cronograma.gif)

Página voltada para o Descanso do Usuário:
![Gif](https://github.com/duartegab/Dream-Builder-2/blob/main/pausa.gif)



## UX (User Experience) 🤩🎉
Outro ponto fundamental do nosso projeto é saber a opnião de nossos vestibulandos, isso nos ajuda a entender se estamos indo na direção correta e como podemos melhorar e otimizar alguns processos. Com isso, a nossa Vestibulanda Maria Laura já aproveitou para deixar o seu feedback após utilizar o 'Dream Builder', se liga:

Para acessar o Feedback, é só clicar em [Feedback](https://github.com/duartegab/Dream-Builder/blob/main/video%20maria.mp4) e depois em View Raw (o vídeo será baixado em seu navegador). 



## Materiais de Referência 📦

Ao decorrer do site, colocamos vários canais, sites e recursos de referência no site para engajar o estudo dos estudantes. Aqui abaixo, segue os links de cada material usado:

* [Site Fatec](https://www.vestibularfatec.com.br/home/) - Usado como base para descobrir a história da Fatec, e a disponibilização das provas e gabaritos.
* [Canal Fatec](https://www.youtube.com/@fatecfrancaoficial) - Utilizado para disponibilizar os depoimentos dos alunos e ex-alunos.
* [Site Objetivo](https://www.curso-objetivo.br/vestibular/resolucao-comentada/fatec.aspx) - Disponibilização das Correções Comentadas das Provas.
* [Correcao Prova 9](https://www.youtube.com/live/bjoQow1KhbU?start=0) - Correção Comentada da Prova 9.
* [Correcoes 10, 11, 12](https://www.youtube.com/@fatecpragente) - Disponibilização das Correções Comentadas das Provas 10, 11 e 12.
* [Glau](https://app.glau.com.vc/) - Plataforma Glau (AI para Redação).
* [ChatGPT](https://chatgpt.com) - ChatGPT, usado para a correção das Redações.
* [Redação YT](https://youtube.com/playlist?list=PLPwuAOl5BHi8UTmce6l7kWwDVj2oMYPv2&si=Q8pchD-34KDucowj) - Playlist do YouTube disponibilizada para dicas de redação.
* [Redação YT](https://youtube.com/playlist?list=PLIdiUrsoqaXNBauINdtVuxQqSqDvGKp53&si=_9TLqbKzu6l1lkAV) - Playlist do YouTube disponibilizada para dicas de redação.
* [Redação IG](https://www.instagram.com/redacaonline/) - Instagram disponibilizado para dicas de redação.
* [Redação IG](https://www.instagram.com/redaflix/) - Instagram disponibilizado para dicas de redação.
* [Redação Site](https://blog.imaginie.com.br/redacao/) - Site disponibilizado para dicas de redação.
* [Redação Site](https://mundoeducacao.uol.com.br/redacao) - Site disponibilizado para dicas de redação.
* [RachaCuca](https://rachacuca.com.br/educacao/vestibular/) - Site disponibilizado para resolução de exercícios.
* [Canal Mat](https://www.youtube.com/@MarcosAba) - Canal do YouTube disponibilizado para videoaulas de Matemática.
* [Canal Port](https://www.youtube.com/@ProfessorNoslen) - Canal do YouTube disponibilizado para videoaulas de Português.
* [Canal Hist](https://www.youtube.com/c/Parab%C3%B3lica) - Canal do YouTube disponibilizado para videoaulas de História.
* [Canal Geo](https://www.youtube.com/@gabaritageo) - Canal do YouTube disponibilizado para videoaulas de Geografia.
* [Canal Bio](https://www.youtube.com/@professorsamuelcunha) - Canal do YouTube disponibilizado para videoaulas de Biologia.
* [Canal Quim](https://www.youtube.com/c/Marcel%C3%A3odaQu%C3%ADmica) - Canal do YouTube disponibilizado para videoaulas de Química.
* [Canal Fis](https://www.youtube.com/@Fisica2.0) - Canal do YouTube disponibilizado para videoaulas de Física.
* [Canal Ing](https://www.youtube.com/@PROFESSORKENNYOFICIAL) - Canal do YouTube disponibilizado para videoaulas de Inglês.
* [Canal RL](https://www.youtube.com/@WagnerAguiar) - Canal do YouTube disponibilizado para videoaulas de Raciocínio Lógico.
* [Canal Multi](https://www.youtube.com/@MalditaFcc) - Canal do YouTube disponibilizado para videoaulas Multidisciplinares.



## Parceiros Construtores 🛠️

Para 'Construir Sonhos' de muitos vestibulandos, contamos com o apoio dos links abaixo, que nos ajudaram com ideias disponibilizadas, materiais de apoio e resolução de dúvidas:

* [W3Schools](https://www.w3schools.com/) - Site usado para resolução de dúvidas e ideias para animações CSS.
* [CodePen](https://codepen.io/) - Site usado para ideias de animações e interações CSS / JavaScript.
* [YouTube](https://www.youtube.com/) - Usamos alguns vídeos da plataforma para resolução de dúvidas e ideias para alguns elementos do site.
* [GitHub](https://github.com/) - Usamos alguns repositórios da plataforma como base para ideias de alguns elementos do site.
* [Canva](https://www.canva.com/) - Usamos o Canva para a ideia de alguns templates, como os Cronogramas e o Modelo de Negócio Canvas.



## Autores ✒️

[Caroline Avelar](https://github.com/carolineavelar/) - Criação dos Jogos e Alarme no Site, Elaboração do Low-fi e High-Fi, Documentação, Elevator Pitch.

[Gabriel Duarte](https://github.com/duartegab/) - Estruturação do Site e das Páginas, Ajuda com as Telas, Logo, Vetor, Documentação, Elevator Pitch.



## 📄 Licença

Este projeto está sob a licença [Gabriel Duarte](https://github.com/duartegab) - veja o arquivo [LICENSE.md](https://github.com/duartegab/Dream-Builder/blob/main/LICENSE) para detalhes.



## 🎁 Gratidão
* Agradeço particulamente a minha amiga [Caroline Avelar](https://github.com/carolineavelar/) pela parceria e acreditar no Projeto desde o início, que nossa parceria sempre prevaleça! 🥰
* Desde já conto o apoio de vocês e peço que nos sigam, para acompanharem junto conosco nossos Projetos Realizados no 2º Semestre em diante! 📢;
* Agradeçemos aos nossos professores Márcio Funes, Fernando Martins e Leonardo Raiz que nos instruíram com o projeto; 🦾
* Agradeçemos também a todos os parceiros do W3 Schools, Canva, YouTube, CodePen e GitHub, que forneceram ideias e materiais de apoio para conseguirmos levantar esse projeto do zero; 🗻
* Também agradeçemos a nossa família, amigos, que nos motivam a cada dia mais para entrarmos no Ramo de Tecnologia da Informação, com o objetivo de construirmos uma carreira estável, sendo profissionais íntegros e inovadores. 🫂

---
⌨️ com ❤️ por [Caroline Avelar](https://github.com/carolineavelar/)  e  [Gabriel Duarte](https://github.com/duartegab) 😊
