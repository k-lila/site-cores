$(document).ready(function() {
    // Número do carrinho
    var carrinho = 0;
    $('.produto button').on('click', function() {
        carrinho += 1;
        $('.carrinho p').html(`${carrinho}`);
    });
    // Menu das paletas
    $('#submenu span').on('click', function() {
        $('#submenu nav').slideToggle(250, 'linear', function() {
            // paleta01
            $('#tons-miro').on('click', function() {
                $('.cor01').css({'background-color': '#EDE5D2'});
                $('.cor02').css({'background-color': '#3B6C73'});
                $('.cor03').css({'background-color': '#C04759'});
                $('.cor04').css({'background-color': '#F1D87F'});                
                $('.corfonte').css({'color': '#EDE5D2'});
                $('.produto p').css({'color': 'black'})
                $('#sobre').css({'color': 'black'});
                $('#submenu span').css({'color': 'black'});                
                $('.produto button').on('mouseenter', function() {
                    $(this).css({
                        'background-color': '#F1D87F',
                        'color': 'white'
                    });
                });
                $('.produto button').on('mouseleave', function() {
                    $(this).css({
                        'background-color': 'white',
                        'color': 'black'
                    });
                });
                $('#submenu span').html('tons de Miró');
            });
            // paleta02
            $('#tons-frida').on('click', function() {
                $('.cor01').css({'background-color': '#D6CFB7'});
                $('.cor02').css({'background-color': '#6D8325'});
                $('.cor03').css({'background-color': '#BD5630'});
                $('.cor04').css({'background-color': '#E5AD4F'});
                $('.corfonte').css({'color': 'white'});
                $('.produto p').css({'color': '#121510'});
                $('#sobre').css({'color': '#121510'});
                $('#submenu span').css({'color': '#121510'});
                $('.produto button').on('mouseenter', function() {
                    $(this).css({
                        'background-color': '#E5AD4F',
                        'color': 'white'
                    });
                });
                $('.produto button').on('mouseleave', function() {
                    $(this).css({
                        'background-color': 'white',
                        'color': 'black'
                    });
                });
                $('#submenu span').html('tons de Frida K.');
            });
            // paleta03
            $('#tons-albrecht').on('click', function() {
                $('.cor01').css({'background-color': '#171635'});
                $('.cor02').css({'background-color': '#00225D'});
                $('.cor03').css({'background-color': '#CA7508'});
                $('.cor04').css({'background-color': '#763262'});
                $('.corfonte').css({'color': 'white'});
                $('.produto p').css({'color': 'black'});
                $('#sobre').css({'color': 'white'});
                $('#submenu span').css({'color': 'white'});
                $('.produto button').on('mouseenter', function() {
                    $(this).css({
                        'background-color': '#763262',
                        'color': 'white'
                    });
                });
                $('.produto button').on('mouseleave', function() {
                    $(this).css({
                        'background-color': 'white',
                        'color': 'black'
                    });
                });
                $('#submenu span').html('tons de G. Albrecht');
            });
            // paleta 04
            $('#tons-pollock').on('click', function() {
                $('.cor01').css({'background-color': '#F1ECD7'});
                $('.cor02').css({'background-color': '#1962A0'});
                $('.cor03').css({'background-color': '#D89CA9'});
                $('.cor04').css({'background-color': '#E8C051'});
                $('.corfonte').css({'color': '#F1ECD7'});
                $('.produto p').css({'color': 'black'});
                $('#sobre').css({'color': 'black'});
                $('#submenu span').css({'color': 'black'});
                $('.produto button').on('mouseenter', function() {
                    $(this).css({
                        'background-color': '#E8C051',
                        'color': 'white'
                    });
                });
                $('.produto button').on('mouseleave', function() {
                    $(this).css({
                        'background-color': 'white',
                        'color': 'black'
                    });
                });
                $('#submenu span').html('tons de Pollock');
            });
        });
    });
})
