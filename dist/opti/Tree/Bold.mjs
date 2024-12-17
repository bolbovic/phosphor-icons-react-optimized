var i = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? i(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, d = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && m(a, e, t[e]);
  if (r)
    for (var e of r(t))
      c.call(t, e) && m(a, e, t[e]);
  return a;
};
var A = (a, t) => {
  var e = {};
  for (var o in a)
    p.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && r)
    for (var o of r(a))
      t.indexOf(o) < 0 && c.call(a, o) && (e[o] = a[o]);
  return e;
};
import f, { forwardRef as s } from "react";
import V from "../../lib/OptiBase.mjs";
const n = s((o, e) => {
  var l = o, { children: a } = l, t = A(l, ["children"]);
  return /* @__PURE__ */ f.createElement(V, d({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M201.17,59.62a80,80,0,0,0-146.34,0,76,76,0,0,0,61.17,139V232a12,12,0,0,0,24,0V198.64A76.26,76.26,0,0,0,168,204l1.92,0A76,76,0,0,0,201.17,59.62ZM169.35,180A52,52,0,0,1,140,171.79V135.42l41.37-20.69a12,12,0,1,0-10.74-21.46L140,108.58V88a12,12,0,0,0-24,0v44.58L85.37,117.27a12,12,0,0,0-10.74,21.46L116,159.42v12.37A52.24,52.24,0,0,1,86.65,180c-27.53-.69-50.72-24.56-50.65-52.13a51.81,51.81,0,0,1,32.61-48.1,12,12,0,0,0,6.78-7,56,56,0,0,1,105.22,0,12,12,0,0,0,6.78,7A51.81,51.81,0,0,1,220,127.85C220.08,155.41,196.88,179.29,169.35,180Z" }));
});
n.displayName = "Bold";
export {
  n as Bold
};
