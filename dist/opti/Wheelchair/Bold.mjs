var s = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, c = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && m(a, e, t[e]);
  if (r)
    for (var e of r(t))
      d.call(t, e) && m(a, e, t[e]);
  return a;
};
var f = (a, t) => {
  var e = {};
  for (var o in a)
    p.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && r)
    for (var o of r(a))
      t.indexOf(o) < 0 && d.call(a, o) && (e[o] = a[o]);
  return e;
};
import i, { forwardRef as A } from "react";
import h from "../../lib/OptiBase.mjs";
const n = A((o, e) => {
  var l = o, { children: a } = l, t = f(l, ["children"]);
  return /* @__PURE__ */ i.createElement(h, c({ ref: e }, t), a, /* @__PURE__ */ i.createElement("path", { d: "M255.14,187.54a12,12,0,0,0-15.6-6.68l-9.75,3.9-27.06-54.13A12,12,0,0,0,192,124H116V108h52a12,12,0,0,0,0-24H116V77.81a34,34,0,1,0-24,0v8.88a76,76,0,1,0,88.35,106.57,12,12,0,1,0-21.57-10.52A52,52,0,1,1,92,112v24a12,12,0,0,0,12,12h80.58l28.68,57.37a12,12,0,0,0,15.19,5.77l20-8A12,12,0,0,0,255.14,187.54ZM104,36A10,10,0,1,1,94,46,10,10,0,0,1,104,36Z" }));
});
n.displayName = "Bold";
export {
  n as Bold
};
