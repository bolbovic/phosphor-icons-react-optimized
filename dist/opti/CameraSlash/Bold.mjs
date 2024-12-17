var i = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, H = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? i(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, d = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && m(a, e, t[e]);
  if (r)
    for (var e of r(t))
      H.call(t, e) && m(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var o in a)
    p.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && r)
    for (var o of r(a))
      t.indexOf(o) < 0 && H.call(a, o) && (e[o] = a[o]);
  return e;
};
import f, { forwardRef as s } from "react";
import L from "../../lib/OptiBase.mjs";
const Z = s((o, e) => {
  var l = o, { children: a } = l, t = c(l, ["children"]);
  return /* @__PURE__ */ f.createElement(L, d({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M56.88,31.93A12,12,0,1,0,39.12,48.07l4,4.37A28,28,0,0,0,20,80V192a28,28,0,0,0,28,28H195.42l3.7,4.07a12,12,0,0,0,17.76-16.14Zm49.35,90L136,154.64a24,24,0,0,1-29.77-32.75ZM48,196a4,4,0,0,1-4-4V80a4,4,0,0,1,4-4H64.51l24.92,27.41a48,48,0,0,0,63.34,69.67L173.6,196ZM236,80v94.14a12,12,0,0,1-24,0V80a4,4,0,0,0-4-4H176a12,12,0,0,1-10-5.34L153.57,52H102.06a12,12,0,0,1,0-24H160a12,12,0,0,1,10,5.34L182.42,52H208A28,28,0,0,1,236,80Z" }));
});
Z.displayName = "Bold";
export {
  Z as Bold
};
