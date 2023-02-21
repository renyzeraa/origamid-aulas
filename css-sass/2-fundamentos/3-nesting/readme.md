## Nesting

Nesting nada mais é do que utilizar a cadeia principal de um seletor e ir colocando os estilos dentro dele como se fosse um escopo

      body {
        header{
        }
        main {
          h1{
          }
          article{
            h1{
            }
            &:before{
            }
          }
        }
      }
      footer{
      }

      // caso queira que va para o final do arquivo css
      // utilizar o & (e comercial no final do seletor)
      .seletor & {

      }
