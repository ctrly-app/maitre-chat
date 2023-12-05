function create_initiative(article, index) {
    console.log(article);
    return `
  <div class="carousel-item${index == 0 ? ' active' : ''}">
  <div class="col-md-3 col-12">
      <div class="initiatives d-flex flex-column justify-content-between align-items-start">
              <img src="${window.location}assets/images/${article.img}" class="ratio ratio-16x9">
              <div>
              <p class="fw-bold is-text-primary fs-5 mt-3 mb-0">${article.title}</p>
              <p class="fw-bold fs-6">${article.departement} (${article.code_postal})</p>
      
      <div class="row mb-3">
      <div class="col-md-10 col-12">
                  <p class="has-text-weight-light mt-1">${article.description.length > 120 ? (article.description.substr(0, 119).trim() + "...") : article.description}</p>
               </div>
               <div class="col-md-2 d-flex justify-content-center align-items-center">
                  <a href="{{ site.baseurl }}/actions" class="btn btn-primary text-uppercase">Voir</a>
               </div>
               </div>
             
      </div>
  </div>
  </div>
</div>
  `
}


document.addEventListener("DOMContentLoaded", function (event) {

    fetch(`${window.location.protocol}//${window.location.hostname}:${window.location.port}/api/all/feed-1.json`)
        .then(function (response) {
            return response.json();
        }).then(function (data) {
            console.log(data)
            const html = data.pages.map((el, index) => create_initiative(el, index)).reduce((acc, el) => acc + el, "");
            const slides = document.querySelector("#initiatives");

            slides.innerHTML = html;
            let items = document.querySelectorAll('#initiatives .carousel-item')

            items.forEach((el) => {
                const minPerSlide = 4
                let next = el.nextElementSibling
                for (var i = 1; i < minPerSlide; i++) {
                    if (!next) {
                        next = items[0]
                    }
                    let cloneChild = next.cloneNode(true)
                    el.appendChild(cloneChild.children[0])
                    next = next.nextElementSibling
                }
            })
        })
        .catch(function (err) {
            console.log("Something went wrong!", err);
        });
});
