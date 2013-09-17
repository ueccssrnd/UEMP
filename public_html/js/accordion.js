/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(".accordion > li > h3").click(function(){
 
    if(false === $(this).next().is(':visible')) {
        $('.accordion > li > ul').slideUp(300);
    }
    $(this).next().slideToggle(300);
});