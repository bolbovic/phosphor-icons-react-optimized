var L = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var l = (a, t, e) => t in a ? L(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && l(a, e, t[e]);
  if (r)
    for (var e of r(t))
      i.call(t, e) && l(a, e, t[e]);
  return a;
};
var A = (a, t) => {
  var e = {};
  for (var m in a)
    o.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && i.call(a, m) && (e[m] = a[m]);
  return e;
};
import H, { forwardRef as Z } from "react";
import n from "../../lib/OptiBase.mjs";
const V = Z((m, e) => {
  var h = m, { children: a } = h, t = A(h, ["children"]);
  return /* @__PURE__ */ H.createElement(n, p({ ref: e }, t), a, /* @__PURE__ */ H.createElement("path", { d: "M216,44H40A12,12,0,0,0,28,56V216a4,4,0,0,0,5.79,3.58L64,204.47l30.21,15.11a4,4,0,0,0,3.58,0L128,204.47l30.21,15.11a4,4,0,0,0,3.58,0L192,204.47l30.21,15.11A4.05,4.05,0,0,0,224,220a4,4,0,0,0,4-4V56A12,12,0,0,0,216,44Zm4,165.53-26.21-13.11a4,4,0,0,0-3.58,0L160,211.53l-30.21-15.11a4,4,0,0,0-3.58,0L96,211.53,65.79,196.42a4,4,0,0,0-3.58,0L36,209.53V56a4,4,0,0,1,4-4H216a4,4,0,0,1,4,4ZM196,112a4,4,0,0,1-4,4H144a4,4,0,0,1,0-8h48A4,4,0,0,1,196,112Zm0,32a4,4,0,0,1-4,4H144a4,4,0,0,1,0-8h48A4,4,0,0,1,196,144ZM112,92H64a4,4,0,0,0-4,4v64a4,4,0,0,0,4,4h48a4,4,0,0,0,4-4V96A4,4,0,0,0,112,92Zm-4,64H68V100h40Z" }));
});
V.displayName = "Thin";
export {
  V as Thin
};
