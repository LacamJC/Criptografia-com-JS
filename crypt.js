
const alfabeto = [
    { letra: 'A', indice: 1 }, { letra: 'B', indice: 2 }, { letra: 'C', indice: 3 },
    { letra: 'D', indice: 4 }, { letra: 'E', indice: 5 }, { letra: 'F', indice: 6 },
    { letra: 'G', indice: 7 }, { letra: 'H', indice: 8 }, { letra: 'I', indice: 9 },
    { letra: 'J', indice: 10 }, { letra: 'K', indice: 11 }, { letra: 'L', indice: 12 },
    { letra: 'M', indice: 13 }, { letra: 'N', indice: 14 }, { letra: 'O', indice: 15 },
    { letra: 'P', indice: 16 }, { letra: 'Q', indice: 17 }, { letra: 'R', indice: 18 },
    { letra: 'S', indice: 19 }, { letra: 'T', indice: 20 }, { letra: 'U', indice: 21 },
    { letra: 'V', indice: 22 }, { letra: 'W', indice: 23 }, { letra: 'X', indice: 24 },
    { letra: 'Y', indice: 25 }, { letra: 'Z', indice: 26 },
    { letra: 'a', indice: 27 }, { letra: 'b', indice: 28 }, { letra: 'c', indice: 29 },
    { letra: 'd', indice: 30 }, { letra: 'e', indice: 31 }, { letra: 'f', indice: 32 },
    { letra: 'g', indice: 33 }, { letra: 'h', indice: 34 }, { letra: 'i', indice: 35 },
    { letra: 'j', indice: 36 }, { letra: 'k', indice: 37 }, { letra: 'l', indice: 38 },
    { letra: 'm', indice: 39 }, { letra: 'n', indice: 40 }, { letra: 'o', indice: 41 },
    { letra: 'p', indice: 42 }, { letra: 'q', indice: 43 }, { letra: 'r', indice: 44 },
    { letra: 's', indice: 45 }, { letra: 't', indice: 46 }, { letra: 'u', indice: 47 },
    { letra: 'v', indice: 48 }, { letra: 'w', indice: 49 }, { letra: 'x', indice: 50 },
    { letra: 'y', indice: 51 }, { letra: 'z', indice: 52 },
    { letra: '!', indice: 53 }, { letra: '@', indice: 54 }, { letra: '#', indice: 55 },
    { letra: '$', indice: 56 }, { letra: '%', indice: 57 }, { letra: '&', indice: 58 },
    { letra: '*', indice: 59 }, { letra: '(', indice: 60 }, { letra: ')', indice: 61 },
    { letra: '-', indice: 62 }, { letra: '_', indice: 63 }, { letra: '=', indice: 64 },
    { letra: '+', indice: 65 }, { letra: '[', indice: 66 }, { letra: ']', indice: 67 },
    { letra: '{', indice: 68 }, { letra: '}', indice: 69 }, { letra: ';', indice: 70 },
    { letra: ':', indice: 71 }, { letra: '"', indice: 72 }, { letra: "'", indice: 73 },
    { letra: '<', indice: 74 }, { letra: '>', indice: 75 }, { letra: ',', indice: 76 },
    { letra: '.', indice: 77 }, { letra: '/', indice: 78 }, { letra: '?', indice: 79 },
    { letra: '\\', indice: 80 }, { letra: '|', indice: 81 }, { letra: '`', indice: 82 },
    { letra: '~', indice: 83 }, { letra: ' ', indice: 84 }, { letra: '\t', indice: 85 },
    { letra: '\n', indice: 86 },
    { letra: '0', indice: 87 }, { letra: '1', indice: 88 }, { letra: '2', indice: 89 },
    { letra: '3', indice: 90 }, { letra: '4', indice: 91 }, { letra: '5', indice: 92 },
    { letra: '6', indice: 93 }, { letra: '7', indice: 94 }, { letra: '8', indice: 95 },
    { letra: '9', indice: 96 }, { letra: 'Á', indice: 97 }, { letra: 'á', indice: 98 },
    { letra: 'À', indice: 99 }, { letra: 'à', indice: 100 },
    { letra: 'Â', indice: 101 }, { letra: 'â', indice: 102 },
    { letra: 'Ã', indice: 103 }, { letra: 'ã', indice: 104 },
    { letra: 'É', indice: 105 }, { letra: 'é', indice: 106 },
    { letra: 'Ê', indice: 107 }, { letra: 'ê', indice: 108 },
    { letra: 'Í', indice: 109 }, { letra: 'í', indice: 110 },
    { letra: 'Ó', indice: 111 }, { letra: 'ó', indice: 112 },
    { letra: 'Ô', indice: 113 }, { letra: 'ô', indice: 114 },
    { letra: 'Õ', indice: 115 }, { letra: 'õ', indice: 116 },
    { letra: 'Ú', indice: 117 }, { letra: 'ú', indice: 118 },
    { letra: 'Ü', indice: 119 }, { letra: 'ü', indice: 120 },
    { letra: 'Ç', indice: 121 }, { letra: 'ç', indice: 122 }
];


function crypt(frase) {
    let res = frase.toUpperCase().split('')
    
    let newPass = []



    res.map((letra) => {
        alfabeto.forEach((indice) => {
            if (indice.letra == letra) {
                newPass.push(indice.indice)
            }
        })
    })

    console.log(newPass.join('-'))
    return newPass.join('-')
}


export default { crypt }
