var c = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, h = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var r in a)
    i.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import Z, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const H = f((r, e) => {
  var A = r, { children: a } = A, t = n(A, ["children"]);
  return /* @__PURE__ */ Z.createElement(s, h({ ref: e }, t), a, /* @__PURE__ */ Z.createElement("path", { d: "M232,124H185.68A68,68,0,0,0,128,20a4,4,0,0,0-4,4V70.32A68,68,0,0,0,20,128a4,4,0,0,0,4,4H70.32A68,68,0,0,0,128,236a4,4,0,0,0,4-4V185.68A68,68,0,0,0,236,128,4,4,0,0,0,232,124ZM188,88a59.28,59.28,0,0,1-12,36H132V28.13A60.08,60.08,0,0,1,188,88ZM88,68a59.28,59.28,0,0,1,36,12v44H28.13A60.08,60.08,0,0,1,88,68ZM68,168a59.28,59.28,0,0,1,12-36h44v95.87A60.08,60.08,0,0,1,68,168Zm100,20a59.28,59.28,0,0,1-36-12V132h95.87A60.08,60.08,0,0,1,168,188Z" }));
});
H.displayName = "Thin";
export {
  H as Thin
};
