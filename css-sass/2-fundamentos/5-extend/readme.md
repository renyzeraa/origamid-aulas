## Extend

Extender a classe adicionando a outra onde for inserido

    .error {
      color: red;
      font-weight: bold;
    }
    .button-error{
      @extend .error;
      padding: 10px;
      width: 100px;
    }

    // ficara assim
    .error, .button-error {
      color: red;
      font-weight: bold;
    }

    .button-error {
      padding: 10px;
      width: 100px;
    }
