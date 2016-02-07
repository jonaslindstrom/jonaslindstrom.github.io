//HOVER FOR GIF


$(document).ready(function(){

$(function() {
     
    $('<img />',{ src: 'img/turtle_gif.gif'});
    $('<img />',{ src: 'img/contact_gif.gif'});
     $('<img />',{ src: 'img/owl.gif'});
    
    $('#Turtle').hover(function() {
      $(this).attr('src','img/turtle_gif.gif');
    },function() {
      $(this).attr('src','img/turtle_mindblown.png');
    });
    $('#contact').hover(function() {
      $(this).attr('src','img/contact_gif.gif');
    },function() {
      $(this).attr('src','img/contact.png');
    });
       $('#aboutMe').hover(function() {
      $(this).attr('src','img/owl.gif');
    },function() {
      $(this).attr('src','img/owl.png');
    });
    
   
   
});

// Hover for image on portfolio


    //Hover over div to change opacity


$(function() {
$("#worksite").hover(
function() {
$("#worksite").stop().animate({ opacity: 1 }, {qeue:false });
$("#worksiteimg").attr('src', 'img/worksite.png');


$("#apoteket").stop().animate({ opacity: 0.6 });
$("#crimezone").stop().animate({ opacity: 0.6 });
$("#transdev").stop().animate({ opacity: 0.6 });
$("#volvo").stop().animate({ opacity: 0.6 });
$("#prestige").stop().animate({ opacity: 0.6 });
$("#transdevimg").attr('src', 'img/transdevlogobw.png');
$("#crimezoneimg").attr('src', 'img/crimezonebw.png');
$("#prestigeimg").attr('src', 'img/pgprestigebw.png');
$("#volvoimg").attr('src', 'img/volvobw.png');
$("#apoteketimg").attr('src', 'img/apoteketbw.png');

});
});
    


$(function(){
$("#apoteket").hover(
function() {
$("#apoteket").stop().animate({ opacity: 1 }, {qeue:false });
$("#apoteketimg").attr('src', 'img/apoteket.png');


$("#worksite").stop().animate({ opacity: 0.6 });
$("#crimezone").stop().animate({ opacity: 0.6 });
$("#transdev").stop().animate({ opacity: 0.6 });
$("#volvo").stop().animate({ opacity: 0.6 });
$("#prestige").stop().animate({ opacity: 0.6 });
$("#transdevimg").attr('src', 'img/transdevlogobw.png');
$("#crimezoneimg").attr('src', 'img/crimezonebw.png');
$("#prestigeimg").attr('src', 'img/pgprestigebw.png');
$("#volvoimg").attr('src', 'img/volvobw.png');
$("#worksiteimg").attr('src', 'img/WorksiteBW.png');



});


    

});

$(function(){
$("#crimezone").hover(
function() {
$("#crimezone").stop().animate({ opacity: 1 }, {qeue:false });
$("#crimezoneimg").attr('src', 'img/crimezone.png');

    
$("#worksite").stop().animate({ opacity: 0.6 });
$("#apoteket").stop().animate({ opacity: 0.6 });
$("#transdev").stop().animate({ opacity: 0.6 });
$("#volvo").stop().animate({ opacity: 0.6 });
$("#prestige").stop().animate({ opacity: 0.6 });
$("#transdevimg").attr('src', 'img/transdevlogobw.png');
$("#apoteketimg").attr('src', 'img/apoteketbw.png');
$("#prestigeimg").attr('src', 'img/pgprestigebw.png');
$("#volvoimg").attr('src', 'img/volvobw.png');
$("#worksiteimg").attr('src', 'img/WorksiteBW.png');


});
});
  
    
/*
$(function() {
$("#transdev").hover(
function() {
$("#transdev").stop().animate({ opacity: 1 }, {qeue:false });
$("#transdevimg").attr('src', 'img/transdevlogo.png');

$("#worksite").stop().animate({ opacity: 0.6 });
$("#crimezone").stop().animate({ opacity: 0.6 });
$("#apoteket").stop().animate({ opacity: 0.6 });
$("#volvo").stop().animate({ opacity: 0.6 });
$("#prestige").stop().animate({ opacity: 0.6 });
$("#apoteketimg").attr('src', 'img/apoteketbw.png');
$("#crimezoneimg").attr('src', 'img/crimezonebw.png');
$("#prestigeimg").attr('src', 'img/pgprestigebw.png');
$("#volvoimg").attr('src', 'img/volvobw.png');
$("#worksiteimg").attr('src', 'img/worksitebw.png');



});

});*/
/*
$(function() {
$("#volvo").hover(
function() {
$("#volvo").stop().animate({ opacity: 1 }, {qeue:false });
$("#volvoimg").attr('src', 'img/volvo.png');

$("#worksite").stop().animate({ opacity: 0.6 });
$("#crimezone").stop().animate({ opacity: 0.6 });
$("#apoteket").stop().animate({ opacity: 0.6 });
$("#transdev").stop().animate({ opacity: 0.6 });
$("#prestige").stop().animate({ opacity: 0.6 });
$("#apoteketimg").attr('src', 'img/apoteketbw.png');
$("#crimezoneimg").attr('src', 'img/crimezonebw.png');
$("#prestigeimg").attr('src', 'img/pgprestigebw.png');
$("#transdevimg").attr('src', 'img/transdevlogobw.png');
$("#worksiteimg").attr('src', 'img/worksitebw.png');



});
});
*/
/*
$(function() {
$("#prestige").hover(
function() {
$("#prestige").stop().animate({ opacity: 1 }, {qeue:false });
$("#prestigeimg").attr('src', 'img/pgprestige.png');

$("#worksite").stop().animate({ opacity: 0.6 });
$("#crimezone").stop().animate({ opacity: 0.6 });
$("#apoteket").stop().animate({ opacity: 0.6 });
$("#transdev").stop().animate({ opacity: 0.6 });
$("#volvo").stop().animate({ opacity: 0.6 });
$("#apoteketimg").attr('src', 'img/apoteketbw.png');
$("#crimezoneimg").attr('src', 'img/crimezonebw.png');
$("#volvoimg").attr('src', 'img/volvobw.png');
$("#transdevimg").attr('src', 'img/transdevlogobw.png');
$("#worksiteimg").attr('src', 'img/worksitebw.png');



});
});
   
*/ 
 
$(function() {
$("#mail").hover(
function() {
$("#mail").stop().animate({ opacity: 1 }, {qeue:false });
$("#mailimg").attr('src', 'img/mail.png');

$("#linkedin").stop().animate({ opacity: 0.6 });  
$("#linkedin").attr('src', 'img/linkedinbw.png');
    
});
});
    
$(function() {
$("#linkedin").hover(
function() {
$("#linkedin").stop().animate({ opacity: 1 }, {qeue:false });
$("#linkedinimg").attr('src', 'img/linkedin.png');

$("#mail").stop().animate({ opacity: 0.6 });  
$("#mailimg").attr('src', 'img/mailbw.png');
    
});
});
});