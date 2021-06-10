document.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        getDefinitions(event)
    }
});

function getDefinitions(event) {
    event.preventDefault()
    const submitButton = document.getElementById("submit-button");
    submitButton.disabled = true;
    const APIword = document.getElementById("final");
    let word = APIword && APIword.value.split(' ')[0];
    
    const output = document.getElementById("output");
    output.innerHTML = "";
    
    let url = "https://api.dictionaryapi.dev/api/v2/entries/en_US/" + word;
    
    fetch(url)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            APIword.innerHTML = "";
            meanings = response[0] && response[0]["meanings"]
            for(let i=0;i<meanings.length; i++) {
                let newul = document.createElement("ul");
                // let meaning = meanings[i];
                // console.log(meaning);
                let li_pos=document.createElement("li");
                li_pos.append("Part of speech: ")
                li_pos.appendChild(document.createTextNode(meanings[i]["partOfSpeech"]));
                output.appendChild(newul);
                newul.appendChild(li_pos);
                for(let j=0;j<meanings[i]["definitions"].length; j++) {
                    let deful = document.createElement("ul");
                    deful.className = "talkBot"
                    let defli = document.createElement("li");
                    defli.append("Definition: ")
                    defli.appendChild(document.createTextNode(meanings[i]["definitions"][j]["definition"]));
                    output.appendChild(deful);
                    deful.appendChild(defli);
                    if (meanings[i]["definitions"][j]["example"]) {
                        let exli = document.createElement("li");
                        exli.append("Example: ")
                        exli.appendChild(document.createTextNode(meanings[i]["definitions"][j]["example"]));
                        deful.appendChild(exli);
                    }
                    if (meanings[i]["definitions"][j]["synonyms"]) {
                        let synli = document.createElement("li");
                        synli.append("Synonyms: ")
                        synli.appendChild(document.createTextNode(meanings[i]["definitions"][j]["synonyms"]));
                        deful.appendChild(synli);
                    }
                }
            }
        })
        .catch(error => {
            output.append("Sorry! I couldn't find this word in my dictionary!")
        })
        .finally(() =>{
            submitButton.disabled = false;
        })
}