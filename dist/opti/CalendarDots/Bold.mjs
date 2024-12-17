var l = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var Z = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var V = (a, m, e) => m in a ? l(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, p = (a, m) => {
  for (var e in m || (m = {}))
    Z.call(m, e) && V(a, e, m[e]);
  if (o)
    for (var e of o(m))
      A.call(m, e) && V(a, e, m[e]);
  return a;
};
var H = (a, m) => {
  var e = {};
  for (var t in a)
    Z.call(a, t) && m.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && o)
    for (var t of o(a))
      m.indexOf(t) < 0 && A.call(a, t) && (e[t] = a[t]);
  return e;
};
import d, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const i = c((t, e) => {
  var r = t, { children: a } = r, m = H(r, ["children"]);
  return /* @__PURE__ */ d.createElement(f, p({ ref: e }, m), a, /* @__PURE__ */ d.createElement("path", { d: "M208,28H188V24a12,12,0,0,0-24,0v4H92V24a12,12,0,0,0-24,0v4H48A20,20,0,0,0,28,48V208a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V48A20,20,0,0,0,208,28ZM68,52a12,12,0,0,0,24,0h72a12,12,0,0,0,24,0h16V76H52V52ZM52,204V100H204V204Zm92-76a16,16,0,1,1-16-16A16,16,0,0,1,144,128Zm48,0a16,16,0,1,1-16-16A16,16,0,0,1,192,128ZM96,176a16,16,0,1,1-16-16A16,16,0,0,1,96,176Zm48,0a16,16,0,1,1-16-16A16,16,0,0,1,144,176Zm48,0a16,16,0,1,1-16-16A16,16,0,0,1,192,176Z" }));
});
i.displayName = "Bold";
export {
  i as Bold
};
