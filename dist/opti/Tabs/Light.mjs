var c = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, H = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, i = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && m(a, e, t[e]);
  if (r)
    for (var e of r(t))
      H.call(t, e) && m(a, e, t[e]);
  return a;
};
var p = (a, t) => {
  var e = {};
  for (var l in a)
    o.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && r)
    for (var l of r(a))
      t.indexOf(l) < 0 && H.call(a, l) && (e[l] = a[l]);
  return e;
};
import A, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const L = f((l, e) => {
  var h = l, { children: a } = h, t = p(h, ["children"]);
  return /* @__PURE__ */ A.createElement(s, i({ ref: e }, t), a, /* @__PURE__ */ A.createElement("path", { d: "M253.75,166.28h0v0l0,0L231.46,92a13.91,13.91,0,0,0-13.41-10H208a6,6,0,0,0,0,12h10.05A2,2,0,0,1,220,95.42l20,66.58H204.46l-21-70a13.91,13.91,0,0,0-13.41-10H160a6,6,0,0,0,0,12h10.05A2,2,0,0,1,172,95.42l20,66.58H156.46l-21-70a13.91,13.91,0,0,0-13.41-10H38A13.91,13.91,0,0,0,24.54,92L2.28,166.2l0,.05v0l0,.15a2.79,2.79,0,0,0-.1.39.11.11,0,0,0,0,.05A6,6,0,0,0,8,174H248a6,6,0,0,0,5.75-7.72ZM36,95.42A2,2,0,0,1,38,94h84.1A2,2,0,0,1,124,95.43l20,66.57H16.06Z" }));
});
L.displayName = "Light";
export {
  L as Light
};
