document.addEventListener("DOMContentLoaded", e => {
    e.preventDefault();
    console.log("Loaded Sushi");
    let el, title, lang, date_copy, footer, user, attribute;
    const x = 0;
    title = "Sushi &amp; company";
    el = document.getElementsByTagName("title")[0];
    footer = document.querySelector("footer p + p");
    date_copy = new Date().getFullYear();
    console.log(date_copy);
    footer.innerText += ` ${date_copy}`;
    attribute = document.querySelector("footer");
    console.log(attribute.getAttribute("itemprop"));
    el.innerHTML = title;
    console.log(el.innerText);
    let test = document.querySelector("footer p a");
    console.log(test.innerText);
    test.innerText = "Home";
    //tableau
    lang = ["html", "java", "Python"];
    console.table(lang);
    for (index in lang) {
        console.log(`${index} : ${lang[index]}`);
    }
    lang.includes("xml") ? console.log("ok") : console.log("faux");
    //objet
    user = {
        nom: "Eich",
        prenom: "Brandan",
        age: 55,
        lang: "EN",
        pays: "USA"

    };

    for (let i in user) {
        console.log(i + " " + user[i]);
    }
    const film = [{
        titre: "Scarface",
        date: 1980

    }, {
        titre: "King kong",
        date: 2005

    }];
    console.table(film[0].titre);
    /*film.forEach((el, key)=>{
        console.log(`${key} ${el.titre} : ${el.date}`)
    })*/
    for (let data of film) {
        console.log(data.titre + " " + data.date);
    }
});

/*
Keep
It
Simple
Stupid
 */