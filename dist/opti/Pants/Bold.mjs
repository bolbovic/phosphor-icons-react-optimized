var f = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var m = (e, l, a) => l in e ? f(e, l, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[l] = a, H = (e, l) => {
  for (var a in l || (l = {}))
    p.call(l, a) && m(e, a, l[a]);
  if (o)
    for (var a of o(l))
      A.call(l, a) && m(e, a, l[a]);
  return e;
};
var d = (e, l) => {
  var a = {};
  for (var t in e)
    p.call(e, t) && l.indexOf(t) < 0 && (a[t] = e[t]);
  if (e != null && o)
    for (var t of o(e))
      l.indexOf(t) < 0 && A.call(e, t) && (a[t] = e[t]);
  return a;
};
import c, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const Z = i((t, a) => {
  var r = t, { children: e } = r, l = d(r, ["children"]);
  return /* @__PURE__ */ c.createElement(s, H({ ref: a }, l), e, /* @__PURE__ */ c.createElement("path", { d: "M227.85,213.52l-22-176A20,20,0,0,0,186,20H70A20,20,0,0,0,50.15,37.52l-22,176A20,20,0,0,0,48,236H88.69A19.94,19.94,0,0,0,108.07,221l19.93-77,19.91,76.94A20,20,0,0,0,167.31,236H208a20,20,0,0,0,19.85-22.48ZM182.47,44l2,16H71.53l2-16ZM85.6,212H52.53l11.2-89.6A44.11,44.11,0,0,0,95.81,84H116V94.47Zm84.81,0L140,94.47V84h20.19a44.09,44.09,0,0,0,32.08,38.39L203.47,212Z" }));
});
Z.displayName = "Bold";
export {
  Z as Bold
};
