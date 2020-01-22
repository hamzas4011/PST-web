

// Denne functionen brukes til å lagre saker fra form og setter den til localStorage
function addCase2(form){
    var caseObject = createCaseObject(form.title.value, form.description.value, form.category.value, form.image.value,form.date.value);
    addCase(caseObject);
    window.location.assign("admin.html");
}