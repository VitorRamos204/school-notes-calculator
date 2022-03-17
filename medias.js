function calcularMedia() {
    // Pegar todos os valores das notas colocado no input
      let nome = (document.getElementById("nome").value);
      let nota1 = parseFloat(document.getElementById("nota1").value);
      let nota2 = parseFloat(document.getElementById("nota2").value);
      let nota3 = parseFloat(document.getElementById("nota3").value);
      let nota4 = parseFloat(document.getElementById("nota4").value);
    //   Somar todas as notas e dividir por 4 
      let media = (nota1 + nota2 + nota3 + nota4) / 4;
      let mediaFinal = media.toFixed(1);
    
    // Caso a nota seja maior que 6 imprima aprovado.
    if (media >= 6) {
      document.getElementById("soma").innerHTML = nome + ', sua media final é: ' + mediaFinal + ". aprovado(a)!";
    // Caso não seja maior que 6 imprima reprovado.
    } else {
      document.getElementById("soma").innerHTML = nome + ", sua média final é: " + mediaFinal + ". reprovado(a)!";;
          }
      }