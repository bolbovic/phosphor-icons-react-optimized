var Z = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var A = (a, t, e) => t in a ? Z(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, d = (a, t) => {
  for (var e in t || (t = {}))
    c.call(t, e) && A(a, e, t[e]);
  if (o)
    for (var e of o(t))
      p.call(t, e) && A(a, e, t[e]);
  return a;
};
var l = (a, t) => {
  var e = {};
  for (var m in a)
    c.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && o)
    for (var m of o(a))
      t.indexOf(m) < 0 && p.call(a, m) && (e[m] = a[m]);
  return e;
};
import s, { forwardRef as f } from "react";
import i from "../../lib/OptiBase.mjs";
const n = f((m, e) => {
  var r = m, { children: a } = r, t = l(r, ["children"]);
  return /* @__PURE__ */ s.createElement(i, d({ ref: e }, t), a, /* @__PURE__ */ s.createElement("path", { d: "M204,108a52.23,52.23,0,0,0-47.23,30.23H156c-19.85,0-36,16.55-36,36.89S136.15,212,156,212h48a52,52,0,0,0,0-104Zm0,80H156c-6.62,0-12-5.78-12-12.89s5.38-12.89,12-12.89a11,11,0,0,1,4.26.84,12,12,0,0,0,16.31-8.71A28,28,0,1,1,204,188Zm-94.78-51.16a12,12,0,0,1-2.12,16.83A8,8,0,0,0,104,160v16a12,12,0,0,1-24,0V160a31.8,31.8,0,0,1,12.38-25.28A12,12,0,0,1,109.22,136.84Zm27.44-18A48,48,0,0,0,64,160v16a12,12,0,0,1-24,0V160A72,72,0,0,1,149,98.23a12,12,0,0,1-12.35,20.58ZM24,160v16a12,12,0,0,1-24,0V160A112,112,0,0,1,185.47,75.46a12,12,0,0,1-15.75,18.11A88,88,0,0,0,24,160Z" }));
});
n.displayName = "Bold";
export {
  n as Bold
};
