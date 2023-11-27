App.define('View.Canvas', {
    grid: 'View.Grid', // Referência para o componente de grade
    $domObj: '#canvas', // Referência ao elemento canvas no DOM
    visiable: true, // Flag para controlar a visibilidade

    line: null, // Referência para o elemento de linha no canvas

    // Função para criar um novo ponto com as coordenadas dadas
    newPoint: function(x, y){
        return new this.util.Point(x, y);
    },

     // Atualiza a visualização da caixa de visão com a largura e altura especificadas
    updateViewbox: function(width, height){
        this.$domObj[0].setAttribute('viewBox', '0 0 '+width+' '+height);
    },

    // Define o primeiro ponto da linha no canvas
    setPoint1: function(point){
        this.line.setAttribute('x1', point.x);
        this.line.setAttribute('y1', point.y);
    },

    // Define o segundo ponto da linha no canvas
    setPoint2: function(point){
        this.line.setAttribute('x2', point.x);
        this.line.setAttribute('y2', point.y);
    },


    // Obtém o primeiro ponto da linha do canvas
    getPoint1: function(){
        // Obtém as coordenadas x e y do atributo do elemento de linha
        var x = parseInt(this.line.getAttribute('x1')),
            y = parseInt(this.line.getAttribute('y1'));

         // Cria um novo ponto com as coordenadas obtidas, garantindo que sejam números válidos
        return this.newPoint(
            !isNaN(x) ? x : 0,
            !isNaN(y) ? y : 0
        );
    },

    // Obtém o segundo ponto da linha do canvas
    getPoint2: function(){
        // Obtém as coordenadas x e y do atributo do elemento de linha
        var x = parseInt(this.line.getAttribute('x2')),
            y = parseInt(this.line.getAttribute('y2'));

         // Cria um novo ponto com as coordenadas obtidas, garantindo que sejam números válidos
        return this.newPoint(
            !isNaN(x) ? x : 0,
            !isNaN(y) ? y : 0
        );
    },

    // Define a cor da linha no canvas com base nos valores RGB fornecidos (parte que deixa a linha colorida agr só pra decorar, Não necessário de fato para o trabalho, mas eu tava com tempo sobrando.)
    setColor: function(c){
        var color = '';

        color += ((0xff ^ c.red) < 16 ? '0' : '') + (0xff ^ c.red).toString(16);
        color += ((0xff ^ c.green) < 16 ? '0' : '') + (0xff ^ c.green).toString(16);
        color += ((0xff ^ c.blue) < 16 ? '0' : '') + (0xff ^ c.blue).toString(16);
        this.line.setAttribute('stroke', '#'+color);
    },

    // Obtém a largura da caixa de visão do canvas
    getViewBoxWidth: function(){
        return this.$domObj[0].viewBox.baseVal.width
    },

    // Obtém a altura da caixa de visão do canvas
    getViewBoxHeight: function(){
        return this.$domObj[0].viewBox.baseVal.height
    },

    // Função chamada quando o componente está pronto
    ready: function(){
        var me = this;
        me.updateViewbox(800, 600); // Atualiza a caixa de visão para a largura e altura especificadas
    },

    // Função de inicialização do componente
    init: function(){
        var me = this;
        me.$domObj = $(me.$domObj);
        me.grid = me._appRoot_.get(me.grid);
        me.util = me._appRoot_.get('Util');
        me.line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        me.$domObj[0].appendChild(this.line);

        // Define os atributos iniciais da linha
        me.line.setAttribute('x1', 0);
        me.line.setAttribute('y1', 0);
        me.line.setAttribute('x2', 0);
        me.line.setAttribute('y2', 0);
        me.line.setAttribute('stroke', '#000');
        me.line.setAttribute('stroke-width', '2');
    }
});
