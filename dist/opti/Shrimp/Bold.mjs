var A = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var h = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? A(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, H = (a, t) => {
  for (var e in t || (t = {}))
    h.call(t, e) && m(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && m(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var o in a)
    h.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && r)
    for (var o of r(a))
      t.indexOf(o) < 0 && p.call(a, o) && (e[o] = a[o]);
  return e;
};
import d, { forwardRef as Z } from "react";
import f from "../../lib/OptiBase.mjs";
const i = Z((o, e) => {
  var l = o, { children: a } = l, t = c(l, ["children"]);
  return /* @__PURE__ */ d.createElement(f, H({ ref: e }, t), a, /* @__PURE__ */ d.createElement("path", { d: "M244,60a32,32,0,0,0-32-32H128a4,4,0,0,1-4-4,12,12,0,0,0-24,0,28,28,0,0,0,28,28h84a8,8,0,0,1,0,16H96.9C50.43,68,12.34,105.4,12,151.37A84,84,0,0,0,96,236h56a12,12,0,0,0,0-24H124V196h44a12,12,0,0,0,0-24H112a8,8,0,0,1,0-16h40a76.1,76.1,0,0,0,75.58-68.07A32,32,0,0,0,244,60ZM96.9,92H100v42.34a32.2,32.2,0,0,0-12.65,9.27l-44-20A61.19,61.19,0,0,1,96.9,92ZM36,151.54c0-1.61.11-3.21.25-4.79l43.87,19.94a30.18,30.18,0,0,0,.66,4.29L51.31,192A59.54,59.54,0,0,1,36,151.54ZM96,212a59.8,59.8,0,0,1-24.23-5.09l22.66-16.18a32.47,32.47,0,0,0,5.57,2.93V212Zm56-80H124V92h78.6A52.08,52.08,0,0,1,152,132Z" }));
});
i.displayName = "Bold";
export {
  i as Bold
};
