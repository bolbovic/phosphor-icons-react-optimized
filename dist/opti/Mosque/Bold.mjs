var Z = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var H = (a, t, e) => t in a ? Z(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, V = (a, t) => {
  for (var e in t || (t = {}))
    c.call(t, e) && H(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && H(a, e, t[e]);
  return a;
};
var d = (a, t) => {
  var e = {};
  for (var o in a)
    c.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && r)
    for (var o of r(a))
      t.indexOf(o) < 0 && p.call(a, o) && (e[o] = a[o]);
  return e;
};
import l, { forwardRef as f } from "react";
import i from "../../lib/OptiBase.mjs";
const s = f((o, e) => {
  var m = o, { children: a } = m, t = d(m, ["children"]);
  return /* @__PURE__ */ l.createElement(i, V({ ref: e }, t), a, /* @__PURE__ */ l.createElement("path", { d: "M220,124a32,32,0,0,0-8.06,1c-1.29-41.54-29.35-62.32-50-77.58C150.18,38.73,140,31.21,140,24a12,12,0,0,0-24,0c0,7.21-10.18,14.73-22,23.45-20.63,15.26-48.69,36-50,77.58A32,32,0,0,0,4,156v52a12,12,0,0,0,12,12H240a12,12,0,0,0,12-12V156A32,32,0,0,0,220,124ZM44,196H28V156a8,8,0,0,1,16,0ZM108.31,66.74c7-5.14,14-10.36,19.69-16.27,5.68,5.91,12.74,11.13,19.69,16.27C164.8,79.4,182.4,92.44,186.9,116H69.1C73.6,92.44,91.2,79.4,108.31,66.74ZM188,196H164V168a12,12,0,0,0-24,0v28H116V168a12,12,0,0,0-24,0v28H68V140H188Zm40,0H212V156a8,8,0,0,1,16,0Z" }));
});
s.displayName = "Bold";
export {
  s as Bold
};
