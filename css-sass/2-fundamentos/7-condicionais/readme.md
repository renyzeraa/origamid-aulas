## Condicionais

IF & ELSE

      @if $condicao2 == $condicao2
      @else if $condicao2 == $condicao
      @else

      $tema: oceano
      $primary-color: black;
      $secondary-color: gray;

      @if $tema == oceano {
        $primary-color: blue;
        $secondary-color: orange;
      } @else if $tema == deserto{
        $primary-color: yellow;
        $secondary-color: purple;
      }

      p{
        color: $primary-color;
        background-color: $secondary-color;
      }

      //mixin com if e else

      @mixin type-1($size){
        font-family: monospace;
        @if $size == 16 { //sem parenteses
          font-size: 1em;
        } @else if $size == 18{
          font-size: 1.25em;
        } @else if $size == 24 {
          font-size: 1.5em;
        }
      }

      p {
        @include type-1(16);
      }
      //vai ficar igual a
      p {
        font-family: monospace;
        font-size: 1em;
      }
