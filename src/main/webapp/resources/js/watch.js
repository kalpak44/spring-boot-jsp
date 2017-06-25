﻿
(function(g, k, Q) {
    function gb(a, b, c, d) {
        function e(a) {
            var b = (new Date).getTime();
            a && b < a && (la += a - b + 20);
            f.setTimeout(function() {
                e(b)
            }, 20, "timeCorrector")
        }

        function l() {
            var a = (new Date).getTime() + la;
            a < T && (a = T + 10);
            return T = a
        }

        function n() {
            return Math.round((l() - xa) / 50)
        }

        function Z(a, b) {
            b = Math.max(0, Math.min(b, 65535));
            f.mergeArrays(a, [b >> 8, b & 255])
        }

        function q(a, b) {
            f.mergeArrays(a, [b & 255])
        }

        function p(a, b) {
            for (b = Math.max(0, b | 0); 127 < b;) f.mergeArrays(a, [b & 127 | 128]), b >>= 7;
            f.mergeArrays(a, [b])
        }

        function r(a, b) {
            255 <
                b.length && (b = b.substr(0, 255));
            f.mergeArrays(a, [b.length]);
            for (var c = 0; c < b.length; c++) Z(a, b.charCodeAt(c))
        }

        function Fa(a, b) {
            p(a, b.length);
            for (var c = 0; c < b.length; c++) p(a, b.charCodeAt(c))
        }

        function B(a, b, c, d, e, f) {
            for (var v; c && (v = m.getElementSize(c)) && (!v[0] || !v[1]);) c = m.getElementParent(c);
            if (!c) return null;
            v = c[D];
            if (!v || 0 > v) return null;
            var l = {
                mousemove: 2,
                click: 32,
                dblclick: 33,
                mousedown: 4,
                mouseup: 30,
                touch: 12
            }[b];
            if (!l) return null;
            var Ka = m.getElementXY(c);
            c = [];
            q(c, l);
            p(c, a);
            p(c, v);
            p(c, Math.max(0, d[0] - Ka[0]));
            p(c, Math.max(0, d[1] - Ka[1]));
            /^mouse(up|down)|click$/.test(b) && (a = e || f, q(c, 2 > a ? 1 : a == (e ? 2 : 4) ? 4 : 2));
            return c
        }

        function x(a, b, c, d) {
            b = b[D];
            if (!b || 0 > b) return null;
            var e = [];
            q(e, 31);
            p(e, a);
            p(e, b);
            p(e, c[0]);
            p(e, c[1]);
            q(e, 0);
            q(e, 0);
            q(e, d);
            return e
        }

        function K(a, b) {
            var c = [];
            q(c, 3);
            p(c, a);
            p(c, b[0]);
            p(c, b[1]);
            return c
        }

        function I(a, b, c) {
            var d = [];
            c = c[D];
            if (!c || 0 > c) return null;
            q(d, 16);
            p(d, a);
            p(d, b[0]);
            p(d, b[1]);
            p(d, c);
            return d
        }

        function C(a, b, c) {
            var d = [];
            q(d, 28);
            p(d, a);
            p(d, b[0]);
            p(d, b[1]);
            p(d, c[0]);
            p(d, c[1]);
            return d
        }

        function N(a, b, c, d) {
            var e = [];
            q(e, 5);
            p(e, a);
            Z(e, b);
            q(e, c);
            a = d[D];
            if (!a || 0 > a) a = 0;
            p(e, a);
            return e
        }

        function O(a, b) {
            var c;
            if (0 == b.length) var d = c = "";
            else 100 >= b.length ? (c = b, d = "") : 200 >= b.length ? (c = b.substr(0, 100), d = b.substr(100)) : (c = b.substr(0, 97), d = b.substr(b.length - 97));
            var e = [];
            q(e, 29);
            p(e, a);
            Fa(e, c);
            Fa(e, d);
            return e
        }

        function w(a) {
            var b = [];
            q(b, 27);
            p(b, a);
            return b
        }

        function Q(a) {
            var b = [];
            q(b, 14);
            p(b, a);
            return b
        }

        function ba(a) {
            var b = [];
            q(b, 15);
            p(b, a);
            return b
        }

        function ja(a, b) {
            var c = [];
            q(c, 17);
            p(c, a);
            p(c,
                b[D]);
            return c
        }

        function fa(a, b) {
            var c = [];
            q(c, 18);
            p(c, a);
            p(c, b[D]);
            return c
        }

        function W(a, b, c) {
            var d = [];
            q(d, 19);
            p(d, a);
            p(d, b[D]);
            r(d, String(c));
            return d
        }

        function ca(a) {
            var b = a[D];
            if (!b || 0 > b || !/^INPUT|SELECT|TEXTAREA$/.test(a.nodeName) || !a.form || ha(a.form)) return null;
            var c = m.getFormNumber(a.form);
            if (0 > c) return null;
            var d = "INPUT" == a.nodeName ? {
                text: 0,
                color: 0,
                date: 0,
                datetime: 0,
                "datetime-local": 0,
                email: 0,
                number: 0,
                range: 0,
                search: 0,
                tel: 0,
                time: 0,
                url: 0,
                month: 0,
                week: 0,
                password: 2,
                radio: 3,
                checkbox: 4,
                file: 6,
                image: 7
            }[a.type] : {
                SELECT: 1,
                TEXTAREA: 5
            }[a.nodeName];
            if ("number" != typeof d) return null;
            for (var e = -1, v = a.form.elements, f = v.length, l = 0, n = 0; l < f; l++)
                if (v[l].name == a.name) {
                    if (v[l] == a) {
                        e = n;
                        break
                    }
                    n++
                }
            if (0 > e) return null;
            v = [];
            q(v, 7);
            p(v, b);
            p(v, c);
            p(v, d);
            Fa(v, a.name || "");
            p(v, e);
            return v
        }

        function L(a, b) {
            var c = m.getFormNumber(b);
            if (0 > c) return null;
            for (var d = b.elements, e = d.length, v = [], l = 0; l < e; l++)
                if (!m.isEmptyField(d[l])) {
                    var n = d[l][D];
                    n && 0 < n && f.mergeArrays(v, [n])
                }
            d = [];
            q(d, 11);
            p(d, a);
            p(d, c);
            p(d, v.length);
            for (c = 0; c < v.length; c++) p(d,
                v[c]);
            return d
        }

        function V() {
            var a = [];
            q(a, 13);
            return a
        }

        function y(a, b, c) {
            a = a.apply(g, b);
            oa.append(a, c)
        }

        function F(a) {
            if (a[D]) a: {
                var b = n(),
                    c = a[D];
                if (0 < c) {
                    var d = [];
                    a = m.getElementRegion(a);
                    var e = ya[c],
                        f = a[0] + "x" + a[1],
                        l = a[2] + "x" + a[3];
                    f != e.pos && (e.pos = f, q(d, 9), p(d, b), p(d, c), p(d, a[0]), p(d, a[1]));
                    l != e.size && (e.size = l, q(d, 10), p(d, b), p(d, c), p(d, a[2]), p(d, a[3]));
                    if (d.length) {
                        a = d;
                        break a
                    }
                }
                a = null
            }
            else {
                (c = m.getElementParent(a)) && F(c);
                a[D] = U;
                ya[U] = {};
                U++;
                if (a.nodeName)
                    if (c = +a[D], !isFinite(c) || 0 >= c) b = null;
                    else {
                        var d =
                            64,
                            e = 0,
                            v = m.getElementParent(a),
                            f = v && v[D] ? v[D] : 0;
                        0 > f && (f = 0);
                        var l = a.nodeName.toUpperCase(),
                            g = ib[l];
                        g || (d |= 2);
                        var k = m.getElementNeighborPosition(a);
                        k || (d |= 4);
                        var u = m.getElementRegion(a);
                        (v = v ? m.getElementRegion(v) : null) && u[0] == v[0] && u[1] == v[1] && u[2] == v[2] && u[3] == v[3] && (d |= 8);
                        ya[c].pos = u[0] + "x" + u[1];
                        ya[c].size = u[2] + "x" + u[3];
                        a.id && "string" == typeof a.id && (d |= 32);
                        (v = m.calcTextChecksum(a)) && (d |= 16);
                        var H = m.calcAttribChecksum(a);
                        H && (e |= 2);
                        b: {
                            var h = m.getElementChildren(m.getElementParent(a), a.tagName);
                            for (var G =
                                    0; G < h.length; G++)
                                if ((!h[G].id || "string" != typeof h[G].id) && m.calcAttribChecksum(h[G]) == H && m.calcTextChecksum(h[G]) == v) {
                                    h = !0;
                                    break b
                                }
                            h = !1
                        }
                        h && (d |= 1, b = m.calcChildrenChecksum(a));
                        h = [];
                        q(h, 1);
                        p(h, c);
                        q(h, d);
                        p(h, f);
                        g ? q(h, g) : r(h, l);
                        k && p(h, k);
                        d & 8 || (p(h, u[0]), p(h, u[1]), p(h, u[2]), p(h, u[3]));
                        d & 32 && r(h, a.id);
                        v && Z(h, v);
                        d & 1 && Z(h, b);
                        q(h, e);
                        H && Z(h, H);
                        b = h
                    }
                else a[D] = -1, b = null;
                oa.append(b, void 0);
                a = ca(a)
            }
            oa.append(a, void 0)
        }

        function R(a, b) {
            var c = a && m.classNameExists(a, "(ym-disable-keys|-metrika-nokeys)");
            b && a && (c = c ||
                !!m.getElementsByClassName("(ym-disable-keys|-metrika-nokeys)", a).length);
            return c
        }

        function ha(a) {
            return a && m.classNameExists(a, "(ym-disable-submit|-metrika-noform)")
        }

        function pa(a) {
            var b = A.getTarget(a);
            if (b && "SCROLLBAR" != b.nodeName) {
                if (/^INPUT|SELECT|TEXTAREA|BUTTON$/.test(b.tagName))
                    if (b[D]) F(b);
                    else {
                        var c = b.form;
                        if (c)
                            for (var c = c.elements, d = c.length, e = 0; e < d; e++) /^INPUT|SELECT|TEXTAREA|BUTTON$/.test(c[e].tagName) && !c[e][D] && F(c[e]);
                        else F(b)
                    }
                else F(b);
                y(B, [n(), a.type, b, A.getPos(a), a.which, a.button])
            }
        }

        function P(a) {
            pa(a);
            a: {
                if (g.getSelection) {
                    try {
                        var b = g.getSelection()
                    } catch (hb) {
                        break a
                    }
                    var c = b.toString();
                    var d = b.anchorNode
                } else k.selection && k.selection.createRange && (a = k.selection.createRange(), c = a.text, d = a.parentElement());
                if ("string" == typeof c) {
                    try {
                        for (; d && 1 != d.nodeType;) d = d.parentNode
                    } catch (hb) {
                        break a
                    }
                    d && Ga(d) || R(d, !0) || c == na || (na = c, y(O, [n(), c]))
                }
            }
        }

        function H(a) {
            var b = l(),
                c = b - X;
            if (!(10 > c)) {
                var d = A.getPos(a),
                    e = M[0] - d[0],
                    f = M[1] - d[1],
                    e = e * e + f * f;
                0 >= e || 16 > e && 100 > c || 20 > c && 256 > e || (X = b, M = d, pa(a))
            }
        }

        function u() {
            var a = m.getDocumentScroll(),
                b = l();
            10 > b - ma || 10 > Math.abs(a[0] - ia[0]) && 10 > Math.abs(a[1] - ia[1]) || (ma = b, ia = a, y(K, [n(), a]))
        }

        function G(a) {
            if (a = A.getTarget(a)) {
                var b = Math.random(),
                    c = [a.scrollLeft, a.scrollTop];
                if (a.localId) {
                    if (b = ka[a.localId], !b || 10 > Math.abs(c[0] - b[0]) && 10 > Math.abs(c[1] - b[1])) return
                } else {
                    for (; ka[b];) b = Math.random();
                    a.localId = b
                }
                ka[a.localId] = c;
                a !== k && (F(a), y(I, [n(), c, a]))
            }
        }

        function E() {
            y(C, [n(), m.getViewportSize(), m.getDocumentSize()])
        }

        function J() {
            y(V, [], !0)
        }

        function qa(a) {
            return (a.shiftKey ?
                2 : 0) | (a.ctrlKey ? 4 : 0) | (a.altKey ? 1 : 0) | (a.metaKey ? 8 : 0) | (a.ctrlKey || a.altKey ? 16 : 0)
        }

        function Ga(a) {
            return "INPUT" == a.tagName ? "password" == a.type || a.name && ga.test(a.name) || a.id && ga.test(a.id) : !1
        }

        function La(a, b, c) {
            !(a = A.getTarget(a)) || Ga(a) || R(a) || (F(a), y(N, [n(), b, c, a]))
        }

        function Ma(a) {
            var b = a.keyCode,
                c = qa(a);
            if ({
                    3: 1,
                    8: 1,
                    9: 1,
                    13: 1,
                    16: 1,
                    17: 1,
                    18: 1,
                    19: 1,
                    20: 1,
                    27: 1,
                    33: 1,
                    34: 1,
                    35: 1,
                    36: 1,
                    37: 1,
                    38: 1,
                    39: 1,
                    40: 1,
                    45: 1,
                    46: 1,
                    91: 1,
                    92: 1,
                    93: 1,
                    106: 1,
                    110: 1,
                    111: 1,
                    144: 1,
                    145: 1
                }[b] || 112 <= b && 123 >= b || 96 <= b && 105 >= b || c & 16) 19 == b && 4 == (c &
                -17) && (b = 144), La(a, b, c | 16), aa = !1, f.setTimeout(function() {
                aa = !0
            }, 1), !(67 == b && c & 4) || c & 1 || c & 2 || Ha()
        }

        function Na(a) {
            aa && !da && 0 !== a.which && (La(a, a.charCode || a.keyCode, qa(a)), da = !0, f.setTimeout(function() {
                da = !1
            }, 1))
        }

        function Ha() {
            Y || (Y = !0, na && y(w, [n()]), f.setTimeout(function() {
                Y = !1
            }, 1))
        }

        function Ia() {
            ra || (ra = !0, y(Q, [n()]))
        }

        function sa() {
            ra && (ra = !1, y(ba, [n()]))
        }

        function Oa(a) {
            (!ra || a && !a.fromElement) && Ia()
        }

        function Pa(a) {
            a && !a.toElement && sa()
        }

        function za(a) {
            if ((a = A.getTarget(a)) && /^INPUT|SELECT|TEXTAREA|BUTTON$/.test(a.tagName)) {
                if (a[D]) F(a);
                else {
                    var b = a.form;
                    if (b)
                        for (var b = b.elements, c = b.length, d = 0; d < c; d++) /^INPUT|SELECT|TEXTAREA|BUTTON$/.test(b[d].tagName) && !b[d][D] && F(b[d]);
                    else F(a)
                }
                y(ja, [n(), a])
            }
        }

        function Aa(a) {
            (a = A.getTarget(a)) && /^INPUT|SELECT|TEXTAREA|BUTTON$/.test(a.tagName) && (F(a), y(fa, [n(), a]))
        }

        function Ba(a) {
            if ((a = A.getTarget(a)) && !Ga(a) && !R(a) && /^INPUT|SELECT|TEXTAREA$/.test(a.tagName)) {
                var b = /^(checkbox|radio)$/.test(a.type) ? a.checked : a.value;
                F(a);
                y(W, [n(), a, b])
            }
        }

        function ta(a) {
            if ((a = A.getTarget(a)) && !ha(a) && "FORM" == a.nodeName) {
                for (var b =
                        a.elements, c = 0; c < b.length; c++) m.isEmptyField(b[c]) || F(b[c]);
                y(L, [n(), a], !0)
            }
        }

        function ea(a) {
            u();
            if (a.touches && a.touches.length) {
                var b = A.getTarget(a);
                if (b && b != k) {
                    F(b);
                    for (var c = 0; c < a.touches.length; c++) y(B, [n(), "touch", b, [a.touches[c].pageX, a.touches[c].pageY], 0, 0])
                }
            }
        }

        function Ca(a) {
            var b = A.getTarget(a);
            if (b) {
                var c;
                "wheel" == a.type ? c = 0 < a.deltaY ? 1 : 0 > a.deltaY ? 2 : 0 : "mousewheel" == a.type && (c = 0 < a.wheelDelta ? 2 : 0 > a.wheelDelta ? 1 : 0);
                c && (F(b), y(x, [n(), b, A.getPos(a), c]))
            }
        }

        function Qa(a) {
            (a = A.getTarget(a)) && "BODY" ==
            a.tagName && oa.append([], !0)
        }
        var oa = new Da({
                protocol: a,
                counterId: b,
                counterType: c,
                meta: {
                    url: z().href,
                    hitId: d,
                    timezone: ua,
                    timestamp: va
                }
            }),
            ib = {
                A: 1,
                ABBR: 2,
                ACRONYM: 3,
                ADDRESS: 4,
                APPLET: 5,
                AREA: 6,
                B: 7,
                BASE: 8,
                BASEFONT: 9,
                BDO: 10,
                BIG: 11,
                BLOCKQUOTE: 12,
                BODY: 13,
                BR: 14,
                BUTTON: 15,
                CAPTION: 16,
                CENTER: 17,
                CITE: 18,
                CODE: 19,
                COL: 20,
                COLGROUP: 21,
                DD: 22,
                DEL: 23,
                DFN: 24,
                DIR: 25,
                DIV: 26,
                DL: 27,
                DT: 28,
                EM: 29,
                FIELDSET: 30,
                FONT: 31,
                FORM: 32,
                FRAME: 33,
                FRAMESET: 34,
                H1: 35,
                H2: 36,
                H3: 37,
                H4: 38,
                H5: 39,
                H6: 40,
                HEAD: 41,
                HR: 42,
                HTML: 43,
                I: 44,
                IFRAME: 45,
                IMG: 46,
                INPUT: 47,
                INS: 48,
                ISINDEX: 49,
                KBD: 50,
                LABEL: 51,
                LEGEND: 52,
                LI: 53,
                LINK: 54,
                MAP: 55,
                MENU: 56,
                META: 57,
                NOFRAMES: 58,
                NOSCRIPT: 59,
                OBJECT: 60,
                OL: 61,
                OPTGROUP: 62,
                OPTION: 63,
                P: 64,
                PARAM: 65,
                PRE: 66,
                Q: 67,
                S: 68,
                SAMP: 69,
                SCRIPT: 70,
                SELECT: 71,
                SMALL: 72,
                SPAN: 73,
                STRIKE: 74,
                STRONG: 75,
                STYLE: 76,
                SUB: 77,
                SUP: 78,
                TABLE: 79,
                TBODY: 80,
                TD: 81,
                TEXTAREA: 82,
                TFOOT: 83,
                TH: 84,
                THEAD: 85,
                TITLE: 86,
                TR: 87,
                TT: 88,
                U: 89,
                UL: 90,
                VAR: 91,
                NOINDEX: 100
            },
            la = 0,
            T = 0;
        e(0);
        var U = 1,
            X = 0,
            M = [0, 0],
            ma = 0,
            ia = [0, 0],
            ka = {},
            ga = /^(password|passwd|pswd)$/,
            aa = !0,
            da = !1,
            na = "",
            Y = !1,
            ra = !0,
            xa = l(),
            D = "metrikaId_" +
            Math.random(),
            ya = {},
            Ea = ":submit" + Math.random();
        if (!f.isMetrikaPlayer()) {
            h.on(k, "mousemove", H);
            h.on(k, "click,dblclick,mousedown", pa);
            h.on(k, "mouseup", P);
            h.on(g, "scroll", u);
            if ("onmousewheel" in k) h.on(k, "mousewheel", Ca);
            else h.on(k, "wheel", Ca);
            h.on(g, "beforeunload", J);
            if (!jb) h.on(g, "unload", J);
            h.on(g, "resize", E);
            h.on(k, "keydown", Ma);
            h.on(k, "keypress", Na);
            h.on(k, "copy", Ha);
            h.on(k, "touchmove,touchstart", ea);
            if (k.body) h.on(k, "mouseleave", Qa);
            k.attachEvent && !g.opera ? (h.on(k, "focusin", Oa), h.on(k, "focusout",
                Pa)) : (h.on(g, "focus", Ia), h.on(g, "blur", sa), h.on(k, "blur", sa));
            k.addEventListener ? (h.on(k, "scroll", G), h.on(k, "focus", za), h.on(k, "blur", Aa), h.on(k, "change", Ba), h.on(k, "submit", ta)) : k.attachEvent && (h.on(k, "focusin", za), h.on(k, "focusout", Aa), function() {
                for (var a = k.getElementsByTagName("form"), b = 0; b < a.length; b++) {
                    for (var c = a[b].getElementsByTagName("*"), d = 0; d < c.length; d++)
                        if (/^INPUT|SELECT|TEXTAREA$/.test(c[d].tagName)) h.on(c[d], "change", Ba);
                    h.on(a[b], "submit", ta)
                }
            }());
            (function() {
                var a = k.getElementsByTagName("form");
                if (a.length)
                    for (var b = 0; b < a.length; b++) {
                        var c = a[b].submit;
                        if ("function" == typeof c || "object" == typeof c && /^\s*function submit\(\)/.test(String(c))) a[b][Ea] = c, a[b].submit = function() {
                            ta({
                                target: this
                            });
                            return this[Ea]()
                        }
                    }
            })();
            "0:0" != m.getDocumentScroll().join(":") && u();
            E()
        }
        return {
            start: function() {
                oa.activate()
            },
            stop: function() {
                oa.clear();
                h.un(k, "mousemove", H);
                h.un(k, "click,dblclick,mousedown", pa);
                h.un(k, "mouseup", P);
                h.un(k, "mousewheel", Ca);
                h.un(k, "wheel", Ca);
                h.un(g, "scroll", u);
                h.un(g, "beforeunload", J);
                h.un(g, "unload", J);
                h.un(g, "resize", E);
                h.un(k, "keydown", Ma);
                h.un(k, "keypress", Na);
                h.un(k, "copy", Ha);
                h.un(k, "touchmove", ea);
                h.un(k, "touchstart", ea);
                k.body && h.un(k, "mouseleave", Qa);
                h.un(k, "focusin", Oa);
                h.un(k, "focusout", Pa);
                h.un(g, "focus", Ia);
                h.un(g, "blur", sa);
                h.un(k, "blur", sa);
                k.removeEventListener ? (h.un(k, "scroll", G), h.un(k, "focus", za), h.un(k, "blur", Aa), h.un(k, "change", Ba), h.un(k, "submit", ta)) : k.detachEvent && (h.un(k, "focusin", za), h.un(k, "focusout", Aa), function() {
                    for (var a = k.getElementsByTagName("form"),
                            b = 0; b < a.length; b++) {
                        for (var c = a[b].getElementsByTagName("*"), d = 0; d < c.length; d++) /^INPUT|SELECT|TEXTAREA$/.test(c[d].tagName) && h.un(c[d], "change", Ba);
                        h.un(a[b], "submit", ta)
                    }
                }());
                (function() {
                    for (var a = k.getElementsByTagName("form"), b = 0; b < a.length; b++) a[b][Ea] && (a[b].submit = a[b][Ea])
                })()
            },
            uploadPages: function(a, b) {
                function c() {
                    var e;
                    h.un(k, "DOMContentLoaded", c);
                    h.un(g, "load", c);
                    for (var f = a.split(/\n/), l = z().href, n = /regexp:/, u = 0; u < f.length; u++)
                        if (e = f[u])
                            if (n.test(e)) {
                                e = wa(e.replace(n, ""));
                                try {
                                    var p = new RegExp(e)
                                } catch (Hb) {}
                                if (p &&
                                    p.test(l)) {
                                    d.uploadPage(b);
                                    break
                                }
                            } else if (-1 !== l.indexOf(e)) {
                        d.uploadPage(b);
                        break
                    }
                }
                var d = this;
                "complete" == k.readyState ? c() : (h.on(k, "DOMContentLoaded", c), h.on(g, "load", c))
            },
            uploadPage: t(function(e) {
                if ("function" == typeof g.toStaticHTML && -1 < g.toStaticHTML.toString().indexOf("NoScript")) return !1;
                var f = k.documentElement;
                if (f && 19E4 < ("" + f.innerHTML).length) return !1;
                var l = g.XMLHttpRequest ? new g.XMLHttpRequest : new ActiveXObject("Msxml2.XMLHTTP"),
                    n = m.getDocumentCharset(),
                    u = "text/html" + (n ? ";charset\x3d" + n :
                        ""),
                    h = new kb({
                        protocol: a,
                        counterId: b,
                        counterType: c
                    });
                if ("html" == e) return e = new RegExp("\x3cscript [^\x3e]*?//" + S.host.replace(/\./g, "\\\\.") + "/watch/.*?\x3c/script\x3e", "gi"), h.sendContent(m.getDocumentHTML().replace(e, ""), u, d, ua, va), !0;
                l && (l.open("get", z().href, !0), l.onreadystatechange = t(function() {
                        if (4 == l.readyState) {
                            var a = l.getResponseHeader("content-type") || "";
                            n && -1 === a.indexOf("charset\x3d") && (a = u);
                            h.sendContent(l.responseText, a, d, ua, va)
                        }
                    }, "updatePage.1"), l.overrideMimeType && n && l.overrideMimeType(u),
                    l.send(null));
                return !0
            }, "uploadPage")
        }
    }

    function t(a, b, c) {
        return function() {
            try {
                return a.apply(this, arguments)
            } catch (d) {
                c || Ra(d, b)
            }
        }
    }

    function Ra(a, b) {
        var c;
        if (.01 > Math.random()) try {
            var d = a && a.message || "";
            (c = -1 < d.indexOf("network error occurred") || -1 < d.indexOf("send beacon") && -1 < d.indexOf("Content Security Policy")) || (new T).log("jserrs", U, a.message, b, B.href, "", "string" === typeof a.stack && a.stack.replace(/\n/g, "\\n"))
        } catch (e) {}
    }

    function lb(a, b, c) {
        return g.setTimeout(t(a, c || "setTimeout"), b)
    }

    function z() {
        for (var a = {}, b = "hash host hostname href pathname port protocol search".split(" "), c = b.length, d = c, e, f; d--;) a[b[d]] = "";
        try {
            for (e = g.location, d = c; d--;) f = b[d], a[f] = "" + e[f]
        } catch (n) {
            B && (a = B)
        }
        return a
    }

    function wa(a) {
        return a ? ("" + a).replace(/^\s+/, "").replace(/\s+$/, "") : ""
    }

    function Sa() {
        return -1 != z().hostname.search(/(?:^|\.)(?:ya|yandex)\.(?:\w+|com\.\w+)$/)
    }

    function ga(a) {
        return -1 !== ("" + g.navigator.userAgent).toLowerCase().search(a)
    }

    function Ta(a) {
        return wa(a && a.innerHTML && a.innerHTML.replace(/<\/?[^>]+>/gi, ""))
    }

    function Ua(a, b) {
        var c;
        if (!a || !b) return !1;
        var d = [];
        for (c = 0; c < b.length; c++) d.push(b[c].replace(/\^/g, "\\^").replace(/\$/g, "\\$").replace(/\./g, "\\.").replace(/\[/g, "\\[").replace(/\]/g, "\\]").replace(/\|/g, "\\|").replace(/\(/g, "\\(").replace(/\)/g, "\\)").replace(/\?/g, "\\?").replace(/\*/g, "\\*").replace(/\+/g, "\\+").replace(/\{/g, "\\{").replace(/\}/g, "\\}"));
        return (new RegExp("\\.(" + d.join("|") + ")$", "i")).test(a)
    }

    function mb(a) {
        a = a.target || a.srcElement;
        var b;
        if (!a) return !1;
        3 == a.nodeType && (a = a.parentNode);
        for (b = a && a.nodeName && a.nodeName.toString().toLowerCase(); a && a.parentNode && a.parentNode.nodeName && ("a" != b && "area" != b || !a.href);) b = (a = a.parentNode) && a.nodeName && a.nodeName.toString().toLowerCase();
        return a.href ? a : !1
    }

    function nb(a, b) {
        return (a ? a.replace(/^www\./, "") : "").toLowerCase() == (b ? b.replace(/^www\./, "") : "").toLowerCase()
    }

    function ob(a, b) {
        function c(a) {
            a = a.split(":");
            a = a[1] || "";
            a = a.replace(/^\/*/, "").replace(/^www\./, "");
            return a.split("/")[0]
        }
        return a && b ? c(a) == c(b) : a || b ? !1 : !0
    }

    function Va() {
        var a =
            g.performance || g.webkitPerformance,
            b = a && a.timing,
            c, d = [];
        if (b && (c = b.navigationStart))
            for (d = [b.domainLookupEnd - b.domainLookupStart, b.connectEnd - b.connectStart, b.responseStart - b.requestStart, b.responseEnd - b.responseStart, b.fetchStart - c, b.redirectEnd - b.redirectStart, b.redirectCount || a.navigation && a.navigation.redirectCount], d.push(b.domInteractive && b.domLoading ? b.domInteractive - b.domLoading : null), d.push(b.domContentLoadedEventStart && b.domContentLoadedEventEnd ? b.domContentLoadedEventEnd - b.domContentLoadedEventStart :
                    null), d.push(b.domComplete ? b.domComplete - c : null), d.push(b.loadEventStart ? b.loadEventStart - c : null), d.push(b.loadEventStart && b.loadEventEnd ? b.loadEventEnd - b.loadEventStart : null), d.push(b.domContentLoadedEventStart ? b.domContentLoadedEventStart - c : null), a = 0; a < d.length; a++) b = d[a], null !== b && (0 > b || 36E5 < b) && (d[a] = null);
        return d
    }

    function pb(a) {
        var b = [],
            c = a._lastPerformanceTiming,
            d = Va(),
            e;
        if (c) {
            var f = 0;
            for (e = c.length; f < e; f++) null === d[f] ? b.push(d[f]) : b.push(c[f] === d[f] ? "" : d[f])
        } else b = d;
        a._lastPerformanceTiming =
            d;
        return b.join(",")
    }

    function qb() {
        if ("object" == typeof g.chrome && g.chrome.loadTimes) {
            var a = g.chrome.loadTimes();
            if (a.requestTime && a.firstPaintTime && g.performance && g.performance.timing) return Math.round(1E3 * a.firstPaintTime - g.performance.timing.navigationStart)
        } else if (g.performance && g.performance.timing && (a = g.performance.timing, a.navigationStart && a.msFirstPaint)) return a.msFirstPaint - a.navigationStart;
        return null
    }

    function rb(a) {
        var b = k.referrer || "",
            c, d;
        if ((new RegExp("^https?://" + B.host + "/")).test(b)) return !1;
        var e = a.patterns;
        for (c = 0; c < e.length; c++) {
            var l = new RegExp(e[c], "i");
            if (b.match(l))
                if (l = a.params || [], l.length) {
                    var n = f.safeDecodeURIComponent((RegExp.$1 || "").replace(/\+/g, "%20"));
                    for (d = 0; d < l.length; d++)
                        if (n == f.safeDecodeURIComponent(l[d])) return !0
                } else return !0
        }
        return !1
    }

    function Wa(a, b) {
        var c = !1,
            d;
        if (a && "string" != typeof a && a.length)
            for (d = 0; d < a.length; d++) {
                var e = a[d].selector;
                var f = a[d].text;
                var n = e.charAt(0);
                e = e.slice(1);
                if ("#" == n) {
                    if (n = k.getElementById(e)) c = !0, b && W.unshift([n, n.innerHTML]), n.innerHTML =
                        f
                } else if ("." == n)
                    for (n = m.getElementsByClassName(e), e = 0; e < n.length; e++) {
                        var c = !0,
                            g = n[e],
                            h = f;
                        b && W.unshift([g, g.innerHTML]);
                        g.innerHTML = h
                    }
            }
        return c
    }

    function Xa() {
        var a;
        for (a = 0; a < W.length; a++) W[a][0].innerHTML = W[a][1]
    }

    function sb(a, b) {
        var c, d = "";
        a = a && a.replace(/^\?/, "");
        b = b && b.replace(/^#/, "") || "";
        if (a) {
            var e = a.split("\x26");
            for (c = 0; c < e.length; c++) {
                var l = e[c].split("\x3d");
                "_openstat" === l[0] && (d = l[1])
            }
        }
        var n = b.split("?");
        for (c = 0; c < n.length; c++) {
            var g = n[c].split("\x26");
            for (e = 0; e < g.length; e++) l = g[e].split("\x3d"),
                "_openstat" === l[0] && (d = l[1])
        }
        d && (d = -1 < d.indexOf(";") ? f.safeDecodeURIComponent(d) : X.decode(I.decode(d.replace(/[-*_]/g, function(a) {
            return {
                "*": "+",
                "-": "/",
                _: "\x3d"
            }[a] || a
        }))));
        return d && (c = d.split(";"), 4 == c.length) ? {
            service: c[0],
            campaign: c[1],
            ad: c[2],
            source: c[3]
        } : null
    }
    var S = {
            protocol: "https:",
            host: "mc.yandex.ru"
        },
        f = {
            mixin: function(a) {
                var b, c;
                for (b = 1; b < arguments.length; b++)
                    if (arguments[b]) {
                        for (c in arguments[b]) arguments[b].hasOwnProperty(c) && (a[c] = arguments[b][c]);
                        arguments[b].hasOwnProperty("toString") &&
                            (a.toString = arguments[b].toString)
                    }
                return a
            }
        },
        x = function(a) {
            a = a || {};
            f.mixin(this, a);
            this._initComponent()
        };
    x.prototype._initComponent = function() {};
    x.inherit = function(a) {
        a = a || {};
        var b = "function" == typeof this ? this : Object;
        a.hasOwnProperty("constructor") || (a.constructor = function() {
            b.apply(this, arguments)
        });
        var c = function() {};
        c.prototype = b.prototype;
        a.constructor.prototype = new c;
        f.mixin(a.constructor.prototype, a);
        a.constructor.prototype.constructor = a.constructor;
        a.constructor.superclass = b.prototype;
        a.constructor.inherit =
            x.inherit;
        return a.constructor
    };
    f.isArray = function(a) {
        return "function" == typeof Array.isArray ? Array.isArray(a) : "[object Array]" == Object.prototype.toString.call(a)
    };
    f.mergeArrays = function(a) {
        var b, c, d = arguments.length;
        for (b = 1; b < d; b++) {
            var e = arguments[b];
            if (f.isArray(e) || e && "[object Arguments]" === e.toString())
                for (c = 0; c < e.length; c++) a[a.length] = e[c]
        }
        return a
    };
    f.getNativeFunction = function(a, b) {
        var c;
        b = b || g;
        return (c = b.constructor && b.constructor.prototype && b.constructor.prototype[a] || b[a]) && "apply" in c ?
            function() {
                return c.apply(b, arguments)
            } : function() {}
    };
    f.setTimeout = function(a, b, c) {
        return f.getNativeFunction("setTimeout")(t(a, c || "setTimeout"), b)
    };
    f.defer = function(a, b, c, d, e) {
        return f.setTimeout(function() {
            a.apply(c, d || [])
        }, b, e)
    };
    f.throttle = function(a, b, c, d) {
        var e, l, n;
        return function() {
            l = arguments;
            n = this;
            e || function() {
                e = null;
                l && (a.apply(c || n, l), l = null, e = f.setTimeout(arguments.callee, b, d))
            }()
        }
    };
    var Za = x.inherit({
            storage: null,
            storageKey: "dataBuffer",
            maxBufferSize: 255,
            flushTimeout: 1E4,
            active: !0,
            meta: null,
            onFlush: function() {},
            onFlushCtx: null,
            bufferExpireTime: 864E5,
            _initComponent: function() {
                var a;
                Za.superclass._initComponent.apply(this, arguments);
                this._data = [];
                this._packetNumber = 0;
                this._flushTID = null;
                this._saveToStorageThrottled = f.throttle(this._saveToStorage, 300, this, "DataBuffer._saveToStorage");
                this.storage && ((a = this.storage.get(this.storageKey)) && a.data && a.meta && a.time && a.time + this.bufferExpireTime > +new Date && this.onFlush.call(this.onFlushCtx || this, a.data, a.meta, a.pnum), this.clear())
            },
            getFlushSize: function() {
                return this._data.length
            },
            append: function(a, b) {
                f.mergeArrays(this._data, a);
                this._saveToStorageThrottled();
                this.active && ((b || this.getFlushSize() >= this.maxBufferSize) && this._flush(), this._flushTID || (this._flushTID = f.defer(this._flush, this.flushTimeout, this, [], "DataBuffer._flush")))
            },
            activate: function() {
                this.active || (this.active = !0, this.append([]))
            },
            clear: function() {
                this._data.length = 0;
                this._flushTID = null;
                this.storage && this.storage.remove(this.storageKey)
            },
            _flush: function() {
                if (!this._data.length) return !1;
                this.onFlush.call(this.onFlushCtx ||
                    this, this._data, this.meta, this._packetNumber);
                this._packetNumber++;
                this.clear()
            },
            _saveToStorage: function() {
                this.storage && this._data.length && this.storage.set(this.storageKey, {
                    data: this._data,
                    meta: this.meta,
                    pnum: this._packetNumber,
                    time: +new Date
                })
            }
        }),
        aa = x.inherit({
            transports: [],
            postParams: [],
            dontSendRequests: !1,
            send: function(a, b, c, d) {
                c = c || function() {};
                this.dontSendRequests ? c.call(d) : function l(f) {
                    if (f < this.transports.length) try {
                        var n = new this.transports[f]({
                            postParams: this.postParams,
                            queryStringParams: this.queryStringParams
                        });
                        n.request(a, b, function(a, b, n) {
                            a ? c.call(d, b, n) : l.call(this, f + 1)
                        }, this)
                    } catch (q) {
                        Ra(q, "send by " + (n && n.id)), l.call(this, f + 1)
                    }
                }.call(this, 0)
            }
        }),
        ba = {};
    f.keys = function(a) {
        var b, c = [];
        for (b in a) a.hasOwnProperty(b) && c.push(b);
        return c
    };
    f.map = function(a, b) {
        var c, d = [];
        for (c = 0; c < a.length; c++) d.push(b(a[c]));
        return d
    };
    ba.stringify = function(a, b) {
        var c = [],
            d = b || {},
            e = {},
            l = f.keys(a).length,
            n, g;
        if (d.lastOrdering !== Q)
            for (g = 1; g <= b.lastOrdering.length; g++) e[b.lastOrdering[g - 1]] = l + g;
        if (d.firstOrdering !== Q)
            for (g = 0; g < b.firstOrdering.length; g++) e[b.firstOrdering[g]] =
                g;
        for (n in a)
            if (a.hasOwnProperty(n))
                if (d = a[n], f.isArray(d))
                    for (g = 0; g < d.length; g++) c.push({
                        key: n,
                        value: encodeURIComponent(n) + "\x3d" + encodeURIComponent(String(d[g]))
                    });
                else c.push({
                    key: n,
                    value: encodeURIComponent(n) + "\x3d" + encodeURIComponent(String(d))
                });
        c.sort(function(a, b) {
            var c = e[a.key],
                d = e[b.key];
            "undefined" === typeof c && (c = l);
            "undefined" === typeof d && (d = l);
            return c - d
        });
        return f.map(c, function(a) {
            return a.value
        }).join("\x26")
    };
    f.forEachKey = function(a, b, c) {
        for (var d in a) a.hasOwnProperty(d) && b.call(c,
            d, a[d], a)
    };
    f.inArray = function(a, b) {
        var c;
        for (c = 0; c < a.length; c++)
            if (a[c] == b) return !0;
        return !1
    };
    var ca = x.inherit({
            postParams: [],
            _buildUrl: function(a, b) {
                var c = ba.stringify(b, this.queryStringParams);
                return a + (-1 < a.indexOf("?") ? "\x26" : c ? "?" : "") + c
            },
            _splitParams: function(a) {
                var b = {},
                    c = {};
                f.forEachKey(a, function(a, e) {
                    f.inArray(this.postParams, a) ? c[a] = e : b[a] = e
                }, this);
                return {
                    get: b,
                    post: c
                }
            }
        }),
        da = ca.inherit({
            id: "XHR",
            method: "POST",
            withCredentials: !0,
            request: function(a, b, c, d) {
                if (/[^a-z0-9.:-]/.test(B.host) && g.opera &&
                    "function" == typeof g.opera.version) {
                    var e = g.opera.version();
                    if ("string" == typeof e && "12" == e.split(".")[0]) return c.call(d, !1)
                }
                if (g.XMLHttpRequest) {
                    var f = new XMLHttpRequest;
                    if ("withCredentials" in f) {
                        b = this._splitParams(b);
                        a = this._buildUrl(a, b.get);
                        try {
                            f.open(this.method, a, !0)
                        } catch (n) {
                            return c.call(d, !1)
                        }
                        f.withCredentials = this.withCredentials;
                        this._setHeaders(f);
                        f.send(this._preparePostParams(b));
                        f.onreadystatechange = function() {
                            4 == f.readyState && c.call(d, 200 == f.status, f.responseText)
                        };
                        return
                    }
                }
                c.call(d, !1)
            },
            setMethod: function(a) {
                this.method = a
            },
            _preparePostParams: function(a) {
                return ba.stringify(a.post)
            },
            _setHeaders: function(a) {
                a.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
            }
        }),
        tb = ca.inherit({
            id: "beacon",
            request: function(a, b, c, d) {
                "function" == typeof navigator.sendBeacon ? (b = this._splitParams(b), b.get["force-urlencoded"] = 1, c.call(d, navigator.sendBeacon(this._buildUrl(a, b.get), ba.stringify(b.post)))) : c.call(d, !1)
            }
        });
    f.random = function(a, b) {
        2 > arguments.length && (b = a, a = 0);
        1 > arguments.length &&
            (b = 1073741824);
        return Math.floor(Math.random() * (b - a)) + a
    };
    var V = ca.inherit({
            id: "form",
            enctype: "application/x-www-form-urlencoded",
            htmlfileOnly: !1,
            _initComponent: function() {
                V.superclass._initComponent.apply(this, arguments);
                "_htmlfile" in V.prototype || (V.prototype._htmlfile = this._createHtmlfile());
                this._doc = this._htmlfile || (this.htmlfileOnly ? null : k)
            },
            request: function(a, b, c, d) {
                var e = this._doc;
                if (!e) return c.call(d, !1);
                b = this._splitParams(b);
                var l = "ifr" + f.random();
                var g = e.createElement("div");
                g.style.position =
                    "absolute";
                g.style.left = "-99999px";
                g.style.top = "-99999px";
                var h = ['\x3ciframe name\x3d"', l, '"\x3e\x3c/iframe\x3e', '\x3cform action\x3d"', this._buildUrl(a, b.get), '" method\x3d"post" target\x3d"', l, '" enctype\x3d"', this.enctype, '"\x3e'];
                f.forEachKey(b.post, function(a) {
                    f.mergeArrays(h, ['\x3cinput type\x3d"hidden" autocomplete\x3d"off" autocorrect\x3d"off"', ' autocapitalize\x3d"off" spellcheck\x3d"false" name\x3d"', a, '"/\x3e'])
                });
                f.mergeArrays(h, ["\x3c/form\x3e"]);
                g.innerHTML = h.join("");
                e.body.appendChild(g);
                var k = g.getElementsByTagName("form")[0];
                f.forEachKey(b.post, function(a, b) {
                    k[a].value = b
                });
                k.submit();
                f.setTimeout(function() {
                    e.body.removeChild(g)
                }, 1E4, "TransportForm.request.2");
                return c.call(d, !0)
            },
            _createHtmlfile: function() {
                try {
                    if (g.ActiveXObject) {
                        var a = new ActiveXObject("htmlfile");
                        a.open();
                        a.write("\x3chtml\x3e\x3cbody\x3e\x3c/body\x3e\x3c/html\x3e");
                        a.close();
                        return a
                    }
                } catch (b) {}
                return null
            }
        }),
        ub = V.inherit({
            id: "htmlfile",
            htmlfileOnly: !0
        }),
        M = ca.inherit({
            id: "img",
            request: function(a, b, c, d) {
                a = this._buildUrl(a,
                    b);
                b = k.createElement("img");
                c = c || function() {};
                b.onload = t(function() {
                    c.call(d, !0)
                }, "TransportImage.request");
                b.onerror = t(function() {
                    c.call(d, !1)
                }, "TransportImage.request");
                b.src = a
            }
        }),
        ma = {
            stringify: function(a) {
                try {
                    return JSON.stringify(a)
                } catch (b) {
                    return "null"
                }
            }
        };
    f.toJSON = function(a) {
        var b;
        if (a === Q) return "";
        if (null === a) return "null";
        switch (a.constructor) {
            case Boolean:
                return a.toString();
            case Number:
                return isFinite(a) ? a.toString() : "null";
            case String:
                return '"' + a.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g,
                    "\\n").replace(/\r/g, "\\r") + '"';
            case Array:
                var c = [];
                var d = 0;
                for (b = a.length; d < b; d++) c[c.length] = f.toJSON(a[d]);
                return "[" + c.join(",") + "]";
            case Object:
                c = [];
                for (d in a) a.hasOwnProperty(d) && a[d] !== Q && (c[c.length] = f.toJSON(d) + ":" + f.toJSON(a[d]));
                return "{" + c.join(",") + "}";
            default:
                return ma.stringify(a)
        }
    };
    var N = x.inherit({
            counterId: "",
            _initComponent: function() {
                N.superclass._initComponent.apply(this, arguments);
                this._ls = null;
                try {
                    this._ls = g.localStorage
                } catch (a) {}
            },
            set: function(a, b) {
                if (this.isEnabled()) try {
                    !b ||
                        b && f.isArray(b) && !b.length ? this.remove(a) : this._ls.setItem(this._getLsKey(a), f.toJSON(b))
                } catch (c) {}
            },
            get: function(a) {
                if (this.isEnabled()) try {
                    return JSON.parse(this._ls.getItem(this._getLsKey(a)))
                } catch (b) {}
                return null
            },
            remove: function(a) {
                if (this.isEnabled()) try {
                    this._ls.removeItem(this._getLsKey(a))
                } catch (b) {}
            },
            isEnabled: function() {
                return this._ls && g.JSON && "object" == typeof this._ls && "object" == typeof g.JSON
            },
            getStorageId: function() {
                var a = this.get("lsid");
                a || (a = Math.round(Math.random() * new Date), this.set("lsid",
                    a));
                return a
            },
            clearStorageId: function() {
                this.remove("lsid")
            },
            _getLsKey: function(a) {
                return "_ym" + this.counterId + "_" + a
            }
        }),
        O = x.inherit({
            counterId: "",
            onlyCurrentDomain: !1,
            skipPrefix: !1,
            _initComponent: function() {
                var a;
                O.superclass._initComponent.apply(this, arguments);
                this._domain = null;
                if (!this.onlyCurrentDomain) {
                    var b = B.host.split(".");
                    for (a = 2;;)
                        if (a <= b.length) {
                            if (this._domain = "." + b.slice(-a).join("."), a++, this.isEnabled()) break
                        } else {
                            this._domain = null;
                            break
                        }
                }
            },
            create: function(a, b, c) {
                a = [this._prepareName(a) +
                    "\x3d" + encodeURIComponent(b)
                ];
                c && (b = new Date, b.setTime(b.getTime() + 6E4 * c), a.push("expires\x3d" + b.toGMTString()));
                this._domain && a.push("domain\x3d" + this._domain);
                a.push("path\x3d/");
                try {
                    k.cookie = a.join(";")
                } catch (d) {}
            },
            read: function(a) {
                try {
                    var b = k.cookie
                } catch (c) {}
                return b && b.match(new RegExp("(?:^|;\\s*)" + this._prepareName(a) + "\x3d([^;]*)")) ? decodeURIComponent(RegExp.$1) : null
            },
            erase: function(a) {
                this.create(a, "", -1)
            },
            isEnabled: function() {
                this.create("metrika_enabled", "1", 60);
                var a = !!this.read("metrika_enabled");
                this.erase("metrika_enabled");
                return a
            },
            _prepareName: function(a) {
                return (this.skipPrefix ? "" : "_ym_") + a + (this.counterId ? "_" + this.counterId : "")
            }
        });
    O.isEnabled = function() {
        return (new O({
            onlyCurrentDomain: !0
        })).isEnabled()
    };
    var K = aa.inherit({
        protocol: "",
        host: S.host,
        queryStringParams: {
            firstOrdering: ["wmode", "callback", "cnt-class"],
            lastOrdering: ["browser-info"]
        },
        resource: "",
        counterId: "",
        counterType: 0,
        retry: !1,
        transports: [tb, da, M, ub],
        _initComponent: function() {
            K.superclass._initComponent.apply(this, arguments);
            this.retry && (this._storage = new N)
        },
        send: function(a, b, c, d) {
            var e = this._registerRequest(a, b);
            this._sendSavedRequest(e, a, b, c, d)
        },
        _sendSavedRequest: function(a, b, c, d, e) {
            var l = g.Ya._metrika.firstReqStatus;
            if ("process" == l) g.Ya._metrika.firstReqCallbacks = f.mergeArrays(g.Ya._metrika.firstReqCallbacks || [], [
                [this, arguments]
            ]);
            else {
                l || (g.Ya._metrika.firstReqStatus = "process");
                this.counterType && (b["cnt-class"] = this.counterType);
                c.st = Math.round((new Date).getTime() / 1E3);
                c.u = K._userID;
                l = [this.protocol, "//", this.host,
                    "/" + this.resource + "/" + this.counterId
                ].join("");
                var n = [];
                c && (f.forEachKey(c, function(a, b) {
                    "t" != a && f.mergeArrays(n, [a, b])
                }), c.t && f.mergeArrays(n, ["t", c.t]));
                n.length && (b["browser-info"] = n.join(":"));
                return K.superclass.send.call(this, l, b, function() {
                    var b;
                    g.Ya._metrika.firstReqStatus = "complete";
                    this._unregisterRequest(a);
                    var c = g.Ya._metrika.firstReqCallbacks;
                    g.Ya._metrika.firstReqCallbacks = null;
                    if (c)
                        for (b = 0; b < c.length; b++) c[b][0]._sendSavedRequest.apply(c[b][0], c[b][1]);
                    d && d.apply(e, arguments)
                }, this)
            }
        },
        _isRetryEnabled: function() {
            return this.retry && this._storage && this._storage.isEnabled()
        },
        _registerRequest: function(a, b) {
            var c;
            if (this._isRetryEnabled()) {
                b.rqnl = b.rqnl || 0;
                b.rqnl++;
                var d = this._storage.get("retryReqs") || {};
                for (c = 1; d[c];) c++;
                d[c] = {
                    protocol: this.protocol,
                    host: this.host,
                    resource: this.resource,
                    counterId: this.counterId,
                    counterType: this.counterType,
                    postParams: this.postParams,
                    params: a,
                    browserInfo: b,
                    ghid: Ya._globalMetrikaHitId,
                    time: +new Date
                };
                this._storage.set("retryReqs", d);
                return c
            }
        },
        _unregisterRequest: function(a) {
            if (a &&
                this._isRetryEnabled()) {
                var b = this._storage.get("retryReqs") || {};
                b[a] && (delete b[a], this._storage.set("retryReqs", b))
            }
        },
        _getVersion: t(function() {
            return U
        }, "", !0)
    });
    K.initCookie = function() {
        var a = new O,
            b = a.read("uid");
        b || (b = Math.round((new Date).getTime() / 1E3), b = b + "" + f.random(), a.create("uid", b, 1036800));
        K._userID = b
    };
    K.retransmit = function() {
        var a = new N,
            b = a.get("retryReqs") || {},
            c;
        a.remove("retryReqs");
        f.forEachKey(b, function(a, b) {
            g.Ya._metrika.firstReqStatus || (g.Ya._metrika.firstReqStatus = "complete");
            b.ghid && b.ghid != Ya._globalMetrikaHitId && b.time && b.time + 864E5 > +new Date && 2 >= b.browserInfo.rqnl && (c = new K({
                protocol: b.protocol,
                host: b.host,
                resource: b.resource,
                counterId: b.counterId,
                counterType: b.counterType,
                postParams: b.postParams || [],
                retry: !0
            }), c.send(b.params, b.browserInfo))
        })
    };
    f.fletcher = function(a) {
        for (var b = a.length, c = 0, d = 255, e = 255, f, g, h; b;) {
            f = 21 < b ? 21 : b;
            b -= f;
            do g = "string" == typeof a ? a.charCodeAt(c) : a[c], c++, 255 < g && (h = g >> 8, g &= 255, g ^= h), d += g, e += d; while (--f);
            d = (d & 255) + (d >> 8);
            e = (e & 255) + (e >> 8)
        }
        a = (d &
            255) + (d >> 8) << 8 | (e & 255) + (e >> 8);
        return 65535 == a ? 0 : a
    };
    var I = {
        abc: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
        tail: "+/\x3d",
        tailSafe: "*-_",
        encode: function(a, b) {
            var c = (I.abc + (b ? I.tailSafe : I.tail)).split(""),
                d = a.length,
                e = [],
                g = d - d % 3,
                n;
            for (n = 0; n < g; n += 3) {
                var h = (a[n] << 16) + (a[n + 1] << 8) + a[n + 2];
                f.mergeArrays(e, [c[h >> 18 & 63], c[h >> 12 & 63], c[h >> 6 & 63], c[h & 63]])
            }
            switch (d - g) {
                case 1:
                    h = a[g] << 4;
                    f.mergeArrays(e, [c[h >> 6 & 63], c[h & 63], c[64], c[64]]);
                    break;
                case 2:
                    h = (a[g] << 10) + (a[g + 1] << 2), f.mergeArrays(e, [c[h >>
                        12 & 63], c[h >> 6 & 63], c[h & 63], c[64]])
            }
            return e.join("")
        }
    };
    f.warning = function() {
        g.console && "function" == typeof console.warn && console.warn.apply(console, arguments)
    };
    f.trim = function(a, b) {
        a = String(a).replace(/^\s+|\s+$/g, "");
        b && a.length > b && (a = a.substr(0, b));
        return a
    };
    f.isFunction = function(a) {
        return "function" === typeof a
    };
    f.isString = function(a) {
        return "[object String]" == Object.prototype.toString.call(a)
    };
    f.arrayIndexOf = function(a, b) {
        var c;
        for (c = 0; c < a.length; c++)
            if (a[c] === b) return c;
        return -1
    };
    f._playerRegexp =
        /^.+\.mtproxy\.yandex\.net$/;
    f.isMetrikaPlayer = function() {
        return "MetrikaPlayer" == g.name || this._playerRegexp.test(g.location.hostname)
    };
    var m = {
            getDocumentCharset: function() {
                return ("" + (k.characterSet || k.charset || "")).toLowerCase()
            },
            getRootElement: function() {
                var a = k.documentElement;
                return "CSS1Compat" == k.compatMode ? a : k.body || a
            },
            getViewportSize: function() {
                var a = m.getRootElement();
                return [a.clientWidth || g.innerWidth, a.clientHeight || g.innerHeight]
            },
            getDocumentTitle: function() {
                var a = k.title;
                "string" != typeof a &&
                    (a = (a = k.getElementsByTagName("title")) && a.length ? a[0].innerHTML : "");
                return a
            }
        },
        r = {
            _silverlightVersion: "",
            getSilverlightVersion: function() {
                if (!r._silverlightVersion)
                    if (g.ActiveXObject) try {
                        var a = new ActiveXObject("AgControl.AgControl");
                        var b = function(a, b, d, f) {
                            for (; c(a, b);) b[d] += f;
                            b[d] -= f
                        };
                        var c = function(a, b) {
                            return a.isVersionSupported(b[0] + "." + b[1] + "." + b[2] + "." + b[3])
                        };
                        var d = [1, 0, 0, 0];
                        b(a, d, 0, 1);
                        b(a, d, 1, 1);
                        b(a, d, 2, 1E4);
                        b(a, d, 2, 1E3);
                        b(a, d, 2, 100);
                        b(a, d, 2, 10);
                        b(a, d, 2, 1);
                        b(a, d, 3, 1);
                        r._silverlightVersion =
                            d.join(".")
                    } catch (e) {} else if (b = g.navigator, b = b.plugins && b.plugins["Silverlight Plug-In"]) r._silverlightVersion = b.description;
                return r._silverlightVersion || ""
            },
            _flashVersion: 0,
            getFlashVersion: function() {
                if (!r._flashVersion) {
                    var a = g.navigator;
                    if ("undefined" != typeof a.plugins && "object" == typeof a.plugins["Shockwave Flash"]) {
                        var b = a.plugins["Shockwave Flash"];
                        var c = b.version;
                        if ((b = b.description) || c)
                            if (a = a.mimeTypes, "undefined" == typeof a || !a["application/x-shockwave-flash"] || a["application/x-shockwave-flash"].enabledPlugin) c ?
                                r._flashVersion = c : b && (r._flashVersion = b.replace(/([a-zA-Z]|\s)+/, "").replace(/(\s+r|\s+b[0-9]+)/, "."))
                    } else if ("undefined" != typeof g.ActiveXObject) try {
                        if (c = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"), b = c.GetVariable("$version")) r._flashVersion = b.split(" ")[1].replace(/,/g, ".").replace(/[^.\d]/g, "")
                    } catch (d) {}
                }
                return r._flashVersion
            },
            getLanguage: function() {
                return (g.navigator ? navigator.language || navigator.userLanguage || navigator.browserLanguage || navigator.systemLanguage : "").toLowerCase()
            },
            getJavaEnabled: function() {
                try {
                    return navigator.javaEnabled()
                } catch (a) {
                    return !1
                }
            }
        };
    f.fnv32a = function(a) {
        var b = 2166136261,
            c;
        var d = 0;
        for (c = a.length; d < c; ++d) b ^= a.charCodeAt(d), b += (b << 1) + (b << 4) + (b << 7) + (b << 8) + (b << 24);
        return b >>> 0
    };
    r.getFingerPrint = function() {
        var a = [],
            b;
        if (navigator.plugins && navigator.plugins.length)
            for (b = 0; b < navigator.plugins.length; b++) {
                var c = navigator.plugins[b];
                f.mergeArrays(a, [c.name, c.version, c.description, c.filename])
            }
        if (navigator.mimeTypes && navigator.mimeTypes.length)
            for (b = 0; b < navigator.mimeTypes.length; b++) c = navigator.mimeTypes[b], f.mergeArrays(a, [c.type, c.description,
                c.suffixes
            ]);
        return f.fnv32a(a.join(";")) + "01"
    };
    r.getPlatform = function() {
        var a = "";
        try {
            a = "" + navigator.platform
        } catch (b) {}
        return a
    };
    r.getNotificationPermission = function() {
        try {
            var a = Notification.permission
        } catch (b) {}
        switch (a) {
            case "denied":
                return 1;
            case "granted":
                return 2
        }
    };
    r.isIframe = function() {
        try {
            return g.top != g.self
        } catch (a) {
            return !1
        }
    };
    r._nMap = {
        other: "0",
        none: "1",
        unknown: "2",
        wifi: "3",
        ethernet: "4",
        bluetooth: "5",
        cellular: "6",
        wimax: "7",
        mixed: "8"
    };
    r.netType = function() {
        var a = (navigator.connection || {
            type: ""
        }).type;
        return r._nMap[a] || a
    };
    r.isSafari = function() {
        try {
            return navigator.vendor && -1 < navigator.vendor.indexOf("Apple") && navigator.userAgent && !navigator.userAgent.match("CriOS")
        } catch (a) {}
        return !1
    };
    m.removeNode = function(a) {
        var b = a && a.parentNode;
        b && b.removeChild(a)
    };
    var $a = {
            url: S.protocol + "//" + S.host + "/metrika/",
            _value: null,
            init: function() {
                var a = this._getLs().read("isad");
                a ? this._set(a) : this._getReqStatus() || this._send()
            },
            getVal: function() {
                return this._value
            },
            _set: function(a) {
                this._value = "1" == a || "2" == a ? a : null
            },
            _send: function() {
                var a = k.createElement("img"),
                    b = this;
                a.onload = function() {
                    b._saveReq(!1);
                    m.removeNode(this)
                };
                a.onerror = function() {
                    b._saveReq(!0);
                    m.removeNode(this)
                };
                this._setReqStatus("process");
                a.src = this.url + String.fromCharCode(97, 100, 118, 101, 114, 116, 46, 103, 105, 102);
                r.isSafari() && (a.style.position = "absolute", a.style.visibility = "hidden", a.style.width = "0px", a.style.height = "0px", m.getRootElement().appendChild(a))
            },
            _saveReq: function(a) {
                this._value = a = a ? "1" : "2";
                this._setReqStatus("complete");
                this._getLs().create("isad",
                    a, 1200)
            },
            _setReqStatus: function(a) {
                try {
                    g.Ya._metrika.adStatus = a
                } catch (b) {}
            },
            _getReqStatus: function() {
                try {
                    return g.Ya._metrika.adStatus
                } catch (a) {
                    return "complete"
                }
            },
            _getLs: function() {
                this._ls || (this._ls = new O);
                return this._ls
            }
        },
        X = {
            encode: function(a) {
                var b = [],
                    c;
                var d = 0;
                for (c = a.length; d < c; d++) {
                    var e = a.charCodeAt(d);
                    128 > e ? b.push(e) : (127 < e && 2048 > e ? b.push(e >> 6 | 192) : (b.push(e >> 12 | 224), b.push(e >> 6 & 63 | 128)), b.push(e & 63 | 128))
                }
                return b
            },
            decode: function(a) {
                for (var b = "", c = 0, d, e, f; c < a.length;) d = a.charCodeAt(c),
                    128 > d ? (b += String.fromCharCode(d), c++) : 191 < d && 224 > d ? (e = a.charCodeAt(c + 1), b += String.fromCharCode((d & 31) << 6 | e & 63), c += 2) : (e = a.charCodeAt(c + 1), f = a.charCodeAt(c + 2), b += String.fromCharCode((d & 15) << 12 | (e & 63) << 6 | f & 63), c += 3);
                return b
            }
        };
    I.decode = function(a, b) {
        for (var c = I.abc + (b ? I.tailSafe : I.tail), d = 0, e = "", f, g, h, k, p; a.length % 4;) a += "\x3d";
        do {
            f = c.indexOf(a.charAt(d++));
            g = c.indexOf(a.charAt(d++));
            k = c.indexOf(a.charAt(d++));
            p = c.indexOf(a.charAt(d++));
            if (0 > f || 0 > g || 0 > k || 0 > p) return null;
            h = f << 18 | g << 12 | k << 6 | p;
            f = h >> 16 &
                255;
            g = h >> 8 & 255;
            h &= 255;
            e = 64 == k ? e + String.fromCharCode(f) : 64 == p ? e + String.fromCharCode(f, g) : e + String.fromCharCode(f, g, h)
        } while (d < a.length);
        return e
    };
    var ha = K.inherit({
        hitId: 0,
        trackHash: !1,
        trimParams: !1,
        webvisor: !1,
        counter: null,
        counterNum: 0,
        resource: "watch",
        retry: !0,
        postParams: ["site-info"],
        countersNoTitle: "22836271 1143050 29626870 9928105 26128362 29850769".split(" "),
        fake: !1,
        sendTitle: !0,
        _initComponent: function() {
            ha.superclass._initComponent.apply(this, arguments);
            this._trackHash = this.trackHash;
            "0" ===
            "" + this.counterType && (this.sendTitle = -1 === f.arrayIndexOf(this.countersNoTitle, "" + this.counterId))
        },
        setTrackHash: function(a) {
            this._trackHash = a
        },
        sendHit: function(a) {
            this._hitExt({
                url: a.url,
                title: a.title,
                referrer: a.referrer,
                vParams: a.vParams,
                modes: {
                    ar: !0,
                    saveRef: !0,
                    pv: !0
                },
                callback: a.callback,
                ctx: a.ctx
            })
        },
        sendExperiments: function(a) {
            this._hitExt({
                url: z().href,
                title: "",
                referrer: "",
                modes: {
                    ex: !0,
                    ar: !0
                },
                experiments: a.experiments,
                callback: a.callback,
                ctx: a.ctx
            })
        },
        sendPrerenderHit: function(a) {
            this._hitExt({
                url: a.url,
                title: a.title,
                referrer: a.referrer,
                modes: {
                    ar: !0,
                    pq: !0
                }
            })
        },
        sendAjaxHit: function(a) {
            this._hitExt({
                url: a.url,
                title: a.title,
                referrer: a.referrer,
                modes: a.modes
            })
        },
        sendParams: function(a, b, c) {
            this._hitExt({
                url: z().href,
                title: "",
                referrer: "",
                vParams: a,
                modes: {
                    ar: !0,
                    pa: !0,
                    onlyData: !0
                },
                callback: b,
                ctx: c
            })
        },
        sendGoal: function(a, b) {
            if (/[\/&=?#]/.test(a)) f.warning("Incorrect goal");
            else if (a) {
                var c = z();
                this._hitExt({
                    url: "goal://" + c.hostname + "/" + encodeURIComponent(a),
                    title: m.getDocumentTitle(),
                    referrer: c.href,
                    vParams: b.vParams,
                    modes: {
                        ar: !0
                    },
                    callback: b.callback,
                    ctx: b.ctx
                })
            } else f.warning("Empty goal")
        },
        sendClickLink: function(a) {
            this._hitExt({
                url: a.url,
                title: a.title,
                referrer: z().href,
                modes: a.modes
            })
        },
        sendExtLink: function(a) {
            this._hitExt({
                url: a.url,
                title: a.title || "",
                referrer: z().href,
                vParams: a.vParams,
                modes: {
                    ar: !0,
                    ln: !0,
                    ut: na
                },
                callback: a.callback,
                ctx: a.ctx
            })
        },
        sendFileUpload: function(a) {
            this._hitExt({
                url: a.url,
                title: a.title || "",
                referrer: z().href,
                vParams: a.vParams,
                modes: {
                    ar: !0,
                    ln: !0,
                    dl: !0
                },
                callback: a.callback,
                ctx: a.ctx
            })
        },
        sendNotBounce: function(a,
            b) {
            this._hitExt({
                url: z().href,
                title: "",
                referrer: "",
                modes: {
                    cl: a,
                    ar: !0,
                    nb: !0,
                    onlyData: !0
                },
                callback: b.callback,
                ctx: b.ctx
            })
        },
        sendDevice: function(a) {
            this._hitExt({
                browserInfo: {
                    di: a.data,
                    dip: a.port
                },
                callback: a.callback,
                ctx: a.ctx
            })
        },
        _hitExt: function(a) {
            function b(a, b) {
                b && (m[a] = b)
            }
            var c, d;
            if (!f.isMetrikaPlayer()) {
                var e = a.modes || {};
                var g = a.browserInfo || {};
                var h = "undefined" != typeof a.referrer ? a.referrer : ia.lastReferrer;
                var k = a.url || "";
                var m = {};
                e.ar && !e.onlyData && (h = null === h || "" === h ? "" : this._prepareHitUrl(h),
                    k = this._prepareHitUrl(a.url));
                b("page-ref", f.trim(h, Y));
                b("page-url", f.trim(k, Y));
                Sa() ? b("ut", na) : "undefined" != typeof e.ut && b("ut", f.trim(e.ut, vb));
                b("exp", a.experiments);
                a.vParams && (k = f.toJSON(a.vParams), this.trimParams && k.length > wb ? d = !0 : b("site-info", k));
                e.saveRef && (ia.lastReferrer = h);
                this.fake || (c = this._getTechInfo(a.title, e, this.counterId, a.ts, a.tz, this._trackHash, this.hitId, this.webvisor, this.counter));
                f.mixin(g, c, {});
                this.send(m, g, function() {
                    d && this.counter.params(a.vParams);
                    a.userParams && this.counter.userParams(a.userParams);
                    f.isFunction(a.callback) && a.callback.apply(a.ctx, arguments)
                }, this)
            }
        },
        _prepareHitUrl: function(a) {
            var b = z(),
                c = b.host,
                b = b.href;
            if (!f.isString(a)) return b;
            if (-1 != a.search(/^\w+:\/\//)) return a;
            var d = a.charAt(0);
            if ("?" == d) return d = b.search(/\?/), -1 == d ? b + a : b.substr(0, d) + a;
            if ("#" == d) return d = b.search(/#/), -1 == d ? b + a : b.substr(0, d) + a;
            if ("/" == d) {
                if (d = b.search(c), -1 != d) return b.substr(0, d + c.length) + a
            } else return c = b.split("/"), c[c.length - 1] = a, c.join("/");
            return a
        },
        _getTechInfo: function(a, b, c, d, e, h, k, Z, q) {
            function l(a,
                b) {
                a && b && (t[a] = b)
            }

            function n(a) {
                b[a] && l(a, "1")
            }
            var t = {};
            b = b || {};
            d = d || C.getTimestamp();
            e = e || C.getTimezone();
            l("j", r.getJavaEnabled() ? "1" : "");
            l("nt", r.netType());
            P && l("s", P.width + "x" + P.height + "x" + (P.colorDepth || P.pixelDepth));
            g.devicePixelRatio && l("sk", g.devicePixelRatio);
            r.isIframe() && l("ifr", "1");
            l("adb", $a.getVal());
            l("f", r.getFlashVersion());
            l("l", r.getSilverlightVersion());
            l("fpr", r.getFingerPrint());
            l("cn", this.counterNum);
            if (!b.pa) {
                var z = m.getViewportSize();
                l("w", z[0] + "x" + z[1])
            }
            l("z", e);
            l("i",
                d);
            l("et", Math.round((new Date).getTime() / 1E3));
            l("en", m.getDocumentCharset());
            l("v", U);
            l("c", navigator.cookieEnabled ? "1" : "");
            l("la", r.getLanguage());
            l("ntf", r.getNotificationPermission());
            f.random(100) || l("np", I.encode(X.encode(f.trim(r.getPlatform(), 100))));
            h && l("wh", "1");
            e = "ar ln dl ad nb pa pq pv ex".split(" ");
            for (d = 0; d < e.length; d++) n(e[d]);
            e = ["va", "vt", "sn", "sa", "he"];
            b.nb && e.push("cl");
            for (d = 0; d < e.length; d++) h = e[d], l(h, b[h]);
            e = new N({
                counterId: c
            });
            e.isEnabled() && (c = e.getStorageId(), (d = e.get("reqNum")) ?
                d++ : d = 1, e.set("reqNum", d), e.get("reqNum") == d ? (l("ls", c), l("rqn", d)) : (e.remove("reqNum"), e.clearStorageId(), 1 < d && (l("ls", c), l("rqn", 0))));
            l("rn", f.random());
            l("hid", k);
            l("ds", pb(q));
            q._firstPaint || (q._firstPaint = qb(), l("fp", q._firstPaint));
            if (Z) {
                g.name || (g.name = Math.round(65535 * Math.random()));
                if (k = +g.name) 0 > k && (k *= -1), k %= 65535;
                l("wn", k || f.fletcher(g.name));
                try {
                    g.history && l("hl", String(g.history.length))
                } catch (Gb) {}
            }
            k = "";
            this.sendTitle && (k = this._getTitle(a));
            l("t", k);
            return t
        },
        _getTitle: function(a) {
            a =
                "undefined" == typeof a ? (a = m.getDocumentTitle()) ? f.trim(a, ab) : "" : f.trim(a, ab);
            return a
        }
    });
    f.array2Props = function(a) {
        var b = a.length,
            c = {},
            d = c,
            e;
        for (e = 0; e < b - 1; e++) {
            var f = a[e];
            d[f] = {};
            e < b - 2 && (d = d[f])
        }
        d[f] = a[b - 1];
        return c
    };
    var T = x.inherit({
            sampling: 1,
            counterId: 26302566,
            _initComponent: function() {
                T.superclass._initComponent.apply(this, arguments);
                this._sender = new ha({
                    protocol: "https:",
                    counterId: this.counterId,
                    retry: !1,
                    counter: {}
                })
            },
            log: function() {
                this.logParams(f.array2Props(arguments))
            },
            logParams: function(a) {
                Math.random() <
                    this.sampling && this._sender.sendHit({
                        url: B.href,
                        title: "",
                        referrer: "",
                        vParams: a
                    })
            }
        }),
        xb = K.inherit({
            resource: "webvisor",
            retry: !0,
            postParams: ["wv-data"],
            sendPacket: function(a, b, c, d, e, h, k, m) {
                if (!a || !a.length) return !1;
                var l = I.encode(a, !0);
                if (0 == l.indexOf("AAAAAAAAADw") && g.Error) {
                    var n = Error();
                    "string" == typeof n.stack && (new T({
                        sampling: .1
                    })).log("bad visor packet 5", 1)
                }
                a = {
                    rn: f.random(),
                    "page-url": b,
                    wmode: 0,
                    "wv-type": 0,
                    "wv-hit": c,
                    "wv-part": d + 1,
                    "wv-check": f.fletcher(a),
                    "wv-data": l
                };
                e = {
                    v: this._getVersion(),
                    z: e,
                    i: h
                };
                return this.send(a, e, k, m)
            }
        }),
        Da = Za.inherit({
            protocol: "",
            counterId: "",
            counterType: "",
            meta: null,
            maxBufferSize: 7500,
            flushTimeout: 3E4,
            storageKey: "visorbuff",
            active: !1,
            _initComponent: function() {
                this.storage = new N({
                    counterId: this.counterId
                });
                this._sender = new xb({
                    protocol: this.protocol,
                    counterId: this.counterId,
                    counterType: this.counterType
                });
                Da.superclass._initComponent.apply(this, arguments)
            },
            onFlush: function(a, b, c) {
                this._sender.sendPacket(a, b.url, b.hitId, c, b.timezone, b.timestamp)
            }
        }),
        kb = K.inherit({
            resource: "webvisor",
            transports: [da, V],
            postParams: ["wv-data"],
            sendContent: function(a, b, c, d, e, f, g) {
                if (!a) return !1; - 1 < a.indexOf("\r") && (a = a.replace(/\r\n/g, "\n"));
                a = {
                    "wv-type": 1,
                    "page-url": z().href,
                    "wv-hit": c,
                    "wv-data": I.encode(X.encode(a))
                };
                return 245E3 < a["wv-data"].length ? !1 : this.send(a, {
                    z: d,
                    i: e,
                    pct: b || ""
                }, f, g)
            }
        });
    f.isEqual = function(a, b) {
        var c = !0;
        f.forEachKey(a, function(a, e) {
            b.hasOwnProperty(a) && b[a] === e || (c = !1)
        });
        if (!c) return c;
        f.forEachKey(b, function(b, e) {
            a.hasOwnProperty(b) && a[b] === e || (c = !1)
        });
        return c
    };
    var h = x.inherit({
        _initComponent: function() {
            h.superclass._initComponent.apply(this,
                arguments);
            this._listeners = []
        },
        on: function(a, b, c, d, e) {
            e = h._getOpts(e);
            b = b.split(",");
            var f = b.length,
                k = this._listeners,
                m;
            for (m = 0; m < f; m++) {
                var q = b[m];
                var p = t(function(a) {
                    c.call(d || this, a || g.event)
                }, "on" + q);
                k[k.length] = [a, q, c, d, e, p];
                a.addEventListener ? a.addEventListener(q, p, h._prepOpts(e)) : a.attachEvent && a.attachEvent("on" + q, p)
            }
        },
        un: function(a, b, c, d, e) {
            e = h._getOpts(e);
            var g = this._listeners,
                k = g.length,
                m;
            for (m = 0; m < k; m++) {
                var q = g[m];
                if (q[0] == a && q[1] == b && q[2] == c && q[3] == d && f.isEqual(q[4], e)) {
                    g.splice(m, 1);
                    this._removeListener(a, b, q[5], e);
                    break
                }
            }
        },
        unAll: function() {
            var a = this._listeners,
                b = a.length,
                c;
            for (c = 0; c < b; c++) {
                var d = a[c];
                this._removeListener(d[0], d[1], d[5], d[4])
            }
            a.length = 0
        },
        _removeListener: function(a, b, c, d) {
            a.removeEventListener ? a.removeEventListener(b, c, h._prepOpts(d)) : a.detachEvent && a.detachEvent("on" + b, c)
        }
    });
    h.supportsPassive = function() {
        if (h._supportsPassive !== Q) return h._supportsPassive;
        h._supportsPassive = !1;
        try {
            var a = Object.defineProperty({}, "passive", {
                get: function() {
                    h._supportsPassive = !0
                }
            });
            g.addEventListener("test", null, a)
        } catch (b) {}
        return h._supportsPassive
    };
    h._getOpts = function(a) {
        return f.mixin({
            capture: !0,
            passive: !0
        }, a || {})
    };
    h._prepOpts = function(a) {
        return h.supportsPassive() ? a : !!a.capture
    };
    h.on = function() {
        h._instance || (h._instance = new h);
        h._instance.on.apply(h._instance, arguments)
    };
    h.un = function() {
        h._instance && h._instance.un.apply(h._instance, arguments)
    };
    m.getDocumentHTML = function() {
        var a = "";
        var b = k.documentElement;
        var c = b.outerHTML,
            d, e;
        if (c) b = c;
        else {
            c = b.attributes;
            var f = "";
            for (d =
                0; d < c.length; d++)(e = c[d]) && (f += " " + e.name + '\x3d"' + (e.value || "") + '"');
            b = "\x3chtml" + f + "\x3e" + b.innerHTML + "\x3c/html\x3e"
        }
        if (c = k.doctype) a = c.publicId ? ' PUBLIC "' + c.publicId + '"' : "", f = c.systemId ? ' "' + c.systemId + '"' : "", a = "\x3c!DOCTYPE " + c.name + a + f + "\x3e\n";
        return a + b
    };
    m.getDocumentScroll = function() {
        return [g.pageXOffset || k.documentElement && k.documentElement.scrollLeft || k.body && k.body.scrollLeft || 0, g.pageYOffset || k.documentElement && k.documentElement.scrollTop || k.body && k.body.scrollTop || 0]
    };
    m.getElementParent =
        function(a) {
            if (!a || a == k.documentElement) return null;
            if (a == k.body) return k.documentElement;
            var b = null;
            try {
                b = a.parentNode
            } catch (c) {}
            return b
        };
    m.getElementChildren = function(a, b) {
        var c = [],
            d, e, g;
        if (a && (d = a.childNodes)) {
            var h = 0;
            for (g = d.length; h < g; h++) {
                var k = d[h];
                (e = "INPUT" == k.nodeName && k.type && "hidden" == k.type.toLocaleLowerCase()) || b && k.nodeName != b || f.mergeArrays(c, [k])
            }
        }
        return c
    };
    m.getElementNeighborPosition = function(a) {
        var b = m.getElementParent(a),
            c;
        if (b) {
            var d = 0;
            b = b.childNodes;
            var e = a && a.nodeName;
            for (c =
                0; c < b.length; c++) {
                var f = b[c] && b[c].nodeName;
                if (e == f) {
                    if (a == b[c]) return d;
                    d++
                }
            }
        }
        return 0
    };
    m.getElementXY = function(a) {
        var b;
        if (!a || !a.ownerDocument || "PARAM" == a.tagName || a == k.body || a == k.documentElement) return [0, 0];
        if (a.getBoundingClientRect) {
            a = a.getBoundingClientRect();
            var c = m.getDocumentScroll();
            return [Math.round(a.left + c[0]), Math.round(a.top + c[1])]
        }
        for (b = c = 0; a;) c += a.offsetLeft, b += a.offsetTop, a = a.offsetParent;
        return [c, b]
    };
    m.getDocumentSize = function() {
        var a = m.getRootElement(),
            b = m.getViewportSize();
        return [Math.max(a.scrollWidth,
            b[0]), Math.max(a.scrollHeight, b[1])]
    };
    m.getElementSize = function(a) {
        var b;
        return a == k.body || a == k.documentElement ? m.getDocumentSize() : (b = a.getBoundingClientRect && a.getBoundingClientRect()) ? [b.width, b.height] : [a.offsetWidth, a.offsetHeight]
    };
    m.getElementRegion = function(a) {
        var b = m.getElementXY(a);
        a = m.getElementSize(a);
        return [b[0], b[1], a[0], a[1]]
    };
    m.calcChildrenChecksum = function(a) {
        var b = t(function() {
            return a.innerHTML
        }, "", !0)() || "";
        return f.fletcher(b.replace(/(<[^>]*>|[\u0000-\u0020])/g, ""))
    };
    m.getFormNumber =
        function(a) {
            var b = k.getElementsByTagName("form"),
                c;
            var d = 0;
            for (c = b.length; d < c; d++)
                if (b[d] == a) return d;
            return -1
        };
    m.isEmptyField = function(a) {
        return "INPUT" == a.nodeName && "submit" != a.type && "image" != a.type && "hidden" != a.type ? "radio" == a.type || "checkbox" == a.type ? !a.checked : !a.value : "TEXTAREA" == a.nodeName ? !a.value : "SELECT" == a.nodeName ? 0 > a.selectedIndex : !0
    };
    m.calcTextChecksum = function(a) {
        var b = "";
        a = a.childNodes;
        var c;
        var d = 0;
        for (c = a.length; d < c; d++) a[d] && 3 == a[d].nodeType && (b += a[d].nodeValue);
        return f.fletcher(b.replace(/[\u0000-\u0020]+/g,
            ""))
    };
    m.calcAttribChecksum = function(a) {
        var b = "",
            c = "width height align title alt name".split(" "),
            d;
        "IMG" == a.tagName && (b += a.src.toLowerCase());
        "A" == a.tagName && (b += a.href.toLowerCase());
        b += String(a.className || "").toLowerCase();
        for (d = 0; d < c.length; d++) a.getAttribute && (b += String(a.getAttribute(c[d]) || "").toLowerCase());
        return f.fletcher(b.replace(/[\u0000-\u0020]+/g, ""))
    };
    m.classNameExists = function(a, b) {
        try {
            return (new RegExp("(?:^|\\s)" + b + "(?:\\s|$)")).test(a.className)
        } catch (c) {
            return !1
        }
    };
    m.getElementsByClassName =
        function(a, b) {
            var c;
            b = b || k;
            var d = b.getElementsByTagName("*");
            var e = [];
            for (c = 0; c < d.length; c++) m.classNameExists(d[c], a) && e.push(d[c]);
            return e
        };
    var jb = !ga(/webkit/) && ga(/gecko/),
        bb = x.inherit({
            hid: 0,
            tz: 0,
            ts: 0,
            counterId: 0,
            counterType: 0,
            url: "",
            protocol: "",
            enabled: !1,
            _initComponent: function() {
                if (this.isEnabled()) {
                    var a = this._getStorage();
                    var b = a.read("visorc");
                    "b" != b && "w" != b && (b = "");
                    if (!a.isEnabled() || ga("opera mini")) b = "b";
                    this._vc = b;
                    "b" != b && (this._recorder = new gb(this.protocol, this.counterId, this.counterType,
                        this.hid, this.counter));
                    bb.superclass._initComponent.apply(this, arguments)
                }
            },
            start: function(a) {
                if (this.isEnabled() && this._recorder) {
                    a = a || {};
                    var b = +a.recp;
                    if (!isFinite(b) || 0 > b || 1 < b) var c = "w";
                    c || (c = this.hid % 1E4 / 1E4 < b ? "w" : "b");
                    this._getStorage().create("visorc", c, 30);
                    "w" == c ? (this._recorder.start(), b = a.arch_type, (a = a.urls) && b && "none" != b && this._recorder.uploadPages(a, b)) : this._recorder.stop()
                }
            },
            isEnabled: function() {
                return this.enabled
            },
            getVc: function() {
                return this._vc
            },
            _getStorage: function() {
                this._storage ||
                    (this._storage = new O({
                        counterId: this.counterId
                    }));
                return this._storage
            }
        }),
        yb = da.inherit({
            id: "RawBodyXHR",
            postParams: ["body"],
            _setHeaders: function() {},
            _preparePostParams: function(a) {
                return a.post.body || ""
            }
        });
    f.arrayFilter = function(a, b, c) {
        var d = [],
            e;
        for (e = 0; e < a.length; e++) b.call(c, a[e], e, a) && d.push(a[e]);
        return d
    };
    f.arrDiff = function(a, b) {
        return f.arrayFilter(a, function(a) {
            return -1 === f.arrayIndexOf(b, a)
        })
    };
    ma.parse = function(a) {
        try {
            return JSON.parse(a)
        } catch (b) {
            return null
        }
    };
    f.getTld = function() {
        if (!this._tld) {
            var a =
                B.hostname.split(".");
            this._tld = a[a.length - 1]
        }
        return this._tld
    };
    var C = {
            getMinutes: function() {
                return Math.floor(+new Date / 1E3 / 60)
            }
        },
        aa = ca.inherit({
            id: "script",
            request: function(a, b, c, d) {
                var e = f.getNativeFunction("createElement", k)("script");
                if (!e) return c.call(d, !1), !1;
                var h = "_ymjsp" + f.random();
                g[h] = t(function() {
                    try {
                        delete g[h]
                    } catch (n) {
                        g[h] = Q
                    }
                    c.apply(d, f.mergeArrays([!0], arguments));
                    e.parentNode && e.parentNode.removeChild(e)
                }, "transport.script");
                e.type = "text/javascript";
                e.src = this._buildUrl(a, f.mixin({
                    wmode: 5,
                    callback: h
                }, b));
                a = k.getElementsByTagName("head")[0];
                a || (a = k.createElement("head"), k.documentElement.appendChild(a));
                a.insertBefore(e, a.firstChild);
                return !0
            }
        }),
        xa = ha.inherit({
            transports: [aa],
            trimParams: !0,
            _initComponent: function() {
                xa.superclass._initComponent.apply(this, arguments);
                this._ilStorage = new N({
                    counterId: this.counterId
                })
            },
            sendHit: function(a) {
                var b = {},
                    c = this._ilStorage.get("il");
                a.visitColor && (b.vc = a.visitColor);
                a.hasPrerender && (b.pr = 1);
                c && (this._ilStorage.remove("il"), b.ilt = I.encode(X.encode(f.trim(c,
                    cb))));
                this._hitExt({
                    url: a.url,
                    title: a.title,
                    referrer: a.referrer,
                    vParams: a.vParams,
                    userParams: a.userParams,
                    experiments: a.experiments,
                    modes: a.modes,
                    browserInfo: b,
                    ts: a.ts,
                    tz: a.tz,
                    callback: a.callback,
                    ctx: a.ctx
                })
            }
        }),
        zb = x.inherit({
            cid: 3,
            cnt: 0,
            _initComponent: function() {
                this._storage = new N
            },
            hit: function(a) {
                var b = this,
                    c = this._storage.get("wasSynced");
                c && c.time + 864E5 > +new Date || g.Ya._metrika.fakeHit ? a() : (g.Ya._metrika.fakeHit = !0, this._getSender().sendHit({
                    callback: function() {
                        b._storage.set("wasSynced", {
                            time: +new Date
                        });
                        a()
                    }
                }))
            },
            _getSender: function() {
                this._sender || (this._sender = new xa({
                    protocol: "https:",
                    counterType: this.cnt,
                    counterId: this.cid,
                    sendTitle: !1,
                    dontSendRequests: this.dontSendRequests,
                    fake: !0
                }));
                return this._sender
            }
        }),
        Ab = x.inherit({
            baseUrl: "mc.yandex.",
            baseTld: "ru",
            syncTlds: {
                ua: ["ua"],
                by: ["by"],
                kz: ["kz"],
                "com.tr": ["com.tr"]
            },
            langToDomain: {
                uk: "ua",
                be: "by",
                tr: "com.tr",
                kk: "kz"
            },
            sync: function(a) {
                var b = this,
                    c = this._need();
                !this._is() && c ? (this._setStatus(!0), Sa() ? this._getCn().hit(function() {
                        b._sync(c, a)
                    }) : a(function() {
                        b._sync(c)
                    })) :
                    a()
            },
            _is: function() {
                try {
                    return !!g.Ya._metrika.startSync
                } catch (a) {
                    return !1
                }
            },
            _setStatus: function(a) {
                try {
                    g.Ya._metrika.startSync = a
                } catch (b) {}
            },
            _need: function() {
                var a = this._getDomainByLang(),
                    b = this._getTld(),
                    c = [],
                    d;
                (d = this.syncTlds[b]) && c.push.apply(c, d);
                d = this.syncTlds[a];
                a !== b && d && c.push.apply(c, d);
                var e = this._getLs().get("synced") || {};
                c = f.arrayFilter(c, function(a) {
                    return (e[a] || 1) + 1440 < C.getMinutes()
                });
                return c.length && c || !1
            },
            _sync: function(a, b) {
                var c, d = 0,
                    e = S.protocol + "//",
                    f = a.length,
                    g = this;
                if (0 < f) {
                    b =
                        b || function() {};
                    var h = function() {
                        d++;
                        f === d && b()
                    };
                    var k = g._getLs();
                    var m = new M;
                    for (c = 0; c < f; c++)(function(a) {
                        m.request(e + (g.baseUrl + a) + "/sync_cookie_image_check", {}, function(b) {
                            h();
                            var c = C.getMinutes();
                            b || (c -= 1435);
                            b = k.get("synced") || {};
                            b[a] = c;
                            k.set("synced", b)
                        })
                    })(a[c])
                } else b()
            },
            _getCn: function() {
                this._cn || (this._cn = new zb({
                    fake: !0,
                    dontSendRequests: this.dontSendRequests
                }));
                return this._cn
            },
            _getLs: function() {
                this._ls || (this._ls = new N);
                return this._ls
            },
            _getTld: function() {
                var a = f.getTld();
                return {
                    tr: "com.tr",
                    "\u0440\u0444": "ru",
                    "xn--p1ai": "ru",
                    "\u0443\u043a\u0440": "ua",
                    "xn--j1amh": "ua",
                    "\u0431\u0435\u043b": "by",
                    "xn--90ais": "by"
                }[a] || a
            },
            _getDomainByLang: function() {
                if (!g.navigator) return "ru";
                try {
                    var a = navigator.languages ? navigator.languages[0] : r.getLanguage()
                } catch (b) {}
                a = (a || "").toLowerCase().split("-")[0];
                return this.langToDomain[a] || "ru"
            }
        });
    r.isAndroid = t(function() {
            var a = navigator.userAgent.toLowerCase();
            return -1 < a.indexOf("android") && -1 < a.indexOf("mobile") && navigator.platform.match(/^android|linux armv/i)
        },
        "", !0);
    f.isDev = function() {
        if (f._isDevSetted) return f._isDev;
        try {
            f._isDevSetted = !0;
            var a = new Image;
            Object.defineProperty(a, "id", {
                get: function() {
                    f._isDev = !0
                }
            })
        } catch (b) {}
    };
    var ea = {
            _url: S.protocol + "//" + S.host + "/user_storage_set?",
            _params: {},
            init: function(a) {
                this._params = a || {}
            },
            save: function(a, b) {
                this._getReq().request(this._url + ba.stringify({
                    key: a,
                    value: f.toJSON(b)
                }));
                this._getLs().set(a, b)
            },
            get: function(a) {
                return {
                    remote: this._params[a],
                    local: this._getLs().get(a)
                }
            },
            getNum: function(a) {
                a = this.get(a);
                return Math.max(+a.remote ||
                    0, +a.local || 0)
            },
            _getLs: function() {
                this._ls || (this._ls = new N);
                return this._ls
            },
            _getReq: function() {
                this._req || (this._req = new M);
                return this._req
            }
        },
        Bb = {
            sync: t(function(a, b) {
                var c = ["30102", "29009"],
                    d = {
                        t: 'UV|L7,!"T[rwe\x26D_\x3eZIb\\aW#98Y.PC6k'
                    };
                if (this._enabled(a, b)) {
                    this._setStatus(!0);
                    var e = new yb({
                        method: "GET",
                        withCredentials: !1
                    });
                    var f = c.length;
                    (function Z(a) {
                        var b = c[a];
                        a < f ? e.request("http://127.0.0.1:" + b + "/p", d, function(c, d) {
                            c ? this._save(c, d, b) : Z.call(this, a + 1)
                        }, this) : this._save(!1)
                    }).call(this,
                        0)
                }
            }, "ds"),
            _save: function(a, b, c) {
                var d = C.getMinutes();
                a ? (new ha({
                    protocol: "https:",
                    counterType: 0,
                    counterId: 42822899,
                    sendTitle: !1,
                    fake: !0
                })).sendDevice({
                    data: f.trim(b),
                    port: c
                }) : d -= 45;
                ea.save("ds", d)
            },
            _is: function() {
                try {
                    return !!g.Ya._metrika.dSync
                } catch (a) {
                    return !1
                }
            },
            _enabled: function(a, b) {
                var c = 60 < C.getMinutes() - ea.getNum("ds"),
                    d = 0 == z().hostname.search(/^(.*\.)?((ya|yandex(\-team)?)\.(com\.)?\w+|(auto|kinopoisk)\.ru|yadi\.sk|yastatic\.net)$/) || 0 === b && 0 <= f.arrayIndexOf([39370095, 1282253, 29302335], a);
                return c && d && !this._is() && r.isAndroid() && !f.isDev()
            },
            _setStatus: function(a) {
                try {
                    g.Ya._metrika.dSync = a
                } catch (b) {}
            }
        },
        A = {
            getPos: function(a) {
                var b = m.getRootElement(),
                    c = m.getDocumentScroll();
                return [a.pageX || a.clientX + c[0] - (b.clientLeft || 0) || 0, a.pageY || a.clientY + c[1] - (b.clientTop || 0) || 0]
            },
            getTarget: function(a) {
                var b = null;
                try {
                    (b = a.target || a.srcElement) && !b.ownerDocument && b.documentElement && (b = b.documentElement)
                } catch (c) {}
                return b
            },
            getMouseButton: function(a) {
                return a.which || a.button == Q ? a.which : a.button & 1 ?
                    1 : a.button & 2 ? 3 : a.button & 4 ? 2 : 0
            },
            prevent: function(a) {
                a = a || g.event;
                a.preventDefault ? a.preventDefault() : a.returnValue = !1
            }
        };
    A.dispatchCustomEvent = t(function(a, b) {
        var c;
        b = b || k;
        if (c = f.getNativeFunction("createEvent", k)("Event")) c.initEvent(a, !1, !1), f.getNativeFunction("dispatchEvent", b)(c)
    }, "evt.dispatch");
    h.ready = function(a) {
        var b = g.performance;
        if ("object" == typeof b && b.timing && b.timing.domContentLoadedEventStart) a();
        else {
            var c = function() {
                h.un(k, "DOMContentLoaded", c);
                h.un(g, "load", c);
                a()
            };
            h.on(k, "DOMContentLoaded",
                c);
            h.on(g, "load", c)
        }
    };
    var ia = {
        lastReferrer: null
    };
    f.isObject = function(a) {
        try {
            return a && null !== a && "[object Object]" == Object.prototype.toString.call(a)
        } catch (b) {
            return !1
        }
    };
    f.isNumber = function(a) {
        return isFinite(a) && !isNaN(a) && "[object Number]" == Object.prototype.toString.call(a)
    };
    f.clearTimeout = function(a) {
        return f.getNativeFunction("clearTimeout")(a)
    };
    f._urlParser = null;
    f.parseUrl = function(a) {
        if (!this._urlParser) try {
            this._urlParser = k.createElement("a")
        } catch (b) {}
        return this._urlParser ? (this._urlParser.href =
            a, {
                protocol: this._urlParser.protocol,
                host: this._urlParser.host,
                port: this._urlParser.port,
                hostname: this._urlParser.hostname,
                hash: this._urlParser.hash,
                search: this._urlParser.search,
                query: this._urlParser.search.replace(/^\?/, ""),
                pathname: this._urlParser.pathname || "/",
                path: (this._urlParser.pathname || "/") + this._urlParser.search,
                href: this._urlParser.href
            }) : {}
    };
    r.isIE = function() {
        return k && !k.addEventListener || !1
    };
    var ja = {};
    ja._cookie = new O({
        onlyCurrentDomain: !0
    });
    ja.log = t(function() {
        var a = -1 < B.href.indexOf("_ym_debug\x3d1") ||
            g._ym_debug;
        a && this._cookie.create("debug", "1");
        g.console && console.log && (a || "1" === this._cookie.read("debug")) && console.log.apply(console, arguments)
    }, "DebugConsole.log");
    var Cb = K.inherit({
            resource: "clmap",
            retry: !0,
            transports: [M],
            sendClick: function(a, b, c, d) {
                this.send({
                    "page-url": a,
                    "pointer-click": b
                }, {}, c, d)
            }
        }),
        Db = x.inherit({
            filter: null,
            ignoreTags: [],
            quota: 0,
            isTrackHash: !1,
            protocol: "",
            counterId: 0,
            counterType: 0,
            startTime: 0,
            dontSendRequests: !1,
            MAX_LEN_PATH: 128,
            TIMEOUT_CLICK: 50,
            TIMEOUT_SAME_CLICKS: 1E3,
            DELTA_SAME_CLICKS: 2,
            tags: "A B BIG BODY BUTTON DD DIV DL DT EM FIELDSET FORM H1 H2 H3 H4 H5 H6 HR I IMG INPUT LI OL P PRE SELECT SMALL SPAN STRONG SUB SUP TABLE TBODY TD TEXTAREA TFOOT TH THEAD TR U UL ABBR AREA BLOCKQUOTE CAPTION CENTER CITE CODE CANVAS DFN EMBED FONT INS KBD LEGEND LABEL MAP OBJECT Q S SAMP STRIKE TT ARTICLE AUDIO ASIDE FOOTER HEADER MENU METER NAV PROGRESS SECTION TIME VIDEO NOINDEX NOBR MAIN".split(" "),
            _initComponent: function() {
                var a, b;
                this._lastClick = null;
                this.hasQuota = !!this.quota;
                this._quota = this.quota;
                this._ignoreTags = [];
                if (this.ignoreTags)
                    for (a = 0; a < this.ignoreTags.length; a++) this.ignoreTags[a] && f.mergeArrays(this._ignoreTags, [String(this.ignoreTags[a]).toUpperCase()]);
                this._cacheTags = {};
                a = 59;
                var c = String.fromCharCode;
                for (b = 0; b < this.tags.length; b++) this._cacheTags[this.tags[b]] = c(a), c(a), a++;
                this._sender = new Cb({
                    dontSendRequests: this.dontSendRequests,
                    protocol: this.protocol,
                    counterId: this.counterId,
                    counterType: this.counterType
                });
                this._start = !1;
                this.start()
            },
            destroy: function() {
                this.stop()
            },
            start: function() {
                if (!this._start) h.on(k, "click", this._handler, this);
                this._start = !0
            },
            stop: function() {
                this._start && h.un(k, "click", this._handler, this);
                this._start = !1
            },
            setTrackHash: function(a) {
                this.isTrackHash = a
            },
            _isIgnore: function(a) {
                return m.classNameExists(a, "(ym-disable-clickmap|ym-clickmap-ignore)")
            },
            _handler: function(a) {
                a = {
                    el: A.getTarget(a),
                    pos: A.getPos(a),
                    button: A.getMouseButton(a),
                    time: +new Date
                };
                if (this._isTrackingClick(a)) {
                    var b = m.getElementSize(a.el);
                    var c = m.getElementXY(a.el);
                    b = ["rn", f.random(),
                        "x", Math.floor(65535 * (a.pos[0] - c[0]) / (b[0] || 1)), "y", Math.floor(65535 * (a.pos[1] - c[1]) / (b[1] || 1)), "t", Math.floor((a.time - this.startTime) / 100), "p", this._getElPath(a.el)
                    ];
                    c = z().href;
                    this.isTrackHash ? f.mergeArrays(b, ["wh", "1"]) : c = c.split("#")[0];
                    this._sender.sendClick(f.trim(c, Y), b.join(":"));
                    this._lastClick = a
                }
            },
            _isTrackingClick: function(a) {
                var b;
                if (g.ymDisabledClickmap || f.isMetrikaPlayer() || !a.el) return !1;
                var c = a.el.tagName;
                if ((2 == a.button || 3 == a.button) && "A" != c || this.filter && !this.filter(a.el, c)) return !1;
                for (b = 0; b < this._ignoreTags.length; b++)
                    if (this._ignoreTags[b] == c) return !1;
                for (c = a.el; c;) {
                    if (this._isIgnore(c)) return !1;
                    c = c.parentNode
                }
                if (this._lastClick) {
                    if (a.time - this._lastClick.time < this.TIMEOUT_CLICK) return !1;
                    c = Math.abs(this._lastClick.pos[0] - a.pos[0]);
                    b = Math.abs(this._lastClick.pos[1] - a.pos[1]);
                    var d = a.time - this._lastClick.time;
                    if (this._lastClick.el == a.el && c < this.DELTA_SAME_CLICKS && b < this.DELTA_SAME_CLICKS && d < this.TIMEOUT_SAME_CLICKS) return !1
                }
                if (this.hasQuota) {
                    if (!this._quota) return !1;
                    this._quota--
                }
                return !0
            },
            _getElPath: function(a) {
                for (var b = ""; a && a.parentNode && "BODY" != a.tagName && "HTML" != a.tagName;) b += this._cacheTags[a.tagName] || "*", b += m.getElementNeighborPosition(a) || "", a = a.parentNode;
                return f.trim(b, this.MAX_LEN_PATH)
            }
        });
    m.loadScript = function(a, b) {
        b = b || g;
        var c = f.mixin({
                type: "text/javascript",
                charset: "utf-8",
                async: !0
            }, a),
            d = b.document,
            e = f.getNativeFunction("createElement", d),
            h = e("script");
        if (h) {
            h.type = c.type;
            h.charset = c.charset;
            h.src = c.src;
            c.async && (h.async = !0);
            try {
                var k = d.getElementsByTagName("head")[0];
                if (!k) {
                    var m = d.getElementsByTagName("html")[0];
                    k = e("head");
                    m && m.appendChild(k)
                }
                k.insertBefore(h, k.firstChild);
                return h
            } catch (q) {}
        }
    };
    var db = x.inherit({
        _initComponent: function() {
            db.superclass._initComponent.apply(this, arguments);
            this._executedMsgs = {};
            h.on(g, "message", this._onMessage, this)
        },
        _buildRemoteIframe: function(a) {
            var b = f.getNativeFunction("createElement", k)("div"),
                c = k.body || k.documentElement;
            if (c) {
                b.innerHTML = '\x3ciframe name\x3d"RemoteIframe" allowtransparency\x3d"true" style\x3d"position: absolute; left: -999px; top: -999px; width: 1px; height: 1px;"\x3e\x3c/iframe\x3e';
                var d = b.firstChild;
                d.onload = function() {
                    m.loadScript({
                        src: a
                    }, d.contentWindow)
                };
                g._ym__remoteIframeEl = d;
                b.createShadowRoot || b.webkitCreateShadowRoot ? (c.appendChild(b), b.removeChild(d), (c = b.createShadowRoot ? b.createShadowRoot() : b.webkitCreateShadowRoot()) && c.appendChild(d), g._ym__remoteIframeContainer = b) : (c.appendChild(d), g._ym__remoteIframeContainer = d)
            }
        },
        _isAllowedLang: function(a) {
            return -1 !== f.arrayIndexOf(["ru", "uk", "en", "tr"], a)
        },
        _isAllowedOrigin: function(a) {
            return /^http:\/\/(.+\.)?webvisor\.com\/?$/.test(a)
        },
        _isAllowedStatic: function(a) {
            return /^https?:\/\/(((.+\.)?dev\.webvisor\.com)|(yastatic\.net))(\/.*)?$/.test(a)
        },
        _onMessage: function(a) {
            try {
                var b = a.origin
            } catch (c) {}
            b && this._isAllowedOrigin(b) && (b = ma.parse(a.data)) && "appendremote" === b.action && this._isAllowedStatic(b.domain) && this._isAllowedLang(b.lang) && !this._executedMsgs[b.id] && (this._executedMsgs[b.id] = !0, g._ym__postMessageEvent = a, g._ym__inpageMode = b.inpageMode, g._ym__initMessage = b.initMessage, this._buildRemoteIframe(b.domain + "/cdn/inpage-remote/inpage-remote." +
                b.lang + ".js"))
        }
    });
    f.pad = function(a) {
        return (10 > a ? "0" : "") + a
    };
    C.getTimestamp = function() {
        var a = new Date,
            a = [a.getFullYear(), a.getMonth() + 1, a.getDate(), a.getHours(), a.getMinutes(), a.getSeconds()],
            b = "",
            c;
        for (c = 0; c < a.length; c++) b += f.pad(a[c]);
        return b
    };
    C.getTimezone = function() {
        return -(new Date).getTimezoneOffset()
    };
    f.bind = function(a, b) {
        return function() {
            return a.apply(b || this, arguments)
        }
    };
    var eb = x.inherit({
            counter: null,
            prefsEcommerce: null,
            dataLayerName: "dataLayer",
            allowedEvents: ["add", "delete", "remove", "purchase",
                "detail"
            ],
            _initComponent: function() {
                var a = "customArr";
                eb.superclass._initComponent.apply(this, arguments);
                this._overridePush(this.prefsEcommerce) || (f.isString(this.prefsEcommerce) && (this.dataLayerName = this.prefsEcommerce), a = this.dataLayerName, this._tryTimeout = f.bind(this._tryTimeout, this), this._tryTimeout());
                this.counter._ecommerce = a
            },
            _overridePush: function(a) {
                if (a && "function" == typeof a.push) {
                    var b = this;
                    b._send(a);
                    var c = a.push;
                    a.push = function() {
                        b._send([].slice.call(arguments, 0));
                        c.apply(this, arguments)
                    };
                    return !0
                }
                return !1
            },
            _tryTimeout: function() {
                this._overridePush(g[this.dataLayerName]) || f.setTimeout(this._tryTimeout, 1E3, "dlObserver")
            },
            _send: function(a) {
                var b = [],
                    c = this.allowedEvents,
                    d, e;
                var g = 0;
                for (e = a.length; g < e; g++)
                    if ((d = a[g]) && d.ecommerce) {
                        var h = {};
                        var k = !1;
                        f.forEachKey(d.ecommerce, function(a, b) {
                            0 <= f.arrayIndexOf(c, a) && (k = !0, h[a] = b)
                        });
                        k && b.push(h)
                    }
                b.length && this.counter.params({
                    __ym: {
                        ecommerce: b
                    }
                })
            }
        }),
        Eb = {
            match: function() {
                this.enabled() && h.ready(function() {
                    var a = f.getNativeFunction("createElement",
                        k)("iframe");
                    a.onload = function() {
                        ea.save("cm", C.getMinutes());
                        m.removeNode(a)
                    };
                    a.style.display = "none";
                    a.src = S.protocol + "//" + S.host + "/metrika/watch_match.html";
                    k.documentElement.appendChild(a)
                })
            },
            enabled: function() {
                return 1440 < C.getMinutes() - ea.getNum("cm") && "tr" === f.getTld()
            }
        };
    f.safeDecodeURIComponent = function(a) {
        try {
            return decodeURIComponent(a)
        } catch (b) {
            return ""
        }
    };
    ba.parse = function(a, b) {
        var c = {},
            d;
        a = a && a.replace(/^\?/, "") || "";
        if (a.length) {
            var e = a.split("\x26");
            for (d = 0; d < e.length; d++)
                if (e[d]) {
                    var g =
                        e[d].split("\x3d");
                    if (g[0]) {
                        var h = f.safeDecodeURIComponent(g[0]);
                        g = f.safeDecodeURIComponent((g[1] || "").replace(/\+/g, "%20"));
                        b && h in c ? f.isArray(c[h]) ? c[h].push(g) : c[h] = [c[h], g] : c[h] = g
                    }
                }
        }
        return c
    };
    var W = [],
        B = z(),
        ua = C.getTimezone(),
        va = C.getTimestamp(),
        U = "820",
        P = g.screen,
        vb = 64,
        Y = r.isIE() ? 512 : 2048,
        wb = r.isIE() ? 512 : 2048,
        ab = r.isIE() ? 100 : 400,
        cb = 100,
        na = "noindex",
        fb = /\.(3gp|7z|aac|ac3|acs|ai|avi|ape|apk|asf|bmp|bz2|cab|cdr|crc32|css|csv|cue|divx|dmg|djvu?|doc(x|m|b)?|emf|eps|exe|flac?|flv|iso|swf|gif|t?gz|jpe?g?|js|m3u8?|m4a|mp(3|4|e?g?)|m4v|md5|mkv|mov|msi|ods|og(g|m|v)|psd|rar|rss|rtf|sea|sfv|sit|sha1|svg|tar|tif?f|torrent|ts|txt|vob|wave?|wma|wmv|wmf|webm|ppt(x|m|b)?|xls(x|m|b)?|pdf|phps|png|xpi|g?zip)$/i,
        Fb = +new Date,
        Ja, ka;
    g.Ya = g.Ya || {};
    Ya._metrika = Ya._metrika || {};
    Ya._metrika.counters = Ya._metrika.counters || {};
    Ya._metrika.hitParam = Ya._metrika.hitParam || {};
    Ya._metrika.counterNum = Ya._metrika.counterNum || 0;
    Ya._metrika.hitId = Ya._metrika.hitId || f.random();
    Ya._globalMetrikaHitId = f.random();
    Ya._metrika.v = U;
    var la = !!Ya._metrika.oo;
    g.Ya.Metrika = function(a, b, c, d) {
        var e = this;
        return t(function() {
            function l(H) {
                var u = !1;
                if (Ya._metrika.hitParam[fa]) {
                    if (1 != c || Ya._metrika.counters[fa]) return !1;
                    u = !0
                }
                Ya._metrika.counters[fa] =
                    e;
                Ya._metrika.hitParam[fa] = 1;
                e._webvisor = !d && !la && (w && w.webvisor || !1);
                e._directCampaign = w && w.directCampaign;
                w && w.trackHash && T(!0);
                if (!d && !u) {
                    var l = new bb({
                        protocol: "https:",
                        counterId: a,
                        counterType: c,
                        hid: V,
                        tz: ua,
                        ts: va,
                        url: B.href,
                        enabled: e._webvisor
                    });
                    e.replacePhones();
                    u = new Ab({
                        dontSendRequests: la
                    });
                    var E = function(d) {
                        var u = new xa({
                                protocol: "https:",
                                counterType: c,
                                counterId: a,
                                trackHash: R,
                                hitId: V,
                                webvisor: e._webvisor,
                                counter: e,
                                dontSendRequests: la,
                                counterNum: Y
                            }),
                            n = {
                                ut: P,
                                he: w ? ~~w.httpError : 0,
                                ad: 1 == c && g.Ya &&
                                    g.Ya.Direct,
                                pv: !0,
                                saveRef: !0
                            };
                        Ja = +new Date;
                        u.sendHit({
                            url: B.href,
                            title: m.getDocumentTitle(),
                            referrer: k.referrer,
                            vParams: b,
                            userParams: aa,
                            experiments: ca,
                            modes: n,
                            visitColor: l.getVc(),
                            hasPrerender: H,
                            ts: va,
                            tz: ua,
                            callback: function(u, H) {
                                ea.init(H);
                                Eb.match();
                                Bb.sync(a, c);
                                ja.log("PageView. Counter ", a, ". URL: ", B.href, ". Referrer: " + k.referrer, ". Params: ", b);
                                ka || (ka = +new Date);
                                u = u || {};
                                l.start(u.webvisor);
                                var m = u.mp2;
                                var n = new O({
                                    counterId: a
                                });
                                n.erase("mp2_substs");
                                if (m) {
                                    b: {
                                        var p = m.conditions;
                                        var G;
                                        if (p &&
                                            p.length)
                                            for (G = 0; G < p.length; G++) {
                                                var E = p[G];
                                                if ("ref" == E.type) E = rb(E);
                                                else if ("adv" == E.type) {
                                                    var q;
                                                    var r = E;
                                                    var t = Ya._metrika.counter._directCampaign;
                                                    var J = r.ServiceNamePattern;
                                                    var w = r.RefererPattern;
                                                    E = t ? r.direct_orders : r.direct_camp;
                                                    var z = k.referrer,
                                                        qa = ba.parse(B.search),
                                                        y = sb(B.search, B.hash),
                                                        A = {};
                                                    var x = ["source", "medium", "campaign", "term", "content"];
                                                    for (q = 0; q < x.length; q++) qa["utm_" + x[q]] && (A[x[q]] = qa["utm_" + x[q]]);
                                                    var C = t ? "direct.yandex.ru" : y && y.service || A.source;
                                                    q = !1;
                                                    if (!q && J && J.length)
                                                        for (x = 0; x <
                                                            J.length; x++)
                                                            if ((new RegExp(J[x], "i")).test(C)) {
                                                                q = !0;
                                                                break
                                                            }
                                                    if (!q && !r.yandex_direct && w && w.length)
                                                        for (J = 0; J < w.length; J++)
                                                            if ((new RegExp(w[J], "i")).test(z)) {
                                                                q = !0;
                                                                break
                                                            }!q && r.google_adwords && qa.gclid && (q = !0);
                                                    if (q && E && E.length && (q = !1, t = t || y && y.campaign || A && A.campaign))
                                                        for (r = 0; r < E.length; r++)
                                                            if (E[r] == t) {
                                                                q = !0;
                                                                break
                                                            }
                                                    E = q
                                                } else E = !1;
                                                if (E) {
                                                    p[G].track_id && n.create("mp2_track", p[G].track_id, 43200);
                                                    break b
                                                }
                                            }
                                    }
                                    p = n.read("mp2_track");m = m.substs && m.substs[p];p && m ? (n.create("mp2_substs", f.toJSON(m)), n = Wa(m), e.params("__ym",
                                        n ? "mp_trackid" : "mp_trackid_bad", p)) : Xa()
                                }
                                else Xa();
                                h.on(g, "load", e.replacePhones, e);
                                e._inited = !0;
                                d && d()
                            }
                        })
                    };
                    u.sync(E)
                }
                x();
                w && (w.enableAll ? (n(!0), p(!0), C()) : (w.clickmap && p(w.clickmap), w.trackLinks && n(w.trackLinks), w.accurateTrackBounce && C(w.accurateTrackBounce)), (w.ecommerce || w.useDataLayer) && new eb({
                    counter: e,
                    prefsEcommerce: w.ecommerce
                }), w.triggerEvent && lb(function() {
                    A.dispatchCustomEvent("yacounter" + a + "inited")
                }, 0))
            }

            function n(a) {
                var b = {};
                switch (typeof a) {
                    case "string":
                        b.on = !0;
                        break;
                    case "object":
                        b.on = !0;
                        break;
                    case "boolean":
                        b.on = a;
                        break;
                    default:
                        return
                }
                e._trackLinks = b
            }

            function x() {
                n(!1);
                h.on(k, "click", function(a) {
                    e._trackLinks && e._trackLinks.on && q(a)
                })
            }

            function q(a) {
                var b = mb(a),
                    c;
                if (b) {
                    a = !1;
                    var d = (c = "" + b.href) ? c.split(/\?/)[0] : "";
                    var e = function(a) {
                        var d = Ta(b);
                        L.sendClickLink({
                            url: c,
                            title: c == d ? "" : d,
                            modes: a
                        })
                    };
                    if (fb.test(d) || fb.test(c) || Ua(c, y) || Ua(d, y)) a = !0;
                    var g = m.classNameExists(b, "ym-disable-tracklink");
                    d = m.classNameExists(b, "ym-external-link");
                    g || (g = {
                        ln: !0,
                        dl: a
                    }, d ? e(g) : (d = b.hostname || f.parseUrl(b.href).hostname ||
                        "", nb(z().hostname, d) ? a ? (g.ln = !1, e(g)) : (a = Ta(b)) && a != c && ga.set("il", f.trim(a, cb)) : c && -1 != c.search(/^ *(data|javascript):/i) || (g.ut = na, e(g))))
                }
            }

            function p(b) {
                "undefined" == typeof b && (b = !0);
                !0 === b && (b = {});
                e._clickmap && e._clickmap.destroy();
                b && (e._clickmap = new Db({
                    dontSendRequests: la,
                    filter: b.filter,
                    ignoreTags: b.ignoreTags,
                    quota: b.quota,
                    isTrackHash: b.isTrackHash,
                    protocol: "https:",
                    counterId: a,
                    counterType: c,
                    startTime: Fb
                }))
            }

            function I(a, b) {
                function c() {
                    if (!q) {
                        p && f.clearTimeout(p);
                        var c = m ? n : n + +new Date -
                            H;
                        c = b - c;
                        0 > c && (c = 0);
                        p = f.setTimeout(function() {
                            q = !0;
                            e(!1);
                            a()
                        }, c, "trackUserTime")
                    }
                }

                function d() {
                    l || (u = !0, m = !1, l = !0, c())
                }

                function e(a) {
                    var b;
                    for (b = 0; b < t.length; b += 3)
                        if (a) h.on(t[b], t[b + 1], t[b + 2]);
                        else h.un(t[b], t[b + 1], t[b + 2])
                }
                var u = !1,
                    l = !1,
                    m = !0,
                    n = 0,
                    H = +new Date,
                    p = null,
                    q = !1;
                if (r.isIE()) f.setTimeout(a, b, "trackUserTime");
                else {
                    var t = [g, "blur", function() {
                            m = u = l = !0;
                            n += +new Date - H;
                            H = +new Date;
                            c()
                        }, g, "focus", function() {
                            u || l || (n = 0);
                            H = +new Date;
                            u = l = !0;
                            m = !1;
                            c()
                        }, k, "click", d, k, "mousemove", d, k, "keydown", d, k, "scroll",
                        d
                    ];
                    e(!0);
                    c()
                }
            }

            function C(b) {
                "number" != typeof b && (b = 15E3);
                if (!e._isAccurateTrackBounce) {
                    e._isAccurateTrackBounce = !0;
                    var c = new N({
                        counterId: a
                    });
                    var d = c.get("lastHit");
                    c.set("lastHit", +new Date);
                    ((c = c.get("lastHit")) && (!d || d < c - 18E5) || !ob(k.referrer, z().href) || .1 > Math.random()) && I(function() {
                        e.notBounce()
                    }, b)
                }
            }

            function S(a) {
                var b = function() {
                    var a = z().hash.split("#")[1];
                    if ("undefined" == typeof a) return !1;
                    var b = a.indexOf("?");
                    0 < b && (a = a.substring(0, b));
                    return a
                };
                var c = b();
                (function J() {
                    var d = b();
                    d !== c && (a(),
                        c = d);
                    F = f.setTimeout(J, 200, "trackHash")
                })()
            }

            function T(a) {
                if (!1 === a) R && ("onhashchange" in g ? h.un(g, "hashchange", U) : f.clearTimeout(F), R = !1);
                else if (a = U, !R) {
                    if ("onhashchange" in g) h.on(g, "hashchange", a);
                    else S(a);
                    R = !0
                }
                L.setTrackHash(R);
                e._trackHash = R
            }

            function U() {
                var a = {
                    ut: P,
                    ad: 1 == c && g.Ya && g.Ya.Direct,
                    wh: !0,
                    saveRef: !0,
                    pv: !0
                };
                W = ia.lastReferrer = X;
                L.sendAjaxHit({
                    url: z().href,
                    title: m.getDocumentTitle(),
                    referrer: W,
                    modes: a
                });
                X = z().href
            }

            function M(a, b, c) {
                a = Da.parseValidate(a, b);
                b = [];
                a && (b.push(a), c = c || {}, f.isFunction(c.callback) &&
                    (b.push(c.callback), c.ctx && b.push(c.ctx)));
                b.length && e.params.apply(e, b)
            }
            var P = "",
                W = "",
                X = ia.lastReferrer = B.href;
            Ya._metrika.counter || (Ya._metrika.counter = e);
            if ("object" == typeof a) {
                var w = a;
                d = a.defer;
                P = a.ut;
                c = a.type;
                b = a.params;
                var aa = a.userParams;
                var ca = w.experiments;
                var da = w.nck;
                a = a.id
            }
            a = a || 0;
            /^\d+$/.test(a) || (a = 0);
            c = c || 0;
            var fa = a + ":" + c;
            if (Ya._metrika.counters[fa]) return Ya._metrika.counters[fa];
            var V = Ya._metrika.hitId;
            Ya._metrika.counterNum++;
            var Y = Ya._metrika.counterNum;
            da || (K.initCookie(), $a.init());
            K.retransmit();
            var L = new ha({
                protocol: "https:",
                counterType: c,
                counterId: a,
                hitId: V,
                counter: e,
                dontSendRequests: la,
                counterNum: Y
            });
            e.replacePhones = t(function() {
                var b, c;
                try {
                    (b = (new O({
                        counterId: a
                    })).read("mp2_substs")) && (c = ma.parse(b)) && Wa(c, !0)
                } catch (G) {}
                return e
            }, "counter.replacePhones");
            e.reachGoal = t(function(b, c, d, f) {
                2 <= arguments.length && "function" === typeof c && (f = d, d = c, c = Q);
                ja.log("Reach goal. Counter: " + a + ". Goal id: " + b + ". Params: ", c);
                L.sendGoal(b, {
                    vParams: c,
                    callback: d,
                    ctx: f
                });
                return e
            }, "counter.reachGoal");
            e.trackLinks = t(function(a) {
                n(a);
                return e
            }, "counter.trackLinks");
            var ga = new N({
                counterId: a
            });
            e.hit = t(function(b, c, d, g, h, k) {
                b ? (f.isObject(c) && (d = c.referer, g = c.params, h = c.callback, k = c.ctx, c = c.title), ja.log("PageView. Counter " + a, ". URL: " + b, ". Referrer: " + d, ". Params: ", g), L.sendHit({
                    url: b,
                    title: c,
                    referrer: d,
                    vParams: g,
                    callback: h,
                    ctx: k
                })) : f.warning("Empty hit url");
                return e
            }, "counter.hit");
            e.params = t(function(b) {
                var c = arguments.length,
                    d = c,
                    g = [].slice.call(arguments, 0);
                if (b) {
                    if (1 < arguments.length) {
                        if (f.isFunction(arguments[c -
                                1])) {
                            var h = arguments[c - 1];
                            d = c - 1
                        } else if (f.isFunction(arguments[c - 2])) {
                            h = arguments[c - 2];
                            var k = arguments[c - 1];
                            d = c - 2
                        }
                        g = [].slice.call(g, 0, d);
                        1 < g.length && (g = [f.array2Props(g)])
                    }
                    ja.log("User params. Counter " + a + ". Params: ", g[0]);
                    L.sendParams(g[0], h, k)
                } else f.warning("Wrong params");
                return e
            }, "counter.params");
            e.file = t(function(a, b) {
                a ? (b = b || {}, L.sendFileUpload({
                    url: a,
                    title: b.title,
                    vParams: b.params,
                    callback: b.callback,
                    ctx: b.ctx
                })) : f.warning("Empty file url");
                return e
            }, "counter.file");
            e.extLink = t(function(a,
                b) {
                a ? (b = b || {}, L.sendExtLink({
                    url: a,
                    title: b.title,
                    vParams: b.params,
                    callback: b.callback,
                    ctx: b.ctx
                })) : f.warning("Empty link");
                return e
            }, "counter.extLink");
            e.notBounce = t(function(a) {
                var b = 0;
                a = a || {};
                Ja && ka && (b = ka - Ja);
                L.sendNotBounce(b, {
                    callback: a.callback,
                    ctx: a.ctx
                });
                return e
            }, "counter.notBounce");
            var y = [];
            e.addFileExtension = function(a) {
                if (!a) return f.warning("Empty extension"), e;
                "string" == typeof a ? y.push(a) : y = y.concat(a);
                return e
            };
            e.clickmap = function(a) {
                p(a);
                return e
            };
            e.accurateTrackBounce = function(a) {
                C(a);
                return e
            };
            var F = null;
            var R = !1;
            e.trackHash = function(a) {
                T(a);
                return e
            };
            f.arrayEvery = function(a, b, c) {
                var d;
                for (d = 0; d < a.length; d++)
                    if (!b.call(c, a[d], d, a)) return !1;
                return !0
            };
            var Da = {
                requiredEcommerceFields: ["currency", "goods"],
                parseValidate: function(a, b) {
                    var c = this.validate(a, b),
                        d;
                    if (!c.isValid) return console && console.log(c.message), !1;
                    c = {};
                    c[a] = {};
                    b.currency && (c.currencyCode = b.currency);
                    b.goods && (c[a].products = b.goods);
                    for (d in b) b.hasOwnProperty(d) && -1 === f.arrayIndexOf(this.requiredEcommerceFields, d) &&
                        (c[a].actionField || (c[a].actionField = {}), c[a].actionField[d] = b[d]);
                    return {
                        __ym: {
                            ecommerce: [c]
                        }
                    }
                },
                validate: function(a, b) {
                    var c = !1,
                        d = "";
                    if (f.isObject(b)) switch (a) {
                        case "detail":
                        case "add":
                        case "remove":
                            f.isArray(b.goods) && b.goods.length ? (c = f.arrayEvery(b.goods, function(a) {
                                return f.isObject(a) && (f.isString(a.id) || f.isNumber(a.id) || f.isString(a.name) || f.isString(a.name))
                            })) || (d = "All items in 'goods' should be objects and contain 'id' or 'name' field") : d = "Ecommerce data should contain 'goods' non-empty array";
                            break;
                        case "purchase":
                            f.isNumber(b.id) || f.isString(b.id) ? c = !0 : d = "Purchase object should contain string or number 'id' field"
                    } else d = "Ecommerce data should be an object";
                    return {
                        isValid: c,
                        message: d
                    }
                }
            };
            e.ecommerceDetail = t(function(a, b) {
                M("detail", a, b);
                return e
            }, "ecommerce.detail");
            e.ecommerceAdd = t(function(a, b) {
                M("add", a, b);
                return e
            }, "ecommerce.add");
            e.ecommerceRemove = t(function(a, b) {
                M("remove", a, b);
                return e
            }, "ecommerce.remove");
            e.ecommercePurchase = t(function(a, b) {
                M("purchase", a, b);
                return e
            }, "ecommerce.purchase");
            e.userParams = t(function(a, b, c) {
                f.isObject(a) ? e.params({
                    __ymu: a
                }, b || function() {}, c) : f.warning("Wrong user params");
                return e
            }, "uparams");
            e.experiments = t(function(a, b, c) {
                L.sendExperiments({
                    callback: b,
                    ctx: c,
                    experiments: a
                });
                return e
            }, "exps");
            e.id = e.setUserID = t(function(a, b, c) {
                f.isString(a) || f.isNumber(a) ? e.params({
                    __ym: {
                        user_id: a
                    }
                }, b || function() {}, c) : f.warning("Incorrect user ID");
                return e
            }, "id");
            var pa = new O;
            e.getClientID = t(function() {
                return pa.read("uid")
            }, "guid");
            e.enableAll = function() {
                n(!0);
                p(!0);
                C();
                return e
            };
            e.uploadPage = function() {};
            e._performanceTiming = Va;
            if (a)
                if ("prerender" == k.webkitVisibilityState) {
                    L.sendPrerenderHit({
                        url: B.href,
                        title: m.getDocumentTitle(),
                        referrer: k.referrer
                    });
                    var wa = function() {
                        "prerender" != k.webkitVisibilityState && (h.un(k, "webkitvisibilitychange", wa), l(!0))
                    };
                    h.on(k, "webkitvisibilitychange", wa)
                } else l(!1)
        }, "init")()
    };
    (function() {
        if (g.performance && "function" === typeof performance.getEntries) {
            var a = {
                    2343947156: 1,
                    1996539654: 1,
                    2065498185: 1,
                    823651274: 1,
                    12282461: 1,
                    1555719328: 1,
                    1417229093: 1,
                    138396985: 1
                },
                b = performance.getEntries(),
                c = {},
                d;
            for (d = 0; d < b.length; d++) {
                var e = b[d];
                var h = e.name.replace(/^https?:\/\//, "").split("?")[0];
                var k = f.fnv32a(h);
                a[k] && !c[h] && 0 < e.duration && (c[h] = {
                    dns: Math.round(e.domainLookupEnd - e.domainLookupStart),
                    tcp: Math.round(e.connectEnd - e.connectStart),
                    duration: Math.round(e.duration),
                    response: Math.round(e.responseEnd - e.requestStart),
                    pages: B.href
                })
            }(new T({
                sampling: .001
            })).logParams({
                timings8: c
            })
        }
    })();
    g.Ya._metrika.remoteCtrlInited || (g.Ya._metrika.remoteCtrlInited = !0, new db);
    g.Ya.Metrika.counters = function() {
        var a = [];
        f.forEachKey(g.Ya._metrika.counters, function(b, c) {
            var d = b.split(":");
            a.push({
                id: +d[0],
                type: +d[1],
                accurateTrackBounce: c._isAccurateTrackBounce,
                clickmap: c._clickmap && c._clickmap._start,
                oldCode: !!g.ya_cid,
                trackHash: !!c._trackHash,
                trackLinks: c._trackLinks && c._trackLinks.on,
                webvisor: !!c._webvisor
            })
        });
        return a
    };
    g.ya_cid && Ya.Metrika && new Ya.Metrika(g.ya_cid, g.ya_params, g.ya_class);
    g.ya_cid && !g.ya_hit && (g.ya_hit = function(a, b) {
        Ya._metrika.counter && Ya._metrika.counter.reachGoal(a,
            b)
    });
    (function() {
        function a(a) {
            try {
                delete g[a]
            } catch (l) {
                g[a] = Q
            }
        }
        var b = g.yandex_metrika_callback,
            c = g.yandex_metrika_callbacks,
            d;
        "function" == typeof b && b();
        if ("object" == typeof c)
            for (b = 0; b < c.length; b++)
                if (d = c[b]) c[b] = null, d();
        a("yandex_metrika_callback");
        a("yandex_metrika_callbacks")
    })();
    g.Ya.Metrika.informer = function(a) {
        var b = !!Ya.Metrika._informer;
        Ya.Metrika._informer = a;
        b || m.loadScript({
            src: "https://informer.yandex.ru/metrika/informer.js"
        })
    };
    h.on(k, "click", t(function(a) {
        var b = A.getTarget(a);
        if (b && "ym-advanced-informer" ==
            b.className) {
            var c = b.getAttribute("data-lang");
            var d = b.getAttribute("data-cid");
            Ya.Metrika.informer({
                i: b,
                id: +d,
                lang: c
            });
            A.prevent(a)
        }
    }, "adv-inf"), null, {
        passive: !1
    })
})(this, this.document);
