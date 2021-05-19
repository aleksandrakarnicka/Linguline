function getSynonym(event) {
    event.preventDefault()
    const APIword = document.getElementById("final")
    const APIpos =document.getElementById("partOfSpeech")
    let word = APIword && APIword.value.split(' ')[0];
    const output = document.getElementById("output")
    let url = "https://api.dictionaryapi.dev/api/v2/entries/en_US/" + word;
    fetch(url)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            APIword.innerHTML = "";
            meanings = response[0] && response[0]["meanings"]
            for(let i=0;i<meanings.length; i++) {
                let newul = document.createElement("ul");
                let meaning = meanings[i];
                console.log(meaning)
                let li_pos=document.createElement("li");
                li_pos.appendChild(document.createTextNode(meanings[i]["partOfSpeech"]));
                output.appendChild(newul);
                newul.appendChild(li_pos);
                for(let j=0;j<meanings[i]["definitions"]; j++) {
                    let deful = document.createElement("ul");
                    let defli = document.createElement("li");
                    let exli = document.createElement("li");
                    defli.appendChild(document.createTextNode(meanings[i]["definitions"][j]["definition"]));
                    exli.appendChild(document.createTextNode(meanings[i]["definitions"][j]["example"]));
                    console.log(meanings[i]["definitions"][j]["example"]);
                    output.appendChild(deful);
                    deful.appendChild(defli);
                    deful.appendChild(exli);
                }
            }

            partOfSpeech=meanings[0]["partOfSpeech"];
            APIpos.innerHTML=partOfSpeech;
            definition = meanings[0].definitions[0]["definition"];
            synonyms = meanings[0].definitions[0]["synonyms"];
    })
}