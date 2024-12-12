var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var V = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var p = (a, r, e) => r in a ? f(a, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[r] = e, l = (a, r) => {
  for (var e in r || (r = {}))
    V.call(r, e) && p(a, e, r[e]);
  if (m)
    for (var e of m(r))
      Z.call(r, e) && p(a, e, r[e]);
  return a;
};
var v = (a, r) => {
  var e = {};
  for (var t in a)
    V.call(a, t) && r.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      r.indexOf(t) < 0 && Z.call(a, t) && (e[t] = a[t]);
  return e;
};
import c, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const H = i((t, e) => {
  var o = t, { children: a } = o, r = v(o, ["children"]);
  return /* @__PURE__ */ c.createElement(s, l({ ref: e }, r), a, /* @__PURE__ */ c.createElement("path", { d: "M200,56H32A24,24,0,0,0,8,80v96a24,24,0,0,0,24,24H200a24,24,0,0,0,24-24V80A24,24,0,0,0,200,56Zm8,120a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8H200a8,8,0,0,1,8,8ZM144,96v64a8,8,0,0,1-16,0V96a8,8,0,0,1,16,0Zm-40,0v64a8,8,0,0,1-16,0V96a8,8,0,0,1,16,0ZM64,96v64a8,8,0,0,1-16,0V96a8,8,0,0,1,16,0Zm192,0v64a8,8,0,0,1-16,0V96a8,8,0,0,1,16,0Z" }));
});
H.displayName = "Regular";
export {
  H as Regular
};
