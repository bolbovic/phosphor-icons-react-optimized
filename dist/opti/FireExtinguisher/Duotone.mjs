var H = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var p = (a, t, e) => t in a ? H(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, n = (a, t) => {
  for (var e in t || (t = {}))
    c.call(t, e) && p(a, e, t[e]);
  if (m)
    for (var e of m(t))
      l.call(t, e) && p(a, e, t[e]);
  return a;
};
var i = (a, t) => {
  var e = {};
  for (var o in a)
    c.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && m)
    for (var o of m(a))
      t.indexOf(o) < 0 && l.call(a, o) && (e[o] = a[o]);
  return e;
};
import r, { forwardRef as Z } from "react";
import d from "../../lib/OptiBase.mjs";
const f = Z((o, e) => {
  var V = o, { children: a } = V, t = i(V, ["children"]);
  return /* @__PURE__ */ r.createElement(d, n({ ref: e }, t), a, /* @__PURE__ */ r.createElement("path", { d: "M176,168v64a8,8,0,0,1-8,8H104a8,8,0,0,1-8-8V168Z", opacity: "0.2" }), /* @__PURE__ */ r.createElement("path", { d: "M218.3,48.34l-60.68-18.2,30-15A8,8,0,0,0,180.42.85L134,24.05a80.08,80.08,0,0,0-78,80V208a8,8,0,0,0,16,0V176H88v56a16,16,0,0,0,16,16h64a16,16,0,0,0,16-16V104a48.07,48.07,0,0,0-40-47.32V42.75l69.7,20.91a8,8,0,1,0,4.6-15.32ZM88,104v56H72V104a64.07,64.07,0,0,1,56-63.48V56.68A48.07,48.07,0,0,0,88,104Zm80,128H104V176h64Zm0-128v56H104V104a32,32,0,0,1,64,0Z" }));
});
f.displayName = "Duotone";
export {
  f as Duotone
};
