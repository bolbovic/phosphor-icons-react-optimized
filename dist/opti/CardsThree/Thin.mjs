var s = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, n = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var r in a)
    i.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import f, { forwardRef as Z } from "react";
import d from "../../lib/OptiBase.mjs";
const h = Z((r, e) => {
  var H = r, { children: a } = H, t = c(H, ["children"]);
  return /* @__PURE__ */ f.createElement(d, n({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M208,92H48a12,12,0,0,0-12,12v96a12,12,0,0,0,12,12H208a12,12,0,0,0,12-12V104A12,12,0,0,0,208,92Zm4,108a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V104a4,4,0,0,1,4-4H208a4,4,0,0,1,4,4ZM52,64a4,4,0,0,1,4-4H200a4,4,0,0,1,0,8H56A4,4,0,0,1,52,64ZM68,32a4,4,0,0,1,4-4H184a4,4,0,0,1,0,8H72A4,4,0,0,1,68,32Z" }));
});
h.displayName = "Thin";
export {
  h as Thin
};
