module.exports = function toReadable (number) {
    let arr=[];
    let string=number.toString();
    for (let i=0;i<=string.length-1;i++) {
        arr.push(string[i]);
    }
    let firstelem=Number(arr[0]);
    let secondelem=Number(arr[1]);
    let thirdelem=Number(arr[2]);
  let arr1=['zero','one','two','three','four','five','six','seven','eight','nine'];
  let arr2=['ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
  let arr3=['twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
  let hundred='hundred';
  if (number<=9){
return arr1[number]
  } else if (number>=10 && number<=19) {
    let number2=number-10;
return arr2[number2];
  } else if (number>=20 && number<=99){
    if (secondelem==0){
        let numberfromarr3=(firstelem-2);
        return arr3[numberfromarr3];
    } else {
        let firstnumberfromarr3=firstelem-2;
     let twicenumber=`${arr3[firstnumberfromarr3]} ${arr1[secondelem]}`;   
     return twicenumber
    }
  } else  {
    if (secondelem==0 && thirdelem==0){
    return `${arr1[firstelem]} ${hundred}`
  } 
  let bignumber=(secondelem*10)+thirdelem;
  if (bignumber<=9){
    return `${arr1[firstelem]} ${hundred} ${arr1[bignumber]}`
      } else if (bignumber>=10 && bignumber<=19) {
        let number2=bignumber-10;
    return `${arr1[firstelem]} ${hundred} ${arr2[number2]}`;
      } else if (bignumber>=20 && bignumber<=99){
        if (thirdelem==0){
            let numberfromarr5=(secondelem-2);
            console.log(arr1[firstelem]);
            return `${arr1[firstelem]} ${hundred} ${arr3[numberfromarr5]}`
        } else {
            let firstnumberfromarr9=secondelem-2;
         let twicenumber=`${arr1[firstelem]} ${hundred} ${arr3[firstnumberfromarr9]} ${arr1[thirdelem]}`;   
         return twicenumber
        }

}

}
}
