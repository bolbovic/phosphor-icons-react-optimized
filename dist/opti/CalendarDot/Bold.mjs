var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, H = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, d = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && m(a, e, t[e]);
  if (r)
    for (var e of r(t))
      H.call(t, e) && m(a, e, t[e]);
  return a;
};
var l = (a, t) => {
  var e = {};
  for (var o in a)
    p.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && r)
    for (var o of r(a))
      t.indexOf(o) < 0 && H.call(a, o) && (e[o] = a[o]);
  return e;
};
import c, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const M = i((o, e) => {
  var V = o, { children: a } = V, t = l(V, ["children"]);
  return /* @__PURE__ */ c.createElement(s, d({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M148,152a20,20,0,1,1-20-20A20,20,0,0,1,148,152ZM228,48V208a20,20,0,0,1-20,20H48a20,20,0,0,1-20-20V48A20,20,0,0,1,48,28H68V24a12,12,0,0,1,24,0v4h72V24a12,12,0,0,1,24,0v4h20A20,20,0,0,1,228,48ZM52,52V76H204V52H188a12,12,0,0,1-24,0H92a12,12,0,0,1-24,0ZM204,204V100H52V204Z" }));
});
M.displayName = "Bold";
export {
  M as Bold
};
