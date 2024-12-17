var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, H = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, V = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (r)
    for (var e of r(t))
      H.call(t, e) && i(a, e, t[e]);
  return a;
};
var L = (a, t) => {
  var e = {};
  for (var m in a)
    p.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && H.call(a, m) && (e[m] = a[m]);
  return e;
};
import c, { forwardRef as l } from "react";
import s from "../../lib/OptiBase.mjs";
const Z = l((m, e) => {
  var o = m, { children: a } = o, t = L(o, ["children"]);
  return /* @__PURE__ */ c.createElement(s, V({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M208,34H48A14,14,0,0,0,34,48V192a14,14,0,0,0,14,14H66v34a6,6,0,0,0,9.84,4.61L122.17,206H165.1a14,14,0,0,0,9-3.25L217,167a14,14,0,0,0,5-10.76V48A14,14,0,0,0,208,34Zm2,122.25a2,2,0,0,1-.72,1.54l-42.9,35.75a2,2,0,0,1-1.28.46H120a6,6,0,0,0-3.84,1.39L78,227.19V200a6,6,0,0,0-6-6H48a2,2,0,0,1-2-2V48a2,2,0,0,1,2-2H208a2,2,0,0,1,2,2ZM174,88v48a6,6,0,0,1-12,0V88a6,6,0,0,1,12,0Zm-48,0v48a6,6,0,0,1-12,0V88a6,6,0,0,1,12,0Z" }));
});
Z.displayName = "Light";
export {
  Z as Light
};
