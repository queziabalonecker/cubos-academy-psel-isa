function solucao(produtos) {
	
    let topdelinha = 0;
let naotopdelinha = 0;

for (let item of produtos) {
  const preco = item.preco;
  if (preco >= 10000) 
  {
    topdelinha = topdelinha + preco;
  }
  else 
  {
    naotopdelinha = naotopdelinha + preco;
  }

}
let total = naotopdelinha + topdelinha;

const resposta = 
{
  totalTop: topdelinha,
  percentual: topdelinha / total 
}
console.log (resposta);
    
}