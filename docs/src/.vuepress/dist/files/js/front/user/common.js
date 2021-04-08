/* ==========================================================
[ 目次 ]

<body>クラス設定
スムース スクロール
cocoen
Slick
autoheight
Color Toggle
Show Toggle
Popup
Syntax highlighting

========================================================== */

/* ---------------------------------------------
*   <body>クラス設定
--------------------------------------------- */
/**
 * <body>要素に、ユーザーのOS・デバイスとブラウザ等に関数情報をクラスとして付与する
 * OS・デバイス: ios, iphone, ipad, android, androidphone, androidtablet, windows, mac
 * ブラウザ: ie, edge, chrome, firefox, safari
 */
$(function () {
    'use strict';

    $('body').addClass(function () {
        var bodyClasses = '';

        // プラットフォーム判定
        if (is.ios()) {
            bodyClasses += ' ios';

            if (is.iphone()) {
                bodyClasses += ' iphone';
            } else if (is.ipad()) {
                bodyClasses += ' ipad';
            }
        } else if (is.android()) {
            bodyClasses += ' android';

            if (is.androidPhone()) {
                bodyClasses += ' androidphone';
            } else if (is.androidTablet()) {
                bodyClasses += ' androidtablet';
            }
        } else if (is.windows()) {
            bodyClasses += ' windows';
        } else if (is.mac()) {
            bodyClasses += ' mac';
        }

        // ブラウザ判定
        if (is.ie()) {
            bodyClasses += ' ie';

            if (is.ie(10)) {
                bodyClasses += ' ie10';
            } else if (is.ie(11)) {
                bodyClasses += ' ie11';
            }
        } else if (is.edge()) {
            bodyClasses += ' edge';
        } else if (is.chrome()) {
            bodyClasses += ' chrome';
        } else if (is.firefox()) {
            bodyClasses += ' firefox';
        } else if (is.safari()) {
            bodyClasses += ' safari';
        }

        return bodyClasses;
    });
});

/* ---------------------------------------------
*   スムース スクロール
--------------------------------------------- */
$(function () {
    'use strict';

    $('a[href^="#"]').on('click.smoothScroll', function () {
        var href = $(this).attr('href');
        var $target;

        if (is.ie(9) || is.ie(10)) {
            $target = $(href === '#' ? 'body' : href);
        } else {
            $target = $(href === '#' ? 'html' : href);
        }

        var offset = 0;

        // スクロール位置をずらす場合は、
        // ここで条件分岐等を行う

        $target.velocity('scroll', {
            duration: 400,
            easing: 'swing',
            offset: offset
        });

        return false;
    });
});

/* ---------------------------------------------
*   cocoen
--------------------------------------------- */
$(function () {
    'use strict';
    if ($('.cocoen').length > 0) {
        $('.cocoen').cocoen();
    }
});

/* ---------------------------------------------
*   Slick
--------------------------------------------- */
$(function () {
    'use strict';

    $('.js-slider-img').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.js-slider-block',
        centerPadding: '0',
        swipe: false,
        touchMove: false
    });

    $('.js-slider-block').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.js-slider-img',
        dots: true,
        centerMode: true,
        focusOnSelect: true,
        centerPadding: '0',
        swipe: false,
        touchMove: false
    });
});

/* ---------------------------------------------
*   autoheight
--------------------------------------------- */
$(function () {
    var $target = $('.js-autoheight-target');

    autoHeight();

    $(window).on('resize', function () {
        autoHeight();
    });

    function autoHeight() {
        heightArry = [];
        $target.css('height', '');

        $target.each(function () {
            heightArry.push($(this).innerHeight());
        });

        var maxH = Math.max.apply(null, heightArry);

        $target.each(function () {
            $(this).css('height', maxH + 'px');
        });
    }
});

/* ---------------------------------------------
*   Color Toggle
--------------------------------------------- */
$(window).on('load', function () {
    'use strict';
    var toggle = '.js-color-toggle',
        activeClass = 'is-dark';
    console.log(toggle)
    $(toggle).on('click', function () {
        console.log('heres')
        if ($(this).prop('checked') == true) {
            // localStorage にデータを保存する
            $('body').addClass(activeClass);
            localStorage.setItem('colorMode', 'dark');
        } else {
            $('body').removeClass(activeClass);
            // localStorage に保存したデータを削除する
            localStorage.removeItem('colorMode');
        }
    });

   
});

/* ---------------------------------------------
*   Show Toggle
--------------------------------------------- */
$(function () {
    'use strict';
    var activeClass = 'is-show';

    $('.js-show-toggle-trigger').on('click', function () {
        $(this).addClass(activeClass);
        $(this)
            .closest('.js-show-toggle-scope')
            .find('.js-show-toggle-target')
            .toggleClass(activeClass);
    });
});

/* ---------------------------------------------
*   Popup
--------------------------------------------- */
$(function () {
    'use strict';

    $('.js-mfp-iframe').magnificPopup({
        type: 'iframe'
    });
});

/* ---------------------------------------------
*   Syntax highlighting
--------------------------------------------- */
window.addEventListener(
    'DOMContentLoaded',
    function () {
        var elements = document.getElementsByTagName('code');
        var l = elements.length;
        for (var i = 0; i < l; i++) {
            var el = elements[i];
            hljs.highlightBlock(el);
            if (el.parentNode.tagName.toLowerCase() != 'pre') {
                el.style.display = 'inline';
                el.style.margin = '0 2px';
                el.style.padding = '1px 3px';
            }
        }
    },
    false
);

(function (d) {
    if (!window.getSelection) {
        return;
    }
    var btn = d.createElement('button');
    btn.id = 'selectPre';
    btn.textContent = 'COPY';
    btn.addEventListener('click', selectPre, false);
    function selectPre() {
        var sel = window.getSelection();
        var pre = this.parentNode;
        pre.removeChild(btn);
        sel.selectAllChildren(pre);
        Object.assign(pre, pre.childNodes.length - 1);
        d.execCommand('copy');
        alert('copied!');
    }
    var pres = d.getElementsByTagName('code');
    for (var i = pres.length; i--; ) {
        pres[i].addEventListener('mouseover', addBtn, false);
    }
    function addBtn(e) {
        if (this === addBtn.ele) return; // not to addBtn if already
        this.appendChild(btn);
        return (addBtn.ele = this);
    }
})(document);

/* ---------------------------------------------
*   クリップボードにコピー
--------------------------------------------- */
$(function () {
    'use strict';

    $('.js-copy-trigger').on('click', selectPre);

    function selectPre() {
        var sel = window.getSelection();
        var pre = this.parentNode;
        sel.selectAllChildren(pre);
        console.log(pre);
        Object.assign(pre, pre.childNodes.length - 1);
        document.execCommand('copy');
        alert('copied!');
    }
});

/* ---------------------------------------------
*   Sidebar : headerを超えたらfixed / footerの直上で固定
--------------------------------------------- */
$(function () {
    'use strict';
    var sidebar = '.sidebar__container',
        target = '.footer', // footerが停止する要素
        threshold = $('.header-docs').innerHeight(), // 表示が切り替わる(フェード)スクロール量(任意)
        fixedClass = 'is-fixed',
        stopClass = 'is-stop';

    sidebarFnc();

    console.log($(sidebar).innerHeight())
    console.log($(sidebar))

    $(window).on('scroll', function () {
        sidebarFnc();
    });

    function sidebarFnc() {
        var windowHeight = $(window).height(), // 画面の高さ
            st = $(window).scrollTop(); // スクロール量

        // フェード
        if (st > threshold) {
            $(sidebar).addClass(fixedClass);
        } else {
            $(sidebar).removeClass(fixedClass);
        }

        var scrollSet = st + $(sidebar).innerHeight(),
            targetOffset = $(target).offset().top;

        if (scrollSet > targetOffset) {
            $(sidebar).addClass(stopClass);
        } else {
            $(sidebar).removeClass(stopClass);
        }
    }
});
