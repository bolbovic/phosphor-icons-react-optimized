var d = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var H = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? d(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, c = (a, t) => {
  for (var e in t || (t = {}))
    H.call(t, e) && o(a, e, t[e]);
  if (l)
    for (var e of l(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var f = (a, t) => {
  var e = {};
  for (var r in a)
    H.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && l)
    for (var r of l(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import s, { forwardRef as i } from "react";
import R from "../../lib/OptiBase.mjs";
const V = i((r, e) => {
  var m = r, { children: a } = m, t = f(m, ["children"]);
  return /* @__PURE__ */ s.createElement(R, c({ ref: e }, t), a, /* @__PURE__ */ s.createElement("path", { d: "M240,112a56.06,56.06,0,0,0-56-56c-1.77,0-3.54.1-5.29.26a56,56,0,0,0-101.42,0C75.54,56.1,73.77,56,72,56A56,56,0,0,0,48,162.59V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V162.59A56.09,56.09,0,0,0,240,112Zm-48,96H64V167.42a55.49,55.49,0,0,0,8,.58H184a55.49,55.49,0,0,0,8-.58Zm-8-56H170.25l5.51-22.06a8,8,0,0,0-15.52-3.88L153.75,152H136V128a8,8,0,0,0-16,0v24H102.25l-6.49-25.94a8,8,0,1,0-15.52,3.88L85.75,152H72a40,40,0,0,1,0-80l.58,0A55.21,55.21,0,0,0,72,80a8,8,0,0,0,16,0,40,40,0,0,1,80,0,8,8,0,0,0,16,0,55.21,55.21,0,0,0-.58-8l.58,0a40,40,0,0,1,0,80Z" }));
});
V.displayName = "Regular";
export {
  V as Regular,
  V as default
};
