var n = Object.defineProperty;
var H = Object.getOwnPropertySymbols;
var m = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var V = (a, h, e) => h in a ? n(a, h, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[h] = e, i = (a, h) => {
  for (var e in h || (h = {}))
    m.call(h, e) && V(a, e, h[e]);
  if (H)
    for (var e of H(h))
      o.call(h, e) && V(a, e, h[e]);
  return a;
};
var p = (a, h) => {
  var e = {};
  for (var t in a)
    m.call(a, t) && h.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && H)
    for (var t of H(a))
      h.indexOf(t) < 0 && o.call(a, t) && (e[t] = a[t]);
  return e;
};
import Z, { forwardRef as M } from "react";
import c from "../../lib/OptiBase.mjs";
const f = M((t, e) => {
  var r = t, { children: a } = r, h = p(r, ["children"]);
  return /* @__PURE__ */ Z.createElement(c, i({ ref: e }, h), a, /* @__PURE__ */ Z.createElement("path", { d: "M188,136a4,4,0,0,1-4,4H172v12a4,4,0,0,1-8,0V140H152a4,4,0,0,1,0-8h12V120a4,4,0,0,1,8,0v12h12A4,4,0,0,1,188,136Zm-84-4H72a4,4,0,0,0,0,8h32a4,4,0,0,0,0-8ZM236,88v96a12,12,0,0,1-12,12H32a12,12,0,0,1-12-12V88A12,12,0,0,1,32,76H52V56A12,12,0,0,1,64,44H96a12,12,0,0,1,12,12V76h40V56a12,12,0,0,1,12-12h32a12,12,0,0,1,12,12V76h20A12,12,0,0,1,236,88ZM156,76h40V56a4,4,0,0,0-4-4H160a4,4,0,0,0-4,4ZM60,76h40V56a4,4,0,0,0-4-4H64a4,4,0,0,0-4,4ZM228,88a4,4,0,0,0-4-4H32a4,4,0,0,0-4,4v96a4,4,0,0,0,4,4H224a4,4,0,0,0,4-4Z" }));
});
f.displayName = "Thin";
export {
  f as Thin
};
