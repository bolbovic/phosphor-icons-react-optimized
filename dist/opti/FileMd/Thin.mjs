var Z = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var h = (a, t, e) => t in a ? Z(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, l = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && h(a, e, t[e]);
  if (r)
    for (var e of r(t))
      i.call(t, e) && h(a, e, t[e]);
  return a;
};
var p = (a, t) => {
  var e = {};
  for (var m in a)
    o.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && i.call(a, m) && (e[m] = a[m]);
  return e;
};
import n, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const s = c((m, e) => {
  var V = m, { children: a } = V, t = p(V, ["children"]);
  return /* @__PURE__ */ n.createElement(f, l({ ref: e }, t), a, /* @__PURE__ */ n.createElement("path", { d: "M210.83,85.17l-56-56A4,4,0,0,0,152,28H56A12,12,0,0,0,44,40v72a4,4,0,0,0,8,0V40a4,4,0,0,1,4-4h92V88a4,4,0,0,0,4,4h52V224a4,4,0,0,0,8,0V88A4,4,0,0,0,210.83,85.17ZM156,41.65,198.34,84H156ZM144,148H128a4,4,0,0,0-4,4v56a4,4,0,0,0,4,4h16a32,32,0,0,0,0-64Zm0,56H132V156h12a24,24,0,0,1,0,48Zm-44-52v56a4,4,0,0,1-8,0V164.69l-20.72,29.6a4,4,0,0,1-6.56,0L44,164.69V208a4,4,0,0,1-8,0V152a4,4,0,0,1,7.28-2.29L68,185l24.72-35.31A4,4,0,0,1,100,152Z" }));
});
s.displayName = "Thin";
export {
  s as Thin
};
