var i = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var V = Object.prototype.hasOwnProperty, H = Object.prototype.propertyIsEnumerable;
var p = (a, t, e) => t in a ? i(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, n = (a, t) => {
  for (var e in t || (t = {}))
    V.call(t, e) && p(a, e, t[e]);
  if (r)
    for (var e of r(t))
      H.call(t, e) && p(a, e, t[e]);
  return a;
};
var A = (a, t) => {
  var e = {};
  for (var o in a)
    V.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && r)
    for (var o of r(a))
      t.indexOf(o) < 0 && H.call(a, o) && (e[o] = a[o]);
  return e;
};
import m, { forwardRef as d } from "react";
import f from "../../lib/OptiBase.mjs";
const l = d((o, e) => {
  var c = o, { children: a } = c, t = A(c, ["children"]);
  return /* @__PURE__ */ m.createElement(f, n({ ref: e }, t), a, /* @__PURE__ */ m.createElement(
    "path",
    {
      d: "M128,128a48,48,0,0,0,48,48c10.27.41,17.9-2.25,25.88-7.37A4,4,0,0,1,208,172v36a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H200a8,8,0,0,1,8,8V84a4,4,0,0,1-6.15,3.36A48.24,48.24,0,0,0,128,128Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ m.createElement("path", { d: "M176,88a39.79,39.79,0,0,1,21.53,6.1A12,12,0,0,0,216,84V48a16,16,0,0,0-16-16H56A16,16,0,0,0,40,48V208a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V172a12,12,0,0,0-18.44-10.11c-7.25,4.65-13.41,6.41-21.24,6.11H176a40,40,0,0,1,0-80Zm-56,40a56.07,56.07,0,0,0,55.84,56A48.4,48.4,0,0,0,200,178.89V208H56V48H200V77.23A56.3,56.3,0,0,0,120,128Z" }));
});
l.displayName = "Duotone";
export {
  l as Duotone
};
