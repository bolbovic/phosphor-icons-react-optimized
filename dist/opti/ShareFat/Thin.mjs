var h = Object.defineProperty;
var c = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? h(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (c)
    for (var e of c(t))
      l.call(t, e) && o(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var r in a)
    i.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && c)
    for (var r of c(a))
      t.indexOf(r) < 0 && l.call(a, r) && (e[r] = a[r]);
  return e;
};
import f, { forwardRef as s } from "react";
import V from "../../lib/OptiBase.mjs";
const d = s((r, e) => {
  var m = r, { children: a } = m, t = n(m, ["children"]);
  return /* @__PURE__ */ f.createElement(V, p({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M234.83,109.17l-80-80A4,4,0,0,0,148,32V76.09c-54,2.44-120.43,53.55-127.94,119a7.87,7.87,0,0,0,4.58,8.16,8,8,0,0,0,3.41.77,7.9,7.9,0,0,0,5.79-2.55h0c11.53-12.27,53.29-51.73,114.16-53.4V192a4,4,0,0,0,6.83,2.83l80-80A4,4,0,0,0,234.83,109.17ZM156,182.33V144a4,4,0,0,0-4-4c-27.39,0-54.08,7.17-79.34,21.3A189.91,189.91,0,0,0,28,196l2.92,2.74L28,196c3.36-29.21,19.55-57.48,45.6-79.57C97.53,96.11,126.83,84,152,84a4,4,0,0,0,4-4V41.66L226.34,112Z" }));
});
d.displayName = "Thin";
export {
  d as Thin
};
