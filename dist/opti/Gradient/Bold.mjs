var l = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var r = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var o = (a, H, e) => H in a ? l(a, H, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[H] = e, p = (a, H) => {
  for (var e in H || (H = {}))
    r.call(H, e) && o(a, e, H[e]);
  if (t)
    for (var e of t(H))
      h.call(H, e) && o(a, e, H[e]);
  return a;
};
var M = (a, H) => {
  var e = {};
  for (var m in a)
    r.call(a, m) && H.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && t)
    for (var m of t(a))
      H.indexOf(m) < 0 && h.call(a, m) && (e[m] = a[m]);
  return e;
};
import d, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const i = c((m, e) => {
  var Z = m, { children: a } = Z, H = M(Z, ["children"]);
  return /* @__PURE__ */ d.createElement(f, p({ ref: e }, H), a, /* @__PURE__ */ d.createElement("path", { d: "M20,108A12,12,0,0,1,32,96h76a12,12,0,0,1,0,24H32A12,12,0,0,1,20,108ZM224,96H148a12,12,0,0,0,0,24h76a12,12,0,0,0,0-24ZM68,136H32a12,12,0,0,0,0,24H68a12,12,0,0,0,0-24Zm156,0H188a12,12,0,0,0,0,24h36a12,12,0,0,0,0-24ZM96,148a12,12,0,0,0,12,12h40a12,12,0,0,0,0-24H108A12,12,0,0,0,96,148ZM52,176H32a12,12,0,0,0,0,24H52a12,12,0,0,0,0-24Zm56,0H92a12,12,0,0,0,0,24h16a12,12,0,0,0,0-24Zm56,0H148a12,12,0,0,0,0,24h16a12,12,0,0,0,0-24Zm60,0H204a12,12,0,0,0,0,24h20a12,12,0,0,0,0-24ZM32,80H224a12,12,0,0,0,0-24H32a12,12,0,0,0,0,24Z" }));
});
i.displayName = "Bold";
export {
  i as Bold
};
