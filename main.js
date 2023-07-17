$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 1
        },
        1024: {
            items: 2,
            nav: true
        }
    }
})


    $("#fullpage").fullpage({
        licenseKey: 'gplv3-license',
        anchors: ['Top1', 'Intro1', 'MainFeature1', 'Token1', 'Roadmap1', 'Team1', 'Partners1', 'Contact1'],
        navigation: true,
        navigationTooltips: ['Top', 'Introduction', 'Main Feature', 'Tokenomics', 'Roadmap', 'Our Team', 'Partners', 'Contact Us'],
        showActiveTooltip: true,
        responsiveWidth: 1024,
    })


// variables
// let $isAnimatedTop = $('#top'),
//     $isAnimatedIntro = $('#intro'),
//     $isAnimatedFeature = $('#main_feature'),
//     $isAnimatedToken = $('#token'),
//     $isAnimatedRoadmap = $('#roadmap'),
//     $isAnimatedTeam = $('#ourteams'),
//     $isAnimatedPartners = $('#partners'),
//     $isAnimatedContact = $('#contact');

// initialize fullPage
// $(document).ready(function () {
//     $("#fullpage").fullpage({
//         licenseKey: 'gplv3-license',
//         navigation: true,
//         navigationPosition: 'top',
//         anchors: ['#top', '#intro', '#token', '#main_feature', '#roadmap', '#ourteams', '#partners', '#contact'],
//         menubar: '.tooltip-scrollspy',
//         scrollingSpeed: 1000, // Tốc độ cuộn (đơn vị là milliseconds)
//         responsiveWidth: 768,
//         scrollHorizontally: true,
// onLeave: function (index, nextIndex, direction) {
//     console.log('Đang rời khỏi phần:', origin.index)
//     // top animation
//     if (index == 1 && direction == 'down') {
//         $isAnimatedTop.addClass('animated rollIn').css('animation-delay', '1.7s');
//     }
//
//     // Intro animation
//     else if (index == 2 && direction == 'down') {
//         $isAnimatedIntro.addClass('animated rollIn').css('animation-delay', '1.2s');
//     }
//
//     // feature animation
//     else if (index == 3 && direction == 'down') {
//         $isAnimatedFeature.addClass('animated rollIn').css('animation-delay', '1.2s');
//         // });
//     }// token animation
//     else if (index == 4 && direction == 'down') {
//         $isAnimatedToken.addClass('animated rollIn').css('animation-delay', '1.2s');
//     }
//
//     // raodmap animation
//     else if (index == 5 && direction == 'down') {
//         $isAnimatedRoadmap.addClass('animated rollIn').css('animation-delay', '1.2s');
//     }// team animation
//     else if (index == 6 && direction == 'down') {
//         $isAnimatedTeam.addClass('animated rollIn').css('animation-delay', '1.2s');
//     }
//
//     // partner animation
//     else if (index == 7 && direction == 'down') {
//         $isAnimatedPartners.addClass('animated rollIn').css('animation-delay', '1.2s');
//         // contact animation
//     } else {
//         $isAnimatedContact.addClass('animated rollIn').css('animation-delay', '1.2s');
//     }
// }

//     })
// })




