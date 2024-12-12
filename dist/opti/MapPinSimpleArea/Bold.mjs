var i = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? i(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, l = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && m(a, e, t[e]);
  if (r)
    for (var e of r(t))
      d.call(t, e) && m(a, e, t[e]);
  return a;
};
var s = (a, t) => {
  var e = {};
  for (var o in a)
    p.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && r)
    for (var o of r(a))
      t.indexOf(o) < 0 && d.call(a, o) && (e[o] = a[o]);
  return e;
};
import f, { forwardRef as C } from "react";
import n from "../../lib/OptiBase.mjs";
const B = C((o, e) => {
  var c = o, { children: a } = c, t = s(c, ["children"]);
  return /* @__PURE__ */ f.createElement(n, l({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M116,106.32V176a12,12,0,0,0,24,0V106.32a44,44,0,1,0-24,0ZM128,44a20,20,0,1,1-20,20A20,20,0,0,1,128,44ZM244,176c0,21.59-23.9,34-38.15,39.48C184.86,223.56,157.22,228,128,228c-57.64,0-116-17.86-116-52,0-22.23,26.12-40.2,69.88-48.06a12,12,0,1,1,4.24,23.62C51.93,157.71,36,169.78,36,176c0,4,7.12,11.07,22.77,17.08,18.3,7,42.89,10.92,69.23,10.92s50.93-3.88,69.23-10.92C212.87,187.07,220,180,220,176c0-6.22-15.93-18.29-50.12-24.44a12,12,0,1,1,4.24-23.62C217.88,135.8,244,153.77,244,176Z" }));
});
B.displayName = "Bold";
export {
  B as Bold
};
