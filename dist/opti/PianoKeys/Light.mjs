var Z = Object.defineProperty;
var h = Object.getOwnPropertySymbols;
var V = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var H = (a, t, e) => t in a ? Z(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, i = (a, t) => {
  for (var e in t || (t = {}))
    V.call(t, e) && H(a, e, t[e]);
  if (h)
    for (var e of h(t))
      o.call(t, e) && H(a, e, t[e]);
  return a;
};
var p = (a, t) => {
  var e = {};
  for (var m in a)
    V.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && h)
    for (var m of h(a))
      t.indexOf(m) < 0 && o.call(a, m) && (e[m] = a[m]);
  return e;
};
import v, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const s = c((m, e) => {
  var r = m, { children: a } = r, t = p(r, ["children"]);
  return /* @__PURE__ */ v.createElement(f, i({ ref: e }, t), a, /* @__PURE__ */ v.createElement("path", { d: "M208,34H48A14,14,0,0,0,34,48V208a14,14,0,0,0,14,14H208a14,14,0,0,0,14-14V48A14,14,0,0,0,208,34ZM78,46h28v92H78Zm34,104a6,6,0,0,0,6-6V46h20v98a6,6,0,0,0,6,6h10v60H102V150Zm38-12V46h28v92ZM46,208V48a2,2,0,0,1,2-2H66v98a6,6,0,0,0,6,6H90v60H48A2,2,0,0,1,46,208Zm164,0a2,2,0,0,1-2,2H166V150h18a6,6,0,0,0,6-6V46h18a2,2,0,0,1,2,2Z" }));
});
s.displayName = "Light";
export {
  s as Light
};
