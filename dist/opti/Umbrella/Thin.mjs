var s = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var c = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, h = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && c(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && c(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var m in a)
    i.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && p.call(a, m) && (e[m] = a[m]);
  return e;
};
import f, { forwardRef as Z } from "react";
import d from "../../lib/OptiBase.mjs";
const l = Z((m, e) => {
  var o = m, { children: a } = o, t = n(o, ["children"]);
  return /* @__PURE__ */ f.createElement(d, h({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M236,127A108.44,108.44,0,0,0,54.46,56.69,107.53,107.53,0,0,0,20,127a12,12,0,0,0,12,13h92v60a28,28,0,0,0,56,0,4,4,0,0,0-8,0,20,20,0,0,1-40,0V140h92a12,12,0,0,0,12-13ZM32,132a4,4,0,0,1-4-4.38,100.2,100.2,0,0,1,89.73-91.09C106,49.76,85.08,80.45,84,132Zm60,0c1.21-56,27.6-86.37,35.94-94.57C136.35,45.64,162.73,76,163.94,132Zm134.87-1.3a4,4,0,0,1-3,1.3H172c-1-51.55-22-82.24-33.7-95.47A100.2,100.2,0,0,1,228,127.62,4,4,0,0,1,226.93,130.7Z" }));
});
l.displayName = "Thin";
export {
  l as Thin
};
