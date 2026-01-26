## SISTEMA DE CONQUISTAS - WEBSITE

### OBJETIVO
	- preminar o usuário por conhecer o conteudo do site por meio de medalhas e insignias;
	- a ideia é fazer com que esse usuario se sinta instigado a investigar mais conteudos no site e por consequencia saber mais sobre o meu trabalho;

### IMPLEMENTAÇÃO
	- por meio de fases, onde cada entrega será um nivel ou dificuldade na logica de descoberta e consequentemente dando premiações "melhores";

### FASE 1
	- vai contar com:
		- três níveis de conquistas; aqui, um conquista, visualmente, é uma badge ou tag, com nivel de 1 a tres, sendo o nivel 3 o mais alto e mais dificil desse grupo; bem ao estilo militar; recruta, soldado, elite; buscar termos melhores;
		- animação simples;
		- efeitos sonoros basicos;
		- confetes também em nivel simples;

### FASE 2
	- vai contar com:
		- novas conquistas; no estilo insignia;
		- area (pagina) de conquistas; vai ficar oculta e será liberada apenas apos o usuario conquistar a fase 1;

### REQUISITOS - FASE 1
	- requisitos funcionais:
		- ao entrar no site, o progresso do usuario deve ser recuperado e refletir o estado em que se encontrava quando o usuario deixou o site;
		- incrementar a barra de progresso apos o usuario acessar uma nova pagina ou seção dentro do escopo da fase;
		- a barra de progresso deve ser incrementada uma unica vez;
		- no primeiro acesso, a badge inicia com opacidade de acordo com o valor da barra de progresso (testar para ver se isso funciona);
		- ao passar o mouse por cima da badge, exibir:
			- porcentagem;
			- dicas para continuar avançando;
		- apos alcançar 100% de uma conquista, a badge fica com 100% de opacidade, os confetes deve ser estourados, a barra de progresso some;

	- requisitos não funcionais
		- criar um flag para indicar que a fase 1 foi alcançada; true or false;
	