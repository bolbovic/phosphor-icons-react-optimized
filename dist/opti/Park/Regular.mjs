var c = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var H = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var l = (a, h, e) => h in a ? c(a, h, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[h] = e, p = (a, h) => {
  for (var e in h || (h = {}))
    H.call(h, e) && l(a, e, h[e]);
  if (t)
    for (var e of t(h))
      o.call(h, e) && l(a, e, h[e]);
  return a;
};
var Z = (a, h) => {
  var e = {};
  for (var r in a)
    H.call(a, r) && h.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && t)
    for (var r of t(a))
      h.indexOf(r) < 0 && o.call(a, r) && (e[r] = a[r]);
  return e;
};
import v, { forwardRef as f } from "react";
import i from "../../lib/OptiBase.mjs";
const s = f((r, e) => {
  var m = r, { children: a } = m, h = Z(m, ["children"]);
  return /* @__PURE__ */ v.createElement(i, p({ ref: e }, h), a, /* @__PURE__ */ v.createElement("path", { d: "M232,192H200V168h24a8,8,0,0,0,7.76-9.94l-32-128a8,8,0,0,0-15.52,0l-32,128A8,8,0,0,0,160,168h24v24H120V176h8a8,8,0,0,0,0-16h-8V144h8a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16h8v16H40a8,8,0,0,0,0,16h8v16H24a8,8,0,0,0,0,16H232a8,8,0,0,0,0-16ZM192,65l21.75,87h-43.5ZM64,144h40v16H64Zm0,32h40v16H64Zm52-80A28,28,0,1,0,88,68,28,28,0,0,0,116,96Zm0-40a12,12,0,1,1-12,12A12,12,0,0,1,116,56Z" }));
});
s.displayName = "Regular";
export {
  s as Regular
};
