<template>
  <section
    class="w-full min-h-screen pt-12 m-auto text-gray-700 font-inter dark:bg-gray-800 dark:text-white"
  >
    <div class="max-w-4xl mx-auto px-4 text-justify">
      <h1
        class="mt-4 text-5xl font-bold mb-[25px] text-gray-700 dark:text-white"
      >
        Gerenciador de GC
      </h1>

      <article>
        <h2 class="text-[25px] font-bold my-2">Como esse projeto nasceu?</h2>
        <p class="text-[18px]">
          Uma prática muito comum na vida de Igreja é o fato de seus membros se
          reunirem em pequenos grupos com a finalidade de se relacionarem,
          compartilhar experiencias, aprenderem sobre Deus, entre outras coisas.
          À medida que a Igreja cresce, faz-se necessário gerenciar esses grupos
          de alguma forma e a mais comum delas é utilizar uma planilha.
        </p>
      </article>
      <article class="mt-8">
        <p class="text-[18px]">
          O Gerenciador de GC é uma aplicação web que visa facilitar o
          gerenciamento dos Grupos de Crescimento da Igreja Angelim Teresina e
          seus Campus, possibilitando a criação, edição e exclusão de grupos,
          criação de usuários, controle de acesso via permições, etc.
        </p>
      </article>
      <article class="mt-8">
        <p class="text-[18px]">
          Uma das principais funcionalidades desse sistema é a possibilidade de
          gerar banners com as informações de um GC. Há não muito tempo atrás
          esse trabalho era feito utilizando a ferramenta online
          <a
            href="https://www.canva.com"
            class="mb-4 text-blue-600 hover:text-sky-500 dark:text-yellow-500 dark:hover:text-yellow-600 ease-in"
            target="_blank"
            >Canva</a
          >
          e todas as informações eram inseridas manualmente, o que levava cerca
          de 8 minutos para ficar pronto. O trabalho era: conferir os dados do
          GC em uma planilha (previamente preenchida), adicionar as informações
          no template e baixar o banner.
        </p>
      </article>
      <article class="mt-8">
        <p class="text-[18px]">
          Posteriormente, quando assumi a responsabilidade por atualizar as
          informações dos GC's e gerar os banners, criei um script utilizando
          Javascript e o tempo para gerar um único banner caiu para menos de 1
          segundo! O script buscava as informações do GC em um arquivo .csv
          exportado a partir de uma planilha do Google Sheets e gerava a imagem
          utilizando a lib
          <a
            href="https://www.npmjs.com/package/canvas/v/2.0.0-alpha.7"
            class="mb-4 text-blue-600 hover:text-sky-500 dark:text-yellow-500 dark:hover:text-yellow-600 ease-in"
            target="_blank"
            >node-canvas</a
          >
          junto o módulo File system do Node.js. Esse mini projeto reduziu
          significativamente o tempo gasto quando precisava gerar banners em
          massa e foi utilizado durante muito tempo.
        </p>
      </article>
      <article class="mt-8">
        <p class="text-[18px]">
          Isso resolveu apenas uma parte do problema. Agora, é necessário que
          outras pessoas realizem esse gerenciamento, daí a necessidade de um
          sistema que facilite esse trabalho e que esteja disponível, de
          preferencia na internet.
        </p>
      </article>

      <article>
        <h2 class="text-[25px] font-bold mt-8 mb-2">Informações técnicas</h2>
        <h3 class="font-bold text-[20px] my-[1rem]">
          🧱 Arquitetura MVC (Model-View-Controller)
        </h3>
        <ul class="list-disc pl-12">
          <li class="text-[18px] leading-[1.8rem] mb-[.5rem]">
            <p>
              Separação clara entre responsabilidades: lógica de negócio
              (Model), interface com o usuário (View) e controle do fluxo de
              dados (Controller).
            </p>
          </li>
          <li class="text-[18px] leading-[1.8rem] mb-[.5rem]">
            <p>
              Facilita a manutenção, escalabilidade e testabilidade do sistema.
            </p>
          </li>
          <li class="text-[18px] leading-[1.8rem] mb-[.5rem]">
            <p>
              Torna o código mais organizado e fácil de entender, ideal para
              projetos que possam crescer ou ter múltiplos desenvolvedores
              envolvidos.
            </p>
          </li>
        </ul>

        <h3 class="font-bold text-[20px] my-[1rem]">
          📦 Infraestrutura com Docker
        </h3>
        <ul class="list-disc pl-12">
          <li class="text-[18px] leading-[1.8rem] mb-[.5rem]">
            <p>
              Ambiente isolado e replicável: o sistema pode ser executado em
              qualquer máquina com Docker, garantindo que todos os
              desenvolvedores e ambientes usem a mesma configuração.
            </p>
          </li>
          <li class="text-[18px] leading-[1.8rem] mb-[.5rem]">
            <p>
              Facilidade na configuração de dependências, como banco de dados e
              serviços auxiliares, usando docker-compose.
            </p>
          </li>
          <li class="text-[18px] leading-[1.8rem] mb-[.5rem]">
            <p>
              Preparado para deployment em containers, facilitando a transição
              entre desenvolvimento, testes e produção.
            </p>
          </li>
        </ul>

        <h3 class="font-bold text-[20px] my-[1rem]">
          🗃️ Versionamento do Banco de Dados
        </h3>
        <ul class="list-disc pl-12">
          <li class="text-[18px] leading-[1.8rem] mb-[.5rem]">
            <p>
              Gerenciamento de alterações na estrutura do banco via migrations,
              mantendo o histórico e controle total sobre as modificações.
            </p>
          </li>
          <li class="text-[18px] leading-[1.8rem] mb-[.5rem]">
            <p>
              Sincronização automática entre ambientes (desenvolvimento,
              homologação e produção), evitando conflitos ou inconsistências.
            </p>
          </li>
          <li class="text-[18px] leading-[1.8rem] mb-[.5rem]">
            <p>
              Facilidade para reverter alterações, caso necessário, com
              segurança e previsibilidade.
            </p>
          </li>
        </ul>

        <h3 class="font-bold text-[20px] my-[1rem]">
          🧹 Qualidade e Padrões de Código
        </h3>
        <ul class="list-disc pl-12">
          <li class="text-[18px] leading-[1.8rem] mb-[.5rem]">
            <p>
              Uso do Prettier para garantir uma formatação consistente e
              automatizada do código.
            </p>
          </li>
          <li class="text-[18px] leading-[1.8rem] mb-[.5rem]">
            <p>
              Linting com regras definidas, ajudando a evitar erros comuns e a
              seguir boas práticas de desenvolvimento.
            </p>
          </li>
          <li class="text-[18px] leading-[1.8rem] mb-[.5rem]">
            <p>
              Commits padronizados com Conventional Commits, facilitando a
              leitura do histórico de mudanças e integrando com ferramentas de
              versionamento e automações (como geração de changelog).
            </p>
          </li>
        </ul>

        <h3 class="font-bold text-[20px] my-[1rem]">✅ Testes Automatizados</h3>
        <ul class="list-disc pl-12">
          <li class="text-[18px] leading-[1.8rem] mb-[.5rem]">
            <p>
              Cobertura de testes unitários para garantir que cada parte isolada
              do sistema funcione como esperado.
            </p>
          </li>
          <li class="text-[18px] leading-[1.8rem] mb-[.5rem]">
            <p>
              Testes de integração para validar o comportamento entre os módulos
              e serviços do sistema.
            </p>
          </li>
          <li class="text-[18px] leading-[1.8rem] mb-[.5rem]">
            <p>
              Execução automatizada dos testes como parte do processo de
              desenvolvimento, contribuindo para entregas mais seguras e ágeis.
            </p>
          </li>
        </ul>

        <h3 class="font-bold text-[20px] my-[1rem]">
          🔐 Autenticação e Autorização
        </h3>
        <ul class="list-disc pl-12">
          <li class="text-[18px] leading-[1.8rem] mb-[.5rem]">
            <p>
              Sistema de autenticação seguro com armazenamento criptografado de
              senhas.
            </p>
          </li>
          <li class="text-[18px] leading-[1.8rem] mb-[.5rem]">
            <p>
              Controle de acesso baseado em permissões, permitindo que
              diferentes perfis de usuários tenham acessos diferenciados.
            </p>
          </li>
          <li class="text-[18px] leading-[1.8rem] mb-[.5rem]">
            <p>
              Proteção de rotas para garantir que apenas usuários autorizados
              acessem determinadas partes do sistema.
            </p>
          </li>
        </ul>
      </article>

      <article>
        <h2 class="text-[25px] font-bold mt-8 mb-2">
          Resumo das tecnologias utilizadas
        </h2>
        <h3 class="font-bold text-[20px] my-[1rem]">Frontend - Em breve</h3>
        <ul class="list-disc pl-12">
          <li class="text-[18px] leading-[1.8rem] mb-[.5rem]"><p>React.</p></li>
          <li class="text-[18px] leading-[1.8rem] mb-[.5rem]">
            <p>Html, CSS, Javascript.</p>
          </li>
        </ul>
        <h3 class="font-bold text-[20px] my-[1rem]">Backend</h3>
        <ul class="list-disc pl-12">
          <li class="text-[18px] leading-[1.8rem] mb-[.5rem]">
            <p>
              Hospegagem:
              <a
                href="https://vercel.com/"
                target="_blank"
                class="mb-4 text-blue-600 hover:text-sky-500 dark:text-yellow-500 dark:hover:text-yellow-600 ease-in"
                >Vercel;</a
              >
            </p>
          </li>
          <li class="text-[18px] leading-[1.8rem] mb-[.5rem]">
            <p>Node, Next, Docker, Postgres.</p>
          </li>
          <li class="text-[18px] leading-[1.8rem] mb-[.5rem]"><p>Jest.</p></li>
        </ul>
        <p class="text-[18px] leading-[1.8rem] mb-[2rem]">
          Além de utilizar uma estrutura que possibilita organização de código,
          separação de contextos, cobertura de testes (local e nas actions), o
          sistema já conta com autenticação, criação de usuários, possibilidade
          de checar e rodar migrações pendentes via endpoint /migrations,
          verificação da saúde do via enpoint /status.
        </p>
      </article>
    </div>

    <Footer />
  </section>
</template>
