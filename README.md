# Sistema-de-Vendas-web
Sistema de vendas e controle de estoques web, desenvolvido em Node.Js e react, voltado para gerenciamento de uma loja, com controle de vendas, estoque, clientes, relatorios de faturamento.


##Comandos para iniciar o projeto

##API
- npm init -y
- yarn add express nodemon mysql cors dotenv

##FRONTEND
- npm create vite@latest .
- npm install
- npm run dev



src/
│
├── config/          # Configurações do projeto
│   ├── database.js  # Configuração do banco de dados
│   └── env.js       # Validação de variáveis de ambiente
│
├── controllers/     # Lógica de controle
│   └── userController.js
│
├── models/          # Modelos de dados e acesso ao banco
│   └── userModel.js
│
├── routes/          # Definição de rotas
│   ├── api/         # Rotas da API
│   │   └── userRoutes.js
│   └── index.js     # Agrupador de rotas
│
├── middlewares/     # Middlewares customizados
│   └── authMiddleware.js (exemplo)
│
├── services/        # Lógica de negócios (opcional)
│   └── userService.js
│
├── utils/           # Utilitários e helpers
│   └── apiResponse.js
│
├── validators/      # Validação de dados (opcional)
│   └── userValidator.js
│
├── app.js           # Aplicação principal
└── server.js        # Ponto de entrada do servidor
