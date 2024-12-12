var l = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var H = (a, t, e) => t in a ? l(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, Z = (a, t) => {
  for (var e in t || (t = {}))
    c.call(t, e) && H(a, e, t[e]);
  if (m)
    for (var e of m(t))
      n.call(t, e) && H(a, e, t[e]);
  return a;
};
var i = (a, t) => {
  var e = {};
  for (var o in a)
    c.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && m)
    for (var o of m(a))
      t.indexOf(o) < 0 && n.call(a, o) && (e[o] = a[o]);
  return e;
};
import r, { forwardRef as d } from "react";
import f from "../../lib/OptiBase.mjs";
const h = d((o, e) => {
  var p = o, { children: a } = p, t = i(p, ["children"]);
  return /* @__PURE__ */ r.createElement(f, Z({ ref: e }, t), a, /* @__PURE__ */ r.createElement("path", { d: "M224,48V208H32V48Z", opacity: "0.2" }), /* @__PURE__ */ r.createElement("path", { d: "M96,148a20,20,0,0,0-20-20,8,8,0,0,1-6.55-12.59L88.63,88H56a8,8,0,0,1,0-16h48a8,8,0,0,1,6.55,12.59l-21,30A36,36,0,0,1,76,184a35.71,35.71,0,0,1-25.71-10.81A8,8,0,1,1,61.71,162,20,20,0,0,0,96,148Zm64-76a56,56,0,0,1,0,112H136a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8Zm0,16H144v80h16a40,40,0,0,0,0-80ZM32,56H224a8,8,0,0,0,0-16H32a8,8,0,0,0,0,16ZM224,200H32a8,8,0,0,0,0,16H224a8,8,0,0,0,0-16Z" }));
});
h.displayName = "Duotone";
export {
  h as Duotone
};
