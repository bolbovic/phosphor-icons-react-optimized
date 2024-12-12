var c = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var H = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, i = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && H(a, e, t[e]);
  if (m)
    for (var e of m(t))
      Z.call(t, e) && H(a, e, t[e]);
  return a;
};
var p = (a, t) => {
  var e = {};
  for (var V in a)
    o.call(a, V) && t.indexOf(V) < 0 && (e[V] = a[V]);
  if (a != null && m)
    for (var V of m(a))
      t.indexOf(V) < 0 && Z.call(a, V) && (e[V] = a[V]);
  return e;
};
import A, { forwardRef as f } from "react";
import h from "../../lib/OptiBase.mjs";
const s = f((V, e) => {
  var r = V, { children: a } = r, t = p(r, ["children"]);
  return /* @__PURE__ */ A.createElement(h, i({ ref: e }, t), a, /* @__PURE__ */ A.createElement("path", { d: "M90,144V128a6,6,0,0,1,12,0v16a6,6,0,0,1-12,0Zm38,6a6,6,0,0,0,6-6V120a6,6,0,0,0-12,0v24A6,6,0,0,0,128,150Zm32,0a6,6,0,0,0,6-6V112a6,6,0,0,0-12,0v32A6,6,0,0,0,160,150Zm54-72V178h10a6,6,0,0,1,0,12H134v20.84a22,22,0,1,1-12,0V190H32a6,6,0,0,1,0-12H42V78H40A14,14,0,0,1,26,64V48A14,14,0,0,1,40,34H216a14,14,0,0,1,14,14V64a14,14,0,0,1-14,14ZM128,222a10,10,0,1,0,10,10A10,10,0,0,0,128,222ZM40,66H216a2,2,0,0,0,2-2V48a2,2,0,0,0-2-2H40a2,2,0,0,0-2,2V64A2,2,0,0,0,40,66ZM202,78H54V178H202Z" }));
});
s.displayName = "Light";
export {
  s as Light
};
