var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var l = (e, t, a) => t in e ? f(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, d = (e, t) => {
  for (var a in t || (t = {}))
    c.call(t, a) && l(e, a, t[a]);
  if (r)
    for (var a of r(t))
      p.call(t, a) && l(e, a, t[a]);
  return e;
};
var s = (e, t) => {
  var a = {};
  for (var o in e)
    c.call(e, o) && t.indexOf(o) < 0 && (a[o] = e[o]);
  if (e != null && r)
    for (var o of r(e))
      t.indexOf(o) < 0 && p.call(e, o) && (a[o] = e[o]);
  return a;
};
import A, { forwardRef as i } from "react";
import n from "../../lib/OptiBase.mjs";
const B = i((o, a) => {
  var m = o, { children: e } = m, t = s(m, ["children"]);
  return /* @__PURE__ */ A.createElement(n, d({ ref: a }, t), e, /* @__PURE__ */ A.createElement("path", { d: "M128,84A36,36,0,1,0,92,48,36,36,0,0,0,128,84Zm0-48a12,12,0,1,1-12,12A12,12,0,0,1,128,36ZM234.29,138.17a12,12,0,0,1-16.47,4.12c-.32-.19-32.37-18.92-77.82-21.88v27L201,216A12,12,0,1,1,183,232l-55-61.91L73,232A12,12,0,1,1,55,216l61-68.59v-27c-45.72,2.95-77.48,21.68-77.82,21.89a12,12,0,1,1-12.35-20.58C27.58,120.66,69.35,96,128,96s100.42,24.66,102.17,25.71A12,12,0,0,1,234.29,138.17Z" }));
});
B.displayName = "Bold";
export {
  B as Bold
};
