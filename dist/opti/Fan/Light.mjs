var Z = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? Z(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      l.call(t, e) && o(a, e, t[e]);
  return a;
};
var A = (a, t) => {
  var e = {};
  for (var m in a)
    i.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && l.call(a, m) && (e[m] = a[m]);
  return e;
};
import L, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const d = f((m, e) => {
  var c = m, { children: a } = c, t = A(c, ["children"]);
  return /* @__PURE__ */ L.createElement(s, p({ ref: e }, t), a, /* @__PURE__ */ L.createElement("path", { d: "M231.06,135.52a58,58,0,0,0-88-33.42c-.69-.41-1.41-.8-2.14-1.15l16.86-67.32a6,6,0,0,0-2.58-6.51A58,58,0,1,0,98,127.86V128c0,.77,0,1.54.1,2.3L31.37,149.36A6,6,0,0,0,27,154.85,58,58,0,1,0,142.88,154c.7-.4,1.39-.83,2.06-1.29L194.81,201a6,6,0,0,0,6.94,1,58,58,0,0,0,29.31-66.51ZM110,128a18,18,0,1,1,18,18A18,18,0,0,1,110,128ZM78,76a46,46,0,0,1,67.08-40.9L129.32,98q-.66,0-1.32,0a30,30,0,0,0-27.33,17.66A45.84,45.84,0,0,1,78,76Zm30,121.3a46,46,0,0,1-69-37.64l62.39-17.82A30,30,0,0,0,128,158a29.29,29.29,0,0,0,3-.15A45.85,45.85,0,0,1,108,197.3Zm106.9-23.76a45.91,45.91,0,0,1-15,15.7l-46.63-45.12a29.91,29.91,0,0,0-.93-33.62,46,46,0,0,1,62.52,63Z" }));
});
d.displayName = "Light";
export {
  d as Light
};
