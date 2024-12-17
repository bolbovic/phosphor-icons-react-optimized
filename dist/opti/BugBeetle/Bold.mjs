var f = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var m = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var l = (a, H, e) => H in a ? f(a, H, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[H] = e, d = (a, H) => {
  for (var e in H || (H = {}))
    m.call(H, e) && l(a, e, H[e]);
  if (o)
    for (var e of o(H))
      p.call(H, e) && l(a, e, H[e]);
  return a;
};
var A = (a, H) => {
  var e = {};
  for (var t in a)
    m.call(a, t) && H.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && o)
    for (var t of o(a))
      H.indexOf(t) < 0 && p.call(a, t) && (e[t] = a[t]);
  return e;
};
import c, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const n = i((t, e) => {
  var r = t, { children: a } = r, H = A(r, ["children"]);
  return /* @__PURE__ */ c.createElement(s, d({ ref: e }, H), a, /* @__PURE__ */ c.createElement("path", { d: "M224,160a12,12,0,0,0,0-24H212V120h12a12,12,0,0,0,0-24H210.45a83.7,83.7,0,0,0-18.78-38.7l16.82-16.81a12,12,0,1,0-17-17l-18,18a83.7,83.7,0,0,0-91.1,0l-18-18a12,12,0,0,0-17,17L64.33,57.3A83.7,83.7,0,0,0,45.55,96H32a12,12,0,0,0,0,24H44v16H32a12,12,0,0,0,0,24H44a83.55,83.55,0,0,0,1.55,16H32a12,12,0,0,0,0,24H54.15a84,84,0,0,0,147.7,0H224a12,12,0,0,0,0-24H210.45A83.55,83.55,0,0,0,212,160ZM128,52a60.1,60.1,0,0,1,57.82,44H70.18A60.1,60.1,0,0,1,128,52Zm12,166.79V148a12,12,0,0,0-24,0v70.79A60.09,60.09,0,0,1,68,160V120H188v40A60.09,60.09,0,0,1,140,218.79Z" }));
});
n.displayName = "Bold";
export {
  n as Bold
};
