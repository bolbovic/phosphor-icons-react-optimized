var v = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, m, e) => m in a ? v(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, s = (a, m) => {
  for (var e in m || (m = {}))
    i.call(m, e) && o(a, e, m[e]);
  if (r)
    for (var e of r(m))
      p.call(m, e) && o(a, e, m[e]);
  return a;
};
var V = (a, m) => {
  var e = {};
  for (var t in a)
    i.call(a, t) && m.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && r)
    for (var t of r(a))
      m.indexOf(t) < 0 && p.call(a, t) && (e[t] = a[t]);
  return e;
};
import n, { forwardRef as Z } from "react";
import f from "../../lib/OptiBase.mjs";
const A = Z((t, e) => {
  var c = t, { children: a } = c, m = V(c, ["children"]);
  return /* @__PURE__ */ n.createElement(f, s({ ref: e }, m), a, /* @__PURE__ */ n.createElement("path", { d: "M136,168a8,8,0,1,1-8-8A8,8,0,0,1,136,168Zm76-52v36a84,84,0,0,1-168,0V76A24,24,0,0,1,84,58.13V44a24,24,0,0,1,47.93-1.8A24,24,0,0,1,172,60V98.13A24,24,0,0,1,212,116Zm-8,0a16,16,0,0,0-32,0v4a4,4,0,0,1-8,0V60a16,16,0,0,0-32,0v44a4,4,0,0,1-8,0V44a16,16,0,0,0-32,0v68a4,4,0,0,1-8,0V76a16,16,0,0,0-32,0v76a76,76,0,0,0,152,0Zm-24.42,50.21a4,4,0,0,1,0,3.58c-.7,1.4-17.5,34.21-51.58,34.21s-50.88-32.81-51.58-34.21a4,4,0,0,1,0-3.58c.7-1.4,17.5-34.21,51.58-34.21S178.88,164.81,179.58,166.21Zm-8.16,1.8c-3.83-6.43-18.55-28-43.42-28s-39.6,21.55-43.42,28c3.84,6.44,18.55,28,43.42,28S167.6,174.45,171.42,168Z" }));
});
A.displayName = "Thin";
export {
  A as Thin
};
