var i = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var H = (a, t, e) => t in a ? i(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, l = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && H(a, e, t[e]);
  if (r)
    for (var e of r(t))
      d.call(t, e) && H(a, e, t[e]);
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
import h from "../../lib/OptiBase.mjs";
const n = s((o, e) => {
  var m = o, { children: a } = m, t = c(m, ["children"]);
  return /* @__PURE__ */ f.createElement(h, l({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M148,156a64,64,0,0,0,0-128H88A12,12,0,0,0,76,40v92H56a12,12,0,0,0,0,24H76v16H56a12,12,0,0,0,0,24H76v20a12,12,0,0,0,24,0V196h44a12,12,0,0,0,0-24H100V156ZM100,52h48a40,40,0,0,1,0,80H100Z" }));
});
n.displayName = "Bold";
export {
  n as Bold
};
