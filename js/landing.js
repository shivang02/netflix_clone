let jumboSection = document.querySelector('.jumbotron');
let faqSection = document.querySelector('.faq');

function createJumboSection(jumboContent) {
    jumboSection.innerHTML = `
      ${jumboContent.map(item =>{
          return `
            <div class="jumbo-item-wrapper container">
                <div class="jumbo-item row align-items-center justify-content-center" >
                    <div class="jumbo-textwrapper col-sm-12 col-md-6 justify-content-center" >
                         <h1 class="jumbo-title" >
                            ${item.heading}
                        </h1>
                         <h2 class="jumbo-subtitle" >
                            ${item.subheading}
                        </h2>
                    </div>
                    <div class="jumbo-imagewrapper col" >
                        <img class="jumbo-image img-fluid" src="${item.imgLink}" alt="" />
                    </div>
                </div>
                </div>
            `
      }).join("")
    }`;
}

function createFaqSection(faqContent) {
    faqSection.innerHTML = `
    <div class="faq-wrapper row justify-content-center align-items-center">
    <div class="faq-container col-lg-6 col-md-8 col-sm-10">
    <h1 class="faq-title">Frequently Asked Questions</h1>
      ${faqContent.map(item =>{
        return `
            <div class="accordion accordion-flush">
                <div class="accordion-item">
    <h1 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${item.id}" aria-expanded="false" aria-controls="collapse${item.id}">
        <h3>${item.heading}</h3>
      </button>
    </h1>
    <div class="accordion-collapse collapse" id="collapse${item.id}" >
      <div class="accordion-body"><h3 class="accordian-content">${item.subheading}<h3></div>
    </div>
  </div>    
</div>
        `
      }).join("")
    }
    </div>
    </div>
`;

}

fetch("./data/faqs.json")
    .then(response => {
        return response.json();
    })
    .then(data => {
        createFaqSection(data);
    });

fetch("./data/jumbo.json")
    .then(response => {
        return response.json();
    })
    .then(data => {
        createJumboSection(data);
    });