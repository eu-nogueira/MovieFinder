Visão Geral:

O MovieFinder é uma aplicação web desenvolvida com React para testar os conteúdos que estou aprendendo atualmente. A aplicação consome a API pública do TMDB para exibir filmes populares e permitir buscas dinâmicas. O projeto é estruturado em componentes reutilizáveis, com foco em responsividade, animações suaves e experiência de usuário fluida.

Tecnologias Utilizadas:

- React para construção da interface.
- Vite como bundler e ambiente de desenvolvimento.
- TMDB API para consumo de dados de filmes.
- AOS (Animate On Scroll) para animações de entrada.
- React Hooks (useState, useRef, useEffect) para controle de estado e ciclo de vida.
- CSS para estilização modular.

Estrutura Funcional:

O projeto é dividido em componentes principais inicialmente:

- Filmes: Página principal que realiza requisições à API, filtra os resultados e exibe os filmes com animações.
- Menu: Componente de navegação que recebe elementos dinâmicos via props, como o campo de busca.
- Campo de Busca: Integrado ao Menu, permite digitação contínua e dispara requisições automaticamente.

Funcionalidade de Busca:

- O campo de busca é controlado por referência (useRef) e dispara requisições a cada alteração.
- A busca é feita na rota de filmes populares da TMDB, com filtragem local por título.
- A ausência do botão de busca foi proposital para fins de demonstração, embora não seja recomendada em produção por conta da quantidade de requisições.

Animações
- A biblioteca AOS é utilizada para animar a entrada dos elementos conforme o scroll.
- A inicialização e atualização das animações são controladas via useEffect.
