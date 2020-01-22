
// Dette er en jQuery metode, altså ready() som gjør det manipulere siden.

$(document).ready(() => {
    loadCaseList();
    doAnimation();
});



// Denne funksjonen blir brukt for animasjon av banner, her blir jQuery brukt. 

function doAnimation() {
    $("#caption").animate({top:"70px"},5000);
}



//Her blir alle sakene lastet på forsiden

function loadCaseList() {
    window.allCases = 
    JSON.parse(localStorage.getItem("allCases"));
    $("#cases").empty();
    console.log(allCases);
          for (let key in window.allCases) {
        var Case = allCases[key];
               $("#cases").append(`
            <article class="case-item" >
                <div class="case-title">
                    <div>${Case.title}</div>
                </div>
                <br>
                <a href="case.html?id=${Case.id}">
                    <img src="imgs/${Case.pictures[0]}" class="home-case-img">
                </a>
                <div style="font-size:19px;margin-top:5px;">
                    <span>Kategori : ${Case.category}</span>
                </div>
                <a href="case.html?id=${Case.id}" class="case-link">
                    Les mer
                </a>
            </article>
    `);

        
        
        
    }
}




