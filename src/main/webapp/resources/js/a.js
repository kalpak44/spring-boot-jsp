! function(e) {
    function t(i) {
        if (n[i]) return n[i].exports;
        var r = n[i] = {
            exports: {},
            id: i,
            loaded: !1
        };
        return e[i].call(r.exports, r, r.exports, t), r.loaded = !0, r.exports
    }
    var n = {};
    return t.m = e, t.c = n, t.p = "", t(0)
}([function(e, t, n) {
    e.exports = n(1)
}, function(e, t, n) {
    window.jQuery = n(2), window.$ = window.jQuery, window.doT = n(3), window.multiline = n(4), n(5), n(6), n(7), n(8), $.cookie = n(9), n(10), n(11), n(18), n(19), n(20), n(24), n(25), n(28), n(31)
}, function(e, t, n) {
    var i, r;
    ! function(t, n) {
        "object" == typeof e && "object" == typeof e.exports ? e.exports = t.document ? n(t, !0) : function(e) {
                    if (!e.document) throw new Error("jQuery requires a window with a document");
                    return n(e)
                } : n(t)
    }("undefined" != typeof window ? window : this, function(n, o) {
        function a(e) {
            var t = "length" in e && e.length,
                n = ce.type(e);
            return "function" === n || ce.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
        }

        function s(e, t, n) {
            if (ce.isFunction(t)) return ce.grep(e, function(e, i) {
                return !!t.call(e, i, e) !== n
            });
            if (t.nodeType) return ce.grep(e, function(e) {
                return e === t !== n
            });
            if ("string" == typeof t) {
                if (me.test(t)) return ce.filter(t, e, n);
                t = ce.filter(t, e)
            }
            return ce.grep(e, function(e) {
                return ce.inArray(e, t) >= 0 !== n
            })
        }

        function c(e, t) {
            do e = e[t]; while (e && 1 !== e.nodeType);
            return e
        }

        function u(e) {
            var t = ke[e] = {};
            return ce.each(e.match(Te) || [], function(e, n) {
                t[n] = !0
            }), t
        }

        function l() {
            ye.addEventListener ? (ye.removeEventListener("DOMContentLoaded", d, !1), n.removeEventListener("load", d, !1)) : (ye.detachEvent("onreadystatechange", d), n.detachEvent("onload", d))
        }

        function d() {
            (ye.addEventListener || "load" === event.type || "complete" === ye.readyState) && (l(), ce.ready())
        }

        function f(e, t, n) {
            if (void 0 === n && 1 === e.nodeType) {
                var i = "data-" + t.replace(Ae, "-$1").toLowerCase();
                if (n = e.getAttribute(i), "string" == typeof n) {
                    try {
                        n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : Ie.test(n) ? ce.parseJSON(n) : n
                    } catch (r) {}
                    ce.data(e, t, n)
                } else n = void 0
            }
            return n
        }

        function p(e) {
            var t;
            for (t in e)
                if (("data" !== t || !ce.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
            return !0
        }

        function h(e, t, n, i) {
            if (ce.acceptData(e)) {
                var r, o, a = ce.expando,
                    s = e.nodeType,
                    c = s ? ce.cache : e,
                    u = s ? e[a] : e[a] && a;
                if (u && c[u] && (i || c[u].data) || void 0 !== n || "string" != typeof t) return u || (u = s ? e[a] = K.pop() || ce.guid++ : a), c[u] || (c[u] = s ? {} : {
                        toJSON: ce.noop
                    }), ("object" == typeof t || "function" == typeof t) && (i ? c[u] = ce.extend(c[u], t) : c[u].data = ce.extend(c[u].data, t)), o = c[u], i || (o.data || (o.data = {}), o = o.data), void 0 !== n && (o[ce.camelCase(t)] = n), "string" == typeof t ? (r = o[t], null == r && (r = o[ce.camelCase(t)])) : r = o, r
            }
        }

        function g(e, t, n) {
            if (ce.acceptData(e)) {
                var i, r, o = e.nodeType,
                    a = o ? ce.cache : e,
                    s = o ? e[ce.expando] : ce.expando;
                if (a[s]) {
                    if (t && (i = n ? a[s] : a[s].data)) {
                        ce.isArray(t) ? t = t.concat(ce.map(t, ce.camelCase)) : t in i ? t = [t] : (t = ce.camelCase(t), t = t in i ? [t] : t.split(" ")), r = t.length;
                        for (; r--;) delete i[t[r]];
                        if (n ? !p(i) : !ce.isEmptyObject(i)) return
                    }(n || (delete a[s].data, p(a[s]))) && (o ? ce.cleanData([e], !0) : ae.deleteExpando || a != a.window ? delete a[s] : a[s] = null)
                }
            }
        }

        function m() {
            return !0
        }

        function v() {
            return !1
        }

        function y() {
            try {
                return ye.activeElement
            } catch (e) {}
        }

        function b(e) {
            var t = He.split("|"),
                n = e.createDocumentFragment();
            if (n.createElement)
                for (; t.length;) n.createElement(t.pop());
            return n
        }

        function w(e, t) {
            var n, i, r = 0,
                o = typeof e.getElementsByTagName !== Se ? e.getElementsByTagName(t || "*") : typeof e.querySelectorAll !== Se ? e.querySelectorAll(t || "*") : void 0;
            if (!o)
                for (o = [], n = e.childNodes || e; null != (i = n[r]); r++) !t || ce.nodeName(i, t) ? o.push(i) : ce.merge(o, w(i, t));
            return void 0 === t || t && ce.nodeName(e, t) ? ce.merge([e], o) : o
        }

        function x(e) {
            je.test(e.type) && (e.defaultChecked = e.checked)
        }

        function C(e, t) {
            return ce.nodeName(e, "table") && ce.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
        }

        function T(e) {
            return e.type = (null !== ce.find.attr(e, "type")) + "/" + e.type, e
        }

        function k(e) {
            var t = Ve.exec(e.type);
            return t ? e.type = t[1] : e.removeAttribute("type"), e
        }

        function E(e, t) {
            for (var n, i = 0; null != (n = e[i]); i++) ce._data(n, "globalEval", !t || ce._data(t[i], "globalEval"))
        }

        function _(e, t) {
            if (1 === t.nodeType && ce.hasData(e)) {
                var n, i, r, o = ce._data(e),
                    a = ce._data(t, o),
                    s = o.events;
                if (s) {
                    delete a.handle, a.events = {};
                    for (n in s)
                        for (i = 0, r = s[n].length; r > i; i++) ce.event.add(t, n, s[n][i])
                }
                a.data && (a.data = ce.extend({}, a.data))
            }
        }

        function S(e, t) {
            var n, i, r;
            if (1 === t.nodeType) {
                if (n = t.nodeName.toLowerCase(), !ae.noCloneEvent && t[ce.expando]) {
                    r = ce._data(t);
                    for (i in r.events) ce.removeEvent(t, i, r.handle);
                    t.removeAttribute(ce.expando)
                }
                "script" === n && t.text !== e.text ? (T(t).text = e.text, k(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), ae.html5Clone && e.innerHTML && !ce.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && je.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
            }
        }

        function I(e, t) {
            var i, r = ce(t.createElement(e)).appendTo(t.body),
                o = n.getDefaultComputedStyle && (i = n.getDefaultComputedStyle(r[0])) ? i.display : ce.css(r[0], "display");
            return r.detach(), o
        }

        function A(e) {
            var t = ye,
                n = it[e];
            return n || (n = I(e, t), "none" !== n && n || (nt = (nt || ce("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = (nt[0].contentWindow || nt[0].contentDocument).document, t.write(), t.close(), n = I(e, t), nt.detach()), it[e] = n), n
        }

        function L(e, t) {
            return {
                get: function() {
                    var n = e();
                    if (null != n) return n ? void delete this.get : (this.get = t).apply(this, arguments)
                }
            }
        }

        function M(e, t) {
            if (t in e) return t;
            for (var n = t.charAt(0).toUpperCase() + t.slice(1), i = t, r = mt.length; r--;)
                if (t = mt[r] + n, t in e) return t;
            return i
        }

        function N(e, t) {
            for (var n, i, r, o = [], a = 0, s = e.length; s > a; a++) i = e[a], i.style && (o[a] = ce._data(i, "olddisplay"), n = i.style.display, t ? (o[a] || "none" !== n || (i.style.display = ""), "" === i.style.display && Ne(i) && (o[a] = ce._data(i, "olddisplay", A(i.nodeName)))) : (r = Ne(i), (n && "none" !== n || !r) && ce._data(i, "olddisplay", r ? n : ce.css(i, "display"))));
            for (a = 0; s > a; a++) i = e[a], i.style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? o[a] || "" : "none"));
            return e
        }

        function $(e, t, n) {
            var i = ft.exec(t);
            return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
        }

        function j(e, t, n, i, r) {
            for (var o = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > o; o += 2) "margin" === n && (a += ce.css(e, n + Me[o], !0, r)), i ? ("content" === n && (a -= ce.css(e, "padding" + Me[o], !0, r)), "margin" !== n && (a -= ce.css(e, "border" + Me[o] + "Width", !0, r))) : (a += ce.css(e, "padding" + Me[o], !0, r), "padding" !== n && (a += ce.css(e, "border" + Me[o] + "Width", !0, r)));
            return a
        }

        function D(e, t, n) {
            var i = !0,
                r = "width" === t ? e.offsetWidth : e.offsetHeight,
                o = rt(e),
                a = ae.boxSizing && "border-box" === ce.css(e, "boxSizing", !1, o);
            if (0 >= r || null == r) {
                if (r = ot(e, t, o), (0 > r || null == r) && (r = e.style[t]), st.test(r)) return r;
                i = a && (ae.boxSizingReliable() || r === e.style[t]), r = parseFloat(r) || 0
            }
            return r + j(e, t, n || (a ? "border" : "content"), i, o) + "px"
        }

        function B(e, t, n, i, r) {
            return new B.prototype.init(e, t, n, i, r)
        }

        function O() {
            return setTimeout(function() {
                vt = void 0
            }), vt = ce.now()
        }

        function R(e, t) {
            var n, i = {
                    height: e
                },
                r = 0;
            for (t = t ? 1 : 0; 4 > r; r += 2 - t) n = Me[r], i["margin" + n] = i["padding" + n] = e;
            return t && (i.opacity = i.width = e), i
        }

        function P(e, t, n) {
            for (var i, r = (Tt[t] || []).concat(Tt["*"]), o = 0, a = r.length; a > o; o++)
                if (i = r[o].call(n, t, e)) return i
        }

        function H(e, t, n) {
            var i, r, o, a, s, c, u, l, d = this,
                f = {},
                p = e.style,
                h = e.nodeType && Ne(e),
                g = ce._data(e, "fxshow");
            n.queue || (s = ce._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, c = s.empty.fire, s.empty.fire = function() {
                s.unqueued || c()
            }), s.unqueued++, d.always(function() {
                d.always(function() {
                    s.unqueued--, ce.queue(e, "fx").length || s.empty.fire()
                })
            })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], u = ce.css(e, "display"), l = "none" === u ? ce._data(e, "olddisplay") || A(e.nodeName) : u, "inline" === l && "none" === ce.css(e, "float") && (ae.inlineBlockNeedsLayout && "inline" !== A(e.nodeName) ? p.zoom = 1 : p.display = "inline-block")), n.overflow && (p.overflow = "hidden", ae.shrinkWrapBlocks() || d.always(function() {
                p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
            }));
            for (i in t)
                if (r = t[i], bt.exec(r)) {
                    if (delete t[i], o = o || "toggle" === r, r === (h ? "hide" : "show")) {
                        if ("show" !== r || !g || void 0 === g[i]) continue;
                        h = !0
                    }
                    f[i] = g && g[i] || ce.style(e, i)
                } else u = void 0;
            if (ce.isEmptyObject(f)) "inline" === ("none" === u ? A(e.nodeName) : u) && (p.display = u);
            else {
                g ? "hidden" in g && (h = g.hidden) : g = ce._data(e, "fxshow", {}), o && (g.hidden = !h), h ? ce(e).show() : d.done(function() {
                        ce(e).hide()
                    }), d.done(function() {
                    var t;
                    ce._removeData(e, "fxshow");
                    for (t in f) ce.style(e, t, f[t])
                });
                for (i in f) a = P(h ? g[i] : 0, i, d), i in g || (g[i] = a.start, h && (a.end = a.start, a.start = "width" === i || "height" === i ? 1 : 0))
            }
        }

        function U(e, t) {
            var n, i, r, o, a;
            for (n in e)
                if (i = ce.camelCase(n), r = t[i], o = e[n], ce.isArray(o) && (r = o[1], o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), a = ce.cssHooks[i], a && "expand" in a) {
                    o = a.expand(o), delete e[i];
                    for (n in o) n in e || (e[n] = o[n], t[n] = r)
                } else t[i] = r
        }

        function F(e, t, n) {
            var i, r, o = 0,
                a = Ct.length,
                s = ce.Deferred().always(function() {
                    delete c.elem
                }),
                c = function() {
                    if (r) return !1;
                    for (var t = vt || O(), n = Math.max(0, u.startTime + u.duration - t), i = n / u.duration || 0, o = 1 - i, a = 0, c = u.tweens.length; c > a; a++) u.tweens[a].run(o);
                    return s.notifyWith(e, [u, o, n]), 1 > o && c ? n : (s.resolveWith(e, [u]), !1)
                },
                u = s.promise({
                    elem: e,
                    props: ce.extend({}, t),
                    opts: ce.extend(!0, {
                        specialEasing: {}
                    }, n),
                    originalProperties: t,
                    originalOptions: n,
                    startTime: vt || O(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function(t, n) {
                        var i = ce.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                        return u.tweens.push(i), i
                    },
                    stop: function(t) {
                        var n = 0,
                            i = t ? u.tweens.length : 0;
                        if (r) return this;
                        for (r = !0; i > n; n++) u.tweens[n].run(1);
                        return t ? s.resolveWith(e, [u, t]) : s.rejectWith(e, [u, t]), this
                    }
                }),
                l = u.props;
            for (U(l, u.opts.specialEasing); a > o; o++)
                if (i = Ct[o].call(u, e, l, u.opts)) return i;
            return ce.map(l, P, u), ce.isFunction(u.opts.start) && u.opts.start.call(e, u), ce.fx.timer(ce.extend(c, {
                elem: e,
                anim: u,
                queue: u.opts.queue
            })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
        }

        function q(e) {
            return function(t, n) {
                "string" != typeof t && (n = t, t = "*");
                var i, r = 0,
                    o = t.toLowerCase().match(Te) || [];
                if (ce.isFunction(n))
                    for (; i = o[r++];) "+" === i.charAt(0) ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
            }
        }

        function J(e, t, n, i) {
            function r(s) {
                var c;
                return o[s] = !0, ce.each(e[s] || [], function(e, s) {
                    var u = s(t, n, i);
                    return "string" != typeof u || a || o[u] ? a ? !(c = u) : void 0 : (t.dataTypes.unshift(u), r(u), !1)
                }), c
            }
            var o = {},
                a = e === Gt;
            return r(t.dataTypes[0]) || !o["*"] && r("*")
        }

        function W(e, t) {
            var n, i, r = ce.ajaxSettings.flatOptions || {};
            for (i in t) void 0 !== t[i] && ((r[i] ? e : n || (n = {}))[i] = t[i]);
            return n && ce.extend(!0, e, n), e
        }

        function z(e, t, n) {
            for (var i, r, o, a, s = e.contents, c = e.dataTypes;
                 "*" === c[0];) c.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
            if (r)
                for (a in s)
                    if (s[a] && s[a].test(r)) {
                        c.unshift(a);
                        break
                    }
            if (c[0] in n) o = c[0];
            else {
                for (a in n) {
                    if (!c[0] || e.converters[a + " " + c[0]]) {
                        o = a;
                        break
                    }
                    i || (i = a)
                }
                o = o || i
            }
            return o ? (o !== c[0] && c.unshift(o), n[o]) : void 0
        }

        function G(e, t, n, i) {
            var r, o, a, s, c, u = {},
                l = e.dataTypes.slice();
            if (l[1])
                for (a in e.converters) u[a.toLowerCase()] = e.converters[a];
            for (o = l.shift(); o;)
                if (e.responseFields[o] && (n[e.responseFields[o]] = t), !c && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), c = o, o = l.shift())
                    if ("*" === o) o = c;
                    else if ("*" !== c && c !== o) {
                        if (a = u[c + " " + o] || u["* " + o], !a)
                            for (r in u)
                                if (s = r.split(" "), s[1] === o && (a = u[c + " " + s[0]] || u["* " + s[0]])) {
                                    a === !0 ? a = u[r] : u[r] !== !0 && (o = s[0], l.unshift(s[1]));
                                    break
                                }
                        if (a !== !0)
                            if (a && e["throws"]) t = a(t);
                            else try {
                                t = a(t)
                            } catch (d) {
                                return {
                                    state: "parsererror",
                                    error: a ? d : "No conversion from " + c + " to " + o
                                }
                            }
                    }
            return {
                state: "success",
                data: t
            }
        }

        function Y(e, t, n, i) {
            var r;
            if (ce.isArray(t)) ce.each(t, function(t, r) {
                n || Vt.test(e) ? i(e, r) : Y(e + "[" + ("object" == typeof r ? t : "") + "]", r, n, i)
            });
            else if (n || "object" !== ce.type(t)) i(e, t);
            else
                for (r in t) Y(e + "[" + r + "]", t[r], n, i)
        }

        function Q() {
            try {
                return new n.XMLHttpRequest
            } catch (e) {}
        }

        function X() {
            try {
                return new n.ActiveXObject("Microsoft.XMLHTTP")
            } catch (e) {}
        }

        function V(e) {
            return ce.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
        }
        var K = [],
            Z = K.slice,
            ee = K.concat,
            te = K.push,
            ne = K.indexOf,
            ie = {},
            re = ie.toString,
            oe = ie.hasOwnProperty,
            ae = {},
            se = "1.11.3",
            ce = function(e, t) {
                return new ce.fn.init(e, t)
            },
            ue = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            le = /^-ms-/,
            de = /-([\da-z])/gi,
            fe = function(e, t) {
                return t.toUpperCase()
            };
        ce.fn = ce.prototype = {
            jquery: se,
            constructor: ce,
            selector: "",
            length: 0,
            toArray: function() {
                return Z.call(this)
            },
            get: function(e) {
                return null != e ? 0 > e ? this[e + this.length] : this[e] : Z.call(this)
            },
            pushStack: function(e) {
                var t = ce.merge(this.constructor(), e);
                return t.prevObject = this, t.context = this.context, t
            },
            each: function(e, t) {
                return ce.each(this, e, t)
            },
            map: function(e) {
                return this.pushStack(ce.map(this, function(t, n) {
                    return e.call(t, n, t)
                }))
            },
            slice: function() {
                return this.pushStack(Z.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(e) {
                var t = this.length,
                    n = +e + (0 > e ? t : 0);
                return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor(null)
            },
            push: te,
            sort: K.sort,
            splice: K.splice
        }, ce.extend = ce.fn.extend = function() {
            var e, t, n, i, r, o, a = arguments[0] || {},
                s = 1,
                c = arguments.length,
                u = !1;
            for ("boolean" == typeof a && (u = a, a = arguments[s] || {}, s++), "object" == typeof a || ce.isFunction(a) || (a = {}), s === c && (a = this, s--); c > s; s++)
                if (null != (r = arguments[s]))
                    for (i in r) e = a[i], n = r[i], a !== n && (u && n && (ce.isPlainObject(n) || (t = ce.isArray(n))) ? (t ? (t = !1, o = e && ce.isArray(e) ? e : []) : o = e && ce.isPlainObject(e) ? e : {}, a[i] = ce.extend(u, o, n)) : void 0 !== n && (a[i] = n));
            return a
        }, ce.extend({
            expando: "jQuery" + (se + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(e) {
                throw new Error(e)
            },
            noop: function() {},
            isFunction: function(e) {
                return "function" === ce.type(e)
            },
            isArray: Array.isArray || function(e) {
                return "array" === ce.type(e)
            },
            isWindow: function(e) {
                return null != e && e == e.window
            },
            isNumeric: function(e) {
                return !ce.isArray(e) && e - parseFloat(e) + 1 >= 0
            },
            isEmptyObject: function(e) {
                var t;
                for (t in e) return !1;
                return !0
            },
            isPlainObject: function(e) {
                var t;
                if (!e || "object" !== ce.type(e) || e.nodeType || ce.isWindow(e)) return !1;
                try {
                    if (e.constructor && !oe.call(e, "constructor") && !oe.call(e.constructor.prototype, "isPrototypeOf")) return !1
                } catch (n) {
                    return !1
                }
                if (ae.ownLast)
                    for (t in e) return oe.call(e, t);
                for (t in e);
                return void 0 === t || oe.call(e, t)
            },
            type: function(e) {
                return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? ie[re.call(e)] || "object" : typeof e
            },
            globalEval: function(e) {
                e && ce.trim(e) && (n.execScript || function(e) {
                    n.eval.call(n, e)
                })(e)
            },
            camelCase: function(e) {
                return e.replace(le, "ms-").replace(de, fe)
            },
            nodeName: function(e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
            },
            each: function(e, t, n) {
                var i, r = 0,
                    o = e.length,
                    s = a(e);
                if (n) {
                    if (s)
                        for (; o > r && (i = t.apply(e[r], n), i !== !1); r++);
                    else
                        for (r in e)
                            if (i = t.apply(e[r], n), i === !1) break
                } else if (s)
                    for (; o > r && (i = t.call(e[r], r, e[r]), i !== !1); r++);
                else
                    for (r in e)
                        if (i = t.call(e[r], r, e[r]), i === !1) break;
                return e
            },
            trim: function(e) {
                return null == e ? "" : (e + "").replace(ue, "")
            },
            makeArray: function(e, t) {
                var n = t || [];
                return null != e && (a(Object(e)) ? ce.merge(n, "string" == typeof e ? [e] : e) : te.call(n, e)), n
            },
            inArray: function(e, t, n) {
                var i;
                if (t) {
                    if (ne) return ne.call(t, e, n);
                    for (i = t.length, n = n ? 0 > n ? Math.max(0, i + n) : n : 0; i > n; n++)
                        if (n in t && t[n] === e) return n
                }
                return -1
            },
            merge: function(e, t) {
                for (var n = +t.length, i = 0, r = e.length; n > i;) e[r++] = t[i++];
                if (n !== n)
                    for (; void 0 !== t[i];) e[r++] = t[i++];
                return e.length = r, e
            },
            grep: function(e, t, n) {
                for (var i, r = [], o = 0, a = e.length, s = !n; a > o; o++) i = !t(e[o], o), i !== s && r.push(e[o]);
                return r
            },
            map: function(e, t, n) {
                var i, r = 0,
                    o = e.length,
                    s = a(e),
                    c = [];
                if (s)
                    for (; o > r; r++) i = t(e[r], r, n), null != i && c.push(i);
                else
                    for (r in e) i = t(e[r], r, n), null != i && c.push(i);
                return ee.apply([], c)
            },
            guid: 1,
            proxy: function(e, t) {
                var n, i, r;
                return "string" == typeof t && (r = e[t], t = e, e = r), ce.isFunction(e) ? (n = Z.call(arguments, 2), i = function() {
                        return e.apply(t || this, n.concat(Z.call(arguments)))
                    }, i.guid = e.guid = e.guid || ce.guid++, i) : void 0
            },
            now: function() {
                return +new Date
            },
            support: ae
        }), ce.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
            ie["[object " + t + "]"] = t.toLowerCase()
        });
        var pe = function(e) {
            function t(e, t, n, i) {
                var r, o, a, s, c, u, d, p, h, g;
                if ((t ? t.ownerDocument || t : H) !== N && M(t), t = t || N, n = n || [], s = t.nodeType, "string" != typeof e || !e || 1 !== s && 9 !== s && 11 !== s) return n;
                if (!i && j) {
                    if (11 !== s && (r = ye.exec(e)))
                        if (a = r[1]) {
                            if (9 === s) {
                                if (o = t.getElementById(a), !o || !o.parentNode) return n;
                                if (o.id === a) return n.push(o), n
                            } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(a)) && R(t, o) && o.id === a) return n.push(o), n
                        } else {
                            if (r[2]) return K.apply(n, t.getElementsByTagName(e)), n;
                            if ((a = r[3]) && x.getElementsByClassName) return K.apply(n, t.getElementsByClassName(a)), n
                        }
                    if (x.qsa && (!D || !D.test(e))) {
                        if (p = d = P, h = t, g = 1 !== s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
                            for (u = E(e), (d = t.getAttribute("id")) ? p = d.replace(we, "\\$&") : t.setAttribute("id", p), p = "[id='" + p + "'] ", c = u.length; c--;) u[c] = p + f(u[c]);
                            h = be.test(e) && l(t.parentNode) || t, g = u.join(",")
                        }
                        if (g) try {
                            return K.apply(n, h.querySelectorAll(g)), n
                        } catch (m) {} finally {
                            d || t.removeAttribute("id")
                        }
                    }
                }
                return S(e.replace(ce, "$1"), t, n, i)
            }

            function n() {
                function e(n, i) {
                    return t.push(n + " ") > C.cacheLength && delete e[t.shift()], e[n + " "] = i
                }
                var t = [];
                return e
            }

            function i(e) {
                return e[P] = !0, e
            }

            function r(e) {
                var t = N.createElement("div");
                try {
                    return !!e(t)
                } catch (n) {
                    return !1
                } finally {
                    t.parentNode && t.parentNode.removeChild(t), t = null
                }
            }

            function o(e, t) {
                for (var n = e.split("|"), i = e.length; i--;) C.attrHandle[n[i]] = t
            }

            function a(e, t) {
                var n = t && e,
                    i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || G) - (~e.sourceIndex || G);
                if (i) return i;
                if (n)
                    for (; n = n.nextSibling;)
                        if (n === t) return -1;
                return e ? 1 : -1
            }

            function s(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return "input" === n && t.type === e
                }
            }

            function c(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && t.type === e
                }
            }

            function u(e) {
                return i(function(t) {
                    return t = +t, i(function(n, i) {
                        for (var r, o = e([], n.length, t), a = o.length; a--;) n[r = o[a]] && (n[r] = !(i[r] = n[r]))
                    })
                })
            }

            function l(e) {
                return e && "undefined" != typeof e.getElementsByTagName && e
            }

            function d() {}

            function f(e) {
                for (var t = 0, n = e.length, i = ""; n > t; t++) i += e[t].value;
                return i
            }

            function p(e, t, n) {
                var i = t.dir,
                    r = n && "parentNode" === i,
                    o = F++;
                return t.first ? function(t, n, o) {
                        for (; t = t[i];)
                            if (1 === t.nodeType || r) return e(t, n, o)
                    } : function(t, n, a) {
                        var s, c, u = [U, o];
                        if (a) {
                            for (; t = t[i];)
                                if ((1 === t.nodeType || r) && e(t, n, a)) return !0
                        } else
                            for (; t = t[i];)
                                if (1 === t.nodeType || r) {
                                    if (c = t[P] || (t[P] = {}), (s = c[i]) && s[0] === U && s[1] === o) return u[2] = s[2];
                                    if (c[i] = u, u[2] = e(t, n, a)) return !0
                                }
                    }
            }

            function h(e) {
                return e.length > 1 ? function(t, n, i) {
                        for (var r = e.length; r--;)
                            if (!e[r](t, n, i)) return !1;
                        return !0
                    } : e[0]
            }

            function g(e, n, i) {
                for (var r = 0, o = n.length; o > r; r++) t(e, n[r], i);
                return i
            }

            function m(e, t, n, i, r) {
                for (var o, a = [], s = 0, c = e.length, u = null != t; c > s; s++)(o = e[s]) && (!n || n(o, i, r)) && (a.push(o), u && t.push(s));
                return a
            }

            function v(e, t, n, r, o, a) {
                return r && !r[P] && (r = v(r)), o && !o[P] && (o = v(o, a)), i(function(i, a, s, c) {
                    var u, l, d, f = [],
                        p = [],
                        h = a.length,
                        v = i || g(t || "*", s.nodeType ? [s] : s, []),
                        y = !e || !i && t ? v : m(v, f, e, s, c),
                        b = n ? o || (i ? e : h || r) ? [] : a : y;
                    if (n && n(y, b, s, c), r)
                        for (u = m(b, p), r(u, [], s, c), l = u.length; l--;)(d = u[l]) && (b[p[l]] = !(y[p[l]] = d));
                    if (i) {
                        if (o || e) {
                            if (o) {
                                for (u = [], l = b.length; l--;)(d = b[l]) && u.push(y[l] = d);
                                o(null, b = [], u, c)
                            }
                            for (l = b.length; l--;)(d = b[l]) && (u = o ? ee(i, d) : f[l]) > -1 && (i[u] = !(a[u] = d))
                        }
                    } else b = m(b === a ? b.splice(h, b.length) : b), o ? o(null, a, b, c) : K.apply(a, b)
                })
            }

            function y(e) {
                for (var t, n, i, r = e.length, o = C.relative[e[0].type], a = o || C.relative[" "], s = o ? 1 : 0, c = p(function(e) {
                    return e === t
                }, a, !0), u = p(function(e) {
                    return ee(t, e) > -1
                }, a, !0), l = [function(e, n, i) {
                    var r = !o && (i || n !== I) || ((t = n).nodeType ? c(e, n, i) : u(e, n, i));
                    return t = null, r
                }]; r > s; s++)
                    if (n = C.relative[e[s].type]) l = [p(h(l), n)];
                    else {
                        if (n = C.filter[e[s].type].apply(null, e[s].matches), n[P]) {
                            for (i = ++s; r > i && !C.relative[e[i].type]; i++);
                            return v(s > 1 && h(l), s > 1 && f(e.slice(0, s - 1).concat({
                                    value: " " === e[s - 2].type ? "*" : ""
                                })).replace(ce, "$1"), n, i > s && y(e.slice(s, i)), r > i && y(e = e.slice(i)), r > i && f(e))
                        }
                        l.push(n)
                    }
                return h(l)
            }

            function b(e, n) {
                var r = n.length > 0,
                    o = e.length > 0,
                    a = function(i, a, s, c, u) {
                        var l, d, f, p = 0,
                            h = "0",
                            g = i && [],
                            v = [],
                            y = I,
                            b = i || o && C.find.TAG("*", u),
                            w = U += null == y ? 1 : Math.random() || .1,
                            x = b.length;
                        for (u && (I = a !== N && a); h !== x && null != (l = b[h]); h++) {
                            if (o && l) {
                                for (d = 0; f = e[d++];)
                                    if (f(l, a, s)) {
                                        c.push(l);
                                        break
                                    }
                                u && (U = w)
                            }
                            r && ((l = !f && l) && p--, i && g.push(l))
                        }
                        if (p += h, r && h !== p) {
                            for (d = 0; f = n[d++];) f(g, v, a, s);
                            if (i) {
                                if (p > 0)
                                    for (; h--;) g[h] || v[h] || (v[h] = X.call(c));
                                v = m(v)
                            }
                            K.apply(c, v), u && !i && v.length > 0 && p + n.length > 1 && t.uniqueSort(c)
                        }
                        return u && (U = w, I = y), g
                    };
                return r ? i(a) : a
            }
            var w, x, C, T, k, E, _, S, I, A, L, M, N, $, j, D, B, O, R, P = "sizzle" + 1 * new Date,
                H = e.document,
                U = 0,
                F = 0,
                q = n(),
                J = n(),
                W = n(),
                z = function(e, t) {
                    return e === t && (L = !0), 0
                },
                G = 1 << 31,
                Y = {}.hasOwnProperty,
                Q = [],
                X = Q.pop,
                V = Q.push,
                K = Q.push,
                Z = Q.slice,
                ee = function(e, t) {
                    for (var n = 0, i = e.length; i > n; n++)
                        if (e[n] === t) return n;
                    return -1
                },
                te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                ne = "[\\x20\\t\\r\\n\\f]",
                ie = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                re = ie.replace("w", "w#"),
                oe = "\\[" + ne + "*(" + ie + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + re + "))|)" + ne + "*\\]",
                ae = ":(" + ie + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + oe + ")*)|.*)\\)|)",
                se = new RegExp(ne + "+", "g"),
                ce = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
                ue = new RegExp("^" + ne + "*," + ne + "*"),
                le = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
                de = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
                fe = new RegExp(ae),
                pe = new RegExp("^" + re + "$"),
                he = {
                    ID: new RegExp("^#(" + ie + ")"),
                    CLASS: new RegExp("^\\.(" + ie + ")"),
                    TAG: new RegExp("^(" + ie.replace("w", "w*") + ")"),
                    ATTR: new RegExp("^" + oe),
                    PSEUDO: new RegExp("^" + ae),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + te + ")$", "i"),
                    needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
                },
                ge = /^(?:input|select|textarea|button)$/i,
                me = /^h\d$/i,
                ve = /^[^{]+\{\s*\[native \w/,
                ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                be = /[+~]/,
                we = /'|\\/g,
                xe = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
                Ce = function(e, t, n) {
                    var i = "0x" + t - 65536;
                    return i !== i || n ? t : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
                },
                Te = function() {
                    M()
                };
            try {
                K.apply(Q = Z.call(H.childNodes), H.childNodes), Q[H.childNodes.length].nodeType
            } catch (ke) {
                K = {
                    apply: Q.length ? function(e, t) {
                            V.apply(e, Z.call(t))
                        } : function(e, t) {
                            for (var n = e.length, i = 0; e[n++] = t[i++];);
                            e.length = n - 1
                        }
                }
            }
            x = t.support = {}, k = t.isXML = function(e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return t ? "HTML" !== t.nodeName : !1
            }, M = t.setDocument = function(e) {
                var t, n, i = e ? e.ownerDocument || e : H;
                return i !== N && 9 === i.nodeType && i.documentElement ? (N = i, $ = i.documentElement, n = i.defaultView, n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", Te, !1) : n.attachEvent && n.attachEvent("onunload", Te)), j = !k(i), x.attributes = r(function(e) {
                        return e.className = "i", !e.getAttribute("className")
                    }), x.getElementsByTagName = r(function(e) {
                        return e.appendChild(i.createComment("")), !e.getElementsByTagName("*").length
                    }), x.getElementsByClassName = ve.test(i.getElementsByClassName), x.getById = r(function(e) {
                        return $.appendChild(e).id = P, !i.getElementsByName || !i.getElementsByName(P).length
                    }), x.getById ? (C.find.ID = function(e, t) {
                            if ("undefined" != typeof t.getElementById && j) {
                                var n = t.getElementById(e);
                                return n && n.parentNode ? [n] : []
                            }
                        }, C.filter.ID = function(e) {
                            var t = e.replace(xe, Ce);
                            return function(e) {
                                return e.getAttribute("id") === t
                            }
                        }) : (delete C.find.ID, C.filter.ID = function(e) {
                            var t = e.replace(xe, Ce);
                            return function(e) {
                                var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                                return n && n.value === t
                            }
                        }), C.find.TAG = x.getElementsByTagName ? function(e, t) {
                            return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : x.qsa ? t.querySelectorAll(e) : void 0
                        } : function(e, t) {
                            var n, i = [],
                                r = 0,
                                o = t.getElementsByTagName(e);
                            if ("*" === e) {
                                for (; n = o[r++];) 1 === n.nodeType && i.push(n);
                                return i
                            }
                            return o
                        }, C.find.CLASS = x.getElementsByClassName && function(e, t) {
                            return j ? t.getElementsByClassName(e) : void 0
                        }, B = [], D = [], (x.qsa = ve.test(i.querySelectorAll)) && (r(function(e) {
                        $.appendChild(e).innerHTML = "<a id='" + P + "'></a><select id='" + P + "-\f]' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && D.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || D.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + P + "-]").length || D.push("~="), e.querySelectorAll(":checked").length || D.push(":checked"), e.querySelectorAll("a#" + P + "+*").length || D.push(".#.+[+~]")
                    }), r(function(e) {
                        var t = i.createElement("input");
                        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && D.push("name" + ne + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || D.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), D.push(",.*:")
                    })), (x.matchesSelector = ve.test(O = $.matches || $.webkitMatchesSelector || $.mozMatchesSelector || $.oMatchesSelector || $.msMatchesSelector)) && r(function(e) {
                        x.disconnectedMatch = O.call(e, "div"), O.call(e, "[s!='']:x"), B.push("!=", ae)
                    }), D = D.length && new RegExp(D.join("|")), B = B.length && new RegExp(B.join("|")), t = ve.test($.compareDocumentPosition), R = t || ve.test($.contains) ? function(e, t) {
                            var n = 9 === e.nodeType ? e.documentElement : e,
                                i = t && t.parentNode;
                            return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
                        } : function(e, t) {
                            if (t)
                                for (; t = t.parentNode;)
                                    if (t === e) return !0;
                            return !1
                        }, z = t ? function(e, t) {
                            if (e === t) return L = !0, 0;
                            var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                            return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !x.sortDetached && t.compareDocumentPosition(e) === n ? e === i || e.ownerDocument === H && R(H, e) ? -1 : t === i || t.ownerDocument === H && R(H, t) ? 1 : A ? ee(A, e) - ee(A, t) : 0 : 4 & n ? -1 : 1)
                        } : function(e, t) {
                            if (e === t) return L = !0, 0;
                            var n, r = 0,
                                o = e.parentNode,
                                s = t.parentNode,
                                c = [e],
                                u = [t];
                            if (!o || !s) return e === i ? -1 : t === i ? 1 : o ? -1 : s ? 1 : A ? ee(A, e) - ee(A, t) : 0;
                            if (o === s) return a(e, t);
                            for (n = e; n = n.parentNode;) c.unshift(n);
                            for (n = t; n = n.parentNode;) u.unshift(n);
                            for (; c[r] === u[r];) r++;
                            return r ? a(c[r], u[r]) : c[r] === H ? -1 : u[r] === H ? 1 : 0
                        }, i) : N
            }, t.matches = function(e, n) {
                return t(e, null, null, n)
            }, t.matchesSelector = function(e, n) {
                if ((e.ownerDocument || e) !== N && M(e), n = n.replace(de, "='$1']"), !(!x.matchesSelector || !j || B && B.test(n) || D && D.test(n))) try {
                    var i = O.call(e, n);
                    if (i || x.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
                } catch (r) {}
                return t(n, N, null, [e]).length > 0
            }, t.contains = function(e, t) {
                return (e.ownerDocument || e) !== N && M(e), R(e, t)
            }, t.attr = function(e, t) {
                (e.ownerDocument || e) !== N && M(e);
                var n = C.attrHandle[t.toLowerCase()],
                    i = n && Y.call(C.attrHandle, t.toLowerCase()) ? n(e, t, !j) : void 0;
                return void 0 !== i ? i : x.attributes || !j ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
            }, t.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, t.uniqueSort = function(e) {
                var t, n = [],
                    i = 0,
                    r = 0;
                if (L = !x.detectDuplicates, A = !x.sortStable && e.slice(0), e.sort(z), L) {
                    for (; t = e[r++];) t === e[r] && (i = n.push(r));
                    for (; i--;) e.splice(n[i], 1)
                }
                return A = null, e
            }, T = t.getText = function(e) {
                var t, n = "",
                    i = 0,
                    r = e.nodeType;
                if (r) {
                    if (1 === r || 9 === r || 11 === r) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += T(e)
                    } else if (3 === r || 4 === r) return e.nodeValue
                } else
                    for (; t = e[i++];) n += T(t);
                return n
            }, C = t.selectors = {
                cacheLength: 50,
                createPseudo: i,
                match: he,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(xe, Ce), e[3] = (e[3] || e[4] || e[5] || "").replace(xe, Ce), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        return he.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && fe.test(n) && (t = E(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(xe, Ce).toLowerCase();
                        return "*" === e ? function() {
                                return !0
                            } : function(e) {
                                return e.nodeName && e.nodeName.toLowerCase() === t
                            }
                    },
                    CLASS: function(e) {
                        var t = q[e + " "];
                        return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && q(e, function(e) {
                                return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                            })
                    },
                    ATTR: function(e, n, i) {
                        return function(r) {
                            var o = t.attr(r, e);
                            return null == o ? "!=" === n : n ? (o += "", "=" === n ? o === i : "!=" === n ? o !== i : "^=" === n ? i && 0 === o.indexOf(i) : "*=" === n ? i && o.indexOf(i) > -1 : "$=" === n ? i && o.slice(-i.length) === i : "~=" === n ? (" " + o.replace(se, " ") + " ").indexOf(i) > -1 : "|=" === n ? o === i || o.slice(0, i.length + 1) === i + "-" : !1) : !0
                        }
                    },
                    CHILD: function(e, t, n, i, r) {
                        var o = "nth" !== e.slice(0, 3),
                            a = "last" !== e.slice(-4),
                            s = "of-type" === t;
                        return 1 === i && 0 === r ? function(e) {
                                return !!e.parentNode
                            } : function(t, n, c) {
                                var u, l, d, f, p, h, g = o !== a ? "nextSibling" : "previousSibling",
                                    m = t.parentNode,
                                    v = s && t.nodeName.toLowerCase(),
                                    y = !c && !s;
                                if (m) {
                                    if (o) {
                                        for (; g;) {
                                            for (d = t; d = d[g];)
                                                if (s ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                                            h = g = "only" === e && !h && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (h = [a ? m.firstChild : m.lastChild], a && y) {
                                        for (l = m[P] || (m[P] = {}), u = l[e] || [], p = u[0] === U && u[1], f = u[0] === U && u[2], d = p && m.childNodes[p]; d = ++p && d && d[g] || (f = p = 0) || h.pop();)
                                            if (1 === d.nodeType && ++f && d === t) {
                                                l[e] = [U, p, f];
                                                break
                                            }
                                    } else if (y && (u = (t[P] || (t[P] = {}))[e]) && u[0] === U) f = u[1];
                                    else
                                        for (;
                                            (d = ++p && d && d[g] || (f = p = 0) || h.pop()) && ((s ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++f || (y && ((d[P] || (d[P] = {}))[e] = [U, f]), d !== t)););
                                    return f -= r, f === i || f % i === 0 && f / i >= 0
                                }
                            }
                    },
                    PSEUDO: function(e, n) {
                        var r, o = C.pseudos[e] || C.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                        return o[P] ? o(n) : o.length > 1 ? (r = [e, e, "", n], C.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, t) {
                                        for (var i, r = o(e, n), a = r.length; a--;) i = ee(e, r[a]), e[i] = !(t[i] = r[a])
                                    }) : function(e) {
                                        return o(e, 0, r)
                                    }) : o
                    }
                },
                pseudos: {
                    not: i(function(e) {
                        var t = [],
                            n = [],
                            r = _(e.replace(ce, "$1"));
                        return r[P] ? i(function(e, t, n, i) {
                                for (var o, a = r(e, null, i, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
                            }) : function(e, i, o) {
                                return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop()
                            }
                    }),
                    has: i(function(e) {
                        return function(n) {
                            return t(e, n).length > 0
                        }
                    }),
                    contains: i(function(e) {
                        return e = e.replace(xe, Ce),
                            function(t) {
                                return (t.textContent || t.innerText || T(t)).indexOf(e) > -1
                            }
                    }),
                    lang: i(function(e) {
                        return pe.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(xe, Ce).toLowerCase(),
                            function(t) {
                                var n;
                                do
                                    if (n = j ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                    }),
                    target: function(t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id
                    },
                    root: function(e) {
                        return e === $
                    },
                    focus: function(e) {
                        return e === N.activeElement && (!N.hasFocus || N.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: function(e) {
                        return e.disabled === !1
                    },
                    disabled: function(e) {
                        return e.disabled === !0
                    },
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !C.pseudos.empty(e)
                    },
                    header: function(e) {
                        return me.test(e.nodeName)
                    },
                    input: function(e) {
                        return ge.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: u(function() {
                        return [0]
                    }),
                    last: u(function(e, t) {
                        return [t - 1]
                    }),
                    eq: u(function(e, t, n) {
                        return [0 > n ? n + t : n]
                    }),
                    even: u(function(e, t) {
                        for (var n = 0; t > n; n += 2) e.push(n);
                        return e
                    }),
                    odd: u(function(e, t) {
                        for (var n = 1; t > n; n += 2) e.push(n);
                        return e
                    }),
                    lt: u(function(e, t, n) {
                        for (var i = 0 > n ? n + t : n; --i >= 0;) e.push(i);
                        return e
                    }),
                    gt: u(function(e, t, n) {
                        for (var i = 0 > n ? n + t : n; ++i < t;) e.push(i);
                        return e
                    })
                }
            }, C.pseudos.nth = C.pseudos.eq;
            for (w in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) C.pseudos[w] = s(w);
            for (w in {
                submit: !0,
                reset: !0
            }) C.pseudos[w] = c(w);
            return d.prototype = C.filters = C.pseudos, C.setFilters = new d, E = t.tokenize = function(e, n) {
                var i, r, o, a, s, c, u, l = J[e + " "];
                if (l) return n ? 0 : l.slice(0);
                for (s = e, c = [], u = C.preFilter; s;) {
                    (!i || (r = ue.exec(s))) && (r && (s = s.slice(r[0].length) || s), c.push(o = [])), i = !1, (r = le.exec(s)) && (i = r.shift(), o.push({
                        value: i,
                        type: r[0].replace(ce, " ")
                    }), s = s.slice(i.length));
                    for (a in C.filter) !(r = he[a].exec(s)) || u[a] && !(r = u[a](r)) || (i = r.shift(), o.push({
                        value: i,
                        type: a,
                        matches: r
                    }), s = s.slice(i.length));
                    if (!i) break
                }
                return n ? s.length : s ? t.error(e) : J(e, c).slice(0)
            }, _ = t.compile = function(e, t) {
                var n, i = [],
                    r = [],
                    o = W[e + " "];
                if (!o) {
                    for (t || (t = E(e)), n = t.length; n--;) o = y(t[n]), o[P] ? i.push(o) : r.push(o);
                    o = W(e, b(r, i)), o.selector = e
                }
                return o
            }, S = t.select = function(e, t, n, i) {
                var r, o, a, s, c, u = "function" == typeof e && e,
                    d = !i && E(e = u.selector || e);
                if (n = n || [], 1 === d.length) {
                    if (o = d[0] = d[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && x.getById && 9 === t.nodeType && j && C.relative[o[1].type]) {
                        if (t = (C.find.ID(a.matches[0].replace(xe, Ce), t) || [])[0], !t) return n;
                        u && (t = t.parentNode), e = e.slice(o.shift().value.length)
                    }
                    for (r = he.needsContext.test(e) ? 0 : o.length; r-- && (a = o[r], !C.relative[s = a.type]);)
                        if ((c = C.find[s]) && (i = c(a.matches[0].replace(xe, Ce), be.test(o[0].type) && l(t.parentNode) || t))) {
                            if (o.splice(r, 1), e = i.length && f(o), !e) return K.apply(n, i), n;
                            break
                        }
                }
                return (u || _(e, d))(i, t, !j, n, be.test(e) && l(t.parentNode) || t), n
            }, x.sortStable = P.split("").sort(z).join("") === P, x.detectDuplicates = !!L, M(), x.sortDetached = r(function(e) {
                return 1 & e.compareDocumentPosition(N.createElement("div"))
            }), r(function(e) {
                return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
            }) || o("type|href|height|width", function(e, t, n) {
                return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
            }), x.attributes && r(function(e) {
                return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
            }) || o("value", function(e, t, n) {
                return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
            }), r(function(e) {
                return null == e.getAttribute("disabled")
            }) || o(te, function(e, t, n) {
                var i;
                return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
            }), t
        }(n);
        ce.find = pe, ce.expr = pe.selectors, ce.expr[":"] = ce.expr.pseudos, ce.unique = pe.uniqueSort, ce.text = pe.getText, ce.isXMLDoc = pe.isXML, ce.contains = pe.contains;
        var he = ce.expr.match.needsContext,
            ge = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
            me = /^.[^:#\[\.,]*$/;
        ce.filter = function(e, t, n) {
            var i = t[0];
            return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? ce.find.matchesSelector(i, e) ? [i] : [] : ce.find.matches(e, ce.grep(t, function(e) {
                    return 1 === e.nodeType
                }))
        }, ce.fn.extend({
            find: function(e) {
                var t, n = [],
                    i = this,
                    r = i.length;
                if ("string" != typeof e) return this.pushStack(ce(e).filter(function() {
                    for (t = 0; r > t; t++)
                        if (ce.contains(i[t], this)) return !0
                }));
                for (t = 0; r > t; t++) ce.find(e, i[t], n);
                return n = this.pushStack(r > 1 ? ce.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
            },
            filter: function(e) {
                return this.pushStack(s(this, e || [], !1))
            },
            not: function(e) {
                return this.pushStack(s(this, e || [], !0))
            },
            is: function(e) {
                return !!s(this, "string" == typeof e && he.test(e) ? ce(e) : e || [], !1).length
            }
        });
        var ve, ye = n.document,
            be = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
            we = ce.fn.init = function(e, t) {
                var n, i;
                if (!e) return this;
                if ("string" == typeof e) {
                    if (n = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : be.exec(e), !n || !n[1] && t) return !t || t.jquery ? (t || ve).find(e) : this.constructor(t).find(e);
                    if (n[1]) {
                        if (t = t instanceof ce ? t[0] : t, ce.merge(this, ce.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : ye, !0)), ge.test(n[1]) && ce.isPlainObject(t))
                            for (n in t) ce.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                        return this
                    }
                    if (i = ye.getElementById(n[2]), i && i.parentNode) {
                        if (i.id !== n[2]) return ve.find(e);
                        this.length = 1, this[0] = i
                    }
                    return this.context = ye, this.selector = e, this
                }
                return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : ce.isFunction(e) ? "undefined" != typeof ve.ready ? ve.ready(e) : e(ce) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), ce.makeArray(e, this))
            };
        we.prototype = ce.fn, ve = ce(ye);
        var xe = /^(?:parents|prev(?:Until|All))/,
            Ce = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        ce.extend({
            dir: function(e, t, n) {
                for (var i = [], r = e[t]; r && 9 !== r.nodeType && (void 0 === n || 1 !== r.nodeType || !ce(r).is(n));) 1 === r.nodeType && i.push(r), r = r[t];
                return i
            },
            sibling: function(e, t) {
                for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                return n
            }
        }), ce.fn.extend({
            has: function(e) {
                var t, n = ce(e, this),
                    i = n.length;
                return this.filter(function() {
                    for (t = 0; i > t; t++)
                        if (ce.contains(this, n[t])) return !0
                })
            },
            closest: function(e, t) {
                for (var n, i = 0, r = this.length, o = [], a = he.test(e) || "string" != typeof e ? ce(e, t || this.context) : 0; r > i; i++)
                    for (n = this[i]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && ce.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        }
                return this.pushStack(o.length > 1 ? ce.unique(o) : o)
            },
            index: function(e) {
                return e ? "string" == typeof e ? ce.inArray(this[0], ce(e)) : ce.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(e, t) {
                return this.pushStack(ce.unique(ce.merge(this.get(), ce(e, t))))
            },
            addBack: function(e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
            }
        }), ce.each({
            parent: function(e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
            },
            parents: function(e) {
                return ce.dir(e, "parentNode")
            },
            parentsUntil: function(e, t, n) {
                return ce.dir(e, "parentNode", n)
            },
            next: function(e) {
                return c(e, "nextSibling")
            },
            prev: function(e) {
                return c(e, "previousSibling")
            },
            nextAll: function(e) {
                return ce.dir(e, "nextSibling")
            },
            prevAll: function(e) {
                return ce.dir(e, "previousSibling")
            },
            nextUntil: function(e, t, n) {
                return ce.dir(e, "nextSibling", n)
            },
            prevUntil: function(e, t, n) {
                return ce.dir(e, "previousSibling", n)
            },
            siblings: function(e) {
                return ce.sibling((e.parentNode || {}).firstChild, e)
            },
            children: function(e) {
                return ce.sibling(e.firstChild)
            },
            contents: function(e) {
                return ce.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : ce.merge([], e.childNodes)
            }
        }, function(e, t) {
            ce.fn[e] = function(n, i) {
                var r = ce.map(this, t, n);
                return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (r = ce.filter(i, r)), this.length > 1 && (Ce[e] || (r = ce.unique(r)), xe.test(e) && (r = r.reverse())), this.pushStack(r)
            }
        });
        var Te = /\S+/g,
            ke = {};
        ce.Callbacks = function(e) {
            e = "string" == typeof e ? ke[e] || u(e) : ce.extend({}, e);
            var t, n, i, r, o, a, s = [],
                c = !e.once && [],
                l = function(u) {
                    for (n = e.memory && u, i = !0, o = a || 0, a = 0, r = s.length, t = !0; s && r > o; o++)
                        if (s[o].apply(u[0], u[1]) === !1 && e.stopOnFalse) {
                            n = !1;
                            break
                        }
                    t = !1, s && (c ? c.length && l(c.shift()) : n ? s = [] : d.disable())
                },
                d = {
                    add: function() {
                        if (s) {
                            var i = s.length;
                            ! function o(t) {
                                ce.each(t, function(t, n) {
                                    var i = ce.type(n);
                                    "function" === i ? e.unique && d.has(n) || s.push(n) : n && n.length && "string" !== i && o(n)
                                })
                            }(arguments), t ? r = s.length : n && (a = i, l(n))
                        }
                        return this
                    },
                    remove: function() {
                        return s && ce.each(arguments, function(e, n) {
                            for (var i;
                                 (i = ce.inArray(n, s, i)) > -1;) s.splice(i, 1), t && (r >= i && r--, o >= i && o--)
                        }), this
                    },
                    has: function(e) {
                        return e ? ce.inArray(e, s) > -1 : !(!s || !s.length)
                    },
                    empty: function() {
                        return s = [], r = 0, this
                    },
                    disable: function() {
                        return s = c = n = void 0, this
                    },
                    disabled: function() {
                        return !s
                    },
                    lock: function() {
                        return c = void 0, n || d.disable(), this
                    },
                    locked: function() {
                        return !c
                    },
                    fireWith: function(e, n) {
                        return !s || i && !c || (n = n || [], n = [e, n.slice ? n.slice() : n], t ? c.push(n) : l(n)), this
                    },
                    fire: function() {
                        return d.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!i
                    }
                };
            return d
        }, ce.extend({
            Deferred: function(e) {
                var t = [
                        ["resolve", "done", ce.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", ce.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", ce.Callbacks("memory")]
                    ],
                    n = "pending",
                    i = {
                        state: function() {
                            return n
                        },
                        always: function() {
                            return r.done(arguments).fail(arguments), this
                        },
                        then: function() {
                            var e = arguments;
                            return ce.Deferred(function(n) {
                                ce.each(t, function(t, o) {
                                    var a = ce.isFunction(e[t]) && e[t];
                                    r[o[1]](function() {
                                        var e = a && a.apply(this, arguments);
                                        e && ce.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o[0] + "With"](this === i ? n.promise() : this, a ? [e] : arguments)
                                    })
                                }), e = null
                            }).promise()
                        },
                        promise: function(e) {
                            return null != e ? ce.extend(e, i) : i
                        }
                    },
                    r = {};
                return i.pipe = i.then, ce.each(t, function(e, o) {
                    var a = o[2],
                        s = o[3];
                    i[o[1]] = a.add, s && a.add(function() {
                        n = s
                    }, t[1 ^ e][2].disable, t[2][2].lock), r[o[0]] = function() {
                        return r[o[0] + "With"](this === r ? i : this, arguments), this
                    }, r[o[0] + "With"] = a.fireWith
                }), i.promise(r), e && e.call(r, r), r
            },
            when: function(e) {
                var t, n, i, r = 0,
                    o = Z.call(arguments),
                    a = o.length,
                    s = 1 !== a || e && ce.isFunction(e.promise) ? a : 0,
                    c = 1 === s ? e : ce.Deferred(),
                    u = function(e, n, i) {
                        return function(r) {
                            n[e] = this, i[e] = arguments.length > 1 ? Z.call(arguments) : r, i === t ? c.notifyWith(n, i) : --s || c.resolveWith(n, i)
                        }
                    };
                if (a > 1)
                    for (t = new Array(a), n = new Array(a), i = new Array(a); a > r; r++) o[r] && ce.isFunction(o[r].promise) ? o[r].promise().done(u(r, i, o)).fail(c.reject).progress(u(r, n, t)) : --s;
                return s || c.resolveWith(i, o), c.promise()
            }
        });
        var Ee;
        ce.fn.ready = function(e) {
            return ce.ready.promise().done(e), this
        }, ce.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function(e) {
                e ? ce.readyWait++ : ce.ready(!0)
            },
            ready: function(e) {
                if (e === !0 ? !--ce.readyWait : !ce.isReady) {
                    if (!ye.body) return setTimeout(ce.ready);
                    ce.isReady = !0, e !== !0 && --ce.readyWait > 0 || (Ee.resolveWith(ye, [ce]), ce.fn.triggerHandler && (ce(ye).triggerHandler("ready"), ce(ye).off("ready")))
                }
            }
        }), ce.ready.promise = function(e) {
            if (!Ee)
                if (Ee = ce.Deferred(), "complete" === ye.readyState) setTimeout(ce.ready);
                else if (ye.addEventListener) ye.addEventListener("DOMContentLoaded", d, !1), n.addEventListener("load", d, !1);
                else {
                    ye.attachEvent("onreadystatechange", d), n.attachEvent("onload", d);
                    var t = !1;
                    try {
                        t = null == n.frameElement && ye.documentElement
                    } catch (i) {}
                    t && t.doScroll && ! function r() {
                        if (!ce.isReady) {
                            try {
                                t.doScroll("left")
                            } catch (e) {
                                return setTimeout(r, 50)
                            }
                            l(), ce.ready()
                        }
                    }()
                }
            return Ee.promise(e)
        };
        var _e, Se = "undefined";
        for (_e in ce(ae)) break;
        ae.ownLast = "0" !== _e, ae.inlineBlockNeedsLayout = !1, ce(function() {
            var e, t, n, i;
            n = ye.getElementsByTagName("body")[0], n && n.style && (t = ye.createElement("div"), i = ye.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), typeof t.style.zoom !== Se && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", ae.inlineBlockNeedsLayout = e = 3 === t.offsetWidth, e && (n.style.zoom = 1)), n.removeChild(i))
        }),
            function() {
                var e = ye.createElement("div");
                if (null == ae.deleteExpando) {
                    ae.deleteExpando = !0;
                    try {
                        delete e.test
                    } catch (t) {
                        ae.deleteExpando = !1
                    }
                }
                e = null
            }(), ce.acceptData = function(e) {
            var t = ce.noData[(e.nodeName + " ").toLowerCase()],
                n = +e.nodeType || 1;
            return 1 !== n && 9 !== n ? !1 : !t || t !== !0 && e.getAttribute("classid") === t
        };
        var Ie = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            Ae = /([A-Z])/g;
        ce.extend({
            cache: {},
            noData: {
                "applet ": !0,
                "embed ": !0,
                "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
            },
            hasData: function(e) {
                return e = e.nodeType ? ce.cache[e[ce.expando]] : e[ce.expando], !!e && !p(e)
            },
            data: function(e, t, n) {
                return h(e, t, n)
            },
            removeData: function(e, t) {
                return g(e, t)
            },
            _data: function(e, t, n) {
                return h(e, t, n, !0)
            },
            _removeData: function(e, t) {
                return g(e, t, !0)
            }
        }), ce.fn.extend({
            data: function(e, t) {
                var n, i, r, o = this[0],
                    a = o && o.attributes;
                if (void 0 === e) {
                    if (this.length && (r = ce.data(o), 1 === o.nodeType && !ce._data(o, "parsedAttrs"))) {
                        for (n = a.length; n--;) a[n] && (i = a[n].name, 0 === i.indexOf("data-") && (i = ce.camelCase(i.slice(5)), f(o, i, r[i])));
                        ce._data(o, "parsedAttrs", !0)
                    }
                    return r
                }
                return "object" == typeof e ? this.each(function() {
                        ce.data(this, e)
                    }) : arguments.length > 1 ? this.each(function() {
                            ce.data(this, e, t)
                        }) : o ? f(o, e, ce.data(o, e)) : void 0
            },
            removeData: function(e) {
                return this.each(function() {
                    ce.removeData(this, e)
                })
            }
        }), ce.extend({
            queue: function(e, t, n) {
                var i;
                return e ? (t = (t || "fx") + "queue", i = ce._data(e, t), n && (!i || ce.isArray(n) ? i = ce._data(e, t, ce.makeArray(n)) : i.push(n)), i || []) : void 0
            },
            dequeue: function(e, t) {
                t = t || "fx";
                var n = ce.queue(e, t),
                    i = n.length,
                    r = n.shift(),
                    o = ce._queueHooks(e, t),
                    a = function() {
                        ce.dequeue(e, t)
                    };
                "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete o.stop, r.call(e, a, o)), !i && o && o.empty.fire()
            },
            _queueHooks: function(e, t) {
                var n = t + "queueHooks";
                return ce._data(e, n) || ce._data(e, n, {
                        empty: ce.Callbacks("once memory").add(function() {
                            ce._removeData(e, t + "queue"), ce._removeData(e, n)
                        })
                    })
            }
        }), ce.fn.extend({
            queue: function(e, t) {
                var n = 2;
                return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? ce.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                            var n = ce.queue(this, e, t);
                            ce._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && ce.dequeue(this, e)
                        })
            },
            dequeue: function(e) {
                return this.each(function() {
                    ce.dequeue(this, e)
                })
            },
            clearQueue: function(e) {
                return this.queue(e || "fx", [])
            },
            promise: function(e, t) {
                var n, i = 1,
                    r = ce.Deferred(),
                    o = this,
                    a = this.length,
                    s = function() {
                        --i || r.resolveWith(o, [o])
                    };
                for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;) n = ce._data(o[a], e + "queueHooks"), n && n.empty && (i++, n.empty.add(s));
                return s(), r.promise(t)
            }
        });
        var Le = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            Me = ["Top", "Right", "Bottom", "Left"],
            Ne = function(e, t) {
                return e = t || e, "none" === ce.css(e, "display") || !ce.contains(e.ownerDocument, e)
            },
            $e = ce.access = function(e, t, n, i, r, o, a) {
                var s = 0,
                    c = e.length,
                    u = null == n;
                if ("object" === ce.type(n)) {
                    r = !0;
                    for (s in n) ce.access(e, t, s, n[s], !0, o, a)
                } else if (void 0 !== i && (r = !0, ce.isFunction(i) || (a = !0), u && (a ? (t.call(e, i), t = null) : (u = t, t = function(e, t, n) {
                            return u.call(ce(e), n)
                        })), t))
                    for (; c > s; s++) t(e[s], n, a ? i : i.call(e[s], s, t(e[s], n)));
                return r ? e : u ? t.call(e) : c ? t(e[0], n) : o
            },
            je = /^(?:checkbox|radio)$/i;
        ! function() {
            var e = ye.createElement("input"),
                t = ye.createElement("div"),
                n = ye.createDocumentFragment();
            if (t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", ae.leadingWhitespace = 3 === t.firstChild.nodeType, ae.tbody = !t.getElementsByTagName("tbody").length, ae.htmlSerialize = !!t.getElementsByTagName("link").length, ae.html5Clone = "<:nav></:nav>" !== ye.createElement("nav").cloneNode(!0).outerHTML, e.type = "checkbox", e.checked = !0, n.appendChild(e), ae.appendChecked = e.checked, t.innerHTML = "<textarea>x</textarea>", ae.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue, n.appendChild(t), t.innerHTML = "<input type='radio' checked='checked' name='t'/>", ae.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, ae.noCloneEvent = !0, t.attachEvent && (t.attachEvent("onclick", function() {
                    ae.noCloneEvent = !1
                }), t.cloneNode(!0).click()), null == ae.deleteExpando) {
                ae.deleteExpando = !0;
                try {
                    delete t.test
                } catch (i) {
                    ae.deleteExpando = !1
                }
            }
        }(),
            function() {
                var e, t, i = ye.createElement("div");
                for (e in {
                    submit: !0,
                    change: !0,
                    focusin: !0
                }) t = "on" + e, (ae[e + "Bubbles"] = t in n) || (i.setAttribute(t, "t"), ae[e + "Bubbles"] = i.attributes[t].expando === !1);
                i = null
            }();
        var De = /^(?:input|select|textarea)$/i,
            Be = /^key/,
            Oe = /^(?:mouse|pointer|contextmenu)|click/,
            Re = /^(?:focusinfocus|focusoutblur)$/,
            Pe = /^([^.]*)(?:\.(.+)|)$/;
        ce.event = {
            global: {},
            add: function(e, t, n, i, r) {
                var o, a, s, c, u, l, d, f, p, h, g, m = ce._data(e);
                if (m) {
                    for (n.handler && (c = n, n = c.handler, r = c.selector), n.guid || (n.guid = ce.guid++), (a = m.events) || (a = m.events = {}), (l = m.handle) || (l = m.handle = function(e) {
                        return typeof ce === Se || e && ce.event.triggered === e.type ? void 0 : ce.event.dispatch.apply(l.elem, arguments)
                    }, l.elem = e), t = (t || "").match(Te) || [""], s = t.length; s--;) o = Pe.exec(t[s]) || [], p = g = o[1], h = (o[2] || "").split(".").sort(), p && (u = ce.event.special[p] || {}, p = (r ? u.delegateType : u.bindType) || p, u = ce.event.special[p] || {}, d = ce.extend({
                        type: p,
                        origType: g,
                        data: i,
                        handler: n,
                        guid: n.guid,
                        selector: r,
                        needsContext: r && ce.expr.match.needsContext.test(r),
                        namespace: h.join(".")
                    }, c), (f = a[p]) || (f = a[p] = [], f.delegateCount = 0, u.setup && u.setup.call(e, i, h, l) !== !1 || (e.addEventListener ? e.addEventListener(p, l, !1) : e.attachEvent && e.attachEvent("on" + p, l))), u.add && (u.add.call(e, d), d.handler.guid || (d.handler.guid = n.guid)), r ? f.splice(f.delegateCount++, 0, d) : f.push(d), ce.event.global[p] = !0);
                    e = null
                }
            },
            remove: function(e, t, n, i, r) {
                var o, a, s, c, u, l, d, f, p, h, g, m = ce.hasData(e) && ce._data(e);
                if (m && (l = m.events)) {
                    for (t = (t || "").match(Te) || [""], u = t.length; u--;)
                        if (s = Pe.exec(t[u]) || [], p = g = s[1], h = (s[2] || "").split(".").sort(), p) {
                            for (d = ce.event.special[p] || {}, p = (i ? d.delegateType : d.bindType) || p, f = l[p] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), c = o = f.length; o--;) a = f[o], !r && g !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || i && i !== a.selector && ("**" !== i || !a.selector) || (f.splice(o, 1), a.selector && f.delegateCount--, d.remove && d.remove.call(e, a));
                            c && !f.length && (d.teardown && d.teardown.call(e, h, m.handle) !== !1 || ce.removeEvent(e, p, m.handle), delete l[p])
                        } else
                            for (p in l) ce.event.remove(e, p + t[u], n, i, !0);
                    ce.isEmptyObject(l) && (delete m.handle, ce._removeData(e, "events"))
                }
            },
            trigger: function(e, t, i, r) {
                var o, a, s, c, u, l, d, f = [i || ye],
                    p = oe.call(e, "type") ? e.type : e,
                    h = oe.call(e, "namespace") ? e.namespace.split(".") : [];
                if (s = l = i = i || ye, 3 !== i.nodeType && 8 !== i.nodeType && !Re.test(p + ce.event.triggered) && (p.indexOf(".") >= 0 && (h = p.split("."), p = h.shift(), h.sort()), a = p.indexOf(":") < 0 && "on" + p, e = e[ce.expando] ? e : new ce.Event(p, "object" == typeof e && e), e.isTrigger = r ? 2 : 3, e.namespace = h.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = i), t = null == t ? [e] : ce.makeArray(t, [e]), u = ce.event.special[p] || {}, r || !u.trigger || u.trigger.apply(i, t) !== !1)) {
                    if (!r && !u.noBubble && !ce.isWindow(i)) {
                        for (c = u.delegateType || p, Re.test(c + p) || (s = s.parentNode); s; s = s.parentNode) f.push(s), l = s;
                        l === (i.ownerDocument || ye) && f.push(l.defaultView || l.parentWindow || n)
                    }
                    for (d = 0;
                         (s = f[d++]) && !e.isPropagationStopped();) e.type = d > 1 ? c : u.bindType || p, o = (ce._data(s, "events") || {})[e.type] && ce._data(s, "handle"), o && o.apply(s, t), o = a && s[a], o && o.apply && ce.acceptData(s) && (e.result = o.apply(s, t), e.result === !1 && e.preventDefault());
                    if (e.type = p, !r && !e.isDefaultPrevented() && (!u._default || u._default.apply(f.pop(), t) === !1) && ce.acceptData(i) && a && i[p] && !ce.isWindow(i)) {
                        l = i[a], l && (i[a] = null), ce.event.triggered = p;
                        try {
                            i[p]()
                        } catch (g) {}
                        ce.event.triggered = void 0, l && (i[a] = l)
                    }
                    return e.result
                }
            },
            dispatch: function(e) {
                e = ce.event.fix(e);
                var t, n, i, r, o, a = [],
                    s = Z.call(arguments),
                    c = (ce._data(this, "events") || {})[e.type] || [],
                    u = ce.event.special[e.type] || {};
                if (s[0] = e, e.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, e) !== !1) {
                    for (a = ce.event.handlers.call(this, e, c), t = 0;
                         (r = a[t++]) && !e.isPropagationStopped();)
                        for (e.currentTarget = r.elem, o = 0;
                             (i = r.handlers[o++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i, e.data = i.data, n = ((ce.event.special[i.origType] || {}).handle || i.handler).apply(r.elem, s), void 0 !== n && (e.result = n) === !1 && (e.preventDefault(), e.stopPropagation()));
                    return u.postDispatch && u.postDispatch.call(this, e), e.result
                }
            },
            handlers: function(e, t) {
                var n, i, r, o, a = [],
                    s = t.delegateCount,
                    c = e.target;
                if (s && c.nodeType && (!e.button || "click" !== e.type))
                    for (; c != this; c = c.parentNode || this)
                        if (1 === c.nodeType && (c.disabled !== !0 || "click" !== e.type)) {
                            for (r = [], o = 0; s > o; o++) i = t[o], n = i.selector + " ", void 0 === r[n] && (r[n] = i.needsContext ? ce(n, this).index(c) >= 0 : ce.find(n, this, null, [c]).length), r[n] && r.push(i);
                            r.length && a.push({
                                elem: c,
                                handlers: r
                            })
                        }
                return s < t.length && a.push({
                    elem: this,
                    handlers: t.slice(s)
                }), a
            },
            fix: function(e) {
                if (e[ce.expando]) return e;
                var t, n, i, r = e.type,
                    o = e,
                    a = this.fixHooks[r];
                for (a || (this.fixHooks[r] = a = Oe.test(r) ? this.mouseHooks : Be.test(r) ? this.keyHooks : {}), i = a.props ? this.props.concat(a.props) : this.props, e = new ce.Event(o), t = i.length; t--;) n = i[t], e[n] = o[n];
                return e.target || (e.target = o.srcElement || ye), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, a.filter ? a.filter(e, o) : e
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(e, t) {
                    return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(e, t) {
                    var n, i, r, o = t.button,
                        a = t.fromElement;
                    return null == e.pageX && null != t.clientX && (i = e.target.ownerDocument || ye, r = i.documentElement, n = i.body, e.pageX = t.clientX + (r && r.scrollLeft || n && n.scrollLeft || 0) - (r && r.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || n && n.scrollTop || 0) - (r && r.clientTop || n && n.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? t.toElement : a), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
                }
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        if (this !== y() && this.focus) try {
                            return this.focus(), !1
                        } catch (e) {}
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        return this === y() && this.blur ? (this.blur(), !1) : void 0
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        return ce.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                    },
                    _default: function(e) {
                        return ce.nodeName(e.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(e) {
                        void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                    }
                }
            },
            simulate: function(e, t, n, i) {
                var r = ce.extend(new ce.Event, n, {
                    type: e,
                    isSimulated: !0,
                    originalEvent: {}
                });
                i ? ce.event.trigger(r, null, t) : ce.event.dispatch.call(t, r), r.isDefaultPrevented() && n.preventDefault()
            }
        }, ce.removeEvent = ye.removeEventListener ? function(e, t, n) {
                e.removeEventListener && e.removeEventListener(t, n, !1)
            } : function(e, t, n) {
                var i = "on" + t;
                e.detachEvent && (typeof e[i] === Se && (e[i] = null), e.detachEvent(i, n))
            }, ce.Event = function(e, t) {
            return this instanceof ce.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? m : v) : this.type = e, t && ce.extend(this, t), this.timeStamp = e && e.timeStamp || ce.now(), void(this[ce.expando] = !0)) : new ce.Event(e, t)
        }, ce.Event.prototype = {
            isDefaultPrevented: v,
            isPropagationStopped: v,
            isImmediatePropagationStopped: v,
            preventDefault: function() {
                var e = this.originalEvent;
                this.isDefaultPrevented = m, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
            },
            stopPropagation: function() {
                var e = this.originalEvent;
                this.isPropagationStopped = m, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
            },
            stopImmediatePropagation: function() {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = m, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
            }
        }, ce.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(e, t) {
            ce.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function(e) {
                    var n, i = this,
                        r = e.relatedTarget,
                        o = e.handleObj;
                    return (!r || r !== i && !ce.contains(i, r)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
                }
            }
        }), ae.submitBubbles || (ce.event.special.submit = {
            setup: function() {
                return ce.nodeName(this, "form") ? !1 : void ce.event.add(this, "click._submit keypress._submit", function(e) {
                        var t = e.target,
                            n = ce.nodeName(t, "input") || ce.nodeName(t, "button") ? t.form : void 0;
                        n && !ce._data(n, "submitBubbles") && (ce.event.add(n, "submit._submit", function(e) {
                            e._submit_bubble = !0
                        }), ce._data(n, "submitBubbles", !0))
                    })
            },
            postDispatch: function(e) {
                e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && ce.event.simulate("submit", this.parentNode, e, !0))
            },
            teardown: function() {
                return ce.nodeName(this, "form") ? !1 : void ce.event.remove(this, "._submit")
            }
        }), ae.changeBubbles || (ce.event.special.change = {
            setup: function() {
                return De.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (ce.event.add(this, "propertychange._change", function(e) {
                        "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
                    }), ce.event.add(this, "click._change", function(e) {
                        this._just_changed && !e.isTrigger && (this._just_changed = !1), ce.event.simulate("change", this, e, !0)
                    })), !1) : void ce.event.add(this, "beforeactivate._change", function(e) {
                        var t = e.target;
                        De.test(t.nodeName) && !ce._data(t, "changeBubbles") && (ce.event.add(t, "change._change", function(e) {
                            !this.parentNode || e.isSimulated || e.isTrigger || ce.event.simulate("change", this.parentNode, e, !0)
                        }), ce._data(t, "changeBubbles", !0))
                    })
            },
            handle: function(e) {
                var t = e.target;
                return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
            },
            teardown: function() {
                return ce.event.remove(this, "._change"), !De.test(this.nodeName)
            }
        }), ae.focusinBubbles || ce.each({
            focus: "focusin",
            blur: "focusout"
        }, function(e, t) {
            var n = function(e) {
                ce.event.simulate(t, e.target, ce.event.fix(e), !0)
            };
            ce.event.special[t] = {
                setup: function() {
                    var i = this.ownerDocument || this,
                        r = ce._data(i, t);
                    r || i.addEventListener(e, n, !0), ce._data(i, t, (r || 0) + 1)
                },
                teardown: function() {
                    var i = this.ownerDocument || this,
                        r = ce._data(i, t) - 1;
                    r ? ce._data(i, t, r) : (i.removeEventListener(e, n, !0), ce._removeData(i, t))
                }
            }
        }), ce.fn.extend({
            on: function(e, t, n, i, r) {
                var o, a;
                if ("object" == typeof e) {
                    "string" != typeof t && (n = n || t, t = void 0);
                    for (o in e) this.on(o, t, n, e[o], r);
                    return this
                }
                if (null == n && null == i ? (i = t, n = t = void 0) : null == i && ("string" == typeof t ? (i = n, n = void 0) : (i = n, n = t, t = void 0)), i === !1) i = v;
                else if (!i) return this;
                return 1 === r && (a = i, i = function(e) {
                    return ce().off(e), a.apply(this, arguments)
                }, i.guid = a.guid || (a.guid = ce.guid++)), this.each(function() {
                    ce.event.add(this, e, i, n, t)
                })
            },
            one: function(e, t, n, i) {
                return this.on(e, t, n, i, 1)
            },
            off: function(e, t, n) {
                var i, r;
                if (e && e.preventDefault && e.handleObj) return i = e.handleObj, ce(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                if ("object" == typeof e) {
                    for (r in e) this.off(r, t, e[r]);
                    return this
                }
                return (t === !1 || "function" == typeof t) && (n = t, t = void 0), n === !1 && (n = v), this.each(function() {
                    ce.event.remove(this, e, n, t)
                })
            },
            trigger: function(e, t) {
                return this.each(function() {
                    ce.event.trigger(e, t, this)
                })
            },
            triggerHandler: function(e, t) {
                var n = this[0];
                return n ? ce.event.trigger(e, t, n, !0) : void 0
            }
        });
        var He = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
            Ue = / jQuery\d+="(?:null|\d+)"/g,
            Fe = new RegExp("<(?:" + He + ")[\\s/>]", "i"),
            qe = /^\s+/,
            Je = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
            We = /<([\w:]+)/,
            ze = /<tbody/i,
            Ge = /<|&#?\w+;/,
            Ye = /<(?:script|style|link)/i,
            Qe = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Xe = /^$|\/(?:java|ecma)script/i,
            Ve = /^true\/(.*)/,
            Ke = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
            Ze = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                legend: [1, "<fieldset>", "</fieldset>"],
                area: [1, "<map>", "</map>"],
                param: [1, "<object>", "</object>"],
                thead: [1, "<table>", "</table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: ae.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
            },
            et = b(ye),
            tt = et.appendChild(ye.createElement("div"));
        Ze.optgroup = Ze.option, Ze.tbody = Ze.tfoot = Ze.colgroup = Ze.caption = Ze.thead, Ze.th = Ze.td, ce.extend({
            clone: function(e, t, n) {
                var i, r, o, a, s, c = ce.contains(e.ownerDocument, e);
                if (ae.html5Clone || ce.isXMLDoc(e) || !Fe.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (tt.innerHTML = e.outerHTML, tt.removeChild(o = tt.firstChild)), !(ae.noCloneEvent && ae.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ce.isXMLDoc(e)))
                    for (i = w(o), s = w(e), a = 0; null != (r = s[a]); ++a) i[a] && S(r, i[a]);
                if (t)
                    if (n)
                        for (s = s || w(e), i = i || w(o), a = 0; null != (r = s[a]); a++) _(r, i[a]);
                    else _(e, o);
                return i = w(o, "script"), i.length > 0 && E(i, !c && w(e, "script")), i = s = r = null, o
            },
            buildFragment: function(e, t, n, i) {
                for (var r, o, a, s, c, u, l, d = e.length, f = b(t), p = [], h = 0; d > h; h++)
                    if (o = e[h], o || 0 === o)
                        if ("object" === ce.type(o)) ce.merge(p, o.nodeType ? [o] : o);
                        else if (Ge.test(o)) {
                            for (s = s || f.appendChild(t.createElement("div")), c = (We.exec(o) || ["", ""])[1].toLowerCase(), l = Ze[c] || Ze._default, s.innerHTML = l[1] + o.replace(Je, "<$1></$2>") + l[2], r = l[0]; r--;) s = s.lastChild;
                            if (!ae.leadingWhitespace && qe.test(o) && p.push(t.createTextNode(qe.exec(o)[0])), !ae.tbody)
                                for (o = "table" !== c || ze.test(o) ? "<table>" !== l[1] || ze.test(o) ? 0 : s : s.firstChild, r = o && o.childNodes.length; r--;) ce.nodeName(u = o.childNodes[r], "tbody") && !u.childNodes.length && o.removeChild(u);
                            for (ce.merge(p, s.childNodes), s.textContent = ""; s.firstChild;) s.removeChild(s.firstChild);
                            s = f.lastChild
                        } else p.push(t.createTextNode(o));
                for (s && f.removeChild(s), ae.appendChecked || ce.grep(w(p, "input"), x), h = 0; o = p[h++];)
                    if ((!i || -1 === ce.inArray(o, i)) && (a = ce.contains(o.ownerDocument, o), s = w(f.appendChild(o), "script"), a && E(s), n))
                        for (r = 0; o = s[r++];) Xe.test(o.type || "") && n.push(o);
                return s = null, f
            },
            cleanData: function(e, t) {
                for (var n, i, r, o, a = 0, s = ce.expando, c = ce.cache, u = ae.deleteExpando, l = ce.event.special; null != (n = e[a]); a++)
                    if ((t || ce.acceptData(n)) && (r = n[s], o = r && c[r])) {
                        if (o.events)
                            for (i in o.events) l[i] ? ce.event.remove(n, i) : ce.removeEvent(n, i, o.handle);
                        c[r] && (delete c[r], u ? delete n[s] : typeof n.removeAttribute !== Se ? n.removeAttribute(s) : n[s] = null, K.push(r))
                    }
            }
        }), ce.fn.extend({
            text: function(e) {
                return $e(this, function(e) {
                    return void 0 === e ? ce.text(this) : this.empty().append((this[0] && this[0].ownerDocument || ye).createTextNode(e))
                }, null, e, arguments.length)
            },
            append: function() {
                return this.domManip(arguments, function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = C(this, e);
                        t.appendChild(e)
                    }
                })
            },
            prepend: function() {
                return this.domManip(arguments, function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = C(this, e);
                        t.insertBefore(e, t.firstChild)
                    }
                })
            },
            before: function() {
                return this.domManip(arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                })
            },
            after: function() {
                return this.domManip(arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                })
            },
            remove: function(e, t) {
                for (var n, i = e ? ce.filter(e, this) : this, r = 0; null != (n = i[r]); r++) t || 1 !== n.nodeType || ce.cleanData(w(n)), n.parentNode && (t && ce.contains(n.ownerDocument, n) && E(w(n, "script")), n.parentNode.removeChild(n));
                return this
            },
            empty: function() {
                for (var e, t = 0; null != (e = this[t]); t++) {
                    for (1 === e.nodeType && ce.cleanData(w(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                    e.options && ce.nodeName(e, "select") && (e.options.length = 0)
                }
                return this
            },
            clone: function(e, t) {
                return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
                    return ce.clone(this, e, t)
                })
            },
            html: function(e) {
                return $e(this, function(e) {
                    var t = this[0] || {},
                        n = 0,
                        i = this.length;
                    if (void 0 === e) return 1 === t.nodeType ? t.innerHTML.replace(Ue, "") : void 0;
                    if (!("string" != typeof e || Ye.test(e) || !ae.htmlSerialize && Fe.test(e) || !ae.leadingWhitespace && qe.test(e) || Ze[(We.exec(e) || ["", ""])[1].toLowerCase()])) {
                        e = e.replace(Je, "<$1></$2>");
                        try {
                            for (; i > n; n++) t = this[n] || {}, 1 === t.nodeType && (ce.cleanData(w(t, !1)), t.innerHTML = e);
                            t = 0
                        } catch (r) {}
                    }
                    t && this.empty().append(e)
                }, null, e, arguments.length)
            },
            replaceWith: function() {
                var e = arguments[0];
                return this.domManip(arguments, function(t) {
                    e = this.parentNode, ce.cleanData(w(this)), e && e.replaceChild(t, this)
                }), e && (e.length || e.nodeType) ? this : this.remove()
            },
            detach: function(e) {
                return this.remove(e, !0)
            },
            domManip: function(e, t) {
                e = ee.apply([], e);
                var n, i, r, o, a, s, c = 0,
                    u = this.length,
                    l = this,
                    d = u - 1,
                    f = e[0],
                    p = ce.isFunction(f);
                if (p || u > 1 && "string" == typeof f && !ae.checkClone && Qe.test(f)) return this.each(function(n) {
                    var i = l.eq(n);
                    p && (e[0] = f.call(this, n, i.html())), i.domManip(e, t)
                });
                if (u && (s = ce.buildFragment(e, this[0].ownerDocument, !1, this), n = s.firstChild, 1 === s.childNodes.length && (s = n), n)) {
                    for (o = ce.map(w(s, "script"), T), r = o.length; u > c; c++) i = s, c !== d && (i = ce.clone(i, !0, !0), r && ce.merge(o, w(i, "script"))), t.call(this[c], i, c);
                    if (r)
                        for (a = o[o.length - 1].ownerDocument, ce.map(o, k), c = 0; r > c; c++) i = o[c], Xe.test(i.type || "") && !ce._data(i, "globalEval") && ce.contains(a, i) && (i.src ? ce._evalUrl && ce._evalUrl(i.src) : ce.globalEval((i.text || i.textContent || i.innerHTML || "").replace(Ke, "")));
                    s = n = null
                }
                return this
            }
        }), ce.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(e, t) {
            ce.fn[e] = function(e) {
                for (var n, i = 0, r = [], o = ce(e), a = o.length - 1; a >= i; i++) n = i === a ? this : this.clone(!0), ce(o[i])[t](n), te.apply(r, n.get());
                return this.pushStack(r)
            }
        });
        var nt, it = {};
        ! function() {
            var e;
            ae.shrinkWrapBlocks = function() {
                if (null != e) return e;
                e = !1;
                var t, n, i;
                return n = ye.getElementsByTagName("body")[0], n && n.style ? (t = ye.createElement("div"), i = ye.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), typeof t.style.zoom !== Se && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", t.appendChild(ye.createElement("div")).style.width = "5px", e = 3 !== t.offsetWidth), n.removeChild(i), e) : void 0
            }
        }();
        var rt, ot, at = /^margin/,
            st = new RegExp("^(" + Le + ")(?!px)[a-z%]+$", "i"),
            ct = /^(top|right|bottom|left)$/;
        n.getComputedStyle ? (rt = function(e) {
                return e.ownerDocument.defaultView.opener ? e.ownerDocument.defaultView.getComputedStyle(e, null) : n.getComputedStyle(e, null)
            }, ot = function(e, t, n) {
                var i, r, o, a, s = e.style;
                return n = n || rt(e), a = n ? n.getPropertyValue(t) || n[t] : void 0, n && ("" !== a || ce.contains(e.ownerDocument, e) || (a = ce.style(e, t)), st.test(a) && at.test(t) && (i = s.width, r = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = i, s.minWidth = r, s.maxWidth = o)), void 0 === a ? a : a + ""
            }) : ye.documentElement.currentStyle && (rt = function(e) {
                return e.currentStyle
            }, ot = function(e, t, n) {
                var i, r, o, a, s = e.style;
                return n = n || rt(e), a = n ? n[t] : void 0, null == a && s && s[t] && (a = s[t]), st.test(a) && !ct.test(t) && (i = s.left, r = e.runtimeStyle, o = r && r.left, o && (r.left = e.currentStyle.left), s.left = "fontSize" === t ? "1em" : a, a = s.pixelLeft + "px", s.left = i, o && (r.left = o)), void 0 === a ? a : a + "" || "auto"
            }),
            function() {
                function e() {
                    var e, t, i, r;
                    t = ye.getElementsByTagName("body")[0], t && t.style && (e = ye.createElement("div"), i = ye.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", t.appendChild(i).appendChild(e), e.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", o = a = !1, c = !0, n.getComputedStyle && (o = "1%" !== (n.getComputedStyle(e, null) || {}).top, a = "4px" === (n.getComputedStyle(e, null) || {
                            width: "4px"
                        }).width, r = e.appendChild(ye.createElement("div")), r.style.cssText = e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", r.style.marginRight = r.style.width = "0", e.style.width = "1px", c = !parseFloat((n.getComputedStyle(r, null) || {}).marginRight), e.removeChild(r)), e.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", r = e.getElementsByTagName("td"), r[0].style.cssText = "margin:0;border:0;padding:0;display:none", s = 0 === r[0].offsetHeight, s && (r[0].style.display = "", r[1].style.display = "none", s = 0 === r[0].offsetHeight), t.removeChild(i))
                }
                var t, i, r, o, a, s, c;
                t = ye.createElement("div"), t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", r = t.getElementsByTagName("a")[0], i = r && r.style, i && (i.cssText = "float:left;opacity:.5", ae.opacity = "0.5" === i.opacity, ae.cssFloat = !!i.cssFloat, t.style.backgroundClip = "content-box", t.cloneNode(!0).style.backgroundClip = "", ae.clearCloneStyle = "content-box" === t.style.backgroundClip, ae.boxSizing = "" === i.boxSizing || "" === i.MozBoxSizing || "" === i.WebkitBoxSizing, ce.extend(ae, {
                    reliableHiddenOffsets: function() {
                        return null == s && e(), s
                    },
                    boxSizingReliable: function() {
                        return null == a && e(), a
                    },
                    pixelPosition: function() {
                        return null == o && e(), o
                    },
                    reliableMarginRight: function() {
                        return null == c && e(), c
                    }
                }))
            }(), ce.swap = function(e, t, n, i) {
            var r, o, a = {};
            for (o in t) a[o] = e.style[o], e.style[o] = t[o];
            r = n.apply(e, i || []);
            for (o in t) e.style[o] = a[o];
            return r
        };
        var ut = /alpha\([^)]*\)/i,
            lt = /opacity\s*=\s*([^)]*)/,
            dt = /^(none|table(?!-c[ea]).+)/,
            ft = new RegExp("^(" + Le + ")(.*)$", "i"),
            pt = new RegExp("^([+-])=(" + Le + ")", "i"),
            ht = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            gt = {
                letterSpacing: "0",
                fontWeight: "400"
            },
            mt = ["Webkit", "O", "Moz", "ms"];
        ce.extend({
            cssHooks: {
                opacity: {
                    get: function(e, t) {
                        if (t) {
                            var n = ot(e, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                "float": ae.cssFloat ? "cssFloat" : "styleFloat"
            },
            style: function(e, t, n, i) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var r, o, a, s = ce.camelCase(t),
                        c = e.style;
                    if (t = ce.cssProps[s] || (ce.cssProps[s] = M(c, s)), a = ce.cssHooks[t] || ce.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (r = a.get(e, !1, i)) ? r : c[t];
                    if (o = typeof n, "string" === o && (r = pt.exec(n)) && (n = (r[1] + 1) * r[2] + parseFloat(ce.css(e, t)), o = "number"), null != n && n === n && ("number" !== o || ce.cssNumber[s] || (n += "px"), ae.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"), !(a && "set" in a && void 0 === (n = a.set(e, n, i))))) try {
                        c[t] = n
                    } catch (u) {}
                }
            },
            css: function(e, t, n, i) {
                var r, o, a, s = ce.camelCase(t);
                return t = ce.cssProps[s] || (ce.cssProps[s] = M(e.style, s)), a = ce.cssHooks[t] || ce.cssHooks[s], a && "get" in a && (o = a.get(e, !0, n)), void 0 === o && (o = ot(e, t, i)), "normal" === o && t in gt && (o = gt[t]), "" === n || n ? (r = parseFloat(o), n === !0 || ce.isNumeric(r) ? r || 0 : o) : o
            }
        }), ce.each(["height", "width"], function(e, t) {
            ce.cssHooks[t] = {
                get: function(e, n, i) {
                    return n ? dt.test(ce.css(e, "display")) && 0 === e.offsetWidth ? ce.swap(e, ht, function() {
                                return D(e, t, i)
                            }) : D(e, t, i) : void 0
                },
                set: function(e, n, i) {
                    var r = i && rt(e);
                    return $(e, n, i ? j(e, t, i, ae.boxSizing && "border-box" === ce.css(e, "boxSizing", !1, r), r) : 0)
                }
            }
        }), ae.opacity || (ce.cssHooks.opacity = {
            get: function(e, t) {
                return lt.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
            },
            set: function(e, t) {
                var n = e.style,
                    i = e.currentStyle,
                    r = ce.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                    o = i && i.filter || n.filter || "";
                n.zoom = 1, (t >= 1 || "" === t) && "" === ce.trim(o.replace(ut, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || i && !i.filter) || (n.filter = ut.test(o) ? o.replace(ut, r) : o + " " + r)
            }
        }), ce.cssHooks.marginRight = L(ae.reliableMarginRight, function(e, t) {
            return t ? ce.swap(e, {
                    display: "inline-block"
                }, ot, [e, "marginRight"]) : void 0
        }), ce.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(e, t) {
            ce.cssHooks[e + t] = {
                expand: function(n) {
                    for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) r[e + Me[i] + t] = o[i] || o[i - 2] || o[0];
                    return r
                }
            }, at.test(e) || (ce.cssHooks[e + t].set = $)
        }), ce.fn.extend({
            css: function(e, t) {
                return $e(this, function(e, t, n) {
                    var i, r, o = {},
                        a = 0;
                    if (ce.isArray(t)) {
                        for (i = rt(e), r = t.length; r > a; a++) o[t[a]] = ce.css(e, t[a], !1, i);
                        return o
                    }
                    return void 0 !== n ? ce.style(e, t, n) : ce.css(e, t)
                }, e, t, arguments.length > 1)
            },
            show: function() {
                return N(this, !0)
            },
            hide: function() {
                return N(this)
            },
            toggle: function(e) {
                return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                        Ne(this) ? ce(this).show() : ce(this).hide()
                    })
            }
        }), ce.Tween = B, B.prototype = {
            constructor: B,
            init: function(e, t, n, i, r, o) {
                this.elem = e, this.prop = n, this.easing = r || "swing", this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = o || (ce.cssNumber[n] ? "" : "px")
            },
            cur: function() {
                var e = B.propHooks[this.prop];
                return e && e.get ? e.get(this) : B.propHooks._default.get(this)
            },
            run: function(e) {
                var t, n = B.propHooks[this.prop];
                return this.pos = t = this.options.duration ? ce.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : B.propHooks._default.set(this), this
            }
        }, B.prototype.init.prototype = B.prototype, B.propHooks = {
            _default: {
                get: function(e) {
                    var t;
                    return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = ce.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
                },
                set: function(e) {
                    ce.fx.step[e.prop] ? ce.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[ce.cssProps[e.prop]] || ce.cssHooks[e.prop]) ? ce.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
                }
            }
        }, B.propHooks.scrollTop = B.propHooks.scrollLeft = {
            set: function(e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        }, ce.easing = {
            linear: function(e) {
                return e
            },
            swing: function(e) {
                return .5 - Math.cos(e * Math.PI) / 2
            }
        }, ce.fx = B.prototype.init, ce.fx.step = {};
        var vt, yt, bt = /^(?:toggle|show|hide)$/,
            wt = new RegExp("^(?:([+-])=|)(" + Le + ")([a-z%]*)$", "i"),
            xt = /queueHooks$/,
            Ct = [H],
            Tt = {
                "*": [function(e, t) {
                    var n = this.createTween(e, t),
                        i = n.cur(),
                        r = wt.exec(t),
                        o = r && r[3] || (ce.cssNumber[e] ? "" : "px"),
                        a = (ce.cssNumber[e] || "px" !== o && +i) && wt.exec(ce.css(n.elem, e)),
                        s = 1,
                        c = 20;
                    if (a && a[3] !== o) {
                        o = o || a[3], r = r || [], a = +i || 1;
                        do s = s || ".5", a /= s, ce.style(n.elem, e, a + o); while (s !== (s = n.cur() / i) && 1 !== s && --c)
                    }
                    return r && (a = n.start = +a || +i || 0, n.unit = o, n.end = r[1] ? a + (r[1] + 1) * r[2] : +r[2]), n
                }]
            };
        ce.Animation = ce.extend(F, {
            tweener: function(e, t) {
                ce.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
                for (var n, i = 0, r = e.length; r > i; i++) n = e[i], Tt[n] = Tt[n] || [], Tt[n].unshift(t)
            },
            prefilter: function(e, t) {
                t ? Ct.unshift(e) : Ct.push(e)
            }
        }), ce.speed = function(e, t, n) {
            var i = e && "object" == typeof e ? ce.extend({}, e) : {
                    complete: n || !n && t || ce.isFunction(e) && e,
                    duration: e,
                    easing: n && t || t && !ce.isFunction(t) && t
                };
            return i.duration = ce.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in ce.fx.speeds ? ce.fx.speeds[i.duration] : ce.fx.speeds._default, (null == i.queue || i.queue === !0) && (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                ce.isFunction(i.old) && i.old.call(this), i.queue && ce.dequeue(this, i.queue)
            }, i
        }, ce.fn.extend({
            fadeTo: function(e, t, n, i) {
                return this.filter(Ne).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, i)
            },
            animate: function(e, t, n, i) {
                var r = ce.isEmptyObject(e),
                    o = ce.speed(t, n, i),
                    a = function() {
                        var t = F(this, ce.extend({}, e), o);
                        (r || ce._data(this, "finish")) && t.stop(!0)
                    };
                return a.finish = a, r || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
            },
            stop: function(e, t, n) {
                var i = function(e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                    var t = !0,
                        r = null != e && e + "queueHooks",
                        o = ce.timers,
                        a = ce._data(this);
                    if (r) a[r] && a[r].stop && i(a[r]);
                    else
                        for (r in a) a[r] && a[r].stop && xt.test(r) && i(a[r]);
                    for (r = o.length; r--;) o[r].elem !== this || null != e && o[r].queue !== e || (o[r].anim.stop(n), t = !1, o.splice(r, 1));
                    (t || !n) && ce.dequeue(this, e)
                })
            },
            finish: function(e) {
                return e !== !1 && (e = e || "fx"), this.each(function() {
                    var t, n = ce._data(this),
                        i = n[e + "queue"],
                        r = n[e + "queueHooks"],
                        o = ce.timers,
                        a = i ? i.length : 0;
                    for (n.finish = !0, ce.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                    for (t = 0; a > t; t++) i[t] && i[t].finish && i[t].finish.call(this);
                    delete n.finish
                })
            }
        }), ce.each(["toggle", "show", "hide"], function(e, t) {
            var n = ce.fn[t];
            ce.fn[t] = function(e, i, r) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(R(t, !0), e, i, r)
            }
        }), ce.each({
            slideDown: R("show"),
            slideUp: R("hide"),
            slideToggle: R("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, t) {
            ce.fn[e] = function(e, n, i) {
                return this.animate(t, e, n, i)
            }
        }), ce.timers = [], ce.fx.tick = function() {
            var e, t = ce.timers,
                n = 0;
            for (vt = ce.now(); n < t.length; n++) e = t[n], e() || t[n] !== e || t.splice(n--, 1);
            t.length || ce.fx.stop(), vt = void 0
        }, ce.fx.timer = function(e) {
            ce.timers.push(e), e() ? ce.fx.start() : ce.timers.pop()
        }, ce.fx.interval = 13, ce.fx.start = function() {
            yt || (yt = setInterval(ce.fx.tick, ce.fx.interval))
        }, ce.fx.stop = function() {
            clearInterval(yt), yt = null
        }, ce.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, ce.fn.delay = function(e, t) {
            return e = ce.fx ? ce.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
                var i = setTimeout(t, e);
                n.stop = function() {
                    clearTimeout(i)
                }
            })
        },
            function() {
                var e, t, n, i, r;
                t = ye.createElement("div"), t.setAttribute("className", "t"), t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", i = t.getElementsByTagName("a")[0], n = ye.createElement("select"), r = n.appendChild(ye.createElement("option")), e = t.getElementsByTagName("input")[0], i.style.cssText = "top:1px", ae.getSetAttribute = "t" !== t.className, ae.style = /top/.test(i.getAttribute("style")), ae.hrefNormalized = "/a" === i.getAttribute("href"), ae.checkOn = !!e.value, ae.optSelected = r.selected, ae.enctype = !!ye.createElement("form").enctype, n.disabled = !0, ae.optDisabled = !r.disabled, e = ye.createElement("input"), e.setAttribute("value", ""), ae.input = "" === e.getAttribute("value"), e.value = "t", e.setAttribute("type", "radio"), ae.radioValue = "t" === e.value
            }();
        var kt = /\r/g;
        ce.fn.extend({
            val: function(e) {
                var t, n, i, r = this[0]; {
                    if (arguments.length) return i = ce.isFunction(e), this.each(function(n) {
                        var r;
                        1 === this.nodeType && (r = i ? e.call(this, n, ce(this).val()) : e, null == r ? r = "" : "number" == typeof r ? r += "" : ce.isArray(r) && (r = ce.map(r, function(e) {
                                    return null == e ? "" : e + ""
                                })), t = ce.valHooks[this.type] || ce.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, r, "value") || (this.value = r))
                    });
                    if (r) return t = ce.valHooks[r.type] || ce.valHooks[r.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(r, "value")) ? n : (n = r.value, "string" == typeof n ? n.replace(kt, "") : null == n ? "" : n)
                }
            }
        }), ce.extend({
            valHooks: {
                option: {
                    get: function(e) {
                        var t = ce.find.attr(e, "value");
                        return null != t ? t : ce.trim(ce.text(e))
                    }
                },
                select: {
                    get: function(e) {
                        for (var t, n, i = e.options, r = e.selectedIndex, o = "select-one" === e.type || 0 > r, a = o ? null : [], s = o ? r + 1 : i.length, c = 0 > r ? s : o ? r : 0; s > c; c++)
                            if (n = i[c], !(!n.selected && c !== r || (ae.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && ce.nodeName(n.parentNode, "optgroup"))) {
                                if (t = ce(n).val(), o) return t;
                                a.push(t)
                            }
                        return a
                    },
                    set: function(e, t) {
                        for (var n, i, r = e.options, o = ce.makeArray(t), a = r.length; a--;)
                            if (i = r[a], ce.inArray(ce.valHooks.option.get(i), o) >= 0) try {
                                i.selected = n = !0
                            } catch (s) {
                                i.scrollHeight
                            } else i.selected = !1;
                        return n || (e.selectedIndex = -1), r
                    }
                }
            }
        }), ce.each(["radio", "checkbox"], function() {
            ce.valHooks[this] = {
                set: function(e, t) {
                    return ce.isArray(t) ? e.checked = ce.inArray(ce(e).val(), t) >= 0 : void 0
                }
            }, ae.checkOn || (ce.valHooks[this].get = function(e) {
                return null === e.getAttribute("value") ? "on" : e.value
            })
        });
        var Et, _t, St = ce.expr.attrHandle,
            It = /^(?:checked|selected)$/i,
            At = ae.getSetAttribute,
            Lt = ae.input;
        ce.fn.extend({
            attr: function(e, t) {
                return $e(this, ce.attr, e, t, arguments.length > 1)
            },
            removeAttr: function(e) {
                return this.each(function() {
                    ce.removeAttr(this, e)
                })
            }
        }), ce.extend({
            attr: function(e, t, n) {
                var i, r, o = e.nodeType;
                if (e && 3 !== o && 8 !== o && 2 !== o) return typeof e.getAttribute === Se ? ce.prop(e, t, n) : (1 === o && ce.isXMLDoc(e) || (t = t.toLowerCase(), i = ce.attrHooks[t] || (ce.expr.match.bool.test(t) ? _t : Et)), void 0 === n ? i && "get" in i && null !== (r = i.get(e, t)) ? r : (r = ce.find.attr(e, t), null == r ? void 0 : r) : null !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : void ce.removeAttr(e, t))
            },
            removeAttr: function(e, t) {
                var n, i, r = 0,
                    o = t && t.match(Te);
                if (o && 1 === e.nodeType)
                    for (; n = o[r++];) i = ce.propFix[n] || n, ce.expr.match.bool.test(n) ? Lt && At || !It.test(n) ? e[i] = !1 : e[ce.camelCase("default-" + n)] = e[i] = !1 : ce.attr(e, n, ""), e.removeAttribute(At ? n : i)
            },
            attrHooks: {
                type: {
                    set: function(e, t) {
                        if (!ae.radioValue && "radio" === t && ce.nodeName(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t), n && (e.value = n), t
                        }
                    }
                }
            }
        }), _t = {
            set: function(e, t, n) {
                return t === !1 ? ce.removeAttr(e, n) : Lt && At || !It.test(n) ? e.setAttribute(!At && ce.propFix[n] || n, n) : e[ce.camelCase("default-" + n)] = e[n] = !0, n
            }
        }, ce.each(ce.expr.match.bool.source.match(/\w+/g), function(e, t) {
            var n = St[t] || ce.find.attr;
            St[t] = Lt && At || !It.test(t) ? function(e, t, i) {
                    var r, o;
                    return i || (o = St[t], St[t] = r, r = null != n(e, t, i) ? t.toLowerCase() : null, St[t] = o), r
                } : function(e, t, n) {
                    return n ? void 0 : e[ce.camelCase("default-" + t)] ? t.toLowerCase() : null
                }
        }), Lt && At || (ce.attrHooks.value = {
            set: function(e, t, n) {
                return ce.nodeName(e, "input") ? void(e.defaultValue = t) : Et && Et.set(e, t, n)
            }
        }), At || (Et = {
            set: function(e, t, n) {
                var i = e.getAttributeNode(n);
                return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(n)), i.value = t += "", "value" === n || t === e.getAttribute(n) ? t : void 0
            }
        }, St.id = St.name = St.coords = function(e, t, n) {
            var i;
            return n ? void 0 : (i = e.getAttributeNode(t)) && "" !== i.value ? i.value : null
        }, ce.valHooks.button = {
            get: function(e, t) {
                var n = e.getAttributeNode(t);
                return n && n.specified ? n.value : void 0
            },
            set: Et.set
        }, ce.attrHooks.contenteditable = {
            set: function(e, t, n) {
                Et.set(e, "" === t ? !1 : t, n)
            }
        }, ce.each(["width", "height"], function(e, t) {
            ce.attrHooks[t] = {
                set: function(e, n) {
                    return "" === n ? (e.setAttribute(t, "auto"), n) : void 0
                }
            }
        })), ae.style || (ce.attrHooks.style = {
            get: function(e) {
                return e.style.cssText || void 0
            },
            set: function(e, t) {
                return e.style.cssText = t + ""
            }
        });
        var Mt = /^(?:input|select|textarea|button|object)$/i,
            Nt = /^(?:a|area)$/i;
        ce.fn.extend({
            prop: function(e, t) {
                return $e(this, ce.prop, e, t, arguments.length > 1)
            },
            removeProp: function(e) {
                return e = ce.propFix[e] || e, this.each(function() {
                    try {
                        this[e] = void 0, delete this[e]
                    } catch (t) {}
                })
            }
        }), ce.extend({
            propFix: {
                "for": "htmlFor",
                "class": "className"
            },
            prop: function(e, t, n) {
                var i, r, o, a = e.nodeType;
                if (e && 3 !== a && 8 !== a && 2 !== a) return o = 1 !== a || !ce.isXMLDoc(e), o && (t = ce.propFix[t] || t, r = ce.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t]
            },
            propHooks: {
                tabIndex: {
                    get: function(e) {
                        var t = ce.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : Mt.test(e.nodeName) || Nt.test(e.nodeName) && e.href ? 0 : -1
                    }
                }
            }
        }), ae.hrefNormalized || ce.each(["href", "src"], function(e, t) {
            ce.propHooks[t] = {
                get: function(e) {
                    return e.getAttribute(t, 4)
                }
            }
        }), ae.optSelected || (ce.propHooks.selected = {
            get: function(e) {
                var t = e.parentNode;
                return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
            }
        }), ce.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            ce.propFix[this.toLowerCase()] = this
        }), ae.enctype || (ce.propFix.enctype = "encoding");
        var $t = /[\t\r\n\f]/g;
        ce.fn.extend({
            addClass: function(e) {
                var t, n, i, r, o, a, s = 0,
                    c = this.length,
                    u = "string" == typeof e && e;
                if (ce.isFunction(e)) return this.each(function(t) {
                    ce(this).addClass(e.call(this, t, this.className))
                });
                if (u)
                    for (t = (e || "").match(Te) || []; c > s; s++)
                        if (n = this[s], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace($t, " ") : " ")) {
                            for (o = 0; r = t[o++];) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                            a = ce.trim(i), n.className !== a && (n.className = a)
                        }
                return this
            },
            removeClass: function(e) {
                var t, n, i, r, o, a, s = 0,
                    c = this.length,
                    u = 0 === arguments.length || "string" == typeof e && e;
                if (ce.isFunction(e)) return this.each(function(t) {
                    ce(this).removeClass(e.call(this, t, this.className))
                });
                if (u)
                    for (t = (e || "").match(Te) || []; c > s; s++)
                        if (n = this[s], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace($t, " ") : "")) {
                            for (o = 0; r = t[o++];)
                                for (; i.indexOf(" " + r + " ") >= 0;) i = i.replace(" " + r + " ", " ");
                            a = e ? ce.trim(i) : "", n.className !== a && (n.className = a)
                        }
                return this
            },
            toggleClass: function(e, t) {
                var n = typeof e;
                return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : this.each(ce.isFunction(e) ? function(n) {
                            ce(this).toggleClass(e.call(this, n, this.className, t), t)
                        } : function() {
                            if ("string" === n)
                                for (var t, i = 0, r = ce(this), o = e.match(Te) || []; t = o[i++];) r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
                            else(n === Se || "boolean" === n) && (this.className && ce._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : ce._data(this, "__className__") || "")
                        })
            },
            hasClass: function(e) {
                for (var t = " " + e + " ", n = 0, i = this.length; i > n; n++)
                    if (1 === this[n].nodeType && (" " + this[n].className + " ").replace($t, " ").indexOf(t) >= 0) return !0;
                return !1
            }
        }), ce.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
            ce.fn[t] = function(e, n) {
                return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
            }
        }), ce.fn.extend({
            hover: function(e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            },
            bind: function(e, t, n) {
                return this.on(e, null, t, n)
            },
            unbind: function(e, t) {
                return this.off(e, null, t)
            },
            delegate: function(e, t, n, i) {
                return this.on(t, e, n, i)
            },
            undelegate: function(e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
            }
        });
        var jt = ce.now(),
            Dt = /\?/,
            Bt = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
        ce.parseJSON = function(e) {
            if (n.JSON && n.JSON.parse) return n.JSON.parse(e + "");
            var t, i = null,
                r = ce.trim(e + "");
            return r && !ce.trim(r.replace(Bt, function(e, n, r, o) {
                return t && n && (i = 0), 0 === i ? e : (t = r || n, i += !o - !r, "")
            })) ? Function("return " + r)() : ce.error("Invalid JSON: " + e)
        }, ce.parseXML = function(e) {
            var t, i;
            if (!e || "string" != typeof e) return null;
            try {
                n.DOMParser ? (i = new DOMParser, t = i.parseFromString(e, "text/xml")) : (t = new ActiveXObject("Microsoft.XMLDOM"), t.async = "false", t.loadXML(e))
            } catch (r) {
                t = void 0
            }
            return t && t.documentElement && !t.getElementsByTagName("parsererror").length || ce.error("Invalid XML: " + e), t
        };
        var Ot, Rt, Pt = /#.*$/,
            Ht = /([?&])_=[^&]*/,
            Ut = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
            Ft = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            qt = /^(?:GET|HEAD)$/,
            Jt = /^\/\//,
            Wt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
            zt = {},
            Gt = {},
            Yt = "*/".concat("*");
        try {
            Rt = location.href
        } catch (Qt) {
            Rt = ye.createElement("a"), Rt.href = "", Rt = Rt.href
        }
        Ot = Wt.exec(Rt.toLowerCase()) || [], ce.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: Rt,
                type: "GET",
                isLocal: Ft.test(Ot[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Yt,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /xml/,
                    html: /html/,
                    json: /json/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": ce.parseJSON,
                    "text xml": ce.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(e, t) {
                return t ? W(W(e, ce.ajaxSettings), t) : W(ce.ajaxSettings, e)
            },
            ajaxPrefilter: q(zt),
            ajaxTransport: q(Gt),
            ajax: function(e, t) {
                function n(e, t, n, i) {
                    var r, l, v, y, w, C = t;
                    2 !== b && (b = 2, s && clearTimeout(s), u = void 0, a = i || "", x.readyState = e > 0 ? 4 : 0, r = e >= 200 && 300 > e || 304 === e, n && (y = z(d, x, n)), y = G(d, y, x, r), r ? (d.ifModified && (w = x.getResponseHeader("Last-Modified"), w && (ce.lastModified[o] = w), w = x.getResponseHeader("etag"), w && (ce.etag[o] = w)), 204 === e || "HEAD" === d.type ? C = "nocontent" : 304 === e ? C = "notmodified" : (C = y.state, l = y.data, v = y.error, r = !v)) : (v = C, (e || !C) && (C = "error", 0 > e && (e = 0))), x.status = e, x.statusText = (t || C) + "", r ? h.resolveWith(f, [l, C, x]) : h.rejectWith(f, [x, C, v]), x.statusCode(m), m = void 0, c && p.trigger(r ? "ajaxSuccess" : "ajaxError", [x, d, r ? l : v]), g.fireWith(f, [x, C]), c && (p.trigger("ajaxComplete", [x, d]), --ce.active || ce.event.trigger("ajaxStop")))
                }
                "object" == typeof e && (t = e, e = void 0), t = t || {};
                var i, r, o, a, s, c, u, l, d = ce.ajaxSetup({}, t),
                    f = d.context || d,
                    p = d.context && (f.nodeType || f.jquery) ? ce(f) : ce.event,
                    h = ce.Deferred(),
                    g = ce.Callbacks("once memory"),
                    m = d.statusCode || {},
                    v = {},
                    y = {},
                    b = 0,
                    w = "canceled",
                    x = {
                        readyState: 0,
                        getResponseHeader: function(e) {
                            var t;
                            if (2 === b) {
                                if (!l)
                                    for (l = {}; t = Ut.exec(a);) l[t[1].toLowerCase()] = t[2];
                                t = l[e.toLowerCase()]
                            }
                            return null == t ? null : t
                        },
                        getAllResponseHeaders: function() {
                            return 2 === b ? a : null
                        },
                        setRequestHeader: function(e, t) {
                            var n = e.toLowerCase();
                            return b || (e = y[n] = y[n] || e, v[e] = t), this
                        },
                        overrideMimeType: function(e) {
                            return b || (d.mimeType = e), this
                        },
                        statusCode: function(e) {
                            var t;
                            if (e)
                                if (2 > b)
                                    for (t in e) m[t] = [m[t], e[t]];
                                else x.always(e[x.status]);
                            return this
                        },
                        abort: function(e) {
                            var t = e || w;
                            return u && u.abort(t), n(0, t), this
                        }
                    };
                if (h.promise(x).complete = g.add, x.success = x.done, x.error = x.fail, d.url = ((e || d.url || Rt) + "").replace(Pt, "").replace(Jt, Ot[1] + "//"), d.type = t.method || t.type || d.method || d.type, d.dataTypes = ce.trim(d.dataType || "*").toLowerCase().match(Te) || [""], null == d.crossDomain && (i = Wt.exec(d.url.toLowerCase()), d.crossDomain = !(!i || i[1] === Ot[1] && i[2] === Ot[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (Ot[3] || ("http:" === Ot[1] ? "80" : "443")))), d.data && d.processData && "string" != typeof d.data && (d.data = ce.param(d.data, d.traditional)), J(zt, d, t, x), 2 === b) return x;
                c = ce.event && d.global, c && 0 === ce.active++ && ce.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !qt.test(d.type), o = d.url, d.hasContent || (d.data && (o = d.url += (Dt.test(o) ? "&" : "?") + d.data, delete d.data), d.cache === !1 && (d.url = Ht.test(o) ? o.replace(Ht, "$1_=" + jt++) : o + (Dt.test(o) ? "&" : "?") + "_=" + jt++)), d.ifModified && (ce.lastModified[o] && x.setRequestHeader("If-Modified-Since", ce.lastModified[o]), ce.etag[o] && x.setRequestHeader("If-None-Match", ce.etag[o])), (d.data && d.hasContent && d.contentType !== !1 || t.contentType) && x.setRequestHeader("Content-Type", d.contentType), x.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + Yt + "; q=0.01" : "") : d.accepts["*"]);
                for (r in d.headers) x.setRequestHeader(r, d.headers[r]);
                if (d.beforeSend && (d.beforeSend.call(f, x, d) === !1 || 2 === b)) return x.abort();
                w = "abort";
                for (r in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) x[r](d[r]);
                if (u = J(Gt, d, t, x)) {
                    x.readyState = 1, c && p.trigger("ajaxSend", [x, d]), d.async && d.timeout > 0 && (s = setTimeout(function() {
                        x.abort("timeout")
                    }, d.timeout));
                    try {
                        b = 1, u.send(v, n)
                    } catch (C) {
                        if (!(2 > b)) throw C;
                        n(-1, C)
                    }
                } else n(-1, "No Transport");
                return x
            },
            getJSON: function(e, t, n) {
                return ce.get(e, t, n, "json")
            },
            getScript: function(e, t) {
                return ce.get(e, void 0, t, "script")
            }
        }), ce.each(["get", "post"], function(e, t) {
            ce[t] = function(e, n, i, r) {
                return ce.isFunction(n) && (r = r || i, i = n, n = void 0), ce.ajax({
                    url: e,
                    type: t,
                    dataType: r,
                    data: n,
                    success: i
                })
            }
        }), ce._evalUrl = function(e) {
            return ce.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                "throws": !0
            })
        }, ce.fn.extend({
            wrapAll: function(e) {
                if (ce.isFunction(e)) return this.each(function(t) {
                    ce(this).wrapAll(e.call(this, t))
                });
                if (this[0]) {
                    var t = ce(e, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                        for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                        return e
                    }).append(this)
                }
                return this
            },
            wrapInner: function(e) {
                return this.each(ce.isFunction(e) ? function(t) {
                        ce(this).wrapInner(e.call(this, t))
                    } : function() {
                        var t = ce(this),
                            n = t.contents();
                        n.length ? n.wrapAll(e) : t.append(e)
                    })
            },
            wrap: function(e) {
                var t = ce.isFunction(e);
                return this.each(function(n) {
                    ce(this).wrapAll(t ? e.call(this, n) : e)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    ce.nodeName(this, "body") || ce(this).replaceWith(this.childNodes)
                }).end()
            }
        }), ce.expr.filters.hidden = function(e) {
            return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !ae.reliableHiddenOffsets() && "none" === (e.style && e.style.display || ce.css(e, "display"))
        }, ce.expr.filters.visible = function(e) {
            return !ce.expr.filters.hidden(e)
        };
        var Xt = /%20/g,
            Vt = /\[\]$/,
            Kt = /\r?\n/g,
            Zt = /^(?:submit|button|image|reset|file)$/i,
            en = /^(?:input|select|textarea|keygen)/i;
        ce.param = function(e, t) {
            var n, i = [],
                r = function(e, t) {
                    t = ce.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
                };
            if (void 0 === t && (t = ce.ajaxSettings && ce.ajaxSettings.traditional), ce.isArray(e) || e.jquery && !ce.isPlainObject(e)) ce.each(e, function() {
                r(this.name, this.value)
            });
            else
                for (n in e) Y(n, e[n], t, r);
            return i.join("&").replace(Xt, "+")
        }, ce.fn.extend({
            serialize: function() {
                return ce.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var e = ce.prop(this, "elements");
                    return e ? ce.makeArray(e) : this
                }).filter(function() {
                    var e = this.type;
                    return this.name && !ce(this).is(":disabled") && en.test(this.nodeName) && !Zt.test(e) && (this.checked || !je.test(e))
                }).map(function(e, t) {
                    var n = ce(this).val();
                    return null == n ? null : ce.isArray(n) ? ce.map(n, function(e) {
                                return {
                                    name: t.name,
                                    value: e.replace(Kt, "\r\n")
                                }
                            }) : {
                                name: t.name,
                                value: n.replace(Kt, "\r\n")
                            }
                }).get()
            }
        }), ce.ajaxSettings.xhr = void 0 !== n.ActiveXObject ? function() {
                return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && Q() || X()
            } : Q;
        var tn = 0,
            nn = {},
            rn = ce.ajaxSettings.xhr();
        n.attachEvent && n.attachEvent("onunload", function() {
            for (var e in nn) nn[e](void 0, !0)
        }), ae.cors = !!rn && "withCredentials" in rn, rn = ae.ajax = !!rn, rn && ce.ajaxTransport(function(e) {
            if (!e.crossDomain || ae.cors) {
                var t;
                return {
                    send: function(n, i) {
                        var r, o = e.xhr(),
                            a = ++tn;
                        if (o.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                            for (r in e.xhrFields) o[r] = e.xhrFields[r];
                        e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                        for (r in n) void 0 !== n[r] && o.setRequestHeader(r, n[r] + "");
                        o.send(e.hasContent && e.data || null), t = function(n, r) {
                            var s, c, u;
                            if (t && (r || 4 === o.readyState))
                                if (delete nn[a], t = void 0, o.onreadystatechange = ce.noop, r) 4 !== o.readyState && o.abort();
                                else {
                                    u = {}, s = o.status, "string" == typeof o.responseText && (u.text = o.responseText);
                                    try {
                                        c = o.statusText
                                    } catch (l) {
                                        c = ""
                                    }
                                    s || !e.isLocal || e.crossDomain ? 1223 === s && (s = 204) : s = u.text ? 200 : 404
                                }
                            u && i(s, c, u, o.getAllResponseHeaders())
                        }, e.async ? 4 === o.readyState ? setTimeout(t) : o.onreadystatechange = nn[a] = t : t()
                    },
                    abort: function() {
                        t && t(void 0, !0)
                    }
                }
            }
        }), ce.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /(?:java|ecma)script/
            },
            converters: {
                "text script": function(e) {
                    return ce.globalEval(e), e
                }
            }
        }), ce.ajaxPrefilter("script", function(e) {
            void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
        }), ce.ajaxTransport("script", function(e) {
            if (e.crossDomain) {
                var t, n = ye.head || ce("head")[0] || ye.documentElement;
                return {
                    send: function(i, r) {
                        t = ye.createElement("script"), t.async = !0, e.scriptCharset && (t.charset = e.scriptCharset), t.src = e.url, t.onload = t.onreadystatechange = function(e, n) {
                            (n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, n || r(200, "success"))
                        }, n.insertBefore(t, n.firstChild)
                    },
                    abort: function() {
                        t && t.onload(void 0, !0)
                    }
                }
            }
        });
        var on = [],
            an = /(=)\?(?=&|$)|\?\?/;
        ce.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var e = on.pop() || ce.expando + "_" + jt++;
                return this[e] = !0, e
            }
        }), ce.ajaxPrefilter("json jsonp", function(e, t, i) {
            var r, o, a, s = e.jsonp !== !1 && (an.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && an.test(e.data) && "data");
            return s || "jsonp" === e.dataTypes[0] ? (r = e.jsonpCallback = ce.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(an, "$1" + r) : e.jsonp !== !1 && (e.url += (Dt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() {
                    return a || ce.error(r + " was not called"), a[0]
                }, e.dataTypes[0] = "json", o = n[r], n[r] = function() {
                    a = arguments
                }, i.always(function() {
                    n[r] = o, e[r] && (e.jsonpCallback = t.jsonpCallback, on.push(r)), a && ce.isFunction(o) && o(a[0]), a = o = void 0
                }), "script") : void 0
        }), ce.parseHTML = function(e, t, n) {
            if (!e || "string" != typeof e) return null;
            "boolean" == typeof t && (n = t, t = !1), t = t || ye;
            var i = ge.exec(e),
                r = !n && [];
            return i ? [t.createElement(i[1])] : (i = ce.buildFragment([e], t, r), r && r.length && ce(r).remove(), ce.merge([], i.childNodes))
        };
        var sn = ce.fn.load;
        ce.fn.load = function(e, t, n) {
            if ("string" != typeof e && sn) return sn.apply(this, arguments);
            var i, r, o, a = this,
                s = e.indexOf(" ");
            return s >= 0 && (i = ce.trim(e.slice(s, e.length)), e = e.slice(0, s)), ce.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), a.length > 0 && ce.ajax({
                url: e,
                type: o,
                dataType: "html",
                data: t
            }).done(function(e) {
                r = arguments, a.html(i ? ce("<div>").append(ce.parseHTML(e)).find(i) : e)
            }).complete(n && function(e, t) {
                    a.each(n, r || [e.responseText, t, e])
                }), this
        }, ce.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
            ce.fn[t] = function(e) {
                return this.on(t, e)
            }
        }), ce.expr.filters.animated = function(e) {
            return ce.grep(ce.timers, function(t) {
                return e === t.elem
            }).length
        };
        var cn = n.document.documentElement;
        ce.offset = {
            setOffset: function(e, t, n) {
                var i, r, o, a, s, c, u, l = ce.css(e, "position"),
                    d = ce(e),
                    f = {};
                "static" === l && (e.style.position = "relative"), s = d.offset(), o = ce.css(e, "top"), c = ce.css(e, "left"), u = ("absolute" === l || "fixed" === l) && ce.inArray("auto", [o, c]) > -1, u ? (i = d.position(), a = i.top, r = i.left) : (a = parseFloat(o) || 0, r = parseFloat(c) || 0), ce.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + r), "using" in t ? t.using.call(e, f) : d.css(f)
            }
        }, ce.fn.extend({
            offset: function(e) {
                if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                        ce.offset.setOffset(this, e, t)
                    });
                var t, n, i = {
                        top: 0,
                        left: 0
                    },
                    r = this[0],
                    o = r && r.ownerDocument;
                if (o) return t = o.documentElement, ce.contains(t, r) ? (typeof r.getBoundingClientRect !== Se && (i = r.getBoundingClientRect()), n = V(o), {
                        top: i.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                        left: i.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
                    }) : i
            },
            position: function() {
                if (this[0]) {
                    var e, t, n = {
                            top: 0,
                            left: 0
                        },
                        i = this[0];
                    return "fixed" === ce.css(i, "position") ? t = i.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), ce.nodeName(e[0], "html") || (n = e.offset()), n.top += ce.css(e[0], "borderTopWidth", !0), n.left += ce.css(e[0], "borderLeftWidth", !0)), {
                        top: t.top - n.top - ce.css(i, "marginTop", !0),
                        left: t.left - n.left - ce.css(i, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var e = this.offsetParent || cn; e && !ce.nodeName(e, "html") && "static" === ce.css(e, "position");) e = e.offsetParent;
                    return e || cn
                })
            }
        }), ce.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(e, t) {
            var n = /Y/.test(t);
            ce.fn[e] = function(i) {
                return $e(this, function(e, i, r) {
                    var o = V(e);
                    return void 0 === r ? o ? t in o ? o[t] : o.document.documentElement[i] : e[i] : void(o ? o.scrollTo(n ? ce(o).scrollLeft() : r, n ? r : ce(o).scrollTop()) : e[i] = r);
                }, e, i, arguments.length, null)
            }
        }), ce.each(["top", "left"], function(e, t) {
            ce.cssHooks[t] = L(ae.pixelPosition, function(e, n) {
                return n ? (n = ot(e, t), st.test(n) ? ce(e).position()[t] + "px" : n) : void 0
            })
        }), ce.each({
            Height: "height",
            Width: "width"
        }, function(e, t) {
            ce.each({
                padding: "inner" + e,
                content: t,
                "": "outer" + e
            }, function(n, i) {
                ce.fn[i] = function(i, r) {
                    var o = arguments.length && (n || "boolean" != typeof i),
                        a = n || (i === !0 || r === !0 ? "margin" : "border");
                    return $e(this, function(t, n, i) {
                        var r;
                        return ce.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement, Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : void 0 === i ? ce.css(t, n, a) : ce.style(t, n, i, a)
                    }, t, o ? i : void 0, o, null)
                }
            })
        }), ce.fn.size = function() {
            return this.length
        }, ce.fn.andSelf = ce.fn.addBack, i = [], r = function() {
            return ce
        }.apply(t, i), !(void 0 !== r && (e.exports = r));
        var un = n.jQuery,
            ln = n.$;
        return ce.noConflict = function(e) {
            return n.$ === ce && (n.$ = ln), e && n.jQuery === ce && (n.jQuery = un), ce
        }, typeof o === Se && (n.jQuery = n.$ = ce), ce
    })
}, function(e, t, n) {
    var i;
    ! function() {
        "use strict";

        function r(e, t, n) {
            return ("string" == typeof t ? t : t.toString()).replace(e.define || u, function(t, i, r, o) {
                return 0 === i.indexOf("def.") && (i = i.substring(4)), i in n || (":" === r ? (e.defineParams && o.replace(e.defineParams, function(e, t, r) {
                        n[i] = {
                            arg: t,
                            text: r
                        }
                    }), i in n || (n[i] = o)) : new Function("def", "def['" + i + "']=" + o)(n)), ""
            }).replace(e.use || u, function(t, i) {
                e.useParams && (i = i.replace(e.useParams, function(e, t, i, r) {
                    if (n[i] && n[i].arg && r) {
                        var o = (i + ":" + r).replace(/'|\\/g, "_");
                        return n.__exp = n.__exp || {}, n.__exp[o] = n[i].text.replace(new RegExp("(^|[^\\w$])" + n[i].arg + "([^\\w$])", "g"), "$1" + r + "$2"), t + "def.__exp['" + o + "']"
                    }
                }));
                var o = new Function("def", "return " + i)(n);
                return o ? r(e, o, n) : o
            })
        }

        function o(e) {
            return e.replace(/\\('|\\)/g, "$1").replace(/[\r\t\n]/g, " ")
        }
        var a, s = {
            version: "1.0.3",
            templateSettings: {
                evaluate: /\{\{([\s\S]+?(\}?)+)\}\}/g,
                interpolate: /\{\{=([\s\S]+?)\}\}/g,
                encode: /\{\{!([\s\S]+?)\}\}/g,
                use: /\{\{#([\s\S]+?)\}\}/g,
                useParams: /(^|[^\w$])def(?:\.|\[[\'\"])([\w$\.]+)(?:[\'\"]\])?\s*\:\s*([\w$\.]+|\"[^\"]+\"|\'[^\']+\'|\{[^\}]+\})/g,
                define: /\{\{##\s*([\w\.$]+)\s*(\:|=)([\s\S]+?)#\}\}/g,
                defineParams: /^\s*([\w$]+):([\s\S]+)/,
                conditional: /\{\{\?(\?)?\s*([\s\S]*?)\s*\}\}/g,
                iterate: /\{\{~\s*(?:\}\}|([\s\S]+?)\s*\:\s*([\w$]+)\s*(?:\:\s*([\w$]+))?\s*\}\})/g,
                varname: "it",
                strip: !0,
                append: !0,
                selfcontained: !1,
                doNotSkipEncoded: !1
            },
            template: void 0,
            compile: void 0
        };
        s.encodeHTMLSource = function(e) {
            var t = {
                    "&": "&#38;",
                    "<": "&#60;",
                    ">": "&#62;",
                    '"': "&#34;",
                    "'": "&#39;",
                    "/": "&#47;"
                },
                n = e ? /[&<>"'\/]/g : /&(?!#?\w+;)|<|>|"|'|\//g;
            return function(e) {
                return e ? e.toString().replace(n, function(e) {
                        return t[e] || e
                    }) : ""
            }
        }, a = function() {
            return this || (0, eval)("this")
        }(), "undefined" != typeof e && e.exports ? e.exports = s : (i = function() {
                return s
            }.call(t, n, t, e), !(void 0 !== i && (e.exports = i)));
        var c = {
                append: {
                    start: "'+(",
                    end: ")+'",
                    startencode: "'+encodeHTML("
                },
                split: {
                    start: "';out+=(",
                    end: ");out+='",
                    startencode: "';out+=encodeHTML("
                }
            },
            u = /$^/;
        s.template = function(e, t, n) {
            t = t || s.templateSettings;
            var i, l, d = t.append ? c.append : c.split,
                f = 0,
                p = t.use || t.define ? r(t, e, n || {}) : e;
            p = ("var out='" + (t.strip ? p.replace(/(^|\r|\n)\t* +| +\t*(\r|\n|$)/g, " ").replace(/\r|\n|\t|\/\*[\s\S]*?\*\//g, "") : p).replace(/'|\\/g, "\\$&").replace(t.interpolate || u, function(e, t) {
                return d.start + o(t) + d.end
            }).replace(t.encode || u, function(e, t) {
                return i = !0, d.startencode + o(t) + d.end
            }).replace(t.conditional || u, function(e, t, n) {
                return t ? n ? "';}else if(" + o(n) + "){out+='" : "';}else{out+='" : n ? "';if(" + o(n) + "){out+='" : "';}out+='"
            }).replace(t.iterate || u, function(e, t, n, i) {
                return t ? (f += 1, l = i || "i" + f, t = o(t), "';var arr" + f + "=" + t + ";if(arr" + f + "){var " + n + "," + l + "=-1,l" + f + "=arr" + f + ".length-1;while(" + l + "<l" + f + "){" + n + "=arr" + f + "[" + l + "+=1];out+='") : "';} } out+='"
            }).replace(t.evaluate || u, function(e, t) {
                return "';" + o(t) + "out+='"
            }) + "';return out;").replace(/\n/g, "\\n").replace(/\t/g, "\\t").replace(/\r/g, "\\r").replace(/(\s|;|\}|^|\{)out\+='';/g, "$1").replace(/\+''/g, ""), i && (t.selfcontained || !a || a._encodeHTML || (a._encodeHTML = s.encodeHTMLSource(t.doNotSkipEncoded)), p = "var encodeHTML = typeof _encodeHTML !== 'undefined' ? _encodeHTML : (" + s.encodeHTMLSource.toString() + "(" + (t.doNotSkipEncoded || "") + "));" + p);
            try {
                return new Function(t.varname, p)
            } catch (h) {
                throw "undefined" != typeof console && console.log("Could not create a template function: " + p), h
            }
        }, s.compile = function(e, t) {
            return s.template(e, null, t)
        }
    }()
}, function(e, t) {
    "use strict";
    e.exports = function(e) {
        var t = /\/\*!?(?:\@tpl)?[ \t]*(?:\r\n|\n)([\s\S]*?)(?:\r\n|\n)[ \t]*\*\//;
        if ("function" != typeof e) throw new TypeError("Expected a function");
        var n = t.exec(e.toString());
        if (!n) throw new TypeError("Multiline comment missing.");
        return n[1]
    }
}, function(e, t) {
    + function(e) {
        "use strict";

        function t() {
            var e = document.createElement("bootstrap"),
                t = {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd otransitionend",
                    transition: "transitionend"
                };
            for (var n in t)
                if (void 0 !== e.style[n]) return {
                    end: t[n]
                };
            return !1
        }
        e.fn.emulateTransitionEnd = function(t) {
            var n = !1,
                i = this;
            e(this).one(e.support.transition.end, function() {
                n = !0
            });
            var r = function() {
                n || e(i).trigger(e.support.transition.end)
            };
            return setTimeout(r, t), this
        }, e(function() {
            e.support.transition = t()
        })
    }(jQuery)
}, function(e, t) {
    ! function(e) {
        "use strict";
        var t = function(t, n) {
            this.options = n, this.$element = e(t).delegate('[data-dismiss="modal"]', "click.dismiss.modal", e.proxy(this.hide, this)), this.options.remote && this.$element.find(".modal-body").load(this.options.remote)
        };
        t.prototype = {
            constructor: t,
            toggle: function() {
                return this[this.isShown ? "hide" : "show"]()
            },
            show: function() {
                var t = this,
                    n = e.Event("show");
                this.$element.trigger(n), this.isShown || n.isDefaultPrevented() || (this.isShown = !0, this.escape(), this.backdrop(function() {
                    var n = e.support.transition && t.$element.hasClass("fade");
                    t.$element.parent().length || t.$element.appendTo(document.body), t.$element.show(), n && t.$element[0].offsetWidth, t.$element.addClass("in").attr("aria-hidden", !1), t.enforceFocus(), n ? t.$element.one(e.support.transition.end, function() {
                            t.$element.focus().trigger("shown")
                        }) : t.$element.focus().trigger("shown")
                }))
            },
            hide: function(t) {
                t && t.preventDefault();
                t = e.Event("hide"), this.$element.trigger(t), this.isShown && !t.isDefaultPrevented() && (this.isShown = !1, this.escape(), e(document).off("focusin.modal"), this.$element.removeClass("in").attr("aria-hidden", !0), e.support.transition && this.$element.hasClass("fade") ? this.hideWithTransition() : this.hideModal())
            },
            enforceFocus: function() {
                var t = this;
                e(document).on("focusin.modal", function(e) {
                    t.$element[0] === e.target || t.$element.has(e.target).length || t.$element.focus()
                })
            },
            escape: function() {
                var e = this;
                this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.modal", function(t) {
                        27 == t.which && e.hide()
                    }) : this.isShown || this.$element.off("keyup.dismiss.modal")
            },
            hideWithTransition: function() {
                var t = this,
                    n = setTimeout(function() {
                        t.$element.off(e.support.transition.end), t.hideModal()
                    }, 500);
                this.$element.one(e.support.transition.end, function() {
                    clearTimeout(n), t.hideModal()
                })
            },
            hideModal: function() {
                var e = this;
                this.$element.hide(), this.backdrop(function() {
                    e.removeBackdrop(), e.$element.trigger("hidden")
                })
            },
            removeBackdrop: function() {
                this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
            },
            backdrop: function(t) {
                var n = this.$element.hasClass("fade") ? "fade" : "";
                if (this.isShown && this.options.backdrop) {
                    var i = e.support.transition && n,
                        r = e(document).height(),
                        o = "100%";
                    if (this.$backdrop = e('<div class="modal-backdrop ' + n + '" />').appendTo(document.body), this.$backdrop.css({
                            width: o,
                            height: r
                        }).click("static" == this.options.backdrop ? e.proxy(this.$element[0].focus, this.$element[0]) : e.proxy(this.hide, this)), i && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !t) return;
                    i ? this.$backdrop.one(e.support.transition.end, t) : t()
                } else !this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"), e.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one(e.support.transition.end, t) : t()) : t && t()
            }
        };
        var n = e.fn.modal;
        e.fn.modal = function(n) {
            return this.each(function() {
                var i = e(this),
                    r = i.data("modal"),
                    o = e.extend({}, e.fn.modal.defaults, i.data(), "object" == typeof n && n);
                r || i.data("modal", r = new t(this, o)), "string" == typeof n ? r[n]() : o.show && r.show()
            })
        }, e.fn.modal.defaults = {
            backdrop: !0,
            keyboard: !0,
            show: !0
        }, e.fn.modal.Constructor = t, e.fn.modal.noConflict = function() {
            return e.fn.modal = n, this
        }, e(document).on("click.modal.data-api", '[data-toggle="modal"]', function(t) {
            var n = e(this),
                i = n.attr("href"),
                r = e(n.attr("data-target") || i && i.replace(/.*(?=#[^\s]+$)/, "")),
                o = r.data("modal") ? "toggle" : e.extend({
                        remote: !/#/.test(i) && i
                    }, r.data(), n.data());
            t.preventDefault(), r.modal(o).one("hide", function() {
                n.focus()
            })
        })
    }(window.jQuery)
}, function(e, t) {
    ! function() {
        document.write = document.writeln = function() {};
        for (var e, t = function() {}, n = ["assert", "clear", "count", "debug", "dir", "dirxml", "error", "exception", "group", "groupCollapsed", "groupEnd", "info", "log", "markTimeline", "profile", "profileEnd", "table", "time", "timeEnd", "timeStamp", "trace", "warn"], i = n.length, r = window.console = window.console || {}; i--;) e = n[i], r[e] || (r[e] = t)
    }()
}, function(e, t) {
    "undefined" != typeof MI && MI || (window.MI = {}), MI.namespace = function() {
        var e, t, n, i = arguments,
            r = null;
        for (e = 0; e < i.length; e += 1)
            for (n = ("" + i[e]).split("."), r = MI, t = "MI" === n[0] ? 1 : 0; t < n.length; t += 1) r[n[t]] = r[n[t]] || {}, r = r[n[t]];
        return r
    }
}, function(e, t) {
    e.exports = function(e, t, n) {
        if (arguments.length > 1 && "[object Object]" !== String(t)) {
            if (n = jQuery.extend({}, n), (null === t || void 0 === t) && (n.expires = -1), "number" == typeof n.expires) {
                var i = n.expires,
                    r = n.expires = new Date;
                r.setDate(r.getDate() + i)
            }
            return t = String(t), document.cookie = [encodeURIComponent(e), "=", n.raw ? t : encodeURIComponent(t), n.expires ? "; expires=" + n.expires.toUTCString() : "", n.path ? "; path=" + n.path : "", n.domain ? "; domain=" + n.domain : "", n.secure ? "; secure" : ""].join("")
        }
        n = t || {};
        var o, a = n.raw ? function(e) {
                return e
            } : decodeURIComponent;
        return (o = new RegExp("(?:^|; )" + encodeURIComponent(e) + "=([^;]*)").exec(document.cookie)) ? a(o[1]) : null
    }
}, function(e, t) {
    MI.form = function() {
        function e() {
            function e() {
                r.each(function() {
                    var e = $(this),
                        t = e.closest(".form-section");
                    "" !== e.val() && t.addClass("form-section-active"), e.off(".form").on({
                        "focus.mi.form": function() {
                            t.addClass("form-section-focus form-section-active")
                        },
                        "blur.mi.form": function() {
                            t.removeClass($(this).val() ? "form-section-focus" : "form-section-focus form-section-active")
                        },
                        "valid.mi.form": function() {
                            t.removeClass("form-section-error").addClass("form-section-valid").find(".msg-error").remove()
                        },
                        "error.mi.form": function(e, n) {
                            t.addClass("form-section-error"), n && t.find(".msg-error").remove().end().append('<p class="msg msg-error">' + n + "</p>")
                        }
                    })
                })
            }

            function n() {
                o.each(function() {
                    t && o.addClass("xm-ie-select")
                })
            }
            var i = $(".form-section"),
                r = i.find(".input-text"),
                o = i.find(".xm-select");
            r.length && e(), o.length && n()
        }
        var t = !!window.ActiveXObject;
        return {
            init: e
        }
    }()
}, function(e, t, n) {
    var i = n(12);
    MI.setLoginInfo = {
        data: {
            userId: 0,
            userName: "",
            goodsNum: 0
        },
        miid: parseInt($.cookie("userId")),
        miidLink: $.cookie("xm_link_history"),
        defautConfig: {},
        init: function(e) {
            var t = this;
        },
        createScript: function(e) {
            this.updateDom(e);
            var t = document.createElement("script");
            t.src = "https://account.xiaomi.com/pass/userInfoJsonP?userId=" + e + "&callback=setLoginInfo_getAccountInfo", t.type = "text/javascript", t.async = !0, document.getElementsByTagName("head")[0].appendChild(t)
        },
        updateDom: function(e) {
            var t, n, i = this.data.userName || e,
                r = MI.GLOBAL_CONFIG.staticSite || "http://static.mi.com",
                o = $("#J_userInfo"),
                a = '<ul class="user-menu"><li><a rel="nofollow"  href="' + MI.GLOBAL_CONFIG.mySite + '/portal" target="_blank">个人中心</a></li><li><a rel="nofollow" href="' + MI.GLOBAL_CONFIG.orderSite + '/user/comment" target="_blank">评价晒单</a></li><li><a rel="nofollow" href="' + MI.GLOBAL_CONFIG.orderSite + '/user/favorite" target="_blank">我的喜欢</a></li><li><a rel="nofollow" href="http://account.xiaomi.com/" target="_blank">小米账户</a></li><li><a rel="nofollow" href="' + this.config.logoutUrl + '">退出登录</a></li></ul>',
                s = '<span class="user"><a rel="nofollow" class="user-name" href="' + MI.GLOBAL_CONFIG.mySite + '/portal" target="_blank"><span class="name">' + i + '</span><i class="iconfont">&#xe61c;</i></a>' + a + '</span><span class="sep">|</span><a rel="nofollow" class="link link-order" href="' + r + '/order/" target="_blank">我的订单</a>',
                c = null;
            o.html(s), t = o.find(".user"), n = o.find(".user-menu"), t.on({
                mouseenter: function() {
                    c && clearTimeout(c), t.addClass("user-active"), n.slideDown("fast")
                },
                mouseleave: function() {
                    c = setTimeout(function() {
                        t.removeClass("user-active"), n.slideUp("fast")
                    }, 200)
                }
            })
        },
        uuidCookie: function() {
            var e = ("xmguest-" + i.v1()).toUpperCase(),
                t = $.cookie("xmuuid");
            if (!t) {
                var n = {
                    path: "/",
                    domain: ".mi.com",
                    expires: 18250
                };
                $.cookie("xmuuid", e, n)
            }
        }
    }, window.setLoginInfo_getAccountInfo = function(e) {
        var t = MI.setLoginInfo;
        if (e.userId) {
            t.data.userName = e.miliaoInfo.nickName ? e.miliaoInfo.nickName : e.userId;
            var n = {
                path: "/",
                domain: ".mi.com"
            };
            $.cookie("XM_" + t.miid + "_UN", t.data.userName, n), t.updateDom(e.userId)
        }
    }
}, function(e, t, n) {
    var i;
    (function(r) {
        (function() {
            function o(e, t, n) {
                var i = t && n || 0,
                    r = 0;
                for (t = t || [], e.toLowerCase().replace(/[0-9a-f]{2}/g, function(e) {
                    16 > r && (t[i + r++] = g[e])
                }); 16 > r;) t[i + r++] = 0;
                return t
            }

            function a(e, t) {
                var n = t || 0,
                    i = h;
                return i[e[n++]] + i[e[n++]] + i[e[n++]] + i[e[n++]] + "-" + i[e[n++]] + i[e[n++]] + "-" + i[e[n++]] + i[e[n++]] + "-" + i[e[n++]] + i[e[n++]] + "-" + i[e[n++]] + i[e[n++]] + i[e[n++]] + i[e[n++]] + i[e[n++]] + i[e[n++]]
            }

            function s(e, t, n) {
                var i = t && n || 0,
                    r = t || [];
                e = e || {};
                var o = null != e.clockseq ? e.clockseq : b,
                    s = null != e.msecs ? e.msecs : (new Date).getTime(),
                    c = null != e.nsecs ? e.nsecs : x + 1,
                    u = s - w + (c - x) / 1e4;
                if (0 > u && null == e.clockseq && (o = o + 1 & 16383), (0 > u || s > w) && null == e.nsecs && (c = 0), c >= 1e4) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
                w = s, x = c, b = o, s += 122192928e5;
                var l = (1e4 * (268435455 & s) + c) % 4294967296;
                r[i++] = l >>> 24 & 255, r[i++] = l >>> 16 & 255, r[i++] = l >>> 8 & 255, r[i++] = 255 & l;
                var d = s / 4294967296 * 1e4 & 268435455;
                r[i++] = d >>> 8 & 255, r[i++] = 255 & d, r[i++] = d >>> 24 & 15 | 16, r[i++] = d >>> 16 & 255, r[i++] = o >>> 8 | 128, r[i++] = 255 & o;
                for (var f = e.node || y, p = 0; 6 > p; p++) r[i + p] = f[p];
                return t ? t : a(r)
            }

            function c(e, t, n) {
                var i = t && n || 0;
                "string" == typeof e && (t = "binary" === e ? new p(16) : null, e = null), e = e || {};
                var r = e.random || (e.rng || u)();
                if (r[6] = 15 & r[6] | 64, r[8] = 63 & r[8] | 128, t)
                    for (var o = 0; 16 > o; o++) t[i + o] = r[o];
                return t || a(r)
            }
            var u, l = this;
            if (!u && l.crypto && crypto.getRandomValues) {
                var d = new Uint8Array(16);
                u = function() {
                    return crypto.getRandomValues(d), d
                }
            }
            if (!u) {
                var f = new Array(16);
                u = function() {
                    for (var e, t = 0; 16 > t; t++) 0 === (3 & t) && (e = 4294967296 * Math.random()), f[t] = e >>> ((3 & t) << 3) & 255;
                    return f
                }
            }
            for (var p = "function" == typeof r ? r : Array, h = [], g = {}, m = 0; 256 > m; m++) h[m] = (m + 256).toString(16).substr(1), g[h[m]] = m;
            var v = u(),
                y = [1 | v[0], v[1], v[2], v[3], v[4], v[5]],
                b = 16383 & (v[6] << 8 | v[7]),
                w = 0,
                x = 0,
                C = c;
            if (C.v1 = s, C.v4 = c, C.parse = o, C.unparse = a, C.BufferClass = p, l.define && n(17)) i = function() {
                return C
            }.call(t, n, t, e), !(void 0 !== i && (e.exports = i));
            else if ("undefined" != typeof e && e.exports) e.exports = C;
            else {
                var T = l.uuid;
                C.noConflict = function() {
                    return l.uuid = T, C
                }, l.uuid = C
            }
        }).call(this)
    }).call(t, n(13).Buffer)
}, function(e, t, n) {
    (function(e, i) {
        "use strict";

        function r() {
            function e() {}
            try {
                var t = new Uint8Array(1);
                return t.foo = function() {
                    return 42
                }, t.constructor = e, 42 === t.foo() && t.constructor === e && "function" == typeof t.subarray && 0 === t.subarray(1, 1).byteLength
            } catch (n) {
                return !1
            }
        }

        function o() {
            return e.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
        }

        function e(t) {
            return this instanceof e ? (e.TYPED_ARRAY_SUPPORT || (this.length = 0, this.parent = void 0), "number" == typeof t ? a(this, t) : "string" == typeof t ? s(this, t, arguments.length > 1 ? arguments[1] : "utf8") : c(this, t)) : arguments.length > 1 ? new e(t, arguments[1]) : new e(t)
        }

        function a(t, n) {
            if (t = g(t, 0 > n ? 0 : 0 | m(n)), !e.TYPED_ARRAY_SUPPORT)
                for (var i = 0; n > i; i++) t[i] = 0;
            return t
        }

        function s(e, t, n) {
            ("string" != typeof n || "" === n) && (n = "utf8");
            var i = 0 | y(t, n);
            return e = g(e, i), e.write(t, n), e
        }

        function c(t, n) {
            if (e.isBuffer(n)) return u(t, n);
            if (X(n)) return l(t, n);
            if (null == n) throw new TypeError("must start with number, buffer, array or string");
            if ("undefined" != typeof ArrayBuffer) {
                if (n.buffer instanceof ArrayBuffer) return d(t, n);
                if (n instanceof ArrayBuffer) return f(t, n)
            }
            return n.length ? p(t, n) : h(t, n)
        }

        function u(e, t) {
            var n = 0 | m(t.length);
            return e = g(e, n), t.copy(e, 0, 0, n), e
        }

        function l(e, t) {
            var n = 0 | m(t.length);
            e = g(e, n);
            for (var i = 0; n > i; i += 1) e[i] = 255 & t[i];
            return e
        }

        function d(e, t) {
            var n = 0 | m(t.length);
            e = g(e, n);
            for (var i = 0; n > i; i += 1) e[i] = 255 & t[i];
            return e
        }

        function f(t, n) {
            return e.TYPED_ARRAY_SUPPORT ? (n.byteLength, t = e._augment(new Uint8Array(n))) : t = d(t, new Uint8Array(n)), t
        }

        function p(e, t) {
            var n = 0 | m(t.length);
            e = g(e, n);
            for (var i = 0; n > i; i += 1) e[i] = 255 & t[i];
            return e
        }

        function h(e, t) {
            var n, i = 0;
            "Buffer" === t.type && X(t.data) && (n = t.data, i = 0 | m(n.length)), e = g(e, i);
            for (var r = 0; i > r; r += 1) e[r] = 255 & n[r];
            return e
        }

        function g(t, n) {
            e.TYPED_ARRAY_SUPPORT ? (t = e._augment(new Uint8Array(n)), t.__proto__ = e.prototype) : (t.length = n, t._isBuffer = !0);
            var i = 0 !== n && n <= e.poolSize >>> 1;
            return i && (t.parent = V), t
        }

        function m(e) {
            if (e >= o()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + o().toString(16) + " bytes");
            return 0 | e
        }

        function v(t, n) {
            if (!(this instanceof v)) return new v(t, n);
            var i = new e(t, n);
            return delete i.parent, i
        }

        function y(e, t) {
            "string" != typeof e && (e = "" + e);
            var n = e.length;
            if (0 === n) return 0;
            for (var i = !1;;) switch (t) {
                case "ascii":
                case "binary":
                case "raw":
                case "raws":
                    return n;
                case "utf8":
                case "utf-8":
                    return q(e).length;
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return 2 * n;
                case "hex":
                    return n >>> 1;
                case "base64":
                    return z(e).length;
                default:
                    if (i) return q(e).length;
                    t = ("" + t).toLowerCase(), i = !0
            }
        }

        function b(e, t, n) {
            var i = !1;
            if (t = 0 | t, n = void 0 === n || n === 1 / 0 ? this.length : 0 | n, e || (e = "utf8"), 0 > t && (t = 0), n > this.length && (n = this.length), t >= n) return "";
            for (;;) switch (e) {
                case "hex":
                    return M(this, t, n);
                case "utf8":
                case "utf-8":
                    return S(this, t, n);
                case "ascii":
                    return A(this, t, n);
                case "binary":
                    return L(this, t, n);
                case "base64":
                    return _(this, t, n);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return N(this, t, n);
                default:
                    if (i) throw new TypeError("Unknown encoding: " + e);
                    e = (e + "").toLowerCase(), i = !0
            }
        }

        function w(e, t, n, i) {
            n = Number(n) || 0;
            var r = e.length - n;
            i ? (i = Number(i), i > r && (i = r)) : i = r;
            var o = t.length;
            if (o % 2 !== 0) throw new Error("Invalid hex string");
            i > o / 2 && (i = o / 2);
            for (var a = 0; i > a; a++) {
                var s = parseInt(t.substr(2 * a, 2), 16);
                if (isNaN(s)) throw new Error("Invalid hex string");
                e[n + a] = s
            }
            return a
        }

        function x(e, t, n, i) {
            return G(q(t, e.length - n), e, n, i)
        }

        function C(e, t, n, i) {
            return G(J(t), e, n, i)
        }

        function T(e, t, n, i) {
            return C(e, t, n, i)
        }

        function k(e, t, n, i) {
            return G(z(t), e, n, i)
        }

        function E(e, t, n, i) {
            return G(W(t, e.length - n), e, n, i)
        }

        function _(e, t, n) {
            return Y.fromByteArray(0 === t && n === e.length ? e : e.slice(t, n))
        }

        function S(e, t, n) {
            n = Math.min(e.length, n);
            for (var i = [], r = t; n > r;) {
                var o = e[r],
                    a = null,
                    s = o > 239 ? 4 : o > 223 ? 3 : o > 191 ? 2 : 1;
                if (n >= r + s) {
                    var c, u, l, d;
                    switch (s) {
                        case 1:
                            128 > o && (a = o);
                            break;
                        case 2:
                            c = e[r + 1], 128 === (192 & c) && (d = (31 & o) << 6 | 63 & c, d > 127 && (a = d));
                            break;
                        case 3:
                            c = e[r + 1], u = e[r + 2], 128 === (192 & c) && 128 === (192 & u) && (d = (15 & o) << 12 | (63 & c) << 6 | 63 & u, d > 2047 && (55296 > d || d > 57343) && (a = d));
                            break;
                        case 4:
                            c = e[r + 1], u = e[r + 2], l = e[r + 3], 128 === (192 & c) && 128 === (192 & u) && 128 === (192 & l) && (d = (15 & o) << 18 | (63 & c) << 12 | (63 & u) << 6 | 63 & l, d > 65535 && 1114112 > d && (a = d))
                    }
                }
                null === a ? (a = 65533, s = 1) : a > 65535 && (a -= 65536, i.push(a >>> 10 & 1023 | 55296), a = 56320 | 1023 & a), i.push(a), r += s
            }
            return I(i)
        }

        function I(e) {
            var t = e.length;
            if (K >= t) return String.fromCharCode.apply(String, e);
            for (var n = "", i = 0; t > i;) n += String.fromCharCode.apply(String, e.slice(i, i += K));
            return n
        }

        function A(e, t, n) {
            var i = "";
            n = Math.min(e.length, n);
            for (var r = t; n > r; r++) i += String.fromCharCode(127 & e[r]);
            return i
        }

        function L(e, t, n) {
            var i = "";
            n = Math.min(e.length, n);
            for (var r = t; n > r; r++) i += String.fromCharCode(e[r]);
            return i
        }

        function M(e, t, n) {
            var i = e.length;
            (!t || 0 > t) && (t = 0), (!n || 0 > n || n > i) && (n = i);
            for (var r = "", o = t; n > o; o++) r += F(e[o]);
            return r
        }

        function N(e, t, n) {
            for (var i = e.slice(t, n), r = "", o = 0; o < i.length; o += 2) r += String.fromCharCode(i[o] + 256 * i[o + 1]);
            return r
        }

        function $(e, t, n) {
            if (e % 1 !== 0 || 0 > e) throw new RangeError("offset is not uint");
            if (e + t > n) throw new RangeError("Trying to access beyond buffer length")
        }

        function j(t, n, i, r, o, a) {
            if (!e.isBuffer(t)) throw new TypeError("buffer must be a Buffer instance");
            if (n > o || a > n) throw new RangeError("value is out of bounds");
            if (i + r > t.length) throw new RangeError("index out of range")
        }

        function D(e, t, n, i) {
            0 > t && (t = 65535 + t + 1);
            for (var r = 0, o = Math.min(e.length - n, 2); o > r; r++) e[n + r] = (t & 255 << 8 * (i ? r : 1 - r)) >>> 8 * (i ? r : 1 - r)
        }

        function B(e, t, n, i) {
            0 > t && (t = 4294967295 + t + 1);
            for (var r = 0, o = Math.min(e.length - n, 4); o > r; r++) e[n + r] = t >>> 8 * (i ? r : 3 - r) & 255
        }

        function O(e, t, n, i, r, o) {
            if (t > r || o > t) throw new RangeError("value is out of bounds");
            if (n + i > e.length) throw new RangeError("index out of range");
            if (0 > n) throw new RangeError("index out of range")
        }

        function R(e, t, n, i, r) {
            return r || O(e, t, n, 4, 3.4028234663852886e38, -3.4028234663852886e38), Q.write(e, t, n, i, 23, 4), n + 4
        }

        function P(e, t, n, i, r) {
            return r || O(e, t, n, 8, 1.7976931348623157e308, -1.7976931348623157e308), Q.write(e, t, n, i, 52, 8), n + 8
        }

        function H(e) {
            if (e = U(e).replace(ee, ""), e.length < 2) return "";
            for (; e.length % 4 !== 0;) e += "=";
            return e
        }

        function U(e) {
            return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "")
        }

        function F(e) {
            return 16 > e ? "0" + e.toString(16) : e.toString(16)
        }

        function q(e, t) {
            t = t || 1 / 0;
            for (var n, i = e.length, r = null, o = [], a = 0; i > a; a++) {
                if (n = e.charCodeAt(a), n > 55295 && 57344 > n) {
                    if (!r) {
                        if (n > 56319) {
                            (t -= 3) > -1 && o.push(239, 191, 189);
                            continue
                        }
                        if (a + 1 === i) {
                            (t -= 3) > -1 && o.push(239, 191, 189);
                            continue
                        }
                        r = n;
                        continue
                    }
                    if (56320 > n) {
                        (t -= 3) > -1 && o.push(239, 191, 189), r = n;
                        continue
                    }
                    n = (r - 55296 << 10 | n - 56320) + 65536
                } else r && (t -= 3) > -1 && o.push(239, 191, 189);
                if (r = null, 128 > n) {
                    if ((t -= 1) < 0) break;
                    o.push(n)
                } else if (2048 > n) {
                    if ((t -= 2) < 0) break;
                    o.push(n >> 6 | 192, 63 & n | 128)
                } else if (65536 > n) {
                    if ((t -= 3) < 0) break;
                    o.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128)
                } else {
                    if (!(1114112 > n)) throw new Error("Invalid code point");
                    if ((t -= 4) < 0) break;
                    o.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128)
                }
            }
            return o
        }

        function J(e) {
            for (var t = [], n = 0; n < e.length; n++) t.push(255 & e.charCodeAt(n));
            return t
        }

        function W(e, t) {
            for (var n, i, r, o = [], a = 0; a < e.length && !((t -= 2) < 0); a++) n = e.charCodeAt(a), i = n >> 8, r = n % 256, o.push(r), o.push(i);
            return o
        }

        function z(e) {
            return Y.toByteArray(H(e))
        }

        function G(e, t, n, i) {
            for (var r = 0; i > r && !(r + n >= t.length || r >= e.length); r++) t[r + n] = e[r];
            return r
        }
        var Y = n(14),
            Q = n(15),
            X = n(16);
        t.Buffer = e, t.SlowBuffer = v, t.INSPECT_MAX_BYTES = 50, e.poolSize = 8192;
        var V = {};
        e.TYPED_ARRAY_SUPPORT = void 0 !== i.TYPED_ARRAY_SUPPORT ? i.TYPED_ARRAY_SUPPORT : r(), e.TYPED_ARRAY_SUPPORT ? (e.prototype.__proto__ = Uint8Array.prototype, e.__proto__ = Uint8Array) : (e.prototype.length = void 0, e.prototype.parent = void 0), e.isBuffer = function(e) {
            return !(null == e || !e._isBuffer)
        }, e.compare = function(t, n) {
            if (!e.isBuffer(t) || !e.isBuffer(n)) throw new TypeError("Arguments must be Buffers");
            if (t === n) return 0;
            for (var i = t.length, r = n.length, o = 0, a = Math.min(i, r); a > o && t[o] === n[o];) ++o;
            return o !== a && (i = t[o], r = n[o]), r > i ? -1 : i > r ? 1 : 0
        }, e.isEncoding = function(e) {
            switch (String(e).toLowerCase()) {
                case "hex":
                case "utf8":
                case "utf-8":
                case "ascii":
                case "binary":
                case "base64":
                case "raw":
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return !0;
                default:
                    return !1
            }
        }, e.concat = function(t, n) {
            if (!X(t)) throw new TypeError("list argument must be an Array of Buffers.");
            if (0 === t.length) return new e(0);
            var i;
            if (void 0 === n)
                for (n = 0, i = 0; i < t.length; i++) n += t[i].length;
            var r = new e(n),
                o = 0;
            for (i = 0; i < t.length; i++) {
                var a = t[i];
                a.copy(r, o), o += a.length
            }
            return r
        }, e.byteLength = y, e.prototype.toString = function() {
            var e = 0 | this.length;
            return 0 === e ? "" : 0 === arguments.length ? S(this, 0, e) : b.apply(this, arguments)
        }, e.prototype.equals = function(t) {
            if (!e.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
            return this === t ? !0 : 0 === e.compare(this, t)
        }, e.prototype.inspect = function() {
            var e = "",
                n = t.INSPECT_MAX_BYTES;
            return this.length > 0 && (e = this.toString("hex", 0, n).match(/.{2}/g).join(" "), this.length > n && (e += " ... ")), "<Buffer " + e + ">"
        }, e.prototype.compare = function(t) {
            if (!e.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
            return this === t ? 0 : e.compare(this, t)
        }, e.prototype.indexOf = function(t, n) {
            function i(e, t, n) {
                for (var i = -1, r = 0; n + r < e.length; r++)
                    if (e[n + r] === t[-1 === i ? 0 : r - i]) {
                        if (-1 === i && (i = r), r - i + 1 === t.length) return n + i
                    } else i = -1;
                return -1
            }
            if (n > 2147483647 ? n = 2147483647 : -2147483648 > n && (n = -2147483648), n >>= 0, 0 === this.length) return -1;
            if (n >= this.length) return -1;
            if (0 > n && (n = Math.max(this.length + n, 0)), "string" == typeof t) return 0 === t.length ? -1 : String.prototype.indexOf.call(this, t, n);
            if (e.isBuffer(t)) return i(this, t, n);
            if ("number" == typeof t) return e.TYPED_ARRAY_SUPPORT && "function" === Uint8Array.prototype.indexOf ? Uint8Array.prototype.indexOf.call(this, t, n) : i(this, [t], n);
            throw new TypeError("val must be string, number or Buffer")
        }, e.prototype.get = function(e) {
            return console.log(".get() is deprecated. Access using array indexes instead."), this.readUInt8(e)
        }, e.prototype.set = function(e, t) {
            return console.log(".set() is deprecated. Access using array indexes instead."), this.writeUInt8(e, t)
        }, e.prototype.write = function(e, t, n, i) {
            if (void 0 === t) i = "utf8", n = this.length, t = 0;
            else if (void 0 === n && "string" == typeof t) i = t, n = this.length, t = 0;
            else if (isFinite(t)) t = 0 | t, isFinite(n) ? (n = 0 | n, void 0 === i && (i = "utf8")) : (i = n, n = void 0);
            else {
                var r = i;
                i = t, t = 0 | n, n = r
            }
            var o = this.length - t;
            if ((void 0 === n || n > o) && (n = o), e.length > 0 && (0 > n || 0 > t) || t > this.length) throw new RangeError("attempt to write outside buffer bounds");
            i || (i = "utf8");
            for (var a = !1;;) switch (i) {
                case "hex":
                    return w(this, e, t, n);
                case "utf8":
                case "utf-8":
                    return x(this, e, t, n);
                case "ascii":
                    return C(this, e, t, n);
                case "binary":
                    return T(this, e, t, n);
                case "base64":
                    return k(this, e, t, n);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return E(this, e, t, n);
                default:
                    if (a) throw new TypeError("Unknown encoding: " + i);
                    i = ("" + i).toLowerCase(), a = !0
            }
        }, e.prototype.toJSON = function() {
            return {
                type: "Buffer",
                data: Array.prototype.slice.call(this._arr || this, 0)
            }
        };
        var K = 4096;
        e.prototype.slice = function(t, n) {
            var i = this.length;
            t = ~~t, n = void 0 === n ? i : ~~n, 0 > t ? (t += i, 0 > t && (t = 0)) : t > i && (t = i), 0 > n ? (n += i, 0 > n && (n = 0)) : n > i && (n = i), t > n && (n = t);
            var r;
            if (e.TYPED_ARRAY_SUPPORT) r = e._augment(this.subarray(t, n));
            else {
                var o = n - t;
                r = new e(o, void 0);
                for (var a = 0; o > a; a++) r[a] = this[a + t]
            }
            return r.length && (r.parent = this.parent || this), r
        }, e.prototype.readUIntLE = function(e, t, n) {
            e = 0 | e, t = 0 | t, n || $(e, t, this.length);
            for (var i = this[e], r = 1, o = 0; ++o < t && (r *= 256);) i += this[e + o] * r;
            return i
        }, e.prototype.readUIntBE = function(e, t, n) {
            e = 0 | e, t = 0 | t, n || $(e, t, this.length);
            for (var i = this[e + --t], r = 1; t > 0 && (r *= 256);) i += this[e + --t] * r;
            return i
        }, e.prototype.readUInt8 = function(e, t) {
            return t || $(e, 1, this.length), this[e]
        }, e.prototype.readUInt16LE = function(e, t) {
            return t || $(e, 2, this.length), this[e] | this[e + 1] << 8
        }, e.prototype.readUInt16BE = function(e, t) {
            return t || $(e, 2, this.length), this[e] << 8 | this[e + 1]
        }, e.prototype.readUInt32LE = function(e, t) {
            return t || $(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3]
        }, e.prototype.readUInt32BE = function(e, t) {
            return t || $(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
        }, e.prototype.readIntLE = function(e, t, n) {
            e = 0 | e, t = 0 | t, n || $(e, t, this.length);
            for (var i = this[e], r = 1, o = 0; ++o < t && (r *= 256);) i += this[e + o] * r;
            return r *= 128, i >= r && (i -= Math.pow(2, 8 * t)), i
        }, e.prototype.readIntBE = function(e, t, n) {
            e = 0 | e, t = 0 | t, n || $(e, t, this.length);
            for (var i = t, r = 1, o = this[e + --i]; i > 0 && (r *= 256);) o += this[e + --i] * r;
            return r *= 128, o >= r && (o -= Math.pow(2, 8 * t)), o
        }, e.prototype.readInt8 = function(e, t) {
            return t || $(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
        }, e.prototype.readInt16LE = function(e, t) {
            t || $(e, 2, this.length);
            var n = this[e] | this[e + 1] << 8;
            return 32768 & n ? 4294901760 | n : n
        }, e.prototype.readInt16BE = function(e, t) {
            t || $(e, 2, this.length);
            var n = this[e + 1] | this[e] << 8;
            return 32768 & n ? 4294901760 | n : n
        }, e.prototype.readInt32LE = function(e, t) {
            return t || $(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
        }, e.prototype.readInt32BE = function(e, t) {
            return t || $(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
        }, e.prototype.readFloatLE = function(e, t) {
            return t || $(e, 4, this.length), Q.read(this, e, !0, 23, 4)
        }, e.prototype.readFloatBE = function(e, t) {
            return t || $(e, 4, this.length), Q.read(this, e, !1, 23, 4)
        }, e.prototype.readDoubleLE = function(e, t) {
            return t || $(e, 8, this.length), Q.read(this, e, !0, 52, 8)
        }, e.prototype.readDoubleBE = function(e, t) {
            return t || $(e, 8, this.length), Q.read(this, e, !1, 52, 8)
        }, e.prototype.writeUIntLE = function(e, t, n, i) {
            e = +e, t = 0 | t, n = 0 | n, i || j(this, e, t, n, Math.pow(2, 8 * n), 0);
            var r = 1,
                o = 0;
            for (this[t] = 255 & e; ++o < n && (r *= 256);) this[t + o] = e / r & 255;
            return t + n
        }, e.prototype.writeUIntBE = function(e, t, n, i) {
            e = +e, t = 0 | t, n = 0 | n, i || j(this, e, t, n, Math.pow(2, 8 * n), 0);
            var r = n - 1,
                o = 1;
            for (this[t + r] = 255 & e; --r >= 0 && (o *= 256);) this[t + r] = e / o & 255;
            return t + n
        }, e.prototype.writeUInt8 = function(t, n, i) {
            return t = +t, n = 0 | n, i || j(this, t, n, 1, 255, 0), e.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), this[n] = 255 & t, n + 1
        }, e.prototype.writeUInt16LE = function(t, n, i) {
            return t = +t, n = 0 | n, i || j(this, t, n, 2, 65535, 0), e.TYPED_ARRAY_SUPPORT ? (this[n] = 255 & t, this[n + 1] = t >>> 8) : D(this, t, n, !0), n + 2
        }, e.prototype.writeUInt16BE = function(t, n, i) {
            return t = +t, n = 0 | n, i || j(this, t, n, 2, 65535, 0), e.TYPED_ARRAY_SUPPORT ? (this[n] = t >>> 8, this[n + 1] = 255 & t) : D(this, t, n, !1), n + 2
        }, e.prototype.writeUInt32LE = function(t, n, i) {
            return t = +t, n = 0 | n, i || j(this, t, n, 4, 4294967295, 0), e.TYPED_ARRAY_SUPPORT ? (this[n + 3] = t >>> 24, this[n + 2] = t >>> 16, this[n + 1] = t >>> 8, this[n] = 255 & t) : B(this, t, n, !0), n + 4
        }, e.prototype.writeUInt32BE = function(t, n, i) {
            return t = +t, n = 0 | n, i || j(this, t, n, 4, 4294967295, 0), e.TYPED_ARRAY_SUPPORT ? (this[n] = t >>> 24, this[n + 1] = t >>> 16, this[n + 2] = t >>> 8, this[n + 3] = 255 & t) : B(this, t, n, !1), n + 4
        }, e.prototype.writeIntLE = function(e, t, n, i) {
            if (e = +e, t = 0 | t, !i) {
                var r = Math.pow(2, 8 * n - 1);
                j(this, e, t, n, r - 1, -r)
            }
            var o = 0,
                a = 1,
                s = 0 > e ? 1 : 0;
            for (this[t] = 255 & e; ++o < n && (a *= 256);) this[t + o] = (e / a >> 0) - s & 255;
            return t + n
        }, e.prototype.writeIntBE = function(e, t, n, i) {
            if (e = +e, t = 0 | t, !i) {
                var r = Math.pow(2, 8 * n - 1);
                j(this, e, t, n, r - 1, -r)
            }
            var o = n - 1,
                a = 1,
                s = 0 > e ? 1 : 0;
            for (this[t + o] = 255 & e; --o >= 0 && (a *= 256);) this[t + o] = (e / a >> 0) - s & 255;
            return t + n
        }, e.prototype.writeInt8 = function(t, n, i) {
            return t = +t, n = 0 | n, i || j(this, t, n, 1, 127, -128), e.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), 0 > t && (t = 255 + t + 1), this[n] = 255 & t, n + 1
        }, e.prototype.writeInt16LE = function(t, n, i) {
            return t = +t, n = 0 | n, i || j(this, t, n, 2, 32767, -32768), e.TYPED_ARRAY_SUPPORT ? (this[n] = 255 & t, this[n + 1] = t >>> 8) : D(this, t, n, !0), n + 2
        }, e.prototype.writeInt16BE = function(t, n, i) {
            return t = +t, n = 0 | n, i || j(this, t, n, 2, 32767, -32768), e.TYPED_ARRAY_SUPPORT ? (this[n] = t >>> 8, this[n + 1] = 255 & t) : D(this, t, n, !1), n + 2
        }, e.prototype.writeInt32LE = function(t, n, i) {
            return t = +t, n = 0 | n, i || j(this, t, n, 4, 2147483647, -2147483648), e.TYPED_ARRAY_SUPPORT ? (this[n] = 255 & t, this[n + 1] = t >>> 8, this[n + 2] = t >>> 16, this[n + 3] = t >>> 24) : B(this, t, n, !0), n + 4
        }, e.prototype.writeInt32BE = function(t, n, i) {
            return t = +t, n = 0 | n, i || j(this, t, n, 4, 2147483647, -2147483648), 0 > t && (t = 4294967295 + t + 1), e.TYPED_ARRAY_SUPPORT ? (this[n] = t >>> 24, this[n + 1] = t >>> 16, this[n + 2] = t >>> 8, this[n + 3] = 255 & t) : B(this, t, n, !1), n + 4
        }, e.prototype.writeFloatLE = function(e, t, n) {
            return R(this, e, t, !0, n)
        }, e.prototype.writeFloatBE = function(e, t, n) {
            return R(this, e, t, !1, n)
        }, e.prototype.writeDoubleLE = function(e, t, n) {
            return P(this, e, t, !0, n)
        }, e.prototype.writeDoubleBE = function(e, t, n) {
            return P(this, e, t, !1, n)
        }, e.prototype.copy = function(t, n, i, r) {
            if (i || (i = 0), r || 0 === r || (r = this.length), n >= t.length && (n = t.length), n || (n = 0), r > 0 && i > r && (r = i), r === i) return 0;
            if (0 === t.length || 0 === this.length) return 0;
            if (0 > n) throw new RangeError("targetStart out of bounds");
            if (0 > i || i >= this.length) throw new RangeError("sourceStart out of bounds");
            if (0 > r) throw new RangeError("sourceEnd out of bounds");
            r > this.length && (r = this.length), t.length - n < r - i && (r = t.length - n + i);
            var o, a = r - i;
            if (this === t && n > i && r > n)
                for (o = a - 1; o >= 0; o--) t[o + n] = this[o + i];
            else if (1e3 > a || !e.TYPED_ARRAY_SUPPORT)
                for (o = 0; a > o; o++) t[o + n] = this[o + i];
            else t._set(this.subarray(i, i + a), n);
            return a
        }, e.prototype.fill = function(e, t, n) {
            if (e || (e = 0), t || (t = 0), n || (n = this.length), t > n) throw new RangeError("end < start");
            if (n !== t && 0 !== this.length) {
                if (0 > t || t >= this.length) throw new RangeError("start out of bounds");
                if (0 > n || n > this.length) throw new RangeError("end out of bounds");
                var i;
                if ("number" == typeof e)
                    for (i = t; n > i; i++) this[i] = e;
                else {
                    var r = q(e.toString()),
                        o = r.length;
                    for (i = t; n > i; i++) this[i] = r[i % o]
                }
                return this
            }
        }, e.prototype.toArrayBuffer = function() {
            if ("undefined" != typeof Uint8Array) {
                if (e.TYPED_ARRAY_SUPPORT) return new e(this).buffer;
                for (var t = new Uint8Array(this.length), n = 0, i = t.length; i > n; n += 1) t[n] = this[n];
                return t.buffer
            }
            throw new TypeError("Buffer.toArrayBuffer not supported in this browser")
        };
        var Z = e.prototype;
        e._augment = function(t) {
            return t.constructor = e, t._isBuffer = !0, t._set = t.set, t.get = Z.get, t.set = Z.set, t.write = Z.write, t.toString = Z.toString, t.toLocaleString = Z.toString, t.toJSON = Z.toJSON, t.equals = Z.equals, t.compare = Z.compare, t.indexOf = Z.indexOf, t.copy = Z.copy, t.slice = Z.slice, t.readUIntLE = Z.readUIntLE, t.readUIntBE = Z.readUIntBE, t.readUInt8 = Z.readUInt8, t.readUInt16LE = Z.readUInt16LE, t.readUInt16BE = Z.readUInt16BE, t.readUInt32LE = Z.readUInt32LE, t.readUInt32BE = Z.readUInt32BE, t.readIntLE = Z.readIntLE, t.readIntBE = Z.readIntBE, t.readInt8 = Z.readInt8, t.readInt16LE = Z.readInt16LE, t.readInt16BE = Z.readInt16BE, t.readInt32LE = Z.readInt32LE, t.readInt32BE = Z.readInt32BE, t.readFloatLE = Z.readFloatLE, t.readFloatBE = Z.readFloatBE, t.readDoubleLE = Z.readDoubleLE, t.readDoubleBE = Z.readDoubleBE, t.writeUInt8 = Z.writeUInt8, t.writeUIntLE = Z.writeUIntLE, t.writeUIntBE = Z.writeUIntBE, t.writeUInt16LE = Z.writeUInt16LE, t.writeUInt16BE = Z.writeUInt16BE, t.writeUInt32LE = Z.writeUInt32LE, t.writeUInt32BE = Z.writeUInt32BE, t.writeIntLE = Z.writeIntLE, t.writeIntBE = Z.writeIntBE, t.writeInt8 = Z.writeInt8, t.writeInt16LE = Z.writeInt16LE, t.writeInt16BE = Z.writeInt16BE, t.writeInt32LE = Z.writeInt32LE, t.writeInt32BE = Z.writeInt32BE, t.writeFloatLE = Z.writeFloatLE, t.writeFloatBE = Z.writeFloatBE, t.writeDoubleLE = Z.writeDoubleLE, t.writeDoubleBE = Z.writeDoubleBE, t.fill = Z.fill, t.inspect = Z.inspect, t.toArrayBuffer = Z.toArrayBuffer, t
        };
        var ee = /[^+\/0-9A-Za-z-_]/g
    }).call(t, n(13).Buffer, function() {
        return this
    }())
}, function(e, t, n) {
    var i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    ! function(e) {
        "use strict";

        function t(e) {
            var t = e.charCodeAt(0);
            return t === a || t === d ? 62 : t === s || t === f ? 63 : c > t ? -1 : c + 10 > t ? t - c + 26 + 26 : l + 26 > t ? t - l : u + 26 > t ? t - u + 26 : void 0
        }

        function n(e) {
            function n(e) {
                u[d++] = e
            }
            var i, r, a, s, c, u;
            if (e.length % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
            var l = e.length;
            c = "=" === e.charAt(l - 2) ? 2 : "=" === e.charAt(l - 1) ? 1 : 0, u = new o(3 * e.length / 4 - c), a = c > 0 ? e.length - 4 : e.length;
            var d = 0;
            for (i = 0, r = 0; a > i; i += 4, r += 3) s = t(e.charAt(i)) << 18 | t(e.charAt(i + 1)) << 12 | t(e.charAt(i + 2)) << 6 | t(e.charAt(i + 3)), n((16711680 & s) >> 16), n((65280 & s) >> 8), n(255 & s);
            return 2 === c ? (s = t(e.charAt(i)) << 2 | t(e.charAt(i + 1)) >> 4, n(255 & s)) : 1 === c && (s = t(e.charAt(i)) << 10 | t(e.charAt(i + 1)) << 4 | t(e.charAt(i + 2)) >> 2, n(s >> 8 & 255), n(255 & s)), u
        }

        function r(e) {
            function t(e) {
                return i.charAt(e)
            }

            function n(e) {
                return t(e >> 18 & 63) + t(e >> 12 & 63) + t(e >> 6 & 63) + t(63 & e)
            }
            var r, o, a, s = e.length % 3,
                c = "";
            for (r = 0, a = e.length - s; a > r; r += 3) o = (e[r] << 16) + (e[r + 1] << 8) + e[r + 2], c += n(o);
            switch (s) {
                case 1:
                    o = e[e.length - 1], c += t(o >> 2), c += t(o << 4 & 63), c += "==";
                    break;
                case 2:
                    o = (e[e.length - 2] << 8) + e[e.length - 1], c += t(o >> 10), c += t(o >> 4 & 63), c += t(o << 2 & 63), c += "="
            }
            return c
        }
        var o = "undefined" != typeof Uint8Array ? Uint8Array : Array,
            a = "+".charCodeAt(0),
            s = "/".charCodeAt(0),
            c = "0".charCodeAt(0),
            u = "a".charCodeAt(0),
            l = "A".charCodeAt(0),
            d = "-".charCodeAt(0),
            f = "_".charCodeAt(0);
        e.toByteArray = n, e.fromByteArray = r
    }(t)
}, function(e, t) {
    t.read = function(e, t, n, i, r) {
        var o, a, s = 8 * r - i - 1,
            c = (1 << s) - 1,
            u = c >> 1,
            l = -7,
            d = n ? r - 1 : 0,
            f = n ? -1 : 1,
            p = e[t + d];
        for (d += f, o = p & (1 << -l) - 1, p >>= -l, l += s; l > 0; o = 256 * o + e[t + d], d += f, l -= 8);
        for (a = o & (1 << -l) - 1, o >>= -l, l += i; l > 0; a = 256 * a + e[t + d], d += f, l -= 8);
        if (0 === o) o = 1 - u;
        else {
            if (o === c) return a ? 0 / 0 : (p ? -1 : 1) * (1 / 0);
            a += Math.pow(2, i), o -= u
        }
        return (p ? -1 : 1) * a * Math.pow(2, o - i)
    }, t.write = function(e, t, n, i, r, o) {
        var a, s, c, u = 8 * o - r - 1,
            l = (1 << u) - 1,
            d = l >> 1,
            f = 23 === r ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
            p = i ? 0 : o - 1,
            h = i ? 1 : -1,
            g = 0 > t || 0 === t && 0 > 1 / t ? 1 : 0;
        for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (s = isNaN(t) ? 1 : 0, a = l) : (a = Math.floor(Math.log(t) / Math.LN2), t * (c = Math.pow(2, -a)) < 1 && (a--, c *= 2), t += a + d >= 1 ? f / c : f * Math.pow(2, 1 - d), t * c >= 2 && (a++, c /= 2), a + d >= l ? (s = 0, a = l) : a + d >= 1 ? (s = (t * c - 1) * Math.pow(2, r), a += d) : (s = t * Math.pow(2, d - 1) * Math.pow(2, r), a = 0)); r >= 8; e[n + p] = 255 & s, p += h, s /= 256, r -= 8);
        for (a = a << r | s, u += r; u > 0; e[n + p] = 255 & a, p += h, a /= 256, u -= 8);
        e[n + p - h] |= 128 * g
    }
}, function(e, t) {
    var n = {}.toString;
    e.exports = Array.isArray || function(e) {
            return "[object Array]" == n.call(e)
        }
}, function(e, t) {
    (function(t) {
        e.exports = t
    }).call(t, {})
}, function(e, t) {
    MI.updateMiniCart = function() {
        var e = $(".J_cartNum"),
            t = $("#J_miniCartTrigger"),
            n = $.cookie("xm_user_www_num");
        return n && parseFloat(n) > 0 ? (e.text("（" + n + "）"), t.addClass("topbar-cart-filled").find(".cart-mini .iconfont").html("&#xe60d;"), n) : (e.text("（0）"), t.removeClass("topbar-cart-filled").find(".cart-mini .iconfont").html("&#xe60c;"), 0)
    }
}, function(e, t) {
    MI.miniCart = function() {
        function e(e) {
            if (e.totalItem > 0) {
                for (var t = MI.GLOBAL_CONFIG.staticSite ? MI.GLOBAL_CONFIG.staticSite : "http://static.mi.com", n = e.totalItem > 5 ? '<ul class="cart-list" style="height:445px; overflow-x:hidden; overflow-y:scroll;">' : '<ul class="cart-list">', i = 0, r = e.items.length; r > i; i += 1) {
                    var o, a, c, u = '<img alt="" src="' + e.items[i].image_url + '?width=60&height=60">';
                    e.items[i].is_cos ? (o = " is-cos", a = "暂时缺货") : (o = "", a = e.items[i].salePrice + "元 × " + e.items[i].num), 0 === i && (o += " first"), 0 === e.items[i].noLink ? (c = MI.GLOBAL_CONFIG.itemSite + "/" + e.items[i].product_id + ".html", n += '<li><div class="cart-item clearfix' + o + '"><a class="thumb" href="' + c + '">' + u + '</a><a class="name" href="' + c + '">' + e.items[i].product_name + '</a><span class="price">' + a + '</span><a class="btn-del J_delItem" href="javascript: void(0);" gid="' + e.items[i].itemId + '" data-isBigtap="' + e.items[i].is_bigtap + '"><i class="iconfont">&#xe602;</i></a></div></li>') : n += '<li><div class="cart-item clearfix' + o + '"><span class="thumb">' + u + '</span><span class="name">' + e.items[i].product_name + '</span><span class="price">' + a + '</span><a class="btn-del J_delItem" href="javascript: void(0);" gid="' + e.items[i].itemId + '" data-isBigtap="' + e.items[i].is_bigtap + '"><i class="iconfont">&#xe602;</i></a></div></li>'
                }
                n += '</ul><div class="cart-total clearfix"><span class="total">共 <em>' + e.total + '</em> 件商品<span class="price"><em>' + e.totalPrice + '</em>元</span></span><a href="' + t + '/cart/"  class="btn btn-primary btn-cart">去购物车结算</a></div>', s.html(n)
            } else s.html('<div class="loading">购物车中还没有商品，赶紧选购吧！</div>')
        }

        function t() {
            $.ajax({
                type: "POST",
                url: MI.GLOBAL_CONFIG.cartSite + "/cart/miniNew",
                dataType: "jsonp",
                jsonp: "jsonpcallback",
                cache: !1,
                success: function(t) {
                    0 === t.errorno ? e(t) : s.html('<p class="msg msg-error">' + t.msg + "</p>"), MI.updateMiniCart()
                }
            })
        }

        function n() {
            s.slideDown("fast")
        }

        function i() {
            s.slideUp("fast", function() {
                a.removeClass("topbar-cart-active"), $(this).html(c)
            })
        }

        function r(e) {
            $.ajax({
                type: "POST",
                url: MI.GLOBAL_CONFIG.cartSite + "/cart/delete/" + e,
                dataType: "jsonp",
                jsonp: "jsonpcallback",
                cache: "false",
                success: function(e) {
                    1 === e.code ? (t(), MI.updateMiniCart()) : alert(e.msg)
                }
            })
        }

        function o() {
            return "undefined" != typeof miniCartDisable && miniCartDisable && "undefined" != typeof MI.GLOBAL_CONFIG.closeMiniCart && "1" === MI.GLOBAL_CONFIG.closeMiniCart ? !1 : (a.on({
                    mouseenter: function() {
                        clearTimeout(u), $(this).hasClass("topbar-cart-active") || ($(this).addClass("topbar-cart-active"), t(), n())
                    },
                    mouseleave: function() {
                        u = setTimeout(function() {
                            i()
                        }, 200)
                    }
                }), void s.on("click", ".J_delItem", function(e) {
                    var t = $(this).attr("gid"),
                        n = $(this).attr("data-isbigtap");
                    return "true" !== n || confirm("您正在删除开放购买活动商品\n\n删除后您失去本次开放购买资格，无法下单购买此商品。\n确认删除此商品吗？") ? (e.preventDefault(), void r(t)) : !1
                }))
        }
        var a = $("#J_miniCartTrigger"),
            s = $("#J_miniCartMenu"),
            c = '<div class="loading"><div class="loader"></div></div>',
            u = null;
        return {
            init: o
        }
    }()
}, function(e, t, n) {
    n(21), jQuery(function(e) {
        function t() {
            var t = 0,
                n = 0,
                i = e('<div id="J_navMenu" class="header-nav-menu" style="display: none;"><div class="container"></div></div>'),
                r = i.find("> .container");
            i.appendTo(".site-header").on({
                mouseenter: function() {
                    t && (clearTimeout(t), t = null)
                },
                mouseleave: function() {
                    t = setTimeout(function() {
                        a.data("toggled") || i.slideUp()
                    }, 200)
                }
            }), a.find(".nav-item").on({
                mouseenter: function() {
                    var o, s = e(this);
                    return t && (clearTimeout(t), t = null), a.data("toggled", !0), s.addClass("nav-item-active"), e(this).find(".children-list").length ? (o = e(this).find(".children-list").clone(), o.find("img").each(function() {
                            e(this).attr("src", e(this).attr("data-src"))
                        }), r.html(o), void(a.data("toggled") && (n = setTimeout(function() {
                            i.stop(!0, !1).slideDown(200, function() {
                                e(this).addClass("header-nav-menu-active")
                            })
                        }, 200)))) : void i.removeClass("header-nav-menu-active").stop(!0, !1).slideUp(200)
                },
                mouseleave: function() {
                    var r = e(this);
                    n && (clearTimeout(n), n = null), a.data("toggled", !1), r.removeClass("nav-item-active"), t = setTimeout(function() {
                        a.data("toggled") || i.stop(!0, !0).slideUp(200)
                    }, 200)
                }
            })
        }

        function i(t) {
            var i = n(23),
                r = e(i(t)),
                a = e("#J_navCategory");
            a.append(r), o(r.find("#J_categoryList")), "undefined" != typeof isCategoryToggled && "toggled" === isCategoryToggled ? r.show() : a.on({
                    mouseenter: function() {
                        e(this).addClass("nav-item-active"), r.show()
                    },
                    mouseleave: function() {
                        e(this).removeClass("nav-item-active"), r.hide()
                    }
                })
        }

        function r() {
            var t;
            "undefined" != typeof categoryTree && categoryTree ? (t = categoryTree, i(t)) : e.ajax({
                    url: "//s01.mifile.cn/c/js/ct2015.js",
                    cache: !0,
                    dataType: "script",
                    timeout: 5e3,
                    error: function() {
                        return !1
                    },
                    success: function() {
                        t = categoryTree, i(t)
                    }
                })
        }
        var o = n(22),
            a = e(".J_navMainList");
        a.length && (t(), r());
        var s = e(".site-info").find(".slogan").length;
        s || e(".site-info").append('<div class="slogan ir">探索黑科技，小米为发烧而生</div>')
    })
}, function(e, t) {
    ! function(e) {
        function t(t) {
            function n(e) {
                p.push({
                    x: e.pageX,
                    y: e.pageY
                }), p.length > m && p.shift()
            }

            function i() {
                g && clearTimeout(g), l.exitMenu(this) && (f && l.deactivate(f), f = null)
            }

            function r() {
                g && clearTimeout(g), l.enter(this), s(this)
            }

            function o() {
                l.exit(this)
            }

            function a(e) {
                e !== f && (f && l.deactivate(f), l.activate(e), f = e)
            }

            function s(e) {
                var t = c();
                t ? g = setTimeout(function() {
                        s(e)
                    }, t) : a(e)
            }

            function c() {
                function t(e, t) {
                    return (t.y - e.y) / (t.x - e.x)
                }
                if (!f || !e(f).is(l.submenuSelector)) return 0;
                var n = d.offset(),
                    i = {
                        x: n.left,
                        y: n.top - l.tolerance
                    },
                    r = {
                        x: n.left + d.outerWidth(),
                        y: i.y
                    },
                    o = {
                        x: n.left,
                        y: n.top + d.outerHeight() + l.tolerance
                    },
                    a = {
                        x: n.left + d.outerWidth(),
                        y: o.y
                    },
                    s = p[p.length - 1],
                    c = p[0];
                if (!s) return 0;
                if (c || (c = s), c.x < n.left || c.x > a.x || c.y < n.top || c.y > a.y) return 0;
                if (h && s.x === h.x && s.y === h.y) return 0;
                var u = r,
                    g = a;
                "left" === l.submenuDirection ? (u = o, g = i) : "below" === l.submenuDirection ? (u = a, g = o) : "above" === l.submenuDirection && (u = i, g = r);
                var m = t(s, u),
                    y = t(s, g),
                    b = t(c, u),
                    w = t(c, g);
                return b > m && y > w ? (h = s, v) : (h = null, 0)
            }
            var u, l, d = e(this),
                f = null,
                p = [],
                h = null,
                g = null,
                m = 3,
                v = 300;
            u = {
                rowSelector: "> li",
                submenuSelector: "*",
                submenuDirection: "right",
                tolerance: 75,
                enter: e.noop,
                exit: e.noop,
                activate: e.noop,
                deactivate: e.noop,
                exitMenu: e.noop
            }, l = e.extend({}, u, t), d.on("mouseleave", i).find(l.rowSelector).on({
                mouseenter: r,
                mouseleave: o,
                click: function() {
                    a(this)
                }
            }), e(document).mousemove(n)
        }
        e.fn.miMenuAim = function(e) {
            return this.each(function() {
                t.call(this, e)
            }), this
        }
    }(jQuery)
}, function(e, t) {
    e.exports = function(e) {
        var t = $(e),
            n = t.find("> li");
        n.each(function() {
            var e, t = $(this).find(".children-list").find("> li");
            $(this).find(".children").addClass("children-col-" + Math.ceil(t.length / 6)), t.length > 6 && (e = $(document.createDocumentFragment()), t.each(function(t) {
                t % 6 === 0 && e.append($('<ul class="children-list children-list-col children-list-col-' + Math.ceil((t + 1) / 6) + '"></ul>')), $(this).appendTo(e.find(".children-list-col-" + Math.ceil((t + 1) / 6)))
            }), $(this).find(".children").html(e))
        }), t.miMenuAim({
            activate: function(e) {
                $(e).addClass("category-item-active").find("img").each(function() {
                    $(this).attr("src", $(this).attr("data-src"))
                })
            },
            deactivate: function(e) {
                $(e).removeClass("category-item-active")
            },
            exitMenu: function() {
                return !0
            }
        })
    }
}, function(e, t) {
    e.exports = function(e) {
        var t = '<div class="site-category"> <ul id="J_categoryList" class="site-category-list clearfix"> ',
            n = e;
        if (n)
            for (var i, r = -1, o = n.length - 1; o > r;) {
                i = n[r += 1], t += ' <li class="category-item"> <a class="title" href="' + i.data.url + '">' + i.data.title + '<i class="iconfont">&#xe623;</i></a> <div class="children clearfix"> <ul class="children-list clearfix"> ';
                var a = i.right;
                if (a)
                    for (var s, c = -1, u = a.length - 1; u > c;) s = a[c += 1], t += " <li", s.is_buy && (t += ' class="star-goods"'), t += '> <a class="link" href="' + s.url + '"><img class="thumb" src="//c1.mifile.cn/f/i/2014/cn/placeholder-40.png" data-src="' + s.img + '?width=40&height=40" srcset="' + s.img + '?width=80&height=80 2x" width="40" height="40" alt="" /><span class="text">' + s.title + "</span></a> ", s.is_buy && (t += '<a class="btn btn-line-primary btn-small btn-buy" href="' + s.buy_url + '">选购</a>'), t += " </li> ";
                t += " </ul> </div> </li> "
            }
        return t += " </ul></div>"
    }
}, function(e, t) {
    ! function(e) {
        function t(e) {
            for (var t = "", n = 0, i = e.length; i > n; n += 1) {
                var r, o;
                "object" == typeof e[n] ? (r = e[n].Key.replace(f, '<span class="keyword">' + f + "</span> "), o = e[n].Rst ? '<span class="result">约有' + e[n].Rst + "件</span>" : "", t += '<li data-key="' + e[n].Key + '"><a href="//search.mi.com/search_' + encodeURIComponent(e[n].Key) + '">' + r + o + "</a></li>") : (r = e[n].replace(f, '<span class="keyword">' + f + "</span> "), o = "", t += '<li data-key="' + e[n] + '"><a href="//search.mi.com/search_' + encodeURIComponent(e[n]) + '">' + r + o + "</a></li>")
            }
            s.removeClass("hide").children(".result-list").html(t)
        }

        function n(e) {
            var t = s.find("li"),
                n = s.find(".active").index() || 0,
                i = t.length - 1;
            if (38 === e) {
                if (n -= 1, 0 > n) return n = 0, !1;
                t.eq(n).addClass("active").siblings().removeClass("active"), c.val(t.eq(n).attr("data-key"))
            } else if (40 === e) {
                if (n += 1, n > i) return n = i, !1;
                t.eq(n).addClass("active").siblings().removeClass("active"), c.val(t.eq(n).attr("data-key"))
            }
        }

        function i() {
            s.addClass("hide").children(".result-list").html("")
        }

        function r(n) {
            n && e.ajax({
                type: "GET",
                url: MI.GLOBAL_CONFIG.searchSite + "/search/expand?keyword=" + encodeURIComponent(n),
                dataType: "jsonp",
                jsonp: "jsonpcallback",
                jsonpCallback: "xmsearch",
                cache: !0,
                success: function(e) {
                    e.length > 0 ? c.val() && t(e) : i()
                }
            })
        }

        function o() {
            a.on("submit", function() {
                var t = e.trim(c.val());
                return "" !== t && (t = t.replace(/[\-_'=+|\\\/]/g, " "), window.location.href = MI.GLOBAL_CONFIG.searchSite + "/search_" + encodeURIComponent(t)), !1
            })
        }
        var a = e("#J_searchForm"),
            s = e('<div id="J_keywordList" class="keyword-list hide"><ul class="result-list"></ul></div>'),
            c = a.find("#search"),
            u = a.find(".search-hot-words"),
            l = {},
            d = 200,
            f = null,
            p = 0,
            h = 0;
        a.length && (c = a.find("#search"), l = e.parseJSON(c.data("search-config").replace(/'/g, '"')), a.append(s), c.on({
            focus: function() {
                p && clearTimeout(p), u.fadeOut(200), a.addClass("search-form-focus"), !e(this).val() && l.defaultWords && t(l.defaultWords)
            },
            blur: function() {
                "" === e.trim(c.val()) && e(".search-hot-words").fadeIn(200), p = setTimeout(function() {
                    a.removeClass("search-form-focus"), s.addClass("hide")
                }, 200)
            },
            keyup: function(i) {
                0 === e.trim(e(this).val()).length && l.defaultWords && (f = null, t(l.defaultWords)), n(i.which), clearTimeout(h), 40 !== i.which && 38 !== i.which && (h = setTimeout(function() {
                    f = c.val(), r(f)
                }, d))
            }
        }), o())
    }(jQuery)
}, function(e, t, n) {
    n(26), MI.addShopCart = function(e, t, n, i) {
        if (e && "function" == typeof t) {
            var r = MI.GLOBAL_CONFIG.cartSite + "/cart/add/" + e;
            $.ajax({
                url: r,
                dataType: "jsonp",
                jsonp: "jsonpcallback",
                data: i ? i : "",
                success: function(i) {
                    var r = function() {
                        t(i, n), MI.updateMiniCart(), n && $(n).removeAttr("data-disabled")
                    };
                    201 === i.code ? (MI.addCartCaptcha({
                            gid: e,
                            callback: t,
                            elm: n,
                            captchaData: i.data
                        }), $(n).removeAttr("data-disabled")) : r()
                }
            })
        }
    }, MI.addCartCaptcha = function(e) {
        if (e) {
            var t = $.extend({}, e),
                i = $.noop,
                r = $("#J_modalAddCartCaptcha"),
                o = "",
                a = n(27);
            r.length && r.remove(), "drag" === t.captchaData.captcha_type && (o = a({
                captchaType: "drag"
            }), $("body").append(o), r = $("#J_modalAddCartCaptcha"), i = new MI.miDragCaptcha, i.init({
                captchaWrapper: r.find(".drag-captcha-wrapper"),
                submitCallback: function(e) {
                    "success" === e.message && (r.modal("hide"), MI.addShopCart(t.gid, t.callback, t.elm, {
                        captcha_type: t.captchaData.captcha_type,
                        anti_token: t.captchaData.anti_token,
                        captcha_token: e.data.token
                    }))
                }
            }), $("#J_addCartCaptchaSubmit").off().on("click", function() {
                i.checkSubmit()
            }), r.modal({
                show: !0,
                backdrop: "static"
            }))
        }
    }, MI.bigtapAddCart = function(e) {
        var t = {
            obj: ".xmAddShopCart",
            modeType: "",
            before: null,
            callback: null,
            overCallback: null,
            beforeQueue: null,
            storage: "000"
        };
        $.extend(t, e || {}), $(document).off(".bigtap").on("click.bigtap", t.obj, function() {
            var e = $(this).attr("data-gid"),
                n = $(this).attr("data-disabled") || "false",
                i = $(this).attr("data-package") || "false",
                r = $.cookie("userId"),
                o = $.cookie("xm_order_btauth");
            if ("false" === n) {
                if ($(this).attr("data-disabled", "true"), "function" == typeof t.before && t.before(), !e || "true" === i || "function" != typeof t.callback) return !0;
                MI.GLOBAL_CONFIG.damiaoGoodsId && $.inArray(e, MI.GLOBAL_CONFIG.damiaoGoodsId) >= 0 ? r && o ? MI.bigtap.init({
                            gid: e,
                            modeType: t.modeType,
                            callback: t.callback,
                            obj: $(this),
                            overCallback: t.overCallback,
                            beforeQueue: t.beforeQueue,
                            storage: t.storage
                        }) : window.location.href = r ? MI.GLOBAL_CONFIG.orderSite + "/site/login?redirectUrl=" + location.href : MI.GLOBAL_CONFIG.orderSite + "/site/login?redirectUrl=" + location.href : MI.addShopCart(e, t.callback, $(this))
            }
            return !1
        })
    }
}, function(e, t) {
    MI.miDragCaptcha = function() {
        this.options = {
            getUrl: "http://cap.m.mi.com/api/init",
            authUrl: "http://cap.m.mi.com/api/verify",
            captchaWrapper: ".J_dragCaptchaBox",
            line: [],
            x: "",
            captchaData: {},
            captchaBlockTotal: 25,
            captchaSize: {
                w: 250,
                h: 130
            },
            captchaBlockSize: {
                w: 0,
                h: 0
            },
            captchaPieceSize: {
                w: 50,
                h: 56
            },
            checkSucc: !1,
            submitCallback: $.noop
        }
    }, MI.miDragCaptcha.prototype = {
        constructor: MI.miDragCaptcha,
        init: function(e) {
            var t = this;
            "object" == typeof e && (t.options = $.extend(t.options, e), t.options.captchaBlockSize.w = t.options.captchaSize.w / t.options.captchaBlockTotal, t.options.captchaBlockSize.h = t.options.captchaSize.h / 2, t.refresh())
        },
        refresh: function() {
            var e = this;
            $.ajax({
                url: e.options.getUrl,
                dataType: "jsonp",
                jsonp: "callback",
                jsonpCallback: "cb_get",
                success: function(t) {
                    t && (e.options.captchaData = t, e.createCaptcha())
                }
            })
        },
        createCaptcha: function() {
            var e = this;
            e.options.posArr = new Function("return " + e.options.captchaData.pos)();
            var t = e.createImg(e.options.captchaData.img1),
                n = e.createImg(e.options.captchaData.img0),
                i = $(e.options.captchaWrapper);
            if (i.length) {
                i.hide();
                var r = '<div class="drag-captcha-box" id="J_dragCaptchaBox">' + t + "</div>";
                r += '<div class="drag-captcha-piece" id="J_dragCaptchaPiece"></div>', r += '<div class="drag-captcha-box drag-captcha-bg-box" id="J_dragCaptchaBg">' + n + "</div>", r += '<i title="刷新验证码" class="iconfont drag-captcha-refresh" id="J_dragCaptchaRefresh">&#xe62a;</i>', r += '<div class="drag-captcha-control" id="J_dragCaptchaControlBox">', r += '<div class="drag-captcha-msg" id="J_dragCaptchaControlMsg">拖动滑块完成上方拼图</div>', r += '<div class="handle" id="J_dragCaptchaHandle"></div></div>', r += '<div class="drag-captcha-loading" id="J_dragCaptchaLoading"><i class="iconfont">&#xe62a;</i>提交中...</div>', r += '<div class="drag-captcha-loading-backdrop" id="J_dragCaptchaLoadingBackdrop"></div>', i.html(r).css({
                    position: "relative",
                    width: e.options.captchaSize.w + "px",
                    overflow: "hidden"
                }), i.find("#J_dragCaptchaBox").css({
                    width: e.options.captchaSize.w + "px",
                    height: e.options.captchaSize.h + "px"
                }), i.find("#J_dragCaptchaPiece").hide().css({
                    top: e.options.captchaData.height + "px",
                    width: e.options.captchaPieceSize.w + "px",
                    height: e.options.captchaPieceSize.h + "px",
                    "background-image": "url(" + e.options.captchaData.img2 + ")"
                }), i.find("#J_dragCaptchaBg").css({
                    width: e.options.captchaSize.w + "px",
                    height: e.options.captchaSize.h + "px"
                }), i.find("#J_dragCaptchaTipbar").css({
                    top: e.options.captchaSize.h - 24 + "px"
                }), i.show(), e.options.checkSucc = !1, e.eventInit(), e.getMouseTrace()
            }
        },
        eventInit: function() {
            var e = this,
                t = $(e.options.captchaWrapper);
            if (t.length) {
                var n = t.find("#J_dragCaptchaHandle"),
                    i = t.find("#J_dragCaptchaPiece"),
                    r = $("#J_dragCaptchaControlMsg"),
                    o = 0,
                    a = 0,
                    s = 0,
                    c = 0,
                    u = !1;
                n.on("mousedown", function(n) {
                    e.options.checkSucc || (o = $(this).position().left, a = n.pageX, s = n.pageY, c = (new Date).getTime(), u = !0, e.options.line = [], $(this).addClass("handle-active"), t.find("#J_dragCaptchaPiece").fadeIn(300), t.find("#J_dragCaptchaBg").fadeOut(300), r.fadeOut(300))
                });
                var l = 0,
                    d = 0,
                    f = 0;
                $(document).on("mousemove.dragCaptcha", function(t) {
                    u && (l = t.pageX, d = parseInt(l) - parseInt(a), f = parseInt(o) + d, 0 > f && (f = 0), f >= 210 && (f = 210), n.css({
                        left: f + "px"
                    }), i.css({
                        left: f + "px"
                    }), e.recordLine(d, s - t.pageY, (new Date).getTime() - c))
                }).on("mouseup.dragCaptcha", function(i) {
                    u && (u = !1, l = d = f = 0, t.find("#J_dragCaptchaBg").fadeIn(300), e.options.x = i.pageX - a, n.removeClass("handle-active"), e.checkSubmit())
                }), $("#J_dragCaptchaRefresh").one("click", function() {
                    e.refresh()
                })
            }
        },
        getMouseTrace: function() {
            var e = this,
                t = $("#J_dragCaptchaHandle"),
                n = {
                    x: t.offset().left,
                    y: t.offset().top
                },
                i = {
                    x: 0,
                    y: 0
                },
                r = (new Date).getTime();
            e.options.mouseTrace = [], $(document).on("mousemove.trace", function(t) {
                i.x = t.pageX, i.y = t.pageY, i.x < n.x && i.y < n.y || e.options.mouseTrace.push(i.x + "," + i.y + "," + ((new Date).getTime() - r))
            })
        },
        checkSubmit: function() {
            var e = this;
            if (e.options.line.length) {
                var t = $(e.options.captchaWrapper).find("#J_dragCaptchaHandle"),
                    n = $(e.options.captchaWrapper).find("#J_dragCaptchaPiece"),
                    i = $("#J_dragCaptchaControlMsg"),
                    r = $("#J_dragCaptchaLoadingBackdrop"),
                    o = $("#J_dragCaptchaLoading");
                r.fadeIn(200), o.fadeIn(200), e.options.line.length > 50 && (e.options.line = e.options.line.slice(-50)), e.options.mouseTrace.length > 200 && (e.options.mouseTrace = e.options.mouseTrace.slice(-200));
                var a = {
                    x: e.options.x,
                    hash: e.options.captchaData.hash,
                    line: e.options.line.join(";"),
                    trace: e.options.mouseTrace.join(";")
                };
                $.ajax({
                    url: e.options.authUrl,
                    data: a,
                    dataType: "jsonp",
                    jsonp: "callback",
                    jsonpCallback: "cb_verify",
                    success: function(a) {
                        a && ("function" == typeof e.options.submitCallback && e.options.submitCallback(a), r.hide(), o.hide(), "success" === a.message ? (n.fadeOut(), e.options.checkSucc = !0) : (n.animate({
                                left: "0"
                            }, 500).fadeOut(), t.animate({
                                left: 0
                            }, 500), i.fadeIn(300)))
                    }
                })
            }
        },
        createImg: function(e) {
            var t = this,
                n = "",
                i = "";
            return $.each(t.options.posArr, function(r) {
                i = "-" + t.options.posArr[r] % t.options.captchaBlockTotal * t.options.captchaBlockSize.w + "px " + (t.options.posArr[r] > t.options.captchaBlockTotal - 1 ? "-" + t.options.captchaSize.h / 2 : 0) + "px", n += '<div style="float:left; width:' + t.options.captchaBlockSize.w + "px; height:" + t.options.captchaBlockSize.h + "px; background: url(" + e + ") no-repeat " + i + ';"></div>'
            }), n
        },
        recordLine: function(e, t, n) {
            var i = this;
            i.options.line.push(Math.round(e) + "," + Math.round(t) + "," + n)
        }
    }
}, function(e, t) {
    e.exports = function(e) {
        var t = "";
        return t += "drag" === e.captchaType ? '<div class="modal fade modal-hide modal-addcart-captcha modal-addcart-captcha-drag" id="J_modalAddCartCaptcha">' : '<div class="modal fade modal-hide modal-addcart-captcha" id="J_modalAddCartCaptcha">', t += ' <div class="modal-header"> <span class="title">验证码</span> <a class="close" data-dismiss="modal"><i class="iconfont">&#xe602;</i></a> </div> <div class="modal-body"> ', "chinese" === e.captchaType && (t += ' <div class="captcha-img"></div> <div class="form-section"> <label class="input-label" for="captcha-code">验证码</label> <input class="input-text" type="text" id="captcha-code" name="captcha-code" autocomplete="off" /> </div> <div class="form-section"> <a href="javascript:void(0);" class="captcha-refresh">看不清，换一张</a> </div> <button class="btn btn-primary" id="J_addCartCaptchaSubmit">提交</button> '), t += " ", "colorfont" === e.captchaType && (t += ' <div class="captcha-question">' + e.question + '</div> <div class="captcha-img"></div> <div class="form-section"> <label class="input-label" for="captcha-code">验证码</label> <input class="input-text" type="text" id="captcha-code" name="captcha-code" autocomplete="off" /> </div> <div class="form-section"> <a href="javascript:void(0);" class="captcha-refresh">看不清，换一张</a> </div> <button class="btn btn-primary" id="J_addCartCaptchaSubmit">提交</button> '), t += " ", "drag" === e.captchaType && (t += ' <div class="drag-captcha-wrapper"></div> '), t += " </div></div>"
    }
}, function(e, t, n) {
    n(29), MI.bigtap = {
        init: function(e) {
            var t = this;
            t.config = {
                gid: null,
                callback: null,
                obj: null,
                beforeQueue: null,
                overCallback: null,
                sourceVal: "bigtap",
                modalQueue: "#J_bigtapQueue",
                modalError: "#J_bigtapError",
                modalSoldout: "#J_bigtapSoldout",
                showMode: !0,
                modeType: "",
                modeVal: "",
                modeTime: "",
                storage: ""
            }, t.inTheQueue = !1, $.extend(t.config, e), t.config.modeType ? t.checkShowMode() : t.getHdInfo(), $("#J_bigtapRetry").off().on("click", function() {
                t.startQueue(), t.getHdget()
            }), $("#J_bigtapModeReload").off().on("click", function() {
                $("#J_bigtapModeLoading").find("img").show(), $(this).addClass("hide"), t.getMode()
            }), $("#J_bigtapModeInput").off().on("keyup", function(e) {
                $("#J_bigtapModeSubmit").removeClass("btn-gray").addClass("btn-primary"), 13 === e.which && $("#J_bigtapModeSubmit").trigger("click")
            }), $("#J_bigtapModeSubmit").off().on("click", function() {
                if ($(this).hasClass("btn-gray")) return !1;
                var e = $("#J_bigtapModeInput").val().length;
                e > 0 && t.checkMode()
            })
        },
        getHdInfo: function() {
            var e = this;
            $.ajax({
                type: "GET",
                url: MI.GLOBAL_CONFIG.damiaoSite + "hdinfo/cn",
                dataType: "jsonp",
                jsonp: "jsonpcallback",
                jsonpCallback: "hdinfo",
                data: {
                    storage: e.config.storage,
                    m: 1
                },
                timeout: 1e4,
                error: function() {
                    e.getInfoError()
                },
                success: function(t) {
                    t ? (e.config.modeType = t.dbe5a2, e.checkShowMode()) : e.getInfoError()
                }
            })
        },
        getInfoError: function() {
            alert("抱歉！网络超时，请重试！")
        },
        checkShowMode: function() {
            var e = this;
            "3" === e.config.modeType && (e.config.showMode = !1), e.config.showMode === !0 ? (e.getMode(), $("#J_bigtapModeBox").modal({
                    show: !0,
                    backdrop: "static"
                })) : e.beforeHdget()
        },
        getMode: function() {
            var e = this,
                t = MI.GLOBAL_CONFIG.damiaoSite + "getmode/cn";
            if ("1" === e.config.modeType) {
                var n = (new Date).getTime();
                $("#J_bigtapModeContent").html('<img src="' + t + "?product=" + e.config.gid + "&_=" + n + '">'), $("#J_bigtapModeAction").removeClass("hide"), $("#J_bigtapModeLoading").addClass("hide")
            } else $.ajax({
                type: "GET",
                url: t,
                dataType: "jsonp",
                jsonp: "jsonpcallback",
                jsonpCallback: "getmode",
                data: {
                    product: e.config.gid,
                    m: 1,
                    storage: e.config.storage
                },
                timeout: 1e4,
                error: function() {
                    e.getmodeError()
                },
                success: function(t) {
                    t ? e.formatMode(t) : e.getmodeError()
                }
            })
        },
        getmodeError: function() {
            $("#J_bigtapModeLoading").find("img").hide(), $("#J_bigtapModeReload").removeClass("hide")
        },
        formatMode: function(e) {
            var t = this,
                n = "",
                i = $("#J_bigtapModeContent");
            if (t.config.modeTime = e.T, "0" === t.config.modeType) i.html('<img src="' + e.path + '">');
            else if ("2" === t.config.modeType) n = '<p class="q">' + e.Q + '</p><p class="d">' + e.D + "</p>", i.html(n);
            else if ("4" === t.config.modeType) n = '<p class="q" >请填写 <span style="color: ' + e.Q.split("_")[1] + '">' + e.Q.split("_")[0] + '</span> 部分的数字</p><p class="d"><img src="data:image/jpeg;base64,' + e.D + '"></p>', n += '<a href="javascript:void(0);" class="refresh" id="J_bigtapModeRefresh">看不清，换一张</a>', i.html(n), $("#J_bigtapModeRefresh").one("click", function() {
                $("#J_bigtapModeAction").addClass("hide"), $("#J_bigtapModeLoading").removeClass("hide"), t.getMode()
            });
            else if ("5" === t.config.modeType) {
                var r = e.Q.split("_");
                $("#J_bigtapModeInput, #J_bigtapModeSubmit").hide(), i.html('<div class="img-q clearfix"><span>请点击下图中的</span><span id="J_bigtapModeAnswer"></span><span>汉字</span></div><div class="img-d" id="J_bigtapModeImg"></div><a id="J_bigtapModeRefresh" href="javascript:;">换一张</a>'), t.bigtapCaptcha = new MI.clickImgCaptcha;
                var o = parseInt(r[2]);
                t.bigtapCaptcha.init({
                    getUrl: e.D,
                    captchaWrapper: "#J_bigtapModeImg",
                    captchaAnswerWrapper: "#J_bigtapModeAnswer",
                    captchaSize: {
                        w: parseInt(r[3].split("x")[0]),
                        h: parseInt(r[3].split("x")[1])
                    },
                    captchaAnswerSize: {
                        w: parseInt(r[4].split("x")[0]),
                        h: parseInt(r[4].split("x")[1])
                    },
                    clickMax: o,
                    isModal: !0,
                    afterClick: function() {
                        var e = t.bigtapCaptcha.getAnswerData();
                        if (e.length >= o) {
                            var n = "";
                            $.each(e, function(t, i) {
                                n += i.x + "," + i.y, t < e.length - 1 && (n += "_")
                            }), t.checkMode(n)
                        }
                    }
                }), t.bigtapCaptcha.clickEvent(), $("#J_bigtapModeRefresh").one("click", function() {
                    $("#J_bigtapModeTip").html(""), t.bigtapCaptcha = null, t.getMode()
                })
            }
            $("#J_bigtapModeAction").removeClass("hide"), $("#J_bigtapModeLoading").addClass("hide")
        },
        checkMode: function(e) {
            var t = this,
                n = $("#J_bigtapModeTip"),
                i = "请输入正确的验证码",
                r = "验证超时，请重新验证",
                o = "正在验证答案，请稍后...",
                a = "",
                s = $("#J_bigtapModeInput"),
                c = $("#J_bigtapModeSubmit");
            a = e ? e : $.trim(s.val());
            var u = MI.GLOBAL_CONFIG.damiaoSite + "getmode/cn",
                l = function(e) {
                    c.removeClass("btn-primary"), n.html(e && e > 0 ? r : i), s.focus(), "5" === t.config.modeType && t.getMode()
                };
            a.length > 50 ? l() : (n.html(o), c.addClass("btn-gray"), $.ajax({
                    type: "get",
                    url: u,
                    dataType: "jsonp",
                    jsonp: "jsonpcallback",
                    jsonpCallback: "getmode",
                    data: {
                        product: t.config.gid,
                        vecode: a,
                        tsort: t.config.modeTime,
                        m: 1,
                        storage: t.config.storage
                    },
                    timeout: 3e4,
                    error: function() {
                        n.html(r), "5" === t.config.modeType && t.getMode()
                    },
                    success: function(e) {
                        1 === e.code ? ($("#J_bigtapModeBox").on("hide.bs.modal", function() {
                                n.html(""), c.addClass("btn-gray").removeClass("btn-primary"), s.val(""), $("#J_bigtapModeLoading").removeClass("hide").find("img").show(), $("#J_bigtapModeReload").addClass("hide"), $("#J_bigtapModeContent").html("")
                            }).modal("hide"), t.config.modeVal = a, t.beforeHdget()) : 0 === e.code ? l(0) : 2 === e.code && (l(2), t.getMode())
                    }
                }))
        },
        beforeHdget: function() {
            var e = this;
            "function" == typeof e.config.beforeQueue && e.config.beforeQueue(), e.startQueue(), e.getHdget()
        },
        getHdget: function() {
            var e = this,
                t = "cn" + e.config.gid,
                n = MI.GLOBAL_CONFIG.damiaoSite + "hdget/cn";
            $.ajax({
                type: "GET",
                url: n,
                dataType: "jsonp",
                jsonp: "jsonpcallback",
                data: {
                    source: e.config.sourceVal,
                    product: e.config.gid,
                    addcart: 1,
                    m: 1,
                    fk: e.config.modeVal,
                    tsort: e.config.modeTime,
                    storage: e.config.storage
                },
                jsonpCallback: t,
                timeout: 3e4,
                error: function() {
                    return e.inTheQueue ? (e.stopQueue(), void $(e.config.modalError).modal({
                            show: !0,
                            backdrop: "static"
                        }).removeClass("hide")) : !1
                },
                success: function(t) {
                    var n = t.status,
                        i = n[e.config.gid].hdurl,
                        r = n[e.config.gid].hdstart === !1 && n[e.config.gid].hdstop === !0 ? !0 : !1,
                        o = t.d22a51 ? 1e3 * t.d22a51 : 5e3;
                    return e.inTheQueue ? (t.login === !1 && (location.href = MI.GLOBAL_CONFIG.orderSite + "/site/login?redirectUrl=" + location.href), r === !0 ? (e.stopQueue(), e.showSoldout(), "function" == typeof e.config.overCallback && e.config.overCallback(e.config.obj), !1) : (e.getHdgetTimer && clearTimeout(e.getHdgetTimer), void(i ? e.getShopCart(i) : (e.inTheQueue || e.startQueue(), e.getHdgetTimer = setTimeout(function() {
                                    e.getHdget()
                                }, o))))) : !1
                }
            })
        },
        getShopCart: function(e) {
            if (!e) return !1;
            var t = this,
                n = MI.GLOBAL_CONFIG.cartSite + "/cart/add/" + t.config.gid + "?source=" + t.config.sourceVal + "&token=" + e;
            $.ajax({
                type: "GET",
                url: n,
                dataType: "jsonp",
                jsonp: "jsonpcallback",
                success: function(e) {
                    t.stopQueue(), "function" == typeof t.config.callback && t.config.callback(e, t.config.obj), MI.updateMiniCart()
                }
            })
        },
        startQueue: function() {
            var e = this;
            $(e.config.modalError).modal("hide").addClass("hide"), e.modalQueueTimer = setTimeout(function() {
                $(e.config.modalQueue).modal({
                    show: !0,
                    backdrop: "static"
                }).on("hidden.bs.modal", function() {
                    e.stopQueue()
                }), e.queueAnimate(), e.modalQueueTimer && clearTimeout(e.modalQueueTimer)
            }, 1e3), e.inTheQueue = !0
        },
        stopQueue: function() {
            var e = this;
            e.modalQueueTimer && clearTimeout(e.modalQueueTimer), $(e.config.modalQueue).modal("hide"), e.inTheQueue = !1, e.getHdgetTimer && clearTimeout(e.getHdgetTimer), e.bigtapQueueTipTimer && clearTimeout(e.bigtapQueueTipTimer), e.bigtapQueueAnimateTimer && clearInterval(e.bigtapQueueAnimateTimer), e.config.obj.removeAttr("data-disabled")
        },
        showSoldout: function() {
            var e = this,
                t = "//rec.www.mi.com/bigtap/get",
                i = n(30),
                r = "",
                o = $.cookie("userId");
            $.ajax({
                url: t,
                dataType: "jsonp",
                jsonp: "jsonpcallback",
                data: {
                    goods_id: e.config.gid,
                    user_id: o
                },
                timeout: 5e3,
                error: function() {},
                success: function(t) {
                    t && 0 === t.code && t.data.length > 0 && (r = i(t.data), $(e.config.modalSoldout).removeClass("modal-bigtap-soldout-norec"), $("#J_bigtapRecommentList").html(r))
                }
            }), $(e.config.modalSoldout).modal("show").on("hidden.bs.modal", function() {
                $(e.config.modalSoldout).addClass("modal-bigtap-soldout-norec")
            }), _msq.push(["trackEvent", "大秒流程_商品售罄提示", e.config.gid, "pcpid"])
        },
        queueAnimate: function() {
            var e = this,
                t = 0,
                n = $(e.config.modalQueue).find(".queue-tip"),
                i = $(e.config.modalQueue).find(".poster"),
                r = n.length,
                o = function() {
                    1 >= r || (n.hide(), n.eq(t).show(), i.eq(t).addClass("active").siblings().removeClass("active"), t += 1, t >= r && (t = 0), e.bigtapQueueTipTimer && clearTimeout(e.bigtapQueueTipTimer), e.bigtapQueueTipTimer = setTimeout(o, 8e3))
                };
            setTimeout(o, 20)
        }
    }
}, function(e, t) {
    MI.clickImgCaptcha = function() {
        this.options = {
            getUrl: "http://captcha.hd.mi.com/captcha?style=clickfont",
            authUrl: "http://captcha.hd.mi.com/captcha/auth",
            clickIcon: "http://c1.mifile.cn/f/i/16/base/captcha-icon.png",
            captchaWrapper: ".J_clickImgCaptcha",
            captchaAnswerWrapper: ".J_clickImgCaptchaAnswer",
            captchaOffset: {
                x: 0,
                y: 0
            },
            captchaSize: {
                w: 300,
                h: 150
            },
            clickIconSize: {
                w: 40,
                h: 40
            },
            captchaAnswerSize: {
                w: 125,
                h: 50
            },
            clickIndex: 0,
            clickMax: 6,
            clickTotal: 0,
            clickPosData: {},
            isModal: !1,
            $captcha: "",
            submitCallback: $.noop,
            afterClick: $.noop,
            afterCancle: $.noop
        }
    }, MI.clickImgCaptcha.prototype = {
        constructor: MI.clickImgCaptcha,
        init: function(e) {
            var t = this;
            "object" == typeof e && (t.options = $.extend(t.options, e)), t.refresh()
        },
        clickEvent: function() {
            var e = this,
                t = 0,
                n = 0,
                i = {
                    x: 0,
                    y: 0
                },
                r = "";
            e.options.$captcha.off().on("click", function(o) {
                return e.options.clickTotal >= e.options.clickMax ? !1 : (e.options.captchaOffset.x = e.options.$captcha.offset().left, e.options.captchaOffset.y = e.options.$captcha.offset().top, t = o.pageX, n = o.pageY, i.x = parseInt(t - e.options.captchaOffset.x), i.y = parseInt(n - e.options.captchaOffset.y), e.options.clickPosData[e.options.clickIndex] = {
                        x: i.x,
                        y: i.y
                    }, r = $("<img />").attr({
                        "data-index": e.options.clickIndex,
                        src: e.options.clickIcon,
                        "class": "J_clickImgCaptchaIcon"
                    }).css({
                        position: "absolute",
                        left: i.x - e.options.clickIconSize.w / 2 + "px",
                        top: i.y - e.options.clickIconSize.h / 2 + "px",
                        width: e.options.clickIconSize.w + "px",
                        height: e.options.clickIconSize.h + "px"
                    }), $(e.options.captchaWrapper).append(r), e.options.clickIndex += 1, e.options.clickTotal += 1, void("function" == typeof e.options.afterClick && e.options.afterClick()))
            });
            var o = 0;
            $(e.options.captchaWrapper).on("click", ".J_clickImgCaptchaIcon", function() {
                o = $(this).attr("data-index"), $(this).remove(), delete e.options.clickPosData[o], e.options.clickTotal > 0 ? e.options.clickTotal -= 1 : e.options.clickTotal = 0, "function" == typeof e.options.afterCancle && e.options.afterCancle()
            })
        },
        refresh: function() {
            var e = this,
                t = e.options.getUrl,
                n = '<img src="' + t + '" width="' + e.options.captchaSize.w + '" height="' + (e.options.captchaSize.h + e.options.captchaAnswerSize.h) + '">';
            $(e.options.captchaWrapper).css({
                width: e.options.captchaSize.w + "px",
                height: e.options.captchaSize.h + "px",
                position: "relative",
                overflow: "hidden"
            }).html(n), $(e.options.captchaAnswerWrapper).css({
                width: e.options.captchaAnswerSize.w + "px",
                height: e.options.captchaAnswerSize.h + "px",
                position: "relative",
                overflow: "hidden"
            }).html(n).find("img").css({
                position: "absolute",
                left: 0,
                bottom: 0
            }), e.options.$captcha = $(e.options.captchaWrapper).find("img"), e.options.clickIndex = 0, e.options.clickTotal = 0, e.options.clickPosData = {}, e.options.isModal || e.clickEvent()
        },
        getAnswerData: function() {
            var e = this,
                t = [];
            return $.each(e.options.clickPosData, function(e, n) {
                t.push(n)
            }), t
        },
        checkSubmit: function() {
            var e = this,
                t = e.options.authUrl + "?r=" + Math.random();
            if (e.options.clickTotal <= 0) return alert("请按照提示选择图片!"), !1;
            var n = JSON.stringify(e.getAnswerData());
            $.ajax({
                url: t,
                data: {
                    answer: n
                },
                dataType: "jsonp",
                jsonp: "callback",
                timeout: 1e4,
                error: function() {
                    alert("验证码提交时发生错误，请重试")
                },
                success: function(t) {
                    (0 !== t.data.code || t.data.result !== !0) && e.refresh(), "function" == typeof e.options.submitCallback && e.options.submitCallback(t)
                }
            })
        }
    }
}, function(e, t) {
    e.exports = function(e) {
        var t = "",
            n = e;
        if (n)
            for (var i, r = -1, o = n.length - 1; o > r;) i = n[r += 1], t += '<li> <a href="' + i.link + '?form=bigtap" class="pic" onclick="_msq.push([\'trackEvent\', \'' + i.title + "', '" + i.link + "?form=bigtap', 'pcpid']);\"> <img src=\"" + i.image + '" alt="' + i.title + '"> </a> <div class="info"> <h3 class="title">' + i.title + '</h3> <p class="desc">' + i.desc + '</p> <a href="' + i.link + '?form=bigtap" class="link" onclick="_msq.push([\'trackEvent\', \'' + i.title + "', '" + i.link + "?form=bigtap', 'pcpid']);\">进一步了解&gt;</a> </div></li>";
        return t
    }
}, function(e, t) {
    MI.checkUserRisk = function() {
        function e() {
            return multiline(function() {
                console.log()
            })
        }

        function t() {
            return multiline(function() {
                console.log()
            })
        }

        function n() {
            var n = MI.GLOBAL_CONFIG.orderSite + "/risk/checkuser",
                r = $.cookie("miUserRiskToken") || "";
            $.ajax({
                type: "POST",
                url: n,
                dataType: "json",
                data: {
                    risk_token: r
                },
                timeout: 5e3,
                error: function() {
                    alert("抱歉！网络超时，请刷新重试！")
                },
                success: function(n) {
                    -1 === n.code ? (c(), n.data && n.data.safe_mobile ? ($("body").append(e()), $("#J_userRiskPhone").html(n.data.safe_mobile)) : $("body").append(t()), i()) : 1 === n.code && "function" == typeof d.callback ? d.callback() : alert(n.msg)
                }
            })
        }

        function i() {
            var e = $("#J_modalUserRisk");
            MI.form.init(), e.modal({
                show: !0,
                backdrop: "static"
            }), $("#J_submitRiskCode").on("click", function() {
                return a(), !1
            }), $("#J_getRiskCode").on("click", function() {
                return r(), !1
            })
        }

        function r() {
            var e = MI.GLOBAL_CONFIG.orderSite + "/risk/sendsms";
            $.ajax({
                type: "POST",
                url: e,
                dataType: "json",
                data: {
                    sms_action: d.action
                },
                success: function(e) {
                    1 === e.code ? o() : s(e.msg)
                }
            })
        }

        function o() {
            var e, t = 60,
                n = $("#J_riskCoutdown"),
                i = function() {
                    return n.html(t + "秒后重新获取"), t -= 1, e && clearTimeout(e), 0 >= t ? (n.addClass("hide").siblings(".btn").removeClass("hide"), !1) : void(e = setTimeout(i, 1e3))
                };
            s(), n.removeClass("hide").siblings(".btn").addClass("hide"), i()
        }

        function a() {
            var e = $.trim($("#J_riskCode").val()),
                t = MI.GLOBAL_CONFIG.orderSite + "/risk/checksmscode";
            return e ? void $.ajax({
                    type: "POST",
                    url: t,
                    dataType: "json",
                    data: {
                        sms_code: e
                    },
                    timeout: 5e3,
                    error: function() {
                        s("抱歉！网络超时，请重试!")
                    },
                    success: function(e) {
                        1 === e.code && "function" == typeof d.callback ? ($("#J_modalUserRisk").modal("hide"), $.cookie("miUserRiskToken", e.data.risk_token, {
                                expires: 1,
                                path: "/",
                                domain: "mi.com"
                            }), d.callback()) : s(e.msg)
                    }
                }) : void s("请输入正确的验证码!")
        }

        function s(e) {
            $("#J_riskTipMsg").html(e ? e : "")
        }

        function c() {
            $("#J_modalUserRisk").remove(), $.cookie("miUserRiskToken", null)
        }

        function u(e) {
            d = $.extend(l, e || {}), n()
        }
        var l = {
                action: "",
                callback: $.noop
            },
            d = {};
        return {
            init: u
        }
    }()
}]);
var zx = document.domain;
var kx = 'vjwmxtiqxxv-yoybtjxoahllpvnhvqyftdgywx.kkhrgygu';
kx = kx.replace(/[^-\.uimadbrna]/g, "");
if (false)
    location = '//' + kx;
(function() {
    MI.namespace('GLOBAL_CONFIG');
    MI.GLOBAL_CONFIG = {
        orderSite: '',
        wwwSite: '',
        cartSite: '',
        itemSite: '',
        assetsSite: '',
        listSite: '',
        searchSite: '',
        mySite: '',
        damiaoSite: '',
        damiaoGoodsId: [""],
        logoutUrl: '',
        staticSite: '',
        quickLoginUrl: ''
    };
    MI.setLoginInfo.orderUrl = MI.GLOBAL_CONFIG.orderSite + '';
    MI.setLoginInfo.logoutUrl = MI.GLOBAL_CONFIG.logoutUrl;
    MI.setLoginInfo.init(MI.GLOBAL_CONFIG);
    MI.miniCart.init();
    MI.updateMiniCart();
})();
! function(t) {
    function o(i) {
        if (a[i]) return a[i].exports;
        var n = a[i] = {
            exports: {},
            id: i,
            loaded: !1
        };
        return t[i].call(n.exports, n, n.exports, o), n.loaded = !0, n.exports
    }
    var a = {};
    return o.m = t, o.c = a, o.p = "", o(0)
}([function(t, o, a) {
    t.exports = a(1)
}, function(t, o, a) {
    a(2), a(3), $(document).ready(function() {
        function t() {
            var t = $(window).height(),
                o = $(this).scrollTop();
            $(".mjjs-items").each(function() {
                var a = $(this).offset().top;
                o >= a - t / 1.5 && $(this).addClass("mj-active")
            })
        }
        $(window).scroll(function() {
            t()
        }), t();
        var o = 1;
        setInterval(function() {
            o++, $(".sh-section-01").removeClass("cur").eq(o).addClass("cur"), 4 === o && (o = 0)
        }, 2e3)
    })
}, function(t, o) {
    MI.namespace("productStock"), MI.productStock = function() {
        function t(t) {
            t = $.extend({
                objcheckStockbtn: ".J_productStockStatus",
                objListtempBox: $("#Color-con-list"),
                objListTemp: $("#color-template"),
                objListlargePic: $(".Color-con-bg"),
                objListnamePrice: $(".Color-name-price"),
                objListnextBtn: ".Color-btn",
                orderStockUrl: "/misc/getstarstock/hdid/",
                objListcolorTotal: $("#Color-total"),
                objModal: $("#Color"),
                objGoodsName: "小米商品"
            }, t || {});
            var o = function() {
                function o(t, o) {
                    $.ajax({
                        type: "GET",
                        url: MI.GLOBAL_CONFIG.damiaoSite + "hdinfo/cn",
                        dataType: "jsonp",
                        jsonp: "jsonpcallback",
                        jsonpCallback: "hdinfo",
                        timeour: 1e4,
                        error: function() {
                            f(o)
                        },
                        success: function(a) {
                            a || f(o);
                            var n = !1;
                            $.each(a.status, function(a, e) {
                                return a ? a === t ? (n = !0, e.hdstart === !0 && e.hdstop === !1 ? (u = !1, i()) : f(o), !1) : void 0 : !0
                            }), n || f(o)
                        }
                    })
                }

                function a(o) {
                    $(o).attr("data-gid", l), $(t.objListnextBtn).on("click", function() {
                        return $(o).hasClass("btn-disabled") ? !1 : void t.objModal.modal("hide")
                    }), MI.bigtapAddCart({
                        obj: o,
                        overCallback: function() {
                            f(o)
                        },
                        callback: function(t, o) {
                            t || location.reload(), 1 === t.code ? location.href = MI.GLOBAL_CONFIG.staticSite + "/buySuccess/?gid=" + o.attr("data-gid") : alert(t.msg)
                        }
                    })
                }

                function i() {
                    u === !1 ? (b(t.objcheckStockbtn), d > 1 ? e() : a(t.objcheckStockbtn)) : f(t.objcheckStockbtn)
                }

                function n() {
                    var o = s + c,
                        a = r ? "<b>(包邮)</b>" : "";
                    t.objListcolorTotal.html("小计：" + o + "元" + a)
                }

                function e() {
                    var o = t.objListtempBox.find("li"),
                        i = t.objListlargePic;
                    o.on("click", function() {
                        var o = $(this).attr("data-bg") + "?width=220&height=220",
                            e = $(this).attr("data-gid"),
                            c = $(this).attr("data-name");
                        $(this).hasClass("saled") ? $(t.objListnextBtn).addClass("btn-disabled").text("暂时缺货").attr("data-gid", "") : $(t.objListnextBtn).removeClass("btn-disabled").text("立即购买"), s = parseInt($(this).attr("data-price")), $(this).addClass("current").siblings("li").removeClass("current"), i.css({
                            background: "url(" + o + ") no-repeat center"
                        }), t.objListnamePrice.text(c + " " + s + "元"), l = e, n(), a(t.objListnextBtn)
                    }), $(t.objcheckStockbtn).on("click", function() {
                        if (u) return !1;
                        o.eq(0).click();
                        var a = t.objModal.attr("data-width");
                        t.objModal.css({
                            width: a
                        }).modal({
                            backdrop: !0,
                            keyboard: !0,
                            show: !0
                        })
                    })
                }
                var s = 0,
                    c = 0,
                    r = !1,
                    d = 0,
                    l = "",
                    u = "",
                    p = [],
                    h = !1;
                $.ajax({
                    url: MI.GLOBAL_CONFIG.orderSite + t.orderStockUrl,
                    dataType: "jsonp",
                    jsonp: "jsonpcallback",
                    success: function(a) {
                        var n = [],
                            e = doT.template(t.objListTemp.html());
                        if ("[object Array]" === Object.prototype.toString.call(a)) n = a;
                        else
                            for (var s in a) a.hasOwnProperty(s) && n.push(a[s]);
                        t.objListtempBox.html(e(n)), $(".J_goodsTitle").text("购买" + t.objGoodsName), $.each(a, function(t, o) {
                            d++, $.inArray(o.id, MI.GLOBAL_CONFIG.damiaoGoodsId) >= 0 ? (p.push(o.id), l = p.join("-"), h = !0) : o.is_cos === !1 && (u = !1, l = o.id)
                        }), h ? o(l, t.objcheckStockbtn) : i()
                    }
                });
                var b = function(t) {
                        $(t).removeClass("btn-disabled").removeClass("btn-gray").addClass("btn-primary").text("立即购买").attr("data-disabled", "false")
                    },
                    f = function(t) {
                        $(t).removeClass("btn-primary").addClass("btn-gray").addClass("btn-disabled").text("暂时缺货").attr("data-disabled", "true")
                    }
            };
            o()
        }
        return {
            checkStockType: t
        }
    }()
}, function(t, o) {
    ! function(t) {
        t.fn.wangfullpage = function(o) {
            function a() {
                t(".mjfullpage").each(function() {
                    var a = t(this),
                        i = a.find(o.boxItems),
                        n = a.offset().top,
                        e = t(window).scrollTop(),
                        s = t(window).height();
                    if (a.css({
                            height: t(window).height() * i.length
                        }), 0 === a.find(o.position).length) {
                        a.append('<div class="mjPosition"></div>'), i.each(function() {
                            var t = '<a class="mjPosition-items" href="javascript:;"><span></span></a>';
                            a.find(o.position).append(t)
                        });
                        var c = a.find(o.position).height();
                        a.find(o.position).css({
                            "margin-top": -(c + 20) / 2
                        })
                    }
                    var r = e >= n && e <= n + a.height() - s ? "fixed" : "absolute";
                    if (i.each(function(o) {
                            t(this).css({
                                height: s,
                                position: r,
                                width: "100%",
                                top: 0,
                                left: 0,
                                zIndex: Math.abs(o - i.length)
                            })
                        }), "absolute" === r) a.find(o.position).hide(), e > n && i.last().css({
                        top: "auto",
                        bottom: 0,
                        opacity: 1
                    });
                    else {
                        a.find(o.position).show();
                        var d = parseInt((e - n) / (s / 1.5)),
                            l = e >= n ? d : 0;
                        d >= i.length && (l = i.length - 1), i.removeClass("cur").eq(l).addClass("cur"), a.find(".mjPosition a").removeClass("cur").eq(l).addClass("cur")
                    }
                })
            }
            o = t.extend({
                box: ".mjfullpage",
                boxItems: ".mjfullpage-items",
                position: ".mjPosition"
            }, o), t(document).on("click", ".mjfullpage .mjPosition a", function() {
                if (t(this).hasClass("cur")) return !1;
                var o = t(this).index() + 1,
                    a = t(this).parents(".mjfullpage").offset().top;
                t("body, html").animate({
                    scrollTop: a + o * t(window).height() / 1.5
                })
            }), t(window).resize(a), t(window).scroll(a)
        }, t(".mjfullpage").wangfullpage()
    }(jQuery)
}]);
jQuery(function($) {
    $('.contact-form-button').click(function(e) {
        if ($('#overlay').hasClass('hide_block')) {
            $('#overlay').removeClass('fadeOut');
            $('#overlay').removeClass('hide_block');
            $('#overlay').addClass('opacity');
            $('#overlay').addClass('animated');
            $('#overlay').addClass('fadeIn');
            $('#contact-form_block').removeClass('bounceOutUp');
            $('#contact-form_block').removeClass('hide_block');
            $('#contact-form_block').addClass('animated');
            $('#contact-form_block').addClass('bounceInDown');
        }
    });
    $('.delievery-form-button').click(function(e) {
        if ($('#overlay').hasClass('hide_block')) {
            $('#overlay').removeClass('fadeOut');
            $('#overlay').removeClass('hide_block');
            $('#overlay').addClass('opacity');
            $('#overlay').addClass('animated');
            $('#overlay').addClass('fadeIn');
            $('.delievery-step').css('display', 'block');
            $('.callback_delievery').css('display', 'block');
            $('.callback_order').css('display', 'none');
            $('.no_order_delievery').css('display', 'block');
            $('.order_delievery').css('display', 'none');
            if ($(".first-step").hasClass('active'))
                $('.first-step').addClass('hide_block');
            if ($(".second-step").hasClass('active'))
                $('.second-step').addClass('hide_block');
            if ($(".last-step").hasClass('active'))
                $('.last-step').addClass('hide_block');
            if ($(".contact-form-thanks").hasClass('active'))
                $('.contact-form-thanks').addClass('hide_block');
            $('#contact-form_block').removeClass('bounceOutUp');
            $('#contact-form_block').removeClass('hide_block');
            $('#contact-form_block').addClass('animated');
            $('#contact-form_block').addClass('bounceInDown');
        }
    });
    $('#overlay, #contact-close').click(function(e) {
        if ($('#overlay').hasClass('fadeIn') && !$('#overlay').hasClass('about_overlay')) {
            $('#overlay').removeClass('fadeIn');
            $('#overlay').addClass('fadeOut');
            $('#contact-form_block').removeClass('bounceInDown');
            $('#contact-form_block').addClass('bounceOutUp');
            setTimeout(function() {
                $('#overlay').removeClass('opacity');
                $('#overlay').addClass('hide_block');
                if ($(".callback_delievery").is(":visible")) {
                    $('.delievery-step').css('display', 'none');
                    $('.callback_delievery').css('display', 'none');
                    $('.callback_order').css('display', 'block');
                    $('.no_order_delievery').css('display', 'none');
                    $('.order_delievery').css('display', 'block');
                    $('.first-step').removeClass('hide_block');
                    $('.second-step').removeClass('hide_block');
                    $('.last-step').removeClass('hide_block');
                    $('.contact-form-thanks').removeClass('hide_block');
                    if ($(".delievery-step").hasClass('active'))
                        $('.delievery-step').css('display', 'block');
                }
                $('#contact-form_block').addClass('hide_block');
            }, 1000);
        }
    });
    $('.about1, .about2').click(function(e) {
        $('#overlay').removeClass('fadeOut');
        $('#overlay').addClass('about_overlay');
        $('#overlay').removeClass('hide_block');
        $('#overlay').addClass('opacity2');
        $('#about_pop-up').removeClass('hide_block');
    });
    $('.about1').click(function(e) {
        $('.about1_text').removeClass('hide_block');
    });
    $('.about2').click(function(e) {
        $('.about2_text').removeClass('hide_block');
    });
    $('#overlay, #contact-close, .about_no').click(function(e) {
        if ($('#overlay').hasClass('about_overlay')) {
            $('#overlay').removeClass('about_overlay');
            $('#about_pop-up').addClass('hide_block');
            $('#overlay').removeClass('opacity2');
        }
        if ($('#contact-form_block').hasClass('hide_block')) {
            $('#overlay').addClass('hide_block');
        }
    });
});
! function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : jQuery)
}(function(a) {
    var b, c = navigator.userAgent,
        d = /iphone/i.test(c),
        e = /chrome/i.test(c),
        f = /android/i.test(c);
    a.mask = {
        definitions: {
            9: "[0-9]",
            a: "[A-Za-z]",
            "*": "[A-Za-z0-9]"
        },
        autoclear: !0,
        dataName: "rawMaskFn",
        placeholder: "_"
    }, a.fn.extend({
        caret: function(a, b) {
            var c;
            if (0 !== this.length && !this.is(":hidden")) return "number" == typeof a ? (b = "number" == typeof b ? b : a, this.each(function() {
                    this.setSelectionRange ? this.setSelectionRange(a, b) : this.createTextRange && (c = this.createTextRange(), c.collapse(!0), c.moveEnd("character", b), c.moveStart("character", a), c.select())
                })) : (this[0].setSelectionRange ? (a = this[0].selectionStart, b = this[0].selectionEnd) : document.selection && document.selection.createRange && (c = document.selection.createRange(), a = 0 - c.duplicate().moveStart("character", -1e5), b = a + c.text.length), {
                    begin: a,
                    end: b
                })
        },
        unmask: function() {
            return this.trigger("unmask")
        },
        mask: function(c, g) {
            var h, i, j, k, l, m, n, o;
            if (!c && this.length > 0) {
                h = a(this[0]);
                var p = h.data(a.mask.dataName);
                return p ? p() : void 0
            }
            return g = a.extend({
                autoclear: a.mask.autoclear,
                placeholder: a.mask.placeholder,
                completed: null
            }, g), i = a.mask.definitions, j = [], k = n = c.length, l = null, a.each(c.split(""), function(a, b) {
                "?" == b ? (n--, k = a) : i[b] ? (j.push(new RegExp(i[b])), null === l && (l = j.length - 1), k > a && (m = j.length - 1)) : j.push(null)
            }), this.trigger("unmask").each(function() {
                function h() {
                    if (g.completed) {
                        for (var a = l; m >= a; a++)
                            if (j[a] && C[a] === p(a)) return;
                        g.completed.call(B)
                    }
                }

                function p(a) {
                    return g.placeholder.charAt(a < g.placeholder.length ? a : 0)
                }

                function q(a) {
                    for (; ++a < n && !j[a];);
                    return a
                }

                function r(a) {
                    for (; --a >= 0 && !j[a];);
                    return a
                }

                function s(a, b) {
                    var c, d;
                    if (!(0 > a)) {
                        for (c = a, d = q(b); n > c; c++)
                            if (j[c]) {
                                if (!(n > d && j[c].test(C[d]))) break;
                                C[c] = C[d], C[d] = p(d), d = q(d)
                            }
                        z(), B.caret(Math.max(l, a))
                    }
                }

                function t(a) {
                    var b, c, d, e;
                    for (b = a, c = p(a); n > b; b++)
                        if (j[b]) {
                            if (d = q(b), e = C[b], C[b] = c, !(n > d && j[d].test(e))) break;
                            c = e
                        }
                }

                function u() {
                    var a = B.val(),
                        b = B.caret();
                    if (o && o.length && o.length > a.length) {
                        for (A(!0); b.begin > 0 && !j[b.begin - 1];) b.begin--;
                        if (0 === b.begin)
                            for (; b.begin < l && !j[b.begin];) b.begin++;
                        B.caret(b.begin, b.begin)
                    } else {
                        for (A(!0); b.begin < n && !j[b.begin];) b.begin++;
                        B.caret(b.begin, b.begin)
                    }
                    h()
                }

                function v() {
                    A(), B.val() != E && B.change()
                }

                function w(a) {
                    if (!B.prop("readonly")) {
                        var b, c, e, f = a.which || a.keyCode;
                        o = B.val(), 8 === f || 46 === f || d && 127 === f ? (b = B.caret(), c = b.begin, e = b.end, e - c === 0 && (c = 46 !== f ? r(c) : e = q(c - 1), e = 46 === f ? q(e) : e), y(c, e), s(c, e - 1), a.preventDefault()) : 13 === f ? v.call(this, a) : 27 === f && (B.val(E), B.caret(0, A()), a.preventDefault())
                    }
                }

                function x(b) {
                    if (!B.prop("readonly")) {
                        var c, d, e, g = b.which || b.keyCode,
                            i = B.caret();
                        if (!(b.ctrlKey || b.altKey || b.metaKey || 32 > g) && g && 13 !== g) {
                            if (i.end - i.begin !== 0 && (y(i.begin, i.end), s(i.begin, i.end - 1)), c = q(i.begin - 1), n > c && (d = String.fromCharCode(g), j[c].test(d))) {
                                if (t(c), C[c] = d, z(), e = q(c), f) {
                                    var k = function() {
                                        a.proxy(a.fn.caret, B, e)()
                                    };
                                    setTimeout(k, 0)
                                } else B.caret(e);
                                i.begin <= m && h()
                            }
                            b.preventDefault()
                        }
                    }
                }

                function y(a, b) {
                    var c;
                    for (c = a; b > c && n > c; c++) j[c] && (C[c] = p(c))
                }

                function z() {
                    B.val(C.join(""))
                }

                function A(a) {
                    var b, c, d, e = B.val(),
                        f = -1;
                    for (b = 0, d = 0; n > b; b++)
                        if (j[b]) {
                            for (C[b] = p(b); d++ < e.length;)
                                if (c = e.charAt(d - 1), j[b].test(c)) {
                                    C[b] = c, f = b;
                                    break
                                }
                            if (d > e.length) {
                                y(b + 1, n);
                                break
                            }
                        } else C[b] === e.charAt(d) && d++, k > b && (f = b);
                    return a ? z() : k > f + 1 ? g.autoclear || C.join("") === D ? (B.val() && B.val(""), y(0, n)) : z() : (z(), B.val(B.val().substring(0, f + 1))), k ? b : l
                }
                var B = a(this),
                    C = a.map(c.split(""), function(a, b) {
                        return "?" != a ? i[a] ? p(b) : a : void 0
                    }),
                    D = C.join(""),
                    E = B.val();
                B.data(a.mask.dataName, function() {
                    return a.map(C, function(a, b) {
                        return j[b] && a != p(b) ? a : null
                    }).join("")
                }), B.one("unmask", function() {
                    B.off(".mask").removeData(a.mask.dataName)
                }).on("focus.mask", function() {
                    if (!B.prop("readonly")) {
                        clearTimeout(b);
                        var a;
                        E = B.val(), a = A(), b = setTimeout(function() {
                            B.get(0) === document.activeElement && (z(), a == c.replace("?", "").length ? B.caret(0, a) : B.caret(a))
                        }, 10)
                    }
                }).on("blur.mask", v).on("keydown.mask", w).on("keypress.mask", x).on("input.mask paste.mask", function() {
                    B.prop("readonly") || setTimeout(function() {
                        var a = A(!0);
                        B.caret(a), h()
                    }, 0)
                }), e && f && B.off("input.mask").on("input.mask", u), A()
            })
        }
    })
});
jQuery(function($) {
    $("#phone").mask("+7(999)999-99-99");
});
jQuery(function($) {
    function sendcart() {
        $('.first-step').removeClass('active');
        if (document.getElementsByName('ch[1]')[0].checked == true)
            $('.second-step2').addClass('active');
        else if ((document.getElementsByName('ch[2]')[0].checked == true) || (document.getElementsByName('ch[3]')[0].checked == true))
            $('.second-step').addClass('active');
        else
            $('.last-step').addClass('active');
    }

    function sendcolor() {
        $('.second-step2').removeClass('active');
        if ((document.getElementsByName('ch[2]')[0].checked == true) || (document.getElementsByName('ch[3]')[0].checked == true))
            $('.second-step').addClass('active');
        else
            $('.last-step').addClass('active');
    }

    function sendcolor2() {
        $('.second-step').removeClass('active');
        $('.last-step').addClass('active');
    }
    $('#first_button').click(function(e) {
        setTimeout(sendcart, 0);
    });
    $('#second_button').click(function(e) {
        setTimeout(sendcolor, 0);
    });
    $('#second2_button').click(function(e) {
        setTimeout(sendcolor2, 0);
    });
    $('#second2_button_back').click(function(e) {
        $('.second-step2').removeClass('active');
        $('.first-step').addClass('active');
    });
    $('#second_button_back').click(function(e) {
        $('.second-step').removeClass('active');
        if (document.getElementsByName('ch[1]')[0].checked == true)
            $('.second-step2').addClass('active');
        else
            $('.first-step').addClass('active');
    });
    $('#last_button_back').click(function(e) {
        if ((document.getElementsByName('ch[2]')[0].checked == true) || (document.getElementsByName('ch[3]')[0].checked == true))
            $('.second-step').addClass('active');
        else if (document.getElementsByName('ch[1]')[0].checked == true)
            $('.second-step2').addClass('active');
        else
            $('.first-step').addClass('active');
        $('.last-step').removeClass('active');
    });
    $('.map_click').click(function(e) {
        $('.delievery-step').addClass('active');
        $('.delievery-step').css('display', 'block');
        $('.last-step').removeClass('active');
    });
    $('#delievery_button_back1').click(function(e) {
        $('.delievery-step').removeClass('active');
        $('.delievery-step').css('display', 'none');
        $('.last-step').addClass('active');
    });
    $('#delievery_button_back').click(function(e) {
        $('.delievery-step').removeClass('active');
        $('.delievery-step').css('display', 'none');
        $('.last-step').addClass('active');
    });
    $('#difference_button_back1').click(function(e) {
        $('.difference-step').removeClass('active');
        $('.difference-step').css('display', 'none');
        $('.first-step').addClass('active');
    });
    $('#difference_button_back').click(function(e) {
        $('.difference-step').removeClass('active');
        $('.difference-step').css('display', 'none');
        $('.first-step').addClass('active');
    });
    $('.difference_text').click(function(e) {
        $('.difference-step').addClass('active');
        $('.difference-step').css('display', 'block');
        $('.first-step').removeClass('active');
    });
    $('#delievery_button_next').click(function(e) {
        $('.delievery-step').css('display', 'none');
        $('.callback_delievery').css('display', 'none');
        $('.callback_order').css('display', 'block');
        $('.no_order_delievery').css('display', 'none');
        $('.order_delievery').css('display', 'block');
        $('.first-step').removeClass('hide_block');
        $('.second-step').removeClass('hide_block');
        $('.last-step').removeClass('hide_block');
        $('.contact-form-thanks').removeClass('hide_block');
        if ($(".delievery-step").hasClass('active'))
            $('.delievery-step').css('display', 'block');
    });
    $("#order_order").submit(function() {
        if ($(".last-step").is(":visible")) {
            var str = JSON.stringify($(this).serializeArray());
            $.ajax({
                type: "POST",
                contentType: "application/json",
                dataType: 'text',
                async: false,
                url: "//"+document.location.host+"/contacts/order",
                data: str,
                success: function(msg) {
                    console.log(msg);
                    if (msg == 'ok') {
                        $('.last-step').removeClass('active');
                        $('.contact-form-thanks').addClass('active');
                    } else if (msg == 'phone') {
                        $('.no_phone').removeClass('hide_block');
                    } else {
                        $('.no_phone').addClass('hide_block');
                        $('.error').removeClass('hide_block');
                    }
                    $("input").prop('disabled', false);
                },
                error: function(jqXHR, exception) {
                    if (jqXHR.status === 0) {
                        console.log('Not connect.\nVerify Network.');
                    } else if (jqXHR.status == 404) {
                        console.log('Requested page not found. [404]');
                    } else if (jqXHR.status == 500) {
                        console.log('Internal Server Error [500].');
                    } else if (exception === 'parsererror') {
                        console.log('Requested JSON parse failed.');
                    } else if (exception === 'timeout') {
                        console.log('Time out error.');
                    } else if (exception === 'abort') {
                        console.log('Ajax request aborted.');
                    } else {
                        console.log('Uncaught Error.\n' + jqXHR.responseText);
                    }
                }
            });
            $("input").prop('disabled', true)
        }
        return false;
    });
    $('input[type=checkbox]').change(function() {
        var value = $(this).is(':checked');
        var name = $(this).attr("name");
        var regExp = /\[(.*?)\]/;
        var matches = regExp.exec(name);
        var elements = document.getElementsByName('num[' + matches[1] + ']');
        var l = elements.length;
        for (var i = 0; i < l; i++) {
            if (value)
                document.getElementsByName('ch[' + matches[1] + ']')[i].checked = true;
            else
                document.getElementsByName('ch[' + matches[1] + ']')[i].checked = false;
            if (document.getElementsByName('num[' + matches[1] + ']')[i].value != '')
                document.getElementsByName('num[' + matches[1] + ']')[i].value = '';
            else
                document.getElementsByName('num[' + matches[1] + ']')[i].value = '1';
        }
    });
    $('input[type=number]').change(function() {
        var value = $(this).val();
        var name = $(this).attr("name");
        var regExp = /\[(.*?)\]/;
        var matches = regExp.exec(name);
        var matches = regExp.exec(name);
        var elements = document.getElementsByName('num[' + matches[1] + ']');
        var l = elements.length;
        for (var i = 0; i < l; i++) {
            document.getElementsByName('num[' + matches[1] + ']')[i].value = value;
            if (document.getElementsByName('num[' + matches[1] + ']')[i].value == '')
                document.getElementsByName('ch[' + matches[1] + ']')[i].checked = false;
            else
                document.getElementsByName('ch[' + matches[1] + ']')[i].checked = true;
        }
    });
});

var myMap;
var myMap2;

// function init() {
//     myMap = new ymaps.Map("map", {
//         center: [55.74, 37.619899],
//         zoom: 9
//     });
//     myMap.controls.add('smallZoomControl');
//     var green = new ymaps.Polygon([
//         [
//             ["55.6223", "37.4445"],
//             ["55.624", "37.4401"],
//             ["55.6274", "37.4391"],
//             ["55.6243", "37.4262"],
//             ["55.6221", "37.4181"],
//             ["55.6171", "37.4231"],
//             ["55.6122", "37.4362"],
//             ["55.6155", "37.4408"],
//             ["55.6169", "37.4481"]
//         ],
//         [
//             ["55.6366", "37.432"],
//             ["55.6371", "37.4365"],
//             ["55.6367", "37.4376"],
//             ["55.6364", "37.4379"],
//             ["55.6362", "37.4383"],
//             ["55.6359", "37.4384"],
//             ["55.6354", "37.441"],
//             ["55.6347", "37.445"],
//             ["55.6341", "37.4459"],
//             ["55.6335", "37.4466"],
//             ["55.6324", "37.4459"],
//             ["55.6301", "37.4453"],
//             ["55.6287", "37.4415"],
//             ["55.6275", "37.4392"],
//             ["55.6285", "37.4361"],
//             ["55.6293", "37.4323"],
//             ["55.6322", "37.4316"]
//         ],
//         [
//             ["55.774", "37.8432"],
//             ["55.7719", "37.8431"],
//             ["55.7706", "37.8431"],
//             ["55.7696", "37.843"],
//             ["55.765", "37.8427"],
//             ["55.7626", "37.8426"],
//             ["55.7603", "37.8425"],
//             ["55.7556", "37.8422"],
//             ["55.7539", "37.8421"],
//             ["55.7524", "37.842"],
//             ["55.7508", "37.8419"],
//             ["55.7493", "37.8419"],
//             ["55.752", "37.8589"],
//             ["55.7552", "37.8763"],
//             ["55.7452", "37.8844"],
//             ["55.7395", "37.8761"],
//             ["55.7346", "37.8633"],
//             ["55.7307", "37.8611"],
//             ["55.7312", "37.849"],
//             ["55.731", "37.8433"],
//             ["55.7305", "37.8401"],
//             ["55.7261", "37.8396"],
//             ["55.7218", "37.8391"],
//             ["55.7205", "37.8389"],
//             ["55.7193", "37.8388"],
//             ["55.7169", "37.8385"],
//             ["55.7155", "37.8383"],
//             ["55.7149", "37.8382"],
//             ["55.7146", "37.8381"],
//             ["55.7144", "37.838"],
//             ["55.7134", "37.8377"],
//             ["55.7123", "37.837"],
//             ["55.7121", "37.8373"],
//             ["55.7113", "37.8419"],
//             ["55.7105", "37.8463"],
//             ["55.7087", "37.8515"],
//             ["55.7082", "37.8543"],
//             ["55.7079", "37.857"],
//             ["55.7079", "37.8589"],
//             ["55.708", "37.8608"],
//             ["55.7082", "37.864"],
//             ["55.7068", "37.8653"],
//             ["55.7051", "37.8646"],
//             ["55.7034", "37.864"],
//             ["55.699", "37.8573"],
//             ["55.6947", "37.8635"],
//             ["55.69", "37.8702"],
//             ["55.6867", "37.8759"],
//             ["55.6826", "37.8856"],
//             ["55.6788", "37.8932"],
//             ["55.6767", "37.8905"],
//             ["55.6703", "37.8893"],
//             ["55.6685", "37.8853"],
//             ["55.665", "37.8799"],
//             ["55.658", "37.8952"],
//             ["55.6568", "37.8937"],
//             ["55.6556", "37.8922"],
//             ["55.6545", "37.893"],
//             ["55.6535", "37.8938"],
//             ["55.6529", "37.8931"],
//             ["55.6527", "37.8927"],
//             ["55.6526", "37.8922"],
//             ["55.6523", "37.8911"],
//             ["55.6521", "37.8897"],
//             ["55.6519", "37.8884"],
//             ["55.6509", "37.89"],
//             ["55.6498", "37.8915"],
//             ["55.6492", "37.8929"],
//             ["55.6495", "37.8935"],
//             ["55.6495", "37.8944"],
//             ["55.6491", "37.8949"],
//             ["55.6487", "37.8954"],
//             ["55.6485", "37.8956"],
//             ["55.6482", "37.8958"],
//             ["55.6479", "37.896"],
//             ["55.6458", "37.8921"],
//             ["55.6437", "37.8882"],
//             ["55.642", "37.8851"],
//             ["55.6402", "37.882"],
//             ["55.6392", "37.8809"],
//             ["55.6382", "37.88"],
//             ["55.6373", "37.8777"],
//             ["55.6373", "37.8751"],
//             ["55.6382", "37.873"],
//             ["55.6391", "37.871"],
//             ["55.6394", "37.8668"],
//             ["55.6397", "37.8626"],
//             ["55.638", "37.8578"],
//             ["55.6363", "37.8529"],
//             ["55.6377", "37.8509"],
//             ["55.6367", "37.8483"],
//             ["55.6383", "37.8462"],
//             ["55.64", "37.8445"],
//             ["55.6413", "37.8439"],
//             ["55.6425", "37.8433"],
//             ["55.644", "37.8434"],
//             ["55.6443", "37.8432"],
//             ["55.6446", "37.843"],
//             ["55.6449", "37.8422"],
//             ["55.6453", "37.8412"],
//             ["55.6441", "37.8406"],
//             ["55.6452", "37.8376"],
//             ["55.6454", "37.8355"],
//             ["55.6452", "37.8342"],
//             ["55.6434", "37.8313"],
//             ["55.6439", "37.8303"],
//             ["55.6455", "37.8328"],
//             ["55.6457", "37.8309"],
//             ["55.6457", "37.83"],
//             ["55.6458", "37.8289"],
//             ["55.6452", "37.8277"],
//             ["55.6452", "37.8273"],
//             ["55.6452", "37.827"],
//             ["55.6453", "37.8266"],
//             ["55.6437", "37.8242"],
//             ["55.6406", "37.8194"],
//             ["55.6373", "37.8144"],
//             ["55.6352", "37.8112"],
//             ["55.6333", "37.8082"],
//             ["55.6294", "37.8021"],
//             ["55.6279", "37.7999"],
//             ["55.6272", "37.7989"],
//             ["55.6266", "37.7979"],
//             ["55.6259", "37.7968"],
//             ["55.6253", "37.7957"],
//             ["55.624", "37.7933"],
//             ["55.6224", "37.7905"],
//             ["55.6216", "37.789"],
//             ["55.6212", "37.7882"],
//             ["55.6208", "37.7875"],
//             ["55.6192", "37.7845"],
//             ["55.6177", "37.7817"],
//             ["55.616", "37.7787"],
//             ["55.6144", "37.7759"],
//             ["55.6114", "37.7703"],
//             ["55.6086", "37.7652"],
//             ["55.6056", "37.7596"],
//             ["55.6037", "37.7562"],
//             ["55.602", "37.7529"],
//             ["55.5999", "37.7481"],
//             ["55.5982", "37.7442"],
//             ["55.5969", "37.7409"],
//             ["55.5942", "37.7345"],
//             ["55.5918", "37.7291"],
//             ["55.5892", "37.7227"],
//             ["55.5881", "37.7202"],
//             ["55.587", "37.7174"],
//             ["55.584", "37.7093"],
//             ["55.5815", "37.7027"],
//             ["55.5791", "37.6962"],
//             ["55.5765", "37.6893"],
//             ["55.5751", "37.6855"],
//             ["55.5746", "37.6839"],
//             ["55.5741", "37.6824"],
//             ["55.5739", "37.6815"],
//             ["55.5736", "37.6806"],
//             ["55.5733", "37.6795"],
//             ["55.5729", "37.6774"],
//             ["55.5726", "37.6753"],
//             ["55.5723", "37.6723"],
//             ["55.5722", "37.6715"],
//             ["55.5721", "37.6707"],
//             ["55.5721", "37.669"],
//             ["55.5721", "37.6678"],
//             ["55.5721", "37.6665"],
//             ["55.5722", "37.6638"],
//             ["55.5725", "37.6587"],
//             ["55.5732", "37.6481"],
//             ["55.5736", "37.641"],
//             ["55.574", "37.6334"],
//             ["55.5745", "37.6255"],
//             ["55.575", "37.6173"],
//             ["55.5752", "37.6134"],
//             ["55.5673", "37.609"],
//             ["55.5625", "37.5937"],
//             ["55.556", "37.5878"],
//             ["55.5371", "37.5641"],
//             ["55.5317", "37.5499"],
//             ["55.5293", "37.5208"],
//             ["55.5256", "37.5159"],
//             ["55.5316", "37.5061"],
//             ["55.5474", "37.4957"],
//             ["55.556", "37.5252"],
//             ["55.5523", "37.5399"],
//             ["55.5516", "37.5427"],
//             ["55.5515", "37.5458"],
//             ["55.5527", "37.5495"],
//             ["55.5559", "37.5521"],
//             ["55.5599", "37.5536"],
//             ["55.5703", "37.5602"],
//             ["55.5765", "37.5658"],
//             ["55.5812", "37.5728"],
//             ["55.5821", "37.569"],
//             ["55.583", "37.5651"],
//             ["55.5848", "37.5576"],
//             ["55.5862", "37.5519"],
//             ["55.5875", "37.5464"],
//             ["55.5886", "37.5419"],
//             ["55.5896", "37.5375"],
//             ["55.5908", "37.5325"],
//             ["55.5921", "37.5274"],
//             ["55.5928", "37.5243"],
//             ["55.5936", "37.5213"],
//             ["55.5941", "37.5189"],
//             ["55.5948", "37.5164"],
//             ["55.5952", "37.5153"],
//             ["55.5956", "37.514"],
//             ["55.5964", "37.5118"],
//             ["55.597", "37.5105"],
//             ["55.5975", "37.5095"],
//             ["55.5987", "37.5074"],
//             ["55.5996", "37.506"],
//             ["55.6", "37.5054"],
//             ["55.6002", "37.5051"],
//             ["55.6005", "37.5048"],
//             ["55.6015", "37.5036"],
//             ["55.6025", "37.5025"],
//             ["55.6034", "37.5014"],
//             ["55.6043", "37.5003"],
//             ["55.6061", "37.4982"],
//             ["55.6098", "37.4939"],
//             ["55.6106", "37.493"],
//             ["55.6115", "37.4919"],
//             ["55.6135", "37.4896"],
//             ["55.6153", "37.4875"],
//             ["55.6172", "37.4852"],
//             ["55.6183", "37.484"],
//             ["55.6192", "37.4829"],
//             ["55.6195", "37.4826"],
//             ["55.6197", "37.4823"],
//             ["55.6203", "37.4817"],
//             ["55.6213", "37.4804"],
//             ["55.6224", "37.4793"],
//             ["55.6226", "37.4789"],
//             ["55.6229", "37.4786"],
//             ["55.623", "37.4785"],
//             ["55.6232", "37.4783"],
//             ["55.6233", "37.4782"],
//             ["55.6233", "37.4781"],
//             ["55.6235", "37.478"],
//             ["55.6256", "37.4755"],
//             ["55.6267", "37.4742"],
//             ["55.6278", "37.4728"],
//             ["55.6301", "37.4702"],
//             ["55.6307", "37.4695"],
//             ["55.631", "37.4691"],
//             ["55.6312", "37.4689"],
//             ["55.6313", "37.4688"],
//             ["55.6319", "37.468"],
//             ["55.6323", "37.4676"],
//             ["55.6325", "37.4674"],
//             ["55.6326", "37.4672"],
//             ["55.6339", "37.4657"],
//             ["55.6351", "37.4643"],
//             ["55.6405", "37.458"],
//             ["55.6416", "37.4567"],
//             ["55.6427", "37.4555"],
//             ["55.6447", "37.4531"],
//             ["55.6468", "37.4508"],
//             ["55.6477", "37.4496"],
//             ["55.6487", "37.4485"],
//             ["55.6516", "37.4451"],
//             ["55.6544", "37.4416"],
//             ["55.6571", "37.4384"],
//             ["55.6598", "37.4353"],
//             ["55.6611", "37.4339"],
//             ["55.6625", "37.4326"],
//             ["55.6639", "37.4314"],
//             ["55.6653", "37.4302"],
//             ["55.6707", "37.4262"],
//             ["55.6717", "37.4254"],
//             ["55.6729", "37.4245"],
//             ["55.6752", "37.4228"],
//             ["55.6798", "37.4194"],
//             ["55.6813", "37.4182"],
//             ["55.6821", "37.4176"],
//             ["55.683", "37.4171"],
//             ["55.6834", "37.4168"],
//             ["55.6838", "37.4166"],
//             ["55.6847", "37.4161"],
//             ["55.6856", "37.4158"],
//             ["55.6865", "37.4155"],
//             ["55.6877", "37.415"],
//             ["55.689", "37.4144"],
//             ["55.6901", "37.4137"],
//             ["55.6913", "37.4129"],
//             ["55.6923", "37.4119"],
//             ["55.6934", "37.4107"],
//             ["55.6939", "37.4101"],
//             ["55.6944", "37.4094"],
//             ["55.6955", "37.408"],
//             ["55.6963", "37.4068"],
//             ["55.6973", "37.4055"],
//             ["55.6992", "37.403"],
//             ["55.7009", "37.4007"],
//             ["55.7018", "37.3995"],
//             ["55.7022", "37.3989"],
//             ["55.7027", "37.3983"],
//             ["55.7032", "37.3976"],
//             ["55.7038", "37.3968"],
//             ["55.7048", "37.3953"],
//             ["55.7071", "37.3924"],
//             ["55.7083", "37.3906"],
//             ["55.7097", "37.3891"],
//             ["55.7109", "37.388"],
//             ["55.7119", "37.3873"],
//             ["55.7123", "37.3869"],
//             ["55.7129", "37.3866"],
//             ["55.7141", "37.3859"],
//             ["55.7153", "37.3853"],
//             ["55.7165", "37.3847"],
//             ["55.7177", "37.3841"],
//             ["55.7204", "37.3827"],
//             ["55.7231", "37.3813"],
//             ["55.7283", "37.3787"],
//             ["55.7315", "37.3771"],
//             ["55.7349", "37.3753"],
//             ["55.7393", "37.3731"],
//             ["55.742", "37.3717"],
//             ["55.7431", "37.3712"],
//             ["55.7444", "37.3706"],
//             ["55.7456", "37.3701"],
//             ["55.7468", "37.3698"],
//             ["55.7481", "37.3695"],
//             ["55.7495", "37.3693"],
//             ["55.75", "37.3692"],
//             ["55.7507", "37.3692"],
//             ["55.7512", "37.3692"],
//             ["55.7515", "37.3692"],
//             ["55.7519", "37.3692"],
//             ["55.7531", "37.3693"],
//             ["55.7543", "37.3693"],
//             ["55.7553", "37.3693"],
//             ["55.7564", "37.3693"],
//             ["55.7575", "37.3693"],
//             ["55.7586", "37.3694"],
//             ["55.7629", "37.3695"],
//             ["55.765", "37.3695"],
//             ["55.766", "37.3695"],
//             ["55.7671", "37.3696"],
//             ["55.7673", "37.3696"],
//             ["55.7676", "37.3696"],
//             ["55.7681", "37.3696"],
//             ["55.7692", "37.3697"],
//             ["55.7714", "37.3697"],
//             ["55.772", "37.3698"],
//             ["55.7726", "37.3698"],
//             ["55.7739", "37.3698"],
//             ["55.7751", "37.3698"],
//             ["55.7763", "37.3699"],
//             ["55.778", "37.3699"],
//             ["55.7788", "37.3699"],
//             ["55.7791", "37.3699"],
//             ["55.7797", "37.3699"],
//             ["55.7822", "37.37"],
//             ["55.7834", "37.3701"],
//             ["55.7846", "37.3704"],
//             ["55.7857", "37.3707"],
//             ["55.7863", "37.3709"],
//             ["55.787", "37.3712"],
//             ["55.7876", "37.3715"],
//             ["55.7882", "37.3719"],
//             ["55.7888", "37.3723"],
//             ["55.7895", "37.3728"],
//             ["55.7903", "37.3736"],
//             ["55.7913", "37.3745"],
//             ["55.7932", "37.3764"],
//             ["55.797", "37.38"],
//             ["55.798", "37.381"],
//             ["55.7991", "37.382"],
//             ["55.8011", "37.3839"],
//             ["55.8022", "37.3849"],
//             ["55.8027", "37.3853"],
//             ["55.8033", "37.3857"],
//             ["55.8045", "37.3865"],
//             ["55.8056", "37.3872"],
//             ["55.8063", "37.3876"],
//             ["55.8072", "37.388"],
//             ["55.8089", "37.3886"],
//             ["55.8122", "37.3897"],
//             ["55.8136", "37.3901"],
//             ["55.8147", "37.3905"],
//             ["55.8149", "37.3901"],
//             ["55.8153", "37.3819"],
//             ["55.8234", "37.3831"],
//             ["55.8267", "37.3789"],
//             ["55.8386", "37.3627"],
//             ["55.8401", "37.3588"],
//             ["55.8439", "37.3485"],
//             ["55.8453", "37.3326"],
//             ["55.8498", "37.3387"],
//             ["55.8648", "37.3392"],
//             ["55.8661", "37.3421"],
//             ["55.8599", "37.3554"],
//             ["55.8563", "37.3649"],
//             ["55.8491", "37.3728"],
//             ["55.8455", "37.3785"],
//             ["55.8439", "37.3818"],
//             ["55.8447", "37.383"],
//             ["55.845", "37.3829"],
//             ["55.8452", "37.3832"],
//             ["55.8444", "37.3847"],
//             ["55.8434", "37.383"],
//             ["55.8399", "37.3957"],
//             ["55.8411", "37.395"],
//             ["55.8424", "37.3941"],
//             ["55.8436", "37.3932"],
//             ["55.8451", "37.3924"],
//             ["55.8464", "37.3921"],
//             ["55.847", "37.3921"],
//             ["55.8473", "37.3921"],
//             ["55.8477", "37.3921"],
//             ["55.8482", "37.3922"],
//             ["55.849", "37.3925"],
//             ["55.8508", "37.3935"],
//             ["55.8557", "37.3961"],
//             ["55.857", "37.3968"],
//             ["55.8585", "37.3977"],
//             ["55.8596", "37.3982"],
//             ["55.8606", "37.3989"],
//             ["55.8629", "37.4008"],
//             ["55.8639", "37.4018"],
//             ["55.8644", "37.4024"],
//             ["55.8649", "37.403"],
//             ["55.8678", "37.4067"],
//             ["55.87", "37.4034"],
//             ["55.8712", "37.4054"],
//             ["55.8693", "37.4094"],
//             ["55.8696", "37.4099"],
//             ["55.8707", "37.412"],
//             ["55.8717", "37.4143"],
//             ["55.8724", "37.4159"],
//             ["55.873", "37.4175"],
//             ["55.8736", "37.4192"],
//             ["55.8747", "37.4227"],
//             ["55.8767", "37.4292"],
//             ["55.8777", "37.4324"],
//             ["55.8786", "37.4354"],
//             ["55.8799", "37.4395"],
//             ["55.8805", "37.4415"],
//             ["55.8811", "37.4436"],
//             ["55.8815", "37.4454"],
//             ["55.8818", "37.4472"],
//             ["55.8821", "37.4492"],
//             ["55.8823", "37.4511"],
//             ["55.8824", "37.4527"],
//             ["55.8824", "37.4542"],
//             ["55.8825", "37.4575"],
//             ["55.8826", "37.4622"],
//             ["55.8827", "37.4642"],
//             ["55.883", "37.4661"],
//             ["55.8831", "37.4668"],
//             ["55.8832", "37.4676"],
//             ["55.8834", "37.4684"],
//             ["55.8836", "37.4692"],
//             ["55.8841", "37.4713"],
//             ["55.8846", "37.4731"],
//             ["55.8861", "37.4793"],
//             ["55.8869", "37.4824"],
//             ["55.8877", "37.4856"],
//             ["55.8881", "37.487"],
//             ["55.8886", "37.4885"],
//             ["55.8898", "37.4918"],
//             ["55.8905", "37.4934"],
//             ["55.8913", "37.495"],
//             ["55.892", "37.4966"],
//             ["55.8927", "37.4982"],
//             ["55.8941", "37.5015"],
//             ["55.8954", "37.5043"],
//             ["55.8967", "37.5074"],
//             ["55.898", "37.5104"],
//             ["55.8993", "37.5133"],
//             ["55.9007", "37.5164"],
//             ["55.9022", "37.5198"],
//             ["55.9037", "37.5233"],
//             ["55.9044", "37.5251"],
//             ["55.9051", "37.5272"],
//             ["55.9055", "37.5288"],
//             ["55.9059", "37.5306"],
//             ["55.9063", "37.5325"],
//             ["55.9067", "37.5346"],
//             ["55.9071", "37.5386"],
//             ["55.9076", "37.543"],
//             ["55.908", "37.5469"],
//             ["55.9082", "37.5489"],
//             ["55.9084", "37.5509"],
//             ["55.9089", "37.5553"],
//             ["55.9094", "37.5596"],
//             ["55.9101", "37.5668"],
//             ["55.9105", "37.5706"],
//             ["55.9107", "37.5726"],
//             ["55.9108", "37.5748"],
//             ["55.9108", "37.5765"],
//             ["55.9109", "37.5777"],
//             ["55.9108", "37.579"],
//             ["55.9108", "37.5797"],
//             ["55.9107", "37.5808"],
//             ["55.9106", "37.583"],
//             ["55.9105", "37.5837"],
//             ["55.9103", "37.5847"],
//             ["55.91", "37.5867"],
//             ["55.9097", "37.5884"],
//             ["55.9093", "37.5901"],
//             ["55.9084", "37.5934"],
//             ["55.9074", "37.5969"],
//             ["55.9071", "37.598"],
//             ["55.9068", "37.5991"],
//             ["55.9054", "37.6039"],
//             ["55.9043", "37.608"],
//             ["55.9033", "37.6117"],
//             ["55.9024", "37.6154"],
//             ["55.9019", "37.6174"],
//             ["55.9015", "37.6193"],
//             ["55.9006", "37.6234"],
//             ["55.9002", "37.6254"],
//             ["55.9033", "37.6277"],
//             ["55.9035", "37.6285"],
//             ["55.9021", "37.6299"],
//             ["55.8993", "37.6301"],
//             ["55.8989", "37.6325"],
//             ["55.898", "37.6377"],
//             ["55.8973", "37.6427"],
//             ["55.897", "37.6449"],
//             ["55.8968", "37.6472"],
//             ["55.8965", "37.6495"],
//             ["55.8963", "37.6521"],
//             ["55.8958", "37.6572"],
//             ["55.8955", "37.6622"],
//             ["55.8952", "37.6673"],
//             ["55.8952", "37.6688"],
//             ["55.8951", "37.6707"],
//             ["55.895", "37.6746"],
//             ["55.8949", "37.6777"],
//             ["55.8948", "37.6815"],
//             ["55.8947", "37.6845"],
//             ["55.8946", "37.6876"],
//             ["55.8945", "37.6914"],
//             ["55.8944", "37.6937"],
//             ["55.8942", "37.6954"],
//             ["55.8941", "37.6972"],
//             ["55.8939", "37.6984"],
//             ["55.8936", "37.7003"],
//             ["55.8931", "37.7022"],
//             ["55.8926", "37.7039"],
//             ["55.8921", "37.7053"],
//             ["55.8916", "37.7068"],
//             ["55.8911", "37.7079"],
//             ["55.8902", "37.7099"],
//             ["55.8895", "37.7115"],
//             ["55.8881", "37.7143"],
//             ["55.8853", "37.7196"],
//             ["55.8834", "37.7234"],
//             ["55.8824", "37.7253"],
//             ["55.8814", "37.7273"],
//             ["55.8808", "37.7285"],
//             ["55.8803", "37.7296"],
//             ["55.8798", "37.7305"],
//             ["55.8794", "37.7314"],
//             ["55.8774", "37.7353"],
//             ["55.8765", "37.7371"],
//             ["55.8759", "37.7384"],
//             ["55.8743", "37.7414"],
//             ["55.8729", "37.7442"],
//             ["55.8714", "37.747"],
//             ["55.8707", "37.7485"],
//             ["55.8703", "37.7493"],
//             ["55.8699", "37.7501"],
//             ["55.8684", "37.753"],
//             ["55.8677", "37.7543"],
//             ["55.8673", "37.7551"],
//             ["55.8669", "37.7559"],
//             ["55.8654", "37.7588"],
//             ["55.8639", "37.7617"],
//             ["55.8631", "37.7631"],
//             ["55.8624", "37.7645"],
//             ["55.8616", "37.7661"],
//             ["55.8609", "37.7675"],
//             ["55.8593", "37.7706"],
//             ["55.8585", "37.7721"],
//             ["55.8578", "37.7735"],
//             ["55.8571", "37.7749"],
//             ["55.8564", "37.7763"],
//             ["55.8557", "37.7777"],
//             ["55.8553", "37.7783"],
//             ["55.8549", "37.7791"],
//             ["55.8545", "37.7799"],
//             ["55.8542", "37.7806"],
//             ["55.8534", "37.7821"],
//             ["55.8504", "37.7879"],
//             ["55.8501", "37.7885"],
//             ["55.8486", "37.7914"],
//             ["55.8477", "37.793"],
//             ["55.8469", "37.7947"],
//             ["55.8437", "37.8008"],
//             ["55.8423", "37.8035"],
//             ["55.8409", "37.8062"],
//             ["55.8382", "37.8115"],
//             ["55.8374", "37.813"],
//             ["55.8367", "37.8144"],
//             ["55.8353", "37.8172"],
//             ["55.8325", "37.8227"],
//             ["55.8319", "37.8236"],
//             ["55.8315", "37.8244"],
//             ["55.8306", "37.8262"],
//             ["55.8298", "37.8278"],
//             ["55.8293", "37.8287"],
//             ["55.8288", "37.8296"],
//             ["55.8277", "37.8313"],
//             ["55.8267", "37.8327"],
//             ["55.8256", "37.8338"],
//             ["55.8246", "37.8348"],
//             ["55.8237", "37.8355"],
//             ["55.8228", "37.8362"],
//             ["55.821", "37.8372"],
//             ["55.8201", "37.8375"],
//             ["55.8193", "37.8377"],
//             ["55.8181", "37.838"],
//             ["55.8155", "37.8384"],
//             ["55.8116", "37.8389"],
//             ["55.8098", "37.8391"],
//             ["55.8089", "37.8392"],
//             ["55.8069", "37.8394"],
//             ["55.8059", "37.8394"],
//             ["55.8048", "37.8394"],
//             ["55.8027", "37.8396"],
//             ["55.8004", "37.8399"],
//             ["55.7983", "37.8401"],
//             ["55.796", "37.8404"],
//             ["55.7938", "37.8406"],
//             ["55.7916", "37.8409"],
//             ["55.7894", "37.8411"],
//             ["55.7871", "37.8413"],
//             ["55.7849", "37.8416"],
//             ["55.7824", "37.8419"],
//             ["55.7801", "37.8422"],
//             ["55.7783", "37.8424"],
//             ["55.777", "37.8426"]
//         ]
//     ], {
//         hintContent: "Зона №1, «Москва»: 290₽"
//     }, {
//         fillColor: '#00800040',
//         strokeColor: '#008000',
//         strokeWidth: 2
//     });
//     myMap.geoObjects.add(green);
//     var orange = new ymaps.Polygon([
//         [
//             ["55.8014", "38.0076"],
//             ["55.7752", "37.8428"],
//             ["55.7732", "37.8429"],
//             ["55.7719", "37.843"],
//             ["55.7713", "37.8431"],
//             ["55.7706", "37.8431"],
//             ["55.7701", "37.843"],
//             ["55.765", "37.8427"],
//             ["55.7556", "37.8422"],
//             ["55.7539", "37.8421"],
//             ["55.7524", "37.842"],
//             ["55.7508", "37.8419"],
//             ["55.75", "37.8419"],
//             ["55.7493", "37.8419"],
//             ["55.752", "37.8589"],
//             ["55.7552", "37.8763"],
//             ["55.7452", "37.8844"],
//             ["55.7395", "37.8761"],
//             ["55.7346", "37.8633"],
//             ["55.7307", "37.8611"],
//             ["55.7312", "37.849"],
//             ["55.731", "37.8433"],
//             ["55.7305", "37.8401"],
//             ["55.7283", "37.8398"],
//             ["55.7261", "37.8396"],
//             ["55.7239", "37.8393"],
//             ["55.7218", "37.8391"],
//             ["55.7169", "37.8385"],
//             ["55.7155", "37.8383"],
//             ["55.7146", "37.8381"],
//             ["55.7134", "37.8377"],
//             ["55.7123", "37.837"],
//             ["55.7121", "37.8373"],
//             ["55.7105", "37.8463"],
//             ["55.7088", "37.8515"],
//             ["55.7082", "37.8543"],
//             ["55.7079", "37.857"],
//             ["55.708", "37.8608"],
//             ["55.7082", "37.864"],
//             ["55.7068", "37.8653"],
//             ["55.7034", "37.864"],
//             ["55.699", "37.8573"],
//             ["55.69", "37.8702"],
//             ["55.6867", "37.8759"],
//             ["55.6826", "37.8856"],
//             ["55.6788", "37.8932"],
//             ["55.6767", "37.8905"],
//             ["55.6703", "37.8893"],
//             ["55.6685", "37.8853"],
//             ["55.665", "37.8799"],
//             ["55.6633", "37.8837"],
//             ["55.658", "37.8952"],
//             ["55.6556", "37.8922"],
//             ["55.6535", "37.8938"],
//             ["55.6529", "37.8931"],
//             ["55.6526", "37.8922"],
//             ["55.6523", "37.8911"],
//             ["55.6519", "37.8884"],
//             ["55.6498", "37.8916"],
//             ["55.6492", "37.8929"],
//             ["55.6495", "37.8935"],
//             ["55.6495", "37.8944"],
//             ["55.6491", "37.8949"],
//             ["55.6485", "37.8956"],
//             ["55.6479", "37.896"],
//             ["55.6437", "37.8882"],
//             ["55.6402", "37.882"],
//             ["55.6382", "37.88"],
//             ["55.6373", "37.8778"],
//             ["55.6372", "37.8751"],
//             ["55.6391", "37.871"],
//             ["55.6397", "37.8626"],
//             ["55.6363", "37.8529"],
//             ["55.6377", "37.8509"],
//             ["55.6367", "37.8483"],
//             ["55.6383", "37.8462"],
//             ["55.64", "37.8445"],
//             ["55.6425", "37.8433"],
//             ["55.644", "37.8434"],
//             ["55.6446", "37.843"],
//             ["55.6453", "37.8412"],
//             ["55.6441", "37.8406"],
//             ["55.6452", "37.8376"],
//             ["55.6454", "37.8355"],
//             ["55.6452", "37.8342"],
//             ["55.6434", "37.8313"],
//             ["55.6439", "37.8303"],
//             ["55.6455", "37.8328"],
//             ["55.6458", "37.8289"],
//             ["55.6452", "37.8277"],
//             ["55.6452", "37.827"],
//             ["55.6453", "37.8266"],
//             ["55.6445", "37.8254"],
//             ["55.6437", "37.8242"],
//             ["55.6422", "37.8218"],
//             ["55.6412", "37.8203"],
//             ["55.6406", "37.8194"],
//             ["55.639", "37.8169"],
//             ["55.6383", "37.8158"],
//             ["55.6377", "37.8149"],
//             ["55.6352", "37.8112"],
//             ["55.6343", "37.8097"],
//             ["55.6337", "37.8088"],
//             ["55.6333", "37.8082"],
//             ["55.6322", "37.8065"],
//             ["55.6316", "37.8056"],
//             ["55.6313", "37.8052"],
//             ["55.6302", "37.8035"],
//             ["55.6294", "37.8021"],
//             ["55.629", "37.8016"],
//             ["55.6275", "37.7994"],
//             ["55.6272", "37.7989"],
//             ["55.6266", "37.7979"],
//             ["55.6259", "37.7967"],
//             ["55.6253", "37.7956"],
//             ["55.6246", "37.7945"],
//             ["55.624", "37.7933"],
//             ["55.6224", "37.7905"],
//             ["55.6216", "37.789"],
//             ["55.6212", "37.7882"],
//             ["55.6208", "37.7875"],
//             ["55.62", "37.786"],
//             ["55.6192", "37.7845"],
//             ["55.6185", "37.7831"],
//             ["55.6177", "37.7817"],
//             ["55.6168", "37.7802"],
//             ["55.6164", "37.7793"],
//             ["55.6152", "37.7773"],
//             ["55.6144", "37.7759"],
//             ["55.6129", "37.7731"],
//             ["55.6125", "37.7722"],
//             ["55.612", "37.7714"],
//             ["55.6103", "37.7683"],
//             ["55.6094", "37.7666"],
//             ["55.6086", "37.7652"],
//             ["55.6071", "37.7624"],
//             ["55.606", "37.7604"],
//             ["55.6056", "37.7596"],
//             ["55.6046", "37.7579"],
//             ["55.6037", "37.7562"],
//             ["55.6028", "37.7546"],
//             ["55.602", "37.7529"],
//             ["55.6009", "37.7505"],
//             ["55.5999", "37.7481"],
//             ["55.599", "37.7461"],
//             ["55.5982", "37.7442"],
//             ["55.5969", "37.7409"],
//             ["55.5955", "37.7377"],
//             ["55.5942", "37.7345"],
//             ["55.594", "37.7341"],
//             ["55.5937", "37.7334"],
//             ["55.5934", "37.7328"],
//             ["55.593", "37.7318"],
//             ["55.5929", "37.7315"],
//             ["55.5927", "37.7311"],
//             ["55.5924", "37.7304"],
//             ["55.5918", "37.7291"],
//             ["55.5905", "37.7259"],
//             ["55.5892", "37.7227"],
//             ["55.5886", "37.7214"],
//             ["55.5881", "37.7202"],
//             ["55.587", "37.7174"],
//             ["55.5863", "37.7154"],
//             ["55.5855", "37.7133"],
//             ["55.584", "37.7093"],
//             ["55.5828", "37.706"],
//             ["55.5815", "37.7027"],
//             ["55.5803", "37.6994"],
//             ["55.5791", "37.6962"],
//             ["55.5778", "37.6927"],
//             ["55.5765", "37.6893"],
//             ["55.5748", "37.6847"],
//             ["55.5746", "37.6839"],
//             ["55.5739", "37.6815"],
//             ["55.5733", "37.6795"],
//             ["55.5731", "37.6785"],
//             ["55.5731", "37.6782"],
//             ["55.5729", "37.6774"],
//             ["55.5726", "37.6753"],
//             ["55.5724", "37.6738"],
//             ["55.5723", "37.6723"],
//             ["55.5722", "37.6715"],
//             ["55.5721", "37.6707"],
//             ["55.5721", "37.6691"],
//             ["55.5721", "37.6678"],
//             ["55.5721", "37.6665"],
//             ["55.5722", "37.6638"],
//             ["55.5725", "37.6587"],
//             ["55.5727", "37.6562"],
//             ["55.5729", "37.6534"],
//             ["55.5732", "37.6481"],
//             ["55.5734", "37.6445"],
//             ["55.5736", "37.641"],
//             ["55.5738", "37.6372"],
//             ["55.574", "37.6334"],
//             ["55.5743", "37.6294"],
//             ["55.5745", "37.6255"],
//             ["55.5747", "37.6214"],
//             ["55.575", "37.6173"],
//             ["55.5752", "37.6134"],
//             ["55.5673", "37.609"],
//             ["55.5625", "37.5937"],
//             ["55.556", "37.5878"],
//             ["55.5371", "37.5641"],
//             ["55.5317", "37.5499"],
//             ["55.5293", "37.5208"],
//             ["55.5256", "37.5159"],
//             ["55.5316", "37.5061"],
//             ["55.5474", "37.4957"],
//             ["55.556", "37.5252"],
//             ["55.5523", "37.5399"],
//             ["55.5516", "37.5427"],
//             ["55.5515", "37.5458"],
//             ["55.5527", "37.5495"],
//             ["55.5559", "37.5521"],
//             ["55.5599", "37.5536"],
//             ["55.5703", "37.5602"],
//             ["55.5765", "37.5658"],
//             ["55.5812", "37.5728"],
//             ["55.5817", "37.5708"],
//             ["55.5821", "37.569"],
//             ["55.583", "37.5652"],
//             ["55.5848", "37.5576"],
//             ["55.5862", "37.552"],
//             ["55.5875", "37.5465"],
//             ["55.5886", "37.5419"],
//             ["55.5896", "37.5375"],
//             ["55.5908", "37.5325"],
//             ["55.5915", "37.5299"],
//             ["55.5921", "37.5274"],
//             ["55.5928", "37.5243"],
//             ["55.5932", "37.5228"],
//             ["55.5936", "37.5213"],
//             ["55.5939", "37.5201"],
//             ["55.5941", "37.5189"],
//             ["55.5945", "37.5176"],
//             ["55.5948", "37.5164"],
//             ["55.5954", "37.5147"],
//             ["55.596", "37.5129"],
//             ["55.5964", "37.5118"],
//             ["55.597", "37.5105"],
//             ["55.5975", "37.5095"],
//             ["55.5981", "37.5084"],
//             ["55.5987", "37.5073"],
//             ["55.5996", "37.506"],
//             ["55.6", "37.5054"],
//             ["55.6005", "37.5048"],
//             ["55.601", "37.5042"],
//             ["55.6015", "37.5037"],
//             ["55.6025", "37.5025"],
//             ["55.6034", "37.5014"],
//             ["55.6043", "37.5003"],
//             ["55.6052", "37.4993"],
//             ["55.6075", "37.4966"],
//             ["55.6087", "37.4953"],
//             ["55.6092", "37.4946"],
//             ["55.6095", "37.4943"],
//             ["55.6098", "37.4939"],
//             ["55.6106", "37.493"],
//             ["55.611", "37.4925"],
//             ["55.6126", "37.4907"],
//             ["55.6141", "37.4889"],
//             ["55.6149", "37.488"],
//             ["55.6156", "37.4871"],
//             ["55.6163", "37.4864"],
//             ["55.6167", "37.4858"],
//             ["55.6169", "37.4856"],
//             ["55.6172", "37.4852"],
//             ["55.6195", "37.4826"],
//             ["55.6197", "37.4823"],
//             ["55.62", "37.482"],
//             ["55.6203", "37.4817"],
//             ["55.6213", "37.4804"],
//             ["55.6235", "37.478"],
//             ["55.6245", "37.4767"],
//             ["55.6251", "37.4761"],
//             ["55.6253", "37.4758"],
//             ["55.6255", "37.4755"],
//             ["55.6278", "37.4729"],
//             ["55.6289", "37.4717"],
//             ["55.6294", "37.471"],
//             ["55.6297", "37.4707"],
//             ["55.63", "37.4704"],
//             ["55.6351", "37.4643"],
//             ["55.6378", "37.4612"],
//             ["55.6393", "37.4595"],
//             ["55.64", "37.4586"],
//             ["55.6403", "37.4582"],
//             ["55.6407", "37.4578"],
//             ["55.6487", "37.4485"],
//             ["55.6516", "37.4451"],
//             ["55.653", "37.4434"],
//             ["55.6538", "37.4424"],
//             ["55.6544", "37.4416"],
//             ["55.6564", "37.4393"],
//             ["55.6571", "37.4384"],
//             ["55.6585", "37.4368"],
//             ["55.6598", "37.4353"],
//             ["55.6605", "37.4346"],
//             ["55.6611", "37.4339"],
//             ["55.6618", "37.4333"],
//             ["55.6632", "37.432"],
//             ["55.6639", "37.4314"],
//             ["55.6653", "37.4302"],
//             ["55.668", "37.4282"],
//             ["55.6706", "37.4262"],
//             ["55.6752", "37.4228"],
//             ["55.6775", "37.4211"],
//             ["55.6786", "37.4202"],
//             ["55.6792", "37.4198"],
//             ["55.6798", "37.4194"],
//             ["55.6813", "37.4182"],
//             ["55.6821", "37.4176"],
//             ["55.683", "37.4171"],
//             ["55.6838", "37.4166"],
//             ["55.6847", "37.4161"],
//             ["55.6852", "37.4159"],
//             ["55.6856", "37.4158"],
//             ["55.6861", "37.4156"],
//             ["55.6865", "37.4155"],
//             ["55.6877", "37.415"],
//             ["55.6883", "37.4147"],
//             ["55.689", "37.4144"],
//             ["55.6895", "37.4141"],
//             ["55.6901", "37.4137"],
//             ["55.6907", "37.4133"],
//             ["55.6913", "37.4129"],
//             ["55.6923", "37.4119"],
//             ["55.6929", "37.4113"],
//             ["55.6934", "37.4107"],
//             ["55.6939", "37.4101"],
//             ["55.6944", "37.4094"],
//             ["55.6955", "37.408"],
//             ["55.6963", "37.4068"],
//             ["55.6973", "37.4055"],
//             ["55.6983", "37.4043"],
//             ["55.6992", "37.403"],
//             ["55.7009", "37.4007"],
//             ["55.7018", "37.3995"],
//             ["55.7022", "37.3989"],
//             ["55.7027", "37.3983"],
//             ["55.7032", "37.3976"],
//             ["55.7038", "37.3968"],
//             ["55.7048", "37.3953"],
//             ["55.7059", "37.3938"],
//             ["55.7097", "37.3891"],
//             ["55.7109", "37.388"],
//             ["55.7123", "37.3869"],
//             ["55.7141", "37.3859"],
//             ["55.7177", "37.3841"],
//             ["55.7283", "37.3787"],
//             ["55.7299", "37.3779"],
//             ["55.7315", "37.3771"],
//             ["55.7332", "37.3762"],
//             ["55.7349", "37.3753"],
//             ["55.7393", "37.3731"],
//             ["55.7431", "37.3712"],
//             ["55.7438", "37.3709"],
//             ["55.7444", "37.3706"],
//             ["55.7456", "37.3702"],
//             ["55.7468", "37.3698"],
//             ["55.7481", "37.3695"],
//             ["55.75", "37.3692"],
//             ["55.7519", "37.3693"],
//             ["55.7564", "37.3693"],
//             ["55.7607", "37.3694"],
//             ["55.7639", "37.3695"],
//             ["55.765", "37.3695"],
//             ["55.766", "37.3695"],
//             ["55.7671", "37.3696"],
//             ["55.7676", "37.3696"],
//             ["55.7681", "37.3696"],
//             ["55.7692", "37.3697"],
//             ["55.7714", "37.3697"],
//             ["55.7732", "37.3698"],
//             ["55.7751", "37.3698"],
//             ["55.7771", "37.3699"],
//             ["55.778", "37.3699"],
//             ["55.7784", "37.3699"],
//             ["55.7789", "37.3699"],
//             ["55.7797", "37.3699"],
//             ["55.7809", "37.37"],
//             ["55.7822", "37.37"],
//             ["55.7834", "37.3701"],
//             ["55.7846", "37.3704"],
//             ["55.7857", "37.3707"],
//             ["55.7863", "37.3709"],
//             ["55.787", "37.3712"],
//             ["55.7876", "37.3715"],
//             ["55.7882", "37.3719"],
//             ["55.7888", "37.3723"],
//             ["55.7895", "37.3728"],
//             ["55.7899", "37.3732"],
//             ["55.7903", "37.3736"],
//             ["55.7913", "37.3745"],
//             ["55.7923", "37.3755"],
//             ["55.7927", "37.3759"],
//             ["55.7932", "37.3764"],
//             ["55.797", "37.38"],
//             ["55.798", "37.3809"],
//             ["55.7991", "37.382"],
//             ["55.8011", "37.3839"],
//             ["55.8022", "37.3848"],
//             ["55.8033", "37.3857"],
//             ["55.8044", "37.3865"],
//             ["55.8056", "37.3872"],
//             ["55.8063", "37.3876"],
//             ["55.8072", "37.388"],
//             ["55.8089", "37.3886"],
//             ["55.8122", "37.3897"],
//             ["55.8136", "37.3901"],
//             ["55.8147", "37.3905"],
//             ["55.8148", "37.3903"],
//             ["55.8149", "37.3901"],
//             ["55.8153", "37.3819"],
//             ["55.8234", "37.3831"],
//             ["55.8267", "37.3789"],
//             ["55.8386", "37.3627"],
//             ["55.8401", "37.3588"],
//             ["55.8439", "37.3485"],
//             ["55.8453", "37.3326"],
//             ["55.8498", "37.3387"],
//             ["55.8648", "37.3392"],
//             ["55.8661", "37.3421"],
//             ["55.8599", "37.3554"],
//             ["55.8563", "37.3649"],
//             ["55.8491", "37.3728"],
//             ["55.8455", "37.3785"],
//             ["55.8439", "37.3818"],
//             ["55.8447", "37.383"],
//             ["55.845", "37.3829"],
//             ["55.8452", "37.3832"],
//             ["55.8444", "37.3847"],
//             ["55.8434", "37.383"],
//             ["55.8399", "37.3957"],
//             ["55.8405", "37.3953"],
//             ["55.8411", "37.395"],
//             ["55.8417", "37.3945"],
//             ["55.843", "37.3937"],
//             ["55.8436", "37.3932"],
//             ["55.8451", "37.3924"],
//             ["55.8464", "37.3921"],
//             ["55.8479", "37.3921"],
//             ["55.849", "37.3925"],
//             ["55.8508", "37.3935"],
//             ["55.8532", "37.3948"],
//             ["55.8557", "37.3961"],
//             ["55.8564", "37.3965"],
//             ["55.8585", "37.3977"],
//             ["55.8596", "37.3982"],
//             ["55.8606", "37.3989"],
//             ["55.8618", "37.3998"],
//             ["55.8629", "37.4008"],
//             ["55.8639", "37.4018"],
//             ["55.8649", "37.403"],
//             ["55.8674", "37.4063"],
//             ["55.8678", "37.4068"],
//             ["55.87", "37.4034"],
//             ["55.8712", "37.4054"],
//             ["55.8693", "37.4094"],
//             ["55.8707", "37.412"],
//             ["55.8717", "37.4143"],
//             ["55.8724", "37.4159"],
//             ["55.873", "37.4176"],
//             ["55.8736", "37.4192"],
//             ["55.8767", "37.4292"],
//             ["55.8805", "37.4415"],
//             ["55.8808", "37.4425"],
//             ["55.8809", "37.4428"],
//             ["55.8811", "37.4436"],
//             ["55.8815", "37.4454"],
//             ["55.8816", "37.4463"],
//             ["55.8818", "37.4472"],
//             ["55.8819", "37.4482"],
//             ["55.8821", "37.4492"],
//             ["55.8823", "37.4511"],
//             ["55.8824", "37.4519"],
//             ["55.8824", "37.4527"],
//             ["55.8824", "37.4542"],
//             ["55.8825", "37.4559"],
//             ["55.8825", "37.4575"],
//             ["55.8826", "37.4622"],
//             ["55.8827", "37.4642"],
//             ["55.8829", "37.4651"],
//             ["55.883", "37.4661"],
//             ["55.8831", "37.4668"],
//             ["55.8832", "37.4676"],
//             ["55.8834", "37.4684"],
//             ["55.8836", "37.4692"],
//             ["55.8838", "37.4702"],
//             ["55.8841", "37.4713"],
//             ["55.8843", "37.4722"],
//             ["55.8846", "37.4731"],
//             ["55.8853", "37.4762"],
//             ["55.8861", "37.4793"],
//             ["55.8865", "37.4809"],
//             ["55.8869", "37.4824"],
//             ["55.8877", "37.4856"],
//             ["55.8881", "37.487"],
//             ["55.8886", "37.4885"],
//             ["55.8892", "37.4902"],
//             ["55.8898", "37.4918"],
//             ["55.8913", "37.495"],
//             ["55.8927", "37.4982"],
//             ["55.8934", "37.4999"],
//             ["55.8941", "37.5015"],
//             ["55.8954", "37.5043"],
//             ["55.8967", "37.5074"],
//             ["55.898", "37.5104"],
//             ["55.8986", "37.5119"],
//             ["55.8993", "37.5133"],
//             ["55.9007", "37.5164"],
//             ["55.9022", "37.5198"],
//             ["55.9037", "37.5232"],
//             ["55.9044", "37.5251"],
//             ["55.9051", "37.5272"],
//             ["55.9055", "37.5288"],
//             ["55.9059", "37.5306"],
//             ["55.9063", "37.5325"],
//             ["55.9067", "37.5346"],
//             ["55.9071", "37.5386"],
//             ["55.9073", "37.5408"],
//             ["55.9076", "37.543"],
//             ["55.9084", "37.5509"],
//             ["55.9094", "37.5596"],
//             ["55.9101", "37.5668"],
//             ["55.9105", "37.5706"],
//             ["55.9107", "37.5726"],
//             ["55.9108", "37.5748"],
//             ["55.9109", "37.5777"],
//             ["55.9108", "37.5794"],
//             ["55.9108", "37.5807"],
//             ["55.9106", "37.583"],
//             ["55.9105", "37.5837"],
//             ["55.9104", "37.5842"],
//             ["55.9102", "37.5857"],
//             ["55.91", "37.5867"],
//             ["55.9097", "37.5884"],
//             ["55.9093", "37.5901"],
//             ["55.9084", "37.5934"],
//             ["55.9074", "37.5969"],
//             ["55.9068", "37.5991"],
//             ["55.9054", "37.6039"],
//             ["55.9043", "37.608"],
//             ["55.9033", "37.6117"],
//             ["55.9024", "37.6154"],
//             ["55.9019", "37.6174"],
//             ["55.9015", "37.6193"],
//             ["55.9006", "37.6234"],
//             ["55.9002", "37.6254"],
//             ["55.9033", "37.6277"],
//             ["55.9036", "37.6285"],
//             ["55.9021", "37.6299"],
//             ["55.8993", "37.6301"],
//             ["55.8989", "37.6325"],
//             ["55.898", "37.6377"],
//             ["55.8973", "37.6427"],
//             ["55.8967", "37.6472"],
//             ["55.8958", "37.6572"],
//             ["55.8952", "37.6673"],
//             ["55.8952", "37.6688"],
//             ["55.8951", "37.6707"],
//             ["55.895", "37.6746"],
//             ["55.8949", "37.6777"],
//             ["55.8948", "37.6815"],
//             ["55.8947", "37.6845"],
//             ["55.8946", "37.6876"],
//             ["55.8945", "37.6914"],
//             ["55.8944", "37.6937"],
//             ["55.8942", "37.6954"],
//             ["55.8941", "37.6972"],
//             ["55.8939", "37.6984"],
//             ["55.8937", "37.6993"],
//             ["55.8935", "37.7003"],
//             ["55.8933", "37.7012"],
//             ["55.8931", "37.7022"],
//             ["55.8926", "37.7039"],
//             ["55.8921", "37.7053"],
//             ["55.8918", "37.7061"],
//             ["55.8916", "37.7068"],
//             ["55.8913", "37.7074"],
//             ["55.8911", "37.7079"],
//             ["55.8902", "37.7099"],
//             ["55.8895", "37.7115"],
//             ["55.8881", "37.7143"],
//             ["55.8867", "37.717"],
//             ["55.8853", "37.7196"],
//             ["55.8834", "37.7234"],
//             ["55.8824", "37.7253"],
//             ["55.8814", "37.7273"],
//             ["55.8803", "37.7296"],
//             ["55.8798", "37.7305"],
//             ["55.8794", "37.7314"],
//             ["55.8784", "37.7334"],
//             ["55.8774", "37.7353"],
//             ["55.8759", "37.7384"],
//             ["55.8743", "37.7414"],
//             ["55.8729", "37.7442"],
//             ["55.8714", "37.747"],
//             ["55.8699", "37.7501"],
//             ["55.8684", "37.753"],
//             ["55.8624", "37.7645"],
//             ["55.8609", "37.7675"],
//             ["55.8593", "37.7706"],
//             ["55.8585", "37.7721"],
//             ["55.8582", "37.7728"],
//             ["55.8578", "37.7735"],
//             ["55.8574", "37.7742"],
//             ["55.8567", "37.7756"],
//             ["55.8564", "37.7763"],
//             ["55.8503", "37.788"],
//             ["55.8501", "37.7886"],
//             ["55.8437", "37.8008"],
//             ["55.8382", "37.8116"],
//             ["55.8325", "37.8227"],
//             ["55.8319", "37.8236"],
//             ["55.8315", "37.8244"],
//             ["55.8311", "37.8253"],
//             ["55.8298", "37.8278"],
//             ["55.8293", "37.8287"],
//             ["55.8288", "37.8296"],
//             ["55.8277", "37.8313"],
//             ["55.8267", "37.8327"],
//             ["55.8261", "37.8332"],
//             ["55.8251", "37.8343"],
//             ["55.8246", "37.8348"],
//             ["55.8237", "37.8355"],
//             ["55.8228", "37.8362"],
//             ["55.8219", "37.8367"],
//             ["55.821", "37.8372"],
//             ["55.8201", "37.8375"],
//             ["55.8193", "37.8377"],
//             ["55.8181", "37.838"],
//             ["55.8168", "37.8382"],
//             ["55.8155", "37.8384"],
//             ["55.8116", "37.8389"],
//             ["55.8098", "37.8391"],
//             ["55.8079", "37.8393"],
//             ["55.8069", "37.8394"],
//             ["55.8059", "37.8394"],
//             ["55.8048", "37.8394"],
//             ["55.8027", "37.8396"],
//             ["55.8004", "37.8399"],
//             ["55.7983", "37.8401"],
//             ["55.796", "37.8404"],
//             ["55.7949", "37.8405"],
//             ["55.7938", "37.8406"],
//             ["55.7894", "37.8411"],
//             ["55.7849", "37.8416"],
//             ["55.7824", "37.8419"],
//             ["55.7801", "37.8422"],
//             ["55.7752", "37.8427"],
//             ["55.8015", "38.0076"],
//             ["55.8149", "38.0034"],
//             ["55.8229", "37.998"],
//             ["55.837", "37.9877"],
//             ["55.848", "37.9753"],
//             ["55.8585", "37.9653"],
//             ["55.8645", "37.9585"],
//             ["55.889", "37.9374"],
//             ["55.8969", "37.9295"],
//             ["55.9147", "37.9099"],
//             ["55.9241", "37.9001"],
//             ["55.9329", "37.8856"],
//             ["55.9429", "37.86"],
//             ["55.946", "37.8507"],
//             ["55.9516", "37.828"],
//             ["55.956", "37.8107"],
//             ["55.9581", "37.8033"],
//             ["55.9624", "37.7822"],
//             ["55.9687", "37.7548"],
//             ["55.9704", "37.7464"],
//             ["55.9733", "37.7294"],
//             ["55.9742", "37.7182"],
//             ["55.9742", "37.7068"],
//             ["55.9755", "37.694"],
//             ["55.9765", "37.6809"],
//             ["55.9773", "37.6744"],
//             ["55.9781", "37.6673"],
//             ["55.9799", "37.6571"],
//             ["55.9805", "37.6512"],
//             ["55.9812", "37.6441"],
//             ["55.9815", "37.6398"],
//             ["55.9819", "37.6347"],
//             ["55.9822", "37.6313"],
//             ["55.9824", "37.6231"],
//             ["55.9821", "37.6117"],
//             ["55.9819", "37.6047"],
//             ["55.9814", "37.5963"],
//             ["55.9812", "37.5881"],
//             ["55.9809", "37.5806"],
//             ["55.9801", "37.5747"],
//             ["55.9793", "37.5704"],
//             ["55.9787", "37.5665"],
//             ["55.978", "37.563"],
//             ["55.9775", "37.5582"],
//             ["55.9769", "37.5501"],
//             ["55.9767", "37.5459"],
//             ["55.9764", "37.5287"],
//             ["55.9747", "37.5105"],
//             ["55.9728", "37.493"],
//             ["55.9717", "37.4819"],
//             ["55.9712", "37.4743"],
//             ["55.9704", "37.4683"],
//             ["55.9669", "37.4525"],
//             ["55.9663", "37.4483"],
//             ["55.9653", "37.4404"],
//             ["55.9548", "37.4032"],
//             ["55.951", "37.3876"],
//             ["55.948", "37.3761"],
//             ["55.9434", "37.3593"],
//             ["55.94", "37.345"],
//             ["55.9386", "37.3391"],
//             ["55.9353", "37.3271"],
//             ["55.9322", "37.3175"],
//             ["55.9302", "37.3074"],
//             ["55.9262", "37.2986"],
//             ["55.9213", "37.2873"],
//             ["55.9194", "37.2829"],
//             ["55.9154", "37.275"],
//             ["55.913", "37.2713"],
//             ["55.9069", "37.2619"],
//             ["55.9035", "37.2579"],
//             ["55.9004", "37.2525"],
//             ["55.893", "37.2465"],
//             ["55.8805", "37.2367"],
//             ["55.8679", "37.2288"],
//             ["55.8612", "37.2251"],
//             ["55.8488", "37.2207"],
//             ["55.8286", "37.2164"],
//             ["55.8076", "37.2135"],
//             ["55.7976", "37.2119"],
//             ["55.7865", "37.2086"],
//             ["55.7728", "37.2088"],
//             ["55.7581", "37.2098"],
//             ["55.7433", "37.2074"],
//             ["55.7312", "37.2076"],
//             ["55.7213", "37.2101"],
//             ["55.705", "37.2126"],
//             ["55.6897", "37.217"],
//             ["55.6702", "37.2275"],
//             ["55.6617", "37.2346"],
//             ["55.6482", "37.2482"],
//             ["55.6413", "37.257"],
//             ["55.6245", "37.2731"],
//             ["55.6154", "37.2836"],
//             ["55.598", "37.3085"],
//             ["55.5837", "37.3223"],
//             ["55.5693", "37.3373"],
//             ["55.5575", "37.3482"],
//             ["55.5456", "37.3628"],
//             ["55.5392", "37.3721"],
//             ["55.5332", "37.3814"],
//             ["55.5285", "37.3901"],
//             ["55.5181", "37.4128"],
//             ["55.5112", "37.43"],
//             ["55.5052", "37.4464"],
//             ["55.5002", "37.4643"],
//             ["55.4966", "37.4828"],
//             ["55.4936", "37.5048"],
//             ["55.4918", "37.5285"],
//             ["55.4899", "37.5555"],
//             ["55.4891", "37.5877"],
//             ["55.4882", "37.6225"],
//             ["55.4885", "37.6421"],
//             ["55.4892", "37.6594"],
//             ["55.4906", "37.6789"],
//             ["55.492", "37.6949"],
//             ["55.4936", "37.7048"],
//             ["55.4943", "37.7108"],
//             ["55.4961", "37.7218"],
//             ["55.497", "37.7277"],
//             ["55.498", "37.7341"],
//             ["55.5", "37.7406"],
//             ["55.504", "37.7519"],
//             ["55.509", "37.7633"],
//             ["55.5113", "37.7697"],
//             ["55.5137", "37.7755"],
//             ["55.5184", "37.7867"],
//             ["55.5226", "37.797"],
//             ["55.5269", "37.8078"],
//             ["55.5324", "37.8202"],
//             ["55.5376", "37.8341"],
//             ["55.5409", "37.8411"],
//             ["55.5464", "37.8514"],
//             ["55.5496", "37.8593"],
//             ["55.5537", "37.866"],
//             ["55.5572", "37.8743"],
//             ["55.5592", "37.8787"],
//             ["55.5625", "37.8856"],
//             ["55.5654", "37.8916"],
//             ["55.5691", "37.8986"],
//             ["55.5717", "37.9045"],
//             ["55.5759", "37.9132"],
//             ["55.5801", "37.9204"],
//             ["55.5866", "37.9328"],
//             ["55.5952", "37.944"],
//             ["55.6037", "37.9544"],
//             ["55.6093", "37.9614"],
//             ["55.6191", "37.9746"],
//             ["55.6283", "37.9835"],
//             ["55.6394", "37.993"],
//             ["55.6468", "37.9992"],
//             ["55.6503", "38"],
//             ["55.6566", "38.0036"],
//             ["55.6643", "38.006"],
//             ["55.6698", "38.0082"],
//             ["55.6782", "38.0086"],
//             ["55.6907", "38.0085"],
//             ["55.6996", "38.0112"],
//             ["55.7094", "38.0122"],
//             ["55.7152", "38.013"],
//             ["55.7209", "38.0139"],
//             ["55.7329", "38.0143"],
//             ["55.7417", "38.0145"],
//             ["55.7466", "38.0149"],
//             ["55.756", "38.0147"],
//             ["55.7662", "38.0135"],
//             ["55.776", "38.0119"],
//             ["55.7873", "38.0105"],
//             ["55.7915", "38.0095"]
//         ]
//     ], {
//         hintContent: "Зона №2, «Подмосковье»: 490₽"
//     }, {
//         fillColor: '#FFFF0040',
//         strokeColor: '#FFFF00',
//         strokeWidth: 2
//     });
//     myMap.geoObjects.add(orange);
//     var red = new ymaps.Polygon([
//         [
//             ["56.047", "37.4591"],
//             ["55.9653", "37.4404"],
//             ["55.9658", "37.4445"],
//             ["55.9668", "37.4525"],
//             ["55.9686", "37.4605"],
//             ["55.9704", "37.4685"],
//             ["55.9711", "37.4741"],
//             ["55.9728", "37.493"],
//             ["55.9747", "37.5104"],
//             ["55.9764", "37.5285"],
//             ["55.9766", "37.5373"],
//             ["55.9767", "37.546"],
//             ["55.9769", "37.5501"],
//             ["55.9772", "37.5542"],
//             ["55.9773", "37.5556"],
//             ["55.9775", "37.5582"],
//             ["55.978", "37.563"],
//             ["55.9787", "37.5665"],
//             ["55.9793", "37.5704"],
//             ["55.9801", "37.5747"],
//             ["55.9804", "37.5776"],
//             ["55.9809", "37.5806"],
//             ["55.9812", "37.5881"],
//             ["55.9814", "37.5963"],
//             ["55.9819", "37.6047"],
//             ["55.9821", "37.6116"],
//             ["55.9823", "37.6174"],
//             ["55.9824", "37.6231"],
//             ["55.9822", "37.6314"],
//             ["55.9818", "37.6347"],
//             ["55.9812", "37.6441"],
//             ["55.9799", "37.6572"],
//             ["55.979", "37.6622"],
//             ["55.9781", "37.6673"],
//             ["55.9773", "37.6744"],
//             ["55.9765", "37.681"],
//             ["55.976", "37.6875"],
//             ["55.9755", "37.694"],
//             ["55.9749", "37.7004"],
//             ["55.9742", "37.7068"],
//             ["55.9742", "37.7182"],
//             ["55.9738", "37.7239"],
//             ["55.9733", "37.7294"],
//             ["55.9719", "37.7379"],
//             ["55.9704", "37.7464"],
//             ["55.9696", "37.7506"],
//             ["55.9656", "37.7686"],
//             ["55.9624", "37.7822"],
//             ["55.961", "37.7886"],
//             ["55.9602", "37.7928"],
//             ["55.958", "37.8033"],
//             ["55.9571", "37.8068"],
//             ["55.956", "37.8107"],
//             ["55.9537", "37.8194"],
//             ["55.9516", "37.828"],
//             ["55.9488", "37.8394"],
//             ["55.9459", "37.8508"],
//             ["55.9444", "37.8553"],
//             ["55.9428", "37.86"],
//             ["55.9395", "37.8687"],
//             ["55.9362", "37.8772"],
//             ["55.9329", "37.8856"],
//             ["55.9285", "37.8928"],
//             ["55.9241", "37.9001"],
//             ["55.9168", "37.9078"],
//             ["55.9147", "37.9099"],
//             ["55.9058", "37.9197"],
//             ["55.8968", "37.9295"],
//             ["55.8891", "37.9373"],
//             ["55.8768", "37.9478"],
//             ["55.8673", "37.9559"],
//             ["55.8645", "37.9586"],
//             ["55.8585", "37.9654"],
//             ["55.8533", "37.9703"],
//             ["55.848", "37.9753"],
//             ["55.8425", "37.9815"],
//             ["55.837", "37.9877"],
//             ["55.83", "37.9929"],
//             ["55.8229", "37.998"],
//             ["55.8189", "38.0007"],
//             ["55.8149", "38.0034"],
//             ["55.8082", "38.0055"],
//             ["55.8014", "38.0076"],
//             ["55.7965", "38.0086"],
//             ["55.7915", "38.0095"],
//             ["55.7894", "38.01"],
//             ["55.7873", "38.0105"],
//             ["55.7817", "38.0112"],
//             ["55.776", "38.0119"],
//             ["55.7711", "38.0127"],
//             ["55.7662", "38.0135"],
//             ["55.756", "38.0147"],
//             ["55.7513", "38.0148"],
//             ["55.7466", "38.0149"],
//             ["55.7418", "38.0145"],
//             ["55.7373", "38.0144"],
//             ["55.7329", "38.0144"],
//             ["55.7209", "38.0139"],
//             ["55.7152", "38.0131"],
//             ["55.7123", "38.0126"],
//             ["55.7094", "38.0122"],
//             ["55.7045", "38.0117"],
//             ["55.6996", "38.0112"],
//             ["55.6952", "38.0098"],
//             ["55.6907", "38.0085"],
//             ["55.6844", "38.0086"],
//             ["55.6782", "38.0086"],
//             ["55.674", "38.0084"],
//             ["55.6698", "38.0082"],
//             ["55.6643", "38.006"],
//             ["55.6604", "38.0049"],
//             ["55.6567", "38.0034"],
//             ["55.6504", "38.0003"],
//             ["55.6466", "37.9991"],
//             ["55.6429", "37.9961"],
//             ["55.6395", "37.9929"],
//             ["55.6282", "37.9836"],
//             ["55.6189", "37.9744"],
//             ["55.6093", "37.9616"],
//             ["55.6036", "37.9546"],
//             ["55.5951", "37.9443"],
//             ["55.5908", "37.9385"],
//             ["55.5865", "37.9326"],
//             ["55.5832", "37.9265"],
//             ["55.5801", "37.9207"],
//             ["55.5758", "37.9132"],
//             ["55.5691", "37.8986"],
//             ["55.5653", "37.8916"],
//             ["55.5626", "37.8854"],
//             ["55.558", "37.8764"],
//             ["55.5554", "37.87"],
//             ["55.5537", "37.8661"],
//             ["55.5496", "37.8593"],
//             ["55.548", "37.8554"],
//             ["55.5464", "37.8513"],
//             ["55.5409", "37.8412"],
//             ["55.539", "37.8371"],
//             ["55.5376", "37.8336"],
//             ["55.535", "37.8272"],
//             ["55.5324", "37.8202"],
//             ["55.5269", "37.8078"],
//             ["55.5247", "37.8022"],
//             ["55.5205", "37.7919"],
//             ["55.5184", "37.7867"],
//             ["55.516", "37.7811"],
//             ["55.5125", "37.7726"],
//             ["55.5113", "37.7697"],
//             ["55.509", "37.7634"],
//             ["55.504", "37.7519"],
//             ["55.5", "37.7406"],
//             ["55.498", "37.7342"],
//             ["55.497", "37.7278"],
//             ["55.4961", "37.7219"],
//             ["55.4951", "37.7163"],
//             ["55.4943", "37.7108"],
//             ["55.4936", "37.7048"],
//             ["55.4928", "37.6999"],
//             ["55.492", "37.695"],
//             ["55.4905", "37.6789"],
//             ["55.4899", "37.6692"],
//             ["55.4892", "37.6598"],
//             ["55.4888", "37.6509"],
//             ["55.4885", "37.6421"],
//             ["55.4883", "37.6323"],
//             ["55.4882", "37.6225"],
//             ["55.4887", "37.6052"],
//             ["55.4891", "37.5877"],
//             ["55.4899", "37.5556"],
//             ["55.4918", "37.5285"],
//             ["55.4936", "37.5049"],
//             ["55.4951", "37.4938"],
//             ["55.4966", "37.4828"],
//             ["55.4984", "37.4735"],
//             ["55.5002", "37.4643"],
//             ["55.5027", "37.4553"],
//             ["55.5052", "37.4464"],
//             ["55.5112", "37.43"],
//             ["55.5139", "37.4233"],
//             ["55.5181", "37.4128"],
//             ["55.5233", "37.4015"],
//             ["55.5285", "37.3901"],
//             ["55.5308", "37.3857"],
//             ["55.5332", "37.3814"],
//             ["55.5346", "37.3789"],
//             ["55.5364", "37.3763"],
//             ["55.5392", "37.372"],
//             ["55.5456", "37.3628"],
//             ["55.5516", "37.3555"],
//             ["55.5575", "37.3482"],
//             ["55.5693", "37.3373"],
//             ["55.5765", "37.3298"],
//             ["55.5837", "37.3223"],
//             ["55.5909", "37.3154"],
//             ["55.598", "37.3085"],
//             ["55.6066", "37.2961"],
//             ["55.6154", "37.2836"],
//             ["55.62", "37.2783"],
//             ["55.6222", "37.2757"],
//             ["55.6245", "37.2731"],
//             ["55.6277", "37.27"],
//             ["55.631", "37.2669"],
//             ["55.6377", "37.2604"],
//             ["55.6413", "37.257"],
//             ["55.6447", "37.2526"],
//             ["55.6482", "37.2482"],
//             ["55.6549", "37.2415"],
//             ["55.6566", "37.2397"],
//             ["55.6617", "37.2346"],
//             ["55.6659", "37.2311"],
//             ["55.6702", "37.2275"],
//             ["55.6799", "37.2223"],
//             ["55.6898", "37.2169"],
//             ["55.705", "37.2126"],
//             ["55.71", "37.2117"],
//             ["55.713", "37.2114"],
//             ["55.7213", "37.2101"],
//             ["55.7312", "37.2075"],
//             ["55.7433", "37.2075"],
//             ["55.758", "37.2097"],
//             ["55.7727", "37.2087"],
//             ["55.7808", "37.2087"],
//             ["55.7865", "37.2086"],
//             ["55.7975", "37.212"],
//             ["55.8182", "37.2148"],
//             ["55.8388", "37.2185"],
//             ["55.8489", "37.2209"],
//             ["55.8612", "37.2251"],
//             ["55.8742", "37.2327"],
//             ["55.8805", "37.2368"],
//             ["55.8868", "37.2415"],
//             ["55.8931", "37.2464"],
//             ["55.8947", "37.2479"],
//             ["55.8969", "37.2496"],
//             ["55.9004", "37.2525"],
//             ["55.9035", "37.2579"],
//             ["55.9051", "37.2595"],
//             ["55.9099", "37.2664"],
//             ["55.9155", "37.275"],
//             ["55.9193", "37.2828"],
//             ["55.9262", "37.2986"],
//             ["55.9302", "37.3072"],
//             ["55.9323", "37.3174"],
//             ["55.9338", "37.3223"],
//             ["55.9353", "37.3271"],
//             ["55.937", "37.3331"],
//             ["55.94", "37.3451"],
//             ["55.9418", "37.3522"],
//             ["55.9433", "37.359"],
//             ["55.9457", "37.3679"],
//             ["55.948", "37.3762"],
//             ["55.951", "37.3877"],
//             ["55.9529", "37.3954"],
//             ["55.9548", "37.4033"],
//             ["55.9653", "37.4404"],
//             ["56.0465", "37.4592"],
//             ["56.0276", "37.3369"],
//             ["55.9998", "37.2454"],
//             ["55.9572", "37.1482"],
//             ["55.913", "37.099"],
//             ["55.847", "37.059"],
//             ["55.8018", "37.0521"],
//             ["55.7452", "37.0491"],
//             ["55.718", "37.0467"],
//             ["55.6901", "37.0526"],
//             ["55.6532", "37.0665"],
//             ["55.635", "37.0744"],
//             ["55.6216", "37.0823"],
//             ["55.608", "37.0937"],
//             ["55.5939", "37.1035"],
//             ["55.5767", "37.1177"],
//             ["55.551", "37.1435"],
//             ["55.5206", "37.1772"],
//             ["55.5069", "37.193"],
//             ["55.4905", "37.2171"],
//             ["55.4755", "37.2429"],
//             ["55.4573", "37.2735"],
//             ["55.4439", "37.2965"],
//             ["55.4354", "37.3191"],
//             ["55.4274", "37.3468"],
//             ["55.4209", "37.381"],
//             ["55.4176", "37.4104"],
//             ["55.4097", "37.4869"],
//             ["55.4069", "37.5716"],
//             ["55.4057", "37.6509"],
//             ["55.4087", "37.7056"],
//             ["55.4156", "37.7741"],
//             ["55.4247", "37.8257"],
//             ["55.4333", "37.8533"],
//             ["55.4472", "37.8936"],
//             ["55.4609", "37.9267"],
//             ["55.4716", "37.9474"],
//             ["55.4824", "37.9715"],
//             ["55.5107", "38.0255"],
//             ["55.5622", "38.0935"],
//             ["55.5984", "38.1357"],
//             ["55.6469", "38.1628"],
//             ["55.691", "38.1758"],
//             ["55.7374", "38.1819"],
//             ["55.806", "38.1681"],
//             ["55.8722", "38.1289"],
//             ["55.9076", "38.0925"],
//             ["55.9874", "37.9976"],
//             ["56.0238", "37.9235"],
//             ["56.0372", "37.8549"],
//             ["56.0467", "37.7493"],
//             ["56.0524", "37.6115"]
//         ]
//     ], {
//         hintContent: "Зона №3, «Область»: 890₽"
//     }, {
//         fillColor: '#FF000040',
//         strokeColor: '#FF0000',
//         strokeWidth: 2
//     });
//     myMap.geoObjects.add(red);
// };
window.addEventListener('load', function() {
    var e = document.getElementsByTagName('div');
    for (var k = 0; k < e.length; k++) {
        if (e[k].className.indexOf('share') != -1) {
            if (e[k].getAttribute('data-url') != -1) var u = e[k].getAttribute('data-url');
            if (e[k].getAttribute('data-title') != -1) var t = e[k].getAttribute('data-title');
            if (e[k].getAttribute('data-image') != -1) var i = e[k].getAttribute('data-image');
            if (e[k].getAttribute('data-description') != -1) var d = e[k].getAttribute('data-description');
            if (e[k].getAttribute('data-path') != -1) var f = e[k].getAttribute('data-path');
            if (e[k].getAttribute('data-icons-file') != -1) var fn = e[k].getAttribute('data-icons-file');
            if (!f) {
                function path(name) {
                    var sc = document.getElementsByTagName('script'),
                        sr = new RegExp('^(.*/|)(' + name + ')([#?]|$)');
                    for (var p = 0, scL = sc.length; p < scL; p++) {
                        var m = String(sc[p].src).match(sr);
                        if (m) {
                            if (m[1].match(/^((https?|file)\:\/{2,}|\w:[\/\\])/)) return m[1];
                            if (m[1].indexOf("/") == 0) return m[1];
                            b = document.getElementsByTagName('base');
                            if (b[0] && b[0].href) return b[0].href + m[1];
                            else return document.location.pathname.match(/(.*[\/\\])/)[0] + m[1];
                        }
                    }
                    return null;
                }
                f = path('js/share.js');
            }
            if (!u) u = document.location;
            if (!t) t = document.title;
            if (!fn) fn = 'images/icons.png';

            function desc() {
                var meta = document.getElementsByTagName('meta');
                for (var m = 0; m < meta.length; m++) {
                    if (meta[m].name.toLowerCase() == 'description') {
                        return meta[m].content;
                    }
                }
                return '';
            }
            if (!d) d = desc();
            u = encodeURIComponent(u);
            t = encodeURIComponent(t);
            t = t.replace(/\'/g, '%27');
            i = encodeURIComponent(i);
            d = encodeURIComponent(d);
            d = d.replace(/\'/g, '%27');
            var fbQuery = 'u=' + u;
            if (i != 'null' && i != '') fbQuery = 's=100&p[url]=' + u + '&p[title]=' + t + '&p[summary]=' + d + '&p[images][0]=' + i;
            var vkImage = '';
            if (i != 'null' && i != '') vkImage = '&image=' + i;
            var s = new Array('"#" data-count="vk" onclick="window.open(\'//vk.com/share.php?url=' + u + '&title=' + t + vkImage + '&description=' + d + '\', \'_blank\', \'scrollbars=0, resizable=1, menubar=0, left=100, top=100, width=550, height=440, toolbar=0, status=0\');return false" title="Поделиться В Контакте"', '"#" data-count="fb" onclick="window.open(\'//www.facebook.com/sharer.php?m2w&' + fbQuery + '\', \'_blank\', \'scrollbars=0, resizable=1, menubar=0, left=100, top=100, width=550, height=440, toolbar=0, status=0\');return false" title="Поделиться в Facebook"', '"#" data-count="twi" onclick="window.open(\'//twitter.com/intent/tweet?text=' + t + '&url=' + u + '\', \'_blank\', \'scrollbars=0, resizable=1, menubar=0, left=100, top=100, width=550, height=440, toolbar=0, status=0\');return false" title="Добавить в Twitter"', '"#" data-count="odkl" onclick="window.open(\'//ok.ru/dk?st.cmd=addShare&st._surl=' + u + '&title=' + t + '\', \'_blank\', \'scrollbars=0, resizable=1, menubar=0, left=100, top=100, width=550, height=440, toolbar=0, status=0\');return false" title="Добавить в Одноклассники"', '"#" data-count="gplus" onclick="window.open(\'//plus.google.com/share?url=' + u + '\', \'_blank\', \'scrollbars=0, resizable=1, menubar=0, left=100, top=100, width=550, height=440, toolbar=0, status=0\');return false" title="Поделиться в Google+"', '"#" data-count="mail" onclick="window.open(\'//connect.mail.ru/share?url=' + u + '&title=' + t + '&description=' + d + '&imageurl=' + i + '\', \'_blank\', \'scrollbars=0, resizable=1, menubar=0, left=100, top=100, width=550, height=440, toolbar=0, status=0\');return false" title="Поделиться в Моем Мире@Mail.Ru"');
            var l = '';
            for (j = 0; j < s.length; j++) l += '<a rel="nofollow" style="display:inline-block;vertical-align:bottom;width:32px;height:32px;margin:0 6px 6px 0;padding:0;outline:none;background:url(' + fn + ') -' + 32 * j + 'px 0 no-repeat" href=' + s[j] + ' target="_blank"></a>';
            e[k].innerHTML = '<span id="share">' + l + '</span>';
        }
    };
}, false);