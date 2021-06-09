function solucao(tempo, distancia) {
    let valor;

if (tempo < 5)
{
  valor = 600;
  console.log(valor);
}
else if (tempo >= 5 && tempo <= 60 )
{
  valor = (tempo * 100) + (50 * distancia);
  console.log(valor);
}
else if (tempo > 60)
{
  if (distancia < 100) 
  {
    valor = 200 * distancia;
    console.log(valor);
  }
  else if (distancia >= 100)
  {
    valor = 150 * distancia;
    console.log(valor);
  }
}

}