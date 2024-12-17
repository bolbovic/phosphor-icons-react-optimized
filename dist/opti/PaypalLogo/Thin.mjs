var n = Object.defineProperty;
var h = Object.getOwnPropertySymbols;
var A = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? n(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, i = (a, t) => {
  for (var e in t || (t = {}))
    A.call(t, e) && m(a, e, t[e]);
  if (h)
    for (var e of h(t))
      o.call(t, e) && m(a, e, t[e]);
  return a;
};
var p = (a, t) => {
  var e = {};
  for (var l in a)
    A.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && h)
    for (var l of h(a))
      t.indexOf(l) < 0 && o.call(a, l) && (e[l] = a[l]);
  return e;
};
import c, { forwardRef as H } from "react";
import f from "../../lib/OptiBase.mjs";
const s = H((l, e) => {
  var r = l, { children: a } = r, t = p(r, ["children"]);
  return /* @__PURE__ */ c.createElement(f, i({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M217,96a51.69,51.69,0,0,0-21-16,52,52,0,0,0-52-52H84a12,12,0,0,0-11.65,9.09l-36,144A12,12,0,0,0,48,196h31.5a10.6,10.6,0,0,0,1.14-.06l-4.29,17.15A12,12,0,0,0,88,228h31.5a12,12,0,0,0,11.64-9.09l9-35.88a4,4,0,0,1,3.88-3h32a52,52,0,0,0,41-84ZM48,188a4,4,0,0,1-3.89-5l36-144A4,4,0,0,1,84,36h60a44,44,0,0,1,43.93,41.37A52.53,52.53,0,0,0,176,76H120a12,12,0,0,0-11.65,9.09L83.39,185a4,4,0,0,1-3.88,3ZM187.63,85.56a43,43,0,0,1-1,5.11A43.94,43.94,0,0,1,144,124H108a10.6,10.6,0,0,0-1.14.06l9.25-37A4,4,0,0,1,120,84h56A44.3,44.3,0,0,1,187.63,85.56Zm31,53.11A43.94,43.94,0,0,1,176,172H144a12,12,0,0,0-11.64,9.09l-9,35.88a4,4,0,0,1-3.88,3H88a4,4,0,0,1-3.89-5l20-80a4,4,0,0,1,3.89-3h36a51.92,51.92,0,0,0,50.44-39.39c.35-1.39.62-2.79.85-4.19a44.08,44.08,0,0,1,23.39,50.25Z" }));
});
s.displayName = "Thin";
export {
  s as Thin
};
