var d = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var c = (a, t, e) => t in a ? d(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, i = (a, t) => {
  for (var e in t || (t = {}))
    n.call(t, e) && c(a, e, t[e]);
  if (r)
    for (var e of r(t))
      A.call(t, e) && c(a, e, t[e]);
  return a;
};
var Z = (a, t) => {
  var e = {};
  for (var o in a)
    n.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && r)
    for (var o of r(a))
      t.indexOf(o) < 0 && A.call(a, o) && (e[o] = a[o]);
  return e;
};
import m, { forwardRef as f } from "react";
import h from "../../lib/OptiBase.mjs";
const l = f((o, e) => {
  var p = o, { children: a } = p, t = Z(p, ["children"]);
  return /* @__PURE__ */ m.createElement(h, i({ ref: e }, t), a, /* @__PURE__ */ m.createElement("path", { d: "M208,152a80,80,0,1,1-80-80A80,80,0,0,1,208,152Z", opacity: "0.2" }), /* @__PURE__ */ m.createElement("path", { d: "M165.87,72.58A64.06,64.06,0,0,0,200,16a8,8,0,0,0-8-8h-8a64,64,0,0,0-56,33.06A64,64,0,0,0,72,8H64a8,8,0,0,0,0,16h8a48.08,48.08,0,0,1,47.4,40.42,88,88,0,1,0,46.47,8.16ZM183.33,24a48.09,48.09,0,0,1-46.66,40A48.09,48.09,0,0,1,183.33,24ZM128,224a72,72,0,1,1,72-72A72.08,72.08,0,0,1,128,224Zm55.89-62.68a57.5,57.5,0,0,1-46.57,46.57A8.52,8.52,0,0,1,136,208a8,8,0,0,1-1.31-15.89,41.29,41.29,0,0,0,33.43-33.43,8,8,0,0,1,15.78,2.64Z" }));
});
l.displayName = "Duotone";
export {
  l as Duotone
};