var c = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, h = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var r in a)
    i.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import A, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const d = f((r, e) => {
  var l = r, { children: a } = l, t = n(l, ["children"]);
  return /* @__PURE__ */ A.createElement(s, h({ ref: e }, t), a, /* @__PURE__ */ A.createElement("path", { d: "M156,20A72.19,72.19,0,0,0,87.51,69.39,48,48,0,1,0,76,164h44.94l-20.37,33.94A4,4,0,0,0,104,204h32.94l-20.37,33.94a4,4,0,0,0,6.86,4.12l24-40A4,4,0,0,0,144,196H111.06l19.2-32H156a72,72,0,0,0,0-144Zm0,136H76a40,40,0,1,1,9.43-78.88A71.63,71.63,0,0,0,84,87.77a4,4,0,0,0,8,.46A64.06,64.06,0,1,1,156,156Z" }));
});
d.displayName = "Thin";
export {
  d as Thin
};
