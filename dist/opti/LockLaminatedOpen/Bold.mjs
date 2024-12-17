var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, V = Object.prototype.propertyIsEnumerable;
var H = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, c = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && H(a, e, t[e]);
  if (r)
    for (var e of r(t))
      V.call(t, e) && H(a, e, t[e]);
  return a;
};
var d = (a, t) => {
  var e = {};
  for (var o in a)
    p.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && r)
    for (var o of r(a))
      t.indexOf(o) < 0 && V.call(a, o) && (e[o] = a[o]);
  return e;
};
import l, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const Z = i((o, e) => {
  var m = o, { children: a } = m, t = d(m, ["children"]);
  return /* @__PURE__ */ l.createElement(s, c({ ref: e }, t), a, /* @__PURE__ */ l.createElement("path", { d: "M208,76H100V56a28,28,0,0,1,28-28c13.51,0,25.65,9.62,28.24,22.39a12,12,0,1,0,23.52-4.78C174.87,21.5,153.1,4,128,4A52.06,52.06,0,0,0,76,56V76H48A20,20,0,0,0,28,96V208a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V96A20,20,0,0,0,208,76ZM52,144H204v16H52Zm152-44v20H52V100ZM52,204V184H204v20Z" }));
});
Z.displayName = "Bold";
export {
  Z as Bold
};
