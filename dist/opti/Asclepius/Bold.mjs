var v = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var H = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? v(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, A = (a, t) => {
  for (var e in t || (t = {}))
    H.call(t, e) && m(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && m(a, e, t[e]);
  return a;
};
var d = (a, t) => {
  var e = {};
  for (var o in a)
    H.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && r)
    for (var o of r(a))
      t.indexOf(o) < 0 && p.call(a, o) && (e[o] = a[o]);
  return e;
};
import l, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const i = c((o, e) => {
  var h = o, { children: a } = h, t = d(h, ["children"]);
  return /* @__PURE__ */ l.createElement(f, A({ ref: e }, t), a, /* @__PURE__ */ l.createElement("path", { d: "M91.82,60H92a12,12,0,0,0,0-24H60A44.05,44.05,0,0,0,16,80v8a12,12,0,0,0,12,12H48A44.06,44.06,0,0,0,91.82,60ZM48,76H40.4A20,20,0,0,1,60,60h7.6A20,20,0,0,1,48,76Zm176,3v1a44.05,44.05,0,0,1-44,44H140v72h8a12,12,0,0,0,12-12,11.87,11.87,0,0,0-4-8.95,12,12,0,1,1,16-17.88A36,36,0,0,1,148,220h-8v12a12,12,0,0,1-24,0V220H92a12,12,0,0,1,0-24h24V124H100a12,12,0,0,0-4,23.32A12,12,0,1,1,88,170,36,36,0,0,1,100,100h16V24a12,12,0,0,1,24,0v76h40a20,20,0,0,0,20-20V79a19.05,19.05,0,0,0-19-19H164a12,12,0,0,1,0-24h17a43.05,43.05,0,0,1,43,43Z" }));
});
i.displayName = "Bold";
export {
  i as Bold
};
