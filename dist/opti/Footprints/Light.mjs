var C = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var Z = (a, t, e) => t in a ? C(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, h = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && Z(a, e, t[e]);
  if (m)
    for (var e of m(t))
      s.call(t, e) && Z(a, e, t[e]);
  return a;
};
var i = (a, t) => {
  var e = {};
  for (var c in a)
    o.call(a, c) && t.indexOf(c) < 0 && (e[c] = a[c]);
  if (a != null && m)
    for (var c of m(a))
      t.indexOf(c) < 0 && s.call(a, c) && (e[c] = a[c]);
  return e;
};
import p, { forwardRef as H } from "react";
import f from "../../lib/OptiBase.mjs";
const v = H((c, e) => {
  var r = c, { children: a } = r, t = i(r, ["children"]);
  return /* @__PURE__ */ p.createElement(f, h({ ref: e }, t), a, /* @__PURE__ */ p.createElement("path", { d: "M104,162H48a6,6,0,0,0-6,6v12a34,34,0,0,0,68,0V168A6,6,0,0,0,104,162Zm-6,18a22,22,0,0,1-44,0v-6H98ZM76,18C65.2,18,54.56,27.91,46,45.9c-13.66,28.82-18.29,71.53,0,93.9a6,6,0,0,0,4.65,2.2h50.53a6,6,0,0,0,4.65-2.2c18.32-22.37,13.69-65.08,0-93.9C97.41,27.91,86.77,18,76,18ZM98.23,130H53.74c-10.09-15.18-11.69-47.65,3.14-79C64.24,35.51,71.77,30,76,30s11.75,5.51,19.1,21C109.92,82.35,108.32,114.82,98.23,130ZM208,186H152a6,6,0,0,0-6,6v12a34,34,0,0,0,68,0V192A6,6,0,0,0,208,186Zm-6,18a22,22,0,0,1-44,0v-6h44Zm-47.27-38h50.53a6,6,0,0,0,4.65-2.2c18.32-22.37,13.69-65.08,0-93.9C201.44,51.91,190.8,42,180,42s-21.43,9.91-30,27.9c-13.66,28.82-18.29,71.53,0,93.9A6,6,0,0,0,154.75,166Zm6.17-91c7.35-15.53,14.88-21,19.1-21s11.74,5.51,19.1,21c14.83,31.31,13.23,63.78,3.14,79H157.77C147.68,138.82,146.08,106.35,160.92,75Z" }));
});
v.displayName = "Light";
export {
  v as Light
};
