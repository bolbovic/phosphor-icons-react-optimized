var h = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? h(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, H = (a, t) => {
  for (var e in t || (t = {}))
    l.call(t, e) && i(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && i(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var r in a)
    l.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import f, { forwardRef as s } from "react";
import V from "../../lib/OptiBase.mjs";
const d = s((r, e) => {
  var o = r, { children: a } = o, t = c(o, ["children"]);
  return /* @__PURE__ */ f.createElement(V, H({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M240,122H222V48a14,14,0,0,0-16.5-13.77L45.5,63.32A14,14,0,0,0,34,77.09V122H16a6,6,0,0,0,0,12H34v44.91a14,14,0,0,0,11.5,13.77l160,29.09A14.2,14.2,0,0,0,208,222a14,14,0,0,0,14-14V134h18a6,6,0,0,0,0-12ZM46,77.09a2,2,0,0,1,1.64-2l160-29.1.37,0a2,2,0,0,1,2,2v74H46ZM210,208a2,2,0,0,1-.72,1.53,2,2,0,0,1-1.64.44l-160-29.1a2,2,0,0,1-1.64-2V134H210Z" }));
});
d.displayName = "Light";
export {
  d as Light
};
