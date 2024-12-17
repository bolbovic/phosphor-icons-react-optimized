var n = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var H = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? n(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, i = (a, t) => {
  for (var e in t || (t = {}))
    H.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      h.call(t, e) && o(a, e, t[e]);
  return a;
};
var l = (a, t) => {
  var e = {};
  for (var m in a)
    H.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && h.call(a, m) && (e[m] = a[m]);
  return e;
};
import p, { forwardRef as Z } from "react";
import c from "../../lib/OptiBase.mjs";
const f = Z((m, e) => {
  var V = m, { children: a } = V, t = l(V, ["children"]);
  return /* @__PURE__ */ p.createElement(c, i({ ref: e }, t), a, /* @__PURE__ */ p.createElement("path", { d: "M210.83,85.17l-56-56A4,4,0,0,0,152,28H56A12,12,0,0,0,44,40v72a4,4,0,0,0,8,0V40a4,4,0,0,1,4-4h92V88a4,4,0,0,0,4,4h52V216a4,4,0,0,1-4,4H168a4,4,0,0,0,0,8h32a12,12,0,0,0,12-12V88A4,4,0,0,0,210.83,85.17ZM156,41.65,198.34,84H156ZM64,148H48a4,4,0,0,0-4,4v56a4,4,0,0,0,8,0V196H64a24,24,0,0,0,0-48Zm0,40H52V156H64a16,16,0,0,1,0,32Zm87.39-33.88-19.39,31V208a4,4,0,0,1-8,0V185.15l-19.39-31a4,4,0,0,1,6.78-4.24L128,176.45l16.61-26.57a4,4,0,1,1,6.78,4.24Z" }));
});
f.displayName = "Thin";
export {
  f as Thin
};
