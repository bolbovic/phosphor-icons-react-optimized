var i = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var l = (a, t, e) => t in a ? i(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, A = (a, t) => {
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
import n from "../../lib/OptiBase.mjs";
const B = s((o, e) => {
  var m = o, { children: a } = m, t = c(m, ["children"]);
  return /* @__PURE__ */ f.createElement(n, A({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M192,180H118.71a56,56,0,1,1-104.6-37.46,12,12,0,1,1,21.37,10.92A31.64,31.64,0,0,0,32,168a32,32,0,0,0,64,0,12,12,0,0,1,12-12h84a12,12,0,0,1,0,24Zm0-68a55.9,55.9,0,0,0-18.45,3.12L138.22,57.71a12,12,0,0,0-20.44,12.58l40.94,66.52a12,12,0,0,0,16.52,3.93,32,32,0,1,1,19.68,59.13A12,12,0,0,0,196,223.82a10.05,10.05,0,0,0,1.09,0A56,56,0,0,0,192,112ZM57.71,178.22a12,12,0,0,0,16.51-3.93l40.94-66.52a12,12,0,0,0-3.92-16.51,32,32,0,1,1,45.28-41.8,12,12,0,1,0,21.37-10.92A56,56,0,1,0,89.1,104.32L53.78,161.71A12,12,0,0,0,57.71,178.22Z" }));
});
B.displayName = "Bold";
export {
  B as Bold
};
