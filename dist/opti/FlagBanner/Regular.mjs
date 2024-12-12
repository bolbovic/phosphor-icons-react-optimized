var R = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var o = (e, r, a) => r in e ? R(e, r, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[r] = a, f = (e, r) => {
  for (var a in r || (r = {}))
    p.call(r, a) && o(e, a, r[a]);
  if (l)
    for (var a of l(r))
      c.call(r, a) && o(e, a, r[a]);
  return e;
};
var i = (e, r) => {
  var a = {};
  for (var t in e)
    p.call(e, t) && r.indexOf(t) < 0 && (a[t] = e[t]);
  if (e != null && l)
    for (var t of l(e))
      r.indexOf(t) < 0 && c.call(e, t) && (a[t] = e[t]);
  return a;
};
import s, { forwardRef as d } from "react";
import n from "../../lib/OptiBase.mjs";
const A = d((t, a) => {
  var m = t, { children: e } = m, r = i(m, ["children"]);
  return /* @__PURE__ */ s.createElement(n, f({ ref: a }, r), e, /* @__PURE__ */ s.createElement("path", { d: "M238.76,51.73A8,8,0,0,0,232,48H40a8,8,0,0,0-5.66,13.66L76.69,104,34.34,146.34A8,8,0,0,0,40,160H173.62l-28.84,60.56a8,8,0,1,0,14.44,6.88l80-168A8,8,0,0,0,238.76,51.73ZM181.23,144H59.31l34.35-34.34a8,8,0,0,0,0-11.32L59.31,64h160Z" }));
});
A.displayName = "Regular";
export {
  A as Regular
};
