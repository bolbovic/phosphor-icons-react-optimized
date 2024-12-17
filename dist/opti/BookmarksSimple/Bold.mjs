var i = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var l = (a, t, e) => t in a ? i(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, V = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && l(a, e, t[e]);
  if (r)
    for (var e of r(t))
      d.call(t, e) && l(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var o in a)
    p.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && r)
    for (var o of r(a))
      t.indexOf(o) < 0 && d.call(a, o) && (e[o] = a[o]);
  return e;
};
import f, { forwardRef as s } from "react";
import A from "../../lib/OptiBase.mjs";
const n = s((o, e) => {
  var m = o, { children: a } = m, t = c(m, ["children"]);
  return /* @__PURE__ */ f.createElement(A, V({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M156,56H60A20,20,0,0,0,40,76V228a12,12,0,0,0,19,9.76l49-35,49,35A12,12,0,0,0,176,228V76A20,20,0,0,0,156,56Zm-4,148.68-37-26.45a12,12,0,0,0-14,0L64,204.68V80h88ZM216,36V188a12,12,0,0,1-24,0V40H92a12,12,0,0,1,0-24H196A20,20,0,0,1,216,36Z" }));
});
n.displayName = "Bold";
export {
  n as Bold
};
