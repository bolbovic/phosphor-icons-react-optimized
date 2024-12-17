var Z = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var r = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? Z(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    r.call(t, e) && o(a, e, t[e]);
  if (l)
    for (var e of l(t))
      h.call(t, e) && o(a, e, t[e]);
  return a;
};
var A = (a, t) => {
  var e = {};
  for (var c in a)
    r.call(a, c) && t.indexOf(c) < 0 && (e[c] = a[c]);
  if (a != null && l)
    for (var c of l(a))
      t.indexOf(c) < 0 && h.call(a, c) && (e[c] = a[c]);
  return e;
};
import d, { forwardRef as f } from "react";
import i from "../../lib/OptiBase.mjs";
const s = f((c, e) => {
  var m = c, { children: a } = m, t = A(m, ["children"]);
  return /* @__PURE__ */ d.createElement(i, p({ ref: e }, t), a, /* @__PURE__ */ d.createElement("path", { d: "M216.49,79.51l-56-56A12,12,0,0,0,152,20H56A20,20,0,0,0,36,40v68a12,12,0,0,0,24,0V44h76V92a12,12,0,0,0,12,12h48V212h-8a12,12,0,0,0,0,24h12a20,20,0,0,0,20-20V88A12,12,0,0,0,216.49,79.51ZM160,57l23,23H160ZM64,140H48a12,12,0,0,0-12,12v56a12,12,0,0,0,24,0v-4h4a33.9,33.9,0,0,0,3.65-.21l6,10.26A12,12,0,0,0,94.37,202l-5.64-9.66A32,32,0,0,0,64,140Zm-4,24h4a8,8,0,0,1,0,16H60Zm103.78,32.82a24.75,24.75,0,0,1-10.95,18.06c-6,4-13.27,5.15-19.73,5.15a63.75,63.75,0,0,1-16.23-2.21,12,12,0,0,1,6.46-23.12c6.81,1.86,15,1.61,16.39.06a2.48,2.48,0,0,0,.21-.71c-1.94-1.23-6.83-2.64-9.88-3.52-5.39-1.56-11-3.18-15.75-6.27-7.62-4.92-11.21-12.45-10.11-21.2a24.45,24.45,0,0,1,10.69-17.75c6.06-4.09,14.17-5.83,24.1-5.18A68.53,68.53,0,0,1,151,142a12,12,0,0,1-6.1,23.21c-6.36-1.63-13.62-1.51-16.07-.33a79.5,79.5,0,0,0,7.91,2.59c5.48,1.58,11.68,3.37,16.8,6.82C161.33,179.55,165,187.55,163.78,196.82Z" }));
});
s.displayName = "Bold";
export {
  s as Bold
};
