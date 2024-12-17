var i = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var L = (a, t, e) => t in a ? i(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, Z = (a, t) => {
  for (var e in t || (t = {}))
    c.call(t, e) && L(a, e, t[e]);
  if (m)
    for (var e of m(t))
      l.call(t, e) && L(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var o in a)
    c.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && m)
    for (var o of m(a))
      t.indexOf(o) < 0 && l.call(a, o) && (e[o] = a[o]);
  return e;
};
import r, { forwardRef as M } from "react";
import d from "../../lib/OptiBase.mjs";
const f = M((o, e) => {
  var p = o, { children: a } = p, t = n(p, ["children"]);
  return /* @__PURE__ */ r.createElement(d, Z({ ref: e }, t), a, /* @__PURE__ */ r.createElement(
    "path",
    {
      d: "M67.71,64.59l47.79,27.6L40.43,112,32.27,82a7.76,7.76,0,0,1,5.58-9.52ZM199.84,37.76a7.9,7.9,0,0,0-9.66-5.49L126.61,49.05,174.4,76.64,208,67.77Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ r.createElement("path", { d: "M216,104H102.09L210,75.51a8,8,0,0,0,5.68-9.84l-8.16-30a15.93,15.93,0,0,0-19.42-11.13L35.81,64.74a15.75,15.75,0,0,0-9.7,7.4,15.51,15.51,0,0,0-1.55,12L32,111.56c0,.14,0,.29,0,.44v88a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V112A8,8,0,0,0,216,104ZM192.16,40l6,22.07-22.62,6L147.42,51.83Zm-66.69,17.6,28.12,16.24-36.94,9.75L88.53,67.37Zm-79.4,44.62-6-22.08,26.5-7L94.69,89.4ZM208,200H48V120H208v80Z" }));
});
f.displayName = "Duotone";
export {
  f as Duotone
};
