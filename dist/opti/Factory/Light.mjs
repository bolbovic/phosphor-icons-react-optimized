var s = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, H = Object.prototype.propertyIsEnumerable;
var h = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, i = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && h(a, e, t[e]);
  if (r)
    for (var e of r(t))
      H.call(t, e) && h(a, e, t[e]);
  return a;
};
var l = (a, t) => {
  var e = {};
  for (var m in a)
    o.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && H.call(a, m) && (e[m] = a[m]);
  return e;
};
import p, { forwardRef as Z } from "react";
import c from "../../lib/OptiBase.mjs";
const f = Z((m, e) => {
  var L = m, { children: a } = L, t = l(L, ["children"]);
  return /* @__PURE__ */ p.createElement(c, i({ ref: e }, t), a, /* @__PURE__ */ p.createElement("path", { d: "M114,176a6,6,0,0,1-6,6H80a6,6,0,0,1,0-12h28A6,6,0,0,1,114,176Zm62-6H148a6,6,0,0,0,0,12h28a6,6,0,0,0,0-12Zm62,46a6,6,0,0,1-6,6H24a6,6,0,0,1,0-12H34V88a6,6,0,0,1,9.6-4.8L98,124V88a6,6,0,0,1,9.6-4.8L149,114.28l12-84.26a14.07,14.07,0,0,1,13.86-12h18.12a14.07,14.07,0,0,1,13.86,12l15,105.13s.06.59.06.85v74h10A6,6,0,0,1,238,216Zm-78-93.51L170,130h39.08L195,31.72a2,2,0,0,0-2-1.72H174.94a2,2,0,0,0-2,1.72ZM46,210H210V142H168a6,6,0,0,1-3.6-1.2L150,130l0,0L110,100v36a6,6,0,0,1-9.6,4.8L46,100Z" }));
});
f.displayName = "Light";
export {
  f as Light
};
