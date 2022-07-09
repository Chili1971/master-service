$(function () {
  new fullpage("#fullpage", {
    //options here
    autoScrolling: true,
    scrollHorizontally: false,
    anchors: ["firstPage", "secondPage"],
    navigationTooltips: ["firstSlide", "secondSlide"],
    navigation: true,
    // showActiveTooltip: false,
    responsiveWidth: 1024,
    // scrollBar: false,
  });
});

// alert($(window).innerWidth());

/*===================================*/
