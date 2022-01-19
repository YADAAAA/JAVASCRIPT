function getvowels(str) {
    const m = str.match(/[aeiou]/gi) ;
    if( m == null ) {
        return 0 ;
    }
    return m.length ;
}

console.log(getvowels("seeing")) ;