// O código define o módulo Util, que contém utilitários para o programa.
App.define('Util', {

    // Define a estrutura de dados de um ponto com coordenadas x e y.
    Point: function Point(x, y){
        this.x = x; // Atribui a coordenada x ao atributo x do objeto.
        this.y = y; // Atribui a coordenada y ao atributo y do objeto.
    },

    // Define a estrutura de dados de uma cor com componentes de vermelho, verde e azul.
    Color: function Color(red, green, blue){

        red = parseInt(red); // Converte o valor de red para um número inteiro.
        green = parseInt(green); // Converte o valor de green para um número inteiro.
        blue = parseInt(blue); // Converte o valor de blue para um número inteiro.

// Verifica se os valores estão dentro do intervalo de 0 a 255, caso contrário, define para 0.
this.red = isNaN(red) || red < 0 || red > 255 ? 0 : red; // Atribui o valor verificado ao componente red.
this.green = isNaN(green) || green < 0 || green > 255 ? 0 : green; // Atribui o valor verificado ao componente green.
this.blue = isNaN(blue) || blue < 0 || blue > 255 ? 0 : blue; // Atribui o valor verificado ao componente blue.
    },
});
