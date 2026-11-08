# Matriz de conformidade com o manual PIM — UNIP ADS 2026/2

Requisitos lidos no PDF `2026_2_ADS_4 1 (2).pdf`, enviado com o briefing. Esta matriz cobre a **landing page**; o **trabalho escrito**, ABNT, slides e apresentação oral devem ser preparados separadamente pelo grupo.

| Exigência do manual | Implementação nesta entrega | Status de implementação |
|---|---|---|
| Cabeçalho: logo e menu | `<header>` com identidade ASSUMA, menu responsivo e links âncora | Implementado |
| Destaque | `<section class="hero">` com mensagem, imagem ambiental real e CTAs | Implementado |
| Sobre ONG: história, missão, visão e valores | Seção `#sobre`; propósito/visão/valores apresentados como síntese editorial para validação | Implementado como proposta editorial |
| Projetos e ações | Seção `#projetos` com ações descritas em reportagem de 2024 | Implementado |
| Impacto | Seção `#impacto` com dado histórico de voluntários e resultados qualitativos | Implementado; sem números fictícios |
| Galeria | Seção `#galeria`, fotos reais de bancos e do distrito com créditos | Implementado |
| Como ajudar | Seção `#ajudar`: voluntariado, doação e parcerias | Implementado |
| Contato | Formulário validado, WhatsApp, Facebook e mapa | Implementado; sem backend |
| Rodapé | `<footer>` com dados institucionais, fonte, autoria das imagens e nota | Implementado |
| HTML5 semântico | Uso de `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<figure>`, `<aside>`, `<form>`, `<footer>` | Implementado |
| CSS3 externo | `style.css` com tokens de cores e media queries | Implementado |
| Organização e comentários | Arquivos separados, seções comentadas, sem bibliotecas JS desnecessárias | Implementado |
| Usabilidade | Links, estado do menu, navegação, formulário e CTAs | Implementado; requer teste visual no ambiente do grupo |
| Responsividade | Breakpoints em 1100, 850, 600, 365 px | Implementado; requer teste visual real |
| Originalidade | Composição própria baseada no layout de referência enviado pelo grupo | Implementado |

## Casos de teste recomendados para documentar no PIM

| ID | Cenário | Comportamento esperado |
|---|---|---|
| T01 | Abrir em 1440 × 900 | Cabeçalho em uma linha, cards em quatro ou duas colunas, textos legíveis |
| T02 | Abrir em 768 × 1024 | Menu compacto, cards adequados e sem rolagem horizontal |
| T03 | Abrir em 390 × 844 | Navegação hamburguer, títulos sem sobreposição, formulário em coluna única |
| T04 | Clicar no botão de menu | Expande links e altera `aria-expanded` de `false` para `true` |
| T05 | Clicar numa seção no menu | A página rola até a seção e fecha o menu |
| T06 | Pressionar Esc com menu aberto | Menu fecha |
| T07 | Clicar em Voluntariado/Doações/Parcerias | Campo assunto do contato recebe a opção correta |
| T08 | Enviar formulário vazio | Mensagem de validação, não abre WhatsApp |
| T09 | Enviar e-mail inválido | Mensagem de validação |
| T10 | Preencher tudo e aceitar o consentimento | Abre WhatsApp com mensagem preenchida; envio final feito pelo usuário |
| T11 | Clicar nas redes e mapa | Abre destinos externos em nova aba |
| T12 | Ativar configuração de reduzir movimento | Animações são minimizadas |
| T13 | Usar apenas teclado | Navegação com Tab e contornos visíveis |
| T14 | Desligar internet | Logotipo e estrutura permanecem; imagens remotas e mapa dependem de conexão |
| T15 | Conferir imagens e números | Fotos ilustrativas identificadas; 50 voluntários datados em 2024 |

## Registro de testes

A sintaxe JavaScript pode ser verificada com `node --check script.js`; a estrutura HTML, âncoras, imagens com texto alternativo e regras CSS podem ser auditadas por script. **Os testes visuais em navegador e os links remotos precisam ser conferidos na máquina do grupo.** Não registrar como executados testes que não foram efetivamente realizados.
