var v = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var r = (a, t, e) => t in a ? v(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && r(a, e, t[e]);
  if (m)
    for (var e of m(t))
      i.call(t, e) && r(a, e, t[e]);
  return a;
};
var Z = (a, t) => {
  var e = {};
  for (var H in a)
    o.call(a, H) && t.indexOf(H) < 0 && (e[H] = a[H]);
  if (a != null && m)
    for (var H of m(a))
      t.indexOf(H) < 0 && i.call(a, H) && (e[H] = a[H]);
  return e;
};
import l, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const s = c((H, e) => {
  var h = H, { children: a } = h, t = Z(h, ["children"]);
  return /* @__PURE__ */ l.createElement(f, p({ ref: e }, t), a, /* @__PURE__ */ l.createElement("path", { d: "M232,194H198V166h26a6,6,0,0,0,5.82-7.46l-32-128a6,6,0,0,0-11.64,0l-32,128A6,6,0,0,0,160,166h26v28H118V174h10a6,6,0,0,0,0-12H118V142h10a6,6,0,0,0,0-12H40a6,6,0,0,0,0,12H50v20H40a6,6,0,0,0,0,12H50v20H24a6,6,0,0,0,0,12H232a6,6,0,0,0,0-12ZM192,56.74,216.32,154H167.68ZM62,142h44v20H62Zm0,32h44v20H62Zm54-80A26,26,0,1,0,90,68,26,26,0,0,0,116,94Zm0-40a14,14,0,1,1-14,14A14,14,0,0,1,116,54Z" }));
});
s.displayName = "Light";
export {
  s as Light
};
