function solucao(largura, altura) {
      if (altura > largura) {
          console.log ("RETRATO"); }
      else if (altura === largura) {
          console.log("QUADRADA");
      } else {
          console.log("PAISAGEM");
      }
  }