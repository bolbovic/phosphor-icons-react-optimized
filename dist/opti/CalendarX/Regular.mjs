var i = Object.defineProperty;
var V = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, H = Object.prototype.propertyIsEnumerable;
var m = (a, r, e) => r in a ? i(a, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[r] = e, p = (a, r) => {
  for (var e in r || (r = {}))
    o.call(r, e) && m(a, e, r[e]);
  if (V)
    for (var e of V(r))
      H.call(r, e) && m(a, e, r[e]);
  return a;
};
var c = (a, r) => {
  var e = {};
  for (var t in a)
    o.call(a, t) && r.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && V)
    for (var t of V(a))
      r.indexOf(t) < 0 && H.call(a, t) && (e[t] = a[t]);
  return e;
};
import f, { forwardRef as s } from "react";
import v from "../../lib/OptiBase.mjs";
const L = s((t, e) => {
  var l = t, { children: a } = l, r = c(l, ["children"]);
  return /* @__PURE__ */ f.createElement(v, p({ ref: e }, r), a, /* @__PURE__ */ f.createElement("path", { d: "M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Zm-50.34-74.34L139.31,152l18.35,18.34a8,8,0,0,1-11.32,11.32L128,163.31l-18.34,18.35a8,8,0,0,1-11.32-11.32L116.69,152,98.34,133.66a8,8,0,0,1,11.32-11.32L128,140.69l18.34-18.35a8,8,0,0,1,11.32,11.32Z" }));
});
L.displayName = "Regular";
export {
  L as Regular
};
