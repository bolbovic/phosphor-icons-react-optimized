var A = Object.defineProperty;
var h = Object.getOwnPropertySymbols;
var V = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var H = (a, e, m) => e in a ? A(a, e, { enumerable: !0, configurable: !0, writable: !0, value: m }) : a[e] = m, o = (a, e) => {
  for (var m in e || (e = {}))
    V.call(e, m) && H(a, m, e[m]);
  if (h)
    for (var m of h(e))
      Z.call(e, m) && H(a, m, e[m]);
  return a;
};
var i = (a, e) => {
  var m = {};
  for (var t in a)
    V.call(a, t) && e.indexOf(t) < 0 && (m[t] = a[t]);
  if (a != null && h)
    for (var t of h(a))
      e.indexOf(t) < 0 && Z.call(a, t) && (m[t] = a[t]);
  return m;
};
import p, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const s = c((t, m) => {
  var r = t, { children: a } = r, e = i(r, ["children"]);
  return /* @__PURE__ */ p.createElement(f, o({ ref: m }, e), a, /* @__PURE__ */ p.createElement("path", { d: "M104,42H56A14,14,0,0,0,42,56v48a14,14,0,0,0,14,14h48a14,14,0,0,0,14-14V56A14,14,0,0,0,104,42Zm2,62a2,2,0,0,1-2,2H56a2,2,0,0,1-2-2V56a2,2,0,0,1,2-2h48a2,2,0,0,1,2,2Zm94-62H152a14,14,0,0,0-14,14v48a14,14,0,0,0,14,14h48a14,14,0,0,0,14-14V56A14,14,0,0,0,200,42Zm2,62a2,2,0,0,1-2,2H152a2,2,0,0,1-2-2V56a2,2,0,0,1,2-2h48a2,2,0,0,1,2,2Zm-98,34H56a14,14,0,0,0-14,14v48a14,14,0,0,0,14,14h48a14,14,0,0,0,14-14V152A14,14,0,0,0,104,138Zm2,62a2,2,0,0,1-2,2H56a2,2,0,0,1-2-2V152a2,2,0,0,1,2-2h48a2,2,0,0,1,2,2Zm94-62H152a14,14,0,0,0-14,14v48a14,14,0,0,0,14,14h48a14,14,0,0,0,14-14V152A14,14,0,0,0,200,138Zm2,62a2,2,0,0,1-2,2H152a2,2,0,0,1-2-2V152a2,2,0,0,1,2-2h48a2,2,0,0,1,2,2Z" }));
});
s.displayName = "Light";
export {
  s as Light
};
