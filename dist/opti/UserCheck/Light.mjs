var d = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? d(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, l = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (m)
    for (var e of m(t))
      c.call(t, e) && i(a, e, t[e]);
  return a;
};
var s = (a, t) => {
  var e = {};
  for (var r in a)
    p.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && c.call(a, r) && (e[r] = a[r]);
  return e;
};
import f, { forwardRef as h } from "react";
import n from "../../lib/OptiBase.mjs";
const L = h((r, e) => {
  var o = r, { children: a } = o, t = s(o, ["children"]);
  return /* @__PURE__ */ f.createElement(n, l({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M139,158.25a66,66,0,1,0-62,0c-22,6.23-41.88,19.16-57.61,37.89a6,6,0,0,0,9.18,7.72C49.11,179.44,77.31,166,108,166s58.9,13.44,79.41,37.86a6,6,0,1,0,9.18-7.72C180.86,177.41,161,164.48,139,158.25ZM54,100a54,54,0,1,1,54,54A54.06,54.06,0,0,1,54,100Zm198.24,32.24-32,32a6,6,0,0,1-8.48,0l-16-16a6,6,0,0,1,8.48-8.48L216,151.51l27.76-27.75a6,6,0,1,1,8.48,8.48Z" }));
});
L.displayName = "Light";
export {
  L as Light
};
