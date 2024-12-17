var n = Object.defineProperty;
var H = Object.getOwnPropertySymbols;
var r = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var Z = (e, t, a) => t in e ? n(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, h = (e, t) => {
  for (var a in t || (t = {}))
    r.call(t, a) && Z(e, a, t[a]);
  if (H)
    for (var a of H(t))
      p.call(t, a) && Z(e, a, t[a]);
  return e;
};
var c = (e, t) => {
  var a = {};
  for (var m in e)
    r.call(e, m) && t.indexOf(m) < 0 && (a[m] = e[m]);
  if (e != null && H)
    for (var m of H(e))
      t.indexOf(m) < 0 && p.call(e, m) && (a[m] = e[m]);
  return a;
};
import o, { forwardRef as v } from "react";
import M from "../../lib/OptiBase.mjs";
const i = v((m, a) => {
  var V = m, { children: e } = V, t = c(V, ["children"]);
  return /* @__PURE__ */ o.createElement(M, h({ ref: a }, t), e, /* @__PURE__ */ o.createElement(
    "path",
    {
      d: "M224,64V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V64a8,8,0,0,1,8-8H216A8,8,0,0,1,224,64Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ o.createElement("path", { d: "M216,48H40A16,16,0,0,0,24,64V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V64A16,16,0,0,0,216,48ZM104,144V112h48v32Zm48,16v32H104V160ZM40,112H88v32H40Zm64-16V64h48V96Zm64,16h48v32H168Zm48-16H168V64h48ZM88,64V96H40V64ZM40,160H88v32H40Zm176,32H168V160h48v32Z" }));
});
i.displayName = "Duotone";
export {
  i as Duotone
};
