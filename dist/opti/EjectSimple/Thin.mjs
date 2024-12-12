var l = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? l(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, A = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (m)
    for (var e of m(t))
      n.call(t, e) && i(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var r in a)
    p.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && n.call(a, r) && (e[r] = a[r]);
  return e;
};
import f, { forwardRef as s } from "react";
import H from "../../lib/OptiBase.mjs";
const d = s((r, e) => {
  var o = r, { children: a } = o, t = c(o, ["children"]);
  return /* @__PURE__ */ f.createElement(H, A({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M228,200a4,4,0,0,1-4,4H32a4,4,0,0,1,0-8H224A4,4,0,0,1,228,200ZM29.2,149.12a12,12,0,0,1,1.51-12.83L112.37,35.46a20.1,20.1,0,0,1,31.26,0l81.66,100.83A12.1,12.1,0,0,1,215.92,156H40.08A12,12,0,0,1,29.2,149.12Zm7.22-3.44A4,4,0,0,0,40.08,148H215.92a4,4,0,0,0,3.66-2.32,4,4,0,0,0-.51-4.36L137.41,40.5a12.09,12.09,0,0,0-18.82,0L36.93,141.32A4,4,0,0,0,36.42,145.68Z" }));
});
d.displayName = "Thin";
export {
  d as Thin
};
