var l = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var H = (a, t, e) => t in a ? l(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && H(a, e, t[e]);
  if (r)
    for (var e of r(t))
      i.call(t, e) && H(a, e, t[e]);
  return a;
};
var V = (a, t) => {
  var e = {};
  for (var m in a)
    o.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && i.call(a, m) && (e[m] = a[m]);
  return e;
};
import Z, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const s = c((m, e) => {
  var h = m, { children: a } = h, t = V(h, ["children"]);
  return /* @__PURE__ */ Z.createElement(f, p({ ref: e }, t), a, /* @__PURE__ */ Z.createElement("path", { d: "M232,58H24A14,14,0,0,0,10,72V184a14,14,0,0,0,14,14H232a14,14,0,0,0,14-14V72A14,14,0,0,0,232,58Zm2,126a2,2,0,0,1-2,2H24a2,2,0,0,1-2-2V72a2,2,0,0,1,2-2H232a2,2,0,0,1,2,2ZM126,102v20h10a6,6,0,0,1,0,12H126v20h18a6,6,0,0,1,0,12H120a6,6,0,0,1-6-6V96a6,6,0,0,1,6-6h24a6,6,0,0,1,0,12Zm87.78-4.38-18,64a6,6,0,0,1-11.56,0l-18-64a6,6,0,0,1,11.56-3.24L190,137.84l12.22-43.46a6,6,0,1,1,11.56,3.24ZM64,90H56a6,6,0,0,0-6,6v64a6,6,0,0,0,6,6h8a30,30,0,0,0,30-30V120A30,30,0,0,0,64,90Zm18,46a18,18,0,0,1-18,18H62V102h2a18,18,0,0,1,18,18Z" }));
});
s.displayName = "Light";
export {
  s as Light
};
