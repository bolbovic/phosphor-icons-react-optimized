var M = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, L = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? M(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, Z = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (m)
    for (var e of m(t))
      L.call(t, e) && i(a, e, t[e]);
  return a;
};
var h = (a, t) => {
  var e = {};
  for (var r in a)
    p.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && L.call(a, r) && (e[r] = a[r]);
  return e;
};
import n, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const l = c((r, e) => {
  var o = r, { children: a } = o, t = h(o, ["children"]);
  return /* @__PURE__ */ n.createElement(f, Z({ ref: e }, t), a, /* @__PURE__ */ n.createElement("path", { d: "M186.83,74.83a4,4,0,1,0-5.66-5.66L150.34,100H105.66L74.83,69.17a4,4,0,0,0-5.66,5.66L100,105.66v44.68L69.17,181.17a4,4,0,0,0,5.66,5.66L105.66,156h44.68l30.83,30.83a4,4,0,0,0,5.66-5.66L156,150.34V105.66ZM108,108h40v40H108Zm34.28-45.33a40,40,0,1,1,51.05,51.05A3.88,3.88,0,0,1,192,114a4,4,0,0,1-1.33-7.77,32,32,0,1,0-40.85-40.85,4,4,0,1,1-7.54-2.66ZM220,180a40,40,0,0,1-77.72,13.33,4,4,0,1,1,7.54-2.66,32,32,0,1,0,40.85-40.85,4,4,0,0,1,2.66-7.54A40.06,40.06,0,0,1,220,180ZM113.72,193.33a40,40,0,1,1-51-51.05,4,4,0,0,1,2.66,7.54,32,32,0,1,0,40.85,40.85,4,4,0,0,1,7.54,2.66ZM36,76a40,40,0,0,1,77.72-13.33,4,4,0,0,1-7.54,2.66,32,32,0,1,0-40.85,40.85A4,4,0,0,1,64,114a3.88,3.88,0,0,1-1.33-.23A40.06,40.06,0,0,1,36,76Z" }));
});
l.displayName = "Thin";
export {
  l as Thin
};
