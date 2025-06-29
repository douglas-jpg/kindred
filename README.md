# Kindred Portfolio

Uma homenagem interativa ao campeão Kindred do League of Legends, desenvolvida como portfólio pessoal para a disciplina de Desenvolvimento de Software para Web (Ciência da Computação).

---

## ✨ Visão Geral

Este projeto é dividido em **frontend** (SPA com Vite) e **backend** (API REST em Node.js/Express), permitindo comentários dinâmicos, reações e uma experiência visual inspirada no universo de Runeterra.

---

## 🗂️ Estrutura do Projeto

```
kindred/
├── client/        
│   ├── index.html
│   ├── package.json
│   ├── public/           
│   └── src/
│       ├── main.js       
│       ├── assets/       
│       ├── styles/       
│       └── utils/        
└── server/        
    ├── index.js
    ├── package.json
    └── src/
        ├── server.js     
        ├── controller/  
        ├── data/         
        ├── repository/   
        ├── routes/       
        └── service/      
```

---

## 🏗️ Arquitetura de Software

> ![Arquitetura](https://github.com/user-attachments/assets/8e23dcfe-b579-4335-913c-83f0a94b60d9)


- **Frontend:** consumo de API, responsivo, efeitos visuais e galeria.
- **Backend:** API RESTful, persistência em arquivo JSON, arquitetura em camadas (Controller, Service, Repository), CORS liberado para o frontend.

---

## 🚀 Instalação e Execução

### Pré-requisitos
- Node.js 18+
- npm

### 1. Clonar o repositório
```sh
git clone https://github.com/douglas-jpg/kindred.git
cd kindred
```

### 2. Instalar dependências
```sh
cd server 
npm install
cd ../client 
npm install
```

### 3. Rodar o Backend (API)
```sh
cd server
npm start
# Servidor em http://localhost:8080
```

### 4. Rodar o Frontend
```sh
cd client
npm run dev
# Frontend em http://localhost:5173
```
