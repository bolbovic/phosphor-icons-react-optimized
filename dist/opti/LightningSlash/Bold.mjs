var i = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var m = (a, l, e) => l in a ? i(a, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[l] = e, L = (a, l) => {
  for (var e in l || (l = {}))
    p.call(l, e) && m(a, e, l[e]);
  if (o)
    for (var e of o(l))
      d.call(l, e) && m(a, e, l[e]);
  return a;
};
var c = (a, l) => {
  var e = {};
  for (var t in a)
    p.call(a, t) && l.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && o)
    for (var t of o(a))
      l.indexOf(t) < 0 && d.call(a, t) && (e[t] = a[t]);
  return e;
};
import f, { forwardRef as s } from "react";
import n from "../../lib/OptiBase.mjs";
const B = s((t, e) => {
  var r = t, { children: a } = r, l = c(r, ["children"]);
  return /* @__PURE__ */ f.createElement(n, L({ ref: e }, l), a, /* @__PURE__ */ f.createElement("path", { d: "M56.88,31.93A12,12,0,1,0,39.12,48.07L75.9,88.52,39.23,127.81a12,12,0,0,0,4.31,19.33l51.18,20.47L84.13,238.22a12,12,0,0,0,20.64,10l58.9-63.11,35.45,39a12,12,0,0,0,17.76-16.14ZM113.6,203.55l6.27-41.77a12,12,0,0,0-7.41-12.92L68.74,131.37l23.35-25,55.38,60.92ZM111.41,68.06a12,12,0,0,1-.59-17L151.23,7.81a12,12,0,0,1,20.64,10L161.28,88.39l51.18,20.47a12,12,0,0,1,4.31,19.33l-16.82,18a12,12,0,0,1-17.55-16.38l4.86-5.21-43.72-17.49a12,12,0,0,1-7.41-12.92l6.27-41.77-14,15A12,12,0,0,1,111.41,68.06Z" }));
});
B.displayName = "Bold";
export {
  B as Bold
};
