var n = Object.defineProperty;
var c = Object.getOwnPropertySymbols;
var h = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? n(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, i = (a, t) => {
  for (var e in t || (t = {}))
    h.call(t, e) && m(a, e, t[e]);
  if (c)
    for (var e of c(t))
      o.call(t, e) && m(a, e, t[e]);
  return a;
};
var p = (a, t) => {
  var e = {};
  for (var r in a)
    h.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && c)
    for (var r of c(a))
      t.indexOf(r) < 0 && o.call(a, r) && (e[r] = a[r]);
  return e;
};
import s, { forwardRef as f } from "react";
import V from "../../lib/OptiBase.mjs";
const d = f((r, e) => {
  var l = r, { children: a } = l, t = p(l, ["children"]);
  return /* @__PURE__ */ s.createElement(V, i({ ref: e }, t), a, /* @__PURE__ */ s.createElement("path", { d: "M235.71,134.51l-32-80h0a4,4,0,0,0-4.57-2.41L132,67V40a4,4,0,0,0-8,0V68.79L55.13,84.1a4,4,0,0,0-2.84,2.41h0v0h0l-32,80A4,4,0,0,0,20,168c0,20.4,22.08,28,36,28s36-7.6,36-28a4,4,0,0,0-.29-1.49L61.46,90.88,124,77V212H104a4,4,0,0,0,0,8h48a4,4,0,0,0,0-8H132V75.21l61.47-13.66-29.18,73A4,4,0,0,0,164,136c0,20.4,22.08,28,36,28s36-7.6,36-28A4,4,0,0,0,235.71,134.51ZM56,188c-7.15,0-27.37-3.56-28-19.27l28-70,28,70C83.37,184.44,63.15,188,56,188Zm144-32c-7.15,0-27.37-3.56-28-19.27l28-70,28,70C227.37,152.44,207.15,156,200,156Z" }));
});
d.displayName = "Thin";
export {
  d as Thin
};
