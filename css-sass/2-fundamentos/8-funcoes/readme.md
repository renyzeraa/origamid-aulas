## Funções

Funções nativas do SASS para modificar tamanhos, cores, números, etc.

        $roxo: #8844EE
        a {
          color: white;
          background-color: $roxo;
          &:hover {
            // escurecer
            background-color: darken($roxo, 20%);

            // clarear
            background-color: lighten($roxo, 20%);

            // transparência
            background-color: transparentize($roxo, 0.5);

            // arrendondar
            $width: 400px;
            width: round($width / 3); // ficara 133 e nao 133,3333px
          }
        }

       //Criando as próprias funções
          // ex: calcular algo
       @function em($pixels, $contexto: 16){
        @return ($pixels / $contexto) * 1em;
       }

       p {
          font-size: em(24); // ficara 1.5em;
       }
