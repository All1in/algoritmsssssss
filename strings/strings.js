function stringy(size) {
    let string = "1";
    for (let i = 0; i < size-1; i++) {
        if(i % 2 === 0)
            string += "0";
        else
            string += "1";
    }
    return string;
}
