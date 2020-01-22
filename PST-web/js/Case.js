

// Alle sakene i form av object literals


var defaultCases = [
    {
        "id": 1,
        "date": "10-29-2019",
        "title": "Høyreekstrem bak angrep på synagoge",
        "description": "Det ble meldt angrep mot en synagoge i Oslo i dag, mandag, klokken 12.20. Angrepet skal ha vært rettet mot synagogen. Ingen skal ha vært skadet, og politiet har nå klart å ta to gjerningspersoner som skal ha skutt mot synagogen. Disse skal ha tilhørighet med høyreekstrem gruppen, Live.",
        "category": "Terror",
        "resolved": false,
        "pictures": [
            "c-0.jpg"
        ]
    },
    {
        "id": 2,
        "date": "01-01-2012",
        "title": "Statminister i Norge mottat trusler",
        "description": "Under et foredrag på søndag, skal statminister Jakob Andresen ha mottat trusler. En mann i 20 årene er nå tatt.",
        "category": "Angrep mot landets sikkerhet, myndighetsperson",
        "resolved": false,
        "pictures": [
            "c-1.jpg"
        ]
    },
    {
        "id": 3,
        "date": "02-30-2001",
        "title": "Russisk mann siktet for spionasje",
        "description": "En russisk ettertjeneste mann er siktet for spionasje av norges bank. Personen skal ha prøvd å hacke til seg informasjon om norges banken. Vedkommende ble tatt i Norge, når han prøvde å hacke til seg informasjon i hotellet sitt i Jessheim.",
        "category": "Spionasje",
        "resolved": false,
        "pictures": [
            "c-2.jpg"
        ]
    },
    {
        "id": 4,
        "date": "05-22-2017",
        "title": "Bombeteam har funnet en bombe",
        "description": "Politiet fikk melding om en gjenstand liggende ved karl johan. Bombeteamet ble sendt dit og sperret av område. Det viste seg at dette var en bombe, og den ble heldigvis deaktivert av bombeteamet på stedet. Gjerningspersonen ble også tatt ved jernbane t bane stasjonen like etter.",
        "category": "Trussel, terror",
        "resolved": false,
        "pictures": [
            "c-3.jpg"
        ]
    },
    {
        "id": 5,
        "date": "07-19-2018",
        "title": "Norges utenriksminister drept",
        "description": "Norges utenriksminister hadde et møte med FN i Oslo, Norge, klokken 11. To personer skal ha avfyrt skutt mot utenriksministeren og prøvd å rømme. Gjerningsmennene ble tatt, men utenriksministeren ble erklært død etter å ha blitt sendt til ullevål sykehus.",
        "category": "Angrep mot landets sikkerhet, myndighetsperson",
        "resolved": false,
        "pictures": [
            "c-4.jpg"
        ]
    },
    {
        "id": 6,
        "date": "09-09-2015",
        "title": "Terror angrep i sentrum",
        "description": "Lørdag morgen ble det et angrep mot menneskeheten. Det skjedde en terror angrep midt i sentrum og flere skal være død. Gjerningsmennene er fortsatt på frifot.",
        "category": "Terror",
        "resolved": false,
        "pictures": [
            "c-5.jpg"
        ]
    },
    {
        "id": 7,
        "date": "05-14-2016",
        "title": "Mystisk drone funnet ved militært anlegg",
        "description": "En drone ble funnet ved millitær anlegget og det jobbet med å finne ut hva hensikten med dronen var og hvem som har brukt den.",
        "category": "Spionasje",
        "resolved": false,
        "pictures": [
            "c-6.jpg"
        ]
    },
    {
        "id": 8,
        "date": "02-15-2019",
        "title": "Norges finansminister forsøkt angrepet",
        "description": "Under et møte mandag kveld ble finansministeren forsøkt angrepet når han skulle ta et bilde med en person. Personen ble raskt lagt ned i bakken. Finansministeren unngikk noen skader.",
        "category": "Angrep mot landets sikkerhet, myndighetsperson",
        "resolved": false,
        "pictures": [
            "c-7.jpg"
        ]
    },
    {
        "id": 9,
        "date": "02-02.2018",
        "title": "Ukjent brev med drapstrussel sendt til forsvarsministeren",
        "description": "I hjemmet sitt i Trondheim, fikk forsvarsministeren et uhyggelig brev, der forsvarsministeren ble druet på livet. Hvem som har sendt brevet er fortsatt uklart.",
        "category": "Angrep mot landets sikkerhet, myndighetsperson",
        "resolved": false,
        "pictures": [
            "c-8.jpg"
        ]
    }
];


// Her blit localStorage sjekekt, hvis det ikke er en sak vil det laste opp en default sak.

if (!localStorage.getItem("allCases")) {
    localStorage.setItem("allCases", JSON.stringify(defaultCases));
}


// funksjon for å legge til sak i lokalStorage.
function addCase(caseObject) {
    var allCases = JSON.parse(localStorage.getItem("allCases"));
    if (!allCases) {
        allCases = [];
    }
    allCases.push(caseObject);
    localStorage.setItem("allCases", JSON.stringify(allCases));
}

// Markerer om saker er løst (resolved)
function markCaseResolved(caseId) {
    var allCases = JSON.parse(localStorage.getItem("allCases"));
    for (var key in allCases) {
        var Case = allCases[key];
        if (Case.id == caseId) {
            Case.resolved = true;
            localStorage.setItem("allCases", JSON.stringify(allCases));
            return true;
        }
    }
    return false;
}

// funksjon som gjør det mulig å slette saken
function deleteCase(caseId) {
    var allCases = JSON.parse(localStorage.getItem("allCases"));
    var index = 0;
    for (var key in allCases) {
        var Case = allCases[key];
        if (Case.id == caseId) {
            allCases.splice(index, 1);
            localStorage.setItem("allCases", JSON.stringify(allCases));
            return true;
        }
        index++;
    }
    return false;
}

// Lager en sak objekt format for en ny sak.
function createCaseObject(title, description, category, picture,date) {
    var Case = {
        id: Date.now(), // Make Current timestamp as case id.
        date: date || new Date().toLocaleDateString(),
        title,
        description,
        category,
        resolved: false,
        pictures: [picture]
    }
    return Case;
}


// Det parser Query stringen fra url. så da kan vi få tak i saken for lasting
function getParameter() {
    var queryObject = {};
    var item1 = window.location.search.replace("?", "").split("&");
    for (var key in item1) {
        var item = item1[key];
        var keyVal = item.split("=");
        queryObject[keyVal[0]] = keyVal[1];
    }
    return queryObject;
}
