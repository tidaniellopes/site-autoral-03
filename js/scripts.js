$(function(){

    //Abrir Janela
    var lenght = false;

    $('.open').click(function(){
        openJanela();
    })

    function openJanela(){

        if(lenght == false){
    
            $('.section-03-02').css('height','auto');
            lenght = true; 
        }else{

            $('.section-03-02').css('height','443px');
            lenght = false;
        }

    }
    ////

    //Abrir Menu-mobile

    $('.menu').click(function(){
        $('.menu-mobile').slideToggle();
    })

    //Fechar menu

    $('.menu-mobile a').click(function(){
        $('.menu-mobile').slideToggle();
    })

    ////

    //Links buttons

    var link1 = 'https://api.whatsapp.com/message/P77GSFPSH4HKB1';

    $('.button-01').click(function(){
        var link1 = this.href;
    })






})