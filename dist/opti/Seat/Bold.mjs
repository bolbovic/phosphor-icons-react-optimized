var i = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, H = Object.prototype.propertyIsEnumerable;
var r = (a, t, e) => t in a ? i(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, c = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && r(a, e, t[e]);
  if (m)
    for (var e of m(t))
      H.call(t, e) && r(a, e, t[e]);
  return a;
};
var d = (a, t) => {
  var e = {};
  for (var l in a)
    p.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && m)
    for (var l of m(a))
      t.indexOf(l) < 0 && H.call(a, l) && (e[l] = a[l]);
  return e;
};
import f, { forwardRef as s } from "react";
import L from "../../lib/OptiBase.mjs";
const n = s((l, e) => {
  var o = l, { children: a } = o, t = d(o, ["children"]);
  return /* @__PURE__ */ f.createElement(L, c({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M228,232a12,12,0,0,1-12,12H112a12,12,0,0,1,0-24H216A12,12,0,0,1,228,232Zm0-72v28a20,20,0,0,1-20,20H112.1a19.9,19.9,0,0,1-17.89-11.06L38.1,85a20.12,20.12,0,0,1,0-17.9L60.22,23a20,20,0,0,1,26.72-9l29.81,14.27.18.09a20,20,0,0,1,8.95,26.83l-.17.33L112.5,80.08,142.25,140H208A20,20,0,0,1,228,160Zm-24,4H139.77a19.9,19.9,0,0,1-17.89-11.06l-31.79-64a20.07,20.07,0,0,1,0-17.86c.06-.11.12-.22.17-.33l12.2-22.62L79.91,37.3,60.47,76l54.1,108H204Z" }));
});
n.displayName = "Bold";
export {
  n as Bold
};