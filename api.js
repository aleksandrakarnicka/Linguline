const APIword = document.getElementById("APIword")
const APIpos =document.getElementById("partOfSpeech")
word = APIword.value;
let word

let url = "https://api.dictionaryapi.dev/api/v2/entries/en_US/" + word;
fetch(url)
.then(response => response.json())
.then(response => {
    APIword.innerHTML = "";
    meanings = response[0]["meanings"]
    for(let i=0;i<meanings.lenght; i++) {
        let li=document.createElement("li");
        li.appendChild(document.createTextNode(meanings[i]));
        APIword.appendChild(li);
    } 
    partOfSpeech=response[0]["partOfSpeech"];
    APIpos.innerHTML=partOfSpeech;
    definition = response[0]["definition"];
    synonyms = response[0]["synonyms"];
    console.log(synonyms)
})