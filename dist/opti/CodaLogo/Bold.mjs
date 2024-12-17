var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var p = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, l = (a, t) => {
  for (var e in t || (t = {}))
    c.call(t, e) && p(a, e, t[e]);
  if (r)
    for (var e of r(t))
      d.call(t, e) && p(a, e, t[e]);
  return a;
};
var H = (a, t) => {
  var e = {};
  for (var o in a)
    c.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && r)
    for (var o of r(a))
      t.indexOf(o) < 0 && d.call(a, o) && (e[o] = a[o]);
  return e;
};
import V, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const A = i((o, e) => {
  var m = o, { children: a } = m, t = H(m, ["children"]);
  return /* @__PURE__ */ V.createElement(s, l({ ref: e }, t), a, /* @__PURE__ */ V.createElement("path", { d: "M176,92a35.79,35.79,0,0,1,19.38,5.47A16,16,0,0,0,220,84V48a20,20,0,0,0-20-20H56A20,20,0,0,0,36,48V208a20,20,0,0,0,20,20H200a20,20,0,0,0,20-20V172a16,16,0,0,0-24.6-13.48c-6.58,4.22-11.89,5.76-18.92,5.48H176a36,36,0,0,1,0-72Zm-.24,96A52.4,52.4,0,0,0,196,185v19H60V52H196V71.3A61.55,61.55,0,0,0,176,68a60,60,0,0,0-.24,120Z" }));
});
A.displayName = "Bold";
export {
  A as Bold
};
