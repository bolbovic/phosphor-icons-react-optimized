var h = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var H = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var A = (a, e, V) => e in a ? h(a, e, { enumerable: !0, configurable: !0, writable: !0, value: V }) : a[e] = V, o = (a, e) => {
  for (var V in e || (e = {}))
    H.call(e, V) && A(a, V, e[V]);
  if (m)
    for (var V of m(e))
      Z.call(e, V) && A(a, V, e[V]);
  return a;
};
var i = (a, e) => {
  var V = {};
  for (var t in a)
    H.call(a, t) && e.indexOf(t) < 0 && (V[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      e.indexOf(t) < 0 && Z.call(a, t) && (V[t] = a[t]);
  return V;
};
import p, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const s = c((t, V) => {
  var r = t, { children: a } = r, e = i(r, ["children"]);
  return /* @__PURE__ */ p.createElement(f, o({ ref: V }, e), a, /* @__PURE__ */ p.createElement("path", { d: "M208,34H182V24a6,6,0,0,0-12,0V34H86V24a6,6,0,0,0-12,0V34H48A14,14,0,0,0,34,48V208a14,14,0,0,0,14,14H208a14,14,0,0,0,14-14V48A14,14,0,0,0,208,34ZM48,46H74V56a6,6,0,0,0,12,0V46h84V56a6,6,0,0,0,12,0V46h26a2,2,0,0,1,2,2V82H46V48A2,2,0,0,1,48,46ZM208,210H48a2,2,0,0,1-2-2V94H210V208A2,2,0,0,1,208,210Zm-70-78a10,10,0,1,1-10-10A10,10,0,0,1,138,132Zm44,0a10,10,0,1,1-10-10A10,10,0,0,1,182,132ZM94,172a10,10,0,1,1-10-10A10,10,0,0,1,94,172Zm44,0a10,10,0,1,1-10-10A10,10,0,0,1,138,172Zm44,0a10,10,0,1,1-10-10A10,10,0,0,1,182,172Z" }));
});
s.displayName = "Light";
export {
  s as Light
};
