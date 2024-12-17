var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var A = (a, l, e) => l in a ? f(a, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[l] = e, i = (a, l) => {
  for (var e in l || (l = {}))
    o.call(l, e) && A(a, e, l[e]);
  if (m)
    for (var e of m(l))
      c.call(l, e) && A(a, e, l[e]);
  return a;
};
var p = (a, l) => {
  var e = {};
  for (var t in a)
    o.call(a, t) && l.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      l.indexOf(t) < 0 && c.call(a, t) && (e[t] = a[t]);
  return e;
};
import Z, { forwardRef as s } from "react";
import d from "../../lib/OptiBase.mjs";
const n = s((t, e) => {
  var r = t, { children: a } = r, l = p(r, ["children"]);
  return /* @__PURE__ */ Z.createElement(d, i({ ref: e }, l), a, /* @__PURE__ */ Z.createElement("path", { d: "M200,152a31.84,31.84,0,0,0-19.53,6.68l-23.11-18A31.65,31.65,0,0,0,160,128c0-.74,0-1.48-.08-2.21l13.23-4.41A32,32,0,1,0,168,104c0,.74,0,1.48.08,2.21l-13.23,4.41A32,32,0,0,0,128,96a32.59,32.59,0,0,0-5.27.44L115.89,81A32,32,0,1,0,96,88a32.59,32.59,0,0,0,5.27-.44l6.84,15.4a31.92,31.92,0,0,0-8.57,39.64L73.83,165.44a32.06,32.06,0,1,0,10.63,12l25.71-22.84a31.91,31.91,0,0,0,37.36-1.24l23.11,18A31.65,31.65,0,0,0,168,184a32,32,0,1,0,32-32Zm0-64a16,16,0,1,1-16,16A16,16,0,0,1,200,88ZM80,56A16,16,0,1,1,96,72,16,16,0,0,1,80,56ZM56,208a16,16,0,1,1,16-16A16,16,0,0,1,56,208Zm144-8a16,16,0,1,1,16-16A16,16,0,0,1,200,200Z" }));
});
n.displayName = "Fill";
export {
  n as Fill
};
