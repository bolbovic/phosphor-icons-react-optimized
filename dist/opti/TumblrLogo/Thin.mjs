var v = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var V = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? v(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, i = (a, t) => {
  for (var e in t || (t = {}))
    V.call(t, e) && o(a, e, t[e]);
  if (m)
    for (var e of m(t))
      h.call(t, e) && o(a, e, t[e]);
  return a;
};
var p = (a, t) => {
  var e = {};
  for (var r in a)
    V.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && h.call(a, r) && (e[r] = a[r]);
  return e;
};
import n, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const s = c((r, e) => {
  var H = r, { children: a } = H, t = p(H, ["children"]);
  return /* @__PURE__ */ n.createElement(f, i({ ref: e }, t), a, /* @__PURE__ */ n.createElement("path", { d: "M192,116a4,4,0,0,0,4-4V72a4,4,0,0,0-4-4H148V24a4,4,0,0,0-4-4H112a4,4,0,0,0-4,4A44.05,44.05,0,0,1,64,68a4,4,0,0,0-4,4v40a4,4,0,0,0,4,4H92v60a60.07,60.07,0,0,0,60,60h40a4,4,0,0,0,4-4V184a4,4,0,0,0-4-4H160a12,12,0,0,1-12-12V116Zm-32,72h28v40H152a52.06,52.06,0,0,1-52-52V112a4,4,0,0,0-4-4H68V75.85A52.09,52.09,0,0,0,115.85,28H140V72a4,4,0,0,0,4,4h44v32H144a4,4,0,0,0-4,4v56A20,20,0,0,0,160,188Z" }));
});
s.displayName = "Thin";
export {
  s as Thin
};
