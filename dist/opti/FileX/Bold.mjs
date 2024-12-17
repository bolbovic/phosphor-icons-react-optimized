var i = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, V = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? i(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, d = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && m(a, e, t[e]);
  if (o)
    for (var e of o(t))
      V.call(t, e) && m(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var l in a)
    p.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && o)
    for (var l of o(a))
      t.indexOf(l) < 0 && V.call(a, l) && (e[l] = a[l]);
  return e;
};
import f, { forwardRef as s } from "react";
import L from "../../lib/OptiBase.mjs";
const Z = s((l, e) => {
  var r = l, { children: a } = r, t = c(r, ["children"]);
  return /* @__PURE__ */ f.createElement(L, d({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M216.49,79.52l-56-56A12,12,0,0,0,152,20H56A20,20,0,0,0,36,40V216a20,20,0,0,0,20,20H200a20,20,0,0,0,20-20V88A12,12,0,0,0,216.49,79.52ZM183,80H160V57ZM60,212V44h76V92a12,12,0,0,0,12,12h48V212Zm100.49-75.51L145,152l15.52,15.51a12,12,0,0,1-17,17L128,169l-15.51,15.52a12,12,0,0,1-17-17L111,152,95.51,136.49a12,12,0,1,1,17-17L128,135l15.51-15.52a12,12,0,1,1,17,17Z" }));
});
Z.displayName = "Bold";
export {
  Z as Bold
};
