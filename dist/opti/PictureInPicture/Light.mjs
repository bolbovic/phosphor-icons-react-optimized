var s = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, H = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, c = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (m)
    for (var e of m(t))
      H.call(t, e) && i(a, e, t[e]);
  return a;
};
var f = (a, t) => {
  var e = {};
  for (var r in a)
    p.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && H.call(a, r) && (e[r] = a[r]);
  return e;
};
import h, { forwardRef as A } from "react";
import V from "../../lib/OptiBase.mjs";
const d = A((r, e) => {
  var o = r, { children: a } = o, t = f(o, ["children"]);
  return /* @__PURE__ */ h.createElement(V, c({ ref: e }, t), a, /* @__PURE__ */ h.createElement("path", { d: "M216,50H40A14,14,0,0,0,26,64V192a14,14,0,0,0,14,14H216a14,14,0,0,0,14-14V64A14,14,0,0,0,216,50ZM38,192V64a2,2,0,0,1,2-2H216a2,2,0,0,1,2,2v58H136a6,6,0,0,0-6,6v66H40A2,2,0,0,1,38,192Zm178,2H142V134h76v58A2,2,0,0,1,216,194Z" }));
});
d.displayName = "Light";
export {
  d as Light
};
