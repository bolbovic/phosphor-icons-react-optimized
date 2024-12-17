var i = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, C = Object.prototype.propertyIsEnumerable;
var s = (e, t, a) => t in e ? i(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, Z = (e, t) => {
  for (var a in t || (t = {}))
    p.call(t, a) && s(e, a, t[a]);
  if (m)
    for (var a of m(t))
      C.call(t, a) && s(e, a, t[a]);
  return e;
};
var n = (e, t) => {
  var a = {};
  for (var o in e)
    p.call(e, o) && t.indexOf(o) < 0 && (a[o] = e[o]);
  if (e != null && m)
    for (var o of m(e))
      t.indexOf(o) < 0 && C.call(e, o) && (a[o] = e[o]);
  return a;
};
import r, { forwardRef as A } from "react";
import M from "../../lib/OptiBase.mjs";
const d = A((o, a) => {
  var c = o, { children: e } = c, t = n(c, ["children"]);
  return /* @__PURE__ */ r.createElement(M, Z({ ref: a }, t), e, /* @__PURE__ */ r.createElement(
    "path",
    {
      d: "M80,128a24,24,0,1,1-24-24A24,24,0,0,1,80,128Zm72-24a24,24,0,1,0,24,24A24,24,0,0,0,152,104Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ r.createElement("path", { d: "M176,32c-20.61,0-38.28,18.16-48,45.85C118.28,50.16,100.61,32,80,32c-31.4,0-56,42.17-56,96s24.6,96,56,96c20.61,0,38.28-18.16,48-45.85,9.72,27.69,27.39,45.85,48,45.85,31.4,0,56-42.17,56-96S207.4,32,176,32ZM106.92,186.39C99.43,200.12,89.62,208,80,208s-19.43-7.88-26.92-21.61a104.81,104.81,0,0,1-10.24-29.23,32,32,0,1,0,0-58.32A104.81,104.81,0,0,1,53.08,69.61C60.57,55.88,70.38,48,80,48s19.43,7.88,26.92,21.61C115.35,85.07,120,105.81,120,128S115.35,170.93,106.92,186.39ZM40,128a16,16,0,1,1,16,16A16,16,0,0,1,40,128Zm162.92,58.39C195.43,200.12,185.62,208,176,208s-19.43-7.88-26.92-21.61a104.81,104.81,0,0,1-10.24-29.23,32,32,0,1,0,0-58.32,104.81,104.81,0,0,1,10.24-29.23C156.57,55.88,166.38,48,176,48s19.43,7.88,26.92,21.61C211.35,85.07,216,105.81,216,128S211.35,170.93,202.92,186.39ZM136,128a16,16,0,1,1,16,16A16,16,0,0,1,136,128Z" }));
});
d.displayName = "Duotone";
export {
  d as Duotone
};
