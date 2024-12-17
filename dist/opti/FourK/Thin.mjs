var c = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, H = (a, t) => {
  for (var e in t || (t = {}))
    l.call(t, e) && i(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && i(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var r in a)
    l.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import Z, { forwardRef as f } from "react";
import h from "../../lib/OptiBase.mjs";
const s = f((r, e) => {
  var o = r, { children: a } = o, t = n(o, ["children"]);
  return /* @__PURE__ */ Z.createElement(h, H({ ref: e }, t), a, /* @__PURE__ */ Z.createElement("path", { d: "M28,48a4,4,0,0,1,4-4H224a4,4,0,0,1,0,8H32A4,4,0,0,1,28,48ZM224,204H32a4,4,0,0,0,0,8H224a4,4,0,0,0,0-8ZM144,76a4,4,0,0,0-4,4v96a4,4,0,0,0,8,0V145.5l17.75-20.28L196.54,178a4,4,0,1,0,6.92-4L171.3,118.87,203,82.63a4,4,0,1,0-6-5.26l-49,56V80A4,4,0,0,0,144,76ZM92,176V156H40a4,4,0,0,1-3.16-6.46l56-72A4,4,0,0,1,100,80v68h12a4,4,0,0,1,0,8H100v20a4,4,0,0,1-8,0Zm0-28V91.66L48.18,148Z" }));
});
s.displayName = "Thin";
export {
  s as Thin
};
