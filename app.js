let inputNom        = document.querySelector('#nom');
let inputMail       = document.querySelector('#email');
let inputMdpass     = document.querySelector('#mdpass');
let inputCMdpass    = document.querySelector('#confmdpass');
let ligne           = document.querySelectorAll('.ligne');
let info            = document.querySelectorAll('.info');
let icon            = document.querySelectorAll('.icon');

// console.log(info[0]);

inputNom.addEventListener('input',(e)=>{
    if (e.target.value.length >= 3) {
        icon[0].children[0].style.display = 'none';
        icon[0].children[1].style.display = 'block';
        info[0].style.display='none';

    }
    else {
        icon[0].children[0].style.display = 'block';
        icon[0].children[1].style.display = 'none';
        info[0].style.display='block';
    }
});

inputMail.addEventListener('input',(e)=>{
    const regexEmail = /\S+@\S+\.\S+/;

    if (e.target.value.search(regexEmail) === 0) {
        icon[1].children[0].style.display = 'none';
        icon[1].children[1].style.display = 'block';
        info[1].style.display='none';
    }
    else if(e.target.value.search(regexEmail) === -1){
        icon[1].children[0].style.display = 'block';
        icon[1].children[1].style.display = 'none';
        info[1].style.display='block';
    }
});

let valeurInp;

const specialCar = /[^a-zA-Z0-9]/;
const alphabet   = /[a-z]/i;
const chiffres    = /[0-9]/;
let objValidation = {
    symbol :0,
    lettre :0,
    chiffre :0
}

inputMdpass.addEventListener('input',(e)=>{
    valeurInp = e.target.value;
    
    if(valeurInp.search(specialCar) !== -1){
        objValidation.symbol =1; 
    }

    if (valeurInp.search(alphabet) !== -1) {
        objValidation.lettre =1;
    }

    if (valeurInp.search(chiffres) !== -1) {
        objValidation.chiffre =1;
    }
    // console.log(objValidation);

    if(e.inputType = 'deleteContentBackward'){
        if(valeurInp.search(specialCar) === -1){
            objValidation.symbol =0; 
        }
    
        if (valeurInp.search(alphabet) === -1) {
            objValidation.lettre =0;
        }
    
        if (valeurInp.search(chiffres) === -1) {
            objValidation.chiffre =0;
        }
    }
    // console.log(objValidation);
    let testAll = 0;
    for (const obj in objValidation) {
        if (objValidation[obj] > 0) {
            testAll++;
        }   
        // console.log(testAll);

    }
    if (testAll < 3) {
        icon[2].children[0].style.display = 'block';
        icon[2].children[1].style.display = 'none';
        info[2].style.display='block';
        
    }
    else {
        icon[2].children[0].style.display = 'none';
        icon[2].children[1].style.display = 'block';
        info[2].style.display='none';
    }

    if (valeurInp.length <= 6 && valeurInp.length >0) {
        // document.querySelector('.l1').style.display='block'
        ligne[0].style.display='flex';
        ligne[0].children[0].style.display='block';
        ligne[0].children[1].style.opacity='0';
        ligne[0].children[2].style.opacity='0';
    }
    else if(valeurInp.length > 6 && valeurInp.length <= 9){
        ligne[0].style.display='flex';

        ligne[0].children[0].style.display='block';
        ligne[0].children[1].style.opacity='1';
        ligne[0].children[2].style.opacity='0';
    }
    else if(valeurInp.length > 9){
        ligne[0].style.display='flex';

        ligne[0].children[0].style.display='block';
        ligne[0].children[1].style.opacity='1';
        ligne[0].children[2].style.opacity='1';
    }
    else if(valeurInp.length === 0){
        ligne[0].style.display='none';

    }
});

inputCMdpass.addEventListener('input',(e)=>{
    if(e.target.value.length === 0){
        icon[3].children[0].style.display = 'block';
        icon[3].children[1].style.display = 'none';
    }
    else if (e.target.value === valeurInp) {
        icon[3].children[0].style.display = 'none';
        icon[3].children[1].style.display = 'block';
        
    }
    else{
        icon[3].children[0].style.display = 'block';
        icon[3].children[1].style.display = 'none';
      
    }
})

// console.log(ligne[0].children[0]);
// .style.display=''
// ligne[0].children[1].style.display=''
// ligne[0].children[2].style.display='none'

// console.log(icon[0].children);
// icon[0].children[0].style.display='none';
// icon[2].children[1].style.display='block';
