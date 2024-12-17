var d = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var c = (e, a, t) => a in e ? d(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[a] = t, A = (e, a) => {
  for (var t in a || (a = {}))
    n.call(a, t) && c(e, t, a[t]);
  if (m)
    for (var t of m(a))
      i.call(a, t) && c(e, t, a[t]);
  return e;
};
var Z = (e, a) => {
  var t = {};
  for (var o in e)
    n.call(e, o) && a.indexOf(o) < 0 && (t[o] = e[o]);
  if (e != null && m)
    for (var o of m(e))
      a.indexOf(o) < 0 && i.call(e, o) && (t[o] = e[o]);
  return t;
};
import r, { forwardRef as f } from "react";
import l from "../../lib/OptiBase.mjs";
const s = f((o, t) => {
  var p = o, { children: e } = p, a = Z(p, ["children"]);
  return /* @__PURE__ */ r.createElement(l, A({ ref: t }, a), e, /* @__PURE__ */ r.createElement("path", { d: "M192,128a64,64,0,1,1-64-64A64,64,0,0,1,192,128Z", opacity: "0.2" }), /* @__PURE__ */ r.createElement("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm0-160a72,72,0,1,0,72,72A72.08,72.08,0,0,0,128,56Zm0,128a56,56,0,1,1,56-56A56.06,56.06,0,0,1,128,184Z" }));
});
s.displayName = "Duotone";
export {
  s as Duotone
};
