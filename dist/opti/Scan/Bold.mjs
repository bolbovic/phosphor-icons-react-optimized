var h = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var V = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var H = (a, t, e) => t in a ? h(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, A = (a, t) => {
  for (var e in t || (t = {}))
    V.call(t, e) && H(a, e, t[e]);
  if (o)
    for (var e of o(t))
      p.call(t, e) && H(a, e, t[e]);
  return a;
};
var Z = (a, t) => {
  var e = {};
  for (var m in a)
    V.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && o)
    for (var m of o(a))
      t.indexOf(m) < 0 && p.call(a, m) && (e[m] = a[m]);
  return e;
};
import d, { forwardRef as l } from "react";
import c from "../../lib/OptiBase.mjs";
const f = l((m, e) => {
  var r = m, { children: a } = r, t = Z(r, ["children"]);
  return /* @__PURE__ */ d.createElement(c, A({ ref: e }, t), a, /* @__PURE__ */ d.createElement("path", { d: "M228,40V80a12,12,0,0,1-24,0V52H176a12,12,0,0,1,0-24h40A12,12,0,0,1,228,40ZM80,204H52V176a12,12,0,0,0-24,0v40a12,12,0,0,0,12,12H80a12,12,0,0,0,0-24Zm136-40a12,12,0,0,0-12,12v28H176a12,12,0,0,0,0,24h40a12,12,0,0,0,12-12V176A12,12,0,0,0,216,164ZM40,92A12,12,0,0,0,52,80V52H80a12,12,0,0,0,0-24H40A12,12,0,0,0,28,40V80A12,12,0,0,0,40,92ZM84,72h88a12,12,0,0,1,12,12v88a12,12,0,0,1-12,12H84a12,12,0,0,1-12-12V84A12,12,0,0,1,84,72Zm12,88h64V96H96Z" }));
});
f.displayName = "Bold";
export {
  f as Bold
};
