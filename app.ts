/*Crie uma classe que receba uma lista (númerica ou não) e retorne outra contendo:
  a) O maior valor;
  b) O menor valor;
  c) O valor médio.
Demonstre essa classe com o paradigma funcional e imperativo */

class NumberList{
    private avarage(list: number[]): number{
        let ct: number=0;
        const sum: number=list.reduce(function(total: number, valor: number){
            ct++;
            return valor+total;
        },0);
        return sum/ct;
    }

    public smallerBiggerAvarage(list: number[]): number[]{
        let bigger: number= -Infinity;
        let smaller: number = Infinity;
        let count: number=0;
        let sum: number=0;
        for(let n of list){
            if(n>bigger) bigger=n;
            if(n<smaller) smaller=n;
            sum+=n;
            count++;
        }
        return [smaller, bigger,sum/count];
    }

    public smallerBiggerAvarageF(list: number[]): number[]{
        const max: number=Math.max.apply(null, list);
        const min: number=Math.min.apply(null, list);
        return [min,max,this.avarage(list)];
    }
}

let p1 = new NumberList;

//Imperativa
console.log(p1.smallerBiggerAvarage([ 5, 6, 2, 4, 3]));

//Funcional
console.log(p1.smallerBiggerAvarageF([10,5,2,2,3,8]))