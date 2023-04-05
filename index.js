


function findMatching(array1, name) {
  return  array1.filter((value)=> value.toLowerCase() ==name.toLowerCase());
  }
function fuzzyMatch(array2,name2){
  return array2.filter((Element)=> Element[0] === name2[0])
}

// const fuzzyMatch = (array3,name3) => {
//   let empty = []
//   for(let value of array3){
//     if (value[0]=== name3[0])
//     empty.push(value)

//   }
//   return empty; 
//}

// function  matchName(array2, namei){
//   return array2.filter((item) => item.name === namei)
// }

const matchName = (dor,name7)=>{
  let x = [];
  for(let result of dor ){
    if (result.name === name7)
    x.push(result)
  }
  return x;
}
