var A = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, H = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? A(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, h = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (r)
    for (var e of r(t))
      H.call(t, e) && i(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var m in a)
    p.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && H.call(a, m) && (e[m] = a[m]);
  return e;
};
import v, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const s = c((m, e) => {
  var o = m, { children: a } = o, t = n(o, ["children"]);
  return /* @__PURE__ */ v.createElement(f, h({ ref: e }, t), a, /* @__PURE__ */ v.createElement("path", { d: "M148,128a4,4,0,0,1-4,4H120v24a4,4,0,0,1-8,0V132H88a4,4,0,0,1,0-8h24V100a4,4,0,0,1,8,0v24h24A4,4,0,0,1,148,128Zm72-48v96a20,20,0,0,1-20,20H32a20,20,0,0,1-20-20V80A20,20,0,0,1,32,60H200A20,20,0,0,1,220,80Zm-8,0a12,12,0,0,0-12-12H32A12,12,0,0,0,20,80v96a12,12,0,0,0,12,12H200a12,12,0,0,0,12-12Zm36,12a4,4,0,0,0-4,4v64a4,4,0,0,0,8,0V96A4,4,0,0,0,248,92Z" }));
});
s.displayName = "Thin";
export {
  s as Thin
};
