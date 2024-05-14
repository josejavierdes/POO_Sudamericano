export function toRna(dna_letter:string) {
    const dna_to_rna: { [key: string]: string } = {
      "G": "C",
      "C": "G",
      "T": "A",
      "A": "U"
    };
    for (let i=0; i<dna_letter.length; i++ ){
      if (!(dna_letter[i] in dna_to_rna)){
        throw new Error('Invalid input DNA.');
      }
    }
    const dna_array:string[]= dna_letter.split("");
    
    let rna_array:string[]=[];
    for (let i=0; i<dna_letter.length; i++ ){
      rna_array.push(dna_to_rna[dna_array[i]])
    }
    const final_rna: string = rna_array.join("");
    return final_rna;
  }
  