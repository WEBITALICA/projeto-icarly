# Revisão Final — Projeto iCarly

## Objetivo

Checklist para realizar o teste final do projeto antes de considerar a revisão geral concluída.

---

## 1. JavaScript

- [x] `script.js` conectado ao `index.html`
- [x] Funcionalidades 1–10 migradas para `script.js`
- [x] Funcionalidades numeradas de 1 a 10
- [x] `irParaVideos()` duplicada corrigida
- [x] `irParaVideosMenu()` separado para o menu
- [x] `.indicador-rec` corrigido para `.gravacao`
- [x] Seletores conferidos com o HTML
- [x] Eventos conferidos
- [x] Remover códigos de teste ou sobras

---

## 2. Teste funcional

- [x] Botão "Assistir" dos vídeos
- [x] Relógio / REC
- [x] Botão "Assistir agora" do banner
- [x] Ler mais / Ler menos
- [x] Galeria
- [x] Elenco pelo menu
- [x] Vídeos pelo menu
- [x] Fotos pelo menu
- [x] Blog pelo menu
- [x] Sobre pelo menu

---

## 3. Teste visual

- [x] Desktop
- [x] Notebook
- [x] Celular moderno
- [x] Tela 320×824
  - Observação: essa resolução apresentou uma limitação de layout anteriormente e deve ser conferida novamente.

---

## 4. Console do navegador

- [x] Recarregar a página
- [x] Verificar se existem erros vermelhos no Console
- [x] Verificar mensagens inesperadas
- [x] Verificar possíveis `null` relacionados ao funcionamento

---

## 5. HTML

- [x] Remover qualquer `<script>` antigo
- [x] Confirmar que o JavaScript externo está sendo carregado por:

```html
<script src="js/script.js"></script>
```

- [x] Conferir se não ficaram códigos de teste
- [x] Conferir se não existem referências antigas a classes removidas

---

## 6. CSS

- [x] Procurar classes antigas que não existem mais no HTML
- [x] Verificar estilos que não estão sendo utilizados
- [x] Conferir responsividade
- [x] Conferir se as alterações recentes não afetaram o layout

---

## 7. Organização final

### Estrutura esperada

```text
Projeto iCarly/
│
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── imagens/
├── videos/
└── README.md
```

### Responsabilidade de cada arquivo

- `index.html` → estrutura e conteúdo
- `css/style.css` → aparência e layout
- `js/script.js` → comportamento e interações
- `imagens/` → imagens do projeto
- `videos/` → vídeos do projeto
- `README.md` → documentação e checklist do projeto

---

## Critério para finalizar

A revisão geral pode ser considerada concluída quando:

- todas as funcionalidades estiverem funcionando;
- não houver erros relevantes no Console;
- HTML, CSS e JavaScript estiverem separados corretamente;
- não existirem referências antigas ou código de teste desnecessário;
- o layout estiver funcionando nos dispositivos testados;
- a estrutura do projeto estiver organizada.

> Regra da revisão: primeiro identificar o problema, depois investigar a causa e só então corrigir.
