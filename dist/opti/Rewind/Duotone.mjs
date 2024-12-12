var Z = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var A = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var p = (e, t, a) => t in e ? Z(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, n = (e, t) => {
  for (var a in t || (t = {}))
    A.call(t, a) && p(e, a, t[a]);
  if (r)
    for (var a of r(t))
      c.call(t, a) && p(e, a, t[a]);
  return e;
};
var i = (e, t) => {
  var a = {};
  for (var o in e)
    A.call(e, o) && t.indexOf(o) < 0 && (a[o] = e[o]);
  if (e != null && r)
    for (var o of r(e))
      t.indexOf(o) < 0 && c.call(e, o) && (a[o] = e[o]);
  return a;
};
import l, { forwardRef as d } from "react";
import f from "../../lib/OptiBase.mjs";
const s = d((o, a) => {
  var m = o, { children: e } = m, t = i(m, ["children"]);
  return /* @__PURE__ */ l.createElement(f, n({ ref: a }, t), e, /* @__PURE__ */ l.createElement(
    "path",
    {
      d: "M224,71.85v112.3a7.91,7.91,0,0,1-12.18,6.59l-88.19-56.15a7.8,7.8,0,0,1,0-13.18l88.19-56.15A7.91,7.91,0,0,1,224,71.85ZM107.82,65.26,19.63,121.41a7.8,7.8,0,0,0,0,13.18l88.19,56.15A7.91,7.91,0,0,0,120,184.15V71.85A7.91,7.91,0,0,0,107.82,65.26Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ l.createElement("path", { d: "M223.77,58a16,16,0,0,0-16.25.53L128,109.14V71.84A15.91,15.91,0,0,0,103.52,58.5L15.33,114.66a15.8,15.8,0,0,0,0,26.68l88.19,56.16A15.91,15.91,0,0,0,128,184.16v-37.3l79.52,50.64A15.91,15.91,0,0,0,232,184.16V71.84A15.83,15.83,0,0,0,223.77,58ZM112,183.93,24.18,128,112,72.06Zm104,0L128.18,128,216,72.06Z" }));
});
s.displayName = "Duotone";
export {
  s as Duotone
};
