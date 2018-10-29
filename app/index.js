import * as math from './math';
import { addToDom as atd } from './helpers';

console.log('Math: ', math)

atd('h2', `23 + 67 = ${math.add( 23, 67 )}`);

atd('h2', `78 - 31 = ${math.subtract( 78, 31 )}`);

atd('h2', `42 * 13 = ${math.multiply( 42, 13 )}`);

atd('h2', `120 / 4 = ${math.divide( 120, 4 )}`);

atd('h2', `10 / 0 = ${math.divide( 10, 0 )}`);