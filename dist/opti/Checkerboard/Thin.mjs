var A = Object.defineProperty;
var V = Object.getOwnPropertySymbols;
var Z = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var H = (e, t, a) => t in e ? A(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, h = (e, t) => {
  for (var a in t || (t = {}))
    Z.call(t, a) && H(e, a, t[a]);
  if (V)
    for (var a of V(t))
      o.call(t, a) && H(e, a, t[a]);
  return e;
};
var i = (e, t) => {
  var a = {};
  for (var m in e)
    Z.call(e, m) && t.indexOf(m) < 0 && (a[m] = e[m]);
  if (e != null && V)
    for (var m of V(e))
      t.indexOf(m) < 0 && o.call(e, m) && (a[m] = e[m]);
  return a;
};
import p, { forwardRef as L } from "react";
import M from "../../lib/OptiBase.mjs";
const n = L((m, a) => {
  var r = m, { children: e } = r, t = i(r, ["children"]);
  return /* @__PURE__ */ p.createElement(M, h({ ref: a }, t), e, /* @__PURE__ */ p.createElement("path", { d: "M208,36H48A12,12,0,0,0,36,48V208a12,12,0,0,0,12,12H208a12,12,0,0,0,12-12V48A12,12,0,0,0,208,36Zm-14.34,88L132,62.34V44h18.34L212,105.66V124ZM132,73.66,182.34,124H132ZM212,48V94.34L161.66,44H208A4,4,0,0,1,212,48ZM48,44h76v80H44V48A4,4,0,0,1,48,44Zm57.66,168L44,150.34V132H62.34L124,193.66V212ZM124,182.34,73.66,132H124ZM44,208V161.66L94.34,212H48A4,4,0,0,1,44,208Zm164,4H132V132h80v76A4,4,0,0,1,208,212Z" }));
});
n.displayName = "Thin";
export {
  n as Thin
};
