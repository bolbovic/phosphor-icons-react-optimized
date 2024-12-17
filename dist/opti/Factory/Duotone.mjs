var Z = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, H = Object.prototype.propertyIsEnumerable;
var h = (a, t, e) => t in a ? Z(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, c = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && h(a, e, t[e]);
  if (m)
    for (var e of m(t))
      H.call(t, e) && h(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var o in a)
    p.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && m)
    for (var o of m(a))
      t.indexOf(o) < 0 && H.call(a, o) && (e[o] = a[o]);
  return e;
};
import r, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const L = i((o, e) => {
  var l = o, { children: a } = l, t = n(l, ["children"]);
  return /* @__PURE__ */ r.createElement(s, c({ ref: e }, t), a, /* @__PURE__ */ r.createElement("path", { d: "M216,136v80H40V88l64,48V88l64,48Z", opacity: "0.2" }), /* @__PURE__ */ r.createElement("path", { d: "M116,176a8,8,0,0,1-8,8H80a8,8,0,0,1,0-16h28A8,8,0,0,1,116,176Zm60-8H148a8,8,0,0,0,0,16h28a8,8,0,0,0,0-16Zm64,48a8,8,0,0,1-8,8H24a8,8,0,0,1,0-16h8V88a8,8,0,0,1,12.8-6.4L96,120V88a8,8,0,0,1,12.8-6.4l38.74,29.05L159.1,29.74A16.08,16.08,0,0,1,174.94,16h18.12A16.08,16.08,0,0,1,208.9,29.74l15,105.13s.08.78.08,1.13v72h8A8,8,0,0,1,240,216Zm-77.86-94.4,8.53,6.4h36.11L193.06,32H174.94ZM48,208H208V144H168a8,8,0,0,1-4.8-1.6l-14.4-10.8,0,0L112,104v32a8,8,0,0,1-12.8,6.4L48,104Z" }));
});
L.displayName = "Duotone";
export {
  L as Duotone
};
