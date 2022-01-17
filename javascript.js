//menu
var tombolMenu = $(".tombol-menu");
var menu = $("nav .menu ul");

function klikMenu(){
    tombolMenu.click(function(){
        menu.toggle();
    });
    menu.click(function(){
        menu.toggle()
    });
}

$(document).ready(function () {
var width = $(window).width();
alert('lebar'+with);
if (width <990) {
    klikMenu();
}
});

//efek scroll
$(document).ready(function () {
    var scroll_pos = 0;
    $(document).scroll(function(){
        scroll_pos = $(this).scrollTop();
        if(scroll_pos > 0){
            $("Nav").addClass("putih");
        }else{
            $("Nav").removeClass("putih");
        }
    })
});