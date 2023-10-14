/*------------------------------------------------------------------

[Table of contents]

1. General
2. Dialog
3. Infinite Scroll
4. Notification
5. Photo Browser
6. Picker
7. Preloader
8. Pull To Refresh
9. Range Slider
10. Toasts
11. Chat
12. Calendar
13. Onboarding
14. Swiper
15. Switch Theme

------------------------------------------------------------------*/

// 1. General

"use strict";

var $$ = Dom7;

var app = new Framework7({
  el: "#app",
  name: "Yui",
  theme: "ios",
  iosTranslucentBars: false,
  iosTranslucentModals: false,
  view: {
    browserHistory: true,
    browserHistoryAnimate: Framework7.device.ios ? false : true
  },
  routes: [
    // Features
    {
      path: "/action-sheet/",
      url: "pages/features/action-sheet.html",
    },
    {
      path: "/columns/",
      url: "pages/features/columns.html",
    },
    {
      path: "/dialog/",
      url: "pages/features/dialog.html",
    },
    {
      path: "/icons/",
      url: "pages/features/icons.html",
    },
    {
      path: "/infinite-scroll/",
      url: "pages/features/infinite-scroll.html",
    },
    {
      path: "/notification/",
      url: "pages/features/notification.html",
    },
    {
      path: "/page/",
      url: "pages/features/page.html",
    },
    {
      path: "/panel/",
      url: "pages/features/panel.html",
    },
    {
      path: "/photo-browser/",
      url: "pages/features/photo-browser.html",
    },
    {
      path: "/popover/",
      url: "pages/features/popover.html",
    },
    {
      path: "/popup/",
      url: "pages/features/popup.html",
    },
    {
      path: "/pull-to-refresh/",
      url: "pages/features/pull-to-refresh.html",
    },
    {
      path: "/sheet-modal/",
      url: "pages/features/sheet-modal.html",
    },
    {
      path: "/swipe-to-delete/",
      url: "pages/features/swipe-to-delete.html",
    },
    {
      path: "/tabs/",
      url: "pages/features/tabs.html",
    },
    {
      path: "/text-editor/",
      url: "pages/features/text-editor.html",
    },
    {
      path: "/toast/",
      url: "pages/features/toast.html",
    },
    {
      path: "/tooltip/",
      url: "pages/features/tooltip.html",
    },
    {
      path: "/typography/",
      url: "pages/features/typography.html",
    },
    // Components
    {
      path: "/accordion/",
      url: "pages/components/accordion.html",
    },
    {
      path: "/album-list/",
      url: "pages/components/album-list.html",
    },
    {
      path: "/author-list/",
      url: "pages/components/author-list.html",
    },
    {
      path: "/badge/",
      url: "pages/components/badge.html",
    },
    {
      path: "/button/",
      url: "pages/components/button.html",
    },
    {
      path: "/checkbox/",
      url: "pages/components/checkbox.html",
    },
    {
      path: "/card/",
      url: "pages/components/card.html",
    },
    {
      path: "/card-footer/",
      url: "pages/components/card-footer.html",
    },
    {
      path: "/card-big-footer/",
      url: "pages/components/card-big-footer.html",
    },
    {
      path: "/comments/",
      url: "pages/components/comments.html",
    },
    {
      path: "/event-list/",
      url: "pages/components/event-list.html",
    },
    {
      path: "/history-timeline/",
      url: "pages/components/history-timeline.html",
    },
    {
      path: "/information-block/",
      url: "pages/components/information-block.html",
    },
    {
      path: "/link-banner/",
      url: "pages/components/link-banner.html",
    },
    {
      path: "/list/",
      url: "pages/components/list.html",
    },
    {
      path: "/list-icon/",
      url: "pages/components/list-icon.html",
    },
    {
      path: "/picker/",
      url: "pages/components/picker.html",
    },
    {
      path: "/post-list/",
      url: "pages/components/post-list.html",
    },
    {
      path: "/preloader/",
      url: "pages/components/preloader.html",
    },
    {
      path: "/progress-bar/",
      url: "pages/components/progress-bar.html",
    },
    {
      path: "/radio/",
      url: "pages/components/radio.html",
    },
    {
      path: "/range-slider/",
      url: "pages/components/range-slider.html",
    },
    {
      path: "/rating/",
      url: "pages/components/rating.html",
    },
    {
      path: "/slider-cards/",
      url: "pages/components/slider-cards.html",
    },
    {
      path: "/slider-cards-footer/",
      url: "pages/components/slider-cards-footer.html",
    },
    {
      path: "/slider-categories/",
      url: "pages/components/slider-categories.html",
    },
    {
      path: "/slider-authors/",
      url: "pages/components/slider-authors.html",
    },
    {
      path: "/slider-albums/",
      url: "pages/components/slider-albums.html",
    },
    {
      path: "/slider-movies/",
      url: "pages/components/slider-movies.html",
    },
    {
      path: "/stepper/",
      url: "pages/components/stepper.html",
    },
    {
      path: "/stocks/",
      url: "pages/components/stocks.html",
    },
    {
      path: "/text-input/",
      url: "pages/components/text-input.html",
    },
    {
      path: "/ticket/",
      url: "pages/components/ticket.html",
    },
    {
      path: "/toggle-button/",
      url: "pages/components/toggle-button.html",
    },
    // Pages
    {
      path: "/signup/",
      url: "pages/pages/signup.html",
    },
    {
      path: "/signin/",
      url: "pages/pages/signin.html",
    },
    {
      path: "/forgot-password/",
      url: "pages/pages/forgot-password.html",
    },
    {
      path: "/messages/",
      url: "pages/pages/messages.html",
    },
    {
      path: "/chat/",
      url: "pages/pages/chat.html",
    },
    {
      path: "/single/",
      url: "pages/pages/single.html",
    },
    {
      path: "/create-post/",
      url: "pages/pages/create-post.html",
    },
    {
      path: "/movie/",
      url: "pages/pages/movie.html",
    },
    {
      path: "/album/",
      url: "pages/pages/album.html",
    },
    {
      path: "/calendar/",
      url: "pages/pages/calendar.html",
    },
    {
      path: "/help-center/",
      url: "pages/pages/help-center.html",
    },
    {
      path: "/contact/",
      url: "pages/pages/contact.html",
    },
    {
      path: "/settings/",
      url: "pages/pages/settings.html",
    },
    {
      path: "/categories/",
      url: "pages/pages/categories.html",
    },
    {
      path: "/profile/",
      url: "pages/pages/profile.html",
    },
    {
      path: "/search/",
      url: "pages/pages/search.html",
    },
    {
      path: "/notifications/",
      url: "pages/pages/notifications.html",
    },
    {
      path: "/onboarding/",
      url: "pages/pages/onboarding.html",
      options: {
        transition: "f7-dive",
      },
    },
  ],
});

// 2. Dialog

$$(document).on("page:init", '.page[data-name="dialog"]', function (e) {
  $$(".open-alert").on("click", function () {
    app.dialog.alert("Your subscription has been confirmed.");
  });

  $$(".open-confirm").on("click", function () {
    app.dialog.confirm("Confirm your subscription?", function () {
      app.dialog.alert("Confirmed!");
    });
  });
});

// 3. Infinite Scroll

$$(document).on("page:init", '.page[data-name="infinite-scroll"]', function (e) {
  var allowInfinite = true; // Loading flag
  var lastItemIndex = $$(".infinite-scroll-demo .post-horizontal").length; // Last loaded index
  var maxItems = 30; // Max items to load
  var itemsPerLoad = 5; // Append items per load

  // Attach 'infinite' event handler
  $$(".infinite-scroll-content").on("infinite", function () {
    if (!allowInfinite) return; // Exit, if loading in progress
    allowInfinite = false; // Set loading flag

    // Emulate 2s loading
    setTimeout(function () {
      allowInfinite = true; // Reset loading flag

      if (lastItemIndex >= maxItems) {
        // Nothing more to load, detach infinite scroll events to prevent unnecessary loadings
        app.infiniteScroll.destroy(".infinite-scroll-content");
        // Remove preloader from the DOM
        $$(".infinite-scroll-preloader").remove();
        return;
      }

      // Simulate new items generation
      var html = "";
      for (var i = lastItemIndex + 1; i <= lastItemIndex + itemsPerLoad; i++) {
        html +=
          '<a href="/single/" class="link post-horizontal">' +
          '<div class="infos">' +
          '<div class="post-category">Fashion</div>' +
          '<div class="post-title">The Importance of Supporting Local and Independent Fashion Brands</div>' +
          '<div class="post-date">2 hours ago</div>' +
          "</div>" +
          '<div class="post-image">' +
          (i + 1) +
          "</div>" +
          "</a>";
      }

      $$(".infinite-scroll-demo").append(html); // Append new items
      lastItemIndex = $$(".infinite-scroll-demo .post-horizontal").length; // Update last loaded index
    }, 2000);
  });
});

// 4. Notification

$$(document).on("page:init", '.page[data-name="notifications"]', function (e) {
  // Create notification with close button
  var notification = app.notification.create({
    icon: '<img src="img/avatars/small-avatar.jpg" alt="" class="notification-image" />',
    title: "Yui Mobile",
    subtitle: "Noah Campbell has started following you!",
    text: "Follow him back to expand your network!",
    closeButton: true,
  });

  // Open Notification
  $$(".open-notification").on("click", function () {
    notification.open();
  });
});

// 5. Photo Browser

$$(document).on("page:init", '.page[data-name="photo-browser"]', function (e) {
  var photoBrowserDark = app.photoBrowser.create({
    photos: ["img/images/1.jpg", "img/images/2.jpg", "img/images/3.jpg", "img/images/4.jpg", "img/images/5.jpg"],
    theme: "dark",
  });
  $$(".photo-browser-demo").on("click", function () {
    photoBrowserDark.open();
  });
});

// 6. Picker

$$(document).on("page:init", '.page[data-name="picker"]', function (e) {
  var pickerDevice = app.picker.create({
    inputEl: "#demo-picker-language",
    cols: [
      {
        textAlign: "center",
        values: ["Spanish", "English", "Arabic", "Hindi", "Portuguese", "Russian", "Japanese", "German"],
      },
    ],
  });
  var pickerMonth = app.picker.create({
    inputEl: "#demo-picker-month",
    cols: [
      {
        textAlign: "center",
        values: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      },
    ],
  });
  var pickerDay = app.picker.create({
    inputEl: "#demo-picker-day",
    cols: [
      {
        textAlign: "center",
        values: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"],
      },
    ],
  });
  var pidckerYear = app.picker.create({
    inputEl: "#demo-picker-year",
    cols: [
      {
        textAlign: "center",
        values: ["1983", "1984", "1985", "1986", "1987", "1988", "1989", "1990", "1991", "1992", "1993", "1994", "1995", "1996", "1997", "1998", "1999", "2000", "2001", "2002", "2003", "2004", "2005"],
      },
    ],
  });
});

// 7. Preloader

$$(document).on("page:init", '.page[data-name="preloader"]', function (e) {
  $$(".open-preloader").on("click", function () {
    app.preloader.show();
    setTimeout(function () {
      app.preloader.hide();
    }, 2000);
  });
});

// 8. Pull To Refresh

$$(document).on("page:init", '.page[data-name="pull-to-refresh"]', function (e) {
  var pullToRefreshPage = $$(".ptr-content");
  // Add 'refresh' listener on it
  pullToRefreshPage.on("ptr:refresh", function (e) {
    // Emulate 2s loading and generate new items
    setTimeout(function () {
      var html =
        '<a href="/single/" class="link post-horizontal">' +
        '<div class="infos">' +
        '<div class="post-category">Fashion</div>' +
        '<div class="post-title">The Importance of Supporting Local and Independent Fashion Brands</div>' +
        '<div class="post-date">2 hours ago</div>' +
        "</div>" +
        '<div class="post-image">NEW</div>' +
        "</a>";
      // Prepend new element
      pullToRefreshPage.find(".post-list").prepend(html);
      // When loading done, we reset it
      app.ptr.done();
    }, 2000);
  });
});

// 9. Range Slider

$$(document).on("page:init", '.page[data-name="range-slider"]', function (e) {
  $$("#age-filter").on("range:change", function (e, range) {
    $$(".age-value").text(range[0] + " - " + range[1]);
  });
  $$("#price-filter").on("range:change", function (e, range) {
    $$(".price-value").text("$" + range[0] + " - $" + range[1]);
  });
});

// 10. Toasts

$$(document).on("page:init", '.page[data-name="toasts"]', function (e) {
  // Bottom toast
  var toastBottom = app.toast.create({
    text: "Thank you for your subscription!",
    closeTimeout: 2000,
  });
  $$(".open-toast-bottom").on("click", function () {
    toastBottom.open();
  });

  // Top toast
  var toastTop = app.toast.create({
    text: "Thank you for your subscription!",
    position: "top",
    closeTimeout: 2000,
  });
  $$(".open-toast-top").on("click", function () {
    toastTop.open();
  });

  // Center toast
  var toastCenter = app.toast.create({
    text: "Thank you for your subscription!",
    position: "center",
    closeTimeout: 2000,
  });
  $$(".open-toast-center").on("click", function () {
    toastCenter.open();
  });

  // Toast with close button
  var toastWithButton = app.toast.create({
    text: "Thank you for your subscription!",
    closeButton: true,
  });
  $$(".open-toast-button").on("click", function () {
    toastWithButton.open();
  });
});

// 11. Chat

// Initialize chat
$$(document).on("page:init", '.page[data-name="chat"]', function (e) {
  var messages = app.messages.create({
    el: ".messages",
    // Define styling rules, depending on what type of message it is
    firstMessageRule: function (message, previousMessage, nextMessage) {
      if (message.isTitle) return false;
      if (!previousMessage || previousMessage.type !== message.type || previousMessage.name !== message.name) return true;
      return false;
    },
    lastMessageRule: function (message, previousMessage, nextMessage) {
      if (message.isTitle) return false;
      if (!nextMessage || nextMessage.type !== message.type || nextMessage.name !== message.name) return true;
      return false;
    },
  });

  // Init Messagebar
  var messagebar = app.messagebar.create({
    el: ".messagebar",
  });

  // Response flag
  var responseInProgress = false;

  // Send Message
  $$(".send-link").on("click", function () {
    var text = messagebar.getValue().replace(/\n/g, "<br>").trim();

    // return if empty message
    if (!text.length) return;

    // Clear area
    messagebar.clear();

    // Return focus to area
    messagebar.focus();

    // Add message to messages
    messages.addMessage({
      text: text,
    });

    if (responseInProgress) return;
    // Receive dummy message
    receiveMessage();
  });

  function receiveMessage() {
    responseInProgress = true;
    setTimeout(function () {
      // Show typing indicator
      messages.showTyping({
        header: "Jack is typing...",
        avatar: "../img/avatars/5.jpg",
      });

      setTimeout(function () {
        // Add received dummy message
        messages.addMessage({
          text: "Amazing!!!",
          type: "received",
          avatar: "../img/avatars/5.jpg",
        });
        // Hide typing indicator
        messages.hideTyping();
        responseInProgress = false;
      }, 2000);
    }, 500);
  }
});

// 12. Calendar

$$(document).on("page:init", '.page[data-name="calendar"]', function (e) {
  var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var calendarInline = app.calendar.create({
    containerEl: "#calendar",
    value: [new Date()],
    weekHeader: false,
    renderToolbar: function () {
      return (
        '<div class="toolbar calendar-custom-toolbar no-shadow">' +
        '<div class="toolbar-inner">' +
        '<div class="left">' +
        '<a href="#" class="link icon-only"><i class="icon icon-back ' +
        (app.theme === "md" ? "color-black" : "") +
        '"></i></a>' +
        "</div>" +
        '<div class="center"></div>' +
        '<div class="right">' +
        '<a href="#" class="link icon-only"><i class="icon icon-forward ' +
        (app.theme === "md" ? "color-black" : "") +
        '"></i></a>' +
        "</div>" +
        "</div>" +
        "</div>"
      );
    },
    on: {
      init: function (c) {
        $$(".calendar-custom-toolbar .center").text(monthNames[c.currentMonth] + ", " + c.currentYear);
        $$(".calendar-custom-toolbar .left .link").on("click", function () {
          calendarInline.prevMonth();
        });
        $$(".calendar-custom-toolbar .right .link").on("click", function () {
          calendarInline.nextMonth();
        });
      },
      monthYearChangeStart: function (c) {
        $$(".calendar-custom-toolbar .center").text(monthNames[c.currentMonth] + ", " + c.currentYear);
      },
    },
  });
});

// 13. Onboarding

$$(document).on("page:init", '.page[data-name="onboarding"]', function (e) {
  const swiperEl = document.querySelector(".swiper-onboarding");
  $$(".onboarding-next-button").on("click", () => {
    const totalSlides = swiperEl.swiper.slides.length;
    const currentSlide = swiperEl.swiper.activeIndex + 1;

    console.log(currentSlide + " / " + totalSlides);
    if (currentSlide == totalSlides) {
      app.views.current.router.back();
      return;
    }
    swiperEl.swiper.slideNext();

    if (currentSlide == totalSlides - 1) {
      $$(".onboarding-next-button").text("Start!");
      //$$(".onboarding-next-button").addClass("Start!");
    }
  });
});

// 14. Swiper

$$("swiper-slide a").on("click", function () {
  app.views.current.router.navigate($$(this).attr("data-href"));
});
$$(document).on("page:init", function (e) {
  $$("swiper-slide a").on("click", function () {
    app.views.current.router.navigate($$(this).attr("data-href"));
  });
});

// 15. Switch Theme

$$(".switch-theme").on("click", function () {
  $$(".page").toggleClass("page-theme-transition");
  $$(".page").transitionEnd(function(){
    $$(".page").toggleClass("page-theme-transition");
  });
  if ($$("body").hasClass("dark")) {
    $$(".switch-theme i").text("moon_stars");
  } else {
    $$(".switch-theme i").text("sun_max");
  }
  $$("body").toggleClass("dark");
});

// 16. Preload Pages

function preloadPages() {
  const pages = app.routes.map((route) => route.url);

  for (const page of pages) {
    fetch(page)
      .then((response) => response.text())
      .then((content) => {
        const xhrEntry = {
          url: page,
          time: Date.now(),
          content: content,
        };
        app.router.cache.xhr.push(xhrEntry);
      })
      .catch((error) => console.error(error));
  }
}

preloadPages();
