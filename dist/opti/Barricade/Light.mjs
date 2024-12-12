var V = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var h = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var H = (a, t, e) => t in a ? V(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    h.call(t, e) && H(a, e, t[e]);
  if (r)
    for (var e of r(t))
      i.call(t, e) && H(a, e, t[e]);
  return a;
};
var A = (a, t) => {
  var e = {};
  for (var m in a)
    h.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && i.call(a, m) && (e[m] = a[m]);
  return e;
};
import L, { forwardRef as l } from "react";
import Z from "../../lib/OptiBase.mjs";
const c = l((m, e) => {
  var o = m, { children: a } = o, t = A(o, ["children"]);
  return /* @__PURE__ */ L.createElement(Z, p({ ref: e }, t), a, /* @__PURE__ */ L.createElement("path", { d: "M224,66H32A14,14,0,0,0,18,80v72a14,14,0,0,0,14,14H58v34a6,6,0,0,0,12,0V166H186v34a6,6,0,0,0,12,0V166h26a14,14,0,0,0,14-14V80A14,14,0,0,0,224,66Zm2,14v53.52L170.48,78H224A2,2,0,0,1,226,80ZM32,78H81.52l76,76h-55L30,81.52V80A2,2,0,0,1,32,78Zm-2,74V98.48L85.52,154H32A2,2,0,0,1,30,152Zm194,2H174.48l-76-76h55L226,150.48V152A2,2,0,0,1,224,154Z" }));
});
c.displayName = "Light";
export {
  c as Light
};
