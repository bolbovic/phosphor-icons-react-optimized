var f = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, H = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, V = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && m(a, e, t[e]);
  if (o)
    for (var e of o(t))
      H.call(t, e) && m(a, e, t[e]);
  return a;
};
var d = (a, t) => {
  var e = {};
  for (var l in a)
    p.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && o)
    for (var l of o(a))
      t.indexOf(l) < 0 && H.call(a, l) && (e[l] = a[l]);
  return e;
};
import c, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const M = i((l, e) => {
  var r = l, { children: a } = r, t = d(r, ["children"]);
  return /* @__PURE__ */ c.createElement(s, V({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M220,48V96a12,12,0,0,1-24,0V77l-35.51,35.52a12,12,0,0,1-17-17L179,60H160a12,12,0,0,1,0-24h48A12,12,0,0,1,220,48ZM95.51,143.51,60,179V160a12,12,0,0,0-24,0v48a12,12,0,0,0,12,12H96a12,12,0,0,0,0-24H77l35.52-35.51a12,12,0,0,0-17-17ZM208,148a12,12,0,0,0-12,12v19l-35.51-35.52a12,12,0,0,0-17,17L179,196H160a12,12,0,0,0,0,24h48a12,12,0,0,0,12-12V160A12,12,0,0,0,208,148ZM77,60H96a12,12,0,0,0,0-24H48A12,12,0,0,0,36,48V96a12,12,0,0,0,24,0V77l35.51,35.52a12,12,0,0,0,17-17Z" }));
});
M.displayName = "Bold";
export {
  M as Bold
};
