var A = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var l = (a, t, e) => t in a ? A(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, Z = (a, t) => {
  for (var e in t || (t = {}))
    c.call(t, e) && l(a, e, t[e]);
  if (o)
    for (var e of o(t))
      p.call(t, e) && l(a, e, t[e]);
  return a;
};
var d = (a, t) => {
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
  var r = m, { children: a } = r, t = d(r, ["children"]);
  return /* @__PURE__ */ s.createElement(i, Z({ ref: e }, t), a, /* @__PURE__ */ s.createElement("path", { d: "M144,144a16,16,0,1,1-16-16A16,16,0,0,1,144,144Zm92-16A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-70.45,28h41.63c.79-2.21,1.49-4.47,2.09-6.76a116,116,0,0,0-162.54,0q.9,3.44,2.09,6.76H90.45a20.07,20.07,0,0,1,18.73,13l16.06,42.93c.92,0,1.83.07,2.76.07s1.82,0,2.72-.07l16.1-43A20.09,20.09,0,0,1,165.55,156ZM44.41,119.73a139.85,139.85,0,0,1,167.18,0,84,84,0,0,0-167.18,0Zm53.08,86.51L87.68,180H62.1A84.46,84.46,0,0,0,97.49,206.24ZM193.9,180H168.32l-9.84,26.25A84.35,84.35,0,0,0,193.9,180Z" }));
});
n.displayName = "Bold";
export {
  n as Bold
};
