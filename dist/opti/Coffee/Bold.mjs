var A = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, H = Object.prototype.propertyIsEnumerable;
var V = (a, m, e) => m in a ? A(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, Z = (a, m) => {
  for (var e in m || (m = {}))
    p.call(m, e) && V(a, e, m[e]);
  if (o)
    for (var e of o(m))
      H.call(m, e) && V(a, e, m[e]);
  return a;
};
var d = (a, m) => {
  var e = {};
  for (var t in a)
    p.call(a, t) && m.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && o)
    for (var t of o(a))
      m.indexOf(t) < 0 && H.call(a, t) && (e[t] = a[t]);
  return e;
};
import l, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const i = c((t, e) => {
  var r = t, { children: a } = r, m = d(r, ["children"]);
  return /* @__PURE__ */ l.createElement(f, Z({ ref: e }, m), a, /* @__PURE__ */ l.createElement("path", { d: "M212,76H32A12,12,0,0,0,20,88v48a100.24,100.24,0,0,0,26.73,68H32a12,12,0,0,0,0,24H208a12,12,0,0,0,0-24H193.27a100.75,100.75,0,0,0,20-32A44,44,0,0,0,256,128v-8A44.05,44.05,0,0,0,212,76Zm-16,60a76.27,76.27,0,0,1-42,68H86a76.27,76.27,0,0,1-42-68V100H196Zm36-8a20,20,0,0,1-12.57,18.55A97.17,97.17,0,0,0,220,136V101.68A20,20,0,0,1,232,120ZM68,48V24a12,12,0,0,1,24,0V48a12,12,0,0,1-24,0Zm40,0V24a12,12,0,0,1,24,0V48a12,12,0,0,1-24,0Zm40,0V24a12,12,0,0,1,24,0V48a12,12,0,0,1-24,0Z" }));
});
i.displayName = "Bold";
export {
  i as Bold
};
