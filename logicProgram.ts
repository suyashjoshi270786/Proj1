function capitalizeWord(sentence: string): string {
    return sentence.split(' ').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
}


console.log(capitalizeWord("suyash ashok joshi"));

function secondLargestNumber(arr: number[]): number {

    let uniqueNumbers = [...new Set(arr)].sort((a, b) => b - a);

    return uniqueNumbers[1];


}
console.log(secondLargestNumber([1,2,1,33,44,21,22,78,99,100]));


function countOccurences(str: string): Record<string, number> {

    const result: Record<string, number> = {};

    for (const char of str) {

        result[char] = (result[char] || 0) + 1;

    }
    return result;
}

console.log(countOccurences("Suyash Joshi"));



function isPalindrome(str: string): boolean {

    const cleaned = str.toLowerCase().replace(/[^a-z]/g, ' ');
    const reversed = cleaned.split('').reverse().join('');

    return cleaned === reversed;
}

console.log(isPalindrome("madam"));


function secondLargest(arr: number[]): number | null {

    let unique = [...new Set(arr)];

    if(unique.length < 2) 
        return null;

    unique.sort((a ,b) => b - a);

    return unique[1];
}

console.log(secondLargest([1,2,33]));


const s = "alph betha gammaaa delta";

let shortest = null;
let longest = "";

for (const word of s.trim().split(/\s+/g)) {

    if(shortest === null || word.length < shortest.length) {

        shortest = word;
    }

    if(word.length > longest.length) {
        longest = word;
    }

    }

    console.log(shortest, longest);

    
function sumArray(arr: number[]): number {

    let sum = 0;

    for (const num of arr) {

        sum+= num;
    }

    return sum;
}

console.log(sumArray([1,2,3,4,5]));


function sumOfArray(arr: number[]): number {

    return arr.reduce((a , b) => a + b, 0);
}

console.log(sumOfArray([1,2,3,4,5]));


function findVowells(str: string): {count: number; vowells: string[]} {
    let s = "aeiou";
    let count = 0;
    let vowells: string[] = [];

    for (const char of str.trim().toLocaleLowerCase()) {
        if (s.includes(char)) {
            count++;
            vowells.push(char);
        }
    }

    return { count: count, vowells: vowells };
}

let result = findVowells("Suyash Joshi");
console.log(`total vowells counts is: ${result.count}`);
console.log(`vowells are: ${result.vowells.join(",")}`);



function findOddNumber(n: number): number {

    let sum = 0;

    for(let i=0; i<=n; i++) {

        if(i % 2 !== 0) {
            console.log(i);
            sum+=i;
        }
    }

    return sum;

}

console.log(`sum is : ` , findOddNumber(20));


//prime number

function isPrime(n: number): boolean {
    if(n < 2){

        return false;
    }

    for(let i=2; i<n; i++){
        if(n % i ===0){
            return false;
        }
    }
    return true;
}

function prime(n: number): void {

    for(let i=0; i<=n; i++){

        if(isPrime(i)){
            console.log(i);
        }
    }
}
prime(40);


function anagrams(str1: string, str2: string): boolean {

    if(str1.length !== str2.length){
        return false;
    }

    return str1.split('').sort().join('') === str2.split('').sort().join('');
}

console.log(anagrams("tata", "atat"));


//keep word position same
function reverseWords(str: string): string {
  return str
    .split(" ")
    .map(word => word.split("").reverse().join(""))
    .join(" ");
}

console.log(reverseWords("hello world")); // "olleh dlrow"


//remove duplicate words from string
function removeDup(str: string): string {
  let res = "";

  for (let ch of str) {
    if (!res.includes(ch)) {
      res += ch;
    }
  }

  return res;
}

console.log(removeDup("aabbccddeeff")); // "abcdef"



//remove duplicates from string

function duplicate(str: string): string{

    let result = "";
    let seen = new Set();

    for(let char of str){

if(!seen.has(char))
{

seen.add(char);
result+=char;
}

    }

    return result;
}


console.log(duplicate("Infosys"));



//bubble sort
function bubble(arr: number[]): number[]{

    let a = [...(arr)];

    for(let i=0; i<a.length; i++){
for(let j =0; j<a.length-i-1; j++){

    if(a[j] > a[j+1]){

       [a[j], a[j+1]] = [a[j+1], a[j]];
    }
}
    }

    return a;
}

console.log(bubble([2,1,3,4]));



//ascending
function ascending(arr: number[]): number[] {

    for(let i=0; i<arr.length; i++){
        for(let j=i+1; j<arr.length; j++){
if(arr[i] > arr[j]){


            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
    }

    return arr;
}


console.log(ascending([2,1,3,5,9,7,12]));




function second(arr: number[]): number {
    let sec = -Infinity;
    let max = -Infinity;

    for(let n of arr){
        if(n > max){

          sec = max;
          max = n;
        }
        else if(n > sec && n!==max)
        {

            sec = n;
        }  
    }

    return sec;
}


console.log(second([1,2,3,4]));