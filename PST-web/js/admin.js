//her blir igjen jQuery metoden brukt, for å få fram alle sakene

$(document).ready(() => {
    window.allCases = JSON.parse(localStorage.getItem("allCases"));
    loadCases();
});

// Alle sakene blir lastet opp til admin panelet
function loadCases() {
    $("#caseList").empty();
    for (var key in window.allCases) {
        var Case = window.allCases[key];
        $("#caseList").append(`
            <article class="case-item">
            <img src="imgs/${Case.pictures[0]}" class="case-img" alt="Case Image" />
            <div class="case-title">${Case.title}</div>
            <div>
                ${!Case.resolved ? "<button onclick='markCaseResolved2(" + Case.id + ")'>Løst</button>" : ""}
                <button onclick="deleteCase2('${Case.id}')">Slett</button>
            </div>
        </article>
            `);
    }
}

// Når bruker skal slette saken, så spør funksjonen om brukeren vil slette saken fra localstorage

function deleteCase2(caseId) {
    if (confirm("Vil du slette?")) {
        deleteCase(caseId);
    }
     window.location.reload();
     
}

// Her markeres  saken som løst i localstorage
function markCaseResolved2(caseId) {
    markCaseResolved(caseId);
    window.location.reload();
    
}