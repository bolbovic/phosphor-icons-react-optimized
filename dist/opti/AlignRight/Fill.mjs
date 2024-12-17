var V = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? V(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, c = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var f = (a, t) => {
  var e = {};
  for (var m in a)
    i.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && p.call(a, m) && (e[m] = a[m]);
  return e;
};
import s, { forwardRef as d } from "react";
import n from "../../lib/OptiBase.mjs";
const A = d((m, e) => {
  var l = m, { children: a } = l, t = f(l, ["children"]);
  return /* @__PURE__ */ s.createElement(n, c({ ref: e }, t), a, /* @__PURE__ */ s.createElement("path", { d: "M224,40V216a8,8,0,0,1-16,0V40a8,8,0,0,1,16,0Zm-48,8H80A16,16,0,0,0,64,64v40a16,16,0,0,0,16,16h96a16,16,0,0,0,16-16V64A16,16,0,0,0,176,48Zm0,88H40a16,16,0,0,0-16,16v40a16,16,0,0,0,16,16H176a16,16,0,0,0,16-16V152A16,16,0,0,0,176,136Z" }));
});
A.displayName = "Fill";
export {
  A as Fill
};
