var $a = function(t) {
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
}, Da = function(t, e) {
  return !e.some(function(r) {
    return !Object.prototype.hasOwnProperty.call(t, r);
  });
}, Zr = function() {
  var t = localStorage.getItem("language") || window.navigator.language, e = t.split("-")[0], r = { zh: "zh-CN", en: "en-US" };
  return ["zh", "en"].indexOf(e) > -1 ? r[e] : r.en;
};
function Ba(t, e) {
  var r = t.split("."), n = e.split("."), o = r.length, i = n.length, a = Math.min(o, i), s = 0;
  for (s; s < a; s++) {
    var l = parseInt(r[s]), u = parseInt(n[s]);
    if (l > u)
      return 1;
    if (l < u)
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
var Ie = function() {
  return Ie = Object.assign || function(e) {
    for (var r, n = 1, o = arguments.length; n < o; n++) {
      r = arguments[n];
      for (var i in r)
        Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
    }
    return e;
  }, Ie.apply(this, arguments);
};
function hr(t, e) {
  return function() {
    return t.apply(e, arguments);
  };
}
const { toString: mr } = Object.prototype, { getPrototypeOf: vt } = Object, gt = /* @__PURE__ */ ((t) => (e) => {
  const r = mr.call(e);
  return t[r] || (t[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), z = (t) => (t = t.toLowerCase(), (e) => gt(e) === t), Le = (t) => (e) => typeof e === t, { isArray: ce } = Array, ge = Le("undefined");
function en(t) {
  return t !== null && !ge(t) && t.constructor !== null && !ge(t.constructor) && te(t.constructor.isBuffer) && t.constructor.isBuffer(t);
}
const vr = z("ArrayBuffer");
function tn(t) {
  let e;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? e = ArrayBuffer.isView(t) : e = t && t.buffer && vr(t.buffer), e;
}
const rn = Le("string"), te = Le("function"), gr = Le("number"), bt = (t) => t !== null && typeof t == "object", nn = (t) => t === !0 || t === !1, xe = (t) => {
  if (gt(t) !== "object")
    return !1;
  const e = vt(t);
  return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(Symbol.toStringTag in t) && !(Symbol.iterator in t);
}, on = z("Date"), an = z("File"), sn = z("Blob"), un = z("FileList"), ln = (t) => bt(t) && te(t.pipe), cn = (t) => {
  const e = "[object FormData]";
  return t && (typeof FormData == "function" && t instanceof FormData || mr.call(t) === e || te(t.toString) && t.toString() === e);
}, fn = z("URLSearchParams"), pn = (t) => t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function be(t, e, { allOwnKeys: r = !1 } = {}) {
  if (t === null || typeof t > "u")
    return;
  let n, o;
  if (typeof t != "object" && (t = [t]), ce(t))
    for (n = 0, o = t.length; n < o; n++)
      e.call(null, t[n], n, t);
  else {
    const i = r ? Object.getOwnPropertyNames(t) : Object.keys(t), a = i.length;
    let s;
    for (n = 0; n < a; n++)
      s = i[n], e.call(null, t[s], s, t);
  }
}
function br(t, e) {
  e = e.toLowerCase();
  const r = Object.keys(t);
  let n = r.length, o;
  for (; n-- > 0; )
    if (o = r[n], e === o.toLowerCase())
      return o;
  return null;
}
const Sr = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, wr = (t) => !ge(t) && t !== Sr;
function it() {
  const { caseless: t } = wr(this) && this || {}, e = {}, r = (n, o) => {
    const i = t && br(e, o) || o;
    xe(e[i]) && xe(n) ? e[i] = it(e[i], n) : xe(n) ? e[i] = it({}, n) : ce(n) ? e[i] = n.slice() : e[i] = n;
  };
  for (let n = 0, o = arguments.length; n < o; n++)
    arguments[n] && be(arguments[n], r);
  return e;
}
const dn = (t, e, r, { allOwnKeys: n } = {}) => (be(e, (o, i) => {
  r && te(o) ? t[i] = hr(o, r) : t[i] = o;
}, { allOwnKeys: n }), t), yn = (t) => (t.charCodeAt(0) === 65279 && (t = t.slice(1)), t), hn = (t, e, r, n) => {
  t.prototype = Object.create(e.prototype, n), t.prototype.constructor = t, Object.defineProperty(t, "super", {
    value: e.prototype
  }), r && Object.assign(t.prototype, r);
}, mn = (t, e, r, n) => {
  let o, i, a;
  const s = {};
  if (e = e || {}, t == null)
    return e;
  do {
    for (o = Object.getOwnPropertyNames(t), i = o.length; i-- > 0; )
      a = o[i], (!n || n(a, t, e)) && !s[a] && (e[a] = t[a], s[a] = !0);
    t = r !== !1 && vt(t);
  } while (t && (!r || r(t, e)) && t !== Object.prototype);
  return e;
}, vn = (t, e, r) => {
  t = String(t), (r === void 0 || r > t.length) && (r = t.length), r -= e.length;
  const n = t.indexOf(e, r);
  return n !== -1 && n === r;
}, gn = (t) => {
  if (!t)
    return null;
  if (ce(t))
    return t;
  let e = t.length;
  if (!gr(e))
    return null;
  const r = new Array(e);
  for (; e-- > 0; )
    r[e] = t[e];
  return r;
}, bn = /* @__PURE__ */ ((t) => (e) => t && e instanceof t)(typeof Uint8Array < "u" && vt(Uint8Array)), Sn = (t, e) => {
  const n = (t && t[Symbol.iterator]).call(t);
  let o;
  for (; (o = n.next()) && !o.done; ) {
    const i = o.value;
    e.call(t, i[0], i[1]);
  }
}, wn = (t, e) => {
  let r;
  const n = [];
  for (; (r = t.exec(e)) !== null; )
    n.push(r);
  return n;
}, En = z("HTMLFormElement"), On = (t) => t.toLowerCase().replace(
  /[_-\s]([a-z\d])(\w*)/g,
  function(r, n, o) {
    return n.toUpperCase() + o;
  }
), Ct = (({ hasOwnProperty: t }) => (e, r) => t.call(e, r))(Object.prototype), An = z("RegExp"), Er = (t, e) => {
  const r = Object.getOwnPropertyDescriptors(t), n = {};
  be(r, (o, i) => {
    e(o, i, t) !== !1 && (n[i] = o);
  }), Object.defineProperties(t, n);
}, Pn = (t) => {
  Er(t, (e, r) => {
    if (te(t) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
      return !1;
    const n = t[r];
    if (te(n)) {
      if (e.enumerable = !1, "writable" in e) {
        e.writable = !1;
        return;
      }
      e.set || (e.set = () => {
        throw Error("Can not rewrite read-only method '" + r + "'");
      });
    }
  });
}, Rn = (t, e) => {
  const r = {}, n = (o) => {
    o.forEach((i) => {
      r[i] = !0;
    });
  };
  return ce(t) ? n(t) : n(String(t).split(e)), r;
}, xn = () => {
}, Tn = (t, e) => (t = +t, Number.isFinite(t) ? t : e), Nn = (t) => {
  const e = new Array(10), r = (n, o) => {
    if (bt(n)) {
      if (e.indexOf(n) >= 0)
        return;
      if (!("toJSON" in n)) {
        e[o] = n;
        const i = ce(n) ? [] : {};
        return be(n, (a, s) => {
          const l = r(a, o + 1);
          !ge(l) && (i[s] = l);
        }), e[o] = void 0, i;
      }
    }
    return n;
  };
  return r(t, 0);
}, c = {
  isArray: ce,
  isArrayBuffer: vr,
  isBuffer: en,
  isFormData: cn,
  isArrayBufferView: tn,
  isString: rn,
  isNumber: gr,
  isBoolean: nn,
  isObject: bt,
  isPlainObject: xe,
  isUndefined: ge,
  isDate: on,
  isFile: an,
  isBlob: sn,
  isRegExp: An,
  isFunction: te,
  isStream: ln,
  isURLSearchParams: fn,
  isTypedArray: bn,
  isFileList: un,
  forEach: be,
  merge: it,
  extend: dn,
  trim: pn,
  stripBOM: yn,
  inherits: hn,
  toFlatObject: mn,
  kindOf: gt,
  kindOfTest: z,
  endsWith: vn,
  toArray: gn,
  forEachEntry: Sn,
  matchAll: wn,
  isHTMLForm: En,
  hasOwnProperty: Ct,
  hasOwnProp: Ct,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Er,
  freezeMethods: Pn,
  toObjectSet: Rn,
  toCamelCase: On,
  noop: xn,
  toFiniteNumber: Tn,
  findKey: br,
  global: Sr,
  isContextDefined: wr,
  toJSONObject: Nn
};
function b(t, e, r, n, o) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = t, this.name = "AxiosError", e && (this.code = e), r && (this.config = r), n && (this.request = n), o && (this.response = o);
}
c.inherits(b, Error, {
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
      config: c.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const Or = b.prototype, Ar = {};
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
  Ar[t] = { value: t };
});
Object.defineProperties(b, Ar);
Object.defineProperty(Or, "isAxiosError", { value: !0 });
b.from = (t, e, r, n, o, i) => {
  const a = Object.create(Or);
  return c.toFlatObject(t, a, function(l) {
    return l !== Error.prototype;
  }, (s) => s !== "isAxiosError"), b.call(a, t.message, e, r, n, o), a.cause = t, a.name = t.name, i && Object.assign(a, i), a;
};
var It = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Fn(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
function Cn(t) {
  if (t.__esModule)
    return t;
  var e = t.default;
  if (typeof e == "function") {
    var r = function n() {
      return this instanceof n ? Reflect.construct(e, arguments, this.constructor) : e.apply(this, arguments);
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
var In = typeof self == "object" ? self.FormData : window.FormData;
const _n = /* @__PURE__ */ Fn(In);
function at(t) {
  return c.isPlainObject(t) || c.isArray(t);
}
function Pr(t) {
  return c.endsWith(t, "[]") ? t.slice(0, -2) : t;
}
function _t(t, e, r) {
  return t ? t.concat(e).map(function(o, i) {
    return o = Pr(o), !r && i ? "[" + o + "]" : o;
  }).join(r ? "." : "") : e;
}
function $n(t) {
  return c.isArray(t) && !t.some(at);
}
const Dn = c.toFlatObject(c, {}, null, function(e) {
  return /^is[A-Z]/.test(e);
});
function Bn(t) {
  return t && c.isFunction(t.append) && t[Symbol.toStringTag] === "FormData" && t[Symbol.iterator];
}
function Me(t, e, r) {
  if (!c.isObject(t))
    throw new TypeError("target must be an object");
  e = e || new (_n || FormData)(), r = c.toFlatObject(r, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(m, O) {
    return !c.isUndefined(O[m]);
  });
  const n = r.metaTokens, o = r.visitor || f, i = r.dots, a = r.indexes, l = (r.Blob || typeof Blob < "u" && Blob) && Bn(e);
  if (!c.isFunction(o))
    throw new TypeError("visitor must be a function");
  function u(p) {
    if (p === null)
      return "";
    if (c.isDate(p))
      return p.toISOString();
    if (!l && c.isBlob(p))
      throw new b("Blob is not supported. Use a Buffer instead.");
    return c.isArrayBuffer(p) || c.isTypedArray(p) ? l && typeof Blob == "function" ? new Blob([p]) : Buffer.from(p) : p;
  }
  function f(p, m, O) {
    let v = p;
    if (p && !O && typeof p == "object") {
      if (c.endsWith(m, "{}"))
        m = n ? m : m.slice(0, -2), p = JSON.stringify(p);
      else if (c.isArray(p) && $n(p) || c.isFileList(p) || c.endsWith(m, "[]") && (v = c.toArray(p)))
        return m = Pr(m), v.forEach(function(F, D) {
          !(c.isUndefined(F) || F === null) && e.append(
            // eslint-disable-next-line no-nested-ternary
            a === !0 ? _t([m], D, i) : a === null ? m : m + "[]",
            u(F)
          );
        }), !1;
    }
    return at(p) ? !0 : (e.append(_t(O, m, i), u(p)), !1);
  }
  const d = [], y = Object.assign(Dn, {
    defaultVisitor: f,
    convertValue: u,
    isVisitable: at
  });
  function h(p, m) {
    if (!c.isUndefined(p)) {
      if (d.indexOf(p) !== -1)
        throw Error("Circular reference detected in " + m.join("."));
      d.push(p), c.forEach(p, function(v, A) {
        (!(c.isUndefined(v) || v === null) && o.call(
          e,
          v,
          c.isString(A) ? A.trim() : A,
          m,
          y
        )) === !0 && h(v, m ? m.concat(A) : [A]);
      }), d.pop();
    }
  }
  if (!c.isObject(t))
    throw new TypeError("data must be an object");
  return h(t), e;
}
function $t(t) {
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
function St(t, e) {
  this._pairs = [], t && Me(t, this, e);
}
const Rr = St.prototype;
Rr.append = function(e, r) {
  this._pairs.push([e, r]);
};
Rr.toString = function(e) {
  const r = e ? function(n) {
    return e.call(this, n, $t);
  } : $t;
  return this._pairs.map(function(o) {
    return r(o[0]) + "=" + r(o[1]);
  }, "").join("&");
};
function Un(t) {
  return encodeURIComponent(t).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function xr(t, e, r) {
  if (!e)
    return t;
  const n = r && r.encode || Un, o = r && r.serialize;
  let i;
  if (o ? i = o(e, r) : i = c.isURLSearchParams(e) ? e.toString() : new St(e, r).toString(n), i) {
    const a = t.indexOf("#");
    a !== -1 && (t = t.slice(0, a)), t += (t.indexOf("?") === -1 ? "?" : "&") + i;
  }
  return t;
}
class Dt {
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
    c.forEach(this.handlers, function(n) {
      n !== null && e(n);
    });
  }
}
const Tr = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Ln = typeof URLSearchParams < "u" ? URLSearchParams : St, Mn = FormData, kn = (() => {
  let t;
  return typeof navigator < "u" && ((t = navigator.product) === "ReactNative" || t === "NativeScript" || t === "NS") ? !1 : typeof window < "u" && typeof document < "u";
})(), qn = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", L = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Ln,
    FormData: Mn,
    Blob
  },
  isStandardBrowserEnv: kn,
  isStandardBrowserWebWorkerEnv: qn,
  protocols: ["http", "https", "file", "blob", "url", "data"]
};
function jn(t, e) {
  return Me(t, new L.classes.URLSearchParams(), Object.assign({
    visitor: function(r, n, o, i) {
      return L.isNode && c.isBuffer(r) ? (this.append(n, r.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
    }
  }, e));
}
function Wn(t) {
  return c.matchAll(/\w+|\[(\w*)]/g, t).map((e) => e[0] === "[]" ? "" : e[1] || e[0]);
}
function zn(t) {
  const e = {}, r = Object.keys(t);
  let n;
  const o = r.length;
  let i;
  for (n = 0; n < o; n++)
    i = r[n], e[i] = t[i];
  return e;
}
function Nr(t) {
  function e(r, n, o, i) {
    let a = r[i++];
    const s = Number.isFinite(+a), l = i >= r.length;
    return a = !a && c.isArray(o) ? o.length : a, l ? (c.hasOwnProp(o, a) ? o[a] = [o[a], n] : o[a] = n, !s) : ((!o[a] || !c.isObject(o[a])) && (o[a] = []), e(r, n, o[a], i) && c.isArray(o[a]) && (o[a] = zn(o[a])), !s);
  }
  if (c.isFormData(t) && c.isFunction(t.entries)) {
    const r = {};
    return c.forEachEntry(t, (n, o) => {
      e(Wn(n), o, r, 0);
    }), r;
  }
  return null;
}
const Hn = {
  "Content-Type": void 0
};
function Vn(t, e, r) {
  if (c.isString(t))
    try {
      return (e || JSON.parse)(t), c.trim(t);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (r || JSON.stringify)(t);
}
const ke = {
  transitional: Tr,
  adapter: ["xhr", "http"],
  transformRequest: [function(e, r) {
    const n = r.getContentType() || "", o = n.indexOf("application/json") > -1, i = c.isObject(e);
    if (i && c.isHTMLForm(e) && (e = new FormData(e)), c.isFormData(e))
      return o && o ? JSON.stringify(Nr(e)) : e;
    if (c.isArrayBuffer(e) || c.isBuffer(e) || c.isStream(e) || c.isFile(e) || c.isBlob(e))
      return e;
    if (c.isArrayBufferView(e))
      return e.buffer;
    if (c.isURLSearchParams(e))
      return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
    let s;
    if (i) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return jn(e, this.formSerializer).toString();
      if ((s = c.isFileList(e)) || n.indexOf("multipart/form-data") > -1) {
        const l = this.env && this.env.FormData;
        return Me(
          s ? { "files[]": e } : e,
          l && new l(),
          this.formSerializer
        );
      }
    }
    return i || o ? (r.setContentType("application/json", !1), Vn(e)) : e;
  }],
  transformResponse: [function(e) {
    const r = this.transitional || ke.transitional, n = r && r.forcedJSONParsing, o = this.responseType === "json";
    if (e && c.isString(e) && (n && !this.responseType || o)) {
      const a = !(r && r.silentJSONParsing) && o;
      try {
        return JSON.parse(e);
      } catch (s) {
        if (a)
          throw s.name === "SyntaxError" ? b.from(s, b.ERR_BAD_RESPONSE, this, null, this.response) : s;
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
    FormData: L.classes.FormData,
    Blob: L.classes.Blob
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
c.forEach(["delete", "get", "head"], function(e) {
  ke.headers[e] = {};
});
c.forEach(["post", "put", "patch"], function(e) {
  ke.headers[e] = c.merge(Hn);
});
const wt = ke, Jn = c.toObjectSet([
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
]), Kn = (t) => {
  const e = {};
  let r, n, o;
  return t && t.split(`
`).forEach(function(a) {
    o = a.indexOf(":"), r = a.substring(0, o).trim().toLowerCase(), n = a.substring(o + 1).trim(), !(!r || e[r] && Jn[r]) && (r === "set-cookie" ? e[r] ? e[r].push(n) : e[r] = [n] : e[r] = e[r] ? e[r] + ", " + n : n);
  }), e;
}, Bt = Symbol("internals");
function de(t) {
  return t && String(t).trim().toLowerCase();
}
function Te(t) {
  return t === !1 || t == null ? t : c.isArray(t) ? t.map(Te) : String(t);
}
function Gn(t) {
  const e = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = r.exec(t); )
    e[n[1]] = n[2];
  return e;
}
function Qn(t) {
  return /^[-_a-zA-Z]+$/.test(t.trim());
}
function Ut(t, e, r, n) {
  if (c.isFunction(n))
    return n.call(this, e, r);
  if (c.isString(e)) {
    if (c.isString(n))
      return e.indexOf(n) !== -1;
    if (c.isRegExp(n))
      return n.test(e);
  }
}
function Xn(t) {
  return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, r, n) => r.toUpperCase() + n);
}
function Yn(t, e) {
  const r = c.toCamelCase(" " + e);
  ["get", "set", "has"].forEach((n) => {
    Object.defineProperty(t, n + r, {
      value: function(o, i, a) {
        return this[n].call(this, e, o, i, a);
      },
      configurable: !0
    });
  });
}
class qe {
  constructor(e) {
    e && this.set(e);
  }
  set(e, r, n) {
    const o = this;
    function i(s, l, u) {
      const f = de(l);
      if (!f)
        throw new Error("header name must be a non-empty string");
      const d = c.findKey(o, f);
      (!d || o[d] === void 0 || u === !0 || u === void 0 && o[d] !== !1) && (o[d || l] = Te(s));
    }
    const a = (s, l) => c.forEach(s, (u, f) => i(u, f, l));
    return c.isPlainObject(e) || e instanceof this.constructor ? a(e, r) : c.isString(e) && (e = e.trim()) && !Qn(e) ? a(Kn(e), r) : e != null && i(r, e, n), this;
  }
  get(e, r) {
    if (e = de(e), e) {
      const n = c.findKey(this, e);
      if (n) {
        const o = this[n];
        if (!r)
          return o;
        if (r === !0)
          return Gn(o);
        if (c.isFunction(r))
          return r.call(this, o, n);
        if (c.isRegExp(r))
          return r.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(e, r) {
    if (e = de(e), e) {
      const n = c.findKey(this, e);
      return !!(n && (!r || Ut(this, this[n], n, r)));
    }
    return !1;
  }
  delete(e, r) {
    const n = this;
    let o = !1;
    function i(a) {
      if (a = de(a), a) {
        const s = c.findKey(n, a);
        s && (!r || Ut(n, n[s], s, r)) && (delete n[s], o = !0);
      }
    }
    return c.isArray(e) ? e.forEach(i) : i(e), o;
  }
  clear() {
    return Object.keys(this).forEach(this.delete.bind(this));
  }
  normalize(e) {
    const r = this, n = {};
    return c.forEach(this, (o, i) => {
      const a = c.findKey(n, i);
      if (a) {
        r[a] = Te(o), delete r[i];
        return;
      }
      const s = e ? Xn(i) : String(i).trim();
      s !== i && delete r[i], r[s] = Te(o), n[s] = !0;
    }), this;
  }
  concat(...e) {
    return this.constructor.concat(this, ...e);
  }
  toJSON(e) {
    const r = /* @__PURE__ */ Object.create(null);
    return c.forEach(this, (n, o) => {
      n != null && n !== !1 && (r[o] = e && c.isArray(n) ? n.join(", ") : n);
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
      const s = de(a);
      n[s] || (Yn(o, a), n[s] = !0);
    }
    return c.isArray(e) ? e.forEach(i) : i(e), this;
  }
}
qe.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
c.freezeMethods(qe.prototype);
c.freezeMethods(qe);
const W = qe;
function ze(t, e) {
  const r = this || wt, n = e || r, o = W.from(n.headers);
  let i = n.data;
  return c.forEach(t, function(s) {
    i = s.call(r, i, o.normalize(), e ? e.status : void 0);
  }), o.normalize(), i;
}
function Fr(t) {
  return !!(t && t.__CANCEL__);
}
function Se(t, e, r) {
  b.call(this, t ?? "canceled", b.ERR_CANCELED, e, r), this.name = "CanceledError";
}
c.inherits(Se, b, {
  __CANCEL__: !0
});
const Zn = null;
function eo(t, e, r) {
  const n = r.config.validateStatus;
  !r.status || !n || n(r.status) ? t(r) : e(new b(
    "Request failed with status code " + r.status,
    [b.ERR_BAD_REQUEST, b.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
    r.config,
    r.request,
    r
  ));
}
const to = L.isStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  /* @__PURE__ */ function() {
    return {
      write: function(r, n, o, i, a, s) {
        const l = [];
        l.push(r + "=" + encodeURIComponent(n)), c.isNumber(o) && l.push("expires=" + new Date(o).toGMTString()), c.isString(i) && l.push("path=" + i), c.isString(a) && l.push("domain=" + a), s === !0 && l.push("secure"), document.cookie = l.join("; ");
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
  /* @__PURE__ */ function() {
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
function ro(t) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);
}
function no(t, e) {
  return e ? t.replace(/\/+$/, "") + "/" + e.replace(/^\/+/, "") : t;
}
function Cr(t, e) {
  return t && !ro(e) ? no(t, e) : e;
}
const oo = L.isStandardBrowserEnv ? (
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
      const s = c.isString(a) ? o(a) : a;
      return s.protocol === n.protocol && s.host === n.host;
    };
  }()
) : (
  // Non standard browser envs (web workers, react-native) lack needed support.
  /* @__PURE__ */ function() {
    return function() {
      return !0;
    };
  }()
);
function io(t) {
  const e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
  return e && e[1] || "";
}
function ao(t, e) {
  t = t || 10;
  const r = new Array(t), n = new Array(t);
  let o = 0, i = 0, a;
  return e = e !== void 0 ? e : 1e3, function(l) {
    const u = Date.now(), f = n[i];
    a || (a = u), r[o] = l, n[o] = u;
    let d = i, y = 0;
    for (; d !== o; )
      y += r[d++], d = d % t;
    if (o = (o + 1) % t, o === i && (i = (i + 1) % t), u - a < e)
      return;
    const h = f && u - f;
    return h ? Math.round(y * 1e3 / h) : void 0;
  };
}
function Lt(t, e) {
  let r = 0;
  const n = ao(50, 250);
  return (o) => {
    const i = o.loaded, a = o.lengthComputable ? o.total : void 0, s = i - r, l = n(s), u = i <= a;
    r = i;
    const f = {
      loaded: i,
      total: a,
      progress: a ? i / a : void 0,
      bytes: s,
      rate: l || void 0,
      estimated: l && a && u ? (a - i) / l : void 0,
      event: o
    };
    f[e ? "download" : "upload"] = !0, t(f);
  };
}
const so = typeof XMLHttpRequest < "u", uo = so && function(t) {
  return new Promise(function(r, n) {
    let o = t.data;
    const i = W.from(t.headers).normalize(), a = t.responseType;
    let s;
    function l() {
      t.cancelToken && t.cancelToken.unsubscribe(s), t.signal && t.signal.removeEventListener("abort", s);
    }
    c.isFormData(o) && (L.isStandardBrowserEnv || L.isStandardBrowserWebWorkerEnv) && i.setContentType(!1);
    let u = new XMLHttpRequest();
    if (t.auth) {
      const h = t.auth.username || "", p = t.auth.password ? unescape(encodeURIComponent(t.auth.password)) : "";
      i.set("Authorization", "Basic " + btoa(h + ":" + p));
    }
    const f = Cr(t.baseURL, t.url);
    u.open(t.method.toUpperCase(), xr(f, t.params, t.paramsSerializer), !0), u.timeout = t.timeout;
    function d() {
      if (!u)
        return;
      const h = W.from(
        "getAllResponseHeaders" in u && u.getAllResponseHeaders()
      ), m = {
        data: !a || a === "text" || a === "json" ? u.responseText : u.response,
        status: u.status,
        statusText: u.statusText,
        headers: h,
        config: t,
        request: u
      };
      eo(function(v) {
        r(v), l();
      }, function(v) {
        n(v), l();
      }, m), u = null;
    }
    if ("onloadend" in u ? u.onloadend = d : u.onreadystatechange = function() {
      !u || u.readyState !== 4 || u.status === 0 && !(u.responseURL && u.responseURL.indexOf("file:") === 0) || setTimeout(d);
    }, u.onabort = function() {
      u && (n(new b("Request aborted", b.ECONNABORTED, t, u)), u = null);
    }, u.onerror = function() {
      n(new b("Network Error", b.ERR_NETWORK, t, u)), u = null;
    }, u.ontimeout = function() {
      let p = t.timeout ? "timeout of " + t.timeout + "ms exceeded" : "timeout exceeded";
      const m = t.transitional || Tr;
      t.timeoutErrorMessage && (p = t.timeoutErrorMessage), n(new b(
        p,
        m.clarifyTimeoutError ? b.ETIMEDOUT : b.ECONNABORTED,
        t,
        u
      )), u = null;
    }, L.isStandardBrowserEnv) {
      const h = (t.withCredentials || oo(f)) && t.xsrfCookieName && to.read(t.xsrfCookieName);
      h && i.set(t.xsrfHeaderName, h);
    }
    o === void 0 && i.setContentType(null), "setRequestHeader" in u && c.forEach(i.toJSON(), function(p, m) {
      u.setRequestHeader(m, p);
    }), c.isUndefined(t.withCredentials) || (u.withCredentials = !!t.withCredentials), a && a !== "json" && (u.responseType = t.responseType), typeof t.onDownloadProgress == "function" && u.addEventListener("progress", Lt(t.onDownloadProgress, !0)), typeof t.onUploadProgress == "function" && u.upload && u.upload.addEventListener("progress", Lt(t.onUploadProgress)), (t.cancelToken || t.signal) && (s = (h) => {
      u && (n(!h || h.type ? new Se(null, t, u) : h), u.abort(), u = null);
    }, t.cancelToken && t.cancelToken.subscribe(s), t.signal && (t.signal.aborted ? s() : t.signal.addEventListener("abort", s)));
    const y = io(f);
    if (y && L.protocols.indexOf(y) === -1) {
      n(new b("Unsupported protocol " + y + ":", b.ERR_BAD_REQUEST, t));
      return;
    }
    u.send(o || null);
  });
}, Ne = {
  http: Zn,
  xhr: uo
};
c.forEach(Ne, (t, e) => {
  if (t) {
    try {
      Object.defineProperty(t, "name", { value: e });
    } catch {
    }
    Object.defineProperty(t, "adapterName", { value: e });
  }
});
const lo = {
  getAdapter: (t) => {
    t = c.isArray(t) ? t : [t];
    const { length: e } = t;
    let r, n;
    for (let o = 0; o < e && (r = t[o], !(n = c.isString(r) ? Ne[r.toLowerCase()] : r)); o++)
      ;
    if (!n)
      throw n === !1 ? new b(
        `Adapter ${r} is not supported by the environment`,
        "ERR_NOT_SUPPORT"
      ) : new Error(
        c.hasOwnProp(Ne, r) ? `Adapter '${r}' is not available in the build` : `Unknown adapter '${r}'`
      );
    if (!c.isFunction(n))
      throw new TypeError("adapter is not a function");
    return n;
  },
  adapters: Ne
};
function He(t) {
  if (t.cancelToken && t.cancelToken.throwIfRequested(), t.signal && t.signal.aborted)
    throw new Se(null, t);
}
function Mt(t) {
  return He(t), t.headers = W.from(t.headers), t.data = ze.call(
    t,
    t.transformRequest
  ), ["post", "put", "patch"].indexOf(t.method) !== -1 && t.headers.setContentType("application/x-www-form-urlencoded", !1), lo.getAdapter(t.adapter || wt.adapter)(t).then(function(n) {
    return He(t), n.data = ze.call(
      t,
      t.transformResponse,
      n
    ), n.headers = W.from(n.headers), n;
  }, function(n) {
    return Fr(n) || (He(t), n && n.response && (n.response.data = ze.call(
      t,
      t.transformResponse,
      n.response
    ), n.response.headers = W.from(n.response.headers))), Promise.reject(n);
  });
}
const kt = (t) => t instanceof W ? t.toJSON() : t;
function ae(t, e) {
  e = e || {};
  const r = {};
  function n(u, f, d) {
    return c.isPlainObject(u) && c.isPlainObject(f) ? c.merge.call({ caseless: d }, u, f) : c.isPlainObject(f) ? c.merge({}, f) : c.isArray(f) ? f.slice() : f;
  }
  function o(u, f, d) {
    if (c.isUndefined(f)) {
      if (!c.isUndefined(u))
        return n(void 0, u, d);
    } else
      return n(u, f, d);
  }
  function i(u, f) {
    if (!c.isUndefined(f))
      return n(void 0, f);
  }
  function a(u, f) {
    if (c.isUndefined(f)) {
      if (!c.isUndefined(u))
        return n(void 0, u);
    } else
      return n(void 0, f);
  }
  function s(u, f, d) {
    if (d in e)
      return n(u, f);
    if (d in t)
      return n(void 0, u);
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
    headers: (u, f) => o(kt(u), kt(f), !0)
  };
  return c.forEach(Object.keys(t).concat(Object.keys(e)), function(f) {
    const d = l[f] || o, y = d(t[f], e[f], f);
    c.isUndefined(y) && d !== s || (r[f] = y);
  }), r;
}
const Ir = "1.2.6", Et = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((t, e) => {
  Et[t] = function(n) {
    return typeof n === t || "a" + (e < 1 ? "n " : " ") + t;
  };
});
const qt = {};
Et.transitional = function(e, r, n) {
  function o(i, a) {
    return "[Axios v" + Ir + "] Transitional option '" + i + "'" + a + (n ? ". " + n : "");
  }
  return (i, a, s) => {
    if (e === !1)
      throw new b(
        o(a, " has been removed" + (r ? " in " + r : "")),
        b.ERR_DEPRECATED
      );
    return r && !qt[a] && (qt[a] = !0, console.warn(
      o(
        a,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), e ? e(i, a, s) : !0;
  };
};
function co(t, e, r) {
  if (typeof t != "object")
    throw new b("options must be an object", b.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(t);
  let o = n.length;
  for (; o-- > 0; ) {
    const i = n[o], a = e[i];
    if (a) {
      const s = t[i], l = s === void 0 || a(s, i, t);
      if (l !== !0)
        throw new b("option " + i + " must be " + l, b.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new b("Unknown option " + i, b.ERR_BAD_OPTION);
  }
}
const st = {
  assertOptions: co,
  validators: Et
}, V = st.validators;
class _e {
  constructor(e) {
    this.defaults = e, this.interceptors = {
      request: new Dt(),
      response: new Dt()
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
    typeof e == "string" ? (r = r || {}, r.url = e) : r = e || {}, r = ae(this.defaults, r);
    const { transitional: n, paramsSerializer: o, headers: i } = r;
    n !== void 0 && st.assertOptions(n, {
      silentJSONParsing: V.transitional(V.boolean),
      forcedJSONParsing: V.transitional(V.boolean),
      clarifyTimeoutError: V.transitional(V.boolean)
    }, !1), o !== void 0 && st.assertOptions(o, {
      encode: V.function,
      serialize: V.function
    }, !0), r.method = (r.method || this.defaults.method || "get").toLowerCase();
    let a;
    a = i && c.merge(
      i.common,
      i[r.method]
    ), a && c.forEach(
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
    const u = [];
    this.interceptors.response.forEach(function(m) {
      u.push(m.fulfilled, m.rejected);
    });
    let f, d = 0, y;
    if (!l) {
      const p = [Mt.bind(this), void 0];
      for (p.unshift.apply(p, s), p.push.apply(p, u), y = p.length, f = Promise.resolve(r); d < y; )
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
      f = Mt.call(this, h);
    } catch (p) {
      return Promise.reject(p);
    }
    for (d = 0, y = u.length; d < y; )
      f = f.then(u[d++], u[d++]);
    return f;
  }
  getUri(e) {
    e = ae(this.defaults, e);
    const r = Cr(e.baseURL, e.url);
    return xr(r, e.params, e.paramsSerializer);
  }
}
c.forEach(["delete", "get", "head", "options"], function(e) {
  _e.prototype[e] = function(r, n) {
    return this.request(ae(n || {}, {
      method: e,
      url: r,
      data: (n || {}).data
    }));
  };
});
c.forEach(["post", "put", "patch"], function(e) {
  function r(n) {
    return function(i, a, s) {
      return this.request(ae(s || {}, {
        method: e,
        headers: n ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: i,
        data: a
      }));
    };
  }
  _e.prototype[e] = r(), _e.prototype[e + "Form"] = r(!0);
});
const Fe = _e;
class Ot {
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
      n.reason || (n.reason = new Se(i, a, s), r(n.reason));
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
      token: new Ot(function(o) {
        e = o;
      }),
      cancel: e
    };
  }
}
const fo = Ot;
function po(t) {
  return function(r) {
    return t.apply(null, r);
  };
}
function yo(t) {
  return c.isObject(t) && t.isAxiosError === !0;
}
const ut = {
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
Object.entries(ut).forEach(([t, e]) => {
  ut[e] = t;
});
const ho = ut;
function _r(t) {
  const e = new Fe(t), r = hr(Fe.prototype.request, e);
  return c.extend(r, Fe.prototype, e, { allOwnKeys: !0 }), c.extend(r, e, null, { allOwnKeys: !0 }), r.create = function(o) {
    return _r(ae(t, o));
  }, r;
}
const P = _r(wt);
P.Axios = Fe;
P.CanceledError = Se;
P.CancelToken = fo;
P.isCancel = Fr;
P.VERSION = Ir;
P.toFormData = Me;
P.AxiosError = b;
P.Cancel = P.CanceledError;
P.all = function(e) {
  return Promise.all(e);
};
P.spread = po;
P.isAxiosError = yo;
P.mergeConfig = ae;
P.AxiosHeaders = W;
P.formToJSON = (t) => Nr(c.isHTMLForm(t) ? new FormData(t) : t);
P.HttpStatusCode = ho;
P.default = P;
const jt = P;
var mo = Error, vo = EvalError, go = RangeError, bo = ReferenceError, $r = SyntaxError, we = TypeError, So = URIError, wo = function() {
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
}, Wt = typeof Symbol < "u" && Symbol, Eo = wo, Oo = function() {
  return typeof Wt != "function" || typeof Symbol != "function" || typeof Wt("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : Eo();
}, Ve = {
  __proto__: null,
  foo: {}
}, Ao = Object, Po = function() {
  return { __proto__: Ve }.foo === Ve.foo && !(Ve instanceof Ao);
}, Ro = "Function.prototype.bind called on incompatible ", xo = Object.prototype.toString, To = Math.max, No = "[object Function]", zt = function(e, r) {
  for (var n = [], o = 0; o < e.length; o += 1)
    n[o] = e[o];
  for (var i = 0; i < r.length; i += 1)
    n[i + e.length] = r[i];
  return n;
}, Fo = function(e, r) {
  for (var n = [], o = r || 0, i = 0; o < e.length; o += 1, i += 1)
    n[i] = e[o];
  return n;
}, Co = function(t, e) {
  for (var r = "", n = 0; n < t.length; n += 1)
    r += t[n], n + 1 < t.length && (r += e);
  return r;
}, Io = function(e) {
  var r = this;
  if (typeof r != "function" || xo.apply(r) !== No)
    throw new TypeError(Ro + r);
  for (var n = Fo(arguments, 1), o, i = function() {
    if (this instanceof o) {
      var f = r.apply(
        this,
        zt(n, arguments)
      );
      return Object(f) === f ? f : this;
    }
    return r.apply(
      e,
      zt(n, arguments)
    );
  }, a = To(0, r.length - n.length), s = [], l = 0; l < a; l++)
    s[l] = "$" + l;
  if (o = Function("binder", "return function (" + Co(s, ",") + "){ return binder.apply(this,arguments); }")(i), r.prototype) {
    var u = function() {
    };
    u.prototype = r.prototype, o.prototype = new u(), u.prototype = null;
  }
  return o;
}, _o = Io, At = Function.prototype.bind || _o, $o = Function.prototype.call, Do = Object.prototype.hasOwnProperty, Bo = At, Uo = Bo.call($o, Do), g, Lo = mo, Mo = vo, ko = go, qo = bo, se = $r, ie = we, jo = So, Dr = Function, Je = function(t) {
  try {
    return Dr('"use strict"; return (' + t + ").constructor;")();
  } catch {
  }
}, Z = Object.getOwnPropertyDescriptor;
if (Z)
  try {
    Z({}, "");
  } catch {
    Z = null;
  }
var Ke = function() {
  throw new ie();
}, Wo = Z ? function() {
  try {
    return arguments.callee, Ke;
  } catch {
    try {
      return Z(arguments, "callee").get;
    } catch {
      return Ke;
    }
  }
}() : Ke, re = Oo(), zo = Po(), x = Object.getPrototypeOf || (zo ? function(t) {
  return t.__proto__;
} : null), oe = {}, Ho = typeof Uint8Array > "u" || !x ? g : x(Uint8Array), ee = {
  __proto__: null,
  "%AggregateError%": typeof AggregateError > "u" ? g : AggregateError,
  "%Array%": Array,
  "%ArrayBuffer%": typeof ArrayBuffer > "u" ? g : ArrayBuffer,
  "%ArrayIteratorPrototype%": re && x ? x([][Symbol.iterator]()) : g,
  "%AsyncFromSyncIteratorPrototype%": g,
  "%AsyncFunction%": oe,
  "%AsyncGenerator%": oe,
  "%AsyncGeneratorFunction%": oe,
  "%AsyncIteratorPrototype%": oe,
  "%Atomics%": typeof Atomics > "u" ? g : Atomics,
  "%BigInt%": typeof BigInt > "u" ? g : BigInt,
  "%BigInt64Array%": typeof BigInt64Array > "u" ? g : BigInt64Array,
  "%BigUint64Array%": typeof BigUint64Array > "u" ? g : BigUint64Array,
  "%Boolean%": Boolean,
  "%DataView%": typeof DataView > "u" ? g : DataView,
  "%Date%": Date,
  "%decodeURI%": decodeURI,
  "%decodeURIComponent%": decodeURIComponent,
  "%encodeURI%": encodeURI,
  "%encodeURIComponent%": encodeURIComponent,
  "%Error%": Lo,
  "%eval%": eval,
  // eslint-disable-line no-eval
  "%EvalError%": Mo,
  "%Float32Array%": typeof Float32Array > "u" ? g : Float32Array,
  "%Float64Array%": typeof Float64Array > "u" ? g : Float64Array,
  "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? g : FinalizationRegistry,
  "%Function%": Dr,
  "%GeneratorFunction%": oe,
  "%Int8Array%": typeof Int8Array > "u" ? g : Int8Array,
  "%Int16Array%": typeof Int16Array > "u" ? g : Int16Array,
  "%Int32Array%": typeof Int32Array > "u" ? g : Int32Array,
  "%isFinite%": isFinite,
  "%isNaN%": isNaN,
  "%IteratorPrototype%": re && x ? x(x([][Symbol.iterator]())) : g,
  "%JSON%": typeof JSON == "object" ? JSON : g,
  "%Map%": typeof Map > "u" ? g : Map,
  "%MapIteratorPrototype%": typeof Map > "u" || !re || !x ? g : x((/* @__PURE__ */ new Map())[Symbol.iterator]()),
  "%Math%": Math,
  "%Number%": Number,
  "%Object%": Object,
  "%parseFloat%": parseFloat,
  "%parseInt%": parseInt,
  "%Promise%": typeof Promise > "u" ? g : Promise,
  "%Proxy%": typeof Proxy > "u" ? g : Proxy,
  "%RangeError%": ko,
  "%ReferenceError%": qo,
  "%Reflect%": typeof Reflect > "u" ? g : Reflect,
  "%RegExp%": RegExp,
  "%Set%": typeof Set > "u" ? g : Set,
  "%SetIteratorPrototype%": typeof Set > "u" || !re || !x ? g : x((/* @__PURE__ */ new Set())[Symbol.iterator]()),
  "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? g : SharedArrayBuffer,
  "%String%": String,
  "%StringIteratorPrototype%": re && x ? x(""[Symbol.iterator]()) : g,
  "%Symbol%": re ? Symbol : g,
  "%SyntaxError%": se,
  "%ThrowTypeError%": Wo,
  "%TypedArray%": Ho,
  "%TypeError%": ie,
  "%Uint8Array%": typeof Uint8Array > "u" ? g : Uint8Array,
  "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? g : Uint8ClampedArray,
  "%Uint16Array%": typeof Uint16Array > "u" ? g : Uint16Array,
  "%Uint32Array%": typeof Uint32Array > "u" ? g : Uint32Array,
  "%URIError%": jo,
  "%WeakMap%": typeof WeakMap > "u" ? g : WeakMap,
  "%WeakRef%": typeof WeakRef > "u" ? g : WeakRef,
  "%WeakSet%": typeof WeakSet > "u" ? g : WeakSet
};
if (x)
  try {
    null.error;
  } catch (t) {
    var Vo = x(x(t));
    ee["%Error.prototype%"] = Vo;
  }
var Jo = function t(e) {
  var r;
  if (e === "%AsyncFunction%")
    r = Je("async function () {}");
  else if (e === "%GeneratorFunction%")
    r = Je("function* () {}");
  else if (e === "%AsyncGeneratorFunction%")
    r = Je("async function* () {}");
  else if (e === "%AsyncGenerator%") {
    var n = t("%AsyncGeneratorFunction%");
    n && (r = n.prototype);
  } else if (e === "%AsyncIteratorPrototype%") {
    var o = t("%AsyncGenerator%");
    o && x && (r = x(o.prototype));
  }
  return ee[e] = r, r;
}, Ht = {
  __proto__: null,
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
}, Ee = At, $e = Uo, Ko = Ee.call(Function.call, Array.prototype.concat), Go = Ee.call(Function.apply, Array.prototype.splice), Vt = Ee.call(Function.call, String.prototype.replace), De = Ee.call(Function.call, String.prototype.slice), Qo = Ee.call(Function.call, RegExp.prototype.exec), Xo = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, Yo = /\\(\\)?/g, Zo = function(e) {
  var r = De(e, 0, 1), n = De(e, -1);
  if (r === "%" && n !== "%")
    throw new se("invalid intrinsic syntax, expected closing `%`");
  if (n === "%" && r !== "%")
    throw new se("invalid intrinsic syntax, expected opening `%`");
  var o = [];
  return Vt(e, Xo, function(i, a, s, l) {
    o[o.length] = s ? Vt(l, Yo, "$1") : a || i;
  }), o;
}, ei = function(e, r) {
  var n = e, o;
  if ($e(Ht, n) && (o = Ht[n], n = "%" + o[0] + "%"), $e(ee, n)) {
    var i = ee[n];
    if (i === oe && (i = Jo(n)), typeof i > "u" && !r)
      throw new ie("intrinsic " + e + " exists, but is not available. Please file an issue!");
    return {
      alias: o,
      name: n,
      value: i
    };
  }
  throw new se("intrinsic " + e + " does not exist!");
}, fe = function(e, r) {
  if (typeof e != "string" || e.length === 0)
    throw new ie("intrinsic name must be a non-empty string");
  if (arguments.length > 1 && typeof r != "boolean")
    throw new ie('"allowMissing" argument must be a boolean');
  if (Qo(/^%?[^%]*%?$/, e) === null)
    throw new se("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
  var n = Zo(e), o = n.length > 0 ? n[0] : "", i = ei("%" + o + "%", r), a = i.name, s = i.value, l = !1, u = i.alias;
  u && (o = u[0], Go(n, Ko([0, 1], u)));
  for (var f = 1, d = !0; f < n.length; f += 1) {
    var y = n[f], h = De(y, 0, 1), p = De(y, -1);
    if ((h === '"' || h === "'" || h === "`" || p === '"' || p === "'" || p === "`") && h !== p)
      throw new se("property names with quotes must have matching quotes");
    if ((y === "constructor" || !d) && (l = !0), o += "." + y, a = "%" + o + "%", $e(ee, a))
      s = ee[a];
    else if (s != null) {
      if (!(y in s)) {
        if (!r)
          throw new ie("base intrinsic for " + e + " exists, but the property is not available.");
        return;
      }
      if (Z && f + 1 >= n.length) {
        var m = Z(s, y);
        d = !!m, d && "get" in m && !("originalValue" in m.get) ? s = m.get : s = s[y];
      } else
        d = $e(s, y), s = s[y];
      d && !l && (ee[a] = s);
    }
  }
  return s;
}, Br = { exports: {} }, Ge, Jt;
function Pt() {
  if (Jt)
    return Ge;
  Jt = 1;
  var t = fe, e = t("%Object.defineProperty%", !0) || !1;
  if (e)
    try {
      e({}, "a", { value: 1 });
    } catch {
      e = !1;
    }
  return Ge = e, Ge;
}
var ti = fe, Ce = ti("%Object.getOwnPropertyDescriptor%", !0);
if (Ce)
  try {
    Ce([], "length");
  } catch {
    Ce = null;
  }
var Ur = Ce, Kt = Pt(), ri = $r, ne = we, Gt = Ur, ni = function(e, r, n) {
  if (!e || typeof e != "object" && typeof e != "function")
    throw new ne("`obj` must be an object or a function`");
  if (typeof r != "string" && typeof r != "symbol")
    throw new ne("`property` must be a string or a symbol`");
  if (arguments.length > 3 && typeof arguments[3] != "boolean" && arguments[3] !== null)
    throw new ne("`nonEnumerable`, if provided, must be a boolean or null");
  if (arguments.length > 4 && typeof arguments[4] != "boolean" && arguments[4] !== null)
    throw new ne("`nonWritable`, if provided, must be a boolean or null");
  if (arguments.length > 5 && typeof arguments[5] != "boolean" && arguments[5] !== null)
    throw new ne("`nonConfigurable`, if provided, must be a boolean or null");
  if (arguments.length > 6 && typeof arguments[6] != "boolean")
    throw new ne("`loose`, if provided, must be a boolean");
  var o = arguments.length > 3 ? arguments[3] : null, i = arguments.length > 4 ? arguments[4] : null, a = arguments.length > 5 ? arguments[5] : null, s = arguments.length > 6 ? arguments[6] : !1, l = !!Gt && Gt(e, r);
  if (Kt)
    Kt(e, r, {
      configurable: a === null && l ? l.configurable : !a,
      enumerable: o === null && l ? l.enumerable : !o,
      value: n,
      writable: i === null && l ? l.writable : !i
    });
  else if (s || !o && !i && !a)
    e[r] = n;
  else
    throw new ri("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");
}, lt = Pt(), Lr = function() {
  return !!lt;
};
Lr.hasArrayLengthDefineBug = function() {
  if (!lt)
    return null;
  try {
    return lt([], "length", { value: 1 }).length !== 1;
  } catch {
    return !0;
  }
};
var oi = Lr, ii = fe, Qt = ni, ai = oi(), Xt = Ur, Yt = we, si = ii("%Math.floor%"), ui = function(e, r) {
  if (typeof e != "function")
    throw new Yt("`fn` is not a function");
  if (typeof r != "number" || r < 0 || r > 4294967295 || si(r) !== r)
    throw new Yt("`length` must be a positive 32-bit integer");
  var n = arguments.length > 2 && !!arguments[2], o = !0, i = !0;
  if ("length" in e && Xt) {
    var a = Xt(e, "length");
    a && !a.configurable && (o = !1), a && !a.writable && (i = !1);
  }
  return (o || i || !n) && (ai ? Qt(
    /** @type {Parameters<define>[0]} */
    e,
    "length",
    r,
    !0,
    !0
  ) : Qt(
    /** @type {Parameters<define>[0]} */
    e,
    "length",
    r
  )), e;
};
(function(t) {
  var e = At, r = fe, n = ui, o = we, i = r("%Function.prototype.apply%"), a = r("%Function.prototype.call%"), s = r("%Reflect.apply%", !0) || e.call(a, i), l = Pt(), u = r("%Math.max%");
  t.exports = function(y) {
    if (typeof y != "function")
      throw new o("a function is required");
    var h = s(e, a, arguments);
    return n(
      h,
      1 + u(0, y.length - (arguments.length - 1)),
      !0
    );
  };
  var f = function() {
    return s(e, i, arguments);
  };
  l ? l(t.exports, "apply", { value: f }) : t.exports.apply = f;
})(Br);
var li = Br.exports, Mr = fe, kr = li, ci = kr(Mr("String.prototype.indexOf")), fi = function(e, r) {
  var n = Mr(e, !!r);
  return typeof n == "function" && ci(e, ".prototype.") > -1 ? kr(n) : n;
};
const pi = {}, di = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: pi
}, Symbol.toStringTag, { value: "Module" })), yi = /* @__PURE__ */ Cn(di);
var Rt = typeof Map == "function" && Map.prototype, Qe = Object.getOwnPropertyDescriptor && Rt ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null, Be = Rt && Qe && typeof Qe.get == "function" ? Qe.get : null, Zt = Rt && Map.prototype.forEach, xt = typeof Set == "function" && Set.prototype, Xe = Object.getOwnPropertyDescriptor && xt ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null, Ue = xt && Xe && typeof Xe.get == "function" ? Xe.get : null, er = xt && Set.prototype.forEach, hi = typeof WeakMap == "function" && WeakMap.prototype, he = hi ? WeakMap.prototype.has : null, mi = typeof WeakSet == "function" && WeakSet.prototype, me = mi ? WeakSet.prototype.has : null, vi = typeof WeakRef == "function" && WeakRef.prototype, tr = vi ? WeakRef.prototype.deref : null, gi = Boolean.prototype.valueOf, bi = Object.prototype.toString, Si = Function.prototype.toString, wi = String.prototype.match, Tt = String.prototype.slice, K = String.prototype.replace, Ei = String.prototype.toUpperCase, rr = String.prototype.toLowerCase, qr = RegExp.prototype.test, nr = Array.prototype.concat, U = Array.prototype.join, Oi = Array.prototype.slice, or = Math.floor, ct = typeof BigInt == "function" ? BigInt.prototype.valueOf : null, Ye = Object.getOwnPropertySymbols, ft = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null, ue = typeof Symbol == "function" && typeof Symbol.iterator == "object", N = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === ue || !0) ? Symbol.toStringTag : null, jr = Object.prototype.propertyIsEnumerable, ir = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(t) {
  return t.__proto__;
} : null);
function ar(t, e) {
  if (t === 1 / 0 || t === -1 / 0 || t !== t || t && t > -1e3 && t < 1e3 || qr.call(/e/, e))
    return e;
  var r = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
  if (typeof t == "number") {
    var n = t < 0 ? -or(-t) : or(t);
    if (n !== t) {
      var o = String(n), i = Tt.call(e, o.length + 1);
      return K.call(o, r, "$&_") + "." + K.call(K.call(i, /([0-9]{3})/g, "$&_"), /_$/, "");
    }
  }
  return K.call(e, r, "$&_");
}
var pt = yi, sr = pt.custom, ur = zr(sr) ? sr : null, Ai = function t(e, r, n, o) {
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
    return Vr(e, i);
  if (typeof e == "number") {
    if (e === 0)
      return 1 / 0 / e > 0 ? "0" : "-0";
    var l = String(e);
    return s ? ar(e, l) : l;
  }
  if (typeof e == "bigint") {
    var u = String(e) + "n";
    return s ? ar(e, u) : u;
  }
  var f = typeof i.depth > "u" ? 5 : i.depth;
  if (typeof n > "u" && (n = 0), n >= f && f > 0 && typeof e == "object")
    return dt(e) ? "[Array]" : "[Object]";
  var d = ji(i, n);
  if (typeof o > "u")
    o = [];
  else if (Hr(o, e) >= 0)
    return "[Circular]";
  function y(E, _, I) {
    if (_ && (o = Oi.call(o), o.push(_)), I) {
      var X = {
        depth: i.depth
      };
      return J(i, "quoteStyle") && (X.quoteStyle = i.quoteStyle), t(E, X, n + 1, o);
    }
    return t(E, i, n + 1, o);
  }
  if (typeof e == "function" && !lr(e)) {
    var h = _i(e), p = Ae(e, y);
    return "[Function" + (h ? ": " + h : " (anonymous)") + "]" + (p.length > 0 ? " { " + U.call(p, ", ") + " }" : "");
  }
  if (zr(e)) {
    var m = ue ? K.call(String(e), /^(Symbol\(.*\))_[^)]*$/, "$1") : ft.call(e);
    return typeof e == "object" && !ue ? ye(m) : m;
  }
  if (Mi(e)) {
    for (var O = "<" + rr.call(String(e.nodeName)), v = e.attributes || [], A = 0; A < v.length; A++)
      O += " " + v[A].name + "=" + Wr(Pi(v[A].value), "double", i);
    return O += ">", e.childNodes && e.childNodes.length && (O += "..."), O += "</" + rr.call(String(e.nodeName)) + ">", O;
  }
  if (dt(e)) {
    if (e.length === 0)
      return "[]";
    var F = Ae(e, y);
    return d && !qi(F) ? "[" + yt(F, d) + "]" : "[ " + U.call(F, ", ") + " ]";
  }
  if (xi(e)) {
    var D = Ae(e, y);
    return !("cause" in Error.prototype) && "cause" in e && !jr.call(e, "cause") ? "{ [" + String(e) + "] " + U.call(nr.call("[cause]: " + y(e.cause), D), ", ") + " }" : D.length === 0 ? "[" + String(e) + "]" : "{ [" + String(e) + "] " + U.call(D, ", ") + " }";
  }
  if (typeof e == "object" && a) {
    if (ur && typeof e[ur] == "function" && pt)
      return pt(e, { depth: f - n });
    if (a !== "symbol" && typeof e.inspect == "function")
      return e.inspect();
  }
  if ($i(e)) {
    var Q = [];
    return Zt && Zt.call(e, function(E, _) {
      Q.push(y(_, e, !0) + " => " + y(E, e));
    }), cr("Map", Be.call(e), Q, d);
  }
  if (Ui(e)) {
    var H = [];
    return er && er.call(e, function(E) {
      H.push(y(E, e));
    }), cr("Set", Ue.call(e), H, d);
  }
  if (Di(e))
    return Ze("WeakMap");
  if (Li(e))
    return Ze("WeakSet");
  if (Bi(e))
    return Ze("WeakRef");
  if (Ni(e))
    return ye(y(Number(e)));
  if (Ci(e))
    return ye(y(ct.call(e)));
  if (Fi(e))
    return ye(gi.call(e));
  if (Ti(e))
    return ye(y(String(e)));
  if (typeof window < "u" && e === window)
    return "{ [object Window] }";
  if (typeof globalThis < "u" && e === globalThis || typeof It < "u" && e === It)
    return "{ [object globalThis] }";
  if (!Ri(e) && !lr(e)) {
    var M = Ae(e, y), k = ir ? ir(e) === Object.prototype : e instanceof Object || e.constructor === Object, C = e instanceof Object ? "" : "null prototype", q = !k && N && Object(e) === e && N in e ? Tt.call(G(e), 8, -1) : C ? "Object" : "", S = k || typeof e.constructor != "function" ? "" : e.constructor.name ? e.constructor.name + " " : "", w = S + (q || C ? "[" + U.call(nr.call([], q || [], C || []), ": ") + "] " : "");
    return M.length === 0 ? w + "{}" : d ? w + "{" + yt(M, d) + "}" : w + "{ " + U.call(M, ", ") + " }";
  }
  return String(e);
};
function Wr(t, e, r) {
  var n = (r.quoteStyle || e) === "double" ? '"' : "'";
  return n + t + n;
}
function Pi(t) {
  return K.call(String(t), /"/g, "&quot;");
}
function dt(t) {
  return G(t) === "[object Array]" && (!N || !(typeof t == "object" && N in t));
}
function Ri(t) {
  return G(t) === "[object Date]" && (!N || !(typeof t == "object" && N in t));
}
function lr(t) {
  return G(t) === "[object RegExp]" && (!N || !(typeof t == "object" && N in t));
}
function xi(t) {
  return G(t) === "[object Error]" && (!N || !(typeof t == "object" && N in t));
}
function Ti(t) {
  return G(t) === "[object String]" && (!N || !(typeof t == "object" && N in t));
}
function Ni(t) {
  return G(t) === "[object Number]" && (!N || !(typeof t == "object" && N in t));
}
function Fi(t) {
  return G(t) === "[object Boolean]" && (!N || !(typeof t == "object" && N in t));
}
function zr(t) {
  if (ue)
    return t && typeof t == "object" && t instanceof Symbol;
  if (typeof t == "symbol")
    return !0;
  if (!t || typeof t != "object" || !ft)
    return !1;
  try {
    return ft.call(t), !0;
  } catch {
  }
  return !1;
}
function Ci(t) {
  if (!t || typeof t != "object" || !ct)
    return !1;
  try {
    return ct.call(t), !0;
  } catch {
  }
  return !1;
}
var Ii = Object.prototype.hasOwnProperty || function(t) {
  return t in this;
};
function J(t, e) {
  return Ii.call(t, e);
}
function G(t) {
  return bi.call(t);
}
function _i(t) {
  if (t.name)
    return t.name;
  var e = wi.call(Si.call(t), /^function\s*([\w$]+)/);
  return e ? e[1] : null;
}
function Hr(t, e) {
  if (t.indexOf)
    return t.indexOf(e);
  for (var r = 0, n = t.length; r < n; r++)
    if (t[r] === e)
      return r;
  return -1;
}
function $i(t) {
  if (!Be || !t || typeof t != "object")
    return !1;
  try {
    Be.call(t);
    try {
      Ue.call(t);
    } catch {
      return !0;
    }
    return t instanceof Map;
  } catch {
  }
  return !1;
}
function Di(t) {
  if (!he || !t || typeof t != "object")
    return !1;
  try {
    he.call(t, he);
    try {
      me.call(t, me);
    } catch {
      return !0;
    }
    return t instanceof WeakMap;
  } catch {
  }
  return !1;
}
function Bi(t) {
  if (!tr || !t || typeof t != "object")
    return !1;
  try {
    return tr.call(t), !0;
  } catch {
  }
  return !1;
}
function Ui(t) {
  if (!Ue || !t || typeof t != "object")
    return !1;
  try {
    Ue.call(t);
    try {
      Be.call(t);
    } catch {
      return !0;
    }
    return t instanceof Set;
  } catch {
  }
  return !1;
}
function Li(t) {
  if (!me || !t || typeof t != "object")
    return !1;
  try {
    me.call(t, me);
    try {
      he.call(t, he);
    } catch {
      return !0;
    }
    return t instanceof WeakSet;
  } catch {
  }
  return !1;
}
function Mi(t) {
  return !t || typeof t != "object" ? !1 : typeof HTMLElement < "u" && t instanceof HTMLElement ? !0 : typeof t.nodeName == "string" && typeof t.getAttribute == "function";
}
function Vr(t, e) {
  if (t.length > e.maxStringLength) {
    var r = t.length - e.maxStringLength, n = "... " + r + " more character" + (r > 1 ? "s" : "");
    return Vr(Tt.call(t, 0, e.maxStringLength), e) + n;
  }
  var o = K.call(K.call(t, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, ki);
  return Wr(o, "single", e);
}
function ki(t) {
  var e = t.charCodeAt(0), r = {
    8: "b",
    9: "t",
    10: "n",
    12: "f",
    13: "r"
  }[e];
  return r ? "\\" + r : "\\x" + (e < 16 ? "0" : "") + Ei.call(e.toString(16));
}
function ye(t) {
  return "Object(" + t + ")";
}
function Ze(t) {
  return t + " { ? }";
}
function cr(t, e, r, n) {
  var o = n ? yt(r, n) : U.call(r, ", ");
  return t + " (" + e + ") {" + o + "}";
}
function qi(t) {
  for (var e = 0; e < t.length; e++)
    if (Hr(t[e], `
`) >= 0)
      return !1;
  return !0;
}
function ji(t, e) {
  var r;
  if (t.indent === "	")
    r = "	";
  else if (typeof t.indent == "number" && t.indent > 0)
    r = U.call(Array(t.indent + 1), " ");
  else
    return null;
  return {
    base: r,
    prev: U.call(Array(e + 1), r)
  };
}
function yt(t, e) {
  if (t.length === 0)
    return "";
  var r = `
` + e.prev + e.base;
  return r + U.call(t, "," + r) + `
` + e.prev;
}
function Ae(t, e) {
  var r = dt(t), n = [];
  if (r) {
    n.length = t.length;
    for (var o = 0; o < t.length; o++)
      n[o] = J(t, o) ? e(t[o], t) : "";
  }
  var i = typeof Ye == "function" ? Ye(t) : [], a;
  if (ue) {
    a = {};
    for (var s = 0; s < i.length; s++)
      a["$" + i[s]] = i[s];
  }
  for (var l in t)
    J(t, l) && (r && String(Number(l)) === l && l < t.length || ue && a["$" + l] instanceof Symbol || (qr.call(/[^\w$]/, l) ? n.push(e(l, t) + ": " + e(t[l], t)) : n.push(l + ": " + e(t[l], t))));
  if (typeof Ye == "function")
    for (var u = 0; u < i.length; u++)
      jr.call(t, i[u]) && n.push("[" + e(i[u]) + "]: " + e(t[i[u]], t));
  return n;
}
var Jr = fe, pe = fi, Wi = Ai, zi = we, Pe = Jr("%WeakMap%", !0), Re = Jr("%Map%", !0), Hi = pe("WeakMap.prototype.get", !0), Vi = pe("WeakMap.prototype.set", !0), Ji = pe("WeakMap.prototype.has", !0), Ki = pe("Map.prototype.get", !0), Gi = pe("Map.prototype.set", !0), Qi = pe("Map.prototype.has", !0), Nt = function(t, e) {
  for (var r = t, n; (n = r.next) !== null; r = n)
    if (n.key === e)
      return r.next = n.next, n.next = /** @type {NonNullable<typeof list.next>} */
      t.next, t.next = n, n;
}, Xi = function(t, e) {
  var r = Nt(t, e);
  return r && r.value;
}, Yi = function(t, e, r) {
  var n = Nt(t, e);
  n ? n.value = r : t.next = /** @type {import('.').ListNode<typeof value>} */
  {
    // eslint-disable-line no-param-reassign, no-extra-parens
    key: e,
    next: t.next,
    value: r
  };
}, Zi = function(t, e) {
  return !!Nt(t, e);
}, ea = function() {
  var e, r, n, o = {
    assert: function(i) {
      if (!o.has(i))
        throw new zi("Side channel does not contain " + Wi(i));
    },
    get: function(i) {
      if (Pe && i && (typeof i == "object" || typeof i == "function")) {
        if (e)
          return Hi(e, i);
      } else if (Re) {
        if (r)
          return Ki(r, i);
      } else if (n)
        return Xi(n, i);
    },
    has: function(i) {
      if (Pe && i && (typeof i == "object" || typeof i == "function")) {
        if (e)
          return Ji(e, i);
      } else if (Re) {
        if (r)
          return Qi(r, i);
      } else if (n)
        return Zi(n, i);
      return !1;
    },
    set: function(i, a) {
      Pe && i && (typeof i == "object" || typeof i == "function") ? (e || (e = new Pe()), Vi(e, i, a)) : Re ? (r || (r = new Re()), Gi(r, i, a)) : (n || (n = { key: {}, next: null }), Yi(n, i, a));
    }
  };
  return o;
}, ta = String.prototype.replace, ra = /%20/g, et = {
  RFC1738: "RFC1738",
  RFC3986: "RFC3986"
}, Ft = {
  default: et.RFC3986,
  formatters: {
    RFC1738: function(t) {
      return ta.call(t, ra, "+");
    },
    RFC3986: function(t) {
      return String(t);
    }
  },
  RFC1738: et.RFC1738,
  RFC3986: et.RFC3986
}, na = Ft, tt = Object.prototype.hasOwnProperty, Y = Array.isArray, B = function() {
  for (var t = [], e = 0; e < 256; ++e)
    t.push("%" + ((e < 16 ? "0" : "") + e.toString(16)).toUpperCase());
  return t;
}(), oa = function(e) {
  for (; e.length > 1; ) {
    var r = e.pop(), n = r.obj[r.prop];
    if (Y(n)) {
      for (var o = [], i = 0; i < n.length; ++i)
        typeof n[i] < "u" && o.push(n[i]);
      r.obj[r.prop] = o;
    }
  }
}, Kr = function(e, r) {
  for (var n = r && r.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, o = 0; o < e.length; ++o)
    typeof e[o] < "u" && (n[o] = e[o]);
  return n;
}, ia = function t(e, r, n) {
  if (!r)
    return e;
  if (typeof r != "object") {
    if (Y(e))
      e.push(r);
    else if (e && typeof e == "object")
      (n && (n.plainObjects || n.allowPrototypes) || !tt.call(Object.prototype, r)) && (e[r] = !0);
    else
      return [e, r];
    return e;
  }
  if (!e || typeof e != "object")
    return [e].concat(r);
  var o = e;
  return Y(e) && !Y(r) && (o = Kr(e, n)), Y(e) && Y(r) ? (r.forEach(function(i, a) {
    if (tt.call(e, a)) {
      var s = e[a];
      s && typeof s == "object" && i && typeof i == "object" ? e[a] = t(s, i, n) : e.push(i);
    } else
      e[a] = i;
  }), e) : Object.keys(r).reduce(function(i, a) {
    var s = r[a];
    return tt.call(i, a) ? i[a] = t(i[a], s, n) : i[a] = s, i;
  }, o);
}, aa = function(e, r) {
  return Object.keys(r).reduce(function(n, o) {
    return n[o] = r[o], n;
  }, e);
}, sa = function(t, e, r) {
  var n = t.replace(/\+/g, " ");
  if (r === "iso-8859-1")
    return n.replace(/%[0-9a-f]{2}/gi, unescape);
  try {
    return decodeURIComponent(n);
  } catch {
    return n;
  }
}, ua = function(e, r, n, o, i) {
  if (e.length === 0)
    return e;
  var a = e;
  if (typeof e == "symbol" ? a = Symbol.prototype.toString.call(e) : typeof e != "string" && (a = String(e)), n === "iso-8859-1")
    return escape(a).replace(/%u[0-9a-f]{4}/gi, function(f) {
      return "%26%23" + parseInt(f.slice(2), 16) + "%3B";
    });
  for (var s = "", l = 0; l < a.length; ++l) {
    var u = a.charCodeAt(l);
    if (u === 45 || u === 46 || u === 95 || u === 126 || u >= 48 && u <= 57 || u >= 65 && u <= 90 || u >= 97 && u <= 122 || i === na.RFC1738 && (u === 40 || u === 41)) {
      s += a.charAt(l);
      continue;
    }
    if (u < 128) {
      s = s + B[u];
      continue;
    }
    if (u < 2048) {
      s = s + (B[192 | u >> 6] + B[128 | u & 63]);
      continue;
    }
    if (u < 55296 || u >= 57344) {
      s = s + (B[224 | u >> 12] + B[128 | u >> 6 & 63] + B[128 | u & 63]);
      continue;
    }
    l += 1, u = 65536 + ((u & 1023) << 10 | a.charCodeAt(l) & 1023), s += B[240 | u >> 18] + B[128 | u >> 12 & 63] + B[128 | u >> 6 & 63] + B[128 | u & 63];
  }
  return s;
}, la = function(e) {
  for (var r = [{ obj: { o: e }, prop: "o" }], n = [], o = 0; o < r.length; ++o)
    for (var i = r[o], a = i.obj[i.prop], s = Object.keys(a), l = 0; l < s.length; ++l) {
      var u = s[l], f = a[u];
      typeof f == "object" && f !== null && n.indexOf(f) === -1 && (r.push({ obj: a, prop: u }), n.push(f));
    }
  return oa(r), e;
}, ca = function(e) {
  return Object.prototype.toString.call(e) === "[object RegExp]";
}, fa = function(e) {
  return !e || typeof e != "object" ? !1 : !!(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e));
}, pa = function(e, r) {
  return [].concat(e, r);
}, da = function(e, r) {
  if (Y(e)) {
    for (var n = [], o = 0; o < e.length; o += 1)
      n.push(r(e[o]));
    return n;
  }
  return r(e);
}, Gr = {
  arrayToObject: Kr,
  assign: aa,
  combine: pa,
  compact: la,
  decode: sa,
  encode: ua,
  isBuffer: fa,
  isRegExp: ca,
  maybeMap: da,
  merge: ia
}, Qr = ea, ht = Gr, ve = Ft, ya = Object.prototype.hasOwnProperty, fr = {
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
}, j = Array.isArray, ha = String.prototype.split, ma = Array.prototype.push, Xr = function(t, e) {
  ma.apply(t, j(e) ? e : [e]);
}, va = Date.prototype.toISOString, pr = ve.default, T = {
  addQueryPrefix: !1,
  allowDots: !1,
  charset: "utf-8",
  charsetSentinel: !1,
  delimiter: "&",
  encode: !0,
  encoder: ht.encode,
  encodeValuesOnly: !1,
  format: pr,
  formatter: ve.formatters[pr],
  // deprecated
  indices: !1,
  serializeDate: function(e) {
    return va.call(e);
  },
  skipNulls: !1,
  strictNullHandling: !1
}, ga = function(e) {
  return typeof e == "string" || typeof e == "number" || typeof e == "boolean" || typeof e == "symbol" || typeof e == "bigint";
}, rt = {}, ba = function t(e, r, n, o, i, a, s, l, u, f, d, y, h, p, m, O) {
  for (var v = e, A = O, F = 0, D = !1; (A = A.get(rt)) !== void 0 && !D; ) {
    var Q = A.get(e);
    if (F += 1, typeof Q < "u") {
      if (Q === F)
        throw new RangeError("Cyclic object value");
      D = !0;
    }
    typeof A.get(rt) > "u" && (F = 0);
  }
  if (typeof l == "function" ? v = l(r, v) : v instanceof Date ? v = d(v) : n === "comma" && j(v) && (v = ht.maybeMap(v, function(We) {
    return We instanceof Date ? d(We) : We;
  })), v === null) {
    if (i)
      return s && !p ? s(r, T.encoder, m, "key", y) : r;
    v = "";
  }
  if (ga(v) || ht.isBuffer(v)) {
    if (s) {
      var H = p ? r : s(r, T.encoder, m, "key", y);
      if (n === "comma" && p) {
        for (var M = ha.call(String(v), ","), k = "", C = 0; C < M.length; ++C)
          k += (C === 0 ? "" : ",") + h(s(M[C], T.encoder, m, "value", y));
        return [h(H) + (o && j(v) && M.length === 1 ? "[]" : "") + "=" + k];
      }
      return [h(H) + "=" + h(s(v, T.encoder, m, "value", y))];
    }
    return [h(r) + "=" + h(String(v))];
  }
  var q = [];
  if (typeof v > "u")
    return q;
  var S;
  if (n === "comma" && j(v))
    S = [{ value: v.length > 0 ? v.join(",") || null : void 0 }];
  else if (j(l))
    S = l;
  else {
    var w = Object.keys(v);
    S = u ? w.sort(u) : w;
  }
  for (var E = o && j(v) && v.length === 1 ? r + "[]" : r, _ = 0; _ < S.length; ++_) {
    var I = S[_], X = typeof I == "object" && typeof I.value < "u" ? I.value : v[I];
    if (!(a && X === null)) {
      var je = j(v) ? typeof n == "function" ? n(E, I) : E : E + (f ? "." + I : "[" + I + "]");
      O.set(e, F);
      var Oe = Qr();
      Oe.set(rt, O), Xr(q, t(
        X,
        je,
        n,
        o,
        i,
        a,
        s,
        l,
        u,
        f,
        d,
        y,
        h,
        p,
        m,
        Oe
      ));
    }
  }
  return q;
}, Sa = function(e) {
  if (!e)
    return T;
  if (e.encoder !== null && typeof e.encoder < "u" && typeof e.encoder != "function")
    throw new TypeError("Encoder has to be a function.");
  var r = e.charset || T.charset;
  if (typeof e.charset < "u" && e.charset !== "utf-8" && e.charset !== "iso-8859-1")
    throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
  var n = ve.default;
  if (typeof e.format < "u") {
    if (!ya.call(ve.formatters, e.format))
      throw new TypeError("Unknown format option provided.");
    n = e.format;
  }
  var o = ve.formatters[n], i = T.filter;
  return (typeof e.filter == "function" || j(e.filter)) && (i = e.filter), {
    addQueryPrefix: typeof e.addQueryPrefix == "boolean" ? e.addQueryPrefix : T.addQueryPrefix,
    allowDots: typeof e.allowDots > "u" ? T.allowDots : !!e.allowDots,
    charset: r,
    charsetSentinel: typeof e.charsetSentinel == "boolean" ? e.charsetSentinel : T.charsetSentinel,
    delimiter: typeof e.delimiter > "u" ? T.delimiter : e.delimiter,
    encode: typeof e.encode == "boolean" ? e.encode : T.encode,
    encoder: typeof e.encoder == "function" ? e.encoder : T.encoder,
    encodeValuesOnly: typeof e.encodeValuesOnly == "boolean" ? e.encodeValuesOnly : T.encodeValuesOnly,
    filter: i,
    format: n,
    formatter: o,
    serializeDate: typeof e.serializeDate == "function" ? e.serializeDate : T.serializeDate,
    skipNulls: typeof e.skipNulls == "boolean" ? e.skipNulls : T.skipNulls,
    sort: typeof e.sort == "function" ? e.sort : null,
    strictNullHandling: typeof e.strictNullHandling == "boolean" ? e.strictNullHandling : T.strictNullHandling
  };
}, wa = function(t, e) {
  var r = t, n = Sa(e), o, i;
  typeof n.filter == "function" ? (i = n.filter, r = i("", r)) : j(n.filter) && (i = n.filter, o = i);
  var a = [];
  if (typeof r != "object" || r === null)
    return "";
  var s;
  e && e.arrayFormat in fr ? s = e.arrayFormat : e && "indices" in e ? s = e.indices ? "indices" : "repeat" : s = "indices";
  var l = fr[s];
  if (e && "commaRoundTrip" in e && typeof e.commaRoundTrip != "boolean")
    throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
  var u = l === "comma" && e && e.commaRoundTrip;
  o || (o = Object.keys(r)), n.sort && o.sort(n.sort);
  for (var f = Qr(), d = 0; d < o.length; ++d) {
    var y = o[d];
    n.skipNulls && r[y] === null || Xr(a, ba(
      r[y],
      y,
      l,
      u,
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
}, le = Gr, mt = Object.prototype.hasOwnProperty, Ea = Array.isArray, R = {
  allowDots: !1,
  allowPrototypes: !1,
  allowSparse: !1,
  arrayLimit: 20,
  charset: "utf-8",
  charsetSentinel: !1,
  comma: !1,
  decoder: le.decode,
  delimiter: "&",
  depth: 5,
  ignoreQueryPrefix: !1,
  interpretNumericEntities: !1,
  parameterLimit: 1e3,
  parseArrays: !0,
  plainObjects: !1,
  strictNullHandling: !1
}, Oa = function(t) {
  return t.replace(/&#(\d+);/g, function(e, r) {
    return String.fromCharCode(parseInt(r, 10));
  });
}, Yr = function(t, e) {
  return t && typeof t == "string" && e.comma && t.indexOf(",") > -1 ? t.split(",") : t;
}, Aa = "utf8=%26%2310003%3B", Pa = "utf8=%E2%9C%93", Ra = function(e, r) {
  var n = {}, o = r.ignoreQueryPrefix ? e.replace(/^\?/, "") : e, i = r.parameterLimit === 1 / 0 ? void 0 : r.parameterLimit, a = o.split(r.delimiter, i), s = -1, l, u = r.charset;
  if (r.charsetSentinel)
    for (l = 0; l < a.length; ++l)
      a[l].indexOf("utf8=") === 0 && (a[l] === Pa ? u = "utf-8" : a[l] === Aa && (u = "iso-8859-1"), s = l, l = a.length);
  for (l = 0; l < a.length; ++l)
    if (l !== s) {
      var f = a[l], d = f.indexOf("]="), y = d === -1 ? f.indexOf("=") : d + 1, h, p;
      y === -1 ? (h = r.decoder(f, R.decoder, u, "key"), p = r.strictNullHandling ? null : "") : (h = r.decoder(f.slice(0, y), R.decoder, u, "key"), p = le.maybeMap(
        Yr(f.slice(y + 1), r),
        function(m) {
          return r.decoder(m, R.decoder, u, "value");
        }
      )), p && r.interpretNumericEntities && u === "iso-8859-1" && (p = Oa(p)), f.indexOf("[]=") > -1 && (p = Ea(p) ? [p] : p), mt.call(n, h) ? n[h] = le.combine(n[h], p) : n[h] = p;
    }
  return n;
}, xa = function(t, e, r, n) {
  for (var o = n ? e : Yr(e, r), i = t.length - 1; i >= 0; --i) {
    var a, s = t[i];
    if (s === "[]" && r.parseArrays)
      a = [].concat(o);
    else {
      a = r.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
      var l = s.charAt(0) === "[" && s.charAt(s.length - 1) === "]" ? s.slice(1, -1) : s, u = parseInt(l, 10);
      !r.parseArrays && l === "" ? a = { 0: o } : !isNaN(u) && s !== l && String(u) === l && u >= 0 && r.parseArrays && u <= r.arrayLimit ? (a = [], a[u] = o) : l !== "__proto__" && (a[l] = o);
    }
    o = a;
  }
  return o;
}, Ta = function(e, r, n, o) {
  if (e) {
    var i = n.allowDots ? e.replace(/\.([^.[]+)/g, "[$1]") : e, a = /(\[[^[\]]*])/, s = /(\[[^[\]]*])/g, l = n.depth > 0 && a.exec(i), u = l ? i.slice(0, l.index) : i, f = [];
    if (u) {
      if (!n.plainObjects && mt.call(Object.prototype, u) && !n.allowPrototypes)
        return;
      f.push(u);
    }
    for (var d = 0; n.depth > 0 && (l = s.exec(i)) !== null && d < n.depth; ) {
      if (d += 1, !n.plainObjects && mt.call(Object.prototype, l[1].slice(1, -1)) && !n.allowPrototypes)
        return;
      f.push(l[1]);
    }
    return l && f.push("[" + i.slice(l.index) + "]"), xa(f, r, n, o);
  }
}, Na = function(e) {
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
    delimiter: typeof e.delimiter == "string" || le.isRegExp(e.delimiter) ? e.delimiter : R.delimiter,
    // eslint-disable-next-line no-implicit-coercion, no-extra-parens
    depth: typeof e.depth == "number" || e.depth === !1 ? +e.depth : R.depth,
    ignoreQueryPrefix: e.ignoreQueryPrefix === !0,
    interpretNumericEntities: typeof e.interpretNumericEntities == "boolean" ? e.interpretNumericEntities : R.interpretNumericEntities,
    parameterLimit: typeof e.parameterLimit == "number" ? e.parameterLimit : R.parameterLimit,
    parseArrays: e.parseArrays !== !1,
    plainObjects: typeof e.plainObjects == "boolean" ? e.plainObjects : R.plainObjects,
    strictNullHandling: typeof e.strictNullHandling == "boolean" ? e.strictNullHandling : R.strictNullHandling
  };
}, Fa = function(t, e) {
  var r = Na(e);
  if (t === "" || t === null || typeof t > "u")
    return r.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
  for (var n = typeof t == "string" ? Ra(t, r) : t, o = r.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, i = Object.keys(n), a = 0; a < i.length; ++a) {
    var s = i[a], l = Ta(s, n[s], r, typeof t == "string");
    o = le.merge(o, l, r);
  }
  return r.allowSparse === !0 ? o : le.compact(o);
}, Ca = wa, Ia = Fa, _a = Ft, dr = {
  formats: _a,
  parse: Ia,
  stringify: Ca
}, yr = {
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
}, nt = function(t) {
  var e = Zr(), r = Object.keys(yr).find(function(o) {
    return o === t;
  });
  if (!r)
    return null;
  var n = yr[r][e] || null;
  return n;
}, $ = {
  loginInvalidCode: [10002],
  successCode: [200],
  codeKey: "code",
  messageKey: "message",
  headerTokenKey: "Authorization",
  headerTokenValueMaker: function(t) {
    return "Bearer ".concat(t);
  }
}, ot, Ua = function(t) {
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
    setInstance: function(S) {
    },
    showError: function(S) {
    },
    loginInvalidWarn: function(S) {
    },
    loginInvalidCode: $.loginInvalidCode,
    successCode: $.successCode,
    codeKey: $.codeKey,
    messageKey: $.messageKey,
    headerTokenKey: $.headerTokenKey,
    headerTokenValueMaker: $.headerTokenValueMaker
  });
  var e = t.NoTokenUrls, r = e === void 0 ? [] : e, n = t.axiosCreateOptions, o = n === void 0 ? {} : n, i = t.getToken, a = t.redirectLogin, s = t.setInstance, l = t.showError, u = t.loginInvalidWarn, f = t.redirectNotFound, d = f === void 0 ? function() {
  } : f, y = t.loginInvalidCode, h = y === void 0 ? $.loginInvalidCode : y, p = t.successCode, m = p === void 0 ? $.successCode : p, O = t.codeKey, v = O === void 0 ? $.codeKey : O, A = t.messageKey, F = A === void 0 ? $.messageKey : A, D = t.headerTokenKey, Q = D === void 0 ? $.headerTokenKey : D, H = t.headerTokenValueMaker, M = H === void 0 ? $.headerTokenValueMaker : H;
  if (!i)
    throw new Error("createRequest:function getToken is required!");
  if (!a)
    throw new Error("createRequest:function redirectLogin is required!");
  if (!l)
    throw new Error("createRequest:function showError is required!");
  if (!u)
    throw new Error("createRequest:function loginInvalidWarn is required!");
  var k = function() {
    ot || (ot = u({
      title: nt("login.invalid"),
      onOk: function() {
        ot = void 0, a();
      }
    }));
  }, C = jt.create(Ie({
    // timeout: 1000,
    headers: {},
    validateStatus: function(S) {
      return S === 403 && d(), S === 401 && a(), S >= 200 && S < 300;
    },
    paramsSerializer: {
      encode: dr.parse,
      serialize: dr.stringify
    }
  }, o));
  C.interceptors.request.use(function(S) {
    if (!r.includes(S.url)) {
      var w = i();
      if (!w)
        throw k(), new Error("loginInvalid");
      S.headers[Q] = M(w);
    }
    return S;
  }, function(S) {
    return console.log("request error", S), Promise.reject(S);
  }), C.interceptors.response.use(function(S) {
    var w = S.data, E = S.config, _ = !E.responseType || E.responseType === "json", I = E.responseType === "blob";
    if (_ && w instanceof Object) {
      if (m.includes(w[v]))
        return w.data;
      throw h.includes(w[v]) ? (k(), new Error("loginInvalid")) : new Error(w[F]);
    }
    if (I && w instanceof Blob) {
      var X = S.headers["content-disposition"] || "", je = (decodeURI(X).split(";")[1] || "").split("=")[1] || "", Oe = je.split("''")[1] || "";
      return {
        data: w,
        filename: Oe
      };
    }
    return w;
  }, function(S) {
    return console.log("response error", S), Promise.reject(S);
  }), s == null || s(C);
  var q = function(S, w) {
    return w === void 0 && (w = {}), C.request(Ie({ url: S }, w)).catch(function(E) {
      if (console.log("request error", E, w), jt.isCancel(E))
        throw console.log("Request canceled", E.message), E;
      var _ = E.message === "loginInvalid", I = E.message === "Network Error";
      throw _ || l({
        message: nt("request.fail"),
        description: I ? nt("network.err") : E.message
      }), E;
    });
  };
  return q.showloginInvalidModal = k, q;
};
export {
  Ua as createRequest,
  $a as exportFile,
  Zr as getLanguage,
  nt as getTips,
  Da as hasOwnProperties,
  Ba as versionCompare
};
