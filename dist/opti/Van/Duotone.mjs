var n = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var Z = Object.prototype.hasOwnProperty, V = Object.prototype.propertyIsEnumerable;
var p = (a, t, e) => t in a ? n(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, c = (a, t) => {
  for (var e in t || (t = {}))
    Z.call(t, e) && p(a, e, t[e]);
  if (m)
    for (var e of m(t))
      V.call(t, e) && p(a, e, t[e]);
  return a;
};
var h = (a, t) => {
  var e = {};
  for (var o in a)
    Z.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && m)
    for (var o of m(a))
      t.indexOf(o) < 0 && V.call(a, o) && (e[o] = a[o]);
  return e;
};
import r, { forwardRef as M } from "react";
import i from "../../lib/OptiBase.mjs";
const A = M((o, e) => {
  var H = o, { children: a } = H, t = h(H, ["children"]);
  return /* @__PURE__ */ r.createElement(i, c({ ref: e }, t), a, /* @__PURE__ */ r.createElement(
    "path",
    {
      d: "M248,112v64a8,8,0,0,1-8,8H216a24,24,0,0,0-48,0H104a24,24,0,0,0-48,0H32a8,8,0,0,1-8-8V112Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ r.createElement("path", { d: "M254.07,106.79,208.53,53.73A16,16,0,0,0,196.26,48H32A16,16,0,0,0,16,64V176a16,16,0,0,0,16,16H49a32,32,0,0,0,62,0h50a32,32,0,0,0,62,0h17a16,16,0,0,0,16-16V112A8,8,0,0,0,254.07,106.79ZM230.59,104H176V64h20.26ZM104,104V64h56v40ZM88,64v40H32V64ZM80,200a16,16,0,1,1,16-16A16,16,0,0,1,80,200Zm112,0a16,16,0,1,1,16-16A16,16,0,0,1,192,200Zm31-24a32,32,0,0,0-62,0H111a32,32,0,0,0-62,0H32V120H240v56Z" }));
});
A.displayName = "Duotone";
export {
  A as Duotone
};
