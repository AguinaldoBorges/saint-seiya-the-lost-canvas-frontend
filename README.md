# Saint Seiya The Lost Canvas Frontend

![Saint Seiya The Lost Canvas](./src/assets/saint%20seiya%201.PNG)

## Descrição

Este projeto é uma aplicação frontend desenvolvida em React que apresenta informações sobre os personagens de Saint Seiya The Lost Canvas. O projeto foi desenvolvido para praticar habilidades em React, CSS, e responsividade, criando uma interface atraente e funcional.

## Tecnologias Utilizadas

### Principais

- **React**: Utilizado para a construção da interface do usuário com componentes reutilizáveis.
- **React Router DOM**: Implementação de rotas para navegação entre páginas.
- **TypeScript**: Garantia de tipagem estática para maior segurança e melhor experiência de desenvolvimento.
- **Vite**: Ferramenta de construção rápida e eficiente, utilizada para configurar e rodar o projeto.
- **SASS**: Para estilização avançada e modularização de CSS, permitindo uma escrita mais limpa e organizada.

### Desenvolvimento

- **ESLint**: Ferramenta de linting para manter a qualidade e a consistência do código.


## Funcionalidades

- **Página Inicial**: Contém uma imagem de destaque e links para as páginas de personagens.
- **Listagem de Personagens**: Galeria com imagens dos personagens.
- **Detalhes do Personagem**: Informações detalhadas sobre cada personagem quando clicado.
- **Navegação Suave**: Implementado com CSS para uma experiência de usuário aprimorada.
- **Responsividade**: Layout adaptável a diferentes tamanhos de tela.

## Uso de Estados, Renderizações, Rotas e Eventos

### Estados

Utilizamos o `useState` para gerenciar o estado interno dos componentes, como a seleção de personagens.

### Renderizações

A renderização condicional é usada para mostrar detalhes dos personagens quando um personagem é selecionado. Utilizei `map` para renderizar listas de personagens dinamicamente a partir de um array de objetos.

### Rotas

As rotas são configuradas usando `react-router-dom` para navegação entre a página inicial e a página de detalhes dos personagens.

### Eventos

Os eventos de clique são usados para interagir com os elementos da interface, como selecionar um personagem da lista para ver seus detalhes.

## Pré-requisitos

- **Node.js** (versão recomendada: 14.x ou superior)
- **npm** (ou **yarn** como gerenciador de pacotes)

## Como Rodar o Projeto

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/seu-usuario/saint-seiya-the-lost-canvas-frontend.git
   ```

2. **Navegue até o diretório do projeto:**

   ```bash
   cd saint-seiya-the-lost-canvas-frontend
   ```

3. **Instale as dependências:**

   ```bash
   npm install
   ```

   ou

   ```bash
   yarn install
   ```

4. **Inicie o servidor de desenvolvimento:**

   ```bash
   npm run dev
   ```

   ou

   ```bash
   yarn dev
   ```

5. **Abra o navegador e acesse:**

   ```
   http://localhost:3000
   ```

## Scripts Disponíveis

- **`dev`**: Inicia o servidor de desenvolvimento.
- **`build`**: Cria uma versão de produção do projeto.
- **`lint`**: Executa o ESLint para encontrar e corrigir problemas no código.
- **`preview`**: Pré-visualiza a versão de produção.

## Estrutura do Projeto
![Saint Seiya The Lost Canvas](./src/assets/saint%20seiya%205.PNG)

```
saint-seiya-the-lost-canvas-frontend/
│
├── public/                   # Arquivos públicos
├── src/                      # Código fonte do projeto
│   ├── assets/               # Arquivos de imagem e outros assets
│   ├── components/           # Componentes React
│   │   ├── Card/             # Componente Card
│   │   ├── Footer/           # Componente Footer
│   │   ├── Header/           # Componente Header
│   │   ├── Hero/             # Componente Hero
│   │   ├── ListChars/        # Componente ListChars
│   │   ├── Menu/             # Componente Menu
│   ├── pages/                # Páginas da aplicação
│   │   ├── Chars/            # Página de listagem de personagens
│   │   ├── Home/             # Página inicial
│   ├── sass/                 # Arquivos SASS para estilização
│   │   ├── modules/          # Módulos de SASS
│   ├── App.tsx               # Componente principal
│   ├── main.tsx              # Ponto de entrada da aplicação
│
├── package.json              # Configurações do npm
├── README.md                 # Documentação do projeto
```

## Demonstração

### Página Inicial

![Saint Seiya The Lost Canvas](./src/assets/saint%20seiya%201.PNG)

### Listagem de Personagens

![Saint Seiya The Lost Canvas](./src/assets/saint%20seiya%202.PNG)

### Detalhes do Personagem

![Saint Seiya The Lost Canvas](./src/assets/saint%20seiya%203.PNG)


### Responsividade
![Saint Seiya The Lost Canvas](./src/assets/saint%20seiya%204.PNG)
