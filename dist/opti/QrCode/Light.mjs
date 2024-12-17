var p = Object.defineProperty;
var h = Object.getOwnPropertySymbols;
var Z = Object.prototype.hasOwnProperty, H = Object.prototype.propertyIsEnumerable;
var V = (a, e, m) => e in a ? p(a, e, { enumerable: !0, configurable: !0, writable: !0, value: m }) : a[e] = m, o = (a, e) => {
  for (var m in e || (e = {}))
    Z.call(e, m) && V(a, m, e[m]);
  if (h)
    for (var m of h(e))
      H.call(e, m) && V(a, m, e[m]);
  return a;
};
var v = (a, e) => {
  var m = {};
  for (var t in a)
    Z.call(a, t) && e.indexOf(t) < 0 && (m[t] = a[t]);
  if (a != null && h)
    for (var t of h(a))
      e.indexOf(t) < 0 && H.call(a, t) && (m[t] = a[t]);
  return m;
};
import i, { forwardRef as A } from "react";
import c from "../../lib/OptiBase.mjs";
const f = A((t, m) => {
  var r = t, { children: a } = r, e = v(r, ["children"]);
  return /* @__PURE__ */ i.createElement(c, o({ ref: m }, e), a, /* @__PURE__ */ i.createElement("path", { d: "M104,42H56A14,14,0,0,0,42,56v48a14,14,0,0,0,14,14h48a14,14,0,0,0,14-14V56A14,14,0,0,0,104,42Zm2,62a2,2,0,0,1-2,2H56a2,2,0,0,1-2-2V56a2,2,0,0,1,2-2h48a2,2,0,0,1,2,2Zm-2,34H56a14,14,0,0,0-14,14v48a14,14,0,0,0,14,14h48a14,14,0,0,0,14-14V152A14,14,0,0,0,104,138Zm2,62a2,2,0,0,1-2,2H56a2,2,0,0,1-2-2V152a2,2,0,0,1,2-2h48a2,2,0,0,1,2,2ZM200,42H152a14,14,0,0,0-14,14v48a14,14,0,0,0,14,14h48a14,14,0,0,0,14-14V56A14,14,0,0,0,200,42Zm2,62a2,2,0,0,1-2,2H152a2,2,0,0,1-2-2V56a2,2,0,0,1,2-2h48a2,2,0,0,1,2,2Zm-64,72V144a6,6,0,0,1,12,0v32a6,6,0,0,1-12,0Zm76-16a6,6,0,0,1-6,6H182v42a6,6,0,0,1-6,6H144a6,6,0,0,1,0-12h26V144a6,6,0,0,1,12,0v10h26A6,6,0,0,1,214,160Zm0,32v16a6,6,0,0,1-12,0V192a6,6,0,0,1,12,0Z" }));
});
f.displayName = "Light";
export {
  f as Light
};
