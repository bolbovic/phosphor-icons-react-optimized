var d = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? d(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, n = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var f = (a, t) => {
  var e = {};
  for (var c in a)
    i.call(a, c) && t.indexOf(c) < 0 && (e[c] = a[c]);
  if (a != null && m)
    for (var c of m(a))
      t.indexOf(c) < 0 && p.call(a, c) && (e[c] = a[c]);
  return e;
};
import s, { forwardRef as h } from "react";
import l from "../../lib/OptiBase.mjs";
const Z = h((c, e) => {
  var r = c, { children: a } = r, t = f(r, ["children"]);
  return /* @__PURE__ */ s.createElement(l, n({ ref: e }, t), a, /* @__PURE__ */ s.createElement("path", { d: "M152,84a28,28,0,1,0-28-28A28,28,0,0,0,152,84Zm0-48a20,20,0,1,1-20,20A20,20,0,0,1,152,36Zm65.66,101c-.57.26-6.84,3-18.08,3-13.86,0-35.25-4.15-62.81-22.16a162.59,162.59,0,0,1-19.49,40.78c9.47,2.56,23.08,7.5,35.14,16.67,18.3,13.92,27.58,33,27.58,56.68a4,4,0,0,1-8,0c0-15.89-5.88-53.77-59.7-66.37q-1.56,2.06-3.22,4.08c-18.85,22.83-42.42,34.72-68.6,34.72q-4.4,0-8.89-.45a4,4,0,1,1,.8-8c27.33,2.73,51.06-7.83,70.52-31.41,13.82-16.74,22.89-37.44,26.9-51.32-42.84-26.69-71-4.8-71.32-4.57a4,4,0,1,1-5-6.24c.36-.29,9-7.1,23.84-9.58,13.5-2.27,35-1.26,60.91,16.34,25,17,44.41,21.64,56.29,22.56,12.75,1,19.77-2,19.84-2.05a4,4,0,0,1,3.29,7.29Z" }));
});
Z.displayName = "Thin";
export {
  Z as Thin
};
