var f = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    c.call(t, e) && o(a, e, t[e]);
  if (l)
    for (var e of l(t))
      i.call(t, e) && o(a, e, t[e]);
  return a;
};
var h = (a, t) => {
  var e = {};
  for (var r in a)
    c.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && l)
    for (var r of l(a))
      t.indexOf(r) < 0 && i.call(a, r) && (e[r] = a[r]);
  return e;
};
import n, { forwardRef as s } from "react";
import d from "../../lib/OptiBase.mjs";
const A = s((r, e) => {
  var m = r, { children: a } = m, t = h(m, ["children"]);
  return /* @__PURE__ */ n.createElement(d, p({ ref: e }, t), a, /* @__PURE__ */ n.createElement("path", { d: "M186.83,69.17a4,4,0,0,1,0,5.66l-16,16a4,4,0,0,1-5.66-5.66l16-16A4,4,0,0,1,186.83,69.17ZM220,72a35.76,35.76,0,0,1-10.54,25.46l-24,24a4.05,4.05,0,0,1-2.16,1.11c-21.65,3.72-52.74,21.46-89.91,51.33-28.34,22.77-50.34,44.71-50.56,44.93l-.24.22h0a4,4,0,0,1-5.42-5.88h0C37.39,213,59.33,191,82.1,162.61,112,125.44,129.71,94.35,133.43,72.7a4.05,4.05,0,0,1,1.11-2.16l24-24A36,36,0,0,1,220,72Zm-8,0a28,28,0,0,0-47.8-19.8L141.08,75.32c-5.33,28-29.48,63.42-52.51,92.11,28.69-23,64.16-47.18,92.11-52.52L203.8,91.8A27.81,27.81,0,0,0,212,72Z" }));
});
A.displayName = "Thin";
export {
  A as Thin
};
