var f = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var m = (e, t, a) => t in e ? f(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, M = (e, t) => {
  for (var a in t || (t = {}))
    p.call(t, a) && m(e, a, t[a]);
  if (o)
    for (var a of o(t))
      d.call(t, a) && m(e, a, t[a]);
  return e;
};
var Z = (e, t) => {
  var a = {};
  for (var l in e)
    p.call(e, l) && t.indexOf(l) < 0 && (a[l] = e[l]);
  if (e != null && o)
    for (var l of o(e))
      t.indexOf(l) < 0 && d.call(e, l) && (a[l] = e[l]);
  return a;
};
import c, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const n = i((l, a) => {
  var r = l, { children: e } = r, t = Z(r, ["children"]);
  return /* @__PURE__ */ c.createElement(s, M({ ref: a }, t), e, /* @__PURE__ */ c.createElement("path", { d: "M241.79,110.7,74,14.65a20.24,20.24,0,0,0-20.12.06A19.62,19.62,0,0,0,44,31.84V224.16a19.62,19.62,0,0,0,9.91,17.13,20.22,20.22,0,0,0,20.12.06l167.76-96a19.76,19.76,0,0,0,0-34.6ZM68,203V53l75,75ZM160,145l12.4,12.4-58,33.2ZM114.41,65.43l58,33.2L160,111ZM194,145l-17-17,17-17,29.72,17Z" }));
});
n.displayName = "Bold";
export {
  n as Bold
};
