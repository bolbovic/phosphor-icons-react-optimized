var A = Object.defineProperty;
var V = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var l = (a, t, e) => t in a ? A(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, Z = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && l(a, e, t[e]);
  if (V)
    for (var e of V(t))
      p.call(t, e) && l(a, e, t[e]);
  return a;
};
var f = (a, t) => {
  var e = {};
  for (var r in a)
    o.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && V)
    for (var r of V(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import s, { forwardRef as c } from "react";
import d from "../../lib/OptiBase.mjs";
const i = c((r, e) => {
  var m = r, { children: a } = m, t = f(m, ["children"]);
  return /* @__PURE__ */ s.createElement(d, Z({ ref: e }, t), a, /* @__PURE__ */ s.createElement("path", { d: "M56,96v64a8,8,0,0,1-16,0V96a8,8,0,0,1,16,0ZM53.92,34.62A8,8,0,1,0,42.08,45.38L80,87.09V224a8,8,0,0,0,16,0V104.69l24,26.4V192a8,8,0,0,0,16,0V148.69l66.08,72.69a8,8,0,1,0,11.84-10.76ZM88,44.43a8,8,0,0,0,8-8V32a8,8,0,0,0-16,0v4.43A8,8,0,0,0,88,44.43Zm40,44a8,8,0,0,0,8-8V64a8,8,0,0,0-16,0V80.43A8,8,0,0,0,128,88.43Zm40,44a8,8,0,0,0,8-8V96a8,8,0,0,0-16,0v28.43A8,8,0,0,0,168,132.43ZM208,72a8,8,0,0,0-8,8v88.43a8,8,0,0,0,16,0V80A8,8,0,0,0,208,72Z" }));
});
i.displayName = "Regular";
export {
  i as Regular,
  i as default
};
