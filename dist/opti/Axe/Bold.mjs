var s = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var r = (a, l, e) => l in a ? s(a, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[l] = e, d = (a, l) => {
  for (var e in l || (l = {}))
    c.call(l, e) && r(a, e, l[e]);
  if (m)
    for (var e of m(l))
      p.call(l, e) && r(a, e, l[e]);
  return a;
};
var f = (a, l) => {
  var e = {};
  for (var t in a)
    c.call(a, t) && l.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      l.indexOf(t) < 0 && p.call(a, t) && (e[t] = a[t]);
  return e;
};
import i, { forwardRef as Z } from "react";
import n from "../../lib/OptiBase.mjs";
const A = Z((t, e) => {
  var o = t, { children: a } = o, l = f(o, ["children"]);
  return /* @__PURE__ */ i.createElement(n, d({ ref: e }, l), a, /* @__PURE__ */ i.createElement("path", { d: "M254.93,96.43A20,20,0,0,0,238.56,83,122,122,0,0,1,198.7,70.54l3.92-3.92a32,32,0,0,0-45.26-45.26l-6.69,6.69a20,20,0,0,0-30.15-2.21L81.84,64.52a20,20,0,0,0,2.21,30.16L9.36,169.38a32,32,0,0,0,45.25,45.26l71.92-71.93A122,122,0,0,1,139,182.57a20,20,0,0,0,34,11.58L250.13,117A19.86,19.86,0,0,0,254.93,96.43Zm-80.6-58.1a8,8,0,1,1,11.32,11.32l-7.58,7.57a135.65,135.65,0,0,1-11.94-10.68ZM37.64,197.67a8,8,0,0,1-11.31-11.32l76.21-76.21a135.65,135.65,0,0,1,10.68,11.94Zm123.88-26c-9-48.5-39.27-78.44-59.38-93.47l32-32c15,20.11,45,50.34,93.45,59.38Z" }));
});
A.displayName = "Bold";
export {
  A as Bold
};
