var n = Object.defineProperty;
var h = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, H = Object.prototype.propertyIsEnumerable;
var V = (e, m, a) => m in e ? n(e, m, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[m] = a, Z = (e, m) => {
  for (var a in m || (m = {}))
    o.call(m, a) && V(e, a, m[a]);
  if (h)
    for (var a of h(m))
      H.call(m, a) && V(e, a, m[a]);
  return e;
};
var i = (e, m) => {
  var a = {};
  for (var t in e)
    o.call(e, t) && m.indexOf(t) < 0 && (a[t] = e[t]);
  if (e != null && h)
    for (var t of h(e))
      m.indexOf(t) < 0 && H.call(e, t) && (a[t] = e[t]);
  return a;
};
import p, { forwardRef as A } from "react";
import c from "../../lib/OptiBase.mjs";
const f = A((t, a) => {
  var r = t, { children: e } = r, m = i(r, ["children"]);
  return /* @__PURE__ */ p.createElement(c, Z({ ref: a }, m), e, /* @__PURE__ */ p.createElement("path", { d: "M200,44H56A12,12,0,0,0,44,56V200a12,12,0,0,0,12,12H200a12,12,0,0,0,12-12V56A12,12,0,0,0,200,44Zm-68,72h72v24H132Zm0-8V84h72v24Zm0,40h72v24H132Zm72-92V76H132V52h68A4,4,0,0,1,204,56ZM52,200V56a4,4,0,0,1,4-4h68V204H56A4,4,0,0,1,52,200Zm148,4H132V180h72v20A4,4,0,0,1,200,204Z" }));
});
f.displayName = "Thin";
export {
  f as Thin
};
