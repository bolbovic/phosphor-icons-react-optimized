var Z = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var m = Object.prototype.hasOwnProperty, V = Object.prototype.propertyIsEnumerable;
var H = (a, t, e) => t in a ? Z(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    m.call(t, e) && H(a, e, t[e]);
  if (o)
    for (var e of o(t))
      V.call(t, e) && H(a, e, t[e]);
  return a;
};
var v = (a, t) => {
  var e = {};
  for (var h in a)
    m.call(a, h) && t.indexOf(h) < 0 && (e[h] = a[h]);
  if (a != null && o)
    for (var h of o(a))
      t.indexOf(h) < 0 && V.call(a, h) && (e[h] = a[h]);
  return e;
};
import M, { forwardRef as d } from "react";
import l from "../../lib/OptiBase.mjs";
const c = d((h, e) => {
  var r = h, { children: a } = r, t = v(r, ["children"]);
  return /* @__PURE__ */ M.createElement(l, p({ ref: e }, t), a, /* @__PURE__ */ M.createElement("path", { d: "M200,140a12,12,0,0,1-12,12h-4v4a12,12,0,0,1-24,0v-4h-4a12,12,0,0,1,0-24h4v-4a12,12,0,0,1,24,0v4h4A12,12,0,0,1,200,140ZM100,128H68a12,12,0,0,0,0,24h32a12,12,0,0,0,0-24ZM244,92v92a20,20,0,0,1-20,20H32a20,20,0,0,1-20-20V92A20,20,0,0,1,32,72H44V56A20,20,0,0,1,64,36H96a20,20,0,0,1,20,20V72h24V56a20,20,0,0,1,20-20h32a20,20,0,0,1,20,20V72h12A20,20,0,0,1,244,92ZM164,72h24V60H164ZM68,72H92V60H68ZM220,96H36v84H220Z" }));
});
c.displayName = "Bold";
export {
  c as Bold
};
