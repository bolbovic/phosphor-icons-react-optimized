var c = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var r = Object.prototype.hasOwnProperty, v = Object.prototype.propertyIsEnumerable;
var h = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, Z = (a, t) => {
  for (var e in t || (t = {}))
    r.call(t, e) && h(a, e, t[e]);
  if (o)
    for (var e of o(t))
      v.call(t, e) && h(a, e, t[e]);
  return a;
};
var p = (a, t) => {
  var e = {};
  for (var m in a)
    r.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && o)
    for (var m of o(a))
      t.indexOf(m) < 0 && v.call(a, m) && (e[m] = a[m]);
  return e;
};
import H, { forwardRef as n } from "react";
import i from "../../lib/OptiBase.mjs";
const A = n((m, e) => {
  var V = m, { children: a } = V, t = p(V, ["children"]);
  return /* @__PURE__ */ H.createElement(i, Z({ ref: e }, t), a, /* @__PURE__ */ H.createElement(
    "path",
    {
      d: "M232,112v80a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V112h88v32h32V112Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ H.createElement("path", { d: "M184,40H72A56.06,56.06,0,0,0,16,96v96a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V96A56.06,56.06,0,0,0,184,40Zm40,56v8H192V56.8A40.07,40.07,0,0,1,224,96Zm-88,40H120V104h16Zm-24,16h32a8,8,0,0,0,8-8V120h24v72H80V120h24v24A8,8,0,0,0,112,152Zm40-48V96a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v8H80V56h96v48ZM64,56.8V104H32V96A40.07,40.07,0,0,1,64,56.8ZM32,120H64v72H32Zm192,72H192V120h32v72Z" }));
});
A.displayName = "Duotone";
export {
  A as Duotone
};
