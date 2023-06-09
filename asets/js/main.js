// menu
$(window).on("load resize", function () {
  setTimeout(function () {
    var winW = window.innerWidth;
    var winBP = 900; // break point

    // small terminal
    if (winW < winBP) {
      $("body").addClass("s").removeClass("p");
      if (!$("#menubar_hdr").hasClass("ham")) {
        $("#menubar").addClass("dn").removeClass("db");
        $("#menubar_hdr").addClass("db").removeClass("dn");
      }
      if (!$("#fix-menubar_hdr").hasClass("ham")) {
        $("#fix-menubar").addClass("dn").removeClass("db");
        $("#fix-menubar_hdr").addClass("db").removeClass("dn");
      }

      // big terminal
    } else {
      $("body").addClass("p").removeClass("s");
      if ($("#menubar_hdr").hasClass("ham")) {
        $("body").removeClass("modal-active");
        $("#menubar_hdr").removeClass("ham");
      }
      $("#menubar").addClass("db").removeClass("dn");
      $("#menubar_hdr").addClass("dn").removeClass("db");
      if ($("#fix-menubar_hdr").hasClass("ham")) {
        $("body").removeClass("modal-active");
        $("#fix-menubar_hdr").removeClass("ham");
      }
      $("#fix-menubar").addClass("db").removeClass("dn");
      $("#fix-menubar_hdr").addClass("dn").removeClass("db");
    }
  }, 100);
});

// close on link click
$("#menubar a").click(function (e) {
  if ($("body").hasClass("s")) {
    if ($(this).attr("href") === "") {
      e.preventDefault();
    } else {
      $("body").removeClass("modal-active");
      $("#menubar_hdr").removeClass("ham");
      $("#menubar").removeClass("db").addClass("dn");
    }
  }
});
$("#fix-menubar a").click(function (e) {
  if ($("body").hasClass("s")) {
    if ($(this).attr("href") === "") {
      e.preventDefault();
    } else {
      $("body").removeClass("modal-active");
      $("#fix-menubar_hdr").removeClass("ham");
      $("#fix-menubar").removeClass("db").addClass("dn");
    }
  }
});

// hamburger menu
$(function () {
  $("#menubar_hdr").click(function () {
    $(this).toggleClass("ham");

    if ($(this).hasClass("ham")) {
      console.log("open");
      $("#menubar").addClass("db").removeClass("dn");
      $("body").addClass("modal-active");
    } else {
      console.log("close");
      $("#menubar").addClass("dn").removeClass("db");
      $("body").removeClass("modal-active");
    }
  });
});
$(function () {
  $("#fix-menubar_hdr").click(function () {
    $(this).toggleClass("ham");

    if ($(this).hasClass("ham")) {
      $("#fix-menubar").addClass("db").removeClass("dn");
      $("body").addClass("modal-active");
    } else {
      $("#fix-menubar").addClass("dn").removeClass("db");
      $("body").removeClass("modal-active");
    }
  });
});

// page top button
$(function () {
  var scroll = $(".pagetop");
  var scrollShow = $(".pagetop-show");

  $(scroll).hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() >= 300) {
      $(scroll).fadeIn().addClass(scrollShow);
    } else {
      $(scroll).fadeOut().removeClass(scrollShow);
    }
  });
});

// smooth scroll
// from the link
$(window).on("load", function () {
  var hash = location.hash;

  if (hash) {
    var headerHeight = $("#fixed-header").height();
    var speed = 500;
    var target = $(hash);
    var scroll = target.offset().top - headerHeight;
    $("body,html").animate({ scrollTop: scroll }, speed);
  }
});
// in page link
$(window).on("load", function () {
  $('a[href^="#"]').click(function () {
    var headerHeight = $("#fixed-header").height();
    var speed = 500;
    var href = $(this).attr("href");
    var target = href == "#" ? 0 : $(href).offset().top - headerHeight;

    $("body,html").animate({ scrollTop: target }, speed);
    return false;
  });
});

// drawer menu
$(function () {
  $("#menubar li:has(ul)").addClass("ddmenu_parent");
  $("#fix-menubar li:has(ul)").addClass("ddmenu_parent");
  $(".ddmenu_parent > a").addClass("ddmenu");

  // touch device
  let scrollFlag = false;
  let isTouchFlag = false;
  $(".ddmenu").on({
    touchstart: function () {
      scrollFlag = true;
      isTouchFlag = true;
    },
    touchmove: function () {
      scrollFlag = false;
    },
    touchend: function () {
      if (!isTouchFlag || (isTouchFlag && scrollFlag)) {
        $(this).next("ul").stop().slideToggle();
        $(".ddmenu").not(this).next("ul").slideUp();
        $(this).toggleClass("drawer-active");
        return false;
      }
    },
  });

  // pc
  $(".ddmenu_parent").hover(function () {
    $(this).children("ul").stop().slideToggle();
  });

  $(".link-disabled").on("click", function (e) {
    e.preventDefault();
  });
});

// modal search
$(function () {
  var open = $(".modal-open"),
    close = $(".modal-close"),
    container = $(".modal-container");

  open.on("click", function () {
    container.addClass("active");
    return false;
  });

  close.on("click", function () {
    container.removeClass("active");
  });

  $(document).on("click", function (e) {
    if (!$(e.target).closest(".modal-body").length) {
      container.removeClass("active");
    }
  });
});

// fixed header
$(function () {
  var fh = $("#fixed-header");
  var scrollAmount = 100;

  $(window).on("scroll", function () {
    if ($(this).scrollTop() > scrollAmount) {
      fh.addClass("is-show");
    } else {
      fh.removeClass("is-show");
    }
  });
});

// scroll hint
new ScrollHint(".js-scrollable", {
  suggestiveShadow: true,
  i18n: {
    scrollable: "スクロールできます",
  },
});
