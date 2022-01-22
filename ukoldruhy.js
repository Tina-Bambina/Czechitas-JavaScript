/*Ukoly - vstup a podmínky:

1) Přijměte jméno jako vstup od uživatele, dale nechte zadat jeho vek a vypište na základě věku jednu ze dvou vět ve tvaru:
 a) Vaše jméno je Marian, je vám 30 let a tak máte právo řídit auto.
 b) Vaše jméno je Marian, je vám 14 let a tak musíte počkat ještě 4 let, než budete moci řídit auto.
*/

/*
let jmeno = prompt('Zadej sve jmeno:');
let vek = Number(prompt('Zadej svuj vek'));

if(vek>18)
{
console.log('Vase jmeno je ' + jmeno + ' je vam ' + vek + ' a tak mate pravo ridit auto');
}else
{
  let rozdil = 18-vek;
  console.log('Vase jmeno je ' + jmeno + ' je vam ' + vek + ' a tak musíte počkat ještě '+ rozdil + ' let, než budete moci řídit auto');
}

*/


/*

2)  Nechte uživatele zadat 3 čísla a určete největší z nich - výsledek vypište do konzole ve formátu "Největší číslo je A: 37".​
} */



/*
let A = Number( prompt('Zadejte cislo A:'));
let B = Number( prompt('Zadejte cislo B:'));;
let C = Number( prompt('Zadejte cislo C:'));

console.log("Nejvyssi z Vami vlozenych cisel je:" + Math.max(A,B,C));

*/



let A = Number( prompt('Zadejte cislo A:'));
let B = Number( prompt('Zadejte cislo B:'));;
let C = Number( prompt('Zadejte cislo C:'));

if (A>B && A>C)
{
  console.log("Nejvyssi z Vami vlozenych cisel je cislo A: " + A)
}else if (B>A && B>C)
{
  console.log("Nejvyssi z Vami vlozenych cisel je cislo B: " + B)
}
else 
console.log("Nejvyssi z Vami vlozenych cisel je cislo C: " + C)










