var n = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? n(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && m(a, e, t[e]);
  if (r)
    for (var e of r(t))
      i.call(t, e) && m(a, e, t[e]);
  return a;
};
var v = (a, t) => {
  var e = {};
  for (var H in a)
    o.call(a, H) && t.indexOf(H) < 0 && (e[H] = a[H]);
  if (a != null && r)
    for (var H of r(a))
      t.indexOf(H) < 0 && i.call(a, H) && (e[H] = a[H]);
  return e;
};
import V, { forwardRef as A } from "react";
import c from "../../lib/OptiBase.mjs";
const f = A((H, e) => {
  var h = H, { children: a } = h, t = v(h, ["children"]);
  return /* @__PURE__ */ V.createElement(c, p({ ref: e }, t), a, /* @__PURE__ */ V.createElement("path", { d: "M212,79v1a36,36,0,0,1-36,36H132v88h12a20,20,0,0,0,13.33-34.91,4,4,0,1,1,5.34-6A28,28,0,0,1,144,212H132v20a4,4,0,0,1-8,0V212H96a4,4,0,0,1,0-8h28V116H96a20,20,0,0,0,0,40,4,4,0,0,1,0,8,28,28,0,0,1,0-56h28V24a4,4,0,0,1,8,0v84h44a28,28,0,0,0,28-28V79a27,27,0,0,0-27-27H160a4,4,0,0,1,0-8h17a35,35,0,0,1,35,35ZM56,92H32a4,4,0,0,1-4-4V80A36,36,0,0,1,64,44H96a4,4,0,0,1,0,8H92v4A36,36,0,0,1,56,92ZM84,56V52H64A28,28,0,0,0,36,80v4H56A28,28,0,0,0,84,56Z" }));
});
f.displayName = "Thin";
export {
  f as Thin
};
