/**
* //import qilishni 1-usuli
import {one, two} from './main';
console.log(one);
console.log(two);
*/


/**
 * import qilingan o'zgaruvchini nomini o'zgartirib
 * foydalanishimiz mumkin
 * 
 * import {one as first} from './main';
 * console.log(first);
 * 
 * 
 */

// hammasini import qilish

import * as data from './main';
import myName from './main';

console.log(`One: ${data.one}, Twice: ${data.two}`);
data.sayHi();
myName();

