var s = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var h = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var c = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    h.call(t, e) && c(a, e, t[e]);
  if (m)
    for (var e of m(t))
      i.call(t, e) && c(a, e, t[e]);
  return a;
};
var V = (a, t) => {
  var e = {};
  for (var r in a)
    h.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && i.call(a, r) && (e[r] = a[r]);
  return e;
};
import f, { forwardRef as A } from "react";
import H from "../../lib/OptiBase.mjs";
const d = A((r, e) => {
  var o = r, { children: a } = o, t = V(o, ["children"]);
  return /* @__PURE__ */ f.createElement(H, p({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M218,160a10,10,0,1,1-10-10A10,10,0,0,1,218,160Zm-4.35,37.58A46.05,46.05,0,0,1,168,238H144a46.06,46.06,0,0,1-46-46V149.71A62,62,0,0,1,42,88V40a6,6,0,0,1,6-6H72a6,6,0,0,1,0,12H54V88a50,50,0,0,0,50,50h.67c27.2-.36,49.33-23.16,49.33-50.83V46H136a6,6,0,0,1,0-12h24a6,6,0,0,1,6,6V87.17c0,32.43-24.68,59.44-56,62.52V192a34,34,0,0,0,34,34h24a34.05,34.05,0,0,0,33.56-28.56,38,38,0,1,1,12.09.14ZM234,160a26,26,0,1,0-26,26A26,26,0,0,0,234,160Z" }));
});
d.displayName = "Light";
export {
  d as Light
};
