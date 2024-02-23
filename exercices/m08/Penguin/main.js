function shuffleFucks(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function NewGame() {
    console.log("New")
    let A1 = document.getElementById("A1")
    let A2 = document.getElementById("A2")
    let A3 = document.getElementById("A3")
    let A4 = document.getElementById("A4")

    let mountain = Math.floor(Math.random() * 7) + 1
    let fucksToGive = [1, 2, 3, 4]

    shuffleFucks(fucksToGive)
    for (let i = 1; i <= fucksToGive.length; i++) {
        console.log(i)
        let fuckGiven = fucksToGive[i - 1]
        let field = document.getElementsByClassName("image-start").item(i)
        field.firstChild.src(`img/${mountain}_${fuckGiven}.jpg`)
        console.log(`${mountain}_${fuckGiven}.jpg`)
    }
}
