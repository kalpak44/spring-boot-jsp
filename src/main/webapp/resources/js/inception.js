!function (global) {
    var ym = {
        project: {preload: [], namespace: "ymi", jsonpPrefix: "", loadLimit: 500},
        ns: {},
        env: {},
        envCallbacks: []
    };
    if ("undefined" == typeof Object)return void window.location.reload();
    !function () {
        var e = {exports: {}}, t = e.exports;
        !function (n) {
            var r, i = {NOT_RESOLVED: "NOT_RESOLVED", IN_RESOLVING: "IN_RESOLVING", RESOLVED: "RESOLVED"},
                a = function () {
                    var e = {trackCircularDependencies: !0, allowMultipleDeclarations: !0}, t = {}, h = !1, f = [],
                        m = function (e, n, a) {
                            a || (a = n, n = []);
                            var s = t[e];
                            s || (s = t[e] = {name: e, decl: r}), s.decl = {
                                name: e,
                                prev: s.decl,
                                fn: a,
                                state: i.NOT_RESOLVED,
                                deps: n,
                                dependents: [],
                                exports: r
                            }
                        }, g = function (e, t, r) {
                            "string" == typeof e && (e = [e]), h || (h = !0, p(E)), f.push({
                                deps: e, cb: function (e, i) {
                                    i ? (r || s)(i) : t.apply(n, e)
                                }
                            })
                        }, v = function (e) {
                            var n = t[e];
                            return n ? i[n.decl.state] : "NOT_DEFINED"
                        }, y = function (e) {
                            var n = t[e];
                            return n ? n.decl.deps : null
                        }, _ = function (e) {
                            return !!t[e]
                        }, b = function (t) {
                            for (var n in t)t.hasOwnProperty(n) && (e[n] = t[n])
                        }, E = function () {
                            h = !1, k()
                        }, k = function () {
                            var e, t = f, n = 0;
                            for (f = []; e = t[n++];)w(null, e.deps, [], e.cb)
                        }, w = function (e, n, r, i) {
                            var a = n.length;
                            a || i([]);
                            for (var s, u, l = [], c = function (e, t) {
                                if (t)return void i(null, t);
                                if (!--a) {
                                    for (var n, r = [], s = 0; n = l[s++];)r.push(n.exports);
                                    i(r)
                                }
                            }, d = 0, p = a; d < p;) {
                                if (s = n[d++], "string" == typeof s) {
                                    if (!t[s])return void i(null, o(s, e));
                                    u = t[s].decl
                                } else u = s;
                                l.push(u), x(u, r, c)
                            }
                        }, x = function (t, r, a) {
                            if (t.state === i.RESOLVED)return void a(t.exports);
                            if (t.state === i.IN_RESOLVING)return void(e.trackCircularDependencies && d(t, r) ? a(null, u(t, r)) : t.dependents.push(a));
                            if (t.dependents.push(a), t.prev && !e.allowMultipleDeclarations)return void C(t, c(t));
                            e.trackCircularDependencies && (r = r.slice()).push(t);
                            var s = !1, o = t.prev ? t.deps.concat([t.prev]) : t.deps;
                            t.state = i.IN_RESOLVING, w(t, o, r, function (e, r) {
                                return r ? void C(t, r) : (e.unshift(function (e, n) {
                                    return s ? void a(null, l(t)) : (s = !0, void(n ? C(t, n) : M(t, e)))
                                }), void t.fn.apply({name: t.name, deps: t.deps, global: n}, e))
                            })
                        }, M = function (e, t) {
                            e.exports = t, e.state = i.RESOLVED;
                            for (var n, a = 0; n = e.dependents[a++];)n(t);
                            e.dependents = r
                        }, C = function (e, t) {
                            e.state = i.NOT_RESOLVED;
                            for (var n, r = 0; n = e.dependents[r++];)n(null, t);
                            e.dependents = []
                        };
                    return {
                        create: a,
                        define: m,
                        require: g,
                        getState: v,
                        getDependencies: y,
                        isDefined: _,
                        setOptions: b,
                        flush: E,
                        nextTick: p
                    }
                }, s = function (e) {
                    p(function () {
                        throw e
                    })
                }, o = function (e, t) {
                    return Error(t ? 'Module "' + t.name + '": can\'t resolve dependence "' + e + '"' : 'Required module "' + e + "\" can't be resolved")
                }, u = function (e, t) {
                    for (var n, r = [], i = 0; n = t[i++];)r.push(n.name);
                    return r.push(e.name), Error('Circular dependence has been detected: "' + r.join(" -> ") + '"')
                }, l = function (e) {
                    return Error('Declaration of module "' + e.name + '" has already been provided')
                }, c = function (e) {
                    return Error('Multiple declarations of module "' + e.name + '" have been detected')
                }, d = function (e, t) {
                    for (var n, r = 0; n = t[r++];)if (e === n)return !0;
                    return !1
                }, p = function () {
                    var e = [], t = function (t) {
                        return 1 === e.push(t)
                    }, r = function () {
                        var t = e, n = 0, r = e.length;
                        for (e = []; n < r;)t[n++]()
                    };
                    if ("object" == typeof process && process.nextTick)return function (e) {
                        t(e) && process.nextTick(r)
                    };
                    if (n.setImmediate)return function (e) {
                        t(e) && n.setImmediate(r)
                    };
                    if (n.postMessage && !n.opera) {
                        var i = !0;
                        if (n.attachEvent) {
                            var a = function () {
                                i = !1
                            };
                            n.attachEvent("onmessage", a), n.postMessage("__checkAsync", "*"), n.detachEvent("onmessage", a)
                        }
                        if (i) {
                            var s = "__modules" + +new Date, o = function (e) {
                                e.data === s && (e.stopPropagation && e.stopPropagation(), r())
                            };
                            return n.addEventListener ? n.addEventListener("message", o, !0) : n.attachEvent("onmessage", o), function (e) {
                                t(e) && n.postMessage(s, "*")
                            }
                        }
                    }
                    var u = n.document;
                    if ("onreadystatechange" in u.createElement("script")) {
                        var l = u.getElementsByTagName("head")[0], c = function () {
                            var e = u.createElement("script");
                            e.onreadystatechange = function () {
                                e.parentNode.removeChild(e), e = e.onreadystatechange = null, r()
                            }, l.appendChild(e)
                        };
                        return function (e) {
                            t(e) && c()
                        }
                    }
                    return function (e) {
                        t(e) && setTimeout(r, 0)
                    }
                }();
            "object" == typeof t ? e.exports = a() : n.modules = a()
        }(this), ym.modules = e.exports
    }(), ym.modules.setOptions({
        trackCircularDependencies: !0,
        allowMultipleDeclarations: !1
    }), ym.ns.modules = ym.modules, function () {
        ym.env.browser = ENV.browser, ym.env.hosts = ENV.hosts, ym.env.lang = ENV.lang.lang, ym.env.languageCode = ENV.lang.languageCode, ym.env.countryCode = ENV.lang.countryCode, ym.env.userKey = ENV.userKey, ym.env.server = {params: {}};
        var e = location.search.match(/[\?&]api_version=([\d\.]+?)(?:&|$)/),
            t = location.search.match(/[\?&]counter_prefix=([\w_-]+?)(?:&|$)/),
            n = location.search.match(/[\?&]mode=([\w]+?)(?:&|$)/);
        ym.env.version = e && e[1], ym.env.server.params.counter_prefix = t && t[1], ym.env.debug = n && "debug" == n[1]
    }(), function () {
        var e, t, n = {exports: {}};
        n.exports;
        !function (r) {
            var i, a = function () {
                var e = [], t = function (t) {
                    return 1 === e.push(t)
                }, n = function () {
                    var t = e, n = 0, r = e.length;
                    for (e = []; n < r;)t[n++]()
                };
                if ("function" == typeof setImmediate)return function (e) {
                    t(e) && setImmediate(n)
                };
                if ("object" == typeof process && process.nextTick)return function (e) {
                    t(e) && process.nextTick(n)
                };
                if (r.postMessage) {
                    var i = !0;
                    if (r.attachEvent) {
                        var a = function () {
                            i = !1
                        };
                        r.attachEvent("onmessage", a), r.postMessage("__checkAsync", "*"), r.detachEvent("onmessage", a)
                    }
                    if (i) {
                        var s = "__promise" + +new Date, o = function (e) {
                            e.data === s && (e.stopPropagation && e.stopPropagation(), n())
                        };
                        return r.addEventListener ? r.addEventListener("message", o, !0) : r.attachEvent("onmessage", o), function (e) {
                            t(e) && r.postMessage(s, "*")
                        }
                    }
                }
                var u = r.document;
                if ("onreadystatechange" in u.createElement("script")) {
                    var l = function () {
                        var e = u.createElement("script");
                        e.onreadystatechange = function () {
                            e.parentNode.removeChild(e), e = e.onreadystatechange = null, n()
                        }, (u.documentElement || u.body).appendChild(e)
                    };
                    return function (e) {
                        t(e) && l()
                    }
                }
                return function (e) {
                    t(e) && setTimeout(n, 0)
                }
            }(), s = function (e, t, n) {
                if (E.debug) n ? e.call(n) : e(); else try {
                    n ? e.call(n) : e()
                } catch (r) {
                    return n ? t.call(n, r) : t(r), !1
                }
                return !0
            }, o = function (e) {
                a(function () {
                    throw e
                })
            }, u = function (e) {
                return "function" == typeof e
            }, l = function (e) {
                return null !== e && "object" == typeof e
            }, c = Object.prototype.toString, d = Array.isArray || function (e) {
                    return "[object Array]" === c.call(e)
                }, p = function (e) {
                for (var t = [], n = 0, r = e.length; n < r;)t.push(n++);
                return t
            }, h = Object.keys || function (e) {
                    var t = [];
                    for (var n in e)e.hasOwnProperty(n) && t.push(n);
                    return t
                }, f = function (e) {
                var t = function (t) {
                    this.name = e, this.message = t
                };
                return t.prototype = new Error, t
            }, m = function (e, t) {
                return function (n) {
                    e.call(this, n, t)
                }
            }, g = function () {
                this._promise = new y
            };
            g.prototype = {
                promise: function () {
                    return this._promise
                }, resolve: function (e) {
                    this._promise.isResolved() || this._promise._resolve(e)
                }, reject: function (e) {
                    this._promise.isResolved() || (E.isPromise(e) ? (e = e.then(function (e) {
                        var t = E.defer();
                        return t.reject(e), t.promise()
                    }), this._promise._resolve(e)) : this._promise._reject(e))
                }, notify: function (e) {
                    this._promise.isResolved() || this._promise._notify(e)
                }
            };
            var v = {PENDING: 0, RESOLVED: 1, FULFILLED: 2, REJECTED: 3}, y = function (e) {
                if (this._value = i, this._status = v.PENDING, this._fulfilledCallbacks = [], this._rejectedCallbacks = [], this._progressCallbacks = [], e) {
                    var t = this, n = e.length;
                    e(function (e) {
                        t.isResolved() || t._resolve(e)
                    }, n > 1 ? function (e) {
                        t.isResolved() || t._reject(e)
                    } : i, n > 2 ? function (e) {
                        t.isResolved() || t._notify(e)
                    } : i)
                }
            };
            y.prototype = {
                valueOf: function () {
                    return this._value
                }, isResolved: function () {
                    return this._status !== v.PENDING
                }, isFulfilled: function () {
                    return this._status === v.FULFILLED
                }, isRejected: function () {
                    return this._status === v.REJECTED
                }, then: function (e, t, n, r) {
                    var i = new g;
                    return this._addCallbacks(i, e, t, n, r), i.promise()
                }, "catch": function (e, t) {
                    return this.then(i, e, t)
                }, fail: function (e, t) {
                    return this.then(i, e, t)
                }, always: function (e, t) {
                    var n = this, r = function () {
                        return e.call(this, n)
                    };
                    return this.then(r, r, t)
                }, progress: function (e, t) {
                    return this.then(i, i, e, t)
                }, spread: function (e, t, n) {
                    return this.then(function (t) {
                        return e.apply(this, t)
                    }, t, n)
                }, done: function (e, t, n, r) {
                    this.then(e, t, n, r).fail(o)
                }, delay: function (e) {
                    var t, n = this.then(function (n) {
                        var r = new g;
                        return t = setTimeout(function () {
                            r.resolve(n)
                        }, e), r.promise()
                    });
                    return n.always(function () {
                        clearTimeout(t)
                    }), n
                }, timeout: function (e) {
                    var t = new g, n = setTimeout(function () {
                        t.reject(new E.TimedOutError("timed out"))
                    }, e);
                    return this.then(function (e) {
                        t.resolve(e)
                    }, function (e) {
                        t.reject(e)
                    }), t.promise().always(function () {
                        clearTimeout(n)
                    }), t.promise()
                }, _vow: !0, _resolve: function (e) {
                    if (!(this._status > v.RESOLVED)) {
                        if (e === this)return void this._reject(TypeError("Can't resolve promise with itself"));
                        if (this._status = v.RESOLVED, e && e._vow)return void(e.isFulfilled() ? this._fulfill(e.valueOf()) : e.isRejected() ? this._reject(e.valueOf()) : e.then(this._fulfill, this._reject, this._notify, this));
                        if (l(e) || u(e)) {
                            var t, n = s(function () {
                                t = e.then
                            }, function (e) {
                                this._reject(e)
                            }, this);
                            if (!n)return;
                            if (u(t)) {
                                var r = this, i = !1;
                                return void s(function () {
                                    t.call(e, function (e) {
                                        i || (i = !0, r._resolve(e))
                                    }, function (e) {
                                        i || (i = !0, r._reject(e))
                                    }, function (e) {
                                        r._notify(e)
                                    })
                                }, function (e) {
                                    i || this._reject(e)
                                }, this)
                            }
                        }
                        this._fulfill(e)
                    }
                }, _fulfill: function (e) {
                    this._status > v.RESOLVED || (this._status = v.FULFILLED, this._value = e, this._callCallbacks(this._fulfilledCallbacks, e), this._fulfilledCallbacks = this._rejectedCallbacks = this._progressCallbacks = i)
                }, _reject: function (e) {
                    this._status > v.RESOLVED || (this._status = v.REJECTED, this._value = e, this._callCallbacks(this._rejectedCallbacks, e), this._fulfilledCallbacks = this._rejectedCallbacks = this._progressCallbacks = i)
                }, _notify: function (e) {
                    this._callCallbacks(this._progressCallbacks, e)
                }, _addCallbacks: function (e, t, n, r, a) {
                    n && !u(n) ? (a = n, n = i) : r && !u(r) && (a = r, r = i);
                    var s;
                    this.isRejected() || (s = {
                        defer: e,
                        fn: u(t) ? t : i,
                        ctx: a
                    }, this.isFulfilled() ? this._callCallbacks([s], this._value) : this._fulfilledCallbacks.push(s)), this.isFulfilled() || (s = {
                        defer: e,
                        fn: n,
                        ctx: a
                    }, this.isRejected() ? this._callCallbacks([s], this._value) : this._rejectedCallbacks.push(s)), this._status <= v.RESOLVED && this._progressCallbacks.push({
                        defer: e,
                        fn: r,
                        ctx: a
                    })
                }, _callCallbacks: function (e, t) {
                    var n = e.length;
                    if (n) {
                        var r = this.isResolved(), i = this.isFulfilled();
                        a(function () {
                            for (var a, o, u, l = 0; l < n;)if (a = e[l++], o = a.defer, u = a.fn) {
                                var c, d = a.ctx, p = s(function () {
                                    c = d ? u.call(d, t) : u(t)
                                }, function (e) {
                                    o.reject(e)
                                });
                                if (!p)continue;
                                r ? o.resolve(c) : o.notify(c)
                            } else r ? i ? o.resolve(t) : o.reject(t) : o.notify(t)
                        })
                    }
                }
            };
            var _ = {
                cast: function (e) {
                    return E.cast(e)
                }, all: function (e) {
                    return E.all(e)
                }, race: function (e) {
                    return E.anyResolved(e)
                }, resolve: function (e) {
                    return E.resolve(e)
                }, reject: function (e) {
                    return E.reject(e)
                }
            };
            for (var b in _)_.hasOwnProperty(b) && (y[b] = _[b]);
            var E = {
                debug: !1, Deferred: g, Promise: y, defer: function () {
                    return new g
                }, when: function (e, t, n, r, i) {
                    return E.cast(e).then(t, n, r, i)
                }, fail: function (e, t, n) {
                    return E.when(e, i, t, n)
                }, always: function (e, t, n) {
                    return E.when(e).always(t, n)
                }, progress: function (e, t, n) {
                    return E.when(e).progress(t, n)
                }, spread: function (e, t, n, r) {
                    return E.when(e).spread(t, n, r)
                }, done: function (e, t, n, r, i) {
                    E.when(e).done(t, n, r, i)
                }, isPromise: function (e) {
                    return l(e) && u(e.then)
                }, cast: function (e) {
                    return E.isPromise(e) ? e : E.resolve(e)
                }, valueOf: function (e) {
                    return e && u(e.valueOf) ? e.valueOf() : e
                }, isFulfilled: function (e) {
                    return !e || !u(e.isFulfilled) || e.isFulfilled()
                }, isRejected: function (e) {
                    return !(!e || !u(e.isRejected)) && e.isRejected()
                }, isResolved: function (e) {
                    return !e || !u(e.isResolved) || e.isResolved()
                }, resolve: function (e) {
                    var t = E.defer();
                    return t.resolve(e), t.promise()
                }, fulfill: function (e) {
                    var t = E.defer(), n = t.promise();
                    return t.resolve(e), n.isFulfilled() ? n : n.then(null, function (e) {
                        return e
                    })
                }, reject: function (e) {
                    var t = E.defer();
                    return t.reject(e), t.promise()
                }, invoke: function (e, t) {
                    var n, i, a = Math.max(arguments.length - 1, 0);
                    if (a) {
                        n = Array(a);
                        for (var o = 0; o < a;)n[o++] = arguments[o]
                    }
                    return s(function () {
                        i = E.resolve(n ? e.apply(r, n) : e.call(r))
                    }, function (e) {
                        i = E.reject(e)
                    }), i
                }, all: function (e) {
                    var t = new g, n = d(e), r = n ? p(e) : h(e), i = r.length, a = n ? [] : {};
                    if (!i)return t.resolve(a), t.promise();
                    var s = i;
                    return E._forEach(e, function (e, n) {
                        a[r[n]] = e, --s || t.resolve(a)
                    }, t.reject, t.notify, t, r), t.promise()
                }, allResolved: function (e) {
                    var t = new g, n = d(e), r = n ? p(e) : h(e), i = r.length, a = n ? [] : {};
                    if (!i)return t.resolve(a), t.promise();
                    var s = function () {
                        --i || t.resolve(e)
                    };
                    return E._forEach(e, s, s, t.notify, t, r), t.promise()
                }, allPatiently: function (e) {
                    return E.allResolved(e).then(function () {
                        var t, n, r, i, a = d(e), s = a ? p(e) : h(e), o = s.length, u = 0;
                        if (!o)return a ? [] : {};
                        for (; u < o;)r = s[u++], i = e[r], E.isRejected(i) ? (t || (t = a ? [] : {}), a ? t.push(i.valueOf()) : t[r] = i.valueOf()) : t || ((n || (n = a ? [] : {}))[r] = E.valueOf(i));
                        return t ? E.reject(t) : n
                    })
                }, any: function (e) {
                    var t = new g, n = e.length;
                    if (!n)return t.reject(Error()), t.promise();
                    var r, i = 0;
                    return E._forEach(e, t.resolve, function (e) {
                        i || (r = e), ++i === n && t.reject(r)
                    }, t.notify, t), t.promise()
                }, anyResolved: function (e) {
                    var t = new g, n = e.length;
                    return n ? (E._forEach(e, t.resolve, t.reject, t.notify, t), t.promise()) : (t.reject(Error()), t.promise())
                }, delay: function (e, t) {
                    return E.resolve(e).delay(t)
                }, timeout: function (e, t) {
                    return E.resolve(e).timeout(t)
                }, _forEach: function (e, t, n, r, i, a) {
                    for (var s = a ? a.length : e.length, o = 0; o < s;)E.when(e[a ? a[o] : o], m(t, o), n, r, i), ++o
                }, TimedOutError: f("TimedOut")
            }, k = !0;
            "object" == typeof n && "object" == typeof n.exports && (n.exports = E, k = !1), "object" == typeof t && (t.define("vow", function (e) {
                e(E)
            }), k = !1), "function" == typeof e && (e(function (e, t, n) {
                n.exports = E
            }), k = !1), k && (r.vow = E)
        }(this), ym.vow = n.exports
    }(), ym.modules.define("vow", [], function (e) {
        e(ym.vow)
    }), ym.ns.vow = ym.vow;
    var _backup_modules = this.modules;
    !function (e, t, n) {
        function r(e) {
            this.entry = e
        }

        function i() {
            this._fallbacks = [], this._retrieversData = {}
        }

        var a, s = 10, o = ym.vow, u = Array.prototype.slice, l = {}, c = {}, d = function (e, t) {
            return new Error('The key "' + t + '" isn\'t declared in "' + e + '" storage.')
        }, p = function (e) {
            return new Error('The dynamic depend "' + e + '" not found.')
        }, h = function (e) {
            return new Error("Undefined module `" + e + "` with no matching fallback.")
        };
        a = {
            fallbacks: new i, define: function (e, n, r, i) {
                var s, o, u, l = this;
                if ("function" == typeof n && "function" != typeof r) r = n, i = r, n = []; else if ("object" == typeof e) {
                    var d = e;
                    e = d.name, n = d.depends, r = d.declaration, i = d.context, u = d.dynamicDepends, s = d.storage, o = d.key
                }
                if (c.hasOwnProperty(e) || (c[e] = {name: e}), "function" == typeof n && (n = n.call({name: e}, ym)), c[e].callback = r, c[e].context = i, s && o) {
                    if ("string" != typeof o)for (var p = 0,
                                                      h = o.length; p < h; p++)this._createKeyStorageRef(e, o[p], s); else this._createKeyStorageRef(e, o, s);
                    c[e].key = o, c[e].storage = s
                }
                u && (c[e].dynamicDepends = u);
                var f = a._createPatchedCallback(e);
                if (null != n) {
                    for (var m = [], p = 0, h = n.length; p < h; p++)m[p] = this._processModuleName(n[p]);
                    m = this.fallbacks.addRetrievers(m), this.nextTick(function () {
                        l.fallbacks.removeRetrievers(t.getDependencies(e))
                    }), t.define(e, m, f)
                } else t.define(e, f);
                return this
            }, require: function (r, i, s, l, c) {
                var d = o.defer(), p = d.promise(), h = n;
                if (3 == arguments.length && "function" != typeof s) l = s, s = null; else if (!r.hasOwnProperty("length") && "object" == typeof r) {
                    var f = r;
                    r = f.modules, i = f.successCallback, s = f.errorCallback, l = f.context, f.hasOwnProperty("data") && (h = f.data)
                }
                r = "string" != typeof r && r.hasOwnProperty("length") ? r : [r];
                var m = r.length, g = this._processModuleList(r, h);
                return r = g.list, ym.env.debug && !c && this.watchResolving(r), g.error ? d.reject(g.error) : t.require(r, function () {
                    var t = u.call(arguments, arguments.length - m);
                    d.resolve(t), i && i.apply(l || e, t)
                }, function (e) {
                    c ? d.reject(e) : a.fallbacks.retrieve(r).then(function () {
                        d.resolve(a.require(r, i, s, l, !0))
                    }).fail(function (e) {
                        d.reject(e)
                    })
                }), s && !c && p.fail(function (t) {
                    s.call(l || e, t)
                }), p
            }, defineSync: function (e, t) {
                var n, r;
                if ("object" == typeof e) {
                    var i = e;
                    t = i.module, n = i.storage, r = i.key, e = i.name
                }
                if (a.isDefined(e)) {
                    var s = c[e];
                    s.name = e, s.module = t, s.callback = function (e) {
                        e(t)
                    }, s.context = null
                } else c[e] = {name: e, module: t}, a.define(e, function (e) {
                    e(t)
                });
                r && n && (c[e].key = r, c[e].storage = n, this._createKeyStorageRef(e, r, n))
            }, requireSync: function (e, t) {
                var n = this.getDefinition(e), r = null;
                return n && (r = n.getModuleSync.apply(n, u.call(arguments, 1))), r
            }, providePackage: function (e) {
                var t = this, n = Array.prototype.slice.call(arguments, 1);
                a.require(["system.mergeImports"]).spread(function (r) {
                    e(r.joinImports(t.name, {}, t.deps, n))
                })
            }, getDefinition: function (e) {
                var t = null;
                return e = this._processModuleName(e), c.hasOwnProperty(e) && (t = new r(c[e])), t
            }, getState: function (e) {
                return t.getState(this._processModuleName(e))
            }, isDefined: function (e) {
                return t.isDefined(this._processModuleName(e))
            }, setOptions: function (e) {
                return t.setOptions(e)
            }, flush: function () {
                return t.flush()
            }, nextTick: function (e) {
                return t.nextTick(e)
            }, watchResolving: function (e) {
                if ("object" == typeof console && "function" == typeof console.warn) {
                    var t = this;
                    "undefined" == typeof this._failCounter && (this._failCounter = 0), setTimeout(function () {
                        0 == t._failCounter && setTimeout(function () {
                            t._failCounter = 0
                        }, 150);
                        for (var n = 0, r = e.length; n < r; n++)if ("RESOLVED" != t.getState(e[n])) {
                            if (t._failCounter++, 5 == t._failCounter) setTimeout(function () {
                                console.warn("Timeout: Totally " + t._failCounter + " modules were required but not resolved within " + s + " sec.")
                            }, 100); else if (t._failCounter > 5)continue;
                            console.warn("Timeout: Module `" + e[n] + "` was required but is still " + t.getState(e[n]) + " within " + s + " sec.")
                        }
                    }, 1e3 * s)
                }
            }, _createPatchedCallback: function (e) {
                var t = this;
                return function () {
                    var n = c[e], r = u.call(arguments, 0), i = n.callback, s = n.context;
                    ym.env.debug && t.watchResolving([e]), r[0] = a._patchProvideFunction(r[0], e), i && i.apply(s || this, r)
                }
            }, _processModuleList: function (e, n, r) {
                for (var i = {list: []}, a = 0, s = e.length; a < s; a++) {
                    var o = this._processModuleName(e[a]);
                    if (!o) {
                        i.error = d(e[a].storage, e[a].key);
                        break
                    }
                    if ("undefined" != typeof n) {
                        var u = t.getDependencies(o), l = c[o];
                        if (u) {
                            var p = this._processModuleList(u, n, !0);
                            if (p.error) {
                                i.error = p.error;
                                break
                            }
                            i.list = i.list.concat(p.list)
                        }
                        if (l && l.dynamicDepends) {
                            var h = [];
                            for (var f in l.dynamicDepends) {
                                var m = l.dynamicDepends[f](n);
                                this._isDepend(m) && h.push(m)
                            }
                            var p = this._processModuleList(h, n);
                            if (p.error) {
                                i.error = p.error;
                                break
                            }
                            i.list = i.list.concat(p.list)
                        }
                        this.fallbacks.isRetriever(o) && this.fallbacks.addRetrieverData(o, n)
                    }
                    r || i.list.push(o)
                }
                return i
            }, _createKeyStorageRef: function (e, t, n) {
                l.hasOwnProperty(n) || (l[n] = {}), l[n][t] = e
            }, _processModuleName: function (e) {
                if ("string" != typeof e) {
                    var t = e.storage;
                    e = l.hasOwnProperty(t) ? l[t][e.key] || null : null
                }
                return e
            }, _patchProvideFunction: function (e, t) {
                var r = function (n, r) {
                    var i = c[t];
                    i.module = n, e(n, r), r || (delete i.callback, delete i.context)
                };
                return r.provide = r, r.dynamicDepends = {
                    getValue: function (e, n) {
                        var r = o.defer(), i = c[t];
                        if (i.dynamicDepends && i.dynamicDepends.hasOwnProperty(e)) {
                            var s = i.dynamicDepends[e](n);
                            r.resolve(a._isDepend(s) ? a.getDefinition(s).getModule(n) : [s])
                        } else r.reject(p(e));
                        return r.promise()
                    }, getValueSync: function (e, r) {
                        var i = n, s = c[t];
                        if (s.dynamicDepends && s.dynamicDepends.hasOwnProperty(e)) {
                            var o = s.dynamicDepends[e](r);
                            i = a._isDepend(o) ? a.getDefinition(o).getModuleSync(r) : o
                        }
                        return i
                    }
                }, r
            }, _isDepend: function (e) {
                return "string" == typeof e || e && e.key && e.storage
            }
        }, r.prototype.getModuleKey = function () {
            return this.entry.key
        }, r.prototype.getModuleStorage = function () {
            return this.entry.storage
        }, r.prototype.getModuleName = function () {
            return this.entry.name
        }, r.prototype.getModuleSync = function (e) {
            if (arguments.length > 0) {
                var t = this.entry.dynamicDepends;
                for (var r in t) {
                    var i = t[r](e);
                    if (a._isDepend(i) && !a.getDefinition(i).getModuleSync(e))return n
                }
            }
            return this.entry.module
        }, r.prototype.getModule = function (e) {
            var t = {modules: [this.entry.name]};
            return e && (t.data = e), a.require(t)
        };
        var f = "_retriever@";
        i.prototype.register = function (e, t) {
            e && "*" != e ? this._fallbacks.unshift({filter: e, func: t}) : this._fallbacks.push({
                filter: e || "*",
                func: t
            })
        }, i.prototype.retrieve = function (e) {
            "string" == typeof e && (e = [e]);
            for (var t = [], n = 0, r = e.length; n < r; n++) {
                var i = o.defer(), s = e[n];
                if (t[n] = i.promise(), a.isDefined(s)) i.resolve(!0); else {
                    var u = this.find(s);
                    if (!u) {
                        i.reject(h(s));
                        break
                    }
                    i.resolve(u.func(s, u.filter))
                }
            }
            return o.all(t)
        }, i.prototype.find = function (e) {
            for (var t = 0, n = this._fallbacks.length; t < n; t++) {
                var r = this._fallbacks[t].filter;
                if ("*" === r)return this._fallbacks[t];
                if ("function" == typeof r && r(e))return this._fallbacks[t];
                if (e.match(r))return this._fallbacks[t]
            }
            return null
        }, i.prototype.addRetrievers = function (e) {
            for (var t, n, r = [], i = 0,
                     s = e.length; i < s; i++)t = e[i], a.isDefined(t) ? r.push(t) : (n = f + t, r.push(n), a.isDefined(n) || this._defineRetriever(n));
            return r
        }, i.prototype.removeRetrievers = function (e) {
            for (var t, n = 0,
                     r = e.length; n < r; n++)this.isRetriever(e[n]) && !this._retrieversData[e[n]] && (t = e[n].replace(f, ""), a.isDefined(t) && (e[n] = t))
        }, i.prototype.isRetriever = function (e) {
            return 0 === e.indexOf(f)
        }, i.prototype.addRetrieverData = function (e, t) {
            this._retrieversData[e] || (this._retrieversData[e] = []), this._retrieversData[e].push(t)
        }, i.prototype._defineRetriever = function (e) {
            var t = this;
            a.define(e, [], function (e) {
                var n = this.name.replace(f, "");
                t.retrieve(n).then(function () {
                    return t._requireAfterRetrieve(n)
                }).spread(e).fail(e)
            })
        }, i.prototype._requireAfterRetrieve = function (e) {
            var t = this._retrieversData[f + e];
            if (!t)return a.require(e);
            for (var n = [], r = 0, i = t.length; r < i; r++)n.push(a.require({modules: [e], data: t[r]}));
            return o.all(n).then(function (e) {
                return e[0]
            })
        }, e.modules = a
    }(this, ym.modules), ym.modules = this.modules, this.modules = _backup_modules, _backup_modules = void 0, ym.ns.modules = ym.modules, function (e) {
        ym.modules.require(["system.supports.css"], function (e) {
            ym.supports = {css: e}
        })
    }(this), function (e) {
        function t(e, t, n) {
            if (t) {
                var r = e;
                t = t.split(".");
                for (var i, a = 0, s = t.length - 1; a < s; a++)t[a] && (r = r[i = t[a]] || (r[i] = {}));
                return r[t[s]] = n, r[t[s]]
            }
            return n
        }

        ym.project.namespace && ("function" == typeof setupAsync ? ym.envCallbacks.push(function (n) {
            n.namespace !== !1 && t(e, n.namespace || ym.project.namespace, ym.ns)
        }) : t(e, ym.project.namespace, ym.ns))
    }(this), ym.modules.define("util.math.areEqual", [], function (e) {
        e(function (e, t, n) {
            return n = n || 1e-9, Math.abs(t[0] - e[0]) < n && Math.abs(t[1] - e[1]) < n
        })
    }), ym.modules.define("util.array", [], function (e) {
        var t = {
            each: function (e, t, n) {
                if ("undefined" == typeof e.length) {
                    for (var r in e)if (e.hasOwnProperty(r) && (n ? t.call(n, e[r], r) : t(e[r], r)) === !1)break
                } else {
                    var i = 0, a = !0;
                    if (n)for (; i < e.length && a !== !1; i++)a = t.call(n, e[i], i); else for (; i < e.length && a !== !1; i++)a = t(e[i], i)
                }
            }, map: "function" == typeof Array.prototype.map ? function (e, t, n) {
                return e.map(t, n)
            } : function (e, t, n) {
                for (var r = [], i = 0, a = e.length; i < a; i++)r[i] = n ? t.call(n, e[i], i, e) : t(e[i], i, e);
                return r
            }, indexOf: "function" == typeof Array.prototype.indexOf ? function (e, t, n) {
                return e.indexOf(t, n)
            } : function (e, t, n) {
                var r = n || 0, i = e.length;
                for (r < 0 && (r += i), r < 0 && (r = 0); r < i; r++)if (e[r] === t)return r;
                return -1
            }, isArray: "function" == typeof Array.isArray ? Array.isArray : function (e) {
                return "[object Array]" === Object.prototype.toString.call(e)
            }, merge: function (e, t, n) {
                for (var r = [], i = 0, a = 0, s = e.length,
                         o = t.length; i < s && a < o;)n(e[i], t[a]) < 0 ? (r.push(e[i]), i++) : (r.push(t[a]), a++);
                for (; i < s; i++)r.push(e[i]);
                for (; a < o; a++)r.push(t[a]);
                return r
            }, remove: function (e, n) {
                var r = t.indexOf(e, n);
                return r != -1 && e.splice(r, 1), r
            }, findIndex: "function" == typeof Array.prototype.findIndex ? function (e, t, n) {
                return e.findIndex(t, n)
            } : function (e, t, n) {
                for (var r = -1, i = 0, a = e.length; i < a; i++) {
                    var s = e[i];
                    if (n ? t.call(n, s, i, e) : t(s, i, e)) {
                        r = i;
                        break
                    }
                }
                return r
            }, quickSort: function (e, t) {
                if (!e.length)return e;
                t || (t = function (e, t) {
                    return e < t
                });
                for (var n = [], r = [], i = e[0], a = 1, s = e.length; a < s; a++) {
                    var o = e[a];
                    t(o, i) < 0 ? n.push(o) : r.push(o)
                }
                return this.quickSort(n, t).concat(i, this.quickSort(r, t))
            }, findAfterValue: function (e, t) {
                return 0 == e.length ? 0 : this._getPosition(e, 0, e.length - 1, t)
            }, _getPosition: function (e, t, n, r) {
                var i, a = e[t][0], s = e[n][0];
                return a >= r ? t : s < r ? n + 1 : n - t == 1 ? n : (i = t + Math.round((n - t) * (r - a) / (s - a)), i == t ? i++ : i == n && i--, e[i][0] < r ? this._getPosition(e, i, n, r) : this._getPosition(e, t, i, r))
            }
        };
        e(t)
    }), ym.modules.define("data.BaseManager", ["util.defineClass", "util.array", "event.manager.Base", "Event", "component.EventFreezer"], function (e, t, n, r, i, a) {
        function s() {
            this.events = new r, this._internalFreezer = new a(o, this), this._freezer = new a(u, this)
        }

        function o() {
            this._freezer.fire()
        }

        function u() {
            this.events.fire("change", new i({type: "change", target: this}))
        }

        t(s, {
            set: function (e, t) {
                if ("string" == typeof e || e instanceof String) this.singleSet(e, t); else {
                    this._internalFreezer.freeze();
                    for (var n in e)e.hasOwnProperty(n) && this.singleSet(n, e[n]);
                    this._internalFreezer.unfreeze()
                }
                return this
            }, singleSet: function (e, t) {
            }, unset: function (e) {
                if (n.isArray(e)) {
                    this._internalFreezer.freeze();
                    for (var t = 0, r = e.length; t < r; t++)this.singleUnset(e[t]);
                    this._internalFreezer.unfreeze()
                } else this.singleUnset(e);
                return this
            }, singleUnset: function (e) {
            }, freeze: function () {
                return this._freezer.freeze(), this
            }, unfreeze: function () {
                return this._freezer.unfreeze(), this
            }, isFrozen: function () {
                return this._freezer.isFrozen()
            }, fireChangeEvent: function () {
                this._internalFreezer.fire()
            }, destroy: function () {
            }
        }), e(s)
    }), ym.modules.define("event.manager.Base", ["util.defineClass", "util.array", "event.Group"], function (e, t, n, r) {
        function i(e) {
            if (this.types = {}, this.typesCount = 0, this.params = e || {}, this.controllersHash = {}, this.params.controllers)for (var t = this.params.controllers,
                                                                                                                                         n = 0,
                                                                                                                                         r = t.length; n < r; n++)this._setupController(t[n]); else this.params.controllers = [];
            this._onFire = {}, this._deletedOnFire = {}
        }

        t(i, {
            add: function (e, t, n, r) {
                if (r = +r || 0, "string" == typeof e) this._addListener(e, t, n, r); else for (var i = 0,
                                                                                                    a = e.length; i < a; i++)this._addListener(e[i], t, n, r);
                return this
            }, remove: function (e, t, n, r) {
                if (r = +r || 0, "string" == typeof e) this._removeListener(e, t, n, r); else for (var i = 0,
                                                                                                       a = e.length; i < a; i++)this._removeListener(e[i], t, n, r);
                return this
            }, fire: function (e, t) {
                var n = this.types[e];
                if (n && !t.isPropagationStopped()) {
                    this._onFire.hasOwnProperty(e) ? this._onFire[e]++ : this._onFire[e] = 1;
                    var r = "undefined" != typeof n.priorityKeys;
                    if (r)for (var i = n.priorityKeys.length - 1; i >= 0; i--)this._callListeners(n[n.priorityKeys[i]], t); else this._callListeners(n, t);
                    var a = this._deletedOnFire[e];
                    if (a) {
                        if (n = this.types[e], r) {
                            for (var i = 0, s = a.priorityKeys.length; i < s; i++) {
                                var o = a.priorityKeys[i], u = n[o];
                                this._removeDeletedOnFire(u, a[o]), u.length || this._clearPriority(e, o)
                            }
                            n.priorityKeys.length || this._clearType(e)
                        } else this._removeDeletedOnFire(n, a), n.length || this._clearType(e);
                        delete this._deletedOnFire[e]
                    }
                    --this._onFire[e] || delete this._onFire[e]
                }
                return this
            }, _removeDeletedOnFire: function (e, t) {
                for (var n, r = 0,
                         i = t.length - 1; i >= 0; i -= 2)t[i] && (r += 2, n = i, i > 0) || r && (e.splice(n, r), r = 0)
            }, _addListener: function (e, t, n, r) {
                var i = !1, a = this.types[e], s = a;
                if (a) {
                    if (ym.env.debug && e.length > 13 && e.lastIndexOf("defaultaction") == e.length - 13)throw new Error("event.manager.Base._addListener: Обработчик события по умолчанию " + e + " уже был добавлен ранее.");
                    if ("undefined" != typeof a.priorityKeys) a[r] || this._addPriority(a, r), s = a[r]; else if (r) {
                        var o = this._deletedOnFire[e];
                        o && (this._deletedOnFire[e] = {priorityKeys: [0], 0: o}), a = this.types[e] = {
                            priorityKeys: [0],
                            0: a
                        }, this._addPriority(a, r), s = a[r]
                    }
                } else r ? (a = this.types[e] = {priorityKeys: [r]}, s = a[r] = []) : s = this.types[e] = [], i = !0, this.typesCount++;
                s.push(t, n || null), i && this.controllersHash.onStartListening && this.callControllers("onStartListening", this, e)
            }, _addPriority: function (e, t) {
                e[t] = [];
                for (var n = e.priorityKeys, r = 0, i = n.length; r < i && !(n[r] > t); r++);
                n.splice(r, 0, t)
            }, _removeListener: function (e, t, n, r) {
                var i = this.types[e];
                if (i) {
                    var a = "undefined" != typeof i.priorityKeys, s = i;
                    a && i[r] && (s = i[r]);
                    for (var o = -1, u = 0, l = s.length; u < l; u += 2)if (s[u] == t && s[u + 1] == n) {
                        o = u;
                        break
                    }
                    if (o != -1)if (this._onFire.hasOwnProperty(e)) {
                        s[o] = null;
                        var c = this._deletedOnFire[e];
                        c ? a && !c[r] && (c.priorityKeys.push(r), c = c[r] = []) : a ? (c = this._deletedOnFire[e] = {priorityKeys: [r]}, c = c[r] = []) : c = this._deletedOnFire[e] = [], c[o] = !0
                    } else 2 == l ? a ? (this._clearPriority(e, r), i.priorityKeys.length || this._clearType(e)) : this._clearType(e) : s.splice(o, 2)
                }
            }, _callListeners: function (e, t) {
                for (var n = 0, r = e.length; n < r && !t.isImmediatePropagationStopped();) {
                    var i = e[n];
                    i && i.call(e[n + 1], t), n += 2
                }
            }, _clearPriority: function (e, t) {
                for (var n = this.types[e], r = 0, i = n.priorityKeys.length; r < i; r++)if (n.priorityKeys[r] == t) {
                    n.priorityKeys.splice(r, 1);
                    break
                }
                delete this.types[e][t]
            }, _clearType: function (e) {
                delete this.types[e], this.typesCount--, this.controllersHash.onStopListening && this.callControllers("onStopListening", this, e)
            }, controllerMethods: ["onStartListening", "onStopListening"], callControllers: function (e, t, n, r) {
                for (var i, a = this.controllersHash[e], s = 0,
                         o = a.length; s < o && (i = a[s][e](t, n, r), i !== !1); s++);
                return i
            }, group: function () {
                return new r(this)
            }, addController: function (e) {
                this.params.controllers.push(e), this._setupController(e)
            }, _setupController: function (e) {
                for (var t = this.controllerMethods, n = 0, r = t.length; n < r; n++) {
                    var i = t[n];
                    e[i] && (this.controllersHash[i] ? this.controllersHash[i].push(e) : this.controllersHash[i] = [e])
                }
            }, removeController: function (e) {
                var t = n.indexOf(this.params.controllers, e);
                if (t != -1) {
                    1 == this.params.controllers.length ? this.params.controllers.pop() : this.params.controllers.splice(t, 1);
                    for (var r = this.controllerMethods, i = 0, a = r.length; i < a; i++) {
                        var s = r[i];
                        if (e[s]) {
                            var o = this.controllersHash[s];
                            1 == o.length ? o[0] == e && o.pop() : (t = n.indexOf(o, e), t != -1 && o.splice(t, 1)), o.length || (this.controllersHash[s] = null)
                        }
                    }
                } else if (ym.env.debug)throw new Error("event.Manager.removeController: контроллер не найден")
            }, once: function (e, t, n, r) {
                function i(a) {
                    this.remove(e, i, this, r), n ? t.call(n, a) : t(a)
                }

                return this.add(e, i, this, r), this
            }
        }), e(i)
    }), ym.modules.define("layout.Base", ["util.defineClass", "Event", "event.Manager", "domEvent.manager", "constants.mapDomEvents"], function (e, t, n, r, i, a) {
        function s(e, t) {
            this._parameters = t || {}, this._data = e, this._parentElement = null, this.events = new r({context: this});
            var n = !1;
            this.events.addController({
                onBeforeEventFiring: function (e, t) {
                    if ("mouseenter" == t) {
                        if (n)return !1;
                        n = !0
                    } else if ("mouseleave" == t) {
                        if (!n)return !1;
                        n = !1
                    }
                }
            })
        }

        t(s, {
            isEmpty: function () {
                return !0
            }, setData: function (e) {
                this._data = e, this.rebuild()
            }, getData: function () {
                return this._data
            }, getParameters: function () {
                return this._parameters
            }, setParameters: function (e) {
                this._parameters != e && (this.clear(), this._parameters = e, this.build())
            }, setParentElement: function (e) {
                if (this._parentElement != e) {
                    var t = this._parentElement;
                    t && this.clear(), this._parentElement = e, this._parentElement && this.build(), this.events.fire("parentelementchange")
                }
            }, getParentElement: function () {
                return this._parentElement
            }, build: function () {
                this._parameters.disableDomEventListening || i.add(this._parentElement, a, this.onDomEvent, this)
            }, clear: function () {
                this._parameters.disableDomEventListening || i.remove(this._parentElement, a, this.onDomEvent, this)
            }, rebuild: function () {
                this._parentElement && (this.clear(), this.build())
            }, destroy: function () {
            }, onDomEvent: function (e) {
                var t = e.get("type"), r = e.get("propagatedData");
                r.firedAs || (r.firedAs = {}), r.firedAs[t] || ("mouseenter" != t && "mouseleave" != t && (r.firedAs[t] = !0), this.events.fire(t, new n({
                    type: t,
                    target: this,
                    domEvent: e
                }, e)))
            }
        }), e(s)
    }), ym.modules.define("shape.Base", ["util.defineClass", "data.Manager", "util.extend"], function (e, t, n, r) {
        function i(e, t) {
            this._geometry = e, this._params = new n(t)
        }

        e(t(i, {
            getGeometry: function () {
                return this._geometry
            }, getParams: function () {
                return this._params
            }, equals: function (e) {
                return this.getType() == e.getType() && this._geometry.equals(e.getGeometry())
            }, scale: function (e) {
                return new this.constructor(this._geometry.scale(e), r({}, this._params.getAll()))
            }, shift: function (e) {
                return new this.constructor(this._geometry.shift(e), r({}, this._params.getAll()))
            }, clone: function (e) {
                return new this.constructor(this._geometry.clone(), r({}, this._params.getAll(), e || {}))
            }
        }))
    }), ym.modules.define("util.bind", [], function (e) {
        var t, n;
        ym.env.debug && (n = function (e, t) {
            if (!e)throw new Error("util.bind: не передан параметр func");
            if (!t)throw new Error("util.bind: не передан параметр context")
        }), t = Function.prototype.bind ? function (e, t) {
            return ym.env.debug && n(e, t), arguments.length > 2 ? e.bind.apply(e, Array.prototype.slice.call(arguments, 1)) : e.bind(t)
        } : function (e, t) {
            if (ym.env.debug && n(e, t), arguments.length > 2) {
                var r = Array.prototype.slice.call(arguments, 2);
                return function () {
                    return e.apply(t, [].concat(r, Array.prototype.slice.call(arguments)))
                }
            }
            return function () {
                return e.apply(t, arguments)
            }
        }, e(t)
    }), ym.modules.define("canvasLayout.storage", ["util.AsyncStorage"], function (e, t) {
        e(new t("canvasLayout"))
    }), ym.modules.define("util.dom.className", function (e) {
        return ["util.dom.ClassName.byClass" + ("classList" in document.createElement("a") ? "List" : "Name")]
    }, function (e, t) {
        e(t)
    }), ym.modules.define("geometry.component.findClosestPathPosition", ["util.vector"], function (e, t) {
        var n = t.length2;
        e(function (e, t) {
            if (!e.length)return null;
            for (var r, i, a = e[0], s = [t[0] - a[0], t[1] - a[1]], o = n(s),
                     u = {position: a, vector: s, closestPointIndex: 0, distance: o}, l = 1,
                     c = e.length; l < c; l++)if (i = e[l], a[0] != i[0] || a[1] != i[1]) {
                var d, p = [i[0] - a[0], i[1] - a[1]], h = [t[0] - a[0], t[1] - a[1]],
                    f = (p[0] * h[0] + p[1] * h[1]) / (p[0] * p[0] + p[1] * p[1]);
                f < 0 ? d = {
                    position: a,
                    vector: [a[0] - t[0], a[1] - t[1]], closestPointIndex: l - 1
                } : f > 1 ? d = {
                    position: i,
                    vector: [i[0] - t[0], i[1] - t[1]],
                    closestPointIndex: l
                } : (r = [p[0] * f - h[0], p[1] * f - h[1]], d = {
                    vector: r,
                    prevPointIndex: l - 1,
                    nextPointIndex: l
                }), d.distance = d.vector[0] * d.vector[0] + d.vector[1] * d.vector[1], d.distance < o && (o = d.distance, u = d), a = i
            }
            if (u.nextPointIndex) {
                r = u.vector, a = e[u.prevPointIndex], i = e[u.nextPointIndex];
                var m = [t[0] + r[0], t[1] + r[1]], g = [m[0] - a[0], m[1] - a[1]], v = [m[0] - i[0], m[1] - i[1]];
                u.position = m, u.closestPointIndex = n(g) < n(v) ? u.prevPointIndex : u.nextPointIndex
            }
            return u.distance = Math.sqrt(u.distance), u
        })
    }), ym.modules.define("data.Manager", ["util.defineClass", "util.extend", "data.BaseManager", "util.array", "util.safeAccess"], function (e, t, n, r, i, a) {
        function s(e) {
            s.superclass.constructor.call(this), this._data = e || {}, this._preventInputChange = !!e
        }

        t(s, r, {
            singleSet: function (e, t) {
                var n = e.split("."), r = n.pop(), i = a(this._data, n);
                if ("undefined" != typeof i) this._preventInputChange && (i = this._checkInputChange(i)), i[r] = t, this.fireChangeEvent(); else if (ym.env.debug)throw new Error("data.Manager: некорректный путь к данным: " + e)
            }, _checkInputChange: function (e) {
                return e == this._data && (e = this._data = n({}, this._data), this._preventInputChange = !1), e
            }, singleUnset: function (e) {
                var t = e.split("."), n = t.pop(), r = a(this._data, t);
                if ("undefined" != typeof r) this._preventInputChange && (r = this._checkInputChange(r)), delete r[n], this.fireChangeEvent(); else if (ym.env.debug)throw new Error("data.Manager: некорректный путь к данным: " + e)
            }, unsetAll: function () {
                return this._data = {}, this.fireChangeEvent(), this
            }, setAll: function (e) {
                return this._data = e, this._preventInputChange = !0, this.fireChangeEvent(), this
            }, get: function (e, t) {
                var n = a(this._data, e);
                return "undefined" != typeof n ? n : t
            }, getAll: function () {
                return this._data
            }
        }), e(s)
    }), ym.modules.define("data.Proxy", ["util.defineClass", "util.extend", "data.Manager"], function (e, t, n, r) {
        var i = function (e, t) {
            i.superclass.constructor.call(this, e), this._parent = t, this._parent.events.add("change", this.fireChangeEvent, this)
        };
        t(i, r, {
            get: function (e, t) {
                var n = i.superclass.get.call(this, e);
                return "undefined" == typeof n ? this._parent.get(e, t) : n
            }, getAll: function () {
                return n({}, this._parent.getAll(), i.superclass.getAll.call(this))
            }
        }), e(i)
    }), ym.modules.define("util.data", ["util.id"], function (e, t) {
        e({
            storage: {}, add: function (e, n, r) {
                var i = "string" == typeof e ? e : t.get(e),
                    a = this.storage[i] || (this.storage[i] = {list: {}, count: 0});
                a.list[n] || a.count++, a.list[n] = r
            }, get: function (e, n) {
                var r = this.storage["string" == typeof e ? e : t.get(e)];
                return r && r.list[n]
            }, remove: function (e, n) {
                var r = "string" == typeof e ? e : t.get(e), i = this.storage[r];
                i && i.list[n] && (delete i.list[n], --i.count || delete this.storage[r])
            }
        })
    }), ym.modules.define("component.event.Cacher", [], function (e) {
        function t(e, t, n) {
            this._cache = t, this._overrideStorage = n, this._event = e, this._cacheManager = null
        }

        function n(e) {
            return {
                set: function (t, n) {
                    e[t] = n
                }
            }
        }

        var r = {};
        t.prototype = {
            get: function (e) {
                var t = this._cache, i = t[e];
                if ("undefined" == typeof i) {
                    var a = this._overrideStorage.get(e), s = this._event;
                    if (a && !this._cacheManager && (this._cacheManager = n(t)), i = a ? a(s, this._cacheManager) : s.originalEvent[e], "undefined" == typeof i)return void(t[e] = r);
                    t[e] = i
                }
                return i == r ? void 0 : i
            }
        }, e(t)
    }), ym.modules.define("util.eventId", ["util.id"], function (e, t) {
        var n = function (e) {
            return e.type + "-" + e.clientX + "-" + e.clientY
        }, r = {
            get: function (e) {
                return ym.env.browser.oldIE ? n(e) : t.get(e)
            }
        };
        e(r)
    }), ym.modules.define("event.Manager", ["util.defineClass", "event.manager.Base", "Event", "util.extend"], function (e, t, n, r, i) {
        function a(e) {
            a.superclass.constructor.call(this, e)
        }

        t(a, n, {
            controllerMethods: ["onAfterEventFiring", "onBeforeEventFiring", "onStartListening", "onStopListening"],
            setParent: function (e) {
                return this.params.parent = e, this
            },
            getParent: function () {
                return this.params.parent
            },
            fire: function (e, t) {
                if (t && "function" == typeof t.get || (t = this.createEventObject(e, t, this.params.context)), !t.isPropagationStopped()) {
                    var n;
                    if (this.controllersHash.onBeforeEventFiring && (n = this.callControllers("onBeforeEventFiring", this, e, t)), n !== !1) {
                        t.isImmediatePropagationStopped() || a.superclass.fire.call(this, e, t), this.params.parent && !t.isPropagationStopped() && this.params.parent.fire(e, t);
                        var r = this.params.context;
                        if (t.get("target") == r && !t.isDefaultPrevented()) {
                            var i, s = e + "defaultaction";
                            this.controllersHash.onBeforeEventFiring && (i = this.getDefaultActionEvent(t, s, r), n = this.callControllers("onBeforeEventFiring", this, s, i)), n !== !1 && this.types[s] && (i || (i = this.getDefaultActionEvent(t, s, r)), a.superclass.fire.call(this, s, i)), this.controllersHash.onAfterEventFiring && (i || (i = this.getDefaultActionEvent(t, s, r)), this.callControllers("onAfterEventFiring", this, s, i))
                        }
                        this.controllersHash.onAfterEventFiring && this.callControllers("onAfterEventFiring", this, e, t)
                    }
                }
                return this
            },
            createEventObject: function (e, t, n) {
                var a = {type: e, target: n};
                return new r(t ? i(a, t) : a)
            },
            getDefaultActionEvent: function (e, t, n) {
                return new r({type: t, target: n, originalEvent: e})
            }
        }), e(a)
    }), ym.modules.define("event.Mapper", ["util.defineClass"], function (e, t) {
        function n(e, t) {
            this._targetEventManager = e, this._mappingTable = t
        }

        t(n, {
            getTargetEventManager: function () {
                return this._targetEventManager
            }, setMappingTable: function (e) {
                this._mappingTable = e
            }, getMappingTable: function () {
                return this._mappingTable
            }, fire: function (e, t) {
                "undefined" == typeof this._mappingTable[e] && (e = "*");
                var n, r = this._mappingTable[e];
                return "function" == typeof r ? n = this._mappingTable[e](t) : r && (n = t), n && this._targetEventManager.fire(n.get("type"), n), this
            }
        }), e(n)
    }), ym.modules.define("Event", ["util.defineClass"], function (e, t) {
        function n(e, t) {
            this.originalEvent = e || {}, this._sourceEvent = t || null, t ? (this._propagationStopped = t.isPropagationStopped(), this._immediatePropagationStopped = t.isImmediatePropagationStopped(), this._defaultPrevented = t.isDefaultPrevented(), this._mapEventAllowed = t.isMapEventAllowed()) : (this._propagationStopped = !1, this._immediatePropagationStopped = !1, this._defaultPrevented = !1, this._mapEventAllowed = !1)
        }

        t(n, {
            getSourceEvent: function () {
                return this._sourceEvent
            }, get: function (e) {
                return "undefined" == typeof this.originalEvent[e] && this._sourceEvent ? this._sourceEvent.get(e) : this.originalEvent[e]
            }, callMethod: function (e) {
                return "undefined" == typeof this.originalEvent[e] && this._sourceEvent ? this._sourceEvent.callMethod.apply(this._sourceEvent, arguments) : this.originalEvent[e].apply(this.originalEvent, Array.prototype.slice.call(arguments, 1))
            }, stopImmediatePropagation: function () {
                this._sourceEvent && (this._sourceEvent.stopImmediatePropagation(), this._sourceEvent.stopPropagation()), this._immediatePropagationStopped = !0, this._propagationStopped = !0
            }, isImmediatePropagationStopped: function () {
                return this._immediatePropagationStopped
            }, stopPropagation: function () {
                this._sourceEvent && this._sourceEvent.stopPropagation(), this._propagationStopped = !0
            }, isPropagationStopped: function () {
                return this._propagationStopped
            }, preventDefault: function () {
                this._sourceEvent && this._sourceEvent.preventDefault(), this._defaultPrevented = !0
            }, isDefaultPrevented: function () {
                return this._defaultPrevented
            }, allowMapEvent: function () {
                this._sourceEvent && this._sourceEvent.allowMapEvent(), this._mapEventAllowed = !0
            }, disallowMapEvent: function () {
                this._sourceEvent && this._sourceEvent.disallowMapEvent(), this._mapEventAllowed = !1
            }, isMapEventAllowed: function () {
                return this._mapEventAllowed
            }, clone: function (e) {
                return new n(e, this.getSourceEvent())
            }
        }), e(n)
    }), ym.modules.define("component.EventFreezer", ["util.defineClass"], function (e, t) {
        function n(e, t) {
            this._frozen = !1, this._changed = !1, this._eventCallback = e, this._context = t, this._eventData = null
        }

        t(n, {
            freeze: function () {
                this._frozen = !0
            }, unfreeze: function () {
                this._frozen = !1, this._changed && (this._changed = !1, this._fire())
            }, isFrozen: function () {
                return this._frozen
            }, fire: function (e, t, n) {
                if ("undefined" != typeof e) {
                    this._eventData = this._eventData || {};
                    var r = "old" + e;
                    "undefined" == typeof this._eventData[r] && (this._eventData[r] = t), this._eventData["new" + e] = n
                }
                this._frozen ? this._changed = !0 : this._fire()
            }, _fire: function () {
                if (this._eventCallback) {
                    var e = this._eventData;
                    this._eventData = null, this._eventCallback.call(this._context, e)
                }
            }
        }), e(n)
    }), ym.modules.define("event.Group", ["util.defineClass"], function (e, t) {
        function n(e) {
            this.events = e, this._listeners = []
        }

        t(n, {
            add: function (e, t, n, r) {
                if ("string" == typeof e) this._listeners.push(e, t, n, r); else for (var i = 0,
                                                                                          a = e.length; i < a; i++)this._listeners.push(e[i], t, n, r);
                return this.events.add(e, t, n, r), this
            }, remove: function (e, t, n, r) {
                if ("string" == typeof e) this._removeListener(e, t, n, r); else for (var i = 0,
                                                                                          a = e.length; i < a; i++)this._removeListener(e[i], t, n, r);
                return this
            }, removeAll: function () {
                for (var e = 0,
                         t = this._listeners.length; e < t; e += 4)this.events.remove(this._listeners[e], this._listeners[e + 1], this._listeners[e + 2], this._listeners[e + 3]);
                return this._listeners = [], this
            }, getLength: function () {
                return this._listeners.length / 4
            }, _removeListener: function (e, t, n, r) {
                for (var i = 0,
                         a = this._listeners.length; i < a; i += 4)if (this._listeners[i] == e && this._listeners[i + 1] == t && this._listeners[i + 2] == n && this._listeners[i + 3] == r) {
                    this._listeners.splice(i, 4), this.events.remove(e, t, n, r);
                    break
                }
            }
        }), e(n)
    }), ym.modules.define("util.instantCache", [], function (e) {
        var t, n = {}, r = function () {
            n = {}, t = null
        }, i = {
            add: function (e, i) {
                n[e] = i, t || (t = window.setTimeout(r, 0))
            }, get: function (e) {
                return n[e]
            }, remove: function (e) {
                n[e] && delete n[e]
            }
        };
        e(i)
    }), ym.modules.define("layout.storage", ["util.AsyncStorage"], function (e, t) {
        e(new t("layout"))
    }), ym.modules.define("localization.common.current", function (e) {
        var t = {
            be: {
                distribution: {
                    badgeUpdateBrowserInfoMessage: '<a href="https://tech.yandex.ru/maps/doc/jsapi/updating-browsers/index-docpage/?from=$[from]" target="_blank">[?]</a>',
                    badgeUpdateBrowserMessage: "Абнавіце браўзер",
                    badgeYaBrowserLink: '<a href="https://browser.yandex.ru/?from=link_maps___&banerid=0408000000" target="_blank">$[messages.message]</a>',
                    badgeYaBrowserMobileAndroidCounter: "http://appmetrika.yandex.ru/serve/7778453801303976883?action=click&app_id=com.yandex.browser",
                    badgeYaBrowserMobileAndroidLink: '<a href="market://details?id=com.yandex.browser" target="_blank">$[messages.message]</a>',
                    badgeYaBrowserMobileIOsLink: '<a href="https://itunes.apple.com/ru/app/andeks.brauzer/id574939428?mt=8" target="_blank">$[messages.message]</a>',
                    badgeYaBrowserTabletAndroidCounter: "http://appmetrika.yandex.ru/serve/3382077458904646597?action=click&app_id=com.yandex.browser",
                    badgeYaBrowserTabletAndroidLink: '<a href="market://details?id=com.yandex.browser" target="_blank">$[messages.message]</a>',
                    bandMessage: 'Ваш браўзер састарэў. Калі ласка, абнавіце браўзер (<a href="https://tech.yandex.ru/maps/doc/jsapi/updating-browsers/index-docpage/?from=$[from]" target="_blank">падрабязней</a>) або ўсталюйце',
                    mapsPromoGetThere: "Як дабрацца",
                    openRoute: "Адчыніць маршрут",
                    panoramas: "",
                    routeMoreInfo: "Падрабязней",
                    routeOpenInMaps: "Падрабязней",
                    searchInYandex: "",
                    unavailable: 'Тут павінна быць мапа.<br/>На жаль, мы не можам адлюстраваць яе ў вашым браўзеры.<br/>Але вы можаце паспрабаваць праглядзець яе<br/>ў <a href="{{ href }}" target="_blank">Мабільных Яндекс.Выявах</a>.',
                    yaBrowser: '<a class="ya-distrib-browser"  target="_blank" href="https://browser.yandex.ru/?from=link_maps___&banerid=0408000000">Яндекс.Браўзер</a>',
                    yaBrowserMobileAndroid: '<a href="market://details?id=com.yandex.browser" data-counter="http://appmetrika.yandex.ru/serve/7778453801303976883?action=click&app_id=com.yandex.browser" class="ya-distrib-browser" target="_blank">Я.Браўзер</a>',
                    yaBrowserMobileIOs: '<a href="https://itunes.apple.com/ru/app/andeks.brauzer/id574939428?mt=8" class="ya-distrib-browser" >Я.Браўзер</a>',
                    yaBrowserTabletAndroid: '<a href="market://details?id=com.yandex.browser" data-counter="http://appmetrika.yandex.ru/serve/3382077458904646597?action=click&app_id=com.yandex.browser" class="ya-distrib-browser" target="_blank">Я.Браузер</a>',
                    yaMapsAndroidLink: "intent://maps.yandex.ru/{parameters}#Intent;scheme=http;package=ru.yandex.yandexmaps;S.browser_fallback_url={fallback_url};end",
                    yaMapsIOsLink: "yandexmaps://maps.yandex.ru/",
                    yaMapsIOsRouteLink: "yandexmaps://build_route_on_map/",
                    yaMapsIOsServiceLink: "http://go.onelink.me/id313877526?pid=api-maps&c=text&af_dp={url-scheme}",
                    yaOpenInMaps: "Адчыніць у Яндекс.Мапах",
                    yaOpenOrgInMaps: "",
                    yandexLink: "https://yandex.by/search?text={text}&from=mapsapi"
                }
            },
            en: {
                distribution: {
                    badgeUpdateBrowserInfoMessage: '<a href="https://tech.yandex.com/maps/doc/jsapi/updating-browsers/index-docpage/?from=$[from]" target="_blank">[?]</a>',
                    badgeUpdateBrowserMessage: "Update browser",
                    badgeYaBrowserLink: '<a href="https://browser.yandex.com/?lang=en&from=link_maps___&banerid=0408000000" target="_blank">$[messages.message]</a>',
                    badgeYaBrowserMobileAndroidCounter: "http://appmetrika.yandex.ru/serve/16530220498842444063?action=click&app_id=com.yandex.browser",
                    badgeYaBrowserMobileAndroidLink: '<a href="market://details?id=com.yandex.browser" target="_blank">$[messages.message]</a>',
                    badgeYaBrowserMobileIOsLink: '<a href="https://itunes.apple.com/ru/app/andeks.brauzer/id574939428?mt=8" target="_blank">$[messages.message]</a>',
                    badgeYaBrowserTabletAndroidCounter: "http://appmetrika.yandex.ru/serve/8215584991201581486?action=click&app_id=com.yandex.browser",
                    badgeYaBrowserTabletAndroidLink: '<a href="market://details?id=com.yandex.browser" target="_blank">$[messages.message]</a>',
                    bandMessage: 'Your browser is outdated. Please update your browser (<a href="https://tech.yandex.com/maps/doc/jsapi/updating-browsers/index-docpage/?from=$[from]" target="_blank">more information</a>) or install',
                    mapsPromoGetThere: "Directions",
                    openRoute: "Open route",
                    panoramas: 'Unfortunately we were not able to launch Yandex.Panoramas on your device (<a href="https://tech.yandex.com/maps/doc/jsapi/updating-browsers/index-docpage/?from=$[from]" target="_blank">More info</a>).',
                    routeMoreInfo: "More info",
                    routeOpenInMaps: "More info",
                    searchInYandex: "Search in",
                    unavailable: 'There should be a map here.<br/>Unfortunately, it cannot be displayed in your browser.<br/>However, you should be able to see it in the<br/>в <a href="{{ href }}" target="_blank">Yandex.Maps Mobile App</a>.',
                    yaBrowser: '<a class="ya-distrib-browser"  target="_blank" href="https://browser.yandex.com/?lang=en&from=link_maps___&banerid=0408000000">Yandex.Browser</a>',
                    yaBrowserMobileAndroid: '<a href="market://details?id=com.yandex.browser" data-counter="http://appmetrika.yandex.ru/serve/16530220498842444063?action=click&app_id=com.yandex.browser" class="ya-distrib-browser" target="_blank">Yandex.Browser</a>',
                    yaBrowserMobileIOs: '<a href="https://itunes.apple.com/ru/app/andeks.brauzer/id574939428?mt=8" class="ya-distrib-browser" >Yandex.Browser</a>',
                    yaBrowserTabletAndroid: '<a href="market://details?id=com.yandex.browser" data-counter="http://appmetrika.yandex.ru/serve/8215584991201581486?action=click&app_id=com.yandex.browser" class="ya-distrib-browser" target="_blank">Yandex.Browser</a>',
                    yaMapsAndroidLink: "intent://maps.yandex.ru/{parameters}#Intent;scheme=http;package=ru.yandex.yandexmaps;S.browser_fallback_url={fallback_url};end",
                    yaMapsIOsLink: "yandexmaps://maps.yandex.ru/",
                    yaMapsIOsRouteLink: "yandexmaps://build_route_on_map/",
                    yaMapsIOsServiceLink: "http://go.onelink.me/id313877526?pid=api-maps&c=text&af_dp={url-scheme}",
                    yaOpenInMaps: "Open in Yandex.Maps",
                    yaOpenOrgInMaps: "",
                    yandexLink: "https://yandex.com/search?text={text}&from=mapsapi"
                }
            },
            kk: {
                distribution: {
                    badgeUpdateBrowserInfoMessage: '<a href="https://tech.yandex.ru/maps/doc/jsapi/updating-browsers/index-docpage/?from=$[from]" target="_blank">[?]</a>',
                    badgeUpdateBrowserMessage: "Браузерді жаңартыңыз",
                    badgeYaBrowserLink: '<a href="https://browser.yandex.ru/?from=link_maps___&banerid=0408000000" target="_blank">$[messages.message]</a>',
                    badgeYaBrowserMobileAndroidCounter: "http://appmetrika.yandex.ru/serve/7778453801303976883?action=click&app_id=com.yandex.browser",
                    badgeYaBrowserMobileAndroidLink: '<a href="market://details?id=com.yandex.browser" target="_blank">$[messages.message]</a>',
                    badgeYaBrowserMobileIOsLink: '<a href="https://itunes.apple.com/ru/app/andeks.brauzer/id574939428?mt=8" target="_blank">$[messages.message]</a>',
                    badgeYaBrowserTabletAndroidCounter: "http://appmetrika.yandex.ru/serve/3382077458904646597?action=click&app_id=com.yandex.browser",
                    badgeYaBrowserTabletAndroidLink: '<a href="market://details?id=com.yandex.browser" target="_blank">$[messages.message]</a>',
                    bandMessage: "",
                    mapsPromoGetThere: "",
                    openRoute: "",
                    panoramas: "",
                    routeMoreInfo: "",
                    routeOpenInMaps: "",
                    searchInYandex: "",
                    unavailable: "",
                    yaBrowser: "",
                    yaBrowserMobileAndroid: "",
                    yaBrowserMobileIOs: '<a href="https://itunes.apple.com/ru/app/andeks.brauzer/id574939428?mt=8" class="ya-distrib-browser" >Я.Браузер</a>',
                    yaBrowserTabletAndroid: "",
                    yaMapsAndroidLink: "intent://maps.yandex.ru/{parameters}#Intent;scheme=http;package=ru.yandex.yandexmaps;S.browser_fallback_url={fallback_url};end",
                    yaMapsIOsLink: "yandexmaps://maps.yandex.ru/",
                    yaMapsIOsRouteLink: "yandexmaps://build_route_on_map/",
                    yaMapsIOsServiceLink: "http://go.onelink.me/id313877526?pid=api-maps&c=text&af_dp={url-scheme}",
                    yaOpenInMaps: "Яндекс.Карталардан ашу",
                    yaOpenOrgInMaps: "",
                    yandexLink: "https://yandex.ru/search?text={text}&from=mapsapi"
                }
            },
            ru: {
                distribution: {
                    badgeUpdateBrowserInfoMessage: '<a href="https://tech.yandex.ru/maps/doc/jsapi/updating-browsers/index-docpage/?from=$[from]" target="_blank">[?]</a>',
                    badgeUpdateBrowserMessage: "Обновите браузер",
                    badgeYaBrowserLink: '<a href="https://browser.yandex.ru/?from=link_maps___&banerid=0408000000" target="_blank">$[messages.message]</a>',
                    badgeYaBrowserMobileAndroidCounter: "http://appmetrika.yandex.ru/serve/7778453801303976883?action=click&app_id=com.yandex.browser",
                    badgeYaBrowserMobileAndroidLink: '<a href="market://details?id=com.yandex.browser" target="_blank">$[messages.message]</a>',
                    badgeYaBrowserMobileIOsLink: '<a href="https://itunes.apple.com/ru/app/andeks.brauzer/id574939428?mt=8" target="_blank">$[messages.message]</a>',
                    badgeYaBrowserTabletAndroidCounter: "http://appmetrika.yandex.ru/serve/3382077458904646597?action=click&app_id=com.yandex.browser",
                    badgeYaBrowserTabletAndroidLink: '<a href="market://details?id=com.yandex.browser" target="_blank">$[messages.message]</a>',
                    bandMessage: 'Ваш браузер устарел. Пожалуйста, обновите браузер (<a href="https://tech.yandex.ru/maps/doc/jsapi/updating-browsers/index-docpage/?from=$[from]" target="_blank">подробнее</a>) или установите',
                    mapsPromoGetThere: "Как добраться",
                    openRoute: "Открыть маршрут",
                    panoramas: 'К сожалению, нам не удалось запустить Яндекс.Панорамы на вашем устройстве (<a href="https://tech.yandex.ru/maps/doc/jsapi/updating-browsers/index-docpage/?from=$[from]" target="_blank">подробнее</a>).',
                    routeMoreInfo: "Подробнее",
                    routeOpenInMaps: "Подробнее",
                    searchInYandex: "Поискать в",
                    unavailable: 'Здесь должна быть карта.<br/>К сожалению, мы не можем отобразить её в вашем браузере.<br/>Но вы можете попытаться просмотреть её<br/>в <a href="{{ href }}" target="_blank">Мобильных Яндекс.Картах</a>.',
                    yaBrowser: '<a class="ya-distrib-browser"  target="_blank" href="https://browser.yandex.ru/?from=link_maps___&banerid=0408000000">Яндекс.Браузер</a>',
                    yaBrowserMobileAndroid: '<a href="market://details?id=com.yandex.browser" data-counter="http://appmetrika.yandex.ru/serve/7778453801303976883?action=click&app_id=com.yandex.browser" class="ya-distrib-browser" target="_blank">Я.Браузер</a>',
                    yaBrowserMobileIOs: '<a href="https://itunes.apple.com/ru/app/andeks.brauzer/id574939428?mt=8" class="ya-distrib-browser" >Я.Браузер</a>',
                    yaBrowserTabletAndroid: '<a href="market://details?id=com.yandex.browser" data-counter="http://appmetrika.yandex.ru/serve/3382077458904646597?action=click&app_id=com.yandex.browser" class="ya-distrib-browser" target="_blank">Я.Браузер</a>',
                    yaMapsAndroidLink: "intent://maps.yandex.ru/{parameters}#Intent;scheme=http;package=ru.yandex.yandexmaps;S.browser_fallback_url={fallback_url};end",
                    yaMapsIOsLink: "yandexmaps://maps.yandex.ru/",
                    yaMapsIOsRouteLink: "yandexmaps://build_route_on_map/",
                    yaMapsIOsServiceLink: "http://go.onelink.me/id313877526?pid=api-maps&c=text&af_dp={url-scheme}",
                    yaOpenInMaps: "Открыть в Яндекс.Картах",
                    yaOpenOrgInMaps: "Об организации",
                    yandexLink: "https://yandex.ru/search?text={text}&from=mapsapi"
                }
            },
            tr: {
                distribution: {
                    badgeUpdateBrowserInfoMessage: '<a href="https://tech.yandex.com/maps/doc/jsapi/updating-browsers/index-docpage/?from=$[from]" target="_blank">[?]</a>',
                    badgeUpdateBrowserMessage: "Tarayıcınızı güncelleyin",
                    badgeYaBrowserLink: '<a href="https://browser.yandex.com.tr/?from=link_maps___&banerid=0408000000" target="_blank">$[messages.message]</a>',
                    badgeYaBrowserMobileAndroidCounter: "http://appmetrika.yandex.ru/serve/9875158866605071103?action=click&app_id=com.yandex.browser",
                    badgeYaBrowserMobileAndroidLink: '<a href="market://details?id=com.yandex.browser" target="_blank">$[messages.message]</a>',
                    badgeYaBrowserMobileIOsLink: '<a href="https://itunes.apple.com/ru/app/andeks.brauzer/id574939428?mt=8" target="_blank">$[messages.message]</a>',
                    badgeYaBrowserTabletAndroidCounter: "http://appmetrika.yandex.ru/serve/10231027527608320526?action=click&app_id=com.yandex.browser",
                    badgeYaBrowserTabletAndroidLink: '<a href="market://details?id=com.yandex.browser" target="_blank">$[messages.message]</a>',
                    bandMessage: 'Tarayıcınız eskidi. Lütfen tarayıcınızı güncelleyin (<a href="https://tech.yandex.com/maps/doc/jsapi/updating-browsers/index-docpage/?from=$[from]" target="_blank">ayrıntılı bilgi</a>) veya bunu kurun:',
                    mapsPromoGetThere: "Nasıl gidilir",
                    openRoute: "Rotayı göster",
                    panoramas: 'Özür dileriz, Yandex.Panoramalar\'ı cihazınızda başlatamadık (<a href="https://tech.yandex.com/maps/doc/jsapi/updating-browsers/index-docpage/?from=$[from]" target="_blank">ayrıntılı bilgi</a>).',
                    routeMoreInfo: "Daha fazla bilgi",
                    routeOpenInMaps: "Ayrıntılı bilgi",
                    searchInYandex: "Burada ara:",
                    unavailable: 'Harita burada gösterilmelidir.<br/>Özür dileriz, haritayı tarayıcınızda gösteremiyoruz.<br/>Haritayı <a href="{{ href }}" target="_blank">Mobil Yandex.Haritalar\'da</a><br/> görüntülemeyi deneyebilirsiniz.',
                    yaBrowser: '<a class="ya-distrib-browser"  target="_blank" href="https://browser.yandex.com.tr/?from=link_maps___&banerid=0408000000">Yandex.Browser</a>',
                    yaBrowserMobileAndroid: '<a href="market://details?id=com.yandex.browser" data-counter="http://appmetrika.yandex.ru/serve/9875158866605071103?action=click&app_id=com.yandex.browser" class="ya-distrib-browser" target="_blank">Ya.Browser</a>',
                    yaBrowserMobileIOs: '<a href="https://itunes.apple.com/ru/app/andeks.brauzer/id574939428?mt=8" class="ya-distrib-browser" >Ya.Browser</a>',
                    yaBrowserTabletAndroid: '<a href="market://details?id=com.yandex.browser" data-counter="http://appmetrika.yandex.ru/serve/10231027527608320526?action=click&app_id=com.yandex.browser" class="ya-distrib-browser" target="_blank">Ya.Browser</a>',
                    yaMapsAndroidLink: "intent://maps.yandex.ru/{parameters}#Intent;scheme=http;package=ru.yandex.yandexmaps;S.browser_fallback_url={fallback_url};end",
                    yaMapsIOsLink: "yandexmaps://maps.yandex.ru/",
                    yaMapsIOsRouteLink: "yandexmaps://build_route_on_map/",
                    yaMapsIOsServiceLink: "http://go.onelink.me/id313877526?pid=api-maps&c=text&af_dp={url-scheme}",
                    yaOpenInMaps: "Yandex.Haritalar'da aç",
                    yaOpenOrgInMaps: "",
                    yandexLink: "https://yandex.com.tr/search?text={text}&from=mapsapi"
                }
            },
            uk: {
                distribution: {
                    badgeUpdateBrowserInfoMessage: '<a href="https://tech.yandex.ru/maps/doc/jsapi/updating-browsers/index-docpage/?from=$[from]" target="_blank">[?]</a>',
                    badgeUpdateBrowserMessage: "Оновіть браузер",
                    badgeYaBrowserLink: '<a href="https://browser.yandex.com/?lang=uk&from=link_maps___&banerid=0408000000" target="_blank">$[messages.message]</a>',
                    badgeYaBrowserMobileAndroidCounter: "http://appmetrika.yandex.ru/serve/4199441359301610031?action=click&app_id=com.yandex.browser",
                    badgeYaBrowserMobileAndroidLink: '<a href="market://details?id=com.yandex.browser" target="_blank">$[messages.message]</a>',
                    badgeYaBrowserMobileIOsLink: '<a href="https://itunes.apple.com/ru/app/andeks.brauzer/id574939428?mt=8" target="_blank">$[messages.message]</a>',
                    badgeYaBrowserTabletAndroidCounter: "http://appmetrika.yandex.ru/serve/4279622582576842550?action=click&app_id=com.yandex.browser",
                    badgeYaBrowserTabletAndroidLink: '<a href="market://details?id=com.yandex.browser" target="_blank">$[messages.message]</a>',
                    bandMessage: 'Ваш браузер застарів. Будь ласка, оновіть браузер (<a href="https://tech.yandex.ru/maps/doc/jsapi/updating-browsers/index-docpage/?from=$[from]" target="_blank">докладніше</a>) або встановіть',
                    mapsPromoGetThere: "Як дістатися",
                    openRoute: "Відкрити маршрут",
                    panoramas: 'На жаль, нам не вдалося запустити Яндекс.Панорами на вашому пристрої (<a href="https://tech.yandex.ru/maps/doc/jsapi/updating-browsers/index-docpage/?from=$[from]" target="_blank">докладніше</a>).',
                    routeMoreInfo: "Докладніше",
                    routeOpenInMaps: "Докладніше",
                    searchInYandex: "Пошукати в",
                    unavailable: 'Тут повинна бути карта.<br/>На жаль, ми не можемо відобразити її у вашому браузері.<br/>Але ви можете спробувати переглянути її<br/>у <a href="{{ href }}" target="_blank">Мобільних Яндекс.Картах</a>.',
                    yaBrowser: '<a class="ya-distrib-browser" target="_blank" href="https://browser.yandex.com/?lang=uk&from=link_maps___&banerid=0408000000">Яндекс.Браузер</a>',
                    yaBrowserMobileAndroid: '<a href="market://details?id=com.yandex.browser" data-counter="http://appmetrika.yandex.ru/serve/4199441359301610031?action=click&app_id=com.yandex.browser" class="ya-distrib-browser" target="_blank">Я.Браузер</a>',
                    yaBrowserMobileIOs: '<a href="https://itunes.apple.com/ru/app/andeks.brauzer/id574939428?mt=8" class="ya-distrib-browser" >Я.Браузер</a>',
                    yaBrowserTabletAndroid: '<a href="market://details?id=com.yandex.browser" data-counter="http://appmetrika.yandex.ru/serve/4279622582576842550?action=click&app_id=com.yandex.browser" class="ya-distrib-browser" target="_blank">Я.Браузер</a>',
                    yaMapsAndroidLink: "intent://maps.yandex.ru/{parameters}#Intent;scheme=http;package=ru.yandex.yandexmaps;S.browser_fallback_url={fallback_url};end",
                    yaMapsIOsLink: "yandexmaps://maps.yandex.ru/",
                    yaMapsIOsRouteLink: "yandexmaps://build_route_on_map/",
                    yaMapsIOsServiceLink: "http://go.onelink.me/id313877526?pid=api-maps&c=text&af_dp={url-scheme}",
                    yaOpenInMaps: "Відкрити у Яндекс.Картах",
                    yaOpenOrgInMaps: "",
                    yandexLink: "https://yandex.ua/search?text={text}&from=mapsapi"
                }
            }
        };
        e(t[ym.env.languageCode])
    }), ym.modules.define("constants.mapDomEvents", [], function (e) {
        e(["click", "dblclick", "contextmenu", "mousedown", "mouseup", "mousemove", "mouseenter", "mouseleave", "wheel", "multitouchstart", "multitouchmove", "multitouchend"])
    }), ym.modules.define("Monitor", ["util.extend", "util.bind", "util.array"], function (e, t, n, r) {
        function i(e) {
            this._dataManager = e, this._groups = [], this._names = {}, this._values = {}, this._oldValues = null, this._cleanTimeoutId = 0, this._clearGroupsCallback = n(function () {
                this._cleanTimeoutId = 0, this._clearGroups()
            }, this)
        }

        function a(e, t, n, r) {
            var i = {
                names: "string" == typeof e ? [e] : e.slice(),
                singleName: "string" == typeof e,
                changeCallback: t,
                context: n,
                resolveCallbacks: {},
                compareCallbacks: {},
                defaultValues: {},
                deleted: !1
            };
            if (r)for (var a = i.names, s = i.resolveCallbacks, o = i.compareCallbacks, u = i.defaultValues, l = 0,
                           c = a.length; l < c; l++)e = a[l], s[e] = r.resolveCallbacks && r.resolveCallbacks[e] || r.resolveCallback, o[e] = r.compareCallbacks && r.compareCallbacks[e] || r.compareCallbacks, u[e] = r.defaultValues && "undefined" != typeof r.defaultValues[e] ? r.defaultValues[e] : r.defaultValue;
            return i
        }

        t(i.prototype, {
            add: function (e, t, n, r) {
                this._groups.length || this._dataManager.events.add("change", this._onChange, this);
                var i = a(e, t, n, r);
                if (ym.env.debug)for (var s = 0,
                                          o = i.names.length; s < o; s++)if (this._names[i.names[s]])throw new Error('Monitor.add: name "' + i.names[s] + '" has already been added.');
                for (var s = 0,
                         o = i.names.length; s < o; s++)e = i.names[s], this._names[e] = i, this._values[e] = this._resolveName(e);
                return this._groups.push(i), this
            }, remove: function (e) {
                if ("string" == typeof e) this._removeField(e); else for (var t = 0,
                                                                              n = e.length; t < n; t++)this._removeField(e[t]);
                return this._groups.length || this._dataManager.events.remove("change", this._onChange, this), this
            }, removeAll: function () {
                return this._values = {}, this._names = {}, this._groups = [], this._dataManager.events.remove("change", this._onChange, this), this
            }, get: function (e) {
                return this._values[e]
            }, forceChange: function () {
                return this._onChange(), this
            }, _removeField: function (e) {
                if (ym.env.debug && !this._names[e])throw new Error('Monitor.remove: name "' + e + '" was not added.');
                var t = this._names[e];
                delete this._values[e], delete this._names[e], 1 == t.names.length ? t.names[0] == e && t.names.pop() : t.names.splice(r.indexOf(t.names, e), 1), t.names.length || (t.deleted = !0, this._cleanTimeoutId || (this._cleanTimeoutId = setTimeout(this._clearGroupsCallback, 0)))
            }, _resolveName: function (e) {
                var t = this._names[e],
                    n = t.resolveCallbacks[e] ? t.context ? t.resolveCallbacks[e].call(t.context, e, this._dataManager) : t.resolveCallbacks[e](e, this._dataManager) : this._dataManager.get(e);
                return "undefined" == typeof n ? t.defaultValues[e] : n
            }, _onChange: function () {
                for (var e = this._values, t = 0, n = this._groups.length; t < n; t++) {
                    if (!this._groups.length)return;
                    var r = this._groups[t];
                    r.deleted || this._checkGroup(r, e)
                }
            }, _checkGroup: function (e, n) {
                for (var r, i, a = !1, s = 0, o = e.names.length; s < o; s++) {
                    var u = e.names[s], l = this._resolveName(u), c = n[u];
                    (e.compareCallbacks[u] ? e.context ? e.compareCallbacks[u].call(e.context, l, c) : e.compareCallbacks[u](l, c) : l !== c) && (a || (r = e.singleName ? c : t({}, n), i = e.singleName ? l : t({}, n), a = !0), e.singleName || (r[u] = c, i[u] = l), this._values[u] = l)
                }
                a && (e.context ? e.changeCallback.call(e.context, i, r) : e.changeCallback(i, r))
            }, _clearGroups: function () {
                for (var e, t = 0,
                         n = this._groups.length - 1; n >= 0; n--)this._groups[n].deleted && (t++, e = n, n > 0) || t && (this._groups.length == t ? this._groups = [] : this._groups.splice(e, t), t = 0)
            }
        }), i.prototype.destroy = i.prototype.removeAll, e(i)
    }), ym.modules.define("geometry.pixel.Rectangle", ["util.extend", "geometry.component.commonMethods.rectangle"], function (e, t, n) {
        var r = n, i = function (e, t) {
            this._coordinates = e || null, this._metaData = t || {}, this._bounds = null
        };
        i.prototype = {
            getType: function () {
                return "Rectangle"
            }, getCoordinates: function () {
                return this._coordinates
            }, getMetaData: function () {
                return this._metaData
            }, getBounds: function () {
                return this._bounds || (this._bounds = r.calculateBounds(this._coordinates))
            }, clone: function (e, n) {
                return new i(e || this._coordinates, n ? t({}, this._metaData, n) : this._metaData)
            }, scale: function (e) {
                return this.clone(this._coordinates ? [[this._coordinates[0][0] * e, this._coordinates[0][1] * e], [this._coordinates[1][0] * e, this._coordinates[1][1] * e]] : null)
            }, shift: function (e) {
                return this.clone(this._coordinates ? [[this._coordinates[0][0] + e[0], this._coordinates[0][1] + e[1]], [this._coordinates[1][0] + e[0], this._coordinates[1][1] + e[1]]] : null)
            }, getClosest: function (e) {
                return r.getClosest(this._coordinates, e)
            }, contains: function (e) {
                return r.contains(this._coordinates, e)
            }, equals: function (e) {
                if (this.getType() != e.getType())return !1;
                var t = this._coordinates, n = e.getCoordinates();
                return t && n ? t[0][0] == n[0][0] && t[0][1] == n[0][1] && t[1][0] == n[1][0] && t[1][1] == n[1][1] : t == n
            }
        }, e(i)
    }), ym.modules.define("geometry.component.commonMethods.rectangle", ["util.pixelBounds", "geometry.component.findClosestPathPosition"], function (e, t, n) {
        e({
            contains: function (e, n) {
                return t.containsPoint(this.calculateBounds(e), n)
            }, getClosest: function (e, t) {
                var r = this.calculateBounds(e), i = [r[0], [r[1][0], r[0][1]], r[1], [r[0][0], r[1][1]], r[0]],
                    a = n(i, t);
                return {position: a.position, distance: a.distance}
            }, calculateBounds: function (e) {
                return t.fromPoints(e || [])
            }
        })
    }), ym.modules.define("shape.Rectangle", ["util.defineClass", "shape.Base", "shape.storage", "shape.common.withOutlineBoundsGetter", "geometry.component.findClosestPathPosition"], function (e, t, n, r, i, a) {
        function s(e, t) {
            s.superclass.constructor.call(this, e, t)
        }

        t(s, n, i, {
            getType: function () {
                return "Rectangle"
            }, contains: function (e) {
                var t = this.getParams();
                if (t.get("fill", !0) && this.getGeometry().contains(e))return !0;
                if (t.get("outline", !0)) {
                    var n = this._getExternalPath();
                    return n && a(n, e).distance <= .5 * t.get("strokeWidth", 0)
                }
                return !1
            }, _getExternalPath: function () {
                var e = this.getGeometry().getCoordinates();
                return e ? [e[0], [e[1][0], e[0][1]], e[1], [e[0][0], e[1][1]], e[0]] : null
            }
        }), e(s), r.add("Rectangle", s)
    }), ym.modules.define("util.safeAccess", [], function (e) {
        e(function (e, t) {
            if (e instanceof Object) {
                var n = ".", r = [];
                if ("string" == typeof t) {
                    if (t.indexOf(n) == -1)return e[t];
                    r = t.split(n)
                } else r = t;
                for (var i = 0, a = r.length; i < a; i++) {
                    if (!(e instanceof Object))return;
                    e = e[r[i]]
                }
                return e
            }
        })
    }), ym.modules.define("shape.storage", ["util.Storage"], function (e, t) {
        e(new t)
    }), ym.modules.define("util.Storage", [], function (e) {
        var t = function () {
            this.hash = {}
        };
        t.prototype = {
            add: function (e, t) {
                return this.hash[e] = t, this
            }, get: function (e) {
                return "string" == typeof e || e instanceof String ? this.hash[e] : e
            }, remove: function (e) {
                return delete this.hash[e], this
            }
        }, e(t)
    }), ym.modules.define("styles.css", ["system.provideCss"], function (e, t) {
        t("body,html{padding:0;margin:0;background:0 0}.controller{display:table;width:100%;line-height:0}.oldie .controller{font:0/0 a}.business-card-maps-button{box-sizing:border-box;border-width:1px;border-style:solid;border-radius:3px;background-clip:padding-box;color:#000;vertical-align:middle;text-align:center;text-decoration:none;font-family:Arial,Helvetica,sans-serif;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;height:28px;padding-right:13px;padding-left:13px;display:block;width:100%;background-color:#fff;border-color:rgba(0,0,0,.2);white-space:nowrap}.business-card-maps-button-text{position:relative;border:none;text-decoration:none;white-space:nowrap;font-size:13px;line-height:26px}.business-card-maps-button:hover{border-color:rgba(0,0,0,.3)}.business-card-maps-button-icon{display:inline-block;width:18px;height:16px;vertical-align:middle;background:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxMCAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik01LjI5IDguODk1TDQuMSAxNnM0LjU0LTYuMTc1IDUuNjEtOC45ODdjLjEzOC0uMzYuMTktMS4xMTcuMTktMi4wMTNMNS4yOSA4Ljg5NXoiIHN0cm9rZT0iI0M1MTQxQyIgc3Ryb2tlLXdpZHRoPSIuMSIgZmlsbD0iI0M1MTQxQyIvPjxwYXRoIGQ9Ik01IDEwQTUgNSAwIDEgMCA1IDBhNSA1IDAgMCAwIDAgMTB6bTAtM2EyIDIgMCAxIDAgMC00IDIgMiAwIDAgMCAwIDR6IiBmaWxsPSIjRTAwIi8+PC9nPjwvc3ZnPgo=) no-repeat}.oldie .business-card-maps-button-icon{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAQCAYAAAAvf+5AAAAABGdBTUEAALGPC/xhBQAAATlJREFUKBWFUj1Lw1AUvfdVSrDUqNDNbhnEgpvQJaD/xFVwcXCx4OCfEJzdurnUURQ3ERdBcOugSP2gUEo/TJ7npHlNJIIXbu7JPeee926ISBqfIuGXyAXqCzPFoeOTCuIIRIxq84leRI4iBQhV5MqKmF/T6Qu4GNy2ATjMiTqeSJ0JXYdactQIHHmn5MihyFpqJMSuT82fxzmxq5GqT9s71xiJnNGJSez641J5+u8yFL9WV85hKLxnC+AktxTbSXws+sPRcmXdvVM8/+Dvaibdsmfv/Zq9rdVb1lpNHOdqgOfVYKlXGr+B9FTMg6/VsNF7HBS27ptpQBFmIggPKKJRQfhtbIOEqp42d7ZuiBkLs5I9YxtvYPqpMtFjbbcjxxQcsXmA+b3Nfhf/RBYFoRq5bO7vXmeSGfoB8EJ5KkExk9MAAAAASUVORK5CYII=)}.button{position:relative;display:block;margin:0;padding:0;cursor:pointer;color:#000;border:0;border-radius:3px;outline:0;text-align:center;white-space:nowrap;font-size:12px;-webkit-tap-highlight-color:rgba(0,0,0,0);background-color:#ffdb4d}.button:hover{background-color:#ffd633}.button:active{background-color:#fc0}.button_size_small{font-size:13px;height:24px;line-height:24px}.button_size_medium{height:28px;line-height:28px}.button__text{margin:0 13px;user-select:none;-webkit-user-select:none;font-family:Arial,Helvetica,sans-serif}.gotoymaps{display:inline-block;white-space:nowrap;color:#000;cursor:pointer}.gotoymaps__icon,.gotoymaps__text{position:relative;vertical-align:bottom}.gotoymaps__icon{width:24px;z-index:1;display:inline-block;background:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zLjgyNiAxQzIuMjY2IDEgMSAyLjI3OCAxIDMuODN2MTYuMzRDMSAyMS43MyAyLjI2IDIzIDMuODI2IDIzSDE2LjAzYy4zNzIgMCAuODI0LS4yNSAxLjAxOC0uNTc2bDUuNzk3LTkuNzAyYy4yMzgtLjQuMjQyLTEuMDQgMC0xLjQ0NGwtNS43OTctOS43MDJjLS4xOS0uMzE4LS42NDMtLjU3Ni0xLjAyLS41NzZIMy44Mjd6IiBzdHJva2Utb3BhY2l0eT0iLjE1IiBzdHJva2U9IiMwMDAiIGZpbGw9IiNGRkYiLz48cGF0aCBkPSJNMTAuMjkgMTIuODk1TDkuMSAyMHM0LjU0LTYuMTc1IDUuNjEtOC45ODdjLjEzOC0uMzYuMTktMS4xMTcuMTktMi4wMTNsLTQuNjEgMy44OTV6IiBzdHJva2U9IiNDNTE0MUMiIHN0cm9rZS13aWR0aD0iLjEiIGZpbGw9IiNDNTE0MUMiLz48cGF0aCBkPSJNMTAgMTRjMi43NiAwIDUtMi4yNCA1LTVzLTIuMjQtNS01LTUtNSAyLjI0LTUgNSAyLjI0IDUgNSA1em0wLTNjMS4xMDUgMCAyLS44OTUgMi0ycy0uODk1LTItMi0yLTIgLjg5NS0yIDIgLjg5NSAyIDIgMnoiIGZpbGw9IiNFMDAiLz48L2c+PC9zdmc+) no-repeat;height:24px}.oldie .gotoymaps__icon{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAgVBMVEUAAAAAAAAAAAD9/f3n5+cAAAD19fXKysqYmJhMTEwAAAAAAAAAAAD6+vr29vbn5+c5OTn////uAADzS0v94+P6wsLvGBjFFR32hYX78vPvwsXopqjrBwj67u744+Tyz9HijJDggYXcdnviYmXXYGXPP0XNNz7aEhbODxXkExThBgiV3lg9AAAAEXRSTlMAJQbtngzJcEsyHRoU4tGhLVsM2XQAAAC2SURBVCjPfZLpFoIgEEYFtTIrHUBwa997/wfsBGMMnuz+YDn3wAcDUcRzFpBGDl4mMRA2GXciTyAkWTrBYhixSJ0ASyW1lpUdzhgRtbDUdjJffUUlELsmzvggpBBSqU+L+YPQQigAJYT2+aHoAfPHWz0BMH8UfkaxZuFx7zsv/AX71+MAdCukMebaAA1H9sa0vlxEdOZECkzE8ba1vS8JcmlJMhUd+OS/D5UXE0/Ly+LnZ5j8Pm9U+R43PX+GjwAAAABJRU5ErkJggg==)}.gotoymaps__text{top:-1px;margin-left:-23px;padding-right:9px;padding-left:26px;border-radius:4px;background-color:rgba(255,255,255,.7);font:11px/22px Arial,Helvetica,sans-serif;color:#000;text-decoration:none;height:22px}.oldie .gotoymaps__text{background-color:#fff}.gotoymaps__text,.gotoymaps__text-container{display:inline-block}.gotoymaps__text-container.animate{animation:flick 300ms 1 ease-in-out}.gotoymaps__text-container>*{height:22px;line-height:22px;display:block;opacity:1;transition:opacity 300ms}.gotoymaps__text-container>.in,.gotoymaps__text-container>.out{opacity:0}@-moz-keyframes flick{0%{transform:translateY(-25px)}to{transform:translateY(0)}}@-webkit-keyframes flick{0%{transform:translateY(-25px)}to{transform:translateY(0)}}@-o-keyframes flick{0%{transform:translateY(-25px)}to{transform:translateY(0)}}@keyframes flick{0%{transform:translateY(-25px)}to{transform:translateY(0)}}", e)
    }), ym.modules.define("layout.SubLayoutEventMappingTable", ["util.defineClass", "constants.mapDomEvents", "Event", "util.array"], function (e, t, n, r, i) {
        function a(e) {
            this._parentLayout = e, i.each(n, function (e) {
                "mousenter" == e || "mouseleave" == e ? this[e] = !1 : this[e] = this._defaultMapping
            }, this), this.parentelementchange = !1, this.emptinesschange = !1, this.shapechange = !1, this["*"] = this._defaultMapping
        }

        t(a, {
            _defaultMapping: function (e) {
                return new r({type: e.get("type"), target: e.get("target"), currentTarget: this._parentLayout}, e)
            }
        }), e(a)
    }), ym.modules.define("system.browser", ["system.supports.graphics"], function (e, t) {
        var n = ym.env.browser;
        n.documentMode = document.documentMode, n.isIE = "MSIE" == n.name || "IEMobile" == n.name, n.oldIE = "MSIE" == n.name && n.documentMode < 9, n.isEdge = "Edge" == n.engine;
        var r = "Edge" == n.engine || "MSIE" == n.name && n.documentMode >= 10 && n.osVersion > 6.1 || "IEMobile" == n.name && n.engineVersion >= 6;
        r ? n.eventMapper = "pointer" : n.oldIE ? n.eventMapper = "oldIE" : n.eventMapper = "touchMouse", n.androidBrokenBuild = "AndroidBrowser" == n.name && "534.30" == n.engineVersion;
        var i = window.devicePixelRatio || screen.deviceXDPI && screen.deviceXDPI / 96 || 1;
        n.oldIE ? n.graphicsRenderEngine = "vml" : !t.hasCanvas() || "MSIE" == n.name || "IEMobile" == n.name || "Android" == n.osFamily && n.engine && "gecko" == n.engine.toLocaleLowerCase() || i > 1 && i < 2 ? n.graphicsRenderEngine = "svg" : n.graphicsRenderEngine = "canvas", n.transformTransition = "Android" == n.osFamily || "iOS" == n.osFamily || "MSIE" == n.name && n.documentMode >= 10 || n.base && "chromium" == n.base.toLocaleLowerCase(), n.css3DTransform = "WebKit" == n.engine && !("Android" == n.osFamily && parseFloat(n.osVersion) < 3) || "Gecko" == n.engine && parseInt(n.engineVersion.split(".")[0]) >= 10, n.unsupported = "OperaMini" == n.name, n.platform = n.isMobile ? n.osFamily : "Desktop", e(n)
    }), ym.modules.define("template.filtersStorage", ["util.Storage"], function (e, t) {
        var n = new t;
        n.add("default", function (e, t, n) {
            var r = t;
            if ("undefined" == typeof t) {
                var i = n, a = i.charAt(0);
                "'" == a || '"' == a ? (i = i.slice(1, i.length - 1), r = i) : r = isNaN(i) ? e.get(n) : i
            }
            return r
        }), e(n)
    }), ym.modules.define("Template", ["util.defineClass", "template.Parser", "template.filtersStorage"], function (e, t, n, r) {
        var i = function (e, t) {
            "string" == typeof e ? (this._text = e, this._tree = null) : this._tree = e, this._parser = t
        };
        t(i, {
            build: function (e) {
                this._prepareParser();
                var t = this._parser.build(this._tree, e);
                return t.text = t.strings.join(""), t
            }, _prepareParser: function () {
                this._parser || (this._parser = new n(r)), this._tree || this._parse()
            }, _parse: function () {
                this._parser || (this._parser = new n(r)), this._tree = this._parser.parse(this._text)
            }
        }), e(i)
    }), ym.modules.define("theme.browser.current", function (e) {
        var t = e.env.browser, n = t.eventMapper, r = t.engine.toLowerCase(), i = {
            webkit: "theme.browser.webkit",
            blink: "theme.browser.webkit",
            trident: "theme.browser.trident",
            edge: "theme.browser.edge",
            presto: "theme.browser.presto",
            gecko: "theme.browser.gecko"
        }, a = ["util.extend", "map.metaOptions", "domEvent.override.common", "mapEvent.override.common"];
        return "pointer" == n ? a.push("domEvent.managerOverrides.pointers", "domEvent.multiPointer.override", "domEvent.pointer.override") : "oldIE" == n ? a.push("domEvent.managerOverrides.oldIE", "domEvent.override.ie78") : a.push("domEvent.managerOverrides.touches", "domEvent.multiTouch.override", "domEvent.touch.override"), r in i ? a.push(i[r]) : a.push("theme.browser.unknown"), a
    }, function (e, t, n) {
        for (var r = Array.prototype.slice.call(arguments, 5), i = {}, a = 0, s = r.length; a < s; a++)t(i, r[a]);
        n.set(i), e({})
    }), ym.modules.define("util.AsyncStorage", ["util.defineClass", "util.Storage", "system.nextTick", "util.bind", "vow", "util.id"], function (e, t, n, r, i, a, s) {
        var o = {NOT_RESOLVED: "NOT_RESOLVED", IN_RESOLVING: "IN_RESOLVING", RESOLVED: "RESOLVED"}, u = function (e) {
            u.superclass.constructor.call(this), this._modulesSystemKey = e, this._declareHash = {}, this._requireQueue = [], this._waitingForNextTick = !1
        };
        u.createKeyNotFoundError = function (e) {
            return new Error('The key "' + e + "\" isn't declared")
        }, t(u, n, {
            define: function (e, t, n, r) {
                if ("function" == typeof t && (r = n, n = t, t = []), this._modulesSystemKey) {
                    for (var i = [], a = 0, u = t.length; a < u; a++)i.push({
                        key: t[a],
                        storage: this._modulesSystemKey
                    });
                    ym.modules.define({
                        key: e,
                        storage: this._modulesSystemKey,
                        name: s.get(this) + "_" + e + "_" + this._modulesSystemKey,
                        depends: i,
                        context: r,
                        declaration: n
                    })
                } else this._declareHash[e] = {
                    key: e,
                    depends: t,
                    callback: n,
                    context: r,
                    state: o.NOT_RESOLVED,
                    waitingForResolving: []
                };
                return this
            }, add: function (e, t) {
                return this._modulesSystemKey ? ym.modules.defineSync({
                    key: e,
                    storage: this._modulesSystemKey,
                    name: s.get(this) + "_" + e + "_" + this._modulesSystemKey,
                    module: t
                }) : u.superclass.add.call(this, e, t), this
            }, get: function (e, t) {
                var n = u.superclass.get.call(this, e);
                if (!n && this._modulesSystemKey) {
                    var r = ym.modules.getDefinition({key: e, storage: this._modulesSystemKey});
                    r && (n = arguments.length > 1 ? r.getModuleSync(t) : r.getModuleSync())
                }
                return n
            }, isDefined: function (e) {
                return this._modulesSystemKey ? this._isDefinedInModulesSystem(e) : this._isDefinedInStorage(e)
            }, require: function (e, t, n, r) {
                var i, s = a.defer(), o = s.promise(), l = [];
                if (3 == arguments.length && "function" != typeof n && (r = n, n = null), "string" == typeof e) e = [e]; else if (!e.hasOwnProperty("length") && "object" == typeof e) {
                    var c = e;
                    e = c.keys, t = c.successCallback, n = c.errorCallback, r = c.context, i = c.data
                }
                for (var d = 0, p = e.length; d < p; d++) {
                    var h = e[d];
                    this._modulesSystemKey ? this._isDefinedInModulesSystem(h) ? l.push({
                        key: h,
                        storage: this._modulesSystemKey
                    }) : s.reject(u.createKeyNotFoundError(h)) : this._isDefinedInStorage(h) || s.reject(u.createKeyNotFoundError(h))
                }
                return o.isRejected() || (l.length > 0 ? ym.modules.require({modules: l, data: i}).done(function (t) {
                    this._addRequireToQueue(e, s)
                }, function (e) {
                    s.reject(e)
                }, this) : this._addRequireToQueue(e, s)), (t || n) && o.done(function (e) {
                    t && t.apply(r, e)
                }, function (e) {
                    n && n.call(r, e)
                }), o
            }, _isDefinedInStorage: function (e) {
                return !!this.get(e) || this._declareHash.hasOwnProperty(e)
            }, _isDefinedInModulesSystem: function (e) {
                return this._modulesSystemKey && ym.modules.isDefined({key: e, storage: this._modulesSystemKey})
            }, _addRequireToQueue: function (e, t) {
                this._waitingForNextTick || (this._waitingForNextTick = !0, this._bindOnNextTick || (this._bindOnNextTick = i(this._onNextTick, this)), r(this._bindOnNextTick)), this._requireQueue.push({
                    keys: e,
                    defer: t
                })
            }, _onNextTick: function () {
                this._waitingForNextTick = !1;
                var e = this._requireQueue.slice();
                this._requireQueue = [];
                for (var t = 0, n = e.length; t < n; t++)this._processRequire(e[t])
            }, _processRequire: function (e) {
                for (var t = e.keys, n = t.length, r = new Array(n), i = this._createRequireCallback(e, n, r), a = 0,
                         s = n; a < s; a++)this._processKey(t[a], i, a)
            }, _createRequireCallback: function (e, t, n) {
                return function (r, i) {
                    n[r] = i, --t || e.defer.resolve(n)
                }
            }, _processKey: function (e, t, n) {
                var r = this.get(e);
                if ("undefined" == typeof r) {
                    var i = this._declareHash[e];
                    if (i.state == o.NOT_RESOLVED && this._resolveKey(i), i.state == o.IN_RESOLVING)return void i.waitingForResolving.push({
                        callback: t,
                        number: n
                    });
                    r = this.get(e)
                }
                t(n, r)
            }, _resolveKey: function (e) {
                e.state = o.IN_RESOLVING;
                var t = e.depends;
                0 == t.length ? e.callback.call(e.context, this._createProvideCallback(e)) : this.require(t, function () {
                    var t = Array.prototype.slice.call(arguments, 0);
                    t.unshift(this._createProvideCallback(e)), e.callback.apply(e.context, t)
                }, this)
            }, _createProvideCallback: function (e) {
                return i(function (t) {
                    e.state = o.RESOLVED, this.add(e.key, t);
                    for (var n = e.waitingForResolving, r = 0, i = n.length; r < i; r++) {
                        var a = n[r];
                        a.callback(a.number, t)
                    }
                    n = []
                }, this)
            }
        }), e(u)
    }), ym.modules.define("util.cancelableCallback", [], function (e) {
        var t = {
            create: function (e, t) {
                var n = function () {
                    if (e) {
                        var n = arguments, r = n.length;
                        0 == r ? e.call(t) : 1 == r ? e.call(t, n[0]) : 2 == r ? e.call(t, n[0], n[1]) : e.apply(t, n)
                    }
                };
                return n.cancel = function () {
                    e = t = null
                }, n.isActive = function () {
                    return !!e
                }, n
            }, createPromiseHandler: function (e, t, n, r) {
                return t = this.create(t, r), n = this.create(n, r), e.done(t, n), {
                    cancel: function () {
                        t.cancel(), n.cancel(), t = n = r = null
                    }, isActive: function () {
                        return !!t
                    }
                }
            }
        };
        e(t)
    }), ym.modules.define("util.coordinates.reverse", ["util.array"], function (e, t) {
        function n(e) {
            var n = [];
            if (t.isArray(e[0]))for (var r = 0,
                                         i = e.length; r < i; r++)n.push([e[r][1], e[r][0]]); else n = e.slice().reverse();
            return n
        }

        e(n)
    }), ym.modules.define("util.css", [], function (e) {
        e({
            addPrefix: function (e) {
                return ym.env.cssPrefix + e
            }
        })
    }), ym.modules.define("util.dom.element", ["util.dom.style", "system.browser"], function (e, t, n) {
        function r(e) {
            return "string" != typeof e.className
        }

        function i(e) {
            var t = [];
            if (n.oldIE)for (var r = 0, i = e.length; r < i; r++)t[r] = e[r]; else t = Array.prototype.slice.call(e);
            return t
        }

        var a = {
            create: function (e) {
                e = e || {};
                var r = "string" == typeof e ? e : e.tagName || "ymaps",
                    i = e.namespace ? document.createElementNS(e.namespace, r) : document.createElement(r);
                return n.oldIE && e.parentNode && e.parentNode.appendChild(i), e.className && (i.className = e.className), e.attr && t.attr(i, e.attr), e.css && t.css(i, e.css), e.patch && t.patch(i, e.patch), e.size && t.setSize(i, e.size), e.position && t.setPosition(i, e.position), e.html && this.html(i, e.html, !0), n.oldIE || e.parentNode && e.parentNode.appendChild(i), i
            }, remove: function (e) {
                e.parentNode && e.parentNode.removeChild(e)
            }, destroy: function (e) {
                s.appendChild(e), s.innerHTML = ""
            }, html: function (e, t, n) {
                if ("undefined" == typeof t)return e.innerHTML;
                if (ym.env.debug && !n) {
                    for (var r = e, i = e.ownerDocument; r && r != i;)r = r.parentNode;
                    if (r != i)throw new Error("util.dom.element.html: попытка переопределить innerHTML у элемента, не добавленного в документ")
                }
                return e.innerHTML = t, null
            }, find: function (e, t, n) {
                return n ? i(e.querySelectorAll(t)) : e.querySelector(t)
            }, findByClassName: function (e, t, n) {
                var r, s;
                return e.getElementsByClassName ? (r = e.getElementsByClassName(t), s = n ? i(r) : r[0]) : s = a.find(e, "." + t, n), s
            }, findByPrefixedClass: function (e, t, n) {
                var r = ym.env.cssPrefix + t;
                return a.findByClassName(e, r, n)
            }, isNode: function (e) {
                return e && "number" == typeof e.nodeType && "string" == typeof e.nodeName
            }, isHTMLElement: function (e) {
                return e && 1 === e.nodeType && "string" == typeof e.nodeName && !r(e)
            }, isChildElement: function (e, t) {
            }
        }, s = a.create();
        e(a)
    }), ym.modules.define("util.dom.event", ["system.browser"], function (e, t) {
        var n = {}, r = {};
        if (r.wheel = "Gecko" == t.engine || t.isIE && t.documentMode >= 9 ? "wheel" : "mousewheel", n.mousewheel = "wheel", r.mouseenter = "mouseover", r.mouseleave = "mouseout", n.mouseover = "mouseenter", n.mouseout = "mouseleave", "WebKit" == t.engine) r.transitionend = "webkitTransitionEnd", n.webkitTransitionEnd = "transitionend"; else if ("Presto" == t.engine) {
            var i = function (e, t) {
                for (var n = 0, r = Math.min(e.length, t.length); n < r;) {
                    if (e[n] > t[n])return 1;
                    if (e[n] < t[n])return -1;
                    n++
                }
                return 0
            }, a = i(t.engineVersion.split(".").map(parseInt), [2, 10, 254]) >= 0 ? "otransitionend" : "oTransitionEnd";
            r.transitionend = a, n[a] = "transitionend"
        }
        if ("MSIE" == t.name && 10 == t.documentMode || "IEMobile" == t.name && t.engineVersion < 7)for (var s = ["pointerdown", "pointerup", "pointercancel", "pointermove", "pointerover", "pointerout", "pointerenter", "pointerleave", "gotpointercapture", "lostpointercapture"],
                                                                                                             o = function (e) {
                                                                                                                 var t = e.split("pointer");
                                                                                                                 return "MS" + (t[0].length > 0 ? t[0][0].toUpperCase() + t[0].slice(1) : "") + "Pointer" + t[1][0].toUpperCase() + t[1].slice(1)
                                                                                                             }, u = 0,
                                                                                                             l = s.length; u < l; u++) {
            var c = s[u], a = o(c);
            r[c] = a, n[a] = c
        }
        var d = {};
        ("MSIE" == t.name && 10 == t.documentMode || "IEMobile" == t.name && t.engineVersion < 7) && (d[2] = "touch", d[3] = "pen", d[4] = "mouse"), e({
            getActualName: function (e) {
                return "string" == typeof r[e] ? r[e] : e
            }, getIdealName: function (e) {
                return "string" == typeof n[e] ? n[e] : e
            }, getIdealPointerType: function (e) {
                var t = e.pointerType;
                return d.hasOwnProperty(t) ? d[t] : t
            }
        })
    }), ym.modules.define("util.dom.style", ["util.objectKeys", "util.dom.className", "util.css", "system.browser", "util.array"], function (e, t, n, r, i, a) {
        function s(e, t, n, r) {
            switch (t) {
                case"selectable":
                    M.selectable(e, n), o(e, "selectable", n, !0);
                    break;
                case"zIndex":
                    "auto" == n && i.oldIE && i.documentMode < 8 && (n = "0"), e.style.zIndex = n;
                    break;
                case"scaledBackground":
                    M.backgroundImage(e, n);
                    break;
                case"transform":
                    M.transform(e, n, n.use3D);
                    break;
                case"opacity":
                    M.opacity(e, n);
                    break;
                case"printBackground":
                    M.printBackground(e, n);
                    break;
                default:
                    r || o(e, t, n)
            }
        }

        function o(e, t, n, r) {
            var i = b(t);
            return i ? ("undefined" == typeof n ? (e.style.removeAttribute && e.style.removeAttribute(i, !1), e.style.removeProperty && e.style.removeProperty(i)) : e.style[i] = n, !0) : !r && s(e, t, n, !0)
        }

        function u(e) {
            return w ? e.currentStyle["box-sizing"] || "content-box" : e.style["box-sizing"] || "content-box"
        }

        function l(e, t) {
            for (var n in t)t.hasOwnProperty(n) && ("undefined" == typeof t[n] ? e.removeAttribute(n) : e.setAttribute(n, t[n]))
        }

        function c(e, t) {
            for (var n in t)t.hasOwnProperty(n) && o(e, n, t[n])
        }

        function d(e, n) {
            for (var r, i = t(n),
                     a = i.length; a--;)r = i[a], "undefined" == typeof n[r] ? e.removeAttribute(r) : e.setAttribute(r, n[r])
        }

        function p(e, n) {
            for (var r, i = t(n), a = i.length; a--;)r = i[a], o(e, r, n[r])
        }

        function h(e) {
            var t = 32760;
            return (i.isMobile || i.isTablet) && (t = 7e3), Math.max(Math.min(e, t), -t)
        }

        var i = ym.env.browser, f = /^\d+(px)?$/i, m = /^\d/,
            g = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom"],
            v = ["borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"], y = g.concat(v),
            _ = document.defaultView, b = ym.supports.css.checkProperty, E = i.chrome ? "1px" : "0",
            k = "Gecko" == i.engine, w = i.oldIE, x = function (e) {
                w ? e.returnValue = !1 : e.preventDefault()
            }, M = {
                backgroundImage: function (e, t) {
                    if (i.oldIE) {
                        var n = /\s*progid:DXImageTransform\.Microsoft\.AlphaImageLoader\([^\(]*\)\s*/gi,
                            r = ' progid:DXImageTransform.Microsoft.AlphaImageLoader(src="' + t + '",sizingMethod=scale) ',
                            s = e.style.filter.match(n);
                        t ? e.style.filter = s ? e.style.filter.replace(n, r) : r + e.style.filter : s && (e.style.filter = e.style.filter.replace(n, ""))
                    } else t ? (e.style.backgroundRepeat = "no-repeat", e.style.backgroundSize = "100% 100%", a.isArray(t) || (t = [t]), e.style.backgroundImage = "url(" + t.join("), url(") + ")") : (e.style.backgroundRepeat = "", e.style.backgroundSize = "", e.style.backgroundImage = "")
                }, selectable: function (e, t) {
                    t ? (w ? e.detachEvent("onselectstart", x) : e.removeEventListener("selectstart", x), C.attr(e, {unselectable: void 0}), n.remove(e, r.addPrefix("user-selection-none"))) : (w ? e.attachEvent("onselectstart", x) : e.addEventListener("selectstart", x), C.attr(e, {unselectable: "on"}), n.add(e, r.addPrefix("user-selection-none")))
                }, transform: function (e, t, n) {
                    e.style[ym.supports.css.checkProperty("transform")] = this.getTransformValue(t, n)
                }, getTransformValue: function (e, t) {
                    var n = e.offset || ["0", "0"], r = e.scale, i = e.rotate, a = typeof r;
                    return "undefined" == a ? r = ["1", "1"] : "string" != a && "number" != a || (r = [r, r]), n[0] = h(n[0]), n[1] = h(n[1]), (t && ym.env.browser.css3DTransform ? "translate3d(" + n[0] + "px," + n[1] + "px, " + E + ")" : "translate(" + n[0] + "px," + n[1] + "px)") + "scale(" + r[0] + "," + r[1] + ")" + (i ? "rotate(" + i + ")" : "")
                }, opacity: function (e, t) {
                    if (i.oldIE) {
                        if (e.style.filter && e.style.filter.indexOf("AlphaImageLoader") > 0)return;
                        "undefined" == typeof t ? (e.style.filter = "", e.style.removeAttribute("filter", !1)) : e.style.filter = "progid:DXImageTransform.Microsoft.Alpha(opacity=" + 100 * parseFloat(t) + ");"
                    } else e.style.opacity = t
                }, printBackground: function (e, t) {
                    if (ym.supports.printPatchNeeded) {
                        var i = r.addPrefix("patched-for-print");
                        t ? (e.style.listStyleImage = "url(" + t + ")", n.add(e, i)) : (n.remove(e, i), e.style.listStyleImage = "")
                    }
                }
            }, C = {
                attr: "function" == typeof Object.keys ? d : l,
                css: "function" == typeof Object.keys ? p : c,
                setPosition: function (e, t) {
                    e.style.left = h(Math.round(t[0])) + "px", e.style.top = h(Math.round(t[1])) + "px"
                },
                setSize: function (e, t, n) {
                    var r = t[0], i = t[1];
                    if (e.parentNode) {
                        var a = u(e), s = n && n.includePadding, o = n && n.includeBorder;
                        if ("content-box" == a && s || "content-box" != a && !s) {
                            var l = C.value(e, "paddingLeft") + C.value(e, "paddingRight"),
                                c = C.value(e, "paddingTop") + C.value(e, "paddingBottom");
                            s && (l *= -1, c *= -1), r += l, i += c
                        }
                        if ("border-box" == a && !o || "border-box" != a && o) {
                            var d = C.value(e, "borderLeftWidth") + C.value(e, "borderRightWidth"),
                                p = C.value(e, "borderTopWidth") + C.value(e, "borderBottomWidth");
                            o && (d *= -1, p *= -1), r += d, i += p
                        }
                    }
                    e.style.width = (r < 0 ? 0 : r) + "px", e.style.height = (i < 0 ? 0 : i) + "px"
                },
                getSize: function (e, t) {
                    var n = !t || !t.includePadding, r = !t || !t.includeBorder, i = e.offsetWidth, a = e.offsetHeight;
                    if (e.parentNode) {
                        var s;
                        if (n && r ? s = y : n ? s = g : r && (s = v), s) {
                            var o = this.values(e, s);
                            "paddingLeft" in o && (i -= o.paddingLeft + o.paddingRight, a -= o.paddingTop + o.paddingBottom), "borderLeftWidth" in o && (i -= o.borderLeftWidth + o.borderRightWidth, a -= o.borderTopWidth + o.borderBottomWidth)
                        }
                    }
                    return [i < 0 ? 0 : i, a < 0 ? 0 : a]
                },
                getOffset: function (e, t) {
                    var n = 0, r = 0;
                    if (t)if (e.getBoundingClientRect)var i = e.getBoundingClientRect(), a = e.ownerDocument.body,
                        s = e.ownerDocument.documentElement, o = s.clientTop || a.clientTop || 0,
                        u = s.clientLeft || a.clientLeft || 0,
                        n = (k ? Math.round(i.left) : i.left) + (window.self.pageXOffset || s.scrollLeft || a.scrollLeft) - u,
                        r = (k ? Math.round(i.top) : i.top) + (window.self.pageYOffset || s.scrollTop || a.scrollTop) - o; else for (; e && e.offsetParent;)n += e.offsetLeft, r += e.offsetTop, e = e.offsetParent; else n = e.offsetLeft, r = e.offsetTop;
                    return [n, r]
                },
                value: function (e, t, n) {
                    var r;
                    if (w) {
                        if (r = e.currentStyle[t], n)return r;
                        if (f.test(r))return parseInt(r, 10);
                        if (m.test(r)) {
                            var i = e.style.left, a = e.runtimeStyle.left;
                            return e.runtimeStyle.left = e.currentStyle.left, e.style.left = r || 0, r = e.style.pixelLeft, e.style.left = i, e.runtimeStyle.left = a, parseInt(r, 10)
                        }
                        return 0
                    }
                    var s = _.getComputedStyle(e, null);
                    return s ? (r = s.getPropertyValue(t.replace(/[A-Z]/g, "-$&").toLowerCase()), n ? r : parseInt(r, 10)) : null
                },
                values: function (e, t) {
                    var n = {};
                    if (w)for (var r = 0, i = t.length; r < i; r++) {
                        var a = t[r];
                        n[a] = this.value(e, a)
                    } else {
                        var s = _.getComputedStyle(e, null);
                        if (!s)return {};
                        for (var r = 0, i = t.length; r < i; r++) {
                            var a = t[r];
                            n[a] = parseInt(s.getPropertyValue(a.replace(/[A-Z]/g, "-$&").toLowerCase()), 10)
                        }
                    }
                    return n
                },
                patch: function (e, t) {
                    for (var n in t)if (t.hasOwnProperty(n)) {
                        var r = t[n];
                        s(e, n, r)
                    }
                },
                scaledBackgroundImage: M.backgroundImage
            };
        e(C)
    }), ym.modules.define("util.margin", ["util.array"], function (e, t) {
        var n = {
            correct: function (e) {
                var n;
                if (t.isArray(e))switch (e.length) {
                    case 1:
                        n = [e[0], e[0], e[0], e[0]];
                        break;
                    case 2:
                        n = [e[0], e[1], e[0], e[1]];
                        break;
                    case 3:
                        n = [e[0], e[1], e[2], e[1]];
                        break;
                    default:
                        n = [e[0], e[1], e[2], e[3]]
                } else n = [e, e, e, e];
                for (var r = 0; r < 4; r++)n[r] = n[r] || 0;
                return n
            }, sum: function (e) {
                var r;
                return t.each(e, function (e) {
                    e = n.correct(e), r ? (r[0] += e[0], r[1] += e[1], r[2] += e[2], r[3] += e[3]) : r = e
                }), r
            }
        };
        e(n)
    }), ym.modules.define("util.pixelBounds", ["util.array", "util.margin"], function (e, t, n) {
        var r = {
            fromPoints: function (e) {
                var t;
                if (e.length) {
                    for (var n, r = e[0].slice(0), i = r.slice(0), a = 0,
                             s = e.length; s; ++a, --s)n = e[a], r[0] > n[0] && (r[0] = n[0]), r[1] > n[1] && (r[1] = n[1]), i[0] < n[0] && (i[0] = n[0]), i[1] < n[1] && (i[1] = n[1]);
                    t = [r, i]
                } else t = null;
                return t
            }, fromBounds: function (e) {
                if (1 == e.length)return this.clone(e[0]);
                var n = [[1 / 0, 1 / 0], [-(1 / 0), -(1 / 0)]];
                return t.each(e, function (e) {
                    n[0][0] = Math.min(n[0][0], e[0][0]), n[1][0] = Math.max(n[1][0], e[1][0]), n[0][1] = Math.min(n[0][1], e[0][1]), n[1][1] = Math.max(n[1][1], e[1][1])
                }), n
            }, clone: function (e) {
                return [[e[0][0], e[0][1]], [e[1][0], e[1][1]]]
            }, getCenter: function (e) {
                return [.5 * (e[0][0] + e[1][0]), .5 * (e[0][1] + e[1][1])]
            }, getSize: function (e) {
                return [Math.abs(e[1][0] - e[0][0]), Math.abs(e[1][1] - e[0][1])]
            }, areIntersecting: function (e, t) {
                var n = r.getCenter(e), i = r.getCenter(t), a = n[0] - i[0], s = n[1] - i[1], o = r.getSize(e),
                    u = r.getSize(t);
                return Math.abs(a) < .5 * (o[0] + u[0]) && Math.abs(s) < .5 * (o[1] + u[1])
            }, getIntersection: function (e, t) {
                var n = null;
                return this.areIntersecting(e, t) && (n = [[Math.max(e[0][0], t[0][0]), Math.max(e[0][1], t[0][1])], [Math.min(e[1][0], t[1][0]), Math.min(e[1][1], t[1][1])]]), n
            }, containsPoint: function (e, t) {
                return t[0] >= e[0][0] && t[0] <= e[1][0] && t[1] >= e[0][1] && t[1] <= e[1][1]
            }, containsBounds: function (e, t) {
                return e[0][0] <= t[0][0] && e[1][0] >= t[1][0] && e[0][1] <= t[0][1] && e[1][1] >= t[1][1]
            }, fit: function (e, t, r) {
                var i = [0, 0], a = t[0], s = t[1], o = n.correct(r),
                    u = [[a[0] + Number(o[3]), a[1] + Number(o[0])], [s[0] - Number(o[1]), s[1] - Number(o[2])]];
                return e[0][0] < u[0][0] ? i[0] = u[0][0] - e[0][0] : e[1][0] > u[1][0] && (i[0] = Math.max(u[1][0] - e[1][0], u[0][0] - e[0][0])), e[0][1] < u[0][1] ? i[1] = u[0][1] - e[0][1] : e[1][1] > u[1][1] && (i[1] = Math.max(u[1][1] - e[1][1], u[0][1] - e[0][1])), i[0] || i[1] ? i : null
            }
        };
        e(r)
    }), ym.modules.define("util.vector", [], function (e) {
        var t = {
            length: function (e) {
                return Math.sqrt(e[0] * e[0] + e[1] * e[1])
            }, length2: function (e) {
                return e[0] * e[0] + e[1] * e[1]
            }, dot: function (e, t) {
                return e[0] * t[0] + e[1] * t[1]
            }, cross: function (e, t) {
                return e[0] * t[1] - e[1] * t[0]
            }, sub: function (e, t) {
                return [e[0] - t[0], e[1] - t[1]]
            }, add: function (e, t) {
                return [e[0] + t[0], e[1] + t[1]]
            }, scale: function (e, t) {
                return [e[0] * t, e[1] * t]
            }, normalize: function (e, n) {
                return n = 1 / (n || t.length(e)), [e[0] * n, e[1] * n]
            }, intersectionPoint: function (e, t, n, r) {
                var i = (e[0] - t[0]) * (r[1] - n[1]) - (e[1] - t[1]) * (r[0] - n[0]);
                if (Math.abs(i) < 1e-12)return !1;
                var a = ((e[0] - n[0]) * (r[1] - n[1]) - (e[1] - n[1]) * (r[0] - n[0])) / i,
                    s = ((e[0] - t[0]) * (e[1] - n[1]) - (e[1] - t[1]) * (e[0] - n[0])) / i;
                return a >= 0 && a <= 1 && s >= 0 && s <= 1 && {
                        point: [e[0] + a * (t[0] - e[0]), e[1] + a * (t[1] - e[1])],
                        a: a,
                        b: s
                    }
            }
        };
        e(t)
    }), ym.modules.define("shape.common.withOutlineBoundsGetter", [], function (e) {
        e({
            getBounds: function () {
                var e = this.getParams().get("outline", !0), t = this.getParams().get("strokeWidth", 0);
                if (!this._cachedBounds) {
                    var n = this.getGeometry().getBounds(), r = e ? .5 * t : 0;
                    r > 0 && (n = [[n[0][0] - r, n[0][1] - r], [n[1][0] + r, n[1][1] + r]]), this._cachedBounds = n
                }
                return this._cachedBounds
            }
        })
    }), ym.modules.define("yandex.counter", ["yandex.counterStorage"], function (e, t) {
        var n = ym.env.hosts.api, r = n.maps, i = n.statCounter + "counter/dtype=stred", a = Math.random();
        e({
            count: function (e, t) {
                var n, i, a, s = (new Date).getTime() + Math.round(100 * Math.random());
                "string" == typeof t ? n = t : (t = t || {}, n = t.path, i = t.redirectUrl, a = t.additionalParams), n && (t.useVersionPrefix && (n = this.versionPrefix + "." + n), t.useCustomPrefix && ym.env.server.params.counter_prefix && (n = ym.env.server.params.counter_prefix + "." + n), e += "/path=" + n), a && (e += a), (i || "undefined" == typeof i) && (i = i || r, e += "/rnd=" + s, e += "/*" + i), this._count(e, t)
            }, statfaceCount: function (e, t, n) {
                var r = i + "/pid=" + e + "/cid=" + t;
                this.count(r, n)
            }, directCount: function (e, t) {
                this._count(e, t)
            }, countByKey: function (e, n) {
                var r = t.get(e);
                switch ((n || r.path) && (r.options = r.options || {}, r.options.path = n || r.path), r.type) {
                    case"direct":
                        this.directCount(r.url);
                        break;
                    default:
                    case"statface":
                        this.statfaceCount(r.pid, r.cid, r.options)
                }
            }, versionPrefix: ym.env.version.replace(/\W/g, "_"), _count: function (e, t) {
                if (!(t && "undefined" != typeof t.share && a > t.share)) {
                    var n = new Image;
                    n.src = e
                }
            }
        })
    }), ym.modules.define("yandex.counterStorage", ["util.Storage"], function (e, t) {
        var n = new t, r = .01;
        n.add("control", {
            pid: 443,
            cid: 72722,
            options: {share: r, useVersionPrefix: !0, useCustomPrefix: !0}
        }).add("modulesUsage", {
            pid: 443,
            cid: 72724,
            options: {share: r, useVersionPrefix: !0, useCustomPrefix: !0}
        }).add("map", {pid: 443, cid: 72717, options: {share: r, useCustomPrefix: !0}}).add("distribution", {
            pid: 443,
            cid: 72793,
            options: {useCustomPrefix: !0}
        }).add("business_search", {pid: 443, cid: 72688, options: {useCustomPrefix: !0}}), e(n)
    }), ym.modules.define("domEvent.Base", ["util.defineClass", "Event"], function (e, t, n) {
        function r(e, t) {
            r.superclass.constructor.call(this, e), this._dataKey = "domEventData" + t
        }

        t(r, n, {
            callMethod: function (e) {
                return this.get(e).apply(this.originalEvent, Array.prototype.slice.call(arguments, 1))
            }, stopImmediatePropagation: function () {
                var e = this._getPropagatedData();
                e.immediatePropagationStopped = !0, e.propagationStopped = !0
            }, isImmediatePropagationStopped: function () {
                return this._getPropagatedData().immediatePropagationStopped
            }, stopPropagation: function () {
                this._getPropagatedData().propagationStopped = !0
            }, isPropagationStopped: function () {
                return this._getPropagatedData().propagationStopped
            }, preventDefault: function () {
                this._getPropagatedData().defaultPrevented = !0
            }, isDefaultPrevented: function () {
                return this._getPropagatedData().defaultPrevented
            }, allowMapEvent: function () {
                this._getPropagatedData().mapEventAllowed = !0
            }, disallowMapEvent: function () {
                this._getPropagatedData().mapEventAllowed = !1
            }, isMapEventAllowed: function () {
                return this._getPropagatedData().mapEventAllowed
            }, _getPropagatedData: function () {
                var e = this.get("propagatedData");
                return e[this._dataKey] || (e[this._dataKey] = {})
            }
        }), e(r)
    }), ym.modules.define("util.dom.ClassName.byClassList", [], function (e) {
        var t = {
            has: function (e, t) {
                return e.classList.contains(t)
            }, add: function (e, n) {
                for (var r = n.split(" "), i = 0, a = r.length; i < a; ++i)e.classList.add(r[i]);
                return t
            }, remove: function (e, n) {
                for (var r = n.split(" "), i = 0, a = r.length; i < a; ++i)e.classList.remove(r[i]);
                return t
            }
        };
        e(t)
    }), ym.modules.define("util.dom.ClassName.byClassName", [], function (e) {
        var t = {
            has: function (e, t) {
                return e.className.match(new RegExp("(\\s|^)" + t + "(\\s|$)"))
            }, add: function (e, n) {
                return t.has(e, n) || (e.className += e.className ? " " + n : n), t
            }, remove: function (e, n) {
                if (t.has(e, n)) {
                    var r = new RegExp("(\\s|^)" + n + "(\\s|$)");
                    e.className = e.className.replace(r, " ").replace(/(^\s+)|(\s+$)/g, "")
                }
                return t
            }
        };
        e(t)
    }), ym.modules.define("controller.Base", ["vow", "router", "util.defineClass", "util.array", "event.Manager", "data.Manager", "util.dom.element", "styles"], function (e, t, n, r, i, a, s, o) {
        e(r(function () {
            this._models = [], this.events = new a({context: this})
        }, {
            renderModels: function (e) {
                return "string" == typeof e && (e = [e]), t.all(i.map(e, function (e) {
                    return this.addModel(e)
                }, this)).then(this._render, this)
            }, addModel: function (e) {
                return ym.modules.require(["model." + e]).spread(function (e) {
                    var t = new e(this._data);
                    t.getLayout().events.add("shapechange", this._onModelLayoutSizeChange, this), this._models.push(t)
                }, this)
            }, getElement: function () {
                return this._element
            }, getSize: function () {
                return this._element || this._render(), [this._element.offsetWidth, this._element.offsetHeight]
            }, getData: function () {
                return this._data
            }, setData: function (e) {
                this._data = new s(e)
            }, updateData: function (e) {
                this._data.freeze().unsetAll().set(e).unfreeze()
            }, _render: function () {
                document.body.innerHTML = "", this._element = o.create({
                    parentNode: document.body,
                    className: "controller"
                }), i.each(this._models, function (e) {
                    e.appendTo(o.create({parentNode: this._element, className: "model"}))
                }, this)
            }, _onModelLayoutSizeChange: function () {
                n.fireToParent("sizechange", {size: this.getSize()})
            }
        }))
    }), ym.modules.define("controller.BusinessCard", ["util.defineClass", "controller.Base"], function (e, t, n) {
        e(t(function () {
            n.call(this)
        }, n, {
            index: function () {
                this.renderModels("BusinessCardMapsButton")
            }
        }))
    }), ym.modules.define("controller.GeoObject", ["vow", "util.defineClass", "controller.Base"], function (e, t, n) {
        e(t(function () {
            n.call(this)
        }, n, {
            index: function () {
                this.renderModels(["TargetButton", "FavoriteButton"])
            }
        }))
    }), ym.modules.define("controller.Map", ["util.defineClass", "controller.Base"], function (e, t, n) {
        e(t(function () {
            n.call(this)
        }, n, {
            index: function () {
                this.renderModels("MapsButton")
            }
        }))
    }), ym.modules.define("controller.Panorama", ["util.defineClass", "controller.Base"], function (e, t, n) {
        e(t(function () {
            n.call(this)
        }, n, {
            index: function () {
                this.renderModels("PanoramaMapsButton")
            }
        }))
    }), ym.modules.define("controller.RouteBalloonButton", ["util.defineClass", "controller.Base"], function (e, t, n) {
        e(t(function () {
            n.call(this)
        }, n, {
            index: function () {
                this.renderModels("RouteBalloonButton")
            }
        }))
    }),
        ym.modules.define("DomEvent", ["util.defineClass", "domEvent.Base", "domEvent.overrideStorage", "component.event.Cacher"], function (e, t, n, r, i) {
            function a(e, t) {
                a.superclass.constructor.call(this, e, t), this._cache = {type: t || e.type}, this._cacher = null
            }

            t(a, n, {
                get: function (e) {
                    return this._cacher || (this._cacher = new i(this, this._cache, r)), this._cacher.get(e)
                }, clone: function (e) {
                    return new a(e, this._cache.type)
                }
            }), e(a)
        }), ym.modules.define("domEvent.override.common", ["domEvent.overrideStorage", "util.eventId", "util.instantCache"], function (e, t, n, r) {
        function i(e, t) {
            var n = e.originalEvent, r = 0, i = 0;
            "wheel" == n.type && (i = -n.deltaY, r = n.deltaX), "mousewheel" == n.type && ("undefined" != typeof n.wheelDeltaY ? (i = n.wheelDeltaY, r = n.wheelDeltaX) : i = n.wheelDelta), t.set("delta", i), t.set("deltaY", i), t.set("deltaX", r)
        }

        function a(e, t) {
            return u(e, t), e.get("pageX")
        }

        function s(e, t) {
            return u(e, t), e.get("pageY")
        }

        function o(e, t) {
            return [e.get("pageX"), e.get("pageY")]
        }

        function u(e, t) {
            var n = e.originalEvent, r = n.pageX, i = n.pageY;
            "undefined" == typeof r && (r = n.clientX, i = n.clientY, m && (r += (m.scrollLeft || 0) - (m.clientLeft || 0), i += (m.scrollTop || 0) - (m.clientTop || 0)), g && (r += g.scrollLeft || 0, i += g.scrollTop || 0)), t.set("pageX", r), t.set("pageY", i)
        }

        function l(e, t) {
            var n = d(e, t);
            return n.target
        }

        function c(e, t) {
            var n = d(e, t);
            return n.relatedTarget
        }

        function d(e, t) {
            var n = e.originalEvent, r = n.target || n.srcElement, i = n.relatedTarget || null;
            if (r && 3 == r.nodeType && (r = r.parentNode), !n.relatedTarget && n.fromElement && (i = n.fromElement == r ? n.toElement : n.fromElement), "Gecko" == p.engine && n.relatedTarget)try {
                -n.relatedTarget.nodeType
            } catch (a) {
                i = null
            }
            return t.set("target", r), t.set("relatedTarget", i), {target: r, relatedTarget: i}
        }

        var p = ym.env.browser, h = function (e, t) {
            return i(e, t), e.get("delta")
        }, f = function (e, t) {
            return i(e, t), e.get("deltaX")
        };
        t.add("delta", h).add("deltaY", h).add("deltaX", f);
        var m = document.documentElement, g = document.body;
        t.add("pageX", a).add("pageY", s).add("position", o), t.add("propagatedData", function (e, t) {
            var i = e.originalEvent, a = n.get(i), s = r.get(a);
            return s || r.add(a, s = {}), s
        }), t.add("activeMouseButton", function (e) {
            var t = e.originalEvent, n = -1;
            if (void 0 != t.buttons) {
                var r = t.buttons;
                n = 0, 4 & r ? n = 3 : 2 & r ? n = 2 : 1 & r && (n = 1), "Trident" == p.engine && 9 == p.documentMode && "mousemove" == t.type.toLocaleLowerCase() && (n = -1)
            } else n = t.hasOwnProperty("which") ? t.which : -1;
            return n
        }), t.add("target", l).add("relatedTarget", c), e(!0)
    }), ym.modules.define("domEvent.override.ie78", ["domEvent.overrideStorage"], function (e, t) {
        var n = [];
        n[0] = -1, n[1] = 0, n[2] = 2, n[3] = -1, n[4] = 1, t.add("button", function (e) {
            return n[e.originalEvent.button]
        }), t.add("activeMouseButton", function (e) {
            var t = n[e.originalEvent.button];
            return t === -1 ? -1 : t + 1
        }), t.add("preventDefault", function () {
            return function () {
                this.returnValue = !1
            }
        }), t.add("stopPropagation", function () {
            return function () {
                this.cancelBubble = !0
            }
        }), e({})
    }), ym.modules.define("domEvent.overrideStorage", ["util.Storage"], function (e, t) {
        e(new t)
    }), ym.modules.define("error", ["util.defineClass", "util.extend"], function (e, t, n) {
        function r(e, t) {
            function n(t) {
                Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = (new Error).stack, this.name = e, this.message = t
            }

            return t && (n.errorClass = t), i[e] = n, n
        }

        var i = {
            create: function (e, t) {
                return i[e] ? new i[e](t) : void i.log("ProcessError", e + ": is undefined error type")
            }, throwException: function (e, t) {
                if (ym.env.debug)throw"object" == typeof e ? e : i.create(e, t)
            }, throwExceptionIf: function (e, t, n) {
                e && i.throwException(t, n)
            }, warn: function (e, t) {
                if (ym.env.debug && "object" == typeof console && console.warn) {
                    var n = "object" == typeof e ? e : i.create(e, t), r = new Error(n.name + ": " + n.message);
                    r.stack = n.stack, console.warn(r)
                }
            }, warnIf: function (e, t, n) {
                e && i.warn(t, n)
            }
        }, a = r("_YMError");
        t(a, Error);
        var s = r("ClientError");
        t(s, a);
        var o = r("InputError", "ClientError");
        t(o, s);
        var u = r("StateError", "ClientError");
        t(u, s);
        var l = r("ProcessError", "ClientError");
        t(l, s);
        var c = r("StorageItemAccessError", "ClientError");
        t(c, s);
        var d = r("FeatureRemovedError", "ClientError");
        t(d, s);
        var p = r("ExternalError");
        t(p, a);
        var h = r("RequestError", "ExternalError");
        t(h, p);
        var f = r("DataProcessingError", "ExternalError");
        t(f, p);
        var m = r("AccessError", "ExternalError");
        t(m, p);
        var g = r("NotSupportedError", "ExternalError");
        t(g, p);
        var v = r("Reject");
        t(v, a);
        var y = r("OperationUnallowedReject", "Reject");
        t(y, v);
        var _ = r("OperationCanceledReject", "Reject");
        t(_, v);
        var b = r("EmptyResultReject", "Reject");
        t(b, v);
        var E = r("OperationUnawailableReject", "Reject");
        t(E, v);
        var k = r("Warning");
        t(k, a);
        var w = r("DeprecationWarning", "Warning");
        t(w, k);
        var x = r("OveruseWarning", "Warning");
        t(x, k), e(i)
    }), ym.vow.debug = !0, ym.modules.require(["styles.css", "system.browser", "theme.browser.current", "router", "template.filter.l10n"]), "undefined" != typeof document.documentMode && document.documentMode < 9 && document.createElement("ymaps"), ym.modules.define("layout.BusinessCardMapsButton", ["util.defineClass", "util.dom.style", "layout.tiny.factory", "layout.BusinessCardMapsButton.ymtpl", "shape.Rectangle", "geometry.pixel.Rectangle"], function (e, t, n, r, i, a, s) {
        e(r.createClass(i, {
            getShape: function () {
                var e = this.getElement();
                return new a(new s([[0, 0], e ? n.getSize(e.parentNode) : [0, 0]]))
            }
        }))
    }), ym.modules.define("layout.BusinessCardMapsButton.ymtpl", [], function (e) {
        e([0, '<ymaps class="business-card-maps-button"><ymaps class="business-card-maps-button-icon"></ymaps><ymaps class="business-card-maps-button-text">', 2001, ["", [["l10n", "'distribution.yaOpenInMaps'"]]], 0, "</ymaps></ymaps>\n"])
    }), ym.modules.define("layout.Button", ["util.defineClass", "util.dom.style", "util.dom.element", "layout.tiny.factory", "layout.Button.ymtpl", "shape.Rectangle", "geometry.pixel.Rectangle", "localization.common.current"], function (e, t, n, r, i, a, s, o) {
        var u = i.createClass(a, {
            build: function () {
                u.superclass.build.apply(this, arguments), this._textContainer = r.findByClassName(this.getElement(), "button__text"), this._setupText()
            }, getShape: function () {
                var e = this.getElement();
                return new s(new o([[0, 0], e ? n.getSize(e.parentNode) : [0, 0]]))
            }, _setupText: function () {
                r.create({html: this.getData().get("text"), parentNode: this._textContainer})
            }
        });
        e(u)
    }), ym.modules.define("layout.Button.ymtpl", [], function (e) {
        e([0, '<ymaps class="button button_size_small" style="width: ', 2001, ["availWidth", []], 0, 'px;">\n    <ymaps class="button__text"></ymaps>\n</ymaps>'])
    }), ym.modules.define("layout.MapsButton", ["util.defineClass", "util.dom.style", "util.dom.element", "util.dom.className", "Monitor", "layout.tiny.factory", "layout.MapsButton.ymtpl", "shape.Rectangle", "geometry.pixel.Rectangle", "localization.common.current"], function (e, t, n, r, i, a, s, o, u, l) {
        var c = s.createClass(o, {
            build: function () {
                c.superclass.build.apply(this, arguments), this._textContainer = r.findByClassName(this.getElement(), "gotoymaps__text-container"), this._textContainer && (this._textMonitor = new a(this.getData()).add("text", this._changeText, this), this._setupText())
            }, clear: function () {
                this._currentText = null, this._textMonitor && (this._textMonitor.removeAll(), this._textMonitor = null), this._textContainer = null, c.superclass.clear.apply(this, arguments)
            }, getShape: function () {
                var e = this.getElement();
                return new u(new l([[0, 0], e ? n.getSize(e.parentNode) : [0, 0]]))
            }, _setupText: function () {
                this._currentText = this.getData().get("text"), r.create({
                    html: this._currentText,
                    parentNode: this._textContainer
                })
            }, _changeText: function () {
                var e = this.getData().get("text");
                if (e != this._currentText) {
                    this._currentText = e;
                    var t = this._textContainer, n = t.firstChild, a = r.create({className: "in", html: e}), s = this;
                    t.insertBefore(a, n), i.add(t, "animate"), i.add(n, "out"), i.remove(a, "in"), this.events.fire("shapechange"), setTimeout(function () {
                        i.remove(t, "animate"), t.removeChild(n), s.events.fire("shapechange")
                    }, 300)
                }
            }
        });
        e(c)
    }), ym.modules.define("layout.MapsButton.ymtpl", [], function (e) {
        e([0, '<div class="gotoymaps">\n    ', 2003, 'data.get("availWidth") >= 25', 0, '\n        <div class="gotoymaps__icon"></div>\n        ', 2003, 'data.get("availWidth") >= 165', 0, '\n            <div class="gotoymaps__text"><div class="gotoymaps__text-container"></div></div>\n        ', 2005, null, 0, "\n    ", 2005, null, 0, "\n</div>"])
    }), ym.modules.define("layout.tiny.Base", ["util.defineClass", "layout.Base", "util.dom.element", "layout.storage", "event.Mapper", "layout.SubLayoutEventMappingTable", "util.cancelableCallback"], function (e, t, n, r, i, a, s, o) {
        function u(e, t) {
            u.superclass.constructor.call(this, e, t), this._renderedTemplate = null, this._sublayouts = null, this._oldShape = null, this._setupTemplateDataManager(e), this._sublayoutsEmptiness = this.calculateSublayoutsEmptiness(), this._emptiness = this.calculateEmptiness(), this.init()
        }

        t(u, n, {
            init: function () {
            }, setData: function (e) {
                this._clearTemplateDataManager(), this._setupTemplateDataManager(e), u.superclass.setData.call(this, e)
            }, getTemplate: function () {
            }, getSublayout: function (e) {
                for (var t = this._getSublayouts(), n = 0,
                         r = t.length; n < r; n++)if (t[n].name == e)return t[n].instance;
                return null
            }, getElement: function () {
                return this._element
            }, build: function () {
                this._element = r.create({
                    html: this._getRenderedTemplate().text,
                    parentNode: this.getParentElement()
                }), this._appendSubnodes(), this._appendSublayouts(), u.superclass.build.call(this)
            }, clear: function () {
                u.superclass.clear.call(this), this._clearSublayouts(), r.destroy(this._element), this._element = null
            }, rebuild: function () {
                this._freezeTemplateDataManager(), this.getParentElement() && this.clear(), this._destroySublayouts(), this._render(), this._createSublayouts(), this._updateEmptiness(), this.getParentElement() && this.build(), this._fireChange(), this.testShapeChange(), this._unfreezeTemplateDataManager()
            }, isEmpty: function () {
                return this._emptiness
            }, areSublayoutsEmpty: function () {
                return this._sublayoutsEmptiness
            }, calculateEmptiness: function () {
                return this.isTemplateEmpty() && this.areSublayoutsEmpty()
            }, isTemplateEmpty: function () {
                return this._getRenderedTemplate().empty
            }, calculateSublayoutsEmptiness: function () {
                for (var e = this._getSublayouts(), t = 0, n = e.length; t < n; t++) {
                    var r = e[t];
                    if (r.isLoaded && !r.instance.isEmpty())return !1
                }
                return !0
            }, _updateEmptiness: function () {
                var e = this._emptiness;
                this._emptiness = this.calculateEmptiness(), e != this._emptiness && (this.onEmptinessChange(), this.events.fire("emptinesschange"))
            }, onEmptinessChange: function () {
            }, _updateSublayoutsEmptiness: function () {
                var e = this._sublayoutsEmptiness;
                this._sublayoutsEmptiness = this.calculateSublayoutsEmptiness(), e != this._sublayoutsEmptiness && (this.onSublayoutsEmptinessChange(), this._updateEmptiness())
            }, onSublayoutsEmptinessChange: function () {
            }, getShape: function () {
                return this._shape && !this._shapeOptionsChanged() || (this._shape = this._createShape()), this._shape
            }, _shapeOptionsChanged: function () {
                var e = this.getData().options.get("shape");
                return this._previousShapeOption != e && (this._previousShapeOption = e, !0)
            }, _createShape: function () {
                if (this.getData() && this.getData().options) {
                    var e = this.getData().options.get("shape");
                    if (e)return e
                }
                return null
            }, onDataChange: function () {
                this._testValuesChanges() ? this.rebuild() : this._sublayouts && this._testSublayoutChanges()
            }, _fireChange: function () {
                this.events.fire("change")
            }, destroy: function () {
                this.getParentElement() && this.clear(), this._destroySublayouts(), this._clearTemplateDataManager()
            }, setParentElement: function (e) {
                this._renderedTemplate || (this._render(), this._createSublayouts()), this._freezeTemplateDataManager();
                var t = this._parentElement != e;
                u.superclass.setParentElement.call(this, e), t && this.testShapeChange(), this._unfreezeTemplateDataManager()
            }, testShapeChange: function () {
                var e = this._oldShape, t = this.getShape();
                (!!e != !!t || e && t && !e.equals(t)) && (this._oldShape = t, this.events.fire("shapechange"))
            }, _clearSublayouts: function () {
                for (var e = this._getSublayouts(), t = 0, n = e.length; t < n; t++) {
                    var r = e[t];
                    if (r.isLoaded) {
                        var i = e[t].instance;
                        i.getParentElement() && i.setParentElement(null)
                    }
                }
            }, _render: function () {
                this._renderedTemplate = this.getTemplate().build(this._templateDataManager)
            }, _createSublayouts: function () {
                var e = this._getRenderedTemplate().sublayouts;
                this._sublayouts = [];
                for (var t = 0, n = e.length; t < n; t++) {
                    var r = e[t], a = r.value, s = i.get(a, this.getData()), o = "undefined" != typeof s,
                        u = {isLoaded: o, storageKey: a, key: r.key, id: r.id, name: r.name || r.id, params: r};
                    o ? (u.instance = this._createSublayoutInstance(s), u.value = s) : this._createSublayoutRequest(u), this._sublayouts.push(u)
                }
            }, _createSublayoutRequest: function (e) {
                var t = o.create(function (t) {
                    e.isLoaded = !0, e.instance = this._createSublayoutInstance(t), e.value = t, this._element && this._appendSublayout(e), this._updateSublayoutsEmptiness(), this.testShapeChange(), this._fireChange()
                }, this);
                i.require({keys: [e.storageKey], data: this.getData()}).spread(t).done(), e.onLoadCallback = t
            }, _destroySublayouts: function () {
                if (this._sublayouts) {
                    for (var e = 0, t = this._sublayouts.length; e < t; e++) {
                        var n = this._sublayouts[e];
                        n.isLoaded ? this._destroySublayoutInstance(n.instance) : n.onLoadCallback.cancel()
                    }
                    this._sublayouts = null
                }
            }, _createSublayoutInstance: function (e) {
                if (ym.env.debug && "function" != typeof e)throw new Error("layout.templateBased.Base._createSublayoutInstance: Не удалось получить класс вложенного макета.");
                var t = new e(this.getData(), this.getParameters());
                return t.events.setParent(new a(this.events, this.createSubLayoutEventMappingTable())).add("emptinesschange", this.onSublayoutEmptinessChange, this).add("shapechange", this.testShapeChange, this), t
            }, _destroySublayoutInstance: function (e) {
                e.events.remove("emptinesschange", this.onSublayoutEmptinessChange, this).remove("shapechange", this.testShapeChange, this).setParent(null), e.destroy()
            }, createSubLayoutEventMappingTable: function () {
                return new s(this)
            }, onSublayoutEmptinessChange: function () {
                this._updateSublayoutsEmptiness()
            }, _appendSubnodes: function () {
                for (var e = this._getRenderedTemplate().subnodes, t = 0, n = e.length; t < n; t++) {
                    var r = e[t], i = document.getElementById(r.parentId);
                    i.appendChild(r.element)
                }
            }, _appendSublayouts: function () {
                for (var e = this._getSublayouts(), t = 0, n = e.length; t < n; t++) {
                    var r = e[t];
                    r.isLoaded && this._appendSublayout(r)
                }
            }, _appendSublayout: function (e) {
                e.instance.setParentElement(document.getElementById(e.id))
            }, _clearSublayout: function (e) {
                e.instance.setParentElement(null)
            }, _removeSublayout: function (e) {
                this._clearSublayout(e), this._destroySublayoutInstance(e.instance)
            }, _setupTemplateDataManager: function (e) {
                this._templateDataManager = e, this._templateDataManager.events.add("change", this.onDataChange, this)
            }, _clearTemplateDataManager: function () {
                this._templateDataManager.events.remove("change", this.onDataChange, this), this._templateDataManager.destroy()
            }, _freezeTemplateDataManager: function () {
                this._templateDataManager && this._templateDataManager.freeze()
            }, _unfreezeTemplateDataManager: function () {
                this._templateDataManager && this._templateDataManager.unfreeze()
            }, _testValuesChanges: function () {
                if (!this._renderedTemplate)return !1;
                var e = this._renderedTemplate.renderedValues, t = this._templateDataManager;
                for (var n in e)if (e.hasOwnProperty(n) && e[n].value !== t.get(n))return !0;
                return !1
            }, _testSublayoutChanges: function () {
                for (var e, t, n = !1, r = this._getSublayouts(), a = 0, s = r.length; a < s; a++) {
                    e = r[a];
                    var o = this._templateDataManager.get(e.key);
                    "undefined" != typeof o && (t = i.get(o, this.getData()), t ? t !== e.value && (e.isLoaded ? this._removeSublayout(e) : (e.onLoadCallback.cancel(), delete e.onLoadCallback), e.isLoaded = !0, e.value = t, e.instance = this._createSublayoutInstance(e.value), this._appendSublayout(e), n = !0) : (e.instance && this._removeSublayout(e), delete e.instance, delete e.value, e.isLoaded || e.onLoadCallback.cancel(), n = !0, e.isLoaded = !1, e.storageKey = o, this._createSublayoutRequest(e)))
                }
                n && this._fireChange()
            }, _getRenderedTemplate: function () {
                return this._renderedTemplate || this._render(), this._renderedTemplate
            }, _getSublayouts: function () {
                return this._sublayouts || this._createSublayouts(), this._sublayouts
            }
        }), e(u)
    }), ym.modules.define("layout.tiny.factory", ["util.defineClass", "util.extend", "layout.tiny.Base", "Template"], function (e, t, n, r, i) {
        function a(e, a, s) {
            var o = new i(e), u = function () {
                u.superclass.constructor.apply(this, arguments)
            };
            return t(u, r, n({
                getTemplate: function () {
                    return u.getTemplate()
                }
            }, a)), n(u, {
                getTemplate: function () {
                    return o
                }
            }, s), u
        }

        e({createClass: a})
    }), ym.modules.define("linkBuilder.Base", ["linkBuilder.parsers", "util.array", "util.coordinates.reverse", "util.defineClass"], function (e, t, n, r, i) {
        var a = function (e, t, n) {
            return [t, n]
        }, s = function () {
        };
        i(s, {
            build: function (e) {
            }, buildParameters: function (e) {
                var t = [], n = this.getMapParameters();
                for (var r in n)if (n.hasOwnProperty(r)) {
                    var i = e.get(r), a = n[r], s = this._get(r, a, i);
                    s && s.length && t.push(this.makeParameter(s))
                }
                return "?" + t.join("&")
            }, getMapParameters: function () {
                return {
                    where: "where",
                    map: {zoom: "z", center: "ll"},
                    layers: "l",
                    route: {points: "rtext", activeRouteIndex: "rtn", viaIndexes: "via", type: "rtt", mode: "rtm"},
                    search: {request: "text", resultId: "oid", resultLayer: "ol", resultCoordinates: "oll"},
                    traffic: {mode: "trfm", state: "trfst"},
                    points: "pt",
                    rulerState: "rl",
                    origin: "origin",
                    from: "from",
                    userMap: "um",
                    panorama: {position: "oll", layer: "ol", direction: "ost"},
                    whatshere: {point: "whatshere[point]", zoom: "whatshere[zoom]"},
                    poi: {uri: "poi[uri]", point: "poi[point]"}
                }
            }, get: function (e, i, a) {
                var s = [];
                switch (e) {
                    case"map":
                        s = this.getFromObject(a, i, t.map);
                        break;
                    case"route":
                        var o = a.points;
                        o && o.length && (s = this.getFromObject(a, i, t.route));
                        break;
                    case"search":
                        s = this.getFromObject(a, i, t.search);
                        break;
                    case"points":
                        a.length && (a = r(a), n.isArray(a[0]) && (a = a.join("~")), s.push([i, a]));
                        break;
                    case"panorama":
                        s = this.getFromObject(a, i, t.panorama);
                        break;
                    case"whatshere":
                        s = this.getFromObject(a, i, t.whatshere);
                        break;
                    default:
                        s = n.isArray(a) || "object" != typeof a.valueOf() ? [i, a] : this.getFromObject(a, i)
                }
                return s
            }, getFromObject: function (e, t, n) {
                n = n || a;
                var r = [];
                for (var i in t)if (t.hasOwnProperty(i)) {
                    var s = e[i];
                    "undefined" != typeof s && null !== s && r.push(n.call(this, i, t[i], s, e))
                }
                return r
            }, makeParameter: function (e) {
                var t;
                return n.isArray(e[0]) ? (e = n.map(e, function (e) {
                    return encodeURI(e.join("="))
                }), t = e.join("&")) : (e = n.map(e, encodeURI), t = e.join("=")), t
            }, _get: function (e, t, n) {
                return "undefined" != typeof n && null !== n ? this.get(e, t, n) : null
            }
        }), e(s)
    }), ym.modules.define("linkBuilder.androidMaps", ["linkBuilder.Base", "linkBuilder.maps", "localization.common.current", "util.extend", "util.defineClass"], function (e, t, n, r, i, a) {
        var s = {origin: "source", source: "utm_source", host: "utm_medium"}, o = r.distribution.yaMapsAndroidLink,
            u = function () {
            };
        a(u, t, {
            getMapParameters: function () {
                var e = u.superclass.getMapParameters.call(this);
                return i(e, s)
            }, get: function (e, t, n) {
                return "points" == e && n && n.length && n.length > 1 && (n = [n[0]]), u.superclass.get(e, t, n)
            }, build: function (e) {
                return o.replace("{parameters}", this.buildParameters(e)).replace("{fallback_url}", encodeURI(n.build(e)))
            }
        }), e(new u)
    }), ym.modules.define("test.yandex.state.androidMapsLinkBuilder", ["data.Manager", "yandex.state.androidMapsLinkBuilder", "localization.common.current", "util.array"], function (e, t, n, r, i) {
        function a(e, t) {
            var n = e.split("?")[1].split("#Intent")[0], r = {}, a = !0;
            return n = n.split("&"), n.length == t.length && (i.each(n, function (e) {
                e = e.split("="), r[e[0]] = e[1]
            }), i.each(t, function (e) {
                "undefined" != typeof r[e[0]] && r[e[0]] === e[1] || (a = !1)
            }), a)
        }

        var s = r.distribution.yaMapsAndroidLink;
        describe("test.yandex.state.androidMapsLinkBuilder", function () {
            var e;
            beforeEach(function () {
                e = new t
            }), it("Должен сгенерировать ссылку без параметров", function () {
                var t = n.build(e);
                expect(t).to.be(s.replace("{parameters}", "?"))
            }), it("Должен сгенерировать ссылку с одним параметром (уровень масштабирования)", function () {
                e.set("map", {zoom: 14});
                var t = n.build(e);
                expect(a(t, [["z", "14"]])).to.be(!0)
            }), it("Должен сгенерировать ссылку с несколькими параметрами", function () {
                e.set("map", {zoom: 14, center: [11, 11]});
                var t = n.build(e);
                expect(a(t, [["ll", "11,11"], ["z", "14"]])).to.be(!0)
            })
        }), e()
    }), ym.modules.define("linkBuilder.iOsMaps", ["linkBuilder.Base", "localization.common.current", "util.extend", "util.defineClass"], function (e, t, n, r, i) {
        var a = {origin: "source", source: "utm_source", host: "utm_medium"}, s = n.distribution, o = s.yaMapsIOsLink,
            u = (s.yaMapsIOsRouteLink, s.yaMapsIOsServiceLink), l = function () {
            };
        i(l, t, {
            getMapParameters: function () {
                var e = l.superclass.getMapParameters.call(this);
                return r(e, a)
            }, build: function (e) {
                return u.replace("{url-scheme}", encodeURIComponent(o + this.buildParameters(e)))
            }
        }), e(new l)
    }), ym.modules.define("test.yandex.state.iOsMapsLinkBuilder", ["data.Manager", "yandex.state.iOsMapsLinkBuilder", "localization.common.current", "util.array"], function (e, t, n, r, i) {
        function a(e, t) {
            var n = decodeURIComponent(e).split("yandexmaps://maps.yandex.ru/?")[1], r = {}, a = !0;
            return n = n.split("&"), n.length == t.length && (i.each(n, function (e) {
                e = e.split("="), r[e[0]] = e[1]
            }), i.each(t, function (e) {
                "undefined" != typeof r[e[0]] && r[e[0]] === e[1] || (a = !1)
            }), a)
        }

        function s(e) {
            return u.replace("{url-scheme}", encodeURIComponent(e))
        }

        var o = r.distribution, u = o.yaMapsIOsServiceLink, l = o.yaMapsIOsLink;
        o.yaMapsIOsRouteLink;
        describe("yandex.state.iOsMapsLinkBuilder", function () {
            var e;
            beforeEach(function () {
                e = new t
            }), it("Должен сгенерировать ссылку без параметров", function () {
                var t = n.build(e), r = s(l + "?");
                expect(t).to.be(r)
            }), it("Должен сгенерировать ссылку с одним параметром (уровень масштабирования)", function () {
                e.set("map", {zoom: 14});
                var t = n.build(e);
                expect(a(t, [["z", "14"]])).to.be(!0)
            }), it("Должен сгенерировать ссылку с несколькими параметрами", function () {
                e.set("map", {zoom: 14, center: [11, 11]});
                var t = n.build(e);
                expect(a(t, [["ll", "11,11"], ["z", "14"]])).to.be(!0)
            })
        }), e()
    }), ym.modules.define("linkBuilder.maps", ["linkBuilder.Base", "linkBuilder.parsers", "util.defineClass", "util.extend", "system.browser"], function (e, t, n, r, i, a) {
        var s = ym.env.hosts.api.maps, o = {origin: "source", source: "utm_source", host: "utm_medium"},
            u = function () {
            };
        r(u, t, {
            getMapParameters: function () {
                var e = u.superclass.getMapParameters.call(this);
                return a.isMobile ? i(e, o) : e
            }, build: function (e) {
                return s + this.buildParameters(e)
            }
        }), e(new u)
    }), ym.modules.define("test.yandex.state.mapsLinkBuilder", ["yandex.State", "yandex.state.mapsLinkBuilder", "meta", "Map", "util.array"], function (e, t, n, r, i, a) {
        function s(e, t) {
            var n = l(e), r = {}, i = !0;
            return n = n.split("&"), n.length == t.length && (a.each(n, function (e) {
                e = e.split("="), r[e[0]] = e[1]
            }), a.each(t, function (e) {
                "undefined" != typeof r[e[0]] && r[e[0]] === e[1] || (i = !1)
            }), i)
        }

        var o = ["from", "api-maps"], u = ["origin", "jsapi_" + r.version.replace(/\W/g, "_")], l = function (e) {
            var t = e.match(/(^http:\/\/|https:\/\/|\/\/)([^\/]+)\/\??([^\?]*)$/);
            return t && t[3]
        };
        describe("yandex.state.mapsLinkBuilder", function () {
            var e, r;
            before(function () {
                r = new i("map", {center: [55.755768, 37.617671], zoom: 13})
            }), after(function () {
                r.destroy()
            }), beforeEach(function () {
                e = new t(r)
            }), it("Должен сгенерировать ссылку без параметров", function () {
                var t = n.build(e);
                expect(s(t, [u, o])).to.be(!0)
            }), it("Должен сгенерировать ссылку с одним параметром (уровень масштабирования)", function () {
                e.set("map", {zoom: 14});
                var t = n.build(e);
                expect(s(t, [["z", "14"], u, o])).to.be(!0)
            }), it("Должен сгенерировать ссылку с несколькими параметрами", function () {
                e.set("map", {zoom: 14, center: [11, 11]});
                var t = n.build(e);
                expect(s(t, [["z", "14"], ["ll", "11,11"], u, o])).to.be(!0)
            })
        }), e()
    }), ym.modules.define("linkBuilder.mobileMaps", ["linkBuilder.iOsMaps", "linkBuilder.androidMaps", "linkBuilder.maps", "system.browser"], function (e, t, n, r, i) {
        e({
            build: function (e) {
                var t = "iOS" == i.osFamily, a = "Android" == i.osFamily,
                    s = t && parseFloat(i.osVersion) < 9.3 || "OperaMobile" == i.name || "UCBrowser" == i.name || "AndroidBrowser" == i.name || "ChromeMobile" == i.name && parseFloat(i.version) < 47,
                    o = !!e.get("userMap");
                return s || o || !a ? r.build(e) : n.build(e)
            }
        })
    }), ym.modules.define("linkBuilder.parsers", ["util.coordinates.reverse"], function (e, t) {
        e({
            map: function (e, n, r) {
                var i = [];
                switch (e) {
                    case"center":
                        i = [n, t(r)];
                        break;
                    default:
                        i = [n, r]
                }
                return i
            }, search: function (e, n, r, i) {
                var a = [];
                switch (e) {
                    case"resultCoordinates":
                        "geo" != i.resultLayer || i.resultId || (a = [n, t(r)]);
                        break;
                    default:
                        a = [n, r]
                }
                return a
            }, route: function (e, t, n) {
                var r = [];
                switch (e) {
                    case"points":
                        r = [t, n.join("~")];
                        break;
                    case"viaIndexes":
                        n && n.length && (r = [t, n.join("~")]);
                        break;
                    default:
                        r = [t, n]
                }
                return r
            }, panorama: function (e, n, r, i) {
                var a = [];
                switch (e) {
                    case"position":
                        a = [n, t(r)];
                        break;
                    case"direction":
                        a = [n, "dir:" + r + (i.span ? "~spn:" + i.span : "")];
                        break;
                    case"span":
                        a = null;
                        break;
                    default:
                        a = [n, r]
                }
                return a
            }, whatshere: function (e, n, r, i) {
                var a = [];
                switch (e) {
                    case"point":
                        a = [n, t(r)];
                        break;
                    default:
                        a = [n, r]
                }
                return a
            }
        })
    }), ym.modules.define("domEvent.managerComponent.mouseLeaveEnterDispatcher", ["DomEvent", "system.browser"], function (e, t, n) {
        var r = !0;
        e({
            setEnabled: function (e) {
                r = e
            }, fire: function (e, i, a, s) {
                if (r) {
                    var o, u = e.params.htmlElement;
                    for (o = n.oldIE ? "mouseenter" == i ? a.fromElement : a.toElement : a.relatedTarget; o && o != u;)try {
                        o = o.parentNode
                    } catch (l) {
                        return !1
                    }
                    if (o != u)return s || (s = t), e.fire(i, new s(a, i)), !0
                }
                return !1
            }
        })
    }), ym.modules.define("domEvent.manager", ["util.defineClass", "util.id", "util.data", "DomEvent", "event.manager.Base", "event.Group", "domEvent.managerOverrideStorage", "util.dom.event"], function (e, t, n, r, i, a, s, o, u) {
        function l(e) {
            return function (t) {
                var n = t.type, a = u.getIdealName(t.type);
                r.get(e, m).fire(n, new i(t, n)), n == a || o.get(a) || r.get(e, m).fire(a, new i(t, a))
            }
        }

        function c(e) {
            var t = e.type, n = u.getIdealName(e.type);
            r.get(this, f).fire(t, new i(e, t)), t == n || o.get(n) || r.get(this, f).fire(n, new i(e, n))
        }

        function d(e) {
            var t = e.type, n = u.getIdealName(e.type);
            r.get(this, m).fire(t, new i(e, t)), t == n || o.get(n) || r.get(this, m).fire(n, new i(e, n))
        }

        function p(e, t, n) {
            this.htmlElement = e, this.domEventManager = t, this.capture = n
        }

        var h = ym.env.browser.oldIE, f = "eventManagerCapturingPhase", m = "eventManagerBubblingPhase",
            g = "ieHandler";
        e({
            add: function (e, t, n, r, i) {
                if (ym.env.debug && (!e || !t))throw new Error("domEvent.Manager: Не был передан обязательный аргумент!.");
                var s = this._getEventManager(e, i);
                return s || (s = new a({
                    controllers: [this],
                    htmlElement: e,
                    capture: !!i
                }), this._setEventManager(e, s, i)), s.add(t, n, r), this
            }, remove: function (e, t, n, r, i) {
                if (ym.env.debug && (!e || !t))throw new Error("domEvent.Manager: Не был передан обязательный аргумент!.");
                var a = this._getEventManager(e, i);
                return a && a.remove(t, n, r), this
            }, fire: function (e, t, n) {
                var r = this._getEventManager(e, !0), i = this._getEventManager(e, !1);
                return r && r.fire(t, n), i && i.fire(t, n), this
            }, onStartListening: function (e, t) {
                var n = o.get(t);
                if (n) n.start(e); else {
                    t = u.getActualName(t);
                    var i = e.params, a = i.htmlElement, s = !!i.capture;
                    h ? a.attachEvent("on" + t, r.get(a, g)) : a.addEventListener(t, s ? c : d, s)
                }
            }, onStopListening: function (e, t) {
                var n = o.get(t), i = e.params, a = i.htmlElement, s = !!i.capture;
                n ? n.stop(e) : (t = u.getActualName(t), h ? a.detachEvent("on" + t, r.get(a, g)) : a.removeEventListener(t, s ? c : d, s)), e.typesCount || this._unsetEventManager(a, s)
            }, group: function (e, t) {
                return new s(new p(e, this, t))
            }, _getEventManager: function (e, t) {
                return r.get(e, t && !h ? f : m)
            }, _setEventManager: function (e, t, i) {
                r.add(e, i && !h ? f : m, t), h && r.add(e, g, l(n.get(e)))
            }, _unsetEventManager: function (e, t) {
                r.remove(e, t && !h ? f : m), h && r.remove(e, g)
            }
        }), t(p, {
            add: function (e, t, n) {
                return this.domEventManager.add(this.htmlElement, e, t, n, this.capture)
            }, remove: function (e, t, n) {
                return this.domEventManager.remove(this.htmlElement, e, t, n, this.capture)
            }
        })
    }), ym.modules.define("domEvent.managerOverrides.oldIE", ["domEvent.managerComponent.mouseLeaveEnterDispatcher", "domEvent.managerOverrideStorage", "util.data", "util.dom.event", "DomEvent"], function (e, t, n, r, i, a) {
        function s(e) {
            return {
                start: function (t) {
                    o(t, e)
                }, stop: function (t) {
                    c(t, e)
                }
            }
        }

        function o(e, t) {
            var n = e.params.htmlElement, i = r.get(n, f);
            i || (i = {
                mouseOver: !1,
                count: 0,
                handlers: {},
                eventsWithoutHover: 0
            }, r.add(n, f, i)), i.count++, "mouseenter" != t && "mouseleave" != t && (i.handlers[t] = u(i, e, t), d(n, t, i.handlers[t])), "mouseenter" in i.handlers || (i.handlers.mouseenter = l(i, e, "mouseenter"), d(n, "mouseenter", i.handlers.mouseenter), i.handlers.mouseleave = l(i, e, "mouseleave"), d(n, "mouseleave", i.handlers.mouseleave))
        }

        function u(e, t, n) {
            return function (r) {
                (e.mouseOver || "mousemove" != n || 0 != e.eventsWithoutHover++) && t.fire(n, new a(r, n))
            }
        }

        function l(e, n, r) {
            return function (i) {
                t.fire(n, r, i), e.mouseOver = "mouseenter" == r, e.eventsWithoutHover = 0
            }
        }

        function c(e, t) {
            var n = e.params.htmlElement, i = r.get(n, f);
            "mouseenter" != t && "mouseleave" != t && (p(n, t, i.handlers[t]), delete i.handlers[t]), --i.count || (p(n, "mouseenter", i.handlers.mouseenter), p(n, "mouseleave", i.handlers.mouseleave), delete i.handlers.mouseenter, delete i.handlers.mouseleave, r.remove(n, f, i))
        }

        function d(e, t, n) {
            e.attachEvent(h(t), n)
        }

        function p(e, t, n) {
            e.detachEvent(h(t), n)
        }

        function h(e) {
            return "on" + i.getActualName(e).toLowerCase()
        }

        for (var f = "dataKey",
                 m = ["mousemove", "mousedown", "mouseup", "wheel", "click", "dblclick", "contextmenu", "mouseenter", "mouseleave"],
                 g = 0, v = m.length; g < v; g++) {
            var y = m[g];
            n.add(y, s(y))
        }
        e({})
    }), ym.modules.define("domEvent.managerOverrideStorage", ["util.Storage"], function (e, t) {
        e(new t)
    }), ym.modules.define("domEvent.managerOverrides.pointers", ["util.data", "domEvent.managerOverrideStorage", "domEvent.PointerMapper"], function (e, t, n, r) {
        for (var i = function (e) {
                n.add(e, {
                    start: function (t) {
                        s(t, e)
                    }, stop: function (t) {
                        o(t, e)
                    }
                })
            },
                 a = ["mouseenter", "mouseleave", "mousemove", "mousedown", "mouseup", "click", "dblclick", "multitouchstart", "multitouchmove", "multitouchend"],
                 s = function (e, n) {
                     var i = e.params, a = i.capture ? "pointerDataWithCapture" : "pointerData",
                         s = t.get(i.htmlElement, a);
                     s || (s = {
                         types: {},
                         count: 0,
                         pointerMapper: new r(e)
                     }, t.add(i.htmlElement, a, s)), s.types[n] || (s.count || s.pointerMapper.start(), s.types[n] = !0, s.count++)
                 }, o = function (e, n) {
                var r = e.params, i = r.capture ? "pointerDataWithCapture" : "pointerData", a = t.get(r.htmlElement, i);
                a && a.types[n] && (delete a.types[n], --a.count || (a.pointerMapper.stop(), t.remove(r.htmlElement, i)))
            }, u = 0, l = a.length; u < l; u++)i(a[u]);
        e({})
    }), ym.modules.define("domEvent.managerOverrides.touches", ["util.data", "domEvent.managerOverrideStorage", "domEvent.TouchMapper"], function (e, t, n, r) {
        for (var i = function (e) {
                n.add(e, {
                    start: function (t) {
                        s(t, e)
                    }, stop: function (t) {
                        o(t, e)
                    }
                })
            },
                 a = ["mouseenter", "mouseleave", "mousemove", "mousedown", "mouseup", "wheel", "click", "dblclick", "contextmenu", "multitouchstart", "multitouchmove", "multitouchend"],
                 s = function (e, n) {
                     var i = e.params, a = i.capture ? "touchDataWithCapture" : "touchData", s = i.htmlElement,
                         o = t.get(s, a);
                     o || (o = {
                         types: {},
                         count: 0,
                         touchMapper: new r(e)
                     }, t.add(s, a, o)), o.types[n] || (o.count || o.touchMapper.start(), o.types[n] = !0, o.count++)
                 }, o = function (e, n) {
                var r = e.params, i = r.capture ? "touchDataWithCapture" : "touchData", a = r.htmlElement,
                    s = t.get(a, i);
                s && s.types[n] && (delete s.types[n], --s.count || (s.touchMapper.stop(), t.remove(a, i)))
            }, u = 0, l = a.length; u < l; u++)i(a[u]);
        e({})
    }), ym.modules.define("model.Base", ["util.defineClass", "data.Proxy"], function (e, t, n) {
        e(t(function (e, t) {
            this._data = new n(t, e), this._layoutClass = this.constructor.LAYOUT_CLASS, this._layout = new this._layoutClass(this._data)
        }, {
            getData: function () {
                return this._data
            }, getLayout: function () {
                return this._layout
            }, appendTo: function (e) {
                this._layout.setParentElement(e)
            }
        }))
    }), ym.modules.define("model.BusinessCardMapsButton", ["util.defineClass", "model.Base", "layout.BusinessCardMapsButton", "data.Manager", "system.browser", "linkBuilder.maps", "linkBuilder.mobileMaps", "yandex.counter"], function (e, t, n, r, i, a, s, o, u) {
        var l = t(function (e) {
            n.call(this, e), this.getLayout().events.add("click", this._onClick, this)
        }, n, {
            _onClick: function () {
                this._logClick(), window.open(this._generateLink(), "_blank")
            }, _logClick: function () {
                u.countByKey("distribution", ["geoCard.mapsButton" + (this._data.get("mapState.userMap") ? "-constructor" : ""), a.platform, u.versionPrefix].join("."))
            }, _generateLink: function () {
                var e = new i(this._data.get("mapState"));
                return a.isMobile ? o.build(e) : s.build(e)
            }
        });
        l.LAYOUT_CLASS = r, e(l)
    }), ym.modules.define("model.MapsButton", ["util.defineClass", "router", "model.Base", "layout.MapsButton", "data.Manager", "Monitor", "system.browser", "linkBuilder.maps", "linkBuilder.mobileMaps", "localization.common.current", "util.pixelBounds", "yandex.counter"], function (e, t, n, r, i, a, s, o, u, l, c, d, p) {
        var h = {
            common: c.distribution.yaOpenInMaps,
            route: c.distribution.openRoute,
            single_placemark: c.distribution.mapsPromoGetThere
        }, f = 165, m = t(function (e) {
            this._currentContext = this._getContext(e), r.call(this, e, {text: h[this._currentContext]}), this._currentLink = null, this._setupLink(), this._logTestingContextShow(), new s(this._data).add(["mapState", "availWidth"], this._onChange, this), this.getLayout().events.add("click", this._onClick, this)
        }, r, {
            _getContext: function (e) {
                if (e || (e = this._data), e.get("availWidth") >= f) {
                    if (this._isRouteInViewport(e))return "route";
                    if (this._singlePlacemark = this._getSinglePlacemark(e))return "single_placemark"
                }
                return "common"
            }, _onChange: function () {
                this._setupContext(), this._setupLink()
            }, _setupContext: function () {
                var e = this._getContext();
                e != this._currentContext && (this._data.set("text", h[e]),
                    this._currentContext = e, this._logTestingContextShow())
            }, _setupLink: function () {
                var e = this._generateLink();
                e != this._currentLink && (this._currentLink = e, n.fireToParent("linkchange", {link: e}))
            }, _onClick: function () {
                this._logClick(), window.open(this._generateLink(), "_blank")
            }, _logClick: function () {
                p.countByKey("distribution", ["mapsButton" + (this._data.get("mapState.userMap") ? "-constructor" : ""), "context_" + this._currentContext, o.platform, p.versionPrefix].join("."))
            }, _logTestingContextShow: function () {
                this._currentContext && this._currentContext.indexOf("_testing") != -1 && p.countByKey("distribution", ["mapsButton" + (this._data.get("mapState.userMap") ? "-constructor" : ""), "context_" + this._currentContext.replace("_testing", "_testing_show"), o.platform, p.versionPrefix].join("."))
            }, _getTestingGroup: function () {
                return parseInt(ym.env.userKey) % 3
            }, _isRouteInViewport: function (e) {
                var t = e.get("mapState.route"), n = e.get("mapState.map.bounds"),
                    r = e.get("mapState.map.zeroZoomBounds");
                if (!t || !t.points.length || !n)return !1;
                if (t.zeroZoomBounds)return d.areIntersecting(t.zeroZoomBounds, r);
                for (var i = t.points.length, a = 0,
                         s = Math.min(Math.ceil(i / 2), 20); a < s; a++)if (this._boundsContain(n, t.points[a]) || a < i - 1 - a && this._boundsContain(n, t.points[i - 1 - a]))return !0;
                return !1
            }, _getSinglePlacemark: function (e) {
                var t = e.get("mapState.points"), n = e.get("mapState.map.bounds"), r = null;
                if (e.get("mapState.search.request") || e.get("mapState.poi") || !n || !t || !t.length || t.length > 1e4)return null;
                for (var i = 0, a = t.length; i < a; i++)if (this._boundsContain(n, t[i])) {
                    if (r)return null;
                    r = t[i]
                }
                return r
            }, _boundsContain: function (e, t) {
                var t = [t[0], t[1]], e = [[e[0][0], e[0][1]], [e[1][0], e[1][1]]];
                return e[1][1] < e[0][1] && (e[1][1] += 360, t[1] < 0 && t[1] < e[0][1] && (t[1] += 360)), e[0][0] < t[0] && t[0] < e[1][0] && e[0][1] < t[1] && t[1] < e[1][1]
            }, _generateLink: function () {
                var e = new a(this._data.get("mapState"));
                return "single_placemark" == this._currentContext && e.set({
                    points: this._getPointsWithoutSingle(),
                    route: {points: ["", this._singlePlacemark]}
                }), o.isMobile ? l.build(e) : u.build(e)
            }, _getPointsWithoutSingle: function () {
                for (var e = this._data.get("mapState.points"), t = [], n = 0,
                         r = e.length; n < r; n++)e[n][0] == this._singlePlacemark[0] && e[n][1] == this._singlePlacemark[1] || t.push(e[n]);
                return t
            }
        });
        m.LAYOUT_CLASS = i, e(m)
    }), ym.modules.define("model.PanoramaMapsButton", ["util.defineClass", "model.Base", "layout.MapsButton", "data.Manager", "system.browser", "linkBuilder.maps", "linkBuilder.mobileMaps", "localization.common.current", "yandex.counter", "util.extend"], function (e, t, n, r, i, a, s, o, u, l, c) {
        var d = t(function (e) {
            n.call(this, e, {text: u.distribution.yaOpenInMaps}), this.getLayout().events.add("click", this._onClick, this)
        }, n, {
            _onClick: function () {
                this._logClick(), window.open(this._generateLink(), "_blank")
            }, _logClick: function () {
                l.countByKey("distribution", ["panoramaMapsButton", a.platform, l.versionPrefix].join("."))
            }, _generateLink: function () {
                var e = new i(c({layers: ["stv", "sta"]}, this._data.getAll()));
                return a.isMobile ? o.build(e) : s.build(e)
            }
        });
        d.LAYOUT_CLASS = r, e(d)
    }),ym.modules.define("model.RouteBalloonButton", ["util.defineClass", "model.Base", "layout.Button", "data.Manager", "system.browser", "linkBuilder.maps", "linkBuilder.mobileMaps", "localization.common.current", "yandex.counter"], function (e, t, n, r, i, a, s, o, u, l) {
        var c = t(function (e) {
            n.call(this, e, {text: u.distribution.routeMoreInfo}), this.getLayout().events.add("click", this._onClick, this)
        }, n, {
            _onClick: function () {
                this._logClick(), window.open(this._generateLink(), "_blank")
            }, _logClick: function () {
                l.countByKey("distribution", ["routeMapsButton" + (this._data.get("mapState.userMap") ? "-constructor" : ""), a.platform, l.versionPrefix].join("."))
            }, _generateLink: function () {
                var e = new i(this._data.get("mapState"));
                return e.set("route", this._data.get("routeState")), a.isMobile ? o.build(e) : s.build(e)
            }
        });
        c.LAYOUT_CLASS = r, e(c)
    }),ym.modules.define("domEvent.MultiPointer", ["util.defineClass", "domEvent.Base", "domEvent.multiPointer.overrideStorage", "component.event.Cacher"], function (e, t, n, r, i) {
        function a(e, t, n) {
            a.superclass.constructor.call(this, e, t), this._cache = {
                type: t || "multi" + e.type,
                touches: n
            }, this._cacher = null
        }

        t(a, n, {
            get: function (e) {
                return this._cacher || (this._cacher = new i(this, this._cache, r)), this._cacher.get(e)
            }, clone: function (e) {
                return new a(e, this._cache.type, this._cache.touches)
            }
        }), e(a)
    }),ym.modules.define("domEvent.multiPointer.override", ["domEvent.multiPointer.overrideStorage", "util.id", "util.dom.event", "util.instantCache", "system.browser"], function (e, t, n, r, i, a) {
        function s(e, t) {
            return l(e, t), e.get("pageX")
        }

        function o(e, t) {
            return l(e, t), e.get("pageY")
        }

        function u(e, t) {
            return [e.get("pageX"), e.get("pageY")]
        }

        function l(e, t) {
            var n = e.originalEvent, r = n.clientX, i = n.clientY;
            r += (d.scrollLeft || 0) - (d.clientLeft || 0), i += (d.scrollTop || 0) - (d.clientTop || 0), p && (r += p.scrollLeft || 0, i += p.scrollTop || 0), t.set("pageX", r), t.set("pageY", i)
        }

        function c(e) {
            return function (t) {
                return t.originalEvent[e]
            }
        }

        for (var d = document.documentElement, p = document.body, h = ["screenX", "screenY", "clientX", "clientY"],
                 f = 0, m = h.length; f < m; f++)t.add(h[f], c(h[f]));
        t.add("position", u).add("pageX", s).add("pageY", o).add("pointerType", function (e) {
            return r.getIdealPointerType(e.originalEvent)
        }).add("activeMouseButton", function (e) {
            var t = e.originalEvent, n = -1;
            return "IEMobile" != a.name && (n = t.buttons), n
        }).add("button", function (e) {
            var t = e.originalEvent.button;
            return t > -1 ? t : 0
        }).add("propagatedData", function (e) {
            var t = n.get(e.originalEvent), r = i.get(t);
            return r || i.add(t, r = {}), r
        }), e({})
    }),ym.modules.define("domEvent.multiPointer.overrideStorage", ["util.Storage"], function (e, t) {
        e(new t)
    }),ym.modules.define("domEvent.MultiTouch", ["util.defineClass", "domEvent.Base", "domEvent.multiTouch.overrideStorage", "component.event.Cacher"], function (e, t, n, r, i) {
        function a(e, t, n) {
            a.superclass.constructor.call(this, e, t), this._cache = {
                type: t || "multi" + e.type,
                touches: n
            }, this._cacher = null
        }

        t(a, n, {
            get: function (e) {
                return this._cacher || (this._cacher = new i(this, this._cache, r)), this._cacher.get(e)
            }, clone: function (e) {
                return new a(e, this._cache.type, this._cache.touches)
            }
        }), e(a)
    }),ym.modules.define("domEvent.multiTouch.override", ["domEvent.multiTouch.overrideStorage", "util.instantCache", "util.id", "util.array"], function (e, t, n, r, i) {
        function a(e) {
            return function (t) {
                var n = t.get("touches"), r = 0, a = 0;
                return n && n.lenght && (i.each(n, function (t) {
                    r += t[e]
                }), a += n.length, r /= a), r
            }
        }

        for (var s = ["pageX", "pageY", "screenX", "screenY", "clientX", "clientY"], o = 0,
                 u = s.length; o < u; o++)t.add(s[o], a(s[o]));
        t.add("position", function (e) {
            return [e.get("pageX"), e.get("pageY")]
        }), t.add("propagatedData", function (e) {
            var t = r.get(e.originalEvent), i = n.get(t);
            return i || n.add(t, i = {}), i
        }), t.add("target", function (e) {
            return e.get("touches")[0].target
        }), e({})
    }),ym.modules.define("domEvent.multiTouch.overrideStorage", ["util.Storage"], function (e, t) {
        e(new t)
    }),ym.modules.define("map.metaOptions", [], function (e) {
        e({
            get: function (e, t) {
                return t
            }, set: function () {
            }
        })
    }),ym.modules.define("domEvent.pointer.override", ["domEvent.pointer.overrideStorage", "util.instantCache", "util.id", "util.dom.event", "system.browser"], function (e, t, n, r, i, a) {
        function s(e, t) {
            return l(e, t), e.get("pageX")
        }

        function o(e, t) {
            return l(e, t), e.get("pageY")
        }

        function u(e, t) {
            return [e.get("pageX"), e.get("pageY")]
        }

        function l(e, t) {
            var n = e.originalEvent, r = n.clientX, i = n.clientY;
            c && (r += (c.scrollLeft || 0) - (c.clientLeft || 0), i += (c.scrollTop || 0) - (c.clientTop || 0)), d && (r += d.scrollLeft || 0, i += d.scrollTop || 0), t.set("pageX", r), t.set("pageY", i)
        }

        var c = document.documentElement, d = document.body;
        t.add("pageX", s).add("pageY", o).add("position", u).add("pointerType", function (e) {
            return i.getIdealPointerType(e.originalEvent)
        }).add("activeMouseButton", function (e) {
            var t = e.originalEvent, n = -1;
            if ("IEMobile" != a.name) {
                var r = t.buttons;
                4 & r ? n = 3 : 2 & r ? n = 2 : 1 & r && (n = 1)
            }
            return n
        }).add("button", function (e) {
            var t = e.originalEvent.button;
            return t > -1 ? t : 0
        }).add("propagatedData", function (e) {
            var t = r.get(e.originalEvent), i = n.get(t);
            return i || n.add(t, i = {}), i
        }), e({})
    }),ym.modules.define("domEvent.pointer.overrideStorage", ["util.Storage"], function (e, t) {
        e(new t)
    }),ym.modules.define("domEvent.Pointer", ["util.defineClass", "domEvent.Base", "domEvent.pointer.overrideStorage", "component.event.Cacher"], function (e, t, n, r, i) {
        function a(e, t, n) {
            a.superclass.constructor.call(this, e, t), this._cache = {
                type: t || e.type,
                mode: n,
                touches: [e]
            }, this._cacher = null
        }

        t(a, n, {
            get: function (e) {
                return this._cacher || (this._cacher = new i(this, this._cache, r)), this._cacher.get(e)
            }, clone: function (e) {
                return new a(e, this._cache.type, this._cache.mode)
            }
        }), e(a)
    }),ym.modules.define("domEvent.PointerMapper", ["domEvent.Pointer", "domEvent.MultiPointer", "map.metaOptions", "util.bind", "util.extend", "util.dom.event", "util.array", "domEvent.managerComponent.mouseLeaveEnterDispatcher", "system.browser"], function (e, t, n, r, i, a, s, o, u, l) {
        var c = 20, d = function (e, t) {
                for (var n = t; n && n != e;)try {
                    n = n.parentNode
                } catch (r) {
                    return !1
                }
                return n == e
            }, p = function (e) {
                f.push(e)
            }, h = function (e) {
                for (var t = 0, n = f.length; t < n; t++)if (f[t].pointerId == e.pointerId) {
                    f.splice(t, 1);
                    break
                }
            }, f = [],
            m = {pointerover: !0, pointerdown: !0, pointermove: !0, pointerup: !0, pointercancel: !0, pointerout: !0};
        o.each(m, function (e, t) {
            m[t] = s.getActualName(t)
        });
        var g = document.documentElement;
        g.addEventListener(m.pointerdown, p, !0), g.addEventListener(m.pointerup, h, !0), g.addEventListener(m.lostpointercapture, h, !0), g.addEventListener(m.pointercancel, h, !0), window.top != window.self && g.addEventListener(m.pointerout, h, !0);
        var v = function (e, t) {
            this.events = e, this.params = a({
                mousemoveDelta: r.get("mousemoveDelta", 5),
                dblClickTimeout: r.get("dblClickTimeout", 500),
                contextMenuTimeout: r.get("pointerContextMenuTimeout", 1e3)
            }, t), this._useCapture = this.events.params.capture, this._state = {
                pointerOver: !1,
                preventClick: !1,
                outOfElementPointers: [],
                listeningDocument: !1,
                lastFocusPointerType: null
            }, this._listeners = null, this._lastClickTimestamp = null, this._pointers = [], this._pointerById = {}, this._nativeEvents = {}, this._nativeEvents[m.pointerdown] = i(this._onPointerDown, this), this._nativeEvents[m.pointermove] = i(this._onPointerMove, this), this._nativeEvents[m.lostpointercapture] = i(this._onPointerEnd, this), this._nativeEvents[m.pointerup] = i(this._onPointerEnd, this), this._nativeEvents[m.pointercancel] = i(this._onPointerEnd, this), this._nativeEvents[m.pointerover] = i(this._onPointerOver, this), this._nativeEvents[m.pointerout] = i(this._onPointerOut, this)
        };
        v.prototype = {
            start: function () {
                this._state = {
                    pointerOver: !1,
                    preventClick: !1,
                    outOfElementPointers: [],
                    listeningDocument: !1,
                    lastFocusPointerType: null
                }, this._state.eventsWithoutHover = 0;
                var e = this.events.params.htmlElement, t = this._useCapture ? 1 : 2;
                if (o.each(this._nativeEvents, function (t, n) {
                        e.addEventListener(n, t, this._useCapture)
                    }, this), f.length) {
                    for (var n = 0, r = f.length; n < r; n++) {
                        var i = f[n];
                        d(e, i.target) && i.eventPhase > t && this._addPointer(i)
                    }
                    this.pointerOver = !0, this._state.lastFocusPointerType = s.getIdealPointerType(f[0])
                }
            }, stop: function () {
                var e = this.events.params.htmlElement;
                o.each(this._nativeEvents, function (t, n) {
                    e.removeEventListener(n, t, this._useCapture)
                }, this)
            }, _onPointerDown: function (e) {
                var t = this._pointers.length > 1;
                this._addPointer(e), 1 == this._pointers.length ? (this._fireMouseInitEvents(e), this._state.initTimestamp = e.timeStamp) : (this._state.preventClick = !0, this._fireEndStartMultiTouchEvents(t ? e : null, e))
            }, _onPointerMove: function (e) {
                var t = l.isIE || l.isEdge;
                if (t && !this._state.pointerOver) {
                    if (0 == this._state.eventsWithoutHover++)return;
                    this._state.lastFocusPointerType != s.getIdealPointerType(e) && this._onPointerOver(e)
                }
                e.buttons > 0 && !this._isInPointers(e.pointerId) && (0 == this._pointers.length ? this._addPointer(e) : this._onPointerDown(e));
                var n = this._pointers.length;
                if (0 == n) this._firePointerEvent(e, "mousemove"); else if (1 == n) {
                    var r = this._pointers[0], i = Math.abs(r.pageX - e.pageX), a = Math.abs(r.pageY - e.pageY),
                        o = "touch" == s.getIdealPointerType(e) ? this.params.mousemoveDelta : 0;
                    (i > o || a > o) && (this._state.preventClick = !0, this._updatePointer(e), this._firePointerEvent(e, "mousemove"))
                } else this._updatePointer(e), this._fireMultiPointerEvent(e, "multitouchmove")
            }, _fireMouseInitEvents: function (e) {
                this._firePointerEvent(e, "mousemove"), this._firePointerEvent(e, "mousedown")
            }, _onPointerEnd: function (e) {
                if (this._isInPointers(e.pointerId)) {
                    var t = this._pointers.length;
                    this._removePointer(e), 1 == t ? this._fireMouseEndEvents(e) : this._fireEndStartMultiTouchEvents(e, t > 2 ? e : null), this._checkPointersAfterMultiTouch(e)
                }
            }, _fireEndStartMultiTouchEvents: function (e, t) {
                e && this._fireMultiPointerEvent(e, "multitouchend"), null != t && this._fireMultiPointerEvent(t, "multitouchstart")
            }, _onPointerOut: function (e) {
                var n = new t(e), r = n.get("relatedTarget");
                if (this._state.pointerOver && !d(this.events.params.htmlElement, r)) {
                    var i = s.getIdealPointerType(e);
                    r && "mouse" != i ? (this._state.outOfElementPointers.push(e.pointerId), this._startListeningDocumentEvents(e)) : ("mouse" == i || this._pointers.length < 2) && (this._state.pointerOver = !1, "mouse" == i ? (this._state.preventClick = !1, this._removePointer(e)) : this._onPointerEnd(e), u.fire(this.events, "mouseleave", e, t), this._state.lastFocusPointerType = s.getIdealPointerType(e))
                }
                this._state.eventsWithoutHover = 0
            }, _onPointerOver: function (e) {
                this._state.pointerOver ? o.indexOf(this._state.outOfElementPointers, e.pointerId) > -1 && (o.remove(this._state.outOfElementPointers, e.pointerId), 0 == this._state.outOfElementPointers.length && this._stopListeningDocumentEvents(e)) : 0 == this._pointers.length && (this._state.pointerOver = !0, u.fire(this.events, "mouseenter", e, t), this._state.lastFocusPointerType = s.getIdealPointerType(e)), this._state.eventsWithoutHover = 0
            }, _startListeningDocumentEvents: function (e) {
                if (!this._state.listeningDocument) {
                    this._state.listeningDocument = !0;
                    var t = document.documentElement;
                    this._documentCallbacks = {
                        pointerend: i(this._onDocumentPointerEnd, this),
                        pointermove: i(this._onDocumentPointerMove, this)
                    }, t.addEventListener(m.pointermove, this._documentCallbacks.pointermove, !0), t.addEventListener(m.pointerup, this._documentCallbacks.pointerend, !0), t.addEventListener(m.pointercancel, this._documentCallbacks.pointerend, !0), t.addEventListener(m.lostpointercapture, this._documentCallbacks.pointerend, !0)
                }
            }, _stopListeningDocumentEvents: function (e) {
                if (this._state.listeningDocument) {
                    this._state.listeningDocument = !1;
                    var t = document.documentElement;
                    t.removeEventListener(m.pointermove, this._documentCallbacks.pointermove, !0), t.removeEventListener(m.pointerup, this._documentCallbacks.pointerend, !0), t.removeEventListener(m.pointercancel, this._documentCallbacks.pointerend, !0), t.removeEventListener(m.lostpointercapture, this._documentCallbacks.pointerend, !0), this._documentCallbacks = null
                }
            }, _onDocumentPointerMove: function (e) {
                o.indexOf(this._state.outOfElementPointers, e.pointerId) > -1 && this._onPointerMove(e)
            }, _onDocumentPointerEnd: function (e) {
                o.indexOf(this._state.outOfElementPointers, e.pointerId) > -1 && (o.remove(this._state.outOfElementPointers, e.pointerId), this._onPointerEnd(e))
            }, _checkPointersAfterMultiTouch: function (e) {
                this._state.listeningDocument && 0 == this._state.outOfElementPointers.length && 0 == this._pointers.length && (this._pointers = [], this._state.pointerOver = !1, this._state.lastFocusPointerType = s.getIdealPointerType(e), this._firePointerEvent(e, "mousemove"), this._firePointerEvent(e, "mouseleave"), this._stopListeningDocumentEvents(e))
            }, _fireMouseEndEvents: function (e) {
                var t = e.timeStamp, n = s.getIdealName(e.type), r = this._state, i = "pointerup" == n,
                    a = s.getIdealPointerType(e);
                if (r.preventClick || (r.preventClick = !i || 0 != e.button, "mouse" != a && t - r.initTimestamp > this.params.contextMenuTimeout && (r.preventClick = !0)), this._firePointerEvent(e, "mouseup"), !r.preventClick) {
                    var o = {x: e.clientX, y: e.clientY};
                    this._lastClickTimestamp && t - this._lastClickTimestamp < this.params.dblClickTimeout ? (this._firePointerEvent(e, "click"), this._lastTouchPos && Math.abs(this._lastTouchPos.x - o.x) < c && Math.abs(this._lastTouchPos.y - o.y) < c && this._firePointerEvent(e, "dblclick"), this._lastClickTimestamp = null) : (this._firePointerEvent(e, "click"), this._lastClickTimestamp = t), this._lastTouchPos = o
                }
                r.preventClick = !1
            }, _addPointer: function (e) {
                this._pointers.push(e), this._pointerById[e.pointerId] = !0
            }, _updatePointer: function (e) {
                o.each(this._pointers, function (t, n) {
                    if (t.pointerId == e.pointerId)return this._pointers[n] = e, !1
                }, this)
            }, _removePointer: function (e) {
                var t = e.pointerId;
                this._isInPointers(t) && o.each(this._pointers, function (e) {
                    if (e.pointerId == t)return o.remove(this._pointers, e), delete this._pointerById[e.pointerId], !1
                }, this)
            }, _isInPointers: function (e) {
                return this._pointerById.hasOwnProperty(e)
            }, _firePointerEvent: function (e, n) {
                this.events.fire(n, new t(e, n))
            }, _fireMultiPointerEvent: function (e, t) {
                this.events.fire(t, new n(e, t, this._pointers.slice()))
            }
        }, e(v)
    }),ym.modules.define("router", ["vow", "domEvent.manager", "util.querystring"], function (e, t, n, r) {
        function i(e, n) {
            var r = e.replace(/^\//, "").split("/"), i = r[0].replace(/[^a-z_]/gi, ""),
                a = r[1] ? r[1].replace(/[^a-z]/gi, "") : "index";
            ym.modules.require(["controller." + s(i)]).spread(function (e) {
                return u = new e, "function" != typeof u[a] ? t.reject(404) : (l || (l = n || {}), u.setData(l), void u[a]())
            }).fail(function (e) {
                console.error(e || 500, "controller `" + i + "` failed to process request")
            })
        }

        function a(e, t) {
            parent.postMessage(p + "&" + e + "&" + encodeURIComponent(JSON.stringify(t || {})), "*")
        }

        function s(e) {
            for (var t = e.split("_"), n = "", r = 0,
                     i = t.length; r < i; r++)n += t[r][0].toUpperCase() + t[r].substring(1);
            return n
        }

        function o(e) {
            l = e, u && u.updateData(l)
        }

        var u, l, c = function (e) {
            if ("string" == typeof e) {
                var t = e.split("&"), n = t[0], r = t[1];
                switch (n) {
                    case"datachange":
                        o(JSON.parse(decodeURIComponent(r)))
                }
            }
        };
        n.add(window, "message", function (e) {
            c(e.get("data"))
        });
        var d = r.parse(location.search.substring(1)), p = d.iframe_id;
        if (!p)throw new Error("Missing parameter `iframe_id`.");
        d.url && i(d.url, d.data ? JSON.parse(d.data) : {}), ym.env.browser.flushMessages(c), a("ready"), e({fireToParent: a})
    }),ym.modules.define("system.createNs", [], function (e) {
        e(function (e, t, n) {
            if (t) {
                var r = e;
                t = t.split(".");
                for (var i, a = 0, s = t.length - 1; a < s; a++)t[a] && (r = r[i = t[a]] || (r[i] = {}));
                return r[t[s]] = n, r[t[s]]
            }
            return n
        })
    }),ym.modules.define("system.mergeImports", [], function (e) {
        function t(e, t, n) {
            if (t) {
                var r = e;
                t = t.split(".");
                for (var i, a = 0, s = t.length - 1; a < s; a++)t[a] && (r = r[i = t[a]] || (r[i] = {}));
                return r[t[s]] = n, r[t[s]]
            }
            return n
        }

        function n(e, t) {
            return e[2] - t[2]
        }

        function r(e) {
            return 0 === e.indexOf("package.")
        }

        function i(e, n, r) {
            for (var i = [], a = {}, s = 0, o = n.length; s < o; ++s) {
                var u = r[s].__package;
                if (u)for (var l = 0; l < u.length; ++l)a[u[l][0]] || (t(e, u[l][0], u[l][1]), i.push([u[l][0], u[l][1]]), a[u[l][0]] = 1); else t(e, n[s], r[s]), a[n[s]] || (i.push([n[s], r[s]]), a[n[s]] = 1)
            }
            return e.__package = i, e
        }

        function a(e, a, s, o) {
            var u = [], l = r(e);
            if (l)return i(a, s, o);
            for (var c = 0, d = s.length; c < d; ++c)u.push([s[c], c, s[c].length]);
            u.sort(n);
            for (var c = 0, d = u.length; c < d; ++c) {
                var p = u[c][1], h = s[p];
                if (r(h))for (var f = o[p].__package,
                                  m = 0; m < f.length; ++m)t(a, f[m][0], f[m][1]); else t(a, h, o[p])
            }
            return a
        }

        e({isPackage: r, joinImports: a, createNS: t})
    }),ym.modules.define("system.provideCss", ["system.nextTick"], function (e, t) {
        function n() {
            if (o = !1, s.length) {
                if (r || (r = document.createElement(c ? "link" : "style"), r.type = "text/css", r.rel = "stylesheet", r.setAttribute && r.setAttribute("data-ymaps", "css-modules"), l && l.style_nonce && r.setAttribute && r.setAttribute("nonce", l.style_nonce)), r.styleSheet) a += i, r.styleSheet.cssText = a, r.parentNode || document.getElementsByTagName("head")[0].appendChild(r); else {
                    if (c) {
                        var e = new Blob([i], {type: "text/css"}), t = u.createObjectURL(e);
                        r.setAttribute("href", t)
                    } else r.appendChild(document.createTextNode(i));
                    document.getElementsByTagName("head")[0].appendChild(r), r = null
                }
                i = "";
                var n = s;
                s = [];
                for (var d = 0, p = n.length; d < p; ++d)n[d]()
            }
        }

        var r, i = "", a = "", s = [], o = !1, u = window.URL || window.webkitURL || window.mozURL,
            l = ym.env.server.params.csp, c = l && !l.style_nonce;
        e(function (e, r) {
            i += e + "\n/**/\n", r && s.push(r), o || (t(n), o = !0)
        })
    }),ym.modules.define("system.supports.css", [], function (e) {
        function t(e) {
            return "undefined" == typeof d[e] ? d[e] = n(e) : d[e]
        }

        function n(e) {
            return r(e) || r(h + a(e)) || r(p.cssPrefix + a(e))
        }

        function r(e) {
            return "undefined" != typeof i().style[e] ? e : null
        }

        function i() {
            return u || (u = document.createElement("div"))
        }

        function a(e) {
            return e ? e.substr(0, 1).toUpperCase() + e.substr(1) : e
        }

        function s(e) {
            var n = t(e);
            return n && n != e && (n = "-" + h + "-" + e), n
        }

        function o(e) {
            return l[e] && t("transitionProperty") ? s(l[e]) : null
        }

        var u, l = {
            transform: "transform",
            opacity: "opacity",
            transitionTimingFunction: "transition-timing-function",
            userSelect: "user-select",
            height: "height"
        }, c = {}, d = {}, p = ym.env.browser, h = p.cssPrefix.toLowerCase();
        e({
            checkProperty: t, checkTransitionProperty: function (e) {
                return "undefined" == typeof c[e] ? c[e] = o(e) : c[e]
            }, checkTransitionAvailability: o
        })
    }),ym.modules.define("system.supports.graphics", [], function (e) {
        function t() {
            if (!window.WebGLRenderingContext)return !1;
            var e = ym.env.browser, t = {"Samsung Internet": !0, AndroidBrowser: !0},
                n = "Webkit" == e.engine && +e.engineVersion < 537,
                r = /^Windows (XP|Vista|Server 2003)/.test(e.osName);
            return !(n || r || t[e.name])
        }

        function n() {
            if (!t())return null;
            var e;
            try {
                var n = document.createElement("canvas"), r = n.getContext(e = "webgl", i);
                r || (r = n.getContext(e = "experimental-webgl", i), r || (e = null))
            } catch (a) {
                e = null
            }
            return e ? {contextName: e} : null
        }

        function r(e, t) {
            e.width = 226, e.height = 256, t.fillStyle = "#fff", t.fillRect(0, 0, 150, 150), t.globalCompositeOperation = "xor", t.fillStyle = "#f00", t.fillRect(10, 10, 100, 100), t.fillStyle = "#0f0", t.fillRect(50, 50, 100, 100);
            for (var n = t.getImageData(49, 49, 2, 2), r = [], i = 0; i < 16; i++)r.push(n.data[i]);
            return "0x0x0x0x0x0x0x0x0x0x0x0x0x255x0x255" == r.join("x")
        }

        var i = {failIfMajorPerformanceCaveat: !0, antialias: !1}, a = {};
        e({
            hasSvg: function () {
                return "svg" in a || (a.svg = document.implementation && document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1")), a.svg
            }, hasCanvas: function () {
                if (!("canvas" in a)) {
                    var e = document.createElement("canvas"), t = "getContext" in e ? e.getContext("2d") : null;
                    a.canvas = !!t && r(e, t)
                }
                return a.canvas
            }, hasWebGl: function () {
                return "webgl" in a || (a.webgl = n(!0)), a.webgl
            }, hasVml: function () {
                if (!("vml" in a)) {
                    var e, t = !1, n = document.createElement("div");
                    n.innerHTML = '<v:shape id="yamaps_testVML"  adj="1" />', e = n.firstChild, e && e.style && (e.style.behavior = "url(#default#VML)", t = !e || "object" == typeof e.adj, n.removeChild(e)), a.vml = t
                }
                return a.vml
            }, redetect: function () {
                a = {}
            }, getWebGlContextName: function () {
                return a.webgl && a.webgl.contextName
            }
        })
    }),ym.modules.define("template.filter.l10n", ["template.filtersStorage", "localization.common.current"], function (e, t, n) {
        t.add("l10n", function (e, t, r) {
            for (var i = r.replace(/'/g, "").split("."), a = n; r = i.shift();)a = a[r];
            return a
        }), e({})
    }),ym.modules.define("template.Parser", ["util.id"], function (provide, utilId) {
        function trim(e) {
            return nativeTrim ? e.trim() : e.replace(trimRegExp, "")
        }

        function escape(e) {
            return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&#39;").replace(/"/g, "&quot;")
        }

        function getKeyValuePairs(e) {
            for (var t = [], n = trim(e).replace(/\s*=\s*/g, "=").replace(/\s+/g, " ").split(" "), r = 0,
                     i = n.length; r < i; r++)t.push(n[r].split("=", 2));
            return t
        }

        function removeQuotes(e) {
            var t = e.charAt(0);
            return "'" == t || '"' == t ? e.slice(1, e.length - 1) : e
        }

        function parseExpression(e) {
            for (var t, n = /'|"/g, r = 0, i = []; t = n.exec(e);) {
                var a = t.index;
                if (a >= r) {
                    var s = e.indexOf(t[0], a + 1);
                    r != a && parseExpressionSubstitutes(i, e.slice(r, a)), i.push(e.slice(a, s + 1)), r = s + 1
                }
            }
            return r < e.length && parseExpressionSubstitutes(i, e.slice(r)), i.join("")
        }

        function parseExpressionSubstitutes(e, t) {
            for (var n, r = /(^|[^\w\$])([A-Za-z_\$][\w\$\.]*)(?:[^\w\d_\$]|$)/g, i = 0; n = r.exec(t);) {
                var a = n.index + n[1].length, s = n[2], o = a + s.length;
                a > i && e.push(t.slice(i, a)), stopWords[s] ? e.push(s) : e.push('data.get("' + s + '")'), i = o
            }
            i < t.length && e.push(t.slice(i))
        }

        function evaluateExpression(expression, data) {
            var result;
            return eval("result = " + expression), result
        }

        var trimRegExp = /^\s+|\s+$/g, nativeTrim = "function" == typeof String.prototype.trim,
            DataLogger = function (e) {
                this._dataManager = e, this._renderedValues = {}, this._contexts = {}
            };
        DataLogger.prototype.get = function (e) {
            if (this._renderedValues.hasOwnProperty(e))return this._renderedValues[e].value;
            var t = e.indexOf("."), n = trim(t > -1 ? e.substring(0, t) : e);
            this._contexts.hasOwnProperty(n) && (e = e.replace(n, this._contexts[n]));
            var r = this._dataManager.get(e);
            return this.set(e, r), r
        }, DataLogger.prototype.setContext = function (e, t) {
            this._contexts[e] = t
        }, DataLogger.prototype.set = function (e, t) {
            if (e.indexOf(".") > -1)for (var n = e.split("."), r = "", i = 0,
                                             a = n.length - 1; i < a; i++)r += (0 === i ? "" : ".") + n[i], this._renderedValues[r] = {value: this._dataManager.get(r)};
            this._renderedValues[e] = {value: t}
        }, DataLogger.prototype.getRenderedValues = function () {
            return this._renderedValues
        };
        var stopWords = {"true": !0, "false": !0, undefined: !0, "null": !0, "typeof": !0}, CONTENT = 0,
            startTokenRegExp = new RegExp(["\\$\\[\\[", "\\$\\[(?!\\])", "\\[if", "\\[else\\]", "\\[endif\\]", "\\{\\{", "\\{%"].join("|"), "g"),
            Parser = function (e) {
                this.filtersStorage = e
            };
        Parser.prototype.scanners = {}, Parser.prototype.builders = {}, Parser.prototype.parse = function (e) {
            var t, n, r, i, a = [], s = 0;
            for (startTokenRegExp.lastIndex = 0; i = startTokenRegExp.exec(e);)if (i.index >= s) {
                t = i.index, r = t + i[0].length, s != t && a.push(CONTENT, e.slice(s, t));
                var o = this.scanners[i[0]];
                o.token ? (a.push(o.token, null), s = r) : (n = e.indexOf(o.stopToken, r), o.scan(a, e.slice(r, n)), s = n + o.stopToken.length)
            }
            return s < e.length && a.push(CONTENT, e.slice(s)), a
        }, Parser.prototype.build = function (e, t) {
            var n = {
                nodes: e,
                left: 0,
                right: e.length,
                empty: !0,
                flags: {},
                subnodes: [],
                sublayouts: [],
                strings: [],
                data: new DataLogger(t)
            };
            return this._buildTree(n), n.renderedValues = n.data.getRenderedValues(), n
        }, Parser.prototype._buildTree = function (e) {
            for (var t = e.nodes, n = e.strings; e.left < e.right;) {
                var r = t[e.left];
                r == CONTENT ? (n.push(t[e.left + 1]), e.empty = !1, e.left += 2) : this.builders[r](e, this)
            }
        };
        var OLD_SUBSTITUTE = 1001, OLD_SUBLAYOUT = 1002, OLD_IF = 1003, OLD_ELSE = 1004, OLD_ENDIF = 1005;
        Parser.prototype.scanners["$[["] = {
            stopToken: "]]", scan: function (e, t) {
                var n = t.match(/^(\S+)\s*(\S.*)?$/);
                e.push(OLD_SUBLAYOUT, [n[1], n[2] ? getKeyValuePairs(n[2]) : []])
            }
        }, Parser.prototype.scanners["$["] = {
            stopToken: "]", scan: function (e, t) {
                var n = t.split("|", 2);
                e.push(OLD_SUBSTITUTE, n)
            }
        }, Parser.prototype.scanners["[if"] = {
            stopToken: "]", scan: function (e, t) {
                var n = t.match(/^(def)? (.+)$/), r = parseExpression(n[2]);
                e.push(OLD_IF, [n[1], r])
            }
        }, Parser.prototype.scanners["[else]"] = {token: OLD_ELSE}, Parser.prototype.scanners["[endif]"] = {token: OLD_ENDIF}, Parser.prototype.builders[OLD_SUBSTITUTE] = function (e, t) {
            var n = e.nodes[e.left + 1][0], r = e.data.get(n);
            "undefined" == typeof r && (r = e.nodes[e.left + 1][1]), e.strings.push(r), e.left += 2, e.empty = e.empty && !r
        }, Parser.prototype.builders[OLD_SUBLAYOUT] = function (e, t) {
            var n = utilId.prefix() + utilId.gen(), r = e.nodes[e.left + 1][0];
            e.strings.push('<ymaps id="' + n + '"></ymaps>');
            for (var i = {id: n, key: r, value: e.data.get(r) || r}, a = [], s = [], o = e.nodes[e.left + 1][1], u = 0,
                     l = o.length; u < l; u++) {
                var c, d = o[u], p = d[0], h = d[1] || "true", f = h.length - 1;
                '"' == h.charAt(0) && '"' == h.charAt(f) || "'" == h.charAt(0) && "'" == h.charAt(f) ? c = h.substring(1, f) : isNaN(Number(h)) ? "true" == h ? c = !0 : "false" == h ? c = !1 : (s = h.split("|"), c = e.data.get(s[0], s[1]), a.push(s[0])) : c = h, i[p] = c
            }
            i.monitorValues = a, e.sublayouts.push(i), e.left += 2
        }, Parser.prototype.builders[OLD_IF] = function (e, t) {
            for (var n, r, i, a = e.nodes, s = e.left, o = a[s + 1][0], u = a[s + 1][1],
                     l = evaluateExpression(u, e.data), c = o ? "undefined" != typeof l : !!l, d = e.left + 2,
                     p = e.right,
                     h = 1; d < p && (a[d] == OLD_IF ? h++ : a[d] == OLD_ELSE ? 1 == h && (r = d) : a[d] == OLD_ENDIF && (--h || (i = d)), !i);)d += 2;
            if (c ? (n = e.left + 2, p = r ? r : i) : (n = r ? r + 2 : i, p = i), n != p) {
                var f = e.right, m = e.empty;
                e.left = n, e.right = p, t._buildTree(e), e.empty = e.empty && m, e.right = f
            }
            e.left = i + 2
        };
        var SUBSTITUTE = 2001, INCLUDE = 2002, IF = 2003, ELSE = 2004, ENDIF = 2005, FOR = 2006, ENDFOR = 2007,
            ELSEIF = 2008, STYLE = 2009, ENDSTYLE = 2010;
        Parser.prototype.scanners["{{"] = {
            stopToken: "}}", scan: function (e, t) {
                for (var n = t.split("|"), r = [], i = 1, a = n.length; i < a; i++) {
                    var s = n[i].split(":", 2), o = trim(s[0]), u = s[1];
                    s[1] && (u = "default" != o ? parseExpression(removeQuotes(s[1])) : trim(s[1])), r.push([o, u])
                }
                e.push(SUBSTITUTE, [trim(n[0]), r])
            }
        }, Parser.prototype.scanners["{%"] = {
            stopToken: "%}", scan: function (e, t) {
                var n = trim(t).match(/^([A-Za-z]+)(\s+\S.*)?$/), r = n[1], i = n[2] ? trim(n[2]) : null;
                switch (r) {
                    case"if":
                        e.push(IF, parseExpression(i));
                        break;
                    case"else":
                        e.push(ELSE, null);
                        break;
                    case"elseif":
                        e.push(ELSEIF, parseExpression(i));
                        break;
                    case"endif":
                        e.push(ENDIF, null);
                        break;
                    case"include":
                        var a = getKeyValuePairs(i);
                        e.push(INCLUDE, [removeQuotes(a[0][0]), a.slice(1)]);
                        break;
                    case"for":
                        e.push(FOR, i);
                        break;
                    case"endfor":
                        e.push(ENDFOR, null);
                        break;
                    case"style":
                        e.push(STYLE, i);
                        break;
                    case"endstyle":
                        e.push(ENDSTYLE, i)
                }
            }
        }, Parser.prototype.builders[SUBSTITUTE] = function (e, t) {
            var n, r, i, a = /\[\s*(\d+|\'[^\']+\'|\"[^\"]+\")\s*\]/g, s = e.nodes[e.left + 1], o = s[0], u = !0,
                l = s[1];
            if (a.test(o)) {
                var c, d = o.match(a), p = o.split(d[0]);
                if (i = d.length, o = p[0], c = o + "." + removeQuotes(trim(d[0].replace("[", "").replace("]", ""))), p = p[1], i > 1)for (r = 1; r < i; r++) {
                    var h = d[r];
                    p = p.split(h), h = trim(h.replace("[", "").replace("]", "")), h = removeQuotes(h), p[0].length && (c += p[0]), c += "." + h, p = p[1]
                } else c += p;
                n = e.data.get(c)
            } else n = e.data.get(o);
            for (r = 0, i = l.length; r < i; r++) {
                var f, m = l[r];
                t.filtersStorage && (f = t.filtersStorage.get(m[0])) ? n = f(e.data, n, m[1]) : "raw" == m[0] && (u = !1)
            }
            u && "string" == typeof n && (n = escape(n)), e.strings.push(n), e.left += 2, e.empty = e.empty && !n
        }, Parser.prototype.builders[INCLUDE] = Parser.prototype.builders[OLD_SUBLAYOUT], Parser.prototype.builders[FOR] = function (e, t) {
            for (var n, r, i = e.nodes, a = e.left + 2, s = e.right,
                     o = 1; a < s && (i[a] == FOR ? o++ : i[a] == ENDFOR && (--o || (r = a)), !r);)a += 2;
            if (n = e.left + 2, s = r, n != s) {
                var u = i[e.left + 1].split(/\sin\s/), l = trim(u[0]), c = trim(u[1]), d = e.data.get(c),
                    p = l.split(","), h = p.length, f = e.right, m = e.empty, g = e.data, v = new DataLogger(g);
                e.data = v;
                for (var y in d)e.left = n, e.right = s, d.hasOwnProperty(y) && (1 == h ? v.setContext(l, c + "." + y) : (v.set(trim(p[0]), y), v.setContext(trim(p[1]), c + "." + y)), t._buildTree(e));
                e.empty = e.empty && m, e.right = f, e.data = g
            }
            e.left = r + 2
        }, Parser.prototype.builders[IF] = Parser.prototype.builders[ELSEIF] = function (e, t) {
            for (var n, r, i, a, s, o = e.nodes, u = e.left, l = o[u + 1], c = evaluateExpression(l, e.data), d = !!c,
                     p = e.left + 2, h = e.right,
                     f = 1; p < h && (s = o[p], s == IF ? f++ : s == ELSEIF ? 1 != f || i || (i = p) : s == ELSE ? 1 == f && (r = p) : s == ENDIF && (--f || (a = p)), !a);)p += 2;
            if (d ? (n = e.left + 2, h = i || r || a) : i ? (n = i, h = a + 1) : (n = r ? r + 2 : a, h = a), n != h) {
                var m = e.right, g = e.empty;
                e.left = n, e.right = h, t._buildTree(e), e.empty = e.empty && g, e.right = m
            }
            e.left = a + 2
        }, Parser.prototype.builders[STYLE] = function (e, t) {
            for (var n, r, i, a = e.nodes, s = e.left + 2, o = e.right, u = 1; s < o;) {
                if (i = a[s], i == STYLE) u++; else if (i == ENDSTYLE && 1 == u) {
                    r = s;
                    break
                }
                s += 2
            }
            if (n = e.left + 2, o = r, n != o) {
                var l = e.right, c = e.empty;
                e.left = n, e.right = o, ym.env.server.params.csp && "MSIE" !== ym.env.browser.name ? (e.strings.push('data-ymaps-style="'), e.flags.containsInlineStyle = !0) : e.strings.push('style="'), t._buildTree(e), e.strings.push('"'), e.empty = e.empty && c, e.right = l
            }
            e.left = r + 2
        }, provide(Parser)
    }),ym.modules.define("domEvent.Touch", ["util.defineClass", "domEvent.Base", "domEvent.touch.overrideStorage", "component.event.Cacher"], function (e, t, n, r, i) {
        function a(e, t, n) {
            a.superclass.constructor.call(this, e, t), this._cache = {
                type: t || e.type,
                button: 0,
                touches: n
            }, this._cacher = null
        }

        t(a, n, {
            get: function (e) {
                return this._cacher || (this._cacher = new i(this, this._cache, r)), this._cacher.get(e)
            }, clone: function (e) {
                return new a(e, this._cache.type, this._cache.touches)
            }
        }), e(a)
    }),ym.modules.define("domEvent.touch.override", ["domEvent.touch.overrideStorage", "util.instantCache", "util.id"], function (e, t, n, r) {
        function i(e) {
            return function (t) {
                var n = t.get("touches");
                return n[0][e]
            }
        }

        for (var a = ["pageX", "pageY", "screenX", "screenY", "clientX", "clientY"], s = 0,
                 o = a.length; s < o; s++)t.add(a[s], i(a[s]));
        t.add("position", function (e) {
            return [e.get("pageX"), e.get("pageY")]
        }), t.add("propagatedData", function (e) {
            var t = r.get(e.originalEvent), i = n.get(t);
            return i || n.add(t, i = {}), i
        }), t.add("target", function (e) {
            return e.get("touches")[0].target
        }), e({})
    }),ym.modules.define("domEvent.touch.overrideStorage", ["util.Storage"], function (e, t) {
        e(new t)
    }),ym.modules.define("domEvent.TouchMapper", ["util.extend", "util.bind", "DomEvent", "util.math.areEqual", "domEvent.managerComponent.mouseLeaveEnterDispatcher", "domEvent.Touch", "domEvent.MultiTouch", "map.metaOptions", "util.dom.event", "system.browser"], function (e, t, n, r, i, a, s, o, u, l, c) {
        var d = 20, p = "iOS" != c.osFamily, h = 20, f = 1200,
            m = ["mouseenter", "mouseleave", "mousemove", "mousedown", "mouseup", "wheel", "click", "dblclick", "contextmenu"],
            g = {
                activeMappers: 0,
                activeTouchSession: !1,
                touchSessionEndTime: 0,
                initTouchId: 0,
                sessionStartPosition: null,
                sessionEndPosition: null
            }, v = function (e) {
                var t = e.touches;
                if (1 == t.length || !g.initTouchId) {
                    var n = t[0];
                    g.initTouchId = n.identifier, g.sessionStartPosition = [n.clientX, n.clientY]
                }
                g.activeTouchSession = !0
            }, y = function (e) {
                for (var t = e.touches.length, n = e.changedTouches, r = 0, i = n.length; r < i; r++) {
                    var a = n[r];
                    if (a.identifier == g.initTouchId) {
                        g.sessionEndPosition = [a.clientX, a.clientY], g.initTouchId = 0;
                        break
                    }
                }
                0 == t && (g.touchSessionEndTime = +new Date, g.activeTouchSession = !1)
            }, _ = function (e, r) {
                this.events = e, this._useCapture = this.events.params.capture, this.params = t({}, {
                    dblClickTimeout: u.get("dblClickTimeout", 500),
                    contextMenuTimeout: u.get("touchContextMenuTimeout", 400)
                }, r), this._state = {}, this._listeners = null, this._elementTouchStartHandler = n(this._onTouchStart, this), this._elementTouchMoveHandler = n(this._onTouchMove, this), this._elementTouchEndHandler = n(this._onTouchEnd, this), this._mouseEventsHandler = n(this._onMouseEvent, this)
            };
        _.prototype = {
            start: function () {
                this._state = {
                    initMouseEventSent: !1,
                    multiTouch: !1,
                    preventClick: !1,
                    mouseOver: !1,
                    previousEventType: "",
                    clickData: {}
                }, c.isIE && (this._state.eventsWithoutHover = 0);
                var e = this.events.params.htmlElement;
                if (e.addEventListener("touchstart", this._elementTouchStartHandler, this._useCapture), e.addEventListener("touchmove", this._elementTouchMoveHandler, this._useCapture), e.addEventListener("touchend", this._elementTouchEndHandler, this._useCapture), e.addEventListener("touchcancel", this._elementTouchEndHandler, this._useCapture), p) {
                    for (var t = 0,
                             n = m.length; t < n; t++)e.addEventListener(l.getActualName(m[t]), this._mouseEventsHandler, this._useCapture);
                    0 == g.activeMappers++ && (document.addEventListener("touchstart", v, !0), document.addEventListener("touchend", y, !0), document.addEventListener("touchcancel", y, !0))
                }
            }, stop: function () {
                var e = this.events.params.htmlElement;
                if (e.removeEventListener("touchstart", this._elementTouchStartHandler, this._useCapture), e.removeEventListener("touchmove", this._elementTouchMoveHandler, this._useCapture), e.removeEventListener("touchend", this._elementTouchEndHandler, this._useCapture), e.removeEventListener("touchcancel", this._elementTouchEndHandler, this._useCapture), p) {
                    0 == --g.activeMappers && (document.removeEventListener("touchstart", v, !0), document.removeEventListener("touchend", y, !0), document.removeEventListener("touchcancel", y, !0), g.touchSessionEndTime = 0, g.sessionStartPosition = g.sessionEndPosition = null);
                    for (var t = 0,
                             n = m.length; t < n; t++)e.removeEventListener(l.getActualName(m[t]), this._mouseEventsHandler, this._useCapture)
                }
            }, _onTouchStart: function (e) {
                this._state.previousEventType = "touch";
                var t = this._state, n = e.touches, r = n.length;
                t.initMouseEventSent || (t.initMouseEventSent = !0, this._fireMouseInitEvents(e), t.initTimestamp = e.timeStamp, t.touches = e.touches), r > 1 && (t.initMouseEventSent && !t.preventClick && (t.preventClick = !0), this._fireEndStartMultiTouchEvents(t.multiTouch ? e : null, e))
            }, _onTouchMove: function (e) {
                this._state.previousEventType = "touch";
                var t = e.touches, n = this._state;
                if (1 == t.length && g.sessionStartPosition) {
                    var r = t[0], a = [r.clientX, r.clientY];
                    if (i(g.sessionStartPosition, a, 3))return
                }
                n.touches = e.touches, n.initMouseEventSent || this._onTouchStart(e), n.preventClick || (n.preventClick = !0), 1 == e.touches.length ? this._fireTouchEvent(e, "mousemove") : (n.multiTouch || this._fireEndStartMultiTouchEvents(null, e), this._fireMultiTouchEvent(e, "multitouchmove"))
            }, _onTouchEnd: function (e) {
                this._state.previousEventType = "touch";
                var t = e.touches.length, n = this._state,
                    r = n.multiTouch || !n.initMouseEventSent && e.changedTouches.length > 0;
                r && this._fireEndStartMultiTouchEvents(e, t > 1 ? e : null), 0 == t && (n.initTimestamp || (n.initTimestamp = e.timeStamp), n.touches || (n.touches = e.changedTouches), this._fireMouseEndEvents(e))
            }, _fireEndStartMultiTouchEvents: function (e, t) {
                e && this._fireMultiTouchEvent(e, "multitouchend");
                var n = null != t;
                n && this._fireMultiTouchEvent(t, "multitouchstart"), this._state.multiTouch = n
            }, _fireMouseInitEvents: function (e) {
                this._state.mouseOver || (this._state.mouseOver = !0, this._fireTouchEvent(e, "mouseenter")), this._fireTouchEvent(e, "mousemove"), this._fireTouchEvent(e, "mousedown")
            }, _fireMouseEndEvents: function (e) {
                var t = e.timeStamp, n = this._state, r = n.touches;
                if (this._fireTouchEvent(e, "mouseup", r), "touchend" != e.type && (n.preventClick = !0), !n.preventClick)if (t - n.initTimestamp > this.params.contextMenuTimeout) this._fireTouchEvent(e, "contextmenu", r), n.clickData.time = null; else {
                    var i = r[0];
                    this._processClickEvent({
                        clickPos: [i.clientX, i.clientY],
                        time: e.timeStamp,
                        diff: d
                    }, function (t) {
                        this._fireTouchEvent(e, t, r)
                    })
                }
                this._fireTouchEvent(e, "mousemove", r), this._fireTouchEvent(e, "mouseleave", r), n.initMouseEventSent = n.preventClick = n.mouseOver = !1
            }, _fireTouchEvent: function (e, t, n) {
                n || (n = e.touches), this.events.fire(t, new s(e, t, n))
            }, _fireMultiTouchEvent: function (e, t, n) {
                n || (n = e.touches), this.events.fire(t, new o(e, t, n))
            }, _onMouseEvent: function (e) {
                var t = this._state.previousEventType, n = this._state, s = l.getIdealName(e.type);
                if ("dblclick" != s) {
                    var o = "mouseenter" == s, u = "mouseleave" == s, d = new r(e, s);
                    if (u || !g.activeTouchSession && this._allowMouseEvent(e))if (this._state.previousEventType = "mouse", o || u) n.mouseOver = o, a.fire(this.events, s, d.originalEvent), c.isIE && (n.eventsWithoutHover = 0); else {
                        if (c.isIE && !n.mouseOver && "mousemove" == s && 0 == n.eventsWithoutHover++)return;
                        "touch" == t && (n.mouseOver || (n.mouseOver = !0, a.fire(this.events, "mouseenter", e)));
                        var p = n.clickData;
                        if ("click" == s) {
                            var h = [e.clientX, e.clientY], f = p.lastMouseDownPos;
                            if (f && i(f, h, 0))return void this._processClickEvent({
                                clickPos: [e.clientX, e.clientY],
                                time: e.timeStamp,
                                diff: 1
                            }, function (t) {
                                this.events.fire(t, new r(e, t))
                            })
                        } else"mousedown" == s && (p.lastMouseDownPos = [e.clientX, e.clientY]);
                        this.events.fire(s, d)
                    }
                }
            }, _allowMouseEvent: function (e) {
                if (g.touchSessionEndTime > 0) {
                    var t = [e.clientX, e.clientY];
                    if (+new Date - g.touchSessionEndTime > f) g.touchSessionEndTime = 0, g.sessionStartPosition = g.sessionEndPosition = null; else if (g.sessionStartPosition && i(t, g.sessionStartPosition, h) || g.sessionEndPosition && i(t, g.sessionEndPosition, h))return !1
                }
                return !0
            }, _processClickEvent: function (e, t) {
                var n = this._state, r = e.time, a = e.diff, s = e.clickPos;
                n.clickData.time && r - n.clickData.time < this.params.dblClickTimeout ? (t.call(this, "click"), n.clickData.pos && i(n.clickData.pos, s, a) && t.call(this, "dblclick"), n.clickData.time = null) : (t.call(this, "click"), n.clickData.time = r), n.clickData.pos = s
            }
        }, e(_)
    }),ym.modules.define("util.defineClass", ["util.extend"], function (e, t) {
        function n(e, n, r) {
            return e.prototype = (Object.create || function (e) {
                function t() {
                }

                return t.prototype = e, new t
            })(n.prototype), e.prototype.constructor = e, e.superclass = n.prototype, e.superclass.constructor = n, r && t(e.prototype, r), e.prototype
        }

        function r(e, r, i) {
            var a = "function" == typeof r;
            a && n(e, r);
            for (var s = a ? 2 : 1, o = arguments.length; s < o; s++)t(e.prototype, arguments[s]);
            return e
        }

        e(r)
    }),ym.modules.define("util.extend", ["util.objectKeys"], function (e, t) {
        function n(e) {
            if (ym.env.debug && !e)throw new Error("util.extend: не передан параметр target");
            for (var t = 1, n = arguments.length; t < n; t++) {
                var r = arguments[t];
                if (r)for (var i in r)r.hasOwnProperty(i) && (e[i] = r[i])
            }
            return e
        }

        function r(e) {
            if (ym.env.debug && !e)throw new Error("util.extend: не передан параметр target");
            for (var n = 1, r = arguments.length; n < r; n++) {
                var i = arguments[n];
                if (i)for (var a = t(i), s = 0, o = a.length; s < o; s++)e[a[s]] = i[a[s]]
            }
            return e
        }

        e("function" == typeof Object.keys ? r : n)
    }),ym.modules.define("util.id", [], function (e) {
        var t = new function () {
            function e() {
                return (++n).toString()
            }

            var t = ("id_" + +new Date + Math.round(1e4 * Math.random())).toString(),
                n = Math.round(1e4 * Math.random());
            this.prefix = function () {
                return t
            }, this.gen = e, this.get = function (n) {
                return n === window ? t : n[t] || (n[t] = e())
            }
        };
        e(t)
    }),ym.modules.define("util.jsonp", ["util.id", "util.querystring", "util.script"], function (e, t, n, r) {
        function i(e) {
            return i.handler ? i.handler(e, a) : a(e)
        }

        function a(e) {
            var i, a, o = "undefined" == typeof e.checkResponse || e.checkResponse,
                d = e.responseFieldName || "response",
                p = e.requestParams ? "&" + n.stringify(e.requestParams, null, null, {joinArrays: !0}) : "",
                h = ym.vow.defer(), f = h.promise(), m = e.timeout || 3e4, g = setTimeout(function () {
                    h.reject(l)
                }, m), v = function () {
                    s(a, i), clearTimeout(g), g = null
                };
            if (!e.padding) {
                if (i = e.paddingKey || t.prefix() + t.gen(), "function" == typeof window[i] && window[i].promise)return window[i].promise;
                u(i), window[i] = function (e) {
                    if (o) {
                        var t = !e || e.error || e[d] && e[d].error;
                        t ? h.reject(t) : h.resolve(e && e[d] || e)
                    } else h.resolve(e)
                }, window[i].promise = f
            }
            var y = e.url + (/\?/.test(e.url) ? "&" : "?") + (e.paramName || "callback") + "=" + (e.padding || i) + (e.noCache ? "&_=" + Math.floor(1e7 * Math.random()) : "") + p;
            if (e.postprocessUrl)if ("function" == typeof e.postprocessUrl) y = e.postprocessUrl(y); else for (; e.postprocessUrl.length;)y = e.postprocessUrl.shift()(y);
            return a = r.create(y), a.onerror = function () {
                h.reject(c)
            }, f.always(v), f
        }

        function s(e, t) {
            t && o(t), setTimeout(function () {
                e && e.parentNode && e.parentNode.removeChild(e)
            }, 0)
        }

        function o(e) {
            window[e] = d, p[e] = setTimeout(function () {
                window[e] = void 0;
                try {
                    delete window[e]
                } catch (t) {
                }
            }, 500)
        }

        function u(e) {
            p[e] && (clearTimeout(p[e]), p[e] = null)
        }

        var l = {message: "timeoutExceeded"}, c = {message: "scriptError"}, d = function () {
        }, p = {};
        e(i)
    }),ym.modules.define("system.nextTick", [], function (e) {
        var t = function () {
            var e = [], t = function (t) {
                return 1 === e.push(t)
            }, n = function () {
                var t = e, n = 0, r = e.length;
                for (e = []; n < r;)t[n++]()
            };
            if ("object" == typeof process && process.nextTick)return function (e) {
                t(e) && process.nextTick(n)
            };
            if (global.setImmediate)return function (e) {
                t(e) && global.setImmediate(n)
            };
            if (global.postMessage && !global.opera) {
                var r = !0;
                if (global.attachEvent) {
                    var i = function () {
                        r = !1
                    };
                    global.attachEvent("onmessage", i), global.postMessage("__checkAsync", "*"), global.detachEvent("onmessage", i)
                }
                if (r) {
                    var a = "__ym" + +new Date, s = function (e) {
                        e.data === a && (e.stopPropagation && e.stopPropagation(), n())
                    };
                    return global.addEventListener ? global.addEventListener("message", s, !0) : global.attachEvent("onmessage", s), function (e) {
                        t(e) && global.postMessage(a, "*")
                    }
                }
            }
            var o = global.document;
            if ("onreadystatechange" in o.createElement("script")) {
                var u = o.getElementsByTagName("head")[0], l = function () {
                    var e = o.createElement("script");
                    e.onreadystatechange = function () {
                        e.parentNode.removeChild(e), e = e.onreadystatechange = null, n()
                    }, u.appendChild(e)
                };
                return function (e) {
                    t(e) && l()
                }
            }
            return function (e) {
                t(e) && setTimeout(n, 0)
            }
        }();
        e(t)
    }),ym.modules.define("util.objectKeys", [], function (e) {
        var t = "function" == typeof Object.keys ? Object.keys : function (e) {
            var t = [];
            for (var n in e)e.hasOwnProperty(n) && t.push(n);
            return t
        };
        e(function (e) {
            var n, r = typeof e;
            if ("object" != r && "function" != r)throw new TypeError("Object.keys called on non-object");
            return n = t(e)
        })
    }),ym.modules.define("util.providePackage", ["system.mergeImports"], function (e, t) {
        e(function (e, n) {
            var r = n[0], i = Array.prototype.slice.call(n, 1), a = t.joinImports(e.name, {}, e.deps, i);
            r(a)
        })
    }),ym.modules.define("util.querystring", [], function (e) {
        function t(e) {
            return "[object Array]" === Object.prototype.toString.call(e)
        }

        e({
            parse: function (e, n, r, i) {
                n = n || "&", r = r || "=", i = i || {};
                for (var a, s, o, u = i.decodeURIComponent || decodeURIComponent, l = {}, c = e.split(n),
                         d = 0; d < c.length; ++d)a = c[d].split(r), s = u(a[0]), o = u(a.slice(1).join(r)), t(l[s]) ? l[s].push(o) : l.hasOwnProperty(s) ? l[s] = [l[s], o] : l[s] = o;
                return l
            }, stringify: function (e, n, r, i) {
                n = n || "&", r = r || "=", i = i || {};
                var a, s, o = i.encodeURIComponent || encodeURIComponent, u = [];
                for (a in e)if (e.hasOwnProperty(a))if (s = e[a], t(s))if (i.joinArrays) u.push(o(a) + r + o(s.join(","))); else for (var l = 0; l < s.length; ++l)"undefined" != typeof s[l] && u.push(o(a) + r + o(s[l])); else"undefined" != typeof s && u.push(o(a) + r + o(s));
                return u.join(n)
            }
        })
    }),ym.modules.define("util.script", [], function (e) {
        var t = document.getElementsByTagName("head")[0];
        e({
            create: function (e, n) {
                var r = document.createElement("script");
                return r.charset = n || "utf-8", r.src = e, setTimeout(function () {
                    t.insertBefore(r, t.firstChild)
                }, 0), r
            }
        })
    })
}(this);