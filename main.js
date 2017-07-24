let search = document.querySelector('#search');
let submit = document.querySelector('#submit');
let container1 = document.querySelector('.container1');
//
submit.addEventListener('click', function() {
  container1.innerHTML = " "
  fetch(`https://crossorigin.me/http://www.recipepuppy.com/api/?q=${search.value}`)
    .then(function(response) {
      if (response.status !== 200) {
        console.log(response.status);
        return;
      }
      response.json().then(function(data) {

        console.log("Here is the data:", data);

        for (let i = 0; i < data.results.length; i++) {
          container1.innerHTML += `<div class = "results">
           <article>
          <h3>${data.results[i].title}</h3>
          <a target="_blank" href ="${data.results[i].href}"><img src = "${data.results[i].thumbnail}"></a>
          </article>
          </div>`
        }
      });
    })
    .catch(function(err) {
      console.log("Fetch Error :-S", err);
    });
});
