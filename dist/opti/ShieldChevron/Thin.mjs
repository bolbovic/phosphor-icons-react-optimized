var l = Object.defineProperty;
var c = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? l(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, n = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (c)
    for (var e of c(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var A = (a, t) => {
  var e = {};
  for (var r in a)
    i.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && c)
    for (var r of c(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import f, { forwardRef as s } from "react";
import d from "../../lib/OptiBase.mjs";
const h = s((r, e) => {
  var m = r, { children: a } = m, t = A(m, ["children"]);
  return /* @__PURE__ */ f.createElement(d, n({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M208,44H48A12,12,0,0,0,36,56v56c0,51.16,24.73,82.12,45.47,99.1,22.4,18.32,44.55,24.5,45.48,24.76a4,4,0,0,0,2.1,0c.93-.26,23.08-6.44,45.48-24.76,20.74-17,45.47-47.94,45.47-99.1V56A12,12,0,0,0,208,44ZM169.71,204.71A132.45,132.45,0,0,1,128,227.82a132.23,132.23,0,0,1-41.71-23.11A115.08,115.08,0,0,1,59.21,173L128,124.88,196.79,173A115.08,115.08,0,0,1,169.71,204.71ZM212,112c0,20-3.85,38-11.46,53.89l-70.25-49.17a4,4,0,0,0-4.58,0L55.46,165.89C47.85,150,44,132,44,112V56a4,4,0,0,1,4-4H208a4,4,0,0,1,4,4Z" }));
});
h.displayName = "Thin";
export {
  h as Thin
};
