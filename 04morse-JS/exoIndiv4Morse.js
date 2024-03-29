//ETAPE 1
//Ce qu'on veut encoder/décoder
morseToDecode = "... --- ... / ... --- ..."
latinToDecode = "sos sos"

//la fonction getLatinCharacterList() va prendre en paramètre du texte et retourner un tableau contenant chaque caractère.
function getLatinCharacterList(textLatin) {
    //méthode split() de l'objet String qui permet de diviser une chaîne de caractères en un tableau de sous-chaînes, en utilisant un séparateur spécifié.
    const characters = textLatin.split("");
    return characters
}
//test
console.log(getLatinCharacterList("Hello, word"))

//annexe 1 : table de correspondance entre les caractères alphabets latin et l’alphabet morse.
const latinToMorse = {
    'A': '.-',
    'B': '-...',
    'C': '-.-.',
    'D': '-..',
    'E': '.',
    'F': '..-.',
    'G': '--.',
    'H': '....',
    'I': '..',
    'J': '.---',
    'K': '-.-',
    'L': '.-..',
    'M': '--',
    'N': '-.',
    'O': '---',
    'P': '.--.',
    'Q': '--.-',
    'R': '.-.',
    'S': '...',
    'T': '-',
    'U': '..-',
    'V': '...-',
    'W': '.--',
    'X': '-..-',
    'Y': '-.--',
    'Z': '--..',
    //ajout
    ' ': ' / '
}

//ETAPE 2
//fonction translateLatinCharacter() qui prend un paramètre un caractère et renvoie sa correspondance en morse.
function translateLatinCharacter(lettre) {
    return latinToMorse[lettre]
}
//test
console.log(translateLatinCharacter('A'))

//ETAPE 3
//fonction encode() en paramètre du texte, utilise la fonction getLatinCharacterList() /caractère, applique translateLatinCharacter() et récupére morse.
function encode(texteMorse) {
    //methode toUpperCase() permet de convertir une chaîne de caractères en majuscules
    var arrLatin = getLatinCharacterList(texteMorse.toUpperCase())
    var arrFinalLatin = []
    for (let index = 0; index < arrLatin.length; index++) {
        //.push() prend en argument le ou les élèment(s) à ajouter à la fin d'un tableau
        arrFinalLatin.push(translateLatinCharacter(arrLatin[index]))
    }
    //méthode join() concatène tous les éléments d'un tableau en une chaîne de caractères avec en argument facultatif une chaîne de caractères insérée entre les éléments du tableau. Par défaut, une virgule.
    let resultLatin = arrFinalLatin.join(" ")
    return resultLatin
}
//test
console.log(encode(latinToDecode))


//ETAPE 4
//Annexe 2 : table morse to latin 
const morseToLatin = {
    '-': "T",
    '--': "M",
    '---': "O",
    '--.': "G",
    '--.-': "Q",
    '--..': "Z",
    '-.': "N",
    '-.-': "K",
    '-.--': "Y",
    '-.-.': "C",
    '-..': "D",
    '-..-': "X",
    '-...': "B",
    '.': "E",
    '.-': "A",
    '.--': "W",
    '.---': "J",
    '.--.': "P",
    '.-.': "R",
    '.-..': "L",
    '..': "I",
    '..-': "U",
    '..-.': "F",
    '...': "S",
    '...-': "V",
    '....': "H",
    //ajout 
    '/': " "
}

//fonction découper le morse
function getMorseCharacterList(texteMorse) {
    const arrayMorse = texteMorse.split(" ");
    return arrayMorse
}
//test
console.log(getMorseCharacterList("... --- ..."))

//fonction traduit une lettre
function translateMorseCharacter(morseCharacter) {
    return morseToLatin[morseCharacter]
}
//test
console.log(translateMorseCharacter("..."))

//fonction qui décode un texte
function decode(textMorse) {
    var arrMorse = getMorseCharacterList(textMorse)
    var arrFinalMorse = []
    for (let index = 0; index < arrMorse.length; index++) {
        arrFinalMorse.push(translateMorseCharacter(arrMorse[index]))
    }
    let resultMorse = arrFinalMorse.join("")
    let resultMorseLower = resultMorse.toLocaleLowerCase()
    return resultMorseLower
}
console.log(decode(morseToDecode))

//ETAPE 5
//c'est l'usager qui donne le texte à traduire sur un page HTML
//Une fonction pour les entrées en latin, une pour les entrées en morse
function getLatin() {
    var inputL = document.getElementById("latin")
    var valeurL = inputL.value
    latinFinal = encode(valeurL)
    console.log(latinFinal)
    alert(latinFinal)
}

//var latinTranslation = encode(input)
function getMorse() {
    var inputM = document.getElementById("morse")
    var valeurM = inputM.value
    morseFinal = decode(valeurM)
    console.log(morseFinal)

    setMessage(morseFinal)
    //alert(morseFinal)
}

function setMessage(message) {
    var element = document.getElementById("MorseEntry");
    element.innerHTML = message;
}

//un joli code qui ne sert à rien
//function translateLatinCharacter(Lettre) {
//    return Lettre.toUpperCase().split("").map(el => {
//        return latinToMorse[el] ? latinToMorse[el] : el;
//    })
//}
//console.log(translateLatinCharacter("Hello world"))
