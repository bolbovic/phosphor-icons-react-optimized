var s = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var m = (a, l, e) => l in a ? s(a, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[l] = e, c = (a, l) => {
  for (var e in l || (l = {}))
    p.call(l, e) && m(a, e, l[e]);
  if (o)
    for (var e of o(l))
      d.call(l, e) && m(a, e, l[e]);
  return a;
};
var f = (a, l) => {
  var e = {};
  for (var t in a)
    p.call(a, t) && l.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && o)
    for (var t of o(a))
      l.indexOf(t) < 0 && d.call(a, t) && (e[t] = a[t]);
  return e;
};
import i, { forwardRef as M } from "react";
import Z from "../../lib/OptiBase.mjs";
const n = M((t, e) => {
  var r = t, { children: a } = r, l = f(r, ["children"]);
  return /* @__PURE__ */ i.createElement(Z, c({ ref: e }, l), a, /* @__PURE__ */ i.createElement("path", { d: "M56.88,31.93A12,12,0,1,0,39.12,48.07l45.64,50.2-50.9,50.9A19.86,19.86,0,0,0,28,163.31V208a20,20,0,0,0,20,20H92.69a19.85,19.85,0,0,0,14.14-5.86l47.43-47.42,44.87,49.35a12,12,0,1,0,17.76-16.14ZM91,204H52V165l48.92-48.92,37.18,40.89ZM230.15,70.54,185.46,25.86a20,20,0,0,0-28.28,0l-36,36a12,12,0,0,0,14.55,18.82L175,120l-.54.53a12,12,0,1,0,17,17l38.67-38.67A20,20,0,0,0,230.15,70.54ZM192,103,153,64l18.34-18.34,39,39Z" }));
});
n.displayName = "Bold";
export {
  n as Bold
};
