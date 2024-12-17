var n = Object.defineProperty;
var V = Object.getOwnPropertySymbols;
var v = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? n(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, h = (a, t) => {
  for (var e in t || (t = {}))
    v.call(t, e) && m(a, e, t[e]);
  if (V)
    for (var e of V(t))
      p.call(t, e) && m(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var o in a)
    v.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && V)
    for (var o of V(a))
      t.indexOf(o) < 0 && p.call(a, o) && (e[o] = a[o]);
  return e;
};
import r, { forwardRef as i } from "react";
import Z from "../../lib/OptiBase.mjs";
const d = i((o, e) => {
  var H = o, { children: a } = H, t = c(H, ["children"]);
  return /* @__PURE__ */ r.createElement(Z, h({ ref: e }, t), a, /* @__PURE__ */ r.createElement(
    "path",
    {
      d: "M240,120v48a8,8,0,0,1-8,8H24a8,8,0,0,1-8-8V120a8,8,0,0,1,8-8V72a8,8,0,0,1,8-8H224a8,8,0,0,1,8,8v40A8,8,0,0,1,240,120Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ r.createElement("path", { d: "M240,106.17V72a16,16,0,0,0-16-16H32A16,16,0,0,0,16,72v34.17A16,16,0,0,0,8,120v48a16,16,0,0,0,16,16h8v16a8,8,0,0,0,16,0V184H208v16a8,8,0,0,0,16,0V184h8a16,16,0,0,0,16-16V120A16,16,0,0,0,240,106.17ZM224,104h-8a16,16,0,0,0-16,16v16H136V72h88ZM120,72v64H56V120a16,16,0,0,0-16-16H32V72Zm112,96H24V120H40v24a8,8,0,0,0,8,8H208a8,8,0,0,0,8-8V120h16Z" }));
});
d.displayName = "Duotone";
export {
  d as Duotone
};
