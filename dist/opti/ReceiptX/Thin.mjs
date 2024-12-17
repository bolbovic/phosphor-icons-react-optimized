var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && m(a, e, t[e]);
  if (r)
    for (var e of r(t))
      i.call(t, e) && m(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var l in a)
    o.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && r)
    for (var l of r(a))
      t.indexOf(l) < 0 && i.call(a, l) && (e[l] = a[l]);
  return e;
};
import c, { forwardRef as s } from "react";
import d from "../../lib/OptiBase.mjs";
const h = s((l, e) => {
  var L = l, { children: a } = L, t = n(L, ["children"]);
  return /* @__PURE__ */ c.createElement(d, p({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M216,44H40A12,12,0,0,0,28,56V208a4,4,0,0,0,5.79,3.58L64,196.47l30.21,15.11a4,4,0,0,0,3.58,0L128,196.47l30.21,15.11a4,4,0,0,0,3.58,0L192,196.47l30.21,15.11A4.05,4.05,0,0,0,224,212a4,4,0,0,0,4-4V56A12,12,0,0,0,216,44Zm4,157.53-26.21-13.11a4,4,0,0,0-3.58,0L160,203.53l-30.21-15.11a4,4,0,0,0-3.58,0L96,203.53,65.79,188.42a4,4,0,0,0-3.58,0L36,201.53V56a4,4,0,0,1,4-4H216a4,4,0,0,1,4,4ZM154.83,98.83,133.66,120l21.17,21.17a4,4,0,0,1-5.66,5.66L128,125.66l-21.17,21.17a4,4,0,0,1-5.66-5.66L122.34,120,101.17,98.83a4,4,0,0,1,5.66-5.66L128,114.34l21.17-21.17a4,4,0,1,1,5.66,5.66Z" }));
});
h.displayName = "Thin";
export {
  h as Thin
};
