var s = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var L = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && L(a, e, t[e]);
  if (r)
    for (var e of r(t))
      i.call(t, e) && L(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var l in a)
    o.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && r)
    for (var l of r(a))
      t.indexOf(l) < 0 && i.call(a, l) && (e[l] = a[l]);
  return e;
};
import f, { forwardRef as A } from "react";
import Z from "../../lib/OptiBase.mjs";
const d = A((l, e) => {
  var m = l, { children: a } = m, t = c(m, ["children"]);
  return /* @__PURE__ */ f.createElement(Z, p({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M246,92.68a13.94,13.94,0,0,0-4.1-9.9L173.21,14.1a14,14,0,0,0-19.8,0L124.68,42.83,66.22,64.76a14,14,0,0,0-8.9,10.8L34.08,215A6,6,0,0,0,40,222a6.61,6.61,0,0,0,1-.08l139.44-23.24a14,14,0,0,0,10.81-8.9l21.92-58.46,28.74-28.74A13.92,13.92,0,0,0,246,92.68Zm-66,92.89a2,2,0,0,1-1.54,1.27L57.49,207l52.87-52.88a26,26,0,1,0-8.48-8.48L49,198.53l20.17-121A2,2,0,0,1,70.43,76l56.06-21L201,129.51ZM110,132a14,14,0,1,1,14,14A14,14,0,0,1,110,132ZM233.41,94.1,208,119.51,136.48,48,161.9,22.58a2,2,0,0,1,2.83,0l68.68,68.69a2,2,0,0,1,0,2.83Z" }));
});
d.displayName = "Light";
export {
  d as Light
};
