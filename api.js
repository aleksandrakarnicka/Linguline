function getSynonym(event) {
    event.preventDefault()
    const APIword = document.getElementById("final")
    const APIpos =document.getElementById("partOfSpeech")
    let word = APIword && APIword.value.split(' ')[0];
    
    let url = "https://api.dictionaryapi.dev/api/v2/entries/en_US/" + word;
    fetch(url)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            APIword.innerHTML = "";
            meanings = response[0] && response[0]["meanings"]
            for(let i=0;i<meanings.length; i++) {
                let li=document.createElement("li");
                li.appendChild(document.createTextNode(meanings[i]));
                APIword.appendChild(li);
            }

            partOfSpeech=meanings[0]["partOfSpeech"];
            APIpos.innerHTML=partOfSpeech;
            definition = meanings[0].definitions[0]["definition"];
            synonyms = meanings[0].definitions[0]["synonyms"];
    })
}