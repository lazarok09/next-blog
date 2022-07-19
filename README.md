<h1 align=center>
🚧 Em construção 🚧
</h1>

<h1 align=center>
 Take a Coffee ☕
</h1>

<span align=center>
  
[![Spotify](https://spotify-github-readme.vercel.app/api/spotify)](https://open.spotify.com/collection/tracks)
  
</span>
<br>
<hr>

<h2 id="tecnologias">
 Tec's ⤵️
</h2>

| Front-end                                           | Descrição                                                        |
| --------------------------------------------------- | ---------------------------------------------------------------- |
| [React.js](https://pt-br.reactjs.org/)              | Biblioteca de criação de Single Page Applications                |
| [Next.js](https://nextjs.org/)                      | Implementa SSG, SSR e outras funcionalidades para performace     |
| [TypeScript](https://www.typescriptlang.org/)       | Superset do JavaScript, tipa e melhora o código de maneira geral |
| [StoryBook](https://storybook.js.org/)              | Permite documentar e criar componentes reutilizáveis             |
| [Jest](https://jestjs.io/pt-BR/)                    | Permite realizar testes unitários na aplicação                   |
| [Styled Components](https://styled-components.com/) | O CSS recebe características do SASS e componetiza estilos       |

<br>

| Back-End                                       | Descrição                                                                                |
| ---------------------------------------------- | ---------------------------------------------------------------------------------------- |
| [Strapi](https://strapi.io/)                   | É um CMS baseado no Node.js que permite criar APIs de forma gratuita                     |
| [MongoDB](https://www.mongodb.com/cloud/atlas) | Podemos conectar a API do Strapi ao mongoDB gratuitamente                                |
| [Cloudnary](https://cloudinary.com/)           | É onde salvamos as imagens, pois no servidor mongoDB não há essa opção no plano gratuito |
| [GraphQL](https://graphql.org/)                | Permite criar funções e mutações nas chamadas a API, trazendo só dados selecionados      |

<hr>
<br>

<h2 id="executar">
 Execução 🔴
</h2>

### ⚠️ Esse projeto ainda não está publicado, portanto seguimos para as instruções que irão te ajudar a clonar o projeto em sua máquina local

### Scripts para clone, instalação e execução da aplicação

##### Você precisará de um terminal git, se estiver no Windows instale o [bash](https://git-scm.com/downloads)

##### 🌟 Para Linux ou MAC : [Linux](https://git-scm.com/book/pt-br/v2/Come%C3%A7ando-Instalando-o-Git) / [Mac](https://www.atlassian.com/br/git/tutorials/install-git)

### Para acompanhar, editar ou ver o andamento do projeto -

#### `git clone https://github.com/lazarok09/next-blog.git`

### Depois

#### `npm i`

##### Em seguida recomendo abrir o ambiente de desenvolvimento do StoryBook, pois é lá que estou criando os componentes. Como fazer isso ? simples, que você poderá encontrar as instruções mais abaixo nesse readme.

## Sobre 🕵️

Esse projeto é um blog com API própria criada no Strapi. A criação dos componentes se dá principalmente no StoryBook, pois nos ajuda a criar componente individuais, com seus testes e estilos. Os testes são feitos com o Jest que ajudam bastante, podemos testar inclusive, implementações do styled componentes, ações de botões e etc.

### Commits 📦

Os commits seguem o [conventinal commits](https://www.conventionalcommits.org/en/v1.0.0/#specification) e são organizados por escopo de alteração. Você pode ler mais sobre no site oficial da documentação.

Além disso, estamos utilizando o Husky pra fazer varreduras no nosso código antes de cada commit, evitando o envio de alterações de código com erro. Você pode ler mais no [repositório oficial do husky](https://github.com/typicode/husky), ou nessa publicação [Aplicando Padrões de Código com Pré-Commit Hook usando Husky](https://oieduardorabelo.medium.com/aplicando-padr%C3%B5es-de-c%C3%B3digo-com-pr%C3%A9-commit-hook-usando-husky-a72a51512a6d)

<br>

## Ambientes 👾

#### StoryBook

Para rodar o ambiente do storybook você deverá digitar já dentro do projeto o comando. Após digitar o comando abaixo, será aberto no endereço http://localhost:3000 na sua máquina local a tela do StoryBook

```
npm run storybook
```

<span align=center>
    
## Imagem de demonstração de um componente react criado no storybook

</span>

<div align=center>
    
<img width=800rem src=".github/storybookgif.gif" alt="um gif demonstrando a estrutura do StoryBook e eu clicando num botão que mostra ou não o texto no compoennte" />
    
</div>

<hr>

### Testes

O nosso ambiente de testes pode ser acessado utilizando qualquer um dos três comandos listados abaixo.

- O primeiro nos traz os testes de forma simples e mostrando se foram 100% testados.
- O segundo coleta o coverage que é uma pasta onde fica armazenado detalhes de cada linha testada e se essa está evidamente testada.

```
npm run test --watchAll --silent
```

```
npm run test -- --watchAll=false --coverage
```

<span align=center>
    
## Imagem de demonstração dos testes

</span>

<div align=center>
    
<img width=800rem src=".github/testes.png" alt="uma imagem que demonstra o teste de 6 componentes com 100% de linhas testadas" />
    
</div>

<hr>
<span align=center>
    
# < 👨‍💻 />
    
</span>
