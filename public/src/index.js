function getCharacter(done) {
    const result = fetch("https://rickandmortyapi.com/api/character")

    result
    .then(response => response.json)
    .then(done =>{
        done(data)
    })
}