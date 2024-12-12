var L = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var V = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var Z = (e, r, a) => r in e ? L(e, r, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[r] = a, p = (e, r) => {
  for (var a in r || (r = {}))
    V.call(r, a) && Z(e, a, r[a]);
  if (m)
    for (var a of m(r))
      o.call(r, a) && Z(e, a, r[a]);
  return e;
};
var M = (e, r) => {
  var a = {};
  for (var t in e)
    V.call(e, t) && r.indexOf(t) < 0 && (a[t] = e[t]);
  if (e != null && m)
    for (var t of m(e))
      r.indexOf(t) < 0 && o.call(e, t) && (a[t] = e[t]);
  return a;
};
import l, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const i = c((t, a) => {
  var H = t, { children: e } = H, r = M(H, ["children"]);
  return /* @__PURE__ */ l.createElement(f, p({ ref: a }, r), e, /* @__PURE__ */ l.createElement("path", { d: "M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Zm-12.69,88L136,60.69V48h12.69L208,107.32V120ZM136,83.31,172.69,120H136Zm72,1.38L171.31,48H208ZM120,48v72H48V48ZM107.31,208,48,148.69V136H60.69L120,195.31V208ZM120,172.69,83.31,136H120Zm-72-1.38L84.69,208H48ZM208,208H136V136h72v72Z" }));
});
i.displayName = "Regular";
export {
  i as Regular
};
