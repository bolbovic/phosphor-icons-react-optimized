var i = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var A = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var p = (a, l, e) => l in a ? i(a, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[l] = e, n = (a, l) => {
  for (var e in l || (l = {}))
    A.call(l, e) && p(a, e, l[e]);
  if (o)
    for (var e of o(l))
      c.call(l, e) && p(a, e, l[e]);
  return a;
};
var Z = (a, l) => {
  var e = {};
  for (var t in a)
    A.call(a, t) && l.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && o)
    for (var t of o(a))
      l.indexOf(t) < 0 && c.call(a, t) && (e[t] = a[t]);
  return e;
};
import r, { forwardRef as M } from "react";
import d from "../../lib/OptiBase.mjs";
const f = M((t, e) => {
  var m = t, { children: a } = m, l = Z(m, ["children"]);
  return /* @__PURE__ */ r.createElement(d, n({ ref: e }, l), a, /* @__PURE__ */ r.createElement(
    "path",
    {
      d: "M215.88,56.39l-29.75,169a8,8,0,0,1-9.27,6.49l-130.25-23a8,8,0,0,1-6.49-9.26l29.75-169a8,8,0,0,1,9.27-6.49l130.25,23A8,8,0,0,1,215.88,56.39Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ r.createElement("path", { d: "M210.78,39.25l-130.25-23A16,16,0,0,0,62,29.23l-29.75,169a16,16,0,0,0,13,18.53l130.25,23h0a16,16,0,0,0,18.54-13l29.75-169A16,16,0,0,0,210.78,39.25ZM178.26,224h0L48,201,77.75,32,208,55ZM89.34,58.42a8,8,0,0,1,9.27-6.48l83,14.65a8,8,0,0,1-1.39,15.88,8.36,8.36,0,0,1-1.4-.12l-83-14.66A8,8,0,0,1,89.34,58.42ZM83.8,89.94a8,8,0,0,1,9.27-6.49l83,14.66A8,8,0,0,1,174.67,114a7.55,7.55,0,0,1-1.41-.13l-83-14.65A8,8,0,0,1,83.8,89.94Zm-5.55,31.51A8,8,0,0,1,87.52,115L129,122.29a8,8,0,0,1-1.38,15.88,8.27,8.27,0,0,1-1.4-.12l-41.5-7.33A8,8,0,0,1,78.25,121.45Z" }));
});
f.displayName = "Duotone";
export {
  f as Duotone
};
