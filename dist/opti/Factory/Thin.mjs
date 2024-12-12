var n = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var H = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? n(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    H.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      i.call(t, e) && o(a, e, t[e]);
  return a;
};
var L = (a, t) => {
  var e = {};
  for (var m in a)
    H.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && i.call(a, m) && (e[m] = a[m]);
  return e;
};
import l, { forwardRef as Z } from "react";
import c from "../../lib/OptiBase.mjs";
const f = Z((m, e) => {
  var h = m, { children: a } = h, t = L(h, ["children"]);
  return /* @__PURE__ */ l.createElement(c, p({ ref: e }, t), a, /* @__PURE__ */ l.createElement("path", { d: "M112,176a4,4,0,0,1-4,4H80a4,4,0,0,1,0-8h28A4,4,0,0,1,112,176Zm64-4H148a4,4,0,0,0,0,8h28a4,4,0,0,0,0-8Zm60,44a4,4,0,0,1-4,4H24a4,4,0,0,1,0-8H36V88a4,4,0,0,1,6.4-3.2L100,128V88a4,4,0,0,1,6.4-3.2l44.14,33.11L163.06,30.3A12.06,12.06,0,0,1,174.94,20h18.12a12.06,12.06,0,0,1,11.88,10.3l15,105.13a3.64,3.64,0,0,1,0,.57v76h12A4,4,0,0,1,236,216Zm-78.16-92.62L169.33,132h42.06L197,31.43a4,4,0,0,0-4-3.43H174.94a4,4,0,0,0-4,3.43ZM44,212H212V140H168a4,4,0,0,1-2.4-.8L108,96v40a4,4,0,0,1-6.4,3.2L44,96Z" }));
});
f.displayName = "Thin";
export {
  f as Thin
};
