var s = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var l = (a, m, e) => m in a ? s(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, c = (a, m) => {
  for (var e in m || (m = {}))
    p.call(m, e) && l(a, e, m[e]);
  if (t)
    for (var e of t(m))
      Z.call(m, e) && l(a, e, m[e]);
  return a;
};
var f = (a, m) => {
  var e = {};
  for (var r in a)
    p.call(a, r) && m.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && t)
    for (var r of t(a))
      m.indexOf(r) < 0 && Z.call(a, r) && (e[r] = a[r]);
  return e;
};
import i, { forwardRef as R } from "react";
import V from "../../lib/OptiBase.mjs";
const d = R((r, e) => {
  var o = r, { children: a } = o, m = f(o, ["children"]);
  return /* @__PURE__ */ i.createElement(V, c({ ref: e }, m), a, /* @__PURE__ */ i.createElement("path", { d: "M216,152.09V216a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V152.09a8,8,0,0,1,16,0V208H200V152.09a8,8,0,0,1,16,0Zm-128,32h80a8,8,0,1,0,0-16H88a8,8,0,1,0,0,16Zm4.88-53,77.27,20.68a7.89,7.89,0,0,0,2.08.28,8,8,0,0,0,2.07-15.71L97,115.61A8,8,0,1,0,92.88,131Zm18.45-49.93,69.28,40a8,8,0,0,0,10.93-2.93,8,8,0,0,0-2.93-10.91L119.33,67.27a8,8,0,1,0-8,13.84Zm87.33,13A8,8,0,1,0,210,82.84l-56.57-56.5a8,8,0,0,0-11.32,11.3Z" }));
});
d.displayName = "Regular";
export {
  d as Regular
};
