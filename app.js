
let data = fetch("https://dummyapi.online/api/movies")
data.then((item) => {
    return item.json();
})
 .then((item) => {
    console.log(item);
    
        let container = document.getElementById("cardContainer")
        item.map((movie) => {
            const card = document.createElement("div");
            card.className = "card";
            card.style = "width: 18rem;"
            const imageUrl = "https://tse1.mm.bing.net/th?id=OIP.7F6y0Zrza9cQEPRbXCMLaQHaDT&pid=Api&P=0&h=220"
            card.innerHTML = `
            <img src="${imageUrl}" class="card-img-top" alt="${movie.movie}">
        <div class="card-body">
          <h5 class="card-title">"${movie.movie}"</h5>
          <p class="card-text">"${movie.rating}"</p>
          <a href="#" class="btn btn-primary">Read more</a>
        </div>
      </div>`;
            container.appendChild(card);
        })
    });


