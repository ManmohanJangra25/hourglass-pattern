// Hourglass Pattern

function hourglass(n){
    for (let i = 0; i < n + 1; i++) {
        // This is to count spaces
        const spaces = Math.abs(Math.floor(n / 2) - i);

        // This is to count the stars
        const stars = n - 2 * spaces;
    
        // Here we will generate ros for the multiple hourglass lines
        const row = ' '.repeat(stars) + ' * '.repeat(spaces + 1);
    
        console.log(row);
    }
}

hourglass(8);