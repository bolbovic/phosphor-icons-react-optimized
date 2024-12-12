var n = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var H = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var A = (a, t, e) => t in a ? n(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, i = (a, t) => {
  for (var e in t || (t = {}))
    H.call(t, e) && A(a, e, t[e]);
  if (r)
    for (var e of r(t))
      h.call(t, e) && A(a, e, t[e]);
  return a;
};
var p = (a, t) => {
  var e = {};
  for (var m in a)
    H.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && h.call(a, m) && (e[m] = a[m]);
  return e;
};
import V, { forwardRef as Z } from "react";
import c from "../../lib/OptiBase.mjs";
const f = Z((m, e) => {
  var o = m, { children: a } = o, t = p(o, ["children"]);
  return /* @__PURE__ */ V.createElement(c, i({ ref: e }, t), a, /* @__PURE__ */ V.createElement("path", { d: "M97.53,132.3a4,4,0,0,0-4.36.87L70.34,156H48a4,4,0,0,0-4,4v40a4,4,0,0,0,4,4H70.34l22.83,22.83A4,4,0,0,0,100,224V136A4,4,0,0,0,97.53,132.3Zm-5.53,82L74.83,197.17A4,4,0,0,0,72,196H52V164H72a4,4,0,0,0,2.83-1.17L92,145.66ZM148,180a36.52,36.52,0,0,1-18,31.45,4,4,0,0,1-4-6.9,28.5,28.5,0,0,0,0-49.1,4,4,0,0,1,4-6.9A36.52,36.52,0,0,1,148,180Zm62.83-94.83-56-56A4,4,0,0,0,152,28H56A12,12,0,0,0,44,40v80a4,4,0,0,0,8,0V40a4,4,0,0,1,4-4h92V88a4,4,0,0,0,4,4h52V216a4,4,0,0,1-4,4H168a4,4,0,0,0,0,8h32a12,12,0,0,0,12-12V88A4,4,0,0,0,210.83,85.17ZM156,41.65,198.34,84H156Z" }));
});
f.displayName = "Thin";
export {
  f as Thin
};
