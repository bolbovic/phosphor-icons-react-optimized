var l = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var h = Object.prototype.hasOwnProperty, H = Object.prototype.propertyIsEnumerable;
var m = (a, v, e) => v in a ? l(a, v, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[v] = e, o = (a, v) => {
  for (var e in v || (v = {}))
    h.call(v, e) && m(a, e, v[e]);
  if (t)
    for (var e of t(v))
      H.call(v, e) && m(a, e, v[e]);
  return a;
};
var p = (a, v) => {
  var e = {};
  for (var r in a)
    h.call(a, r) && v.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && t)
    for (var r of t(a))
      v.indexOf(r) < 0 && H.call(a, r) && (e[r] = a[r]);
  return e;
};
import Z, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const i = c((r, e) => {
  var V = r, { children: a } = V, v = p(V, ["children"]);
  return /* @__PURE__ */ Z.createElement(f, o({ ref: e }, v), a, /* @__PURE__ */ Z.createElement("path", { d: "M232,56H24A16,16,0,0,0,8,72V200a8,8,0,0,0,16,0V184H40v16a8,8,0,0,0,16,0V184H72v16a8,8,0,0,0,16,0V184h16v16a8,8,0,0,0,16,0V184h16v16a8,8,0,0,0,16,0V184h16v16a8,8,0,0,0,16,0V184h16v16a8,8,0,0,0,16,0V184h16v16a8,8,0,0,0,16,0V72A16,16,0,0,0,232,56ZM24,72H232v96H24Zm88,80a8,8,0,0,0,8-8V96a8,8,0,0,0-8-8H48a8,8,0,0,0-8,8v48a8,8,0,0,0,8,8ZM56,104h48v32H56Zm88,48h64a8,8,0,0,0,8-8V96a8,8,0,0,0-8-8H144a8,8,0,0,0-8,8v48A8,8,0,0,0,144,152Zm8-48h48v32H152Z" }));
});
i.displayName = "Regular";
export {
  i as Regular
};
