var A = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var L = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? A(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, i = (a, t) => {
  for (var e in t || (t = {}))
    L.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      h.call(t, e) && o(a, e, t[e]);
  return a;
};
var p = (a, t) => {
  var e = {};
  for (var l in a)
    L.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && r)
    for (var l of r(a))
      t.indexOf(l) < 0 && h.call(a, l) && (e[l] = a[l]);
  return e;
};
import n, { forwardRef as V } from "react";
import Z from "../../lib/OptiBase.mjs";
const c = V((l, e) => {
  var m = l, { children: a } = m, t = p(m, ["children"]);
  return /* @__PURE__ */ n.createElement(Z, i({ ref: e }, t), a, /* @__PURE__ */ n.createElement("path", { d: "M216,44H40A12,12,0,0,0,28,56V216a4,4,0,0,0,5.79,3.58L64,204.47l30.21,15.11a4,4,0,0,0,3.58,0L128,204.47l30.21,15.11a4,4,0,0,0,3.58,0L192,204.47l30.21,15.11A4.05,4.05,0,0,0,224,220a4,4,0,0,0,4-4V56A12,12,0,0,0,216,44Zm4,165.53-26.21-13.11a4,4,0,0,0-3.58,0L160,211.53l-30.21-15.11a4,4,0,0,0-3.58,0L96,211.53,65.79,196.42a4,4,0,0,0-3.58,0L36,209.53V56a4,4,0,0,1,4-4H216a4,4,0,0,1,4,4ZM99.58,94.21a4,4,0,0,0-7.16,0l-32,64a4,4,0,0,0,7.16,3.58L74.47,148h43.06l6.89,13.79A4,4,0,0,0,128,164a4.12,4.12,0,0,0,1.79-.42,4,4,0,0,0,1.79-5.37ZM78.47,140,96,104.94,113.53,140ZM196,128a4,4,0,0,1-4,4H172v20a4,4,0,0,1-8,0V132H144a4,4,0,0,1,0-8h20V104a4,4,0,0,1,8,0v20h20A4,4,0,0,1,196,128Z" }));
});
c.displayName = "Thin";
export {
  c as Thin
};
