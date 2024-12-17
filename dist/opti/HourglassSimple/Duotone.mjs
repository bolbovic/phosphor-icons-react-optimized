var i = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var A = (e, t, a) => t in e ? i(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, n = (e, t) => {
  for (var a in t || (t = {}))
    c.call(t, a) && A(e, a, t[a]);
  if (r)
    for (var a of r(t))
      l.call(t, a) && A(e, a, t[a]);
  return e;
};
var Z = (e, t) => {
  var a = {};
  for (var o in e)
    c.call(e, o) && t.indexOf(o) < 0 && (a[o] = e[o]);
  if (e != null && r)
    for (var o of r(e))
      t.indexOf(o) < 0 && l.call(e, o) && (a[o] = e[o]);
  return a;
};
import m, { forwardRef as M } from "react";
import d from "../../lib/OptiBase.mjs";
const f = M((o, a) => {
  var p = o, { children: e } = p, t = Z(p, ["children"]);
  return /* @__PURE__ */ m.createElement(d, n({ ref: a }, t), e, /* @__PURE__ */ m.createElement(
    "path",
    {
      d: "M205.64,53.66,128,128,50.36,53.66A8,8,0,0,1,56,40H200A8,8,0,0,1,205.64,53.66ZM128,128,50.36,202.34A8,8,0,0,0,56,216H200a8,8,0,0,0,5.66-13.66Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ m.createElement("path", { d: "M211.18,196.56,139.57,128l71.61-68.56a1.59,1.59,0,0,1,.13-.13A16,16,0,0,0,200,32H56A16,16,0,0,0,44.69,59.31a1.59,1.59,0,0,1,.13.13L116.43,128,44.82,196.56a1.59,1.59,0,0,1-.13.13A16,16,0,0,0,56,224H200a16,16,0,0,0,11.32-27.31A1.59,1.59,0,0,1,211.18,196.56ZM56,48h0v0Zm144,0-72,68.92L56,48ZM56,208l72-68.92L200,208Z" }));
});
f.displayName = "Duotone";
export {
  f as Duotone
};
