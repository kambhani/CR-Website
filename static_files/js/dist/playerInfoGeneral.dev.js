"use strict";

// This area is for custom classes that I use to save space (define bootstrap class list here instead of repeating it)
$(".challengeRoyaleCardStyle").addClass("card mx-2 mb-4 px-3 pb-1 pt-3 border-primary rounded-lg");
$(".challengeRoyaleCardStyle").css({
  "width": "19rem",
  "background-color": "mintcream"
});
$(".leagueRoyaleCardStyle").addClass("card mx-3 mb-4 px-3 pb-1 pt-3 border-primary rounded-lg");
$(".leagueRoyaleCardStyle").css({
  "width": "20rem",
  "background-color": "mintcream"
});
$(".clanRoyaleCardStyle").addClass("card mx-4 mb-4 px-3 pb-1 pt-3 border-primary rounded-lg");
$(".clanRoyaleCardStyle").css({
  "width": "20rem",
  "background-color": "mintcream"
});
$(".battleRoyaleCardStyle").addClass("card mx-2 mb-4 px-3 pb-1 pt-3 border-primary rounded-lg");
$(".battleRoyaleCardStyle").css({
  "width": "19rem",
  "background-color": "mintcream"
});
$(".badgeRoyaleCardStyle").addClass("card mx-1 mb-4 px-2 pb-1 pt-3 border-primary rounded-lg");
$(".badgeRoyaleCardStyle").css({
  "width": "8rem",
  "background-color": "mintcream"
});
$(".badge-royale-image").css({
  "height": "112px"
});
$(".achievementRoyaleCardStyle").addClass("card mx-2 mb-4 px-3 pb-1 pt-3 border-primary rounded-lg");
$(".achievementRoyaleCardStyle").css({
  "width": "16rem",
  "background-color": "mintcream"
});
$(".miscellaneousRoyaleCardStyle").addClass("card mx-2 mb-4 px-3 pb-1 pt-3 border-primary rounded-lg");
$(".miscellaneousRoyaleCardStyle").css({
  "width": "15rem",
  "background-color": "mintcream"
}); // Make things smaller on a small screen

if (window.innerWidth > 768) {
  $(".badgeRoyaleCardStyle").removeClass("mx-1 px-2").addClass("mx-2 px-3");
  $(".badgeRoyaleCardStyle").css({
    "width": "10rem"
  });
  $(".badge-royale-image").css({
    "height": "140px"
  });
} // Adjust sizing if window is resized


window.onresize = function () {
  if (window.innerWidth > 768) {
    $(".badgeRoyaleCardStyle").removeClass("mx-1 px-2").addClass("mx-2 px-3");
    $(".badgeRoyaleCardStyle").css({
      "width": "10rem"
    });
    $(".badge-royale-image").css({
      "height": "140px"
    });
  } else {
    $(".badgeRoyaleCardStyle").removeClass("mx-2 px-3").addClass("mx-1 px-2");
    $(".badgeRoyaleCardStyle").css({
      "width": "8rem"
    });
    $(".badge-royale-image").css({
      "height": "112px"
    });
  }
};