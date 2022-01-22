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

let cislo = Number( prompt('Zadejte cislo:'));
let soucet = 0
while (cislo !== 0)
{ 
 soucet += cislo    //nebo soucet = soucet+cislo
 cislo = Number( prompt('Zadejte cislo:'));
 console.log('Dosavadni soucet:'+ soucet);}
console.log('Akumulovany soucet:'+ soucet);


/*
  2) Nechte uzivatele zadat 2 cisla, ktere znaci dolni a horni mez na ciselne ose celych cisel - vcetne, pokud tedy zada 3 a 7, uvazujme cisla 3, 4, 5, 6, 7. Vypište pomocí FOR cyklu pouze sudá čísla.


  ----
  for (let i = 0; i<10, i ++)
  {console.log(i)}

*/

/*
  3) Prepiste tento for cyklus pomoci While cyklu
    for (let i = 12, j = 12 ** 3; i < 12 + j; i = i * 2) {
      console.log(i);
    }
  - poznamka - pripomenout definici casti for cyklu


let i=12
let j=12**3
while(i=12 + j)
{
  console.log(i)
  i=i*2
}
*/