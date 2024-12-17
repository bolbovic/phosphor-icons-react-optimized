var h = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var H = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var p = (a, t, e) => t in a ? h(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, l = (a, t) => {
  for (var e in t || (t = {}))
    H.call(t, e) && p(a, e, t[e]);
  if (r)
    for (var e of r(t))
      d.call(t, e) && p(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var o in a)
    H.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && r)
    for (var o of r(a))
      t.indexOf(o) < 0 && d.call(a, o) && (e[o] = a[o]);
  return e;
};
import f, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const A = i((o, e) => {
  var m = o, { children: a } = m, t = c(m, ["children"]);
  return /* @__PURE__ */ f.createElement(s, l({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M228,88h0a99.63,99.63,0,0,0-16.18-54.55,12,12,0,0,0-10-5.45H54.23a12,12,0,0,0-10,5.45A99.63,99.63,0,0,0,28,88h0a100.15,100.15,0,0,0,88,99.28V212H88a12,12,0,0,0,0,24h80a12,12,0,0,0,0-24H140V187.28A100.15,100.15,0,0,0,228,88ZM61.05,52H195a75.43,75.43,0,0,1,8.1,24H53A75.43,75.43,0,0,1,61.05,52Zm67,112a76.12,76.12,0,0,1-75-64H203A76.12,76.12,0,0,1,128,164Z" }));
});
A.displayName = "Bold";
export {
  A as Bold
};
