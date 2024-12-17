var h = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var H = (a, t, e) => t in a ? h(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, d = (a, t) => {
  for (var e in t || (t = {}))
    l.call(t, e) && H(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && H(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var o in a)
    l.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && r)
    for (var o of r(a))
      t.indexOf(o) < 0 && p.call(a, o) && (e[o] = a[o]);
  return e;
};
import f, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const A = i((o, e) => {
  var m = o, { children: a } = m, t = c(m, ["children"]);
  return /* @__PURE__ */ f.createElement(s, d({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M228,224a12,12,0,0,1-12,12H40a12,12,0,0,1,0-24H216A12,12,0,0,1,228,224Zm0-80v32a20,20,0,0,1-20,20H48a20,20,0,0,1-20-20V144a20,20,0,0,1,20-20H96L83.55,54.33A36,36,0,0,1,119,12h18a36,36,0,0,1,35.44,42.33L160,124h48A20,20,0,0,1,228,144ZM107.17,50.11,120.37,124h15.26l13.2-73.89A12,12,0,0,0,137,36H119a12,12,0,0,0-11.82,14.11ZM204,148H52v24H204Z" }));
});
A.displayName = "Bold";
export {
  A as Bold
};
