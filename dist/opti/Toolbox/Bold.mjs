var c = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var m = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var H = (a, v, e) => v in a ? c(a, v, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[v] = e, d = (a, v) => {
  for (var e in v || (v = {}))
    m.call(v, e) && H(a, e, v[e]);
  if (o)
    for (var e of o(v))
      p.call(v, e) && H(a, e, v[e]);
  return a;
};
var l = (a, v) => {
  var e = {};
  for (var t in a)
    m.call(a, t) && v.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && o)
    for (var t of o(a))
      v.indexOf(t) < 0 && p.call(a, t) && (e[t] = a[t]);
  return e;
};
import V, { forwardRef as f } from "react";
import h from "../../lib/OptiBase.mjs";
const i = f((t, e) => {
  var r = t, { children: a } = r, v = l(r, ["children"]);
  return /* @__PURE__ */ V.createElement(h, d({ ref: e }, v), a, /* @__PURE__ */ V.createElement("path", { d: "M224,64H180V56a28,28,0,0,0-28-28H104A28,28,0,0,0,76,56v8H32A20,20,0,0,0,12,84V192a20,20,0,0,0,20,20H224a20,20,0,0,0,20-20V84A20,20,0,0,0,224,64ZM100,56a4,4,0,0,1,4-4h48a4,4,0,0,1,4,4v8H100ZM220,88v32H196v-4a12,12,0,0,0-24,0v4H84v-4a12,12,0,0,0-24,0v4H36V88ZM36,188V144H60v4a12,12,0,0,0,24,0v-4h88v4a12,12,0,0,0,24,0v-4h24v44Z" }));
});
i.displayName = "Bold";
export {
  i as Bold
};
