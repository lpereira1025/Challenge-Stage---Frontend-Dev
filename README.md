  <h1>Desafio Técnico - Desenvolvedor Front-End Pleno (Angular)</h1>
  <p>
    Este projeto foi desenvolvido como parte de um desafio técnico para a vaga de Desenvolvedor Front-End Pleno com foco em Angular. O objetivo foi criar um sistema de gerenciamento de eventos com funcionalidades de listagem, visualização detalhada, edição, exclusão e um sistema de login simples. A aplicação foi desenvolvida utilizando Angular e uma API fake para simular o backend.
  </p>

  <h2>Funcionalidades Implementadas</h2>

  <h3>1. Tela de Listagem de Eventos</h3>
  <ul>
    <li>
      <strong>Visualização em Cards</strong>:
      <ul>
        <li>Exibe os eventos em formato de blocos com imagem, título, descrição curta, status (ativo/inativo) e data de publicação.</li>
        <li>Cada card possui um botão de exclusão para remover o evento diretamente.</li>
        <li>Ao clicar em um card, um modal é aberto com os detalhes completos do evento.</li>
      </ul>
    </li>
    <li>
      <strong>Visualização em Lista</strong>:
      <ul>
        <li>Exibe os eventos em formato tabular com as mesmas informações dos cards.</li>
        <li>Cada item da lista possui um botão de exclusão.</li>
        <li>Ao clicar em um item da lista, um modal é aberto com os detalhes completos do evento.</li>
      </ul>
    </li>
    <li>
      <strong>Campo de Busca</strong>:
      <ul>
        <li>Permite filtrar os eventos pelo título, atualizando a lista em tempo real.</li>
      </ul>
    </li>
  </ul>

  <h3>2. Página de Detalhes do Evento (Modal)</h3>
  <p>
    Ao clicar em um card ou item da lista, um modal é aberto com as seguintes informações:
  </p>
  <ul>
    <li>Imagem do evento.</li>
    <li>Título.</li>
    <li>Descrição completa.</li>
    <li>Status (ativo/inativo).</li>
    <li>Data de publicação.</li>
    <li>Botão de exclusão dentro do modal.</li>
  </ul>

  <h3>3. Autenticação</h3>
  <ul>
    <li>
      <strong>Tela de Login</strong>:
      <ul>
        <li>Simula um sistema de autenticação utilizando <code>sessionStorage</code> para armazenar o token e o nome do usuário.</li>
        <li>Após o login, o usuário é redirecionado para a tela de listagem de eventos.</li>
      </ul>
    </li>
    <li>
      <strong>Logout</strong>:
      <ul>
        <li>Remove o token e o nome do usuário do <code>sessionStorage</code>, redirecionando o usuário para a tela de login.</li>
      </ul>
    </li>
  </ul>

  <h3>4. Responsividade</h3>
  <p>
    A interface foi desenvolvida para ser totalmente responsiva, funcionando bem em dispositivos móveis, tablets e desktops. A alternância entre visualização em cards e lista se adapta ao tamanho da tela.
  </p>

  <h3>5. API Fake</h3>
  <p>
    Foi utilizada uma <a href="https://github.com/lpereira1025/BackEndChallenge">API fake</a> com o <strong>JSON Server</strong> para simular o backend.
  </p>

  <h2>Tecnologias e Ferramentas Utilizadas</h2>
  <ul>
    <li><strong>Framework</strong>: Angular (v16+).</li>
    <li><strong>Estilização</strong>: CSS puro com foco em responsividade e design moderno.</li>
    <li><strong>Gerenciamento de Estado</strong>: Uso de serviços Angular para gerenciar o estado da aplicação.</li>
    <li><strong>API Fake</strong>: JSON Server para simular o backend.</li>
    <li><strong>Ferramentas de Desenvolvimento</strong>:
      <ul>
        <li>Angular CLI para criação e gerenciamento do projeto.</li>
        <li>JSON Server para simulação de API.</li>
        <li>Visual Studio Code como editor de código.</li>
      </ul>
    </li>
  </ul>

  <h2>Estrutura do Projeto</h2>
  <p>
    O projeto foi organizado da seguinte forma:
  </p>
  <pre><code>
src/
├── app/
│   ├── components/
│   │   ├── event-card/
│   │   ├── event-list/
│   │   ├── modal/
│   ├── services/
│   │   ├── auth.service.ts
│   │   ├── event.service.ts
│   ├── pages/
│   │   ├── login/
│   │   ├── user/
│   ├── app.component.ts
│   ├── app.module.ts
├── assets/
│   ├── images/
├── environments/
├── styles.scss
  </code></pre>

  <h2>Como Executar o Projeto</h2>
  <ol>
    <li>
      <strong>Pré-requisitos</strong>:
      <ul>
        <li>Node.js (v16+).</li>
        <li>Angular CLI instalado globalmente (<code>npm install -g @angular/cli</code>).</li>
        <li>JSON Server instalado globalmente (<code>npm install -g json-server</code>).</li>
      </ul>
    </li>
    <li>
      <strong>Clone o Repositório</strong>:
      <pre><code>git clone &lt;link-do-repositório&gt;
cd desafio-frontend-angular</code></pre>
    </li>
    <li>
      <strong>Instale as Dependências</strong>:
      <pre><code>npm install</code></pre>
    </li>
    <li>
      <strong>Inicie a API Fake</strong>:
    <li>
      <strong>Execute a Aplicação</strong>:
      <pre><code>npm start</code></pre>
      Acesse a aplicação em <a href="http://localhost:4200" target="_blank">http://localhost:4200</a>.
    </li>
  </ol>

  <h2>Capturas de Tela</h2>
  <h3>Tela de Login</h3>
  <img src="screenshots/login.png" alt="Tela de Login" class="screenshot">

  <h3>Listagem de Eventos (Cards)</h3>
  <img src="screenshots/cards-view.png" alt="Listagem em Cards" class="screenshot">

  <h3>Listagem de Eventos (Lista)</h3>
  <img src="screenshots/list-view.png" alt="Listagem em Lista" class="screenshot">

  <h3>Modal de Detalhes do Evento</h3>
  <img src="screenshots/modal.png" alt="Modal de Detalhes" class="screenshot">

  <h2>Testes de Responsividade</h2>
  <p>
    A aplicação foi testada em diferentes dispositivos e tamanhos de tela, garantindo que a interface seja funcional e agradável em:
  </p>
  <ul>
    <li>Smartphones (iPhone, Android).</li>
    <li>Tablets (iPad, Android).</li>
    <li>Desktops (resoluções de 1024px até 4K).</li>
  </ul>

  <h2>Melhorias Futuras</h2>
  <ul>
    <li>Implementar edição de eventos diretamente no modal.</li>
    <li>Adicionar validações mais robustas no formulário de login.</li>
    <li>Implementar testes unitários e de integração.</li>
    <li>Adicionar paginação na listagem de eventos.</li>
  </ul>

  <h2>Conclusão</h2>
  <p>
    Este projeto demonstra habilidades sólidas em Angular, desenvolvimento de interfaces responsivas e integração com APIs. Todas as funcionalidades obrigatórias foram implementadas, e a aplicação está pronta para ser expandida com novas features e melhorias.
  </p>
