var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, A = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var Z = (a, t) => {
  var e = {};
  for (var H in a)
    i.call(a, H) && t.indexOf(H) < 0 && (e[H] = a[H]);
  if (a != null && m)
    for (var H of m(a))
      t.indexOf(H) < 0 && p.call(a, H) && (e[H] = a[H]);
  return e;
};
import c, { forwardRef as h } from "react";
import l from "../../lib/OptiBase.mjs";
const s = h((H, e) => {
  var r = H, { children: a } = r, t = Z(r, ["children"]);
  return /* @__PURE__ */ c.createElement(l, A({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M240,114H210.49l-43.9-43.9a13.94,13.94,0,0,0-9.9-4.1H44.28a14,14,0,0,0-11.65,6.23L3,116.67A6,6,0,0,0,2,120v48a14,14,0,0,0,14,14H34.6a30,30,0,0,0,58.8,0h69.2a30,30,0,0,0,58.8,0H240a14,14,0,0,0,14-14V128A14,14,0,0,0,240,114ZM42.62,78.89A2,2,0,0,1,44.28,78H156.69a2,2,0,0,1,1.41.59L193.52,114H19.21ZM64,194a18,18,0,1,1,18-18A18,18,0,0,1,64,194Zm128,0a18,18,0,1,1,18-18A18,18,0,0,1,192,194Zm50-26a2,2,0,0,1-2,2H221.4a30,30,0,0,0-58.8,0H93.4a30,30,0,0,0-58.8,0H16a2,2,0,0,1-2-2V126H240a2,2,0,0,1,2,2Z" }));
});
s.displayName = "Light";
export {
  s as Light
};
