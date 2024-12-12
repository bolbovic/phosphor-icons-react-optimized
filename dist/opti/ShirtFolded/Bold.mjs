var M = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var H = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? M(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, V = (a, t) => {
  for (var e in t || (t = {}))
    H.call(t, e) && m(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && m(a, e, t[e]);
  return a;
};
var d = (a, t) => {
  var e = {};
  for (var o in a)
    H.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && r)
    for (var o of r(a))
      t.indexOf(o) < 0 && p.call(a, o) && (e[o] = a[o]);
  return e;
};
import L, { forwardRef as Z } from "react";
import c from "../../lib/OptiBase.mjs";
const f = Z((o, e) => {
  var l = o, { children: a } = l, t = d(l, ["children"]);
  return /* @__PURE__ */ L.createElement(c, V({ ref: e }, t), a, /* @__PURE__ */ L.createElement("path", { d: "M200,36H177L164.49,23.51h0A12,12,0,0,0,156,20H100a12,12,0,0,0-8.49,3.51h0L79,36H56A20,20,0,0,0,36,56V208a20,20,0,0,0,20,20H200a20,20,0,0,0,20-20V56A20,20,0,0,0,200,36ZM96,53l7.33-7.33L118.82,72.2,96,94.48ZM137.18,72.2l15.49-26.56L160,53V94.48ZM60,60H72v44a20,20,0,0,0,34.08,14.21L116,108.5V204H60ZM196,204H140V108.5l9.92,9.69A20,20,0,0,0,184,104V60h12Z" }));
});
f.displayName = "Bold";
export {
  f as Bold
};
