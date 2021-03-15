module.exports = function toReadable (number) {
    let beforTwenty = ['','one ','two ','three ','four ', 'five ','six ','seven ','eight ','nine ','ten ','eleven ','twelve ','thirteen ','fourteen ','fifteen ','sixteen ','seventeen ','eighteen ','nineteen '];
    let decimal = ['', '', 'twenty ','thirty ','forty ','fifty ', 'sixty ','seventy ','eighty ','ninety '];
    let hundred = ['','hundred '];
    
    let v100 = 0;
    let v10 = number%100;
    let v1  = number%10;
    let vString = "";
    
    if (number < 0 || number > 999) {
        throw new RangeError();
    }
    if (number >= 100 ){
        v100 =  Math.floor(number/100);
        if (v10 <= 19) {
            vString = vString.concat(beforTwenty[v100]).concat(hundred[1]).concat(beforTwenty[v10]);
       }else{
        v10 = Math.floor(v10/10) ;
        vString = vString.concat(beforTwenty[v100]).concat(hundred[1]).concat(decimal[v10]).concat(beforTwenty[v1]);
        }
    }else if (number <= 99 ){
        if (number <= 19 && number !==0) {
            vString = vString.concat(beforTwenty[v10]);
        }else if(number >=20 ){
            v10 = Math.floor(v10/10);
            vString = vString.concat(decimal[v10]).concat(beforTwenty[v1]);

        }else if(number === 0 || !number)  { vString = 'zero';
        }
    }
    return vString.trim();
  
}
