var Z = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var V = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var r = (a, t, e) => t in a ? Z(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    V.call(t, e) && r(a, e, t[e]);
  if (m)
    for (var e of m(t))
      h.call(t, e) && r(a, e, t[e]);
  return a;
};
var d = (a, t) => {
  var e = {};
  for (var l in a)
    V.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && m)
    for (var l of m(a))
      t.indexOf(l) < 0 && h.call(a, l) && (e[l] = a[l]);
  return e;
};
import H, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const i = c((l, e) => {
  var o = l, { children: a } = o, t = d(o, ["children"]);
  return /* @__PURE__ */ H.createElement(f, p({ ref: e }, t), a, /* @__PURE__ */ H.createElement("path", { d: "M216.49,79.52l-56-56A12,12,0,0,0,152,20H56A20,20,0,0,0,36,40v68a12,12,0,0,0,24,0V44h76V92a12,12,0,0,0,12,12h48V212H172a12,12,0,0,0,0,24h28a20,20,0,0,0,20-20V88A12,12,0,0,0,216.49,79.52ZM160,57l23,23H160ZM64,140H48a12,12,0,0,0-12,12v56a12,12,0,0,0,24,0v-4h4a32,32,0,0,0,0-64Zm0,40H60V164h4a8,8,0,0,1,0,16Zm80,7.44V208a12,12,0,0,1-24,0V187.44l-18.18-29.08a12,12,0,0,1,20.36-12.72L132,161.36l9.82-15.72a12,12,0,0,1,20.36,12.72Z" }));
});
i.displayName = "Bold";
export {
  i as Bold
};
