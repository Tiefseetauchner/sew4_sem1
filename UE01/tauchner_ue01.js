function lottoTipp() {
    let out = new Array();

    for (let i = 0; i < 6; i++) {
        const tippNumber = Math.floor(Math.random() * 45) + 1;
        if (!out.includes(tippNumber)) {
            out[i] = tippNumber;
        } else {
            i--;
        }
    }

    return out.sort(function (a, b) {
        return a - b;
    });
}

const münzenWerte = [200, 100, 50, 20, 10, 5, 2, 1];

function wechseln(betrag) {
    let wechselBetragMap = {};

    münzenWerte.forEach(element => {
        while (betrag >= element) {
            if (!wechselBetragMap.hasOwnProperty(element)) {
                wechselBetragMap[element] = 0;
            }
            wechselBetragMap[element] = wechselBetragMap[element] + 1;
            betrag -= element;
        }
    });

    return wechselBetragMap;
}

function umkehren(text) {
    if (!(text instanceof String)) {
        text = String(text);
    }

    let outString = "";

    for (var i = 0; i < text.length; i++) {
        outString = text.charAt(i) + outString;
    }

    return outString;
}

console.log("Lotto Tipp: ")
console.log(lottoTipp());

console.log("Wechseln (271): ")
console.log(wechseln(271));

console.log("Umkehren (\"Ein Text der Spaß bereitet\"): ")
console.log(umkehren("Ein Text der Spaß bereitet"));

console.log("Umkehren (723): ")
console.log(umkehren(723));