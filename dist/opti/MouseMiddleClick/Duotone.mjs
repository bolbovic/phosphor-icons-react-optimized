var A = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, v = Object.prototype.propertyIsEnumerable;
var V = (a, t, e) => t in a ? A(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, c = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && V(a, e, t[e]);
  if (m)
    for (var e of m(t))
      v.call(t, e) && V(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var o in a)
    p.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && m)
    for (var o of m(a))
      t.indexOf(o) < 0 && v.call(a, o) && (e[o] = a[o]);
  return e;
};
import h, { forwardRef as H } from "react";
import Z from "../../lib/OptiBase.mjs";
const i = H((o, e) => {
  var r = o, { children: a } = r, t = n(r, ["children"]);
  return /* @__PURE__ */ h.createElement(Z, c({ ref: e }, t), a, /* @__PURE__ */ h.createElement(
    "path",
    {
      d: "M144,88v48a8,8,0,0,1-8,8H120a8,8,0,0,1-8-8V88a8,8,0,0,1,8-8h16A8,8,0,0,1,144,88Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ h.createElement("path", { d: "M144,16H112A64.07,64.07,0,0,0,48,80v96a64.07,64.07,0,0,0,64,64h32a64.07,64.07,0,0,0,64-64V80A64.07,64.07,0,0,0,144,16Zm48,64v24H152V88a16,16,0,0,0-16-16V32h8A48.05,48.05,0,0,1,192,80Zm-56,56H120V88h16v23.9a.51.51,0,0,0,0,.2ZM112,32h8V72a16,16,0,0,0-16,16v16H64V80A48.05,48.05,0,0,1,112,32Zm32,192H112a48.05,48.05,0,0,1-48-48V120h40v16a16,16,0,0,0,16,16h16a16,16,0,0,0,16-16V120h40v56A48.05,48.05,0,0,1,144,224Z" }));
});
i.displayName = "Duotone";
export {
  i as Duotone
};
