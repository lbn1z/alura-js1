const notaFinal = 6;
const faltas = 4;
const advertencias = 0;

if (notaFinal < 7 && faltas > 4) {
  console.log('reprovado, boas festas');
} else {
  console.log('não foi reprovado por falta');
}

if (faltas <= 4 && !advertencias) {
  console.log('recebeu bônus');
} else {
  console.log('não recebeu bônus');
}