function Soumettre() {
    let nom = document.getElementById('Nom').value;
    let regExNom = /^[a-zA-Z]+$/;
    let prénom = document.getElementById('Prénom').value;
    let adresseEmail = document.getElementById('ValidEmail').value;
    let regExemail = /^[a-zA-Z]+[.]{1}[a-zA-Z]+[@]{1}[o]{1}[f]{1}[p]{2}[t]{1}[.]{1}[m]{1}[a]{1}$/;
    let télephone = document.getElementById('Télephone').value;
    let regExtélephone = /^[0]{1}[5-7]{1}[0-9]{8}/;
    let checkboxs = document.querySelectorAll('input[name="Genre"]:checked');
    let checkboxss = document.querySelectorAll('input[name="Groupe"]:checked');
    let table = [];
    checkboxs.forEach((checkbox)=>{
    table.push(checkbox.value);
    })
    let tablee = [];
    checkboxss.forEach((checkbox)=>{
    tablee.push(checkbox.value);
    })

    if(nom.length>30 ){
        document.getElementById('Nom1').innerHTML = "le nom ne doivent pas dépasser 30 caractères"
        document.getElementById('Nom1').style.color = "red"
    }
    else if (regExNom.test(nom)){
        document.getElementById('Nom1').innerHTML = "votre nom est valide"
        document.getElementById('Nom1').style.color = "green"
    }
    else if (nom.length==""){
        document.getElementById('Nom1').innerHTML = "champ est obligatoire*"
        document.getElementById('Nom1').style.color = "red"
    }
    else {
        document.getElementById('Nom1').innerHTML = "votre nom est invalide"
        document.getElementById('Nom1').style.color = "red"
    }



    if(prénom.length>30){
        document.getElementById('Prénom1').innerHTML = " Le prénom ne doivent pas dépasser 30 caractères"
        document.getElementById('Prénom1').style.color = "red"
    }
    else if (regExNom.test(prénom)){
        document.getElementById('Prénom1').innerHTML = "votre Prénom est valide"
        document.getElementById('Prénom1').style.color = "green"
    }
    else if (prénom.length==""){
        document.getElementById('Prénom1').innerHTML = "champ est obligatoire*"
        document.getElementById('Prénom1').style.color = "red"
    }
    else {
        document.getElementById('Prénom1').innerHTML = "votre Prénom est invalide"
        document.getElementById('Prénom1').style.color = "red"
    }




    if( adresseEmail.length==""){
        document.getElementById('resEmail').innerHTML = "champ est obligatoire*"
        document.getElementById('resEmail').style.color = "red"
    }
    else if (regExemail.test(adresseEmail)){
        document.getElementById('resEmail').innerHTML = "votre Email est valide"
        document.getElementById('resEmail').style.color = "green"
    }
    else {
        document.getElementById('resEmail').innerHTML = "votre Email est invalide"
        document.getElementById('resEmail').style.color = "red"
    }


    if (télephone.length==""){
        document.getElementById('Télephone1').innerHTML = "champ est obligatoire*"
        document.getElementById('Télephone1').style.color = "red"
    }
    else if (télephone.length!==10 ){
        document.getElementById('Télephone1').innerHTML = "Le numéro de téléphone doit avoir exactement 10 chiffres "
        document.getElementById('Télephone1').style.color = "red"
    }
    else if (regExtélephone.test(télephone)){
        document.getElementById('Télephone1').innerHTML = "numéro de télephone est valide "
        document.getElementById('Télephone1').style.color = "green"
    }
    

    if(table == "" ){
        document.getElementById('resRadio').innerHTML = "Choisez votre genre";
        document.getElementById('resRadio').style.color = "red"
    }
    else {
        document.getElementById('resRadio').innerHTML = "votre genre est valide";
        document.getElementById('resRadio').style.color = "green"
    }
    
    if(tablee == ""){
        document.getElementById('resRadio1').innerHTML = "Choisez votre Groupe";
        document.getElementById('resRadio1').style.color = "red"
    }
    else {
        document.getElementById('resRadio1').innerHTML = "votre Groupe est valide";
        document.getElementById('resRadio1').style.color = "green"
    }
    let selected = [];
    for (var option of document.getElementById('Clubs').options){
        if (option.selected){
            selected.push(option.value);
        }
    }
    if(selected=="" || selected.length>3){
        document.getElementById('selectClub').innerHTML = "choisir au minimum 1 club et au maximum 3";
        document.getElementById('selectClub').style.color = "red"
    }
    else if (selected.length<=3){
        document.getElementById('selectClub').innerHTML = "votre club(s) est valid";
        document.getElementById('selectClub').style.color = "green"
    }
    
}
