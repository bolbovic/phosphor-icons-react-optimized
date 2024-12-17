var V = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var Z = (a, t, e) => t in a ? V(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, d = (a, t) => {
  for (var e in t || (t = {}))
    l.call(t, e) && Z(a, e, t[e]);
  if (o)
    for (var e of o(t))
      p.call(t, e) && Z(a, e, t[e]);
  return a;
};
var A = (a, t) => {
  var e = {};
  for (var m in a)
    l.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && o)
    for (var m of o(a))
      t.indexOf(m) < 0 && p.call(a, m) && (e[m] = a[m]);
  return e;
};
import H, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const h = c((m, e) => {
  var r = m, { children: a } = r, t = A(r, ["children"]);
  return /* @__PURE__ */ H.createElement(f, d({ ref: e }, t), a, /* @__PURE__ */ H.createElement("path", { d: "M100,40a12,12,0,0,1,12-12h32a12,12,0,0,1,0,24H112A12,12,0,0,1,100,40Zm44,164H112a12,12,0,0,0,0,24h32a12,12,0,0,0,0-24ZM208,28H184a12,12,0,0,0,0,24h20V72a12,12,0,0,0,24,0V48A20,20,0,0,0,208,28Zm8,72a12,12,0,0,0-12,12v32a12,12,0,0,0,24,0V112A12,12,0,0,0,216,100ZM40,156a12,12,0,0,0,12-12V112a12,12,0,0,0-24,0v32A12,12,0,0,0,40,156Zm32,48H52V184a12,12,0,0,0-24,0v24a20,20,0,0,0,20,20H72a12,12,0,0,0,0-24ZM56.88,31.93A12,12,0,1,0,39.12,48.07l160,176a12,12,0,0,0,17.76-16.14Z" }));
});
h.displayName = "Bold";
export {
  h as Bold
};
