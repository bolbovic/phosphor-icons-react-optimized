var d = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? d(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && m(a, e, t[e]);
  if (r)
    for (var e of r(t))
      i.call(t, e) && m(a, e, t[e]);
  return a;
};
var f = (a, t) => {
  var e = {};
  for (var l in a)
    o.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && r)
    for (var l of r(a))
      t.indexOf(l) < 0 && i.call(a, l) && (e[l] = a[l]);
  return e;
};
import s, { forwardRef as n } from "react";
import M from "../../lib/OptiBase.mjs";
const Z = n((l, e) => {
  var c = l, { children: a } = c, t = f(c, ["children"]);
  return /* @__PURE__ */ s.createElement(M, p({ ref: e }, t), a, /* @__PURE__ */ s.createElement("path", { d: "M96,56a32,32,0,1,1,32,32A32,32,0,0,1,96,56ZM221,99.36c-1.5-1.2-37.22-29-89.51,6.57C86,136.84,59.57,126.23,59.32,126.12a8,8,0,1,0-6.63,14.56c.61.28,7.49,3.27,19.67,3.27,14.21,0,35.64-4.11,62.77-21.29-2.28,29.41-12.73,83.47-73.43,101.68a8,8,0,1,0,4.6,15.32c34.83-10.45,59.45-32.34,73.2-65.08a141.86,141.86,0,0,0,5.1-14.33l22.08,18.4-14.27,42.82a8,8,0,0,0,15.18,5.06l16-48a8,8,0,0,0-2.47-8.68l-32.42-27a215.91,215.91,0,0,0,3-30.34c36.18-18.57,59-.85,59.28-.65a8,8,0,1,0,10-12.48ZM64,112A16,16,0,1,0,48,96,16,16,0,0,0,64,112Z" }));
});
Z.displayName = "Fill";
export {
  Z as Fill
};
