var h = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var i = (a, m, e) => m in a ? h(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, Z = (a, m) => {
  for (var e in m || (m = {}))
    p.call(m, e) && i(a, e, m[e]);
  if (r)
    for (var e of r(m))
      n.call(m, e) && i(a, e, m[e]);
  return a;
};
var c = (a, m) => {
  var e = {};
  for (var t in a)
    p.call(a, t) && m.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && r)
    for (var t of r(a))
      m.indexOf(t) < 0 && n.call(a, t) && (e[t] = a[t]);
  return e;
};
import f, { forwardRef as l } from "react";
import s from "../../lib/OptiBase.mjs";
const V = l((t, e) => {
  var o = t, { children: a } = o, m = c(o, ["children"]);
  return /* @__PURE__ */ f.createElement(s, Z({ ref: e }, m), a, /* @__PURE__ */ f.createElement("path", { d: "M212,152.09V216a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V152.09a4,4,0,0,1,8,0V212H204V152.09a4,4,0,0,1,8,0Zm-124,28h80a4,4,0,1,0,0-8H88a4,4,0,1,0,0,8Zm5.92-52.86,77.27,20.67a3.72,3.72,0,0,0,1,.14,4,4,0,0,0,1-7.85L96,119.47a4,4,0,1,0-2.07,7.72Zm19.41-49.54,69.28,39.95a4,4,0,1,0,4-6.92L117.33,70.73a4,4,0,1,0-4,6.92Zm88.16,13.66a4,4,0,0,0,5.66-5.64l-56.57-56.5a4,4,0,1,0-5.66,5.65Z" }));
});
V.displayName = "Thin";
export {
  V as Thin
};
