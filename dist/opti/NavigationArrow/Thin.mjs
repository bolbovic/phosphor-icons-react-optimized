var h = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? h(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, n = (a, t) => {
  for (var e in t || (t = {}))
    l.call(t, e) && i(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && i(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var r in a)
    l.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import f, { forwardRef as s } from "react";
import A from "../../lib/OptiBase.mjs";
const d = s((r, e) => {
  var o = r, { children: a } = o, t = c(o, ["children"]);
  return /* @__PURE__ */ f.createElement(A, n({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M236,110,59.93,44.67A12,12,0,0,0,44.69,60L110,235.93A11.83,11.83,0,0,0,121.28,244h.22a11.82,11.82,0,0,0,11.26-8.47l0-.1,22.45-80.19,80.19-22.44.1,0A12,12,0,0,0,236,110Zm-2.79,15.12-82.3,23a4,4,0,0,0-2.78,2.77l-23,82.3a3.88,3.88,0,0,1-3.74,2.78,4,4,0,0,1-3.88-2.77L52.22,57.32a3.93,3.93,0,0,1,1-4.14A4,4,0,0,1,56,52a3.86,3.86,0,0,1,1.25.21l176.08,65.32a4,4,0,0,1-.09,7.59Z" }));
});
d.displayName = "Thin";
export {
  d as Thin
};