var s = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var m = (a, e, l) => e in a ? s(a, e, { enumerable: !0, configurable: !0, writable: !0, value: l }) : a[e] = l, c = (a, e) => {
  for (var l in e || (e = {}))
    p.call(e, l) && m(a, l, e[l]);
  if (o)
    for (var l of o(e))
      d.call(e, l) && m(a, l, e[l]);
  return a;
};
var f = (a, e) => {
  var l = {};
  for (var t in a)
    p.call(a, t) && e.indexOf(t) < 0 && (l[t] = a[t]);
  if (a != null && o)
    for (var t of o(a))
      e.indexOf(t) < 0 && d.call(a, t) && (l[t] = a[t]);
  return l;
};
import i, { forwardRef as L } from "react";
import n from "../../lib/OptiBase.mjs";
const B = L((t, l) => {
  var r = t, { children: a } = r, e = f(r, ["children"]);
  return /* @__PURE__ */ i.createElement(n, c({ ref: l }, e), a, /* @__PURE__ */ i.createElement("path", { d: "M248.49,55.51l-48-48a12,12,0,0,0-17,17L199,40l-65.37,65.37L102.14,73.86a20,20,0,0,0-28.28,0l-56,56A19.9,19.9,0,0,0,12,144v80a20,20,0,0,0,20,20h80a19.86,19.86,0,0,0,14.14-5.86l56-56a20,20,0,0,0,0-28.28l-31.51-31.52L216,57l15.51,15.52a12,12,0,1,0,17-17ZM162.34,168l-52,52H36V145.66l52-52,28.69,28.68L79.51,159.51a12,12,0,0,0,17,17l37.17-37.18Z" }));
});
B.displayName = "Bold";
export {
  B as Bold
};
