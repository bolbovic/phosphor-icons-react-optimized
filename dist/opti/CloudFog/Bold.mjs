var f = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var p = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, h = (a, t) => {
  for (var e in t || (t = {}))
    c.call(t, e) && p(a, e, t[e]);
  if (o)
    for (var e of o(t))
      d.call(t, e) && p(a, e, t[e]);
  return a;
};
var l = (a, t) => {
  var e = {};
  for (var m in a)
    c.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && o)
    for (var m of o(a))
      t.indexOf(m) < 0 && d.call(a, m) && (e[m] = a[m]);
  return e;
};
import Z, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const H = i((m, e) => {
  var r = m, { children: a } = r, t = l(r, ["children"]);
  return /* @__PURE__ */ Z.createElement(s, h({ ref: e }, t), a, /* @__PURE__ */ Z.createElement("path", { d: "M120,208H72a12,12,0,0,1,0-24h48a12,12,0,0,1,0,24Zm64-24H160a12,12,0,0,0,0,24h24a12,12,0,0,0,0-24Zm-24,36H104a12,12,0,0,0,0,24h56a12,12,0,0,0,0-24ZM232,96a76.08,76.08,0,0,1-76,76H76A52,52,0,1,1,85,68.78,76,76,0,0,1,232,96Zm-24,0a52,52,0,0,0-104,0,12,12,0,0,1-24,0c0-1.24,0-2.48.09-3.71A29.28,29.28,0,0,0,76,92a28,28,0,0,0,0,56h80A52.06,52.06,0,0,0,208,96Z" }));
});
H.displayName = "Bold";
export {
  H as Bold
};
