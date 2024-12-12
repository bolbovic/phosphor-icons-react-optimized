var c = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, Z = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      A.call(t, e) && o(a, e, t[e]);
  return a;
};
var f = (a, t) => {
  var e = {};
  for (var l in a)
    p.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && r)
    for (var l of r(a))
      t.indexOf(l) < 0 && A.call(a, l) && (e[l] = a[l]);
  return e;
};
import s, { forwardRef as d } from "react";
import i from "../../lib/OptiBase.mjs";
const M = d((l, e) => {
  var m = l, { children: a } = m, t = f(m, ["children"]);
  return /* @__PURE__ */ s.createElement(i, Z({ ref: e }, t), a, /* @__PURE__ */ s.createElement("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216ZM115.58,84.84a8,8,0,0,0-8.38.76l-48,36a8,8,0,0,0,0,12.8l48,36A8,8,0,0,0,112,172a8,8,0,0,0,8-8V92A8,8,0,0,0,115.58,84.84ZM104,148,77.33,128,104,108Zm75.58-63.16a8,8,0,0,0-8.38.76l-48,36a8,8,0,0,0,0,12.8l48,36A8,8,0,0,0,176,172a8,8,0,0,0,8-8V92A8,8,0,0,0,179.58,84.84ZM168,148l-26.67-20L168,108Z" }));
});
M.displayName = "Regular";
export {
  M as Regular,
  M as default
};
