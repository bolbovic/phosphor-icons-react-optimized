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
import f, { forwardRef as d } from "react";
import l from "../../lib/OptiBase.mjs";
const A = d((m, e) => {
  var o = m, { children: a } = o, t = n(o, ["children"]);
  return /* @__PURE__ */ f.createElement(l, h({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M164,104a4,4,0,0,1-4,4H132v28a4,4,0,0,1-8,0V108H96a4,4,0,0,1,0-8h28V72a4,4,0,0,1,8,0v28h28A4,4,0,0,1,164,104Zm48,0c0,30.42-14.17,62.79-41,93.62a250,250,0,0,1-40.73,37.66,4,4,0,0,1-4.58,0A250,250,0,0,1,85,197.62C58.17,166.79,44,134.42,44,104a84,84,0,0,1,168,0Zm-8,0a76,76,0,0,0-152,0c0,35.9,21.15,67.8,38.9,88.23A254.62,254.62,0,0,0,128,227a254.62,254.62,0,0,0,37.1-34.81C182.85,171.8,204,139.9,204,104Z" }));
});
A.displayName = "Thin";
export {
  A as Thin
};
