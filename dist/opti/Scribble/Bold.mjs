var s = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, c = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && m(a, e, t[e]);
  if (o)
    for (var e of o(t))
      d.call(t, e) && m(a, e, t[e]);
  return a;
};
var f = (a, t) => {
  var e = {};
  for (var l in a)
    p.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && o)
    for (var l of o(a))
      t.indexOf(l) < 0 && d.call(a, l) && (e[l] = a[l]);
  return e;
};
import i, { forwardRef as L } from "react";
import n from "../../lib/OptiBase.mjs";
const B = L((l, e) => {
  var r = l, { children: a } = r, t = f(r, ["children"]);
  return /* @__PURE__ */ i.createElement(n, c({ ref: e }, t), a, /* @__PURE__ */ i.createElement("path", { d: "M208.5,192.49a10.6,10.6,0,0,0,0,15,12,12,0,0,1-17,17,34.62,34.62,0,0,1,0-49l9.37-9.37a10.63,10.63,0,0,0-15-15l-66.76,66.75a34.63,34.63,0,0,1-49-49l98.76-98.75a10.63,10.63,0,0,0-15-15L87.11,121.86a34.63,34.63,0,0,1-49-49L79.51,31.51a12,12,0,1,1,17,17L55.1,89.86a10.63,10.63,0,0,0,15,15l66.76-66.75a34.63,34.63,0,1,1,49,49L87.11,185.86a10.63,10.63,0,0,0,15,15l66.75-66.75a34.63,34.63,0,0,1,49,49Z" }));
});
B.displayName = "Bold";
export {
  B as Bold
};
