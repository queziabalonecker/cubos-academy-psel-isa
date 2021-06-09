function solucao(letra, palavras) {
	
    const resultado = [];

for (let item of palavras) 
{
  if (item[0] === letra)
  {
    resultado.push(palavras.lenght - item);
  }
}

console.log(palavras.length - resultado.length);
    
}