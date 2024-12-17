var A = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? A(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, V = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var H in a)
    i.call(a, H) && t.indexOf(H) < 0 && (e[H] = a[H]);
  if (a != null && m)
    for (var H of m(a))
      t.indexOf(H) < 0 && p.call(a, H) && (e[H] = a[H]);
  return e;
};
import n, { forwardRef as Z } from "react";
import f from "../../lib/OptiBase.mjs";
const s = Z((H, e) => {
  var r = H, { children: a } = r, t = c(r, ["children"]);
  return /* @__PURE__ */ n.createElement(f, V({ ref: e }, t), a, /* @__PURE__ */ n.createElement("path", { d: "M208,84H92V56a36,36,0,0,1,36-36c17.24,0,32.75,12.38,36.08,28.8a4,4,0,1,0,7.84-1.6C167.78,26.81,149.31,12,128,12A44.05,44.05,0,0,0,84,56V84H48A12,12,0,0,0,36,96V208a12,12,0,0,0,12,12H208a12,12,0,0,0,12-12V96A12,12,0,0,0,208,84ZM44,124H212v24H44Zm0,32H212v24H44Zm4-64H208a4,4,0,0,1,4,4v20H44V96A4,4,0,0,1,48,92ZM208,212H48a4,4,0,0,1-4-4V188H212v20A4,4,0,0,1,208,212Z" }));
});
s.displayName = "Thin";
export {
  s as Thin
};
