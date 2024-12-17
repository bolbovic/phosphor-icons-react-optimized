var f = Object.defineProperty;
var s = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var c = (e, t, a) => t in e ? f(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, C = (e, t) => {
  for (var a in t || (t = {}))
    l.call(t, a) && c(e, a, t[a]);
  if (s)
    for (var a of s(t))
      o.call(t, a) && c(e, a, t[a]);
  return e;
};
var i = (e, t) => {
  var a = {};
  for (var r in e)
    l.call(e, r) && t.indexOf(r) < 0 && (a[r] = e[r]);
  if (e != null && s)
    for (var r of s(e))
      t.indexOf(r) < 0 && o.call(e, r) && (a[r] = e[r]);
  return a;
};
import p, { forwardRef as d } from "react";
import n from "../../lib/OptiBase.mjs";
const S = d((r, a) => {
  var m = r, { children: e } = m, t = i(m, ["children"]);
  return /* @__PURE__ */ p.createElement(n, C({ ref: a }, t), e, /* @__PURE__ */ p.createElement("path", { d: "M176,32c-20.61,0-38.28,18.16-48,45.85C118.28,50.16,100.61,32,80,32c-31.4,0-56,42.17-56,96s24.6,96,56,96c20.61,0,38.28-18.16,48-45.85,9.72,27.69,27.39,45.85,48,45.85,31.4,0,56-42.17,56-96S207.4,32,176,32ZM106.92,186.39C99.43,200.12,89.62,208,80,208s-19.43-7.88-26.92-21.61a104.81,104.81,0,0,1-10.24-29.23,32,32,0,1,0,0-58.32A104.81,104.81,0,0,1,53.08,69.61C60.57,55.88,70.38,48,80,48s19.43,7.88,26.92,21.61C115.35,85.07,120,105.81,120,128S115.35,170.93,106.92,186.39Zm96,0C195.43,200.12,185.62,208,176,208s-19.43-7.88-26.92-21.61a104.81,104.81,0,0,1-10.24-29.23,32,32,0,1,0,0-58.32,104.81,104.81,0,0,1,10.24-29.23C156.57,55.88,166.38,48,176,48s19.43,7.88,26.92,21.61C211.35,85.07,216,105.81,216,128S211.35,170.93,202.92,186.39Z" }));
});
S.displayName = "Fill";
export {
  S as Fill
};
