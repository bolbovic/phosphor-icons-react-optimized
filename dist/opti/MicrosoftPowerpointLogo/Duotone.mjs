var n = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var Z = (a, t, e) => t in a ? n(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, V = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && Z(a, e, t[e]);
  if (o)
    for (var e of o(t))
      A.call(t, e) && Z(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var m in a)
    p.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && o)
    for (var m of o(a))
      t.indexOf(m) < 0 && A.call(a, m) && (e[m] = a[m]);
  return e;
};
import r, { forwardRef as v } from "react";
import h from "../../lib/OptiBase.mjs";
const i = v((m, e) => {
  var H = m, { children: a } = H, t = c(H, ["children"]);
  return /* @__PURE__ */ r.createElement(h, V({ ref: e }, t), a, /* @__PURE__ */ r.createElement(
    "path",
    {
      d: "M152,80v96a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8H144A8,8,0,0,1,152,80Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ r.createElement("path", { d: "M96,96H80a8,8,0,0,0-8,8v48a8,8,0,0,0,16,0v-8h8a24,24,0,0,0,0-48Zm0,32H88V112h8a8,8,0,0,1,0,16ZM136,24A104.33,104.33,0,0,0,54,64H40A16,16,0,0,0,24,80v96a16,16,0,0,0,16,16H54A104,104,0,1,0,136,24Zm87.63,96H160V80a16,16,0,0,0-16-16V40.37A88.13,88.13,0,0,1,223.63,120ZM128,40.37V64H75.63A88.36,88.36,0,0,1,128,40.37ZM40,80H144v47.9a.51.51,0,0,0,0,.2V176H40Zm88,112v23.63A88.36,88.36,0,0,1,75.63,192Zm16,23.63V192a16,16,0,0,0,16-16V136h63.63A88.13,88.13,0,0,1,144,215.63Z" }));
});
i.displayName = "Duotone";
export {
  i as Duotone
};
