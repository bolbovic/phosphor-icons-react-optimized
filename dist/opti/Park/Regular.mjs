var s = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var H = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var l = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    H.call(t, e) && l(a, e, t[e]);
  if (r)
    for (var e of r(t))
      o.call(t, e) && l(a, e, t[e]);
  return a;
};
var Z = (a, t) => {
  var e = {};
  for (var h in a)
    H.call(a, h) && t.indexOf(h) < 0 && (e[h] = a[h]);
  if (a != null && r)
    for (var h of r(a))
      t.indexOf(h) < 0 && o.call(a, h) && (e[h] = a[h]);
  return e;
};
import f, { forwardRef as v } from "react";
import c from "../../lib/OptiBase.mjs";
const d = v((h, e) => {
  var m = h, { children: a } = m, t = Z(m, ["children"]);
  return /* @__PURE__ */ f.createElement(c, p({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M232,192H200V168h24a8,8,0,0,0,7.76-9.94l-32-128a8,8,0,0,0-15.52,0l-32,128A8,8,0,0,0,160,168h24v24H120V176h8a8,8,0,0,0,0-16h-8V144h8a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16h8v16H40a8,8,0,0,0,0,16h8v16H24a8,8,0,0,0,0,16H232a8,8,0,0,0,0-16ZM192,65l21.75,87h-43.5ZM64,144h40v16H64Zm0,32h40v16H64Zm52-80A28,28,0,1,0,88,68,28,28,0,0,0,116,96Zm0-40a12,12,0,1,1-12,12A12,12,0,0,1,116,56Z" }));
});
d.displayName = "Regular";
export {
  d as Regular,
  d as default
};
