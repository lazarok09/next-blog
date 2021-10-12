# ⚠️ Em construção ⚠️

## Sobre
Esse projeto é um blog com API própria criada no Strapi. A criação dos componentes se dá principalmente no StoryBook, pois nos ajuda a criar componente individuais, com seus testes e estilos. Os testes são feitos com o Jest que ajudam bastante, podemos testar inclusive, implementações do styled componentes, ações de botões e etc.

### Commits
Os commits seguem o [conventinal commits](https://www.conventionalcommits.org/en/v1.0.0/#specification) e são organizados por escopo de alteração. Você pode ler mais sobre no site oficial da documentação.

Além disso, estamos utilizando o Husky pra fazer varreduras no nosso código antes de cada commit, evitando o envio de alterações de código com erro. Você pode ler mais no [repositório oficial do husky](https://github.com/typicode/husky), ou nessa publicação [Aplicando Padrões de Código com Pré-Commit Hook usando Husky](https://oieduardorabelo.medium.com/aplicando-padr%C3%B5es-de-c%C3%B3digo-com-pr%C3%A9-commit-hook-usando-husky-a72a51512a6d)

## Ambientes
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
* O primeiro nos traz os testes de forma simples e mostrando se foram 100% testados.
* O segundo coleta o coverage que é uma pasta onde fica armazenado detalhes de cada linha testada e se essa está evidamente testada.

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
