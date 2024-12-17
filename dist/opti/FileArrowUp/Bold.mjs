var i = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var V = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? i(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, d = (a, t) => {
  for (var e in t || (t = {}))
    V.call(t, e) && m(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && m(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var o in a)
    V.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && r)
    for (var o of r(a))
      t.indexOf(o) < 0 && p.call(a, o) && (e[o] = a[o]);
  return e;
};
import f, { forwardRef as s } from "react";
import Z from "../../lib/OptiBase.mjs";
const h = s((o, e) => {
  var l = o, { children: a } = l, t = c(l, ["children"]);
  return /* @__PURE__ */ f.createElement(Z, d({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M216.49,79.52l-56-56A12,12,0,0,0,152,20H56A20,20,0,0,0,36,40V216a20,20,0,0,0,20,20H200a20,20,0,0,0,20-20V88A12,12,0,0,0,216.49,79.52ZM183,80H160V57ZM60,212V44h76V92a12,12,0,0,0,12,12h48V212Zm100.49-72.49a12,12,0,0,1-17,17L140,153v31a12,12,0,0,1-24,0V153l-3.51,3.52a12,12,0,0,1-17-17l24-24a12,12,0,0,1,17,0Z" }));
});
h.displayName = "Bold";
export {
  h as Bold
};
