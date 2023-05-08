# Testar Teclado
## Projeto criado Next e Tailwind

Esse site foi construido principalmente com Next.js e Tailwind, sem necessidade de nenhuma outra lib.

## Funcionamento
### Elemento `Key`

Cada tecla é uma instancia do elemento `Key`.
Esse elemento recebe o conteudo da tecla pela prop `KeyValue` e o codigo da tecla pela prop `code`.
A prop `className` no elemento `Key` é usada para adicionar qualquer estilização extra no elemento.

### Contexto
O contexto é um array de elemento HTML, que no caso, são o corpo do elemento `Key`, o contexto inicia vazio e o elemento faz o `.push()` no `ref` que referencia a si mesmo assim que é rederizado.

### Resposta visual
Com o contexto populado com todas as `ref` das teclas, há dois `eventListener` com os eventos `keydown` e `keyup` para capturar o evento de pressionar e soltar a tecla.
Esses eventos são responsaveis por adicionar e tirar classes personalizadas de cada elemento `Key` de acordo com sua referencia obtida por meio de `.find()` no contexto.