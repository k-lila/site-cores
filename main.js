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
            $('#tons-cinza').on('click', function() {
                $('.cor01').css({'background-color': 'whitesmoke'});
                $('.cor02').css({'background-color': 'lightgrey'});
                $('.cor03').css({'background-color': 'darkgrey'});
                $('.cor04').css({'background-color': 'black'});
                $('.corfonte').css({'color': 'black'});
                $('.produto button').on('mouseenter', function() {
                    $(this).css({
                        'background-color': 'lightgrey',
                        'color': 'black'
                    });
                });
                $('.produto button').on('mouseleave', function() {
                    $(this).css({
                        'background-color': 'white',
                        'color': 'black'
                    });
                });
                $('#submenu span').html('tons de cinza');
            });
            // paleta02
            $('#tons-pasteis').on('click', function() {
                $('.cor01').css({'background-color': '#ece5ce'});
                $('.cor02').css({'background-color': '#f1d4af'});
                $('.cor03').css({'background-color': '#e08e79'});
                $('.cor04').css({'background-color': '#774f38'});
                $('.corfonte').css({'color': '#774f38'});
                $('.produto button').on('mouseenter', function() {
                    $(this).css({
                        'background-color': '#c5e0dc',
                        'color': '#774f38'
                    });
                });
                $('.produto button').on('mouseleave', function() {
                    $(this).css({
                        'background-color': 'white',
                        'color': 'black'
                    });
                });
                $('#submenu span').html('tons pastéis');
            });
            // paleta03
            $('#tons-complementares').on('click', function() {
                $('.cor01').css({'background-color': '#e7eed0'});
                $('.cor02').css({'background-color': '#948e99'});
                $('.cor03').css({'background-color': '#40798C'});
                $('.cor04').css({'background-color': '#2e1437'});
                $('.corfonte').css({'color': '#2e1437'});
                $('.produto button').on('mouseenter', function() {
                    $(this).css({
                        'background-color': '#40798C',
                        'color': 'white'
                    });
                });
                $('.produto button').on('mouseleave', function() {
                    $(this).css({
                        'background-color': 'white',
                        'color': '#2e1437'
                    });
                });
                $('#submenu span').html('tons complementares');
            });
            // paleta 04
            $('#tons-aquarelados').on('click', function() {
                $('.cor01').css({'background-color': '#9ed1b7'});
                $('.cor02').css({'background-color': '#095a57'});
                $('.cor03').css({'background-color': '#78a890'});
                $('.cor04').css({'background-color': '#e7d9b4'});
                $('.corfonte').css({'color': 'white'});
                $('.produto p').css({'color': 'black'})
                $('.produto button').on('mouseenter', function() {
                    $(this).css({
                        'background-color': '#e7d9b4',
                        'color': 'white'
                    });
                });
                $('.produto button').on('mouseleave', function() {
                    $(this).css({
                        'background-color': 'white',
                        'color': 'black'
                    });
                });
                $('#submenu span').html('tons aquarelados');
            });
            // paleta 05
            $('#tons-pollock').on('click', function() {
                $('.cor01').css({'background-color': '#F1ECD7'});
                $('.cor02').css({'background-color': '#1962A0'});
                $('.cor03').css({'background-color': '#D89CA9'});
                $('.cor04').css({'background-color': '#E8C051'});
                $('.corfonte').css({'color': '#1A1C23'});
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
