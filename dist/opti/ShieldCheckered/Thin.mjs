var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var h = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var c = (e, t, a) => t in e ? f(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, p = (e, t) => {
  for (var a in t || (t = {}))
    h.call(t, a) && c(e, a, t[a]);
  if (r)
    for (var a of r(t))
      i.call(t, a) && c(e, a, t[a]);
  return e;
};
var n = (e, t) => {
  var a = {};
  for (var m in e)
    h.call(e, m) && t.indexOf(m) < 0 && (a[m] = e[m]);
  if (e != null && r)
    for (var m of r(e))
      t.indexOf(m) < 0 && i.call(e, m) && (a[m] = e[m]);
  return a;
};
import Z, { forwardRef as s } from "react";
import v from "../../lib/OptiBase.mjs";
const A = s((m, a) => {
  var o = m, { children: e } = o, t = n(o, ["children"]);
  return /* @__PURE__ */ Z.createElement(v, p({ ref: a }, t), e, /* @__PURE__ */ Z.createElement("path", { d: "M208,44H48A12,12,0,0,0,36,56v56c0,51.16,24.73,82.12,45.47,99.1,22.4,18.32,44.55,24.5,45.48,24.76a4,4,0,0,0,2.1,0c.93-.26,23.08-6.44,45.48-24.76,20.74-17,45.47-47.94,45.47-99.1V56A12,12,0,0,0,208,44Zm4,12v56q0,6.12-.49,12H132V52h76A4,4,0,0,1,212,56ZM44,56a4,4,0,0,1,4-4h76v72H44.49Q44,118.12,44,112Zm1.38,76H124v94.44a135.16,135.16,0,0,1-37.71-21.73C63.27,185.78,49.56,161.38,45.38,132Zm124.33,72.71A134.9,134.9,0,0,1,132,226.44V132h78.62C206.44,161.38,192.73,185.78,169.71,204.71Z" }));
});
A.displayName = "Thin";
export {
  A as Thin
};
