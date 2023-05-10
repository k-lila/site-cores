$(document).ready(function() {
    // Número do carrinho
    var carrinho = 0;
    $('.produto button').on('click', function() {
        carrinho += 1;
        $('.carrinho p').html(`${carrinho}`);
    });
    // Menu das paletas
    function set_cores(cores) {
        $('.cor01').css({'background-color': cores[0]});
        $('.cor02').css({'background-color': cores[1]});
        $('.cor03').css({'background-color': cores[2]});
        $('.cor04').css({'background-color': cores[3]});                
        $('.corfonte').css({'color': cores[4]});
        $('.produto p').css({'color': cores[5]})
        $('#sobre').css({'color': cores[6]});
        $('#submenu span').css({'color': cores[6]});                
        $('.produto button').on('mouseenter', function() {
            $(this).css({
                'background-color': cores[03],
                'color': 'white'
            });
        });
        $('.produto button').on('mouseleave', function() {
            $(this).css({
                'background-color': 'white',
                'color': 'black'
            });
        });
        $('#submenu span').html(cores[7]);
        let sobre = '<br><br>Sobre: Lorem ipsum dolor sit amet consectetur adipisicing elit.<br><br>';
        let preco = 'Preço: R$ 00,00';
        $('#texto-1').html(`Cor: ${cores[0]}` + sobre + preco);
        $('#texto-2').html(`Cor: ${cores[1]}` + sobre + preco);
        $('#texto-3').html(`Cor: ${cores[2]}` + sobre + preco);
        $('#texto-4').html(`Cor: ${cores[3]}` + sobre + preco);
    };
    // paletas de cores
    let miro = ['#EDE5D2', '#3B6C73', '#C04759', '#F1D87F', '#EDE5D2', 'black', 'black', 'tons de Miró'];
    let frida = ['#D6CFB7', '#6D8325', '#BD5630', '#E5AD4F', 'white', '#121510', '#121510', 'tons de Frida K.'];
    let albrecht = ['#171635', '#00225D', '#CA7508', '#763262', 'white', 'black', 'white', 'tons de G. Albrecht'];
    let pollock = ['#F1ECD7', '#1962A0', '#D89CA9', '#E8C051', '#F1ECD7', 'black', 'black', 'tons de Pollock'];
    // cor inicial do site
    set_cores(pollock);
    // escolha das cores
    $('#submenu span').on('click', function() {
        $('#submenu nav').slideToggle(250, 'linear', function() {
            // paleta01
            $('#tons-miro').on('click', function() {set_cores(miro)});
            // paleta02
            $('#tons-frida').on('click', function() {set_cores(frida)});
            // paleta03
            $('#tons-albrecht').on('click', function() {set_cores(albrecht)});
            // paleta 04
            $('#tons-pollock').on('click', function() {set_cores(pollock)});
        });
    });
})
