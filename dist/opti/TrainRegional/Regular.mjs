var c = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var L = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, r, e) => r in a ? c(a, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[r] = e, H = (a, r) => {
  for (var e in r || (r = {}))
    L.call(r, e) && o(a, e, r[e]);
  if (l)
    for (var e of l(r))
      p.call(r, e) && o(a, e, r[e]);
  return a;
};
var A = (a, r) => {
  var e = {};
  for (var t in a)
    L.call(a, t) && r.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && l)
    for (var t of l(a))
      r.indexOf(t) < 0 && p.call(a, t) && (e[t] = a[t]);
  return e;
};
import Z, { forwardRef as f } from "react";
import h from "../../lib/OptiBase.mjs";
const i = f((t, e) => {
  var m = t, { children: a } = m, r = A(m, ["children"]);
  return /* @__PURE__ */ Z.createElement(h, H({ ref: e }, r), a, /* @__PURE__ */ Z.createElement("path", { d: "M223.72,117.9,201.33,35.79A16,16,0,0,0,185.89,24H70.11A16,16,0,0,0,54.67,35.79L32.28,117.9a8.08,8.08,0,0,0,0,4.2l22.39,82.11A16,16,0,0,0,70.11,216H80L65.6,235.2a8,8,0,1,0,12.8,9.6L100,216h56l21.6,28.8a8,8,0,1,0,12.8-9.6L176,216h9.89a16,16,0,0,0,15.44-11.79l22.39-82.11A8.08,8.08,0,0,0,223.72,117.9ZM70.11,40H185.89L206,113.69l-78,14.18L50,113.69Zm-19,90.14L120,142.68V200H70.11ZM185.89,200H136V142.68l68.94-12.54ZM88,88a8,8,0,0,1,8-8h64a8,8,0,0,1,0,16H96A8,8,0,0,1,88,88Z" }));
});
i.displayName = "Regular";
export {
  i as Regular
};
