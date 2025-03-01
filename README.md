# Lava Rápido Pro - Website

Este é um site para um serviço de lava rápido profissional, permitindo que os clientes conheçam os serviços oferecidos e agendem horários online.

## Funcionalidades

- Página inicial com destaques de serviços
- Catálogo completo de serviços com preços
- Sistema de agendamento online
- Formulário de contato
- Design responsivo para todas as plataformas

## Tecnologias Utilizadas

- React
- React Router
- CSS Moderno
- date-fns para formatação de datas

## Estrutura do Projeto

```
lava-rapido/
├── public/
│   ├── images/
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   └── ServiceCard.jsx
│   ├── pages/
│   │   ├── Booking.jsx
│   │   ├── Contact.jsx
│   │   ├── Home.jsx
│   │   └── Services.jsx
│   ├── styles/
│   │   ├── Booking.css
│   │   ├── Contact.css
│   │   ├── Footer.css
│   │   ├── Header.css
│   │   ├── Home.css
│   │   ├── ServiceCard.css
│   │   ├── Services.css
│   │   └── main.css
│   ├── App.jsx
│   ├── index.js
│   └── reportWebVitals.js
└── package.json
```

## Instalação e Execução

1. Clone o repositório
2. Instale as dependências:
   ```
   npm install
   ```
3. Inicie o servidor de desenvolvimento:
   ```
   npm start
   ```
4. Acesse o site em `http://localhost:3000`

## Páginas do Site

### Home
Página inicial com destaque para os principais serviços e vantagens do lava rápido.

### Serviços
Catálogo completo dos serviços oferecidos com detalhes, preços e duração estimada.

### Agendamento
Formulário para os clientes agendarem horários para lavagem de seus veículos.

### Contato
Informações de contato do estabelecimento e formulário para envio de mensagens.

## Customização

Para personalizar o site para as necessidades específicas do seu lava rápido:

1. Altere as cores do tema no arquivo `src/styles/main.css`
2. Atualize as informações de serviços em `src/pages/Services.jsx`
3. Modifique o logo e imagens na pasta `public/images/`
4. Atualize as informações de contato em `src/pages/Contact.jsx`

## Implementações Futuras

- Sistema de login para clientes frequentes
- Histórico de serviços realizados
- Sistema de fidelidade com pontos e descontos
- Integração com pagamento online