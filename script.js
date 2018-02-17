// Code goes here



(function () {
    'use strict';
    var app = angular.module('angularKaarousel', ['ui.carousel']);

    app.controller('MainController', MainController);

    /** @ngInject */
    function MainController($log) {
        var vm = this;
        vm.slides = {
            options: {
                'slidesToShow':5,
                'initialSlide': 1,
                speed:1000,
                autoPlay: true,
                dot:true,
            },
            item:[]
        };
        for (var i = 0; i < 6; i++)
            vm.slides.item.push({
                url: 'http://placehold.it/700x400',
                price: 24.99,
                title: 'Item Two',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet',
                created: new Date(),
                updated: new Date(),
            });

   
        vm.days_between=function(date1, date2) {

            // The number of milliseconds in one day
            var ONE_DAY = 1000 * 60 * 60 * 24

            // Convert both dates to milliseconds
            var date1_ms = date1.getTime()
            var date2_ms = date2.getTime()

            // Calculate the difference in milliseconds
            var difference_ms = Math.abs(date1_ms - date2_ms)

            // Convert back to days and return
            return Math.round(difference_ms / ONE_DAY)

        }
        vm.loadign = false;
        vm.onCarouselBeforeChange = function () {
            vm.loadign = true;
        };
        vm.onCarouselAfterChange = function () {
            vm.loadign = false;
        }
      
    }
app.run(['Carousel', (Carousel) => {
    Carousel.setOptions({
        arrows: true,
        autoplay: false,
        autoplaySpeed: 3000,
        cssEase: 'ease',
        dots: false,

        easing: 'linear',
        fade: false,
        infinite: true,
        initialSlide: 0,

        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
    });
    }]);

})();