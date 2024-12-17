var M = Object.defineProperty;
var H = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var m = (a, r, e) => r in a ? M(a, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[r] = e, h = (a, r) => {
  for (var e in r || (r = {}))
    o.call(r, e) && m(a, e, r[e]);
  if (H)
    for (var e of H(r))
      Z.call(r, e) && m(a, e, r[e]);
  return a;
};
var l = (a, r) => {
  var e = {};
  for (var t in a)
    o.call(a, t) && r.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && H)
    for (var t of H(a))
      r.indexOf(t) < 0 && Z.call(a, t) && (e[t] = a[t]);
  return e;
};
import p, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const i = c((t, e) => {
  var V = t, { children: a } = V, r = l(V, ["children"]);
  return /* @__PURE__ */ p.createElement(f, h({ ref: e }, r), a, /* @__PURE__ */ p.createElement("path", { d: "M208,32H160a16,16,0,0,0-16,16V208a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Zm0,176H160V176h24a8,8,0,0,0,0-16H160V136h24a8,8,0,0,0,0-16H160V96h24a8,8,0,0,0,0-16H160V48h48V208ZM77.66,26.34a8,8,0,0,0-11.32,0l-32,32A8,8,0,0,0,32,64V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V64a8,8,0,0,0-2.34-5.66ZM48,176V80H64v96ZM80,80H96v96H80ZM72,43.31,92.69,64H51.31ZM48,208V192H96v16Z" }));
});
i.displayName = "Regular";
export {
  i as Regular
};
