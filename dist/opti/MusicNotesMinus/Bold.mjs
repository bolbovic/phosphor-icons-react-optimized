var i = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var l = (a, t, e) => t in a ? i(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, Z = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && l(a, e, t[e]);
  if (r)
    for (var e of r(t))
      d.call(t, e) && l(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var o in a)
    p.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && r)
    for (var o of r(a))
      t.indexOf(o) < 0 && d.call(a, o) && (e[o] = a[o]);
  return e;
};
import f, { forwardRef as s } from "react";
import M from "../../lib/OptiBase.mjs";
const V = s((o, e) => {
  var m = o, { children: a } = m, t = c(m, ["children"]);
  return /* @__PURE__ */ f.createElement(M, Z({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M236,48a12,12,0,0,1-12,12H176a12,12,0,0,1,0-24h48A12,12,0,0,1,236,48ZM220,88v76a40,40,0,1,1-24-36.65V88a12,12,0,0,1,24,0Zm-24,76a16,16,0,1,0-16,16A16,16,0,0,0,196,164ZM92,113.37V196a40,40,0,1,1-24-36.65V56a12,12,0,0,1,9.09-11.64l56-14a12,12,0,0,1,5.82,23.28L92,65.37V88.63l65.09-16.27a12,12,0,0,1,5.82,23.28ZM68,196a16,16,0,1,0-16,16A16,16,0,0,0,68,196Z" }));
});
V.displayName = "Bold";
export {
  V as Bold
};
