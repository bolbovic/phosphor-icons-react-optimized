var A = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, V = Object.prototype.propertyIsEnumerable;
var l = (a, t, e) => t in a ? A(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, i = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && l(a, e, t[e]);
  if (r)
    for (var e of r(t))
      V.call(t, e) && l(a, e, t[e]);
  return a;
};
var p = (a, t) => {
  var e = {};
  for (var m in a)
    o.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && V.call(a, m) && (e[m] = a[m]);
  return e;
};
import v, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const s = c((m, e) => {
  var h = m, { children: a } = h, t = p(h, ["children"]);
  return /* @__PURE__ */ v.createElement(f, i({ ref: e }, t), a, /* @__PURE__ */ v.createElement("path", { d: "M144,16H112A64.07,64.07,0,0,0,48,80v96a64.07,64.07,0,0,0,64,64h32a64.07,64.07,0,0,0,64-64V80A64.07,64.07,0,0,0,144,16Zm48,64v24H152V88a16,16,0,0,0-16-16V32h8A48.05,48.05,0,0,1,192,80ZM112,32h8V72a16,16,0,0,0-16,16v16H64V80A48.05,48.05,0,0,1,112,32Zm32,192H112a48.05,48.05,0,0,1-48-48V120h40v16a16,16,0,0,0,16,16h16a16,16,0,0,0,16-16V120h40v56A48.05,48.05,0,0,1,144,224Z" }));
});
s.displayName = "Fill";
export {
  s as Fill
};
