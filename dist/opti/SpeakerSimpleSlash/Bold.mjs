var c = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var p = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, L = (a, t) => {
  for (var e in t || (t = {}))
    d.call(t, e) && p(a, e, t[e]);
  if (r)
    for (var e of r(t))
      l.call(t, e) && p(a, e, t[e]);
  return a;
};
var V = (a, t) => {
  var e = {};
  for (var o in a)
    d.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && r)
    for (var o of r(a))
      t.indexOf(o) < 0 && l.call(a, o) && (e[o] = a[o]);
  return e;
};
import Z, { forwardRef as f } from "react";
import i from "../../lib/OptiBase.mjs";
const s = f((o, e) => {
  var m = o, { children: a } = m, t = V(m, ["children"]);
  return /* @__PURE__ */ Z.createElement(i, L({ ref: e }, t), a, /* @__PURE__ */ Z.createElement("path", { d: "M248,88v80a12,12,0,0,1-24,0V88a12,12,0,0,1,24,0ZM224.88,207.93a12,12,0,1,1-17.76,16.14L172,185.44V224a12,12,0,0,1-19.37,9.47L83.88,180H40a20,20,0,0,1-20-20V96A20,20,0,0,1,40,76H72.51L47.12,48.07A12,12,0,0,1,64.88,31.93ZM148,159,94.33,100H44v56H88a12,12,0,0,1,7.37,2.53L148,199.46Zm-14.15-91.5,14.15-11v38.4a12,12,0,0,0,24,0V32a12,12,0,0,0-19.37-9.47L119.12,48.6a12,12,0,1,0,14.73,18.94ZM200,150.94a12,12,0,0,0,12-12V104a12,12,0,0,0-24,0v34.94A12,12,0,0,0,200,150.94Z" }));
});
s.displayName = "Bold";
export {
  s as Bold
};
