var Z = Object.defineProperty;
var A = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var H = (a, t, e) => t in a ? Z(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    l.call(t, e) && H(a, e, t[e]);
  if (A)
    for (var e of A(t))
      c.call(t, e) && H(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var o in a)
    l.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && A)
    for (var o of A(a))
      t.indexOf(o) < 0 && c.call(a, o) && (e[o] = a[o]);
  return e;
};
import m, { forwardRef as i } from "react";
import d from "../../lib/OptiBase.mjs";
const f = i((o, e) => {
  var r = o, { children: a } = r, t = n(r, ["children"]);
  return /* @__PURE__ */ m.createElement(d, p({ ref: e }, t), a, /* @__PURE__ */ m.createElement(
    "path",
    {
      d: "M112.19,137.74l15.62,52.52A8,8,0,0,1,120,200H72.14A91.91,91.91,0,0,1,32,124c0-50,40.65-91.26,90.69-92A92,92,0,0,1,216,124v4H120A8,8,0,0,0,112.19,137.74Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ m.createElement("path", { d: "M96,164a12,12,0,1,1-12-12A12,12,0,0,1,96,164Zm136,12v32a16,16,0,0,1-16,16H180a16.1,16.1,0,0,1-15.35-11.47L153.84,176H131.91l3.56,12a5.44,5.44,0,0,1,.15.54A16,16,0,0,1,120,208H72.14a8,8,0,0,1-4.52-1.4A100,100,0,0,1,24,124c0-54.36,44.24-99.2,98.58-100A100,100,0,0,1,224,124v4a8,8,0,0,1-8,8H158.71l7.09,24H216A16,16,0,0,1,232,176ZM120,120h87.91A84,84,0,0,0,122.8,40C77.16,40.64,40,78.31,40,124a84,84,0,0,0,34.67,68H120l-15.45-52a4.77,4.77,0,0,1-.15-.54A16,16,0,0,1,120,120Zm29.11,40L142,136H120l7.14,24ZM216,176H170.52L180,208h36Z" }));
});
f.displayName = "Duotone";
export {
  f as Duotone
};
