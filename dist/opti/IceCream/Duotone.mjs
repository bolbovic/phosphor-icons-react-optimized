var d = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var c = (a, t, e) => t in a ? d(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, Z = (a, t) => {
  for (var e in t || (t = {}))
    l.call(t, e) && c(a, e, t[e]);
  if (m)
    for (var e of m(t))
      n.call(t, e) && c(a, e, t[e]);
  return a;
};
var i = (a, t) => {
  var e = {};
  for (var o in a)
    l.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && m)
    for (var o of m(a))
      t.indexOf(o) < 0 && n.call(a, o) && (e[o] = a[o]);
  return e;
};
import r, { forwardRef as f } from "react";
import h from "../../lib/OptiBase.mjs";
const s = f((o, e) => {
  var p = o, { children: a } = p, t = i(p, ["children"]);
  return /* @__PURE__ */ r.createElement(h, Z({ ref: e }, t), a, /* @__PURE__ */ r.createElement(
    "path",
    {
      d: "M216,120a16,16,0,0,1-16,16H56a16,16,0,0,1,0-32V96a72,72,0,0,1,144,0v8A16,16,0,0,1,216,120Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ r.createElement("path", { d: "M208,97.37V96A80,80,0,0,0,48,96v1.37A24,24,0,0,0,56,144h3.29l54.82,95.94a16,16,0,0,0,27.78,0L196.71,144H200a24,24,0,0,0,8-46.63ZM77.71,144H97.07l40.61,71.06L128,232Zm57.08,0,21.75,38.06-9.65,16.88L115.5,144Zm31,21.94L153.21,144h25.08ZM200,128H56a8,8,0,0,1,0-16,8,8,0,0,0,8-8V96a64,64,0,0,1,128,0v8a8,8,0,0,0,8,8,8,8,0,0,1,0,16Z" }));
});
s.displayName = "Duotone";
export {
  s as Duotone
};
