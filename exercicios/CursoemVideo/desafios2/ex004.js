function numeroDevezes(a, b) {
    let string = b.split(' ')
    let aparição = 0
    let posiçao = 0

    for (posiçao in string) {
        if (string[posiçao].includes(a)) {
            aparição ++
        } else {
            aparição = aparição
        }
    }
    return aparição
    
}

console.log(numeroDevezes('h', 'how many times does the character occur in this sentence?'))