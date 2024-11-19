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



### Gifs 👀
Se você quer ver algumas partes do site, se liga nos gifs que preparei pra você!

Procoesso de Cadastro e Login no Sistema:
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




## Dream-Builder na Engenharia de Software 📋⚓
A Engenharia de Software também foi fundamental para que o nosso projeto acontecesse. Com ela, entendemos todo o processo de relacionamento desenvolvedor - usuário, o que é fundamental para a trajetória de um Desenvolvedor de Software. 
Sendo assim, analisamos o nosso projeto de maneira mais abrangente pois, além de uma Página Web, o  nosso negócio é capaz de construir sonhos, para aqueles que sonham com o seu Ensino Superior.

Contudo, aprendemos nesse Semestre sobre Projetos e Sistemas de TI (bem como os seus modelos de Processos). Também aprendemos sobre Regras de Negócio, Requisitos Funcionais e Não Funcionais, o Modelo Canvas e toda a Documentação de Software necessária para fazer o negócio sair do papel e se tornar um Software assertivo. Por fim, também aprendemos sobre o Elevator Pitch, também fundamental para nosso Projeto, através dele, entendemos os problemas, soluções e diferenciais que apresentamos no decorrer do mesmo.

### Prints 📷
Separei pra ti alguns prints do site, veja só:

Gráfico com as Metas Esperadas de acertos nas Provas (durante o Cronograma):
![1](https://github.com/duartegab/Dream-Builder/blob/main/provasespecificas.png)

Botões animados para acessar as Provas Antigas:
![2](https://github.com/duartegab/Dream-Builder/blob/main/provasbotao.png)

Botões animados para acessar nossas redes socias, com a Avaliação do Usuário acima:
![3](https://github.com/duartegab/Dream-Builder/blob/main/contatoredes.png)

### Elevator Pitch 🎞️
Quer ver como esse Elevator Pitch funciona na prática? Clique em [Vídeo](https://youtu.be/tHEObuMiMG8).

Para ver o material de apoio (Slides do Elevator Pitch), é só clicar aqui em [Slides](https://github.com/duartegab/Dream-Builder/blob/main/DREAM%20BUILDER%20-%20PITCH.pptx) e depois em View Raw.

### Documento RUF 🗃️
Se você também ficou interessado em como Documentar o seu próprio Software, é só clicar nos [RUF](https://github.com/duartegab/Dream-Builder/blob/main/Dream%20Buider-PI.doc) e depois em View Raw.



## Dream-Builder no Design Digital 🖱️📱
Por fim, também tivemos a disciplina de Design Digital ao longo do Semestre. Ela foi essencial para o nosso projeto, com ela afloramos toda a nossa criatividade, além de entender diversos aspectos essenciais que fazem de um Desenvolvedor um Designer para suas próprias projeções.

No ínicio do Semestre, aprendemos inúmeros conceitos de luz, sombra e texturas. Outro conceito abordado foi a Psicologia das Cores. Além dos trabalhos práticos realizados, entendemos como essas relações são fundamentais para harmonizar qualquer elemento digital.
Também aprendemos sobre Vetorização e Logos, ela foi essencial para criarmos nosso mascote (Bob), através da mescla de linhas e formas.
Por fim, aprendemos sobre dimensão e proporção de telas. Essa proporção foi a âncora para tirar o projeto do papel e iniciarmos nele de fato!

### Criação da Logo / Bob 🐻‍❄️
Oie, antes de me tornar um mascote, já fui uma logo e um vetor, sabia? Se liga nas imagens abaixo:
![LOGO](https://github.com/duartegab/Dream-Builder/blob/main/urso2.svg)
![VETOR](https://github.com/duartegab/Dream-Builder/blob/main/urso1.svg)


### Low-fi | High-fi 📝
Quer saber como dimensionar seus rascunhos e telas do site? Só clicar em [Figma](https://www.figma.com/design/J4WIfPUStwMm0E4vVluFf0/PI?node-id=0-1&t=xKOdq9LGV1Osl5Kg-1).

### Paleta de Cores 🎨
Você sabia que a definição de cores é fundamental para a criação de um site?
Entenda o nosso propósito através de nossas cores:

As cores desempenham um papel significativo no ambiente de estudo, influenciando o foco, a produtividade e o bem-estar. Aqui está a relação de algumas cores específicas:

![PALETA](https://github.com/duartegab/Dream-Builder/blob/main/paleta0.png)

<br>

*Azul Marinho* - Conhecido por sua associação com calma e estabilidade, o azul marinho é excelente para áreas de estudo. Ele promove a tranquilidade mental e ajuda a manter a concentração por longos períodos.

*Bordô* - Esta cor rica e profunda, uma mistura de vermelho e roxo, pode incentivar a paixão e a energia. Ideal para as partes do Site que envolvem o Teste Vocacional, Apresentação dos Cursos e Cronogramas.

*Roxo Escuro* - Uma variação do roxo profundo com preto, esta cor pode transmitir um senso de luxo e introspecção. Em ambientes de estudo, pode ajudar a estimular a criatividade e a concentração profunda.

*Azul Petróleo* - Com uma mistura de azul e verde, essa cor traz uma sensação de equilíbrio e sofisticação. É ideal para espaços onde se precisa de foco e criatividade, sem causar estresse.

*Branco Fumaça* - Uma tonalidade suave de branco acinzentado, o branco fumaça é perfeito para criar um ambiente limpo e organizado. Ele reflete a luz, tornando os espaços mais claros e, assim, ajudando a manter a mente alerta e focada.

<br>
Cada uma dessas cores pode ser utilizada estrategicamente em espaços de estudo para criar um ambiente que favoreça o foco, a produtividade e o bem-estar mental.


![PALETA1](https://github.com/duartegab/Dream-Builder/blob/main/paleta1.png)



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
