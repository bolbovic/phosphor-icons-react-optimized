var L = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var A = (a, t, e) => t in a ? L(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, n = (a, t) => {
  for (var e in t || (t = {}))
    l.call(t, e) && A(a, e, t[e]);
  if (r)
    for (var e of r(t))
      c.call(t, e) && A(a, e, t[e]);
  return a;
};
var i = (a, t) => {
  var e = {};
  for (var o in a)
    l.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && r)
    for (var o of r(a))
      t.indexOf(o) < 0 && c.call(a, o) && (e[o] = a[o]);
  return e;
};
import m, { forwardRef as d } from "react";
import f from "../../lib/OptiBase.mjs";
const h = d((o, e) => {
  var p = o, { children: a } = p, t = i(p, ["children"]);
  return /* @__PURE__ */ m.createElement(f, n({ ref: e }, t), a, /* @__PURE__ */ m.createElement(
    "path",
    {
      d: "M224,128A96,96,0,0,1,79.93,211.11h0L42.54,223.58a8,8,0,0,1-10.12-10.12l12.47-37.39h0A96,96,0,1,1,224,128Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ m.createElement("path", { d: "M53.92,34.62A8,8,0,1,0,42.08,45.38L52.33,56.66A104.06,104.06,0,0,0,36.18,176.88L24.83,210.93a16,16,0,0,0,20.24,20.24l34.05-11.35a104,104,0,0,0,112.7-9.73l10.26,11.29a8,8,0,1,0,11.84-10.76ZM128,216a87.87,87.87,0,0,1-44.06-11.81,8,8,0,0,0-6.54-.66L40,216,52.47,178.6a8,8,0,0,0-.66-6.54A88,88,0,0,1,63.14,68.54L181,198.23A87.77,87.77,0,0,1,128,216Zm104-88a104.15,104.15,0,0,1-12.38,49.25,8,8,0,0,1-14.09-7.58A88,88,0,0,0,93.88,46.86a8,8,0,0,1-6.21-14.75A104.06,104.06,0,0,1,232,128Z" }));
});
h.displayName = "Duotone";
export {
  h as Duotone
};
