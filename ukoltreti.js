/*Čti od uživatele čísla tak dlouho, dokud nezadá 0 a vždy
vypiš NAAKUMULOVANÝ součet těchto čísel
Vstup: 2
Výstup: 2
Vstup: 4
Výstup: 6
Vstup: 11
Výstup: 17
Vstup: 
*/


let num = Number( prompt('Zadejte cislo:'));

while (num!=0)
{
  console.log(num+=num);}


  console.log()