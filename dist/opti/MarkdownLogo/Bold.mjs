var i = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, V = Object.prototype.propertyIsEnumerable;
var r = (a, l, e) => l in a ? i(a, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[l] = e, d = (a, l) => {
  for (var e in l || (l = {}))
    p.call(l, e) && r(a, e, l[e]);
  if (m)
    for (var e of m(l))
      V.call(l, e) && r(a, e, l[e]);
  return a;
};
var c = (a, l) => {
  var e = {};
  for (var t in a)
    p.call(a, t) && l.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      l.indexOf(t) < 0 && V.call(a, t) && (e[t] = a[t]);
  return e;
};
import f, { forwardRef as s } from "react";
import A from "../../lib/OptiBase.mjs";
const H = s((t, e) => {
  var o = t, { children: a } = o, l = c(o, ["children"]);
  return /* @__PURE__ */ f.createElement(A, d({ ref: e }, l), a, /* @__PURE__ */ f.createElement("path", { d: "M232,44H24A20,20,0,0,0,4,64V192a20,20,0,0,0,20,20H232a20,20,0,0,0,20-20V64A20,20,0,0,0,232,44Zm-4,144H28V68H228ZM48,148V108a12,12,0,0,1,20.49-8.49L88,119l19.51-19.52A12,12,0,0,1,128,108v40a12,12,0,0,1-24,0V137l-7.51,7.52a12,12,0,0,1-17,0L72,137v11a12,12,0,0,1-24,0Zm98.63-23.5a12,12,0,0,1,16.87-1.87l.5.4V108a12,12,0,0,1,24,0v15l.5-.4a12,12,0,0,1,15,18.74l-20,16a12,12,0,0,1-15,0l-20-16A12,12,0,0,1,146.63,124.5Z" }));
});
H.displayName = "Bold";
export {
  H as Bold
};
