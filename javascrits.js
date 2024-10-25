var swiper = new swiper (".myswiper-1",{
    SlidesPerView:1,
    spaceBetWeen: 30,
    loop: true,
    pagination: {
        e1:".swiper-pagination",
        clickable: true,
    
    },
    navigation: {
        nextE1:".swiper-button-next",
        prevE1:".swiper-button-prev",
    }

});

var swiper = new swiper (".myswiper-2",{
    SlidesPerView:3,
    spaceBetWeen: 20,
    loop: true,
    pagination: {
        e1:".swiper-pagination",
        clickable: true,
        LoopFillGroundWithBlank: true,
        navigation:
         {
            nextE1:".myswiper-button-next",
            prevE1:".myswiper-button-prev",
        },
        breakpoints : {
            o: {
                SlidesPerView:1,
            },
            520: {
                SlidesPerView:2,
            },
            950: {
                SlidesPerView:3,
            },
       
    },

}};
