var i = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var A = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var p = (a, t, e) => t in a ? i(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, l = (a, t) => {
  for (var e in t || (t = {}))
    A.call(t, e) && p(a, e, t[e]);
  if (o)
    for (var e of o(t))
      d.call(t, e) && p(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var m in a)
    A.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && o)
    for (var m of o(a))
      t.indexOf(m) < 0 && d.call(a, m) && (e[m] = a[m]);
  return e;
};
import f, { forwardRef as s } from "react";
import V from "../../lib/OptiBase.mjs";
const Z = s((m, e) => {
  var r = m, { children: a } = r, t = c(r, ["children"]);
  return /* @__PURE__ */ f.createElement(V, l({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M32,120v48a12,12,0,0,1-24,0V120a12,12,0,0,1,24,0ZM60,84A12,12,0,0,0,48,96v96a12,12,0,0,0,24,0V96A12,12,0,0,0,60,84Zm40-40A12,12,0,0,0,88,56V192a12,12,0,0,0,24,0V56A12,12,0,0,0,100,44Zm122.34,59.33A84,84,0,0,0,140,36a12,12,0,0,0,0,24,59.78,59.78,0,0,1,59.7,53.93,12,12,0,0,0,9.66,10.58A28,28,0,0,1,204,180H140a12,12,0,0,0,0,24h64a52,52,0,0,0,18.34-100.67Z" }));
});
Z.displayName = "Bold";
export {
  Z as Bold
};
