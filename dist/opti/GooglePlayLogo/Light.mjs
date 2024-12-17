var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, L = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var Z = (a, t) => {
  var e = {};
  for (var r in a)
    i.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import c, { forwardRef as s } from "react";
import M from "../../lib/OptiBase.mjs";
const d = s((r, e) => {
  var l = r, { children: a } = l, t = Z(l, ["children"]);
  return /* @__PURE__ */ c.createElement(M, L({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M238.84,115.93,71,19.89a14,14,0,0,0-14.12,0A13.68,13.68,0,0,0,50,31.87V224.13a13.68,13.68,0,0,0,6.92,11.94,14,14,0,0,0,14.12,0l167.8-96a13.75,13.75,0,0,0,0-24.14ZM62,217.5V38.5L151.51,128Zm98-81,22.19,22.19L78.4,218.07ZM78.4,37.93l103.79,59.4L160,119.52ZM233,129.58l-.1.06L193,152.49,168.49,128,193,103.51l39.94,22.85.1.06a1.76,1.76,0,0,1,0,3.16Z" }));
});
d.displayName = "Light";
export {
  d as Light
};
