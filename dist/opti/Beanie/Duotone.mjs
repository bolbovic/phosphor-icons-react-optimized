var V = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var H = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var v = (e, t, a) => t in e ? V(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, c = (e, t) => {
  for (var a in t || (t = {}))
    H.call(t, a) && v(e, a, t[a]);
  if (o)
    for (var a of o(t))
      Z.call(t, a) && v(e, a, t[a]);
  return e;
};
var n = (e, t) => {
  var a = {};
  for (var m in e)
    H.call(e, m) && t.indexOf(m) < 0 && (a[m] = e[m]);
  if (e != null && o)
    for (var m of o(e))
      t.indexOf(m) < 0 && Z.call(e, m) && (a[m] = e[m]);
  return a;
};
import r, { forwardRef as i } from "react";
import A from "../../lib/OptiBase.mjs";
const d = i((m, a) => {
  var p = m, { children: e } = p, t = n(p, ["children"]);
  return /* @__PURE__ */ r.createElement(A, c({ ref: a }, t), e, /* @__PURE__ */ r.createElement("path", { d: "M216,144v24H40V144a88,88,0,0,1,176,0Z", opacity: "0.2" }), /* @__PURE__ */ r.createElement("path", { d: "M224,162.16V144a96.18,96.18,0,0,0-72.34-93,28,28,0,1,0-47.32,0A96.18,96.18,0,0,0,32,144v18.16A16,16,0,0,0,24,176v32a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V176A16,16,0,0,0,224,162.16ZM116,36a12,12,0,1,1,12,12A12,12,0,0,1,116,36Zm12,28a80.09,80.09,0,0,1,80,80v16H48V144A80.09,80.09,0,0,1,128,64Zm-8,112v32H80V176Zm16,0h40v32H136Zm-96,0H64v32H40Zm176,32H192V176h24v32Z" }));
});
d.displayName = "Duotone";
export {
  d as Duotone
};
