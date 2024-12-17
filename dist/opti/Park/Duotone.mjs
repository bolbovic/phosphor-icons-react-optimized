var n = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var H = (a, t, e) => t in a ? n(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, Z = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && H(a, e, t[e]);
  if (o)
    for (var e of o(t))
      l.call(t, e) && H(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var h in a)
    p.call(a, h) && t.indexOf(h) < 0 && (e[h] = a[h]);
  if (a != null && o)
    for (var h of o(a))
      t.indexOf(h) < 0 && l.call(a, h) && (e[h] = a[h]);
  return e;
};
import m, { forwardRef as i } from "react";
import v from "../../lib/OptiBase.mjs";
const d = i((h, e) => {
  var r = h, { children: a } = r, t = c(r, ["children"]);
  return /* @__PURE__ */ m.createElement(v, Z({ ref: e }, t), a, /* @__PURE__ */ m.createElement("path", { d: "M224,160H160L192,32Z", opacity: "0.2" }), /* @__PURE__ */ m.createElement("path", { d: "M232,192H200V168h24a8,8,0,0,0,7.76-9.94l-32-128a8,8,0,0,0-15.52,0l-32,128A8,8,0,0,0,160,168h24v24H120V176h8a8,8,0,0,0,0-16h-8V144h8a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16h8v16H40a8,8,0,0,0,0,16h8v16H24a8,8,0,0,0,0,16H232a8,8,0,0,0,0-16ZM192,65l21.75,87h-43.5ZM64,144h40v16H64Zm0,32h40v16H64Zm52-80A28,28,0,1,0,88,68,28,28,0,0,0,116,96Zm0-40a12,12,0,1,1-12,12A12,12,0,0,1,116,56Z" }));
});
d.displayName = "Duotone";
export {
  d as Duotone
};
