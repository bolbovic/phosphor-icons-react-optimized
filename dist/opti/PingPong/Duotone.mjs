var d = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? d(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, n = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && m(a, e, t[e]);
  if (l)
    for (var e of l(t))
      A.call(t, e) && m(a, e, t[e]);
  return a;
};
var i = (a, t) => {
  var e = {};
  for (var o in a)
    p.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && l)
    for (var o of l(a))
      t.indexOf(o) < 0 && A.call(a, o) && (e[o] = a[o]);
  return e;
};
import r, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const M = f((o, e) => {
  var c = o, { children: a } = c, t = i(c, ["children"]);
  return /* @__PURE__ */ r.createElement(s, n({ ref: e }, t), a, /* @__PURE__ */ r.createElement(
    "path",
    {
      d: "M206.6,81.4,81.4,206.6A93.92,93.92,0,0,1,32,122.69c.69-49.55,41.13-90,90.68-90.68A93.92,93.92,0,0,1,206.6,81.4Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ r.createElement("path", { d: "M240,196a16,16,0,0,0-6.65-11.7l-38-27.15,17-16.95a39.67,39.67,0,0,0,11-35.79,99.52,99.52,0,0,0-35.4-57.89A101.93,101.93,0,0,0,122.58,24,100.29,100.29,0,0,0,24,122.58a102.12,102.12,0,0,0,22.55,65.28,99.52,99.52,0,0,0,57.89,35.4,39.68,39.68,0,0,0,35.79-11l16.95-17,27.15,38A16,16,0,0,0,196,240c.44,0,.88.05,1.32.05a16,16,0,0,0,11.31-4.69l26.64-26.64A16,16,0,0,0,240,196ZM59,177.83a86.09,86.09,0,0,1-19-55A84.27,84.27,0,0,1,122.8,40a86.28,86.28,0,0,1,55,19A85.08,85.08,0,0,1,196.58,80.1L80.1,196.58A85.08,85.08,0,0,1,59,177.83ZM197.35,224l-32.63-45.69a8,8,0,0,0-5.85-3.32q-.33,0-.66,0a8,8,0,0,0-5.66,2.34l-23.63,23.63a23.68,23.68,0,0,1-21.36,6.63,80.3,80.3,0,0,1-12.3-3.5l108.8-108.8a80.63,80.63,0,0,1,3.5,12.3,23.67,23.67,0,0,1-6.63,21.36L177.3,152.55a8,8,0,0,0,1,12.17L224,197.35Z" }));
});
M.displayName = "Duotone";
export {
  M as Duotone
};
