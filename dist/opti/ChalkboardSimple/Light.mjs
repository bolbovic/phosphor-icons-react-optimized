var s = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, c = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var f = (a, t) => {
  var e = {};
  for (var r in a)
    i.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import h, { forwardRef as V } from "react";
import d from "../../lib/OptiBase.mjs";
const l = V((r, e) => {
  var H = r, { children: a } = H, t = f(H, ["children"]);
  return /* @__PURE__ */ h.createElement(d, c({ ref: e }, t), a, /* @__PURE__ */ h.createElement("path", { d: "M240,194H230V168a6,6,0,0,0-6-6H160a6,6,0,0,0-6,6v26H38V56a2,2,0,0,1,2-2H216a2,2,0,0,1,2,2v80a6,6,0,0,0,12,0V56a14,14,0,0,0-14-14H40A14,14,0,0,0,26,56V194H16a6,6,0,0,0,0,12H240a6,6,0,0,0,0-12Zm-74-20h52v20H166Z" }));
});
l.displayName = "Light";
export {
  l as Light
};
