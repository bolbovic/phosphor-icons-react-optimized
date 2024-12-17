var i = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? i(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, c = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && m(a, e, t[e]);
  if (r)
    for (var e of r(t))
      d.call(t, e) && m(a, e, t[e]);
  return a;
};
var f = (a, t) => {
  var e = {};
  for (var o in a)
    p.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && r)
    for (var o of r(a))
      t.indexOf(o) < 0 && d.call(a, o) && (e[o] = a[o]);
  return e;
};
import h, { forwardRef as s } from "react";
import A from "../../lib/OptiBase.mjs";
const H = s((o, e) => {
  var l = o, { children: a } = l, t = f(l, ["children"]);
  return /* @__PURE__ */ h.createElement(A, c({ ref: e }, t), a, /* @__PURE__ */ h.createElement("path", { d: "M216.07,31.12a12,12,0,0,0-16.95.81L195.42,36H128A91.95,91.95,0,0,0,57.8,187.39L39.12,207.93a12,12,0,1,0,17.76,16.14l18.67-20.53A91.48,91.48,0,0,0,128,220h72a12,12,0,0,0,0-24H128a67.51,67.51,0,0,1-36.12-10.43L133.31,140H200a12,12,0,0,0,0-24H155.13l61.75-67.93A12,12,0,0,0,216.07,31.12ZM74.13,169.42a67.75,67.75,0,0,1-13-29.42h39.79ZM61.08,116A68.1,68.1,0,0,1,128,60h45.6l-50.91,56Z" }));
});
H.displayName = "Bold";
export {
  H as Bold
};
