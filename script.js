//PRÁTICA GUIADA 01-------------------------------


 const megaSena = [
   [1, 5, 3, 7],
   [8, 2, 4, 6],
   [4, 8, 12, 18],
   [5, 10, 15, 20]
 ]

// if (megaSena.length === 4) {

//   for(let i = 0; i < megaSena.length; i++){
//     const sorteio = megaSena[i]
//     console.log(sorteio)
//     let mensagem = "Sorteio " + (i+1) + ":"
//     for(let j = 0; j < sorteio.length; j++){
//       const item = sorteio[j]
//       mensagem = mensagem + " " + item + ","
//       console.log(item)
//     }
//     console.log(mensagem)
//   }

// } else{
//   console.log("Será necessário alterar o número de itens do array.")
// }


if(megaSena.length === 4){

  for(let i in megaSena){ //array mega sena

    let sorteio = `sorteio ${Number(i)+1}: `

    for(let j of megaSena[i]){ //array cada sorteio
      sorteio += j + ","
    }
    console.log(sorteio)
  }
}






/*

// if(megaSena.length === 4){

//   for(let i = 0; i < megaSena.length; i++){
//     // console.log(`Sorteio ${i+1}: ${megaSena[i]}`)

//     let sorteio = `${Number(i)+1}: `

//     for(let j = 0; j < megaSena[i].length; j++){
//       sorteio += megaSena[i][j] + ","
//       // console.log(megaSena[i][j])
//       // console.log(j)
//     }
//     console.log(sorteio)
//   }


}else{
  console.log("É necessário alterar o número de itens do array.")
}


//PRÁTICA GUIADA 02-------------------------------


if(megaSena.length === 4){

  for(let i in megaSena){ //array mega sena

    let sorteio = `sorteio ${Number(i)+1}: `

    for(let j of megaSena[i]){ //array cada sorteio
      sorteio += j + ","
    }
    console.log(sorteio)
  }

}else{
  console.log("É necessário alterar o número de itens do array.")
}


const filmes = [
  {
    titulo: 'O Auto da Compadecida',
    ano: 2000,
    diretor: 'Guel Arraes',
    elenco: [
      'Selton Mello',
      'Mateus Nachtergaele',
      'Marco Nanini',
      'Fernanda Montenegro',
    ],
  },
  {
    titulo: 'Carandiru',
    ano: 2001,
    diretor: 'Hector Babenco',
    elenco: [
      'Wagner Moura',
      'José Carlos Vasconcelos',
      'Ailton Graça',
      'Caio Blat',
    ],
  },
  {
    titulo: 'Aquarius',
    ano: 2012,
    diretor: 'Kléber Mendonça Filho',
    elenco: [
      'Sônia Braga',
      'Humberto Carrão',
      'Maeve Jinkings',
      'Bárbara Colen',
    ],
  },
]

//escreva seu código abaixo 👇🏻

// for(let i in filmes){
//   console.log(`"${filmes[i].titulo}, de ${filmes[i].ano}, dirigido por ${filmes[i].diretor}. Tendo no elenco os seguintes atores: ${filmes[i].elenco}`)
//     for(let elenco of filmes[i].elenco){
//       console.log(elenco)
//     }
// }

for(let i = 0; i < filmes.length; i++){
  console.log(`Filme ${i + 1}:`)
  console.log(`${filmes[i].titulo}, de ${filmes[i].ano}, dirigido por ${filmes[i].diretor}`)

  for(let j of filmes[i].elenco){
    console.log(j)
  }
}


for (let index = 0; index < array.length; index++) {
  const element = array[index];
  
}

if (condition) {
  
} else {
  
}
*/
