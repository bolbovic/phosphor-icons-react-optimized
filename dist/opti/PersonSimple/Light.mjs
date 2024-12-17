var d = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var c = (a, t, e) => t in a ? d(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, s = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && c(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && c(a, e, t[e]);
  return a;
};
var L = (a, t) => {
  var e = {};
  for (var r in a)
    i.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import f, { forwardRef as h } from "react";
import l from "../../lib/OptiBase.mjs";
const n = h((r, e) => {
  var o = r, { children: a } = o, t = L(o, ["children"]);
  return /* @__PURE__ */ f.createElement(l, s({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M128,78A30,30,0,1,0,98,48,30,30,0,0,0,128,78Zm0-48a18,18,0,1,1-18,18A18,18,0,0,1,128,30ZM229.14,131.09a6,6,0,0,1-8.23,2c-.37-.21-36.49-21.43-86.91-23v39.61L196.48,220a6,6,0,0,1-9,8L128,161,68.48,228a6,6,0,0,1-9-8L122,149.72V110.11c-50.42,1.6-86.55,22.82-86.92,23a6,6,0,0,1-6.17-10.29C30.6,121.84,71,98,128,98s97.39,23.84,99.09,24.86A6,6,0,0,1,229.14,131.09Z" }));
});
n.displayName = "Light";
export {
  n as Light
};
