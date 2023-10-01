const characterId = document.getElementById('characterId'); // cria-se uma variável, depois busca no documento html com a função getElementById, 
const btnGo = document.getElementById('botao-vai');         // que busca um elemneto pelo id atribuindo esse valor a variável characterId,      
const content =  document.getElementById('content');        // dentro dos parenteses se passa o id do documento html que vai ser manipulado
const image =document.getElementById('img');

const fetchApi = (value) => {   // cria-se uma função

    const result = fetch(`https://rickandmortyapi.com/api/character/${value}`) // cria-se uma variável atribuindo a ela a função fetch, dentro dela se passa a url
    .then((res) => res.json())  // da API escolhida,dentro dos parenreses substitui as aspas por crases para que no final da url possa passar uma variável ultizando o 
    .then((data) => {           // $ + {}, essa é a sintaxe para poder manipilar a resposta que sera exibida pela API.
        console.log(data);      // como ele exibe uma promessa precisa usar a função then e transformar os dados em json, os dados em json também traz uma promessa
        return data;            // por isso chama mais uma vez a função then e ai sim os dados aparecem corretamente.
    });                         // console.logo printa a variável data, retorna o valor para a varável result, depois a o return do result para a função fetApi

    return result;
}

// fetchApi(10);                // aqui é uma forma de chamar a função só para testar se esta exibindo os dados la no console do javaScript.

btnGo.addEventListener('click', async (event) => {                  // cria-se um evento, nesse evento esta usando a variável btnGo, esse evento é de click e ele é assíncrono.
    event.preventDefault();                                         // Aqui essa função faz com que o resultado seja exibido e bloqueia a atualizção automática da pagina
    const result = await fetchApi(characterId.value);               // O await é usado para esperar que a chamada da função fetchApi seja concluída antes de continuar a execução do código.
    content.innerHTML = `${JSON.stringify(result, undefined, 2)}`;  // Aqui, o resultado da chamada da API é convertido em uma string JSON formatada com recuo de 2 espaços.
    image.src = `${result.image}`                                   // Essa string JSON é então atribuída ao conteúdo (geralmente algum elemento HTML, como uma <div>
});                                                                 // da página, substituindo o conteúdo anterior.
