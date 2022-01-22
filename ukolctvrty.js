/*
  1) Napiste funkci, ktera vypise soucet, rozdil, nasobek a podil 2 zadanych cisel, rozdil zobrazujte jako absolutni hodnotu
  - Math.abs()
*/


function vypisMatOperace(x, y)
{
  let soucet = x + y
  let rozdil = x - y
  let nasobek = x * y
  let podil = x / y
  console.log('soucet: ' + soucet);
  console.log('rozdil v abs hodnote: ' + Math.abs(rozdil) );
  console.log('nasobek: ' + nasobek);
  console.log('podil: ' + podil);
}

function spoctiObsahObdelniku(x,y)
{
let obsah = x * y
console.log('Obsah obdelniku o stranach x,y je ' + obsah + 'cm')
}


let x = Number( prompt('Zadej X:'));
let y = Number( prompt('Zadej Y:'));

vypisMatOperace(x,y);
spoctiObsahObdelniku(x,y);


/*
  2) Napiste funkci, ktera vypise informaci, zda zadane cislo je nebo neni prvocislo.
  - prvočíslo - dělitelné pouze 1 a samo sebou​
  zbytek po dělení: % - modulo​
  - v prvni moment predpokladejme, ze cislo JE prvocislo a budeme pripadne rosporovat toto tvrzeni.
*/

