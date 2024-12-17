var c = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var h = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var A = (e, t, a) => t in e ? c(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, p = (e, t) => {
  for (var a in t || (t = {}))
    h.call(t, a) && A(e, a, t[a]);
  if (r)
    for (var a of r(t))
      i.call(t, a) && A(e, a, t[a]);
  return e;
};
var Z = (e, t) => {
  var a = {};
  for (var m in e)
    h.call(e, m) && t.indexOf(m) < 0 && (a[m] = e[m]);
  if (e != null && r)
    for (var m of r(e))
      t.indexOf(m) < 0 && i.call(e, m) && (a[m] = e[m]);
  return a;
};
import n, { forwardRef as f } from "react";
import l from "../../lib/OptiBase.mjs";
const s = f((m, a) => {
  var o = m, { children: e } = o, t = Z(o, ["children"]);
  return /* @__PURE__ */ n.createElement(l, p({ ref: a }, t), e, /* @__PURE__ */ n.createElement("path", { d: "M248,84H8a4,4,0,0,0-4,4,124,124,0,0,0,248,0A4,4,0,0,0,248,84ZM71.53,150.13,124,97.66V171.9A83.67,83.67,0,0,1,71.53,150.13Zm-5.66-5.66A83.67,83.67,0,0,1,44.1,92h74.24ZM132,97.66l52.47,52.47A83.67,83.67,0,0,1,132,171.9Zm58.13,46.81L137.66,92H211.9A83.67,83.67,0,0,1,190.13,144.47ZM128,204A116.14,116.14,0,0,1,12.07,92h24a92,92,0,0,0,183.82,0h24A116.14,116.14,0,0,1,128,204Z" }));
});
s.displayName = "Thin";
export {
  s as Thin
};
