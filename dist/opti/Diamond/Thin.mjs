var s = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, n = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var l in a)
    i.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && r)
    for (var l of r(a))
      t.indexOf(l) < 0 && p.call(a, l) && (e[l] = a[l]);
  return e;
};
import f, { forwardRef as d } from "react";
import h from "../../lib/OptiBase.mjs";
const E = d((l, e) => {
  var m = l, { children: a } = m, t = c(m, ["children"]);
  return /* @__PURE__ */ f.createElement(h, n({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M232.5,119.55,136.45,23.49a12,12,0,0,0-16.9,0l-96,96.06a12,12,0,0,0,0,16.9l96.05,96.06a12,12,0,0,0,16.9,0l96.05-96.06a12,12,0,0,0,0-16.9Zm-5.66,11.24-96.05,96.06a4,4,0,0,1-5.58,0l-96-96.06a3.94,3.94,0,0,1,0-5.58l96.05-96.06a4,4,0,0,1,5.58,0l96.05,96.06a3.94,3.94,0,0,1,0,5.58Z" }));
});
E.displayName = "Thin";
export {
  E as Thin
};
