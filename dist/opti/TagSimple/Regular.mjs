var A = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var o = (e, r, a) => r in e ? A(e, r, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[r] = a, f = (e, r) => {
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
import s, { forwardRef as H } from "react";
import R from "../../lib/OptiBase.mjs";
const d = H((t, a) => {
  var m = t, { children: e } = m, r = i(m, ["children"]);
  return /* @__PURE__ */ s.createElement(R, f({ ref: a }, r), e, /* @__PURE__ */ s.createElement("path", { d: "M246.66,123.56,201,55.13A15.94,15.94,0,0,0,187.72,48H40A16,16,0,0,0,24,64V192a16,16,0,0,0,16,16H187.72A16,16,0,0,0,201,200.88l45.63-68.44A8,8,0,0,0,246.66,123.56ZM187.72,192H40V64H187.72l42.66,64Z" }));
});
d.displayName = "Regular";
export {
  d as Regular
};
