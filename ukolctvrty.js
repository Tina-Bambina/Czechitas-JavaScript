/*
  1) Napiste funkci, ktera vypise soucet, rozdil, nasobek a podil 2 zadanych cisel, rozdil zobrazujte jako absolutni hodnotu
  - Math.abs()



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
return obsah;
}


let x = Number( prompt('Zadej X:'));
let y = Number( prompt('Zadej Y:'));

vypisMatOperace(x,y);
spoctiObsahObdelniku(x,y);

let matOperace = vypisMatOperace(x, y) + spoctiObsahObdelniku(10,15)
console.log(matOperace)

*/

/*
  2) Napiste funkci, ktera vypise informaci, zda zadane cislo je nebo neni prvocislo.
  - prvočíslo - dělitelné pouze 1 a samo sebou​
  zbytek po dělení: % - modulo​
  - v prvni moment predpokladejme, ze cislo JE prvocislo a budeme pripadne rosporovat toto tvrzeni.



//pokus 1
function jePrvocislo(p)
{
  if(p%2 === 1)
  {
    console.log(p + ' je liche')
  }else{
    console.log(p + ' neni sude')
  }
}
let p = jePrvocislo(Number(prompt('Zadej P:')));
console.log(p)

*/
//pokus 2
function jePrvocislo(x)
{
      let isPrime = true
    for (let i = 2; i<x; i++)
    {
      if (x%i ==0 ){
      isPrime = false;
      break;
      }
    }  
      return isPrime;
    }
    let cislo = jePrvocislo(Number(prompt('Zadej cislo')))
    console.log(cislo)


