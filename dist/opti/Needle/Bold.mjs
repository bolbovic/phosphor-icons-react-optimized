var s = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, d = (a, t) => {
  for (var e in t || (t = {}))
    c.call(t, e) && m(a, e, t[e]);
  if (o)
    for (var e of o(t))
      p.call(t, e) && m(a, e, t[e]);
  return a;
};
var f = (a, t) => {
  var e = {};
  for (var l in a)
    c.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && o)
    for (var l of o(a))
      t.indexOf(l) < 0 && p.call(a, l) && (e[l] = a[l]);
  return e;
};
import i, { forwardRef as n } from "react";
import B from "../../lib/OptiBase.mjs";
const h = n((l, e) => {
  var r = l, { children: a } = r, t = f(r, ["children"]);
  return /* @__PURE__ */ i.createElement(B, d({ ref: e }, t), a, /* @__PURE__ */ i.createElement("path", { d: "M215.11,40.89a44,44,0,0,0-62.22,0l-24,24a11.88,11.88,0,0,0-3.34,6.45C118.4,113,55.31,183.7,31.55,207.48l0,0a12,12,0,0,0,17,17h0c23.75-23.73,94.49-86.88,136.18-94a12,12,0,0,0,6.45-3.34l24-24a44,44,0,0,0,0-62.22Zm-17,45.25-21.42,21.43c-14.85,3.31-32.4,11.41-52.47,24.18,12.77-20.07,20.87-37.62,24.18-52.47l21.43-21.42a20,20,0,1,1,28.28,28.28Z" }));
});
h.displayName = "Bold";
export {
  h as Bold
};
