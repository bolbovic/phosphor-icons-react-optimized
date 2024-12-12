var f = Object.defineProperty;
var V = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && m(a, e, t[e]);
  if (V)
    for (var e of V(t))
      i.call(t, e) && m(a, e, t[e]);
  return a;
};
var H = (a, t) => {
  var e = {};
  for (var r in a)
    o.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && V)
    for (var r of V(a))
      t.indexOf(r) < 0 && i.call(a, r) && (e[r] = a[r]);
  return e;
};
import c, { forwardRef as s } from "react";
import d from "../../lib/OptiBase.mjs";
const l = s((r, e) => {
  var h = r, { children: a } = h, t = H(h, ["children"]);
  return /* @__PURE__ */ c.createElement(d, p({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M174.69,116.41A42,42,0,0,0,150,42.05V24a6,6,0,0,0-12,0V42H118V24a6,6,0,0,0-12,0V42H72a6,6,0,0,0,0,12H82V194H72a6,6,0,0,0,0,12h34v18a6,6,0,0,0,12,0V206h20v18a6,6,0,0,0,12,0V206h10a46,46,0,0,0,14.69-89.59ZM178,84a30,30,0,0,1-30,30H94V54h54A30,30,0,0,1,178,84ZM160,194H94V126h66a34,34,0,0,1,0,68Z" }));
});
l.displayName = "Light";
export {
  l as Light
};
