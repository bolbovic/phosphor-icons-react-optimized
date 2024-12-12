var h = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, f = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? h(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, s = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && o(a, e, t[e]);
  if (l)
    for (var e of l(t))
      f.call(t, e) && o(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var r in a)
    p.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && l)
    for (var r of l(a))
      t.indexOf(r) < 0 && f.call(a, r) && (e[r] = a[r]);
  return e;
};
import d, { forwardRef as i } from "react";
import H from "../../lib/OptiBase.mjs";
const R = i((r, e) => {
  var m = r, { children: a } = m, t = c(m, ["children"]);
  return /* @__PURE__ */ d.createElement(H, s({ ref: e }, t), a, /* @__PURE__ */ d.createElement("path", { d: "M53.92,34.62A8,8,0,0,0,40,40h0A16,16,0,0,0,24,56V184a16,16,0,0,0,16,16h60.43l13.68,23.94a16,16,0,0,0,27.78,0L155.57,200h27.07l19.44,21.38a8,8,0,1,0,11.84-10.76Zm97,149.38a8,8,0,0,0-7,4l-16,28-16-28a8,8,0,0,0-7-4H40V56H51.73L168.1,184ZM232,56V186a8,8,0,0,1-16,0V56H98.52a8,8,0,1,1,0-16H216A16,16,0,0,1,232,56Z" }));
});
R.displayName = "Regular";
export {
  R as Regular,
  R as default
};
