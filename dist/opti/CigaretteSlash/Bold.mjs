var f = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var c = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, H = (a, t) => {
  for (var e in t || (t = {}))
    l.call(t, e) && c(a, e, t[e]);
  if (o)
    for (var e of o(t))
      p.call(t, e) && c(a, e, t[e]);
  return a;
};
var Z = (a, t) => {
  var e = {};
  for (var m in a)
    l.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && o)
    for (var m of o(a))
      t.indexOf(m) < 0 && p.call(a, m) && (e[m] = a[m]);
  return e;
};
import d, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const A = i((m, e) => {
  var r = m, { children: a } = r, t = Z(r, ["children"]);
  return /* @__PURE__ */ d.createElement(s, H({ ref: e }, t), a, /* @__PURE__ */ d.createElement("path", { d: "M201.67,55.89c7.53-12.71,7.12-19.63,5.07-21.1A12,12,0,0,1,216.67,13a25.9,25.9,0,0,1,13.8,15.79c3.6,10.92.86,24.17-8.14,39.38-7.53,12.7-7.12,19.63-5.07,21.1a12,12,0,0,1-9.93,21.84,26,26,0,0,1-13.8-15.79C189.93,84.34,192.67,71.09,201.67,55.89ZM145.53,95.27a26,26,0,0,0,13.8,15.79,12,12,0,0,0,9.93-21.84c-2-1.47-2.46-8.4,5.07-21.1,9-15.21,11.74-28.46,8.14-39.38A25.9,25.9,0,0,0,168.67,13a12,12,0,0,0-9.93,21.84c2,1.47,2.46,8.39-5.07,21.1C144.67,71.09,141.93,84.34,145.53,95.27Zm71.35,112.66a12,12,0,1,1-17.76,16.14L173.6,196H32a20,20,0,0,1-20-20V144a20,20,0,0,1,20-20h76.15l-69-75.93A12,12,0,1,1,56.88,31.93ZM36,172H76V148H36Zm115.78,0L130,148H100v24ZM224,124H189.33a12,12,0,0,0,0,24H220v34.94a12,12,0,0,0,24,0V144A20,20,0,0,0,224,124Z" }));
});
A.displayName = "Bold";
export {
  A as Bold
};