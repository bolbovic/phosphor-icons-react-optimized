var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var V = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var Z = (e, t, a) => t in e ? f(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, l = (e, t) => {
  for (var a in t || (t = {}))
    V.call(t, a) && Z(e, a, t[a]);
  if (m)
    for (var a of m(t))
      o.call(t, a) && Z(e, a, t[a]);
  return e;
};
var p = (e, t) => {
  var a = {};
  for (var r in e)
    V.call(e, r) && t.indexOf(r) < 0 && (a[r] = e[r]);
  if (e != null && m)
    for (var r of m(e))
      t.indexOf(r) < 0 && o.call(e, r) && (a[r] = e[r]);
  return a;
};
import M, { forwardRef as s } from "react";
import L from "../../lib/OptiBase.mjs";
const c = s((r, a) => {
  var H = r, { children: e } = H, t = p(H, ["children"]);
  return /* @__PURE__ */ M.createElement(L, l({ ref: a }, t), e, /* @__PURE__ */ M.createElement("path", { d: "M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Zm-12.69,88L136,60.69V48h12.69L208,107.32V120ZM136,83.31,172.69,120H136Zm72,1.38L171.31,48H208ZM120,48v72H48V48ZM107.31,208,48,148.69V136H60.69L120,195.31V208ZM120,172.69,83.31,136H120Zm-72-1.38L84.69,208H48ZM208,208H136V136h72v72Z" }));
});
c.displayName = "Regular";
export {
  c as Regular,
  c as default
};
