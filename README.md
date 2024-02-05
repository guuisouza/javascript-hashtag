# Hashtag Programação - Intensivão JavaScript    

## Sobre o repositório  
Este repositório é destinado ao armazenamento de todos os 4 projetos desenvolvidos e estudados durante o intensivão de JavaScript da Hashtag treinamentos.     
Através das aulas e dos 4 projetos realizados, consegui relembrar muitos conceitos do JavaScript e desenvolvimento Front-End que eu já conhecia.    
Já possuindo conhecimento de JavaScript consegui fazer várias partes por conta própria, mas ainda sim foi útil devido ao tempo que eu não programava em JS.    

# Como executar/visualizar os arquivos das aulas    
Pré-requisitos: Possuir a extensão Live Server no Visual Studio Code e possuir o Node.js instalado em seu computador (https://nodejs.org/en/download)  

```bash
# clonar repositório - em sua pasta e no seu terminal do vscode digite o seguinte comando:
git clone https://github.com/guuisouza/javascript-hashtag.git

# entrar na pasta no vscode
cd javascript-hashtag
```

## Projeto de Aplicativo Audiobook  
Este primeiro projeto é o mais simples, onde foi explorado a implementação de uma simples plataforma interativa para desfrutar da obra literária "Dom Casmurro"
em formato de áudio. Alinhado à proposta de sites de audiobook, o projeto oferecerá aos usuários acesso a áudios previamente preparados.  

```bash
# Para executar este projeto é simples, certifique-se de todas as pastas estarem no diretório correto.
# Execute o arquivo Index.html com o Live Server.
```

## Projeto Apple Watch  
Neste segundo projeto, o foco direcionado foi na implementação da lógica em JavaScript com o HTML e CSS já prontos. O objetivo é permitir aos usuários
manipular as opções de cor da pulseira e tamanho do Apple Watch, e isso se tornou possível graças a utilização do JavaScript, facilitando a interação do 
usuário com as opções de personalização.  

```bash
# Para executar este projeto é simples, certifique-se de todas as pastas estarem no diretório correto.
# Execute o arquivo Index.html com o Live Server.
```

## Projeto Cardápio Digital  
Um pouco mais complexo que os anteriores, neste projeto foi explorado a implementação da lógica utilizando o Vite e o React, que é uma biblioteca JavaScript
para criar interfaces de usuário interativas e reutilizaveis. O objetivo é oferecer uma experiência dinâmica para a seleção de pratos, sobremesas e bebidas
de um restaurante, tornando a escolha simples e divertida. Com o uso do React, facilitar a interação do usuário é a questão chave, permitindo uma navegação
intuitiva entre as opções do menu.    

```bash
# Para executar este projeto você precisará do Node.js instalado.
# Navegue até a pasta cardapio-digital/restaurante no terminal do seu Vscode
cd .\cardapio-digital\
cd .\restaurante\

# Digite o seguinte comando no terminal para criar a pasta node_modules e instalar as dependências listadas no package.json
npm install

# Inicie o servidor de desenvolvimento do Vite no navegador
npm run dev

# Agora basta clicar na porta local gerada http://localhost:<sua_porta>
```

## Projeto Chat Online  
Este projeto FullStack de longe foi o mais díficil e complexo, consiste em um Chat em Tempo Real, onde foi explorado a implementação da lógica utilizando
JavaScript tanto no front-end quanto no back-end juntamente com o Express e o socket.io.  
O objetivo é oferecer uma plataforma interativa para comunicação instantânea entre usuários, tornando as conversas simples e acessíveis.   

```bash
# Para executar este projeto você precisará do Node.js instalado.
# Navegue até a pasta chat-online no terminal do seu Vscode
cd .\chat-online\

# Digite o seguinte comando no terminal para criar a pasta node_modules e instalar as dependências listadas no package.json.
npm install

# Inicie o servidor backend
node --watch .\servidor.js
# Obs: Atualmente o --watch está em fase experimental, ele permite que o servidor reinicie automaticamente ao alterar arquivos.

# Agora basta digitar no seu navegador a porta local gerada  que está no arquivo servidor.js: http://localhost:<sua_porta>
# Abra em 2 janelas diferentes do seu navegador e se divirta
```

# Contato  

Guilherme Dilio de Souza  

https://www.linkedin.com/in/guilherme-souza-579267250/  
