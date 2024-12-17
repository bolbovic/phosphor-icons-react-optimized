var Z = Object.defineProperty;
var H = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var p = (a, t, e) => t in a ? Z(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, n = (a, t) => {
  for (var e in t || (t = {}))
    l.call(t, e) && p(a, e, t[e]);
  if (H)
    for (var e of H(t))
      c.call(t, e) && p(a, e, t[e]);
  return a;
};
var V = (a, t) => {
  var e = {};
  for (var o in a)
    l.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && H)
    for (var o of H(a))
      t.indexOf(o) < 0 && c.call(a, o) && (e[o] = a[o]);
  return e;
};
import m, { forwardRef as i } from "react";
import A from "../../lib/OptiBase.mjs";
const d = i((o, e) => {
  var r = o, { children: a } = r, t = V(r, ["children"]);
  return /* @__PURE__ */ m.createElement(A, n({ ref: e }, t), a, /* @__PURE__ */ m.createElement(
    "path",
    {
      d: "M232,64V192a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V64a8,8,0,0,1,8-8H224A8,8,0,0,1,232,64Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ m.createElement("path", { d: "M48,136a8,8,0,0,1,8-8H72a8,8,0,0,1,0,16H56A8,8,0,0,1,48,136Zm165.92,74.62a8,8,0,1,1-11.84,10.76L189.92,208H32a16,16,0,0,1-16-16V64A16,16,0,0,1,32,48H44.46l-2.38-2.62A8,8,0,1,1,53.92,34.62ZM175.37,192l-14.55-16H56a8,8,0,0,1,0-16h90.28l-14.55-16H104a8,8,0,0,1,0-16h13.19L59,64H32V192ZM200,144a8,8,0,0,0,0-16H178.52a8,8,0,1,0,0,16Zm24-96H105.79a8,8,0,0,0,0,16H224V194.83a8,8,0,1,0,16,0V64A16,16,0,0,0,224,48Z" }));
});
d.displayName = "Duotone";
export {
  d as Duotone
};
