var s = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, L = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, A = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (m)
    for (var e of m(t))
      L.call(t, e) && i(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var r in a)
    p.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && L.call(a, r) && (e[r] = a[r]);
  return e;
};
import f, { forwardRef as H } from "react";
import d from "../../lib/OptiBase.mjs";
const h = H((r, e) => {
  var o = r, { children: a } = o, t = c(o, ["children"]);
  return /* @__PURE__ */ f.createElement(d, A({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M230,200a6,6,0,0,1-6,6H32a6,6,0,0,1,0-12H224A6,6,0,0,1,230,200ZM27.39,150A14,14,0,0,1,29.16,135L110.82,34.2a22.1,22.1,0,0,1,34.36,0L226.84,135a14.09,14.09,0,0,1-10.93,23H40.09A14,14,0,0,1,27.39,150Zm10.83-5.16A2,2,0,0,0,40.09,146H215.91a2,2,0,0,0,1.87-1.18,2,2,0,0,0-.27-2.24L135.86,41.76a10.1,10.1,0,0,0-15.72,0L38.49,142.58A2,2,0,0,0,38.22,144.82Z" }));
});
h.displayName = "Light";
export {
  h as Light
};
