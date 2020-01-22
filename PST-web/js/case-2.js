


//alert("Script Loads");
$(document).ready(() => {
    //alert("Document Loads");
    try {
        let caseId = getParameter().id; // Henter caseId  i query string
        var allCases = JSON.parse(localStorage.getItem("allCases")); // Henter saker fra localstorage
        if (caseId == "0") {
            window.case = allCases[0];
        }
        else {
            for (var key in allCases) {
                var Case = allCases[key];
                if (Case.id == caseId) {
                    window.case = Case;
                    break;
                }
            }
        }

        //alert("set Details calls", window.case.title);
        setCaseDetails(window.case);

    }
    catch (ex) {
        alert("Document Load Error" + ex.toString());
    }
});
// Setter nåværende detaljer om sak i HTML
function setCaseDetails() {
    $("#caseTitle").text(window.case.title);
    $("#caseDescription").text(window.case.description);
    $("#caseDate").text(window.case.date);
    $("#caseImage").attr("src", "imgs/" + 
       window.case.pictures[0]);
      if (window.case.resolved) {
        $("#caseResolved").html('<span id="caseResolved" style="color:green">Løst</span>');
    }
    else {
        $("#caseResolved").html('<span id="caseResolved" style="color:red">Ikke løst</span>');
    }

    //alert("set Details finished");
}


