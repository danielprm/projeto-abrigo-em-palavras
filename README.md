# Abrigo em Palavras

Aplicação web feita com React, TypeScript e Vite, com foco em fornecer informações, apoio e recursos úteis para quem precisa de orientação ou suporte.  

Totalmente estilizada com TailwindCSS e shadcn-ui para garantir um visual moderno, responsivo e acessível.

---

## ✅ Funcionalidades

- Página inicial com mensagem acolhedora
- Modal de emergência para acesso rápido a informações importantes
- Sessão de recursos legais com informações de direitos
- Lista de recursos com contatos e links úteis
- Depoimentos para reforçar o apoio
- Páginas dedicadas (Recursos, Suporte, Referências, Legal, Depoimentos)
- Layout com cabeçalho e rodapé fixos e responsivos
- Navegação por rotas usando React Router
- Diversos componentes de UI prontos e reutilizáveis
- Acessibilidade com Radix UI

---

## ⚙️ Tecnologias Utilizadas

- **React** com **TypeScript**
- **Vite** (ambiente de build rápido)
- **Tailwind CSS** para estilização
- **shadcn-ui** para componentes pré-construídos
- **Radix UI** para acessibilidade
- **React Router DOM** para rotas
- **Recharts** para gráficos
- **Embla Carousel** para carrosséis
- **React Hook Form + Zod** para formulários e validação
- **TanStack React Query** para gerenciamento de requisições
- **Sonner** para toasts e notificações

---

## 📁 Estrutura do Projeto (simplificada)

abrigo-em-palavras/
├── public/
│ ├── favicon.ico
│ ├── placeholder.svg
│ └── robots.txt
├── src/
│ ├── App.tsx
│ ├── main.tsx
│ ├── pages/
│ ├── components/
│ ├── hooks/
│ └── lib/
├── tailwind.config.ts
├── postcss.config.js
├── vite.config.ts
└── package.json

yaml
Copiar
Editar

---

## 🧭 Como Executar o Projeto

1️⃣ Clone o repositório:  
```bash
git clone https://github.com/danielprm/abrigo-em-palavras.git
cd abrigo-em-palavras
2️⃣ Instale as dependências:

bash
Copiar
Editar
npm install
3️⃣ Inicie o servidor de desenvolvimento:

bash
Copiar
Editar
npm run dev
4️⃣ Acesse no navegador:

arduino
Copiar
Editar
http://localhost:5173
💡 Observações
Dados e conteúdo são estáticos ou em memória: sem backend persistente por padrão.

Ideal para fins educativos e testes de prototipagem com React e TailwindCSS.

Contém muitos componentes prontos (modal, toast, formulários, carrosséis) para reuso.

🌱 Melhorias Futuras
Integração com banco de dados para persistência

Backend com Node.js/Express

Autenticação de usuários

Painel administrativo para gerenciar conteúdos

Validações avançadas de formulários

🧩 Contribuição
Faça um fork deste repositório

Crie uma branch para sua feature ou correção

Commit e push para seu fork

Abra um Pull Request descrevendo suas mudanças

👨‍💻 Desenvolvido por Carlos Daniel Rocha e João Carlos Vieira Junior 🚀
Projeto aberto para colaboração.
Em caso de dúvidas ou sugestões, fique à vontade para abrir Issues ou Pull Requests!