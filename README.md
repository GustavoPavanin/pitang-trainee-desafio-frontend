# Desafio | Agendamento COVID-19 | Frontend

> ## :memo: Features da Aplicação

* Portal com Create-React-App
* Testes com Jest
* Validações com Yup
* Estilização com Material UI
* Cliente HTTP Axios

> ## :wrench: Como iniciar a aplicação

Subindo localmente: 
1. Execute na raiz do projeto o comando: npm run start
2. A aplicação estará acessível no endereço localhost:3000


> ## :hammer: Funcionalidades do projeto
> 1. Home
* ✅ Redireciona o usuário para a tela desejada

> 2. Lista agendamentos
* ✅ Faz uma requisição do tipo **GET** para a **[API do Backend](https://github.com/GustavoPavanin/pitang-trainee-desafio-backend)**
* ✅ Recebe os a lista de agendamentos cadastrados e grava em **Local Storage**
* ✅ Dispôe os dados dos agendamentos da lista recebida em uma **Tabela**

> 3. Formulário de agendamento
* ✅ Apresenta os campos **Nome**, **E-mail**, **Data de Nascimento**, **Data de Agendamento**, **Horário de Agendamento**, além do botão **Agendar Vacina**
* ✅ Recebe os dados e valida valores informados nos campos. OBS: **Todos os campos são obrigatórios, exceto E-mail**
* ✅ Envia uma requisição do tipo **POST** para a **[API do Backend](https://github.com/GustavoPavanin/pitang-trainee-desafio-backend)** com os dados informados e validados.
* ✅ Recebe o retorno da **API** e mostra na tela e atualiza o **Local Storage** (em caso de sucesso)
* ✅ Limpa o formulário para que o próximo agendamento seja cadastrado

> 4. Confirmar agendamento
* ✅ Na listagem de agendamentos, recebe o **ID** do agendamento
* ✅ Abre um **Modal** na tela para que seja digitado um **comentário de conclusão** do agendamento
* ✅ Valida o **comentário**, que não é obrigatório.
* ✅ Envia uma requisição do tipo **PUT** para a **[API do Backend](https://github.com/GustavoPavanin/pitang-trainee-desafio-backend)** com os dados do agendamento, se o **comentário** não for preenchido, será enviado um genérico.
* ✅ Atualiza o **Local Storage** (em caso de sucesso) e retorna para a Listagem de agendamentos.



