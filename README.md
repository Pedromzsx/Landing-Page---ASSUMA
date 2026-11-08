# ASSUMA Sustentabilidade — Landing Page

Landing page institucional acadêmica, construída com **HTML5 semântico**, **CSS3** e **JavaScript puro**, com base no PIM 2026/2 do curso de Análise e Desenvolvimento de Sistemas da UNIP.

## Como abrir

1. Extraia o ZIP e mantenha `index.html`, `style.css`, `script.js` e `assets/` na mesma pasta.
2. Abra `index.html` em um navegador atualizado. Para testar em um servidor local, execute no diretório do projeto:

   ```bash
   python -m http.server 8000
   ```

   Depois abra `http://localhost:8000`.
3. É necessária **conexão à internet** para carregar as fotografias reais de acervos públicos, a tipografia da web e o mapa embutido. O logotipo fornecido no briefing está incluído localmente na pasta `assets/`.

## Estrutura de arquivos

```text
ASSUMA_Landing_Page/
├── index.html                # Seções semânticas e conteúdo institucional
├── style.css                 # Identidade visual, componentes, media queries
├── script.js                 # Menu, rolagem, seleção de tema e formulário
├── assets/
│   ├── logo-assuma.png       # Recorte do símbolo fornecido pelo grupo
│   └── logo-assuma-original.jpg  # Recorte do logotipo completo fornecido
├── docs/
│   └── CHECKLIST_PIM.md      # Matriz de requisitos e cenários de teste
└── README.md
```

## Identidade visual — verde-floresta e laranja (versão editorial)

O projeto utiliza a **marca ASSUMA** como referência: verde-floresta como superfície institucional, laranja da marca para ações e destaques, branco/off-white como papel de leitura e verde-sálvia para seções de conteúdo. O logotipo fornecido pelo grupo foi preservado.

Paleta principal: `#1E3B2E` (verde-floresta), `#284D3B` (verde complementar), `#D5680A` (laranja), `#F5AE71` (laranja claro), `#E7EFE8` (verde-sálvia) e `#FCFAF6` (papel claro).

A composição combina capa dividida com fotografia, tipografia com contraste editorial, faixa de indicadores, narrativa institucional com fotografia e bloco verde, frentes de atuação em colunas numeradas, projetos em grid assimétrico, galeria e área de participação verde com links em formato de linhas. O uso de formas simples e espaços em branco evita a repetição excessiva de cartões arredondados.

## Seções presentes

1. Cabeçalho com logotipo e menu de navegação responsivo.
2. Destaque com chamada principal e botões de ação.
3. Impacto ambiental com um indicador histórico verificado e efeitos qualitativos.
4. Sobre: trajetória, propósito, visão de futuro e valores editoriais.
5. Frentes de atuação.
6. Ações documentadas em publicações.
7. Galeria com fotografias reais e legendas claras.
8. Como ajudar: voluntariado, doações e parcerias.
9. Contato: formulário, WhatsApp, Facebook e mapa.
10. Rodapé institucional e créditos das imagens.

## Interações

- Menu mobile acessível por botão (com `aria-expanded`) e fechamento ao clicar em link ou pressionar Esc.
- Navegação por âncoras; destaques da seção ativa e botão de retorno ao topo.
- Escolha de voluntariado, doação ou parceria pré-preenche o assunto do formulário.
- Formulário valida nome, e-mail, assunto, mensagem e consentimento. O botão **abre uma mensagem pré-preenchida no WhatsApp** para que a pessoa revise e envie manualmente. **Não existe envio automático, banco de dados ou back-end**; nenhum dado fica armazenado nesta landing page.
- `prefers-reduced-motion` para minimizar animações quando solicitado pelo usuário.

## Fontes das informações

- Correio Popular, reportagem publicada em **20/07/2024**: https://correio.rac.com.br/campinasermc/ong-de-joaquim-egidio-incentiva-interac-o-da-comunidade-com-a-natureza-1.1540459
- Facebook da ASSUMA: https://www.facebook.com/ASSUMASustentabilidade/
- Campinas.com.br (publicações antigas sobre endereço e telefone): https://campinas.com.br/cultura/2016/12/musico-thadeu-romano-faz-show-com-cancoes-do-1o-cd-da-reza-a-festa/
- Publicação sobre ação histórica e participação cultural: https://campinas.com.br/turismo/2016/12/roteiro-do-campinas-com-br-reune-dicas-de-passeios-na-cidade-e-regiao-durante-as-ferias/

**Cuidados editoriais:** A reportagem de 2024 menciona **50 voluntários ativos à época**; o indicador é explicitamente datado no site. Nenhum número de nascentes, público alcançado ou doações foi inventado. A história foi sintetizada a partir de fonte pública; os títulos de propósito, visão e valores são interpretações para a página, **não transcrições de um documento oficial da associação**. Os textos referentes às ações descrevem fatos reportados em 2024, sem presumir que continuem acontecendo em 2026.

## Fotografias reais e licenças

As imagens externas são de fotografias publicadas no **Unsplash**, sob a licença disponível em https://unsplash.com/license, e no **Wikimedia Commons**, com licença e autor indicados nas páginas de origem. Todas são ilustrativas, **não se afirma que retratem eventos ou projetos da ASSUMA**. Os créditos aparecem também no rodapé do site.

- Foto de abertura (rio entre árvores), autoria de Yuriy Vertikov: https://unsplash.com/photos/a-calm-river-flows-through-a-lush-green-forest-2ShiAwil0NQ
- Cascata: https://unsplash.com/photos/sunlight-streams-through-trees-onto-a-small-waterfall-aLDtjj5T6qA
- Voluntários em ação de limpeza, imagem ilustrativa: https://unsplash.com/photos/diverse-group-of-volunteers-holding-trash-bags-outdoors-NGdaKKVt4w0
- Outros registros ilustrativos de plantas e horticultura: imagens servidas por `images.unsplash.com`.
- Fotografia de paisagem real em Joaquim Egídio, **enioprado**, CC BY-SA 3.0: https://commons.wikimedia.org/wiki/File:Joaquim_Eg%C3%ADdio_-_Campinas_-_panoramio_(7).jpg
- Fotografia de uma construção real de Joaquim Egídio, **enioprado**, CC BY-SA 3.0: https://commons.wikimedia.org/wiki/File:Joaquim_Eg%C3%ADdio_-_Campinas_-_panoramio_(1).jpg
- Texto da licença das fotos do Wikimedia Commons: https://creativecommons.org/licenses/by-sa/3.0/

Os recortes proporcionais feitos pelo `object-fit: cover` e pelo CSS da página não alteram os arquivos originais de terceiros. O logotipo foi fornecido pelo grupo, recortado de uma imagem encaminhada para desenvolvimento; para publicação pública, solicitar o arquivo oficial em resolução superior e confirmação de uso.

## Antes de publicar oficialmente

- Confirmar com a ASSUMA o **endereço atualizado**, a administração do número de **WhatsApp (19) 99165-3038**, disponibilidade do Facebook e a autorização do logotipo. O endereço e o telefone aparecem em publicações antigas; não é possível assegurar funcionamento atual.
- Substituir as fotos ilustrativas por fotos reais da ONG **somente com autorização de uso** e de eventuais pessoas identificáveis.
- Validar com a associação todos os textos de propósito, visão, valores e iniciativas.
- Se desejar receber contatos no e-mail e ter banco de dados, integrar um back-end real e informar política de privacidade; esta entrega usa apenas WhatsApp pré-preenchido.
- Realizar testes no navegador, em internet normal e com rede lenta; testar em tela pequena, tablet e desktop. Ver `docs/CHECKLIST_PIM.md`.

## Validação da interface

O código foi verificado em larguras de **1440, 810, 390 e 320 pixels**, sem rolagem horizontal e sem erros JavaScript nas verificações locais. O menu de navegação móvel foi aberto, e seu fechamento após clicar em uma seção foi conferido. Testes de carregamento das fotografias remotas, disponibilidade do WhatsApp e envio final da mensagem dependem de conexão à internet e confirmação dos canais pela ASSUMA.
