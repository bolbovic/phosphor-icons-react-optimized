var i = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? i(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, Z = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && m(a, e, t[e]);
  if (o)
    for (var e of o(t))
      d.call(t, e) && m(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var l in a)
    p.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && o)
    for (var l of o(a))
      t.indexOf(l) < 0 && d.call(a, l) && (e[l] = a[l]);
  return e;
};
import f, { forwardRef as s } from "react";
import M from "../../lib/OptiBase.mjs";
const n = s((l, e) => {
  var r = l, { children: a } = r, t = c(r, ["children"]);
  return /* @__PURE__ */ f.createElement(M, Z({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M138.67,86.51a12,12,0,0,0-21.34,0l-72,140a12,12,0,1,0,21.34,11l11-21.49H178.28l11.05,21.49a12,12,0,1,0,21.34-11ZM128,118.24,145.36,152H110.64ZM90.07,192l8.22-16h59.42l8.22,16ZM174.51,68.73a12,12,0,1,1-21.45,10.75,28,28,0,0,0-50.37.52A12,12,0,1,1,81,69.7,52.28,52.28,0,0,1,128,40,51.74,51.74,0,0,1,174.51,68.73Zm-124.58,76a92,92,0,1,1,156.14,0A12,12,0,0,1,185.71,132a68,68,0,1,0-115.42,0A12,12,0,0,1,49.93,144.7Z" }));
});
n.displayName = "Bold";
export {
  n as Bold
};
