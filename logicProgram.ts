function capitalizeWord(sentence: string): string {
    return sentence.split(' ').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
}


console.log(capitalizeWord("suyash ashok joshi"));