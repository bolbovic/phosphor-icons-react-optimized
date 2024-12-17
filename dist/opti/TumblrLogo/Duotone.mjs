var n = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var m = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var h = (a, t, e) => t in a ? n(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, v = (a, t) => {
  for (var e in t || (t = {}))
    m.call(t, e) && h(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && h(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var o in a)
    m.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && r)
    for (var o of r(a))
      t.indexOf(o) < 0 && p.call(a, o) && (e[o] = a[o]);
  return e;
};
import H, { forwardRef as i } from "react";
import d from "../../lib/OptiBase.mjs";
const f = i((o, e) => {
  var V = o, { children: a } = V, t = c(V, ["children"]);
  return /* @__PURE__ */ H.createElement(d, v({ ref: e }, t), a, /* @__PURE__ */ H.createElement(
    "path",
    {
      d: "M144,112v56a16,16,0,0,0,16,16h32v48H152a56,56,0,0,1-56-56V112H64V72h0a48,48,0,0,0,48-48h32V72h48v40Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ H.createElement("path", { d: "M192,120a8,8,0,0,0,8-8V72a8,8,0,0,0-8-8H152V24a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8A40,40,0,0,1,64,64a8,8,0,0,0-8,8v40a8,8,0,0,0,8,8H88v56a64.07,64.07,0,0,0,64,64h40a8,8,0,0,0,8-8V184a8,8,0,0,0-8-8H160a8,8,0,0,1-8-8V120Zm-32,72h24v32H152a48.05,48.05,0,0,1-48-48V112a8,8,0,0,0-8-8H72V79.43A56.13,56.13,0,0,0,119.43,32H136V72a8,8,0,0,0,8,8h40v24H144a8,8,0,0,0-8,8v56A24,24,0,0,0,160,192Z" }));
});
f.displayName = "Duotone";
export {
  f as Duotone
};
