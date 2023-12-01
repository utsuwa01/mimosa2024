"use strict";

function _typeof(i) {
  return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (i) {
    return typeof i
  } : function (i) {
    return i && "function" == typeof Symbol && i.constructor === Symbol && i !== Symbol.prototype ? "symbol" : typeof i
  })(i)
}! function () {
  var i;
  ! function () {
    $(window).scroll(function () {
      600 < $(this).scrollTop() ? ($(".js_pagetop").addClass("is_show"), $(".js_pagetop").removeClass("is_hide")) : ($(".js_pagetop").addClass("is_hide"), $(".js_pagetop").removeClass("is_show"))
    }), $(".js_pagetop").click(function () {
      return $("body,html").animate({
        scrollTop: 0
      }, 500), !1
    }), $("#js_langubtn").on("click", function () {
      $(".js_languopen").toggleClass("is_show")
    }), $(".js_splangubtn").on("click", function () {
      $(".js_splanguopen").hasClass("is_show") ? $(".js_splanguopen").removeClass("is_show") : $(".js_splanguopen").addClass("is_show")
    }), $(".js_opnebtn").on("click", function (i) {
      $(i.currentTarget).removeClass("is_show"), $(".js_closebtn").addClass("is_show"), $(".js_navbg").addClass("is_show"), $(".js_navbg").removeClass("is_hide"), setTimeout(function () {
        $(".js_nav").addClass("is_show"), $(".js_nav").removeClass("is_hide"), $(".js_navmove").addClass("is_show"), $(".js_navmove").removeClass("is_hide")
      }, 300)
    }), $(".js_closebtn").on("click", function (i) {
      $(i.currentTarget).removeClass("is_show"), $(".js_opnebtn").addClass("is_show"), $(".js_navbg").addClass("is_hide"), $(".js_navbg").removeClass("is_show"), $(".js_nav").addClass("is_hide"), $(".js_nav").removeClass("is_show"), $(".js_navmove").addClass("is_hide"), $(".js_navmove").removeClass("is_show"), $(".js_splanguopen").hasClass("is_show") && $(".js_splanguopen").removeClass("is_show")
    });
    var i = $(window).height(),
      e = i - 740;
    i < 750 ? $(".js_hit").css("margin-top", "150px") : $(".js_hit").css("margin-top", e + "px"), $(window).resize(function () {
      var i = $(window).height(),
        e = i - 740;
      i < 750 ? ($(".js_hit").css("margin-top", "150px"), console.log(i)) : $(".js_hit").css("margin-top", e + "px")
    });

  }(), i = function (d) {
    var o, l = window.Slick || {};
    o = 0, (l = function (i, e) {
      var t, s = this;
      s.defaults = {
        accessibility: !0,
        adaptiveHeight: !1,
        appendArrows: d(i),
        appendDots: d(i),
        arrows: !0,
        asNavFor: null,
        prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
        nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
        autoplay: !1,
        autoplaySpeed: 3e3,
        centerMode: !1,
        centerPadding: "50px",
        cssEase: "ease",
        customPaging: function (i, e) {
          return d('<button type="button" />').text(e + 1)
        },
        dots: !1,
        dotsClass: "slick-dots",
        draggable: !0,
        easing: "linear",
        edgeFriction: .35,
        fade: !1,
        focusOnSelect: !1,
        focusOnChange: !1,
        infinite: !0,
        initialSlide: 0,
        lazyLoad: "ondemand",
        mobileFirst: !1,
        pauseOnHover: !0,
        pauseOnFocus: !0,
        pauseOnDotsHover: !1,
        respondTo: "window",
        responsive: null,
        rows: 1,
        rtl: !1,
        slide: "",
        slidesPerRow: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        swipe: !0,
        swipeToSlide: !1,
        touchMove: !0,
        touchThreshold: 5,
        useCSS: !0,
        useTransform: !0,
        variableWidth: !1,
        vertical: !1,
        verticalSwiping: !1,
        waitForAnimate: !0,
        zIndex: 1e3
      }, s.initials = {
        animating: !1,
        dragging: !1,
        autoPlayTimer: null,
        currentDirection: 0,
        currentLeft: null,
        currentSlide: 0,
        direction: 1,
        $dots: null,
        listWidth: null,
        listHeight: null,
        loadIndex: 0,
        $nextArrow: null,
        $prevArrow: null,
        scrolling: !1,
        slideCount: null,
        slideWidth: null,
        $slideTrack: null,
        $slides: null,
        sliding: !1,
        slideOffset: 0,
        swipeLeft: null,
        swiping: !1,
        $list: null,
        touchObject: {},
        transformsEnabled: !1,
        unslicked: !1
      }, d.extend(s, s.initials), s.activeBreakpoint = null, s.animType = null, s.animProp = null, s.breakpoints = [], s.breakpointSettings = [], s.cssTransitions = !1, s.focussed = !1, s.interrupted = !1, s.hidden = "hidden", s.paused = !0, s.positionProp = null, s.respondTo = null, s.rowCount = 1, s.shouldClick = !0, s.$slider = d(i), s.$slidesCache = null, s.transformType = null, s.transitionType = null, s.visibilityChange = "visibilitychange", s.windowWidth = 0, s.windowTimer = null, t = d(i).data("slick") || {}, s.options = d.extend({}, s.defaults, e, t), s.currentSlide = s.options.initialSlide, s.originalSettings = s.options, void 0 !== document.mozHidden ? (s.hidden = "mozHidden", s.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (s.hidden = "webkitHidden", s.visibilityChange = "webkitvisibilitychange"), s.autoPlay = d.proxy(s.autoPlay, s), s.autoPlayClear = d.proxy(s.autoPlayClear, s), s.autoPlayIterator = d.proxy(s.autoPlayIterator, s), s.changeSlide = d.proxy(s.changeSlide, s), s.clickHandler = d.proxy(s.clickHandler, s), s.selectHandler = d.proxy(s.selectHandler, s), s.setPosition = d.proxy(s.setPosition, s), s.swipeHandler = d.proxy(s.swipeHandler, s), s.dragHandler = d.proxy(s.dragHandler, s), s.keyHandler = d.proxy(s.keyHandler, s), s.instanceUid = o++, s.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, s.registerBreakpoints(), s.init(!0)
    }).prototype.activateADA = function () {
      this.$slideTrack.find(".slick-active").attr({
        "aria-hidden": "false"
      }).find("a, input, button, select").attr({
        tabindex: "0"
      })
    }, l.prototype.addSlide = l.prototype.slickAdd = function (i, e, t) {
      var s = this;
      if ("boolean" == typeof e) t = e, e = null;
      else if (e < 0 || e >= s.slideCount) return !1;
      s.unload(), "number" == typeof e ? 0 === e && 0 === s.$slides.length ? d(i).appendTo(s.$slideTrack) : t ? d(i).insertBefore(s.$slides.eq(e)) : d(i).insertAfter(s.$slides.eq(e)) : !0 === t ? d(i).prependTo(s.$slideTrack) : d(i).appendTo(s.$slideTrack), s.$slides = s.$slideTrack.children(this.options.slide), s.$slideTrack.children(this.options.slide).detach(), s.$slideTrack.append(s.$slides), s.$slides.each(function (i, e) {
        d(e).attr("data-slick-index", i)
      }), s.$slidesCache = s.$slides, s.reinit()
    }, l.prototype.animateHeight = function () {
      var i, e = this;
      1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical && (i = e.$slides.eq(e.currentSlide).outerHeight(!0), e.$list.animate({
        height: i
      }, e.options.speed))
    }, l.prototype.animateSlide = function (i, e) {
      var t = {},
        s = this;
      s.animateHeight(), !0 === s.options.rtl && !1 === s.options.vertical && (i = -i), !1 === s.transformsEnabled ? !1 === s.options.vertical ? s.$slideTrack.animate({
        left: i
      }, s.options.speed, s.options.easing, e) : s.$slideTrack.animate({
        top: i
      }, s.options.speed, s.options.easing, e) : !1 === s.cssTransitions ? (!0 === s.options.rtl && (s.currentLeft = -s.currentLeft), d({
        animStart: s.currentLeft
      }).animate({
        animStart: i
      }, {
        duration: s.options.speed,
        easing: s.options.easing,
        step: function (i) {
          i = Math.ceil(i), !1 === s.options.vertical ? t[s.animType] = "translate(" + i + "px, 0px)" : t[s.animType] = "translate(0px," + i + "px)", s.$slideTrack.css(t)
        },
        complete: function () {
          e && e.call()
        }
      })) : (s.applyTransition(), i = Math.ceil(i), !1 === s.options.vertical ? t[s.animType] = "translate3d(" + i + "px, 0px, 0px)" : t[s.animType] = "translate3d(0px," + i + "px, 0px)", s.$slideTrack.css(t), e && setTimeout(function () {
        s.disableTransition(), e.call()
      }, s.options.speed))
    }, l.prototype.getNavTarget = function () {
      var i = this.options.asNavFor;
      return i && null !== i && (i = d(i).not(this.$slider)), i
    }, l.prototype.asNavFor = function (e) {
      var i = this.getNavTarget();
      null !== i && "object" == _typeof(i) && i.each(function () {
        var i = d(this).slick("getSlick");
        i.unslicked || i.slideHandler(e, !0)
      })
    }, l.prototype.applyTransition = function (i) {
      var e = this,
        t = {};
      !1 === e.options.fade ? t[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : t[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase, !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t)
    }, l.prototype.autoPlay = function () {
      var i = this;
      i.autoPlayClear(), i.slideCount > i.options.slidesToShow && (i.autoPlayTimer = setInterval(i.autoPlayIterator, i.options.autoplaySpeed))
    }, l.prototype.autoPlayClear = function () {
      this.autoPlayTimer && clearInterval(this.autoPlayTimer)
    }, l.prototype.autoPlayIterator = function () {
      var i = this,
        e = i.currentSlide + i.options.slidesToScroll;
      i.paused || i.interrupted || i.focussed || (!1 === i.options.infinite && (1 === i.direction && i.currentSlide + 1 === i.slideCount - 1 ? i.direction = 0 : 0 === i.direction && (e = i.currentSlide - i.options.slidesToScroll, i.currentSlide - 1 == 0 && (i.direction = 1))), i.slideHandler(e))
    }, l.prototype.buildArrows = function () {
      var i = this;
      !0 === i.options.arrows && (i.$prevArrow = d(i.options.prevArrow).addClass("slick-arrow"), i.$nextArrow = d(i.options.nextArrow).addClass("slick-arrow"), i.slideCount > i.options.slidesToShow ? (i.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), i.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), i.htmlExpr.test(i.options.prevArrow) && i.$prevArrow.prependTo(i.options.appendArrows), i.htmlExpr.test(i.options.nextArrow) && i.$nextArrow.appendTo(i.options.appendArrows), !0 !== i.options.infinite && i.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : i.$prevArrow.add(i.$nextArrow).addClass("slick-hidden").attr({
        "aria-disabled": "true",
        tabindex: "-1"
      }))
    }, l.prototype.buildDots = function () {
      var i, e, t = this;
      if (!0 === t.options.dots) {
        for (t.$slider.addClass("slick-dotted"), e = d("<ul />").addClass(t.options.dotsClass), i = 0; i <= t.getDotCount(); i += 1) e.append(d("<li />").append(t.options.customPaging.call(this, t, i)));
        t.$dots = e.appendTo(t.options.appendDots), t.$dots.find("li").first().addClass("slick-active")
      }
    }, l.prototype.buildOut = function () {
      var i = this;
      i.$slides = i.$slider.children(i.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), i.slideCount = i.$slides.length, i.$slides.each(function (i, e) {
        d(e).attr("data-slick-index", i).data("originalStyling", d(e).attr("style") || "")
      }), i.$slider.addClass("slick-slider"), i.$slideTrack = 0 === i.slideCount ? d('<div class="slick-track"/>').appendTo(i.$slider) : i.$slides.wrapAll('<div class="slick-track"/>').parent(), i.$list = i.$slideTrack.wrap('<div class="slick-list"/>').parent(), i.$slideTrack.css("opacity", 0), !0 !== i.options.centerMode && !0 !== i.options.swipeToSlide || (i.options.slidesToScroll = 1), d("img[data-lazy]", i.$slider).not("[src]").addClass("slick-loading"), i.setupInfinite(), i.buildArrows(), i.buildDots(), i.updateDots(), i.setSlideClasses("number" == typeof i.currentSlide ? i.currentSlide : 0), !0 === i.options.draggable && i.$list.addClass("draggable")
    }, l.prototype.buildRows = function () {
      var i, e, t, s = this,
        o = document.createDocumentFragment(),
        n = s.$slider.children();
      if (1 < s.options.rows) {
        for (t = s.options.slidesPerRow * s.options.rows, e = Math.ceil(n.length / t), i = 0; i < e; i++) {
          for (var l = document.createElement("div"), r = 0; r < s.options.rows; r++) {
            for (var a = document.createElement("div"), d = 0; d < s.options.slidesPerRow; d++) {
              var c = i * t + (r * s.options.slidesPerRow + d);
              n.get(c) && a.appendChild(n.get(c))
            }
            l.appendChild(a)
          }
          o.appendChild(l)
        }
        s.$slider.empty().append(o), s.$slider.children().children().children().css({
          width: 100 / s.options.slidesPerRow + "%",
          display: "inline-block"
        })
      }
    }, l.prototype.checkResponsive = function (i, e) {
      var t, s, o, n = this,
        l = !1,
        r = n.$slider.width(),
        a = window.innerWidth || d(window).width();
      if ("window" === n.respondTo ? o = a : "slider" === n.respondTo ? o = r : "min" === n.respondTo && (o = Math.min(a, r)), n.options.responsive && n.options.responsive.length && null !== n.options.responsive) {
        for (t in s = null, n.breakpoints) n.breakpoints.hasOwnProperty(t) && (!1 === n.originalSettings.mobileFirst ? o < n.breakpoints[t] && (s = n.breakpoints[t]) : o > n.breakpoints[t] && (s = n.breakpoints[t]));
        null !== s ? null !== n.activeBreakpoint && s === n.activeBreakpoint && !e || (n.activeBreakpoint = s, "unslick" === n.breakpointSettings[s] ? n.unslick(s) : (n.options = d.extend({}, n.originalSettings, n.breakpointSettings[s]), !0 === i && (n.currentSlide = n.options.initialSlide), n.refresh(i)), l = s) : null !== n.activeBreakpoint && (n.activeBreakpoint = null, n.options = n.originalSettings, !0 === i && (n.currentSlide = n.options.initialSlide), n.refresh(i), l = s), i || !1 === l || n.$slider.trigger("breakpoint", [n, l])
      }
    }, l.prototype.changeSlide = function (i, e) {
      var t, s, o = this,
        n = d(i.currentTarget);
      switch (n.is("a") && i.preventDefault(), n.is("li") || (n = n.closest("li")), t = o.slideCount % o.options.slidesToScroll != 0 ? 0 : (o.slideCount - o.currentSlide) % o.options.slidesToScroll, i.data.message) {
      case "previous":
        s = 0 == t ? o.options.slidesToScroll : o.options.slidesToShow - t, o.slideCount > o.options.slidesToShow && o.slideHandler(o.currentSlide - s, !1, e);
        break;
      case "next":
        s = 0 == t ? o.options.slidesToScroll : t, o.slideCount > o.options.slidesToShow && o.slideHandler(o.currentSlide + s, !1, e);
        break;
      case "index":
        var l = 0 === i.data.index ? 0 : i.data.index || n.index() * o.options.slidesToScroll;
        o.slideHandler(o.checkNavigable(l), !1, e), n.children().trigger("focus");
        break;
      default:
        return
      }
    }, l.prototype.checkNavigable = function (i) {
      var e = this.getNavigableIndexes(),
        t = 0;
      if (i > e[e.length - 1]) i = e[e.length - 1];
      else
        for (var s in e) {
          if (i < e[s]) {
            i = t;
            break
          }
          t = e[s]
        }
      return i
    }, l.prototype.cleanUpEvents = function () {
      var i = this;
      i.options.dots && null !== i.$dots && (d("li", i.$dots).off("click.slick", i.changeSlide).off("mouseenter.slick", d.proxy(i.interrupt, i, !0)).off("mouseleave.slick", d.proxy(i.interrupt, i, !1)), !0 === i.options.accessibility && i.$dots.off("keydown.slick", i.keyHandler)), i.$slider.off("focus.slick blur.slick"), !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow && i.$prevArrow.off("click.slick", i.changeSlide), i.$nextArrow && i.$nextArrow.off("click.slick", i.changeSlide), !0 === i.options.accessibility && (i.$prevArrow && i.$prevArrow.off("keydown.slick", i.keyHandler), i.$nextArrow && i.$nextArrow.off("keydown.slick", i.keyHandler))), i.$list.off("touchstart.slick mousedown.slick", i.swipeHandler), i.$list.off("touchmove.slick mousemove.slick", i.swipeHandler), i.$list.off("touchend.slick mouseup.slick", i.swipeHandler), i.$list.off("touchcancel.slick mouseleave.slick", i.swipeHandler), i.$list.off("click.slick", i.clickHandler), d(document).off(i.visibilityChange, i.visibility), i.cleanUpSlideEvents(), !0 === i.options.accessibility && i.$list.off("keydown.slick", i.keyHandler), !0 === i.options.focusOnSelect && d(i.$slideTrack).children().off("click.slick", i.selectHandler), d(window).off("orientationchange.slick.slick-" + i.instanceUid, i.orientationChange), d(window).off("resize.slick.slick-" + i.instanceUid, i.resize), d("[draggable!=true]", i.$slideTrack).off("dragstart", i.preventDefault), d(window).off("load.slick.slick-" + i.instanceUid, i.setPosition)
    }, l.prototype.cleanUpSlideEvents = function () {
      var i = this;
      i.$list.off("mouseenter.slick", d.proxy(i.interrupt, i, !0)), i.$list.off("mouseleave.slick", d.proxy(i.interrupt, i, !1))
    }, l.prototype.cleanUpRows = function () {
      var i;
      1 < this.options.rows && ((i = this.$slides.children().children()).removeAttr("style"), this.$slider.empty().append(i))
    }, l.prototype.clickHandler = function (i) {
      !1 === this.shouldClick && (i.stopImmediatePropagation(), i.stopPropagation(), i.preventDefault())
    }, l.prototype.destroy = function (i) {
      var e = this;
      e.autoPlayClear(), e.touchObject = {}, e.cleanUpEvents(), d(".slick-cloned", e.$slider).detach(), e.$dots && e.$dots.remove(), e.$prevArrow && e.$prevArrow.length && (e.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove()), e.$nextArrow && e.$nextArrow.length && (e.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove()), e.$slides && (e.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function () {
        d(this).attr("style", d(this).data("originalStyling"))
      }), e.$slideTrack.children(this.options.slide).detach(), e.$slideTrack.detach(), e.$list.detach(), e.$slider.append(e.$slides)), e.cleanUpRows(), e.$slider.removeClass("slick-slider"), e.$slider.removeClass("slick-initialized"), e.$slider.removeClass("slick-dotted"), e.unslicked = !0, i || e.$slider.trigger("destroy", [e])
    }, l.prototype.disableTransition = function (i) {
      var e = {};
      e[this.transitionType] = "", !1 === this.options.fade ? this.$slideTrack.css(e) : this.$slides.eq(i).css(e)
    }, l.prototype.fadeSlide = function (i, e) {
      var t = this;
      !1 === t.cssTransitions ? (t.$slides.eq(i).css({
        zIndex: t.options.zIndex
      }), t.$slides.eq(i).animate({
        opacity: 1
      }, t.options.speed, t.options.easing, e)) : (t.applyTransition(i), t.$slides.eq(i).css({
        opacity: 1,
        zIndex: t.options.zIndex
      }), e && setTimeout(function () {
        t.disableTransition(i), e.call()
      }, t.options.speed))
    }, l.prototype.fadeSlideOut = function (i) {
      var e = this;
      !1 === e.cssTransitions ? e.$slides.eq(i).animate({
        opacity: 0,
        zIndex: e.options.zIndex - 2
      }, e.options.speed, e.options.easing) : (e.applyTransition(i), e.$slides.eq(i).css({
        opacity: 0,
        zIndex: e.options.zIndex - 2
      }))
    }, l.prototype.filterSlides = l.prototype.slickFilter = function (i) {
      var e = this;
      null !== i && (e.$slidesCache = e.$slides, e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.filter(i).appendTo(e.$slideTrack), e.reinit())
    }, l.prototype.focusHandler = function () {
      var t = this;
      t.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function (i) {
        i.stopImmediatePropagation();
        var e = d(this);
        setTimeout(function () {
          t.options.pauseOnFocus && (t.focussed = e.is(":focus"), t.autoPlay())
        }, 0)
      })
    }, l.prototype.getCurrent = l.prototype.slickCurrentSlide = function () {
      return this.currentSlide
    }, l.prototype.getDotCount = function () {
      var i = this,
        e = 0,
        t = 0,
        s = 0;
      if (!0 === i.options.infinite)
        if (i.slideCount <= i.options.slidesToShow) ++s;
        else
          for (; e < i.slideCount;) ++s, e = t + i.options.slidesToScroll, t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow;
      else if (!0 === i.options.centerMode) s = i.slideCount;
      else if (i.options.asNavFor)
        for (; e < i.slideCount;) ++s, e = t + i.options.slidesToScroll, t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow;
      else s = 1 + Math.ceil((i.slideCount - i.options.slidesToShow) / i.options.slidesToScroll);
      return s - 1
    }, l.prototype.getLeft = function (i) {
      var e, t, s, o, n = this,
        l = 0;
      return n.slideOffset = 0, t = n.$slides.first().outerHeight(!0), !0 === n.options.infinite ? (n.slideCount > n.options.slidesToShow && (n.slideOffset = n.slideWidth * n.options.slidesToShow * -1, o = -1, !0 === n.options.vertical && !0 === n.options.centerMode && (2 === n.options.slidesToShow ? o = -1.5 : 1 === n.options.slidesToShow && (o = -2)), l = t * n.options.slidesToShow * o), n.slideCount % n.options.slidesToScroll != 0 && i + n.options.slidesToScroll > n.slideCount && n.slideCount > n.options.slidesToShow && (l = i > n.slideCount ? (n.slideOffset = (n.options.slidesToShow - (i - n.slideCount)) * n.slideWidth * -1, (n.options.slidesToShow - (i - n.slideCount)) * t * -1) : (n.slideOffset = n.slideCount % n.options.slidesToScroll * n.slideWidth * -1, n.slideCount % n.options.slidesToScroll * t * -1))) : i + n.options.slidesToShow > n.slideCount && (n.slideOffset = (i + n.options.slidesToShow - n.slideCount) * n.slideWidth, l = (i + n.options.slidesToShow - n.slideCount) * t), n.slideCount <= n.options.slidesToShow && (l = n.slideOffset = 0), !0 === n.options.centerMode && n.slideCount <= n.options.slidesToShow ? n.slideOffset = n.slideWidth * Math.floor(n.options.slidesToShow) / 2 - n.slideWidth * n.slideCount / 2 : !0 === n.options.centerMode && !0 === n.options.infinite ? n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2) - n.slideWidth : !0 === n.options.centerMode && (n.slideOffset = 0, n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2)), e = !1 === n.options.vertical ? i * n.slideWidth * -1 + n.slideOffset : i * t * -1 + l, !0 === n.options.variableWidth && (s = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(i) : n.$slideTrack.children(".slick-slide").eq(i + n.options.slidesToShow), e = !0 === n.options.rtl ? s[0] ? -1 * (n.$slideTrack.width() - s[0].offsetLeft - s.width()) : 0 : s[0] ? -1 * s[0].offsetLeft : 0, !0 === n.options.centerMode && (s = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(i) : n.$slideTrack.children(".slick-slide").eq(i + n.options.slidesToShow + 1), e = !0 === n.options.rtl ? s[0] ? -1 * (n.$slideTrack.width() - s[0].offsetLeft - s.width()) : 0 : s[0] ? -1 * s[0].offsetLeft : 0, e += (n.$list.width() - s.outerWidth()) / 2)), e
    }, l.prototype.getOption = l.prototype.slickGetOption = function (i) {
      return this.options[i]
    }, l.prototype.getNavigableIndexes = function () {
      for (var i = this, e = 0, t = 0, s = [], o = !1 === i.options.infinite ? i.slideCount : (e = -1 * i.options.slidesToScroll, t = -1 * i.options.slidesToScroll, 2 * i.slideCount); e < o;) s.push(e), e = t + i.options.slidesToScroll, t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow;
      return s
    }, l.prototype.getSlick = function () {
      return this
    }, l.prototype.getSlideCount = function () {
      var t, s = this,
        o = !0 === s.options.centerMode ? s.slideWidth * Math.floor(s.options.slidesToShow / 2) : 0;
      return !0 === s.options.swipeToSlide ? (s.$slideTrack.find(".slick-slide").each(function (i, e) {
        if (e.offsetLeft - o + d(e).outerWidth() / 2 > -1 * s.swipeLeft) return t = e, !1
      }), Math.abs(d(t).attr("data-slick-index") - s.currentSlide) || 1) : s.options.slidesToScroll
    }, l.prototype.goTo = l.prototype.slickGoTo = function (i, e) {
      this.changeSlide({
        data: {
          message: "index",
          index: parseInt(i)
        }
      }, e)
    }, l.prototype.init = function (i) {
      var e = this;
      d(e.$slider).hasClass("slick-initialized") || (d(e.$slider).addClass("slick-initialized"), e.buildRows(), e.buildOut(), e.setProps(), e.startLoad(), e.loadSlider(), e.initializeEvents(), e.updateArrows(), e.updateDots(), e.checkResponsive(!0), e.focusHandler()), i && e.$slider.trigger("init", [e]), !0 === e.options.accessibility && e.initADA(), e.options.autoplay && (e.paused = !1, e.autoPlay())
    }, l.prototype.initADA = function () {
      var t = this,
        s = Math.ceil(t.slideCount / t.options.slidesToShow),
        o = t.getNavigableIndexes().filter(function (i) {
          return 0 <= i && i < t.slideCount
        });
      t.$slides.add(t.$slideTrack.find(".slick-cloned")).attr({
        "aria-hidden": "true",
        tabindex: "-1"
      }).find("a, input, button, select").attr({
        tabindex: "-1"
      }), null !== t.$dots && (t.$slides.not(t.$slideTrack.find(".slick-cloned")).each(function (i) {
        var e = o.indexOf(i);
        d(this).attr({
          role: "tabpanel",
          id: "slick-slide" + t.instanceUid + i,
          tabindex: -1
        }), -1 !== e && d(this).attr({
          "aria-describedby": "slick-slide-control" + t.instanceUid + e
        })
      }), t.$dots.attr("role", "tablist").find("li").each(function (i) {
        var e = o[i];
        d(this).attr({
          role: "presentation"
        }), d(this).find("button").first().attr({
          role: "tab",
          id: "slick-slide-control" + t.instanceUid + i,
          "aria-controls": "slick-slide" + t.instanceUid + e,
          "aria-label": i + 1 + " of " + s,
          "aria-selected": null,
          tabindex: "-1"
        })
      }).eq(t.currentSlide).find("button").attr({
        "aria-selected": "true",
        tabindex: "0"
      }).end());
      for (var i = t.currentSlide, e = i + t.options.slidesToShow; i < e; i++) t.$slides.eq(i).attr("tabindex", 0);
      t.activateADA()
    }, l.prototype.initArrowEvents = function () {
      var i = this;
      !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.off("click.slick").on("click.slick", {
        message: "previous"
      }, i.changeSlide), i.$nextArrow.off("click.slick").on("click.slick", {
        message: "next"
      }, i.changeSlide), !0 === i.options.accessibility && (i.$prevArrow.on("keydown.slick", i.keyHandler), i.$nextArrow.on("keydown.slick", i.keyHandler)))
    }, l.prototype.initDotEvents = function () {
      var i = this;
      !0 === i.options.dots && (d("li", i.$dots).on("click.slick", {
        message: "index"
      }, i.changeSlide), !0 === i.options.accessibility && i.$dots.on("keydown.slick", i.keyHandler)), !0 === i.options.dots && !0 === i.options.pauseOnDotsHover && d("li", i.$dots).on("mouseenter.slick", d.proxy(i.interrupt, i, !0)).on("mouseleave.slick", d.proxy(i.interrupt, i, !1))
    }, l.prototype.initSlideEvents = function () {
      var i = this;
      i.options.pauseOnHover && (i.$list.on("mouseenter.slick", d.proxy(i.interrupt, i, !0)), i.$list.on("mouseleave.slick", d.proxy(i.interrupt, i, !1)))
    }, l.prototype.initializeEvents = function () {
      var i = this;
      i.initArrowEvents(), i.initDotEvents(), i.initSlideEvents(), i.$list.on("touchstart.slick mousedown.slick", {
        action: "start"
      }, i.swipeHandler), i.$list.on("touchmove.slick mousemove.slick", {
        action: "move"
      }, i.swipeHandler), i.$list.on("touchend.slick mouseup.slick", {
        action: "end"
      }, i.swipeHandler), i.$list.on("touchcancel.slick mouseleave.slick", {
        action: "end"
      }, i.swipeHandler), i.$list.on("click.slick", i.clickHandler), d(document).on(i.visibilityChange, d.proxy(i.visibility, i)), !0 === i.options.accessibility && i.$list.on("keydown.slick", i.keyHandler), !0 === i.options.focusOnSelect && d(i.$slideTrack).children().on("click.slick", i.selectHandler), d(window).on("orientationchange.slick.slick-" + i.instanceUid, d.proxy(i.orientationChange, i)), d(window).on("resize.slick.slick-" + i.instanceUid, d.proxy(i.resize, i)), d("[draggable!=true]", i.$slideTrack).on("dragstart", i.preventDefault), d(window).on("load.slick.slick-" + i.instanceUid, i.setPosition), d(i.setPosition)
    }, l.prototype.initUI = function () {
      var i = this;
      !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.show(), i.$nextArrow.show()), !0 === i.options.dots && i.slideCount > i.options.slidesToShow && i.$dots.show()
    }, l.prototype.keyHandler = function (i) {
      var e = this;
      i.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === i.keyCode && !0 === e.options.accessibility ? e.changeSlide({
        data: {
          message: !0 === e.options.rtl ? "next" : "previous"
        }
      }) : 39 === i.keyCode && !0 === e.options.accessibility && e.changeSlide({
        data: {
          message: !0 === e.options.rtl ? "previous" : "next"
        }
      }))
    }, l.prototype.lazyLoad = function () {
      function i(i) {
        d("img[data-lazy]", i).each(function () {
          var i = d(this),
            e = d(this).attr("data-lazy"),
            t = d(this).attr("data-srcset"),
            s = d(this).attr("data-sizes") || n.$slider.attr("data-sizes"),
            o = document.createElement("img");
          o.onload = function () {
            i.animate({
              opacity: 0
            }, 100, function () {
              t && (i.attr("srcset", t), s && i.attr("sizes", s)), i.attr("src", e).animate({
                opacity: 1
              }, 200, function () {
                i.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")
              }), n.$slider.trigger("lazyLoaded", [n, i, e])
            })
          }, o.onerror = function () {
            i.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), n.$slider.trigger("lazyLoadError", [n, i, e])
          }, o.src = e
        })
      }
      var e, t, s, n = this;
      if (!0 === n.options.centerMode ? s = !0 === n.options.infinite ? (t = n.currentSlide + (n.options.slidesToShow / 2 + 1)) + n.options.slidesToShow + 2 : (t = Math.max(0, n.currentSlide - (n.options.slidesToShow / 2 + 1)), n.options.slidesToShow / 2 + 1 + 2 + n.currentSlide) : (t = n.options.infinite ? n.options.slidesToShow + n.currentSlide : n.currentSlide, s = Math.ceil(t + n.options.slidesToShow), !0 === n.options.fade && (0 < t && t--, s <= n.slideCount && s++)), e = n.$slider.find(".slick-slide").slice(t, s), "anticipated" === n.options.lazyLoad)
        for (var o = t - 1, l = s, r = n.$slider.find(".slick-slide"), a = 0; a < n.options.slidesToScroll; a++) o < 0 && (o = n.slideCount - 1), e = (e = e.add(r.eq(o))).add(r.eq(l)), o--, l++;
      i(e), n.slideCount <= n.options.slidesToShow ? i(n.$slider.find(".slick-slide")) : n.currentSlide >= n.slideCount - n.options.slidesToShow ? i(n.$slider.find(".slick-cloned").slice(0, n.options.slidesToShow)) : 0 === n.currentSlide && i(n.$slider.find(".slick-cloned").slice(-1 * n.options.slidesToShow))
    }, l.prototype.loadSlider = function () {
      var i = this;
      i.setPosition(), i.$slideTrack.css({
        opacity: 1
      }), i.$slider.removeClass("slick-loading"), i.initUI(), "progressive" === i.options.lazyLoad && i.progressiveLazyLoad()
    }, l.prototype.next = l.prototype.slickNext = function () {
      this.changeSlide({
        data: {
          message: "next"
        }
      })
    }, l.prototype.orientationChange = function () {
      this.checkResponsive(), this.setPosition()
    }, l.prototype.pause = l.prototype.slickPause = function () {
      this.autoPlayClear(), this.paused = !0
    }, l.prototype.play = l.prototype.slickPlay = function () {
      var i = this;
      i.autoPlay(), i.options.autoplay = !0, i.paused = !1, i.focussed = !1, i.interrupted = !1
    }, l.prototype.postSlide = function (i) {
      var e = this;
      e.unslicked || (e.$slider.trigger("afterChange", [e, i]), e.animating = !1, e.slideCount > e.options.slidesToShow && e.setPosition(), e.swipeLeft = null, e.options.autoplay && e.autoPlay(), !0 === e.options.accessibility && (e.initADA(), e.options.focusOnChange && d(e.$slides.get(e.currentSlide)).attr("tabindex", 0).focus()))
    }, l.prototype.prev = l.prototype.slickPrev = function () {
      this.changeSlide({
        data: {
          message: "previous"
        }
      })
    }, l.prototype.preventDefault = function (i) {
      i.preventDefault()
    }, l.prototype.progressiveLazyLoad = function (i) {
      i = i || 1;
      var e, t, s, o, n, l = this,
        r = d("img[data-lazy]", l.$slider);
      r.length ? (e = r.first(), t = e.attr("data-lazy"), s = e.attr("data-srcset"), o = e.attr("data-sizes") || l.$slider.attr("data-sizes"), (n = document.createElement("img")).onload = function () {
        s && (e.attr("srcset", s), o && e.attr("sizes", o)), e.attr("src", t).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), !0 === l.options.adaptiveHeight && l.setPosition(), l.$slider.trigger("lazyLoaded", [l, e, t]), l.progressiveLazyLoad()
      }, n.onerror = function () {
        i < 3 ? setTimeout(function () {
          l.progressiveLazyLoad(i + 1)
        }, 500) : (e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), l.$slider.trigger("lazyLoadError", [l, e, t]), l.progressiveLazyLoad())
      }, n.src = t) : l.$slider.trigger("allImagesLoaded", [l])
    }, l.prototype.refresh = function (i) {
      var e, t = this,
        s = t.slideCount - t.options.slidesToShow;
      !t.options.infinite && t.currentSlide > s && (t.currentSlide = s), t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0), e = t.currentSlide, t.destroy(!0), d.extend(t, t.initials, {
        currentSlide: e
      }), t.init(), i || t.changeSlide({
        data: {
          message: "index",
          index: e
        }
      }, !1)
    }, l.prototype.registerBreakpoints = function () {
      var i, e, t, s = this,
        o = s.options.responsive || null;
      if ("array" === d.type(o) && o.length) {
        for (i in s.respondTo = s.options.respondTo || "window", o)
          if (t = s.breakpoints.length - 1, o.hasOwnProperty(i)) {
            for (e = o[i].breakpoint; 0 <= t;) s.breakpoints[t] && s.breakpoints[t] === e && s.breakpoints.splice(t, 1), t--;
            s.breakpoints.push(e), s.breakpointSettings[e] = o[i].settings
          }
        s.breakpoints.sort(function (i, e) {
          return s.options.mobileFirst ? i - e : e - i
        })
      }
    }, l.prototype.reinit = function () {
      var i = this;
      i.$slides = i.$slideTrack.children(i.options.slide).addClass("slick-slide"), i.slideCount = i.$slides.length, i.currentSlide >= i.slideCount && 0 !== i.currentSlide && (i.currentSlide = i.currentSlide - i.options.slidesToScroll), i.slideCount <= i.options.slidesToShow && (i.currentSlide = 0), i.registerBreakpoints(), i.setProps(), i.setupInfinite(), i.buildArrows(), i.updateArrows(), i.initArrowEvents(), i.buildDots(), i.updateDots(), i.initDotEvents(), i.cleanUpSlideEvents(), i.initSlideEvents(), i.checkResponsive(!1, !0), !0 === i.options.focusOnSelect && d(i.$slideTrack).children().on("click.slick", i.selectHandler), i.setSlideClasses("number" == typeof i.currentSlide ? i.currentSlide : 0), i.setPosition(), i.focusHandler(), i.paused = !i.options.autoplay, i.autoPlay(), i.$slider.trigger("reInit", [i])
    }, l.prototype.resize = function () {
      var i = this;
      d(window).width() !== i.windowWidth && (clearTimeout(i.windowDelay), i.windowDelay = window.setTimeout(function () {
        i.windowWidth = d(window).width(), i.checkResponsive(), i.unslicked || i.setPosition()
      }, 50))
    }, l.prototype.removeSlide = l.prototype.slickRemove = function (i, e, t) {
      var s = this;
      if (i = "boolean" == typeof i ? !0 === (e = i) ? 0 : s.slideCount - 1 : !0 === e ? --i : i, s.slideCount < 1 || i < 0 || i > s.slideCount - 1) return !1;
      s.unload(), !0 === t ? s.$slideTrack.children().remove() : s.$slideTrack.children(this.options.slide).eq(i).remove(), s.$slides = s.$slideTrack.children(this.options.slide), s.$slideTrack.children(this.options.slide).detach(), s.$slideTrack.append(s.$slides), s.$slidesCache = s.$slides, s.reinit()
    }, l.prototype.setCSS = function (i) {
      var e, t, s = this,
        o = {};
      !0 === s.options.rtl && (i = -i), e = "left" == s.positionProp ? Math.ceil(i) + "px" : "0px", t = "top" == s.positionProp ? Math.ceil(i) + "px" : "0px", o[s.positionProp] = i, !1 === s.transformsEnabled || (!(o = {}) === s.cssTransitions ? o[s.animType] = "translate(" + e + ", " + t + ")" : o[s.animType] = "translate3d(" + e + ", " + t + ", 0px)"), s.$slideTrack.css(o)
    }, l.prototype.setDimensions = function () {
      var i = this;
      !1 === i.options.vertical ? !0 === i.options.centerMode && i.$list.css({
        padding: "0px " + i.options.centerPadding
      }) : (i.$list.height(i.$slides.first().outerHeight(!0) * i.options.slidesToShow), !0 === i.options.centerMode && i.$list.css({
        padding: i.options.centerPadding + " 0px"
      })), i.listWidth = i.$list.width(), i.listHeight = i.$list.height(), !1 === i.options.vertical && !1 === i.options.variableWidth ? (i.slideWidth = Math.ceil(i.listWidth / i.options.slidesToShow), i.$slideTrack.width(Math.ceil(i.slideWidth * i.$slideTrack.children(".slick-slide").length))) : !0 === i.options.variableWidth ? i.$slideTrack.width(5e3 * i.slideCount) : (i.slideWidth = Math.ceil(i.listWidth), i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0) * i.$slideTrack.children(".slick-slide").length)));
      var e = i.$slides.first().outerWidth(!0) - i.$slides.first().width();
      !1 === i.options.variableWidth && i.$slideTrack.children(".slick-slide").width(i.slideWidth - e)
    }, l.prototype.setFade = function () {
      var t, s = this;
      s.$slides.each(function (i, e) {
        t = s.slideWidth * i * -1, !0 === s.options.rtl ? d(e).css({
          position: "relative",
          right: t,
          top: 0,
          zIndex: s.options.zIndex - 2,
          opacity: 0
        }) : d(e).css({
          position: "relative",
          left: t,
          top: 0,
          zIndex: s.options.zIndex - 2,
          opacity: 0
        })
      }), s.$slides.eq(s.currentSlide).css({
        zIndex: s.options.zIndex - 1,
        opacity: 1
      })
    }, l.prototype.setHeight = function () {
      var i, e = this;
      1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical && (i = e.$slides.eq(e.currentSlide).outerHeight(!0), e.$list.css("height", i))
    }, l.prototype.setOption = l.prototype.slickSetOption = function () {
      var i, e, t, s, o, n = this,
        l = !1;
      if ("object" === d.type(arguments[0]) ? (t = arguments[0], l = arguments[1], o = "multiple") : "string" === d.type(arguments[0]) && (s = arguments[1], l = arguments[2], "responsive" === (t = arguments[0]) && "array" === d.type(arguments[1]) ? o = "responsive" : void 0 !== arguments[1] && (o = "single")), "single" === o) n.options[t] = s;
      else if ("multiple" === o) d.each(t, function (i, e) {
        n.options[i] = e
      });
      else if ("responsive" === o)
        for (e in s)
          if ("array" !== d.type(n.options.responsive)) n.options.responsive = [s[e]];
          else {
            for (i = n.options.responsive.length - 1; 0 <= i;) n.options.responsive[i].breakpoint === s[e].breakpoint && n.options.responsive.splice(i, 1), i--;
            n.options.responsive.push(s[e])
          }
      l && (n.unload(), n.reinit())
    }, l.prototype.setPosition = function () {
      var i = this;
      i.setDimensions(), i.setHeight(), !1 === i.options.fade ? i.setCSS(i.getLeft(i.currentSlide)) : i.setFade(), i.$slider.trigger("setPosition", [i])
    }, l.prototype.setProps = function () {
      var i = this,
        e = document.body.style;
      i.positionProp = !0 === i.options.vertical ? "top" : "left", "top" === i.positionProp ? i.$slider.addClass("slick-vertical") : i.$slider.removeClass("slick-vertical"), void 0 === e.WebkitTransition && void 0 === e.MozTransition && void 0 === e.msTransition || !0 === i.options.useCSS && (i.cssTransitions = !0), i.options.fade && ("number" == typeof i.options.zIndex ? i.options.zIndex < 3 && (i.options.zIndex = 3) : i.options.zIndex = i.defaults.zIndex), void 0 !== e.OTransform && (i.animType = "OTransform", i.transformType = "-o-transform", i.transitionType = "OTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)), void 0 !== e.MozTransform && (i.animType = "MozTransform", i.transformType = "-moz-transform", i.transitionType = "MozTransition", void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (i.animType = !1)), void 0 !== e.webkitTransform && (i.animType = "webkitTransform", i.transformType = "-webkit-transform", i.transitionType = "webkitTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)), void 0 !== e.msTransform && (i.animType = "msTransform", i.transformType = "-ms-transform", i.transitionType = "msTransition", void 0 === e.msTransform && (i.animType = !1)), void 0 !== e.transform && !1 !== i.animType && (i.animType = "transform", i.transformType = "transform", i.transitionType = "transition"), i.transformsEnabled = i.options.useTransform && null !== i.animType && !1 !== i.animType
    }, l.prototype.setSlideClasses = function (i) {
      var e, t, s, o, n = this,
        l = n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true");
      n.$slides.eq(i).addClass("slick-current"), !0 === n.options.centerMode ? (s = n.options.slidesToShow % 2 == 0 ? 1 : 0, o = Math.floor(n.options.slidesToShow / 2), !0 === n.options.infinite && (o <= i && i <= n.slideCount - 1 - o ? n.$slides.slice(i - o + s, i + o + 1).addClass("slick-active").attr("aria-hidden", "false") : (e = n.options.slidesToShow + i, l.slice(e - o + 1 + s, e + o + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === i ? l.eq(l.length - 1 - n.options.slidesToShow).addClass("slick-center") : i === n.slideCount - 1 && l.eq(n.options.slidesToShow).addClass("slick-center")), n.$slides.eq(i).addClass("slick-center")) : 0 <= i && i <= n.slideCount - n.options.slidesToShow ? n.$slides.slice(i, i + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : l.length <= n.options.slidesToShow ? l.addClass("slick-active").attr("aria-hidden", "false") : (t = n.slideCount % n.options.slidesToShow, e = !0 === n.options.infinite ? n.options.slidesToShow + i : i, n.options.slidesToShow == n.options.slidesToScroll && n.slideCount - i < n.options.slidesToShow ? l.slice(e - (n.options.slidesToShow - t), e + t).addClass("slick-active").attr("aria-hidden", "false") : l.slice(e, e + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" !== n.options.lazyLoad && "anticipated" !== n.options.lazyLoad || n.lazyLoad()
    }, l.prototype.setupInfinite = function () {
      var i, e, t, s = this;
      if (!0 === s.options.fade && (s.options.centerMode = !1), !0 === s.options.infinite && !1 === s.options.fade && (e = null, s.slideCount > s.options.slidesToShow)) {
        for (t = !0 === s.options.centerMode ? s.options.slidesToShow + 1 : s.options.slidesToShow, i = s.slideCount; i > s.slideCount - t; --i) e = i - 1, d(s.$slides[e]).clone(!0).attr("id", "").attr("data-slick-index", e - s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");
        for (i = 0; i < t + s.slideCount; i += 1) e = i, d(s.$slides[e]).clone(!0).attr("id", "").attr("data-slick-index", e + s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");
        s.$slideTrack.find(".slick-cloned").find("[id]").each(function () {
          d(this).attr("id", "")
        })
      }
    }, l.prototype.interrupt = function (i) {
      i || this.autoPlay(), this.interrupted = i
    }, l.prototype.selectHandler = function (i) {
      var e = d(i.target).is(".slick-slide") ? d(i.target) : d(i.target).parents(".slick-slide"),
        t = (t = parseInt(e.attr("data-slick-index"))) || 0;
      this.slideCount <= this.options.slidesToShow ? this.slideHandler(t, !1, !0) : this.slideHandler(t)
    }, l.prototype.slideHandler = function (i, e, t) {
      var s, o, n, l, r, a = null,
        d = this;
      if (e = e || !1, !(!0 === d.animating && !0 === d.options.waitForAnimate || !0 === d.options.fade && d.currentSlide === i))
        if (!1 === e && d.asNavFor(i), s = i, a = d.getLeft(s), l = d.getLeft(d.currentSlide), d.currentLeft = null === d.swipeLeft ? l : d.swipeLeft, !1 === d.options.infinite && !1 === d.options.centerMode && (i < 0 || i > d.getDotCount() * d.options.slidesToScroll)) !1 === d.options.fade && (s = d.currentSlide, !0 !== t ? d.animateSlide(l, function () {
          d.postSlide(s)
        }) : d.postSlide(s));
        else if (!1 === d.options.infinite && !0 === d.options.centerMode && (i < 0 || i > d.slideCount - d.options.slidesToScroll)) !1 === d.options.fade && (s = d.currentSlide, !0 !== t ? d.animateSlide(l, function () {
        d.postSlide(s)
      }) : d.postSlide(s));
      else {
        if (d.options.autoplay && clearInterval(d.autoPlayTimer), o = s < 0 ? d.slideCount % d.options.slidesToScroll != 0 ? d.slideCount - d.slideCount % d.options.slidesToScroll : d.slideCount + s : s >= d.slideCount ? d.slideCount % d.options.slidesToScroll != 0 ? 0 : s - d.slideCount : s, d.animating = !0, d.$slider.trigger("beforeChange", [d, d.currentSlide, o]), n = d.currentSlide, d.currentSlide = o, d.setSlideClasses(d.currentSlide), d.options.asNavFor && (r = (r = d.getNavTarget()).slick("getSlick")).slideCount <= r.options.slidesToShow && r.setSlideClasses(d.currentSlide), d.updateDots(), d.updateArrows(), !0 === d.options.fade) return !0 !== t ? (d.fadeSlideOut(n), d.fadeSlide(o, function () {
          d.postSlide(o)
        })) : d.postSlide(o), void d.animateHeight();
        !0 !== t ? d.animateSlide(a, function () {
          d.postSlide(o)
        }) : d.postSlide(o)
      }
    }, l.prototype.startLoad = function () {
      var i = this;
      !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.hide(), i.$nextArrow.hide()), !0 === i.options.dots && i.slideCount > i.options.slidesToShow && i.$dots.hide(), i.$slider.addClass("slick-loading")
    }, l.prototype.swipeDirection = function () {
      var i, e = this,
        t = e.touchObject.startX - e.touchObject.curX,
        s = e.touchObject.startY - e.touchObject.curY,
        o = Math.atan2(s, t);
      return (i = Math.round(180 * o / Math.PI)) < 0 && (i = 360 - Math.abs(i)), i <= 45 && 0 <= i || i <= 360 && 315 <= i ? !1 === e.options.rtl ? "left" : "right" : 135 <= i && i <= 225 ? !1 === e.options.rtl ? "right" : "left" : !0 === e.options.verticalSwiping ? 35 <= i && i <= 135 ? "down" : "up" : "vertical"
    }, l.prototype.swipeEnd = function (i) {
      var e, t, s = this;
      if (s.dragging = !1, s.swiping = !1, s.scrolling) return s.scrolling = !1;
      if (s.interrupted = !1, s.shouldClick = !(10 < s.touchObject.swipeLength), void 0 === s.touchObject.curX) return !1;
      if (!0 === s.touchObject.edgeHit && s.$slider.trigger("edge", [s, s.swipeDirection()]), s.touchObject.swipeLength >= s.touchObject.minSwipe) {
        switch (t = s.swipeDirection()) {
        case "left":
        case "down":
          e = s.options.swipeToSlide ? s.checkNavigable(s.currentSlide + s.getSlideCount()) : s.currentSlide + s.getSlideCount(), s.currentDirection = 0;
          break;
        case "right":
        case "up":
          e = s.options.swipeToSlide ? s.checkNavigable(s.currentSlide - s.getSlideCount()) : s.currentSlide - s.getSlideCount(), s.currentDirection = 1
        }
        "vertical" != t && (s.slideHandler(e), s.touchObject = {}, s.$slider.trigger("swipe", [s, t]))
      } else s.touchObject.startX !== s.touchObject.curX && (s.slideHandler(s.currentSlide), s.touchObject = {})
    }, l.prototype.swipeHandler = function (i) {
      var e = this;
      if (!(!1 === e.options.swipe || "ontouchend" in document && !1 === e.options.swipe || !1 === e.options.draggable && -1 !== i.type.indexOf("mouse"))) switch (e.touchObject.fingerCount = i.originalEvent && void 0 !== i.originalEvent.touches ? i.originalEvent.touches.length : 1, e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold, !0 === e.options.verticalSwiping && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold), i.data.action) {
      case "start":
        e.swipeStart(i);
        break;
      case "move":
        e.swipeMove(i);
        break;
      case "end":
        e.swipeEnd(i)
      }
    }, l.prototype.swipeMove = function (i) {
      var e, t, s, o, n, l = this,
        r = void 0 !== i.originalEvent ? i.originalEvent.touches : null;
      return !(!l.dragging || l.scrolling || r && 1 !== r.length) && (e = l.getLeft(l.currentSlide), l.touchObject.curX = void 0 !== r ? r[0].pageX : i.clientX, l.touchObject.curY = void 0 !== r ? r[0].pageY : i.clientY, l.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(l.touchObject.curX - l.touchObject.startX, 2))), n = Math.round(Math.sqrt(Math.pow(l.touchObject.curY - l.touchObject.startY, 2))), !l.options.verticalSwiping && !l.swiping && 4 < n ? !(l.scrolling = !0) : (!0 === l.options.verticalSwiping && (l.touchObject.swipeLength = n), t = l.swipeDirection(), void 0 !== i.originalEvent && 4 < l.touchObject.swipeLength && (l.swiping = !0, i.preventDefault()), o = (!1 === l.options.rtl ? 1 : -1) * (l.touchObject.curX > l.touchObject.startX ? 1 : -1), !0 === l.options.verticalSwiping && (o = l.touchObject.curY > l.touchObject.startY ? 1 : -1), s = l.touchObject.swipeLength, (l.touchObject.edgeHit = !1) === l.options.infinite && (0 === l.currentSlide && "right" === t || l.currentSlide >= l.getDotCount() && "left" === t) && (s = l.touchObject.swipeLength * l.options.edgeFriction, l.touchObject.edgeHit = !0), !1 === l.options.vertical ? l.swipeLeft = e + s * o : l.swipeLeft = e + s * (l.$list.height() / l.listWidth) * o, !0 === l.options.verticalSwiping && (l.swipeLeft = e + s * o), !0 !== l.options.fade && !1 !== l.options.touchMove && (!0 === l.animating ? (l.swipeLeft = null, !1) : void l.setCSS(l.swipeLeft))))
    }, l.prototype.swipeStart = function (i) {
      var e, t = this;
      if (t.interrupted = !0, 1 !== t.touchObject.fingerCount || t.slideCount <= t.options.slidesToShow) return !(t.touchObject = {});
      void 0 !== i.originalEvent && void 0 !== i.originalEvent.touches && (e = i.originalEvent.touches[0]), t.touchObject.startX = t.touchObject.curX = void 0 !== e ? e.pageX : i.clientX, t.touchObject.startY = t.touchObject.curY = void 0 !== e ? e.pageY : i.clientY, t.dragging = !0
    }, l.prototype.unfilterSlides = l.prototype.slickUnfilter = function () {
      var i = this;
      null !== i.$slidesCache && (i.unload(), i.$slideTrack.children(this.options.slide).detach(), i.$slidesCache.appendTo(i.$slideTrack), i.reinit())
    }, l.prototype.unload = function () {
      var i = this;
      d(".slick-cloned", i.$slider).remove(), i.$dots && i.$dots.remove(), i.$prevArrow && i.htmlExpr.test(i.options.prevArrow) && i.$prevArrow.remove(), i.$nextArrow && i.htmlExpr.test(i.options.nextArrow) && i.$nextArrow.remove(), i.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
    }, l.prototype.unslick = function (i) {
      this.$slider.trigger("unslick", [this, i]), this.destroy()
    }, l.prototype.updateArrows = function () {
      var i = this;
      Math.floor(i.options.slidesToShow / 2), !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && !i.options.infinite && (i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === i.currentSlide ? (i.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : (i.currentSlide >= i.slideCount - i.options.slidesToShow && !1 === i.options.centerMode || i.currentSlide >= i.slideCount - 1 && !0 === i.options.centerMode) && (i.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
    }, l.prototype.updateDots = function () {
      var i = this;
      null !== i.$dots && (i.$dots.find("li").removeClass("slick-active").end(), i.$dots.find("li").eq(Math.floor(i.currentSlide / i.options.slidesToScroll)).addClass("slick-active"))
    }, l.prototype.visibility = function () {
      this.options.autoplay && (document[this.hidden] ? this.interrupted = !0 : this.interrupted = !1)
    }, d.fn.slick = function () {
      for (var i, e = this, t = arguments[0], s = Array.prototype.slice.call(arguments, 1), o = e.length, n = 0; n < o; n++)
        if ("object" == _typeof(t) || void 0 === t ? e[n].slick = new l(e[n], t) : i = e[n].slick[t].apply(e[n].slick, s), void 0 !== i) return i;
      return e
    }
  }, "function" == typeof define && define.amd ? define(["jquery"], i) : "undefined" != typeof exports ? module.exports = i(require("jquery")) : i(jQuery), $(".js_pagescroll").on("click", function (i) {
    var e = $(i.currentTarget).attr("href"),
      t = $(e).offset().top;
    return $("body,html").animate({
      scrollTop: t
    }, 400), !1
  }), $(".js_modalbtn").on("click", function () {
    setTimeout(function () {
      $(".js_slider").slick({
        slidesToShow: 1,
        autoplay: !1,
        fade: !0,
        dots: !0,
        dotsClass: "slider_dots",
        arrows: !1,
        customPaging: function (i, e) {
          return "<b>" + i.$slides.eq(e).html() + "</b>"
        }
      })
    }, 100)
  }), $(".js_modalclose").on("click", function () {
    $(".js_slider").slick("unslick")
  })
}();