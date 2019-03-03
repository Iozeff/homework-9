console.log("hello");

const API = "https://ru.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=";
const ouput = document.querySelector('.output');
let input = document.querySelector('#requestInput');

document.querySelector('.butt').addEventListener('click', ()=>{
  ouput.innerHTML = "";
  getData(input.value);
})

function getData(request)
{
   return axios.get(`${API}${request}`).then(response => {     
    // результат запроса       
    return response;
  }).then(value => {
    // обрабатываем принятые данные (объект)
    return value.data.query.search;
   }).then(result =>
    {
      // отображаем данные
      Object.keys(result).map(i => {
        
        // создаем поля для отображения результатов поиска
        let snippet = document.createElement('div');
        let resultCard = document.createElement('div');
        // задаем им классы
        snippet.classList.add('snippet');
        resultCard.classList.add('resultCard');
        // записываем результаты в поля
        snippet.innerHTML = result[i].snippet;
        // создаем "дерево" вывода
        resultCard.appendChild(snippet);
        ouput.appendChild(resultCard);
      });      
    }
   );

   
}