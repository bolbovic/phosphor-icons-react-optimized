var s = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, H = Object.prototype.propertyIsEnumerable;
var p = (a, r, e) => r in a ? s(a, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[r] = e, c = (a, r) => {
  for (var e in r || (r = {}))
    l.call(r, e) && p(a, e, r[e]);
  if (m)
    for (var e of m(r))
      H.call(r, e) && p(a, e, r[e]);
  return a;
};
var f = (a, r) => {
  var e = {};
  for (var t in a)
    l.call(a, t) && r.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      r.indexOf(t) < 0 && H.call(a, t) && (e[t] = a[t]);
  return e;
};
import i, { forwardRef as R } from "react";
import V from "../../lib/OptiBase.mjs";
const d = R((t, e) => {
  var o = t, { children: a } = o, r = f(o, ["children"]);
  return /* @__PURE__ */ i.createElement(V, c({ ref: e }, r), a, /* @__PURE__ */ i.createElement("path", { d: "M48,48V208H80a8,8,0,0,1,0,16H40a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8H80a8,8,0,0,1,0,16ZM216,32H176a8,8,0,0,0,0,16h32V208H176a8,8,0,0,0,0,16h40a8,8,0,0,0,8-8V40A8,8,0,0,0,216,32Z" }));
});
d.displayName = "Regular";
export {
  d as Regular
};
