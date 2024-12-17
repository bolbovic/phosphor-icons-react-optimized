var l = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var V = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var H = (a, t, e) => t in a ? l(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, Z = (a, t) => {
  for (var e in t || (t = {}))
    V.call(t, e) && H(a, e, t[e]);
  if (o)
    for (var e of o(t))
      p.call(t, e) && H(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var m in a)
    V.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && o)
    for (var m of o(a))
      t.indexOf(m) < 0 && p.call(a, m) && (e[m] = a[m]);
  return e;
};
import d, { forwardRef as f } from "react";
import h from "../../lib/OptiBase.mjs";
const i = f((m, e) => {
  var r = m, { children: a } = r, t = c(r, ["children"]);
  return /* @__PURE__ */ d.createElement(h, Z({ ref: e }, t), a, /* @__PURE__ */ d.createElement("path", { d: "M216,84H204V72a44.05,44.05,0,0,0-44-44h-9.73C137.77,17.78,121.18,12,104,12,66.5,12,36,38.92,36,72V208a20,20,0,0,0,20,20H184a20,20,0,0,0,20-20v-4h12a28,28,0,0,0,28-28V112A28,28,0,0,0,216,84ZM104,36c12.85,0,25,4.62,33.44,12.67a12,12,0,0,0,8.3,3.33H160a20,20,0,0,1,19.6,16H60.28C62.72,50,81.39,36,104,36Zm76,168H60V92H180Zm40-28a4,4,0,0,1-4,4H204V108h12a4,4,0,0,1,4,4ZM108,120v56a12,12,0,0,1-24,0V120a12,12,0,0,1,24,0Zm48,0v56a12,12,0,0,1-24,0V120a12,12,0,0,1,24,0Z" }));
});
i.displayName = "Bold";
export {
  i as Bold
};
