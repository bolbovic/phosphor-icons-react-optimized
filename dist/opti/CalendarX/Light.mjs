var h = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var H = (a, e, V) => e in a ? h(a, e, { enumerable: !0, configurable: !0, writable: !0, value: V }) : a[e] = V, l = (a, e) => {
  for (var V in e || (e = {}))
    o.call(e, V) && H(a, V, e[V]);
  if (r)
    for (var V of r(e))
      i.call(e, V) && H(a, V, e[V]);
  return a;
};
var p = (a, e) => {
  var V = {};
  for (var t in a)
    o.call(a, t) && e.indexOf(t) < 0 && (V[t] = a[t]);
  if (a != null && r)
    for (var t of r(a))
      e.indexOf(t) < 0 && i.call(a, t) && (V[t] = a[t]);
  return V;
};
import L, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const s = c((t, V) => {
  var m = t, { children: a } = m, e = p(m, ["children"]);
  return /* @__PURE__ */ L.createElement(f, l({ ref: V }, e), a, /* @__PURE__ */ L.createElement("path", { d: "M208,34H182V24a6,6,0,0,0-12,0V34H86V24a6,6,0,0,0-12,0V34H48A14,14,0,0,0,34,48V208a14,14,0,0,0,14,14H208a14,14,0,0,0,14-14V48A14,14,0,0,0,208,34ZM48,46H74V56a6,6,0,0,0,12,0V46h84V56a6,6,0,0,0,12,0V46h26a2,2,0,0,1,2,2V82H46V48A2,2,0,0,1,48,46ZM208,210H48a2,2,0,0,1-2-2V94H210V208A2,2,0,0,1,208,210Zm-51.76-77.76L136.48,152l19.76,19.76a6,6,0,1,1-8.48,8.48L128,160.48l-19.76,19.76a6,6,0,0,1-8.48-8.48L119.52,152,99.76,132.24a6,6,0,1,1,8.48-8.48L128,143.52l19.76-19.76a6,6,0,1,1,8.48,8.48Z" }));
});
s.displayName = "Light";
export {
  s as Light
};
