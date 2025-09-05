# 🎨 Buttons Hexadecimal 

<div>

![Color Palette Banner](https://img.shields.io/badge/Color%20Palette-Professional%20Tool-brightgreen?style=for-the-badge&logo=palette&logoColor=white)

**Uma aplicação web moderna e profissional para visualizar, explorar e copiar códigos de cores em múltiplos formatos. Ferramenta essencial para designers, desenvolvedores e criadores de conteúdo.**

[![Next.js](https://img.shields.io/badge/Next.js-15.0.2-black?style=flat-square&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![CoreUI](https://img.shields.io/badge/CoreUI-5.4.1-7B68EE?style=flat-square&logo=coreui&logoColor=white)](https://coreui.io/react/)
[![Sass](https://img.shields.io/badge/Sass-1.80.6-CC6699?style=flat-square&logo=sass&logoColor=white)](https://sass-lang.com/)


</div>

---

## 🎯 Funcionalidades

### 🎨 **Paleta de Cores Completa**
- **200+ cores organizadas** em 11 categorias distintas
- **Visualização instantânea** com preview em tempo real
- **Busca inteligente** por nome, hex ou RGB

### 📋 **Sistema de Cópia Avançado**
- **Cópia com um clique** para área de transferência
- **Múltiplos formatos simultaneamente**:
  - 🏷️ Nome da cor (ex: `SpringGreen`)
  - 🔢 Código Hexadecimal (ex: `#00FF7F`)
  - 🎯 Código RGB (ex: `rgb(0, 255, 127)`)
- **Feedback visual inteligente** com toast notifications
- **Histórico de cores copiadas** (sessão atual)

### 🎪 **Interface Profissional**
- **Design responsivo** otimizado para todos os dispositivos
- **Navegação intuitiva** com sistema de tabs
- **Animações suaves** e transições elegantes
- **Tema moderno** com foco na usabilidade
- **Acessibilidade** seguindo padrões WCAG 2.1

### ⚡ **Performance Otimizada**
- **Server-Side Rendering (SSR)** com Next.js 15
- **Lazy loading** de componentes
- **Otimização automática** de imagens e assets
- **Bundle splitting** inteligente

---

## 🌈 Paletas de Cores Disponíveis

<div >

| Categoria | Cores | Preview |
|-----------|-------|---------|
| **🌫️ Tons de Cinza** | 20 variações | `#2F4F4F` → `#F8F8FF` |
| **🔵 Tons de Azul** | 25 variações | `#000080` → `#E6F3FF` |
| **🌊 Tons de Ciano** | 15 variações | `#008B8B` → `#E0FFFF` |
| **🌿 Tons de Verde** | 20 variações | `#006400` → `#F0FFF0` |
| **🤎 Tons de Marrom** | 18 variações | `#A0522D` → `#FAEBD7` |
| **🟣 Tons de Roxo** | 22 variações | `#4B0082` → `#E6E6FA` |
| **🌸 Tons de Rosa** | 16 variações | `#C71585` → `#FFF0F5` |
| **🔴 Tons de Vermelho** | 19 variações | `#8B0000` → `#FFE4E1` |
| **🟠 Tons de Laranja** | 14 variações | `#FF4500` → `#FFEFD5` |
| **🟡 Tons de Amarelo** | 12 variações | `#FFD700` → `#FFFACD` |
| **🎨 Tons Pastel** | 24 variações | Cores suaves e elegantes |

**Total: 205+ cores profissionalmente curadas**

</div>

---

## 🚀 Tecnologias & Arquitetura

### **Frontend Stack**
- **[Next.js 15.0.2](https://nextjs.org/)** - Framework React com App Router
- **[TypeScript 5](https://www.typescriptlang.org/)** - Tipagem estática avançada
- **[React 18.3.1](https://react.dev/)** - Biblioteca de interface com Concurrent Features
- **[CoreUI React 5.4.1](https://coreui.io/react/)** - Componentes empresariais
- **[React Toastify 10.0.6](https://fkhadra.github.io/react-toastify/)** - Sistema de notificações
- **[Sass 1.80.6](https://sass-lang.com/)** - Pré-processador CSS avançado

### **Arquitetura**
- **Component-Based Architecture** - Componentes reutilizáveis e modulares
- **Type-Safe Development** - 100% TypeScript com strict mode
- **Modern CSS Architecture** - SCSS com metodologia BEM
- **Performance-First** - Otimizações automáticas do Next.js

---

## 📦 Instalação

### **Pré-requisitos**
```bash
Node.js >= 18.0.0
npm >= 8.0.0 ou yarn >= 1.22.0
Git >= 2.0.0
```

### **Instalação Rápida**

```bash
# 1. Clone o repositório
git clone https://github.com/seu-usuario/buttons-hexadecimal.git
cd buttons-hexadecimal

# 2. Instale as dependências
npm install
# ou com yarn
yarn install

# 3. Execute em modo desenvolvimento
npm run dev
# ou com yarn
yarn dev

# 4. Abra no navegador
# http://localhost:3000
```

### **Build para Produção**

```bash
# Build otimizado
npm run build

# Executar versão de produção
npm run start

# Análise do bundle (opcional)
npm run analyze
```

---

## 🛠️ Scripts Disponíveis

| Script | Comando | Descrição |
|--------|---------|-----------|
| **Development** | `npm run dev` | Executa servidor de desenvolvimento |
| **Build** | `npm run build` | Cria build otimizado para produção |
| **Start** | `npm run start` | Executa versão de produção |
| **Lint** | `npm run lint` | Executa ESLint para verificar código |
| **Type Check** | `npm run type-check` | Verifica tipos TypeScript |

---

## 📁 Arquitetura do Projeto

```
buttons-hexadecimal/
├── 📁 src/
│   ├── 📁 app/                    # App Router (Next.js 13+)
│   │   ├── layout.tsx            # Layout raiz da aplicação
│   │   ├── page.tsx              # Página principal
│   │   └── favicon.ico           # Ícone da aplicação
│   │
│   ├── 📁 components/            # Componentes reutilizáveis
│   │   ├── 📁 ColorName/         # Componentes de nomes de cores
│   │   │   ├── page.tsx          # Container principal
│   │   │   ├── shadesOfBlue.tsx  # Paleta azul
│   │   │   ├── shadesOfGreen.tsx # Paleta verde
│   │   │   └── [...11 paletas]   # Outras paletas
│   │   │
│   │   ├── 📁 HexadecimalCode/   # Componentes hexadecimais
│   │   │   ├── page.tsx          # Container principal
│   │   │   └── [...paletas]      # Paletas hex
│   │   │
│   │   ├── 📁 RgbCode/          # Componentes RGB
│   │   │   ├── page.tsx          # Container principal
│   │   │   └── [...paletas]      # Paletas RGB
│   │   │
│   │   ├── 📁 Header/           # Cabeçalho da aplicação
│   │   ├── 📁 Navbar/           # Barra de navegação
│   │   ├── 📁 Footer/           # Rodapé
│   │   └── 📁 TabsButtons/      # Sistema de abas
│   │
│   └── 📁 sass/                  # Estilos SCSS
│       ├── buttons.scss          # Estilos dos botões
│       ├── general.scss          # Estilos gerais
│       ├── header.scss           # Estilos do header
│       ├── navbar.scss           # Estilos da navbar
│       └── tabsbuttons.scss      # Estilos das abas
│
├── 📁 public/                    # Assets estáticos
├── 📄 package.json              # Dependências e scripts
├── 📄 tsconfig.json             # Configuração TypeScript
├── 📄 next.config.ts            # Configuração Next.js
└── 📄 README.md                 # Documentação
```

---

## 🎨 Guia de Uso

### **1. Navegação Principal**
- **Tab "Nome da Cor"**: Visualize cores com seus nomes descritivos
- **Tab "Código Hexadecimal"**: Acesse códigos hex para CSS/Design
- **Tab "Código RGB"**: Obtenha valores RGB para programação

### **2. Interação com Cores**
```typescript
// Exemplo de uso após copiar
const primaryColor = '#00FF7F'; // SpringGreen copiado
const rgbColor = 'rgb(0, 255, 127)'; // RGB copiado
```

### **3. Casos de Uso Profissionais**
- **🎨 Design Systems**: Criação de paletas consistentes
- **💻 Desenvolvimento Web**: Códigos prontos para CSS/SCSS
- **📱 Mobile Development**: Cores para React Native/Flutter
- **🖼️ Branding**: Seleção de cores para identidade visual

---

## 🔧 Personalização

### **Adicionando Novas Paletas**

```typescript
// src/components/HexadecimalCode/customPalette.tsx
const customColors = [
  { text: "#FF6B6B", colorClass: "customRed" },
  { text: "#4ECDC4", colorClass: "customTeal" },
  // Adicione suas cores...
];
```

### **Customizando Estilos**

```scss
// src/sass/custom.scss
.custom-button {
  background: linear-gradient(45deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0,0,0,0.15);
  }
}
```

---

## 🚀 Deploy

### **Vercel (Recomendado)**
```bash
npm i -g vercel
vercel --prod
```

### **Netlify**
```bash
npm run build
# Upload da pasta .next para Netlify
```

### **Docker**
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

---

## 🤝 Contribuição

### **Como Contribuir**

1. **Fork** o repositório
2. **Crie uma branch** para sua feature:
   ```bash
   git checkout -b feature/nova-funcionalidade
   ```
3. **Commit** suas mudanças:
   ```bash
   git commit -m "feat: adiciona nova paleta de cores"
   ```
4. **Push** para a branch:
   ```bash
   git push origin feature/nova-funcionalidade
   ```
5. **Abra um Pull Request**

### **Padrões de Código**
- ✅ Use TypeScript para novos componentes
- ✅ Siga as convenções de nomenclatura existentes
- ✅ Adicione testes para novas funcionalidades
- ✅ Mantenha a documentação atualizada

---

## 📊 Roadmap

### **🔄 Próximas Versões**

- [ ] **v2.0** - Sistema de favoritos e coleções
- [ ] **v2.1** - Exportação de paletas (JSON, CSS, SCSS)
- [ ] **v2.2** - Modo escuro/claro
- [ ] **v2.3** - API REST para integração externa
- [ ] **v2.4** - PWA com funcionamento offline
- [ ] **v2.5** - Gerador de paletas com IA

---

## 📈 Performance

### **Métricas de Performance**
- ⚡ **First Contentful Paint**: < 1.5s
- 🎯 **Largest Contentful Paint**: < 2.5s
- 📱 **Cumulative Layout Shift**: < 0.1
- 🔄 **First Input Delay**: < 100ms

### **Otimizações Implementadas**
- 🏃‍♂️ **Code Splitting** automático
- 📦 **Tree Shaking** para redução de bundle
- 🖼️ **Image Optimization** nativa do Next.js
- 💾 **Static Generation** para páginas estáticas

---

## 🔒 Segurança

- 🛡️ **Content Security Policy** configurado
- 🔐 **Headers de segurança** implementados
- 🚫 **Sanitização** de inputs do usuário
- 📊 **Monitoramento** de dependências vulneráveis

---

## 📝 Licença

Este projeto está licenciado sob a **MIT License** - veja o arquivo [LICENSE](LICENSE) para detalhes.

```
MIT License - Livre para uso comercial e pessoal
```

---

## 🙏 Agradecimentos

<div>

**Tecnologias que tornaram este projeto possível:**

[![Next.js](https://img.shields.io/badge/Next.js-Framework-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![CoreUI](https://img.shields.io/badge/CoreUI-Components-purple?style=flat-square&logo=coreui)](https://coreui.io/)
[![React Toastify](https://img.shields.io/badge/React%20Toastify-Notifications-orange?style=flat-square)](https://fkhadra.github.io/react-toastify/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Type%20Safety-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)

**Comunidade Open Source** por inspiração e feedback contínuo

</div>

---

<div >

**Desenvolvido com ❤️ para a comunidade de desenvolvedores e designers**

[![GitHub](https://img.shields.io/badge/GitHub-Repositório-black?style=flat-square&logo=github)](https://github.com/seu-usuario/buttons-hexadecimal)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Perfil-blue?style=flat-square&logo=linkedin)](https://linkedin.com/in/seu-perfil)

**⭐ Se este projeto foi útil, considere dar uma estrela!**

</div>
