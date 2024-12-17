var Z = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? Z(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, c = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (m)
    for (var e of m(t))
      n.call(t, e) && i(a, e, t[e]);
  return a;
};
var f = (a, t) => {
  var e = {};
  for (var r in a)
    p.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && n.call(a, r) && (e[r] = a[r]);
  return e;
};
import s, { forwardRef as d } from "react";
import h from "../../lib/OptiBase.mjs";
const l = d((r, e) => {
  var o = r, { children: a } = o, t = f(o, ["children"]);
  return /* @__PURE__ */ s.createElement(h, c({ ref: e }, t), a, /* @__PURE__ */ s.createElement("path", { d: "M132,156.29V88a4,4,0,0,0-8,0v68.29a28,28,0,1,0,8,0ZM128,204a20,20,0,1,1,20-20A20,20,0,0,1,128,204Zm36-68V48a36,36,0,0,0-72,0v88a60,60,0,1,0,72,0ZM128,236a52,52,0,0,1-29.71-94.68A4,4,0,0,0,100,138V48a28,28,0,0,1,56,0v90a4,4,0,0,0,1.71,3.28A52,52,0,0,1,128,236Z" }));
});
l.displayName = "Thin";
export {
  l as Thin
};
