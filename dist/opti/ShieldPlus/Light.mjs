var v = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? v(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, h = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var f = (a, t) => {
  var e = {};
  for (var m in a)
    i.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && p.call(a, m) && (e[m] = a[m]);
  return e;
};
import s, { forwardRef as A } from "react";
import H from "../../lib/OptiBase.mjs";
const d = A((m, e) => {
  var c = m, { children: a } = c, t = f(c, ["children"]);
  return /* @__PURE__ */ s.createElement(H, h({ ref: e }, t), a, /* @__PURE__ */ s.createElement("path", { d: "M166,128a6,6,0,0,1-6,6H134v26a6,6,0,0,1-12,0V134H96a6,6,0,0,1,0-12h26V96a6,6,0,0,1,12,0v26h26A6,6,0,0,1,166,128Zm56-72v56c0,51.94-25.12,83.4-46.2,100.64-22.73,18.6-45.27,24.89-46.22,25.15a6,6,0,0,1-3.16,0c-1-.26-23.49-6.55-46.22-25.15C59.12,195.4,34,163.94,34,112V56A14,14,0,0,1,48,42H208A14,14,0,0,1,222,56Zm-12,0a2,2,0,0,0-2-2H48a2,2,0,0,0-2,2v56c0,37.75,13.94,68.39,41.44,91.06A130.83,130.83,0,0,0,128,225.72a131.06,131.06,0,0,0,40.56-22.66C196.06,180.39,210,149.75,210,112Z" }));
});
d.displayName = "Light";
export {
  d as Light
};
