var s = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, n = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (m)
    for (var e of m(t))
      h.call(t, e) && i(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var r in a)
    p.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && h.call(a, r) && (e[r] = a[r]);
  return e;
};
import f, { forwardRef as d } from "react";
import l from "../../lib/OptiBase.mjs";
const A = d((r, e) => {
  var o = r, { children: a } = o, t = c(o, ["children"]);
  return /* @__PURE__ */ f.createElement(l, n({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M236,127A108.44,108.44,0,0,0,54.46,56.69,107.53,107.53,0,0,0,20,127a12,12,0,0,0,12,13h92v60a28,28,0,0,0,56,0,4,4,0,0,0-8,0,20,20,0,0,1-40,0V140h92a12,12,0,0,0,12-13Zm-9,3.74a4,4,0,0,1-3,1.3H32a4,4,0,0,1-4-4.38,100.43,100.43,0,0,1,168.1-65,99.53,99.53,0,0,1,31.88,65A4,4,0,0,1,226.93,130.7Z" }));
});
A.displayName = "Thin";
export {
  A as Thin
};
