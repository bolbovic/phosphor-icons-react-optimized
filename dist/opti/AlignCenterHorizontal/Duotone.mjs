var n = Object.defineProperty;
var H = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, v = Object.prototype.propertyIsEnumerable;
var V = (a, t, e) => t in a ? n(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, c = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && V(a, e, t[e]);
  if (H)
    for (var e of H(t))
      v.call(t, e) && V(a, e, t[e]);
  return a;
};
var h = (a, t) => {
  var e = {};
  for (var o in a)
    p.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && H)
    for (var o of H(a))
      t.indexOf(o) < 0 && v.call(a, o) && (e[o] = a[o]);
  return e;
};
import r, { forwardRef as i } from "react";
import Z from "../../lib/OptiBase.mjs";
const d = i((o, e) => {
  var m = o, { children: a } = m, t = h(m, ["children"]);
  return /* @__PURE__ */ r.createElement(Z, c({ ref: e }, t), a, /* @__PURE__ */ r.createElement(
    "path",
    {
      d: "M64,104V64a8,8,0,0,1,8-8H184a8,8,0,0,1,8,8v40a8,8,0,0,1-8,8H72A8,8,0,0,1,64,104Zm144,40H48a8,8,0,0,0-8,8v40a8,8,0,0,0,8,8H208a8,8,0,0,0,8-8V152A8,8,0,0,0,208,144Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ r.createElement("path", { d: "M208,136H136V120h48a16,16,0,0,0,16-16V64a16,16,0,0,0-16-16H136V32a8,8,0,0,0-16,0V48H72A16,16,0,0,0,56,64v40a16,16,0,0,0,16,16h48v16H48a16,16,0,0,0-16,16v40a16,16,0,0,0,16,16h72v16a8,8,0,0,0,16,0V208h72a16,16,0,0,0,16-16V152A16,16,0,0,0,208,136ZM72,64H184v40H72ZM208,192H48V152H208v40Z" }));
});
d.displayName = "Duotone";
export {
  d as Duotone
};
