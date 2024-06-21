(function() {
    const e = document.createElement("link").relList;
    if (e && e.supports && e.supports("modulepreload"))
        return;
    for (const r of document.querySelectorAll('link[rel="modulepreload"]'))
        i(r);
    new MutationObserver(r=>{
        for (const o of r)
            if (o.type === "childList")
                for (const s of o.addedNodes)
                    s.tagName === "LINK" && s.rel === "modulepreload" && i(s)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function n(r) {
        const o = {};
        return r.integrity && (o.integrity = r.integrity),
        r.referrerPolicy && (o.referrerPolicy = r.referrerPolicy),
        r.crossOrigin === "use-credentials" ? o.credentials = "include" : r.crossOrigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin",
        o
    }
    function i(r) {
        if (r.ep)
            return;
        r.ep = !0;
        const o = n(r);
        fetch(r.href, o)
    }
}
)();
function Ap(t) {
    return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t
}
var Wf = {
    exports: {}
}
  , as = {}
  , qf = {
    exports: {}
}
  , I = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var jr = Symbol.for("react.element")
  , Bp = Symbol.for("react.portal")
  , Up = Symbol.for("react.fragment")
  , Hp = Symbol.for("react.strict_mode")
  , Vp = Symbol.for("react.profiler")
  , Wp = Symbol.for("react.provider")
  , qp = Symbol.for("react.context")
  , Qp = Symbol.for("react.forward_ref")
  , Gp = Symbol.for("react.suspense")
  , Yp = Symbol.for("react.memo")
  , Kp = Symbol.for("react.lazy")
  , Pu = Symbol.iterator;
function Xp(t) {
    return t === null || typeof t != "object" ? null : (t = Pu && t[Pu] || t["@@iterator"],
    typeof t == "function" ? t : null)
}
var Qf = {
    isMounted: function() {
        return !1
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
}
  , Gf = Object.assign
  , Yf = {};
function ji(t, e, n) {
    this.props = t,
    this.context = e,
    this.refs = Yf,
    this.updater = n || Qf
}
ji.prototype.isReactComponent = {};
ji.prototype.setState = function(t, e) {
    if (typeof t != "object" && typeof t != "function" && t != null)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, t, e, "setState")
}
;
ji.prototype.forceUpdate = function(t) {
    this.updater.enqueueForceUpdate(this, t, "forceUpdate")
}
;
function Kf() {}
Kf.prototype = ji.prototype;
function Sa(t, e, n) {
    this.props = t,
    this.context = e,
    this.refs = Yf,
    this.updater = n || Qf
}
var Ca = Sa.prototype = new Kf;
Ca.constructor = Sa;
Gf(Ca, ji.prototype);
Ca.isPureReactComponent = !0;
var bu = Array.isArray
  , Xf = Object.prototype.hasOwnProperty
  , Ea = {
    current: null
}
  , Zf = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function Jf(t, e, n) {
    var i, r = {}, o = null, s = null;
    if (e != null)
        for (i in e.ref !== void 0 && (s = e.ref),
        e.key !== void 0 && (o = "" + e.key),
        e)
            Xf.call(e, i) && !Zf.hasOwnProperty(i) && (r[i] = e[i]);
    var l = arguments.length - 2;
    if (l === 1)
        r.children = n;
    else if (1 < l) {
        for (var a = Array(l), u = 0; u < l; u++)
            a[u] = arguments[u + 2];
        r.children = a
    }
    if (t && t.defaultProps)
        for (i in l = t.defaultProps,
        l)
            r[i] === void 0 && (r[i] = l[i]);
    return {
        $$typeof: jr,
        type: t,
        key: o,
        ref: s,
        props: r,
        _owner: Ea.current
    }
}
function Zp(t, e) {
    return {
        $$typeof: jr,
        type: t.type,
        key: e,
        ref: t.ref,
        props: t.props,
        _owner: t._owner
    }
}
function za(t) {
    return typeof t == "object" && t !== null && t.$$typeof === jr
}
function Jp(t) {
    var e = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + t.replace(/[=:]/g, function(n) {
        return e[n]
    })
}
var Mu = /\/+/g;
function Rs(t, e) {
    return typeof t == "object" && t !== null && t.key != null ? Jp("" + t.key) : e.toString(36)
}
function xo(t, e, n, i, r) {
    var o = typeof t;
    (o === "undefined" || o === "boolean") && (t = null);
    var s = !1;
    if (t === null)
        s = !0;
    else
        switch (o) {
        case "string":
        case "number":
            s = !0;
            break;
        case "object":
            switch (t.$$typeof) {
            case jr:
            case Bp:
                s = !0
            }
        }
    if (s)
        return s = t,
        r = r(s),
        t = i === "" ? "." + Rs(s, 0) : i,
        bu(r) ? (n = "",
        t != null && (n = t.replace(Mu, "$&/") + "/"),
        xo(r, e, n, "", function(u) {
            return u
        })) : r != null && (za(r) && (r = Zp(r, n + (!r.key || s && s.key === r.key ? "" : ("" + r.key).replace(Mu, "$&/") + "/") + t)),
        e.push(r)),
        1;
    if (s = 0,
    i = i === "" ? "." : i + ":",
    bu(t))
        for (var l = 0; l < t.length; l++) {
            o = t[l];
            var a = i + Rs(o, l);
            s += xo(o, e, n, a, r)
        }
    else if (a = Xp(t),
    typeof a == "function")
        for (t = a.call(t),
        l = 0; !(o = t.next()).done; )
            o = o.value,
            a = i + Rs(o, l++),
            s += xo(o, e, n, a, r);
    else if (o === "object")
        throw e = String(t),
        Error("Objects are not valid as a React child (found: " + (e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e) + "). If you meant to render a collection of children, use an array instead.");
    return s
}
function Wr(t, e, n) {
    if (t == null)
        return t;
    var i = []
      , r = 0;
    return xo(t, i, "", "", function(o) {
        return e.call(n, o, r++)
    }),
    i
}
function em(t) {
    if (t._status === -1) {
        var e = t._result;
        e = e(),
        e.then(function(n) {
            (t._status === 0 || t._status === -1) && (t._status = 1,
            t._result = n)
        }, function(n) {
            (t._status === 0 || t._status === -1) && (t._status = 2,
            t._result = n)
        }),
        t._status === -1 && (t._status = 0,
        t._result = e)
    }
    if (t._status === 1)
        return t._result.default;
    throw t._result
}
var Oe = {
    current: null
}
  , ko = {
    transition: null
}
  , tm = {
    ReactCurrentDispatcher: Oe,
    ReactCurrentBatchConfig: ko,
    ReactCurrentOwner: Ea
};
function ed() {
    throw Error("act(...) is not supported in production builds of React.")
}
I.Children = {
    map: Wr,
    forEach: function(t, e, n) {
        Wr(t, function() {
            e.apply(this, arguments)
        }, n)
    },
    count: function(t) {
        var e = 0;
        return Wr(t, function() {
            e++
        }),
        e
    },
    toArray: function(t) {
        return Wr(t, function(e) {
            return e
        }) || []
    },
    only: function(t) {
        if (!za(t))
            throw Error("React.Children.only expected to receive a single React element child.");
        return t
    }
};
I.Component = ji;
I.Fragment = Up;
I.Profiler = Vp;
I.PureComponent = Sa;
I.StrictMode = Hp;
I.Suspense = Gp;
I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tm;
I.act = ed;
I.cloneElement = function(t, e, n) {
    if (t == null)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + t + ".");
    var i = Gf({}, t.props)
      , r = t.key
      , o = t.ref
      , s = t._owner;
    if (e != null) {
        if (e.ref !== void 0 && (o = e.ref,
        s = Ea.current),
        e.key !== void 0 && (r = "" + e.key),
        t.type && t.type.defaultProps)
            var l = t.type.defaultProps;
        for (a in e)
            Xf.call(e, a) && !Zf.hasOwnProperty(a) && (i[a] = e[a] === void 0 && l !== void 0 ? l[a] : e[a])
    }
    var a = arguments.length - 2;
    if (a === 1)
        i.children = n;
    else if (1 < a) {
        l = Array(a);
        for (var u = 0; u < a; u++)
            l[u] = arguments[u + 2];
        i.children = l
    }
    return {
        $$typeof: jr,
        type: t.type,
        key: r,
        ref: o,
        props: i,
        _owner: s
    }
}
;
I.createContext = function(t) {
    return t = {
        $$typeof: qp,
        _currentValue: t,
        _currentValue2: t,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    },
    t.Provider = {
        $$typeof: Wp,
        _context: t
    },
    t.Consumer = t
}
;
I.createElement = Jf;
I.createFactory = function(t) {
    var e = Jf.bind(null, t);
    return e.type = t,
    e
}
;
I.createRef = function() {
    return {
        current: null
    }
}
;
I.forwardRef = function(t) {
    return {
        $$typeof: Qp,
        render: t
    }
}
;
I.isValidElement = za;
I.lazy = function(t) {
    return {
        $$typeof: Kp,
        _payload: {
            _status: -1,
            _result: t
        },
        _init: em
    }
}
;
I.memo = function(t, e) {
    return {
        $$typeof: Yp,
        type: t,
        compare: e === void 0 ? null : e
    }
}
;
I.startTransition = function(t) {
    var e = ko.transition;
    ko.transition = {};
    try {
        t()
    } finally {
        ko.transition = e
    }
}
;
I.unstable_act = ed;
I.useCallback = function(t, e) {
    return Oe.current.useCallback(t, e)
}
;
I.useContext = function(t) {
    return Oe.current.useContext(t)
}
;
I.useDebugValue = function() {}
;
I.useDeferredValue = function(t) {
    return Oe.current.useDeferredValue(t)
}
;
I.useEffect = function(t, e) {
    return Oe.current.useEffect(t, e)
}
;
I.useId = function() {
    return Oe.current.useId()
}
;
I.useImperativeHandle = function(t, e, n) {
    return Oe.current.useImperativeHandle(t, e, n)
}
;
I.useInsertionEffect = function(t, e) {
    return Oe.current.useInsertionEffect(t, e)
}
;
I.useLayoutEffect = function(t, e) {
    return Oe.current.useLayoutEffect(t, e)
}
;
I.useMemo = function(t, e) {
    return Oe.current.useMemo(t, e)
}
;
I.useReducer = function(t, e, n) {
    return Oe.current.useReducer(t, e, n)
}
;
I.useRef = function(t) {
    return Oe.current.useRef(t)
}
;
I.useState = function(t) {
    return Oe.current.useState(t)
}
;
I.useSyncExternalStore = function(t, e, n) {
    return Oe.current.useSyncExternalStore(t, e, n)
}
;
I.useTransition = function() {
    return Oe.current.useTransition()
}
;
I.version = "18.3.1";
qf.exports = I;
var De = qf.exports;
const xl = Ap(De);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nm = De
  , im = Symbol.for("react.element")
  , rm = Symbol.for("react.fragment")
  , om = Object.prototype.hasOwnProperty
  , sm = nm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
  , lm = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function td(t, e, n) {
    var i, r = {}, o = null, s = null;
    n !== void 0 && (o = "" + n),
    e.key !== void 0 && (o = "" + e.key),
    e.ref !== void 0 && (s = e.ref);
    for (i in e)
        om.call(e, i) && !lm.hasOwnProperty(i) && (r[i] = e[i]);
    if (t && t.defaultProps)
        for (i in e = t.defaultProps,
        e)
            r[i] === void 0 && (r[i] = e[i]);
    return {
        $$typeof: im,
        type: t,
        key: o,
        ref: s,
        props: r,
        _owner: sm.current
    }
}
as.Fragment = rm;
as.jsx = td;
as.jsxs = td;
Wf.exports = as;
var C = Wf.exports
  , kl = {}
  , nd = {
    exports: {}
}
  , qe = {}
  , id = {
    exports: {}
}
  , rd = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(t) {
    function e(P, T) {
        var L = P.length;
        P.push(T);
        e: for (; 0 < L; ) {
            var N = L - 1 >>> 1
              , X = P[N];
            if (0 < r(X, T))
                P[N] = T,
                P[L] = X,
                L = N;
            else
                break e
        }
    }
    function n(P) {
        return P.length === 0 ? null : P[0]
    }
    function i(P) {
        if (P.length === 0)
            return null;
        var T = P[0]
          , L = P.pop();
        if (L !== T) {
            P[0] = L;
            e: for (var N = 0, X = P.length, Ye = X >>> 1; N < Ye; ) {
                var Ee = 2 * (N + 1) - 1
                  , Os = P[Ee]
                  , yn = Ee + 1
                  , Vr = P[yn];
                if (0 > r(Os, L))
                    yn < X && 0 > r(Vr, Os) ? (P[N] = Vr,
                    P[yn] = L,
                    N = yn) : (P[N] = Os,
                    P[Ee] = L,
                    N = Ee);
                else if (yn < X && 0 > r(Vr, L))
                    P[N] = Vr,
                    P[yn] = L,
                    N = yn;
                else
                    break e
            }
        }
        return T
    }
    function r(P, T) {
        var L = P.sortIndex - T.sortIndex;
        return L !== 0 ? L : P.id - T.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var o = performance;
        t.unstable_now = function() {
            return o.now()
        }
    } else {
        var s = Date
          , l = s.now();
        t.unstable_now = function() {
            return s.now() - l
        }
    }
    var a = []
      , u = []
      , c = 1
      , f = null
      , d = 3
      , m = !1
      , v = !1
      , y = !1
      , k = typeof setTimeout == "function" ? setTimeout : null
      , p = typeof clearTimeout == "function" ? clearTimeout : null
      , h = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function g(P) {
        for (var T = n(u); T !== null; ) {
            if (T.callback === null)
                i(u);
            else if (T.startTime <= P)
                i(u),
                T.sortIndex = T.expirationTime,
                e(a, T);
            else
                break;
            T = n(u)
        }
    }
    function w(P) {
        if (y = !1,
        g(P),
        !v)
            if (n(a) !== null)
                v = !0,
                Bi(x);
            else {
                var T = n(u);
                T !== null && Ui(w, T.startTime - P)
            }
    }
    function x(P, T) {
        v = !1,
        y && (y = !1,
        p(z),
        z = -1),
        m = !0;
        var L = d;
        try {
            for (g(T),
            f = n(a); f !== null && (!(f.expirationTime > T) || P && !A()); ) {
                var N = f.callback;
                if (typeof N == "function") {
                    f.callback = null,
                    d = f.priorityLevel;
                    var X = N(f.expirationTime <= T);
                    T = t.unstable_now(),
                    typeof X == "function" ? f.callback = X : f === n(a) && i(a),
                    g(T)
                } else
                    i(a);
                f = n(a)
            }
            if (f !== null)
                var Ye = !0;
            else {
                var Ee = n(u);
                Ee !== null && Ui(w, Ee.startTime - T),
                Ye = !1
            }
            return Ye
        } finally {
            f = null,
            d = L,
            m = !1
        }
    }
    var _ = !1
      , E = null
      , z = -1
      , R = 5
      , O = -1;
    function A() {
        return !(t.unstable_now() - O < R)
    }
    function te() {
        if (E !== null) {
            var P = t.unstable_now();
            O = P;
            var T = !0;
            try {
                T = E(!0, P)
            } finally {
                T ? de() : (_ = !1,
                E = null)
            }
        } else
            _ = !1
    }
    var de;
    if (typeof h == "function")
        de = function() {
            h(te)
        }
        ;
    else if (typeof MessageChannel < "u") {
        var $ = new MessageChannel
          , Ge = $.port2;
        $.port1.onmessage = te,
        de = function() {
            Ge.postMessage(null)
        }
    } else
        de = function() {
            k(te, 0)
        }
        ;
    function Bi(P) {
        E = P,
        _ || (_ = !0,
        de())
    }
    function Ui(P, T) {
        z = k(function() {
            P(t.unstable_now())
        }, T)
    }
    t.unstable_IdlePriority = 5,
    t.unstable_ImmediatePriority = 1,
    t.unstable_LowPriority = 4,
    t.unstable_NormalPriority = 3,
    t.unstable_Profiling = null,
    t.unstable_UserBlockingPriority = 2,
    t.unstable_cancelCallback = function(P) {
        P.callback = null
    }
    ,
    t.unstable_continueExecution = function() {
        v || m || (v = !0,
        Bi(x))
    }
    ,
    t.unstable_forceFrameRate = function(P) {
        0 > P || 125 < P ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : R = 0 < P ? Math.floor(1e3 / P) : 5
    }
    ,
    t.unstable_getCurrentPriorityLevel = function() {
        return d
    }
    ,
    t.unstable_getFirstCallbackNode = function() {
        return n(a)
    }
    ,
    t.unstable_next = function(P) {
        switch (d) {
        case 1:
        case 2:
        case 3:
            var T = 3;
            break;
        default:
            T = d
        }
        var L = d;
        d = T;
        try {
            return P()
        } finally {
            d = L
        }
    }
    ,
    t.unstable_pauseExecution = function() {}
    ,
    t.unstable_requestPaint = function() {}
    ,
    t.unstable_runWithPriority = function(P, T) {
        switch (P) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            break;
        default:
            P = 3
        }
        var L = d;
        d = P;
        try {
            return T()
        } finally {
            d = L
        }
    }
    ,
    t.unstable_scheduleCallback = function(P, T, L) {
        var N = t.unstable_now();
        switch (typeof L == "object" && L !== null ? (L = L.delay,
        L = typeof L == "number" && 0 < L ? N + L : N) : L = N,
        P) {
        case 1:
            var X = -1;
            break;
        case 2:
            X = 250;
            break;
        case 5:
            X = 1073741823;
            break;
        case 4:
            X = 1e4;
            break;
        default:
            X = 5e3
        }
        return X = L + X,
        P = {
            id: c++,
            callback: T,
            priorityLevel: P,
            startTime: L,
            expirationTime: X,
            sortIndex: -1
        },
        L > N ? (P.sortIndex = L,
        e(u, P),
        n(a) === null && P === n(u) && (y ? (p(z),
        z = -1) : y = !0,
        Ui(w, L - N))) : (P.sortIndex = X,
        e(a, P),
        v || m || (v = !0,
        Bi(x))),
        P
    }
    ,
    t.unstable_shouldYield = A,
    t.unstable_wrapCallback = function(P) {
        var T = d;
        return function() {
            var L = d;
            d = T;
            try {
                return P.apply(this, arguments)
            } finally {
                d = L
            }
        }
    }
}
)(rd);
id.exports = rd;
var am = id.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var um = De
  , We = am;
function S(t) {
    for (var e = "https://reactjs.org/docs/error-decoder.html?invariant=" + t, n = 1; n < arguments.length; n++)
        e += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var od = new Set
  , gr = {};
function Wn(t, e) {
    zi(t, e),
    zi(t + "Capture", e)
}
function zi(t, e) {
    for (gr[t] = e,
    t = 0; t < e.length; t++)
        od.add(e[t])
}
var jt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
  , _l = Object.prototype.hasOwnProperty
  , cm = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
  , Ou = {}
  , Ru = {};
function fm(t) {
    return _l.call(Ru, t) ? !0 : _l.call(Ou, t) ? !1 : cm.test(t) ? Ru[t] = !0 : (Ou[t] = !0,
    !1)
}
function dm(t, e, n, i) {
    if (n !== null && n.type === 0)
        return !1;
    switch (typeof e) {
    case "function":
    case "symbol":
        return !0;
    case "boolean":
        return i ? !1 : n !== null ? !n.acceptsBooleans : (t = t.toLowerCase().slice(0, 5),
        t !== "data-" && t !== "aria-");
    default:
        return !1
    }
}
function hm(t, e, n, i) {
    if (e === null || typeof e > "u" || dm(t, e, n, i))
        return !0;
    if (i)
        return !1;
    if (n !== null)
        switch (n.type) {
        case 3:
            return !e;
        case 4:
            return e === !1;
        case 5:
            return isNaN(e);
        case 6:
            return isNaN(e) || 1 > e
        }
    return !1
}
function Re(t, e, n, i, r, o, s) {
    this.acceptsBooleans = e === 2 || e === 3 || e === 4,
    this.attributeName = i,
    this.attributeNamespace = r,
    this.mustUseProperty = n,
    this.propertyName = t,
    this.type = e,
    this.sanitizeURL = o,
    this.removeEmptyString = s
}
var ye = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t) {
    ye[t] = new Re(t,0,!1,t,null,!1,!1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(t) {
    var e = t[0];
    ye[e] = new Re(e,1,!1,t[1],null,!1,!1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(t) {
    ye[t] = new Re(t,2,!1,t.toLowerCase(),null,!1,!1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(t) {
    ye[t] = new Re(t,2,!1,t,null,!1,!1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t) {
    ye[t] = new Re(t,3,!1,t.toLowerCase(),null,!1,!1)
});
["checked", "multiple", "muted", "selected"].forEach(function(t) {
    ye[t] = new Re(t,3,!0,t,null,!1,!1)
});
["capture", "download"].forEach(function(t) {
    ye[t] = new Re(t,4,!1,t,null,!1,!1)
});
["cols", "rows", "size", "span"].forEach(function(t) {
    ye[t] = new Re(t,6,!1,t,null,!1,!1)
});
["rowSpan", "start"].forEach(function(t) {
    ye[t] = new Re(t,5,!1,t.toLowerCase(),null,!1,!1)
});
var Pa = /[\-:]([a-z])/g;
function ba(t) {
    return t[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t) {
    var e = t.replace(Pa, ba);
    ye[e] = new Re(e,1,!1,t,null,!1,!1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t) {
    var e = t.replace(Pa, ba);
    ye[e] = new Re(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(t) {
    var e = t.replace(Pa, ba);
    ye[e] = new Re(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)
});
["tabIndex", "crossOrigin"].forEach(function(t) {
    ye[t] = new Re(t,1,!1,t.toLowerCase(),null,!1,!1)
});
ye.xlinkHref = new Re("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);
["src", "href", "action", "formAction"].forEach(function(t) {
    ye[t] = new Re(t,1,!1,t.toLowerCase(),null,!0,!0)
});
function Ma(t, e, n, i) {
    var r = ye.hasOwnProperty(e) ? ye[e] : null;
    (r !== null ? r.type !== 0 : i || !(2 < e.length) || e[0] !== "o" && e[0] !== "O" || e[1] !== "n" && e[1] !== "N") && (hm(e, n, r, i) && (n = null),
    i || r === null ? fm(e) && (n === null ? t.removeAttribute(e) : t.setAttribute(e, "" + n)) : r.mustUseProperty ? t[r.propertyName] = n === null ? r.type === 3 ? !1 : "" : n : (e = r.attributeName,
    i = r.attributeNamespace,
    n === null ? t.removeAttribute(e) : (r = r.type,
    n = r === 3 || r === 4 && n === !0 ? "" : "" + n,
    i ? t.setAttributeNS(i, e, n) : t.setAttribute(e, n))))
}
var Ut = um.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
  , qr = Symbol.for("react.element")
  , ei = Symbol.for("react.portal")
  , ti = Symbol.for("react.fragment")
  , Oa = Symbol.for("react.strict_mode")
  , Sl = Symbol.for("react.profiler")
  , sd = Symbol.for("react.provider")
  , ld = Symbol.for("react.context")
  , Ra = Symbol.for("react.forward_ref")
  , Cl = Symbol.for("react.suspense")
  , El = Symbol.for("react.suspense_list")
  , Ta = Symbol.for("react.memo")
  , Wt = Symbol.for("react.lazy")
  , ad = Symbol.for("react.offscreen")
  , Tu = Symbol.iterator;
function Hi(t) {
    return t === null || typeof t != "object" ? null : (t = Tu && t[Tu] || t["@@iterator"],
    typeof t == "function" ? t : null)
}
var K = Object.assign, Ts;
function tr(t) {
    if (Ts === void 0)
        try {
            throw Error()
        } catch (n) {
            var e = n.stack.trim().match(/\n( *(at )?)/);
            Ts = e && e[1] || ""
        }
    return `
` + Ts + t
}
var Ls = !1;
function Is(t, e) {
    if (!t || Ls)
        return "";
    Ls = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (e)
            if (e = function() {
                throw Error()
            }
            ,
            Object.defineProperty(e.prototype, "props", {
                set: function() {
                    throw Error()
                }
            }),
            typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(e, [])
                } catch (u) {
                    var i = u
                }
                Reflect.construct(t, [], e)
            } else {
                try {
                    e.call()
                } catch (u) {
                    i = u
                }
                t.call(e.prototype)
            }
        else {
            try {
                throw Error()
            } catch (u) {
                i = u
            }
            t()
        }
    } catch (u) {
        if (u && i && typeof u.stack == "string") {
            for (var r = u.stack.split(`
`), o = i.stack.split(`
`), s = r.length - 1, l = o.length - 1; 1 <= s && 0 <= l && r[s] !== o[l]; )
                l--;
            for (; 1 <= s && 0 <= l; s--,
            l--)
                if (r[s] !== o[l]) {
                    if (s !== 1 || l !== 1)
                        do
                            if (s--,
                            l--,
                            0 > l || r[s] !== o[l]) {
                                var a = `
` + r[s].replace(" at new ", " at ");
                                return t.displayName && a.includes("<anonymous>") && (a = a.replace("<anonymous>", t.displayName)),
                                a
                            }
                        while (1 <= s && 0 <= l);
                    break
                }
        }
    } finally {
        Ls = !1,
        Error.prepareStackTrace = n
    }
    return (t = t ? t.displayName || t.name : "") ? tr(t) : ""
}
function pm(t) {
    switch (t.tag) {
    case 5:
        return tr(t.type);
    case 16:
        return tr("Lazy");
    case 13:
        return tr("Suspense");
    case 19:
        return tr("SuspenseList");
    case 0:
    case 2:
    case 15:
        return t = Is(t.type, !1),
        t;
    case 11:
        return t = Is(t.type.render, !1),
        t;
    case 1:
        return t = Is(t.type, !0),
        t;
    default:
        return ""
    }
}
function zl(t) {
    if (t == null)
        return null;
    if (typeof t == "function")
        return t.displayName || t.name || null;
    if (typeof t == "string")
        return t;
    switch (t) {
    case ti:
        return "Fragment";
    case ei:
        return "Portal";
    case Sl:
        return "Profiler";
    case Oa:
        return "StrictMode";
    case Cl:
        return "Suspense";
    case El:
        return "SuspenseList"
    }
    if (typeof t == "object")
        switch (t.$$typeof) {
        case ld:
            return (t.displayName || "Context") + ".Consumer";
        case sd:
            return (t._context.displayName || "Context") + ".Provider";
        case Ra:
            var e = t.render;
            return t = t.displayName,
            t || (t = e.displayName || e.name || "",
            t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"),
            t;
        case Ta:
            return e = t.displayName || null,
            e !== null ? e : zl(t.type) || "Memo";
        case Wt:
            e = t._payload,
            t = t._init;
            try {
                return zl(t(e))
            } catch {}
        }
    return null
}
function mm(t) {
    var e = t.type;
    switch (t.tag) {
    case 24:
        return "Cache";
    case 9:
        return (e.displayName || "Context") + ".Consumer";
    case 10:
        return (e._context.displayName || "Context") + ".Provider";
    case 18:
        return "DehydratedFragment";
    case 11:
        return t = e.render,
        t = t.displayName || t.name || "",
        e.displayName || (t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef");
    case 7:
        return "Fragment";
    case 5:
        return e;
    case 4:
        return "Portal";
    case 3:
        return "Root";
    case 6:
        return "Text";
    case 16:
        return zl(e);
    case 8:
        return e === Oa ? "StrictMode" : "Mode";
    case 22:
        return "Offscreen";
    case 12:
        return "Profiler";
    case 21:
        return "Scope";
    case 13:
        return "Suspense";
    case 19:
        return "SuspenseList";
    case 25:
        return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
        if (typeof e == "function")
            return e.displayName || e.name || null;
        if (typeof e == "string")
            return e
    }
    return null
}
function un(t) {
    switch (typeof t) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
        return t;
    case "object":
        return t;
    default:
        return ""
    }
}
function ud(t) {
    var e = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio")
}
function ym(t) {
    var e = ud(t) ? "checked" : "value"
      , n = Object.getOwnPropertyDescriptor(t.constructor.prototype, e)
      , i = "" + t[e];
    if (!t.hasOwnProperty(e) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var r = n.get
          , o = n.set;
        return Object.defineProperty(t, e, {
            configurable: !0,
            get: function() {
                return r.call(this)
            },
            set: function(s) {
                i = "" + s,
                o.call(this, s)
            }
        }),
        Object.defineProperty(t, e, {
            enumerable: n.enumerable
        }),
        {
            getValue: function() {
                return i
            },
            setValue: function(s) {
                i = "" + s
            },
            stopTracking: function() {
                t._valueTracker = null,
                delete t[e]
            }
        }
    }
}
function Qr(t) {
    t._valueTracker || (t._valueTracker = ym(t))
}
function cd(t) {
    if (!t)
        return !1;
    var e = t._valueTracker;
    if (!e)
        return !0;
    var n = e.getValue()
      , i = "";
    return t && (i = ud(t) ? t.checked ? "true" : "false" : t.value),
    t = i,
    t !== n ? (e.setValue(t),
    !0) : !1
}
function Io(t) {
    if (t = t || (typeof document < "u" ? document : void 0),
    typeof t > "u")
        return null;
    try {
        return t.activeElement || t.body
    } catch {
        return t.body
    }
}
function Pl(t, e) {
    var n = e.checked;
    return K({}, e, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? t._wrapperState.initialChecked
    })
}
function Lu(t, e) {
    var n = e.defaultValue == null ? "" : e.defaultValue
      , i = e.checked != null ? e.checked : e.defaultChecked;
    n = un(e.value != null ? e.value : n),
    t._wrapperState = {
        initialChecked: i,
        initialValue: n,
        controlled: e.type === "checkbox" || e.type === "radio" ? e.checked != null : e.value != null
    }
}
function fd(t, e) {
    e = e.checked,
    e != null && Ma(t, "checked", e, !1)
}
function bl(t, e) {
    fd(t, e);
    var n = un(e.value)
      , i = e.type;
    if (n != null)
        i === "number" ? (n === 0 && t.value === "" || t.value != n) && (t.value = "" + n) : t.value !== "" + n && (t.value = "" + n);
    else if (i === "submit" || i === "reset") {
        t.removeAttribute("value");
        return
    }
    e.hasOwnProperty("value") ? Ml(t, e.type, n) : e.hasOwnProperty("defaultValue") && Ml(t, e.type, un(e.defaultValue)),
    e.checked == null && e.defaultChecked != null && (t.defaultChecked = !!e.defaultChecked)
}
function Iu(t, e, n) {
    if (e.hasOwnProperty("value") || e.hasOwnProperty("defaultValue")) {
        var i = e.type;
        if (!(i !== "submit" && i !== "reset" || e.value !== void 0 && e.value !== null))
            return;
        e = "" + t._wrapperState.initialValue,
        n || e === t.value || (t.value = e),
        t.defaultValue = e
    }
    n = t.name,
    n !== "" && (t.name = ""),
    t.defaultChecked = !!t._wrapperState.initialChecked,
    n !== "" && (t.name = n)
}
function Ml(t, e, n) {
    (e !== "number" || Io(t.ownerDocument) !== t) && (n == null ? t.defaultValue = "" + t._wrapperState.initialValue : t.defaultValue !== "" + n && (t.defaultValue = "" + n))
}
var nr = Array.isArray;
function mi(t, e, n, i) {
    if (t = t.options,
    e) {
        e = {};
        for (var r = 0; r < n.length; r++)
            e["$" + n[r]] = !0;
        for (n = 0; n < t.length; n++)
            r = e.hasOwnProperty("$" + t[n].value),
            t[n].selected !== r && (t[n].selected = r),
            r && i && (t[n].defaultSelected = !0)
    } else {
        for (n = "" + un(n),
        e = null,
        r = 0; r < t.length; r++) {
            if (t[r].value === n) {
                t[r].selected = !0,
                i && (t[r].defaultSelected = !0);
                return
            }
            e !== null || t[r].disabled || (e = t[r])
        }
        e !== null && (e.selected = !0)
    }
}
function Ol(t, e) {
    if (e.dangerouslySetInnerHTML != null)
        throw Error(S(91));
    return K({}, e, {
        value: void 0,
        defaultValue: void 0,
        children: "" + t._wrapperState.initialValue
    })
}
function Du(t, e) {
    var n = e.value;
    if (n == null) {
        if (n = e.children,
        e = e.defaultValue,
        n != null) {
            if (e != null)
                throw Error(S(92));
            if (nr(n)) {
                if (1 < n.length)
                    throw Error(S(93));
                n = n[0]
            }
            e = n
        }
        e == null && (e = ""),
        n = e
    }
    t._wrapperState = {
        initialValue: un(n)
    }
}
function dd(t, e) {
    var n = un(e.value)
      , i = un(e.defaultValue);
    n != null && (n = "" + n,
    n !== t.value && (t.value = n),
    e.defaultValue == null && t.defaultValue !== n && (t.defaultValue = n)),
    i != null && (t.defaultValue = "" + i)
}
function Nu(t) {
    var e = t.textContent;
    e === t._wrapperState.initialValue && e !== "" && e !== null && (t.value = e)
}
function hd(t) {
    switch (t) {
    case "svg":
        return "http://www.w3.org/2000/svg";
    case "math":
        return "http://www.w3.org/1998/Math/MathML";
    default:
        return "http://www.w3.org/1999/xhtml"
    }
}
function Rl(t, e) {
    return t == null || t === "http://www.w3.org/1999/xhtml" ? hd(e) : t === "http://www.w3.org/2000/svg" && e === "foreignObject" ? "http://www.w3.org/1999/xhtml" : t
}
var Gr, pd = function(t) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(e, n, i, r) {
        MSApp.execUnsafeLocalFunction(function() {
            return t(e, n, i, r)
        })
    }
    : t
}(function(t, e) {
    if (t.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML"in t)
        t.innerHTML = e;
    else {
        for (Gr = Gr || document.createElement("div"),
        Gr.innerHTML = "<svg>" + e.valueOf().toString() + "</svg>",
        e = Gr.firstChild; t.firstChild; )
            t.removeChild(t.firstChild);
        for (; e.firstChild; )
            t.appendChild(e.firstChild)
    }
});
function vr(t, e) {
    if (e) {
        var n = t.firstChild;
        if (n && n === t.lastChild && n.nodeType === 3) {
            n.nodeValue = e;
            return
        }
    }
    t.textContent = e
}
var or = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
}
  , gm = ["Webkit", "ms", "Moz", "O"];
Object.keys(or).forEach(function(t) {
    gm.forEach(function(e) {
        e = e + t.charAt(0).toUpperCase() + t.substring(1),
        or[e] = or[t]
    })
});
function md(t, e, n) {
    return e == null || typeof e == "boolean" || e === "" ? "" : n || typeof e != "number" || e === 0 || or.hasOwnProperty(t) && or[t] ? ("" + e).trim() : e + "px"
}
function yd(t, e) {
    t = t.style;
    for (var n in e)
        if (e.hasOwnProperty(n)) {
            var i = n.indexOf("--") === 0
              , r = md(n, e[n], i);
            n === "float" && (n = "cssFloat"),
            i ? t.setProperty(n, r) : t[n] = r
        }
}
var vm = K({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});
function Tl(t, e) {
    if (e) {
        if (vm[t] && (e.children != null || e.dangerouslySetInnerHTML != null))
            throw Error(S(137, t));
        if (e.dangerouslySetInnerHTML != null) {
            if (e.children != null)
                throw Error(S(60));
            if (typeof e.dangerouslySetInnerHTML != "object" || !("__html"in e.dangerouslySetInnerHTML))
                throw Error(S(61))
        }
        if (e.style != null && typeof e.style != "object")
            throw Error(S(62))
    }
}
function Ll(t, e) {
    if (t.indexOf("-") === -1)
        return typeof e.is == "string";
    switch (t) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
        return !1;
    default:
        return !0
    }
}
var Il = null;
function La(t) {
    return t = t.target || t.srcElement || window,
    t.correspondingUseElement && (t = t.correspondingUseElement),
    t.nodeType === 3 ? t.parentNode : t
}
var Dl = null
  , yi = null
  , gi = null;
function Fu(t) {
    if (t = Br(t)) {
        if (typeof Dl != "function")
            throw Error(S(280));
        var e = t.stateNode;
        e && (e = hs(e),
        Dl(t.stateNode, t.type, e))
    }
}
function gd(t) {
    yi ? gi ? gi.push(t) : gi = [t] : yi = t
}
function vd() {
    if (yi) {
        var t = yi
          , e = gi;
        if (gi = yi = null,
        Fu(t),
        e)
            for (t = 0; t < e.length; t++)
                Fu(e[t])
    }
}
function wd(t, e) {
    return t(e)
}
function xd() {}
var Ds = !1;
function kd(t, e, n) {
    if (Ds)
        return t(e, n);
    Ds = !0;
    try {
        return wd(t, e, n)
    } finally {
        Ds = !1,
        (yi !== null || gi !== null) && (xd(),
        vd())
    }
}
function wr(t, e) {
    var n = t.stateNode;
    if (n === null)
        return null;
    var i = hs(n);
    if (i === null)
        return null;
    n = i[e];
    e: switch (e) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
        (i = !i.disabled) || (t = t.type,
        i = !(t === "button" || t === "input" || t === "select" || t === "textarea")),
        t = !i;
        break e;
    default:
        t = !1
    }
    if (t)
        return null;
    if (n && typeof n != "function")
        throw Error(S(231, e, typeof n));
    return n
}
var Nl = !1;
if (jt)
    try {
        var Vi = {};
        Object.defineProperty(Vi, "passive", {
            get: function() {
                Nl = !0
            }
        }),
        window.addEventListener("test", Vi, Vi),
        window.removeEventListener("test", Vi, Vi)
    } catch {
        Nl = !1
    }
function wm(t, e, n, i, r, o, s, l, a) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
        e.apply(n, u)
    } catch (c) {
        this.onError(c)
    }
}
var sr = !1
  , Do = null
  , No = !1
  , Fl = null
  , xm = {
    onError: function(t) {
        sr = !0,
        Do = t
    }
};
function km(t, e, n, i, r, o, s, l, a) {
    sr = !1,
    Do = null,
    wm.apply(xm, arguments)
}
function _m(t, e, n, i, r, o, s, l, a) {
    if (km.apply(this, arguments),
    sr) {
        if (sr) {
            var u = Do;
            sr = !1,
            Do = null
        } else
            throw Error(S(198));
        No || (No = !0,
        Fl = u)
    }
}
function qn(t) {
    var e = t
      , n = t;
    if (t.alternate)
        for (; e.return; )
            e = e.return;
    else {
        t = e;
        do
            e = t,
            e.flags & 4098 && (n = e.return),
            t = e.return;
        while (t)
    }
    return e.tag === 3 ? n : null
}
function _d(t) {
    if (t.tag === 13) {
        var e = t.memoizedState;
        if (e === null && (t = t.alternate,
        t !== null && (e = t.memoizedState)),
        e !== null)
            return e.dehydrated
    }
    return null
}
function ju(t) {
    if (qn(t) !== t)
        throw Error(S(188))
}
function Sm(t) {
    var e = t.alternate;
    if (!e) {
        if (e = qn(t),
        e === null)
            throw Error(S(188));
        return e !== t ? null : t
    }
    for (var n = t, i = e; ; ) {
        var r = n.return;
        if (r === null)
            break;
        var o = r.alternate;
        if (o === null) {
            if (i = r.return,
            i !== null) {
                n = i;
                continue
            }
            break
        }
        if (r.child === o.child) {
            for (o = r.child; o; ) {
                if (o === n)
                    return ju(r),
                    t;
                if (o === i)
                    return ju(r),
                    e;
                o = o.sibling
            }
            throw Error(S(188))
        }
        if (n.return !== i.return)
            n = r,
            i = o;
        else {
            for (var s = !1, l = r.child; l; ) {
                if (l === n) {
                    s = !0,
                    n = r,
                    i = o;
                    break
                }
                if (l === i) {
                    s = !0,
                    i = r,
                    n = o;
                    break
                }
                l = l.sibling
            }
            if (!s) {
                for (l = o.child; l; ) {
                    if (l === n) {
                        s = !0,
                        n = o,
                        i = r;
                        break
                    }
                    if (l === i) {
                        s = !0,
                        i = o,
                        n = r;
                        break
                    }
                    l = l.sibling
                }
                if (!s)
                    throw Error(S(189))
            }
        }
        if (n.alternate !== i)
            throw Error(S(190))
    }
    if (n.tag !== 3)
        throw Error(S(188));
    return n.stateNode.current === n ? t : e
}
function Sd(t) {
    return t = Sm(t),
    t !== null ? Cd(t) : null
}
function Cd(t) {
    if (t.tag === 5 || t.tag === 6)
        return t;
    for (t = t.child; t !== null; ) {
        var e = Cd(t);
        if (e !== null)
            return e;
        t = t.sibling
    }
    return null
}
var Ed = We.unstable_scheduleCallback
  , $u = We.unstable_cancelCallback
  , Cm = We.unstable_shouldYield
  , Em = We.unstable_requestPaint
  , ne = We.unstable_now
  , zm = We.unstable_getCurrentPriorityLevel
  , Ia = We.unstable_ImmediatePriority
  , zd = We.unstable_UserBlockingPriority
  , Fo = We.unstable_NormalPriority
  , Pm = We.unstable_LowPriority
  , Pd = We.unstable_IdlePriority
  , us = null
  , Pt = null;
function bm(t) {
    if (Pt && typeof Pt.onCommitFiberRoot == "function")
        try {
            Pt.onCommitFiberRoot(us, t, void 0, (t.current.flags & 128) === 128)
        } catch {}
}
var mt = Math.clz32 ? Math.clz32 : Rm
  , Mm = Math.log
  , Om = Math.LN2;
function Rm(t) {
    return t >>>= 0,
    t === 0 ? 32 : 31 - (Mm(t) / Om | 0) | 0
}
var Yr = 64
  , Kr = 4194304;
function ir(t) {
    switch (t & -t) {
    case 1:
        return 1;
    case 2:
        return 2;
    case 4:
        return 4;
    case 8:
        return 8;
    case 16:
        return 16;
    case 32:
        return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return t & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return t & 130023424;
    case 134217728:
        return 134217728;
    case 268435456:
        return 268435456;
    case 536870912:
        return 536870912;
    case 1073741824:
        return 1073741824;
    default:
        return t
    }
}
function jo(t, e) {
    var n = t.pendingLanes;
    if (n === 0)
        return 0;
    var i = 0
      , r = t.suspendedLanes
      , o = t.pingedLanes
      , s = n & 268435455;
    if (s !== 0) {
        var l = s & ~r;
        l !== 0 ? i = ir(l) : (o &= s,
        o !== 0 && (i = ir(o)))
    } else
        s = n & ~r,
        s !== 0 ? i = ir(s) : o !== 0 && (i = ir(o));
    if (i === 0)
        return 0;
    if (e !== 0 && e !== i && !(e & r) && (r = i & -i,
    o = e & -e,
    r >= o || r === 16 && (o & 4194240) !== 0))
        return e;
    if (i & 4 && (i |= n & 16),
    e = t.entangledLanes,
    e !== 0)
        for (t = t.entanglements,
        e &= i; 0 < e; )
            n = 31 - mt(e),
            r = 1 << n,
            i |= t[n],
            e &= ~r;
    return i
}
function Tm(t, e) {
    switch (t) {
    case 1:
    case 2:
    case 4:
        return e + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return e + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
        return -1;
    default:
        return -1
    }
}
function Lm(t, e) {
    for (var n = t.suspendedLanes, i = t.pingedLanes, r = t.expirationTimes, o = t.pendingLanes; 0 < o; ) {
        var s = 31 - mt(o)
          , l = 1 << s
          , a = r[s];
        a === -1 ? (!(l & n) || l & i) && (r[s] = Tm(l, e)) : a <= e && (t.expiredLanes |= l),
        o &= ~l
    }
}
function jl(t) {
    return t = t.pendingLanes & -1073741825,
    t !== 0 ? t : t & 1073741824 ? 1073741824 : 0
}
function bd() {
    var t = Yr;
    return Yr <<= 1,
    !(Yr & 4194240) && (Yr = 64),
    t
}
function Ns(t) {
    for (var e = [], n = 0; 31 > n; n++)
        e.push(t);
    return e
}
function $r(t, e, n) {
    t.pendingLanes |= e,
    e !== 536870912 && (t.suspendedLanes = 0,
    t.pingedLanes = 0),
    t = t.eventTimes,
    e = 31 - mt(e),
    t[e] = n
}
function Im(t, e) {
    var n = t.pendingLanes & ~e;
    t.pendingLanes = e,
    t.suspendedLanes = 0,
    t.pingedLanes = 0,
    t.expiredLanes &= e,
    t.mutableReadLanes &= e,
    t.entangledLanes &= e,
    e = t.entanglements;
    var i = t.eventTimes;
    for (t = t.expirationTimes; 0 < n; ) {
        var r = 31 - mt(n)
          , o = 1 << r;
        e[r] = 0,
        i[r] = -1,
        t[r] = -1,
        n &= ~o
    }
}
function Da(t, e) {
    var n = t.entangledLanes |= e;
    for (t = t.entanglements; n; ) {
        var i = 31 - mt(n)
          , r = 1 << i;
        r & e | t[i] & e && (t[i] |= e),
        n &= ~r
    }
}
var B = 0;
function Md(t) {
    return t &= -t,
    1 < t ? 4 < t ? t & 268435455 ? 16 : 536870912 : 4 : 1
}
var Od, Na, Rd, Td, Ld, $l = !1, Xr = [], Jt = null, en = null, tn = null, xr = new Map, kr = new Map, Qt = [], Dm = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Au(t, e) {
    switch (t) {
    case "focusin":
    case "focusout":
        Jt = null;
        break;
    case "dragenter":
    case "dragleave":
        en = null;
        break;
    case "mouseover":
    case "mouseout":
        tn = null;
        break;
    case "pointerover":
    case "pointerout":
        xr.delete(e.pointerId);
        break;
    case "gotpointercapture":
    case "lostpointercapture":
        kr.delete(e.pointerId)
    }
}
function Wi(t, e, n, i, r, o) {
    return t === null || t.nativeEvent !== o ? (t = {
        blockedOn: e,
        domEventName: n,
        eventSystemFlags: i,
        nativeEvent: o,
        targetContainers: [r]
    },
    e !== null && (e = Br(e),
    e !== null && Na(e)),
    t) : (t.eventSystemFlags |= i,
    e = t.targetContainers,
    r !== null && e.indexOf(r) === -1 && e.push(r),
    t)
}
function Nm(t, e, n, i, r) {
    switch (e) {
    case "focusin":
        return Jt = Wi(Jt, t, e, n, i, r),
        !0;
    case "dragenter":
        return en = Wi(en, t, e, n, i, r),
        !0;
    case "mouseover":
        return tn = Wi(tn, t, e, n, i, r),
        !0;
    case "pointerover":
        var o = r.pointerId;
        return xr.set(o, Wi(xr.get(o) || null, t, e, n, i, r)),
        !0;
    case "gotpointercapture":
        return o = r.pointerId,
        kr.set(o, Wi(kr.get(o) || null, t, e, n, i, r)),
        !0
    }
    return !1
}
function Id(t) {
    var e = zn(t.target);
    if (e !== null) {
        var n = qn(e);
        if (n !== null) {
            if (e = n.tag,
            e === 13) {
                if (e = _d(n),
                e !== null) {
                    t.blockedOn = e,
                    Ld(t.priority, function() {
                        Rd(n)
                    });
                    return
                }
            } else if (e === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                t.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    t.blockedOn = null
}
function _o(t) {
    if (t.blockedOn !== null)
        return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
        var n = Al(t.domEventName, t.eventSystemFlags, e[0], t.nativeEvent);
        if (n === null) {
            n = t.nativeEvent;
            var i = new n.constructor(n.type,n);
            Il = i,
            n.target.dispatchEvent(i),
            Il = null
        } else
            return e = Br(n),
            e !== null && Na(e),
            t.blockedOn = n,
            !1;
        e.shift()
    }
    return !0
}
function Bu(t, e, n) {
    _o(t) && n.delete(e)
}
function Fm() {
    $l = !1,
    Jt !== null && _o(Jt) && (Jt = null),
    en !== null && _o(en) && (en = null),
    tn !== null && _o(tn) && (tn = null),
    xr.forEach(Bu),
    kr.forEach(Bu)
}
function qi(t, e) {
    t.blockedOn === e && (t.blockedOn = null,
    $l || ($l = !0,
    We.unstable_scheduleCallback(We.unstable_NormalPriority, Fm)))
}
function _r(t) {
    function e(r) {
        return qi(r, t)
    }
    if (0 < Xr.length) {
        qi(Xr[0], t);
        for (var n = 1; n < Xr.length; n++) {
            var i = Xr[n];
            i.blockedOn === t && (i.blockedOn = null)
        }
    }
    for (Jt !== null && qi(Jt, t),
    en !== null && qi(en, t),
    tn !== null && qi(tn, t),
    xr.forEach(e),
    kr.forEach(e),
    n = 0; n < Qt.length; n++)
        i = Qt[n],
        i.blockedOn === t && (i.blockedOn = null);
    for (; 0 < Qt.length && (n = Qt[0],
    n.blockedOn === null); )
        Id(n),
        n.blockedOn === null && Qt.shift()
}
var vi = Ut.ReactCurrentBatchConfig
  , $o = !0;
function jm(t, e, n, i) {
    var r = B
      , o = vi.transition;
    vi.transition = null;
    try {
        B = 1,
        Fa(t, e, n, i)
    } finally {
        B = r,
        vi.transition = o
    }
}
function $m(t, e, n, i) {
    var r = B
      , o = vi.transition;
    vi.transition = null;
    try {
        B = 4,
        Fa(t, e, n, i)
    } finally {
        B = r,
        vi.transition = o
    }
}
function Fa(t, e, n, i) {
    if ($o) {
        var r = Al(t, e, n, i);
        if (r === null)
            qs(t, e, i, Ao, n),
            Au(t, i);
        else if (Nm(r, t, e, n, i))
            i.stopPropagation();
        else if (Au(t, i),
        e & 4 && -1 < Dm.indexOf(t)) {
            for (; r !== null; ) {
                var o = Br(r);
                if (o !== null && Od(o),
                o = Al(t, e, n, i),
                o === null && qs(t, e, i, Ao, n),
                o === r)
                    break;
                r = o
            }
            r !== null && i.stopPropagation()
        } else
            qs(t, e, i, null, n)
    }
}
var Ao = null;
function Al(t, e, n, i) {
    if (Ao = null,
    t = La(i),
    t = zn(t),
    t !== null)
        if (e = qn(t),
        e === null)
            t = null;
        else if (n = e.tag,
        n === 13) {
            if (t = _d(e),
            t !== null)
                return t;
            t = null
        } else if (n === 3) {
            if (e.stateNode.current.memoizedState.isDehydrated)
                return e.tag === 3 ? e.stateNode.containerInfo : null;
            t = null
        } else
            e !== t && (t = null);
    return Ao = t,
    null
}
function Dd(t) {
    switch (t) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
        return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
        return 4;
    case "message":
        switch (zm()) {
        case Ia:
            return 1;
        case zd:
            return 4;
        case Fo:
        case Pm:
            return 16;
        case Pd:
            return 536870912;
        default:
            return 16
        }
    default:
        return 16
    }
}
var Kt = null
  , ja = null
  , So = null;
function Nd() {
    if (So)
        return So;
    var t, e = ja, n = e.length, i, r = "value"in Kt ? Kt.value : Kt.textContent, o = r.length;
    for (t = 0; t < n && e[t] === r[t]; t++)
        ;
    var s = n - t;
    for (i = 1; i <= s && e[n - i] === r[o - i]; i++)
        ;
    return So = r.slice(t, 1 < i ? 1 - i : void 0)
}
function Co(t) {
    var e = t.keyCode;
    return "charCode"in t ? (t = t.charCode,
    t === 0 && e === 13 && (t = 13)) : t = e,
    t === 10 && (t = 13),
    32 <= t || t === 13 ? t : 0
}
function Zr() {
    return !0
}
function Uu() {
    return !1
}
function Qe(t) {
    function e(n, i, r, o, s) {
        this._reactName = n,
        this._targetInst = r,
        this.type = i,
        this.nativeEvent = o,
        this.target = s,
        this.currentTarget = null;
        for (var l in t)
            t.hasOwnProperty(l) && (n = t[l],
            this[l] = n ? n(o) : o[l]);
        return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? Zr : Uu,
        this.isPropagationStopped = Uu,
        this
    }
    return K(e.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            this.isDefaultPrevented = Zr)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            this.isPropagationStopped = Zr)
        },
        persist: function() {},
        isPersistent: Zr
    }),
    e
}
var $i = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(t) {
        return t.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
}, $a = Qe($i), Ar = K({}, $i, {
    view: 0,
    detail: 0
}), Am = Qe(Ar), Fs, js, Qi, cs = K({}, Ar, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Aa,
    button: 0,
    buttons: 0,
    relatedTarget: function(t) {
        return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget
    },
    movementX: function(t) {
        return "movementX"in t ? t.movementX : (t !== Qi && (Qi && t.type === "mousemove" ? (Fs = t.screenX - Qi.screenX,
        js = t.screenY - Qi.screenY) : js = Fs = 0,
        Qi = t),
        Fs)
    },
    movementY: function(t) {
        return "movementY"in t ? t.movementY : js
    }
}), Hu = Qe(cs), Bm = K({}, cs, {
    dataTransfer: 0
}), Um = Qe(Bm), Hm = K({}, Ar, {
    relatedTarget: 0
}), $s = Qe(Hm), Vm = K({}, $i, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
}), Wm = Qe(Vm), qm = K({}, $i, {
    clipboardData: function(t) {
        return "clipboardData"in t ? t.clipboardData : window.clipboardData
    }
}), Qm = Qe(qm), Gm = K({}, $i, {
    data: 0
}), Vu = Qe(Gm), Ym = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
}, Km = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
}, Xm = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
};
function Zm(t) {
    var e = this.nativeEvent;
    return e.getModifierState ? e.getModifierState(t) : (t = Xm[t]) ? !!e[t] : !1
}
function Aa() {
    return Zm
}
var Jm = K({}, Ar, {
    key: function(t) {
        if (t.key) {
            var e = Ym[t.key] || t.key;
            if (e !== "Unidentified")
                return e
        }
        return t.type === "keypress" ? (t = Co(t),
        t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? Km[t.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Aa,
    charCode: function(t) {
        return t.type === "keypress" ? Co(t) : 0
    },
    keyCode: function(t) {
        return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0
    },
    which: function(t) {
        return t.type === "keypress" ? Co(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0
    }
})
  , ey = Qe(Jm)
  , ty = K({}, cs, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
})
  , Wu = Qe(ty)
  , ny = K({}, Ar, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Aa
})
  , iy = Qe(ny)
  , ry = K({}, $i, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
})
  , oy = Qe(ry)
  , sy = K({}, cs, {
    deltaX: function(t) {
        return "deltaX"in t ? t.deltaX : "wheelDeltaX"in t ? -t.wheelDeltaX : 0
    },
    deltaY: function(t) {
        return "deltaY"in t ? t.deltaY : "wheelDeltaY"in t ? -t.wheelDeltaY : "wheelDelta"in t ? -t.wheelDelta : 0
    },
    deltaZ: 0,
    deltaMode: 0
})
  , ly = Qe(sy)
  , ay = [9, 13, 27, 32]
  , Ba = jt && "CompositionEvent"in window
  , lr = null;
jt && "documentMode"in document && (lr = document.documentMode);
var uy = jt && "TextEvent"in window && !lr
  , Fd = jt && (!Ba || lr && 8 < lr && 11 >= lr)
  , qu = " "
  , Qu = !1;
function jd(t, e) {
    switch (t) {
    case "keyup":
        return ay.indexOf(e.keyCode) !== -1;
    case "keydown":
        return e.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
        return !0;
    default:
        return !1
    }
}
function $d(t) {
    return t = t.detail,
    typeof t == "object" && "data"in t ? t.data : null
}
var ni = !1;
function cy(t, e) {
    switch (t) {
    case "compositionend":
        return $d(e);
    case "keypress":
        return e.which !== 32 ? null : (Qu = !0,
        qu);
    case "textInput":
        return t = e.data,
        t === qu && Qu ? null : t;
    default:
        return null
    }
}
function fy(t, e) {
    if (ni)
        return t === "compositionend" || !Ba && jd(t, e) ? (t = Nd(),
        So = ja = Kt = null,
        ni = !1,
        t) : null;
    switch (t) {
    case "paste":
        return null;
    case "keypress":
        if (!(e.ctrlKey || e.altKey || e.metaKey) || e.ctrlKey && e.altKey) {
            if (e.char && 1 < e.char.length)
                return e.char;
            if (e.which)
                return String.fromCharCode(e.which)
        }
        return null;
    case "compositionend":
        return Fd && e.locale !== "ko" ? null : e.data;
    default:
        return null
    }
}
var dy = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};
function Gu(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!dy[t.type] : e === "textarea"
}
function Ad(t, e, n, i) {
    gd(i),
    e = Bo(e, "onChange"),
    0 < e.length && (n = new $a("onChange","change",null,n,i),
    t.push({
        event: n,
        listeners: e
    }))
}
var ar = null
  , Sr = null;
function hy(t) {
    Xd(t, 0)
}
function fs(t) {
    var e = oi(t);
    if (cd(e))
        return t
}
function py(t, e) {
    if (t === "change")
        return e
}
var Bd = !1;
if (jt) {
    var As;
    if (jt) {
        var Bs = "oninput"in document;
        if (!Bs) {
            var Yu = document.createElement("div");
            Yu.setAttribute("oninput", "return;"),
            Bs = typeof Yu.oninput == "function"
        }
        As = Bs
    } else
        As = !1;
    Bd = As && (!document.documentMode || 9 < document.documentMode)
}
function Ku() {
    ar && (ar.detachEvent("onpropertychange", Ud),
    Sr = ar = null)
}
function Ud(t) {
    if (t.propertyName === "value" && fs(Sr)) {
        var e = [];
        Ad(e, Sr, t, La(t)),
        kd(hy, e)
    }
}
function my(t, e, n) {
    t === "focusin" ? (Ku(),
    ar = e,
    Sr = n,
    ar.attachEvent("onpropertychange", Ud)) : t === "focusout" && Ku()
}
function yy(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
        return fs(Sr)
}
function gy(t, e) {
    if (t === "click")
        return fs(e)
}
function vy(t, e) {
    if (t === "input" || t === "change")
        return fs(e)
}
function wy(t, e) {
    return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e
}
var wt = typeof Object.is == "function" ? Object.is : wy;
function Cr(t, e) {
    if (wt(t, e))
        return !0;
    if (typeof t != "object" || t === null || typeof e != "object" || e === null)
        return !1;
    var n = Object.keys(t)
      , i = Object.keys(e);
    if (n.length !== i.length)
        return !1;
    for (i = 0; i < n.length; i++) {
        var r = n[i];
        if (!_l.call(e, r) || !wt(t[r], e[r]))
            return !1
    }
    return !0
}
function Xu(t) {
    for (; t && t.firstChild; )
        t = t.firstChild;
    return t
}
function Zu(t, e) {
    var n = Xu(t);
    t = 0;
    for (var i; n; ) {
        if (n.nodeType === 3) {
            if (i = t + n.textContent.length,
            t <= e && i >= e)
                return {
                    node: n,
                    offset: e - t
                };
            t = i
        }
        e: {
            for (; n; ) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = Xu(n)
    }
}
function Hd(t, e) {
    return t && e ? t === e ? !0 : t && t.nodeType === 3 ? !1 : e && e.nodeType === 3 ? Hd(t, e.parentNode) : "contains"in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : !1 : !1
}
function Vd() {
    for (var t = window, e = Io(); e instanceof t.HTMLIFrameElement; ) {
        try {
            var n = typeof e.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n)
            t = e.contentWindow;
        else
            break;
        e = Io(t.document)
    }
    return e
}
function Ua(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true")
}
function xy(t) {
    var e = Vd()
      , n = t.focusedElem
      , i = t.selectionRange;
    if (e !== n && n && n.ownerDocument && Hd(n.ownerDocument.documentElement, n)) {
        if (i !== null && Ua(n)) {
            if (e = i.start,
            t = i.end,
            t === void 0 && (t = e),
            "selectionStart"in n)
                n.selectionStart = e,
                n.selectionEnd = Math.min(t, n.value.length);
            else if (t = (e = n.ownerDocument || document) && e.defaultView || window,
            t.getSelection) {
                t = t.getSelection();
                var r = n.textContent.length
                  , o = Math.min(i.start, r);
                i = i.end === void 0 ? o : Math.min(i.end, r),
                !t.extend && o > i && (r = i,
                i = o,
                o = r),
                r = Zu(n, o);
                var s = Zu(n, i);
                r && s && (t.rangeCount !== 1 || t.anchorNode !== r.node || t.anchorOffset !== r.offset || t.focusNode !== s.node || t.focusOffset !== s.offset) && (e = e.createRange(),
                e.setStart(r.node, r.offset),
                t.removeAllRanges(),
                o > i ? (t.addRange(e),
                t.extend(s.node, s.offset)) : (e.setEnd(s.node, s.offset),
                t.addRange(e)))
            }
        }
        for (e = [],
        t = n; t = t.parentNode; )
            t.nodeType === 1 && e.push({
                element: t,
                left: t.scrollLeft,
                top: t.scrollTop
            });
        for (typeof n.focus == "function" && n.focus(),
        n = 0; n < e.length; n++)
            t = e[n],
            t.element.scrollLeft = t.left,
            t.element.scrollTop = t.top
    }
}
var ky = jt && "documentMode"in document && 11 >= document.documentMode
  , ii = null
  , Bl = null
  , ur = null
  , Ul = !1;
function Ju(t, e, n) {
    var i = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Ul || ii == null || ii !== Io(i) || (i = ii,
    "selectionStart"in i && Ua(i) ? i = {
        start: i.selectionStart,
        end: i.selectionEnd
    } : (i = (i.ownerDocument && i.ownerDocument.defaultView || window).getSelection(),
    i = {
        anchorNode: i.anchorNode,
        anchorOffset: i.anchorOffset,
        focusNode: i.focusNode,
        focusOffset: i.focusOffset
    }),
    ur && Cr(ur, i) || (ur = i,
    i = Bo(Bl, "onSelect"),
    0 < i.length && (e = new $a("onSelect","select",null,e,n),
    t.push({
        event: e,
        listeners: i
    }),
    e.target = ii)))
}
function Jr(t, e) {
    var n = {};
    return n[t.toLowerCase()] = e.toLowerCase(),
    n["Webkit" + t] = "webkit" + e,
    n["Moz" + t] = "moz" + e,
    n
}
var ri = {
    animationend: Jr("Animation", "AnimationEnd"),
    animationiteration: Jr("Animation", "AnimationIteration"),
    animationstart: Jr("Animation", "AnimationStart"),
    transitionend: Jr("Transition", "TransitionEnd")
}
  , Us = {}
  , Wd = {};
jt && (Wd = document.createElement("div").style,
"AnimationEvent"in window || (delete ri.animationend.animation,
delete ri.animationiteration.animation,
delete ri.animationstart.animation),
"TransitionEvent"in window || delete ri.transitionend.transition);
function ds(t) {
    if (Us[t])
        return Us[t];
    if (!ri[t])
        return t;
    var e = ri[t], n;
    for (n in e)
        if (e.hasOwnProperty(n) && n in Wd)
            return Us[t] = e[n];
    return t
}
var qd = ds("animationend")
  , Qd = ds("animationiteration")
  , Gd = ds("animationstart")
  , Yd = ds("transitionend")
  , Kd = new Map
  , ec = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function hn(t, e) {
    Kd.set(t, e),
    Wn(e, [t])
}
for (var Hs = 0; Hs < ec.length; Hs++) {
    var Vs = ec[Hs]
      , _y = Vs.toLowerCase()
      , Sy = Vs[0].toUpperCase() + Vs.slice(1);
    hn(_y, "on" + Sy)
}
hn(qd, "onAnimationEnd");
hn(Qd, "onAnimationIteration");
hn(Gd, "onAnimationStart");
hn("dblclick", "onDoubleClick");
hn("focusin", "onFocus");
hn("focusout", "onBlur");
hn(Yd, "onTransitionEnd");
zi("onMouseEnter", ["mouseout", "mouseover"]);
zi("onMouseLeave", ["mouseout", "mouseover"]);
zi("onPointerEnter", ["pointerout", "pointerover"]);
zi("onPointerLeave", ["pointerout", "pointerover"]);
Wn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Wn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Wn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Wn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Wn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Wn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var rr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
  , Cy = new Set("cancel close invalid load scroll toggle".split(" ").concat(rr));
function tc(t, e, n) {
    var i = t.type || "unknown-event";
    t.currentTarget = n,
    _m(i, e, void 0, t),
    t.currentTarget = null
}
function Xd(t, e) {
    e = (e & 4) !== 0;
    for (var n = 0; n < t.length; n++) {
        var i = t[n]
          , r = i.event;
        i = i.listeners;
        e: {
            var o = void 0;
            if (e)
                for (var s = i.length - 1; 0 <= s; s--) {
                    var l = i[s]
                      , a = l.instance
                      , u = l.currentTarget;
                    if (l = l.listener,
                    a !== o && r.isPropagationStopped())
                        break e;
                    tc(r, l, u),
                    o = a
                }
            else
                for (s = 0; s < i.length; s++) {
                    if (l = i[s],
                    a = l.instance,
                    u = l.currentTarget,
                    l = l.listener,
                    a !== o && r.isPropagationStopped())
                        break e;
                    tc(r, l, u),
                    o = a
                }
        }
    }
    if (No)
        throw t = Fl,
        No = !1,
        Fl = null,
        t
}
function H(t, e) {
    var n = e[Ql];
    n === void 0 && (n = e[Ql] = new Set);
    var i = t + "__bubble";
    n.has(i) || (Zd(e, t, 2, !1),
    n.add(i))
}
function Ws(t, e, n) {
    var i = 0;
    e && (i |= 4),
    Zd(n, t, i, e)
}
var eo = "_reactListening" + Math.random().toString(36).slice(2);
function Er(t) {
    if (!t[eo]) {
        t[eo] = !0,
        od.forEach(function(n) {
            n !== "selectionchange" && (Cy.has(n) || Ws(n, !1, t),
            Ws(n, !0, t))
        });
        var e = t.nodeType === 9 ? t : t.ownerDocument;
        e === null || e[eo] || (e[eo] = !0,
        Ws("selectionchange", !1, e))
    }
}
function Zd(t, e, n, i) {
    switch (Dd(e)) {
    case 1:
        var r = jm;
        break;
    case 4:
        r = $m;
        break;
    default:
        r = Fa
    }
    n = r.bind(null, e, n, t),
    r = void 0,
    !Nl || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (r = !0),
    i ? r !== void 0 ? t.addEventListener(e, n, {
        capture: !0,
        passive: r
    }) : t.addEventListener(e, n, !0) : r !== void 0 ? t.addEventListener(e, n, {
        passive: r
    }) : t.addEventListener(e, n, !1)
}
function qs(t, e, n, i, r) {
    var o = i;
    if (!(e & 1) && !(e & 2) && i !== null)
        e: for (; ; ) {
            if (i === null)
                return;
            var s = i.tag;
            if (s === 3 || s === 4) {
                var l = i.stateNode.containerInfo;
                if (l === r || l.nodeType === 8 && l.parentNode === r)
                    break;
                if (s === 4)
                    for (s = i.return; s !== null; ) {
                        var a = s.tag;
                        if ((a === 3 || a === 4) && (a = s.stateNode.containerInfo,
                        a === r || a.nodeType === 8 && a.parentNode === r))
                            return;
                        s = s.return
                    }
                for (; l !== null; ) {
                    if (s = zn(l),
                    s === null)
                        return;
                    if (a = s.tag,
                    a === 5 || a === 6) {
                        i = o = s;
                        continue e
                    }
                    l = l.parentNode
                }
            }
            i = i.return
        }
    kd(function() {
        var u = o
          , c = La(n)
          , f = [];
        e: {
            var d = Kd.get(t);
            if (d !== void 0) {
                var m = $a
                  , v = t;
                switch (t) {
                case "keypress":
                    if (Co(n) === 0)
                        break e;
                case "keydown":
                case "keyup":
                    m = ey;
                    break;
                case "focusin":
                    v = "focus",
                    m = $s;
                    break;
                case "focusout":
                    v = "blur",
                    m = $s;
                    break;
                case "beforeblur":
                case "afterblur":
                    m = $s;
                    break;
                case "click":
                    if (n.button === 2)
                        break e;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                    m = Hu;
                    break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                    m = Um;
                    break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                    m = iy;
                    break;
                case qd:
                case Qd:
                case Gd:
                    m = Wm;
                    break;
                case Yd:
                    m = oy;
                    break;
                case "scroll":
                    m = Am;
                    break;
                case "wheel":
                    m = ly;
                    break;
                case "copy":
                case "cut":
                case "paste":
                    m = Qm;
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                    m = Wu
                }
                var y = (e & 4) !== 0
                  , k = !y && t === "scroll"
                  , p = y ? d !== null ? d + "Capture" : null : d;
                y = [];
                for (var h = u, g; h !== null; ) {
                    g = h;
                    var w = g.stateNode;
                    if (g.tag === 5 && w !== null && (g = w,
                    p !== null && (w = wr(h, p),
                    w != null && y.push(zr(h, w, g)))),
                    k)
                        break;
                    h = h.return
                }
                0 < y.length && (d = new m(d,v,null,n,c),
                f.push({
                    event: d,
                    listeners: y
                }))
            }
        }
        if (!(e & 7)) {
            e: {
                if (d = t === "mouseover" || t === "pointerover",
                m = t === "mouseout" || t === "pointerout",
                d && n !== Il && (v = n.relatedTarget || n.fromElement) && (zn(v) || v[$t]))
                    break e;
                if ((m || d) && (d = c.window === c ? c : (d = c.ownerDocument) ? d.defaultView || d.parentWindow : window,
                m ? (v = n.relatedTarget || n.toElement,
                m = u,
                v = v ? zn(v) : null,
                v !== null && (k = qn(v),
                v !== k || v.tag !== 5 && v.tag !== 6) && (v = null)) : (m = null,
                v = u),
                m !== v)) {
                    if (y = Hu,
                    w = "onMouseLeave",
                    p = "onMouseEnter",
                    h = "mouse",
                    (t === "pointerout" || t === "pointerover") && (y = Wu,
                    w = "onPointerLeave",
                    p = "onPointerEnter",
                    h = "pointer"),
                    k = m == null ? d : oi(m),
                    g = v == null ? d : oi(v),
                    d = new y(w,h + "leave",m,n,c),
                    d.target = k,
                    d.relatedTarget = g,
                    w = null,
                    zn(c) === u && (y = new y(p,h + "enter",v,n,c),
                    y.target = g,
                    y.relatedTarget = k,
                    w = y),
                    k = w,
                    m && v)
                        t: {
                            for (y = m,
                            p = v,
                            h = 0,
                            g = y; g; g = Gn(g))
                                h++;
                            for (g = 0,
                            w = p; w; w = Gn(w))
                                g++;
                            for (; 0 < h - g; )
                                y = Gn(y),
                                h--;
                            for (; 0 < g - h; )
                                p = Gn(p),
                                g--;
                            for (; h--; ) {
                                if (y === p || p !== null && y === p.alternate)
                                    break t;
                                y = Gn(y),
                                p = Gn(p)
                            }
                            y = null
                        }
                    else
                        y = null;
                    m !== null && nc(f, d, m, y, !1),
                    v !== null && k !== null && nc(f, k, v, y, !0)
                }
            }
            e: {
                if (d = u ? oi(u) : window,
                m = d.nodeName && d.nodeName.toLowerCase(),
                m === "select" || m === "input" && d.type === "file")
                    var x = py;
                else if (Gu(d))
                    if (Bd)
                        x = vy;
                    else {
                        x = yy;
                        var _ = my
                    }
                else
                    (m = d.nodeName) && m.toLowerCase() === "input" && (d.type === "checkbox" || d.type === "radio") && (x = gy);
                if (x && (x = x(t, u))) {
                    Ad(f, x, n, c);
                    break e
                }
                _ && _(t, d, u),
                t === "focusout" && (_ = d._wrapperState) && _.controlled && d.type === "number" && Ml(d, "number", d.value)
            }
            switch (_ = u ? oi(u) : window,
            t) {
            case "focusin":
                (Gu(_) || _.contentEditable === "true") && (ii = _,
                Bl = u,
                ur = null);
                break;
            case "focusout":
                ur = Bl = ii = null;
                break;
            case "mousedown":
                Ul = !0;
                break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
                Ul = !1,
                Ju(f, n, c);
                break;
            case "selectionchange":
                if (ky)
                    break;
            case "keydown":
            case "keyup":
                Ju(f, n, c)
            }
            var E;
            if (Ba)
                e: {
                    switch (t) {
                    case "compositionstart":
                        var z = "onCompositionStart";
                        break e;
                    case "compositionend":
                        z = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        z = "onCompositionUpdate";
                        break e
                    }
                    z = void 0
                }
            else
                ni ? jd(t, n) && (z = "onCompositionEnd") : t === "keydown" && n.keyCode === 229 && (z = "onCompositionStart");
            z && (Fd && n.locale !== "ko" && (ni || z !== "onCompositionStart" ? z === "onCompositionEnd" && ni && (E = Nd()) : (Kt = c,
            ja = "value"in Kt ? Kt.value : Kt.textContent,
            ni = !0)),
            _ = Bo(u, z),
            0 < _.length && (z = new Vu(z,t,null,n,c),
            f.push({
                event: z,
                listeners: _
            }),
            E ? z.data = E : (E = $d(n),
            E !== null && (z.data = E)))),
            (E = uy ? cy(t, n) : fy(t, n)) && (u = Bo(u, "onBeforeInput"),
            0 < u.length && (c = new Vu("onBeforeInput","beforeinput",null,n,c),
            f.push({
                event: c,
                listeners: u
            }),
            c.data = E))
        }
        Xd(f, e)
    })
}
function zr(t, e, n) {
    return {
        instance: t,
        listener: e,
        currentTarget: n
    }
}
function Bo(t, e) {
    for (var n = e + "Capture", i = []; t !== null; ) {
        var r = t
          , o = r.stateNode;
        r.tag === 5 && o !== null && (r = o,
        o = wr(t, n),
        o != null && i.unshift(zr(t, o, r)),
        o = wr(t, e),
        o != null && i.push(zr(t, o, r))),
        t = t.return
    }
    return i
}
function Gn(t) {
    if (t === null)
        return null;
    do
        t = t.return;
    while (t && t.tag !== 5);
    return t || null
}
function nc(t, e, n, i, r) {
    for (var o = e._reactName, s = []; n !== null && n !== i; ) {
        var l = n
          , a = l.alternate
          , u = l.stateNode;
        if (a !== null && a === i)
            break;
        l.tag === 5 && u !== null && (l = u,
        r ? (a = wr(n, o),
        a != null && s.unshift(zr(n, a, l))) : r || (a = wr(n, o),
        a != null && s.push(zr(n, a, l)))),
        n = n.return
    }
    s.length !== 0 && t.push({
        event: e,
        listeners: s
    })
}
var Ey = /\r\n?/g
  , zy = /\u0000|\uFFFD/g;
function ic(t) {
    return (typeof t == "string" ? t : "" + t).replace(Ey, `
`).replace(zy, "")
}
function to(t, e, n) {
    if (e = ic(e),
    ic(t) !== e && n)
        throw Error(S(425))
}
function Uo() {}
var Hl = null
  , Vl = null;
function Wl(t, e) {
    return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null
}
var ql = typeof setTimeout == "function" ? setTimeout : void 0
  , Py = typeof clearTimeout == "function" ? clearTimeout : void 0
  , rc = typeof Promise == "function" ? Promise : void 0
  , by = typeof queueMicrotask == "function" ? queueMicrotask : typeof rc < "u" ? function(t) {
    return rc.resolve(null).then(t).catch(My)
}
: ql;
function My(t) {
    setTimeout(function() {
        throw t
    })
}
function Qs(t, e) {
    var n = e
      , i = 0;
    do {
        var r = n.nextSibling;
        if (t.removeChild(n),
        r && r.nodeType === 8)
            if (n = r.data,
            n === "/$") {
                if (i === 0) {
                    t.removeChild(r),
                    _r(e);
                    return
                }
                i--
            } else
                n !== "$" && n !== "$?" && n !== "$!" || i++;
        n = r
    } while (n);
    _r(e)
}
function nn(t) {
    for (; t != null; t = t.nextSibling) {
        var e = t.nodeType;
        if (e === 1 || e === 3)
            break;
        if (e === 8) {
            if (e = t.data,
            e === "$" || e === "$!" || e === "$?")
                break;
            if (e === "/$")
                return null
        }
    }
    return t
}
function oc(t) {
    t = t.previousSibling;
    for (var e = 0; t; ) {
        if (t.nodeType === 8) {
            var n = t.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (e === 0)
                    return t;
                e--
            } else
                n === "/$" && e++
        }
        t = t.previousSibling
    }
    return null
}
var Ai = Math.random().toString(36).slice(2)
  , Et = "__reactFiber$" + Ai
  , Pr = "__reactProps$" + Ai
  , $t = "__reactContainer$" + Ai
  , Ql = "__reactEvents$" + Ai
  , Oy = "__reactListeners$" + Ai
  , Ry = "__reactHandles$" + Ai;
function zn(t) {
    var e = t[Et];
    if (e)
        return e;
    for (var n = t.parentNode; n; ) {
        if (e = n[$t] || n[Et]) {
            if (n = e.alternate,
            e.child !== null || n !== null && n.child !== null)
                for (t = oc(t); t !== null; ) {
                    if (n = t[Et])
                        return n;
                    t = oc(t)
                }
            return e
        }
        t = n,
        n = t.parentNode
    }
    return null
}
function Br(t) {
    return t = t[Et] || t[$t],
    !t || t.tag !== 5 && t.tag !== 6 && t.tag !== 13 && t.tag !== 3 ? null : t
}
function oi(t) {
    if (t.tag === 5 || t.tag === 6)
        return t.stateNode;
    throw Error(S(33))
}
function hs(t) {
    return t[Pr] || null
}
var Gl = []
  , si = -1;
function pn(t) {
    return {
        current: t
    }
}
function V(t) {
    0 > si || (t.current = Gl[si],
    Gl[si] = null,
    si--)
}
function U(t, e) {
    si++,
    Gl[si] = t.current,
    t.current = e
}
var cn = {}
  , _e = pn(cn)
  , Ne = pn(!1)
  , Nn = cn;
function Pi(t, e) {
    var n = t.type.contextTypes;
    if (!n)
        return cn;
    var i = t.stateNode;
    if (i && i.__reactInternalMemoizedUnmaskedChildContext === e)
        return i.__reactInternalMemoizedMaskedChildContext;
    var r = {}, o;
    for (o in n)
        r[o] = e[o];
    return i && (t = t.stateNode,
    t.__reactInternalMemoizedUnmaskedChildContext = e,
    t.__reactInternalMemoizedMaskedChildContext = r),
    r
}
function Fe(t) {
    return t = t.childContextTypes,
    t != null
}
function Ho() {
    V(Ne),
    V(_e)
}
function sc(t, e, n) {
    if (_e.current !== cn)
        throw Error(S(168));
    U(_e, e),
    U(Ne, n)
}
function Jd(t, e, n) {
    var i = t.stateNode;
    if (e = e.childContextTypes,
    typeof i.getChildContext != "function")
        return n;
    i = i.getChildContext();
    for (var r in i)
        if (!(r in e))
            throw Error(S(108, mm(t) || "Unknown", r));
    return K({}, n, i)
}
function Vo(t) {
    return t = (t = t.stateNode) && t.__reactInternalMemoizedMergedChildContext || cn,
    Nn = _e.current,
    U(_e, t),
    U(Ne, Ne.current),
    !0
}
function lc(t, e, n) {
    var i = t.stateNode;
    if (!i)
        throw Error(S(169));
    n ? (t = Jd(t, e, Nn),
    i.__reactInternalMemoizedMergedChildContext = t,
    V(Ne),
    V(_e),
    U(_e, t)) : V(Ne),
    U(Ne, n)
}
var Tt = null
  , ps = !1
  , Gs = !1;
function eh(t) {
    Tt === null ? Tt = [t] : Tt.push(t)
}
function Ty(t) {
    ps = !0,
    eh(t)
}
function mn() {
    if (!Gs && Tt !== null) {
        Gs = !0;
        var t = 0
          , e = B;
        try {
            var n = Tt;
            for (B = 1; t < n.length; t++) {
                var i = n[t];
                do
                    i = i(!0);
                while (i !== null)
            }
            Tt = null,
            ps = !1
        } catch (r) {
            throw Tt !== null && (Tt = Tt.slice(t + 1)),
            Ed(Ia, mn),
            r
        } finally {
            B = e,
            Gs = !1
        }
    }
    return null
}
var li = []
  , ai = 0
  , Wo = null
  , qo = 0
  , Xe = []
  , Ze = 0
  , Fn = null
  , Lt = 1
  , It = "";
function Sn(t, e) {
    li[ai++] = qo,
    li[ai++] = Wo,
    Wo = t,
    qo = e
}
function th(t, e, n) {
    Xe[Ze++] = Lt,
    Xe[Ze++] = It,
    Xe[Ze++] = Fn,
    Fn = t;
    var i = Lt;
    t = It;
    var r = 32 - mt(i) - 1;
    i &= ~(1 << r),
    n += 1;
    var o = 32 - mt(e) + r;
    if (30 < o) {
        var s = r - r % 5;
        o = (i & (1 << s) - 1).toString(32),
        i >>= s,
        r -= s,
        Lt = 1 << 32 - mt(e) + r | n << r | i,
        It = o + t
    } else
        Lt = 1 << o | n << r | i,
        It = t
}
function Ha(t) {
    t.return !== null && (Sn(t, 1),
    th(t, 1, 0))
}
function Va(t) {
    for (; t === Wo; )
        Wo = li[--ai],
        li[ai] = null,
        qo = li[--ai],
        li[ai] = null;
    for (; t === Fn; )
        Fn = Xe[--Ze],
        Xe[Ze] = null,
        It = Xe[--Ze],
        Xe[Ze] = null,
        Lt = Xe[--Ze],
        Xe[Ze] = null
}
var He = null
  , Be = null
  , Q = !1
  , ft = null;
function nh(t, e) {
    var n = et(5, null, null, 0);
    n.elementType = "DELETED",
    n.stateNode = e,
    n.return = t,
    e = t.deletions,
    e === null ? (t.deletions = [n],
    t.flags |= 16) : e.push(n)
}
function ac(t, e) {
    switch (t.tag) {
    case 5:
        var n = t.type;
        return e = e.nodeType !== 1 || n.toLowerCase() !== e.nodeName.toLowerCase() ? null : e,
        e !== null ? (t.stateNode = e,
        He = t,
        Be = nn(e.firstChild),
        !0) : !1;
    case 6:
        return e = t.pendingProps === "" || e.nodeType !== 3 ? null : e,
        e !== null ? (t.stateNode = e,
        He = t,
        Be = null,
        !0) : !1;
    case 13:
        return e = e.nodeType !== 8 ? null : e,
        e !== null ? (n = Fn !== null ? {
            id: Lt,
            overflow: It
        } : null,
        t.memoizedState = {
            dehydrated: e,
            treeContext: n,
            retryLane: 1073741824
        },
        n = et(18, null, null, 0),
        n.stateNode = e,
        n.return = t,
        t.child = n,
        He = t,
        Be = null,
        !0) : !1;
    default:
        return !1
    }
}
function Yl(t) {
    return (t.mode & 1) !== 0 && (t.flags & 128) === 0
}
function Kl(t) {
    if (Q) {
        var e = Be;
        if (e) {
            var n = e;
            if (!ac(t, e)) {
                if (Yl(t))
                    throw Error(S(418));
                e = nn(n.nextSibling);
                var i = He;
                e && ac(t, e) ? nh(i, n) : (t.flags = t.flags & -4097 | 2,
                Q = !1,
                He = t)
            }
        } else {
            if (Yl(t))
                throw Error(S(418));
            t.flags = t.flags & -4097 | 2,
            Q = !1,
            He = t
        }
    }
}
function uc(t) {
    for (t = t.return; t !== null && t.tag !== 5 && t.tag !== 3 && t.tag !== 13; )
        t = t.return;
    He = t
}
function no(t) {
    if (t !== He)
        return !1;
    if (!Q)
        return uc(t),
        Q = !0,
        !1;
    var e;
    if ((e = t.tag !== 3) && !(e = t.tag !== 5) && (e = t.type,
    e = e !== "head" && e !== "body" && !Wl(t.type, t.memoizedProps)),
    e && (e = Be)) {
        if (Yl(t))
            throw ih(),
            Error(S(418));
        for (; e; )
            nh(t, e),
            e = nn(e.nextSibling)
    }
    if (uc(t),
    t.tag === 13) {
        if (t = t.memoizedState,
        t = t !== null ? t.dehydrated : null,
        !t)
            throw Error(S(317));
        e: {
            for (t = t.nextSibling,
            e = 0; t; ) {
                if (t.nodeType === 8) {
                    var n = t.data;
                    if (n === "/$") {
                        if (e === 0) {
                            Be = nn(t.nextSibling);
                            break e
                        }
                        e--
                    } else
                        n !== "$" && n !== "$!" && n !== "$?" || e++
                }
                t = t.nextSibling
            }
            Be = null
        }
    } else
        Be = He ? nn(t.stateNode.nextSibling) : null;
    return !0
}
function ih() {
    for (var t = Be; t; )
        t = nn(t.nextSibling)
}
function bi() {
    Be = He = null,
    Q = !1
}
function Wa(t) {
    ft === null ? ft = [t] : ft.push(t)
}
var Ly = Ut.ReactCurrentBatchConfig;
function Gi(t, e, n) {
    if (t = n.ref,
    t !== null && typeof t != "function" && typeof t != "object") {
        if (n._owner) {
            if (n = n._owner,
            n) {
                if (n.tag !== 1)
                    throw Error(S(309));
                var i = n.stateNode
            }
            if (!i)
                throw Error(S(147, t));
            var r = i
              , o = "" + t;
            return e !== null && e.ref !== null && typeof e.ref == "function" && e.ref._stringRef === o ? e.ref : (e = function(s) {
                var l = r.refs;
                s === null ? delete l[o] : l[o] = s
            }
            ,
            e._stringRef = o,
            e)
        }
        if (typeof t != "string")
            throw Error(S(284));
        if (!n._owner)
            throw Error(S(290, t))
    }
    return t
}
function io(t, e) {
    throw t = Object.prototype.toString.call(e),
    Error(S(31, t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t))
}
function cc(t) {
    var e = t._init;
    return e(t._payload)
}
function rh(t) {
    function e(p, h) {
        if (t) {
            var g = p.deletions;
            g === null ? (p.deletions = [h],
            p.flags |= 16) : g.push(h)
        }
    }
    function n(p, h) {
        if (!t)
            return null;
        for (; h !== null; )
            e(p, h),
            h = h.sibling;
        return null
    }
    function i(p, h) {
        for (p = new Map; h !== null; )
            h.key !== null ? p.set(h.key, h) : p.set(h.index, h),
            h = h.sibling;
        return p
    }
    function r(p, h) {
        return p = ln(p, h),
        p.index = 0,
        p.sibling = null,
        p
    }
    function o(p, h, g) {
        return p.index = g,
        t ? (g = p.alternate,
        g !== null ? (g = g.index,
        g < h ? (p.flags |= 2,
        h) : g) : (p.flags |= 2,
        h)) : (p.flags |= 1048576,
        h)
    }
    function s(p) {
        return t && p.alternate === null && (p.flags |= 2),
        p
    }
    function l(p, h, g, w) {
        return h === null || h.tag !== 6 ? (h = tl(g, p.mode, w),
        h.return = p,
        h) : (h = r(h, g),
        h.return = p,
        h)
    }
    function a(p, h, g, w) {
        var x = g.type;
        return x === ti ? c(p, h, g.props.children, w, g.key) : h !== null && (h.elementType === x || typeof x == "object" && x !== null && x.$$typeof === Wt && cc(x) === h.type) ? (w = r(h, g.props),
        w.ref = Gi(p, h, g),
        w.return = p,
        w) : (w = Ro(g.type, g.key, g.props, null, p.mode, w),
        w.ref = Gi(p, h, g),
        w.return = p,
        w)
    }
    function u(p, h, g, w) {
        return h === null || h.tag !== 4 || h.stateNode.containerInfo !== g.containerInfo || h.stateNode.implementation !== g.implementation ? (h = nl(g, p.mode, w),
        h.return = p,
        h) : (h = r(h, g.children || []),
        h.return = p,
        h)
    }
    function c(p, h, g, w, x) {
        return h === null || h.tag !== 7 ? (h = In(g, p.mode, w, x),
        h.return = p,
        h) : (h = r(h, g),
        h.return = p,
        h)
    }
    function f(p, h, g) {
        if (typeof h == "string" && h !== "" || typeof h == "number")
            return h = tl("" + h, p.mode, g),
            h.return = p,
            h;
        if (typeof h == "object" && h !== null) {
            switch (h.$$typeof) {
            case qr:
                return g = Ro(h.type, h.key, h.props, null, p.mode, g),
                g.ref = Gi(p, null, h),
                g.return = p,
                g;
            case ei:
                return h = nl(h, p.mode, g),
                h.return = p,
                h;
            case Wt:
                var w = h._init;
                return f(p, w(h._payload), g)
            }
            if (nr(h) || Hi(h))
                return h = In(h, p.mode, g, null),
                h.return = p,
                h;
            io(p, h)
        }
        return null
    }
    function d(p, h, g, w) {
        var x = h !== null ? h.key : null;
        if (typeof g == "string" && g !== "" || typeof g == "number")
            return x !== null ? null : l(p, h, "" + g, w);
        if (typeof g == "object" && g !== null) {
            switch (g.$$typeof) {
            case qr:
                return g.key === x ? a(p, h, g, w) : null;
            case ei:
                return g.key === x ? u(p, h, g, w) : null;
            case Wt:
                return x = g._init,
                d(p, h, x(g._payload), w)
            }
            if (nr(g) || Hi(g))
                return x !== null ? null : c(p, h, g, w, null);
            io(p, g)
        }
        return null
    }
    function m(p, h, g, w, x) {
        if (typeof w == "string" && w !== "" || typeof w == "number")
            return p = p.get(g) || null,
            l(h, p, "" + w, x);
        if (typeof w == "object" && w !== null) {
            switch (w.$$typeof) {
            case qr:
                return p = p.get(w.key === null ? g : w.key) || null,
                a(h, p, w, x);
            case ei:
                return p = p.get(w.key === null ? g : w.key) || null,
                u(h, p, w, x);
            case Wt:
                var _ = w._init;
                return m(p, h, g, _(w._payload), x)
            }
            if (nr(w) || Hi(w))
                return p = p.get(g) || null,
                c(h, p, w, x, null);
            io(h, w)
        }
        return null
    }
    function v(p, h, g, w) {
        for (var x = null, _ = null, E = h, z = h = 0, R = null; E !== null && z < g.length; z++) {
            E.index > z ? (R = E,
            E = null) : R = E.sibling;
            var O = d(p, E, g[z], w);
            if (O === null) {
                E === null && (E = R);
                break
            }
            t && E && O.alternate === null && e(p, E),
            h = o(O, h, z),
            _ === null ? x = O : _.sibling = O,
            _ = O,
            E = R
        }
        if (z === g.length)
            return n(p, E),
            Q && Sn(p, z),
            x;
        if (E === null) {
            for (; z < g.length; z++)
                E = f(p, g[z], w),
                E !== null && (h = o(E, h, z),
                _ === null ? x = E : _.sibling = E,
                _ = E);
            return Q && Sn(p, z),
            x
        }
        for (E = i(p, E); z < g.length; z++)
            R = m(E, p, z, g[z], w),
            R !== null && (t && R.alternate !== null && E.delete(R.key === null ? z : R.key),
            h = o(R, h, z),
            _ === null ? x = R : _.sibling = R,
            _ = R);
        return t && E.forEach(function(A) {
            return e(p, A)
        }),
        Q && Sn(p, z),
        x
    }
    function y(p, h, g, w) {
        var x = Hi(g);
        if (typeof x != "function")
            throw Error(S(150));
        if (g = x.call(g),
        g == null)
            throw Error(S(151));
        for (var _ = x = null, E = h, z = h = 0, R = null, O = g.next(); E !== null && !O.done; z++,
        O = g.next()) {
            E.index > z ? (R = E,
            E = null) : R = E.sibling;
            var A = d(p, E, O.value, w);
            if (A === null) {
                E === null && (E = R);
                break
            }
            t && E && A.alternate === null && e(p, E),
            h = o(A, h, z),
            _ === null ? x = A : _.sibling = A,
            _ = A,
            E = R
        }
        if (O.done)
            return n(p, E),
            Q && Sn(p, z),
            x;
        if (E === null) {
            for (; !O.done; z++,
            O = g.next())
                O = f(p, O.value, w),
                O !== null && (h = o(O, h, z),
                _ === null ? x = O : _.sibling = O,
                _ = O);
            return Q && Sn(p, z),
            x
        }
        for (E = i(p, E); !O.done; z++,
        O = g.next())
            O = m(E, p, z, O.value, w),
            O !== null && (t && O.alternate !== null && E.delete(O.key === null ? z : O.key),
            h = o(O, h, z),
            _ === null ? x = O : _.sibling = O,
            _ = O);
        return t && E.forEach(function(te) {
            return e(p, te)
        }),
        Q && Sn(p, z),
        x
    }
    function k(p, h, g, w) {
        if (typeof g == "object" && g !== null && g.type === ti && g.key === null && (g = g.props.children),
        typeof g == "object" && g !== null) {
            switch (g.$$typeof) {
            case qr:
                e: {
                    for (var x = g.key, _ = h; _ !== null; ) {
                        if (_.key === x) {
                            if (x = g.type,
                            x === ti) {
                                if (_.tag === 7) {
                                    n(p, _.sibling),
                                    h = r(_, g.props.children),
                                    h.return = p,
                                    p = h;
                                    break e
                                }
                            } else if (_.elementType === x || typeof x == "object" && x !== null && x.$$typeof === Wt && cc(x) === _.type) {
                                n(p, _.sibling),
                                h = r(_, g.props),
                                h.ref = Gi(p, _, g),
                                h.return = p,
                                p = h;
                                break e
                            }
                            n(p, _);
                            break
                        } else
                            e(p, _);
                        _ = _.sibling
                    }
                    g.type === ti ? (h = In(g.props.children, p.mode, w, g.key),
                    h.return = p,
                    p = h) : (w = Ro(g.type, g.key, g.props, null, p.mode, w),
                    w.ref = Gi(p, h, g),
                    w.return = p,
                    p = w)
                }
                return s(p);
            case ei:
                e: {
                    for (_ = g.key; h !== null; ) {
                        if (h.key === _)
                            if (h.tag === 4 && h.stateNode.containerInfo === g.containerInfo && h.stateNode.implementation === g.implementation) {
                                n(p, h.sibling),
                                h = r(h, g.children || []),
                                h.return = p,
                                p = h;
                                break e
                            } else {
                                n(p, h);
                                break
                            }
                        else
                            e(p, h);
                        h = h.sibling
                    }
                    h = nl(g, p.mode, w),
                    h.return = p,
                    p = h
                }
                return s(p);
            case Wt:
                return _ = g._init,
                k(p, h, _(g._payload), w)
            }
            if (nr(g))
                return v(p, h, g, w);
            if (Hi(g))
                return y(p, h, g, w);
            io(p, g)
        }
        return typeof g == "string" && g !== "" || typeof g == "number" ? (g = "" + g,
        h !== null && h.tag === 6 ? (n(p, h.sibling),
        h = r(h, g),
        h.return = p,
        p = h) : (n(p, h),
        h = tl(g, p.mode, w),
        h.return = p,
        p = h),
        s(p)) : n(p, h)
    }
    return k
}
var Mi = rh(!0)
  , oh = rh(!1)
  , Qo = pn(null)
  , Go = null
  , ui = null
  , qa = null;
function Qa() {
    qa = ui = Go = null
}
function Ga(t) {
    var e = Qo.current;
    V(Qo),
    t._currentValue = e
}
function Xl(t, e, n) {
    for (; t !== null; ) {
        var i = t.alternate;
        if ((t.childLanes & e) !== e ? (t.childLanes |= e,
        i !== null && (i.childLanes |= e)) : i !== null && (i.childLanes & e) !== e && (i.childLanes |= e),
        t === n)
            break;
        t = t.return
    }
}
function wi(t, e) {
    Go = t,
    qa = ui = null,
    t = t.dependencies,
    t !== null && t.firstContext !== null && (t.lanes & e && (Ie = !0),
    t.firstContext = null)
}
function nt(t) {
    var e = t._currentValue;
    if (qa !== t)
        if (t = {
            context: t,
            memoizedValue: e,
            next: null
        },
        ui === null) {
            if (Go === null)
                throw Error(S(308));
            ui = t,
            Go.dependencies = {
                lanes: 0,
                firstContext: t
            }
        } else
            ui = ui.next = t;
    return e
}
var Pn = null;
function Ya(t) {
    Pn === null ? Pn = [t] : Pn.push(t)
}
function sh(t, e, n, i) {
    var r = e.interleaved;
    return r === null ? (n.next = n,
    Ya(e)) : (n.next = r.next,
    r.next = n),
    e.interleaved = n,
    At(t, i)
}
function At(t, e) {
    t.lanes |= e;
    var n = t.alternate;
    for (n !== null && (n.lanes |= e),
    n = t,
    t = t.return; t !== null; )
        t.childLanes |= e,
        n = t.alternate,
        n !== null && (n.childLanes |= e),
        n = t,
        t = t.return;
    return n.tag === 3 ? n.stateNode : null
}
var qt = !1;
function Ka(t) {
    t.updateQueue = {
        baseState: t.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}
function lh(t, e) {
    t = t.updateQueue,
    e.updateQueue === t && (e.updateQueue = {
        baseState: t.baseState,
        firstBaseUpdate: t.firstBaseUpdate,
        lastBaseUpdate: t.lastBaseUpdate,
        shared: t.shared,
        effects: t.effects
    })
}
function Nt(t, e) {
    return {
        eventTime: t,
        lane: e,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}
function rn(t, e, n) {
    var i = t.updateQueue;
    if (i === null)
        return null;
    if (i = i.shared,
    F & 2) {
        var r = i.pending;
        return r === null ? e.next = e : (e.next = r.next,
        r.next = e),
        i.pending = e,
        At(t, n)
    }
    return r = i.interleaved,
    r === null ? (e.next = e,
    Ya(i)) : (e.next = r.next,
    r.next = e),
    i.interleaved = e,
    At(t, n)
}
function Eo(t, e, n) {
    if (e = e.updateQueue,
    e !== null && (e = e.shared,
    (n & 4194240) !== 0)) {
        var i = e.lanes;
        i &= t.pendingLanes,
        n |= i,
        e.lanes = n,
        Da(t, n)
    }
}
function fc(t, e) {
    var n = t.updateQueue
      , i = t.alternate;
    if (i !== null && (i = i.updateQueue,
    n === i)) {
        var r = null
          , o = null;
        if (n = n.firstBaseUpdate,
        n !== null) {
            do {
                var s = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                o === null ? r = o = s : o = o.next = s,
                n = n.next
            } while (n !== null);
            o === null ? r = o = e : o = o.next = e
        } else
            r = o = e;
        n = {
            baseState: i.baseState,
            firstBaseUpdate: r,
            lastBaseUpdate: o,
            shared: i.shared,
            effects: i.effects
        },
        t.updateQueue = n;
        return
    }
    t = n.lastBaseUpdate,
    t === null ? n.firstBaseUpdate = e : t.next = e,
    n.lastBaseUpdate = e
}
function Yo(t, e, n, i) {
    var r = t.updateQueue;
    qt = !1;
    var o = r.firstBaseUpdate
      , s = r.lastBaseUpdate
      , l = r.shared.pending;
    if (l !== null) {
        r.shared.pending = null;
        var a = l
          , u = a.next;
        a.next = null,
        s === null ? o = u : s.next = u,
        s = a;
        var c = t.alternate;
        c !== null && (c = c.updateQueue,
        l = c.lastBaseUpdate,
        l !== s && (l === null ? c.firstBaseUpdate = u : l.next = u,
        c.lastBaseUpdate = a))
    }
    if (o !== null) {
        var f = r.baseState;
        s = 0,
        c = u = a = null,
        l = o;
        do {
            var d = l.lane
              , m = l.eventTime;
            if ((i & d) === d) {
                c !== null && (c = c.next = {
                    eventTime: m,
                    lane: 0,
                    tag: l.tag,
                    payload: l.payload,
                    callback: l.callback,
                    next: null
                });
                e: {
                    var v = t
                      , y = l;
                    switch (d = e,
                    m = n,
                    y.tag) {
                    case 1:
                        if (v = y.payload,
                        typeof v == "function") {
                            f = v.call(m, f, d);
                            break e
                        }
                        f = v;
                        break e;
                    case 3:
                        v.flags = v.flags & -65537 | 128;
                    case 0:
                        if (v = y.payload,
                        d = typeof v == "function" ? v.call(m, f, d) : v,
                        d == null)
                            break e;
                        f = K({}, f, d);
                        break e;
                    case 2:
                        qt = !0
                    }
                }
                l.callback !== null && l.lane !== 0 && (t.flags |= 64,
                d = r.effects,
                d === null ? r.effects = [l] : d.push(l))
            } else
                m = {
                    eventTime: m,
                    lane: d,
                    tag: l.tag,
                    payload: l.payload,
                    callback: l.callback,
                    next: null
                },
                c === null ? (u = c = m,
                a = f) : c = c.next = m,
                s |= d;
            if (l = l.next,
            l === null) {
                if (l = r.shared.pending,
                l === null)
                    break;
                d = l,
                l = d.next,
                d.next = null,
                r.lastBaseUpdate = d,
                r.shared.pending = null
            }
        } while (!0);
        if (c === null && (a = f),
        r.baseState = a,
        r.firstBaseUpdate = u,
        r.lastBaseUpdate = c,
        e = r.shared.interleaved,
        e !== null) {
            r = e;
            do
                s |= r.lane,
                r = r.next;
            while (r !== e)
        } else
            o === null && (r.shared.lanes = 0);
        $n |= s,
        t.lanes = s,
        t.memoizedState = f
    }
}
function dc(t, e, n) {
    if (t = e.effects,
    e.effects = null,
    t !== null)
        for (e = 0; e < t.length; e++) {
            var i = t[e]
              , r = i.callback;
            if (r !== null) {
                if (i.callback = null,
                i = n,
                typeof r != "function")
                    throw Error(S(191, r));
                r.call(i)
            }
        }
}
var Ur = {}
  , bt = pn(Ur)
  , br = pn(Ur)
  , Mr = pn(Ur);
function bn(t) {
    if (t === Ur)
        throw Error(S(174));
    return t
}
function Xa(t, e) {
    switch (U(Mr, e),
    U(br, t),
    U(bt, Ur),
    t = e.nodeType,
    t) {
    case 9:
    case 11:
        e = (e = e.documentElement) ? e.namespaceURI : Rl(null, "");
        break;
    default:
        t = t === 8 ? e.parentNode : e,
        e = t.namespaceURI || null,
        t = t.tagName,
        e = Rl(e, t)
    }
    V(bt),
    U(bt, e)
}
function Oi() {
    V(bt),
    V(br),
    V(Mr)
}
function ah(t) {
    bn(Mr.current);
    var e = bn(bt.current)
      , n = Rl(e, t.type);
    e !== n && (U(br, t),
    U(bt, n))
}
function Za(t) {
    br.current === t && (V(bt),
    V(br))
}
var G = pn(0);
function Ko(t) {
    for (var e = t; e !== null; ) {
        if (e.tag === 13) {
            var n = e.memoizedState;
            if (n !== null && (n = n.dehydrated,
            n === null || n.data === "$?" || n.data === "$!"))
                return e
        } else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
            if (e.flags & 128)
                return e
        } else if (e.child !== null) {
            e.child.return = e,
            e = e.child;
            continue
        }
        if (e === t)
            break;
        for (; e.sibling === null; ) {
            if (e.return === null || e.return === t)
                return null;
            e = e.return
        }
        e.sibling.return = e.return,
        e = e.sibling
    }
    return null
}
var Ys = [];
function Ja() {
    for (var t = 0; t < Ys.length; t++)
        Ys[t]._workInProgressVersionPrimary = null;
    Ys.length = 0
}
var zo = Ut.ReactCurrentDispatcher
  , Ks = Ut.ReactCurrentBatchConfig
  , jn = 0
  , Y = null
  , le = null
  , ue = null
  , Xo = !1
  , cr = !1
  , Or = 0
  , Iy = 0;
function ge() {
    throw Error(S(321))
}
function eu(t, e) {
    if (e === null)
        return !1;
    for (var n = 0; n < e.length && n < t.length; n++)
        if (!wt(t[n], e[n]))
            return !1;
    return !0
}
function tu(t, e, n, i, r, o) {
    if (jn = o,
    Y = e,
    e.memoizedState = null,
    e.updateQueue = null,
    e.lanes = 0,
    zo.current = t === null || t.memoizedState === null ? jy : $y,
    t = n(i, r),
    cr) {
        o = 0;
        do {
            if (cr = !1,
            Or = 0,
            25 <= o)
                throw Error(S(301));
            o += 1,
            ue = le = null,
            e.updateQueue = null,
            zo.current = Ay,
            t = n(i, r)
        } while (cr)
    }
    if (zo.current = Zo,
    e = le !== null && le.next !== null,
    jn = 0,
    ue = le = Y = null,
    Xo = !1,
    e)
        throw Error(S(300));
    return t
}
function nu() {
    var t = Or !== 0;
    return Or = 0,
    t
}
function _t() {
    var t = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return ue === null ? Y.memoizedState = ue = t : ue = ue.next = t,
    ue
}
function it() {
    if (le === null) {
        var t = Y.alternate;
        t = t !== null ? t.memoizedState : null
    } else
        t = le.next;
    var e = ue === null ? Y.memoizedState : ue.next;
    if (e !== null)
        ue = e,
        le = t;
    else {
        if (t === null)
            throw Error(S(310));
        le = t,
        t = {
            memoizedState: le.memoizedState,
            baseState: le.baseState,
            baseQueue: le.baseQueue,
            queue: le.queue,
            next: null
        },
        ue === null ? Y.memoizedState = ue = t : ue = ue.next = t
    }
    return ue
}
function Rr(t, e) {
    return typeof e == "function" ? e(t) : e
}
function Xs(t) {
    var e = it()
      , n = e.queue;
    if (n === null)
        throw Error(S(311));
    n.lastRenderedReducer = t;
    var i = le
      , r = i.baseQueue
      , o = n.pending;
    if (o !== null) {
        if (r !== null) {
            var s = r.next;
            r.next = o.next,
            o.next = s
        }
        i.baseQueue = r = o,
        n.pending = null
    }
    if (r !== null) {
        o = r.next,
        i = i.baseState;
        var l = s = null
          , a = null
          , u = o;
        do {
            var c = u.lane;
            if ((jn & c) === c)
                a !== null && (a = a.next = {
                    lane: 0,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                }),
                i = u.hasEagerState ? u.eagerState : t(i, u.action);
            else {
                var f = {
                    lane: c,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                };
                a === null ? (l = a = f,
                s = i) : a = a.next = f,
                Y.lanes |= c,
                $n |= c
            }
            u = u.next
        } while (u !== null && u !== o);
        a === null ? s = i : a.next = l,
        wt(i, e.memoizedState) || (Ie = !0),
        e.memoizedState = i,
        e.baseState = s,
        e.baseQueue = a,
        n.lastRenderedState = i
    }
    if (t = n.interleaved,
    t !== null) {
        r = t;
        do
            o = r.lane,
            Y.lanes |= o,
            $n |= o,
            r = r.next;
        while (r !== t)
    } else
        r === null && (n.lanes = 0);
    return [e.memoizedState, n.dispatch]
}
function Zs(t) {
    var e = it()
      , n = e.queue;
    if (n === null)
        throw Error(S(311));
    n.lastRenderedReducer = t;
    var i = n.dispatch
      , r = n.pending
      , o = e.memoizedState;
    if (r !== null) {
        n.pending = null;
        var s = r = r.next;
        do
            o = t(o, s.action),
            s = s.next;
        while (s !== r);
        wt(o, e.memoizedState) || (Ie = !0),
        e.memoizedState = o,
        e.baseQueue === null && (e.baseState = o),
        n.lastRenderedState = o
    }
    return [o, i]
}
function uh() {}
function ch(t, e) {
    var n = Y
      , i = it()
      , r = e()
      , o = !wt(i.memoizedState, r);
    if (o && (i.memoizedState = r,
    Ie = !0),
    i = i.queue,
    iu(hh.bind(null, n, i, t), [t]),
    i.getSnapshot !== e || o || ue !== null && ue.memoizedState.tag & 1) {
        if (n.flags |= 2048,
        Tr(9, dh.bind(null, n, i, r, e), void 0, null),
        ce === null)
            throw Error(S(349));
        jn & 30 || fh(n, e, r)
    }
    return r
}
function fh(t, e, n) {
    t.flags |= 16384,
    t = {
        getSnapshot: e,
        value: n
    },
    e = Y.updateQueue,
    e === null ? (e = {
        lastEffect: null,
        stores: null
    },
    Y.updateQueue = e,
    e.stores = [t]) : (n = e.stores,
    n === null ? e.stores = [t] : n.push(t))
}
function dh(t, e, n, i) {
    e.value = n,
    e.getSnapshot = i,
    ph(e) && mh(t)
}
function hh(t, e, n) {
    return n(function() {
        ph(e) && mh(t)
    })
}
function ph(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
        var n = e();
        return !wt(t, n)
    } catch {
        return !0
    }
}
function mh(t) {
    var e = At(t, 1);
    e !== null && yt(e, t, 1, -1)
}
function hc(t) {
    var e = _t();
    return typeof t == "function" && (t = t()),
    e.memoizedState = e.baseState = t,
    t = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Rr,
        lastRenderedState: t
    },
    e.queue = t,
    t = t.dispatch = Fy.bind(null, Y, t),
    [e.memoizedState, t]
}
function Tr(t, e, n, i) {
    return t = {
        tag: t,
        create: e,
        destroy: n,
        deps: i,
        next: null
    },
    e = Y.updateQueue,
    e === null ? (e = {
        lastEffect: null,
        stores: null
    },
    Y.updateQueue = e,
    e.lastEffect = t.next = t) : (n = e.lastEffect,
    n === null ? e.lastEffect = t.next = t : (i = n.next,
    n.next = t,
    t.next = i,
    e.lastEffect = t)),
    t
}
function yh() {
    return it().memoizedState
}
function Po(t, e, n, i) {
    var r = _t();
    Y.flags |= t,
    r.memoizedState = Tr(1 | e, n, void 0, i === void 0 ? null : i)
}
function ms(t, e, n, i) {
    var r = it();
    i = i === void 0 ? null : i;
    var o = void 0;
    if (le !== null) {
        var s = le.memoizedState;
        if (o = s.destroy,
        i !== null && eu(i, s.deps)) {
            r.memoizedState = Tr(e, n, o, i);
            return
        }
    }
    Y.flags |= t,
    r.memoizedState = Tr(1 | e, n, o, i)
}
function pc(t, e) {
    return Po(8390656, 8, t, e)
}
function iu(t, e) {
    return ms(2048, 8, t, e)
}
function gh(t, e) {
    return ms(4, 2, t, e)
}
function vh(t, e) {
    return ms(4, 4, t, e)
}
function wh(t, e) {
    if (typeof e == "function")
        return t = t(),
        e(t),
        function() {
            e(null)
        }
        ;
    if (e != null)
        return t = t(),
        e.current = t,
        function() {
            e.current = null
        }
}
function xh(t, e, n) {
    return n = n != null ? n.concat([t]) : null,
    ms(4, 4, wh.bind(null, e, t), n)
}
function ru() {}
function kh(t, e) {
    var n = it();
    e = e === void 0 ? null : e;
    var i = n.memoizedState;
    return i !== null && e !== null && eu(e, i[1]) ? i[0] : (n.memoizedState = [t, e],
    t)
}
function _h(t, e) {
    var n = it();
    e = e === void 0 ? null : e;
    var i = n.memoizedState;
    return i !== null && e !== null && eu(e, i[1]) ? i[0] : (t = t(),
    n.memoizedState = [t, e],
    t)
}
function Sh(t, e, n) {
    return jn & 21 ? (wt(n, e) || (n = bd(),
    Y.lanes |= n,
    $n |= n,
    t.baseState = !0),
    e) : (t.baseState && (t.baseState = !1,
    Ie = !0),
    t.memoizedState = n)
}
function Dy(t, e) {
    var n = B;
    B = n !== 0 && 4 > n ? n : 4,
    t(!0);
    var i = Ks.transition;
    Ks.transition = {};
    try {
        t(!1),
        e()
    } finally {
        B = n,
        Ks.transition = i
    }
}
function Ch() {
    return it().memoizedState
}
function Ny(t, e, n) {
    var i = sn(t);
    if (n = {
        lane: i,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    },
    Eh(t))
        zh(e, n);
    else if (n = sh(t, e, n, i),
    n !== null) {
        var r = be();
        yt(n, t, i, r),
        Ph(n, e, i)
    }
}
function Fy(t, e, n) {
    var i = sn(t)
      , r = {
        lane: i,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    };
    if (Eh(t))
        zh(e, r);
    else {
        var o = t.alternate;
        if (t.lanes === 0 && (o === null || o.lanes === 0) && (o = e.lastRenderedReducer,
        o !== null))
            try {
                var s = e.lastRenderedState
                  , l = o(s, n);
                if (r.hasEagerState = !0,
                r.eagerState = l,
                wt(l, s)) {
                    var a = e.interleaved;
                    a === null ? (r.next = r,
                    Ya(e)) : (r.next = a.next,
                    a.next = r),
                    e.interleaved = r;
                    return
                }
            } catch {} finally {}
        n = sh(t, e, r, i),
        n !== null && (r = be(),
        yt(n, t, i, r),
        Ph(n, e, i))
    }
}
function Eh(t) {
    var e = t.alternate;
    return t === Y || e !== null && e === Y
}
function zh(t, e) {
    cr = Xo = !0;
    var n = t.pending;
    n === null ? e.next = e : (e.next = n.next,
    n.next = e),
    t.pending = e
}
function Ph(t, e, n) {
    if (n & 4194240) {
        var i = e.lanes;
        i &= t.pendingLanes,
        n |= i,
        e.lanes = n,
        Da(t, n)
    }
}
var Zo = {
    readContext: nt,
    useCallback: ge,
    useContext: ge,
    useEffect: ge,
    useImperativeHandle: ge,
    useInsertionEffect: ge,
    useLayoutEffect: ge,
    useMemo: ge,
    useReducer: ge,
    useRef: ge,
    useState: ge,
    useDebugValue: ge,
    useDeferredValue: ge,
    useTransition: ge,
    useMutableSource: ge,
    useSyncExternalStore: ge,
    useId: ge,
    unstable_isNewReconciler: !1
}
  , jy = {
    readContext: nt,
    useCallback: function(t, e) {
        return _t().memoizedState = [t, e === void 0 ? null : e],
        t
    },
    useContext: nt,
    useEffect: pc,
    useImperativeHandle: function(t, e, n) {
        return n = n != null ? n.concat([t]) : null,
        Po(4194308, 4, wh.bind(null, e, t), n)
    },
    useLayoutEffect: function(t, e) {
        return Po(4194308, 4, t, e)
    },
    useInsertionEffect: function(t, e) {
        return Po(4, 2, t, e)
    },
    useMemo: function(t, e) {
        var n = _t();
        return e = e === void 0 ? null : e,
        t = t(),
        n.memoizedState = [t, e],
        t
    },
    useReducer: function(t, e, n) {
        var i = _t();
        return e = n !== void 0 ? n(e) : e,
        i.memoizedState = i.baseState = e,
        t = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: t,
            lastRenderedState: e
        },
        i.queue = t,
        t = t.dispatch = Ny.bind(null, Y, t),
        [i.memoizedState, t]
    },
    useRef: function(t) {
        var e = _t();
        return t = {
            current: t
        },
        e.memoizedState = t
    },
    useState: hc,
    useDebugValue: ru,
    useDeferredValue: function(t) {
        return _t().memoizedState = t
    },
    useTransition: function() {
        var t = hc(!1)
          , e = t[0];
        return t = Dy.bind(null, t[1]),
        _t().memoizedState = t,
        [e, t]
    },
    useMutableSource: function() {},
    useSyncExternalStore: function(t, e, n) {
        var i = Y
          , r = _t();
        if (Q) {
            if (n === void 0)
                throw Error(S(407));
            n = n()
        } else {
            if (n = e(),
            ce === null)
                throw Error(S(349));
            jn & 30 || fh(i, e, n)
        }
        r.memoizedState = n;
        var o = {
            value: n,
            getSnapshot: e
        };
        return r.queue = o,
        pc(hh.bind(null, i, o, t), [t]),
        i.flags |= 2048,
        Tr(9, dh.bind(null, i, o, n, e), void 0, null),
        n
    },
    useId: function() {
        var t = _t()
          , e = ce.identifierPrefix;
        if (Q) {
            var n = It
              , i = Lt;
            n = (i & ~(1 << 32 - mt(i) - 1)).toString(32) + n,
            e = ":" + e + "R" + n,
            n = Or++,
            0 < n && (e += "H" + n.toString(32)),
            e += ":"
        } else
            n = Iy++,
            e = ":" + e + "r" + n.toString(32) + ":";
        return t.memoizedState = e
    },
    unstable_isNewReconciler: !1
}
  , $y = {
    readContext: nt,
    useCallback: kh,
    useContext: nt,
    useEffect: iu,
    useImperativeHandle: xh,
    useInsertionEffect: gh,
    useLayoutEffect: vh,
    useMemo: _h,
    useReducer: Xs,
    useRef: yh,
    useState: function() {
        return Xs(Rr)
    },
    useDebugValue: ru,
    useDeferredValue: function(t) {
        var e = it();
        return Sh(e, le.memoizedState, t)
    },
    useTransition: function() {
        var t = Xs(Rr)[0]
          , e = it().memoizedState;
        return [t, e]
    },
    useMutableSource: uh,
    useSyncExternalStore: ch,
    useId: Ch,
    unstable_isNewReconciler: !1
}
  , Ay = {
    readContext: nt,
    useCallback: kh,
    useContext: nt,
    useEffect: iu,
    useImperativeHandle: xh,
    useInsertionEffect: gh,
    useLayoutEffect: vh,
    useMemo: _h,
    useReducer: Zs,
    useRef: yh,
    useState: function() {
        return Zs(Rr)
    },
    useDebugValue: ru,
    useDeferredValue: function(t) {
        var e = it();
        return le === null ? e.memoizedState = t : Sh(e, le.memoizedState, t)
    },
    useTransition: function() {
        var t = Zs(Rr)[0]
          , e = it().memoizedState;
        return [t, e]
    },
    useMutableSource: uh,
    useSyncExternalStore: ch,
    useId: Ch,
    unstable_isNewReconciler: !1
};
function at(t, e) {
    if (t && t.defaultProps) {
        e = K({}, e),
        t = t.defaultProps;
        for (var n in t)
            e[n] === void 0 && (e[n] = t[n]);
        return e
    }
    return e
}
function Zl(t, e, n, i) {
    e = t.memoizedState,
    n = n(i, e),
    n = n == null ? e : K({}, e, n),
    t.memoizedState = n,
    t.lanes === 0 && (t.updateQueue.baseState = n)
}
var ys = {
    isMounted: function(t) {
        return (t = t._reactInternals) ? qn(t) === t : !1
    },
    enqueueSetState: function(t, e, n) {
        t = t._reactInternals;
        var i = be()
          , r = sn(t)
          , o = Nt(i, r);
        o.payload = e,
        n != null && (o.callback = n),
        e = rn(t, o, r),
        e !== null && (yt(e, t, r, i),
        Eo(e, t, r))
    },
    enqueueReplaceState: function(t, e, n) {
        t = t._reactInternals;
        var i = be()
          , r = sn(t)
          , o = Nt(i, r);
        o.tag = 1,
        o.payload = e,
        n != null && (o.callback = n),
        e = rn(t, o, r),
        e !== null && (yt(e, t, r, i),
        Eo(e, t, r))
    },
    enqueueForceUpdate: function(t, e) {
        t = t._reactInternals;
        var n = be()
          , i = sn(t)
          , r = Nt(n, i);
        r.tag = 2,
        e != null && (r.callback = e),
        e = rn(t, r, i),
        e !== null && (yt(e, t, i, n),
        Eo(e, t, i))
    }
};
function mc(t, e, n, i, r, o, s) {
    return t = t.stateNode,
    typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(i, o, s) : e.prototype && e.prototype.isPureReactComponent ? !Cr(n, i) || !Cr(r, o) : !0
}
function bh(t, e, n) {
    var i = !1
      , r = cn
      , o = e.contextType;
    return typeof o == "object" && o !== null ? o = nt(o) : (r = Fe(e) ? Nn : _e.current,
    i = e.contextTypes,
    o = (i = i != null) ? Pi(t, r) : cn),
    e = new e(n,o),
    t.memoizedState = e.state !== null && e.state !== void 0 ? e.state : null,
    e.updater = ys,
    t.stateNode = e,
    e._reactInternals = t,
    i && (t = t.stateNode,
    t.__reactInternalMemoizedUnmaskedChildContext = r,
    t.__reactInternalMemoizedMaskedChildContext = o),
    e
}
function yc(t, e, n, i) {
    t = e.state,
    typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(n, i),
    typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(n, i),
    e.state !== t && ys.enqueueReplaceState(e, e.state, null)
}
function Jl(t, e, n, i) {
    var r = t.stateNode;
    r.props = n,
    r.state = t.memoizedState,
    r.refs = {},
    Ka(t);
    var o = e.contextType;
    typeof o == "object" && o !== null ? r.context = nt(o) : (o = Fe(e) ? Nn : _e.current,
    r.context = Pi(t, o)),
    r.state = t.memoizedState,
    o = e.getDerivedStateFromProps,
    typeof o == "function" && (Zl(t, e, o, n),
    r.state = t.memoizedState),
    typeof e.getDerivedStateFromProps == "function" || typeof r.getSnapshotBeforeUpdate == "function" || typeof r.UNSAFE_componentWillMount != "function" && typeof r.componentWillMount != "function" || (e = r.state,
    typeof r.componentWillMount == "function" && r.componentWillMount(),
    typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount(),
    e !== r.state && ys.enqueueReplaceState(r, r.state, null),
    Yo(t, n, r, i),
    r.state = t.memoizedState),
    typeof r.componentDidMount == "function" && (t.flags |= 4194308)
}
function Ri(t, e) {
    try {
        var n = ""
          , i = e;
        do
            n += pm(i),
            i = i.return;
        while (i);
        var r = n
    } catch (o) {
        r = `
Error generating stack: ` + o.message + `
` + o.stack
    }
    return {
        value: t,
        source: e,
        stack: r,
        digest: null
    }
}
function Js(t, e, n) {
    return {
        value: t,
        source: null,
        stack: n ?? null,
        digest: e ?? null
    }
}
function ea(t, e) {
    try {
        console.error(e.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var By = typeof WeakMap == "function" ? WeakMap : Map;
function Mh(t, e, n) {
    n = Nt(-1, n),
    n.tag = 3,
    n.payload = {
        element: null
    };
    var i = e.value;
    return n.callback = function() {
        es || (es = !0,
        ca = i),
        ea(t, e)
    }
    ,
    n
}
function Oh(t, e, n) {
    n = Nt(-1, n),
    n.tag = 3;
    var i = t.type.getDerivedStateFromError;
    if (typeof i == "function") {
        var r = e.value;
        n.payload = function() {
            return i(r)
        }
        ,
        n.callback = function() {
            ea(t, e)
        }
    }
    var o = t.stateNode;
    return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
        ea(t, e),
        typeof i != "function" && (on === null ? on = new Set([this]) : on.add(this));
        var s = e.stack;
        this.componentDidCatch(e.value, {
            componentStack: s !== null ? s : ""
        })
    }
    ),
    n
}
function gc(t, e, n) {
    var i = t.pingCache;
    if (i === null) {
        i = t.pingCache = new By;
        var r = new Set;
        i.set(e, r)
    } else
        r = i.get(e),
        r === void 0 && (r = new Set,
        i.set(e, r));
    r.has(n) || (r.add(n),
    t = tg.bind(null, t, e, n),
    e.then(t, t))
}
function vc(t) {
    do {
        var e;
        if ((e = t.tag === 13) && (e = t.memoizedState,
        e = e !== null ? e.dehydrated !== null : !0),
        e)
            return t;
        t = t.return
    } while (t !== null);
    return null
}
function wc(t, e, n, i, r) {
    return t.mode & 1 ? (t.flags |= 65536,
    t.lanes = r,
    t) : (t === e ? t.flags |= 65536 : (t.flags |= 128,
    n.flags |= 131072,
    n.flags &= -52805,
    n.tag === 1 && (n.alternate === null ? n.tag = 17 : (e = Nt(-1, 1),
    e.tag = 2,
    rn(n, e, 1))),
    n.lanes |= 1),
    t)
}
var Uy = Ut.ReactCurrentOwner
  , Ie = !1;
function ze(t, e, n, i) {
    e.child = t === null ? oh(e, null, n, i) : Mi(e, t.child, n, i)
}
function xc(t, e, n, i, r) {
    n = n.render;
    var o = e.ref;
    return wi(e, r),
    i = tu(t, e, n, i, o, r),
    n = nu(),
    t !== null && !Ie ? (e.updateQueue = t.updateQueue,
    e.flags &= -2053,
    t.lanes &= ~r,
    Bt(t, e, r)) : (Q && n && Ha(e),
    e.flags |= 1,
    ze(t, e, i, r),
    e.child)
}
function kc(t, e, n, i, r) {
    if (t === null) {
        var o = n.type;
        return typeof o == "function" && !du(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (e.tag = 15,
        e.type = o,
        Rh(t, e, o, i, r)) : (t = Ro(n.type, null, i, e, e.mode, r),
        t.ref = e.ref,
        t.return = e,
        e.child = t)
    }
    if (o = t.child,
    !(t.lanes & r)) {
        var s = o.memoizedProps;
        if (n = n.compare,
        n = n !== null ? n : Cr,
        n(s, i) && t.ref === e.ref)
            return Bt(t, e, r)
    }
    return e.flags |= 1,
    t = ln(o, i),
    t.ref = e.ref,
    t.return = e,
    e.child = t
}
function Rh(t, e, n, i, r) {
    if (t !== null) {
        var o = t.memoizedProps;
        if (Cr(o, i) && t.ref === e.ref)
            if (Ie = !1,
            e.pendingProps = i = o,
            (t.lanes & r) !== 0)
                t.flags & 131072 && (Ie = !0);
            else
                return e.lanes = t.lanes,
                Bt(t, e, r)
    }
    return ta(t, e, n, i, r)
}
function Th(t, e, n) {
    var i = e.pendingProps
      , r = i.children
      , o = t !== null ? t.memoizedState : null;
    if (i.mode === "hidden")
        if (!(e.mode & 1))
            e.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            U(fi, Ae),
            Ae |= n;
        else {
            if (!(n & 1073741824))
                return t = o !== null ? o.baseLanes | n : n,
                e.lanes = e.childLanes = 1073741824,
                e.memoizedState = {
                    baseLanes: t,
                    cachePool: null,
                    transitions: null
                },
                e.updateQueue = null,
                U(fi, Ae),
                Ae |= t,
                null;
            e.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            i = o !== null ? o.baseLanes : n,
            U(fi, Ae),
            Ae |= i
        }
    else
        o !== null ? (i = o.baseLanes | n,
        e.memoizedState = null) : i = n,
        U(fi, Ae),
        Ae |= i;
    return ze(t, e, r, n),
    e.child
}
function Lh(t, e) {
    var n = e.ref;
    (t === null && n !== null || t !== null && t.ref !== n) && (e.flags |= 512,
    e.flags |= 2097152)
}
function ta(t, e, n, i, r) {
    var o = Fe(n) ? Nn : _e.current;
    return o = Pi(e, o),
    wi(e, r),
    n = tu(t, e, n, i, o, r),
    i = nu(),
    t !== null && !Ie ? (e.updateQueue = t.updateQueue,
    e.flags &= -2053,
    t.lanes &= ~r,
    Bt(t, e, r)) : (Q && i && Ha(e),
    e.flags |= 1,
    ze(t, e, n, r),
    e.child)
}
function _c(t, e, n, i, r) {
    if (Fe(n)) {
        var o = !0;
        Vo(e)
    } else
        o = !1;
    if (wi(e, r),
    e.stateNode === null)
        bo(t, e),
        bh(e, n, i),
        Jl(e, n, i, r),
        i = !0;
    else if (t === null) {
        var s = e.stateNode
          , l = e.memoizedProps;
        s.props = l;
        var a = s.context
          , u = n.contextType;
        typeof u == "object" && u !== null ? u = nt(u) : (u = Fe(n) ? Nn : _e.current,
        u = Pi(e, u));
        var c = n.getDerivedStateFromProps
          , f = typeof c == "function" || typeof s.getSnapshotBeforeUpdate == "function";
        f || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (l !== i || a !== u) && yc(e, s, i, u),
        qt = !1;
        var d = e.memoizedState;
        s.state = d,
        Yo(e, i, s, r),
        a = e.memoizedState,
        l !== i || d !== a || Ne.current || qt ? (typeof c == "function" && (Zl(e, n, c, i),
        a = e.memoizedState),
        (l = qt || mc(e, n, l, i, d, a, u)) ? (f || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(),
        typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()),
        typeof s.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (e.flags |= 4194308),
        e.memoizedProps = i,
        e.memoizedState = a),
        s.props = i,
        s.state = a,
        s.context = u,
        i = l) : (typeof s.componentDidMount == "function" && (e.flags |= 4194308),
        i = !1)
    } else {
        s = e.stateNode,
        lh(t, e),
        l = e.memoizedProps,
        u = e.type === e.elementType ? l : at(e.type, l),
        s.props = u,
        f = e.pendingProps,
        d = s.context,
        a = n.contextType,
        typeof a == "object" && a !== null ? a = nt(a) : (a = Fe(n) ? Nn : _e.current,
        a = Pi(e, a));
        var m = n.getDerivedStateFromProps;
        (c = typeof m == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (l !== f || d !== a) && yc(e, s, i, a),
        qt = !1,
        d = e.memoizedState,
        s.state = d,
        Yo(e, i, s, r);
        var v = e.memoizedState;
        l !== f || d !== v || Ne.current || qt ? (typeof m == "function" && (Zl(e, n, m, i),
        v = e.memoizedState),
        (u = qt || mc(e, n, u, i, d, v, a) || !1) ? (c || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, v, a),
        typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, v, a)),
        typeof s.componentDidUpdate == "function" && (e.flags |= 4),
        typeof s.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || l === t.memoizedProps && d === t.memoizedState || (e.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" || l === t.memoizedProps && d === t.memoizedState || (e.flags |= 1024),
        e.memoizedProps = i,
        e.memoizedState = v),
        s.props = i,
        s.state = v,
        s.context = a,
        i = u) : (typeof s.componentDidUpdate != "function" || l === t.memoizedProps && d === t.memoizedState || (e.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" || l === t.memoizedProps && d === t.memoizedState || (e.flags |= 1024),
        i = !1)
    }
    return na(t, e, n, i, o, r)
}
function na(t, e, n, i, r, o) {
    Lh(t, e);
    var s = (e.flags & 128) !== 0;
    if (!i && !s)
        return r && lc(e, n, !1),
        Bt(t, e, o);
    i = e.stateNode,
    Uy.current = e;
    var l = s && typeof n.getDerivedStateFromError != "function" ? null : i.render();
    return e.flags |= 1,
    t !== null && s ? (e.child = Mi(e, t.child, null, o),
    e.child = Mi(e, null, l, o)) : ze(t, e, l, o),
    e.memoizedState = i.state,
    r && lc(e, n, !0),
    e.child
}
function Ih(t) {
    var e = t.stateNode;
    e.pendingContext ? sc(t, e.pendingContext, e.pendingContext !== e.context) : e.context && sc(t, e.context, !1),
    Xa(t, e.containerInfo)
}
function Sc(t, e, n, i, r) {
    return bi(),
    Wa(r),
    e.flags |= 256,
    ze(t, e, n, i),
    e.child
}
var ia = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};
function ra(t) {
    return {
        baseLanes: t,
        cachePool: null,
        transitions: null
    }
}
function Dh(t, e, n) {
    var i = e.pendingProps, r = G.current, o = !1, s = (e.flags & 128) !== 0, l;
    if ((l = s) || (l = t !== null && t.memoizedState === null ? !1 : (r & 2) !== 0),
    l ? (o = !0,
    e.flags &= -129) : (t === null || t.memoizedState !== null) && (r |= 1),
    U(G, r & 1),
    t === null)
        return Kl(e),
        t = e.memoizedState,
        t !== null && (t = t.dehydrated,
        t !== null) ? (e.mode & 1 ? t.data === "$!" ? e.lanes = 8 : e.lanes = 1073741824 : e.lanes = 1,
        null) : (s = i.children,
        t = i.fallback,
        o ? (i = e.mode,
        o = e.child,
        s = {
            mode: "hidden",
            children: s
        },
        !(i & 1) && o !== null ? (o.childLanes = 0,
        o.pendingProps = s) : o = ws(s, i, 0, null),
        t = In(t, i, n, null),
        o.return = e,
        t.return = e,
        o.sibling = t,
        e.child = o,
        e.child.memoizedState = ra(n),
        e.memoizedState = ia,
        t) : ou(e, s));
    if (r = t.memoizedState,
    r !== null && (l = r.dehydrated,
    l !== null))
        return Hy(t, e, s, i, l, r, n);
    if (o) {
        o = i.fallback,
        s = e.mode,
        r = t.child,
        l = r.sibling;
        var a = {
            mode: "hidden",
            children: i.children
        };
        return !(s & 1) && e.child !== r ? (i = e.child,
        i.childLanes = 0,
        i.pendingProps = a,
        e.deletions = null) : (i = ln(r, a),
        i.subtreeFlags = r.subtreeFlags & 14680064),
        l !== null ? o = ln(l, o) : (o = In(o, s, n, null),
        o.flags |= 2),
        o.return = e,
        i.return = e,
        i.sibling = o,
        e.child = i,
        i = o,
        o = e.child,
        s = t.child.memoizedState,
        s = s === null ? ra(n) : {
            baseLanes: s.baseLanes | n,
            cachePool: null,
            transitions: s.transitions
        },
        o.memoizedState = s,
        o.childLanes = t.childLanes & ~n,
        e.memoizedState = ia,
        i
    }
    return o = t.child,
    t = o.sibling,
    i = ln(o, {
        mode: "visible",
        children: i.children
    }),
    !(e.mode & 1) && (i.lanes = n),
    i.return = e,
    i.sibling = null,
    t !== null && (n = e.deletions,
    n === null ? (e.deletions = [t],
    e.flags |= 16) : n.push(t)),
    e.child = i,
    e.memoizedState = null,
    i
}
function ou(t, e) {
    return e = ws({
        mode: "visible",
        children: e
    }, t.mode, 0, null),
    e.return = t,
    t.child = e
}
function ro(t, e, n, i) {
    return i !== null && Wa(i),
    Mi(e, t.child, null, n),
    t = ou(e, e.pendingProps.children),
    t.flags |= 2,
    e.memoizedState = null,
    t
}
function Hy(t, e, n, i, r, o, s) {
    if (n)
        return e.flags & 256 ? (e.flags &= -257,
        i = Js(Error(S(422))),
        ro(t, e, s, i)) : e.memoizedState !== null ? (e.child = t.child,
        e.flags |= 128,
        null) : (o = i.fallback,
        r = e.mode,
        i = ws({
            mode: "visible",
            children: i.children
        }, r, 0, null),
        o = In(o, r, s, null),
        o.flags |= 2,
        i.return = e,
        o.return = e,
        i.sibling = o,
        e.child = i,
        e.mode & 1 && Mi(e, t.child, null, s),
        e.child.memoizedState = ra(s),
        e.memoizedState = ia,
        o);
    if (!(e.mode & 1))
        return ro(t, e, s, null);
    if (r.data === "$!") {
        if (i = r.nextSibling && r.nextSibling.dataset,
        i)
            var l = i.dgst;
        return i = l,
        o = Error(S(419)),
        i = Js(o, i, void 0),
        ro(t, e, s, i)
    }
    if (l = (s & t.childLanes) !== 0,
    Ie || l) {
        if (i = ce,
        i !== null) {
            switch (s & -s) {
            case 4:
                r = 2;
                break;
            case 16:
                r = 8;
                break;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                r = 32;
                break;
            case 536870912:
                r = 268435456;
                break;
            default:
                r = 0
            }
            r = r & (i.suspendedLanes | s) ? 0 : r,
            r !== 0 && r !== o.retryLane && (o.retryLane = r,
            At(t, r),
            yt(i, t, r, -1))
        }
        return fu(),
        i = Js(Error(S(421))),
        ro(t, e, s, i)
    }
    return r.data === "$?" ? (e.flags |= 128,
    e.child = t.child,
    e = ng.bind(null, t),
    r._reactRetry = e,
    null) : (t = o.treeContext,
    Be = nn(r.nextSibling),
    He = e,
    Q = !0,
    ft = null,
    t !== null && (Xe[Ze++] = Lt,
    Xe[Ze++] = It,
    Xe[Ze++] = Fn,
    Lt = t.id,
    It = t.overflow,
    Fn = e),
    e = ou(e, i.children),
    e.flags |= 4096,
    e)
}
function Cc(t, e, n) {
    t.lanes |= e;
    var i = t.alternate;
    i !== null && (i.lanes |= e),
    Xl(t.return, e, n)
}
function el(t, e, n, i, r) {
    var o = t.memoizedState;
    o === null ? t.memoizedState = {
        isBackwards: e,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: n,
        tailMode: r
    } : (o.isBackwards = e,
    o.rendering = null,
    o.renderingStartTime = 0,
    o.last = i,
    o.tail = n,
    o.tailMode = r)
}
function Nh(t, e, n) {
    var i = e.pendingProps
      , r = i.revealOrder
      , o = i.tail;
    if (ze(t, e, i.children, n),
    i = G.current,
    i & 2)
        i = i & 1 | 2,
        e.flags |= 128;
    else {
        if (t !== null && t.flags & 128)
            e: for (t = e.child; t !== null; ) {
                if (t.tag === 13)
                    t.memoizedState !== null && Cc(t, n, e);
                else if (t.tag === 19)
                    Cc(t, n, e);
                else if (t.child !== null) {
                    t.child.return = t,
                    t = t.child;
                    continue
                }
                if (t === e)
                    break e;
                for (; t.sibling === null; ) {
                    if (t.return === null || t.return === e)
                        break e;
                    t = t.return
                }
                t.sibling.return = t.return,
                t = t.sibling
            }
        i &= 1
    }
    if (U(G, i),
    !(e.mode & 1))
        e.memoizedState = null;
    else
        switch (r) {
        case "forwards":
            for (n = e.child,
            r = null; n !== null; )
                t = n.alternate,
                t !== null && Ko(t) === null && (r = n),
                n = n.sibling;
            n = r,
            n === null ? (r = e.child,
            e.child = null) : (r = n.sibling,
            n.sibling = null),
            el(e, !1, r, n, o);
            break;
        case "backwards":
            for (n = null,
            r = e.child,
            e.child = null; r !== null; ) {
                if (t = r.alternate,
                t !== null && Ko(t) === null) {
                    e.child = r;
                    break
                }
                t = r.sibling,
                r.sibling = n,
                n = r,
                r = t
            }
            el(e, !0, n, null, o);
            break;
        case "together":
            el(e, !1, null, null, void 0);
            break;
        default:
            e.memoizedState = null
        }
    return e.child
}
function bo(t, e) {
    !(e.mode & 1) && t !== null && (t.alternate = null,
    e.alternate = null,
    e.flags |= 2)
}
function Bt(t, e, n) {
    if (t !== null && (e.dependencies = t.dependencies),
    $n |= e.lanes,
    !(n & e.childLanes))
        return null;
    if (t !== null && e.child !== t.child)
        throw Error(S(153));
    if (e.child !== null) {
        for (t = e.child,
        n = ln(t, t.pendingProps),
        e.child = n,
        n.return = e; t.sibling !== null; )
            t = t.sibling,
            n = n.sibling = ln(t, t.pendingProps),
            n.return = e;
        n.sibling = null
    }
    return e.child
}
function Vy(t, e, n) {
    switch (e.tag) {
    case 3:
        Ih(e),
        bi();
        break;
    case 5:
        ah(e);
        break;
    case 1:
        Fe(e.type) && Vo(e);
        break;
    case 4:
        Xa(e, e.stateNode.containerInfo);
        break;
    case 10:
        var i = e.type._context
          , r = e.memoizedProps.value;
        U(Qo, i._currentValue),
        i._currentValue = r;
        break;
    case 13:
        if (i = e.memoizedState,
        i !== null)
            return i.dehydrated !== null ? (U(G, G.current & 1),
            e.flags |= 128,
            null) : n & e.child.childLanes ? Dh(t, e, n) : (U(G, G.current & 1),
            t = Bt(t, e, n),
            t !== null ? t.sibling : null);
        U(G, G.current & 1);
        break;
    case 19:
        if (i = (n & e.childLanes) !== 0,
        t.flags & 128) {
            if (i)
                return Nh(t, e, n);
            e.flags |= 128
        }
        if (r = e.memoizedState,
        r !== null && (r.rendering = null,
        r.tail = null,
        r.lastEffect = null),
        U(G, G.current),
        i)
            break;
        return null;
    case 22:
    case 23:
        return e.lanes = 0,
        Th(t, e, n)
    }
    return Bt(t, e, n)
}
var Fh, oa, jh, $h;
Fh = function(t, e) {
    for (var n = e.child; n !== null; ) {
        if (n.tag === 5 || n.tag === 6)
            t.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n,
            n = n.child;
            continue
        }
        if (n === e)
            break;
        for (; n.sibling === null; ) {
            if (n.return === null || n.return === e)
                return;
            n = n.return
        }
        n.sibling.return = n.return,
        n = n.sibling
    }
}
;
oa = function() {}
;
jh = function(t, e, n, i) {
    var r = t.memoizedProps;
    if (r !== i) {
        t = e.stateNode,
        bn(bt.current);
        var o = null;
        switch (n) {
        case "input":
            r = Pl(t, r),
            i = Pl(t, i),
            o = [];
            break;
        case "select":
            r = K({}, r, {
                value: void 0
            }),
            i = K({}, i, {
                value: void 0
            }),
            o = [];
            break;
        case "textarea":
            r = Ol(t, r),
            i = Ol(t, i),
            o = [];
            break;
        default:
            typeof r.onClick != "function" && typeof i.onClick == "function" && (t.onclick = Uo)
        }
        Tl(n, i);
        var s;
        n = null;
        for (u in r)
            if (!i.hasOwnProperty(u) && r.hasOwnProperty(u) && r[u] != null)
                if (u === "style") {
                    var l = r[u];
                    for (s in l)
                        l.hasOwnProperty(s) && (n || (n = {}),
                        n[s] = "")
                } else
                    u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (gr.hasOwnProperty(u) ? o || (o = []) : (o = o || []).push(u, null));
        for (u in i) {
            var a = i[u];
            if (l = r != null ? r[u] : void 0,
            i.hasOwnProperty(u) && a !== l && (a != null || l != null))
                if (u === "style")
                    if (l) {
                        for (s in l)
                            !l.hasOwnProperty(s) || a && a.hasOwnProperty(s) || (n || (n = {}),
                            n[s] = "");
                        for (s in a)
                            a.hasOwnProperty(s) && l[s] !== a[s] && (n || (n = {}),
                            n[s] = a[s])
                    } else
                        n || (o || (o = []),
                        o.push(u, n)),
                        n = a;
                else
                    u === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0,
                    l = l ? l.__html : void 0,
                    a != null && l !== a && (o = o || []).push(u, a)) : u === "children" ? typeof a != "string" && typeof a != "number" || (o = o || []).push(u, "" + a) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (gr.hasOwnProperty(u) ? (a != null && u === "onScroll" && H("scroll", t),
                    o || l === a || (o = [])) : (o = o || []).push(u, a))
        }
        n && (o = o || []).push("style", n);
        var u = o;
        (e.updateQueue = u) && (e.flags |= 4)
    }
}
;
$h = function(t, e, n, i) {
    n !== i && (e.flags |= 4)
}
;
function Yi(t, e) {
    if (!Q)
        switch (t.tailMode) {
        case "hidden":
            e = t.tail;
            for (var n = null; e !== null; )
                e.alternate !== null && (n = e),
                e = e.sibling;
            n === null ? t.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = t.tail;
            for (var i = null; n !== null; )
                n.alternate !== null && (i = n),
                n = n.sibling;
            i === null ? e || t.tail === null ? t.tail = null : t.tail.sibling = null : i.sibling = null
        }
}
function ve(t) {
    var e = t.alternate !== null && t.alternate.child === t.child
      , n = 0
      , i = 0;
    if (e)
        for (var r = t.child; r !== null; )
            n |= r.lanes | r.childLanes,
            i |= r.subtreeFlags & 14680064,
            i |= r.flags & 14680064,
            r.return = t,
            r = r.sibling;
    else
        for (r = t.child; r !== null; )
            n |= r.lanes | r.childLanes,
            i |= r.subtreeFlags,
            i |= r.flags,
            r.return = t,
            r = r.sibling;
    return t.subtreeFlags |= i,
    t.childLanes = n,
    e
}
function Wy(t, e, n) {
    var i = e.pendingProps;
    switch (Va(e),
    e.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
        return ve(e),
        null;
    case 1:
        return Fe(e.type) && Ho(),
        ve(e),
        null;
    case 3:
        return i = e.stateNode,
        Oi(),
        V(Ne),
        V(_e),
        Ja(),
        i.pendingContext && (i.context = i.pendingContext,
        i.pendingContext = null),
        (t === null || t.child === null) && (no(e) ? e.flags |= 4 : t === null || t.memoizedState.isDehydrated && !(e.flags & 256) || (e.flags |= 1024,
        ft !== null && (ha(ft),
        ft = null))),
        oa(t, e),
        ve(e),
        null;
    case 5:
        Za(e);
        var r = bn(Mr.current);
        if (n = e.type,
        t !== null && e.stateNode != null)
            jh(t, e, n, i, r),
            t.ref !== e.ref && (e.flags |= 512,
            e.flags |= 2097152);
        else {
            if (!i) {
                if (e.stateNode === null)
                    throw Error(S(166));
                return ve(e),
                null
            }
            if (t = bn(bt.current),
            no(e)) {
                i = e.stateNode,
                n = e.type;
                var o = e.memoizedProps;
                switch (i[Et] = e,
                i[Pr] = o,
                t = (e.mode & 1) !== 0,
                n) {
                case "dialog":
                    H("cancel", i),
                    H("close", i);
                    break;
                case "iframe":
                case "object":
                case "embed":
                    H("load", i);
                    break;
                case "video":
                case "audio":
                    for (r = 0; r < rr.length; r++)
                        H(rr[r], i);
                    break;
                case "source":
                    H("error", i);
                    break;
                case "img":
                case "image":
                case "link":
                    H("error", i),
                    H("load", i);
                    break;
                case "details":
                    H("toggle", i);
                    break;
                case "input":
                    Lu(i, o),
                    H("invalid", i);
                    break;
                case "select":
                    i._wrapperState = {
                        wasMultiple: !!o.multiple
                    },
                    H("invalid", i);
                    break;
                case "textarea":
                    Du(i, o),
                    H("invalid", i)
                }
                Tl(n, o),
                r = null;
                for (var s in o)
                    if (o.hasOwnProperty(s)) {
                        var l = o[s];
                        s === "children" ? typeof l == "string" ? i.textContent !== l && (o.suppressHydrationWarning !== !0 && to(i.textContent, l, t),
                        r = ["children", l]) : typeof l == "number" && i.textContent !== "" + l && (o.suppressHydrationWarning !== !0 && to(i.textContent, l, t),
                        r = ["children", "" + l]) : gr.hasOwnProperty(s) && l != null && s === "onScroll" && H("scroll", i)
                    }
                switch (n) {
                case "input":
                    Qr(i),
                    Iu(i, o, !0);
                    break;
                case "textarea":
                    Qr(i),
                    Nu(i);
                    break;
                case "select":
                case "option":
                    break;
                default:
                    typeof o.onClick == "function" && (i.onclick = Uo)
                }
                i = r,
                e.updateQueue = i,
                i !== null && (e.flags |= 4)
            } else {
                s = r.nodeType === 9 ? r : r.ownerDocument,
                t === "http://www.w3.org/1999/xhtml" && (t = hd(n)),
                t === "http://www.w3.org/1999/xhtml" ? n === "script" ? (t = s.createElement("div"),
                t.innerHTML = "<script><\/script>",
                t = t.removeChild(t.firstChild)) : typeof i.is == "string" ? t = s.createElement(n, {
                    is: i.is
                }) : (t = s.createElement(n),
                n === "select" && (s = t,
                i.multiple ? s.multiple = !0 : i.size && (s.size = i.size))) : t = s.createElementNS(t, n),
                t[Et] = e,
                t[Pr] = i,
                Fh(t, e, !1, !1),
                e.stateNode = t;
                e: {
                    switch (s = Ll(n, i),
                    n) {
                    case "dialog":
                        H("cancel", t),
                        H("close", t),
                        r = i;
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        H("load", t),
                        r = i;
                        break;
                    case "video":
                    case "audio":
                        for (r = 0; r < rr.length; r++)
                            H(rr[r], t);
                        r = i;
                        break;
                    case "source":
                        H("error", t),
                        r = i;
                        break;
                    case "img":
                    case "image":
                    case "link":
                        H("error", t),
                        H("load", t),
                        r = i;
                        break;
                    case "details":
                        H("toggle", t),
                        r = i;
                        break;
                    case "input":
                        Lu(t, i),
                        r = Pl(t, i),
                        H("invalid", t);
                        break;
                    case "option":
                        r = i;
                        break;
                    case "select":
                        t._wrapperState = {
                            wasMultiple: !!i.multiple
                        },
                        r = K({}, i, {
                            value: void 0
                        }),
                        H("invalid", t);
                        break;
                    case "textarea":
                        Du(t, i),
                        r = Ol(t, i),
                        H("invalid", t);
                        break;
                    default:
                        r = i
                    }
                    Tl(n, r),
                    l = r;
                    for (o in l)
                        if (l.hasOwnProperty(o)) {
                            var a = l[o];
                            o === "style" ? yd(t, a) : o === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0,
                            a != null && pd(t, a)) : o === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && vr(t, a) : typeof a == "number" && vr(t, "" + a) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (gr.hasOwnProperty(o) ? a != null && o === "onScroll" && H("scroll", t) : a != null && Ma(t, o, a, s))
                        }
                    switch (n) {
                    case "input":
                        Qr(t),
                        Iu(t, i, !1);
                        break;
                    case "textarea":
                        Qr(t),
                        Nu(t);
                        break;
                    case "option":
                        i.value != null && t.setAttribute("value", "" + un(i.value));
                        break;
                    case "select":
                        t.multiple = !!i.multiple,
                        o = i.value,
                        o != null ? mi(t, !!i.multiple, o, !1) : i.defaultValue != null && mi(t, !!i.multiple, i.defaultValue, !0);
                        break;
                    default:
                        typeof r.onClick == "function" && (t.onclick = Uo)
                    }
                    switch (n) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        i = !!i.autoFocus;
                        break e;
                    case "img":
                        i = !0;
                        break e;
                    default:
                        i = !1
                    }
                }
                i && (e.flags |= 4)
            }
            e.ref !== null && (e.flags |= 512,
            e.flags |= 2097152)
        }
        return ve(e),
        null;
    case 6:
        if (t && e.stateNode != null)
            $h(t, e, t.memoizedProps, i);
        else {
            if (typeof i != "string" && e.stateNode === null)
                throw Error(S(166));
            if (n = bn(Mr.current),
            bn(bt.current),
            no(e)) {
                if (i = e.stateNode,
                n = e.memoizedProps,
                i[Et] = e,
                (o = i.nodeValue !== n) && (t = He,
                t !== null))
                    switch (t.tag) {
                    case 3:
                        to(i.nodeValue, n, (t.mode & 1) !== 0);
                        break;
                    case 5:
                        t.memoizedProps.suppressHydrationWarning !== !0 && to(i.nodeValue, n, (t.mode & 1) !== 0)
                    }
                o && (e.flags |= 4)
            } else
                i = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(i),
                i[Et] = e,
                e.stateNode = i
        }
        return ve(e),
        null;
    case 13:
        if (V(G),
        i = e.memoizedState,
        t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
            if (Q && Be !== null && e.mode & 1 && !(e.flags & 128))
                ih(),
                bi(),
                e.flags |= 98560,
                o = !1;
            else if (o = no(e),
            i !== null && i.dehydrated !== null) {
                if (t === null) {
                    if (!o)
                        throw Error(S(318));
                    if (o = e.memoizedState,
                    o = o !== null ? o.dehydrated : null,
                    !o)
                        throw Error(S(317));
                    o[Et] = e
                } else
                    bi(),
                    !(e.flags & 128) && (e.memoizedState = null),
                    e.flags |= 4;
                ve(e),
                o = !1
            } else
                ft !== null && (ha(ft),
                ft = null),
                o = !0;
            if (!o)
                return e.flags & 65536 ? e : null
        }
        return e.flags & 128 ? (e.lanes = n,
        e) : (i = i !== null,
        i !== (t !== null && t.memoizedState !== null) && i && (e.child.flags |= 8192,
        e.mode & 1 && (t === null || G.current & 1 ? ae === 0 && (ae = 3) : fu())),
        e.updateQueue !== null && (e.flags |= 4),
        ve(e),
        null);
    case 4:
        return Oi(),
        oa(t, e),
        t === null && Er(e.stateNode.containerInfo),
        ve(e),
        null;
    case 10:
        return Ga(e.type._context),
        ve(e),
        null;
    case 17:
        return Fe(e.type) && Ho(),
        ve(e),
        null;
    case 19:
        if (V(G),
        o = e.memoizedState,
        o === null)
            return ve(e),
            null;
        if (i = (e.flags & 128) !== 0,
        s = o.rendering,
        s === null)
            if (i)
                Yi(o, !1);
            else {
                if (ae !== 0 || t !== null && t.flags & 128)
                    for (t = e.child; t !== null; ) {
                        if (s = Ko(t),
                        s !== null) {
                            for (e.flags |= 128,
                            Yi(o, !1),
                            i = s.updateQueue,
                            i !== null && (e.updateQueue = i,
                            e.flags |= 4),
                            e.subtreeFlags = 0,
                            i = n,
                            n = e.child; n !== null; )
                                o = n,
                                t = i,
                                o.flags &= 14680066,
                                s = o.alternate,
                                s === null ? (o.childLanes = 0,
                                o.lanes = t,
                                o.child = null,
                                o.subtreeFlags = 0,
                                o.memoizedProps = null,
                                o.memoizedState = null,
                                o.updateQueue = null,
                                o.dependencies = null,
                                o.stateNode = null) : (o.childLanes = s.childLanes,
                                o.lanes = s.lanes,
                                o.child = s.child,
                                o.subtreeFlags = 0,
                                o.deletions = null,
                                o.memoizedProps = s.memoizedProps,
                                o.memoizedState = s.memoizedState,
                                o.updateQueue = s.updateQueue,
                                o.type = s.type,
                                t = s.dependencies,
                                o.dependencies = t === null ? null : {
                                    lanes: t.lanes,
                                    firstContext: t.firstContext
                                }),
                                n = n.sibling;
                            return U(G, G.current & 1 | 2),
                            e.child
                        }
                        t = t.sibling
                    }
                o.tail !== null && ne() > Ti && (e.flags |= 128,
                i = !0,
                Yi(o, !1),
                e.lanes = 4194304)
            }
        else {
            if (!i)
                if (t = Ko(s),
                t !== null) {
                    if (e.flags |= 128,
                    i = !0,
                    n = t.updateQueue,
                    n !== null && (e.updateQueue = n,
                    e.flags |= 4),
                    Yi(o, !0),
                    o.tail === null && o.tailMode === "hidden" && !s.alternate && !Q)
                        return ve(e),
                        null
                } else
                    2 * ne() - o.renderingStartTime > Ti && n !== 1073741824 && (e.flags |= 128,
                    i = !0,
                    Yi(o, !1),
                    e.lanes = 4194304);
            o.isBackwards ? (s.sibling = e.child,
            e.child = s) : (n = o.last,
            n !== null ? n.sibling = s : e.child = s,
            o.last = s)
        }
        return o.tail !== null ? (e = o.tail,
        o.rendering = e,
        o.tail = e.sibling,
        o.renderingStartTime = ne(),
        e.sibling = null,
        n = G.current,
        U(G, i ? n & 1 | 2 : n & 1),
        e) : (ve(e),
        null);
    case 22:
    case 23:
        return cu(),
        i = e.memoizedState !== null,
        t !== null && t.memoizedState !== null !== i && (e.flags |= 8192),
        i && e.mode & 1 ? Ae & 1073741824 && (ve(e),
        e.subtreeFlags & 6 && (e.flags |= 8192)) : ve(e),
        null;
    case 24:
        return null;
    case 25:
        return null
    }
    throw Error(S(156, e.tag))
}
function qy(t, e) {
    switch (Va(e),
    e.tag) {
    case 1:
        return Fe(e.type) && Ho(),
        t = e.flags,
        t & 65536 ? (e.flags = t & -65537 | 128,
        e) : null;
    case 3:
        return Oi(),
        V(Ne),
        V(_e),
        Ja(),
        t = e.flags,
        t & 65536 && !(t & 128) ? (e.flags = t & -65537 | 128,
        e) : null;
    case 5:
        return Za(e),
        null;
    case 13:
        if (V(G),
        t = e.memoizedState,
        t !== null && t.dehydrated !== null) {
            if (e.alternate === null)
                throw Error(S(340));
            bi()
        }
        return t = e.flags,
        t & 65536 ? (e.flags = t & -65537 | 128,
        e) : null;
    case 19:
        return V(G),
        null;
    case 4:
        return Oi(),
        null;
    case 10:
        return Ga(e.type._context),
        null;
    case 22:
    case 23:
        return cu(),
        null;
    case 24:
        return null;
    default:
        return null
    }
}
var oo = !1
  , we = !1
  , Qy = typeof WeakSet == "function" ? WeakSet : Set
  , b = null;
function ci(t, e) {
    var n = t.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null)
            } catch (i) {
                ee(t, e, i)
            }
        else
            n.current = null
}
function sa(t, e, n) {
    try {
        n()
    } catch (i) {
        ee(t, e, i)
    }
}
var Ec = !1;
function Gy(t, e) {
    if (Hl = $o,
    t = Vd(),
    Ua(t)) {
        if ("selectionStart"in t)
            var n = {
                start: t.selectionStart,
                end: t.selectionEnd
            };
        else
            e: {
                n = (n = t.ownerDocument) && n.defaultView || window;
                var i = n.getSelection && n.getSelection();
                if (i && i.rangeCount !== 0) {
                    n = i.anchorNode;
                    var r = i.anchorOffset
                      , o = i.focusNode;
                    i = i.focusOffset;
                    try {
                        n.nodeType,
                        o.nodeType
                    } catch {
                        n = null;
                        break e
                    }
                    var s = 0
                      , l = -1
                      , a = -1
                      , u = 0
                      , c = 0
                      , f = t
                      , d = null;
                    t: for (; ; ) {
                        for (var m; f !== n || r !== 0 && f.nodeType !== 3 || (l = s + r),
                        f !== o || i !== 0 && f.nodeType !== 3 || (a = s + i),
                        f.nodeType === 3 && (s += f.nodeValue.length),
                        (m = f.firstChild) !== null; )
                            d = f,
                            f = m;
                        for (; ; ) {
                            if (f === t)
                                break t;
                            if (d === n && ++u === r && (l = s),
                            d === o && ++c === i && (a = s),
                            (m = f.nextSibling) !== null)
                                break;
                            f = d,
                            d = f.parentNode
                        }
                        f = m
                    }
                    n = l === -1 || a === -1 ? null : {
                        start: l,
                        end: a
                    }
                } else
                    n = null
            }
        n = n || {
            start: 0,
            end: 0
        }
    } else
        n = null;
    for (Vl = {
        focusedElem: t,
        selectionRange: n
    },
    $o = !1,
    b = e; b !== null; )
        if (e = b,
        t = e.child,
        (e.subtreeFlags & 1028) !== 0 && t !== null)
            t.return = e,
            b = t;
        else
            for (; b !== null; ) {
                e = b;
                try {
                    var v = e.alternate;
                    if (e.flags & 1024)
                        switch (e.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (v !== null) {
                                var y = v.memoizedProps
                                  , k = v.memoizedState
                                  , p = e.stateNode
                                  , h = p.getSnapshotBeforeUpdate(e.elementType === e.type ? y : at(e.type, y), k);
                                p.__reactInternalSnapshotBeforeUpdate = h
                            }
                            break;
                        case 3:
                            var g = e.stateNode.containerInfo;
                            g.nodeType === 1 ? g.textContent = "" : g.nodeType === 9 && g.documentElement && g.removeChild(g.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(S(163))
                        }
                } catch (w) {
                    ee(e, e.return, w)
                }
                if (t = e.sibling,
                t !== null) {
                    t.return = e.return,
                    b = t;
                    break
                }
                b = e.return
            }
    return v = Ec,
    Ec = !1,
    v
}
function fr(t, e, n) {
    var i = e.updateQueue;
    if (i = i !== null ? i.lastEffect : null,
    i !== null) {
        var r = i = i.next;
        do {
            if ((r.tag & t) === t) {
                var o = r.destroy;
                r.destroy = void 0,
                o !== void 0 && sa(e, n, o)
            }
            r = r.next
        } while (r !== i)
    }
}
function gs(t, e) {
    if (e = e.updateQueue,
    e = e !== null ? e.lastEffect : null,
    e !== null) {
        var n = e = e.next;
        do {
            if ((n.tag & t) === t) {
                var i = n.create;
                n.destroy = i()
            }
            n = n.next
        } while (n !== e)
    }
}
function la(t) {
    var e = t.ref;
    if (e !== null) {
        var n = t.stateNode;
        switch (t.tag) {
        case 5:
            t = n;
            break;
        default:
            t = n
        }
        typeof e == "function" ? e(t) : e.current = t
    }
}
function Ah(t) {
    var e = t.alternate;
    e !== null && (t.alternate = null,
    Ah(e)),
    t.child = null,
    t.deletions = null,
    t.sibling = null,
    t.tag === 5 && (e = t.stateNode,
    e !== null && (delete e[Et],
    delete e[Pr],
    delete e[Ql],
    delete e[Oy],
    delete e[Ry])),
    t.stateNode = null,
    t.return = null,
    t.dependencies = null,
    t.memoizedProps = null,
    t.memoizedState = null,
    t.pendingProps = null,
    t.stateNode = null,
    t.updateQueue = null
}
function Bh(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 4
}
function zc(t) {
    e: for (; ; ) {
        for (; t.sibling === null; ) {
            if (t.return === null || Bh(t.return))
                return null;
            t = t.return
        }
        for (t.sibling.return = t.return,
        t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
            if (t.flags & 2 || t.child === null || t.tag === 4)
                continue e;
            t.child.return = t,
            t = t.child
        }
        if (!(t.flags & 2))
            return t.stateNode
    }
}
function aa(t, e, n) {
    var i = t.tag;
    if (i === 5 || i === 6)
        t = t.stateNode,
        e ? n.nodeType === 8 ? n.parentNode.insertBefore(t, e) : n.insertBefore(t, e) : (n.nodeType === 8 ? (e = n.parentNode,
        e.insertBefore(t, n)) : (e = n,
        e.appendChild(t)),
        n = n._reactRootContainer,
        n != null || e.onclick !== null || (e.onclick = Uo));
    else if (i !== 4 && (t = t.child,
    t !== null))
        for (aa(t, e, n),
        t = t.sibling; t !== null; )
            aa(t, e, n),
            t = t.sibling
}
function ua(t, e, n) {
    var i = t.tag;
    if (i === 5 || i === 6)
        t = t.stateNode,
        e ? n.insertBefore(t, e) : n.appendChild(t);
    else if (i !== 4 && (t = t.child,
    t !== null))
        for (ua(t, e, n),
        t = t.sibling; t !== null; )
            ua(t, e, n),
            t = t.sibling
}
var he = null
  , ct = !1;
function Ht(t, e, n) {
    for (n = n.child; n !== null; )
        Uh(t, e, n),
        n = n.sibling
}
function Uh(t, e, n) {
    if (Pt && typeof Pt.onCommitFiberUnmount == "function")
        try {
            Pt.onCommitFiberUnmount(us, n)
        } catch {}
    switch (n.tag) {
    case 5:
        we || ci(n, e);
    case 6:
        var i = he
          , r = ct;
        he = null,
        Ht(t, e, n),
        he = i,
        ct = r,
        he !== null && (ct ? (t = he,
        n = n.stateNode,
        t.nodeType === 8 ? t.parentNode.removeChild(n) : t.removeChild(n)) : he.removeChild(n.stateNode));
        break;
    case 18:
        he !== null && (ct ? (t = he,
        n = n.stateNode,
        t.nodeType === 8 ? Qs(t.parentNode, n) : t.nodeType === 1 && Qs(t, n),
        _r(t)) : Qs(he, n.stateNode));
        break;
    case 4:
        i = he,
        r = ct,
        he = n.stateNode.containerInfo,
        ct = !0,
        Ht(t, e, n),
        he = i,
        ct = r;
        break;
    case 0:
    case 11:
    case 14:
    case 15:
        if (!we && (i = n.updateQueue,
        i !== null && (i = i.lastEffect,
        i !== null))) {
            r = i = i.next;
            do {
                var o = r
                  , s = o.destroy;
                o = o.tag,
                s !== void 0 && (o & 2 || o & 4) && sa(n, e, s),
                r = r.next
            } while (r !== i)
        }
        Ht(t, e, n);
        break;
    case 1:
        if (!we && (ci(n, e),
        i = n.stateNode,
        typeof i.componentWillUnmount == "function"))
            try {
                i.props = n.memoizedProps,
                i.state = n.memoizedState,
                i.componentWillUnmount()
            } catch (l) {
                ee(n, e, l)
            }
        Ht(t, e, n);
        break;
    case 21:
        Ht(t, e, n);
        break;
    case 22:
        n.mode & 1 ? (we = (i = we) || n.memoizedState !== null,
        Ht(t, e, n),
        we = i) : Ht(t, e, n);
        break;
    default:
        Ht(t, e, n)
    }
}
function Pc(t) {
    var e = t.updateQueue;
    if (e !== null) {
        t.updateQueue = null;
        var n = t.stateNode;
        n === null && (n = t.stateNode = new Qy),
        e.forEach(function(i) {
            var r = ig.bind(null, t, i);
            n.has(i) || (n.add(i),
            i.then(r, r))
        })
    }
}
function lt(t, e) {
    var n = e.deletions;
    if (n !== null)
        for (var i = 0; i < n.length; i++) {
            var r = n[i];
            try {
                var o = t
                  , s = e
                  , l = s;
                e: for (; l !== null; ) {
                    switch (l.tag) {
                    case 5:
                        he = l.stateNode,
                        ct = !1;
                        break e;
                    case 3:
                        he = l.stateNode.containerInfo,
                        ct = !0;
                        break e;
                    case 4:
                        he = l.stateNode.containerInfo,
                        ct = !0;
                        break e
                    }
                    l = l.return
                }
                if (he === null)
                    throw Error(S(160));
                Uh(o, s, r),
                he = null,
                ct = !1;
                var a = r.alternate;
                a !== null && (a.return = null),
                r.return = null
            } catch (u) {
                ee(r, e, u)
            }
        }
    if (e.subtreeFlags & 12854)
        for (e = e.child; e !== null; )
            Hh(e, t),
            e = e.sibling
}
function Hh(t, e) {
    var n = t.alternate
      , i = t.flags;
    switch (t.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
        if (lt(e, t),
        kt(t),
        i & 4) {
            try {
                fr(3, t, t.return),
                gs(3, t)
            } catch (y) {
                ee(t, t.return, y)
            }
            try {
                fr(5, t, t.return)
            } catch (y) {
                ee(t, t.return, y)
            }
        }
        break;
    case 1:
        lt(e, t),
        kt(t),
        i & 512 && n !== null && ci(n, n.return);
        break;
    case 5:
        if (lt(e, t),
        kt(t),
        i & 512 && n !== null && ci(n, n.return),
        t.flags & 32) {
            var r = t.stateNode;
            try {
                vr(r, "")
            } catch (y) {
                ee(t, t.return, y)
            }
        }
        if (i & 4 && (r = t.stateNode,
        r != null)) {
            var o = t.memoizedProps
              , s = n !== null ? n.memoizedProps : o
              , l = t.type
              , a = t.updateQueue;
            if (t.updateQueue = null,
            a !== null)
                try {
                    l === "input" && o.type === "radio" && o.name != null && fd(r, o),
                    Ll(l, s);
                    var u = Ll(l, o);
                    for (s = 0; s < a.length; s += 2) {
                        var c = a[s]
                          , f = a[s + 1];
                        c === "style" ? yd(r, f) : c === "dangerouslySetInnerHTML" ? pd(r, f) : c === "children" ? vr(r, f) : Ma(r, c, f, u)
                    }
                    switch (l) {
                    case "input":
                        bl(r, o);
                        break;
                    case "textarea":
                        dd(r, o);
                        break;
                    case "select":
                        var d = r._wrapperState.wasMultiple;
                        r._wrapperState.wasMultiple = !!o.multiple;
                        var m = o.value;
                        m != null ? mi(r, !!o.multiple, m, !1) : d !== !!o.multiple && (o.defaultValue != null ? mi(r, !!o.multiple, o.defaultValue, !0) : mi(r, !!o.multiple, o.multiple ? [] : "", !1))
                    }
                    r[Pr] = o
                } catch (y) {
                    ee(t, t.return, y)
                }
        }
        break;
    case 6:
        if (lt(e, t),
        kt(t),
        i & 4) {
            if (t.stateNode === null)
                throw Error(S(162));
            r = t.stateNode,
            o = t.memoizedProps;
            try {
                r.nodeValue = o
            } catch (y) {
                ee(t, t.return, y)
            }
        }
        break;
    case 3:
        if (lt(e, t),
        kt(t),
        i & 4 && n !== null && n.memoizedState.isDehydrated)
            try {
                _r(e.containerInfo)
            } catch (y) {
                ee(t, t.return, y)
            }
        break;
    case 4:
        lt(e, t),
        kt(t);
        break;
    case 13:
        lt(e, t),
        kt(t),
        r = t.child,
        r.flags & 8192 && (o = r.memoizedState !== null,
        r.stateNode.isHidden = o,
        !o || r.alternate !== null && r.alternate.memoizedState !== null || (au = ne())),
        i & 4 && Pc(t);
        break;
    case 22:
        if (c = n !== null && n.memoizedState !== null,
        t.mode & 1 ? (we = (u = we) || c,
        lt(e, t),
        we = u) : lt(e, t),
        kt(t),
        i & 8192) {
            if (u = t.memoizedState !== null,
            (t.stateNode.isHidden = u) && !c && t.mode & 1)
                for (b = t,
                c = t.child; c !== null; ) {
                    for (f = b = c; b !== null; ) {
                        switch (d = b,
                        m = d.child,
                        d.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            fr(4, d, d.return);
                            break;
                        case 1:
                            ci(d, d.return);
                            var v = d.stateNode;
                            if (typeof v.componentWillUnmount == "function") {
                                i = d,
                                n = d.return;
                                try {
                                    e = i,
                                    v.props = e.memoizedProps,
                                    v.state = e.memoizedState,
                                    v.componentWillUnmount()
                                } catch (y) {
                                    ee(i, n, y)
                                }
                            }
                            break;
                        case 5:
                            ci(d, d.return);
                            break;
                        case 22:
                            if (d.memoizedState !== null) {
                                Mc(f);
                                continue
                            }
                        }
                        m !== null ? (m.return = d,
                        b = m) : Mc(f)
                    }
                    c = c.sibling
                }
            e: for (c = null,
            f = t; ; ) {
                if (f.tag === 5) {
                    if (c === null) {
                        c = f;
                        try {
                            r = f.stateNode,
                            u ? (o = r.style,
                            typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (l = f.stateNode,
                            a = f.memoizedProps.style,
                            s = a != null && a.hasOwnProperty("display") ? a.display : null,
                            l.style.display = md("display", s))
                        } catch (y) {
                            ee(t, t.return, y)
                        }
                    }
                } else if (f.tag === 6) {
                    if (c === null)
                        try {
                            f.stateNode.nodeValue = u ? "" : f.memoizedProps
                        } catch (y) {
                            ee(t, t.return, y)
                        }
                } else if ((f.tag !== 22 && f.tag !== 23 || f.memoizedState === null || f === t) && f.child !== null) {
                    f.child.return = f,
                    f = f.child;
                    continue
                }
                if (f === t)
                    break e;
                for (; f.sibling === null; ) {
                    if (f.return === null || f.return === t)
                        break e;
                    c === f && (c = null),
                    f = f.return
                }
                c === f && (c = null),
                f.sibling.return = f.return,
                f = f.sibling
            }
        }
        break;
    case 19:
        lt(e, t),
        kt(t),
        i & 4 && Pc(t);
        break;
    case 21:
        break;
    default:
        lt(e, t),
        kt(t)
    }
}
function kt(t) {
    var e = t.flags;
    if (e & 2) {
        try {
            e: {
                for (var n = t.return; n !== null; ) {
                    if (Bh(n)) {
                        var i = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(S(160))
            }
            switch (i.tag) {
            case 5:
                var r = i.stateNode;
                i.flags & 32 && (vr(r, ""),
                i.flags &= -33);
                var o = zc(t);
                ua(t, o, r);
                break;
            case 3:
            case 4:
                var s = i.stateNode.containerInfo
                  , l = zc(t);
                aa(t, l, s);
                break;
            default:
                throw Error(S(161))
            }
        } catch (a) {
            ee(t, t.return, a)
        }
        t.flags &= -3
    }
    e & 4096 && (t.flags &= -4097)
}
function Yy(t, e, n) {
    b = t,
    Vh(t)
}
function Vh(t, e, n) {
    for (var i = (t.mode & 1) !== 0; b !== null; ) {
        var r = b
          , o = r.child;
        if (r.tag === 22 && i) {
            var s = r.memoizedState !== null || oo;
            if (!s) {
                var l = r.alternate
                  , a = l !== null && l.memoizedState !== null || we;
                l = oo;
                var u = we;
                if (oo = s,
                (we = a) && !u)
                    for (b = r; b !== null; )
                        s = b,
                        a = s.child,
                        s.tag === 22 && s.memoizedState !== null ? Oc(r) : a !== null ? (a.return = s,
                        b = a) : Oc(r);
                for (; o !== null; )
                    b = o,
                    Vh(o),
                    o = o.sibling;
                b = r,
                oo = l,
                we = u
            }
            bc(t)
        } else
            r.subtreeFlags & 8772 && o !== null ? (o.return = r,
            b = o) : bc(t)
    }
}
function bc(t) {
    for (; b !== null; ) {
        var e = b;
        if (e.flags & 8772) {
            var n = e.alternate;
            try {
                if (e.flags & 8772)
                    switch (e.tag) {
                    case 0:
                    case 11:
                    case 15:
                        we || gs(5, e);
                        break;
                    case 1:
                        var i = e.stateNode;
                        if (e.flags & 4 && !we)
                            if (n === null)
                                i.componentDidMount();
                            else {
                                var r = e.elementType === e.type ? n.memoizedProps : at(e.type, n.memoizedProps);
                                i.componentDidUpdate(r, n.memoizedState, i.__reactInternalSnapshotBeforeUpdate)
                            }
                        var o = e.updateQueue;
                        o !== null && dc(e, o, i);
                        break;
                    case 3:
                        var s = e.updateQueue;
                        if (s !== null) {
                            if (n = null,
                            e.child !== null)
                                switch (e.child.tag) {
                                case 5:
                                    n = e.child.stateNode;
                                    break;
                                case 1:
                                    n = e.child.stateNode
                                }
                            dc(e, s, n)
                        }
                        break;
                    case 5:
                        var l = e.stateNode;
                        if (n === null && e.flags & 4) {
                            n = l;
                            var a = e.memoizedProps;
                            switch (e.type) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                a.autoFocus && n.focus();
                                break;
                            case "img":
                                a.src && (n.src = a.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (e.memoizedState === null) {
                            var u = e.alternate;
                            if (u !== null) {
                                var c = u.memoizedState;
                                if (c !== null) {
                                    var f = c.dehydrated;
                                    f !== null && _r(f)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(S(163))
                    }
                we || e.flags & 512 && la(e)
            } catch (d) {
                ee(e, e.return, d)
            }
        }
        if (e === t) {
            b = null;
            break
        }
        if (n = e.sibling,
        n !== null) {
            n.return = e.return,
            b = n;
            break
        }
        b = e.return
    }
}
function Mc(t) {
    for (; b !== null; ) {
        var e = b;
        if (e === t) {
            b = null;
            break
        }
        var n = e.sibling;
        if (n !== null) {
            n.return = e.return,
            b = n;
            break
        }
        b = e.return
    }
}
function Oc(t) {
    for (; b !== null; ) {
        var e = b;
        try {
            switch (e.tag) {
            case 0:
            case 11:
            case 15:
                var n = e.return;
                try {
                    gs(4, e)
                } catch (a) {
                    ee(e, n, a)
                }
                break;
            case 1:
                var i = e.stateNode;
                if (typeof i.componentDidMount == "function") {
                    var r = e.return;
                    try {
                        i.componentDidMount()
                    } catch (a) {
                        ee(e, r, a)
                    }
                }
                var o = e.return;
                try {
                    la(e)
                } catch (a) {
                    ee(e, o, a)
                }
                break;
            case 5:
                var s = e.return;
                try {
                    la(e)
                } catch (a) {
                    ee(e, s, a)
                }
            }
        } catch (a) {
            ee(e, e.return, a)
        }
        if (e === t) {
            b = null;
            break
        }
        var l = e.sibling;
        if (l !== null) {
            l.return = e.return,
            b = l;
            break
        }
        b = e.return
    }
}
var Ky = Math.ceil
  , Jo = Ut.ReactCurrentDispatcher
  , su = Ut.ReactCurrentOwner
  , tt = Ut.ReactCurrentBatchConfig
  , F = 0
  , ce = null
  , oe = null
  , me = 0
  , Ae = 0
  , fi = pn(0)
  , ae = 0
  , Lr = null
  , $n = 0
  , vs = 0
  , lu = 0
  , dr = null
  , Le = null
  , au = 0
  , Ti = 1 / 0
  , Rt = null
  , es = !1
  , ca = null
  , on = null
  , so = !1
  , Xt = null
  , ts = 0
  , hr = 0
  , fa = null
  , Mo = -1
  , Oo = 0;
function be() {
    return F & 6 ? ne() : Mo !== -1 ? Mo : Mo = ne()
}
function sn(t) {
    return t.mode & 1 ? F & 2 && me !== 0 ? me & -me : Ly.transition !== null ? (Oo === 0 && (Oo = bd()),
    Oo) : (t = B,
    t !== 0 || (t = window.event,
    t = t === void 0 ? 16 : Dd(t.type)),
    t) : 1
}
function yt(t, e, n, i) {
    if (50 < hr)
        throw hr = 0,
        fa = null,
        Error(S(185));
    $r(t, n, i),
    (!(F & 2) || t !== ce) && (t === ce && (!(F & 2) && (vs |= n),
    ae === 4 && Gt(t, me)),
    je(t, i),
    n === 1 && F === 0 && !(e.mode & 1) && (Ti = ne() + 500,
    ps && mn()))
}
function je(t, e) {
    var n = t.callbackNode;
    Lm(t, e);
    var i = jo(t, t === ce ? me : 0);
    if (i === 0)
        n !== null && $u(n),
        t.callbackNode = null,
        t.callbackPriority = 0;
    else if (e = i & -i,
    t.callbackPriority !== e) {
        if (n != null && $u(n),
        e === 1)
            t.tag === 0 ? Ty(Rc.bind(null, t)) : eh(Rc.bind(null, t)),
            by(function() {
                !(F & 6) && mn()
            }),
            n = null;
        else {
            switch (Md(i)) {
            case 1:
                n = Ia;
                break;
            case 4:
                n = zd;
                break;
            case 16:
                n = Fo;
                break;
            case 536870912:
                n = Pd;
                break;
            default:
                n = Fo
            }
            n = Zh(n, Wh.bind(null, t))
        }
        t.callbackPriority = e,
        t.callbackNode = n
    }
}
function Wh(t, e) {
    if (Mo = -1,
    Oo = 0,
    F & 6)
        throw Error(S(327));
    var n = t.callbackNode;
    if (xi() && t.callbackNode !== n)
        return null;
    var i = jo(t, t === ce ? me : 0);
    if (i === 0)
        return null;
    if (i & 30 || i & t.expiredLanes || e)
        e = ns(t, i);
    else {
        e = i;
        var r = F;
        F |= 2;
        var o = Qh();
        (ce !== t || me !== e) && (Rt = null,
        Ti = ne() + 500,
        Ln(t, e));
        do
            try {
                Jy();
                break
            } catch (l) {
                qh(t, l)
            }
        while (!0);
        Qa(),
        Jo.current = o,
        F = r,
        oe !== null ? e = 0 : (ce = null,
        me = 0,
        e = ae)
    }
    if (e !== 0) {
        if (e === 2 && (r = jl(t),
        r !== 0 && (i = r,
        e = da(t, r))),
        e === 1)
            throw n = Lr,
            Ln(t, 0),
            Gt(t, i),
            je(t, ne()),
            n;
        if (e === 6)
            Gt(t, i);
        else {
            if (r = t.current.alternate,
            !(i & 30) && !Xy(r) && (e = ns(t, i),
            e === 2 && (o = jl(t),
            o !== 0 && (i = o,
            e = da(t, o))),
            e === 1))
                throw n = Lr,
                Ln(t, 0),
                Gt(t, i),
                je(t, ne()),
                n;
            switch (t.finishedWork = r,
            t.finishedLanes = i,
            e) {
            case 0:
            case 1:
                throw Error(S(345));
            case 2:
                Cn(t, Le, Rt);
                break;
            case 3:
                if (Gt(t, i),
                (i & 130023424) === i && (e = au + 500 - ne(),
                10 < e)) {
                    if (jo(t, 0) !== 0)
                        break;
                    if (r = t.suspendedLanes,
                    (r & i) !== i) {
                        be(),
                        t.pingedLanes |= t.suspendedLanes & r;
                        break
                    }
                    t.timeoutHandle = ql(Cn.bind(null, t, Le, Rt), e);
                    break
                }
                Cn(t, Le, Rt);
                break;
            case 4:
                if (Gt(t, i),
                (i & 4194240) === i)
                    break;
                for (e = t.eventTimes,
                r = -1; 0 < i; ) {
                    var s = 31 - mt(i);
                    o = 1 << s,
                    s = e[s],
                    s > r && (r = s),
                    i &= ~o
                }
                if (i = r,
                i = ne() - i,
                i = (120 > i ? 120 : 480 > i ? 480 : 1080 > i ? 1080 : 1920 > i ? 1920 : 3e3 > i ? 3e3 : 4320 > i ? 4320 : 1960 * Ky(i / 1960)) - i,
                10 < i) {
                    t.timeoutHandle = ql(Cn.bind(null, t, Le, Rt), i);
                    break
                }
                Cn(t, Le, Rt);
                break;
            case 5:
                Cn(t, Le, Rt);
                break;
            default:
                throw Error(S(329))
            }
        }
    }
    return je(t, ne()),
    t.callbackNode === n ? Wh.bind(null, t) : null
}
function da(t, e) {
    var n = dr;
    return t.current.memoizedState.isDehydrated && (Ln(t, e).flags |= 256),
    t = ns(t, e),
    t !== 2 && (e = Le,
    Le = n,
    e !== null && ha(e)),
    t
}
function ha(t) {
    Le === null ? Le = t : Le.push.apply(Le, t)
}
function Xy(t) {
    for (var e = t; ; ) {
        if (e.flags & 16384) {
            var n = e.updateQueue;
            if (n !== null && (n = n.stores,
            n !== null))
                for (var i = 0; i < n.length; i++) {
                    var r = n[i]
                      , o = r.getSnapshot;
                    r = r.value;
                    try {
                        if (!wt(o(), r))
                            return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = e.child,
        e.subtreeFlags & 16384 && n !== null)
            n.return = e,
            e = n;
        else {
            if (e === t)
                break;
            for (; e.sibling === null; ) {
                if (e.return === null || e.return === t)
                    return !0;
                e = e.return
            }
            e.sibling.return = e.return,
            e = e.sibling
        }
    }
    return !0
}
function Gt(t, e) {
    for (e &= ~lu,
    e &= ~vs,
    t.suspendedLanes |= e,
    t.pingedLanes &= ~e,
    t = t.expirationTimes; 0 < e; ) {
        var n = 31 - mt(e)
          , i = 1 << n;
        t[n] = -1,
        e &= ~i
    }
}
function Rc(t) {
    if (F & 6)
        throw Error(S(327));
    xi();
    var e = jo(t, 0);
    if (!(e & 1))
        return je(t, ne()),
        null;
    var n = ns(t, e);
    if (t.tag !== 0 && n === 2) {
        var i = jl(t);
        i !== 0 && (e = i,
        n = da(t, i))
    }
    if (n === 1)
        throw n = Lr,
        Ln(t, 0),
        Gt(t, e),
        je(t, ne()),
        n;
    if (n === 6)
        throw Error(S(345));
    return t.finishedWork = t.current.alternate,
    t.finishedLanes = e,
    Cn(t, Le, Rt),
    je(t, ne()),
    null
}
function uu(t, e) {
    var n = F;
    F |= 1;
    try {
        return t(e)
    } finally {
        F = n,
        F === 0 && (Ti = ne() + 500,
        ps && mn())
    }
}
function An(t) {
    Xt !== null && Xt.tag === 0 && !(F & 6) && xi();
    var e = F;
    F |= 1;
    var n = tt.transition
      , i = B;
    try {
        if (tt.transition = null,
        B = 1,
        t)
            return t()
    } finally {
        B = i,
        tt.transition = n,
        F = e,
        !(F & 6) && mn()
    }
}
function cu() {
    Ae = fi.current,
    V(fi)
}
function Ln(t, e) {
    t.finishedWork = null,
    t.finishedLanes = 0;
    var n = t.timeoutHandle;
    if (n !== -1 && (t.timeoutHandle = -1,
    Py(n)),
    oe !== null)
        for (n = oe.return; n !== null; ) {
            var i = n;
            switch (Va(i),
            i.tag) {
            case 1:
                i = i.type.childContextTypes,
                i != null && Ho();
                break;
            case 3:
                Oi(),
                V(Ne),
                V(_e),
                Ja();
                break;
            case 5:
                Za(i);
                break;
            case 4:
                Oi();
                break;
            case 13:
                V(G);
                break;
            case 19:
                V(G);
                break;
            case 10:
                Ga(i.type._context);
                break;
            case 22:
            case 23:
                cu()
            }
            n = n.return
        }
    if (ce = t,
    oe = t = ln(t.current, null),
    me = Ae = e,
    ae = 0,
    Lr = null,
    lu = vs = $n = 0,
    Le = dr = null,
    Pn !== null) {
        for (e = 0; e < Pn.length; e++)
            if (n = Pn[e],
            i = n.interleaved,
            i !== null) {
                n.interleaved = null;
                var r = i.next
                  , o = n.pending;
                if (o !== null) {
                    var s = o.next;
                    o.next = r,
                    i.next = s
                }
                n.pending = i
            }
        Pn = null
    }
    return t
}
function qh(t, e) {
    do {
        var n = oe;
        try {
            if (Qa(),
            zo.current = Zo,
            Xo) {
                for (var i = Y.memoizedState; i !== null; ) {
                    var r = i.queue;
                    r !== null && (r.pending = null),
                    i = i.next
                }
                Xo = !1
            }
            if (jn = 0,
            ue = le = Y = null,
            cr = !1,
            Or = 0,
            su.current = null,
            n === null || n.return === null) {
                ae = 1,
                Lr = e,
                oe = null;
                break
            }
            e: {
                var o = t
                  , s = n.return
                  , l = n
                  , a = e;
                if (e = me,
                l.flags |= 32768,
                a !== null && typeof a == "object" && typeof a.then == "function") {
                    var u = a
                      , c = l
                      , f = c.tag;
                    if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
                        var d = c.alternate;
                        d ? (c.updateQueue = d.updateQueue,
                        c.memoizedState = d.memoizedState,
                        c.lanes = d.lanes) : (c.updateQueue = null,
                        c.memoizedState = null)
                    }
                    var m = vc(s);
                    if (m !== null) {
                        m.flags &= -257,
                        wc(m, s, l, o, e),
                        m.mode & 1 && gc(o, u, e),
                        e = m,
                        a = u;
                        var v = e.updateQueue;
                        if (v === null) {
                            var y = new Set;
                            y.add(a),
                            e.updateQueue = y
                        } else
                            v.add(a);
                        break e
                    } else {
                        if (!(e & 1)) {
                            gc(o, u, e),
                            fu();
                            break e
                        }
                        a = Error(S(426))
                    }
                } else if (Q && l.mode & 1) {
                    var k = vc(s);
                    if (k !== null) {
                        !(k.flags & 65536) && (k.flags |= 256),
                        wc(k, s, l, o, e),
                        Wa(Ri(a, l));
                        break e
                    }
                }
                o = a = Ri(a, l),
                ae !== 4 && (ae = 2),
                dr === null ? dr = [o] : dr.push(o),
                o = s;
                do {
                    switch (o.tag) {
                    case 3:
                        o.flags |= 65536,
                        e &= -e,
                        o.lanes |= e;
                        var p = Mh(o, a, e);
                        fc(o, p);
                        break e;
                    case 1:
                        l = a;
                        var h = o.type
                          , g = o.stateNode;
                        if (!(o.flags & 128) && (typeof h.getDerivedStateFromError == "function" || g !== null && typeof g.componentDidCatch == "function" && (on === null || !on.has(g)))) {
                            o.flags |= 65536,
                            e &= -e,
                            o.lanes |= e;
                            var w = Oh(o, l, e);
                            fc(o, w);
                            break e
                        }
                    }
                    o = o.return
                } while (o !== null)
            }
            Yh(n)
        } catch (x) {
            e = x,
            oe === n && n !== null && (oe = n = n.return);
            continue
        }
        break
    } while (!0)
}
function Qh() {
    var t = Jo.current;
    return Jo.current = Zo,
    t === null ? Zo : t
}
function fu() {
    (ae === 0 || ae === 3 || ae === 2) && (ae = 4),
    ce === null || !($n & 268435455) && !(vs & 268435455) || Gt(ce, me)
}
function ns(t, e) {
    var n = F;
    F |= 2;
    var i = Qh();
    (ce !== t || me !== e) && (Rt = null,
    Ln(t, e));
    do
        try {
            Zy();
            break
        } catch (r) {
            qh(t, r)
        }
    while (!0);
    if (Qa(),
    F = n,
    Jo.current = i,
    oe !== null)
        throw Error(S(261));
    return ce = null,
    me = 0,
    ae
}
function Zy() {
    for (; oe !== null; )
        Gh(oe)
}
function Jy() {
    for (; oe !== null && !Cm(); )
        Gh(oe)
}
function Gh(t) {
    var e = Xh(t.alternate, t, Ae);
    t.memoizedProps = t.pendingProps,
    e === null ? Yh(t) : oe = e,
    su.current = null
}
function Yh(t) {
    var e = t;
    do {
        var n = e.alternate;
        if (t = e.return,
        e.flags & 32768) {
            if (n = qy(n, e),
            n !== null) {
                n.flags &= 32767,
                oe = n;
                return
            }
            if (t !== null)
                t.flags |= 32768,
                t.subtreeFlags = 0,
                t.deletions = null;
            else {
                ae = 6,
                oe = null;
                return
            }
        } else if (n = Wy(n, e, Ae),
        n !== null) {
            oe = n;
            return
        }
        if (e = e.sibling,
        e !== null) {
            oe = e;
            return
        }
        oe = e = t
    } while (e !== null);
    ae === 0 && (ae = 5)
}
function Cn(t, e, n) {
    var i = B
      , r = tt.transition;
    try {
        tt.transition = null,
        B = 1,
        eg(t, e, n, i)
    } finally {
        tt.transition = r,
        B = i
    }
    return null
}
function eg(t, e, n, i) {
    do
        xi();
    while (Xt !== null);
    if (F & 6)
        throw Error(S(327));
    n = t.finishedWork;
    var r = t.finishedLanes;
    if (n === null)
        return null;
    if (t.finishedWork = null,
    t.finishedLanes = 0,
    n === t.current)
        throw Error(S(177));
    t.callbackNode = null,
    t.callbackPriority = 0;
    var o = n.lanes | n.childLanes;
    if (Im(t, o),
    t === ce && (oe = ce = null,
    me = 0),
    !(n.subtreeFlags & 2064) && !(n.flags & 2064) || so || (so = !0,
    Zh(Fo, function() {
        return xi(),
        null
    })),
    o = (n.flags & 15990) !== 0,
    n.subtreeFlags & 15990 || o) {
        o = tt.transition,
        tt.transition = null;
        var s = B;
        B = 1;
        var l = F;
        F |= 4,
        su.current = null,
        Gy(t, n),
        Hh(n, t),
        xy(Vl),
        $o = !!Hl,
        Vl = Hl = null,
        t.current = n,
        Yy(n),
        Em(),
        F = l,
        B = s,
        tt.transition = o
    } else
        t.current = n;
    if (so && (so = !1,
    Xt = t,
    ts = r),
    o = t.pendingLanes,
    o === 0 && (on = null),
    bm(n.stateNode),
    je(t, ne()),
    e !== null)
        for (i = t.onRecoverableError,
        n = 0; n < e.length; n++)
            r = e[n],
            i(r.value, {
                componentStack: r.stack,
                digest: r.digest
            });
    if (es)
        throw es = !1,
        t = ca,
        ca = null,
        t;
    return ts & 1 && t.tag !== 0 && xi(),
    o = t.pendingLanes,
    o & 1 ? t === fa ? hr++ : (hr = 0,
    fa = t) : hr = 0,
    mn(),
    null
}
function xi() {
    if (Xt !== null) {
        var t = Md(ts)
          , e = tt.transition
          , n = B;
        try {
            if (tt.transition = null,
            B = 16 > t ? 16 : t,
            Xt === null)
                var i = !1;
            else {
                if (t = Xt,
                Xt = null,
                ts = 0,
                F & 6)
                    throw Error(S(331));
                var r = F;
                for (F |= 4,
                b = t.current; b !== null; ) {
                    var o = b
                      , s = o.child;
                    if (b.flags & 16) {
                        var l = o.deletions;
                        if (l !== null) {
                            for (var a = 0; a < l.length; a++) {
                                var u = l[a];
                                for (b = u; b !== null; ) {
                                    var c = b;
                                    switch (c.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        fr(8, c, o)
                                    }
                                    var f = c.child;
                                    if (f !== null)
                                        f.return = c,
                                        b = f;
                                    else
                                        for (; b !== null; ) {
                                            c = b;
                                            var d = c.sibling
                                              , m = c.return;
                                            if (Ah(c),
                                            c === u) {
                                                b = null;
                                                break
                                            }
                                            if (d !== null) {
                                                d.return = m,
                                                b = d;
                                                break
                                            }
                                            b = m
                                        }
                                }
                            }
                            var v = o.alternate;
                            if (v !== null) {
                                var y = v.child;
                                if (y !== null) {
                                    v.child = null;
                                    do {
                                        var k = y.sibling;
                                        y.sibling = null,
                                        y = k
                                    } while (y !== null)
                                }
                            }
                            b = o
                        }
                    }
                    if (o.subtreeFlags & 2064 && s !== null)
                        s.return = o,
                        b = s;
                    else
                        e: for (; b !== null; ) {
                            if (o = b,
                            o.flags & 2048)
                                switch (o.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    fr(9, o, o.return)
                                }
                            var p = o.sibling;
                            if (p !== null) {
                                p.return = o.return,
                                b = p;
                                break e
                            }
                            b = o.return
                        }
                }
                var h = t.current;
                for (b = h; b !== null; ) {
                    s = b;
                    var g = s.child;
                    if (s.subtreeFlags & 2064 && g !== null)
                        g.return = s,
                        b = g;
                    else
                        e: for (s = h; b !== null; ) {
                            if (l = b,
                            l.flags & 2048)
                                try {
                                    switch (l.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        gs(9, l)
                                    }
                                } catch (x) {
                                    ee(l, l.return, x)
                                }
                            if (l === s) {
                                b = null;
                                break e
                            }
                            var w = l.sibling;
                            if (w !== null) {
                                w.return = l.return,
                                b = w;
                                break e
                            }
                            b = l.return
                        }
                }
                if (F = r,
                mn(),
                Pt && typeof Pt.onPostCommitFiberRoot == "function")
                    try {
                        Pt.onPostCommitFiberRoot(us, t)
                    } catch {}
                i = !0
            }
            return i
        } finally {
            B = n,
            tt.transition = e
        }
    }
    return !1
}
function Tc(t, e, n) {
    e = Ri(n, e),
    e = Mh(t, e, 1),
    t = rn(t, e, 1),
    e = be(),
    t !== null && ($r(t, 1, e),
    je(t, e))
}
function ee(t, e, n) {
    if (t.tag === 3)
        Tc(t, t, n);
    else
        for (; e !== null; ) {
            if (e.tag === 3) {
                Tc(e, t, n);
                break
            } else if (e.tag === 1) {
                var i = e.stateNode;
                if (typeof e.type.getDerivedStateFromError == "function" || typeof i.componentDidCatch == "function" && (on === null || !on.has(i))) {
                    t = Ri(n, t),
                    t = Oh(e, t, 1),
                    e = rn(e, t, 1),
                    t = be(),
                    e !== null && ($r(e, 1, t),
                    je(e, t));
                    break
                }
            }
            e = e.return
        }
}
function tg(t, e, n) {
    var i = t.pingCache;
    i !== null && i.delete(e),
    e = be(),
    t.pingedLanes |= t.suspendedLanes & n,
    ce === t && (me & n) === n && (ae === 4 || ae === 3 && (me & 130023424) === me && 500 > ne() - au ? Ln(t, 0) : lu |= n),
    je(t, e)
}
function Kh(t, e) {
    e === 0 && (t.mode & 1 ? (e = Kr,
    Kr <<= 1,
    !(Kr & 130023424) && (Kr = 4194304)) : e = 1);
    var n = be();
    t = At(t, e),
    t !== null && ($r(t, e, n),
    je(t, n))
}
function ng(t) {
    var e = t.memoizedState
      , n = 0;
    e !== null && (n = e.retryLane),
    Kh(t, n)
}
function ig(t, e) {
    var n = 0;
    switch (t.tag) {
    case 13:
        var i = t.stateNode
          , r = t.memoizedState;
        r !== null && (n = r.retryLane);
        break;
    case 19:
        i = t.stateNode;
        break;
    default:
        throw Error(S(314))
    }
    i !== null && i.delete(e),
    Kh(t, n)
}
var Xh;
Xh = function(t, e, n) {
    if (t !== null)
        if (t.memoizedProps !== e.pendingProps || Ne.current)
            Ie = !0;
        else {
            if (!(t.lanes & n) && !(e.flags & 128))
                return Ie = !1,
                Vy(t, e, n);
            Ie = !!(t.flags & 131072)
        }
    else
        Ie = !1,
        Q && e.flags & 1048576 && th(e, qo, e.index);
    switch (e.lanes = 0,
    e.tag) {
    case 2:
        var i = e.type;
        bo(t, e),
        t = e.pendingProps;
        var r = Pi(e, _e.current);
        wi(e, n),
        r = tu(null, e, i, t, r, n);
        var o = nu();
        return e.flags |= 1,
        typeof r == "object" && r !== null && typeof r.render == "function" && r.$$typeof === void 0 ? (e.tag = 1,
        e.memoizedState = null,
        e.updateQueue = null,
        Fe(i) ? (o = !0,
        Vo(e)) : o = !1,
        e.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null,
        Ka(e),
        r.updater = ys,
        e.stateNode = r,
        r._reactInternals = e,
        Jl(e, i, t, n),
        e = na(null, e, i, !0, o, n)) : (e.tag = 0,
        Q && o && Ha(e),
        ze(null, e, r, n),
        e = e.child),
        e;
    case 16:
        i = e.elementType;
        e: {
            switch (bo(t, e),
            t = e.pendingProps,
            r = i._init,
            i = r(i._payload),
            e.type = i,
            r = e.tag = og(i),
            t = at(i, t),
            r) {
            case 0:
                e = ta(null, e, i, t, n);
                break e;
            case 1:
                e = _c(null, e, i, t, n);
                break e;
            case 11:
                e = xc(null, e, i, t, n);
                break e;
            case 14:
                e = kc(null, e, i, at(i.type, t), n);
                break e
            }
            throw Error(S(306, i, ""))
        }
        return e;
    case 0:
        return i = e.type,
        r = e.pendingProps,
        r = e.elementType === i ? r : at(i, r),
        ta(t, e, i, r, n);
    case 1:
        return i = e.type,
        r = e.pendingProps,
        r = e.elementType === i ? r : at(i, r),
        _c(t, e, i, r, n);
    case 3:
        e: {
            if (Ih(e),
            t === null)
                throw Error(S(387));
            i = e.pendingProps,
            o = e.memoizedState,
            r = o.element,
            lh(t, e),
            Yo(e, i, null, n);
            var s = e.memoizedState;
            if (i = s.element,
            o.isDehydrated)
                if (o = {
                    element: i,
                    isDehydrated: !1,
                    cache: s.cache,
                    pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
                    transitions: s.transitions
                },
                e.updateQueue.baseState = o,
                e.memoizedState = o,
                e.flags & 256) {
                    r = Ri(Error(S(423)), e),
                    e = Sc(t, e, i, n, r);
                    break e
                } else if (i !== r) {
                    r = Ri(Error(S(424)), e),
                    e = Sc(t, e, i, n, r);
                    break e
                } else
                    for (Be = nn(e.stateNode.containerInfo.firstChild),
                    He = e,
                    Q = !0,
                    ft = null,
                    n = oh(e, null, i, n),
                    e.child = n; n; )
                        n.flags = n.flags & -3 | 4096,
                        n = n.sibling;
            else {
                if (bi(),
                i === r) {
                    e = Bt(t, e, n);
                    break e
                }
                ze(t, e, i, n)
            }
            e = e.child
        }
        return e;
    case 5:
        return ah(e),
        t === null && Kl(e),
        i = e.type,
        r = e.pendingProps,
        o = t !== null ? t.memoizedProps : null,
        s = r.children,
        Wl(i, r) ? s = null : o !== null && Wl(i, o) && (e.flags |= 32),
        Lh(t, e),
        ze(t, e, s, n),
        e.child;
    case 6:
        return t === null && Kl(e),
        null;
    case 13:
        return Dh(t, e, n);
    case 4:
        return Xa(e, e.stateNode.containerInfo),
        i = e.pendingProps,
        t === null ? e.child = Mi(e, null, i, n) : ze(t, e, i, n),
        e.child;
    case 11:
        return i = e.type,
        r = e.pendingProps,
        r = e.elementType === i ? r : at(i, r),
        xc(t, e, i, r, n);
    case 7:
        return ze(t, e, e.pendingProps, n),
        e.child;
    case 8:
        return ze(t, e, e.pendingProps.children, n),
        e.child;
    case 12:
        return ze(t, e, e.pendingProps.children, n),
        e.child;
    case 10:
        e: {
            if (i = e.type._context,
            r = e.pendingProps,
            o = e.memoizedProps,
            s = r.value,
            U(Qo, i._currentValue),
            i._currentValue = s,
            o !== null)
                if (wt(o.value, s)) {
                    if (o.children === r.children && !Ne.current) {
                        e = Bt(t, e, n);
                        break e
                    }
                } else
                    for (o = e.child,
                    o !== null && (o.return = e); o !== null; ) {
                        var l = o.dependencies;
                        if (l !== null) {
                            s = o.child;
                            for (var a = l.firstContext; a !== null; ) {
                                if (a.context === i) {
                                    if (o.tag === 1) {
                                        a = Nt(-1, n & -n),
                                        a.tag = 2;
                                        var u = o.updateQueue;
                                        if (u !== null) {
                                            u = u.shared;
                                            var c = u.pending;
                                            c === null ? a.next = a : (a.next = c.next,
                                            c.next = a),
                                            u.pending = a
                                        }
                                    }
                                    o.lanes |= n,
                                    a = o.alternate,
                                    a !== null && (a.lanes |= n),
                                    Xl(o.return, n, e),
                                    l.lanes |= n;
                                    break
                                }
                                a = a.next
                            }
                        } else if (o.tag === 10)
                            s = o.type === e.type ? null : o.child;
                        else if (o.tag === 18) {
                            if (s = o.return,
                            s === null)
                                throw Error(S(341));
                            s.lanes |= n,
                            l = s.alternate,
                            l !== null && (l.lanes |= n),
                            Xl(s, n, e),
                            s = o.sibling
                        } else
                            s = o.child;
                        if (s !== null)
                            s.return = o;
                        else
                            for (s = o; s !== null; ) {
                                if (s === e) {
                                    s = null;
                                    break
                                }
                                if (o = s.sibling,
                                o !== null) {
                                    o.return = s.return,
                                    s = o;
                                    break
                                }
                                s = s.return
                            }
                        o = s
                    }
            ze(t, e, r.children, n),
            e = e.child
        }
        return e;
    case 9:
        return r = e.type,
        i = e.pendingProps.children,
        wi(e, n),
        r = nt(r),
        i = i(r),
        e.flags |= 1,
        ze(t, e, i, n),
        e.child;
    case 14:
        return i = e.type,
        r = at(i, e.pendingProps),
        r = at(i.type, r),
        kc(t, e, i, r, n);
    case 15:
        return Rh(t, e, e.type, e.pendingProps, n);
    case 17:
        return i = e.type,
        r = e.pendingProps,
        r = e.elementType === i ? r : at(i, r),
        bo(t, e),
        e.tag = 1,
        Fe(i) ? (t = !0,
        Vo(e)) : t = !1,
        wi(e, n),
        bh(e, i, r),
        Jl(e, i, r, n),
        na(null, e, i, !0, t, n);
    case 19:
        return Nh(t, e, n);
    case 22:
        return Th(t, e, n)
    }
    throw Error(S(156, e.tag))
}
;
function Zh(t, e) {
    return Ed(t, e)
}
function rg(t, e, n, i) {
    this.tag = t,
    this.key = n,
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
    this.index = 0,
    this.ref = null,
    this.pendingProps = e,
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
    this.mode = i,
    this.subtreeFlags = this.flags = 0,
    this.deletions = null,
    this.childLanes = this.lanes = 0,
    this.alternate = null
}
function et(t, e, n, i) {
    return new rg(t,e,n,i)
}
function du(t) {
    return t = t.prototype,
    !(!t || !t.isReactComponent)
}
function og(t) {
    if (typeof t == "function")
        return du(t) ? 1 : 0;
    if (t != null) {
        if (t = t.$$typeof,
        t === Ra)
            return 11;
        if (t === Ta)
            return 14
    }
    return 2
}
function ln(t, e) {
    var n = t.alternate;
    return n === null ? (n = et(t.tag, e, t.key, t.mode),
    n.elementType = t.elementType,
    n.type = t.type,
    n.stateNode = t.stateNode,
    n.alternate = t,
    t.alternate = n) : (n.pendingProps = e,
    n.type = t.type,
    n.flags = 0,
    n.subtreeFlags = 0,
    n.deletions = null),
    n.flags = t.flags & 14680064,
    n.childLanes = t.childLanes,
    n.lanes = t.lanes,
    n.child = t.child,
    n.memoizedProps = t.memoizedProps,
    n.memoizedState = t.memoizedState,
    n.updateQueue = t.updateQueue,
    e = t.dependencies,
    n.dependencies = e === null ? null : {
        lanes: e.lanes,
        firstContext: e.firstContext
    },
    n.sibling = t.sibling,
    n.index = t.index,
    n.ref = t.ref,
    n
}
function Ro(t, e, n, i, r, o) {
    var s = 2;
    if (i = t,
    typeof t == "function")
        du(t) && (s = 1);
    else if (typeof t == "string")
        s = 5;
    else
        e: switch (t) {
        case ti:
            return In(n.children, r, o, e);
        case Oa:
            s = 8,
            r |= 8;
            break;
        case Sl:
            return t = et(12, n, e, r | 2),
            t.elementType = Sl,
            t.lanes = o,
            t;
        case Cl:
            return t = et(13, n, e, r),
            t.elementType = Cl,
            t.lanes = o,
            t;
        case El:
            return t = et(19, n, e, r),
            t.elementType = El,
            t.lanes = o,
            t;
        case ad:
            return ws(n, r, o, e);
        default:
            if (typeof t == "object" && t !== null)
                switch (t.$$typeof) {
                case sd:
                    s = 10;
                    break e;
                case ld:
                    s = 9;
                    break e;
                case Ra:
                    s = 11;
                    break e;
                case Ta:
                    s = 14;
                    break e;
                case Wt:
                    s = 16,
                    i = null;
                    break e
                }
            throw Error(S(130, t == null ? t : typeof t, ""))
        }
    return e = et(s, n, e, r),
    e.elementType = t,
    e.type = i,
    e.lanes = o,
    e
}
function In(t, e, n, i) {
    return t = et(7, t, i, e),
    t.lanes = n,
    t
}
function ws(t, e, n, i) {
    return t = et(22, t, i, e),
    t.elementType = ad,
    t.lanes = n,
    t.stateNode = {
        isHidden: !1
    },
    t
}
function tl(t, e, n) {
    return t = et(6, t, null, e),
    t.lanes = n,
    t
}
function nl(t, e, n) {
    return e = et(4, t.children !== null ? t.children : [], t.key, e),
    e.lanes = n,
    e.stateNode = {
        containerInfo: t.containerInfo,
        pendingChildren: null,
        implementation: t.implementation
    },
    e
}
function sg(t, e, n, i, r) {
    this.tag = e,
    this.containerInfo = t,
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
    this.timeoutHandle = -1,
    this.callbackNode = this.pendingContext = this.context = null,
    this.callbackPriority = 0,
    this.eventTimes = Ns(0),
    this.expirationTimes = Ns(-1),
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
    this.entanglements = Ns(0),
    this.identifierPrefix = i,
    this.onRecoverableError = r,
    this.mutableSourceEagerHydrationData = null
}
function hu(t, e, n, i, r, o, s, l, a) {
    return t = new sg(t,e,n,l,a),
    e === 1 ? (e = 1,
    o === !0 && (e |= 8)) : e = 0,
    o = et(3, null, null, e),
    t.current = o,
    o.stateNode = t,
    o.memoizedState = {
        element: i,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    },
    Ka(o),
    t
}
function lg(t, e, n) {
    var i = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: ei,
        key: i == null ? null : "" + i,
        children: t,
        containerInfo: e,
        implementation: n
    }
}
function Jh(t) {
    if (!t)
        return cn;
    t = t._reactInternals;
    e: {
        if (qn(t) !== t || t.tag !== 1)
            throw Error(S(170));
        var e = t;
        do {
            switch (e.tag) {
            case 3:
                e = e.stateNode.context;
                break e;
            case 1:
                if (Fe(e.type)) {
                    e = e.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e
                }
            }
            e = e.return
        } while (e !== null);
        throw Error(S(171))
    }
    if (t.tag === 1) {
        var n = t.type;
        if (Fe(n))
            return Jd(t, n, e)
    }
    return e
}
function ep(t, e, n, i, r, o, s, l, a) {
    return t = hu(n, i, !0, t, r, o, s, l, a),
    t.context = Jh(null),
    n = t.current,
    i = be(),
    r = sn(n),
    o = Nt(i, r),
    o.callback = e ?? null,
    rn(n, o, r),
    t.current.lanes = r,
    $r(t, r, i),
    je(t, i),
    t
}
function xs(t, e, n, i) {
    var r = e.current
      , o = be()
      , s = sn(r);
    return n = Jh(n),
    e.context === null ? e.context = n : e.pendingContext = n,
    e = Nt(o, s),
    e.payload = {
        element: t
    },
    i = i === void 0 ? null : i,
    i !== null && (e.callback = i),
    t = rn(r, e, s),
    t !== null && (yt(t, r, s, o),
    Eo(t, r, s)),
    s
}
function is(t) {
    if (t = t.current,
    !t.child)
        return null;
    switch (t.child.tag) {
    case 5:
        return t.child.stateNode;
    default:
        return t.child.stateNode
    }
}
function Lc(t, e) {
    if (t = t.memoizedState,
    t !== null && t.dehydrated !== null) {
        var n = t.retryLane;
        t.retryLane = n !== 0 && n < e ? n : e
    }
}
function pu(t, e) {
    Lc(t, e),
    (t = t.alternate) && Lc(t, e)
}
function ag() {
    return null
}
var tp = typeof reportError == "function" ? reportError : function(t) {
    console.error(t)
}
;
function mu(t) {
    this._internalRoot = t
}
ks.prototype.render = mu.prototype.render = function(t) {
    var e = this._internalRoot;
    if (e === null)
        throw Error(S(409));
    xs(t, e, null, null)
}
;
ks.prototype.unmount = mu.prototype.unmount = function() {
    var t = this._internalRoot;
    if (t !== null) {
        this._internalRoot = null;
        var e = t.containerInfo;
        An(function() {
            xs(null, t, null, null)
        }),
        e[$t] = null
    }
}
;
function ks(t) {
    this._internalRoot = t
}
ks.prototype.unstable_scheduleHydration = function(t) {
    if (t) {
        var e = Td();
        t = {
            blockedOn: null,
            target: t,
            priority: e
        };
        for (var n = 0; n < Qt.length && e !== 0 && e < Qt[n].priority; n++)
            ;
        Qt.splice(n, 0, t),
        n === 0 && Id(t)
    }
}
;
function yu(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11)
}
function _s(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11 && (t.nodeType !== 8 || t.nodeValue !== " react-mount-point-unstable "))
}
function Ic() {}
function ug(t, e, n, i, r) {
    if (r) {
        if (typeof i == "function") {
            var o = i;
            i = function() {
                var u = is(s);
                o.call(u)
            }
        }
        var s = ep(e, i, t, 0, null, !1, !1, "", Ic);
        return t._reactRootContainer = s,
        t[$t] = s.current,
        Er(t.nodeType === 8 ? t.parentNode : t),
        An(),
        s
    }
    for (; r = t.lastChild; )
        t.removeChild(r);
    if (typeof i == "function") {
        var l = i;
        i = function() {
            var u = is(a);
            l.call(u)
        }
    }
    var a = hu(t, 0, !1, null, null, !1, !1, "", Ic);
    return t._reactRootContainer = a,
    t[$t] = a.current,
    Er(t.nodeType === 8 ? t.parentNode : t),
    An(function() {
        xs(e, a, n, i)
    }),
    a
}
function Ss(t, e, n, i, r) {
    var o = n._reactRootContainer;
    if (o) {
        var s = o;
        if (typeof r == "function") {
            var l = r;
            r = function() {
                var a = is(s);
                l.call(a)
            }
        }
        xs(e, s, t, r)
    } else
        s = ug(n, e, t, r, i);
    return is(s)
}
Od = function(t) {
    switch (t.tag) {
    case 3:
        var e = t.stateNode;
        if (e.current.memoizedState.isDehydrated) {
            var n = ir(e.pendingLanes);
            n !== 0 && (Da(e, n | 1),
            je(e, ne()),
            !(F & 6) && (Ti = ne() + 500,
            mn()))
        }
        break;
    case 13:
        An(function() {
            var i = At(t, 1);
            if (i !== null) {
                var r = be();
                yt(i, t, 1, r)
            }
        }),
        pu(t, 1)
    }
}
;
Na = function(t) {
    if (t.tag === 13) {
        var e = At(t, 134217728);
        if (e !== null) {
            var n = be();
            yt(e, t, 134217728, n)
        }
        pu(t, 134217728)
    }
}
;
Rd = function(t) {
    if (t.tag === 13) {
        var e = sn(t)
          , n = At(t, e);
        if (n !== null) {
            var i = be();
            yt(n, t, e, i)
        }
        pu(t, e)
    }
}
;
Td = function() {
    return B
}
;
Ld = function(t, e) {
    var n = B;
    try {
        return B = t,
        e()
    } finally {
        B = n
    }
}
;
Dl = function(t, e, n) {
    switch (e) {
    case "input":
        if (bl(t, n),
        e = n.name,
        n.type === "radio" && e != null) {
            for (n = t; n.parentNode; )
                n = n.parentNode;
            for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + e) + '][type="radio"]'),
            e = 0; e < n.length; e++) {
                var i = n[e];
                if (i !== t && i.form === t.form) {
                    var r = hs(i);
                    if (!r)
                        throw Error(S(90));
                    cd(i),
                    bl(i, r)
                }
            }
        }
        break;
    case "textarea":
        dd(t, n);
        break;
    case "select":
        e = n.value,
        e != null && mi(t, !!n.multiple, e, !1)
    }
}
;
wd = uu;
xd = An;
var cg = {
    usingClientEntryPoint: !1,
    Events: [Br, oi, hs, gd, vd, uu]
}
  , Ki = {
    findFiberByHostInstance: zn,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom"
}
  , fg = {
    bundleType: Ki.bundleType,
    version: Ki.version,
    rendererPackageName: Ki.rendererPackageName,
    rendererConfig: Ki.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Ut.ReactCurrentDispatcher,
    findHostInstanceByFiber: function(t) {
        return t = Sd(t),
        t === null ? null : t.stateNode
    },
    findFiberByHostInstance: Ki.findFiberByHostInstance || ag,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var lo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!lo.isDisabled && lo.supportsFiber)
        try {
            us = lo.inject(fg),
            Pt = lo
        } catch {}
}
qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = cg;
qe.createPortal = function(t, e) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!yu(e))
        throw Error(S(200));
    return lg(t, e, null, n)
}
;
qe.createRoot = function(t, e) {
    if (!yu(t))
        throw Error(S(299));
    var n = !1
      , i = ""
      , r = tp;
    return e != null && (e.unstable_strictMode === !0 && (n = !0),
    e.identifierPrefix !== void 0 && (i = e.identifierPrefix),
    e.onRecoverableError !== void 0 && (r = e.onRecoverableError)),
    e = hu(t, 1, !1, null, null, n, !1, i, r),
    t[$t] = e.current,
    Er(t.nodeType === 8 ? t.parentNode : t),
    new mu(e)
}
;
qe.findDOMNode = function(t) {
    if (t == null)
        return null;
    if (t.nodeType === 1)
        return t;
    var e = t._reactInternals;
    if (e === void 0)
        throw typeof t.render == "function" ? Error(S(188)) : (t = Object.keys(t).join(","),
        Error(S(268, t)));
    return t = Sd(e),
    t = t === null ? null : t.stateNode,
    t
}
;
qe.flushSync = function(t) {
    return An(t)
}
;
qe.hydrate = function(t, e, n) {
    if (!_s(e))
        throw Error(S(200));
    return Ss(null, t, e, !0, n)
}
;
qe.hydrateRoot = function(t, e, n) {
    if (!yu(t))
        throw Error(S(405));
    var i = n != null && n.hydratedSources || null
      , r = !1
      , o = ""
      , s = tp;
    if (n != null && (n.unstable_strictMode === !0 && (r = !0),
    n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
    n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    e = ep(e, null, t, 1, n ?? null, r, !1, o, s),
    t[$t] = e.current,
    Er(t),
    i)
        for (t = 0; t < i.length; t++)
            n = i[t],
            r = n._getVersion,
            r = r(n._source),
            e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [n, r] : e.mutableSourceEagerHydrationData.push(n, r);
    return new ks(e)
}
;
qe.render = function(t, e, n) {
    if (!_s(e))
        throw Error(S(200));
    return Ss(null, t, e, !1, n)
}
;
qe.unmountComponentAtNode = function(t) {
    if (!_s(t))
        throw Error(S(40));
    return t._reactRootContainer ? (An(function() {
        Ss(null, null, t, !1, function() {
            t._reactRootContainer = null,
            t[$t] = null
        })
    }),
    !0) : !1
}
;
qe.unstable_batchedUpdates = uu;
qe.unstable_renderSubtreeIntoContainer = function(t, e, n, i) {
    if (!_s(n))
        throw Error(S(200));
    if (t == null || t._reactInternals === void 0)
        throw Error(S(38));
    return Ss(t, e, n, !1, i)
}
;
qe.version = "18.3.1-next-f1338f8080-20240426";
function np() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(np)
        } catch (t) {
            console.error(t)
        }
}
np(),
nd.exports = qe;
var dg = nd.exports
  , Dc = dg;
kl.createRoot = Dc.createRoot,
kl.hydrateRoot = Dc.hydrateRoot;
const Mn = "generated"
  , hg = "pointerdown"
  , pg = "pointerup"
  , pa = "pointerleave"
  , mg = "pointerout"
  , Bn = "pointermove"
  , yg = "touchstart"
  , Nc = "touchend"
  , gg = "touchmove"
  , vg = "touchcancel"
  , wg = "resize"
  , xg = "visibilitychange"
  , rt = "tsParticles - Error"
  , Zt = 100
  , Fc = .5
  , xe = 1e3;
var pe;
(function(t) {
    t.bottom = "bottom",
    t.bottomLeft = "bottom-left",
    t.bottomRight = "bottom-right",
    t.left = "left",
    t.none = "none",
    t.right = "right",
    t.top = "top",
    t.topLeft = "top-left",
    t.topRight = "top-right",
    t.outside = "outside",
    t.inside = "inside"
}
)(pe || (pe = {}));
function ip(t) {
    return typeof t == "boolean"
}
function fn(t) {
    return typeof t == "string"
}
function dn(t) {
    return typeof t == "number"
}
function di(t) {
    return typeof t == "object" && t !== null
}
function Mt(t) {
    return Array.isArray(t)
}
const Ct = {
    x: 0,
    y: 0,
    z: 0
}
  , jc = 2
  , kg = 1;
class $e {
    constructor(e, n, i) {
        if (this._updateFromAngle = (r,o)=>{
            this.x = Math.cos(r) * o,
            this.y = Math.sin(r) * o
        }
        ,
        !dn(e) && e) {
            this.x = e.x,
            this.y = e.y;
            const r = e;
            this.z = r.z ? r.z : Ct.z
        } else if (e !== void 0 && n !== void 0)
            this.x = e,
            this.y = n,
            this.z = i ?? Ct.z;
        else
            throw new Error(`${rt} Vector3d not initialized correctly`)
    }
    static get origin() {
        return $e.create(Ct.x, Ct.y, Ct.z)
    }
    get angle() {
        return Math.atan2(this.y, this.x)
    }
    set angle(e) {
        this._updateFromAngle(e, this.length)
    }
    get length() {
        return Math.sqrt(this.getLengthSq())
    }
    set length(e) {
        this._updateFromAngle(this.angle, e)
    }
    static clone(e) {
        return $e.create(e.x, e.y, e.z)
    }
    static create(e, n, i) {
        return new $e(e,n,i)
    }
    add(e) {
        return $e.create(this.x + e.x, this.y + e.y, this.z + e.z)
    }
    addTo(e) {
        this.x += e.x,
        this.y += e.y,
        this.z += e.z
    }
    copy() {
        return $e.clone(this)
    }
    distanceTo(e) {
        return this.sub(e).length
    }
    distanceToSq(e) {
        return this.sub(e).getLengthSq()
    }
    div(e) {
        return $e.create(this.x / e, this.y / e, this.z / e)
    }
    divTo(e) {
        this.x /= e,
        this.y /= e,
        this.z /= e
    }
    getLengthSq() {
        return this.x ** jc + this.y ** jc
    }
    mult(e) {
        return $e.create(this.x * e, this.y * e, this.z * e)
    }
    multTo(e) {
        this.x *= e,
        this.y *= e,
        this.z *= e
    }
    normalize() {
        const e = this.length;
        e != 0 && this.multTo(kg / e)
    }
    rotate(e) {
        return $e.create(this.x * Math.cos(e) - this.y * Math.sin(e), this.x * Math.sin(e) + this.y * Math.cos(e), Ct.z)
    }
    setTo(e) {
        this.x = e.x,
        this.y = e.y;
        const n = e;
        this.z = n.z ? n.z : Ct.z
    }
    sub(e) {
        return $e.create(this.x - e.x, this.y - e.y, this.z - e.z)
    }
    subFrom(e) {
        this.x -= e.x,
        this.y -= e.y,
        this.z -= e.z
    }
}
class fe extends $e {
    constructor(e, n) {
        super(e, n, Ct.z)
    }
    static get origin() {
        return fe.create(Ct.x, Ct.y)
    }
    static clone(e) {
        return fe.create(e.x, e.y)
    }
    static create(e, n) {
        return new fe(e,n)
    }
}
let _g = Math.random;
const ma = new Map
  , Sg = 2
  , Cg = Math.PI * Sg;
function il(t, e) {
    ma.get(t) || ma.set(t, e)
}
function rp(t) {
    return ma.get(t) ?? (e=>e)
}
function W() {
    return ot(_g(), 0, 1 - Number.EPSILON)
}
function ot(t, e, n) {
    return Math.min(Math.max(t, e), n)
}
function rl(t, e, n, i) {
    return Math.floor((t * n + e * i) / (n + i))
}
function Ue(t) {
    const e = dt(t)
      , n = 0;
    let i = Cs(t);
    return e === i && (i = n),
    W() * (e - i) + i
}
function M(t) {
    return dn(t) ? t : Ue(t)
}
function Cs(t) {
    return dn(t) ? t : t.min
}
function dt(t) {
    return dn(t) ? t : t.max
}
function j(t, e) {
    if (t === e || e === void 0 && dn(t))
        return t;
    const n = Cs(t)
      , i = dt(t);
    return e !== void 0 ? {
        min: Math.min(n, e),
        max: Math.max(i, e)
    } : j(n, i)
}
function Me(t, e) {
    const n = t.x - e.x
      , i = t.y - e.y
      , r = 2;
    return {
        dx: n,
        dy: i,
        distance: Math.sqrt(n ** r + i ** r)
    }
}
function Ve(t, e) {
    return Me(t, e).distance
}
function an(t) {
    return t * Math.PI / 180
}
function Eg(t, e, n) {
    if (dn(t))
        return an(t);
    const i = 0
      , r = .5
      , o = .25
      , s = r + o;
    switch (t) {
    case pe.top:
        return -Math.PI * r;
    case pe.topRight:
        return -Math.PI * o;
    case pe.right:
        return i;
    case pe.bottomRight:
        return Math.PI * o;
    case pe.bottom:
        return Math.PI * r;
    case pe.bottomLeft:
        return Math.PI * s;
    case pe.left:
        return Math.PI;
    case pe.topLeft:
        return -Math.PI * s;
    case pe.inside:
        return Math.atan2(n.y - e.y, n.x - e.x);
    case pe.outside:
        return Math.atan2(e.y - n.y, e.x - n.x);
    default:
        return W() * Cg
    }
}
function zg(t) {
    const e = fe.origin;
    return e.length = 1,
    e.angle = t,
    e
}
function $c(t, e, n, i) {
    return fe.create(t.x * (n - i) / (n + i) + e.x * 2 * i / (n + i), t.y)
}
function Pg(t) {
    var e, n;
    return {
        x: ((e = t.position) == null ? void 0 : e.x) ?? W() * t.size.width,
        y: ((n = t.position) == null ? void 0 : n.y) ?? W() * t.size.height
    }
}
function op(t) {
    return t ? t.endsWith("%") ? parseFloat(t) / Zt : parseFloat(t) : 1
}
var On;
(function(t) {
    t.auto = "auto",
    t.increase = "increase",
    t.decrease = "decrease",
    t.random = "random"
}
)(On || (On = {}));
var re;
(function(t) {
    t.increasing = "increasing",
    t.decreasing = "decreasing"
}
)(re || (re = {}));
var Un;
(function(t) {
    t.none = "none",
    t.max = "max",
    t.min = "min"
}
)(Un || (Un = {}));
var D;
(function(t) {
    t.bottom = "bottom",
    t.left = "left",
    t.right = "right",
    t.top = "top"
}
)(D || (D = {}));
var Li;
(function(t) {
    t.precise = "precise",
    t.percent = "percent"
}
)(Li || (Li = {}));
var ki;
(function(t) {
    t.max = "max",
    t.min = "min",
    t.random = "random"
}
)(ki || (ki = {}));
const bg = {
    debug: console.debug,
    error: console.error,
    info: console.info,
    log: console.log,
    verbose: console.log,
    warning: console.warn
};
function Hn() {
    return bg
}
function Ac(t) {
    const e = {
        bounced: !1
    }
      , {pSide: n, pOtherSide: i, rectSide: r, rectOtherSide: o, velocity: s, factor: l} = t
      , a = .5
      , u = 0;
    return i.min < o.min || i.min > o.max || i.max < o.min || i.max > o.max || (n.max >= r.min && n.max <= (r.max + r.min) * a && s > u || n.min <= r.max && n.min > (r.max + r.min) * a && s < u) && (e.velocity = s * -l,
    e.bounced = !0),
    e
}
function Mg(t, e) {
    const n = st(e, i=>t.matches(i));
    return Mt(n) ? n.some(i=>i) : n
}
function Vn() {
    return typeof window > "u" || !window || typeof window.document > "u" || !window.document
}
function Og() {
    return !Vn() && typeof matchMedia < "u"
}
function sp(t) {
    if (Og())
        return matchMedia(t)
}
function Rg(t) {
    if (!(Vn() || typeof IntersectionObserver > "u"))
        return new IntersectionObserver(t)
}
function Tg(t) {
    if (!(Vn() || typeof MutationObserver > "u"))
        return new MutationObserver(t)
}
function ie(t, e) {
    return t === e || Mt(e) && e.indexOf(t) > -1
}
async function Bc(t, e) {
    try {
        await document.fonts.load(`${e ?? "400"} 36px '${t ?? "Verdana"}'`)
    } catch {}
}
function Lg(t) {
    return Math.floor(W() * t.length)
}
function Es(t, e, n=!0) {
    return t[e !== void 0 && n ? e % t.length : Lg(t)]
}
function gu(t, e, n, i, r) {
    return Ig(Hr(t, i ?? 0), e, n, r)
}
function Ig(t, e, n, i) {
    let r = !0;
    return (!i || i === D.bottom) && (r = t.top < e.height + n.x),
    r && (!i || i === D.left) && (r = t.right > n.x),
    r && (!i || i === D.right) && (r = t.left < e.width + n.y),
    r && (!i || i === D.top) && (r = t.bottom > n.y),
    r
}
function Hr(t, e) {
    return {
        bottom: t.y + e,
        left: t.x - e,
        right: t.x + e,
        top: t.y - e
    }
}
function Se(t, ...e) {
    for (const n of e) {
        if (n == null)
            continue;
        if (!di(n)) {
            t = n;
            continue
        }
        const i = Array.isArray(n);
        i && (di(t) || !t || !Array.isArray(t)) ? t = [] : !i && (di(t) || !t || Array.isArray(t)) && (t = {});
        for (const r in n) {
            if (r === "__proto__")
                continue;
            const o = n
              , s = o[r]
              , l = t;
            l[r] = di(s) && Array.isArray(s) ? s.map(a=>Se(l[r], a)) : Se(l[r], s)
        }
    }
    return t
}
function vu(t, e) {
    return !!up(e, n=>n.enable && ie(t, n.mode))
}
function wu(t, e, n) {
    st(e, i=>{
        const r = i.mode;
        i.enable && ie(t, r) && Dg(i, n)
    }
    )
}
function Dg(t, e) {
    const n = t.selectors;
    st(n, i=>{
        e(i, t)
    }
    )
}
function lp(t, e) {
    if (!(!e || !t))
        return up(t, n=>Mg(e, n.selectors))
}
function ya(t) {
    return {
        position: t.getPosition(),
        radius: t.getRadius(),
        mass: t.getMass(),
        velocity: t.velocity,
        factor: fe.create(M(t.options.bounce.horizontal.value), M(t.options.bounce.vertical.value))
    }
}
function ap(t, e) {
    const {x: n, y: i} = t.velocity.sub(e.velocity)
      , [r,o] = [t.position, e.position]
      , {dx: s, dy: l} = Me(o, r);
    if (n * s + i * l < 0)
        return;
    const u = -Math.atan2(l, s)
      , c = t.mass
      , f = e.mass
      , d = t.velocity.rotate(u)
      , m = e.velocity.rotate(u)
      , v = $c(d, m, c, f)
      , y = $c(m, d, c, f)
      , k = v.rotate(-u)
      , p = y.rotate(-u);
    t.velocity.x = k.x * t.factor.x,
    t.velocity.y = k.y * t.factor.y,
    e.velocity.x = p.x * e.factor.x,
    e.velocity.y = p.y * e.factor.y
}
function Ng(t, e) {
    const n = t.getPosition()
      , i = t.getRadius()
      , r = Hr(n, i)
      , o = t.options.bounce
      , s = Ac({
        pSide: {
            min: r.left,
            max: r.right
        },
        pOtherSide: {
            min: r.top,
            max: r.bottom
        },
        rectSide: {
            min: e.left,
            max: e.right
        },
        rectOtherSide: {
            min: e.top,
            max: e.bottom
        },
        velocity: t.velocity.x,
        factor: M(o.horizontal.value)
    });
    s.bounced && (s.velocity !== void 0 && (t.velocity.x = s.velocity),
    s.position !== void 0 && (t.position.x = s.position));
    const l = Ac({
        pSide: {
            min: r.top,
            max: r.bottom
        },
        pOtherSide: {
            min: r.left,
            max: r.right
        },
        rectSide: {
            min: e.top,
            max: e.bottom
        },
        rectOtherSide: {
            min: e.left,
            max: e.right
        },
        velocity: t.velocity.y,
        factor: M(o.vertical.value)
    });
    l.bounced && (l.velocity !== void 0 && (t.velocity.y = l.velocity),
    l.position !== void 0 && (t.position.y = l.position))
}
function st(t, e) {
    return Mt(t) ? t.map((i,r)=>e(i, r)) : e(t, 0)
}
function ht(t, e, n) {
    return Mt(t) ? Es(t, e, n) : t
}
function up(t, e) {
    return Mt(t) ? t.find((i,r)=>e(i, r)) : e(t, 0) ? t : void 0
}
function cp(t, e) {
    const n = t.value
      , i = t.animation
      , r = {
        delayTime: M(i.delay) * xe,
        enable: i.enable,
        value: M(t.value) * e,
        max: dt(n) * e,
        min: Cs(n) * e,
        loops: 0,
        maxLoops: M(i.count),
        time: 0
    }
      , o = 1;
    if (i.enable) {
        switch (r.decay = o - M(i.decay),
        i.mode) {
        case On.increase:
            r.status = re.increasing;
            break;
        case On.decrease:
            r.status = re.decreasing;
            break;
        case On.random:
            r.status = W() >= Fc ? re.increasing : re.decreasing;
            break
        }
        const s = i.mode === On.auto;
        switch (i.startValue) {
        case ki.min:
            r.value = r.min,
            s && (r.status = re.increasing);
            break;
        case ki.max:
            r.value = r.max,
            s && (r.status = re.decreasing);
            break;
        case ki.random:
        default:
            r.value = Ue(r),
            s && (r.status = W() >= Fc ? re.increasing : re.decreasing);
            break
        }
    }
    return r.initialValue = r.value,
    r
}
function Fg(t, e) {
    if (!(t.mode === Li.percent)) {
        const {mode: r, ...o} = t;
        return o
    }
    return "x"in t ? {
        x: t.x / Zt * e.width,
        y: t.y / Zt * e.height
    } : {
        width: t.width / Zt * e.width,
        height: t.height / Zt * e.height
    }
}
function fp(t, e) {
    return Fg(t, e)
}
function jg(t, e, n, i, r) {
    switch (e) {
    case Un.max:
        n >= r && t.destroy();
        break;
    case Un.min:
        n <= i && t.destroy();
        break
    }
}
function xu(t, e, n, i, r) {
    if (t.destroyed || !e || !e.enable || (e.maxLoops ?? 0) > 0 && (e.loops ?? 0) > (e.maxLoops ?? 0))
        return;
    const c = (e.velocity ?? 0) * r.factor
      , f = e.min
      , d = e.max
      , m = e.decay ?? 1;
    if (e.time || (e.time = 0),
    (e.delayTime ?? 0) > 0 && e.time < (e.delayTime ?? 0) && (e.time += r.value),
    !((e.delayTime ?? 0) > 0 && e.time < (e.delayTime ?? 0))) {
        switch (e.status) {
        case re.increasing:
            e.value >= d ? (n ? e.status = re.decreasing : e.value -= d,
            e.loops || (e.loops = 0),
            e.loops++) : e.value += c;
            break;
        case re.decreasing:
            e.value <= f ? (n ? e.status = re.increasing : e.value += d,
            e.loops || (e.loops = 0),
            e.loops++) : e.value -= c
        }
        e.velocity && m !== 1 && (e.velocity *= m),
        jg(t, i, e.value, f, d),
        t.destroyed || (e.value = ot(e.value, f, d))
    }
}
var ga;
(function(t) {
    t.darken = "darken",
    t.enlighten = "enlighten"
}
)(ga || (ga = {}));
var En;
(function(t) {
    t[t.r = 1] = "r",
    t[t.g = 2] = "g",
    t[t.b = 3] = "b",
    t[t.a = 4] = "a"
}
)(En || (En = {}));
const rs = "random"
  , To = "mid"
  , zs = new Map;
function Uc(t) {
    zs.set(t.key, t)
}
function $g(t) {
    for (const [,a] of zs)
        if (t.startsWith(a.stringPrefix))
            return a.parseString(t);
    const e = /^#?([a-f\d])([a-f\d])([a-f\d])([a-f\d])?$/i
      , n = t.replace(e, (a,u,c,f,d)=>u + u + c + c + f + f + (d !== void 0 ? d + d : ""))
      , i = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i
      , r = i.exec(n)
      , o = 16;
    return r ? {
        a: r[En.a] !== void 0 ? parseInt(r[En.a], o) / 255 : 1,
        b: parseInt(r[En.b], o),
        g: parseInt(r[En.g], o),
        r: parseInt(r[En.r], o)
    } : void 0
}
function gt(t, e, n=!0) {
    if (!t)
        return;
    const i = fn(t) ? {
        value: t
    } : t;
    if (fn(i.value))
        return dp(i.value, e, n);
    if (Mt(i.value))
        return gt({
            value: Es(i.value, e, n)
        });
    for (const [,r] of zs) {
        const o = r.handleRangeColor(i);
        if (o)
            return o
    }
}
function dp(t, e, n=!0) {
    if (!t)
        return;
    const i = fn(t) ? {
        value: t
    } : t;
    if (fn(i.value))
        return i.value === rs ? pp() : Ag(i.value);
    if (Mt(i.value))
        return dp({
            value: Es(i.value, e, n)
        });
    for (const [,r] of zs) {
        const o = r.handleColor(i);
        if (o)
            return o
    }
}
function Ir(t, e, n=!0) {
    const i = gt(t, e, n);
    return i ? hp(i) : void 0
}
function hp(t) {
    const c = t.r / 255
      , f = t.g / 255
      , d = t.b / 255
      , m = Math.max(c, f, d)
      , v = Math.min(c, f, d)
      , y = {
        h: 0,
        l: (m + v) * .5,
        s: 0
    };
    return m !== v && (y.s = y.l < .5 ? (m - v) / (m + v) : (m - v) / (2 - m - v),
    y.h = c === m ? (f - d) / (m - v) : y.h = f === m ? 2 + (d - c) / (m - v) : 2 * 2 + (c - f) / (m - v)),
    y.l *= 100,
    y.s *= 100,
    y.h *= 60,
    y.h < 0 && (y.h += 360),
    y.h >= 360 && (y.h -= 360),
    y
}
function Ag(t) {
    return $g(t)
}
function Ii(t) {
    const s = (t.h % 360 + 360) % 360
      , l = Math.max(0, Math.min(100, t.s))
      , a = Math.max(0, Math.min(100, t.l))
      , u = s / 360
      , c = l / 100
      , f = a / 100
      , d = 255
      , m = 3;
    if (l === 0) {
        const R = Math.round(f * d);
        return {
            r: R,
            g: R,
            b: R
        }
    }
    const v = .5
      , y = 2
      , k = (R,O,A)=>{
        if (A < 0 && A++,
        A > 1 && A--,
        A * 6 < 1)
            return R + (O - R) * 6 * A;
        if (A * y < 1)
            return O;
        if (A * m < 1 * y) {
            const Ge = y / m;
            return R + (O - R) * (Ge - A) * 6
        }
        return R
    }
      , p = 1
      , h = f < v ? f * (p + c) : f + c - f * c
      , g = y * f - h
      , w = 1
      , x = w / m
      , _ = Math.min(d, d * k(g, h, u + x))
      , E = Math.min(d, d * k(g, h, u))
      , z = Math.min(d, d * k(g, h, u - x));
    return {
        r: Math.round(_),
        g: Math.round(E),
        b: Math.round(z)
    }
}
function Bg(t) {
    const e = Ii(t);
    return {
        a: t.a,
        b: e.b,
        g: e.g,
        r: e.r
    }
}
function pp(t) {
    return {
        b: Math.floor(Ue(j(0, 256))),
        g: Math.floor(Ue(j(0, 256))),
        r: Math.floor(Ue(j(0, 256)))
    }
}
function Ft(t, e) {
    return `rgba(${t.r}, ${t.g}, ${t.b}, ${e ?? 1})`
}
function Dr(t, e) {
    return `hsla(${t.h}, ${t.s}%, ${t.l}%, ${e ?? 1})`
}
function ku(t, e, n, i) {
    let r = t
      , o = e;
    return r.r === void 0 && (r = Ii(t)),
    o.r === void 0 && (o = Ii(e)),
    {
        b: rl(r.b, o.b, n, i),
        g: rl(r.g, o.g, n, i),
        r: rl(r.r, o.r, n, i)
    }
}
function va(t, e, n) {
    if (n === rs)
        return pp();
    if (n === To) {
        const i = t.getFillColor() ?? t.getStrokeColor()
          , r = (e == null ? void 0 : e.getFillColor()) ?? (e == null ? void 0 : e.getStrokeColor());
        if (i && r && e)
            return ku(i, r, t.getRadius(), e.getRadius());
        {
            const o = i ?? r;
            if (o)
                return Ii(o)
        }
    } else
        return n
}
function mp(t, e, n) {
    const i = fn(t) ? t : t.value;
    return i === rs ? n ? gt({
        value: i
    }) : e ? rs : To : i === To ? To : gt({
        value: i
    })
}
function Hc(t) {
    return t !== void 0 ? {
        h: t.h.value,
        s: t.s.value,
        l: t.l.value
    } : void 0
}
function yp(t, e, n) {
    const i = {
        h: {
            enable: !1,
            value: t.h
        },
        s: {
            enable: !1,
            value: t.s
        },
        l: {
            enable: !1,
            value: t.l
        }
    };
    return e && (ol(i.h, e.h, n),
    ol(i.s, e.s, n),
    ol(i.l, e.l, n)),
    i
}
function ol(t, e, n) {
    t.enable = e.enable;
    const i = 0
      , r = 1
      , o = 0
      , s = 0;
    t.enable ? (t.velocity = M(e.speed) / Zt * n,
    t.decay = r - M(e.decay),
    t.status = re.increasing,
    t.loops = o,
    t.maxLoops = M(e.count),
    t.time = s,
    t.delayTime = M(e.delay) * xe,
    e.sync || (t.velocity *= W(),
    t.value *= W()),
    t.initialValue = t.value,
    t.offset = j(e.offset)) : t.velocity = i
}
function sl(t, e, n, i) {
    if (!t || !t.enable || (t.maxLoops ?? 0) > 0 && (t.loops ?? 0) > (t.maxLoops ?? 0) || (t.time || (t.time = 0),
    (t.delayTime ?? 0) > 0 && t.time < (t.delayTime ?? 0) && (t.time += i.value),
    (t.delayTime ?? 0) > 0 && t.time < (t.delayTime ?? 0)))
        return;
    const c = t.offset ? Ue(t.offset) : 0
      , f = (t.velocity ?? 0) * i.factor + c * 3.6
      , d = t.decay ?? 1
      , m = dt(e)
      , v = Cs(e);
    !n || t.status === re.increasing ? (t.value += f,
    t.value > m && (t.loops || (t.loops = 0),
    t.loops++,
    n ? t.status = re.decreasing : t.value -= m)) : (t.value -= f,
    t.value < 0 && (t.loops || (t.loops = 0),
    t.loops++,
    t.status = re.increasing)),
    t.velocity && d !== 1 && (t.velocity *= d),
    t.value = ot(t.value, v, m)
}
function gp(t, e) {
    if (!t)
        return;
    const {h: n, s: i, l: r} = t
      , o = {
        h: {
            min: 0,
            max: 360
        },
        s: {
            min: 0,
            max: 100
        },
        l: {
            min: 0,
            max: 100
        }
    };
    n && sl(n, o.h, !1, e),
    i && sl(i, o.s, !0, e),
    r && sl(r, o.l, !0, e)
}
const Di = {
    x: 0,
    y: 0
}
  , ao = {
    a: 1,
    b: 0,
    c: 0,
    d: 1
};
function pr(t, e, n) {
    t.beginPath(),
    t.moveTo(e.x, e.y),
    t.lineTo(n.x, n.y),
    t.closePath()
}
function Ug(t, e, n) {
    t.fillStyle = n ?? "rgba(0,0,0,0)",
    t.fillRect(Di.x, Di.y, e.width, e.height)
}
function Hg(t, e, n, i) {
    n && (t.globalAlpha = i,
    t.drawImage(n, Di.x, Di.y, e.width, e.height),
    t.globalAlpha = 1)
}
function ll(t, e) {
    t.clearRect(Di.x, Di.y, e.width, e.height)
}
function Vg(t) {
    const {container: e, context: n, particle: i, delta: r, colorStyles: o, backgroundMask: s, composite: l, radius: a, opacity: u, shadow: c, transform: f} = t
      , d = i.getPosition()
      , m = 0
      , v = i.rotation + (i.pathRotation ? i.velocity.angle : m)
      , y = {
        sin: Math.sin(v),
        cos: Math.cos(v)
    }
      , k = !!v
      , p = 1
      , h = {
        a: y.cos * (f.a ?? ao.a),
        b: k ? y.sin * (f.b ?? p) : f.b ?? ao.b,
        c: k ? -y.sin * (f.c ?? p) : f.c ?? ao.c,
        d: y.cos * (f.d ?? ao.d)
    };
    n.setTransform(h.a, h.b, h.c, h.d, d.x, d.y),
    s && (n.globalCompositeOperation = l);
    const g = i.shadowColor;
    c.enable && g && (n.shadowBlur = c.blur,
    n.shadowColor = Ft(g),
    n.shadowOffsetX = c.offset.x,
    n.shadowOffsetY = c.offset.y),
    o.fill && (n.fillStyle = o.fill);
    const w = 0
      , x = i.strokeWidth ?? w;
    n.lineWidth = x,
    o.stroke && (n.strokeStyle = o.stroke);
    const _ = {
        container: e,
        context: n,
        particle: i,
        radius: a,
        opacity: u,
        delta: r,
        transformData: h,
        strokeWidth: x
    };
    qg(_),
    Qg(_),
    Wg(_),
    n.globalCompositeOperation = "source-over",
    n.resetTransform()
}
function Wg(t) {
    const {container: e, context: n, particle: i, radius: r, opacity: o, delta: s, transformData: l} = t;
    if (!i.effect)
        return;
    const a = e.effectDrawers.get(i.effect);
    a && a.draw({
        context: n,
        particle: i,
        radius: r,
        opacity: o,
        delta: s,
        pixelRatio: e.retina.pixelRatio,
        transformData: {
            ...l
        }
    })
}
function qg(t) {
    const {container: e, context: n, particle: i, radius: r, opacity: o, delta: s, strokeWidth: l, transformData: a} = t
      , u = 0;
    if (!i.shape)
        return;
    const c = e.shapeDrawers.get(i.shape);
    c && (n.beginPath(),
    c.draw({
        context: n,
        particle: i,
        radius: r,
        opacity: o,
        delta: s,
        pixelRatio: e.retina.pixelRatio,
        transformData: {
            ...a
        }
    }),
    i.shapeClose && n.closePath(),
    l > u && n.stroke(),
    i.shapeFill && n.fill())
}
function Qg(t) {
    const {container: e, context: n, particle: i, radius: r, opacity: o, delta: s, transformData: l} = t;
    if (!i.shape)
        return;
    const a = e.shapeDrawers.get(i.shape);
    a != null && a.afterDraw && a.afterDraw({
        context: n,
        particle: i,
        radius: r,
        opacity: o,
        delta: s,
        pixelRatio: e.retina.pixelRatio,
        transformData: {
            ...l
        }
    })
}
function Gg(t, e, n) {
    e.draw && e.draw(t, n)
}
function Yg(t, e, n, i) {
    e.drawParticle && e.drawParticle(t, n, i)
}
function Kg(t, e, n) {
    return {
        h: t.h,
        s: t.s,
        l: t.l + (e === ga.darken ? -1 : 1) * n
    }
}
function Xg(t, e, n) {
    const i = e[n]
      , r = 1;
    i !== void 0 && (t[n] = (t[n] ?? r) * i)
}
function Vc(t, e, n=!1) {
    if (!e)
        return;
    const i = t;
    if (!i)
        return;
    const r = i.style;
    if (r)
        for (const o in e) {
            const s = e[o];
            s && r.setProperty(o, s, n ? "important" : "")
        }
}
class Zg {
    constructor(e) {
        this.container = e,
        this._applyPostDrawUpdaters = n=>{
            var i;
            for (const r of this._postDrawUpdaters)
                (i = r.afterDraw) == null || i.call(r, n)
        }
        ,
        this._applyPreDrawUpdaters = (n,i,r,o,s,l)=>{
            var a;
            for (const u of this._preDrawUpdaters) {
                if (u.getColorStyles) {
                    const {fill: c, stroke: f} = u.getColorStyles(i, n, r, o);
                    c && (s.fill = c),
                    f && (s.stroke = f)
                }
                if (u.getTransformValues) {
                    const c = u.getTransformValues(i);
                    for (const f in c)
                        Xg(l, c, f)
                }
                (a = u.beforeDraw) == null || a.call(u, i)
            }
        }
        ,
        this._applyResizePlugins = ()=>{
            var n;
            for (const i of this._resizePlugins)
                (n = i.resize) == null || n.call(i)
        }
        ,
        this._getPluginParticleColors = n=>{
            let i, r;
            for (const o of this._colorPlugins)
                if (!i && o.particleFillColor && (i = Ir(o.particleFillColor(n))),
                !r && o.particleStrokeColor && (r = Ir(o.particleStrokeColor(n))),
                i && r)
                    break;
            return [i, r]
        }
        ,
        this._initCover = async()=>{
            const n = this.container.actualOptions
              , i = n.backgroundMask.cover
              , r = i.color;
            if (r) {
                const o = gt(r);
                if (o) {
                    const s = {
                        ...o,
                        a: i.opacity
                    };
                    this._coverColorStyle = Ft(s, s.a)
                }
            } else
                await new Promise((o,s)=>{
                    if (!i.image)
                        return;
                    const l = document.createElement("img");
                    l.addEventListener("load", ()=>{
                        this._coverImage = {
                            image: l,
                            opacity: i.opacity
                        },
                        o()
                    }
                    ),
                    l.addEventListener("error", a=>{
                        s(a.error)
                    }
                    ),
                    l.src = i.image
                }
                )
        }
        ,
        this._initStyle = ()=>{
            const n = this.element
              , i = this.container.actualOptions;
            if (n) {
                this._fullScreen ? (this._originalStyle = Se({}, n.style),
                this._setFullScreenStyle()) : this._resetOriginalStyle();
                for (const r in i.style) {
                    if (!r || !i.style)
                        continue;
                    const o = i.style[r];
                    o && n.style.setProperty(r, o, "important")
                }
            }
        }
        ,
        this._initTrail = async()=>{
            const n = this.container.actualOptions
              , i = n.particles.move.trail
              , r = i.fill;
            if (!i.enable)
                return;
            const o = 1
              , s = o / i.length;
            if (r.color) {
                const l = gt(r.color);
                if (!l)
                    return;
                this._trailFill = {
                    color: {
                        ...l
                    },
                    opacity: s
                }
            } else
                await new Promise((l,a)=>{
                    if (!r.image)
                        return;
                    const u = document.createElement("img");
                    u.addEventListener("load", ()=>{
                        this._trailFill = {
                            image: u,
                            opacity: s
                        },
                        l()
                    }
                    ),
                    u.addEventListener("error", c=>{
                        a(c.error)
                    }
                    ),
                    u.src = r.image
                }
                )
        }
        ,
        this._paintBase = n=>{
            this.draw(i=>Ug(i, this.size, n))
        }
        ,
        this._paintImage = (n,i)=>{
            this.draw(r=>Hg(r, this.size, n, i))
        }
        ,
        this._repairStyle = ()=>{
            const n = this.element;
            n && (this._safeMutationObserver(i=>i.disconnect()),
            this._initStyle(),
            this.initBackground(),
            this._safeMutationObserver(i=>{
                !n || !(n instanceof Node) || i.observe(n, {
                    attributes: !0
                })
            }
            ))
        }
        ,
        this._resetOriginalStyle = ()=>{
            const n = this.element
              , i = this._originalStyle;
            n && i && Vc(n, i)
        }
        ,
        this._safeMutationObserver = n=>{
            this._mutationObserver && n(this._mutationObserver)
        }
        ,
        this._setFullScreenStyle = ()=>{
            const n = this.element;
            if (!n)
                return;
            Vc(n, {
                position: "fixed",
                zIndex: this.container.actualOptions.fullScreen.zIndex.toString(10),
                top: "0",
                left: "0",
                width: "100%",
                height: "100%"
            }, !0)
        }
        ,
        this.size = {
            height: 0,
            width: 0
        },
        this._context = null,
        this._generated = !1,
        this._preDrawUpdaters = [],
        this._postDrawUpdaters = [],
        this._resizePlugins = [],
        this._colorPlugins = []
    }
    get _fullScreen() {
        return this.container.actualOptions.fullScreen.enable
    }
    clear() {
        const e = this.container.actualOptions
          , n = e.particles.move.trail
          , i = this._trailFill;
        e.backgroundMask.enable ? this.paint() : n.enable && n.length > 0 && i ? i.color ? this._paintBase(Ft(i.color, i.opacity)) : i.image && this._paintImage(i.image, i.opacity) : e.clear && this.draw(o=>{
            ll(o, this.size)
        }
        )
    }
    destroy() {
        if (this.stop(),
        this._generated) {
            const e = this.element;
            e == null || e.remove()
        } else
            this._resetOriginalStyle();
        this._preDrawUpdaters = [],
        this._postDrawUpdaters = [],
        this._resizePlugins = [],
        this._colorPlugins = []
    }
    draw(e) {
        const n = this._context;
        if (n)
            return e(n)
    }
    drawAsync(e) {
        const n = this._context;
        if (n)
            return e(n)
    }
    drawParticle(e, n) {
        if (e.spawning || e.destroyed)
            return;
        const i = e.getRadius();
        if (i <= 0)
            return;
        const o = e.getFillColor()
          , s = e.getStrokeColor() ?? o;
        let[l,a] = this._getPluginParticleColors(e);
        l || (l = o),
        a || (a = s),
        !(!l && !a) && this.draw(u=>{
            var E;
            const c = this.container
              , f = c.actualOptions
              , d = e.options.zIndex
              , m = 1
              , v = m - e.zIndexFactor
              , y = v ** d.opacityRate
              , k = 1
              , p = e.bubble.opacity ?? ((E = e.opacity) == null ? void 0 : E.value) ?? k
              , h = e.strokeOpacity ?? p
              , g = p * y
              , w = h * y
              , x = {}
              , _ = {
                fill: l ? Dr(l, g) : void 0
            };
            _.stroke = a ? Dr(a, w) : _.fill,
            this._applyPreDrawUpdaters(u, e, i, g, _, x),
            Vg({
                container: c,
                context: u,
                particle: e,
                delta: n,
                colorStyles: _,
                backgroundMask: f.backgroundMask.enable,
                composite: f.backgroundMask.composite,
                radius: i * v ** d.sizeRate,
                opacity: g,
                shadow: e.options.shadow,
                transform: x
            }),
            this._applyPostDrawUpdaters(e)
        }
        )
    }
    drawParticlePlugin(e, n, i) {
        this.draw(r=>Yg(r, e, n, i))
    }
    drawPlugin(e, n) {
        this.draw(i=>Gg(i, e, n))
    }
    async init() {
        this._safeMutationObserver(e=>e.disconnect()),
        this._mutationObserver = Tg(e=>{
            for (const n of e)
                n.type === "attributes" && n.attributeName === "style" && this._repairStyle()
        }
        ),
        this.resize(),
        this._initStyle(),
        await this._initCover();
        try {
            await this._initTrail()
        } catch (e) {
            Hn().error(e)
        }
        this.initBackground(),
        this._safeMutationObserver(e=>{
            !this.element || !(this.element instanceof Node) || e.observe(this.element, {
                attributes: !0
            })
        }
        ),
        this.initUpdaters(),
        this.initPlugins(),
        this.paint()
    }
    initBackground() {
        const e = this.container.actualOptions
          , n = e.background
          , i = this.element;
        if (!i)
            return;
        const r = i.style;
        if (r) {
            if (n.color) {
                const o = gt(n.color);
                r.backgroundColor = o ? Ft(o, n.opacity) : ""
            } else
                r.backgroundColor = "";
            r.backgroundImage = n.image || "",
            r.backgroundPosition = n.position || "",
            r.backgroundRepeat = n.repeat || "",
            r.backgroundSize = n.size || ""
        }
    }
    initPlugins() {
        this._resizePlugins = [];
        for (const [,e] of this.container.plugins)
            e.resize && this._resizePlugins.push(e),
            (e.particleFillColor ?? e.particleStrokeColor) && this._colorPlugins.push(e)
    }
    initUpdaters() {
        this._preDrawUpdaters = [],
        this._postDrawUpdaters = [];
        for (const e of this.container.particles.updaters)
            e.afterDraw && this._postDrawUpdaters.push(e),
            (e.getColorStyles ?? e.getTransformValues ?? e.beforeDraw) && this._preDrawUpdaters.push(e)
    }
    loadCanvas(e) {
        this._generated && this.element && this.element.remove(),
        this._generated = e.dataset && Mn in e.dataset ? e.dataset[Mn] === "true" : this._generated,
        this.element = e,
        this.element.ariaHidden = "true",
        this._originalStyle = Se({}, this.element.style),
        this.size.height = e.offsetHeight,
        this.size.width = e.offsetWidth,
        this._context = this.element.getContext("2d"),
        this._safeMutationObserver(n=>{
            !this.element || !(this.element instanceof Node) || n.observe(this.element, {
                attributes: !0
            })
        }
        ),
        this.container.retina.init(),
        this.initBackground()
    }
    paint() {
        const e = this.container.actualOptions;
        this.draw(n=>{
            e.backgroundMask.enable && e.backgroundMask.cover ? (ll(n, this.size),
            this._coverImage ? this._paintImage(this._coverImage.image, this._coverImage.opacity) : this._coverColorStyle ? this._paintBase(this._coverColorStyle) : this._paintBase()) : this._paintBase()
        }
        )
    }
    resize() {
        if (!this.element)
            return !1;
        const e = this.container
          , n = e.retina.pixelRatio
          , i = e.canvas.size
          , r = {
            width: this.element.offsetWidth * n,
            height: this.element.offsetHeight * n
        };
        if (r.height === i.height && r.width === i.width && r.height === this.element.height && r.width === this.element.width)
            return !1;
        const o = {
            ...i
        };
        return this.element.width = i.width = this.element.offsetWidth * n,
        this.element.height = i.height = this.element.offsetHeight * n,
        this.container.started && e.particles.setResizeFactor({
            width: i.width / o.width,
            height: i.height / o.height
        }),
        !0
    }
    stop() {
        this._safeMutationObserver(e=>e.disconnect()),
        this._mutationObserver = void 0,
        this.draw(e=>ll(e, this.size))
    }
    async windowResize() {
        if (!this.element || !this.resize())
            return;
        const e = this.container
          , n = e.updateActualOptions();
        e.particles.setDensity(),
        this._applyResizePlugins(),
        n && await e.refresh()
    }
}
var _i;
(function(t) {
    t.canvas = "canvas",
    t.parent = "parent",
    t.window = "window"
}
)(_i || (_i = {}));
const Wc = 2;
function Ke(t, e, n, i, r) {
    if (i) {
        let o = {
            passive: !0
        };
        ip(r) ? o.capture = r : r !== void 0 && (o = r),
        t.addEventListener(e, n, o)
    } else {
        const o = r;
        t.removeEventListener(e, n, o)
    }
}
class Jg {
    constructor(e) {
        this.container = e,
        this._doMouseTouchClick = n=>{
            const i = this.container
              , r = i.actualOptions;
            if (this._canPush) {
                const o = i.interactivity.mouse
                  , s = o.position;
                if (!s)
                    return;
                o.clickPosition = {
                    ...s
                },
                o.clickTime = new Date().getTime();
                const l = r.interactivity.events.onClick;
                st(l.mode, a=>this.container.handleClickMode(a))
            }
            n.type === "touchend" && setTimeout(()=>this._mouseTouchFinish(), 500)
        }
        ,
        this._handleThemeChange = n=>{
            const i = n
              , r = this.container
              , o = r.options
              , s = o.defaultThemes
              , l = i.matches ? s.dark : s.light
              , a = o.themes.find(u=>u.name === l);
            a != null && a.default.auto && r.loadTheme(l)
        }
        ,
        this._handleVisibilityChange = ()=>{
            const n = this.container
              , i = n.actualOptions;
            this._mouseTouchFinish(),
            i.pauseOnBlur && (document != null && document.hidden ? (n.pageHidden = !0,
            n.pause()) : (n.pageHidden = !1,
            n.animationStatus ? n.play(!0) : n.draw(!0)))
        }
        ,
        this._handleWindowResize = ()=>{
            this._resizeTimeout && (clearTimeout(this._resizeTimeout),
            delete this._resizeTimeout);
            const n = async()=>{
                const i = this.container.canvas;
                await (i == null ? void 0 : i.windowResize())
            }
            ;
            this._resizeTimeout = setTimeout(()=>void n(), this.container.actualOptions.interactivity.events.resize.delay * xe)
        }
        ,
        this._manageInteractivityListeners = (n,i)=>{
            const r = this._handlers
              , o = this.container
              , s = o.actualOptions
              , l = o.interactivity.element;
            if (!l)
                return;
            const a = l
              , u = o.canvas.element;
            u && (u.style.pointerEvents = a === u ? "initial" : "none"),
            (s.interactivity.events.onHover.enable || s.interactivity.events.onClick.enable) && (Ke(l, Bn, r.mouseMove, i),
            Ke(l, yg, r.touchStart, i),
            Ke(l, gg, r.touchMove, i),
            s.interactivity.events.onClick.enable ? (Ke(l, Nc, r.touchEndClick, i),
            Ke(l, pg, r.mouseUp, i),
            Ke(l, hg, r.mouseDown, i)) : Ke(l, Nc, r.touchEnd, i),
            Ke(l, n, r.mouseLeave, i),
            Ke(l, vg, r.touchCancel, i))
        }
        ,
        this._manageListeners = n=>{
            const i = this._handlers
              , r = this.container
              , o = r.actualOptions
              , s = o.interactivity.detectsOn
              , l = r.canvas.element;
            let a = pa;
            s === _i.window ? (r.interactivity.element = window,
            a = mg) : s === _i.parent && l ? r.interactivity.element = l.parentElement ?? l.parentNode : r.interactivity.element = l,
            this._manageMediaMatch(n),
            this._manageResize(n),
            this._manageInteractivityListeners(a, n),
            document && Ke(document, xg, i.visibilityChange, n, !1)
        }
        ,
        this._manageMediaMatch = n=>{
            const i = this._handlers
              , r = sp("(prefers-color-scheme: dark)");
            if (r) {
                if (r.addEventListener !== void 0) {
                    Ke(r, "change", i.themeChange, n);
                    return
                }
                r.addListener !== void 0 && (n ? r.addListener(i.oldThemeChange) : r.removeListener(i.oldThemeChange))
            }
        }
        ,
        this._manageResize = n=>{
            const i = this._handlers
              , r = this.container;
            if (!r.actualOptions.interactivity.events.resize)
                return;
            if (typeof ResizeObserver > "u") {
                Ke(window, wg, i.resize, n);
                return
            }
            const s = r.canvas.element;
            this._resizeObserver && !n ? (s && this._resizeObserver.unobserve(s),
            this._resizeObserver.disconnect(),
            delete this._resizeObserver) : !this._resizeObserver && n && s && (this._resizeObserver = new ResizeObserver(l=>{
                l.find(u=>u.target === s) && this._handleWindowResize()
            }
            ),
            this._resizeObserver.observe(s))
        }
        ,
        this._mouseDown = ()=>{
            const {interactivity: n} = this.container;
            if (!n)
                return;
            const {mouse: i} = n;
            i.clicking = !0,
            i.downPosition = i.position
        }
        ,
        this._mouseTouchClick = n=>{
            const i = this.container
              , r = i.actualOptions
              , {mouse: o} = i.interactivity;
            o.inside = !0;
            let s = !1;
            const l = o.position;
            if (!(!l || !r.interactivity.events.onClick.enable)) {
                for (const [,a] of i.plugins)
                    if (a.clickPositionValid && (s = a.clickPositionValid(l),
                    s))
                        break;
                s || this._doMouseTouchClick(n),
                o.clicking = !1
            }
        }
        ,
        this._mouseTouchFinish = ()=>{
            const n = this.container.interactivity;
            if (!n)
                return;
            const i = n.mouse;
            delete i.position,
            delete i.clickPosition,
            delete i.downPosition,
            n.status = pa,
            i.inside = !1,
            i.clicking = !1
        }
        ,
        this._mouseTouchMove = n=>{
            const i = this.container
              , r = i.actualOptions
              , o = i.interactivity
              , s = i.canvas.element;
            if (!(o != null && o.element))
                return;
            o.mouse.inside = !0;
            let l;
            if (n.type.startsWith("pointer")) {
                this._canPush = !0;
                const u = n;
                if (o.element === window) {
                    if (s) {
                        const c = s.getBoundingClientRect();
                        l = {
                            x: u.clientX - c.left,
                            y: u.clientY - c.top
                        }
                    }
                } else if (r.interactivity.detectsOn === _i.parent) {
                    const c = u.target
                      , f = u.currentTarget;
                    if (c && f && s) {
                        const d = c.getBoundingClientRect()
                          , m = f.getBoundingClientRect()
                          , v = s.getBoundingClientRect();
                        l = {
                            x: u.offsetX + Wc * d.left - (m.left + v.left),
                            y: u.offsetY + Wc * d.top - (m.top + v.top)
                        }
                    } else
                        l = {
                            x: u.offsetX ?? u.clientX,
                            y: u.offsetY ?? u.clientY
                        }
                } else
                    u.target === s && (l = {
                        x: u.offsetX ?? u.clientX,
                        y: u.offsetY ?? u.clientY
                    })
            } else if (this._canPush = n.type !== "touchmove",
            s) {
                const u = n
                  , c = 1
                  , f = u.touches[u.touches.length - c]
                  , d = s.getBoundingClientRect()
                  , m = 0;
                l = {
                    x: f.clientX - (d.left ?? m),
                    y: f.clientY - (d.top ?? m)
                }
            }
            const a = i.retina.pixelRatio;
            l && (l.x *= a,
            l.y *= a),
            o.mouse.position = l,
            o.status = Bn
        }
        ,
        this._touchEnd = n=>{
            const i = n
              , r = Array.from(i.changedTouches);
            for (const o of r)
                this._touches.delete(o.identifier);
            this._mouseTouchFinish()
        }
        ,
        this._touchEndClick = n=>{
            const i = n
              , r = Array.from(i.changedTouches);
            for (const o of r)
                this._touches.delete(o.identifier);
            this._mouseTouchClick(n)
        }
        ,
        this._touchStart = n=>{
            const i = n
              , r = Array.from(i.changedTouches);
            for (const o of r)
                this._touches.set(o.identifier, performance.now());
            this._mouseTouchMove(n)
        }
        ,
        this._canPush = !0,
        this._touches = new Map,
        this._handlers = {
            mouseDown: ()=>this._mouseDown(),
            mouseLeave: ()=>this._mouseTouchFinish(),
            mouseMove: n=>this._mouseTouchMove(n),
            mouseUp: n=>this._mouseTouchClick(n),
            touchStart: n=>this._touchStart(n),
            touchMove: n=>this._mouseTouchMove(n),
            touchEnd: n=>this._touchEnd(n),
            touchCancel: n=>this._touchEnd(n),
            touchEndClick: n=>this._touchEndClick(n),
            visibilityChange: ()=>this._handleVisibilityChange(),
            themeChange: n=>this._handleThemeChange(n),
            oldThemeChange: n=>this._handleThemeChange(n),
            resize: ()=>{
                this._handleWindowResize()
            }
        }
    }
    addListeners() {
        this._manageListeners(!0)
    }
    removeListeners() {
        this._manageListeners(!1)
    }
}
var Pe;
(function(t) {
    t.configAdded = "configAdded",
    t.containerInit = "containerInit",
    t.particlesSetup = "particlesSetup",
    t.containerStarted = "containerStarted",
    t.containerStopped = "containerStopped",
    t.containerDestroyed = "containerDestroyed",
    t.containerPaused = "containerPaused",
    t.containerPlay = "containerPlay",
    t.containerBuilt = "containerBuilt",
    t.particleAdded = "particleAdded",
    t.particleDestroyed = "particleDestroyed",
    t.particleRemoved = "particleRemoved"
}
)(Pe || (Pe = {}));
class Ce {
    constructor() {
        this.value = ""
    }
    static create(e, n) {
        const i = new Ce;
        return i.load(e),
        n !== void 0 && (fn(n) || Mt(n) ? i.load({
            value: n
        }) : i.load(n)),
        i
    }
    load(e) {
        (e == null ? void 0 : e.value) !== void 0 && (this.value = e.value)
    }
}
class ev {
    constructor() {
        this.color = new Ce,
        this.color.value = "",
        this.image = "",
        this.position = "",
        this.repeat = "",
        this.size = "",
        this.opacity = 1
    }
    load(e) {
        e && (e.color !== void 0 && (this.color = Ce.create(this.color, e.color)),
        e.image !== void 0 && (this.image = e.image),
        e.position !== void 0 && (this.position = e.position),
        e.repeat !== void 0 && (this.repeat = e.repeat),
        e.size !== void 0 && (this.size = e.size),
        e.opacity !== void 0 && (this.opacity = e.opacity))
    }
}
class tv {
    constructor() {
        this.opacity = 1
    }
    load(e) {
        e && (e.color !== void 0 && (this.color = Ce.create(this.color, e.color)),
        e.image !== void 0 && (this.image = e.image),
        e.opacity !== void 0 && (this.opacity = e.opacity))
    }
}
class nv {
    constructor() {
        this.composite = "destination-out",
        this.cover = new tv,
        this.enable = !1
    }
    load(e) {
        if (e) {
            if (e.composite !== void 0 && (this.composite = e.composite),
            e.cover !== void 0) {
                const n = e.cover
                  , i = fn(e.cover) ? {
                    color: e.cover
                } : e.cover;
                this.cover.load(n.color !== void 0 || n.image !== void 0 ? n : {
                    color: i
                })
            }
            e.enable !== void 0 && (this.enable = e.enable)
        }
    }
}
class iv {
    constructor() {
        this.enable = !0,
        this.zIndex = 0
    }
    load(e) {
        e && (e.enable !== void 0 && (this.enable = e.enable),
        e.zIndex !== void 0 && (this.zIndex = e.zIndex))
    }
}
class rv {
    constructor() {
        this.enable = !1,
        this.mode = []
    }
    load(e) {
        e && (e.enable !== void 0 && (this.enable = e.enable),
        e.mode !== void 0 && (this.mode = e.mode))
    }
}
var Ni;
(function(t) {
    t.circle = "circle",
    t.rectangle = "rectangle"
}
)(Ni || (Ni = {}));
class qc {
    constructor() {
        this.selectors = [],
        this.enable = !1,
        this.mode = [],
        this.type = Ni.circle
    }
    load(e) {
        e && (e.selectors !== void 0 && (this.selectors = e.selectors),
        e.enable !== void 0 && (this.enable = e.enable),
        e.mode !== void 0 && (this.mode = e.mode),
        e.type !== void 0 && (this.type = e.type))
    }
}
class ov {
    constructor() {
        this.enable = !1,
        this.force = 2,
        this.smooth = 10
    }
    load(e) {
        e && (e.enable !== void 0 && (this.enable = e.enable),
        e.force !== void 0 && (this.force = e.force),
        e.smooth !== void 0 && (this.smooth = e.smooth))
    }
}
class sv {
    constructor() {
        this.enable = !1,
        this.mode = [],
        this.parallax = new ov
    }
    load(e) {
        e && (e.enable !== void 0 && (this.enable = e.enable),
        e.mode !== void 0 && (this.mode = e.mode),
        this.parallax.load(e.parallax))
    }
}
class lv {
    constructor() {
        this.delay = .5,
        this.enable = !0
    }
    load(e) {
        e !== void 0 && (e.delay !== void 0 && (this.delay = e.delay),
        e.enable !== void 0 && (this.enable = e.enable))
    }
}
class av {
    constructor() {
        this.onClick = new rv,
        this.onDiv = new qc,
        this.onHover = new sv,
        this.resize = new lv
    }
    load(e) {
        if (!e)
            return;
        this.onClick.load(e.onClick);
        const n = e.onDiv;
        n !== void 0 && (this.onDiv = st(n, i=>{
            const r = new qc;
            return r.load(i),
            r
        }
        )),
        this.onHover.load(e.onHover),
        this.resize.load(e.resize)
    }
}
class uv {
    constructor(e, n) {
        this._engine = e,
        this._container = n
    }
    load(e) {
        if (!e || !this._container)
            return;
        const n = this._engine.interactors.get(this._container);
        if (n)
            for (const i of n)
                i.loadModeOptions && i.loadModeOptions(this, e)
    }
}
class vp {
    constructor(e, n) {
        this.detectsOn = _i.window,
        this.events = new av,
        this.modes = new uv(e,n)
    }
    load(e) {
        if (!e)
            return;
        const n = e.detectsOn;
        n !== void 0 && (this.detectsOn = n),
        this.events.load(e.events),
        this.modes.load(e.modes)
    }
}
const Qc = 50;
class cv {
    load(e) {
        e && (e.position && (this.position = {
            x: e.position.x ?? Qc,
            y: e.position.y ?? Qc,
            mode: e.position.mode ?? Li.percent
        }),
        e.options && (this.options = Se({}, e.options)))
    }
}
var Rn;
(function(t) {
    t.screen = "screen",
    t.canvas = "canvas"
}
)(Rn || (Rn = {}));
class fv {
    constructor() {
        this.maxWidth = 1 / 0,
        this.options = {},
        this.mode = Rn.canvas
    }
    load(e) {
        e && (e.maxWidth !== void 0 && (this.maxWidth = e.maxWidth),
        e.mode !== void 0 && (e.mode === Rn.screen ? this.mode = Rn.screen : this.mode = Rn.canvas),
        e.options !== void 0 && (this.options = Se({}, e.options)))
    }
}
var Yt;
(function(t) {
    t.any = "any",
    t.dark = "dark",
    t.light = "light"
}
)(Yt || (Yt = {}));
class dv {
    constructor() {
        this.auto = !1,
        this.mode = Yt.any,
        this.value = !1
    }
    load(e) {
        e && (e.auto !== void 0 && (this.auto = e.auto),
        e.mode !== void 0 && (this.mode = e.mode),
        e.value !== void 0 && (this.value = e.value))
    }
}
class hv {
    constructor() {
        this.name = "",
        this.default = new dv
    }
    load(e) {
        e && (e.name !== void 0 && (this.name = e.name),
        this.default.load(e.default),
        e.options !== void 0 && (this.options = Se({}, e.options)))
    }
}
class _u {
    constructor() {
        this.count = 0,
        this.enable = !1,
        this.speed = 1,
        this.decay = 0,
        this.delay = 0,
        this.sync = !1
    }
    load(e) {
        e && (e.count !== void 0 && (this.count = j(e.count)),
        e.enable !== void 0 && (this.enable = e.enable),
        e.speed !== void 0 && (this.speed = j(e.speed)),
        e.decay !== void 0 && (this.decay = j(e.decay)),
        e.delay !== void 0 && (this.delay = j(e.delay)),
        e.sync !== void 0 && (this.sync = e.sync))
    }
}
class Su extends _u {
    constructor() {
        super(),
        this.mode = On.auto,
        this.startValue = ki.random
    }
    load(e) {
        super.load(e),
        e && (e.mode !== void 0 && (this.mode = e.mode),
        e.startValue !== void 0 && (this.startValue = e.startValue))
    }
}
class al extends _u {
    constructor() {
        super(),
        this.offset = 0,
        this.sync = !0
    }
    load(e) {
        super.load(e),
        e && e.offset !== void 0 && (this.offset = j(e.offset))
    }
}
class pv {
    constructor() {
        this.h = new al,
        this.s = new al,
        this.l = new al
    }
    load(e) {
        e && (this.h.load(e.h),
        this.s.load(e.s),
        this.l.load(e.l))
    }
}
class Nr extends Ce {
    constructor() {
        super(),
        this.animation = new pv
    }
    static create(e, n) {
        const i = new Nr;
        return i.load(e),
        n !== void 0 && (fn(n) || Mt(n) ? i.load({
            value: n
        }) : i.load(n)),
        i
    }
    load(e) {
        if (super.load(e),
        !e)
            return;
        const n = e.animation;
        n !== void 0 && (n.enable !== void 0 ? this.animation.h.load(n) : this.animation.load(e.animation))
    }
}
var Si;
(function(t) {
    t.absorb = "absorb",
    t.bounce = "bounce",
    t.destroy = "destroy"
}
)(Si || (Si = {}));
class mv {
    constructor() {
        this.speed = 2
    }
    load(e) {
        e && e.speed !== void 0 && (this.speed = e.speed)
    }
}
class yv {
    constructor() {
        this.enable = !0,
        this.retries = 0
    }
    load(e) {
        e && (e.enable !== void 0 && (this.enable = e.enable),
        e.retries !== void 0 && (this.retries = e.retries))
    }
}
class Qn {
    constructor() {
        this.value = 0
    }
    load(e) {
        e && e.value !== void 0 && (this.value = j(e.value))
    }
}
class gv extends Qn {
    constructor() {
        super(),
        this.animation = new _u
    }
    load(e) {
        if (super.load(e),
        !e)
            return;
        const n = e.animation;
        n !== void 0 && this.animation.load(n)
    }
}
class wp extends gv {
    constructor() {
        super(),
        this.animation = new Su
    }
    load(e) {
        super.load(e)
    }
}
class Gc extends Qn {
    constructor() {
        super(),
        this.value = 1
    }
}
class xp {
    constructor() {
        this.horizontal = new Gc,
        this.vertical = new Gc
    }
    load(e) {
        e && (this.horizontal.load(e.horizontal),
        this.vertical.load(e.vertical))
    }
}
class vv {
    constructor() {
        this.absorb = new mv,
        this.bounce = new xp,
        this.enable = !1,
        this.maxSpeed = 50,
        this.mode = Si.bounce,
        this.overlap = new yv
    }
    load(e) {
        e && (this.absorb.load(e.absorb),
        this.bounce.load(e.bounce),
        e.enable !== void 0 && (this.enable = e.enable),
        e.maxSpeed !== void 0 && (this.maxSpeed = j(e.maxSpeed)),
        e.mode !== void 0 && (this.mode = e.mode),
        this.overlap.load(e.overlap))
    }
}
class wv {
    constructor() {
        this.close = !0,
        this.fill = !0,
        this.options = {},
        this.type = []
    }
    load(e) {
        if (!e)
            return;
        const n = e.options;
        if (n !== void 0)
            for (const i in n) {
                const r = n[i];
                r && (this.options[i] = Se(this.options[i] ?? {}, r))
            }
        e.close !== void 0 && (this.close = e.close),
        e.fill !== void 0 && (this.fill = e.fill),
        e.type !== void 0 && (this.type = e.type)
    }
}
class xv {
    constructor() {
        this.offset = 0,
        this.value = 90
    }
    load(e) {
        e && (e.offset !== void 0 && (this.offset = j(e.offset)),
        e.value !== void 0 && (this.value = j(e.value)))
    }
}
class kv {
    constructor() {
        this.distance = 200,
        this.enable = !1,
        this.rotate = {
            x: 3e3,
            y: 3e3
        }
    }
    load(e) {
        if (e && (e.distance !== void 0 && (this.distance = j(e.distance)),
        e.enable !== void 0 && (this.enable = e.enable),
        e.rotate)) {
            const n = e.rotate.x;
            n !== void 0 && (this.rotate.x = n);
            const i = e.rotate.y;
            i !== void 0 && (this.rotate.y = i)
        }
    }
}
class _v {
    constructor() {
        this.x = 50,
        this.y = 50,
        this.mode = Li.percent,
        this.radius = 0
    }
    load(e) {
        e && (e.x !== void 0 && (this.x = e.x),
        e.y !== void 0 && (this.y = e.y),
        e.mode !== void 0 && (this.mode = e.mode),
        e.radius !== void 0 && (this.radius = e.radius))
    }
}
class Sv {
    constructor() {
        this.acceleration = 9.81,
        this.enable = !1,
        this.inverse = !1,
        this.maxSpeed = 50
    }
    load(e) {
        e && (e.acceleration !== void 0 && (this.acceleration = j(e.acceleration)),
        e.enable !== void 0 && (this.enable = e.enable),
        e.inverse !== void 0 && (this.inverse = e.inverse),
        e.maxSpeed !== void 0 && (this.maxSpeed = j(e.maxSpeed)))
    }
}
class Cv {
    constructor() {
        this.clamp = !0,
        this.delay = new Qn,
        this.enable = !1,
        this.options = {}
    }
    load(e) {
        e && (e.clamp !== void 0 && (this.clamp = e.clamp),
        this.delay.load(e.delay),
        e.enable !== void 0 && (this.enable = e.enable),
        this.generator = e.generator,
        e.options && (this.options = Se(this.options, e.options)))
    }
}
class Ev {
    load(e) {
        e && (e.color !== void 0 && (this.color = Ce.create(this.color, e.color)),
        e.image !== void 0 && (this.image = e.image))
    }
}
class zv {
    constructor() {
        this.enable = !1,
        this.length = 10,
        this.fill = new Ev
    }
    load(e) {
        e && (e.enable !== void 0 && (this.enable = e.enable),
        e.fill !== void 0 && this.fill.load(e.fill),
        e.length !== void 0 && (this.length = e.length))
    }
}
var se;
(function(t) {
    t.bounce = "bounce",
    t.none = "none",
    t.out = "out",
    t.destroy = "destroy",
    t.split = "split"
}
)(se || (se = {}));
class Pv {
    constructor() {
        this.default = se.out
    }
    load(e) {
        e && (e.default !== void 0 && (this.default = e.default),
        this.bottom = e.bottom ?? e.default,
        this.left = e.left ?? e.default,
        this.right = e.right ?? e.default,
        this.top = e.top ?? e.default)
    }
}
class bv {
    constructor() {
        this.acceleration = 0,
        this.enable = !1
    }
    load(e) {
        e && (e.acceleration !== void 0 && (this.acceleration = j(e.acceleration)),
        e.enable !== void 0 && (this.enable = e.enable),
        e.position && (this.position = Se({}, e.position)))
    }
}
class Mv {
    constructor() {
        this.angle = new xv,
        this.attract = new kv,
        this.center = new _v,
        this.decay = 0,
        this.distance = {},
        this.direction = pe.none,
        this.drift = 0,
        this.enable = !1,
        this.gravity = new Sv,
        this.path = new Cv,
        this.outModes = new Pv,
        this.random = !1,
        this.size = !1,
        this.speed = 2,
        this.spin = new bv,
        this.straight = !1,
        this.trail = new zv,
        this.vibrate = !1,
        this.warp = !1
    }
    load(e) {
        if (!e)
            return;
        this.angle.load(dn(e.angle) ? {
            value: e.angle
        } : e.angle),
        this.attract.load(e.attract),
        this.center.load(e.center),
        e.decay !== void 0 && (this.decay = j(e.decay)),
        e.direction !== void 0 && (this.direction = e.direction),
        e.distance !== void 0 && (this.distance = dn(e.distance) ? {
            horizontal: e.distance,
            vertical: e.distance
        } : {
            ...e.distance
        }),
        e.drift !== void 0 && (this.drift = j(e.drift)),
        e.enable !== void 0 && (this.enable = e.enable),
        this.gravity.load(e.gravity);
        const n = e.outModes;
        n !== void 0 && (di(n) ? this.outModes.load(n) : this.outModes.load({
            default: n
        })),
        this.path.load(e.path),
        e.random !== void 0 && (this.random = e.random),
        e.size !== void 0 && (this.size = e.size),
        e.speed !== void 0 && (this.speed = j(e.speed)),
        this.spin.load(e.spin),
        e.straight !== void 0 && (this.straight = e.straight),
        this.trail.load(e.trail),
        e.vibrate !== void 0 && (this.vibrate = e.vibrate),
        e.warp !== void 0 && (this.warp = e.warp)
    }
}
class Ov extends Su {
    constructor() {
        super(),
        this.destroy = Un.none,
        this.speed = 2
    }
    load(e) {
        super.load(e),
        e && e.destroy !== void 0 && (this.destroy = e.destroy)
    }
}
class Rv extends wp {
    constructor() {
        super(),
        this.animation = new Ov,
        this.value = 1
    }
    load(e) {
        if (!e)
            return;
        super.load(e);
        const n = e.animation;
        n !== void 0 && this.animation.load(n)
    }
}
class Tv {
    constructor() {
        this.enable = !1,
        this.width = 1920,
        this.height = 1080
    }
    load(e) {
        if (!e)
            return;
        e.enable !== void 0 && (this.enable = e.enable);
        const n = e.width;
        n !== void 0 && (this.width = n);
        const i = e.height;
        i !== void 0 && (this.height = i)
    }
}
var Fr;
(function(t) {
    t.delete = "delete",
    t.wait = "wait"
}
)(Fr || (Fr = {}));
class Lv {
    constructor() {
        this.mode = Fr.delete,
        this.value = 0
    }
    load(e) {
        e && (e.mode !== void 0 && (this.mode = e.mode),
        e.value !== void 0 && (this.value = e.value))
    }
}
class Iv {
    constructor() {
        this.density = new Tv,
        this.limit = new Lv,
        this.value = 0
    }
    load(e) {
        e && (this.density.load(e.density),
        this.limit.load(e.limit),
        e.value !== void 0 && (this.value = e.value))
    }
}
class Dv {
    constructor() {
        this.blur = 0,
        this.color = new Ce,
        this.enable = !1,
        this.offset = {
            x: 0,
            y: 0
        },
        this.color.value = "#000"
    }
    load(e) {
        e && (e.blur !== void 0 && (this.blur = e.blur),
        this.color = Ce.create(this.color, e.color),
        e.enable !== void 0 && (this.enable = e.enable),
        e.offset !== void 0 && (e.offset.x !== void 0 && (this.offset.x = e.offset.x),
        e.offset.y !== void 0 && (this.offset.y = e.offset.y)))
    }
}
class Nv {
    constructor() {
        this.close = !0,
        this.fill = !0,
        this.options = {},
        this.type = "circle"
    }
    load(e) {
        if (!e)
            return;
        const n = e.options;
        if (n !== void 0)
            for (const i in n) {
                const r = n[i];
                r && (this.options[i] = Se(this.options[i] ?? {}, r))
            }
        e.close !== void 0 && (this.close = e.close),
        e.fill !== void 0 && (this.fill = e.fill),
        e.type !== void 0 && (this.type = e.type)
    }
}
class Fv extends Su {
    constructor() {
        super(),
        this.destroy = Un.none,
        this.speed = 5
    }
    load(e) {
        super.load(e),
        e && e.destroy !== void 0 && (this.destroy = e.destroy)
    }
}
class jv extends wp {
    constructor() {
        super(),
        this.animation = new Fv,
        this.value = 3
    }
    load(e) {
        if (super.load(e),
        !e)
            return;
        const n = e.animation;
        n !== void 0 && this.animation.load(n)
    }
}
class Yc {
    constructor() {
        this.width = 0
    }
    load(e) {
        e && (e.color !== void 0 && (this.color = Nr.create(this.color, e.color)),
        e.width !== void 0 && (this.width = j(e.width)),
        e.opacity !== void 0 && (this.opacity = j(e.opacity)))
    }
}
class $v extends Qn {
    constructor() {
        super(),
        this.opacityRate = 1,
        this.sizeRate = 1,
        this.velocityRate = 1
    }
    load(e) {
        super.load(e),
        e && (e.opacityRate !== void 0 && (this.opacityRate = e.opacityRate),
        e.sizeRate !== void 0 && (this.sizeRate = e.sizeRate),
        e.velocityRate !== void 0 && (this.velocityRate = e.velocityRate))
    }
}
class Av {
    constructor(e, n) {
        this._engine = e,
        this._container = n,
        this.bounce = new xp,
        this.collisions = new vv,
        this.color = new Nr,
        this.color.value = "#fff",
        this.effect = new wv,
        this.groups = {},
        this.move = new Mv,
        this.number = new Iv,
        this.opacity = new Rv,
        this.reduceDuplicates = !1,
        this.shadow = new Dv,
        this.shape = new Nv,
        this.size = new jv,
        this.stroke = new Yc,
        this.zIndex = new $v
    }
    load(e) {
        if (!e)
            return;
        if (e.groups !== void 0)
            for (const i of Object.keys(e.groups)) {
                if (!Object.hasOwn(e.groups, i))
                    continue;
                const r = e.groups[i];
                r !== void 0 && (this.groups[i] = Se(this.groups[i] ?? {}, r))
            }
        e.reduceDuplicates !== void 0 && (this.reduceDuplicates = e.reduceDuplicates),
        this.bounce.load(e.bounce),
        this.color.load(Nr.create(this.color, e.color)),
        this.effect.load(e.effect),
        this.move.load(e.move),
        this.number.load(e.number),
        this.opacity.load(e.opacity),
        this.shape.load(e.shape),
        this.size.load(e.size),
        this.shadow.load(e.shadow),
        this.zIndex.load(e.zIndex),
        this.collisions.load(e.collisions),
        e.interactivity !== void 0 && (this.interactivity = Se({}, e.interactivity));
        const n = e.stroke;
        if (n && (this.stroke = st(n, i=>{
            const r = new Yc;
            return r.load(i),
            r
        }
        )),
        this._container) {
            const i = this._engine.updaters.get(this._container);
            if (i)
                for (const o of i)
                    o.loadOptions && o.loadOptions(this, e);
            const r = this._engine.interactors.get(this._container);
            if (r)
                for (const o of r)
                    o.loadParticlesOptions && o.loadParticlesOptions(this, e)
        }
    }
}
function kp(t, ...e) {
    for (const n of e)
        t.load(n)
}
function _p(t, e, ...n) {
    const i = new Av(t,e);
    return kp(i, ...n),
    i
}
class Bv {
    constructor(e, n) {
        this._findDefaultTheme = i=>this.themes.find(r=>r.default.value && r.default.mode === i) ?? this.themes.find(r=>r.default.value && r.default.mode === Yt.any),
        this._importPreset = i=>{
            this.load(this._engine.getPreset(i))
        }
        ,
        this._engine = e,
        this._container = n,
        this.autoPlay = !0,
        this.background = new ev,
        this.backgroundMask = new nv,
        this.clear = !0,
        this.defaultThemes = {},
        this.delay = 0,
        this.fullScreen = new iv,
        this.detectRetina = !0,
        this.duration = 0,
        this.fpsLimit = 120,
        this.interactivity = new vp(e,n),
        this.manualParticles = [],
        this.particles = _p(this._engine, this._container),
        this.pauseOnBlur = !0,
        this.pauseOnOutsideViewport = !0,
        this.responsive = [],
        this.smooth = !1,
        this.style = {},
        this.themes = [],
        this.zLayers = 100
    }
    load(e) {
        var s, l;
        if (!e)
            return;
        e.preset !== void 0 && st(e.preset, a=>this._importPreset(a)),
        e.autoPlay !== void 0 && (this.autoPlay = e.autoPlay),
        e.clear !== void 0 && (this.clear = e.clear),
        e.key !== void 0 && (this.key = e.key),
        e.name !== void 0 && (this.name = e.name),
        e.delay !== void 0 && (this.delay = j(e.delay));
        const n = e.detectRetina;
        n !== void 0 && (this.detectRetina = n),
        e.duration !== void 0 && (this.duration = j(e.duration));
        const i = e.fpsLimit;
        i !== void 0 && (this.fpsLimit = i),
        e.pauseOnBlur !== void 0 && (this.pauseOnBlur = e.pauseOnBlur),
        e.pauseOnOutsideViewport !== void 0 && (this.pauseOnOutsideViewport = e.pauseOnOutsideViewport),
        e.zLayers !== void 0 && (this.zLayers = e.zLayers),
        this.background.load(e.background);
        const r = e.fullScreen;
        ip(r) ? this.fullScreen.enable = r : this.fullScreen.load(r),
        this.backgroundMask.load(e.backgroundMask),
        this.interactivity.load(e.interactivity),
        e.manualParticles && (this.manualParticles = e.manualParticles.map(a=>{
            const u = new cv;
            return u.load(a),
            u
        }
        )),
        this.particles.load(e.particles),
        this.style = Se(this.style, e.style),
        this._engine.loadOptions(this, e),
        e.smooth !== void 0 && (this.smooth = e.smooth);
        const o = this._engine.interactors.get(this._container);
        if (o)
            for (const a of o)
                a.loadOptions && a.loadOptions(this, e);
        if (e.responsive !== void 0)
            for (const a of e.responsive) {
                const u = new fv;
                u.load(a),
                this.responsive.push(u)
            }
        if (this.responsive.sort((a,u)=>a.maxWidth - u.maxWidth),
        e.themes !== void 0)
            for (const a of e.themes) {
                const u = this.themes.find(c=>c.name === a.name);
                if (u)
                    u.load(a);
                else {
                    const c = new hv;
                    c.load(a),
                    this.themes.push(c)
                }
            }
        this.defaultThemes.dark = (s = this._findDefaultTheme(Yt.dark)) == null ? void 0 : s.name,
        this.defaultThemes.light = (l = this._findDefaultTheme(Yt.light)) == null ? void 0 : l.name
    }
    setResponsive(e, n, i) {
        this.load(i);
        const r = this.responsive.find(o=>o.mode === Rn.screen && screen ? o.maxWidth > screen.availWidth : o.maxWidth * n > e);
        return this.load(r == null ? void 0 : r.options),
        r == null ? void 0 : r.maxWidth
    }
    setTheme(e) {
        if (e) {
            const n = this.themes.find(i=>i.name === e);
            n && this.load(n.options)
        } else {
            const n = sp("(prefers-color-scheme: dark)")
              , i = n == null ? void 0 : n.matches
              , r = this._findDefaultTheme(i ? Yt.dark : Yt.light);
            r && this.load(r.options)
        }
    }
}
var Fi;
(function(t) {
    t.external = "external",
    t.particles = "particles"
}
)(Fi || (Fi = {}));
class Uv {
    constructor(e, n) {
        this.container = n,
        this._engine = e,
        this._interactors = [],
        this._externalInteractors = [],
        this._particleInteractors = []
    }
    externalInteract(e) {
        for (const n of this._externalInteractors)
            n.isEnabled() && n.interact(e)
    }
    handleClickMode(e) {
        var n;
        for (const i of this._externalInteractors)
            (n = i.handleClickMode) == null || n.call(i, e)
    }
    async init() {
        this._interactors = await this._engine.getInteractors(this.container, !0),
        this._externalInteractors = [],
        this._particleInteractors = [];
        for (const e of this._interactors) {
            switch (e.type) {
            case Fi.external:
                this._externalInteractors.push(e);
                break;
            case Fi.particles:
                this._particleInteractors.push(e);
                break
            }
            e.init()
        }
    }
    particlesInteract(e, n) {
        for (const i of this._externalInteractors)
            i.clear(e, n);
        for (const i of this._particleInteractors)
            i.isEnabled(e) && i.interact(e, n)
    }
    reset(e) {
        for (const n of this._externalInteractors)
            n.isEnabled() && n.reset(e);
        for (const n of this._particleInteractors)
            n.isEnabled(e) && n.reset(e)
    }
}
var vt;
(function(t) {
    t.normal = "normal",
    t.inside = "inside",
    t.outside = "outside"
}
)(vt || (vt = {}));
const Kc = 0
  , wa = 2
  , uo = .5
  , Hv = 2
  , Xc = "random";
function Vv(t, e, n, i) {
    const r = e.options[t];
    if (r)
        return Se({
            close: e.close,
            fill: e.fill
        }, ht(r, n, i))
}
function Wv(t, e, n, i) {
    const r = e.options[t];
    if (r)
        return Se({
            close: e.close,
            fill: e.fill
        }, ht(r, n, i))
}
function Zc(t) {
    if (!ie(t.outMode, t.checkModes))
        return;
    const e = t.radius * wa;
    t.coord > t.maxCoord - e ? t.setCb(-t.radius) : t.coord < e && t.setCb(t.radius)
}
class qv {
    constructor(e, n) {
        this.container = n,
        this._calcPosition = (i,r,o,s=Kc)=>{
            for (const [,v] of i.plugins) {
                const y = v.particlePosition !== void 0 ? v.particlePosition(r, this) : void 0;
                if (y)
                    return $e.create(y.x, y.y, o)
            }
            const l = i.canvas.size
              , a = Pg({
                size: l,
                position: r
            })
              , u = $e.create(a.x, a.y, o)
              , c = this.getRadius()
              , f = this.options.move.outModes
              , d = v=>{
                Zc({
                    outMode: v,
                    checkModes: [se.bounce],
                    coord: u.x,
                    maxCoord: i.canvas.size.width,
                    setCb: y=>u.x += y,
                    radius: c
                })
            }
              , m = v=>{
                Zc({
                    outMode: v,
                    checkModes: [se.bounce],
                    coord: u.y,
                    maxCoord: i.canvas.size.height,
                    setCb: y=>u.y += y,
                    radius: c
                })
            }
            ;
            return d(f.left ?? f.default),
            d(f.right ?? f.default),
            m(f.top ?? f.default),
            m(f.bottom ?? f.default),
            this._checkOverlap(u, s) ? this._calcPosition(i, void 0, o, s + 1) : u
        }
        ,
        this._calculateVelocity = ()=>{
            const i = zg(this.direction)
              , r = i.copy()
              , o = this.options.move;
            if (o.direction === pe.inside || o.direction === pe.outside)
                return r;
            const s = an(M(o.angle.value))
              , l = an(M(o.angle.offset))
              , a = {
                left: l - s * uo,
                right: l + s * uo
            };
            return o.straight || (r.angle += Ue(j(a.left, a.right))),
            o.random && typeof o.speed == "number" && (r.length *= W()),
            r
        }
        ,
        this._checkOverlap = (i,r=Kc)=>{
            const o = this.options.collisions
              , s = this.getRadius();
            if (!o.enable)
                return !1;
            const l = o.overlap;
            if (l.enable)
                return !1;
            const a = l.retries;
            if (a >= 0 && r > a)
                throw new Error(`${rt} particle is overlapping and can't be placed`);
            return !!this.container.particles.find(c=>Ve(i, c.position) < s + c.getRadius())
        }
        ,
        this._getRollColor = i=>{
            if (!i || !this.roll || !this.backColor && !this.roll.alter)
                return i;
            const r = 1
              , o = 0
              , s = this.roll.horizontal && this.roll.vertical ? wa * r : r
              , l = this.roll.horizontal ? Math.PI * uo : o;
            return Math.floor(((this.roll.angle ?? o) + l) / (Math.PI / s)) % wa ? this.backColor ? this.backColor : this.roll.alter ? Kg(i, this.roll.alter.type, this.roll.alter.value) : i : i
        }
        ,
        this._initPosition = i=>{
            const r = this.container
              , o = M(this.options.zIndex.value)
              , s = 0;
            this.position = this._calcPosition(r, i, ot(o, s, r.zLayers)),
            this.initialPosition = this.position.copy();
            const l = r.canvas.size
              , a = 0;
            switch (this.moveCenter = {
                ...fp(this.options.move.center, l),
                radius: this.options.move.center.radius ?? a,
                mode: this.options.move.center.mode ?? Li.percent
            },
            this.direction = Eg(this.options.move.direction, this.position, this.moveCenter),
            this.options.move.direction) {
            case pe.inside:
                this.outType = vt.inside;
                break;
            case pe.outside:
                this.outType = vt.outside;
                break
            }
            this.offset = fe.origin
        }
        ,
        this._engine = e
    }
    destroy(e) {
        var o, s, l;
        if (this.unbreakable || this.destroyed)
            return;
        this.destroyed = !0,
        this.bubble.inRange = !1,
        this.slow.inRange = !1;
        const n = this.container
          , i = this.pathGenerator
          , r = n.shapeDrawers.get(this.shape);
        (o = r == null ? void 0 : r.particleDestroy) == null || o.call(r, this);
        for (const [,a] of n.plugins)
            (s = a.particleDestroyed) == null || s.call(a, this, e);
        for (const a of n.particles.updaters)
            (l = a.particleDestroyed) == null || l.call(a, this, e);
        i == null || i.reset(this),
        this._engine.dispatchEvent(Pe.particleDestroyed, {
            container: this.container,
            data: {
                particle: this
            }
        })
    }
    draw(e) {
        const n = this.container
          , i = n.canvas;
        for (const [,r] of n.plugins)
            i.drawParticlePlugin(r, this, e);
        i.drawParticle(this, e)
    }
    getFillColor() {
        return this._getRollColor(this.bubble.color ?? Hc(this.color))
    }
    getMass() {
        return this.getRadius() ** Hv * Math.PI * uo
    }
    getPosition() {
        return {
            x: this.position.x + this.offset.x,
            y: this.position.y + this.offset.y,
            z: this.position.z
        }
    }
    getRadius() {
        return this.bubble.radius ?? this.size.value
    }
    getStrokeColor() {
        return this._getRollColor(this.bubble.color ?? Hc(this.strokeColor))
    }
    init(e, n, i, r) {
        var z, R, O, A, te, de;
        const o = this.container
          , s = this._engine;
        this.id = e,
        this.group = r,
        this.effectClose = !0,
        this.effectFill = !0,
        this.shapeClose = !0,
        this.shapeFill = !0,
        this.pathRotation = !1,
        this.lastPathTime = 0,
        this.destroyed = !1,
        this.unbreakable = !1,
        this.isRotating = !1,
        this.rotation = 0,
        this.misplaced = !1,
        this.retina = {
            maxDistance: {}
        },
        this.outType = vt.normal,
        this.ignoresResizeRatio = !0;
        const l = o.retina.pixelRatio
          , a = o.actualOptions
          , u = _p(this._engine, o, a.particles)
          , {reduceDuplicates: c} = u
          , f = u.effect.type
          , d = u.shape.type;
        this.effect = ht(f, this.id, c),
        this.shape = ht(d, this.id, c);
        const m = u.effect
          , v = u.shape;
        if (i) {
            if ((z = i.effect) != null && z.type) {
                const $ = i.effect.type
                  , Ge = ht($, this.id, c);
                Ge && (this.effect = Ge,
                m.load(i.effect))
            }
            if ((R = i.shape) != null && R.type) {
                const $ = i.shape.type
                  , Ge = ht($, this.id, c);
                Ge && (this.shape = Ge,
                v.load(i.shape))
            }
        }
        if (this.effect === Xc) {
            const $ = [...this.container.effectDrawers.keys()];
            this.effect = $[Math.floor(Math.random() * $.length)]
        }
        if (this.shape === Xc) {
            const $ = [...this.container.shapeDrawers.keys()];
            this.shape = $[Math.floor(Math.random() * $.length)]
        }
        this.effectData = Vv(this.effect, m, this.id, c),
        this.shapeData = Wv(this.shape, v, this.id, c),
        u.load(i);
        const y = this.effectData;
        y && u.load(y.particles);
        const k = this.shapeData;
        k && u.load(k.particles);
        const p = new vp(s,o);
        p.load(o.actualOptions.interactivity),
        p.load(u.interactivity),
        this.interactivity = p,
        this.effectFill = (y == null ? void 0 : y.fill) ?? u.effect.fill,
        this.effectClose = (y == null ? void 0 : y.close) ?? u.effect.close,
        this.shapeFill = (k == null ? void 0 : k.fill) ?? u.shape.fill,
        this.shapeClose = (k == null ? void 0 : k.close) ?? u.shape.close,
        this.options = u;
        const h = this.options.move.path;
        this.pathDelay = M(h.delay.value) * xe,
        h.generator && (this.pathGenerator = this._engine.getPathGenerator(h.generator),
        this.pathGenerator && o.addPath(h.generator, this.pathGenerator) && this.pathGenerator.init(o)),
        o.retina.initParticle(this),
        this.size = cp(this.options.size, l),
        this.bubble = {
            inRange: !1
        },
        this.slow = {
            inRange: !1,
            factor: 1
        },
        this._initPosition(n),
        this.initialVelocity = this._calculateVelocity(),
        this.velocity = this.initialVelocity.copy();
        const g = 1;
        this.moveDecay = g - M(this.options.move.decay);
        const w = o.particles;
        w.setLastZIndex(this.position.z),
        this.zIndexFactor = this.position.z / o.zLayers,
        this.sides = 24;
        let x = o.effectDrawers.get(this.effect);
        x || (x = this._engine.getEffectDrawer(this.effect),
        x && o.effectDrawers.set(this.effect, x)),
        x != null && x.loadEffect && x.loadEffect(this);
        let _ = o.shapeDrawers.get(this.shape);
        _ || (_ = this._engine.getShapeDrawer(this.shape),
        _ && o.shapeDrawers.set(this.shape, _)),
        _ != null && _.loadShape && _.loadShape(this);
        const E = _ == null ? void 0 : _.getSidesCount;
        E && (this.sides = E(this)),
        this.spawning = !1,
        this.shadowColor = gt(this.options.shadow.color);
        for (const $ of w.updaters)
            $.init(this);
        for (const $ of w.movers)
            (O = $.init) == null || O.call($, this);
        (A = x == null ? void 0 : x.particleInit) == null || A.call(x, o, this),
        (te = _ == null ? void 0 : _.particleInit) == null || te.call(_, o, this);
        for (const [,$] of o.plugins)
            (de = $.particleCreated) == null || de.call($, this)
    }
    isInsideCanvas() {
        const e = this.getRadius()
          , n = this.container.canvas.size
          , i = this.position;
        return i.x >= -e && i.y >= -e && i.y <= n.height + e && i.x <= n.width + e
    }
    isVisible() {
        return !this.destroyed && !this.spawning && this.isInsideCanvas()
    }
    reset() {
        var e;
        for (const n of this.container.particles.updaters)
            (e = n.reset) == null || e.call(n, this)
    }
}
class Qv {
    constructor(e, n) {
        this.position = e,
        this.particle = n
    }
}
var Ci;
(function(t) {
    t.circle = "circle",
    t.rectangle = "rectangle"
}
)(Ci || (Ci = {}));
const Xi = 2;
class Sp {
    constructor(e, n, i) {
        this.position = {
            x: e,
            y: n
        },
        this.type = i
    }
}
class ke extends Sp {
    constructor(e, n, i) {
        super(e, n, Ci.circle),
        this.radius = i
    }
    contains(e) {
        return Ve(e, this.position) <= this.radius
    }
    intersects(e) {
        const n = this.position
          , i = e.position
          , r = {
            x: Math.abs(i.x - n.x),
            y: Math.abs(i.y - n.y)
        }
          , o = this.radius;
        if (e instanceof ke || e.type === Ci.circle) {
            const s = e
              , l = o + s.radius
              , a = Math.sqrt(r.x ** Xi + r.y ** Xi);
            return l > a
        } else if (e instanceof xt || e.type === Ci.rectangle) {
            const s = e
              , {width: l, height: a} = s.size;
            return Math.pow(r.x - l, Xi) + Math.pow(r.y - a, Xi) <= o ** Xi || r.x <= o + l && r.y <= o + a || r.x <= l || r.y <= a
        }
        return !1
    }
}
class xt extends Sp {
    constructor(e, n, i, r) {
        super(e, n, Ci.rectangle),
        this.size = {
            height: r,
            width: i
        }
    }
    contains(e) {
        const n = this.size.width
          , i = this.size.height
          , r = this.position;
        return e.x >= r.x && e.x <= r.x + n && e.y >= r.y && e.y <= r.y + i
    }
    intersects(e) {
        if (e instanceof ke)
            return e.intersects(this);
        const n = this.size.width
          , i = this.size.height
          , r = this.position
          , o = e.position
          , s = e instanceof xt ? e.size : {
            width: 0,
            height: 0
        }
          , l = s.width
          , a = s.height;
        return o.x < r.x + n && o.x + l > r.x && o.y < r.y + i && o.y + a > r.y
    }
}
const Zi = .5
  , Gv = 2
  , Yv = 4;
class os {
    constructor(e, n) {
        this.rectangle = e,
        this.capacity = n,
        this._subdivide = ()=>{
            const {x: i, y: r} = this.rectangle.position
              , {width: o, height: s} = this.rectangle.size
              , {capacity: l} = this;
            for (let a = 0; a < Yv; a++) {
                const u = a % Gv;
                this._subs.push(new os(new xt(i + o * Zi * u,r + s * Zi * (Math.round(a * Zi) - u),o * Zi,s * Zi),l))
            }
            this._divided = !0
        }
        ,
        this._points = [],
        this._divided = !1,
        this._subs = []
    }
    insert(e) {
        return this.rectangle.contains(e.position) ? this._points.length < this.capacity ? (this._points.push(e),
        !0) : (this._divided || this._subdivide(),
        this._subs.some(n=>n.insert(e))) : !1
    }
    query(e, n) {
        const i = [];
        if (!e.intersects(this.rectangle))
            return [];
        for (const r of this._points)
            !e.contains(r.position) && Ve(e.position, r.position) > r.particle.getRadius() && (!n || n(r.particle)) || i.push(r.particle);
        if (this._divided)
            for (const r of this._subs)
                i.push(...r.query(e, n));
        return i
    }
    queryCircle(e, n, i) {
        return this.query(new ke(e.x,e.y,n), i)
    }
    queryRectangle(e, n, i) {
        return this.query(new xt(e.x,e.y,n.width,n.height), i)
    }
}
const Jc = 4
  , Kv = 2
  , Xv = 1
  , ef = t=>{
    const {height: e, width: n} = t
      , i = -.25
      , r = 1.5;
    return new xt(i * n,i * e,r * n,r * e)
}
;
class Zv {
    constructor(e, n) {
        this._addToPool = (...r)=>{
            this._pool.push(...r)
        }
        ,
        this._applyDensity = (r,o,s)=>{
            var v;
            const l = r.number;
            if (!((v = r.number.density) != null && v.enable)) {
                s === void 0 ? this._limit = l.limit.value : l.limit && this._groupLimits.set(s, l.limit.value);
                return
            }
            const a = this._initDensityFactor(l.density)
              , u = l.value
              , c = 0
              , f = l.limit.value > c ? l.limit.value : u
              , d = Math.min(u, f) * a + o
              , m = Math.min(this.count, this.filter(y=>y.group === s).length);
            s === void 0 ? this._limit = l.limit.value * a : this._groupLimits.set(s, l.limit.value * a),
            m < d ? this.push(Math.abs(d - m), void 0, r, s) : m > d && this.removeQuantity(m - d, s)
        }
        ,
        this._initDensityFactor = r=>{
            const o = this._container
              , s = 1;
            if (!o.canvas.element || !r.enable)
                return s;
            const l = o.canvas.element
              , a = o.retina.pixelRatio;
            return l.width * l.height / (r.height * r.width * a ** Kv)
        }
        ,
        this._pushParticle = (r,o,s,l)=>{
            try {
                let a = this._pool.pop();
                a || (a = new qv(this._engine,this._container)),
                a.init(this._nextId, r, o, s);
                let u = !0;
                return l && (u = l(a)),
                u ? (this._array.push(a),
                this._zArray.push(a),
                this._nextId++,
                this._engine.dispatchEvent(Pe.particleAdded, {
                    container: this._container,
                    data: {
                        particle: a
                    }
                }),
                a) : void 0
            } catch (a) {
                Hn().warning(`${rt} adding particle: ${a}`)
            }
        }
        ,
        this._removeParticle = (r,o,s)=>{
            const l = this._array[r];
            if (!l || l.group !== o)
                return !1;
            const a = this._zArray.indexOf(l)
              , u = 1;
            return this._array.splice(r, u),
            this._zArray.splice(a, u),
            l.destroy(s),
            this._engine.dispatchEvent(Pe.particleRemoved, {
                container: this._container,
                data: {
                    particle: l
                }
            }),
            this._addToPool(l),
            !0
        }
        ,
        this._engine = e,
        this._container = n,
        this._nextId = 0,
        this._array = [],
        this._zArray = [],
        this._pool = [],
        this._limit = 0,
        this._groupLimits = new Map,
        this._needsSort = !1,
        this._lastZIndex = 0,
        this._interactionManager = new Uv(e,n),
        this._pluginsInitialized = !1;
        const i = n.canvas.size;
        this.quadTree = new os(ef(i),Jc),
        this.movers = [],
        this.updaters = []
    }
    get count() {
        return this._array.length
    }
    addManualParticles() {
        const e = this._container;
        e.actualOptions.manualParticles.forEach(i=>this.addParticle(i.position ? fp(i.position, e.canvas.size) : void 0, i.options))
    }
    addParticle(e, n, i, r) {
        const o = this._container.actualOptions.particles.number.limit.mode
          , s = i === void 0 ? this._limit : this._groupLimits.get(i) ?? this._limit
          , l = this.count;
        if (s > 0)
            switch (o) {
            case Fr.delete:
                {
                    const f = l + 1 - s;
                    f > 0 && this.removeQuantity(f);
                    break
                }
            case Fr.wait:
                if (l >= s)
                    return;
                break
            }
        return this._pushParticle(e, n, i, r)
    }
    clear() {
        this._array = [],
        this._zArray = [],
        this._pluginsInitialized = !1
    }
    destroy() {
        this._array = [],
        this._zArray = [],
        this.movers = [],
        this.updaters = []
    }
    draw(e) {
        const n = this._container
          , i = n.canvas;
        i.clear(),
        this.update(e);
        for (const [,r] of n.plugins)
            i.drawPlugin(r, e);
        for (const r of this._zArray)
            r.draw(e)
    }
    filter(e) {
        return this._array.filter(e)
    }
    find(e) {
        return this._array.find(e)
    }
    get(e) {
        return this._array[e]
    }
    handleClickMode(e) {
        this._interactionManager.handleClickMode(e)
    }
    async init() {
        var r, o;
        const e = this._container
          , n = e.actualOptions;
        this._lastZIndex = 0,
        this._needsSort = !1,
        await this.initPlugins();
        let i = !1;
        for (const [,s] of e.plugins)
            if (i = ((r = s.particlesInitialization) == null ? void 0 : r.call(s)) ?? i,
            i)
                break;
        if (this.addManualParticles(),
        !i) {
            const s = n.particles
              , l = s.groups;
            for (const a in l) {
                const u = l[a];
                for (let c = this.count, f = 0; f < ((o = u.number) == null ? void 0 : o.value) && c < s.number.value; c++,
                f++)
                    this.addParticle(void 0, u, a)
            }
            for (let a = this.count; a < s.number.value; a++)
                this.addParticle()
        }
    }
    async initPlugins() {
        if (this._pluginsInitialized)
            return;
        const e = this._container;
        this.movers = await this._engine.getMovers(e, !0),
        this.updaters = await this._engine.getUpdaters(e, !0),
        await this._interactionManager.init();
        for (const [,n] of e.pathGenerators)
            n.init(e)
    }
    push(e, n, i, r) {
        for (let o = 0; o < e; o++)
            this.addParticle(n == null ? void 0 : n.position, i, r)
    }
    async redraw() {
        this.clear(),
        await this.init(),
        this.draw({
            value: 0,
            factor: 0
        })
    }
    remove(e, n, i) {
        this.removeAt(this._array.indexOf(e), void 0, n, i)
    }
    removeAt(e, n=Xv, i, r) {
        if (e < 0 || e > this.count)
            return;
        let s = 0;
        for (let l = e; s < n && l < this.count; l++)
            this._removeParticle(l--, i, r) && s++
    }
    removeQuantity(e, n) {
        this.removeAt(0, e, n)
    }
    setDensity() {
        const e = this._container.actualOptions
          , n = e.particles.groups
          , i = 0;
        for (const r in n)
            this._applyDensity(n[r], i, r);
        this._applyDensity(e.particles, e.manualParticles.length)
    }
    setLastZIndex(e) {
        this._lastZIndex = e,
        this._needsSort = this._needsSort || this._lastZIndex < e
    }
    setResizeFactor(e) {
        this._resizeFactor = e
    }
    update(e) {
        var o, s;
        const n = this._container
          , i = new Set;
        this.quadTree = new os(ef(n.canvas.size),Jc);
        for (const [,l] of n.pathGenerators)
            l.update();
        for (const [,l] of n.plugins)
            (o = l.update) == null || o.call(l, e);
        const r = this._resizeFactor;
        for (const l of this._array) {
            r && !l.ignoresResizeRatio && (l.position.x *= r.width,
            l.position.y *= r.height,
            l.initialPosition.x *= r.width,
            l.initialPosition.y *= r.height),
            l.ignoresResizeRatio = !1,
            this._interactionManager.reset(l);
            for (const [,a] of this._container.plugins) {
                if (l.destroyed)
                    break;
                (s = a.particleUpdate) == null || s.call(a, l, e)
            }
            for (const a of this.movers)
                a.isEnabled(l) && a.move(l, e);
            if (l.destroyed) {
                i.add(l);
                continue
            }
            this.quadTree.insert(new Qv(l.getPosition(),l))
        }
        if (i.size) {
            const l = a=>!i.has(a);
            this._array = this.filter(l),
            this._zArray = this._zArray.filter(l);
            for (const a of i)
                this._engine.dispatchEvent(Pe.particleRemoved, {
                    container: this._container,
                    data: {
                        particle: a
                    }
                });
            this._addToPool(...i)
        }
        this._interactionManager.externalInteract(e);
        for (const l of this._array) {
            for (const a of this.updaters)
                a.update(l, e);
            !l.destroyed && !l.spawning && this._interactionManager.particlesInteract(l, e)
        }
        if (delete this._resizeFactor,
        this._needsSort) {
            const l = this._zArray;
            l.sort((u,c)=>c.position.z - u.position.z || u.id - c.id);
            const a = 1;
            this._lastZIndex = l[l.length - a].position.z,
            this._needsSort = !1
        }
    }
}
const tf = 1
  , nf = 1;
class Jv {
    constructor(e) {
        this.container = e,
        this.pixelRatio = tf,
        this.reduceFactor = nf
    }
    init() {
        const e = this.container
          , n = e.actualOptions;
        this.pixelRatio = !n.detectRetina || Vn() ? tf : window.devicePixelRatio,
        this.reduceFactor = nf;
        const i = this.pixelRatio
          , r = e.canvas;
        if (r.element) {
            const l = r.element;
            r.size.width = l.offsetWidth * i,
            r.size.height = l.offsetHeight * i
        }
        const o = n.particles
          , s = o.move;
        this.maxSpeed = M(s.gravity.maxSpeed) * i,
        this.sizeAnimationSpeed = M(o.size.animation.speed) * i
    }
    initParticle(e) {
        const n = e.options
          , i = this.pixelRatio
          , r = n.move
          , o = r.distance
          , s = e.retina;
        s.moveDrift = M(r.drift) * i,
        s.moveSpeed = M(r.speed) * i,
        s.sizeAnimationSpeed = M(n.size.animation.speed) * i;
        const l = s.maxDistance;
        l.horizontal = o.horizontal !== void 0 ? o.horizontal * i : void 0,
        l.vertical = o.vertical !== void 0 ? o.vertical * i : void 0,
        s.maxSpeed = M(r.gravity.maxSpeed) * i
    }
}
function Z(t) {
    return t && !t.destroyed
}
const ul = 60;
function e0(t, e=ul, n=!1) {
    return {
        value: t,
        factor: n ? ul / e : ul * t / xe
    }
}
function Yn(t, e, ...n) {
    const i = new Bv(t,e);
    return kp(i, ...n),
    i
}
class t0 {
    constructor(e, n, i) {
        this._intersectionManager = r=>{
            if (!(!Z(this) || !this.actualOptions.pauseOnOutsideViewport))
                for (const o of r)
                    o.target === this.interactivity.element && (o.isIntersecting ? this.play() : this.pause())
        }
        ,
        this._nextFrame = r=>{
            try {
                if (!this._smooth && this._lastFrameTime !== void 0 && r < this._lastFrameTime + xe / this.fpsLimit) {
                    this.draw(!1);
                    return
                }
                this._lastFrameTime ?? (this._lastFrameTime = r);
                const o = e0(r - this._lastFrameTime, this.fpsLimit, this._smooth);
                if (this.addLifeTime(o.value),
                this._lastFrameTime = r,
                o.value > xe) {
                    this.draw(!1);
                    return
                }
                if (this.particles.draw(o),
                !this.alive()) {
                    this.destroy();
                    return
                }
                this.animationStatus && this.draw(!1)
            } catch (o) {
                Hn().error(`${rt} in animation loop`, o)
            }
        }
        ,
        this._engine = e,
        this.id = Symbol(n),
        this.fpsLimit = 120,
        this._smooth = !1,
        this._delay = 0,
        this._duration = 0,
        this._lifeTime = 0,
        this._firstStart = !0,
        this.started = !1,
        this.destroyed = !1,
        this._paused = !0,
        this._lastFrameTime = 0,
        this.zLayers = 100,
        this.pageHidden = !1,
        this._clickHandlers = new Map,
        this._sourceOptions = i,
        this._initialSourceOptions = i,
        this.retina = new Jv(this),
        this.canvas = new Zg(this),
        this.particles = new Zv(this._engine,this),
        this.pathGenerators = new Map,
        this.interactivity = {
            mouse: {
                clicking: !1,
                inside: !1
            }
        },
        this.plugins = new Map,
        this.effectDrawers = new Map,
        this.shapeDrawers = new Map,
        this._options = Yn(this._engine, this),
        this.actualOptions = Yn(this._engine, this),
        this._eventListeners = new Jg(this),
        this._intersectionObserver = Rg(r=>this._intersectionManager(r)),
        this._engine.dispatchEvent(Pe.containerBuilt, {
            container: this
        })
    }
    get animationStatus() {
        return !this._paused && !this.pageHidden && Z(this)
    }
    get options() {
        return this._options
    }
    get sourceOptions() {
        return this._sourceOptions
    }
    addClickHandler(e) {
        if (!Z(this))
            return;
        const n = this.interactivity.element;
        if (!n)
            return;
        const i = (f,d,m)=>{
            if (!Z(this))
                return;
            const v = this.retina.pixelRatio
              , y = {
                x: d.x * v,
                y: d.y * v
            }
              , k = this.particles.quadTree.queryCircle(y, m * v);
            e(f, k)
        }
          , r = f=>{
            if (!Z(this))
                return;
            const d = f
              , m = {
                x: d.offsetX || d.clientX,
                y: d.offsetY || d.clientY
            };
            i(f, m, 1)
        }
          , o = ()=>{
            Z(this) && (u = !0,
            c = !1)
        }
          , s = ()=>{
            Z(this) && (c = !0)
        }
          , l = f=>{
            if (Z(this)) {
                if (u && !c) {
                    const d = f
                      , m = 1;
                    let v = d.touches[d.touches.length - m];
                    if (!v && (v = d.changedTouches[d.changedTouches.length - m],
                    !v))
                        return;
                    const y = this.canvas.element
                      , k = y ? y.getBoundingClientRect() : void 0
                      , p = 0
                      , h = {
                        x: v.clientX - (k ? k.left : p),
                        y: v.clientY - (k ? k.top : p)
                    };
                    i(f, h, Math.max(v.radiusX, v.radiusY))
                }
                u = !1,
                c = !1
            }
        }
          , a = ()=>{
            Z(this) && (u = !1,
            c = !1)
        }
        ;
        let u = !1
          , c = !1;
        this._clickHandlers.set("click", r),
        this._clickHandlers.set("touchstart", o),
        this._clickHandlers.set("touchmove", s),
        this._clickHandlers.set("touchend", l),
        this._clickHandlers.set("touchcancel", a);
        for (const [f,d] of this._clickHandlers)
            n.addEventListener(f, d)
    }
    addLifeTime(e) {
        this._lifeTime += e
    }
    addPath(e, n, i=!1) {
        return !Z(this) || !i && this.pathGenerators.has(e) ? !1 : (this.pathGenerators.set(e, n),
        !0)
    }
    alive() {
        return !this._duration || this._lifeTime <= this._duration
    }
    clearClickHandlers() {
        var e;
        if (Z(this)) {
            for (const [n,i] of this._clickHandlers)
                (e = this.interactivity.element) == null || e.removeEventListener(n, i);
            this._clickHandlers.clear()
        }
    }
    destroy(e=!0) {
        var n, i;
        if (Z(this)) {
            this.stop(),
            this.clearClickHandlers(),
            this.particles.destroy(),
            this.canvas.destroy();
            for (const [,r] of this.effectDrawers)
                (n = r.destroy) == null || n.call(r, this);
            for (const [,r] of this.shapeDrawers)
                (i = r.destroy) == null || i.call(r, this);
            for (const r of this.effectDrawers.keys())
                this.effectDrawers.delete(r);
            for (const r of this.shapeDrawers.keys())
                this.shapeDrawers.delete(r);
            if (this._engine.clearPlugins(this),
            this.destroyed = !0,
            e) {
                const r = this._engine.items
                  , o = r.findIndex(l=>l === this);
                o >= 0 && r.splice(o, 1)
            }
            this._engine.dispatchEvent(Pe.containerDestroyed, {
                container: this
            })
        }
    }
    draw(e) {
        if (!Z(this))
            return;
        let n = e;
        const i = r=>{
            n && (this._lastFrameTime = void 0,
            n = !1),
            this._nextFrame(r)
        }
        ;
        this._drawAnimationFrame = requestAnimationFrame(r=>i(r))
    }
    async export(e, n={}) {
        for (const [,i] of this.plugins) {
            if (!i.export)
                continue;
            const r = await i.export(e, n);
            if (r.supported)
                return r.blob
        }
        Hn().error(`${rt} - Export plugin with type ${e} not found`)
    }
    handleClickMode(e) {
        var n;
        if (Z(this)) {
            this.particles.handleClickMode(e);
            for (const [,i] of this.plugins)
                (n = i.handleClickMode) == null || n.call(i, e)
        }
    }
    async init() {
        var f, d, m, v;
        if (!Z(this))
            return;
        const e = this._engine.getSupportedEffects();
        for (const y of e) {
            const k = this._engine.getEffectDrawer(y);
            k && this.effectDrawers.set(y, k)
        }
        const n = this._engine.getSupportedShapes();
        for (const y of n) {
            const k = this._engine.getShapeDrawer(y);
            k && this.shapeDrawers.set(y, k)
        }
        await this.particles.initPlugins(),
        this._options = Yn(this._engine, this, this._initialSourceOptions, this.sourceOptions),
        this.actualOptions = Yn(this._engine, this, this._options);
        const i = await this._engine.getAvailablePlugins(this);
        for (const [y,k] of i)
            this.plugins.set(y, k);
        this.retina.init(),
        await this.canvas.init(),
        this.updateActualOptions(),
        this.canvas.initBackground(),
        this.canvas.resize();
        const {zLayers: r, duration: o, delay: s, fpsLimit: l, smooth: a} = this.actualOptions;
        this.zLayers = r,
        this._duration = M(o) * xe,
        this._delay = M(s) * xe,
        this._lifeTime = 0;
        const u = 120
          , c = 0;
        this.fpsLimit = l > c ? l : u,
        this._smooth = a;
        for (const [,y] of this.effectDrawers)
            await ((f = y.init) == null ? void 0 : f.call(y, this));
        for (const [,y] of this.shapeDrawers)
            await ((d = y.init) == null ? void 0 : d.call(y, this));
        for (const [,y] of this.plugins)
            await ((m = y.init) == null ? void 0 : m.call(y));
        this._engine.dispatchEvent(Pe.containerInit, {
            container: this
        }),
        await this.particles.init(),
        this.particles.setDensity();
        for (const [,y] of this.plugins)
            (v = y.particlesSetup) == null || v.call(y);
        this._engine.dispatchEvent(Pe.particlesSetup, {
            container: this
        })
    }
    async loadTheme(e) {
        Z(this) && (this._currentTheme = e,
        await this.refresh())
    }
    pause() {
        var e;
        if (Z(this) && (this._drawAnimationFrame !== void 0 && (cancelAnimationFrame(this._drawAnimationFrame),
        delete this._drawAnimationFrame),
        !this._paused)) {
            for (const [,n] of this.plugins)
                (e = n.pause) == null || e.call(n);
            this.pageHidden || (this._paused = !0),
            this._engine.dispatchEvent(Pe.containerPaused, {
                container: this
            })
        }
    }
    play(e) {
        if (!Z(this))
            return;
        const n = this._paused || e;
        if (this._firstStart && !this.actualOptions.autoPlay) {
            this._firstStart = !1;
            return
        }
        if (this._paused && (this._paused = !1),
        n)
            for (const [,i] of this.plugins)
                i.play && i.play();
        this._engine.dispatchEvent(Pe.containerPlay, {
            container: this
        }),
        this.draw(n ?? !1)
    }
    async refresh() {
        if (Z(this))
            return this.stop(),
            this.start()
    }
    async reset(e) {
        if (Z(this))
            return this._initialSourceOptions = e,
            this._sourceOptions = e,
            this._options = Yn(this._engine, this, this._initialSourceOptions, this.sourceOptions),
            this.actualOptions = Yn(this._engine, this, this._options),
            this.refresh()
    }
    async start() {
        !Z(this) || this.started || (await this.init(),
        this.started = !0,
        await new Promise(e=>{
            const n = async()=>{
                var i;
                this._eventListeners.addListeners(),
                this.interactivity.element instanceof HTMLElement && this._intersectionObserver && this._intersectionObserver.observe(this.interactivity.element);
                for (const [,r] of this.plugins)
                    await ((i = r.start) == null ? void 0 : i.call(r));
                this._engine.dispatchEvent(Pe.containerStarted, {
                    container: this
                }),
                this.play(),
                e()
            }
            ;
            this._delayTimeout = setTimeout(()=>void n(), this._delay)
        }
        ))
    }
    stop() {
        var e;
        if (!(!Z(this) || !this.started)) {
            this._delayTimeout && (clearTimeout(this._delayTimeout),
            delete this._delayTimeout),
            this._firstStart = !0,
            this.started = !1,
            this._eventListeners.removeListeners(),
            this.pause(),
            this.particles.clear(),
            this.canvas.stop(),
            this.interactivity.element instanceof HTMLElement && this._intersectionObserver && this._intersectionObserver.unobserve(this.interactivity.element);
            for (const [,n] of this.plugins)
                (e = n.stop) == null || e.call(n);
            for (const n of this.plugins.keys())
                this.plugins.delete(n);
            this._sourceOptions = this._options,
            this._engine.dispatchEvent(Pe.containerStopped, {
                container: this
            })
        }
    }
    updateActualOptions() {
        this.actualOptions.responsive = [];
        const e = this.actualOptions.setResponsive(this.canvas.size.width, this.retina.pixelRatio, this._options);
        return this.actualOptions.setTheme(this._currentTheme),
        this._responsiveMaxWidth === e ? !1 : (this._responsiveMaxWidth = e,
        !0)
    }
}
class n0 {
    constructor() {
        this._listeners = new Map
    }
    addEventListener(e, n) {
        this.removeEventListener(e, n);
        let i = this._listeners.get(e);
        i || (i = [],
        this._listeners.set(e, i)),
        i.push(n)
    }
    dispatchEvent(e, n) {
        const i = this._listeners.get(e);
        i == null || i.forEach(r=>r(n))
    }
    hasEventListener(e) {
        return !!this._listeners.get(e)
    }
    removeAllEventListeners(e) {
        e ? this._listeners.delete(e) : this._listeners = new Map
    }
    removeEventListener(e, n) {
        const i = this._listeners.get(e);
        if (!i)
            return;
        const r = i.length
          , o = i.indexOf(n);
        if (o < 0)
            return;
        const l = 1;
        r === l ? this._listeners.delete(e) : i.splice(o, l)
    }
}
async function cl(t, e, n, i=!1) {
    let r = e.get(t);
    return (!r || i) && (r = await Promise.all([...n.values()].map(o=>o(t))),
    e.set(t, r)),
    r
}
async function i0(t) {
    const e = ht(t.url, t.index);
    if (!e)
        return t.fallback;
    const n = await fetch(e);
    return n.ok ? await n.json() : (Hn().error(`${rt} ${n.status} while retrieving config file`),
    t.fallback)
}
const Cp = "true"
  , rf = "false"
  , fl = "canvas"
  , r0 = t=>{
    let e;
    if (t instanceof HTMLCanvasElement || t.tagName.toLowerCase() === fl)
        e = t,
        e.dataset[Mn] || (e.dataset[Mn] = rf);
    else {
        const i = t.getElementsByTagName(fl);
        i.length ? (e = i[0],
        e.dataset[Mn] = rf) : (e = document.createElement(fl),
        e.dataset[Mn] = Cp,
        t.appendChild(e))
    }
    const n = "100%";
    return e.style.width || (e.style.width = n),
    e.style.height || (e.style.height = n),
    e
}
  , o0 = (t,e)=>{
    let n = e ?? document.getElementById(t);
    return n || (n = document.createElement("div"),
    n.id = t,
    n.dataset[Mn] = Cp,
    document.body.append(n),
    n)
}
;
class s0 {
    constructor() {
        this._configs = new Map,
        this._domArray = [],
        this._eventDispatcher = new n0,
        this._initialized = !1,
        this.plugins = [],
        this._initializers = {
            interactors: new Map,
            movers: new Map,
            updaters: new Map
        },
        this.interactors = new Map,
        this.movers = new Map,
        this.updaters = new Map,
        this.presets = new Map,
        this.effectDrawers = new Map,
        this.shapeDrawers = new Map,
        this.pathGenerators = new Map
    }
    get configs() {
        const e = {};
        for (const [n,i] of this._configs)
            e[n] = i;
        return e
    }
    get items() {
        return this._domArray
    }
    get version() {
        return "3.4.0"
    }
    addConfig(e) {
        const n = e.key ?? e.name ?? "default";
        this._configs.set(n, e),
        this._eventDispatcher.dispatchEvent(Pe.configAdded, {
            data: {
                name: n,
                config: e
            }
        })
    }
    async addEffect(e, n, i=!0) {
        st(e, r=>{
            this.getEffectDrawer(r) || this.effectDrawers.set(r, n)
        }
        ),
        await this.refresh(i)
    }
    addEventListener(e, n) {
        this._eventDispatcher.addEventListener(e, n)
    }
    async addInteractor(e, n, i=!0) {
        this._initializers.interactors.set(e, n),
        await this.refresh(i)
    }
    async addMover(e, n, i=!0) {
        this._initializers.movers.set(e, n),
        await this.refresh(i)
    }
    async addParticleUpdater(e, n, i=!0) {
        this._initializers.updaters.set(e, n),
        await this.refresh(i)
    }
    async addPathGenerator(e, n, i=!0) {
        this.getPathGenerator(e) || this.pathGenerators.set(e, n),
        await this.refresh(i)
    }
    async addPlugin(e, n=!0) {
        this.getPlugin(e.id) || this.plugins.push(e),
        await this.refresh(n)
    }
    async addPreset(e, n, i=!1, r=!0) {
        (i || !this.getPreset(e)) && this.presets.set(e, n),
        await this.refresh(r)
    }
    async addShape(e, n=!0) {
        for (const i of e.validTypes)
            this.getShapeDrawer(i) || this.shapeDrawers.set(i, e);
        await this.refresh(n)
    }
    clearPlugins(e) {
        this.updaters.delete(e),
        this.movers.delete(e),
        this.interactors.delete(e)
    }
    dispatchEvent(e, n) {
        this._eventDispatcher.dispatchEvent(e, n)
    }
    dom() {
        return this.items
    }
    domItem(e) {
        return this.item(e)
    }
    async getAvailablePlugins(e) {
        const n = new Map;
        for (const i of this.plugins)
            i.needsPlugin(e.actualOptions) && n.set(i.id, await i.getPlugin(e));
        return n
    }
    getEffectDrawer(e) {
        return this.effectDrawers.get(e)
    }
    async getInteractors(e, n=!1) {
        return cl(e, this.interactors, this._initializers.interactors, n)
    }
    async getMovers(e, n=!1) {
        return cl(e, this.movers, this._initializers.movers, n)
    }
    getPathGenerator(e) {
        return this.pathGenerators.get(e)
    }
    getPlugin(e) {
        return this.plugins.find(n=>n.id === e)
    }
    getPreset(e) {
        return this.presets.get(e)
    }
    getShapeDrawer(e) {
        return this.shapeDrawers.get(e)
    }
    getSupportedEffects() {
        return this.effectDrawers.keys()
    }
    getSupportedShapes() {
        return this.shapeDrawers.keys()
    }
    async getUpdaters(e, n=!1) {
        return cl(e, this.updaters, this._initializers.updaters, n)
    }
    init() {
        this._initialized || (this._initialized = !0)
    }
    item(e) {
        const {items: n} = this
          , i = n[e];
        if (!i || i.destroyed) {
            n.splice(e, 1);
            return
        }
        return i
    }
    async load(e) {
        var v;
        const i = e.id ?? ((v = e.element) == null ? void 0 : v.id) ?? `tsparticles${Math.floor(W() * 1e4)}`
          , {index: r, url: o} = e
          , s = o ? await i0({
            fallback: e.options,
            url: o,
            index: r
        }) : e.options
          , l = ht(s, r)
          , {items: a} = this
          , u = a.findIndex(y=>y.id.description === i)
          , c = 0
          , f = new t0(this,i,l);
        if (u >= c) {
            const y = this.item(u)
              , k = 1
              , p = 0
              , h = y ? k : p;
            y && !y.destroyed && y.destroy(!1),
            a.splice(u, h, f)
        } else
            a.push(f);
        const d = o0(i, e.element)
          , m = r0(d);
        return f.canvas.loadCanvas(m),
        await f.start(),
        f
    }
    loadOptions(e, n) {
        this.plugins.forEach(i=>{
            var r;
            return (r = i.loadOptions) == null ? void 0 : r.call(i, e, n)
        }
        )
    }
    loadParticlesOptions(e, n, ...i) {
        const r = this.updaters.get(e);
        r && r.forEach(o=>{
            var s;
            return (s = o.loadOptions) == null ? void 0 : s.call(o, n, ...i)
        }
        )
    }
    async refresh(e=!0) {
        e && await Promise.all(this.items.map(n=>n.refresh()))
    }
    removeEventListener(e, n) {
        this._eventDispatcher.removeEventListener(e, n)
    }
    setOnClickHandler(e) {
        const {items: n} = this;
        if (!n.length)
            throw new Error(`${rt} can only set click handlers after calling tsParticles.load()`);
        n.forEach(i=>i.addClickHandler(e))
    }
}
var hi;
(function(t) {
    t[t.h = 1] = "h",
    t[t.s = 2] = "s",
    t[t.l = 3] = "l",
    t[t.a = 5] = "a"
}
)(hi || (hi = {}));
class l0 {
    constructor() {
        this.key = "hsl",
        this.stringPrefix = "hsl"
    }
    handleColor(e) {
        const n = e.value
          , i = n.hsl ?? e.value;
        if (i.h !== void 0 && i.s !== void 0 && i.l !== void 0)
            return Ii(i)
    }
    handleRangeColor(e) {
        const n = e.value
          , i = n.hsl ?? e.value;
        if (i.h !== void 0 && i.l !== void 0)
            return Ii({
                h: M(i.h),
                l: M(i.l),
                s: M(i.s)
            })
    }
    parseString(e) {
        if (!e.startsWith("hsl"))
            return;
        const n = /hsla?\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(,\s*([\d.%]+)\s*)?\)/i
          , i = n.exec(e)
          , r = 4
          , o = 1
          , s = 10;
        return i ? Bg({
            a: i.length > r ? op(i[hi.a]) : o,
            h: parseInt(i[hi.h], s),
            l: parseInt(i[hi.l], s),
            s: parseInt(i[hi.s], s)
        }) : void 0
    }
}
var pi;
(function(t) {
    t[t.r = 1] = "r",
    t[t.g = 2] = "g",
    t[t.b = 3] = "b",
    t[t.a = 5] = "a"
}
)(pi || (pi = {}));
class a0 {
    constructor() {
        this.key = "rgb",
        this.stringPrefix = "rgb"
    }
    handleColor(e) {
        const n = e.value
          , i = n.rgb ?? e.value;
        if (i.r !== void 0)
            return i
    }
    handleRangeColor(e) {
        const n = e.value
          , i = n.rgb ?? e.value;
        if (i.r !== void 0)
            return {
                r: M(i.r),
                g: M(i.g),
                b: M(i.b)
            }
    }
    parseString(e) {
        if (!e.startsWith(this.stringPrefix))
            return;
        const n = /rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([\d.%]+)\s*)?\)/i
          , i = n.exec(e)
          , r = 10;
        return i ? {
            a: i.length > 4 ? op(i[pi.a]) : 1,
            b: parseInt(i[pi.b], r),
            g: parseInt(i[pi.g], r),
            r: parseInt(i[pi.r], r)
        } : void 0
    }
}
function u0() {
    const t = new a0
      , e = new l0;
    Uc(t),
    Uc(e);
    const n = new s0;
    return n.init(),
    n
}
class Ot {
    constructor(e) {
        this.type = Fi.external,
        this.container = e
    }
}
class Cu {
    constructor(e) {
        this.type = Fi.particles,
        this.container = e
    }
}
var Je;
(function(t) {
    t.clockwise = "clockwise",
    t.counterClockwise = "counter-clockwise",
    t.random = "random"
}
)(Je || (Je = {}));
var of;
(function(t) {
    t.linear = "linear",
    t.radial = "radial",
    t.random = "random"
}
)(of || (of = {}));
var Dn;
(function(t) {
    t.easeInBack = "ease-in-back",
    t.easeInCirc = "ease-in-circ",
    t.easeInCubic = "ease-in-cubic",
    t.easeInLinear = "ease-in-linear",
    t.easeInQuad = "ease-in-quad",
    t.easeInQuart = "ease-in-quart",
    t.easeInQuint = "ease-in-quint",
    t.easeInExpo = "ease-in-expo",
    t.easeInSine = "ease-in-sine",
    t.easeOutBack = "ease-out-back",
    t.easeOutCirc = "ease-out-circ",
    t.easeOutCubic = "ease-out-cubic",
    t.easeOutLinear = "ease-out-linear",
    t.easeOutQuad = "ease-out-quad",
    t.easeOutQuart = "ease-out-quart",
    t.easeOutQuint = "ease-out-quint",
    t.easeOutExpo = "ease-out-expo",
    t.easeOutSine = "ease-out-sine",
    t.easeInOutBack = "ease-in-out-back",
    t.easeInOutCirc = "ease-in-out-circ",
    t.easeInOutCubic = "ease-in-out-cubic",
    t.easeInOutLinear = "ease-in-out-linear",
    t.easeInOutQuad = "ease-in-out-quad",
    t.easeInOutQuart = "ease-in-out-quart",
    t.easeInOutQuint = "ease-in-out-quint",
    t.easeInOutExpo = "ease-in-out-expo",
    t.easeInOutSine = "ease-in-out-sine"
}
)(Dn || (Dn = {}));
const Eu = u0();
Vn() || (window.tsParticles = Eu);
const c0 = t=>{
    const e = t.id ?? "tsparticles";
    return De.useEffect(()=>{
        let n;
        return Eu.load({
            id: e,
            url: t.url,
            options: t.options
        }).then(i=>{
            var r;
            n = i,
            (r = t.particlesLoaded) == null || r.call(t, i)
        }
        ),
        ()=>{
            n == null || n.destroy()
        }
    }
    , [e, t, t.url, t.options]),
    C.jsx("div", {
        id: e,
        className: t.className
    })
}
;
async function f0(t) {
    await t(Eu)
}
const xa = .5
  , Tn = 0
  , pt = 1
  , sf = 60
  , lf = 0
  , d0 = .01;
function h0(t) {
    const e = t.initialPosition
      , {dx: n, dy: i} = Me(e, t.position)
      , r = Math.abs(n)
      , o = Math.abs(i)
      , {maxDistance: s} = t.retina
      , l = s.horizontal
      , a = s.vertical;
    if (!l && !a)
        return;
    const u = (l && r >= l) ?? !1
      , c = (a && o >= a) ?? !1;
    if ((u || c) && !t.misplaced)
        t.misplaced = !!l && r > l || !!a && o > a,
        l && (t.velocity.x = t.velocity.y * xa - t.velocity.x),
        a && (t.velocity.y = t.velocity.x * xa - t.velocity.y);
    else if ((!l || r < l) && (!a || o < a) && t.misplaced)
        t.misplaced = !1;
    else if (t.misplaced) {
        const f = t.position
          , d = t.velocity;
        l && (f.x < e.x && d.x < Tn || f.x > e.x && d.x > Tn) && (d.x *= -W()),
        a && (f.y < e.y && d.y < Tn || f.y > e.y && d.y > Tn) && (d.y *= -W())
    }
}
function p0(t, e, n, i, r, o) {
    y0(t, o);
    const s = t.gravity
      , l = s != null && s.enable && s.inverse ? -pt : pt;
    r && n && (t.velocity.x += r * o.factor / (sf * n)),
    s != null && s.enable && n && (t.velocity.y += l * (s.acceleration * o.factor) / (sf * n));
    const a = t.moveDecay;
    t.velocity.multTo(a);
    const u = t.velocity.mult(n);
    s != null && s.enable && i > Tn && (!s.inverse && u.y >= Tn && u.y >= i || s.inverse && u.y <= Tn && u.y <= -i) && (u.y = l * i,
    n && (t.velocity.y = u.y / n));
    const c = t.options.zIndex
      , f = (pt - t.zIndexFactor) ** c.velocityRate;
    u.multTo(f);
    const {position: d} = t;
    d.addTo(u),
    e.vibrate && (d.x += Math.sin(d.x * Math.cos(d.y)),
    d.y += Math.cos(d.y * Math.sin(d.x)))
}
function m0(t, e) {
    const n = t.container;
    if (!t.spin)
        return;
    const i = {
        x: t.spin.direction === Je.clockwise ? Math.cos : Math.sin,
        y: t.spin.direction === Je.clockwise ? Math.sin : Math.cos
    };
    t.position.x = t.spin.center.x + t.spin.radius * i.x(t.spin.angle),
    t.position.y = t.spin.center.y + t.spin.radius * i.y(t.spin.angle),
    t.spin.radius += t.spin.acceleration;
    const r = Math.max(n.canvas.size.width, n.canvas.size.height)
      , o = r * xa;
    t.spin.radius > o ? (t.spin.radius = o,
    t.spin.acceleration *= -pt) : t.spin.radius < lf && (t.spin.radius = lf,
    t.spin.acceleration *= -pt),
    t.spin.angle += e * d0 * (pt - t.spin.radius / r)
}
function y0(t, e) {
    var s;
    const n = t.options
      , i = n.move.path;
    if (!i.enable)
        return;
    if (t.lastPathTime <= t.pathDelay) {
        t.lastPathTime += e.value;
        return
    }
    const o = (s = t.pathGenerator) == null ? void 0 : s.generate(t, e);
    o && t.velocity.addTo(o),
    i.clamp && (t.velocity.x = ot(t.velocity.x, -pt, pt),
    t.velocity.y = ot(t.velocity.y, -pt, pt)),
    t.lastPathTime -= t.pathDelay
}
function g0(t) {
    return t.slow.inRange ? t.slow.factor : pt
}
function v0(t) {
    const e = t.container
      , n = t.options
      , i = n.move.spin;
    if (!i.enable)
        return;
    const r = i.position ?? {
        x: 50,
        y: 50
    }
      , o = .01
      , s = {
        x: r.x * o * e.canvas.size.width,
        y: r.y * o * e.canvas.size.height
    }
      , l = t.getPosition()
      , a = Ve(l, s)
      , u = M(i.acceleration);
    t.retina.spinAcceleration = u * e.retina.pixelRatio;
    const c = 0;
    t.spin = {
        center: s,
        direction: t.velocity.x >= c ? Je.clockwise : Je.counterClockwise,
        angle: t.velocity.angle,
        radius: a,
        acceleration: t.retina.spinAcceleration
    }
}
const w0 = 2
  , x0 = 1
  , k0 = 1;
class _0 {
    init(e) {
        const n = e.options
          , i = n.move.gravity;
        e.gravity = {
            enable: i.enable,
            acceleration: M(i.acceleration),
            inverse: i.inverse
        },
        v0(e)
    }
    isEnabled(e) {
        return !e.destroyed && e.options.move.enable
    }
    move(e, n) {
        var y, k;
        const i = e.options
          , r = i.move;
        if (!r.enable)
            return;
        const o = e.container
          , s = o.retina.pixelRatio;
        (y = e.retina).moveSpeed ?? (y.moveSpeed = M(r.speed) * s),
        (k = e.retina).moveDrift ?? (k.moveDrift = M(e.options.move.drift) * s);
        const l = g0(e)
          , a = e.retina.moveSpeed * o.retina.reduceFactor
          , u = e.retina.moveDrift
          , c = dt(i.size.value) * s
          , f = r.size ? e.getRadius() / c : x0
          , d = n.factor || k0
          , m = a * f * l * d / w0
          , v = e.retina.maxSpeed ?? o.retina.maxSpeed;
        r.spin.enable ? m0(e, m) : p0(e, r, m, v, u, n),
        h0(e)
    }
}
async function S0(t, e=!0) {
    await t.addMover("base", ()=>Promise.resolve(new _0), e)
}
const C0 = 2
  , E0 = Math.PI * C0
  , z0 = 0
  , af = {
    x: 0,
    y: 0
};
function P0(t) {
    const {context: e, particle: n, radius: i} = t;
    n.circleRange || (n.circleRange = {
        min: z0,
        max: E0
    });
    const r = n.circleRange;
    e.arc(af.x, af.y, i, r.min, r.max, !1)
}
const b0 = 12
  , M0 = 360
  , uf = 0;
class O0 {
    constructor() {
        this.validTypes = ["circle"]
    }
    draw(e) {
        P0(e)
    }
    getSidesCount() {
        return b0
    }
    particleInit(e, n) {
        const i = n.shapeData
          , r = (i == null ? void 0 : i.angle) ?? {
            max: M0,
            min: uf
        };
        n.circleRange = di(r) ? {
            min: an(r.min),
            max: an(r.max)
        } : {
            min: uf,
            max: an(r)
        }
    }
}
async function R0(t, e=!0) {
    await t.addShape(new O0, e)
}
class T0 {
    constructor(e) {
        this.container = e
    }
    init(e) {
        const n = Ir(e.options.color, e.id, e.options.reduceDuplicates);
        n && (e.color = yp(n, e.options.color.animation, this.container.retina.reduceFactor))
    }
    isEnabled(e) {
        const {h: n, s: i, l: r} = e.options.color.animation
          , {color: o} = e;
        return !e.destroyed && !e.spawning && ((o == null ? void 0 : o.h.value) !== void 0 && n.enable || (o == null ? void 0 : o.s.value) !== void 0 && i.enable || (o == null ? void 0 : o.l.value) !== void 0 && r.enable)
    }
    update(e, n) {
        gp(e.color, n)
    }
}
async function L0(t, e=!0) {
    await t.addParticleUpdater("color", n=>Promise.resolve(new T0(n)), e)
}
class I0 {
    constructor(e) {
        this.container = e
    }
    init(e) {
        const n = e.options.opacity
          , i = 1;
        e.opacity = cp(n, i);
        const r = n.animation;
        r.enable && (e.opacity.velocity = M(r.speed) / Zt * this.container.retina.reduceFactor,
        r.sync || (e.opacity.velocity *= W()))
    }
    isEnabled(e) {
        return !e.destroyed && !e.spawning && !!e.opacity && e.opacity.enable && ((e.opacity.maxLoops ?? 0) <= 0 || (e.opacity.maxLoops ?? 0) > 0 && (e.opacity.loops ?? 0) < (e.opacity.maxLoops ?? 0))
    }
    reset(e) {
        e.opacity && (e.opacity.time = 0,
        e.opacity.loops = 0)
    }
    update(e, n) {
        !this.isEnabled(e) || !e.opacity || xu(e, e.opacity, !0, e.options.opacity.animation.destroy, n)
    }
}
async function D0(t, e=!0) {
    await t.addParticleUpdater("opacity", n=>Promise.resolve(new I0(n)), e)
}
const ss = 0
  , Ei = 0;
function N0(t) {
    if (t.outMode !== se.bounce && t.outMode !== se.split || t.direction !== D.left && t.direction !== D.right)
        return;
    t.bounds.right < Ei && t.direction === D.left ? t.particle.position.x = t.size + t.offset.x : t.bounds.left > t.canvasSize.width && t.direction === D.right && (t.particle.position.x = t.canvasSize.width - t.size - t.offset.x);
    const e = t.particle.velocity.x;
    let n = !1;
    if (t.direction === D.right && t.bounds.right >= t.canvasSize.width && e > ss || t.direction === D.left && t.bounds.left <= Ei && e < ss) {
        const r = M(t.particle.options.bounce.horizontal.value);
        t.particle.velocity.x *= -r,
        n = !0
    }
    if (!n)
        return;
    const i = t.offset.x + t.size;
    t.bounds.right >= t.canvasSize.width && t.direction === D.right ? t.particle.position.x = t.canvasSize.width - i : t.bounds.left <= Ei && t.direction === D.left && (t.particle.position.x = i),
    t.outMode === se.split && t.particle.destroy()
}
function F0(t) {
    if (t.outMode !== se.bounce && t.outMode !== se.split || t.direction !== D.bottom && t.direction !== D.top)
        return;
    t.bounds.bottom < Ei && t.direction === D.top ? t.particle.position.y = t.size + t.offset.y : t.bounds.top > t.canvasSize.height && t.direction === D.bottom && (t.particle.position.y = t.canvasSize.height - t.size - t.offset.y);
    const e = t.particle.velocity.y;
    let n = !1;
    if (t.direction === D.bottom && t.bounds.bottom >= t.canvasSize.height && e > ss || t.direction === D.top && t.bounds.top <= Ei && e < ss) {
        const r = M(t.particle.options.bounce.vertical.value);
        t.particle.velocity.y *= -r,
        n = !0
    }
    if (!n)
        return;
    const i = t.offset.y + t.size;
    t.bounds.bottom >= t.canvasSize.height && t.direction === D.bottom ? t.particle.position.y = t.canvasSize.height - i : t.bounds.top <= Ei && t.direction === D.top && (t.particle.position.y = i),
    t.outMode === se.split && t.particle.destroy()
}
class j0 {
    constructor(e) {
        this.container = e,
        this.modes = [se.bounce, se.split]
    }
    update(e, n, i, r) {
        if (!this.modes.includes(r))
            return;
        const o = this.container;
        let s = !1;
        for (const [,d] of o.plugins)
            if (d.particleBounce !== void 0 && (s = d.particleBounce(e, i, n)),
            s)
                break;
        if (s)
            return;
        const l = e.getPosition()
          , a = e.offset
          , u = e.getRadius()
          , c = Hr(l, u)
          , f = o.canvas.size;
        N0({
            particle: e,
            outMode: r,
            direction: n,
            bounds: c,
            canvasSize: f,
            offset: a,
            size: u
        }),
        F0({
            particle: e,
            outMode: r,
            direction: n,
            bounds: c,
            canvasSize: f,
            offset: a,
            size: u
        })
    }
}
const co = 0;
class $0 {
    constructor(e) {
        this.container = e,
        this.modes = [se.destroy]
    }
    update(e, n, i, r) {
        if (!this.modes.includes(r))
            return;
        const o = this.container;
        switch (e.outType) {
        case vt.normal:
        case vt.outside:
            if (gu(e.position, o.canvas.size, fe.origin, e.getRadius(), n))
                return;
            break;
        case vt.inside:
            {
                const {dx: s, dy: l} = Me(e.position, e.moveCenter)
                  , {x: a, y: u} = e.velocity;
                if (a < co && s > e.moveCenter.radius || u < co && l > e.moveCenter.radius || a >= co && s < -e.moveCenter.radius || u >= co && l < -e.moveCenter.radius)
                    return;
                break
            }
        }
        o.particles.remove(e, void 0, !0)
    }
}
const fo = 0;
class A0 {
    constructor(e) {
        this.container = e,
        this.modes = [se.none]
    }
    update(e, n, i, r) {
        if (!this.modes.includes(r) || ((e.options.move.distance.horizontal && (n === D.left || n === D.right)) ?? (e.options.move.distance.vertical && (n === D.top || n === D.bottom))))
            return;
        const o = e.options.move.gravity
          , s = this.container
          , l = s.canvas.size
          , a = e.getRadius();
        if (o.enable) {
            const u = e.position;
            (!o.inverse && u.y > l.height + a && n === D.bottom || o.inverse && u.y < -a && n === D.top) && s.particles.remove(e)
        } else {
            if (e.velocity.y > fo && e.position.y <= l.height + a || e.velocity.y < fo && e.position.y >= -a || e.velocity.x > fo && e.position.x <= l.width + a || e.velocity.x < fo && e.position.x >= -a)
                return;
            gu(e.position, s.canvas.size, fe.origin, a, n) || s.particles.remove(e)
        }
    }
}
const ho = 0
  , po = 0;
class B0 {
    constructor(e) {
        this.container = e,
        this.modes = [se.out]
    }
    update(e, n, i, r) {
        if (!this.modes.includes(r))
            return;
        const o = this.container;
        switch (e.outType) {
        case vt.inside:
            {
                const {x: s, y: l} = e.velocity
                  , a = fe.origin;
                a.length = e.moveCenter.radius,
                a.angle = e.velocity.angle + Math.PI,
                a.addTo(fe.create(e.moveCenter));
                const {dx: u, dy: c} = Me(e.position, a);
                if (s <= ho && u >= po || l <= ho && c >= po || s >= ho && u <= po || l >= ho && c <= po)
                    return;
                e.position.x = Math.floor(Ue({
                    min: 0,
                    max: o.canvas.size.width
                })),
                e.position.y = Math.floor(Ue({
                    min: 0,
                    max: o.canvas.size.height
                }));
                const {dx: f, dy: d} = Me(e.position, e.moveCenter);
                e.direction = Math.atan2(-d, -f),
                e.velocity.angle = e.direction;
                break
            }
        default:
            {
                if (gu(e.position, o.canvas.size, fe.origin, e.getRadius(), n))
                    return;
                switch (e.outType) {
                case vt.outside:
                    {
                        e.position.x = Math.floor(Ue({
                            min: -e.moveCenter.radius,
                            max: e.moveCenter.radius
                        })) + e.moveCenter.x,
                        e.position.y = Math.floor(Ue({
                            min: -e.moveCenter.radius,
                            max: e.moveCenter.radius
                        })) + e.moveCenter.y;
                        const {dx: s, dy: l} = Me(e.position, e.moveCenter);
                        e.moveCenter.radius && (e.direction = Math.atan2(l, s),
                        e.velocity.angle = e.direction);
                        break
                    }
                case vt.normal:
                    {
                        const s = e.options.move.warp
                          , l = o.canvas.size
                          , a = {
                            bottom: l.height + e.getRadius() + e.offset.y,
                            left: -e.getRadius() - e.offset.x,
                            right: l.width + e.getRadius() + e.offset.x,
                            top: -e.getRadius() - e.offset.y
                        }
                          , u = e.getRadius()
                          , c = Hr(e.position, u);
                        n === D.right && c.left > l.width + e.offset.x ? (e.position.x = a.left,
                        e.initialPosition.x = e.position.x,
                        s || (e.position.y = W() * l.height,
                        e.initialPosition.y = e.position.y)) : n === D.left && c.right < -e.offset.x && (e.position.x = a.right,
                        e.initialPosition.x = e.position.x,
                        s || (e.position.y = W() * l.height,
                        e.initialPosition.y = e.position.y)),
                        n === D.bottom && c.top > l.height + e.offset.y ? (s || (e.position.x = W() * l.width,
                        e.initialPosition.x = e.position.x),
                        e.position.y = a.top,
                        e.initialPosition.y = e.position.y) : n === D.top && c.bottom < -e.offset.y && (s || (e.position.x = W() * l.width,
                        e.initialPosition.x = e.position.x),
                        e.position.y = a.bottom,
                        e.initialPosition.y = e.position.y);
                        break
                    }
                }
                break
            }
        }
    }
}
const mo = (t,e)=>t.default === e || t.bottom === e || t.left === e || t.right === e || t.top === e;
class U0 {
    constructor(e) {
        this._updateOutMode = (n,i,r,o)=>{
            for (const s of this.updaters)
                s.update(n, o, i, r)
        }
        ,
        this.container = e,
        this.updaters = []
    }
    init(e) {
        this.updaters = [];
        const n = e.options.move.outModes;
        mo(n, se.bounce) ? this.updaters.push(new j0(this.container)) : mo(n, se.out) ? this.updaters.push(new B0(this.container)) : mo(n, se.destroy) ? this.updaters.push(new $0(this.container)) : mo(n, se.none) && this.updaters.push(new A0(this.container))
    }
    isEnabled(e) {
        return !e.destroyed && !e.spawning
    }
    update(e, n) {
        const i = e.options.move.outModes;
        this._updateOutMode(e, n, i.bottom ?? i.default, D.bottom),
        this._updateOutMode(e, n, i.left ?? i.default, D.left),
        this._updateOutMode(e, n, i.right ?? i.default, D.right),
        this._updateOutMode(e, n, i.top ?? i.default, D.top)
    }
}
async function H0(t, e=!0) {
    await t.addParticleUpdater("outModes", n=>Promise.resolve(new U0(n)), e)
}
const gn = 0;
class V0 {
    init(e) {
        const n = e.container
          , i = e.options.size
          , r = i.animation;
        r.enable && (e.size.velocity = (e.retina.sizeAnimationSpeed ?? n.retina.sizeAnimationSpeed) / Zt * n.retina.reduceFactor,
        r.sync || (e.size.velocity *= W()))
    }
    isEnabled(e) {
        return !e.destroyed && !e.spawning && e.size.enable && ((e.size.maxLoops ?? gn) <= gn || (e.size.maxLoops ?? gn) > gn && (e.size.loops ?? gn) < (e.size.maxLoops ?? gn))
    }
    reset(e) {
        e.size.loops = gn
    }
    update(e, n) {
        this.isEnabled(e) && xu(e, e.size, !0, e.options.size.animation.destroy, n)
    }
}
async function W0(t, e=!0) {
    await t.addParticleUpdater("size", ()=>Promise.resolve(new V0), e)
}
async function q0(t, e=!0) {
    await S0(t, !1),
    await R0(t, !1),
    await L0(t, !1),
    await D0(t, !1),
    await H0(t, !1),
    await W0(t, !1),
    await t.refresh(e)
}
async function Q0() {
    il(Dn.easeInQuad, t=>t ** 2),
    il(Dn.easeOutQuad, t=>1 - (1 - t) ** 2),
    il(Dn.easeInOutQuad, t=>t < .5 ? 2 * t ** 2 : 1 - (-2 * t + 2) ** 2 / 2),
    await Promise.resolve()
}
function G0(t) {
    const {context: e, particle: n, radius: i, opacity: r} = t
      , o = n.emojiData
      , s = 2
      , l = i * s
      , a = e.globalAlpha;
    o && (e.globalAlpha = r,
    e.drawImage(o, -i, -i, l, l),
    e.globalAlpha = a)
}
const cf = '"Twemoji Mozilla", Apple Color Emoji, "Segoe UI Emoji", "Noto Color Emoji", "EmojiOne Color"';
class Y0 {
    constructor() {
        this.validTypes = ["emoji"],
        this._emojiShapeDict = new Map
    }
    destroy() {
        for (const [e,n] of this._emojiShapeDict)
            n instanceof ImageBitmap && (n == null || n.close(),
            this._emojiShapeDict.delete(e))
    }
    draw(e) {
        G0(e)
    }
    async init(e) {
        const n = e.actualOptions
          , {validTypes: i} = this;
        if (!i.find(s=>ie(s, n.particles.shape.type)))
            return;
        const r = [Bc(cf)]
          , o = i.map(s=>n.particles.shape.options[s]).find(s=>!!s);
        o && st(o, s=>{
            s.font && r.push(Bc(s.font))
        }
        ),
        await Promise.all(r)
    }
    particleDestroy(e) {
        delete e.emojiData
    }
    particleInit(e, n) {
        const r = n.shapeData;
        if (!(r != null && r.value))
            return;
        const o = ht(r.value, n.randomIndexData)
          , s = r.font ?? cf;
        if (!o)
            return;
        const l = `${o}_${s}`
          , a = this._emojiShapeDict.get(l);
        if (a) {
            n.emojiData = a;
            return
        }
        const u = dt(n.size.value) * 2;
        let c;
        const f = dt(n.size.value);
        if (typeof OffscreenCanvas < "u") {
            const d = new OffscreenCanvas(u,u)
              , m = d.getContext("2d");
            if (!m)
                return;
            m.font = `400 ${f * 2}px ${s}`,
            m.textBaseline = "middle",
            m.textAlign = "center",
            m.fillText(o, f, f),
            c = d.transferToImageBitmap()
        } else {
            const d = document.createElement("canvas");
            d.width = u,
            d.height = u;
            const m = d.getContext("2d");
            if (!m)
                return;
            m.font = `400 ${f * 2}px ${s}`,
            m.textBaseline = "middle",
            m.textAlign = "center",
            m.fillText(o, f, f),
            c = d
        }
        this._emojiShapeDict.set(l, c),
        n.emojiData = c
    }
}
async function K0(t, e=!0) {
    await t.addShape(new Y0, e)
}
const X0 = 1
  , Z0 = 1
  , Ep = 0;
function zp(t, e, n, i, r) {
    const o = t.actualOptions.interactivity.modes.attract;
    if (!o)
        return;
    const s = t.particles.quadTree.query(i, r);
    for (const l of s) {
        const {dx: a, dy: u, distance: c} = Me(l.position, e)
          , f = o.speed * o.factor
          , d = ot(rp(o.easing)(Z0 - c / n) * f, X0, o.maxSpeed)
          , m = fe.create(c ? a / c * d : f, c ? u / c * d : f);
        l.position.subFrom(m)
    }
}
function J0(t, e) {
    t.attract || (t.attract = {
        particles: []
    });
    const {attract: n} = t;
    if (n.finish || (n.count || (n.count = 0),
    n.count++,
    n.count === t.particles.count && (n.finish = !0)),
    n.clicking) {
        const i = t.interactivity.mouse.clickPosition
          , r = t.retina.attractModeDistance;
        if (!r || r < Ep || !i)
            return;
        zp(t, i, r, new ke(i.x,i.y,r), o=>e(o))
    } else
        n.clicking === !1 && (n.particles = [])
}
function e1(t, e) {
    const n = t.interactivity.mouse.position
      , i = t.retina.attractModeDistance;
    !i || i < Ep || !n || zp(t, n, i, new ke(n.x,n.y,i), r=>e(r))
}
class t1 {
    constructor() {
        this.distance = 200,
        this.duration = .4,
        this.easing = Dn.easeOutQuad,
        this.factor = 1,
        this.maxSpeed = 50,
        this.speed = 1
    }
    load(e) {
        e && (e.distance !== void 0 && (this.distance = e.distance),
        e.duration !== void 0 && (this.duration = e.duration),
        e.easing !== void 0 && (this.easing = e.easing),
        e.factor !== void 0 && (this.factor = e.factor),
        e.maxSpeed !== void 0 && (this.maxSpeed = e.maxSpeed),
        e.speed !== void 0 && (this.speed = e.speed))
    }
}
const Ji = "attract";
let n1 = class extends Ot {
    constructor(e, n) {
        super(n),
        this._engine = e,
        n.attract || (n.attract = {
            particles: []
        }),
        this.handleClickMode = i=>{
            const r = this.container.actualOptions
              , o = r.interactivity.modes.attract;
            if (!(!o || i !== Ji)) {
                n.attract || (n.attract = {
                    particles: []
                }),
                n.attract.clicking = !0,
                n.attract.count = 0;
                for (const s of n.attract.particles)
                    this.isEnabled(s) && s.velocity.setTo(s.initialVelocity);
                n.attract.particles = [],
                n.attract.finish = !1,
                setTimeout(()=>{
                    n.destroyed || (n.attract || (n.attract = {
                        particles: []
                    }),
                    n.attract.clicking = !1)
                }
                , o.duration * xe)
            }
        }
    }
    clear() {}
    init() {
        const e = this.container
          , n = e.actualOptions.interactivity.modes.attract;
        n && (e.retina.attractModeDistance = n.distance * e.retina.pixelRatio)
    }
    interact() {
        const e = this.container
          , n = e.actualOptions
          , i = e.interactivity.status === Bn
          , r = n.interactivity.events
          , {enable: o, mode: s} = r.onHover
          , {enable: l, mode: a} = r.onClick;
        i && o && ie(Ji, s) ? e1(this.container, u=>this.isEnabled(u)) : l && ie(Ji, a) && J0(this.container, u=>this.isEnabled(u))
    }
    isEnabled(e) {
        const n = this.container
          , i = n.actualOptions
          , r = n.interactivity.mouse
          , o = ((e == null ? void 0 : e.interactivity) ?? i.interactivity).events;
        if ((!r.position || !o.onHover.enable) && (!r.clickPosition || !o.onClick.enable))
            return !1;
        const s = o.onHover.mode
          , l = o.onClick.mode;
        return ie(Ji, s) || ie(Ji, l)
    }
    loadModeOptions(e, ...n) {
        e.attract || (e.attract = new t1);
        for (const i of n)
            e.attract.load(i == null ? void 0 : i.attract)
    }
    reset() {}
}
;
async function i1(t, e=!0) {
    await t.addInteractor("externalAttract", n=>Promise.resolve(new n1(t,n)), e)
}
const r1 = 2
  , Lo = .5
  , o1 = Math.PI * Lo
  , ff = 2
  , Pp = 10
  , s1 = 0;
function bp(t, e, n, i, r) {
    const o = t.particles.quadTree.query(i, r);
    for (const s of o)
        i instanceof ke ? ap(ya(s), {
            position: e,
            radius: n,
            mass: n ** r1 * o1,
            velocity: fe.origin,
            factor: fe.origin
        }) : i instanceof xt && Ng(s, Hr(e, n))
}
function l1(t, e, n, i) {
    const r = document.querySelectorAll(e);
    r.length && r.forEach(o=>{
        const s = o
          , l = t.retina.pixelRatio
          , a = {
            x: (s.offsetLeft + s.offsetWidth * Lo) * l,
            y: (s.offsetTop + s.offsetHeight * Lo) * l
        }
          , u = s.offsetWidth * Lo * l
          , c = Pp * l
          , f = n.type === Ni.circle ? new ke(a.x,a.y,u + c) : new xt(s.offsetLeft * l - c,s.offsetTop * l - c,s.offsetWidth * l + c * ff,s.offsetHeight * l + c * ff);
        i(a, u, f)
    }
    )
}
function a1(t, e, n, i) {
    wu(n, e, (r,o)=>l1(t, r, o, (s,l,a)=>bp(t, s, l, a, i)))
}
function u1(t, e) {
    const n = t.retina.pixelRatio
      , i = Pp * n
      , r = t.interactivity.mouse.position
      , o = t.retina.bounceModeDistance;
    !o || o < s1 || !r || bp(t, r, o, new ke(r.x,r.y,o + i), e)
}
class c1 {
    constructor() {
        this.distance = 200
    }
    load(e) {
        e && e.distance !== void 0 && (this.distance = e.distance)
    }
}
const yo = "bounce";
class f1 extends Ot {
    constructor(e) {
        super(e)
    }
    clear() {}
    init() {
        const e = this.container
          , n = e.actualOptions.interactivity.modes.bounce;
        n && (e.retina.bounceModeDistance = n.distance * e.retina.pixelRatio)
    }
    interact() {
        const e = this.container
          , n = e.actualOptions
          , i = n.interactivity.events
          , r = e.interactivity.status === Bn
          , o = i.onHover.enable
          , s = i.onHover.mode
          , l = i.onDiv;
        r && o && ie(yo, s) ? u1(this.container, a=>this.isEnabled(a)) : a1(this.container, l, yo, a=>this.isEnabled(a))
    }
    isEnabled(e) {
        const n = this.container
          , i = n.actualOptions
          , r = n.interactivity.mouse
          , o = ((e == null ? void 0 : e.interactivity) ?? i.interactivity).events
          , s = o.onDiv;
        return !!r.position && o.onHover.enable && ie(yo, o.onHover.mode) || vu(yo, s)
    }
    loadModeOptions(e, ...n) {
        e.bounce || (e.bounce = new c1);
        for (const i of n)
            e.bounce.load(i == null ? void 0 : i.bounce)
    }
    reset() {}
}
async function d1(t, e=!0) {
    await t.addInteractor("externalBounce", n=>Promise.resolve(new f1(n)), e)
}
class Mp {
    constructor() {
        this.distance = 200,
        this.duration = .4,
        this.mix = !1
    }
    load(e) {
        if (e) {
            if (e.distance !== void 0 && (this.distance = e.distance),
            e.duration !== void 0 && (this.duration = e.duration),
            e.mix !== void 0 && (this.mix = e.mix),
            e.opacity !== void 0 && (this.opacity = e.opacity),
            e.color !== void 0) {
                const n = Mt(this.color) ? void 0 : this.color;
                this.color = st(e.color, i=>Ce.create(n, i))
            }
            e.size !== void 0 && (this.size = e.size)
        }
    }
}
class h1 extends Mp {
    constructor() {
        super(),
        this.selectors = []
    }
    load(e) {
        super.load(e),
        e && e.selectors !== void 0 && (this.selectors = e.selectors)
    }
}
class p1 extends Mp {
    load(e) {
        super.load(e),
        e && (this.divs = st(e.divs, n=>{
            const i = new h1;
            return i.load(n),
            i
        }
        ))
    }
}
var St;
(function(t) {
    t.color = "color",
    t.opacity = "opacity",
    t.size = "size"
}
)(St || (St = {}));
function df(t, e, n, i) {
    if (e >= n) {
        const r = t + (e - n) * i;
        return ot(r, t, e)
    } else if (e < n) {
        const r = t - (n - e) * i;
        return ot(r, e, t)
    }
}
const vn = "bubble"
  , dl = 0
  , m1 = 0
  , y1 = 2
  , hf = 1
  , pf = 1
  , g1 = 0
  , v1 = 0
  , hl = .5
  , pl = 1;
class w1 extends Ot {
    constructor(e) {
        super(e),
        this._clickBubble = ()=>{
            var u;
            const n = this.container
              , i = n.actualOptions
              , r = n.interactivity.mouse.clickPosition
              , o = i.interactivity.modes.bubble;
            if (!o || !r)
                return;
            n.bubble || (n.bubble = {});
            const s = n.retina.bubbleModeDistance;
            if (!s || s < dl)
                return;
            const l = n.particles.quadTree.queryCircle(r, s, c=>this.isEnabled(c))
              , {bubble: a} = n;
            for (const c of l) {
                if (!a.clicking)
                    continue;
                c.bubble.inRange = !a.durationEnd;
                const f = c.getPosition()
                  , d = Ve(f, r)
                  , m = (new Date().getTime() - (n.interactivity.mouse.clickTime ?? m1)) / xe;
                m > o.duration && (a.durationEnd = !0),
                m > o.duration * y1 && (a.clicking = !1,
                a.durationEnd = !1);
                const v = {
                    bubbleObj: {
                        optValue: n.retina.bubbleModeSize,
                        value: c.bubble.radius
                    },
                    particlesObj: {
                        optValue: dt(c.options.size.value) * n.retina.pixelRatio,
                        value: c.size.value
                    },
                    type: St.size
                };
                this._process(c, d, m, v);
                const y = {
                    bubbleObj: {
                        optValue: o.opacity,
                        value: c.bubble.opacity
                    },
                    particlesObj: {
                        optValue: dt(c.options.opacity.value),
                        value: ((u = c.opacity) == null ? void 0 : u.value) ?? hf
                    },
                    type: St.opacity
                };
                this._process(c, d, m, y),
                !a.durationEnd && d <= s ? this._hoverBubbleColor(c, d) : delete c.bubble.color
            }
        }
        ,
        this._hoverBubble = ()=>{
            const n = this.container
              , i = n.interactivity.mouse.position
              , r = n.retina.bubbleModeDistance;
            if (!r || r < dl || !i)
                return;
            const o = n.particles.quadTree.queryCircle(i, r, s=>this.isEnabled(s));
            for (const s of o) {
                s.bubble.inRange = !0;
                const l = s.getPosition()
                  , a = Ve(l, i)
                  , u = pf - a / r;
                a <= r ? u >= v1 && n.interactivity.status === Bn && (this._hoverBubbleSize(s, u),
                this._hoverBubbleOpacity(s, u),
                this._hoverBubbleColor(s, u)) : this.reset(s),
                n.interactivity.status === pa && this.reset(s)
            }
        }
        ,
        this._hoverBubbleColor = (n,i,r)=>{
            const o = this.container.actualOptions
              , s = r ?? o.interactivity.modes.bubble;
            if (s) {
                if (!n.bubble.finalColor) {
                    const l = s.color;
                    if (!l)
                        return;
                    const a = ht(l);
                    n.bubble.finalColor = Ir(a)
                }
                if (n.bubble.finalColor)
                    if (s.mix) {
                        n.bubble.color = void 0;
                        const l = n.getFillColor();
                        n.bubble.color = l ? hp(ku(l, n.bubble.finalColor, pf - i, i)) : n.bubble.finalColor
                    } else
                        n.bubble.color = n.bubble.finalColor
            }
        }
        ,
        this._hoverBubbleOpacity = (n,i,r)=>{
            var f, d;
            const o = this.container
              , s = o.actualOptions
              , l = (r == null ? void 0 : r.opacity) ?? ((f = s.interactivity.modes.bubble) == null ? void 0 : f.opacity);
            if (!l)
                return;
            const a = n.options.opacity.value
              , u = ((d = n.opacity) == null ? void 0 : d.value) ?? hf
              , c = df(u, l, dt(a), i);
            c !== void 0 && (n.bubble.opacity = c)
        }
        ,
        this._hoverBubbleSize = (n,i,r)=>{
            const o = this.container
              , s = r != null && r.size ? r.size * o.retina.pixelRatio : o.retina.bubbleModeSize;
            if (s === void 0)
                return;
            const l = dt(n.options.size.value) * o.retina.pixelRatio
              , a = n.size.value
              , u = df(a, s, l, i);
            u !== void 0 && (n.bubble.radius = u)
        }
        ,
        this._process = (n,i,r,o)=>{
            const s = this.container
              , l = o.bubbleObj.optValue
              , a = s.actualOptions
              , u = a.interactivity.modes.bubble;
            if (!u || l === void 0)
                return;
            const c = u.duration
              , f = s.retina.bubbleModeDistance
              , d = o.particlesObj.optValue
              , m = o.bubbleObj.value
              , v = o.particlesObj.value ?? g1
              , y = o.type;
            if (!(!f || f < dl || l === d))
                if (s.bubble || (s.bubble = {}),
                s.bubble.durationEnd)
                    m && (y === St.size && delete n.bubble.radius,
                    y === St.opacity && delete n.bubble.opacity);
                else if (i <= f) {
                    if ((m ?? v) !== l) {
                        const p = v - r * (v - l) / c;
                        y === St.size && (n.bubble.radius = p),
                        y === St.opacity && (n.bubble.opacity = p)
                    }
                } else
                    y === St.size && delete n.bubble.radius,
                    y === St.opacity && delete n.bubble.opacity
        }
        ,
        this._singleSelectorHover = (n,i,r)=>{
            const o = this.container
              , s = document.querySelectorAll(i)
              , l = o.actualOptions.interactivity.modes.bubble;
            !l || !s.length || s.forEach(a=>{
                const u = a
                  , c = o.retina.pixelRatio
                  , f = {
                    x: (u.offsetLeft + u.offsetWidth * hl) * c,
                    y: (u.offsetTop + u.offsetHeight * hl) * c
                }
                  , d = u.offsetWidth * hl * c
                  , m = r.type === Ni.circle ? new ke(f.x,f.y,d) : new xt(u.offsetLeft * c,u.offsetTop * c,u.offsetWidth * c,u.offsetHeight * c)
                  , v = o.particles.quadTree.query(m, y=>this.isEnabled(y));
                for (const y of v) {
                    if (!m.contains(y.getPosition()))
                        continue;
                    y.bubble.inRange = !0;
                    const k = l.divs
                      , p = lp(k, u);
                    (!y.bubble.div || y.bubble.div !== u) && (this.clear(y, n, !0),
                    y.bubble.div = u),
                    this._hoverBubbleSize(y, pl, p),
                    this._hoverBubbleOpacity(y, pl, p),
                    this._hoverBubbleColor(y, pl, p)
                }
            }
            )
        }
        ,
        e.bubble || (e.bubble = {}),
        this.handleClickMode = n=>{
            n === vn && (e.bubble || (e.bubble = {}),
            e.bubble.clicking = !0)
        }
    }
    clear(e, n, i) {
        e.bubble.inRange && !i || (delete e.bubble.div,
        delete e.bubble.opacity,
        delete e.bubble.radius,
        delete e.bubble.color)
    }
    init() {
        const e = this.container
          , n = e.actualOptions.interactivity.modes.bubble;
        n && (e.retina.bubbleModeDistance = n.distance * e.retina.pixelRatio,
        n.size !== void 0 && (e.retina.bubbleModeSize = n.size * e.retina.pixelRatio))
    }
    interact(e) {
        const n = this.container.actualOptions
          , i = n.interactivity.events
          , r = i.onHover
          , o = i.onClick
          , s = r.enable
          , l = r.mode
          , a = o.enable
          , u = o.mode
          , c = i.onDiv;
        s && ie(vn, l) ? this._hoverBubble() : a && ie(vn, u) ? this._clickBubble() : wu(vn, c, (f,d)=>this._singleSelectorHover(e, f, d))
    }
    isEnabled(e) {
        const n = this.container
          , i = n.actualOptions
          , r = n.interactivity.mouse
          , o = ((e == null ? void 0 : e.interactivity) ?? i.interactivity).events
          , {onClick: s, onDiv: l, onHover: a} = o
          , u = vu(vn, l);
        return u || a.enable && r.position || s.enable && r.clickPosition ? ie(vn, a.mode) || ie(vn, s.mode) || u : !1
    }
    loadModeOptions(e, ...n) {
        e.bubble || (e.bubble = new p1);
        for (const i of n)
            e.bubble.load(i == null ? void 0 : i.bubble)
    }
    reset(e) {
        e.bubble.inRange = !1
    }
}
async function x1(t, e=!0) {
    await t.addInteractor("externalBubble", n=>Promise.resolve(new w1(n)), e)
}
class k1 {
    constructor() {
        this.opacity = .5
    }
    load(e) {
        e && e.opacity !== void 0 && (this.opacity = e.opacity)
    }
}
class _1 {
    constructor() {
        this.distance = 80,
        this.links = new k1,
        this.radius = 60
    }
    load(e) {
        e && (e.distance !== void 0 && (this.distance = e.distance),
        this.links.load(e.links),
        e.radius !== void 0 && (this.radius = e.radius))
    }
}
const mf = 0
  , yf = 1
  , S1 = 0;
function C1(t, e, n, i) {
    const r = Math.floor(n.getRadius() / e.getRadius())
      , o = e.getFillColor()
      , s = n.getFillColor();
    if (!o || !s)
        return;
    const l = e.getPosition()
      , a = n.getPosition()
      , u = ku(o, s, e.getRadius(), n.getRadius())
      , c = t.createLinearGradient(l.x, l.y, a.x, a.y);
    return c.addColorStop(mf, Dr(o, i)),
    c.addColorStop(ot(r, mf, yf), Ft(u, i)),
    c.addColorStop(yf, Dr(s, i)),
    c
}
function E1(t, e, n, i, r) {
    pr(t, i, r),
    t.lineWidth = e,
    t.strokeStyle = n,
    t.stroke()
}
function z1(t, e, n, i) {
    const r = t.actualOptions
      , o = r.interactivity.modes.connect;
    if (o)
        return C1(e, n, i, o.links.opacity)
}
function P1(t, e, n) {
    t.canvas.draw(i=>{
        const r = z1(t, i, e, n);
        if (!r)
            return;
        const o = e.getPosition()
          , s = n.getPosition();
        E1(i, e.retina.linksWidth ?? S1, r, o, s)
    }
    )
}
const b1 = "connect"
  , gf = 0;
class M1 extends Ot {
    constructor(e) {
        super(e)
    }
    clear() {}
    init() {
        const e = this.container
          , n = e.actualOptions.interactivity.modes.connect;
        n && (e.retina.connectModeDistance = n.distance * e.retina.pixelRatio,
        e.retina.connectModeRadius = n.radius * e.retina.pixelRatio)
    }
    interact() {
        const e = this.container;
        if (e.actualOptions.interactivity.events.onHover.enable && e.interactivity.status === "pointermove") {
            const i = e.interactivity.mouse.position
              , {connectModeDistance: r, connectModeRadius: o} = e.retina;
            if (!r || r < gf || !o || o < gf || !i)
                return;
            const s = Math.abs(o)
              , l = e.particles.quadTree.queryCircle(i, s, a=>this.isEnabled(a));
            l.forEach((a,u)=>{
                const c = a.getPosition()
                  , f = 1;
                for (const d of l.slice(u + f)) {
                    const m = d.getPosition()
                      , v = Math.abs(r)
                      , y = Math.abs(c.x - m.x)
                      , k = Math.abs(c.y - m.y);
                    y < v && k < v && P1(e, a, d)
                }
            }
            )
        }
    }
    isEnabled(e) {
        const n = this.container
          , i = n.interactivity.mouse
          , r = ((e == null ? void 0 : e.interactivity) ?? n.actualOptions.interactivity).events;
        return r.onHover.enable && i.position ? ie(b1, r.onHover.mode) : !1
    }
    loadModeOptions(e, ...n) {
        e.connect || (e.connect = new _1);
        for (const i of n)
            e.connect.load(i == null ? void 0 : i.connect)
    }
    reset() {}
}
async function O1(t, e=!0) {
    await t.addInteractor("externalConnect", n=>Promise.resolve(new M1(n)), e)
}
class R1 {
    constructor() {
        this.blink = !1,
        this.consent = !1,
        this.opacity = 1
    }
    load(e) {
        e && (e.blink !== void 0 && (this.blink = e.blink),
        e.color !== void 0 && (this.color = Ce.create(this.color, e.color)),
        e.consent !== void 0 && (this.consent = e.consent),
        e.opacity !== void 0 && (this.opacity = e.opacity))
    }
}
class T1 {
    constructor() {
        this.distance = 100,
        this.links = new R1
    }
    load(e) {
        e && (e.distance !== void 0 && (this.distance = e.distance),
        this.links.load(e.links))
    }
}
const L1 = 0;
function I1(t, e, n, i, r, o) {
    pr(t, n, i),
    t.strokeStyle = Ft(r, o),
    t.lineWidth = e,
    t.stroke()
}
function D1(t, e, n, i, r) {
    t.canvas.draw(o=>{
        const s = e.getPosition();
        I1(o, e.retina.linksWidth ?? L1, s, r, n, i)
    }
    )
}
const N1 = "grab"
  , F1 = 0
  , j1 = 0;
class $1 extends Ot {
    constructor(e) {
        super(e)
    }
    clear() {}
    init() {
        const e = this.container
          , n = e.actualOptions.interactivity.modes.grab;
        n && (e.retina.grabModeDistance = n.distance * e.retina.pixelRatio)
    }
    interact() {
        var l;
        const e = this.container
          , n = e.actualOptions
          , i = n.interactivity;
        if (!i.modes.grab || !i.events.onHover.enable || e.interactivity.status !== Bn)
            return;
        const r = e.interactivity.mouse.position;
        if (!r)
            return;
        const o = e.retina.grabModeDistance;
        if (!o || o < F1)
            return;
        const s = e.particles.quadTree.queryCircle(r, o, a=>this.isEnabled(a));
        for (const a of s) {
            const u = a.getPosition()
              , c = Ve(u, r);
            if (c > o)
                continue;
            const f = i.modes.grab.links
              , d = f.opacity
              , m = d - c * d / o;
            if (m <= j1)
                continue;
            const v = f.color ?? ((l = a.options.links) == null ? void 0 : l.color);
            if (!e.particles.grabLineColor && v) {
                const k = i.modes.grab.links;
                e.particles.grabLineColor = mp(v, k.blink, k.consent)
            }
            const y = va(a, void 0, e.particles.grabLineColor);
            y && D1(e, a, y, m, r)
        }
    }
    isEnabled(e) {
        const n = this.container
          , i = n.interactivity.mouse
          , r = ((e == null ? void 0 : e.interactivity) ?? n.actualOptions.interactivity).events;
        return r.onHover.enable && !!i.position && ie(N1, r.onHover.mode)
    }
    loadModeOptions(e, ...n) {
        e.grab || (e.grab = new T1);
        for (const i of n)
            e.grab.load(i == null ? void 0 : i.grab)
    }
    reset() {}
}
async function A1(t, e=!0) {
    await t.addInteractor("externalGrab", n=>Promise.resolve(new $1(n)), e)
}
const B1 = "pause";
class U1 extends Ot {
    constructor(e) {
        super(e),
        this.handleClickMode = n=>{
            if (n !== B1)
                return;
            const i = this.container;
            i.animationStatus ? i.pause() : i.play()
        }
    }
    clear() {}
    init() {}
    interact() {}
    isEnabled() {
        return !0
    }
    reset() {}
}
async function H1(t, e=!0) {
    await t.addInteractor("externalPause", n=>Promise.resolve(new U1(n)), e)
}
class V1 {
    constructor() {
        this.default = !0,
        this.groups = [],
        this.quantity = 4
    }
    load(e) {
        if (!e)
            return;
        e.default !== void 0 && (this.default = e.default),
        e.groups !== void 0 && (this.groups = e.groups.map(i=>i)),
        this.groups.length || (this.default = !0);
        const n = e.quantity;
        n !== void 0 && (this.quantity = j(n))
    }
}
const W1 = "push"
  , q1 = 0;
class Q1 extends Ot {
    constructor(e) {
        super(e),
        this.handleClickMode = n=>{
            if (n !== W1)
                return;
            const i = this.container
              , r = i.actualOptions
              , o = r.interactivity.modes.push;
            if (!o)
                return;
            const s = M(o.quantity);
            if (s <= q1)
                return;
            const l = Es([void 0, ...o.groups])
              , a = l !== void 0 ? i.actualOptions.particles.groups[l] : void 0;
            i.particles.push(s, i.interactivity.mouse, a, l)
        }
    }
    clear() {}
    init() {}
    interact() {}
    isEnabled() {
        return !0
    }
    loadModeOptions(e, ...n) {
        e.push || (e.push = new V1);
        for (const i of n)
            e.push.load(i == null ? void 0 : i.push)
    }
    reset() {}
}
async function G1(t, e=!0) {
    await t.addInteractor("externalPush", n=>Promise.resolve(new Q1(n)), e)
}
class Y1 {
    constructor() {
        this.quantity = 2
    }
    load(e) {
        if (!e)
            return;
        const n = e.quantity;
        n !== void 0 && (this.quantity = j(n))
    }
}
const K1 = "remove";
class X1 extends Ot {
    constructor(e) {
        super(e),
        this.handleClickMode = n=>{
            const i = this.container
              , r = i.actualOptions;
            if (!r.interactivity.modes.remove || n !== K1)
                return;
            const o = M(r.interactivity.modes.remove.quantity);
            i.particles.removeQuantity(o)
        }
    }
    clear() {}
    init() {}
    interact() {}
    isEnabled() {
        return !0
    }
    loadModeOptions(e, ...n) {
        e.remove || (e.remove = new Y1);
        for (const i of n)
            e.remove.load(i == null ? void 0 : i.remove)
    }
    reset() {}
}
async function Z1(t, e=!0) {
    await t.addInteractor("externalRemove", n=>Promise.resolve(new X1(n)), e)
}
class Op {
    constructor() {
        this.distance = 200,
        this.duration = .4,
        this.factor = 100,
        this.speed = 1,
        this.maxSpeed = 50,
        this.easing = Dn.easeOutQuad
    }
    load(e) {
        e && (e.distance !== void 0 && (this.distance = e.distance),
        e.duration !== void 0 && (this.duration = e.duration),
        e.easing !== void 0 && (this.easing = e.easing),
        e.factor !== void 0 && (this.factor = e.factor),
        e.speed !== void 0 && (this.speed = e.speed),
        e.maxSpeed !== void 0 && (this.maxSpeed = e.maxSpeed))
    }
}
class J1 extends Op {
    constructor() {
        super(),
        this.selectors = []
    }
    load(e) {
        super.load(e),
        e && e.selectors !== void 0 && (this.selectors = e.selectors)
    }
}
class ew extends Op {
    load(e) {
        super.load(e),
        e && (this.divs = st(e.divs, n=>{
            const i = new J1;
            return i.load(n),
            i
        }
        ))
    }
}
const wn = "repulse"
  , tw = 0
  , nw = 6
  , iw = 3
  , rw = 2
  , ow = 0
  , sw = 0
  , lw = 1
  , ml = .5;
class aw extends Ot {
    constructor(e, n) {
        super(n),
        this._clickRepulse = ()=>{
            const i = this.container
              , r = i.actualOptions.interactivity.modes.repulse;
            if (!r)
                return;
            const o = i.repulse ?? {
                particles: []
            };
            if (o.finish || (o.count || (o.count = 0),
            o.count++,
            o.count === i.particles.count && (o.finish = !0)),
            o.clicking) {
                const s = i.retina.repulseModeDistance;
                if (!s || s < tw)
                    return;
                const l = Math.pow(s / nw, iw)
                  , a = i.interactivity.mouse.clickPosition;
                if (a === void 0)
                    return;
                const u = new ke(a.x,a.y,l)
                  , c = i.particles.quadTree.query(u, f=>this.isEnabled(f));
                for (const f of c) {
                    const {dx: d, dy: m, distance: v} = Me(a, f.position)
                      , y = v ** rw
                      , k = r.speed
                      , p = -l * k / y;
                    if (y <= l) {
                        o.particles.push(f);
                        const h = fe.create(d, m);
                        h.length = p,
                        f.velocity.setTo(h)
                    }
                }
            } else if (o.clicking === !1) {
                for (const s of o.particles)
                    s.velocity.setTo(s.initialVelocity);
                o.particles = []
            }
        }
        ,
        this._hoverRepulse = ()=>{
            const i = this.container
              , r = i.interactivity.mouse.position
              , o = i.retina.repulseModeDistance;
            !o || o < ow || !r || this._processRepulse(r, o, new ke(r.x,r.y,o))
        }
        ,
        this._processRepulse = (i,r,o,s)=>{
            const l = this.container
              , a = l.particles.quadTree.query(o, k=>this.isEnabled(k))
              , u = l.actualOptions.interactivity.modes.repulse;
            if (!u)
                return;
            const {easing: c, speed: f, factor: d, maxSpeed: m} = u
              , v = rp(c)
              , y = ((s == null ? void 0 : s.speed) ?? f) * d;
            for (const k of a) {
                const {dx: p, dy: h, distance: g} = Me(k.position, i)
                  , w = ot(v(lw - g / r) * y, sw, m)
                  , x = fe.create(g ? p / g * w : y, g ? h / g * w : y);
                k.position.addTo(x)
            }
        }
        ,
        this._singleSelectorRepulse = (i,r)=>{
            const o = this.container
              , s = o.actualOptions.interactivity.modes.repulse;
            if (!s)
                return;
            const l = document.querySelectorAll(i);
            l.length && l.forEach(a=>{
                const u = a
                  , c = o.retina.pixelRatio
                  , f = {
                    x: (u.offsetLeft + u.offsetWidth * ml) * c,
                    y: (u.offsetTop + u.offsetHeight * ml) * c
                }
                  , d = u.offsetWidth * ml * c
                  , m = r.type === Ni.circle ? new ke(f.x,f.y,d) : new xt(u.offsetLeft * c,u.offsetTop * c,u.offsetWidth * c,u.offsetHeight * c)
                  , v = s.divs
                  , y = lp(v, u);
                this._processRepulse(f, d, m, y)
            }
            )
        }
        ,
        this._engine = e,
        n.repulse || (n.repulse = {
            particles: []
        }),
        this.handleClickMode = i=>{
            const r = this.container.actualOptions
              , o = r.interactivity.modes.repulse;
            if (!o || i !== wn)
                return;
            n.repulse || (n.repulse = {
                particles: []
            });
            const s = n.repulse;
            s.clicking = !0,
            s.count = 0;
            for (const l of n.repulse.particles)
                this.isEnabled(l) && l.velocity.setTo(l.initialVelocity);
            s.particles = [],
            s.finish = !1,
            setTimeout(()=>{
                n.destroyed || (s.clicking = !1)
            }
            , o.duration * xe)
        }
    }
    clear() {}
    init() {
        const e = this.container
          , n = e.actualOptions.interactivity.modes.repulse;
        n && (e.retina.repulseModeDistance = n.distance * e.retina.pixelRatio)
    }
    interact() {
        const e = this.container
          , n = e.actualOptions
          , i = e.interactivity.status === Bn
          , r = n.interactivity.events
          , o = r.onHover
          , s = o.enable
          , l = o.mode
          , a = r.onClick
          , u = a.enable
          , c = a.mode
          , f = r.onDiv;
        i && s && ie(wn, l) ? this._hoverRepulse() : u && ie(wn, c) ? this._clickRepulse() : wu(wn, f, (d,m)=>this._singleSelectorRepulse(d, m))
    }
    isEnabled(e) {
        const n = this.container
          , i = n.actualOptions
          , r = n.interactivity.mouse
          , o = ((e == null ? void 0 : e.interactivity) ?? i.interactivity).events
          , s = o.onDiv
          , l = o.onHover
          , a = o.onClick
          , u = vu(wn, s);
        if (!(u || l.enable && r.position || a.enable && r.clickPosition))
            return !1;
        const c = l.mode
          , f = a.mode;
        return ie(wn, c) || ie(wn, f) || u
    }
    loadModeOptions(e, ...n) {
        e.repulse || (e.repulse = new ew);
        for (const i of n)
            e.repulse.load(i == null ? void 0 : i.repulse)
    }
    reset() {}
}
async function uw(t, e=!0) {
    await t.addInteractor("externalRepulse", n=>Promise.resolve(new aw(t,n)), e)
}
class cw {
    constructor() {
        this.factor = 3,
        this.radius = 200
    }
    load(e) {
        e && (e.factor !== void 0 && (this.factor = e.factor),
        e.radius !== void 0 && (this.radius = e.radius))
    }
}
const fw = "slow"
  , dw = 0;
class hw extends Ot {
    constructor(e) {
        super(e)
    }
    clear(e, n, i) {
        e.slow.inRange && !i || (e.slow.factor = 1)
    }
    init() {
        const e = this.container
          , n = e.actualOptions.interactivity.modes.slow;
        n && (e.retina.slowModeRadius = n.radius * e.retina.pixelRatio)
    }
    interact() {}
    isEnabled(e) {
        const n = this.container
          , i = n.interactivity.mouse
          , r = ((e == null ? void 0 : e.interactivity) ?? n.actualOptions.interactivity).events;
        return r.onHover.enable && !!i.position && ie(fw, r.onHover.mode)
    }
    loadModeOptions(e, ...n) {
        e.slow || (e.slow = new cw);
        for (const i of n)
            e.slow.load(i == null ? void 0 : i.slow)
    }
    reset(e) {
        e.slow.inRange = !1;
        const n = this.container
          , i = n.actualOptions
          , r = n.interactivity.mouse.position
          , o = n.retina.slowModeRadius
          , s = i.interactivity.modes.slow;
        if (!s || !o || o < dw || !r)
            return;
        const l = e.getPosition()
          , a = Ve(r, l)
          , u = a / o
          , c = s.factor
          , {slow: f} = e;
        a > o || (f.inRange = !0,
        f.factor = u / c)
    }
}
async function pw(t, e=!0) {
    await t.addInteractor("externalSlow", n=>Promise.resolve(new hw(n)), e)
}
const mw = 0
  , yw = 1
  , gw = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d.]+%?\))|currentcolor/gi;
function vw(t, e, n) {
    const {svgData: i} = t;
    if (!i)
        return "";
    const r = Dr(e, n);
    if (i.includes("fill"))
        return i.replace(gw, ()=>r);
    const o = i.indexOf(">");
    return `${i.substring(mw, o)} fill="${r}"${i.substring(o)}`
}
async function Ps(t) {
    return new Promise(e=>{
        t.loading = !0;
        const n = new Image;
        t.element = n,
        n.addEventListener("load", ()=>{
            t.loading = !1,
            e()
        }
        ),
        n.addEventListener("error", ()=>{
            t.element = void 0,
            t.error = !0,
            t.loading = !1,
            Hn().error(`${rt} loading image: ${t.source}`),
            e()
        }
        ),
        n.src = t.source
    }
    )
}
async function ww(t) {
    if (t.type !== "svg") {
        await Ps(t);
        return
    }
    t.loading = !0;
    const e = await fetch(t.source);
    e.ok ? t.svgData = await e.text() : (Hn().error(`${rt} Image not found`),
    t.error = !0),
    t.loading = !1
}
function xw(t, e, n, i) {
    var s;
    const r = vw(t, n, ((s = i.opacity) == null ? void 0 : s.value) ?? yw)
      , o = {
        color: n,
        gif: e.gif,
        data: {
            ...t,
            svgData: r
        },
        loaded: !1,
        ratio: e.width / e.height,
        replaceColor: e.replaceColor,
        source: e.src
    };
    return new Promise(l=>{
        const a = new Blob([r],{
            type: "image/svg+xml"
        })
          , u = URL || window.URL || window.webkitURL || window
          , c = u.createObjectURL(a)
          , f = new Image;
        f.addEventListener("load", ()=>{
            o.loaded = !0,
            o.element = f,
            l(o),
            u.revokeObjectURL(c)
        }
        );
        const d = async()=>{
            u.revokeObjectURL(c);
            const m = {
                ...t,
                error: !1,
                loading: !0
            };
            await Ps(m),
            o.loaded = !0,
            o.element = m.element,
            l(o)
        }
        ;
        f.addEventListener("error", ()=>void d()),
        f.src = c
    }
    )
}
const yl = [0, 4, 2, 1]
  , vf = [8, 8, 4, 2];
class kw {
    constructor(e) {
        this.pos = 0,
        this.data = new Uint8ClampedArray(e)
    }
    getString(e) {
        const n = this.data.slice(this.pos, this.pos + e);
        return this.pos += n.length,
        n.reduce((i,r)=>i + String.fromCharCode(r), "")
    }
    nextByte() {
        return this.data[this.pos++]
    }
    nextTwoBytes() {
        return this.pos += 2,
        this.data[this.pos - 2] + (this.data[this.pos - 1] << 8)
    }
    readSubBlocks() {
        let e = ""
          , n = 0;
        const i = 0
          , r = 0;
        do {
            n = this.data[this.pos++];
            for (let o = n; --o >= i; e += String.fromCharCode(this.data[this.pos++]))
                ;
        } while (n !== r);
        return e
    }
    readSubBlocksBin() {
        let e = this.data[this.pos]
          , n = 0;
        const i = 0
          , r = 1;
        for (let s = 0; e !== i; s += e + r,
        e = this.data[this.pos + s])
            n += e;
        const o = new Uint8Array(n);
        e = this.data[this.pos++];
        for (let s = 0; e !== i; e = this.data[this.pos++])
            for (let l = e; --l >= i; o[s++] = this.data[this.pos++])
                ;
        return o
    }
    skipSubBlocks() {
        for (const e = 1, n = 0; this.data[this.pos] !== n; this.pos += this.data[this.pos] + e)
            ;
        this.pos++
    }
}
var ut;
(function(t) {
    t[t.Replace = 0] = "Replace",
    t[t.Combine = 1] = "Combine",
    t[t.RestoreBackground = 2] = "RestoreBackground",
    t[t.RestorePrevious = 3] = "RestorePrevious",
    t[t.UndefinedA = 4] = "UndefinedA",
    t[t.UndefinedB = 5] = "UndefinedB",
    t[t.UndefinedC = 6] = "UndefinedC",
    t[t.UndefinedD = 7] = "UndefinedD"
}
)(ut || (ut = {}));
var Dt;
(function(t) {
    t[t.Extension = 33] = "Extension",
    t[t.ApplicationExtension = 255] = "ApplicationExtension",
    t[t.GraphicsControlExtension = 249] = "GraphicsControlExtension",
    t[t.PlainTextExtension = 1] = "PlainTextExtension",
    t[t.CommentExtension = 254] = "CommentExtension",
    t[t.Image = 44] = "Image",
    t[t.EndOfFile = 59] = "EndOfFile"
}
)(Dt || (Dt = {}));
const Te = {
    x: 0,
    y: 0
}
  , _w = 0
  , wf = .5
  , Sw = 0
  , xf = 0
  , ka = 0;
function Rp(t, e) {
    const n = [];
    for (let i = 0; i < e; i++)
        n.push({
            r: t.data[t.pos],
            g: t.data[t.pos + 1],
            b: t.data[t.pos + 2]
        }),
        t.pos += 3;
    return n
}
function Cw(t, e, n, i) {
    switch (t.nextByte()) {
    case Dt.GraphicsControlExtension:
        {
            const r = e.frames[n(!1)];
            t.pos++;
            const o = t.nextByte();
            r.GCreserved = (o & 224) >>> 5,
            r.disposalMethod = (o & 28) >>> 2,
            r.userInputDelayFlag = (o & 2) === 2;
            const s = (o & 1) === 1;
            r.delayTime = t.nextTwoBytes() * 10;
            const l = t.nextByte();
            s && i(l),
            t.pos++;
            break
        }
    case Dt.ApplicationExtension:
        {
            t.pos++;
            const r = {
                identifier: t.getString(8),
                authenticationCode: t.getString(3),
                data: t.readSubBlocksBin()
            };
            e.applicationExtensions.push(r);
            break
        }
    case Dt.CommentExtension:
        {
            e.comments.push([n(!1), t.readSubBlocks()]);
            break
        }
    case Dt.PlainTextExtension:
        {
            if (e.globalColorTable.length === 0)
                throw new EvalError("plain text extension without global color table");
            t.pos++,
            e.frames[n(!1)].plainTextData = {
                left: t.nextTwoBytes(),
                top: t.nextTwoBytes(),
                width: t.nextTwoBytes(),
                height: t.nextTwoBytes(),
                charSize: {
                    width: t.nextTwoBytes(),
                    height: t.nextTwoBytes()
                },
                foregroundColor: t.nextByte(),
                backgroundColor: t.nextByte(),
                text: t.readSubBlocks()
            };
            break
        }
    default:
        t.skipSubBlocks();
        break
    }
}
async function Ew(t, e, n, i, r, o) {
    const s = e.frames[i(!0)];
    s.left = t.nextTwoBytes(),
    s.top = t.nextTwoBytes(),
    s.width = t.nextTwoBytes(),
    s.height = t.nextTwoBytes();
    const l = t.nextByte()
      , a = (l & 128) === 128
      , u = (l & 64) === 64;
    s.sortFlag = (l & 32) === 32,
    s.reserved = (l & 24) >>> 3;
    const c = 1 << (l & 7) + 1;
    a && (s.localColorTable = Rp(t, c));
    const f = p=>{
        const {r: h, g, b: w} = (a ? s.localColorTable : e.globalColorTable)[p];
        return p !== r(null) ? {
            r: h,
            g,
            b: w,
            a: 255
        } : {
            r: h,
            g,
            b: w,
            a: n ? ~~((h + g + w) / 3) : 0
        }
    }
      , d = (()=>{
        try {
            return new ImageData(s.width,s.height,{
                colorSpace: "srgb"
            })
        } catch (p) {
            if (p instanceof DOMException && p.name === "IndexSizeError")
                return null;
            throw p
        }
    }
    )();
    if (d == null)
        throw new EvalError("GIF frame size is to large");
    const m = t.nextByte()
      , v = t.readSubBlocksBin()
      , y = 1 << m
      , k = (p,h)=>{
        const g = p >>> 3
          , w = p & 7;
        return (v[g] + (v[g + 1] << 8) + (v[g + 2] << 16) & (1 << h) - 1 << w) >>> w
    }
    ;
    if (u) {
        for (let p = 0, h = m + 1, g = 0, w = [[0]], x = 0; x < 4; x++)
            if (yl[x] < s.height) {
                let _ = 0
                  , E = 0
                  , z = !1;
                for (; !z; ) {
                    const R = p;
                    if (p = k(g, h),
                    g += h + 1,
                    p === y) {
                        h = m + 1,
                        w.length = y + 2;
                        for (let O = 0; O < w.length; O++)
                            w[O] = O < y ? [O] : []
                    } else {
                        p >= w.length ? w.push(w[R].concat(w[R][0])) : R !== y && w.push(w[R].concat(w[p][0]));
                        for (const O of w[p]) {
                            const {r: A, g: te, b: de, a: $} = f(O);
                            d.data.set([A, te, de, $], yl[x] * s.width + vf[x] * E + _ % (s.width * 4)),
                            _ += 4
                        }
                        w.length === 1 << h && h < 12 && h++
                    }
                    _ === s.width * 4 * (E + 1) && (E++,
                    yl[x] + vf[x] * E >= s.height && (z = !0))
                }
            }
        s.image = d,
        s.bitmap = await createImageBitmap(d)
    } else {
        let p = 0
          , h = m + 1
          , g = 0
          , w = -4
          , x = !1;
        const _ = [[0]];
        for (; !x; ) {
            const E = p;
            if (p = k(g, h),
            g += h,
            p === y) {
                h = m + 1,
                _.length = y + 2;
                for (let z = 0; z < _.length; z++)
                    _[z] = z < y ? [z] : []
            } else {
                if (p === y + 1) {
                    x = !0;
                    break
                }
                p >= _.length ? _.push(_[E].concat(_[E][0])) : E !== y && _.push(_[E].concat(_[p][0]));
                for (const z of _[p]) {
                    const {r: R, g: O, b: A, a: te} = f(z);
                    d.data.set([R, O, A, te], w += 4)
                }
                _.length >= 1 << h && h < 12 && h++
            }
        }
        s.image = d,
        s.bitmap = await createImageBitmap(d)
    }
}
async function zw(t, e, n, i, r, o) {
    switch (t.nextByte()) {
    case Dt.EndOfFile:
        return !0;
    case Dt.Image:
        await Ew(t, e, n, i, r);
        break;
    case Dt.Extension:
        Cw(t, e, i, r);
        break;
    default:
        throw new EvalError("undefined block found")
    }
    return !1
}
function Pw(t) {
    for (const e of t.applicationExtensions)
        if (e.identifier + e.authenticationCode === "NETSCAPE2.0")
            return e.data[1] + (e.data[2] << 8);
    return NaN
}
async function bw(t, e, n) {
    n || (n = !1);
    const i = await fetch(t);
    if (!i.ok && i.status === 404)
        throw new EvalError("file not found");
    const r = await i.arrayBuffer()
      , o = {
        width: 0,
        height: 0,
        totalTime: 0,
        colorRes: 0,
        pixelAspectRatio: 0,
        frames: [],
        sortFlag: !1,
        globalColorTable: [],
        backgroundImage: new ImageData(1,1,{
            colorSpace: "srgb"
        }),
        comments: [],
        applicationExtensions: []
    }
      , s = new kw(new Uint8ClampedArray(r));
    if (s.getString(6) !== "GIF89a")
        throw new Error("not a supported GIF file");
    o.width = s.nextTwoBytes(),
    o.height = s.nextTwoBytes();
    const l = s.nextByte()
      , a = (l & 128) === 128;
    o.colorRes = (l & 112) >>> 4,
    o.sortFlag = (l & 8) === 8;
    const u = 1 << (l & 7) + 1
      , c = s.nextByte();
    o.pixelAspectRatio = s.nextByte(),
    o.pixelAspectRatio !== 0 && (o.pixelAspectRatio = (o.pixelAspectRatio + 15) / 64),
    a && (o.globalColorTable = Rp(s, u));
    const f = (()=>{
        try {
            return new ImageData(o.width,o.height,{
                colorSpace: "srgb"
            })
        } catch (w) {
            if (w instanceof DOMException && w.name === "IndexSizeError")
                return null;
            throw w
        }
    }
    )();
    if (f == null)
        throw new Error("GIF frame size is to large");
    const {r: d, g: m, b: v} = o.globalColorTable[c];
    f.data.set(a ? [d, m, v, 255] : [0, 0, 0, 0]);
    for (let w = 4; w < f.data.length; w *= 2)
        f.data.copyWithin(w, 0, w);
    o.backgroundImage = f;
    let y = -1
      , k = !0
      , p = -1;
    const h = w=>(w && (k = !0),
    y)
      , g = w=>(w != null && (p = w),
    p);
    try {
        do
            k && (o.frames.push({
                left: 0,
                top: 0,
                width: 0,
                height: 0,
                disposalMethod: ut.Replace,
                image: new ImageData(1,1,{
                    colorSpace: "srgb"
                }),
                plainTextData: null,
                userInputDelayFlag: !1,
                delayTime: 0,
                sortFlag: !1,
                localColorTable: [],
                reserved: 0,
                GCreserved: 0
            }),
            y++,
            p = -1,
            k = !1);
        while (!await zw(s, o, n, h, g, e));
        o.frames.length--;
        for (const w of o.frames) {
            if (w.userInputDelayFlag && w.delayTime === 0) {
                o.totalTime = 1 / 0;
                break
            }
            o.totalTime += w.delayTime
        }
        return o
    } catch (w) {
        throw w instanceof EvalError ? new Error(`error while parsing frame ${y} "${w.message}"`) : w
    }
}
function Mw(t) {
    const {context: e, radius: n, particle: i, delta: r} = t
      , o = i.image;
    if (!(o != null && o.gifData) || !o.gif)
        return;
    const s = new OffscreenCanvas(o.gifData.width,o.gifData.height)
      , l = s.getContext("2d");
    if (!l)
        throw new Error("could not create offscreen canvas context");
    l.imageSmoothingQuality = "low",
    l.imageSmoothingEnabled = !1,
    l.clearRect(Te.x, Te.y, s.width, s.height),
    i.gifLoopCount === void 0 && (i.gifLoopCount = o.gifLoopCount ?? ka);
    let a = i.gifFrame ?? _w;
    const u = {
        x: -o.gifData.width * wf,
        y: -o.gifData.height * wf
    }
      , c = o.gifData.frames[a];
    if (i.gifTime === void 0 && (i.gifTime = Sw),
    !!c.bitmap) {
        switch (e.scale(n / o.gifData.width, n / o.gifData.height),
        c.disposalMethod) {
        case ut.UndefinedA:
        case ut.UndefinedB:
        case ut.UndefinedC:
        case ut.UndefinedD:
        case ut.Replace:
            l.drawImage(c.bitmap, c.left, c.top),
            e.drawImage(s, u.x, u.y),
            l.clearRect(Te.x, Te.y, s.width, s.height);
            break;
        case ut.Combine:
            l.drawImage(c.bitmap, c.left, c.top),
            e.drawImage(s, u.x, u.y);
            break;
        case ut.RestoreBackground:
            l.drawImage(c.bitmap, c.left, c.top),
            e.drawImage(s, u.x, u.y),
            l.clearRect(Te.x, Te.y, s.width, s.height),
            o.gifData.globalColorTable.length ? l.putImageData(o.gifData.backgroundImage, u.x, u.y) : l.putImageData(o.gifData.frames[xf].image, u.x + c.left, u.y + c.top);
            break;
        case ut.RestorePrevious:
            {
                const f = l.getImageData(Te.x, Te.y, s.width, s.height);
                l.drawImage(c.bitmap, c.left, c.top),
                e.drawImage(s, u.x, u.y),
                l.clearRect(Te.x, Te.y, s.width, s.height),
                l.putImageData(f, Te.x, Te.y)
            }
            break
        }
        if (i.gifTime += r.value,
        i.gifTime > c.delayTime) {
            if (i.gifTime -= c.delayTime,
            ++a >= o.gifData.frames.length) {
                if (--i.gifLoopCount <= ka)
                    return;
                a = xf,
                l.clearRect(Te.x, Te.y, s.width, s.height)
            }
            i.gifFrame = a
        }
        e.scale(o.gifData.width / n, o.gifData.height / n)
    }
}
async function Ow(t) {
    if (t.type !== "gif") {
        await Ps(t);
        return
    }
    t.loading = !0;
    try {
        t.gifData = await bw(t.source),
        t.gifLoopCount = Pw(t.gifData) ?? ka,
        t.gifLoopCount || (t.gifLoopCount = 1 / 0)
    } catch {
        t.error = !0
    }
    t.loading = !1
}
const Rw = 2
  , Tw = 1
  , Lw = 12
  , Iw = 1;
class Dw {
    constructor(e) {
        this.validTypes = ["image", "images"],
        this.loadImageShape = async n=>{
            if (!this._engine.loadImage)
                throw new Error(`${rt} image shape not initialized`);
            await this._engine.loadImage({
                gif: n.gif,
                name: n.name,
                replaceColor: n.replaceColor ?? !1,
                src: n.src
            })
        }
        ,
        this._engine = e
    }
    addImage(e) {
        this._engine.images || (this._engine.images = []),
        this._engine.images.push(e)
    }
    draw(e) {
        const {context: n, radius: i, particle: r, opacity: o} = e
          , s = r.image
          , l = s == null ? void 0 : s.element;
        if (s) {
            if (n.globalAlpha = o,
            s.gif && s.gifData)
                Mw(e);
            else if (l) {
                const a = s.ratio
                  , u = {
                    x: -i,
                    y: -i
                }
                  , c = i * Rw;
                n.drawImage(l, u.x, u.y, c, c / a)
            }
            n.globalAlpha = Tw
        }
    }
    getSidesCount() {
        return Lw
    }
    async init(e) {
        const n = e.actualOptions;
        if (!(!n.preload || !this._engine.loadImage))
            for (const i of n.preload)
                await this._engine.loadImage(i)
    }
    loadShape(e) {
        if (e.shape !== "image" && e.shape !== "images")
            return;
        this._engine.images || (this._engine.images = []);
        const n = e.shapeData;
        if (!n)
            return;
        this._engine.images.find(r=>r.name === n.name || r.source === n.src) || this.loadImageShape(n).then(()=>{
            this.loadShape(e)
        }
        )
    }
    particleInit(e, n) {
        if (n.shape !== "image" && n.shape !== "images")
            return;
        this._engine.images || (this._engine.images = []);
        const i = this._engine.images
          , r = n.shapeData;
        if (!r)
            return;
        const o = n.getFillColor()
          , s = i.find(a=>a.name === r.name || a.source === r.src);
        if (!s)
            return;
        const l = r.replaceColor ?? s.replaceColor;
        if (s.loading) {
            setTimeout(()=>{
                this.particleInit(e, n)
            }
            );
            return
        }
        (async()=>{
            let a;
            s.svgData && o ? a = await xw(s, r, o, n) : a = {
                color: o,
                data: s,
                element: s.element,
                gif: s.gif,
                gifData: s.gifData,
                gifLoopCount: s.gifLoopCount,
                loaded: !0,
                ratio: r.width && r.height ? r.width / r.height : s.ratio ?? Iw,
                replaceColor: l,
                source: r.src
            },
            a.ratio || (a.ratio = 1);
            const u = r.fill ?? n.shapeFill
              , c = r.close ?? n.shapeClose
              , f = {
                image: a,
                fill: u,
                close: c
            };
            n.image = f.image,
            n.shapeFill = f.fill,
            n.shapeClose = f.close
        }
        )()
    }
}
class Nw {
    constructor() {
        this.src = "",
        this.gif = !1
    }
    load(e) {
        e && (e.gif !== void 0 && (this.gif = e.gif),
        e.height !== void 0 && (this.height = e.height),
        e.name !== void 0 && (this.name = e.name),
        e.replaceColor !== void 0 && (this.replaceColor = e.replaceColor),
        e.src !== void 0 && (this.src = e.src),
        e.width !== void 0 && (this.width = e.width))
    }
}
class Fw {
    constructor(e) {
        this.id = "imagePreloader",
        this._engine = e
    }
    async getPlugin() {
        return await Promise.resolve(),
        {}
    }
    loadOptions(e, n) {
        if (!(n != null && n.preload))
            return;
        e.preload || (e.preload = []);
        const i = e.preload;
        for (const r of n.preload) {
            const o = i.find(s=>s.name === r.name || s.src === r.src);
            if (o)
                o.load(r);
            else {
                const s = new Nw;
                s.load(r),
                i.push(s)
            }
        }
    }
    needsPlugin() {
        return !0
    }
}
const jw = 3;
function $w(t) {
    t.loadImage || (t.loadImage = async e=>{
        if (!e.name && !e.src)
            throw new Error(`${rt} no image source provided`);
        if (t.images || (t.images = []),
        !t.images.find(n=>n.name === e.name || n.source === e.src))
            try {
                const n = {
                    gif: e.gif ?? !1,
                    name: e.name ?? e.src,
                    source: e.src,
                    type: e.src.substring(e.src.length - jw),
                    error: !1,
                    loading: !0,
                    replaceColor: e.replaceColor,
                    ratio: e.width && e.height ? e.width / e.height : void 0
                };
                t.images.push(n);
                let i;
                e.gif ? i = Ow : i = e.replaceColor ? ww : Ps,
                await i(n)
            } catch {
                throw new Error(`${rt} ${e.name ?? e.src} not found`)
            }
    }
    )
}
async function Aw(t, e=!0) {
    $w(t);
    const n = new Fw(t);
    await t.addPlugin(n, e),
    await t.addShape(new Dw(t), e)
}
class Bw extends Qn {
    constructor() {
        super(),
        this.sync = !1
    }
    load(e) {
        e && (super.load(e),
        e.sync !== void 0 && (this.sync = e.sync))
    }
}
class Uw extends Qn {
    constructor() {
        super(),
        this.sync = !1
    }
    load(e) {
        e && (super.load(e),
        e.sync !== void 0 && (this.sync = e.sync))
    }
}
class Hw {
    constructor() {
        this.count = 0,
        this.delay = new Bw,
        this.duration = new Uw
    }
    load(e) {
        e && (e.count !== void 0 && (this.count = e.count),
        this.delay.load(e.delay),
        this.duration.load(e.duration))
    }
}
const Kn = 0
  , Vw = -1
  , kf = 0
  , _f = 0;
function Ww(t, e, n) {
    if (!t.life)
        return;
    const i = t.life;
    let r = !1;
    if (t.spawning)
        if (i.delayTime += e.value,
        i.delayTime >= t.life.delay)
            r = !0,
            t.spawning = !1,
            i.delayTime = Kn,
            i.time = Kn;
        else
            return;
    if (i.duration === Vw || t.spawning || (r ? i.time = Kn : i.time += e.value,
    i.time < i.duration))
        return;
    if (i.time = Kn,
    t.life.count > kf && t.life.count--,
    t.life.count === kf) {
        t.destroy();
        return
    }
    const o = j(_f, n.width)
      , s = j(_f, n.width);
    t.position.x = Ue(o),
    t.position.y = Ue(s),
    t.spawning = !0,
    i.delayTime = Kn,
    i.time = Kn,
    t.reset();
    const l = t.options.life;
    l && (i.delay = M(l.delay.value) * xe,
    i.duration = M(l.duration.value) * xe)
}
const xn = 0
  , Sf = 1
  , Cf = -1;
class qw {
    constructor(e) {
        this.container = e
    }
    init(e) {
        const n = this.container
          , i = e.options
          , r = i.life;
        r && (e.life = {
            delay: n.retina.reduceFactor ? M(r.delay.value) * (r.delay.sync ? Sf : W()) / n.retina.reduceFactor * xe : xn,
            delayTime: xn,
            duration: n.retina.reduceFactor ? M(r.duration.value) * (r.duration.sync ? Sf : W()) / n.retina.reduceFactor * xe : xn,
            time: xn,
            count: r.count
        },
        e.life.duration <= xn && (e.life.duration = Cf),
        e.life.count <= xn && (e.life.count = Cf),
        e.life && (e.spawning = e.life.delay > xn))
    }
    isEnabled(e) {
        return !e.destroyed
    }
    loadOptions(e, ...n) {
        e.life || (e.life = new Hw);
        for (const i of n)
            e.life.load(i == null ? void 0 : i.life)
    }
    update(e, n) {
        !this.isEnabled(e) || !e.life || Ww(e, n, this.container.canvas.size)
    }
}
async function Qw(t, e=!0) {
    await t.addParticleUpdater("life", async n=>Promise.resolve(new qw(n)), e)
}
function Gw(t) {
    const {context: e, particle: n, radius: i} = t
      , r = n.shapeData
      , o = 0;
    e.moveTo(-i, o),
    e.lineTo(i, o),
    e.lineCap = (r == null ? void 0 : r.cap) ?? "butt"
}
const Yw = 1;
class Kw {
    constructor() {
        this.validTypes = ["line"]
    }
    draw(e) {
        Gw(e)
    }
    getSidesCount() {
        return Yw
    }
}
async function Xw(t, e=!0) {
    await t.addShape(new Kw, e)
}
const Ef = .5;
class Zw {
    init() {}
    isEnabled(e) {
        return !Vn() && !e.destroyed && e.container.actualOptions.interactivity.events.onHover.parallax.enable
    }
    move(e) {
        const n = e.container
          , i = n.actualOptions
          , r = i.interactivity.events.onHover.parallax;
        if (Vn() || !r.enable)
            return;
        const o = r.force
          , s = n.interactivity.mouse.position;
        if (!s)
            return;
        const l = n.canvas.size
          , a = {
            x: l.width * Ef,
            y: l.height * Ef
        }
          , u = r.smooth
          , c = e.getRadius() / o
          , f = {
            x: (s.x - a.x) * c,
            y: (s.y - a.y) * c
        }
          , {offset: d} = e;
        d.x += (f.x - d.x) / u,
        d.y += (f.y - d.y) / u
    }
}
async function Jw(t, e=!0) {
    await t.addMover("parallax", ()=>Promise.resolve(new Zw), e)
}
const zf = 1e3
  , ex = 1;
class tx extends Cu {
    constructor(e) {
        super(e)
    }
    clear() {}
    init() {}
    interact(e) {
        const n = this.container;
        e.attractDistance === void 0 && (e.attractDistance = M(e.options.move.attract.distance) * n.retina.pixelRatio);
        const i = e.attractDistance
          , r = e.getPosition()
          , o = n.particles.quadTree.queryCircle(r, i);
        for (const s of o) {
            if (e === s || !s.options.move.attract.enable || s.destroyed || s.spawning)
                continue;
            const l = s.getPosition()
              , {dx: a, dy: u} = Me(r, l)
              , c = e.options.move.attract.rotate
              , f = a / (c.x * zf)
              , d = u / (c.y * zf)
              , m = s.size.value / e.size.value
              , v = ex / m;
            e.velocity.x -= f * m,
            e.velocity.y -= d * m,
            s.velocity.x += f * v,
            s.velocity.y += d * v
        }
    }
    isEnabled(e) {
        return e.options.move.attract.enable
    }
    reset() {}
}
async function nx(t, e=!0) {
    await t.addInteractor("particlesAttract", n=>Promise.resolve(new tx(n)), e)
}
const ix = .5
  , rx = 10
  , ox = 0;
function Pf(t, e, n, i, r, o) {
    const s = ot(t.options.collisions.absorb.speed * r.factor / rx, ox, i);
    t.size.value += s * ix,
    n.size.value -= s,
    i <= o && (n.size.value = 0,
    n.destroy())
}
function sx(t, e, n, i) {
    const r = t.getRadius()
      , o = e.getRadius();
    r === void 0 && o !== void 0 ? t.destroy() : r !== void 0 && o === void 0 ? e.destroy() : r !== void 0 && o !== void 0 && (r >= o ? Pf(t, r, e, o, n, i) : Pf(e, o, t, r, n, i))
}
const bf = t=>{
    t.collisionMaxSpeed === void 0 && (t.collisionMaxSpeed = M(t.options.collisions.maxSpeed)),
    t.velocity.length > t.collisionMaxSpeed && (t.velocity.length = t.collisionMaxSpeed)
}
;
function Tp(t, e) {
    ap(ya(t), ya(e)),
    bf(t),
    bf(e)
}
function lx(t, e) {
    !t.unbreakable && !e.unbreakable && Tp(t, e),
    t.getRadius() === void 0 && e.getRadius() !== void 0 ? t.destroy() : t.getRadius() !== void 0 && e.getRadius() === void 0 ? e.destroy() : t.getRadius() !== void 0 && e.getRadius() !== void 0 && (t.getRadius() >= e.getRadius() ? e : t).destroy()
}
function ax(t, e, n, i) {
    switch (t.options.collisions.mode) {
    case Si.absorb:
        {
            sx(t, e, n, i);
            break
        }
    case Si.bounce:
        {
            Tp(t, e);
            break
        }
    case Si.destroy:
        {
            lx(t, e);
            break
        }
    }
}
const ux = 2;
class cx extends Cu {
    constructor(e) {
        super(e)
    }
    clear() {}
    init() {}
    interact(e, n) {
        if (e.destroyed || e.spawning)
            return;
        const i = this.container
          , r = e.getPosition()
          , o = e.getRadius()
          , s = i.particles.quadTree.queryCircle(r, o * ux);
        for (const l of s) {
            if (e === l || !l.options.collisions.enable || e.options.collisions.mode !== l.options.collisions.mode || l.destroyed || l.spawning)
                continue;
            const a = l.getPosition()
              , u = l.getRadius();
            if (Math.abs(Math.round(r.z) - Math.round(a.z)) > o + u)
                continue;
            const c = Ve(r, a)
              , f = o + u;
            c > f || ax(e, l, n, i.retina.pixelRatio)
        }
    }
    isEnabled(e) {
        return e.options.collisions.enable
    }
    reset() {}
}
async function fx(t, e=!0) {
    await t.addInteractor("particlesCollisions", n=>Promise.resolve(new cx(n)), e)
}
const gl = 2;
class dx extends ke {
    constructor(e, n, i, r) {
        super(e, n, i),
        this.canvasSize = r,
        this.canvasSize = {
            ...r
        }
    }
    contains(e) {
        const {width: n, height: i} = this.canvasSize
          , {x: r, y: o} = e;
        return super.contains(e) || super.contains({
            x: r - n,
            y: o
        }) || super.contains({
            x: r - n,
            y: o - i
        }) || super.contains({
            x: r,
            y: o - i
        })
    }
    intersects(e) {
        if (super.intersects(e))
            return !0;
        const n = e
          , i = e
          , r = {
            x: e.position.x - this.canvasSize.width,
            y: e.position.y - this.canvasSize.height
        };
        if (i.radius !== void 0) {
            const o = new ke(r.x,r.y,i.radius * gl);
            return super.intersects(o)
        } else if (n.size !== void 0) {
            const o = new xt(r.x,r.y,n.size.width * gl,n.size.height * gl);
            return super.intersects(o)
        }
        return !1
    }
}
class hx {
    constructor() {
        this.blur = 5,
        this.color = new Ce,
        this.color.value = "#000",
        this.enable = !1
    }
    load(e) {
        e && (e.blur !== void 0 && (this.blur = e.blur),
        this.color = Ce.create(this.color, e.color),
        e.enable !== void 0 && (this.enable = e.enable))
    }
}
class px {
    constructor() {
        this.enable = !1,
        this.frequency = 1
    }
    load(e) {
        e && (e.color !== void 0 && (this.color = Ce.create(this.color, e.color)),
        e.enable !== void 0 && (this.enable = e.enable),
        e.frequency !== void 0 && (this.frequency = e.frequency),
        e.opacity !== void 0 && (this.opacity = e.opacity))
    }
}
let mx = class {
    constructor() {
        this.blink = !1,
        this.color = new Ce,
        this.color.value = "#fff",
        this.consent = !1,
        this.distance = 100,
        this.enable = !1,
        this.frequency = 1,
        this.opacity = 1,
        this.shadow = new hx,
        this.triangles = new px,
        this.width = 1,
        this.warp = !1
    }
    load(e) {
        e && (e.id !== void 0 && (this.id = e.id),
        e.blink !== void 0 && (this.blink = e.blink),
        this.color = Ce.create(this.color, e.color),
        e.consent !== void 0 && (this.consent = e.consent),
        e.distance !== void 0 && (this.distance = e.distance),
        e.enable !== void 0 && (this.enable = e.enable),
        e.frequency !== void 0 && (this.frequency = e.frequency),
        e.opacity !== void 0 && (this.opacity = e.opacity),
        this.shadow.load(e.shadow),
        this.triangles.load(e.triangles),
        e.width !== void 0 && (this.width = e.width),
        e.warp !== void 0 && (this.warp = e.warp))
    }
}
;
const Mf = 2
  , yx = 1
  , go = {
    x: 0,
    y: 0
}
  , gx = 0;
function vx(t, e, n, i, r) {
    const {dx: o, dy: s, distance: l} = Me(t, e);
    if (!r || l <= n)
        return l;
    const a = {
        x: Math.abs(o),
        y: Math.abs(s)
    }
      , u = {
        x: Math.min(a.x, i.width - a.x),
        y: Math.min(a.y, i.height - a.y)
    };
    return Math.sqrt(u.x ** Mf + u.y ** Mf)
}
class wx extends Cu {
    constructor(e) {
        super(e),
        this._setColor = n=>{
            if (!n.options.links)
                return;
            const i = this.linkContainer
              , r = n.options.links;
            let o = r.id === void 0 ? i.particles.linksColor : i.particles.linksColors.get(r.id);
            if (o)
                return;
            const s = r.color;
            o = mp(s, r.blink, r.consent),
            r.id === void 0 ? i.particles.linksColor = o : i.particles.linksColors.set(r.id, o)
        }
        ,
        this.linkContainer = e
    }
    clear() {}
    init() {
        this.linkContainer.particles.linksColor = void 0,
        this.linkContainer.particles.linksColors = new Map
    }
    interact(e) {
        if (!e.options.links)
            return;
        e.links = [];
        const n = e.getPosition()
          , i = this.container
          , r = i.canvas.size;
        if (n.x < go.x || n.y < go.y || n.x > r.width || n.y > r.height)
            return;
        const o = e.options.links
          , s = o.opacity
          , l = e.retina.linksDistance ?? gx
          , a = o.warp;
        let u;
        a ? u = new dx(n.x,n.y,l,r) : u = new ke(n.x,n.y,l);
        const c = i.particles.quadTree.query(u);
        for (const f of c) {
            const d = f.options.links;
            if (e === f || !(d != null && d.enable) || o.id !== d.id || f.spawning || f.destroyed || !f.links || e.links.some(k=>k.destination === f) || f.links.some(k=>k.destination === e))
                continue;
            const m = f.getPosition();
            if (m.x < go.x || m.y < go.y || m.x > r.width || m.y > r.height)
                continue;
            const v = vx(n, m, l, r, a && d.warp);
            if (v > l)
                continue;
            const y = (yx - v / l) * s;
            this._setColor(e),
            e.links.push({
                destination: f,
                opacity: y
            })
        }
    }
    isEnabled(e) {
        var n;
        return !!((n = e.options.links) != null && n.enable)
    }
    loadParticlesOptions(e, ...n) {
        e.links || (e.links = new mx);
        for (const i of n)
            e.links.load(i == null ? void 0 : i.links)
    }
    reset() {}
}
async function xx(t, e=!0) {
    await t.addInteractor("particlesLinks", async n=>Promise.resolve(new wx(n)), e)
}
function kx(t, e, n, i) {
    t.beginPath(),
    t.moveTo(e.x, e.y),
    t.lineTo(n.x, n.y),
    t.lineTo(i.x, i.y),
    t.closePath()
}
function _x(t) {
    let e = !1;
    const {begin: n, end: i, maxDistance: r, context: o, canvasSize: s, width: l, backgroundMask: a, colorLine: u, opacity: c, links: f} = t;
    if (Ve(n, i) <= r)
        pr(o, n, i),
        e = !0;
    else if (f.warp) {
        let m, v;
        const y = {
            x: i.x - s.width,
            y: i.y
        }
          , k = Me(n, y);
        if (k.distance <= r) {
            const p = n.y - k.dy / k.dx * n.x;
            m = {
                x: 0,
                y: p
            },
            v = {
                x: s.width,
                y: p
            }
        } else {
            const p = {
                x: i.x,
                y: i.y - s.height
            }
              , h = Me(n, p);
            if (h.distance <= r) {
                const w = -(n.y - h.dy / h.dx * n.x) / (h.dy / h.dx);
                m = {
                    x: w,
                    y: 0
                },
                v = {
                    x: w,
                    y: s.height
                }
            } else {
                const g = {
                    x: i.x - s.width,
                    y: i.y - s.height
                }
                  , w = Me(n, g);
                if (w.distance <= r) {
                    const x = n.y - w.dy / w.dx * n.x;
                    m = {
                        x: -x / (w.dy / w.dx),
                        y: x
                    },
                    v = {
                        x: m.x + s.width,
                        y: m.y + s.height
                    }
                }
            }
        }
        m && v && (pr(o, n, m),
        pr(o, i, v),
        e = !0)
    }
    if (!e)
        return;
    o.lineWidth = l,
    a.enable && (o.globalCompositeOperation = a.composite),
    o.strokeStyle = Ft(u, c);
    const {shadow: d} = f;
    if (d.enable) {
        const m = gt(d.color);
        m && (o.shadowBlur = d.blur,
        o.shadowColor = Ft(m))
    }
    o.stroke()
}
function Sx(t) {
    const {context: e, pos1: n, pos2: i, pos3: r, backgroundMask: o, colorTriangle: s, opacityTriangle: l} = t;
    kx(e, n, i, r),
    o.enable && (e.globalCompositeOperation = o.composite),
    e.fillStyle = Ft(s, l),
    e.fill()
}
function Cx(t) {
    return t.sort((e,n)=>e - n),
    t.join("_")
}
function Of(t, e) {
    const n = Cx(t.map(r=>r.id));
    let i = e.get(n);
    return i === void 0 && (i = W(),
    e.set(n, i)),
    i
}
const Rf = 0
  , vl = 0
  , Tf = 0
  , Ex = .5
  , zx = 1;
class Px {
    constructor(e) {
        this.container = e,
        this._drawLinkLine = (n,i)=>{
            const r = n.options.links;
            if (!(r != null && r.enable))
                return;
            const o = this.container
              , s = o.actualOptions
              , l = i.destination
              , a = n.getPosition()
              , u = l.getPosition();
            let c = i.opacity;
            o.canvas.draw(f=>{
                var p;
                let d;
                const m = (p = n.options.twinkle) == null ? void 0 : p.lines;
                if (m != null && m.enable) {
                    const h = m.frequency
                      , g = gt(m.color);
                    W() < h && g && (d = g,
                    c = M(m.opacity))
                }
                if (!d) {
                    const h = r.id !== void 0 ? o.particles.linksColors.get(r.id) : o.particles.linksColor;
                    d = va(n, l, h)
                }
                if (!d)
                    return;
                const v = n.retina.linksWidth ?? vl
                  , y = n.retina.linksDistance ?? Tf
                  , {backgroundMask: k} = s;
                _x({
                    context: f,
                    width: v,
                    begin: a,
                    end: u,
                    maxDistance: y,
                    canvasSize: o.canvas.size,
                    links: r,
                    backgroundMask: k,
                    colorLine: d,
                    opacity: c
                })
            }
            )
        }
        ,
        this._drawLinkTriangle = (n,i,r)=>{
            const o = n.options.links;
            if (!(o != null && o.enable))
                return;
            const s = o.triangles;
            if (!s.enable)
                return;
            const l = this.container
              , a = l.actualOptions
              , u = i.destination
              , c = r.destination
              , f = s.opacity ?? (i.opacity + r.opacity) * Ex;
            f <= Rf || l.canvas.draw(d=>{
                const m = n.getPosition()
                  , v = u.getPosition()
                  , y = c.getPosition()
                  , k = n.retina.linksDistance ?? Tf;
                if (Ve(m, v) > k || Ve(y, v) > k || Ve(y, m) > k)
                    return;
                let p = gt(s.color);
                if (!p) {
                    const h = o.id !== void 0 ? l.particles.linksColors.get(o.id) : l.particles.linksColor;
                    p = va(n, u, h)
                }
                p && Sx({
                    context: d,
                    pos1: m,
                    pos2: v,
                    pos3: y,
                    backgroundMask: a.backgroundMask,
                    colorTriangle: p,
                    opacityTriangle: f
                })
            }
            )
        }
        ,
        this._drawTriangles = (n,i,r,o)=>{
            var a, u, c;
            const s = r.destination;
            if (!((a = n.links) != null && a.triangles.enable && ((u = s.options.links) != null && u.triangles.enable)))
                return;
            const l = (c = s.links) == null ? void 0 : c.filter(f=>{
                const d = this._getLinkFrequency(s, f.destination);
                return s.options.links && d <= s.options.links.frequency && o.findIndex(v=>v.destination === f.destination) >= 0
            }
            );
            if (l != null && l.length)
                for (const f of l) {
                    const d = f.destination;
                    this._getTriangleFrequency(i, s, d) > n.links.triangles.frequency || this._drawLinkTriangle(i, r, f)
                }
        }
        ,
        this._getLinkFrequency = (n,i)=>Of([n, i], this._freqs.links),
        this._getTriangleFrequency = (n,i,r)=>Of([n, i, r], this._freqs.triangles),
        this._freqs = {
            links: new Map,
            triangles: new Map
        }
    }
    drawParticle(e, n) {
        const {links: i, options: r} = n;
        if (!(i != null && i.length))
            return;
        const o = i.filter(s=>r.links && (r.links.frequency >= zx || this._getLinkFrequency(n, s.destination) <= r.links.frequency));
        for (const s of o)
            this._drawTriangles(r, n, s, o),
            s.opacity > Rf && (n.retina.linksWidth ?? vl) > vl && this._drawLinkLine(n, s)
    }
    async init() {
        this._freqs.links = new Map,
        this._freqs.triangles = new Map,
        await Promise.resolve()
    }
    particleCreated(e) {
        if (e.links = [],
        !e.options.links)
            return;
        const n = this.container.retina.pixelRatio
          , {retina: i} = e
          , {distance: r, width: o} = e.options.links;
        i.linksDistance = r * n,
        i.linksWidth = o * n
    }
    particleDestroyed(e) {
        e.links = []
    }
}
class bx {
    constructor() {
        this.id = "links"
    }
    getPlugin(e) {
        return Promise.resolve(new Px(e))
    }
    loadOptions() {}
    needsPlugin() {
        return !0
    }
}
async function Mx(t, e=!0) {
    const n = new bx;
    await t.addPlugin(n, e)
}
async function Ox(t, e=!0) {
    await xx(t, e),
    await Mx(t, e)
}
const Rx = 180
  , vo = {
    x: 0,
    y: 0
}
  , Tx = 2;
function Lx(t, e, n) {
    const {context: i} = t
      , r = n.count.numerator * n.count.denominator
      , o = n.count.numerator / n.count.denominator
      , s = Rx * (o - Tx) / o
      , l = Math.PI - an(s);
    if (i) {
        i.beginPath(),
        i.translate(e.x, e.y),
        i.moveTo(vo.x, vo.y);
        for (let a = 0; a < r; a++)
            i.lineTo(n.length, vo.y),
            i.translate(n.length, vo.y),
            i.rotate(l)
    }
}
const Ix = 5;
class Lp {
    draw(e) {
        const {particle: n, radius: i} = e
          , r = this.getCenter(n, i)
          , o = this.getSidesData(n, i);
        Lx(e, r, o)
    }
    getSidesCount(e) {
        const n = e.shapeData;
        return Math.round(M((n == null ? void 0 : n.sides) ?? Ix))
    }
}
const Lf = 3.5
  , If = 2.66
  , Dx = 3;
class Nx extends Lp {
    constructor() {
        super(...arguments),
        this.validTypes = ["polygon"]
    }
    getCenter(e, n) {
        return {
            x: -n / (e.sides / Lf),
            y: -n / (If / Lf)
        }
    }
    getSidesData(e, n) {
        const i = e.sides;
        return {
            count: {
                denominator: 1,
                numerator: i
            },
            length: n * If / (i / Dx)
        }
    }
}
const Fx = 1.66
  , jx = 3
  , $x = 2;
class Ax extends Lp {
    constructor() {
        super(...arguments),
        this.validTypes = ["triangle"]
    }
    getCenter(e, n) {
        return {
            x: -n,
            y: n / Fx
        }
    }
    getSidesCount() {
        return jx
    }
    getSidesData(e, n) {
        const i = n * $x;
        return {
            count: {
                denominator: 2,
                numerator: 3
            },
            length: i
        }
    }
}
async function Bx(t, e=!0) {
    await t.addShape(new Nx, e)
}
async function Ux(t, e=!0) {
    await t.addShape(new Ax, e)
}
async function Hx(t, e=!0) {
    await Bx(t, e),
    await Ux(t, e)
}
class Vx {
    constructor() {
        this.enable = !1,
        this.speed = 0,
        this.decay = 0,
        this.sync = !1
    }
    load(e) {
        e && (e.enable !== void 0 && (this.enable = e.enable),
        e.speed !== void 0 && (this.speed = j(e.speed)),
        e.decay !== void 0 && (this.decay = j(e.decay)),
        e.sync !== void 0 && (this.sync = e.sync))
    }
}
class Wx extends Qn {
    constructor() {
        super(),
        this.animation = new Vx,
        this.direction = Je.clockwise,
        this.path = !1,
        this.value = 0
    }
    load(e) {
        e && (super.load(e),
        e.direction !== void 0 && (this.direction = e.direction),
        this.animation.load(e.animation),
        e.path !== void 0 && (this.path = e.path))
    }
}
const Ip = 2
  , qx = Math.PI * Ip
  , Qx = 1
  , Gx = 360;
class Yx {
    constructor(e) {
        this.container = e
    }
    init(e) {
        const n = e.options.rotate;
        if (!n)
            return;
        e.rotate = {
            enable: n.animation.enable,
            value: an(M(n.value)),
            min: 0,
            max: qx
        },
        e.pathRotation = n.path;
        let i = n.direction;
        switch (i === Je.random && (i = Math.floor(W() * Ip) > 0 ? Je.counterClockwise : Je.clockwise),
        i) {
        case Je.counterClockwise:
        case "counterClockwise":
            e.rotate.status = re.decreasing;
            break;
        case Je.clockwise:
            e.rotate.status = re.increasing;
            break
        }
        const r = n.animation;
        r.enable && (e.rotate.decay = Qx - M(r.decay),
        e.rotate.velocity = M(r.speed) / Gx * this.container.retina.reduceFactor,
        r.sync || (e.rotate.velocity *= W())),
        e.rotation = e.rotate.value
    }
    isEnabled(e) {
        const n = e.options.rotate;
        return n ? !e.destroyed && !e.spawning && (!!n.value || n.animation.enable || n.path) : !1
    }
    loadOptions(e, ...n) {
        e.rotate || (e.rotate = new Wx);
        for (const i of n)
            e.rotate.load(i == null ? void 0 : i.rotate)
    }
    update(e, n) {
        this.isEnabled(e) && (e.isRotating = !!e.rotate,
        e.rotate && (xu(e, e.rotate, !1, Un.none, n),
        e.rotation = e.rotate.value))
    }
}
async function Kx(t, e=!0) {
    await t.addParticleUpdater("rotate", n=>Promise.resolve(new Yx(n)), e)
}
const Xx = 2
  , Zx = Math.sqrt(Xx)
  , Jx = 2;
function e2(t) {
    const {context: e, radius: n} = t
      , i = n / Zx
      , r = i * Jx;
    e.rect(-i, -i, r, r)
}
const t2 = 4;
class n2 {
    constructor() {
        this.validTypes = ["edge", "square"]
    }
    draw(e) {
        e2(e)
    }
    getSidesCount() {
        return t2
    }
}
async function i2(t, e=!0) {
    await t.addShape(new n2, e)
}
const r2 = 2
  , Xn = {
    x: 0,
    y: 0
};
function o2(t) {
    const {context: e, particle: n, radius: i} = t
      , r = n.sides
      , o = n.starInset ?? r2;
    e.moveTo(Xn.x, Xn.y - i);
    for (let s = 0; s < r; s++)
        e.rotate(Math.PI / r),
        e.lineTo(Xn.x, Xn.y - i * o),
        e.rotate(Math.PI / r),
        e.lineTo(Xn.x, Xn.y - i)
}
const s2 = 2
  , l2 = 5;
class a2 {
    constructor() {
        this.validTypes = ["star"]
    }
    draw(e) {
        o2(e)
    }
    getSidesCount(e) {
        const n = e.shapeData;
        return Math.round(M((n == null ? void 0 : n.sides) ?? l2))
    }
    particleInit(e, n) {
        const i = n.shapeData;
        n.starInset = M((i == null ? void 0 : i.inset) ?? s2)
    }
}
async function u2(t, e=!0) {
    await t.addShape(new a2, e)
}
const c2 = 1;
class f2 {
    constructor(e) {
        this.container = e
    }
    init(e) {
        var s;
        const n = this.container
          , i = e.options
          , r = ht(i.stroke, e.id, i.reduceDuplicates);
        e.strokeWidth = M(r.width) * n.retina.pixelRatio,
        e.strokeOpacity = M(r.opacity ?? c2),
        e.strokeAnimation = (s = r.color) == null ? void 0 : s.animation;
        const o = Ir(r.color) ?? e.getFillColor();
        o && (e.strokeColor = yp(o, e.strokeAnimation, n.retina.reduceFactor))
    }
    isEnabled(e) {
        const n = e.strokeAnimation
          , {strokeColor: i} = e;
        return !e.destroyed && !e.spawning && !!n && ((i == null ? void 0 : i.h.value) !== void 0 && i.h.enable || (i == null ? void 0 : i.s.value) !== void 0 && i.s.enable || (i == null ? void 0 : i.l.value) !== void 0 && i.l.enable)
    }
    update(e, n) {
        this.isEnabled(e) && gp(e.strokeColor, n)
    }
}
async function d2(t, e=!0) {
    await t.addParticleUpdater("strokeColor", n=>Promise.resolve(new f2(n)), e)
}
async function h2(t, e=!0) {
    await Jw(t, !1),
    await i1(t, !1),
    await d1(t, !1),
    await x1(t, !1),
    await O1(t, !1),
    await A1(t, !1),
    await H1(t, !1),
    await G1(t, !1),
    await Z1(t, !1),
    await uw(t, !1),
    await pw(t, !1),
    await nx(t, !1),
    await fx(t, !1),
    await Ox(t, !1),
    await Q0(),
    await K0(t, !1),
    await Aw(t, !1),
    await Xw(t, !1),
    await Hx(t, !1),
    await i2(t, !1),
    await u2(t, !1),
    await Qw(t, !1),
    await Kx(t, !1),
    await d2(t, !1),
    await q0(t, e)
}
const p2 = ()=>{
    const [t,e] = De.useState(!1);
    De.useEffect(()=>{
        f0(async r=>{
            await h2(r)
        }
        ).then(()=>{
            e(!0)
        }
        )
    }
    , []);
    const n = r=>{
        console.log(r)
    }
      , i = De.useMemo(()=>({
        particles: {
            move: {
                enable: !0,
                speed: {
                    min: 1,
                    max: 6
                }
            },
            number: {
                value: 20,
                max: 30
            },
            opacity: {
                value: 1
            },
            rotate: {
                path: !0
            },
            shape: {
                options: {
                    image: [{
                        gif: !0,
                        height: 100,
                        src: "billy_files/1.png",
                        width: 100
                    }, {
                        gif: !0,
                        height: 100,
                        src: "billy_files/2.png",
                        width: 100
                    }, {
                        gif: !0,
                        height: 100,
                        src: "billy_files/3.png",
                        width: 100
                    }, {
                        gif: !0,
                        height: 100,
                        src: "billy_files/4.png",
                        width: 100
                    }, {
                        gif: !0,
                        height: 100,
                        src: "billy_files/5.png",
                        width: 100
                    }, {
                        gif: !0,
                        height: 100,
                        src: "billy_files/6.png",
                        width: 100
                    }, {
                        gif: !0,
                        height: 100,
                        src: "billy_files/7.png",
                        width: 100
                    }]
                },
                type: "image"
            },
            size: {
                value: {
                    min: 32,
                    max: 32
                }
            }
        }
    }), []);
    return t ? C.jsx(c0, {
        className: "w-full min-h-screen absolute left-0 top-0 z-0",
        id: "tsparticles",
        particlesLoaded: n,
        options: i
    }) : C.jsx(C.Fragment, {})
}
  , zu = t=>typeof t == "number" && !isNaN(t)
  , mr = t=>typeof t == "string"
  , Dp = t=>typeof t == "function"
  , m2 = t=>De.isValidElement(t) || mr(t) || Dp(t) || zu(t);
function y2(t, e, n) {
    n === void 0 && (n = 300);
    const {scrollHeight: i, style: r} = t;
    requestAnimationFrame(()=>{
        r.minHeight = "initial",
        r.height = i + "px",
        r.transition = `all ${n}ms`,
        requestAnimationFrame(()=>{
            r.height = "0",
            r.padding = "0",
            r.margin = "0",
            setTimeout(e, n)
        }
        )
    }
    )
}
function bs(t) {
    let {enter: e, exit: n, appendPosition: i=!1, collapse: r=!0, collapseDuration: o=300} = t;
    return function(s) {
        let {children: l, position: a, preventExitTransition: u, done: c, nodeRef: f, isIn: d, playToast: m} = s;
        const v = i ? `${e}--${a}` : e
          , y = i ? `${n}--${a}` : n
          , k = De.useRef(0);
        return De.useLayoutEffect(()=>{
            const p = f.current
              , h = v.split(" ")
              , g = w=>{
                w.target === f.current && (m(),
                p.removeEventListener("animationend", g),
                p.removeEventListener("animationcancel", g),
                k.current === 0 && w.type !== "animationcancel" && p.classList.remove(...h))
            }
            ;
            p.classList.add(...h),
            p.addEventListener("animationend", g),
            p.addEventListener("animationcancel", g)
        }
        , []),
        De.useEffect(()=>{
            const p = f.current
              , h = ()=>{
                p.removeEventListener("animationend", h),
                r ? y2(p, c, o) : c()
            }
            ;
            d || (u ? h() : (k.current = 1,
            p.className += ` ${y}`,
            p.addEventListener("animationend", h)))
        }
        , [d]),
        xl.createElement(xl.Fragment, null, l)
    }
}
const zt = new Map;
let _a = [];
const Df = new Set
  , Np = ()=>zt.size > 0;
function g2(t, e) {
    var n;
    if (e)
        return !((n = zt.get(e)) == null || !n.isToastActive(t));
    let i = !1;
    return zt.forEach(r=>{
        r.isToastActive(t) && (i = !0)
    }
    ),
    i
}
function v2(t, e) {
    m2(t) && (Np() || _a.push({
        content: t,
        options: e
    }),
    zt.forEach(n=>{
        n.buildToast(t, e)
    }
    ))
}
function Nf(t, e) {
    zt.forEach(n=>{
        e != null && e != null && e.containerId ? (e == null ? void 0 : e.containerId) === n.id && n.toggle(t, e == null ? void 0 : e.id) : n.toggle(t, e == null ? void 0 : e.id)
    }
    )
}
let w2 = 1;
const Fp = ()=>"" + w2++;
function x2(t) {
    return t && (mr(t.toastId) || zu(t.toastId)) ? t.toastId : Fp()
}
function yr(t, e) {
    return v2(t, e),
    e.toastId
}
function ls(t, e) {
    return {
        ...e,
        type: e && e.type || t,
        toastId: x2(e)
    }
}
function wo(t) {
    return (e,n)=>yr(e, ls(t, n))
}
function q(t, e) {
    return yr(t, ls("default", e))
}
q.loading = (t,e)=>yr(t, ls("default", {
    isLoading: !0,
    autoClose: !1,
    closeOnClick: !1,
    closeButton: !1,
    draggable: !1,
    ...e
})),
q.promise = function(t, e, n) {
    let i, {pending: r, error: o, success: s} = e;
    r && (i = mr(r) ? q.loading(r, n) : q.loading(r.render, {
        ...n,
        ...r
    }));
    const l = {
        isLoading: null,
        autoClose: null,
        closeOnClick: null,
        closeButton: null,
        draggable: null
    }
      , a = (c,f,d)=>{
        if (f == null)
            return void q.dismiss(i);
        const m = {
            type: c,
            ...l,
            ...n,
            data: d
        }
          , v = mr(f) ? {
            render: f
        } : f;
        return i ? q.update(i, {
            ...m,
            ...v
        }) : q(v.render, {
            ...m,
            ...v
        }),
        d
    }
      , u = Dp(t) ? t() : t;
    return u.then(c=>a("success", s, c)).catch(c=>a("error", o, c)),
    u
}
,
q.success = wo("success"),
q.info = wo("info"),
q.error = wo("error"),
q.warning = wo("warning"),
q.warn = q.warning,
q.dark = (t,e)=>yr(t, ls("default", {
    theme: "dark",
    ...e
})),
q.dismiss = function(t) {
    (function(e) {
        var n;
        if (Np()) {
            if (e == null || mr(n = e) || zu(n))
                zt.forEach(i=>{
                    i.removeToast(e)
                }
                );
            else if (e && ("containerId"in e || "id"in e)) {
                const i = zt.get(e.containerId);
                i ? i.removeToast(e.id) : zt.forEach(r=>{
                    r.removeToast(e.id)
                }
                )
            }
        } else
            _a = _a.filter(i=>e != null && i.options.toastId !== e)
    }
    )(t)
}
,
q.clearWaitingQueue = function(t) {
    t === void 0 && (t = {}),
    zt.forEach(e=>{
        !e.props.limit || t.containerId && e.id !== t.containerId || e.clearQueue()
    }
    )
}
,
q.isActive = g2,
q.update = function(t, e) {
    e === void 0 && (e = {});
    const n = ((i,r)=>{
        var o;
        let {containerId: s} = r;
        return (o = zt.get(s || 1)) == null ? void 0 : o.toasts.get(i)
    }
    )(t, e);
    if (n) {
        const {props: i, content: r} = n
          , o = {
            delay: 100,
            ...i,
            ...e,
            toastId: e.toastId || t,
            updateId: Fp()
        };
        o.toastId !== t && (o.staleId = t);
        const s = o.render || r;
        delete o.render,
        yr(s, o)
    }
}
,
q.done = t=>{
    q.update(t, {
        progress: 1
    })
}
,
q.onChange = function(t) {
    return Df.add(t),
    ()=>{
        Df.delete(t)
    }
}
,
q.play = t=>Nf(!0, t),
q.pause = t=>Nf(!1, t);
const Ms = function(t, e) {
    return e === void 0 && (e = !1),
    {
        enter: `Toastify--animate Toastify__${t}-enter`,
        exit: `Toastify--animate Toastify__${t}-exit`,
        appendPosition: e
    }
}
  , k2 = bs(Ms("bounce", !0));
bs(Ms("slide", !0));
bs(Ms("zoom"));
bs(Ms("flip"));
const Zn = "3B5wuUrMEi5yATD7on46hKfej3pfmd7t1RKgrsN3pump"
  , Ff = "https://t.me/billy_cto_sol"
  , jf = "https://x.com/billycoinsolana"
  , jf2 = "https://www.dextools.io/app/en/solana/pair-explorer/9uWW4C36HiCTGr6pZW9VFhr9vdXktZ8NA8jVnzQU35pJ?t=1718704889300"
  , jp = "https://raydium.io/swap/?inputCurrency=sol&outputCurrency=GtsAtWXDTyi2vPYd6T1evRmvwa3EdqygDu16NzDSL8SZ&fixed=in&inputMint=sol&outputMint=3B5wuUrMEi5yATD7on46hKfej3pfmd7t1RKgrsN3pump"
  , $f = ""
  , Af = ""
  , Bf = ""
  , Uf = ""
  , Hf = "https://dexscreener.com/solana/9uww4c36hictgr6pzw9vfhr9vdxktz8na8jvnzqu35pj"
  , _2 = t=>{
    const e = ()=>{
        navigator.clipboard.writeText(Zn),
        q.success("CA copied!", {
            position: "top-right",
            autoClose: 3e3,
            hideProgressBar: !1,
            closeOnClick: !0,
            pauseOnHover: !0,
            draggable: !0,
            progress: void 0,
            theme: "dark",
            transition: k2
        })
    }
      , [n,i] = De.useState(!1);
    De.useEffect(()=>{
        const o = ()=>{
            i(window.innerWidth < 768)
        }
        ;
        return o(),
        window.addEventListener("resize", o),
        ()=>window.removeEventListener("resize", o)
    }
    , []);
    const r = ()=>{
        if (!n || Zn.length < 7)
            return Zn;
        const o = Zn.substring(0, 4)
          , s = Zn.substring(Zn.length - 4);
        return `${o}...${s}`
    }
    ;
    return C.jsx("button", {
        onClick: e,
        className: "text-center text-xl bg-white px-4 py-2 cursor-pointer bg-opacity-80 flex-row bg-transparent gap-4 align-center justify-center items-center select-non flex z-50 text-white " + t.customClass,
        children: C.jsxs("p", {
            className: "text-4xl font-bold bg-transparent text-black mfont select-text",
            children: ["ca: ", r()]
        })
    })
}
  , S2 = t=>C.jsxs("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "100%",
    height: "100%",
    fill: "currentColor",
    fillRule: "evenodd",
    viewBox: "0 0 252 300",
    focusable: "false",
    className: t.iconClass,
    children: [C.jsx("path", {
        d: "M151.818 106.866c9.177-4.576 20.854-11.312 32.545-20.541 2.465 5.119 2.735 9.586 1.465 13.193-.9 2.542-2.596 4.753-4.826 6.512-2.415 1.901-5.431 3.285-8.765 4.033-6.326 1.425-13.712.593-20.419-3.197m1.591 46.886l12.148 7.017c-24.804 13.902-31.547 39.716-39.557 64.859-8.009-25.143-14.753-50.957-39.556-64.859l12.148-7.017a5.95 5.95 0 003.84-5.845c-1.113-23.547 5.245-33.96 13.821-40.498 3.076-2.342 6.434-3.518 9.747-3.518s6.671 1.176 9.748 3.518c8.576 6.538 14.934 16.951 13.821 40.498a5.95 5.95 0 003.84 5.845zM126 0c14.042.377 28.119 3.103 40.336 8.406 8.46 3.677 16.354 8.534 23.502 14.342 3.228 2.622 5.886 5.155 8.814 8.071 7.897.273 19.438-8.5 24.796-16.709-9.221 30.23-51.299 65.929-80.43 79.589-.012-.005-.02-.012-.029-.018-5.228-3.992-11.108-5.988-16.989-5.988s-11.76 1.996-16.988 5.988c-.009.005-.017.014-.029.018-29.132-13.66-71.209-49.359-80.43-79.589 5.357 8.209 16.898 16.982 24.795 16.709 2.929-2.915 5.587-5.449 8.814-8.071C69.31 16.94 77.204 12.083 85.664 8.406 97.882 3.103 111.959.377 126 0m-25.818 106.866c-9.176-4.576-20.854-11.312-32.544-20.541-2.465 5.119-2.735 9.586-1.466 13.193.901 2.542 2.597 4.753 4.826 6.512 2.416 1.901 5.432 3.285 8.766 4.033 6.326 1.425 13.711.593 20.418-3.197"
    }), C.jsx("path", {
        d: "M197.167 75.016c6.436-6.495 12.107-13.684 16.667-20.099l2.316 4.359c7.456 14.917 11.33 29.774 11.33 46.494l-.016 26.532.14 13.754c.54 33.766 7.846 67.929 24.396 99.193l-34.627-27.922-24.501 39.759-25.74-24.231L126 299.604l-41.132-66.748-25.739 24.231-24.501-39.759L0 245.25c16.55-31.264 23.856-65.427 24.397-99.193l.14-13.754-.016-26.532c0-16.721 3.873-31.578 11.331-46.494l2.315-4.359c4.56 6.415 10.23 13.603 16.667 20.099l-2.01 4.175c-3.905 8.109-5.198 17.176-2.156 25.799 1.961 5.554 5.54 10.317 10.154 13.953 4.48 3.531 9.782 5.911 15.333 7.161 3.616.814 7.3 1.149 10.96 1.035-.854 4.841-1.227 9.862-1.251 14.978L53.2 160.984l25.206 14.129a41.926 41.926 0 015.734 3.869c20.781 18.658 33.275 73.855 41.861 100.816 8.587-26.961 21.08-82.158 41.862-100.816a41.865 41.865 0 015.734-3.869l25.206-14.129-32.665-18.866c-.024-5.116-.397-10.137-1.251-14.978 3.66.114 7.344-.221 10.96-1.035 5.551-1.25 10.854-3.63 15.333-7.161 4.613-3.636 8.193-8.399 10.153-13.953 3.043-8.623 1.749-17.689-2.155-25.799l-2.01-4.175z"
    })]
})
  , C2 = t=>C.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    height: "100%",
    width: "100%",
    className: t.iconClass,
    viewBox: "0 -.058 754.779 867.058",
    children: C.jsx("path", {
        "clip-rule": "evenodd",
        d: "m280.395 49.025c-51.649 26.905-93.905 49.672-93.896 50.598.023 2.39 123.959 65.156 128.358 65.003 2.001-.067 16.517-6.749 32.256-14.847l28.621-14.721 31.258 16.067 31.256 16.07 51.188-23.001c77.13-34.659 85.141-38.457 83.885-39.733-1.666-1.693-29.331-16.555-104.388-56.07-36.274-19.098-71.481-37.823-78.24-41.612-6.758-3.789-13.21-6.837-14.337-6.778s-44.311 22.12-95.961 49.024zm-226.532 117.306-53.766 27.772v121.886c0 67.038.706 121.885 1.572 121.885.863 0 27.316-11.467 58.783-25.482l57.213-25.482v-128.476l27.958 15.232a33224.294 33224.294 0 0 0 64.671 35.109l36.712 19.877 16.336-7.387a3822.03 3822.03 0 0 0 30.674-14.056c7.885-3.672 27.241-12.39 43.012-19.377 15.771-6.99 30.37-14.019 32.44-15.621 2.75-2.128-30.782-20.658-124.025-68.54-70.285-36.093-130.046-65.509-132.802-65.368s-29.206 12.752-58.778 28.028zm529.148 7.799c-36.618 16.531-66.604 30.717-66.638 31.526-.032.808 19.926 12.675 44.354 26.367 24.426 13.695 44.412 25.632 44.412 26.531 0 .897-21.615 11.37-48.03 23.278-26.419 11.905-93.194 42.061-148.393 67.014l-184.954 83.602c-46.525 21.032-88.462 39.989-93.193 42.132-95.03 43.019-121.15 54.956-124.737 57.005-3.607 2.063-4.424 14.048-5.066 74.201l-.766 71.744 48.08 24.498 48.079 24.497 66.669-30.088c36.669-16.547 66.669-30.953 66.669-32.014 0-1.058-6.776-5.473-15.054-9.815-8.282-4.342-25.378-13.954-37.995-21.364-12.616-7.411-25.196-14.21-27.958-15.112-2.761-.899-4.98-2.472-4.935-3.498.046-1.023 29.404-14.968 65.236-30.991 69.597-31.117 122.858-55.1 237.202-106.809a305577.39 305577.39 0 0 1 153.411-69.31c44.948-20.288 97.208-43.983 116.134-52.655l34.41-15.767.765-72.561.769-72.558-48.765-25.03c-26.822-13.765-49.748-24.994-50.95-24.953-1.201.038-32.141 13.595-68.756 30.13zm153.872 261.772c-7.186 3.51-21.38 10.082-31.542 14.603s-29.446 13.222-42.852 19.339l-24.374 11.117-.556 63.702c-.307 35.035-1.597 63.545-2.867 63.36-2.885-.429-48.567-23.857-94.487-48.463-33.143-17.757-35.225-18.463-43.013-14.606-4.502 2.231-31.413 14.3-59.801 26.825-28.389 12.523-52.541 23.587-53.677 24.589-1.133 1 56.002 31.967 126.97 68.819l129.029 67.003 55.119-28.513c30.312-15.68 56.088-29.983 57.275-31.782 2.672-4.045 2.443-242.93-.232-242.607-1.058.127-7.806 3.104-14.992 6.614zm-305.227 280.391a25013.26 25013.26 0 0 0 -28.675 12.349c-28.856 12.484-23.201 12.898-57.531-4.192-22.865-11.382-32.721-14.894-36.999-13.189-3.209 1.278-30.826 13.703-61.376 27.61-30.548 13.907-56.602 25.285-57.898 25.285-12.817 0 8.491 12.731 90.714 54.207l96.428 48.637 40.572-20.03c22.315-11.017 67.323-33.078 100.021-49.024 32.695-15.95 59.042-29.413 58.549-29.921-.497-.506-27.893-14.574-60.883-31.262l-59.982-30.338z",
        "fill-rule": "evenodd"
    })
})
  , E2 = t=>C.jsxs("svg", {
    className: t.iconClass,
    version: "1.1",
    id: "Icons",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 252 300",
    fill: "#000000",
    children: [C.jsx("g", {
        id: "SVGRepo_bgCarrier",
        "stroke-width": "0"
    }), C.jsx("g", {
        id: "SVGRepo_tracerCarrier",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
    }), C.jsxs("g", {
        id: "SVGRepo_iconCarrier",
        children: [" ", C.jsx("style", {
            type: "text/css",
            children: " "
}), 
    C.jsx("path", {
        d: "M151.818 106.866c9.177-4.576 20.854-11.312 32.545-20.541 2.465 5.119 2.735 9.586 1.465 13.193-.9 2.542-2.596 4.753-4.826 6.512-2.415 1.901-5.431 3.285-8.765 4.033-6.326 1.425-13.712.593-20.419-3.197m1.591 46.886l12.148 7.017c-24.804 13.902-31.547 39.716-39.557 64.859-8.009-25.143-14.753-50.957-39.556-64.859l12.148-7.017a5.95 5.95 0 003.84-5.845c-1.113-23.547 5.245-33.96 13.821-40.498 3.076-2.342 6.434-3.518 9.747-3.518s6.671 1.176 9.748 3.518c8.576 6.538 14.934 16.951 13.821 40.498a5.95 5.95 0 003.84 5.845zM126 0c14.042.377 28.119 3.103 40.336 8.406 8.46 3.677 16.354 8.534 23.502 14.342 3.228 2.622 5.886 5.155 8.814 8.071 7.897.273 19.438-8.5 24.796-16.709-9.221 30.23-51.299 65.929-80.43 79.589-.012-.005-.02-.012-.029-.018-5.228-3.992-11.108-5.988-16.989-5.988s-11.76 1.996-16.988 5.988c-.009.005-.017.014-.029.018-29.132-13.66-71.209-49.359-80.43-79.589 5.357 8.209 16.898 16.982 24.795 16.709 2.929-2.915 5.587-5.449 8.814-8.071C69.31 16.94 77.204 12.083 85.664 8.406 97.882 3.103 111.959.377 126 0m-25.818 106.866c-9.176-4.576-20.854-11.312-32.544-20.541-2.465 5.119-2.735 9.586-1.466 13.193.901 2.542 2.597 4.753 4.826 6.512 2.416 1.901 5.432 3.285 8.766 4.033 6.326 1.425 13.711.593 20.418-3.197"
    }), C.jsx("path", {
        d: "M197.167 75.016c6.436-6.495 12.107-13.684 16.667-20.099l2.316 4.359c7.456 14.917 11.33 29.774 11.33 46.494l-.016 26.532.14 13.754c.54 33.766 7.846 67.929 24.396 99.193l-34.627-27.922-24.501 39.759-25.74-24.231L126 299.604l-41.132-66.748-25.739 24.231-24.501-39.759L0 245.25c16.55-31.264 23.856-65.427 24.397-99.193l.14-13.754-.016-26.532c0-16.721 3.873-31.578 11.331-46.494l2.315-4.359c4.56 6.415 10.23 13.603 16.667 20.099l-2.01 4.175c-3.905 8.109-5.198 17.176-2.156 25.799 1.961 5.554 5.54 10.317 10.154 13.953 4.48 3.531 9.782 5.911 15.333 7.161 3.616.814 7.3 1.149 10.96 1.035-.854 4.841-1.227 9.862-1.251 14.978L53.2 160.984l25.206 14.129a41.926 41.926 0 015.734 3.869c20.781 18.658 33.275 73.855 41.861 100.816 8.587-26.961 21.08-82.158 41.862-100.816a41.865 41.865 0 015.734-3.869l25.206-14.129-32.665-18.866c-.024-5.116-.397-10.137-1.251-14.978 3.66.114 7.344-.221 10.96-1.035 5.551-1.25 10.854-3.63 15.333-7.161 4.613-3.636 8.193-8.399 10.153-13.953 3.043-8.623 1.749-17.689-2.155-25.799l-2.01-4.175z"
    })]
    })]
})
  , z2 = t=>C.jsx("svg", {
    className: t.iconClass,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 496 512",
    children: C.jsx("path", {
        d: "M248 8C111 8 0 119 0 256S111 504 248 504 496 393 496 256 385 8 248 8zM363 176.7c-3.7 39.2-19.9 134.4-28.1 178.3-3.5 18.6-10.3 24.8-16.9 25.4-14.4 1.3-25.3-9.5-39.3-18.7-21.8-14.3-34.2-23.2-55.3-37.2-24.5-16.1-8.6-25 5.3-39.5 3.7-3.8 67.1-61.5 68.3-66.7 .2-.7 .3-3.1-1.2-4.4s-3.6-.8-5.1-.5q-3.3 .7-104.6 69.1-14.8 10.2-26.9 9.9c-8.9-.2-25.9-5-38.6-9.1-15.5-5-27.9-7.7-26.8-16.3q.8-6.7 18.5-13.7 108.4-47.2 144.6-62.3c68.9-28.6 83.2-33.6 92.5-33.8 2.1 0 6.6 .5 9.6 2.9a10.5 10.5 0 0 1 3.5 6.7A43.8 43.8 0 0 1 363 176.7z"
    })
})
  , P2 = t=>C.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: t.iconClass,
    fill: "#000000",
    height: "800px",
    width: "800px",
    version: "1.1",
    id: "Layer_1",
    viewBox: "-143 145 512 512",
    children: C.jsx("path", {
        d: "M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M215.2,361.2  c0.1,2.2,0.1,4.5,0.1,6.8c0,69.5-52.9,149.7-149.7,149.7c-29.7,0-57.4-8.7-80.6-23.6c4.1,0.5,8.3,0.7,12.6,0.7  c24.6,0,47.3-8.4,65.3-22.5c-23-0.4-42.5-15.6-49.1-36.5c3.2,0.6,6.5,0.9,9.9,0.9c4.8,0,9.5-0.6,13.9-1.9  C13.5,430-4.6,408.7-4.6,383.2v-0.6c7.1,3.9,15.2,6.3,23.8,6.6c-14.1-9.4-23.4-25.6-23.4-43.8c0-9.6,2.6-18.7,7.1-26.5  c26,31.9,64.7,52.8,108.4,55c-0.9-3.8-1.4-7.8-1.4-12c0-29,23.6-52.6,52.6-52.6c15.1,0,28.8,6.4,38.4,16.6  c12-2.4,23.2-6.7,33.4-12.8c-3.9,12.3-12.3,22.6-23.1,29.1c10.6-1.3,20.8-4.1,30.2-8.3C234.4,344.5,225.5,353.7,215.2,361.2z"
    })
})  , zs2 = t=>C.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: t.iconClass,
    fill: "#000000",
    height: "64px",
    width: "64px",
    version: "1.1",
    id: "Layer_1",
    viewBox: "0 -.058 754.779 867.058",
    children: C.jsx("path", {
        d: "m280.395 49.025c-51.649 26.905-93.905 49.672-93.896 50.598.023 2.39 123.959 65.156 128.358 65.003 2.001-.067 16.517-6.749 32.256-14.847l28.621-14.721 31.258 16.067 31.256 16.07 51.188-23.001c77.13-34.659 85.141-38.457 83.885-39.733-1.666-1.693-29.331-16.555-104.388-56.07-36.274-19.098-71.481-37.823-78.24-41.612-6.758-3.789-13.21-6.837-14.337-6.778s-44.311 22.12-95.961 49.024zm-226.532 117.306-53.766 27.772v121.886c0 67.038.706 121.885 1.572 121.885.863 0 27.316-11.467 58.783-25.482l57.213-25.482v-128.476l27.958 15.232a33224.294 33224.294 0 0 0 64.671 35.109l36.712 19.877 16.336-7.387a3822.03 3822.03 0 0 0 30.674-14.056c7.885-3.672 27.241-12.39 43.012-19.377 15.771-6.99 30.37-14.019 32.44-15.621 2.75-2.128-30.782-20.658-124.025-68.54-70.285-36.093-130.046-65.509-132.802-65.368s-29.206 12.752-58.778 28.028zm529.148 7.799c-36.618 16.531-66.604 30.717-66.638 31.526-.032.808 19.926 12.675 44.354 26.367 24.426 13.695 44.412 25.632 44.412 26.531 0 .897-21.615 11.37-48.03 23.278-26.419 11.905-93.194 42.061-148.393 67.014l-184.954 83.602c-46.525 21.032-88.462 39.989-93.193 42.132-95.03 43.019-121.15 54.956-124.737 57.005-3.607 2.063-4.424 14.048-5.066 74.201l-.766 71.744 48.08 24.498 48.079 24.497 66.669-30.088c36.669-16.547 66.669-30.953 66.669-32.014 0-1.058-6.776-5.473-15.054-9.815-8.282-4.342-25.378-13.954-37.995-21.364-12.616-7.411-25.196-14.21-27.958-15.112-2.761-.899-4.98-2.472-4.935-3.498.046-1.023 29.404-14.968 65.236-30.991 69.597-31.117 122.858-55.1 237.202-106.809a305577.39 305577.39 0 0 1 153.411-69.31c44.948-20.288 97.208-43.983 116.134-52.655l34.41-15.767.765-72.561.769-72.558-48.765-25.03c-26.822-13.765-49.748-24.994-50.95-24.953-1.201.038-32.141 13.595-68.756 30.13zm153.872 261.772c-7.186 3.51-21.38 10.082-31.542 14.603s-29.446 13.222-42.852 19.339l-24.374 11.117-.556 63.702c-.307 35.035-1.597 63.545-2.867 63.36-2.885-.429-48.567-23.857-94.487-48.463-33.143-17.757-35.225-18.463-43.013-14.606-4.502 2.231-31.413 14.3-59.801 26.825-28.389 12.523-52.541 23.587-53.677 24.589-1.133 1 56.002 31.967 126.97 68.819l129.029 67.003 55.119-28.513c30.312-15.68 56.088-29.983 57.275-31.782 2.672-4.045 2.443-242.93-.232-242.607-1.058.127-7.806 3.104-14.992 6.614zm-305.227 280.391a25013.26 25013.26 0 0 0 -28.675 12.349c-28.856 12.484-23.201 12.898-57.531-4.192-22.865-11.382-32.721-14.894-36.999-13.189-3.209 1.278-30.826 13.703-61.376 27.61-30.548 13.907-56.602 25.285-57.898 25.285-12.817 0 8.491 12.731 90.714 54.207l96.428 48.637 40.572-20.03c22.315-11.017 67.323-33.078 100.021-49.024 32.695-15.95 59.042-29.413 58.549-29.921-.497-.506-27.893-14.574-60.883-31.262l-59.982-30.338z"
    })
})
  , kn = "select-none text-center w-fit text-black mfont bg-transparent font-bold cursor-pointer text-4xl flex flex-col gap-2 justify-center items-center rounded-full flex flex-row content-center items-center transform transition duration-500 hover:scale-105 z-50 hover:text-stone-500"
  , _n = t=>C.jsx(C.Fragment, {
    children: t.val.length !== 0 && t.children
})
  , er = "w-16 h-16 fill-black bg-transparent hover:fill-white duration-1000 transition"
  , b2 = t=>C.jsxs("div", {
    className: "z-50 flex gap-4 lg:gap-16  flex-wrap flex-row justify-center items-center relative w-full bg-transparent " + t.customClass,
    children: [C.jsx(_n, {
        val: Bf,
        children: C.jsx("a", {
            target: "_blank",
            rel: "noreferrer",
            href: Bf,
            className: kn,
            children: "raydium"
        })
    }), C.jsx(_n, {
        val: Uf,
        children: C.jsx("a", {
            target: "_blank",
            rel: "noreferrer",
            href: Uf,
            className: kn,
            children: "jupiter"
        })
    }), C.jsx(_n, {
        val: Ff,
        children: C.jsx("a", {
            target: "_blank",
            rel: "noreferrer",
            href: Ff,
            className: kn,
            children: C.jsx(z2, {
                iconClass: er
            })
        })
    }), C.jsx(_n, {
        val: jf,
        children: C.jsx("a", {
            target: "_blank",
            rel: "noreferrer",
            href: jf,
            className: kn,
            children: C.jsx(P2, {
                iconClass: er
            })
        })
    }), C.jsx(_n, {
        val: Hf,
        children: C.jsx("a", {
            target: "_blank",
            rel: "noreferrer",
            href: Hf,
            className: kn,
            children: C.jsx(E2, {
                iconClass: er
            })
        })
    }), C.jsx(_n, {
        val: $f,
        children: C.jsx("a", {
            target: "_blank",
            rel: "noreferrer",
            href: $f,
            className: kn,
            children: C.jsx(S2, {
                iconClass: er
            })
        })
    }), C.jsx(_n, {
        val: Af,
        children: C.jsx("a", {
            target: "_blank",
            rel: "noreferrer",
            href: Af,
            className: kn,
            children: C.jsx(C2, {
                iconClass: er
            })
        })
    }), C.jsx(_n, {
        val: jf2,
        children: C.jsx("a", {
            target: "_blank",
            rel: "noreferrer",
            href: jf2,
            className: kn,
            children: C.jsx(zs2, {
                iconClass: er
            })
        })
    })]
})
  , M2 = ()=>C.jsxs("div", {
    className: "w-full min-h-screen relative justify-center flex bg-[#add8e6] z-50",
    children: [C.jsx(p2, {}), C.jsxs("div", {
        className: "flex flex-col gap-16 my-auto bg-transparent items-center justify-center w-full max-w-screen-xl",
        children: [C.jsx(b2, {
            customClass: ""
        }), C.jsx("img", {
            src: "billy_files/dog.png",
            className: "object-contain w-[80%] md:w-[40%] cursor-pointer my-image origin-bottom bg-transparent z-50"
        }), C.jsx("p", {
            className: "text-6xl font-bold bg-transparent text-black mfont select-text px-4 py-2 bg-white z-50 bg-opacity-80",
            children: "$BILLY"
        }), C.jsx(_2, {})]
    })]
})
  , Jn = "text-black text-4xl text-center w-full lg:text-left font2 leading-[5rem]"
  , O2 = "text-black text-4xl text-center z-50 w-fit lg:me-auto bg-opacity-80 min-w-[300px] mfont leading-[5rem] px-4 py-2 bg-white border-2 border-black cursor-pointer transition duration-500 hover:bg-black hover:text-white hover:border-white"
  , R2 = ()=>C.jsx("div", {
    className: "flex min-h-screen h-auto flex-col gap-8 w-full justify-center items-center p-4 bg-[#F5F5DC] z-50 relative",
    children: C.jsxs("div", {
        className: "flex flex-col lg:flex-row gap-16 max-w-screen-xl justify-center items-center",
        children: [C.jsx("div", {
            className: "lg:w-1/2 w-full justify-center flex items-center",
            children: C.jsx("img", {
                className: "object-contain z-50",
                src: "billy_files/dog2.png"
            })
        }), C.jsxs("div", {
            className: "lg:w-1/2 w-full flex-col gap-2 line-clamp-6 overflow-visible lg:text-left text-center justify-center flex items-center z-50",
            children: [C.jsx("p", {
                className: Jn,
                children: "he is cute asf"
            }), C.jsx("p", {
                className: Jn,
                children: "$billy is og coin"
            }), C.jsx("p", {
                className: Jn,
                children: "he is unlimited meme"
            }), C.jsx("p", {
                className: Jn,
                children: "he is having viral potential"
            }), C.jsx("p", {
                className: Jn,
                children: "Billy is on the mission"
            }), C.jsx("p", {
                className: Jn,
                children: "to 1B MC"
            }), C.jsx("a", {
                target: "_blank",
                href: jp,
                className: O2,
                children: "get billy"
            })]
        })]
    })
})
  , Vf = "text-black text-4xl text-center bg-opacity-80 z-50 w-fit min-w-[300px] mfont leading-[5rem] px-4 py-2 bg-white border-2 border-black cursor-pointer transition duration-500 hover:bg-black hover:text-white hover:border-white"
  , T2 = ()=>C.jsxs("div", {
    className: "flex min-h-screen h-auto flex-col gap-16 w-full justify-center items-center p-4 bg-[#add8e6]",
    children: [C.jsxs("div", {
        className: "flex flex-col gap-4",
        children: [C.jsx("p", {
            className: "text-center w-full text-black text-5xl mfont z-50 leading-[5rem] bg-white px-4 py-2 bg-opacity-80",
            children: "JUST BE HONEST, WHO’S CUTER?"
        }), C.jsx("p", {
            className: "font2 text-center text-black text-4xl bg-white px-4 py-2 w-fit mx-auto bg-opacity-80 z-50",
            children: "(anon)"
        })]
    }), C.jsxs("div", {
        className: "flex flex-col lg:flex-row gap-16 max-w-screen-xl justify-center items-center",
        children: [C.jsxs("div", {
            className: "lg:w-1/2 w-full flex-col gap-8 line-clamp-6 overflow-visible lg:text-left text-center justify-center flex items-center z-50",
            children: [C.jsx("img", {
                className: "object-contain z-50",
                src: "billy_files/dog3.png"
            }), C.jsx("a", {
                target: "_blank",
                href: jp,
                className: Vf,
                children: "billy"
            })]
        }), C.jsxs("div", {
            className: "lg:w-1/2 w-full flex-col gap-8 line-clamp-6 overflow-visible lg:text-left text-center justify-center flex items-center z-50",
            children: [C.jsx("img", {
                className: "object-contain z-50",
                src: "billy_files/wif.png"
            }), C.jsx("a", {
                target: "_blank",
                href: "https://dexscreener.com/solana/9uww4c36hictgr6pzw9vfhr9vdxktz8na8jvnzqu35pj",
                className: Vf,
                children: "wif"
            })]
        })]
    })]
});
var $p = {};
function L2(t) {
    if (typeof window > "u")
        return;
    const e = document.createElement("style");
    return e.setAttribute("type", "text/css"),
    e.innerHTML = t,
    document.head.appendChild(e),
    t
}
Object.defineProperty($p, "__esModule", {
    value: !0
});
var J = De;
function I2(t) {
    return t && typeof t == "object" && "default"in t ? t : {
        default: t
    }
}
var Vt = I2(J);
L2(`.rfm-marquee-container {
  overflow-x: hidden;
  display: flex;
  flex-direction: row;
  position: relative;
  width: var(--width);
  transform: var(--transform);
}
.rfm-marquee-container:hover div {
  animation-play-state: var(--pause-on-hover);
}
.rfm-marquee-container:active div {
  animation-play-state: var(--pause-on-click);
}

.rfm-overlay {
  position: absolute;
  width: 100%;
  height: 100%;
}
.rfm-overlay::before, .rfm-overlay::after {
  background: linear-gradient(to right, var(--gradient-color), rgba(255, 255, 255, 0));
  content: "";
  height: 100%;
  position: absolute;
  width: var(--gradient-width);
  z-index: 2;
  pointer-events: none;
  touch-action: none;
}
.rfm-overlay::after {
  right: 0;
  top: 0;
  transform: rotateZ(180deg);
}
.rfm-overlay::before {
  left: 0;
  top: 0;
}

.rfm-marquee {
  flex: 0 0 auto;
  min-width: var(--min-width);
  z-index: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);
  animation-play-state: var(--play);
  animation-delay: var(--delay);
  animation-direction: var(--direction);
}
@keyframes scroll {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
}

.rfm-initial-child-container {
  flex: 0 0 auto;
  display: flex;
  min-width: auto;
  flex-direction: row;
  align-items: center;
}

.rfm-child {
  transform: var(--transform);
}`);
const D2 = J.forwardRef(function({style: e={}, className: n="", autoFill: i=!1, play: r=!0, pauseOnHover: o=!1, pauseOnClick: s=!1, direction: l="left", speed: a=50, delay: u=0, loop: c=0, gradient: f=!1, gradientColor: d="white", gradientWidth: m=200, onFinish: v, onCycleComplete: y, onMount: k, children: p}, h) {
    const [g,w] = J.useState(0)
      , [x,_] = J.useState(0)
      , [E,z] = J.useState(1)
      , [R,O] = J.useState(!1)
      , A = J.useRef(null)
      , te = h || A
      , de = J.useRef(null)
      , $ = J.useCallback(()=>{
        if (de.current && te.current) {
            const N = te.current.getBoundingClientRect()
              , X = de.current.getBoundingClientRect();
            let Ye = N.width
              , Ee = X.width;
            (l === "up" || l === "down") && (Ye = N.height,
            Ee = X.height),
            z(i && Ye && Ee && Ee < Ye ? Math.ceil(Ye / Ee) : 1),
            w(Ye),
            _(Ee)
        }
    }
    , [i, te, l]);
    J.useEffect(()=>{
        if (R && ($(),
        de.current && te.current)) {
            const N = new ResizeObserver(()=>$());
            return N.observe(te.current),
            N.observe(de.current),
            ()=>{
                N && N.disconnect()
            }
        }
    }
    , [$, te, R]),
    J.useEffect(()=>{
        $()
    }
    , [$, p]),
    J.useEffect(()=>{
        O(!0)
    }
    , []),
    J.useEffect(()=>{
        typeof k == "function" && k()
    }
    , []);
    const Ge = J.useMemo(()=>i ? x * E / a : x < g ? g / a : x / a, [i, g, x, E, a])
      , Bi = J.useMemo(()=>Object.assign(Object.assign({}, e), {
        "--pause-on-hover": !r || o ? "paused" : "running",
        "--pause-on-click": !r || o && !s || s ? "paused" : "running",
        "--width": l === "up" || l === "down" ? "100vh" : "100%",
        "--transform": l === "up" ? "rotate(-90deg)" : l === "down" ? "rotate(90deg)" : "none"
    }), [e, r, o, s, l])
      , Ui = J.useMemo(()=>({
        "--gradient-color": d,
        "--gradient-width": typeof m == "number" ? `${m}px` : m
    }), [d, m])
      , P = J.useMemo(()=>({
        "--play": r ? "running" : "paused",
        "--direction": l === "left" ? "normal" : "reverse",
        "--duration": `${Ge}s`,
        "--delay": `${u}s`,
        "--iteration-count": c ? `${c}` : "infinite",
        "--min-width": i ? "auto" : "100%"
    }), [r, l, Ge, u, c, i])
      , T = J.useMemo(()=>({
        "--transform": l === "up" ? "rotate(90deg)" : l === "down" ? "rotate(-90deg)" : "none"
    }), [l])
      , L = J.useCallback(N=>[...Array(Number.isFinite(N) && N >= 0 ? N : 0)].map((X,Ye)=>Vt.default.createElement(J.Fragment, {
        key: Ye
    }, J.Children.map(p, Ee=>Vt.default.createElement("div", {
        style: T,
        className: "rfm-child"
    }, Ee)))), [T, p]);
    return R ? Vt.default.createElement("div", {
        ref: te,
        style: Bi,
        className: "rfm-marquee-container " + n
    }, f && Vt.default.createElement("div", {
        style: Ui,
        className: "rfm-overlay"
    }), Vt.default.createElement("div", {
        className: "rfm-marquee",
        style: P,
        onAnimationIteration: y,
        onAnimationEnd: v
    }, Vt.default.createElement("div", {
        className: "rfm-initial-child-container",
        ref: de
    }, J.Children.map(p, N=>Vt.default.createElement("div", {
        style: T,
        className: "rfm-child"
    }, N))), L(E - 1)), Vt.default.createElement("div", {
        className: "rfm-marquee",
        style: P
    }, L(E))) : null
});
var wl = $p.default = D2;
const N2 = Array.from({
    length: 22
}, (t,e)=>e + 10)
  , F2 = Array.from({
    length: 11
}, (t,e)=>e + 10)
  , j2 = ()=>C.jsxs("div", {
    className: "flex min-h-screen h-auto flex-col gap-4 w-full justify-center items-center p-4 bg-[#F5F5DC] z-50 relative",
    children: [C.jsx(wl, {
        direction: "left",
        speed: 50,
        autoFill: !0,
        children: C.jsx("div", {
            className: "w-full flex flex-row",
            children: N2.map(t=>(console.log(t),
            C.jsx("img", {
                className: "object-contain z-50 h-[34vh] px-2",
                src: `billy_files/edit${t}.webp`
            })))
        })
    }), C.jsx(wl, {
        direction: "right",
        speed: 100,
        autoFill: !0,
        children: C.jsx("div", {
            className: "h-[30vh] mx-2 flex justify-center",
            children: C.jsx("img", {
                className: "object-contain z-50",
                src: "billy_files/banner.png"
            })
        })
    }), C.jsx(wl, {
        direction: "left",
        speed: 50,
        autoFill: !0,
        children: C.jsx("div", {
            className: "w-full flex flex-row",
            children: F2.map(t=>C.jsx("img", {
                className: "object-contain z-50 h-[34vh] px-2",
                src: `billy_files/mem${t}.webp`
            }))
        })
    })]
})
  , $2 = ()=>C.jsxs(C.Fragment, {
    children: [C.jsx(M2, {}), C.jsx(R2, {}), C.jsx(T2, {}), C.jsx(j2, {})]
});
kl.createRoot(document.getElementById("root")).render(C.jsx(xl.StrictMode, {
    children: C.jsx($2, {})
}));
