var h = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? h(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, H = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (m)
    for (var e of m(t))
      n.call(t, e) && i(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var r in a)
    p.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && n.call(a, r) && (e[r] = a[r]);
  return e;
};
import f, { forwardRef as l } from "react";
import s from "../../lib/OptiBase.mjs";
const A = l((r, e) => {
  var o = r, { children: a } = o, t = c(o, ["children"]);
  return /* @__PURE__ */ f.createElement(s, H({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M208,36H48A12,12,0,0,0,36,48V208a12,12,0,0,0,12,12H208a12,12,0,0,0,12-12V48A12,12,0,0,0,208,36Zm4,172a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V48a4,4,0,0,1,4-4H208a4,4,0,0,1,4,4ZM155.28,85.71a4,4,0,0,1,.48,3.66l-32,88A4,4,0,0,1,120,180a4.12,4.12,0,0,1-1.37-.24,4,4,0,0,1-2.39-5.13L146.29,92H104a4,4,0,0,1,0-8h48A4,4,0,0,1,155.28,85.71Z" }));
});
A.displayName = "Thin";
export {
  A as Thin
};
