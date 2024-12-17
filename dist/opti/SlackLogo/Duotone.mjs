var M = Object.defineProperty;
var A = Object.getOwnPropertySymbols;
var Z = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable;
var V = (a, t, e) => t in a ? M(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, H = (a, t) => {
  for (var e in t || (t = {}))
    Z.call(t, e) && V(a, e, t[e]);
  if (A)
    for (var e of A(t))
      r.call(t, e) && V(a, e, t[e]);
  return a;
};
var p = (a, t) => {
  var e = {};
  for (var h in a)
    Z.call(a, h) && t.indexOf(h) < 0 && (e[h] = a[h]);
  if (a != null && A)
    for (var h of A(a))
      t.indexOf(h) < 0 && r.call(a, h) && (e[h] = a[h]);
  return e;
};
import m, { forwardRef as c } from "react";
import n from "../../lib/OptiBase.mjs";
const i = c((h, e) => {
  var o = h, { children: a } = o, t = p(o, ["children"]);
  return /* @__PURE__ */ m.createElement(n, H({ ref: e }, t), a, /* @__PURE__ */ m.createElement(
    "path",
    {
      d: "M224,152h0a24,24,0,0,1-24,24H152a24,24,0,0,1,24,24h0a24,24,0,0,1-24,24h0a24,24,0,0,1-24-24V176h24a24,24,0,0,1-24-24V128h72A24,24,0,0,1,224,152ZM104,80h24V56a24,24,0,0,0-24-24h0A24,24,0,0,0,80,56h0a24,24,0,0,0,24,24H56a24,24,0,0,0-24,24h0a24,24,0,0,0,24,24h72V104A24,24,0,0,0,104,80Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ m.createElement("path", { d: "M221.13,128A32,32,0,0,0,184,76.31V56a32,32,0,0,0-56-21.13A32,32,0,0,0,76.31,72H56a32,32,0,0,0-21.13,56A32,32,0,0,0,72,179.69V200a32,32,0,0,0,56,21.13A32,32,0,0,0,179.69,184H200a32,32,0,0,0,21.13-56ZM200,88a16,16,0,0,1,0,32H184V104A16,16,0,0,1,200,88ZM152,40a16,16,0,0,1,16,16v48a16,16,0,0,1-16,16H136V56A16,16,0,0,1,152,40ZM88,56a16,16,0,0,1,32,0V72H104A16,16,0,0,1,88,56ZM40,104A16,16,0,0,1,56,88h48a16,16,0,0,1,16,16v16H56A16,16,0,0,1,40,104Zm16,64a16,16,0,0,1,0-32H72v16A16,16,0,0,1,56,168Zm48,48a16,16,0,0,1-16-16V152a16,16,0,0,1,16-16h16v64A16,16,0,0,1,104,216Zm64-16a16,16,0,0,1-32,0V184h16A16,16,0,0,1,168,200Zm32-32H152a16,16,0,0,1-16-16V136h64a16,16,0,0,1,0,32Z" }));
});
i.displayName = "Duotone";
export {
  i as Duotone
};
