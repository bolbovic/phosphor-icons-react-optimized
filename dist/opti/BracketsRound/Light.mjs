var d = Object.defineProperty;
var c = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? d(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, s = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (c)
    for (var e of c(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var f = (a, t) => {
  var e = {};
  for (var r in a)
    i.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && c)
    for (var r of c(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import C, { forwardRef as h } from "react";
import l from "../../lib/OptiBase.mjs";
const n = h((r, e) => {
  var m = r, { children: a } = m, t = f(m, ["children"]);
  return /* @__PURE__ */ C.createElement(l, s({ ref: e }, t), a, /* @__PURE__ */ C.createElement("path", { d: "M56.52,64C44.23,81.46,38,103,38,128s6.23,46.54,18.52,64c9.17,13,18.49,18.81,18.59,18.87a6,6,0,0,1-6.2,10.27C67.16,220.09,26,194.63,26,128S67.16,35.91,68.91,34.86a6,6,0,0,1,6.2,10.27C75,45.19,65.69,51,56.52,64ZM187.09,34.86a6,6,0,0,0-6.2,10.27c.1.06,9.42,5.84,18.59,18.87C211.77,81.46,218,103,218,128s-6.23,46.54-18.52,64c-9.17,13-18.49,18.81-18.57,18.85a6,6,0,1,0,6.18,10.29c1.75-1,42.91-26.51,42.91-93.14S188.84,35.91,187.09,34.86Z" }));
});
n.displayName = "Light";
export {
  n as Light
};
