## Loops

### for

Mesmo principio do loop do for do javascript

      @for $i from 1 through 6 {
          // para adicionar valores que vao mudar ao nome da classe
          // sempre usar #{$variavel}
          // para ficar .item-1 por diante
        .item-#{$i} {
          width: 100px * $i;
        }
      }

      // ficara
      .item-1 {
        width: 100px ;
      }
      .item-2 {
        width: 200px ;
      }
      .item-3 {
        width: 300px ;
      }
      .item-4 {
        width: 400px ;
      }
      .item-5 {
        width: 500px ;
      }
      .item-6 {
        width: 600px ;
      }

### while

Enquanto, mesmo principio do javascript também

      $i = 1;
      @while $i <= 6 {
        .type-#{$i} {
          font-size: 16 * $i + px;
        }
        $i: $i + 1;
      }

### each

ForEach, mesmo principio do javascript também
Percorrer valores de uma variável

      $redes: facebook twitter pinterest instagram;
      @each $rede in $redes {
        .#{$rede}-icon {
          background-image: url('..img/#{$rede}.png');
        }
      }
