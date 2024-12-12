var n = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var h = (a, V, e) => V in a ? n(a, V, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[V] = e, l = (a, V) => {
  for (var e in V || (V = {}))
    o.call(V, e) && h(a, e, V[e]);
  if (r)
    for (var e of r(V))
      i.call(V, e) && h(a, e, V[e]);
  return a;
};
var p = (a, V) => {
  var e = {};
  for (var t in a)
    o.call(a, t) && V.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && r)
    for (var t of r(a))
      V.indexOf(t) < 0 && i.call(a, t) && (e[t] = a[t]);
  return e;
};
import H, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const s = c((t, e) => {
  var m = t, { children: a } = m, V = p(m, ["children"]);
  return /* @__PURE__ */ H.createElement(f, l({ ref: e }, V), a, /* @__PURE__ */ H.createElement("path", { d: "M226.06,148.57,188,125.74V104a4,4,0,0,0-2-3.47L132,69.68V44h20a4,4,0,0,0,0-8H132V16a4,4,0,0,0-8,0V36H104a4,4,0,0,0,0,8h20V69.68L70,100.53A4,4,0,0,0,68,104v21.74L29.94,148.57A4,4,0,0,0,28,152v64a4,4,0,0,0,4,4h80a4,4,0,0,0,4-4V168a12,12,0,0,1,24,0v48a4,4,0,0,0,4,4h80a4,4,0,0,0,4-4V152A4,4,0,0,0,226.06,148.57ZM36,154.26l32-19.2V212H36ZM128,148a20,20,0,0,0-20,20v44H76V106.32l52-29.71,52,29.71V212H148V168A20,20,0,0,0,128,148Zm92,64H188V135.06l32,19.2Z" }));
});
s.displayName = "Thin";
export {
  s as Thin
};
