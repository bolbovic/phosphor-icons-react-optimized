var s = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, c = (a, t) => {
  for (var e in t || (t = {}))
    l.call(t, e) && i(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && i(a, e, t[e]);
  return a;
};
var f = (a, t) => {
  var e = {};
  for (var r in a)
    l.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import h, { forwardRef as d } from "react";
import n from "../../lib/OptiBase.mjs";
const H = d((r, e) => {
  var o = r, { children: a } = o, t = f(o, ["children"]);
  return /* @__PURE__ */ h.createElement(n, c({ ref: e }, t), a, /* @__PURE__ */ h.createElement("path", { d: "M228.24,172.24l-48,48a6,6,0,0,1-8.48-8.48L209.51,174H88A62,62,0,0,1,88,50h88a6,6,0,0,1,0,12H88a50,50,0,0,0,0,100H209.51l-37.75-37.76a6,6,0,0,1,8.48-8.48l48,48A6,6,0,0,1,228.24,172.24Z" }));
});
H.displayName = "Light";
export {
  H as Light
};
