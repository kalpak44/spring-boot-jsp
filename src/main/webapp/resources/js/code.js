var _tmr = _tmr || [];
(function () {
    function n(a, b, c) {
        a.addEventListener ? a.addEventListener(b, c, !1) : a.attachEvent && a.attachEvent("on" + b, c)
    }

    function t(a, b, c) {
        a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent("on" + b, c)
    }

    function I(a) {
        (new Image).src = p(a, !0, !1, !1) + ";e=" + escape("detect")
    }

    function e() {
    }

    function J(a) {
        if (a && !u && "id" in a && "type" in a && ("pageView" == a.type || "reachGoal" == a.type || "sendEvent" == a.type)) u = a.id
    }

    function C(a) {
        return a || "https:" == document.location.protocol ? "https:" : "http:"
    }

    function W(a) {
        return (a =
            !v ? void 0 : v[a]) && D ? a - D : void 0
    }

    function p(a, b, c, d) {
        var k = "id" in a ? a.id : u, e = "url" in a ? a.url : location.href,
            f = "referrer" in a ? a.referrer : document.referrer, g = "title" in a ? a.title : document.title;
        b = C(r) + "//top-fwz1.mail.ru" + (b ? "/tracker" : "/counter") + "?js=13" + (k ? ";id=" + escape(k) : "") + (e ? ";u=" + escape(e) : "") + (f ? ";r=" + escape(f) : "") + ("start" in a && 0 < a.start ? ";st=" + escape(a.start) : "") + ("gender" in a ? ";gender=" + escape(a.gender) : "") + ("age" in a ? ";age=" + escape(a.age) : "") + ("pid" in a ? ";pid=" + escape(a.pid) : "") + ("userid" in
            a ? ";userid=" + escape(a.userid) : "") + (d && g ? ";title=" + encodeURIComponent(g) : "") + ((E = window.screen) ? ";s=" + E.width + "*" + E.height : "") + ";vp=";
        k = d = 0;
        document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight) ? (d = document.documentElement.clientWidth, k = document.documentElement.clientHeight) : "number" == typeof window.innerWidth && (d = window.innerWidth, k = window.innerHeight);
        b = b + ("" + d + "*" + k) + ";touch=" + X + ";hds=" + Y + ";flash=" + F + ";sid=" + K + ";ver=" + L;
        if (c) {
            if (!v || !G) c = ""; else {
                c =
                    [];
                c.push(G.type);
                c.push(G.redirectCount);
                c.push(D);
                for (d = 0; d < M.length; d++)c.push(W(M[d]));
                c = c.join("/")
            }
            c = ";nt=" + c
        } else c = "";
        c = b + c + ("device" in a ? ";device=" + escape(a.device) : "");
        var h;
        if ("params" in a) {
            b = escape;
            if (a = a.params)if (d = typeof a, "number" === d || "boolean" === d || "string" === d || a.nodeType || a === a.window) h = ""; else {
                k = [];
                for (h in a)if (a.hasOwnProperty(h)) {
                    e = a[h];
                    d = typeof e;
                    if ("string" === d) e = '"' + e + '"'; else if (!("number" === d || "boolean" === d))continue;
                    k.push('"' + h + '":' + e)
                }
                h = !k.length ? "" : "{" + k.join(",") +
                    "}"
            } else h = "";
            h = ";params=" + b(h)
        } else h = "";
        return c + h + ";_=" + Math.random()
    }

    function N(a, b) {
        return C(r) + "//top-fwz1.mail.ru/tracker?js=13;id=" + a[0] + ";e=" + escape(b) + ";sid=" + K + ";ids=" + a.join() + ";ver=" + L + ";_=" + Math.random()
    }

    function Z() {
        if (!O)for (var a = 0; a < q.length; a++) {
            var b = q[a];
            (new Image).src = p(b, !0, !1, !0) + ";e=" + escape("PVT/15")
        }
    }

    function $() {
        if (!P && !w) {
            w = !0;
            for (var a = 0; a < q.length; a++)I(q[a])
        }
    }

    function x() {
        document.addEventListener ? (t(document, "DOMContentLoaded", x), _tmr.onready()) : document.attachEvent &&
            "complete" === document.readyState && (t(document, "readystatechange", x), _tmr.onready())
    }

    function Q() {
        t(window, "load", Q);
        _tmr.onready();
        _tmr.onload()
    }

    function y() {
        t(window, "unload", y);
        t(window, "beforeunload", y);
        _tmr.unload()
    }

    if ("[object Array]" === Object.prototype.toString.call(_tmr)) {
        var g = window, f = navigator, E, w = !1, aa = function () {
                function a(a) {
                    var c = document.createElement("div");
                    c.setAttribute("class", String.fromCharCode(97, 100, 118, 98, 108, 111, 99, 107, 32, 97, 100, 118, 101, 114, 116, 98, 108, 111, 99, 107, 32, 97, 109,
                        109, 98, 108, 111, 99, 107, 32, 98, 45, 98, 97, 110, 110, 101, 114, 32, 98, 45, 109, 101, 100, 105, 97, 45, 98, 97, 110, 110, 101, 114, 32, 112, 117, 98, 95, 51, 48, 48, 120, 50, 53, 48, 32, 112, 117, 98, 95, 51, 48, 48, 120, 50, 53, 48, 109, 32, 109, 101, 100, 105, 117, 109, 95, 114, 101, 99, 116, 97, 110, 103, 108, 101, 95, 51, 48, 48, 95, 50, 53, 48, 32, 112, 117, 98, 95, 55, 50, 56, 120, 57, 48, 32, 108, 101, 97, 100, 101, 114, 98, 111, 97, 114, 100, 95, 55, 50, 56, 95, 57, 48, 32, 119, 105, 100, 101, 95, 115, 107, 121, 115, 99, 114, 97, 112, 101, 114, 95, 49, 54, 48, 95, 54, 48, 48, 32, 119, 105, 100, 101, 95, 115, 107, 121, 115, 99,
                        114, 97, 112, 101, 114, 95, 49, 54, 48, 120, 54, 48, 48, 32, 116, 101, 120, 116, 45, 97, 100, 32, 116, 101, 120, 116, 65, 100, 32, 116, 101, 120, 116, 95, 97, 100, 32, 116, 101, 120, 116, 95, 97, 100, 115, 32, 116, 101, 120, 116, 45, 97, 100, 115, 32, 116, 101, 120, 116, 45, 97, 100, 45, 108, 105, 110, 107, 115, 32, 97, 100, 95, 116, 101, 120, 116, 32, 97, 100, 95, 116, 101, 120, 116, 32, 98, 97, 110, 110, 101, 114, 95, 116, 101, 120, 116, 32, 116, 101, 120, 116, 45, 98, 97, 110, 110, 101, 114, 32, 98, 45, 114, 98));
                    c.setAttribute("style", "position: absolute !important; top: -9999px !important; left: -9999px !important; width: 1px !important; height: 1px !important;");
                    this.bait = document.body.appendChild(c);
                    this.bait.offsetParent;
                    this.bait.offsetHeight;
                    this.bait.offsetLeft;
                    this.bait.offsetTop;
                    this.bait.offsetWidth;
                    this.bait.clientHeight;
                    this.bait.clientWidth;
                    this.loopNumber = 0;
                    this.fn = a || null;
                    var d = this;
                    setTimeout(function () {
                        d._checkBait.call(d)
                    }, 1)
                }

                a.prototype._checkBait = function () {
                    if (w) this._stop(); else {
                        var a = !1;
                        null !== document.body.getAttribute("abp") || null === this.bait.offsetParent || 0 == this.bait.offsetHeight || 0 == this.bait.offsetLeft || 0 == this.bait.offsetTop || 0 ==
                        this.bait.offsetWidth || 0 == this.bait.clientHeight || 0 == this.bait.clientWidth ? a = !0 : void 0 !== window.getComputedStyle && (a = window.getComputedStyle(this.bait, null), a = "none" == a.getPropertyValue("display") || "hidden" == a.getPropertyValue("visibility"));
                        (!0 === a || 10 <= ++this.loopNumber) && this._stop();
                        if (a && this.fn)try {
                            this.fn()
                        } catch (c) {
                        } else if (!a && 10 > this.loopNumber) {
                            var d = this;
                            setTimeout(function () {
                                d._checkBait.call(d)
                            }, 50 * this.loopNumber)
                        }
                    }
                };
                a.prototype._stop = function () {
                    try {
                        document.body.removeChild(this.bait)
                    } catch (a) {
                    }
                };
                return function (b) {
                    new a(b)
                }
            }(), L = 60, z = [], H = 0, A = 0, K = "xxxxxxxxxxxxxxxx".replace(/[x]/g, function (a) {
                return (16 * Math.random() | 0).toString(16)
            }), B = 0, u = 0, q = [], l = [],
            m = "string" === typeof location.hostname && (-1 != location.hostname.search(/^odnoklassniki\.ru$/) || -1 != location.hostname.search(/\.odnoklassniki\.ru$/) || -1 != location.hostname.search(/^ok\.ru$/) || -1 != location.hostname.search(/\.ok\.ru$/)),
            r = "string" === typeof location.hostname && (-1 != location.hostname.search(/^vk\.com$/) || -1 != location.hostname.search(/\.vk\.com$/)),
            R = m || r, O = m || r, ba = m || r, S = m || r, P = !1,
            X = "ontouchstart" in g || 1 < (f.maxTouchPoints || f.msMaxTouchPoints) ? "1" : "0",
            Y = window.devicePixelRatio || 0, F = "";
        if (f.plugins && f.plugins["Shockwave Flash"]) F = f.plugins["Shockwave Flash"].description.split(" ")[2]; else if (window.ActiveXObject)try {
            var s = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"), s = s.GetVariable("$version"),
                s = s.split(" ")[1].split(","), F = s[0] + "." + s[1]
        } catch (ca) {
        }
        var g = window.performance || window.mozPerformance || window.msPerformance || window.webkitPerformance ||
                {}, v = g.timing || {}, G = g.navigation || {},
            M = "unloadEventStart unloadEventEnd redirectStart redirectEnd fetchStart domainLookupStart domainLookupEnd connectStart connectEnd secureConnectionStart requestStart responseStart responseEnd domLoading domInteractive domContentLoadedEventStart domContentLoadedEventEnd domComplete loadEventStart loadEventEnd".split(" "),
            D = !v ? void 0 : v.navigationStart;
        e.prototype.pageView = function (a) {
            "start" in a && z.push(a);
            (new Image).src = p(a, !1, !1, !0);
            A = (new Date).getTime()
        };
        e.prototype.reachGoal =
            function (a) {
                if ("goal" in a && a.goal) {
                    var b = "";
                    "value" in a && a.value && (b = parseInt(a.value) || "");
                    (new Image).src = p(a, !0, !1, !0) + (";e=" + escape("RG:" + b + "/" + a.goal))
                }
            };
        e.prototype.itemView = function (a) {
            if ("id" in a || u) (new Image).src = C(0) + "//ad.mail.ru/retarget/?counter=" + (a.id || u) + "&list=" + (a.list || "") + "&productid=" + (a.productid || "") + "&pagetype=" + (a.pagetype || "") + "&totalvalue=" + (a.totalvalue || 0) + "&_=" + Math.random()
        };
        e.prototype.sendEvent = function (a) {
            if ("category" in a && a.category && "action" in a && a.action) {
                var b =
                    a.category.substr(0, 300), c = a.action.substr(0, 300), d = "";
                "label" in a && a.label && (d = a.label.substr(0, 300));
                var e = "";
                "value" in a && a.value && (e = parseInt(a.value) || "");
                b = "CE:" + e + "/" + b.replace(/;/g, " ") + ";" + c.replace(/;/g, " ") + ";" + d.replace(/;/g, " ");
                (new Image).src = p(a, !0, !1, !1) + (";e=" + escape(b))
            }
        };
        e.prototype.processEvent = function (a) {
            if (a && "type" in a && ("pageView" != a.type || "id" in a)) {
                J(a);
                var b;
                if (b = a)if (b = "id" in a && "type" in a)if (b = "pageView" == a.type)if (b = 5 > l.length) {
                    b:{
                        for (b = 0; b < l.length; b++)if (l[b] === a.id) {
                            b =
                                !0;
                            break b
                        }
                        b = !1
                    }
                    b = !b
                }
                b && (l.push(a.id), q.push(a), w && I(a));
                switch (a.type) {
                    case "pageView":
                        this.pageView(a);
                        break;
                    case "reachGoal":
                        this.reachGoal(a);
                        break;
                    case "itemView":
                        this.itemView(a);
                        break;
                    case "sendEvent":
                        this.sendEvent(a)
                }
            }
        };
        e.prototype.push = function (a) {
            this.processEvent(a)
        };
        var T = !1;
        e.prototype.onready = function () {
            T || (T = !0, !P && !w && aa($))
        };
        var U = !1;
        e.prototype.onload = function () {
            if (!U) {
                U = !0;
                if (!ba && 0 < z.length) {
                    B = (new Date).getTime();
                    for (var a = 0, b; b = z[a]; a++)(new Image).src = p(b, !0, !0, !1) + ";e=" + escape("RT/load") +
                        ";et=" + B;
                    A = B;
                    z = []
                }
                O || setTimeout(Z, 15E3)
            }
        };
        e.prototype.beat = function () {
            if (!R && 0 != l.length && H) {
                var a = (new Date).getTime(), b = a - H;
                if (!(12E4 < b)) {
                    if (12E4 < a - A)for (var c = 0; c < q.length; c++) {
                        var d = q[c];
                        (new Image).src = p(d, !0, !1, !0) + ";e=" + escape("RT/resend") + ";et=" + B + ";active=" + (b ? "1" : "0")
                    } else(new Image).src = N(l, "RT/beat");
                    A = a
                }
            }
        };
        var V = !1;
        e.prototype.unload = function () {
            V || (V = !0, !S && 0 < l.length && ((new Image).src = N(l, "RT/unload")))
        };
        e.prototype.activity = function (a) {
            H = (new Date).getTime()
        };
        g = new e;
        for (f = 0; m = _tmr[f]; f++)J(m);
        for (f = 0; m = _tmr[f]; f++)g.processEvent(m);
        _tmr = g;
        if ("complete" === document.readyState || "loading" !== document.readyState && !document.documentElement.doScroll) _tmr.onready(); else document.addEventListener ? n(document, "DOMContentLoaded", x) : document.attachEvent && n(document, "readystatechange", x);
        if ("complete" === document.readyState) _tmr.onload(); else n(window, "load", Q);
        S || (n(window, "unload", y), n(window, "beforeunload", y));
        if (!R && 0 < l.length) {
            setInterval(_tmr.beat, 3E4);
            try {
                g = function (a) {
                    function b(a) {
                        n(document,
                            a, function () {
                                _tmr.activity(a)
                            })
                    }

                    for (var c = 0; c < a.length; c++)b(a[c])
                }, g(["scroll", "gesturechange", "touchmove"]), g(["mousedown", "mousemove", "mouseup"]), n(window, "scroll", function () {
                    _tmr.activity("scallback")
                })
            } catch (da) {
            }
        }
    }
})();
