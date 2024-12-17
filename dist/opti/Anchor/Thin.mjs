var s = Object.defineProperty;
var c = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, h = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (c)
    for (var e of c(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var r in a)
    i.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && c)
    for (var r of c(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import f, { forwardRef as d } from "react";
import l from "../../lib/OptiBase.mjs";
const V = d((r, e) => {
  var m = r, { children: a } = m, t = n(m, ["children"]);
  return /* @__PURE__ */ f.createElement(l, h({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M216,140a4,4,0,0,0-4,4c0,28.94-19,34.13-41.05,40.14-14.29,3.9-29.82,8.14-38.95,20.24V124h36a4,4,0,0,0,0-8H132V83.71a28,28,0,1,0-8,0V116H88a4,4,0,0,0,0,8h36v80.38c-9.13-12.1-24.66-16.34-38.95-20.24-22-6-41-11.2-41-40.14a4,4,0,0,0-8,0c0,35.06,24.94,41.86,47,47.86S124,203.06,124,232a4,4,0,0,0,8,0c0-28.94,19-34.13,41.05-40.14S220,179.06,220,144A4,4,0,0,0,216,140ZM108,56a20,20,0,1,1,20,20A20,20,0,0,1,108,56Z" }));
});
V.displayName = "Thin";
export {
  V as Thin
};
