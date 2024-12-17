var A = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var p = (e, t, a) => t in e ? A(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, i = (e, t) => {
  for (var a in t || (t = {}))
    n.call(t, a) && p(e, a, t[a]);
  if (m)
    for (var a of m(t))
      Z.call(t, a) && p(e, a, t[a]);
  return e;
};
var s = (e, t) => {
  var a = {};
  for (var o in e)
    n.call(e, o) && t.indexOf(o) < 0 && (a[o] = e[o]);
  if (e != null && m)
    for (var o of m(e))
      t.indexOf(o) < 0 && Z.call(e, o) && (a[o] = e[o]);
  return a;
};
import r, { forwardRef as d } from "react";
import f from "../../lib/OptiBase.mjs";
const l = d((o, a) => {
  var c = o, { children: e } = c, t = s(c, ["children"]);
  return /* @__PURE__ */ r.createElement(f, i({ ref: a }, t), e, /* @__PURE__ */ r.createElement("path", { d: "M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z", opacity: "0.2" }), /* @__PURE__ */ r.createElement("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216ZM80,108a12,12,0,1,1,12,12A12,12,0,0,1,80,108Zm96,0a12,12,0,1,1-12-12A12,12,0,0,1,176,108Zm-1.08,64a8,8,0,1,1-13.84,8c-7.47-12.91-19.21-20-33.08-20s-25.61,7.1-33.08,20a8,8,0,1,1-13.84-8c10.29-17.79,27.39-28,46.92-28S164.63,154.2,174.92,172Z" }));
});
l.displayName = "Duotone";
export {
  l as Duotone
};
