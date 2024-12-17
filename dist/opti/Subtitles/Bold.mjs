var c = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var H = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, Z = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && H(a, e, t[e]);
  if (o)
    for (var e of o(t))
      A.call(t, e) && H(a, e, t[e]);
  return a;
};
var d = (a, t) => {
  var e = {};
  for (var m in a)
    p.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && o)
    for (var m of o(a))
      t.indexOf(m) < 0 && A.call(a, m) && (e[m] = a[m]);
  return e;
};
import l, { forwardRef as f } from "react";
import h from "../../lib/OptiBase.mjs";
const i = f((m, e) => {
  var r = m, { children: a } = r, t = d(r, ["children"]);
  return /* @__PURE__ */ l.createElement(h, Z({ ref: e }, t), a, /* @__PURE__ */ l.createElement("path", { d: "M224,44H32A20,20,0,0,0,12,64V192a20,20,0,0,0,20,20H224a20,20,0,0,0,20-20V64A20,20,0,0,0,224,44Zm-4,144H36V68H220ZM48,128a12,12,0,0,1,12-12H76a12,12,0,0,1,0,24H60A12,12,0,0,1,48,128Zm56,0a12,12,0,0,1,12-12h80a12,12,0,0,1,0,24H116A12,12,0,0,1,104,128ZM48,164a12,12,0,0,1,12-12h80a12,12,0,0,1,0,24H60A12,12,0,0,1,48,164Zm160,0a12,12,0,0,1-12,12H180a12,12,0,0,1,0-24h16A12,12,0,0,1,208,164Z" }));
});
i.displayName = "Bold";
export {
  i as Bold
};
