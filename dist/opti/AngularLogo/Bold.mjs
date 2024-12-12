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
import i, { forwardRef as Z } from "react";
import n from "../../lib/OptiBase.mjs";
const B = Z((t, l) => {
  var r = t, { children: a } = r, e = f(r, ["children"]);
  return /* @__PURE__ */ i.createElement(n, c({ ref: l }, e), a, /* @__PURE__ */ i.createElement("path", { d: "M228.61,60.92l-96-40a12,12,0,0,0-9.24,0l-96,40a12,12,0,0,0-7.28,12.67l16,120a12,12,0,0,0,6.52,9.14l80,40a12,12,0,0,0,10.74,0l80-40a12,12,0,0,0,6.52-9.14l16-120A12,12,0,0,0,228.61,60.92ZM197,184.11,128,218.58,59.05,184.11,45.11,79.54,128,45l82.89,34.54ZM117.51,82.17l-40,72a12,12,0,1,0,21,11.66L106.17,152h43.66l7.68,13.83a12,12,0,1,0,21-11.66l-40-72a12,12,0,0,0-21,0Zm2,45.83L128,112.71,136.49,128Z" }));
});
B.displayName = "Bold";
export {
  B as Bold
};
