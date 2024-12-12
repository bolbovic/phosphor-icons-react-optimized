var Z = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var c = (e, a, t) => a in e ? Z(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[a] = t, l = (e, a) => {
  for (var t in a || (a = {}))
    n.call(a, t) && c(e, t, a[t]);
  if (m)
    for (var t of m(a))
      i.call(a, t) && c(e, t, a[t]);
  return e;
};
var A = (e, a) => {
  var t = {};
  for (var o in e)
    n.call(e, o) && a.indexOf(o) < 0 && (t[o] = e[o]);
  if (e != null && m)
    for (var o of m(e))
      a.indexOf(o) < 0 && i.call(e, o) && (t[o] = e[o]);
  return t;
};
import r, { forwardRef as d } from "react";
import f from "../../lib/OptiBase.mjs";
const s = d((o, t) => {
  var p = o, { children: e } = p, a = A(p, ["children"]);
  return /* @__PURE__ */ r.createElement(f, l({ ref: t }, a), e, /* @__PURE__ */ r.createElement("path", { d: "M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z", opacity: "0.2" }), /* @__PURE__ */ r.createElement("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm0-104c-.61,0-1.22,0-1.82,0L142.87,84.1a8,8,0,0,0-13.74-8.2l-32.23,54A36,36,0,1,0,128,112Zm0,56a20,20,0,1,1,20-20A20,20,0,0,1,128,168Z" }));
});
s.displayName = "Duotone";
export {
  s as Duotone
};
