var l = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var h = Object.prototype.hasOwnProperty, V = Object.prototype.propertyIsEnumerable;
var H = (a, t, e) => t in a ? l(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    h.call(t, e) && H(a, e, t[e]);
  if (o)
    for (var e of o(t))
      V.call(t, e) && H(a, e, t[e]);
  return a;
};
var Z = (a, t) => {
  var e = {};
  for (var m in a)
    h.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && o)
    for (var m of o(a))
      t.indexOf(m) < 0 && V.call(a, m) && (e[m] = a[m]);
  return e;
};
import d, { forwardRef as A } from "react";
import c from "../../lib/OptiBase.mjs";
const f = A((m, e) => {
  var r = m, { children: a } = r, t = Z(r, ["children"]);
  return /* @__PURE__ */ d.createElement(c, p({ ref: e }, t), a, /* @__PURE__ */ d.createElement("path", { d: "M168,76a12,12,0,0,1,12-12h24a12,12,0,0,1,0,24H180A12,12,0,0,1,168,76Zm12,48h24a12,12,0,0,0,0-24H180a12,12,0,0,0,0,24Zm72-76V208a20,20,0,0,1-20,20H152a20,20,0,0,1-20-20V192H100v12h8a12,12,0,0,1,0,24H68a12,12,0,0,1,0-24h8V192H32A28,28,0,0,1,4,164V96A28,28,0,0,1,32,68H132V48a20,20,0,0,1,20-20h80A20,20,0,0,1,252,48ZM132,168V92H32a4,4,0,0,0-4,4v68a4,4,0,0,0,4,4ZM228,52H156V204h72ZM192,160a16,16,0,1,0,16,16A16,16,0,0,0,192,160Z" }));
});
f.displayName = "Bold";
export {
  f as Bold
};
