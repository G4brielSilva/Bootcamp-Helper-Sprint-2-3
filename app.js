"use strict";
/*Crie uma classe que receba uma lista (númerica ou não) e retorne outra contendo:
  a) O maior valor;
  b) O menor valor;
  c) O valor médio.
Demonstre essa classe com o paradigma funcional e imperativo */
class NumberList {
    avarage(list) {
        let ct = 0;
        const sum = list.reduce(function (total, valor) {
            ct++;
            return valor + total;
        }, 0);
        return sum / ct;
    }
    isNumeric(list) {
        return list.find((nm) => isNaN(nm));
    }
    smallerBiggerAvarage(list) {
        if (this.isNumeric(list))
            return "Esta Lista não é Numérica";
        let bigger = -Infinity;
        let smaller = Infinity;
        let count = 0;
        let sum = 0;
        for (let n of list) {
            if (n > bigger)
                bigger = n;
            if (n < smaller)
                smaller = n;
            sum += n;
            count++;
        }
        return [smaller, bigger, sum / count];
    }
    smallerBiggerAvarageF(list) {
        if (this.isNumeric(list))
            return "Esta Lista não é Numérica";
        const max = Math.max.apply(null, list);
        const min = Math.min.apply(null, list);
        return [min, max, this.avarage(list)];
    }
}
let p1 = new NumberList;
//Imperativa
console.log(p1.smallerBiggerAvarage([5, 6, 2, 4, 3]));
console.log(p1.smallerBiggerAvarage([5, "b", 6, "a", 2, "c", 4, "d", 3]));
//Funcional
console.log(p1.smallerBiggerAvarageF([10, 5, 2, 2, 3, 8]));
console.log(p1.smallerBiggerAvarageF([5, "b", 6, "a", 2, "c", 4, "d", 3]));
