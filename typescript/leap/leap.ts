export function isLeap(ano:number) {


  if(ano % 4 !== 0){
    return false
    if(ano % 100 == 0){

      if(ano % 400 == 0){
       return true 
      }
      
    }
    return false
  }
  return true
}

isLeap(2015)

