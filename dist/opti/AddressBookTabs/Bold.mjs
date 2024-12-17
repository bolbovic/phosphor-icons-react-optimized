var s = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, H = Object.prototype.propertyIsEnumerable;
var Z = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, c = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && Z(a, e, t[e]);
  if (o)
    for (var e of o(t))
      H.call(t, e) && Z(a, e, t[e]);
  return a;
};
var d = (a, t) => {
  var e = {};
  for (var m in a)
    p.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && o)
    for (var m of o(a))
      t.indexOf(m) < 0 && H.call(a, m) && (e[m] = a[m]);
  return e;
};
import l, { forwardRef as V } from "react";
import f from "../../lib/OptiBase.mjs";
const h = V((m, e) => {
  var r = m, { children: a } = r, t = d(r, ["children"]);
  return /* @__PURE__ */ l.createElement(f, c({ ref: e }, t), a, /* @__PURE__ */ l.createElement("path", { d: "M208,28H48A20,20,0,0,0,28,48V208a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V48A20,20,0,0,0,208,28Zm-20,80h16v40H188Zm16-24H188V52h16ZM52,52H164V204H52ZM188,204V172h16v32Zm-36.38-39a43.22,43.22,0,0,0-15.16-23,36,36,0,1,0-56.92,0,43.35,43.35,0,0,0-15.16,23,12,12,0,1,0,23.24,6c2.2-8.54,11-15,20.38-15s18.19,6.44,20.38,15a12,12,0,0,0,23.24-6ZM96,120a12,12,0,1,1,12,12A12,12,0,0,1,96,120Z" }));
});
h.displayName = "Bold";
export {
  h as Bold
};
