var d = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? d(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && m(a, e, t[e]);
  if (r)
    for (var e of r(t))
      i.call(t, e) && m(a, e, t[e]);
  return a;
};
var s = (a, t) => {
  var e = {};
  for (var c in a)
    o.call(a, c) && t.indexOf(c) < 0 && (e[c] = a[c]);
  if (a != null && r)
    for (var c of r(a))
      t.indexOf(c) < 0 && i.call(a, c) && (e[c] = a[c]);
  return e;
};
import f, { forwardRef as n } from "react";
import C from "../../lib/OptiBase.mjs";
const E = n((c, e) => {
  var l = c, { children: a } = l, t = s(l, ["children"]);
  return /* @__PURE__ */ f.createElement(C, p({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M71.22,190.47a108.88,108.88,0,0,1-33.84,9.16,4,4,0,0,1-3.89-2c-8.67-15.28-11.52-34.29-8-55.15,4.49-26.92,19.09-53.87,41.12-75.9s49-36.63,75.9-41.12c22.79-3.79,43.37,0,59.29,10.6a4,4,0,0,1-1.25,7.23,121,121,0,0,0-21.82,7.46c-21.77,9.9-49.6,31.06-58.52,75.7C114.1,156.73,97.63,178.27,71.22,190.47ZM222.51,58.38a4,4,0,0,0-3.88-2,108.5,108.5,0,0,0-33.85,9.16c-26.41,12.2-42.88,33.74-48.94,64-8.93,44.64-36.75,65.8-58.52,75.7a121,121,0,0,1-21.82,7.46A4,4,0,0,0,54.27,220c11.87,7.92,26.32,12,42.35,12a103.66,103.66,0,0,0,16.92-1.44c26.91-4.49,53.87-19.09,75.9-41.12s36.63-49,41.12-75.9C234,92.68,231.18,73.66,222.51,58.38Z" }));
});
E.displayName = "Fill";
export {
  E as Fill
};
