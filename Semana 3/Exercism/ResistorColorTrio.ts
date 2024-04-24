export function decodedResistorValue(colorList: Array<string>): string {
    let color1: string = colorList[0];
    let color2: string = colorList[1];
    let color3: string = colorList[2];
    
    const colorToValue: { [key: string]: number } = {
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
    };
    let value: number = colorToValue[color1] * 10 + colorToValue[color2];
    value *= 1*(10**colorToValue[color3]);
    
    let sufix: string = " ohms";
    
    if (value >= 1000 && value <= 1000000) {
      value /= 1000;
      sufix = " kiloohms";
    }
    
    if (value >= 1000000  && value <= 1000000000) {
      value /= 1000000;
      sufix = " megaohms";
    }
    
    if (value >= 1000000000) {
      value /= 1000000000;
      sufix = " gigaohms";
    }
    return value.toString() + sufix;
  }
  