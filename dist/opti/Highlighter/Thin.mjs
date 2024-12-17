var f = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var L = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && L(a, e, t[e]);
  if (l)
    for (var e of l(t))
      i.call(t, e) && L(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var r in a)
    o.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && l)
    for (var r of l(a))
      t.indexOf(r) < 0 && i.call(a, r) && (e[r] = a[r]);
  return e;
};
import c, { forwardRef as s } from "react";
import d from "../../lib/OptiBase.mjs";
const h = s((r, e) => {
  var m = r, { children: a } = m, t = n(m, ["children"]);
  return /* @__PURE__ */ c.createElement(d, p({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M250.83,109.17a4,4,0,0,0-5.66,0l-50.34,50.34a4,4,0,0,1-5.66,0L104.49,74.83a4,4,0,0,1,0-5.66l50.34-50.34a4,4,0,0,0-5.66-5.66L98.83,63.51A12,12,0,0,0,98.37,80L74.83,103.51a12,12,0,0,0,0,17L82.34,128,21.17,189.17a4,4,0,0,0,1.57,6.62l72,24A3.92,3.92,0,0,0,96,220a4,4,0,0,0,2.83-1.17L136,181.66l7.51,7.51a12,12,0,0,0,17,0L184,165.63a12,12,0,0,0,16.47-.46l50.34-50.34A4,4,0,0,0,250.83,109.17ZM94.92,211.42,31.4,190.25,88,133.66,130.34,176Zm59.91-27.91a4,4,0,0,1-5.66,0L80.49,114.83a4,4,0,0,1,0-5.66L104,85.66,178.34,160Z" }));
});
h.displayName = "Thin";
export {
  h as Thin
};
