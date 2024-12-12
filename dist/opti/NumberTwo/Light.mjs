var s = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, f = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (m)
    for (var e of m(t))
      c.call(t, e) && i(a, e, t[e]);
  return a;
};
var h = (a, t) => {
  var e = {};
  for (var r in a)
    p.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && c.call(a, r) && (e[r] = a[r]);
  return e;
};
import l, { forwardRef as d } from "react";
import n from "../../lib/OptiBase.mjs";
const L = d((r, e) => {
  var o = r, { children: a } = o, t = h(o, ["children"]);
  return /* @__PURE__ */ l.createElement(n, f({ ref: e }, t), a, /* @__PURE__ */ l.createElement("path", { d: "M174,208a6,6,0,0,1-6,6H88a6,6,0,0,1-4.8-9.6l72-95.92a34,34,0,0,0-31.88-54.14A34.1,34.1,0,0,0,96.83,74.41a6,6,0,0,1-11-4.81,46.47,46.47,0,0,1,5.43-9.28,46,46,0,0,1,73.48,55.37L100,202h68A6,6,0,0,1,174,208Z" }));
});
L.displayName = "Light";
export {
  L as Light
};
