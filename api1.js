fetch('https://lingua-robot.p.rapidapi.com/language/v1/entries/en/')
  .then(response => response.json())
  .then(data => console.log(data));
