var l = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var r = (a, t, e) => t in a ? l(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    c.call(t, e) && r(a, e, t[e]);
  if (m)
    for (var e of m(t))
      s.call(t, e) && r(a, e, t[e]);
  return a;
};
var Z = (a, t) => {
  var e = {};
  for (var C in a)
    c.call(a, C) && t.indexOf(C) < 0 && (e[C] = a[C]);
  if (a != null && m)
    for (var C of m(a))
      t.indexOf(C) < 0 && s.call(a, C) && (e[C] = a[C]);
  return e;
};
import d, { forwardRef as V } from "react";
import f from "../../lib/OptiBase.mjs";
const i = V((C, e) => {
  var o = C, { children: a } = o, t = Z(o, ["children"]);
  return /* @__PURE__ */ d.createElement(f, p({ ref: e }, t), a, /* @__PURE__ */ d.createElement("path", { d: "M209.37,60.27C188.08,49.62,160,44,128,44S67.92,49.62,46.63,60.27C24.62,71.27,12,87.21,12,104v48c0,16.79,12.62,32.73,34.63,43.73C67.92,206.38,96.05,212,128,212s60.08-5.62,81.37-16.27c22-11,34.63-26.94,34.63-43.73V104C244,87.21,231.38,71.27,209.37,60.27Zm-152,21.46C75.08,72.88,100.16,68,128,68s52.92,4.88,70.63,13.73C211.81,88.32,220,96.86,220,104s-8.19,15.68-21.37,22.27C180.92,135.12,155.84,140,128,140s-52.92-4.88-70.63-13.73C44.19,119.68,36,111.14,36,104S44.19,88.32,57.37,81.73ZM180,181.38a180.38,180.38,0,0,1-40,6.3v-24a210.39,210.39,0,0,0,40-5.51ZM76,158.22a210.39,210.39,0,0,0,40,5.51v24a180.38,180.38,0,0,1-40-6.3ZM36,152V141.54a94.54,94.54,0,0,0,10.63,6.19c1.74.87,3.54,1.7,5.37,2.5V171.3C42,165.24,36,158.11,36,152Zm168,19.3V150.23c1.83-.8,3.63-1.63,5.37-2.5A94.54,94.54,0,0,0,220,141.54V152C220,158.11,214,165.24,204,171.3Z" }));
});
i.displayName = "Bold";
export {
  i as Bold
};
