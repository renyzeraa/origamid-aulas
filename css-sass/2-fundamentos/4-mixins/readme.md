## Mixins

@mixins = pedaço de código para reaproveitar depois

    @mixin title-large {
    font-size: 12px;
      line-height: 1;
      font-weight: bold;
      font-family: "Helvetica Neue";
    }

    h1 {
      @include title-large;
    }

    // outro exemplo passando parametro
      // pode usar quantos parametros quiser

    @mixin separador($color){
      background-color: $color;
      color: $color;
      border-color: $color;
    }

    body {
      @include separador(#3f3f3f);
    }

    // outro exemplo passando parametro
      // para considerar mais de um valor

    @mixin exemplo ($shadow...){
    }

    // utilizando @content

    @mixin mobile {
      @media (min-width: 600px){
        @content;
      }
    }

    h1 {
      @include mobile{
        color: pink;
          // colocar tudo que preciso aqui dentro
      }
    }
