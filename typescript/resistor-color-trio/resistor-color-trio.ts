export const colorMap: Record<string, number> ={
    black: 0,
  brown: 1,
  red: 2,
  orange: 3,
  yellow: 4,
  green: 5,
  blue: 6,
  violet: 7,
  grey: 8,
  white: 9,
};

export function decodedResistorValue(color: string[]){
  const d1 = colorMap[color[0]];
  const d2 = colorMap[color[1]];
  const d3 = colorMap[color[2]];
  
const format = d1 * 10 + d2 

const valor = format * (10 ** d3)

if(valor >= 1000000000){
  return valor/1000000000 + " gigaohms"
}

if(valor >= 1000000){
  return valor/1000000 + " megaohms"
}

if(valor >= 1000){
  return valor/1000 + " kiloohms"
}

if(valor < 1000){
  return valor + " ohms"
}
  
}

decodedResistorValue(["orange", "red", "black"]);
