var Ji = function(t) {
  var e = t.data, r = t.url, n = t.filename, o = function(a) {
    var s = document.createElement("a");
    s.href = a, n && (s.download = n), document.body.appendChild(s), s.click(), document.body.removeChild(s);
  };
  if (r)
    return o(r), !0;
  if (e instanceof Blob) {
    var i = window.URL.createObjectURL(e);
    return o(i), window.URL.revokeObjectURL(i), !0;
  }
  return !1;
}, Ki = function(t, e) {
  return !e.some(function(r) {
    return !Object.prototype.hasOwnProperty.call(t, r);
  });
}, Lr = function() {
  var t = localStorage.getItem("language") || window.navigator.language, e = t.split("-")[0], r = { zh: "zh-CN", en: "en-US" };
  return ["zh", "en"].indexOf(e) > -1 ? r[e] : r.en;
};
function Gi(t, e) {
  var r = t.split("."), n = e.split("."), o = r.length, i = n.length, a = Math.min(o, i), s = 0;
  for (s; s < a; s++) {
    var l = parseInt(r[s]), c = parseInt(n[s]);
    if (l > c)
      return 1;
    if (l < c)
      return -1;
  }
  if (o > i) {
    for (var f = s; f < o; f++)
      if (parseInt(r[f]) != 0)
        return 1;
    return 0;
  } else if (o < i) {
    for (var f = s; f < i; f++)
      if (parseInt(n[f]) != 0)
        return -1;
    return 0;
  }
  return 0;
}
var Te = function() {
  return Te = Object.assign || function(e) {
    for (var r, n = 1, o = arguments.length; n < o; n++) {
      r = arguments[n];
      for (var i in r)
        Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
    }
    return e;
  }, Te.apply(this, arguments);
};
function ir(t, e) {
  return function() {
    return t.apply(e, arguments);
  };
}
const { toString: ar } = Object.prototype, { getPrototypeOf: yt } = Object, ht = ((t) => (e) => {
  const r = ar.call(e);
  return t[r] || (t[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), H = (t) => (t = t.toLowerCase(), (e) => ht(e) === t), Be = (t) => (e) => typeof e === t, { isArray: le } = Array, me = Be("undefined");
function Mr(t) {
  return t !== null && !me(t) && t.constructor !== null && !me(t.constructor) && G(t.constructor.isBuffer) && t.constructor.isBuffer(t);
}
const sr = H("ArrayBuffer");
function jr(t) {
  let e;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? e = ArrayBuffer.isView(t) : e = t && t.buffer && sr(t.buffer), e;
}
const qr = Be("string"), G = Be("function"), cr = Be("number"), mt = (t) => t !== null && typeof t == "object", Wr = (t) => t === !0 || t === !1, Ae = (t) => {
  if (ht(t) !== "object")
    return !1;
  const e = yt(t);
  return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(Symbol.toStringTag in t) && !(Symbol.iterator in t);
}, Hr = H("Date"), zr = H("File"), Vr = H("Blob"), Jr = H("FileList"), Kr = (t) => mt(t) && G(t.pipe), Gr = (t) => {
  const e = "[object FormData]";
  return t && (typeof FormData == "function" && t instanceof FormData || ar.call(t) === e || G(t.toString) && t.toString() === e);
}, Qr = H("URLSearchParams"), Xr = (t) => t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function ge(t, e, { allOwnKeys: r = !1 } = {}) {
  if (t === null || typeof t > "u")
    return;
  let n, o;
  if (typeof t != "object" && (t = [t]), le(t))
    for (n = 0, o = t.length; n < o; n++)
      e.call(null, t[n], n, t);
  else {
    const i = r ? Object.getOwnPropertyNames(t) : Object.keys(t), a = i.length;
    let s;
    for (n = 0; n < a; n++)
      s = i[n], e.call(null, t[s], s, t);
  }
}
function lr(t, e) {
  e = e.toLowerCase();
  const r = Object.keys(t);
  let n = r.length, o;
  for (; n-- > 0; )
    if (o = r[n], e === o.toLowerCase())
      return o;
  return null;
}
const ur = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), fr = (t) => !me(t) && t !== ur;
function rt() {
  const { caseless: t } = fr(this) && this || {}, e = {}, r = (n, o) => {
    const i = t && lr(e, o) || o;
    Ae(e[i]) && Ae(n) ? e[i] = rt(e[i], n) : Ae(n) ? e[i] = rt({}, n) : le(n) ? e[i] = n.slice() : e[i] = n;
  };
  for (let n = 0, o = arguments.length; n < o; n++)
    arguments[n] && ge(arguments[n], r);
  return e;
}
const Yr = (t, e, r, { allOwnKeys: n } = {}) => (ge(e, (o, i) => {
  r && G(o) ? t[i] = ir(o, r) : t[i] = o;
}, { allOwnKeys: n }), t), Zr = (t) => (t.charCodeAt(0) === 65279 && (t = t.slice(1)), t), en = (t, e, r, n) => {
  t.prototype = Object.create(e.prototype, n), t.prototype.constructor = t, Object.defineProperty(t, "super", {
    value: e.prototype
  }), r && Object.assign(t.prototype, r);
}, tn = (t, e, r, n) => {
  let o, i, a;
  const s = {};
  if (e = e || {}, t == null)
    return e;
  do {
    for (o = Object.getOwnPropertyNames(t), i = o.length; i-- > 0; )
      a = o[i], (!n || n(a, t, e)) && !s[a] && (e[a] = t[a], s[a] = !0);
    t = r !== !1 && yt(t);
  } while (t && (!r || r(t, e)) && t !== Object.prototype);
  return e;
}, rn = (t, e, r) => {
  t = String(t), (r === void 0 || r > t.length) && (r = t.length), r -= e.length;
  const n = t.indexOf(e, r);
  return n !== -1 && n === r;
}, nn = (t) => {
  if (!t)
    return null;
  if (le(t))
    return t;
  let e = t.length;
  if (!cr(e))
    return null;
  const r = new Array(e);
  for (; e-- > 0; )
    r[e] = t[e];
  return r;
}, on = ((t) => (e) => t && e instanceof t)(typeof Uint8Array < "u" && yt(Uint8Array)), an = (t, e) => {
  const n = (t && t[Symbol.iterator]).call(t);
  let o;
  for (; (o = n.next()) && !o.done; ) {
    const i = o.value;
    e.call(t, i[0], i[1]);
  }
}, sn = (t, e) => {
  let r;
  const n = [];
  for (; (r = t.exec(e)) !== null; )
    n.push(r);
  return n;
}, cn = H("HTMLFormElement"), ln = (t) => t.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(r, n, o) {
    return n.toUpperCase() + o;
  }
), Nt = (({ hasOwnProperty: t }) => (e, r) => t.call(e, r))(Object.prototype), un = H("RegExp"), pr = (t, e) => {
  const r = Object.getOwnPropertyDescriptors(t), n = {};
  ge(r, (o, i) => {
    e(o, i, t) !== !1 && (n[i] = o);
  }), Object.defineProperties(t, n);
}, fn = (t) => {
  pr(t, (e, r) => {
    if (G(t) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
      return !1;
    const n = t[r];
    if (G(n)) {
      if (e.enumerable = !1, "writable" in e) {
        e.writable = !1;
        return;
      }
      e.set || (e.set = () => {
        throw Error("Can not rewrite read-only method '" + r + "'");
      });
    }
  });
}, pn = (t, e) => {
  const r = {}, n = (o) => {
    o.forEach((i) => {
      r[i] = !0;
    });
  };
  return le(t) ? n(t) : n(String(t).split(e)), r;
}, dn = () => {
}, yn = (t, e) => (t = +t, Number.isFinite(t) ? t : e), Me = "abcdefghijklmnopqrstuvwxyz", Ft = "0123456789", dr = {
  DIGIT: Ft,
  ALPHA: Me,
  ALPHA_DIGIT: Me + Me.toUpperCase() + Ft
}, hn = (t = 16, e = dr.ALPHA_DIGIT) => {
  let r = "";
  const { length: n } = e;
  for (; t--; )
    r += e[Math.random() * n | 0];
  return r;
};
function mn(t) {
  return !!(t && G(t.append) && t[Symbol.toStringTag] === "FormData" && t[Symbol.iterator]);
}
const gn = (t) => {
  const e = new Array(10), r = (n, o) => {
    if (mt(n)) {
      if (e.indexOf(n) >= 0)
        return;
      if (!("toJSON" in n)) {
        e[o] = n;
        const i = le(n) ? [] : {};
        return ge(n, (a, s) => {
          const l = r(a, o + 1);
          !me(l) && (i[s] = l);
        }), e[o] = void 0, i;
      }
    }
    return n;
  };
  return r(t, 0);
}, u = {
  isArray: le,
  isArrayBuffer: sr,
  isBuffer: Mr,
  isFormData: Gr,
  isArrayBufferView: jr,
  isString: qr,
  isNumber: cr,
  isBoolean: Wr,
  isObject: mt,
  isPlainObject: Ae,
  isUndefined: me,
  isDate: Hr,
  isFile: zr,
  isBlob: Vr,
  isRegExp: un,
  isFunction: G,
  isStream: Kr,
  isURLSearchParams: Qr,
  isTypedArray: on,
  isFileList: Jr,
  forEach: ge,
  merge: rt,
  extend: Yr,
  trim: Xr,
  stripBOM: Zr,
  inherits: en,
  toFlatObject: tn,
  kindOf: ht,
  kindOfTest: H,
  endsWith: rn,
  toArray: nn,
  forEachEntry: an,
  matchAll: sn,
  isHTMLForm: cn,
  hasOwnProperty: Nt,
  hasOwnProp: Nt,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: pr,
  freezeMethods: fn,
  toObjectSet: pn,
  toCamelCase: ln,
  noop: dn,
  toFiniteNumber: yn,
  findKey: lr,
  global: ur,
  isContextDefined: fr,
  ALPHABET: dr,
  generateString: hn,
  isSpecCompliantForm: mn,
  toJSONObject: gn
};
function S(t, e, r, n, o) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = t, this.name = "AxiosError", e && (this.code = e), r && (this.config = r), n && (this.request = n), o && (this.response = o);
}
u.inherits(S, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: u.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const yr = S.prototype, hr = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((t) => {
  hr[t] = { value: t };
});
Object.defineProperties(S, hr);
Object.defineProperty(yr, "isAxiosError", { value: !0 });
S.from = (t, e, r, n, o, i) => {
  const a = Object.create(yr);
  return u.toFlatObject(t, a, function(l) {
    return l !== Error.prototype;
  }, (s) => s !== "isAxiosError"), S.call(a, t.message, e, r, n, o), a.cause = t, a.name = t.name, i && Object.assign(a, i), a;
};
const vn = null;
function nt(t) {
  return u.isPlainObject(t) || u.isArray(t);
}
function mr(t) {
  return u.endsWith(t, "[]") ? t.slice(0, -2) : t;
}
function Ct(t, e, r) {
  return t ? t.concat(e).map(function(o, i) {
    return o = mr(o), !r && i ? "[" + o + "]" : o;
  }).join(r ? "." : "") : e;
}
function Sn(t) {
  return u.isArray(t) && !t.some(nt);
}
const bn = u.toFlatObject(u, {}, null, function(e) {
  return /^is[A-Z]/.test(e);
});
function Ue(t, e, r) {
  if (!u.isObject(t))
    throw new TypeError("target must be an object");
  e = e || new FormData(), r = u.toFlatObject(r, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(m, O) {
    return !u.isUndefined(O[m]);
  });
  const n = r.metaTokens, o = r.visitor || f, i = r.dots, a = r.indexes, l = (r.Blob || typeof Blob < "u" && Blob) && u.isSpecCompliantForm(e);
  if (!u.isFunction(o))
    throw new TypeError("visitor must be a function");
  function c(p) {
    if (p === null)
      return "";
    if (u.isDate(p))
      return p.toISOString();
    if (!l && u.isBlob(p))
      throw new S("Blob is not supported. Use a Buffer instead.");
    return u.isArrayBuffer(p) || u.isTypedArray(p) ? l && typeof Blob == "function" ? new Blob([p]) : Buffer.from(p) : p;
  }
  function f(p, m, O) {
    let g = p;
    if (p && !O && typeof p == "object") {
      if (u.endsWith(m, "{}"))
        m = n ? m : m.slice(0, -2), p = JSON.stringify(p);
      else if (u.isArray(p) && Sn(p) || (u.isFileList(p) || u.endsWith(m, "[]")) && (g = u.toArray(p)))
        return m = mr(m), g.forEach(function(N, B) {
          !(u.isUndefined(N) || N === null) && e.append(
            // eslint-disable-next-line no-nested-ternary
            a === !0 ? Ct([m], B, i) : a === null ? m : m + "[]",
            c(N)
          );
        }), !1;
    }
    return nt(p) ? !0 : (e.append(Ct(O, m, i), c(p)), !1);
  }
  const d = [], y = Object.assign(bn, {
    defaultVisitor: f,
    convertValue: c,
    isVisitable: nt
  });
  function h(p, m) {
    if (!u.isUndefined(p)) {
      if (d.indexOf(p) !== -1)
        throw Error("Circular reference detected in " + m.join("."));
      d.push(p), u.forEach(p, function(g, A) {
        (!(u.isUndefined(g) || g === null) && o.call(
          e,
          g,
          u.isString(A) ? A.trim() : A,
          m,
          y
        )) === !0 && h(g, m ? m.concat(A) : [A]);
      }), d.pop();
    }
  }
  if (!u.isObject(t))
    throw new TypeError("data must be an object");
  return h(t), e;
}
function It(t) {
  const e = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g, function(n) {
    return e[n];
  });
}
function gt(t, e) {
  this._pairs = [], t && Ue(t, this, e);
}
const gr = gt.prototype;
gr.append = function(e, r) {
  this._pairs.push([e, r]);
};
gr.toString = function(e) {
  const r = e ? function(n) {
    return e.call(this, n, It);
  } : It;
  return this._pairs.map(function(o) {
    return r(o[0]) + "=" + r(o[1]);
  }, "").join("&");
};
function wn(t) {
  return encodeURIComponent(t).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function vr(t, e, r) {
  if (!e)
    return t;
  const n = r && r.encode || wn, o = r && r.serialize;
  let i;
  if (o ? i = o(e, r) : i = u.isURLSearchParams(e) ? e.toString() : new gt(e, r).toString(n), i) {
    const a = t.indexOf("#");
    a !== -1 && (t = t.slice(0, a)), t += (t.indexOf("?") === -1 ? "?" : "&") + i;
  }
  return t;
}
class En {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(e, r, n) {
    return this.handlers.push({
      fulfilled: e,
      rejected: r,
      synchronous: n ? n.synchronous : !1,
      runWhen: n ? n.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(e) {
    this.handlers[e] && (this.handlers[e] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(e) {
    u.forEach(this.handlers, function(n) {
      n !== null && e(n);
    });
  }
}
const _t = En, Sr = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, On = typeof URLSearchParams < "u" ? URLSearchParams : gt, An = FormData, Pn = (() => {
  let t;
  return typeof navigator < "u" && ((t = navigator.product) === "ReactNative" || t === "NativeScript" || t === "NS") ? !1 : typeof window < "u" && typeof document < "u";
})(), Rn = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), k = {
  isBrowser: !0,
  classes: {
    URLSearchParams: On,
    FormData: An,
    Blob
  },
  isStandardBrowserEnv: Pn,
  isStandardBrowserWebWorkerEnv: Rn,
  protocols: ["http", "https", "file", "blob", "url", "data"]
};
function xn(t, e) {
  return Ue(t, new k.classes.URLSearchParams(), Object.assign({
    visitor: function(r, n, o, i) {
      return k.isNode && u.isBuffer(r) ? (this.append(n, r.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
    }
  }, e));
}
function Tn(t) {
  return u.matchAll(/\w+|\[(\w*)]/g, t).map((e) => e[0] === "[]" ? "" : e[1] || e[0]);
}
function Nn(t) {
  const e = {}, r = Object.keys(t);
  let n;
  const o = r.length;
  let i;
  for (n = 0; n < o; n++)
    i = r[n], e[i] = t[i];
  return e;
}
function br(t) {
  function e(r, n, o, i) {
    let a = r[i++];
    const s = Number.isFinite(+a), l = i >= r.length;
    return a = !a && u.isArray(o) ? o.length : a, l ? (u.hasOwnProp(o, a) ? o[a] = [o[a], n] : o[a] = n, !s) : ((!o[a] || !u.isObject(o[a])) && (o[a] = []), e(r, n, o[a], i) && u.isArray(o[a]) && (o[a] = Nn(o[a])), !s);
  }
  if (u.isFormData(t) && u.isFunction(t.entries)) {
    const r = {};
    return u.forEachEntry(t, (n, o) => {
      e(Tn(n), o, r, 0);
    }), r;
  }
  return null;
}
const Fn = {
  "Content-Type": void 0
};
function Cn(t, e, r) {
  if (u.isString(t))
    try {
      return (e || JSON.parse)(t), u.trim(t);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (r || JSON.stringify)(t);
}
const De = {
  transitional: Sr,
  adapter: ["xhr", "http"],
  transformRequest: [function(e, r) {
    const n = r.getContentType() || "", o = n.indexOf("application/json") > -1, i = u.isObject(e);
    if (i && u.isHTMLForm(e) && (e = new FormData(e)), u.isFormData(e))
      return o && o ? JSON.stringify(br(e)) : e;
    if (u.isArrayBuffer(e) || u.isBuffer(e) || u.isStream(e) || u.isFile(e) || u.isBlob(e))
      return e;
    if (u.isArrayBufferView(e))
      return e.buffer;
    if (u.isURLSearchParams(e))
      return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
    let s;
    if (i) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return xn(e, this.formSerializer).toString();
      if ((s = u.isFileList(e)) || n.indexOf("multipart/form-data") > -1) {
        const l = this.env && this.env.FormData;
        return Ue(
          s ? { "files[]": e } : e,
          l && new l(),
          this.formSerializer
        );
      }
    }
    return i || o ? (r.setContentType("application/json", !1), Cn(e)) : e;
  }],
  transformResponse: [function(e) {
    const r = this.transitional || De.transitional, n = r && r.forcedJSONParsing, o = this.responseType === "json";
    if (e && u.isString(e) && (n && !this.responseType || o)) {
      const a = !(r && r.silentJSONParsing) && o;
      try {
        return JSON.parse(e);
      } catch (s) {
        if (a)
          throw s.name === "SyntaxError" ? S.from(s, S.ERR_BAD_RESPONSE, this, null, this.response) : s;
      }
    }
    return e;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: k.classes.FormData,
    Blob: k.classes.Blob
  },
  validateStatus: function(e) {
    return e >= 200 && e < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*"
    }
  }
};
u.forEach(["delete", "get", "head"], function(e) {
  De.headers[e] = {};
});
u.forEach(["post", "put", "patch"], function(e) {
  De.headers[e] = u.merge(Fn);
});
const vt = De, In = u.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), _n = (t) => {
  const e = {};
  let r, n, o;
  return t && t.split(`
`).forEach(function(a) {
    o = a.indexOf(":"), r = a.substring(0, o).trim().toLowerCase(), n = a.substring(o + 1).trim(), !(!r || e[r] && In[r]) && (r === "set-cookie" ? e[r] ? e[r].push(n) : e[r] = [n] : e[r] = e[r] ? e[r] + ", " + n : n);
  }), e;
}, Bt = Symbol("internals");
function fe(t) {
  return t && String(t).trim().toLowerCase();
}
function Pe(t) {
  return t === !1 || t == null ? t : u.isArray(t) ? t.map(Pe) : String(t);
}
function Bn(t) {
  const e = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = r.exec(t); )
    e[n[1]] = n[2];
  return e;
}
function Un(t) {
  return /^[-_a-zA-Z]+$/.test(t.trim());
}
function je(t, e, r, n) {
  if (u.isFunction(n))
    return n.call(this, e, r);
  if (u.isString(e)) {
    if (u.isString(n))
      return e.indexOf(n) !== -1;
    if (u.isRegExp(n))
      return n.test(e);
  }
}
function Dn(t) {
  return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, r, n) => r.toUpperCase() + n);
}
function $n(t, e) {
  const r = u.toCamelCase(" " + e);
  ["get", "set", "has"].forEach((n) => {
    Object.defineProperty(t, n + r, {
      value: function(o, i, a) {
        return this[n].call(this, e, o, i, a);
      },
      configurable: !0
    });
  });
}
class $e {
  constructor(e) {
    e && this.set(e);
  }
  set(e, r, n) {
    const o = this;
    function i(s, l, c) {
      const f = fe(l);
      if (!f)
        throw new Error("header name must be a non-empty string");
      const d = u.findKey(o, f);
      (!d || o[d] === void 0 || c === !0 || c === void 0 && o[d] !== !1) && (o[d || l] = Pe(s));
    }
    const a = (s, l) => u.forEach(s, (c, f) => i(c, f, l));
    return u.isPlainObject(e) || e instanceof this.constructor ? a(e, r) : u.isString(e) && (e = e.trim()) && !Un(e) ? a(_n(e), r) : e != null && i(r, e, n), this;
  }
  get(e, r) {
    if (e = fe(e), e) {
      const n = u.findKey(this, e);
      if (n) {
        const o = this[n];
        if (!r)
          return o;
        if (r === !0)
          return Bn(o);
        if (u.isFunction(r))
          return r.call(this, o, n);
        if (u.isRegExp(r))
          return r.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(e, r) {
    if (e = fe(e), e) {
      const n = u.findKey(this, e);
      return !!(n && this[n] !== void 0 && (!r || je(this, this[n], n, r)));
    }
    return !1;
  }
  delete(e, r) {
    const n = this;
    let o = !1;
    function i(a) {
      if (a = fe(a), a) {
        const s = u.findKey(n, a);
        s && (!r || je(n, n[s], s, r)) && (delete n[s], o = !0);
      }
    }
    return u.isArray(e) ? e.forEach(i) : i(e), o;
  }
  clear(e) {
    const r = Object.keys(this);
    let n = r.length, o = !1;
    for (; n--; ) {
      const i = r[n];
      (!e || je(this, this[i], i, e)) && (delete this[i], o = !0);
    }
    return o;
  }
  normalize(e) {
    const r = this, n = {};
    return u.forEach(this, (o, i) => {
      const a = u.findKey(n, i);
      if (a) {
        r[a] = Pe(o), delete r[i];
        return;
      }
      const s = e ? Dn(i) : String(i).trim();
      s !== i && delete r[i], r[s] = Pe(o), n[s] = !0;
    }), this;
  }
  concat(...e) {
    return this.constructor.concat(this, ...e);
  }
  toJSON(e) {
    const r = /* @__PURE__ */ Object.create(null);
    return u.forEach(this, (n, o) => {
      n != null && n !== !1 && (r[o] = e && u.isArray(n) ? n.join(", ") : n);
    }), r;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([e, r]) => e + ": " + r).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(e) {
    return e instanceof this ? e : new this(e);
  }
  static concat(e, ...r) {
    const n = new this(e);
    return r.forEach((o) => n.set(o)), n;
  }
  static accessor(e) {
    const n = (this[Bt] = this[Bt] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function i(a) {
      const s = fe(a);
      n[s] || ($n(o, a), n[s] = !0);
    }
    return u.isArray(e) ? e.forEach(i) : i(e), this;
  }
}
$e.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
u.freezeMethods($e.prototype);
u.freezeMethods($e);
const W = $e;
function qe(t, e) {
  const r = this || vt, n = e || r, o = W.from(n.headers);
  let i = n.data;
  return u.forEach(t, function(s) {
    i = s.call(r, i, o.normalize(), e ? e.status : void 0);
  }), o.normalize(), i;
}
function wr(t) {
  return !!(t && t.__CANCEL__);
}
function ve(t, e, r) {
  S.call(this, t ?? "canceled", S.ERR_CANCELED, e, r), this.name = "CanceledError";
}
u.inherits(ve, S, {
  __CANCEL__: !0
});
function kn(t, e, r) {
  const n = r.config.validateStatus;
  !r.status || !n || n(r.status) ? t(r) : e(new S(
    "Request failed with status code " + r.status,
    [S.ERR_BAD_REQUEST, S.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
    r.config,
    r.request,
    r
  ));
}
const Ln = k.isStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  function() {
    return {
      write: function(r, n, o, i, a, s) {
        const l = [];
        l.push(r + "=" + encodeURIComponent(n)), u.isNumber(o) && l.push("expires=" + new Date(o).toGMTString()), u.isString(i) && l.push("path=" + i), u.isString(a) && l.push("domain=" + a), s === !0 && l.push("secure"), document.cookie = l.join("; ");
      },
      read: function(r) {
        const n = document.cookie.match(new RegExp("(^|;\\s*)(" + r + ")=([^;]*)"));
        return n ? decodeURIComponent(n[3]) : null;
      },
      remove: function(r) {
        this.write(r, "", Date.now() - 864e5);
      }
    };
  }()
) : (
  // Non standard browser env (web workers, react-native) lack needed support.
  function() {
    return {
      write: function() {
      },
      read: function() {
        return null;
      },
      remove: function() {
      }
    };
  }()
);
function Mn(t) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);
}
function jn(t, e) {
  return e ? t.replace(/\/+$/, "") + "/" + e.replace(/^\/+/, "") : t;
}
function Er(t, e) {
  return t && !Mn(e) ? jn(t, e) : e;
}
const qn = k.isStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const e = /(msie|trident)/i.test(navigator.userAgent), r = document.createElement("a");
    let n;
    function o(i) {
      let a = i;
      return e && (r.setAttribute("href", a), a = r.href), r.setAttribute("href", a), {
        href: r.href,
        protocol: r.protocol ? r.protocol.replace(/:$/, "") : "",
        host: r.host,
        search: r.search ? r.search.replace(/^\?/, "") : "",
        hash: r.hash ? r.hash.replace(/^#/, "") : "",
        hostname: r.hostname,
        port: r.port,
        pathname: r.pathname.charAt(0) === "/" ? r.pathname : "/" + r.pathname
      };
    }
    return n = o(window.location.href), function(a) {
      const s = u.isString(a) ? o(a) : a;
      return s.protocol === n.protocol && s.host === n.host;
    };
  }()
) : (
  // Non standard browser envs (web workers, react-native) lack needed support.
  function() {
    return function() {
      return !0;
    };
  }()
);
function Wn(t) {
  const e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
  return e && e[1] || "";
}
function Hn(t, e) {
  t = t || 10;
  const r = new Array(t), n = new Array(t);
  let o = 0, i = 0, a;
  return e = e !== void 0 ? e : 1e3, function(l) {
    const c = Date.now(), f = n[i];
    a || (a = c), r[o] = l, n[o] = c;
    let d = i, y = 0;
    for (; d !== o; )
      y += r[d++], d = d % t;
    if (o = (o + 1) % t, o === i && (i = (i + 1) % t), c - a < e)
      return;
    const h = f && c - f;
    return h ? Math.round(y * 1e3 / h) : void 0;
  };
}
function Ut(t, e) {
  let r = 0;
  const n = Hn(50, 250);
  return (o) => {
    const i = o.loaded, a = o.lengthComputable ? o.total : void 0, s = i - r, l = n(s), c = i <= a;
    r = i;
    const f = {
      loaded: i,
      total: a,
      progress: a ? i / a : void 0,
      bytes: s,
      rate: l || void 0,
      estimated: l && a && c ? (a - i) / l : void 0,
      event: o
    };
    f[e ? "download" : "upload"] = !0, t(f);
  };
}
const zn = typeof XMLHttpRequest < "u", Vn = zn && function(t) {
  return new Promise(function(r, n) {
    let o = t.data;
    const i = W.from(t.headers).normalize(), a = t.responseType;
    let s;
    function l() {
      t.cancelToken && t.cancelToken.unsubscribe(s), t.signal && t.signal.removeEventListener("abort", s);
    }
    u.isFormData(o) && (k.isStandardBrowserEnv || k.isStandardBrowserWebWorkerEnv) && i.setContentType(!1);
    let c = new XMLHttpRequest();
    if (t.auth) {
      const h = t.auth.username || "", p = t.auth.password ? unescape(encodeURIComponent(t.auth.password)) : "";
      i.set("Authorization", "Basic " + btoa(h + ":" + p));
    }
    const f = Er(t.baseURL, t.url);
    c.open(t.method.toUpperCase(), vr(f, t.params, t.paramsSerializer), !0), c.timeout = t.timeout;
    function d() {
      if (!c)
        return;
      const h = W.from(
        "getAllResponseHeaders" in c && c.getAllResponseHeaders()
      ), m = {
        data: !a || a === "text" || a === "json" ? c.responseText : c.response,
        status: c.status,
        statusText: c.statusText,
        headers: h,
        config: t,
        request: c
      };
      kn(function(g) {
        r(g), l();
      }, function(g) {
        n(g), l();
      }, m), c = null;
    }
    if ("onloadend" in c ? c.onloadend = d : c.onreadystatechange = function() {
      !c || c.readyState !== 4 || c.status === 0 && !(c.responseURL && c.responseURL.indexOf("file:") === 0) || setTimeout(d);
    }, c.onabort = function() {
      c && (n(new S("Request aborted", S.ECONNABORTED, t, c)), c = null);
    }, c.onerror = function() {
      n(new S("Network Error", S.ERR_NETWORK, t, c)), c = null;
    }, c.ontimeout = function() {
      let p = t.timeout ? "timeout of " + t.timeout + "ms exceeded" : "timeout exceeded";
      const m = t.transitional || Sr;
      t.timeoutErrorMessage && (p = t.timeoutErrorMessage), n(new S(
        p,
        m.clarifyTimeoutError ? S.ETIMEDOUT : S.ECONNABORTED,
        t,
        c
      )), c = null;
    }, k.isStandardBrowserEnv) {
      const h = (t.withCredentials || qn(f)) && t.xsrfCookieName && Ln.read(t.xsrfCookieName);
      h && i.set(t.xsrfHeaderName, h);
    }
    o === void 0 && i.setContentType(null), "setRequestHeader" in c && u.forEach(i.toJSON(), function(p, m) {
      c.setRequestHeader(m, p);
    }), u.isUndefined(t.withCredentials) || (c.withCredentials = !!t.withCredentials), a && a !== "json" && (c.responseType = t.responseType), typeof t.onDownloadProgress == "function" && c.addEventListener("progress", Ut(t.onDownloadProgress, !0)), typeof t.onUploadProgress == "function" && c.upload && c.upload.addEventListener("progress", Ut(t.onUploadProgress)), (t.cancelToken || t.signal) && (s = (h) => {
      c && (n(!h || h.type ? new ve(null, t, c) : h), c.abort(), c = null);
    }, t.cancelToken && t.cancelToken.subscribe(s), t.signal && (t.signal.aborted ? s() : t.signal.addEventListener("abort", s)));
    const y = Wn(f);
    if (y && k.protocols.indexOf(y) === -1) {
      n(new S("Unsupported protocol " + y + ":", S.ERR_BAD_REQUEST, t));
      return;
    }
    c.send(o || null);
  });
}, Re = {
  http: vn,
  xhr: Vn
};
u.forEach(Re, (t, e) => {
  if (t) {
    try {
      Object.defineProperty(t, "name", { value: e });
    } catch {
    }
    Object.defineProperty(t, "adapterName", { value: e });
  }
});
const Jn = {
  getAdapter: (t) => {
    t = u.isArray(t) ? t : [t];
    const { length: e } = t;
    let r, n;
    for (let o = 0; o < e && (r = t[o], !(n = u.isString(r) ? Re[r.toLowerCase()] : r)); o++)
      ;
    if (!n)
      throw n === !1 ? new S(
        `Adapter ${r} is not supported by the environment`,
        "ERR_NOT_SUPPORT"
      ) : new Error(
        u.hasOwnProp(Re, r) ? `Adapter '${r}' is not available in the build` : `Unknown adapter '${r}'`
      );
    if (!u.isFunction(n))
      throw new TypeError("adapter is not a function");
    return n;
  },
  adapters: Re
};
function We(t) {
  if (t.cancelToken && t.cancelToken.throwIfRequested(), t.signal && t.signal.aborted)
    throw new ve(null, t);
}
function Dt(t) {
  return We(t), t.headers = W.from(t.headers), t.data = qe.call(
    t,
    t.transformRequest
  ), ["post", "put", "patch"].indexOf(t.method) !== -1 && t.headers.setContentType("application/x-www-form-urlencoded", !1), Jn.getAdapter(t.adapter || vt.adapter)(t).then(function(n) {
    return We(t), n.data = qe.call(
      t,
      t.transformResponse,
      n
    ), n.headers = W.from(n.headers), n;
  }, function(n) {
    return wr(n) || (We(t), n && n.response && (n.response.data = qe.call(
      t,
      t.transformResponse,
      n.response
    ), n.response.headers = W.from(n.response.headers))), Promise.reject(n);
  });
}
const $t = (t) => t instanceof W ? t.toJSON() : t;
function ie(t, e) {
  e = e || {};
  const r = {};
  function n(c, f, d) {
    return u.isPlainObject(c) && u.isPlainObject(f) ? u.merge.call({ caseless: d }, c, f) : u.isPlainObject(f) ? u.merge({}, f) : u.isArray(f) ? f.slice() : f;
  }
  function o(c, f, d) {
    if (u.isUndefined(f)) {
      if (!u.isUndefined(c))
        return n(void 0, c, d);
    } else
      return n(c, f, d);
  }
  function i(c, f) {
    if (!u.isUndefined(f))
      return n(void 0, f);
  }
  function a(c, f) {
    if (u.isUndefined(f)) {
      if (!u.isUndefined(c))
        return n(void 0, c);
    } else
      return n(void 0, f);
  }
  function s(c, f, d) {
    if (d in e)
      return n(c, f);
    if (d in t)
      return n(void 0, c);
  }
  const l = {
    url: i,
    method: i,
    data: i,
    baseURL: a,
    transformRequest: a,
    transformResponse: a,
    paramsSerializer: a,
    timeout: a,
    timeoutMessage: a,
    withCredentials: a,
    adapter: a,
    responseType: a,
    xsrfCookieName: a,
    xsrfHeaderName: a,
    onUploadProgress: a,
    onDownloadProgress: a,
    decompress: a,
    maxContentLength: a,
    maxBodyLength: a,
    beforeRedirect: a,
    transport: a,
    httpAgent: a,
    httpsAgent: a,
    cancelToken: a,
    socketPath: a,
    responseEncoding: a,
    validateStatus: s,
    headers: (c, f) => o($t(c), $t(f), !0)
  };
  return u.forEach(Object.keys(t).concat(Object.keys(e)), function(f) {
    const d = l[f] || o, y = d(t[f], e[f], f);
    u.isUndefined(y) && d !== s || (r[f] = y);
  }), r;
}
const Or = "1.3.2", St = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((t, e) => {
  St[t] = function(n) {
    return typeof n === t || "a" + (e < 1 ? "n " : " ") + t;
  };
});
const kt = {};
St.transitional = function(e, r, n) {
  function o(i, a) {
    return "[Axios v" + Or + "] Transitional option '" + i + "'" + a + (n ? ". " + n : "");
  }
  return (i, a, s) => {
    if (e === !1)
      throw new S(
        o(a, " has been removed" + (r ? " in " + r : "")),
        S.ERR_DEPRECATED
      );
    return r && !kt[a] && (kt[a] = !0, console.warn(
      o(
        a,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), e ? e(i, a, s) : !0;
  };
};
function Kn(t, e, r) {
  if (typeof t != "object")
    throw new S("options must be an object", S.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(t);
  let o = n.length;
  for (; o-- > 0; ) {
    const i = n[o], a = e[i];
    if (a) {
      const s = t[i], l = s === void 0 || a(s, i, t);
      if (l !== !0)
        throw new S("option " + i + " must be " + l, S.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new S("Unknown option " + i, S.ERR_BAD_OPTION);
  }
}
const ot = {
  assertOptions: Kn,
  validators: St
}, V = ot.validators;
class Ne {
  constructor(e) {
    this.defaults = e, this.interceptors = {
      request: new _t(),
      response: new _t()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  request(e, r) {
    typeof e == "string" ? (r = r || {}, r.url = e) : r = e || {}, r = ie(this.defaults, r);
    const { transitional: n, paramsSerializer: o, headers: i } = r;
    n !== void 0 && ot.assertOptions(n, {
      silentJSONParsing: V.transitional(V.boolean),
      forcedJSONParsing: V.transitional(V.boolean),
      clarifyTimeoutError: V.transitional(V.boolean)
    }, !1), o !== void 0 && ot.assertOptions(o, {
      encode: V.function,
      serialize: V.function
    }, !0), r.method = (r.method || this.defaults.method || "get").toLowerCase();
    let a;
    a = i && u.merge(
      i.common,
      i[r.method]
    ), a && u.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (p) => {
        delete i[p];
      }
    ), r.headers = W.concat(a, i);
    const s = [];
    let l = !0;
    this.interceptors.request.forEach(function(m) {
      typeof m.runWhen == "function" && m.runWhen(r) === !1 || (l = l && m.synchronous, s.unshift(m.fulfilled, m.rejected));
    });
    const c = [];
    this.interceptors.response.forEach(function(m) {
      c.push(m.fulfilled, m.rejected);
    });
    let f, d = 0, y;
    if (!l) {
      const p = [Dt.bind(this), void 0];
      for (p.unshift.apply(p, s), p.push.apply(p, c), y = p.length, f = Promise.resolve(r); d < y; )
        f = f.then(p[d++], p[d++]);
      return f;
    }
    y = s.length;
    let h = r;
    for (d = 0; d < y; ) {
      const p = s[d++], m = s[d++];
      try {
        h = p(h);
      } catch (O) {
        m.call(this, O);
        break;
      }
    }
    try {
      f = Dt.call(this, h);
    } catch (p) {
      return Promise.reject(p);
    }
    for (d = 0, y = c.length; d < y; )
      f = f.then(c[d++], c[d++]);
    return f;
  }
  getUri(e) {
    e = ie(this.defaults, e);
    const r = Er(e.baseURL, e.url);
    return vr(r, e.params, e.paramsSerializer);
  }
}
u.forEach(["delete", "get", "head", "options"], function(e) {
  Ne.prototype[e] = function(r, n) {
    return this.request(ie(n || {}, {
      method: e,
      url: r,
      data: (n || {}).data
    }));
  };
});
u.forEach(["post", "put", "patch"], function(e) {
  function r(n) {
    return function(i, a, s) {
      return this.request(ie(s || {}, {
        method: e,
        headers: n ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: i,
        data: a
      }));
    };
  }
  Ne.prototype[e] = r(), Ne.prototype[e + "Form"] = r(!0);
});
const xe = Ne;
class bt {
  constructor(e) {
    if (typeof e != "function")
      throw new TypeError("executor must be a function.");
    let r;
    this.promise = new Promise(function(i) {
      r = i;
    });
    const n = this;
    this.promise.then((o) => {
      if (!n._listeners)
        return;
      let i = n._listeners.length;
      for (; i-- > 0; )
        n._listeners[i](o);
      n._listeners = null;
    }), this.promise.then = (o) => {
      let i;
      const a = new Promise((s) => {
        n.subscribe(s), i = s;
      }).then(o);
      return a.cancel = function() {
        n.unsubscribe(i);
      }, a;
    }, e(function(i, a, s) {
      n.reason || (n.reason = new ve(i, a, s), r(n.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(e) {
    if (this.reason) {
      e(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(e) : this._listeners = [e];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(e) {
    if (!this._listeners)
      return;
    const r = this._listeners.indexOf(e);
    r !== -1 && this._listeners.splice(r, 1);
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let e;
    return {
      token: new bt(function(o) {
        e = o;
      }),
      cancel: e
    };
  }
}
const Gn = bt;
function Qn(t) {
  return function(r) {
    return t.apply(null, r);
  };
}
function Xn(t) {
  return u.isObject(t) && t.isAxiosError === !0;
}
const it = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(it).forEach(([t, e]) => {
  it[e] = t;
});
const Yn = it;
function Ar(t) {
  const e = new xe(t), r = ir(xe.prototype.request, e);
  return u.extend(r, xe.prototype, e, { allOwnKeys: !0 }), u.extend(r, e, null, { allOwnKeys: !0 }), r.create = function(o) {
    return Ar(ie(t, o));
  }, r;
}
const P = Ar(vt);
P.Axios = xe;
P.CanceledError = ve;
P.CancelToken = Gn;
P.isCancel = wr;
P.VERSION = Or;
P.toFormData = Ue;
P.AxiosError = S;
P.Cancel = P.CanceledError;
P.all = function(e) {
  return Promise.all(e);
};
P.spread = Qn;
P.isAxiosError = Xn;
P.mergeConfig = ie;
P.AxiosHeaders = W;
P.formToJSON = (t) => br(u.isHTMLForm(t) ? new FormData(t) : t);
P.HttpStatusCode = Yn;
P.default = P;
const Lt = P;
function Zn(t) {
  if (t.__esModule)
    return t;
  var e = t.default;
  if (typeof e == "function") {
    var r = function n() {
      if (this instanceof n) {
        var o = [null];
        o.push.apply(o, arguments);
        var i = Function.bind.apply(e, o);
        return new i();
      }
      return e.apply(this, arguments);
    };
    r.prototype = e.prototype;
  } else
    r = {};
  return Object.defineProperty(r, "__esModule", { value: !0 }), Object.keys(t).forEach(function(n) {
    var o = Object.getOwnPropertyDescriptor(t, n);
    Object.defineProperty(r, n, o.get ? o : {
      enumerable: !0,
      get: function() {
        return t[n];
      }
    });
  }), r;
}
var eo = function() {
  if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function")
    return !1;
  if (typeof Symbol.iterator == "symbol")
    return !0;
  var e = {}, r = Symbol("test"), n = Object(r);
  if (typeof r == "string" || Object.prototype.toString.call(r) !== "[object Symbol]" || Object.prototype.toString.call(n) !== "[object Symbol]")
    return !1;
  var o = 42;
  e[r] = o;
  for (r in e)
    return !1;
  if (typeof Object.keys == "function" && Object.keys(e).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(e).length !== 0)
    return !1;
  var i = Object.getOwnPropertySymbols(e);
  if (i.length !== 1 || i[0] !== r || !Object.prototype.propertyIsEnumerable.call(e, r))
    return !1;
  if (typeof Object.getOwnPropertyDescriptor == "function") {
    var a = Object.getOwnPropertyDescriptor(e, r);
    if (a.value !== o || a.enumerable !== !0)
      return !1;
  }
  return !0;
}, Mt = typeof Symbol < "u" && Symbol, to = eo, ro = function() {
  return typeof Mt != "function" || typeof Symbol != "function" || typeof Mt("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : to();
}, no = "Function.prototype.bind called on incompatible ", He = Array.prototype.slice, oo = Object.prototype.toString, io = "[object Function]", ao = function(e) {
  var r = this;
  if (typeof r != "function" || oo.call(r) !== io)
    throw new TypeError(no + r);
  for (var n = He.call(arguments, 1), o, i = function() {
    if (this instanceof o) {
      var f = r.apply(
        this,
        n.concat(He.call(arguments))
      );
      return Object(f) === f ? f : this;
    } else
      return r.apply(
        e,
        n.concat(He.call(arguments))
      );
  }, a = Math.max(0, r.length - n.length), s = [], l = 0; l < a; l++)
    s.push("$" + l);
  if (o = Function("binder", "return function (" + s.join(",") + "){ return binder.apply(this,arguments); }")(i), r.prototype) {
    var c = function() {
    };
    c.prototype = r.prototype, o.prototype = new c(), c.prototype = null;
  }
  return o;
}, so = ao, wt = Function.prototype.bind || so, co = wt, lo = co.call(Function.call, Object.prototype.hasOwnProperty), v, ae = SyntaxError, Pr = Function, oe = TypeError, ze = function(t) {
  try {
    return Pr('"use strict"; return (' + t + ").constructor;")();
  } catch {
  }
}, ee = Object.getOwnPropertyDescriptor;
if (ee)
  try {
    ee({}, "");
  } catch {
    ee = null;
  }
var Ve = function() {
  throw new oe();
}, uo = ee ? function() {
  try {
    return arguments.callee, Ve;
  } catch {
    try {
      return ee(arguments, "callee").get;
    } catch {
      return Ve;
    }
  }
}() : Ve, re = ro(), D = Object.getPrototypeOf || function(t) {
  return t.__proto__;
}, ne = {}, fo = typeof Uint8Array > "u" ? v : D(Uint8Array), te = {
  "%AggregateError%": typeof AggregateError > "u" ? v : AggregateError,
  "%Array%": Array,
  "%ArrayBuffer%": typeof ArrayBuffer > "u" ? v : ArrayBuffer,
  "%ArrayIteratorPrototype%": re ? D([][Symbol.iterator]()) : v,
  "%AsyncFromSyncIteratorPrototype%": v,
  "%AsyncFunction%": ne,
  "%AsyncGenerator%": ne,
  "%AsyncGeneratorFunction%": ne,
  "%AsyncIteratorPrototype%": ne,
  "%Atomics%": typeof Atomics > "u" ? v : Atomics,
  "%BigInt%": typeof BigInt > "u" ? v : BigInt,
  "%BigInt64Array%": typeof BigInt64Array > "u" ? v : BigInt64Array,
  "%BigUint64Array%": typeof BigUint64Array > "u" ? v : BigUint64Array,
  "%Boolean%": Boolean,
  "%DataView%": typeof DataView > "u" ? v : DataView,
  "%Date%": Date,
  "%decodeURI%": decodeURI,
  "%decodeURIComponent%": decodeURIComponent,
  "%encodeURI%": encodeURI,
  "%encodeURIComponent%": encodeURIComponent,
  "%Error%": Error,
  "%eval%": eval,
  // eslint-disable-line no-eval
  "%EvalError%": EvalError,
  "%Float32Array%": typeof Float32Array > "u" ? v : Float32Array,
  "%Float64Array%": typeof Float64Array > "u" ? v : Float64Array,
  "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? v : FinalizationRegistry,
  "%Function%": Pr,
  "%GeneratorFunction%": ne,
  "%Int8Array%": typeof Int8Array > "u" ? v : Int8Array,
  "%Int16Array%": typeof Int16Array > "u" ? v : Int16Array,
  "%Int32Array%": typeof Int32Array > "u" ? v : Int32Array,
  "%isFinite%": isFinite,
  "%isNaN%": isNaN,
  "%IteratorPrototype%": re ? D(D([][Symbol.iterator]())) : v,
  "%JSON%": typeof JSON == "object" ? JSON : v,
  "%Map%": typeof Map > "u" ? v : Map,
  "%MapIteratorPrototype%": typeof Map > "u" || !re ? v : D((/* @__PURE__ */ new Map())[Symbol.iterator]()),
  "%Math%": Math,
  "%Number%": Number,
  "%Object%": Object,
  "%parseFloat%": parseFloat,
  "%parseInt%": parseInt,
  "%Promise%": typeof Promise > "u" ? v : Promise,
  "%Proxy%": typeof Proxy > "u" ? v : Proxy,
  "%RangeError%": RangeError,
  "%ReferenceError%": ReferenceError,
  "%Reflect%": typeof Reflect > "u" ? v : Reflect,
  "%RegExp%": RegExp,
  "%Set%": typeof Set > "u" ? v : Set,
  "%SetIteratorPrototype%": typeof Set > "u" || !re ? v : D((/* @__PURE__ */ new Set())[Symbol.iterator]()),
  "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? v : SharedArrayBuffer,
  "%String%": String,
  "%StringIteratorPrototype%": re ? D(""[Symbol.iterator]()) : v,
  "%Symbol%": re ? Symbol : v,
  "%SyntaxError%": ae,
  "%ThrowTypeError%": uo,
  "%TypedArray%": fo,
  "%TypeError%": oe,
  "%Uint8Array%": typeof Uint8Array > "u" ? v : Uint8Array,
  "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? v : Uint8ClampedArray,
  "%Uint16Array%": typeof Uint16Array > "u" ? v : Uint16Array,
  "%Uint32Array%": typeof Uint32Array > "u" ? v : Uint32Array,
  "%URIError%": URIError,
  "%WeakMap%": typeof WeakMap > "u" ? v : WeakMap,
  "%WeakRef%": typeof WeakRef > "u" ? v : WeakRef,
  "%WeakSet%": typeof WeakSet > "u" ? v : WeakSet
};
try {
  null.error;
} catch (t) {
  var po = D(D(t));
  te["%Error.prototype%"] = po;
}
var yo = function t(e) {
  var r;
  if (e === "%AsyncFunction%")
    r = ze("async function () {}");
  else if (e === "%GeneratorFunction%")
    r = ze("function* () {}");
  else if (e === "%AsyncGeneratorFunction%")
    r = ze("async function* () {}");
  else if (e === "%AsyncGenerator%") {
    var n = t("%AsyncGeneratorFunction%");
    n && (r = n.prototype);
  } else if (e === "%AsyncIteratorPrototype%") {
    var o = t("%AsyncGenerator%");
    o && (r = D(o.prototype));
  }
  return te[e] = r, r;
}, jt = {
  "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
  "%ArrayPrototype%": ["Array", "prototype"],
  "%ArrayProto_entries%": ["Array", "prototype", "entries"],
  "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
  "%ArrayProto_keys%": ["Array", "prototype", "keys"],
  "%ArrayProto_values%": ["Array", "prototype", "values"],
  "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
  "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
  "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
  "%BooleanPrototype%": ["Boolean", "prototype"],
  "%DataViewPrototype%": ["DataView", "prototype"],
  "%DatePrototype%": ["Date", "prototype"],
  "%ErrorPrototype%": ["Error", "prototype"],
  "%EvalErrorPrototype%": ["EvalError", "prototype"],
  "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
  "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
  "%FunctionPrototype%": ["Function", "prototype"],
  "%Generator%": ["GeneratorFunction", "prototype"],
  "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
  "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
  "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
  "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
  "%JSONParse%": ["JSON", "parse"],
  "%JSONStringify%": ["JSON", "stringify"],
  "%MapPrototype%": ["Map", "prototype"],
  "%NumberPrototype%": ["Number", "prototype"],
  "%ObjectPrototype%": ["Object", "prototype"],
  "%ObjProto_toString%": ["Object", "prototype", "toString"],
  "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
  "%PromisePrototype%": ["Promise", "prototype"],
  "%PromiseProto_then%": ["Promise", "prototype", "then"],
  "%Promise_all%": ["Promise", "all"],
  "%Promise_reject%": ["Promise", "reject"],
  "%Promise_resolve%": ["Promise", "resolve"],
  "%RangeErrorPrototype%": ["RangeError", "prototype"],
  "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
  "%RegExpPrototype%": ["RegExp", "prototype"],
  "%SetPrototype%": ["Set", "prototype"],
  "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
  "%StringPrototype%": ["String", "prototype"],
  "%SymbolPrototype%": ["Symbol", "prototype"],
  "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
  "%TypedArrayPrototype%": ["TypedArray", "prototype"],
  "%TypeErrorPrototype%": ["TypeError", "prototype"],
  "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
  "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
  "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
  "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
  "%URIErrorPrototype%": ["URIError", "prototype"],
  "%WeakMapPrototype%": ["WeakMap", "prototype"],
  "%WeakSetPrototype%": ["WeakSet", "prototype"]
}, Se = wt, Fe = lo, ho = Se.call(Function.call, Array.prototype.concat), mo = Se.call(Function.apply, Array.prototype.splice), qt = Se.call(Function.call, String.prototype.replace), Ce = Se.call(Function.call, String.prototype.slice), go = Se.call(Function.call, RegExp.prototype.exec), vo = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, So = /\\(\\)?/g, bo = function(e) {
  var r = Ce(e, 0, 1), n = Ce(e, -1);
  if (r === "%" && n !== "%")
    throw new ae("invalid intrinsic syntax, expected closing `%`");
  if (n === "%" && r !== "%")
    throw new ae("invalid intrinsic syntax, expected opening `%`");
  var o = [];
  return qt(e, vo, function(i, a, s, l) {
    o[o.length] = s ? qt(l, So, "$1") : a || i;
  }), o;
}, wo = function(e, r) {
  var n = e, o;
  if (Fe(jt, n) && (o = jt[n], n = "%" + o[0] + "%"), Fe(te, n)) {
    var i = te[n];
    if (i === ne && (i = yo(n)), typeof i > "u" && !r)
      throw new oe("intrinsic " + e + " exists, but is not available. Please file an issue!");
    return {
      alias: o,
      name: n,
      value: i
    };
  }
  throw new ae("intrinsic " + e + " does not exist!");
}, Et = function(e, r) {
  if (typeof e != "string" || e.length === 0)
    throw new oe("intrinsic name must be a non-empty string");
  if (arguments.length > 1 && typeof r != "boolean")
    throw new oe('"allowMissing" argument must be a boolean');
  if (go(/^%?[^%]*%?$/, e) === null)
    throw new ae("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
  var n = bo(e), o = n.length > 0 ? n[0] : "", i = wo("%" + o + "%", r), a = i.name, s = i.value, l = !1, c = i.alias;
  c && (o = c[0], mo(n, ho([0, 1], c)));
  for (var f = 1, d = !0; f < n.length; f += 1) {
    var y = n[f], h = Ce(y, 0, 1), p = Ce(y, -1);
    if ((h === '"' || h === "'" || h === "`" || p === '"' || p === "'" || p === "`") && h !== p)
      throw new ae("property names with quotes must have matching quotes");
    if ((y === "constructor" || !d) && (l = !0), o += "." + y, a = "%" + o + "%", Fe(te, a))
      s = te[a];
    else if (s != null) {
      if (!(y in s)) {
        if (!r)
          throw new oe("base intrinsic for " + e + " exists, but the property is not available.");
        return;
      }
      if (ee && f + 1 >= n.length) {
        var m = ee(s, y);
        d = !!m, d && "get" in m && !("originalValue" in m.get) ? s = m.get : s = s[y];
      } else
        d = Fe(s, y), s = s[y];
      d && !l && (te[a] = s);
    }
  }
  return s;
}, at = {}, Eo = {
  get exports() {
    return at;
  },
  set exports(t) {
    at = t;
  }
};
(function(t) {
  var e = wt, r = Et, n = r("%Function.prototype.apply%"), o = r("%Function.prototype.call%"), i = r("%Reflect.apply%", !0) || e.call(o, n), a = r("%Object.getOwnPropertyDescriptor%", !0), s = r("%Object.defineProperty%", !0), l = r("%Math.max%");
  if (s)
    try {
      s({}, "a", { value: 1 });
    } catch {
      s = null;
    }
  t.exports = function(d) {
    var y = i(e, o, arguments);
    if (a && s) {
      var h = a(y, "length");
      h.configurable && s(
        y,
        "length",
        { value: 1 + l(0, d.length - (arguments.length - 1)) }
      );
    }
    return y;
  };
  var c = function() {
    return i(e, n, arguments);
  };
  s ? s(t.exports, "apply", { value: c }) : t.exports.apply = c;
})(Eo);
var Rr = Et, xr = at, Oo = xr(Rr("String.prototype.indexOf")), Ao = function(e, r) {
  var n = Rr(e, !!r);
  return typeof n == "function" && Oo(e, ".prototype.") > -1 ? xr(n) : n;
};
const Po = {}, Ro = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Po
}, Symbol.toStringTag, { value: "Module" })), xo = /* @__PURE__ */ Zn(Ro);
var Ot = typeof Map == "function" && Map.prototype, Je = Object.getOwnPropertyDescriptor && Ot ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null, Ie = Ot && Je && typeof Je.get == "function" ? Je.get : null, Wt = Ot && Map.prototype.forEach, At = typeof Set == "function" && Set.prototype, Ke = Object.getOwnPropertyDescriptor && At ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null, _e = At && Ke && typeof Ke.get == "function" ? Ke.get : null, Ht = At && Set.prototype.forEach, To = typeof WeakMap == "function" && WeakMap.prototype, de = To ? WeakMap.prototype.has : null, No = typeof WeakSet == "function" && WeakSet.prototype, ye = No ? WeakSet.prototype.has : null, Fo = typeof WeakRef == "function" && WeakRef.prototype, zt = Fo ? WeakRef.prototype.deref : null, Co = Boolean.prototype.valueOf, Io = Object.prototype.toString, _o = Function.prototype.toString, Bo = String.prototype.match, Pt = String.prototype.slice, K = String.prototype.replace, Uo = String.prototype.toUpperCase, Vt = String.prototype.toLowerCase, Tr = RegExp.prototype.test, Jt = Array.prototype.concat, $ = Array.prototype.join, Do = Array.prototype.slice, Kt = Math.floor, st = typeof BigInt == "function" ? BigInt.prototype.valueOf : null, Ge = Object.getOwnPropertySymbols, ct = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null, se = typeof Symbol == "function" && typeof Symbol.iterator == "object", T = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === se || "symbol") ? Symbol.toStringTag : null, Nr = Object.prototype.propertyIsEnumerable, Gt = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(t) {
  return t.__proto__;
} : null);
function Qt(t, e) {
  if (t === 1 / 0 || t === -1 / 0 || t !== t || t && t > -1e3 && t < 1e3 || Tr.call(/e/, e))
    return e;
  var r = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
  if (typeof t == "number") {
    var n = t < 0 ? -Kt(-t) : Kt(t);
    if (n !== t) {
      var o = String(n), i = Pt.call(e, o.length + 1);
      return K.call(o, r, "$&_") + "." + K.call(K.call(i, /([0-9]{3})/g, "$&_"), /_$/, "");
    }
  }
  return K.call(e, r, "$&_");
}
var lt = xo, Xt = lt.custom, Yt = Cr(Xt) ? Xt : null, $o = function t(e, r, n, o) {
  var i = r || {};
  if (J(i, "quoteStyle") && i.quoteStyle !== "single" && i.quoteStyle !== "double")
    throw new TypeError('option "quoteStyle" must be "single" or "double"');
  if (J(i, "maxStringLength") && (typeof i.maxStringLength == "number" ? i.maxStringLength < 0 && i.maxStringLength !== 1 / 0 : i.maxStringLength !== null))
    throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
  var a = J(i, "customInspect") ? i.customInspect : !0;
  if (typeof a != "boolean" && a !== "symbol")
    throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
  if (J(i, "indent") && i.indent !== null && i.indent !== "	" && !(parseInt(i.indent, 10) === i.indent && i.indent > 0))
    throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
  if (J(i, "numericSeparator") && typeof i.numericSeparator != "boolean")
    throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
  var s = i.numericSeparator;
  if (typeof e > "u")
    return "undefined";
  if (e === null)
    return "null";
  if (typeof e == "boolean")
    return e ? "true" : "false";
  if (typeof e == "string")
    return _r(e, i);
  if (typeof e == "number") {
    if (e === 0)
      return 1 / 0 / e > 0 ? "0" : "-0";
    var l = String(e);
    return s ? Qt(e, l) : l;
  }
  if (typeof e == "bigint") {
    var c = String(e) + "n";
    return s ? Qt(e, c) : c;
  }
  var f = typeof i.depth > "u" ? 5 : i.depth;
  if (typeof n > "u" && (n = 0), n >= f && f > 0 && typeof e == "object")
    return ut(e) ? "[Array]" : "[Object]";
  var d = ti(i, n);
  if (typeof o > "u")
    o = [];
  else if (Ir(o, e) >= 0)
    return "[Circular]";
  function y(E, I, C) {
    if (I && (o = Do.call(o), o.push(I)), C) {
      var Y = {
        depth: i.depth
      };
      return J(i, "quoteStyle") && (Y.quoteStyle = i.quoteStyle), t(E, Y, n + 1, o);
    }
    return t(E, i, n + 1, o);
  }
  if (typeof e == "function" && !Zt(e)) {
    var h = Vo(e), p = we(e, y);
    return "[Function" + (h ? ": " + h : " (anonymous)") + "]" + (p.length > 0 ? " { " + $.call(p, ", ") + " }" : "");
  }
  if (Cr(e)) {
    var m = se ? K.call(String(e), /^(Symbol\(.*\))_[^)]*$/, "$1") : ct.call(e);
    return typeof e == "object" && !se ? pe(m) : m;
  }
  if (Yo(e)) {
    for (var O = "<" + Vt.call(String(e.nodeName)), g = e.attributes || [], A = 0; A < g.length; A++)
      O += " " + g[A].name + "=" + Fr(ko(g[A].value), "double", i);
    return O += ">", e.childNodes && e.childNodes.length && (O += "..."), O += "</" + Vt.call(String(e.nodeName)) + ">", O;
  }
  if (ut(e)) {
    if (e.length === 0)
      return "[]";
    var N = we(e, y);
    return d && !ei(N) ? "[" + ft(N, d) + "]" : "[ " + $.call(N, ", ") + " ]";
  }
  if (Mo(e)) {
    var B = we(e, y);
    return !("cause" in Error.prototype) && "cause" in e && !Nr.call(e, "cause") ? "{ [" + String(e) + "] " + $.call(Jt.call("[cause]: " + y(e.cause), B), ", ") + " }" : B.length === 0 ? "[" + String(e) + "]" : "{ [" + String(e) + "] " + $.call(B, ", ") + " }";
  }
  if (typeof e == "object" && a) {
    if (Yt && typeof e[Yt] == "function" && lt)
      return lt(e, { depth: f - n });
    if (a !== "symbol" && typeof e.inspect == "function")
      return e.inspect();
  }
  if (Jo(e)) {
    var X = [];
    return Wt && Wt.call(e, function(E, I) {
      X.push(y(I, e, !0) + " => " + y(E, e));
    }), er("Map", Ie.call(e), X, d);
  }
  if (Qo(e)) {
    var z = [];
    return Ht && Ht.call(e, function(E) {
      z.push(y(E, e));
    }), er("Set", _e.call(e), z, d);
  }
  if (Ko(e))
    return Qe("WeakMap");
  if (Xo(e))
    return Qe("WeakSet");
  if (Go(e))
    return Qe("WeakRef");
  if (qo(e))
    return pe(y(Number(e)));
  if (Ho(e))
    return pe(y(st.call(e)));
  if (Wo(e))
    return pe(Co.call(e));
  if (jo(e))
    return pe(y(String(e)));
  if (!Lo(e) && !Zt(e)) {
    var L = we(e, y), M = Gt ? Gt(e) === Object.prototype : e instanceof Object || e.constructor === Object, F = e instanceof Object ? "" : "null prototype", j = !M && T && Object(e) === e && T in e ? Pt.call(Q(e), 8, -1) : F ? "Object" : "", b = M || typeof e.constructor != "function" ? "" : e.constructor.name ? e.constructor.name + " " : "", w = b + (j || F ? "[" + $.call(Jt.call([], j || [], F || []), ": ") + "] " : "");
    return L.length === 0 ? w + "{}" : d ? w + "{" + ft(L, d) + "}" : w + "{ " + $.call(L, ", ") + " }";
  }
  return String(e);
};
function Fr(t, e, r) {
  var n = (r.quoteStyle || e) === "double" ? '"' : "'";
  return n + t + n;
}
function ko(t) {
  return K.call(String(t), /"/g, "&quot;");
}
function ut(t) {
  return Q(t) === "[object Array]" && (!T || !(typeof t == "object" && T in t));
}
function Lo(t) {
  return Q(t) === "[object Date]" && (!T || !(typeof t == "object" && T in t));
}
function Zt(t) {
  return Q(t) === "[object RegExp]" && (!T || !(typeof t == "object" && T in t));
}
function Mo(t) {
  return Q(t) === "[object Error]" && (!T || !(typeof t == "object" && T in t));
}
function jo(t) {
  return Q(t) === "[object String]" && (!T || !(typeof t == "object" && T in t));
}
function qo(t) {
  return Q(t) === "[object Number]" && (!T || !(typeof t == "object" && T in t));
}
function Wo(t) {
  return Q(t) === "[object Boolean]" && (!T || !(typeof t == "object" && T in t));
}
function Cr(t) {
  if (se)
    return t && typeof t == "object" && t instanceof Symbol;
  if (typeof t == "symbol")
    return !0;
  if (!t || typeof t != "object" || !ct)
    return !1;
  try {
    return ct.call(t), !0;
  } catch {
  }
  return !1;
}
function Ho(t) {
  if (!t || typeof t != "object" || !st)
    return !1;
  try {
    return st.call(t), !0;
  } catch {
  }
  return !1;
}
var zo = Object.prototype.hasOwnProperty || function(t) {
  return t in this;
};
function J(t, e) {
  return zo.call(t, e);
}
function Q(t) {
  return Io.call(t);
}
function Vo(t) {
  if (t.name)
    return t.name;
  var e = Bo.call(_o.call(t), /^function\s*([\w$]+)/);
  return e ? e[1] : null;
}
function Ir(t, e) {
  if (t.indexOf)
    return t.indexOf(e);
  for (var r = 0, n = t.length; r < n; r++)
    if (t[r] === e)
      return r;
  return -1;
}
function Jo(t) {
  if (!Ie || !t || typeof t != "object")
    return !1;
  try {
    Ie.call(t);
    try {
      _e.call(t);
    } catch {
      return !0;
    }
    return t instanceof Map;
  } catch {
  }
  return !1;
}
function Ko(t) {
  if (!de || !t || typeof t != "object")
    return !1;
  try {
    de.call(t, de);
    try {
      ye.call(t, ye);
    } catch {
      return !0;
    }
    return t instanceof WeakMap;
  } catch {
  }
  return !1;
}
function Go(t) {
  if (!zt || !t || typeof t != "object")
    return !1;
  try {
    return zt.call(t), !0;
  } catch {
  }
  return !1;
}
function Qo(t) {
  if (!_e || !t || typeof t != "object")
    return !1;
  try {
    _e.call(t);
    try {
      Ie.call(t);
    } catch {
      return !0;
    }
    return t instanceof Set;
  } catch {
  }
  return !1;
}
function Xo(t) {
  if (!ye || !t || typeof t != "object")
    return !1;
  try {
    ye.call(t, ye);
    try {
      de.call(t, de);
    } catch {
      return !0;
    }
    return t instanceof WeakSet;
  } catch {
  }
  return !1;
}
function Yo(t) {
  return !t || typeof t != "object" ? !1 : typeof HTMLElement < "u" && t instanceof HTMLElement ? !0 : typeof t.nodeName == "string" && typeof t.getAttribute == "function";
}
function _r(t, e) {
  if (t.length > e.maxStringLength) {
    var r = t.length - e.maxStringLength, n = "... " + r + " more character" + (r > 1 ? "s" : "");
    return _r(Pt.call(t, 0, e.maxStringLength), e) + n;
  }
  var o = K.call(K.call(t, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, Zo);
  return Fr(o, "single", e);
}
function Zo(t) {
  var e = t.charCodeAt(0), r = {
    8: "b",
    9: "t",
    10: "n",
    12: "f",
    13: "r"
  }[e];
  return r ? "\\" + r : "\\x" + (e < 16 ? "0" : "") + Uo.call(e.toString(16));
}
function pe(t) {
  return "Object(" + t + ")";
}
function Qe(t) {
  return t + " { ? }";
}
function er(t, e, r, n) {
  var o = n ? ft(r, n) : $.call(r, ", ");
  return t + " (" + e + ") {" + o + "}";
}
function ei(t) {
  for (var e = 0; e < t.length; e++)
    if (Ir(t[e], `
`) >= 0)
      return !1;
  return !0;
}
function ti(t, e) {
  var r;
  if (t.indent === "	")
    r = "	";
  else if (typeof t.indent == "number" && t.indent > 0)
    r = $.call(Array(t.indent + 1), " ");
  else
    return null;
  return {
    base: r,
    prev: $.call(Array(e + 1), r)
  };
}
function ft(t, e) {
  if (t.length === 0)
    return "";
  var r = `
` + e.prev + e.base;
  return r + $.call(t, "," + r) + `
` + e.prev;
}
function we(t, e) {
  var r = ut(t), n = [];
  if (r) {
    n.length = t.length;
    for (var o = 0; o < t.length; o++)
      n[o] = J(t, o) ? e(t[o], t) : "";
  }
  var i = typeof Ge == "function" ? Ge(t) : [], a;
  if (se) {
    a = {};
    for (var s = 0; s < i.length; s++)
      a["$" + i[s]] = i[s];
  }
  for (var l in t)
    J(t, l) && (r && String(Number(l)) === l && l < t.length || se && a["$" + l] instanceof Symbol || (Tr.call(/[^\w$]/, l) ? n.push(e(l, t) + ": " + e(t[l], t)) : n.push(l + ": " + e(t[l], t))));
  if (typeof Ge == "function")
    for (var c = 0; c < i.length; c++)
      Nr.call(t, i[c]) && n.push("[" + e(i[c]) + "]: " + e(t[i[c]], t));
  return n;
}
var Rt = Et, ue = Ao, ri = $o, ni = Rt("%TypeError%"), Ee = Rt("%WeakMap%", !0), Oe = Rt("%Map%", !0), oi = ue("WeakMap.prototype.get", !0), ii = ue("WeakMap.prototype.set", !0), ai = ue("WeakMap.prototype.has", !0), si = ue("Map.prototype.get", !0), ci = ue("Map.prototype.set", !0), li = ue("Map.prototype.has", !0), xt = function(t, e) {
  for (var r = t, n; (n = r.next) !== null; r = n)
    if (n.key === e)
      return r.next = n.next, n.next = t.next, t.next = n, n;
}, ui = function(t, e) {
  var r = xt(t, e);
  return r && r.value;
}, fi = function(t, e, r) {
  var n = xt(t, e);
  n ? n.value = r : t.next = {
    // eslint-disable-line no-param-reassign
    key: e,
    next: t.next,
    value: r
  };
}, pi = function(t, e) {
  return !!xt(t, e);
}, di = function() {
  var e, r, n, o = {
    assert: function(i) {
      if (!o.has(i))
        throw new ni("Side channel does not contain " + ri(i));
    },
    get: function(i) {
      if (Ee && i && (typeof i == "object" || typeof i == "function")) {
        if (e)
          return oi(e, i);
      } else if (Oe) {
        if (r)
          return si(r, i);
      } else if (n)
        return ui(n, i);
    },
    has: function(i) {
      if (Ee && i && (typeof i == "object" || typeof i == "function")) {
        if (e)
          return ai(e, i);
      } else if (Oe) {
        if (r)
          return li(r, i);
      } else if (n)
        return pi(n, i);
      return !1;
    },
    set: function(i, a) {
      Ee && i && (typeof i == "object" || typeof i == "function") ? (e || (e = new Ee()), ii(e, i, a)) : Oe ? (r || (r = new Oe()), ci(r, i, a)) : (n || (n = { key: {}, next: null }), fi(n, i, a));
    }
  };
  return o;
}, yi = String.prototype.replace, hi = /%20/g, Xe = {
  RFC1738: "RFC1738",
  RFC3986: "RFC3986"
}, Tt = {
  default: Xe.RFC3986,
  formatters: {
    RFC1738: function(t) {
      return yi.call(t, hi, "+");
    },
    RFC3986: function(t) {
      return String(t);
    }
  },
  RFC1738: Xe.RFC1738,
  RFC3986: Xe.RFC3986
}, mi = Tt, Ye = Object.prototype.hasOwnProperty, Z = Array.isArray, U = function() {
  for (var t = [], e = 0; e < 256; ++e)
    t.push("%" + ((e < 16 ? "0" : "") + e.toString(16)).toUpperCase());
  return t;
}(), gi = function(e) {
  for (; e.length > 1; ) {
    var r = e.pop(), n = r.obj[r.prop];
    if (Z(n)) {
      for (var o = [], i = 0; i < n.length; ++i)
        typeof n[i] < "u" && o.push(n[i]);
      r.obj[r.prop] = o;
    }
  }
}, Br = function(e, r) {
  for (var n = r && r.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, o = 0; o < e.length; ++o)
    typeof e[o] < "u" && (n[o] = e[o]);
  return n;
}, vi = function t(e, r, n) {
  if (!r)
    return e;
  if (typeof r != "object") {
    if (Z(e))
      e.push(r);
    else if (e && typeof e == "object")
      (n && (n.plainObjects || n.allowPrototypes) || !Ye.call(Object.prototype, r)) && (e[r] = !0);
    else
      return [e, r];
    return e;
  }
  if (!e || typeof e != "object")
    return [e].concat(r);
  var o = e;
  return Z(e) && !Z(r) && (o = Br(e, n)), Z(e) && Z(r) ? (r.forEach(function(i, a) {
    if (Ye.call(e, a)) {
      var s = e[a];
      s && typeof s == "object" && i && typeof i == "object" ? e[a] = t(s, i, n) : e.push(i);
    } else
      e[a] = i;
  }), e) : Object.keys(r).reduce(function(i, a) {
    var s = r[a];
    return Ye.call(i, a) ? i[a] = t(i[a], s, n) : i[a] = s, i;
  }, o);
}, Si = function(e, r) {
  return Object.keys(r).reduce(function(n, o) {
    return n[o] = r[o], n;
  }, e);
}, bi = function(t, e, r) {
  var n = t.replace(/\+/g, " ");
  if (r === "iso-8859-1")
    return n.replace(/%[0-9a-f]{2}/gi, unescape);
  try {
    return decodeURIComponent(n);
  } catch {
    return n;
  }
}, wi = function(e, r, n, o, i) {
  if (e.length === 0)
    return e;
  var a = e;
  if (typeof e == "symbol" ? a = Symbol.prototype.toString.call(e) : typeof e != "string" && (a = String(e)), n === "iso-8859-1")
    return escape(a).replace(/%u[0-9a-f]{4}/gi, function(f) {
      return "%26%23" + parseInt(f.slice(2), 16) + "%3B";
    });
  for (var s = "", l = 0; l < a.length; ++l) {
    var c = a.charCodeAt(l);
    if (c === 45 || c === 46 || c === 95 || c === 126 || c >= 48 && c <= 57 || c >= 65 && c <= 90 || c >= 97 && c <= 122 || i === mi.RFC1738 && (c === 40 || c === 41)) {
      s += a.charAt(l);
      continue;
    }
    if (c < 128) {
      s = s + U[c];
      continue;
    }
    if (c < 2048) {
      s = s + (U[192 | c >> 6] + U[128 | c & 63]);
      continue;
    }
    if (c < 55296 || c >= 57344) {
      s = s + (U[224 | c >> 12] + U[128 | c >> 6 & 63] + U[128 | c & 63]);
      continue;
    }
    l += 1, c = 65536 + ((c & 1023) << 10 | a.charCodeAt(l) & 1023), s += U[240 | c >> 18] + U[128 | c >> 12 & 63] + U[128 | c >> 6 & 63] + U[128 | c & 63];
  }
  return s;
}, Ei = function(e) {
  for (var r = [{ obj: { o: e }, prop: "o" }], n = [], o = 0; o < r.length; ++o)
    for (var i = r[o], a = i.obj[i.prop], s = Object.keys(a), l = 0; l < s.length; ++l) {
      var c = s[l], f = a[c];
      typeof f == "object" && f !== null && n.indexOf(f) === -1 && (r.push({ obj: a, prop: c }), n.push(f));
    }
  return gi(r), e;
}, Oi = function(e) {
  return Object.prototype.toString.call(e) === "[object RegExp]";
}, Ai = function(e) {
  return !e || typeof e != "object" ? !1 : !!(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e));
}, Pi = function(e, r) {
  return [].concat(e, r);
}, Ri = function(e, r) {
  if (Z(e)) {
    for (var n = [], o = 0; o < e.length; o += 1)
      n.push(r(e[o]));
    return n;
  }
  return r(e);
}, Ur = {
  arrayToObject: Br,
  assign: Si,
  combine: Pi,
  compact: Ei,
  decode: bi,
  encode: wi,
  isBuffer: Ai,
  isRegExp: Oi,
  maybeMap: Ri,
  merge: vi
}, Dr = di, pt = Ur, he = Tt, xi = Object.prototype.hasOwnProperty, tr = {
  brackets: function(e) {
    return e + "[]";
  },
  comma: "comma",
  indices: function(e, r) {
    return e + "[" + r + "]";
  },
  repeat: function(e) {
    return e;
  }
}, q = Array.isArray, Ti = String.prototype.split, Ni = Array.prototype.push, $r = function(t, e) {
  Ni.apply(t, q(e) ? e : [e]);
}, Fi = Date.prototype.toISOString, rr = he.default, x = {
  addQueryPrefix: !1,
  allowDots: !1,
  charset: "utf-8",
  charsetSentinel: !1,
  delimiter: "&",
  encode: !0,
  encoder: pt.encode,
  encodeValuesOnly: !1,
  format: rr,
  formatter: he.formatters[rr],
  // deprecated
  indices: !1,
  serializeDate: function(e) {
    return Fi.call(e);
  },
  skipNulls: !1,
  strictNullHandling: !1
}, Ci = function(e) {
  return typeof e == "string" || typeof e == "number" || typeof e == "boolean" || typeof e == "symbol" || typeof e == "bigint";
}, Ze = {}, Ii = function t(e, r, n, o, i, a, s, l, c, f, d, y, h, p, m, O) {
  for (var g = e, A = O, N = 0, B = !1; (A = A.get(Ze)) !== void 0 && !B; ) {
    var X = A.get(e);
    if (N += 1, typeof X < "u") {
      if (X === N)
        throw new RangeError("Cyclic object value");
      B = !0;
    }
    typeof A.get(Ze) > "u" && (N = 0);
  }
  if (typeof l == "function" ? g = l(r, g) : g instanceof Date ? g = d(g) : n === "comma" && q(g) && (g = pt.maybeMap(g, function(Le) {
    return Le instanceof Date ? d(Le) : Le;
  })), g === null) {
    if (i)
      return s && !p ? s(r, x.encoder, m, "key", y) : r;
    g = "";
  }
  if (Ci(g) || pt.isBuffer(g)) {
    if (s) {
      var z = p ? r : s(r, x.encoder, m, "key", y);
      if (n === "comma" && p) {
        for (var L = Ti.call(String(g), ","), M = "", F = 0; F < L.length; ++F)
          M += (F === 0 ? "" : ",") + h(s(L[F], x.encoder, m, "value", y));
        return [h(z) + (o && q(g) && L.length === 1 ? "[]" : "") + "=" + M];
      }
      return [h(z) + "=" + h(s(g, x.encoder, m, "value", y))];
    }
    return [h(r) + "=" + h(String(g))];
  }
  var j = [];
  if (typeof g > "u")
    return j;
  var b;
  if (n === "comma" && q(g))
    b = [{ value: g.length > 0 ? g.join(",") || null : void 0 }];
  else if (q(l))
    b = l;
  else {
    var w = Object.keys(g);
    b = c ? w.sort(c) : w;
  }
  for (var E = o && q(g) && g.length === 1 ? r + "[]" : r, I = 0; I < b.length; ++I) {
    var C = b[I], Y = typeof C == "object" && typeof C.value < "u" ? C.value : g[C];
    if (!(a && Y === null)) {
      var ke = q(g) ? typeof n == "function" ? n(E, C) : E : E + (f ? "." + C : "[" + C + "]");
      O.set(e, N);
      var be = Dr();
      be.set(Ze, O), $r(j, t(
        Y,
        ke,
        n,
        o,
        i,
        a,
        s,
        l,
        c,
        f,
        d,
        y,
        h,
        p,
        m,
        be
      ));
    }
  }
  return j;
}, _i = function(e) {
  if (!e)
    return x;
  if (e.encoder !== null && typeof e.encoder < "u" && typeof e.encoder != "function")
    throw new TypeError("Encoder has to be a function.");
  var r = e.charset || x.charset;
  if (typeof e.charset < "u" && e.charset !== "utf-8" && e.charset !== "iso-8859-1")
    throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
  var n = he.default;
  if (typeof e.format < "u") {
    if (!xi.call(he.formatters, e.format))
      throw new TypeError("Unknown format option provided.");
    n = e.format;
  }
  var o = he.formatters[n], i = x.filter;
  return (typeof e.filter == "function" || q(e.filter)) && (i = e.filter), {
    addQueryPrefix: typeof e.addQueryPrefix == "boolean" ? e.addQueryPrefix : x.addQueryPrefix,
    allowDots: typeof e.allowDots > "u" ? x.allowDots : !!e.allowDots,
    charset: r,
    charsetSentinel: typeof e.charsetSentinel == "boolean" ? e.charsetSentinel : x.charsetSentinel,
    delimiter: typeof e.delimiter > "u" ? x.delimiter : e.delimiter,
    encode: typeof e.encode == "boolean" ? e.encode : x.encode,
    encoder: typeof e.encoder == "function" ? e.encoder : x.encoder,
    encodeValuesOnly: typeof e.encodeValuesOnly == "boolean" ? e.encodeValuesOnly : x.encodeValuesOnly,
    filter: i,
    format: n,
    formatter: o,
    serializeDate: typeof e.serializeDate == "function" ? e.serializeDate : x.serializeDate,
    skipNulls: typeof e.skipNulls == "boolean" ? e.skipNulls : x.skipNulls,
    sort: typeof e.sort == "function" ? e.sort : null,
    strictNullHandling: typeof e.strictNullHandling == "boolean" ? e.strictNullHandling : x.strictNullHandling
  };
}, Bi = function(t, e) {
  var r = t, n = _i(e), o, i;
  typeof n.filter == "function" ? (i = n.filter, r = i("", r)) : q(n.filter) && (i = n.filter, o = i);
  var a = [];
  if (typeof r != "object" || r === null)
    return "";
  var s;
  e && e.arrayFormat in tr ? s = e.arrayFormat : e && "indices" in e ? s = e.indices ? "indices" : "repeat" : s = "indices";
  var l = tr[s];
  if (e && "commaRoundTrip" in e && typeof e.commaRoundTrip != "boolean")
    throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
  var c = l === "comma" && e && e.commaRoundTrip;
  o || (o = Object.keys(r)), n.sort && o.sort(n.sort);
  for (var f = Dr(), d = 0; d < o.length; ++d) {
    var y = o[d];
    n.skipNulls && r[y] === null || $r(a, Ii(
      r[y],
      y,
      l,
      c,
      n.strictNullHandling,
      n.skipNulls,
      n.encode ? n.encoder : null,
      n.filter,
      n.sort,
      n.allowDots,
      n.serializeDate,
      n.format,
      n.formatter,
      n.encodeValuesOnly,
      n.charset,
      f
    ));
  }
  var h = a.join(n.delimiter), p = n.addQueryPrefix === !0 ? "?" : "";
  return n.charsetSentinel && (n.charset === "iso-8859-1" ? p += "utf8=%26%2310003%3B&" : p += "utf8=%E2%9C%93&"), h.length > 0 ? p + h : "";
}, ce = Ur, dt = Object.prototype.hasOwnProperty, Ui = Array.isArray, R = {
  allowDots: !1,
  allowPrototypes: !1,
  allowSparse: !1,
  arrayLimit: 20,
  charset: "utf-8",
  charsetSentinel: !1,
  comma: !1,
  decoder: ce.decode,
  delimiter: "&",
  depth: 5,
  ignoreQueryPrefix: !1,
  interpretNumericEntities: !1,
  parameterLimit: 1e3,
  parseArrays: !0,
  plainObjects: !1,
  strictNullHandling: !1
}, Di = function(t) {
  return t.replace(/&#(\d+);/g, function(e, r) {
    return String.fromCharCode(parseInt(r, 10));
  });
}, kr = function(t, e) {
  return t && typeof t == "string" && e.comma && t.indexOf(",") > -1 ? t.split(",") : t;
}, $i = "utf8=%26%2310003%3B", ki = "utf8=%E2%9C%93", Li = function(e, r) {
  var n = {}, o = r.ignoreQueryPrefix ? e.replace(/^\?/, "") : e, i = r.parameterLimit === 1 / 0 ? void 0 : r.parameterLimit, a = o.split(r.delimiter, i), s = -1, l, c = r.charset;
  if (r.charsetSentinel)
    for (l = 0; l < a.length; ++l)
      a[l].indexOf("utf8=") === 0 && (a[l] === ki ? c = "utf-8" : a[l] === $i && (c = "iso-8859-1"), s = l, l = a.length);
  for (l = 0; l < a.length; ++l)
    if (l !== s) {
      var f = a[l], d = f.indexOf("]="), y = d === -1 ? f.indexOf("=") : d + 1, h, p;
      y === -1 ? (h = r.decoder(f, R.decoder, c, "key"), p = r.strictNullHandling ? null : "") : (h = r.decoder(f.slice(0, y), R.decoder, c, "key"), p = ce.maybeMap(
        kr(f.slice(y + 1), r),
        function(m) {
          return r.decoder(m, R.decoder, c, "value");
        }
      )), p && r.interpretNumericEntities && c === "iso-8859-1" && (p = Di(p)), f.indexOf("[]=") > -1 && (p = Ui(p) ? [p] : p), dt.call(n, h) ? n[h] = ce.combine(n[h], p) : n[h] = p;
    }
  return n;
}, Mi = function(t, e, r, n) {
  for (var o = n ? e : kr(e, r), i = t.length - 1; i >= 0; --i) {
    var a, s = t[i];
    if (s === "[]" && r.parseArrays)
      a = [].concat(o);
    else {
      a = r.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
      var l = s.charAt(0) === "[" && s.charAt(s.length - 1) === "]" ? s.slice(1, -1) : s, c = parseInt(l, 10);
      !r.parseArrays && l === "" ? a = { 0: o } : !isNaN(c) && s !== l && String(c) === l && c >= 0 && r.parseArrays && c <= r.arrayLimit ? (a = [], a[c] = o) : l !== "__proto__" && (a[l] = o);
    }
    o = a;
  }
  return o;
}, ji = function(e, r, n, o) {
  if (e) {
    var i = n.allowDots ? e.replace(/\.([^.[]+)/g, "[$1]") : e, a = /(\[[^[\]]*])/, s = /(\[[^[\]]*])/g, l = n.depth > 0 && a.exec(i), c = l ? i.slice(0, l.index) : i, f = [];
    if (c) {
      if (!n.plainObjects && dt.call(Object.prototype, c) && !n.allowPrototypes)
        return;
      f.push(c);
    }
    for (var d = 0; n.depth > 0 && (l = s.exec(i)) !== null && d < n.depth; ) {
      if (d += 1, !n.plainObjects && dt.call(Object.prototype, l[1].slice(1, -1)) && !n.allowPrototypes)
        return;
      f.push(l[1]);
    }
    return l && f.push("[" + i.slice(l.index) + "]"), Mi(f, r, n, o);
  }
}, qi = function(e) {
  if (!e)
    return R;
  if (e.decoder !== null && e.decoder !== void 0 && typeof e.decoder != "function")
    throw new TypeError("Decoder has to be a function.");
  if (typeof e.charset < "u" && e.charset !== "utf-8" && e.charset !== "iso-8859-1")
    throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
  var r = typeof e.charset > "u" ? R.charset : e.charset;
  return {
    allowDots: typeof e.allowDots > "u" ? R.allowDots : !!e.allowDots,
    allowPrototypes: typeof e.allowPrototypes == "boolean" ? e.allowPrototypes : R.allowPrototypes,
    allowSparse: typeof e.allowSparse == "boolean" ? e.allowSparse : R.allowSparse,
    arrayLimit: typeof e.arrayLimit == "number" ? e.arrayLimit : R.arrayLimit,
    charset: r,
    charsetSentinel: typeof e.charsetSentinel == "boolean" ? e.charsetSentinel : R.charsetSentinel,
    comma: typeof e.comma == "boolean" ? e.comma : R.comma,
    decoder: typeof e.decoder == "function" ? e.decoder : R.decoder,
    delimiter: typeof e.delimiter == "string" || ce.isRegExp(e.delimiter) ? e.delimiter : R.delimiter,
    // eslint-disable-next-line no-implicit-coercion, no-extra-parens
    depth: typeof e.depth == "number" || e.depth === !1 ? +e.depth : R.depth,
    ignoreQueryPrefix: e.ignoreQueryPrefix === !0,
    interpretNumericEntities: typeof e.interpretNumericEntities == "boolean" ? e.interpretNumericEntities : R.interpretNumericEntities,
    parameterLimit: typeof e.parameterLimit == "number" ? e.parameterLimit : R.parameterLimit,
    parseArrays: e.parseArrays !== !1,
    plainObjects: typeof e.plainObjects == "boolean" ? e.plainObjects : R.plainObjects,
    strictNullHandling: typeof e.strictNullHandling == "boolean" ? e.strictNullHandling : R.strictNullHandling
  };
}, Wi = function(t, e) {
  var r = qi(e);
  if (t === "" || t === null || typeof t > "u")
    return r.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
  for (var n = typeof t == "string" ? Li(t, r) : t, o = r.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, i = Object.keys(n), a = 0; a < i.length; ++a) {
    var s = i[a], l = ji(s, n[s], r, typeof t == "string");
    o = ce.merge(o, l, r);
  }
  return r.allowSparse === !0 ? o : ce.compact(o);
}, Hi = Bi, zi = Wi, Vi = Tt, nr = {
  formats: Vi,
  parse: zi,
  stringify: Hi
}, or = {
  "request.fail": {
    "en-US": "Request Failed",
    "zh-CN": "请求失败"
  },
  "network.err": {
    "en-US": "Network Error",
    "zh-CN": "网络异常"
  },
  "login.invalid": {
    "en-US": "您的登录状态已失效，请重新登录",
    "zh-CN": "您的登录状态已失效，请重新登录"
  }
}, et = function(t) {
  var e = Lr(), r = Object.keys(or).find(function(o) {
    return o === t;
  });
  if (!r)
    return null;
  var n = or[r][e] || null;
  return n;
}, _ = {
  loginInvalidCode: [10002],
  successCode: [200],
  codeKey: "code",
  messageKey: "message",
  headerTokenKey: "Authorization",
  headerTokenValueMaker: function(t) {
    return "Bearer ".concat(t);
  }
}, tt, Qi = function(t) {
  t === void 0 && (t = {
    NoTokenUrls: [],
    axiosCreateOptions: {},
    getToken: function() {
      return "";
    },
    redirectLogin: function() {
    },
    redirectNotFound: function() {
    },
    setInstance: function(b) {
    },
    showError: function(b) {
    },
    loginInvalidWarn: function(b) {
    },
    loginInvalidCode: _.loginInvalidCode,
    successCode: _.successCode,
    codeKey: _.codeKey,
    messageKey: _.messageKey,
    headerTokenKey: _.headerTokenKey,
    headerTokenValueMaker: _.headerTokenValueMaker
  });
  var e = t.NoTokenUrls, r = e === void 0 ? [] : e, n = t.axiosCreateOptions, o = n === void 0 ? {} : n, i = t.getToken, a = t.redirectLogin, s = t.setInstance, l = t.showError, c = t.loginInvalidWarn, f = t.redirectNotFound, d = f === void 0 ? function() {
  } : f, y = t.loginInvalidCode, h = y === void 0 ? _.loginInvalidCode : y, p = t.successCode, m = p === void 0 ? _.successCode : p, O = t.codeKey, g = O === void 0 ? _.codeKey : O, A = t.messageKey, N = A === void 0 ? _.messageKey : A, B = t.headerTokenKey, X = B === void 0 ? _.headerTokenKey : B, z = t.headerTokenValueMaker, L = z === void 0 ? _.headerTokenValueMaker : z;
  if (!i)
    throw new Error("createRequest:function getToken is required!");
  if (!a)
    throw new Error("createRequest:function redirectLogin is required!");
  if (!l)
    throw new Error("createRequest:function showError is required!");
  if (!c)
    throw new Error("createRequest:function loginInvalidWarn is required!");
  var M = function() {
    tt || (tt = c({
      title: et("login.invalid"),
      onOk: function() {
        tt = void 0, a();
      }
    }));
  }, F = Lt.create(Te({
    // timeout: 1000,
    headers: {},
    validateStatus: function(b) {
      return b === 403 && d(), b === 401 && a(), b >= 200 && b < 300;
    },
    paramsSerializer: {
      encode: nr.parse,
      serialize: nr.stringify
    }
  }, o));
  F.interceptors.request.use(function(b) {
    if (!r.includes(b.url)) {
      var w = i();
      if (!w)
        throw M(), new Error("loginInvalid");
      b.headers[X] = L(w);
    }
    return b;
  }, function(b) {
    return console.log("request error", b), Promise.reject(b);
  }), F.interceptors.response.use(function(b) {
    var w = b.data, E = b.config, I = !E.responseType || E.responseType === "json", C = E.responseType === "blob";
    if (I && w instanceof Object) {
      if (m.includes(w[g]))
        return w.data;
      throw h.includes(w[g]) ? (M(), new Error("loginInvalid")) : new Error(w[N]);
    }
    if (C && w instanceof Blob) {
      var Y = b.headers["content-disposition"] || "", ke = (decodeURI(Y).split(";")[1] || "").split("=")[1] || "", be = ke.split("''")[1] || "";
      return {
        data: w,
        filename: be
      };
    }
    return w;
  }, function(b) {
    return console.log("response error", b), Promise.reject(b);
  }), s == null || s(F);
  var j = function(b, w) {
    return w === void 0 && (w = {}), F.request(Te({ url: b }, w)).catch(function(E) {
      if (console.log("request error", E, w), Lt.isCancel(E))
        throw console.log("Request canceled", E.message), E;
      var I = E.message === "loginInvalid", C = E.message === "Network Error";
      throw I || l({
        message: et("request.fail"),
        description: C ? et("network.err") : E.message
      }), E;
    });
  };
  return j.showloginInvalidModal = M, j;
};
export {
  Qi as createRequest,
  Ji as exportFile,
  Lr as getLanguage,
  et as getTips,
  Ki as hasOwnProperties,
  Gi as versionCompare
};
