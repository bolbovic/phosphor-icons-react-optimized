var l = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var h = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var V = (a, m, e) => m in a ? l(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, H = (a, m) => {
  for (var e in m || (m = {}))
    h.call(m, e) && V(a, e, m[e]);
  if (o)
    for (var e of o(m))
      p.call(m, e) && V(a, e, m[e]);
  return a;
};
var Z = (a, m) => {
  var e = {};
  for (var t in a)
    h.call(a, t) && m.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && o)
    for (var t of o(a))
      m.indexOf(t) < 0 && p.call(a, t) && (e[t] = a[t]);
  return e;
};
import d, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const i = c((t, e) => {
  var r = t, { children: a } = r, m = Z(r, ["children"]);
  return /* @__PURE__ */ d.createElement(f, H({ ref: e }, m), a, /* @__PURE__ */ d.createElement("path", { d: "M216,44H40A12,12,0,0,0,28,56V208a20,20,0,0,0,20,20H88a20,20,0,0,0,20-20V164h40v12a20,20,0,0,0,20,20h40a20,20,0,0,0,20-20V56A12,12,0,0,0,216,44Zm-12,64H172V68h32ZM84,68v40H52V68Zm0,136H52V132H84Zm24-64V68h40v72Zm64,32V132h32v40Z" }));
});
i.displayName = "Bold";
export {
  i as Bold
};
