var s = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, L = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (l)
    for (var e of l(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var r in a)
    i.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && l)
    for (var r of l(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import f, { forwardRef as d } from "react";
import n from "../../lib/OptiBase.mjs";
const V = d((r, e) => {
  var m = r, { children: a } = m, t = c(m, ["children"]);
  return /* @__PURE__ */ f.createElement(n, L({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm59.43,129.07a8,8,0,0,1-4,14.93,7.92,7.92,0,0,1-4-1.07L136,141.86V192a8,8,0,0,1-16,0V141.86L76.57,166.93A8,8,0,0,1,65.65,164a8,8,0,0,1,2.92-10.93L112,128,68.57,102.93a8,8,0,0,1,8-13.86L120,114.14V64a8,8,0,0,1,16,0v50.14l43.43-25.07a8,8,0,0,1,8,13.86L144,128Z" }));
});
V.displayName = "Fill";
export {
  V as Fill
};
