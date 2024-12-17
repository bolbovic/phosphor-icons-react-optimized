var Z = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var h = (a, t, e) => t in a ? Z(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, i = (a, t) => {
  for (var e in t || (t = {}))
    l.call(t, e) && h(a, e, t[e]);
  if (m)
    for (var e of m(t))
      o.call(t, e) && h(a, e, t[e]);
  return a;
};
var p = (a, t) => {
  var e = {};
  for (var L in a)
    l.call(a, L) && t.indexOf(L) < 0 && (e[L] = a[L]);
  if (a != null && m)
    for (var L of m(a))
      t.indexOf(L) < 0 && o.call(a, L) && (e[L] = a[L]);
  return e;
};
import H, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const s = c((L, e) => {
  var r = L, { children: a } = r, t = p(r, ["children"]);
  return /* @__PURE__ */ H.createElement(f, i({ ref: e }, t), a, /* @__PURE__ */ H.createElement("path", { d: "M213.64,214,162.38,73l9.82-27H184a6,6,0,0,0,0-12H88a6,6,0,0,0,0,12h7.43L34.36,214A6,6,0,0,0,38,221.64a6.15,6.15,0,0,0,2,.36,6,6,0,0,0,5.64-3.95L55.84,190h51.23L98.36,214a6,6,0,0,0,3.59,7.69,6.15,6.15,0,0,0,2,.36,6,6,0,0,0,5.64-3.95L128.57,166h54.86l18.93,52.05A6,6,0,0,0,208,222a6.15,6.15,0,0,0,2.05-.36A6,6,0,0,0,213.64,214ZM128.89,130H77.66L90.75,94H142Zm30.54-84L146.34,82H95.11L108.2,46ZM60.2,178l13.09-36h51.23l-13.09,36Zm72.73-24L156,90.56,179.07,154Z" }));
});
s.displayName = "Light";
export {
  s as Light
};
