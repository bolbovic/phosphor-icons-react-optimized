var i = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var L = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var m = (a, e, l) => e in a ? i(a, e, { enumerable: !0, configurable: !0, writable: !0, value: l }) : a[e] = l, d = (a, e) => {
  for (var l in e || (e = {}))
    L.call(e, l) && m(a, l, e[l]);
  if (o)
    for (var l of o(e))
      p.call(e, l) && m(a, l, e[l]);
  return a;
};
var c = (a, e) => {
  var l = {};
  for (var t in a)
    L.call(a, t) && e.indexOf(t) < 0 && (l[t] = a[t]);
  if (a != null && o)
    for (var t of o(a))
      e.indexOf(t) < 0 && p.call(a, t) && (l[t] = a[t]);
  return l;
};
import f, { forwardRef as s } from "react";
import Z from "../../lib/OptiBase.mjs";
const n = s((t, l) => {
  var r = t, { children: a } = r, e = c(r, ["children"]);
  return /* @__PURE__ */ f.createElement(Z, d({ ref: l }, e), a, /* @__PURE__ */ f.createElement("path", { d: "M250.18,105.17,186.71,41.25a100.11,100.11,0,0,0-141.43,0l-.13.14L31.37,55.61a12,12,0,1,0,17.24,16.7L62.32,58.16A75.68,75.68,0,0,1,77.49,46.43L119,88,25.85,181.16a20,20,0,0,0,0,28.29l20.69,20.69a20,20,0,0,0,28.28,0L168,137l1.51,1.51h0l23.65,23.66a20,20,0,0,0,28.29,0l28.69-28.7A20,20,0,0,0,250.18,105.17ZM60.68,210.34l-15-15L108,133l15,15ZM140,131l-15-15,19.51-19.51a12,12,0,0,0,0-17L102.24,37.24a75.94,75.94,0,0,1,67.47,20.95l31.44,31.67L178,113l-1.51-1.51a12,12,0,0,0-17,0Zm67.32,11.31L195,130l23.09-23.09,12.3,12.39Z" }));
});
n.displayName = "Bold";
export {
  n as Bold
};
