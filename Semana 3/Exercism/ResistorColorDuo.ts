export function decodedValue(colorArray: string[]) {
  
    let color1:string = colorArray[0].toLowerCase();
    let color2:string = colorArray[1].toLowerCase();
    
    let colorDictionary: { [key: string]: number } = {
      "black": 0,
      "brown": 1,
      "red": 2,
      "orange": 3,
      "yellow": 4,
      "green": 5,
      "blue": 6,
      "violet": 7,
      "grey": 8,
      "white": 9
    }
  
    let value: number = colorDictionary[color1] * 10 + colorDictionary[color2];
  
    return value;
  }
  