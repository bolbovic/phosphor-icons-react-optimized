var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, L = Object.prototype.propertyIsEnumerable;
var r = (e, t, a) => t in e ? f(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, d = (e, t) => {
  for (var a in t || (t = {}))
    p.call(t, a) && r(e, a, t[a]);
  if (m)
    for (var a of m(t))
      L.call(t, a) && r(e, a, t[a]);
  return e;
};
var Z = (e, t) => {
  var a = {};
  for (var l in e)
    p.call(e, l) && t.indexOf(l) < 0 && (a[l] = e[l]);
  if (e != null && m)
    for (var l of m(e))
      t.indexOf(l) < 0 && L.call(e, l) && (a[l] = e[l]);
  return a;
};
import c, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const n = i((l, a) => {
  var o = l, { children: e } = o, t = Z(o, ["children"]);
  return /* @__PURE__ */ c.createElement(s, d({ ref: a }, t), e, /* @__PURE__ */ c.createElement("path", { d: "M230.15,70.54,185.46,25.86a20,20,0,0,0-28.28,0L33.86,149.17A19.86,19.86,0,0,0,28,163.31V208a20,20,0,0,0,20,20H216a12,12,0,0,0,0-24H125L230.15,98.83A20,20,0,0,0,230.15,70.54ZM136,81l11,11L76,163,65,152ZM52,204V173l15.52,15.51h0L83,204Zm52-13L93,180l71-71,11,11Zm88-88L153,64l18.34-18.34,39,39Z" }));
});
n.displayName = "Bold";
export {
  n as Bold
};
