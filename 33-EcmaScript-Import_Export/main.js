//função padrão 'soma' renomeada para somaFunction
import somaFunction, {sub as subtracao, mul} from "./math";
// importar todas as mensagens
import * as mess from "./mensagens";

console.log(somaFunction(3,4));
console.log(subtracao(19,7));
console.log(mul(10,5));
console.log(mess.ola());
console.log(mess.vaiDormir());

