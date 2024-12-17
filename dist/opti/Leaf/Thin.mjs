var s = Object.defineProperty;
var c = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var o = (e, t, a) => t in e ? s(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, p = (e, t) => {
  for (var a in t || (t = {}))
    i.call(t, a) && o(e, a, t[a]);
  if (c)
    for (var a of c(t))
      l.call(t, a) && o(e, a, t[a]);
  return e;
};
var n = (e, t) => {
  var a = {};
  for (var r in e)
    i.call(e, r) && t.indexOf(r) < 0 && (a[r] = e[r]);
  if (e != null && c)
    for (var r of c(e))
      t.indexOf(r) < 0 && l.call(e, r) && (a[r] = e[r]);
  return a;
};
import f, { forwardRef as d } from "react";
import h from "../../lib/OptiBase.mjs";
const C = d((r, a) => {
  var m = r, { children: e } = m, t = n(m, ["children"]);
  return /* @__PURE__ */ f.createElement(h, p({ ref: a }, t), e, /* @__PURE__ */ f.createElement("path", { d: "M219.45,40.31a4,4,0,0,0-3.76-3.76C141.06,32.16,81.46,54.39,56.24,96,39,124.56,39.9,158.37,58.8,191.54L37.17,213.17a4,4,0,0,0,5.66,5.66l21.63-21.64c17.39,9.91,35,14.89,51.83,14.89A83.43,83.43,0,0,0,160,199.76C201.61,174.54,223.84,114.93,219.45,40.31ZM155.82,192.92c-25.37,15.37-55.56,14.75-85.48-1.61l92.5-92.49a4,4,0,0,0-5.66-5.66l-92.49,92.5c-16.36-29.92-17-60.11-1.61-85.48C86.34,61.77,141.72,41,211.66,44.34,215,114.28,194.23,169.66,155.82,192.92Z" }));
});
C.displayName = "Thin";
export {
  C as Thin
};
