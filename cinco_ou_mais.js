function solucao(precos) {
    
    var min = Math.min(...precos);


if (precos.length < 5)
{
  let soma = 0;
  for (indice = 0; indice < precos.length; indice++)
  {
    soma = soma + precos[indice];
  }
console.log(soma);
}

else if (precos.length >= 5)
{
   let soma = 0;
  for (indice = 0; indice < precos.length; indice++)
  {
    soma = soma + precos[indice];
  }
  console.log(soma - min);
}
}