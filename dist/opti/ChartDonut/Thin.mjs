var s = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, n = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (m)
    for (var e of m(t))
      l.call(t, e) && i(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var r in a)
    p.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && l.call(a, r) && (e[r] = a[r]);
  return e;
};
import f, { forwardRef as Z } from "react";
import d from "../../lib/OptiBase.mjs";
const h = Z((r, e) => {
  var o = r, { children: a } = o, t = c(o, ["children"]);
  return /* @__PURE__ */ f.createElement(d, n({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M128,28a4,4,0,0,0-4,4V88a4,4,0,0,0,4,4,36,36,0,1,1-31.18,18,4,4,0,0,0-1.47-5.47l-48.5-28A4,4,0,0,0,41.39,78,100,100,0,1,0,128,28ZM46.38,85.5l41.67,24a43.86,43.86,0,0,0-3.4,25.93L38.18,147.93a92.19,92.19,0,0,1,8.2-62.43Zm-6.13,70.15L86.71,143.2A44.11,44.11,0,0,0,124,171.81v48.1A92.17,92.17,0,0,1,40.25,155.65ZM132,219.91v-48.1a44,44,0,0,0,0-87.63V36.09a92,92,0,0,1,0,183.82Z" }));
});
h.displayName = "Thin";
export {
  h as Thin
};
