var s = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, A = (a, t) => {
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
import f, { forwardRef as L } from "react";
import M from "../../lib/OptiBase.mjs";
const V = L((r, e) => {
  var m = r, { children: a } = m, t = c(m, ["children"]);
  return /* @__PURE__ */ f.createElement(M, A({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M221.92,210.62a8,8,0,1,1-11.84,10.76L168,175.09v48.6a8.29,8.29,0,0,1-3.91,7.18,8,8,0,0,1-9-.56L85.25,176H40a16,16,0,0,1-16-16V96A16,16,0,0,1,40,80H81.55L50.08,45.38A8,8,0,0,1,61.92,34.62ZM200.53,160a8.17,8.17,0,0,0,7.47-8.25V104.27A8.17,8.17,0,0,0,200.53,96a8,8,0,0,0-8.53,8v48A8,8,0,0,0,200.53,160ZM161,119.87a4,4,0,0,0,7-2.7V32.24a8.25,8.25,0,0,0-2.88-6.39,8,8,0,0,0-10-.16L111.83,59.33a4,4,0,0,0-.5,5.85ZM231.47,80A8.17,8.17,0,0,0,224,88.27v79.46a8.17,8.17,0,0,0,7.47,8.25,8,8,0,0,0,8.53-8V88A8,8,0,0,0,231.47,80Z" }));
});
V.displayName = "Fill";
export {
  V as Fill
};