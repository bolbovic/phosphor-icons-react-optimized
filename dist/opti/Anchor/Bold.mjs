var s = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, l = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && m(a, e, t[e]);
  if (r)
    for (var e of r(t))
      d.call(t, e) && m(a, e, t[e]);
  return a;
};
var f = (a, t) => {
  var e = {};
  for (var o in a)
    p.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && r)
    for (var o of r(a))
      t.indexOf(o) < 0 && d.call(a, o) && (e[o] = a[o]);
  return e;
};
import i, { forwardRef as h } from "react";
import n from "../../lib/OptiBase.mjs";
const B = h((o, e) => {
  var c = o, { children: a } = c, t = f(c, ["children"]);
  return /* @__PURE__ */ i.createElement(n, l({ ref: e }, t), a, /* @__PURE__ */ i.createElement("path", { d: "M216,132a12,12,0,0,0-12,12c0,21.86-11.41,25.95-35.16,32.42-9.12,2.49-19.61,5.36-28.84,10.69V132h28a12,12,0,0,0,0-24H140V89.94a36,36,0,1,0-24,0V108H88a12,12,0,0,0,0,24h28v55.11c-9.23-5.33-19.72-8.2-28.84-10.69C63.41,170,52,165.86,52,144a12,12,0,0,0-24,0c0,41.17,30.54,49.5,52.84,55.58C104.59,206.05,116,210.14,116,232a12,12,0,0,0,24,0c0-21.86,11.41-25.95,35.16-32.42C197.46,193.5,228,185.17,228,144A12,12,0,0,0,216,132ZM128,44a12,12,0,1,1-12,12A12,12,0,0,1,128,44Z" }));
});
B.displayName = "Bold";
export {
  B as Bold
};
