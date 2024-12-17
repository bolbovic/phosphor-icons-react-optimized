var c = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var V = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable;
var v = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    V.call(t, e) && v(a, e, t[e]);
  if (o)
    for (var e of o(t))
      r.call(t, e) && v(a, e, t[e]);
  return a;
};
var Z = (a, t) => {
  var e = {};
  for (var H in a)
    V.call(a, H) && t.indexOf(H) < 0 && (e[H] = a[H]);
  if (a != null && o)
    for (var H of o(a))
      t.indexOf(H) < 0 && r.call(a, H) && (e[H] = a[H]);
  return e;
};
import h, { forwardRef as n } from "react";
import A from "../../lib/OptiBase.mjs";
const i = n((H, e) => {
  var m = H, { children: a } = m, t = Z(m, ["children"]);
  return /* @__PURE__ */ h.createElement(A, p({ ref: e }, t), a, /* @__PURE__ */ h.createElement(
    "path",
    {
      d: "M64,112v32a8,8,0,0,1-8,8H24a8,8,0,0,1-8-8V112a8,8,0,0,1,8-8H56A8,8,0,0,1,64,112ZM208,40H160a8,8,0,0,0-8,8V96a8,8,0,0,0,8,8h48a8,8,0,0,0,8-8V48A8,8,0,0,0,208,40Zm0,112H160a8,8,0,0,0-8,8v48a8,8,0,0,0,8,8h48a8,8,0,0,0,8-8V160A8,8,0,0,0,208,152Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ h.createElement("path", { d: "M160,112h48a16,16,0,0,0,16-16V48a16,16,0,0,0-16-16H160a16,16,0,0,0-16,16V64H128a24,24,0,0,0-24,24v32H72v-8A16,16,0,0,0,56,96H24A16,16,0,0,0,8,112v32a16,16,0,0,0,16,16H56a16,16,0,0,0,16-16v-8h32v32a24,24,0,0,0,24,24h16v16a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V160a16,16,0,0,0-16-16H160a16,16,0,0,0-16,16v16H128a8,8,0,0,1-8-8V88a8,8,0,0,1,8-8h16V96A16,16,0,0,0,160,112ZM56,144H24V112H56v32Zm104,16h48v48H160Zm0-112h48V96H160Z" }));
});
i.displayName = "Duotone";
export {
  i as Duotone
};
