var s = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, L = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (l)
    for (var e of l(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var r in a)
    i.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && l)
    for (var r of l(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import f, { forwardRef as d } from "react";
import h from "../../lib/OptiBase.mjs";
const n = d((r, e) => {
  var m = r, { children: a } = m, t = c(m, ["children"]);
  return /* @__PURE__ */ f.createElement(h, L({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M204.25,188.24a16.63,16.63,0,0,0,0,23.52,6,6,0,1,1-8.48,8.48,28.61,28.61,0,0,1,0-40.48l9.37-9.38a16.63,16.63,0,0,0-23.52-23.51l-66.75,66.75a28.63,28.63,0,0,1-40.49-40.49l98.76-98.75a16.63,16.63,0,0,0-23.52-23.51L82.86,117.62A28.63,28.63,0,0,1,42.37,77.13L83.75,35.76a6,6,0,1,1,8.49,8.48L50.86,85.62a16.63,16.63,0,0,0,23.52,23.51l66.75-66.75a28.63,28.63,0,0,1,40.49,40.49L82.86,181.62a16.63,16.63,0,0,0,23.52,23.51l66.76-66.75a28.63,28.63,0,0,1,40.49,40.49Z" }));
});
n.displayName = "Light";
export {
  n as Light
};
