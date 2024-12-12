var s = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var L = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    L.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      i.call(t, e) && o(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var l in a)
    L.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && r)
    for (var l of r(a))
      t.indexOf(l) < 0 && i.call(a, l) && (e[l] = a[l]);
  return e;
};
import f, { forwardRef as d } from "react";
import h from "../../lib/OptiBase.mjs";
const n = d((l, e) => {
  var m = l, { children: a } = m, t = c(m, ["children"]);
  return /* @__PURE__ */ f.createElement(h, p({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M221.62,58.38a56.06,56.06,0,0,0-79.16,0L128,72.24l-14.44-13.9a56,56,0,0,0-79.2,79.21l89.37,90.66a6,6,0,0,0,8.55,0l89.33-90.63A56.06,56.06,0,0,0,221.62,58.38Zm-8.51,70.75L128,215.45,42.89,129.1a44,44,0,0,1,62.23-62.24l.08.08,14.16,13.64L107.85,91.66a6,6,0,0,0-.08,8.56L135.53,128l-11.76,11.76a6,6,0,1,0,8.49,8.48l16-16a6,6,0,0,0,0-8.49L120.58,96.06l30.24-29.12a.3.3,0,0,0,.08-.08,44,44,0,1,1,62.21,62.27Z" }));
});
n.displayName = "Light";
export {
  n as Light
};
