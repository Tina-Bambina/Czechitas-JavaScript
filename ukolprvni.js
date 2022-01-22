/*) 

ZADANI:
Úkol - proměnné a operátory
1) Založte proměnné pro jméno, vek, vahu v kg a a vysku v metrech - nastavte jim libovolnou hodnotu. Spočtěte BMI Do konzole vypište větu ve formátu:
"Jmenuji se Petra, je mi 34 let, vážím 65kg,  měřím 1.67m a moje BMI je 23,2.".

*/

let jmeno = 'Martina';
let vek = 28;
let vaha = 51; //v kg
let vyska = 1.55   //v m
let bmi = vaha/(vyska*vyska)
let zaokrBmi = Math.round(bmi*100)/100;

console.log('Jmenuji se ' + jmeno + ', merim ' + vyska + ' m, vazim '+ vaha + ' kg, a moje BMI je ' + zaokrBmi + '.');