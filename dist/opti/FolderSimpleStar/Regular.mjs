var s = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, H = Object.prototype.propertyIsEnumerable;
var o = (a, l, e) => l in a ? s(a, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[l] = e, c = (a, l) => {
  for (var e in l || (l = {}))
    p.call(l, e) && o(a, e, l[e]);
  if (t)
    for (var e of t(l))
      H.call(l, e) && o(a, e, l[e]);
  return a;
};
var f = (a, l) => {
  var e = {};
  for (var r in a)
    p.call(a, r) && l.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && t)
    for (var r of t(a))
      l.indexOf(r) < 0 && H.call(a, r) && (e[r] = a[r]);
  return e;
};
import i, { forwardRef as R } from "react";
import d from "../../lib/OptiBase.mjs";
const n = R((r, e) => {
  var m = r, { children: a } = m, l = f(m, ["children"]);
  return /* @__PURE__ */ i.createElement(d, c({ ref: e }, l), a, /* @__PURE__ */ i.createElement("path", { d: "M128,208a8,8,0,0,1-8,8H40a16,16,0,0,1-16-16V64A16,16,0,0,1,40,48H93.33a16.12,16.12,0,0,1,9.6,3.2L130.67,72H216a16,16,0,0,1,16,16v32a8,8,0,0,1-16,0V88H128a8,8,0,0,1-4.8-1.6L93.33,64H40V200h80A8,8,0,0,1,128,208Zm109.09-40.22-22.51,18.59,6.85,27.71a8,8,0,0,1-11.82,8.81L184,207.82l-25.61,15.07a8,8,0,0,1-11.82-8.81l6.85-27.71-22.51-18.59a8,8,0,0,1,4.47-14.14l29.84-2.31,11.43-26.5a8,8,0,0,1,14.7,0l11.43,26.5,29.84,2.31a8,8,0,0,1,4.47,14.14Zm-25.47.28-14.89-1.15a8,8,0,0,1-6.73-4.8l-6-13.92-6,13.92a8,8,0,0,1-6.73,4.8l-14.89,1.15,11.11,9.18a8,8,0,0,1,2.68,8.09l-3.5,14.12,13.27-7.81a8,8,0,0,1,8.12,0l13.27,7.81-3.5-14.12a8,8,0,0,1,2.68-8.09Z" }));
});
n.displayName = "Regular";
export {
  n as Regular
};
