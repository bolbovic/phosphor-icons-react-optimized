var d = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var c = (e, t, a) => t in e ? d(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, Z = (e, t) => {
  for (var a in t || (t = {}))
    n.call(t, a) && c(e, a, t[a]);
  if (o)
    for (var a of o(t))
      A.call(t, a) && c(e, a, t[a]);
  return e;
};
var i = (e, t) => {
  var a = {};
  for (var m in e)
    n.call(e, m) && t.indexOf(m) < 0 && (a[m] = e[m]);
  if (e != null && o)
    for (var m of o(e))
      t.indexOf(m) < 0 && A.call(e, m) && (a[m] = e[m]);
  return a;
};
import r, { forwardRef as f } from "react";
import l from "../../lib/OptiBase.mjs";
const s = f((m, a) => {
  var p = m, { children: e } = p, t = i(p, ["children"]);
  return /* @__PURE__ */ r.createElement(l, Z({ ref: a }, t), e, /* @__PURE__ */ r.createElement("path", { d: "M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z", opacity: "0.2" }), /* @__PURE__ */ r.createElement("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm12-88a12,12,0,1,1-12-12A12,12,0,0,1,140,128Zm0-44a12,12,0,1,1-12-12A12,12,0,0,1,140,84Zm0,88a12,12,0,1,1-12-12A12,12,0,0,1,140,172Z" }));
});
s.displayName = "Duotone";
export {
  s as Duotone
};