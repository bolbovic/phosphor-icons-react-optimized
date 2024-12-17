var s = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, l, e) => l in a ? s(a, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[l] = e, V = (a, l) => {
  for (var e in l || (l = {}))
    i.call(l, e) && o(a, e, l[e]);
  if (r)
    for (var e of r(l))
      p.call(l, e) && o(a, e, l[e]);
  return a;
};
var c = (a, l) => {
  var e = {};
  for (var t in a)
    i.call(a, t) && l.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && r)
    for (var t of r(a))
      l.indexOf(t) < 0 && p.call(a, t) && (e[t] = a[t]);
  return e;
};
import f, { forwardRef as A } from "react";
import d from "../../lib/OptiBase.mjs";
const n = A((t, e) => {
  var m = t, { children: a } = m, l = c(m, ["children"]);
  return /* @__PURE__ */ f.createElement(d, V({ ref: e }, l), a, /* @__PURE__ */ f.createElement("path", { d: "M248.91,77.72l-20,6.49,12.34,17a8,8,0,1,1-12.94,9.4L216,93.61l-12.34,17a8,8,0,0,1-12.94-9.4l12.34-17-20-6.49A8,8,0,0,1,188,62.5L208,69V48a8,8,0,0,1,16,0V69l20-6.49a8,8,0,0,1,4.95,15.22ZM176,192a56,56,0,1,1-88-46V40a32,32,0,0,1,64,0V146A56.23,56.23,0,0,1,176,192Zm-95.18-8h78.36A40.16,40.16,0,0,0,140,157.35a8,8,0,0,1-4-6.93V40a16,16,0,0,0-32,0V150.42a8,8,0,0,1-4,6.93A40.16,40.16,0,0,0,80.82,184Z" }));
});
n.displayName = "Fill";
export {
  n as Fill
};
