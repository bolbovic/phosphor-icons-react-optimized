var Z = Object.defineProperty;
var H = Object.getOwnPropertySymbols;
var m = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var h = (a, t, e) => t in a ? Z(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, c = (a, t) => {
  for (var e in t || (t = {}))
    m.call(t, e) && h(a, e, t[e]);
  if (H)
    for (var e of H(t))
      p.call(t, e) && h(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var o in a)
    m.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && H)
    for (var o of H(a))
      t.indexOf(o) < 0 && p.call(a, o) && (e[o] = a[o]);
  return e;
};
import r, { forwardRef as i } from "react";
import v from "../../lib/OptiBase.mjs";
const M = i((o, e) => {
  var V = o, { children: a } = V, t = n(V, ["children"]);
  return /* @__PURE__ */ r.createElement(v, c({ ref: e }, t), a, /* @__PURE__ */ r.createElement(
    "path",
    {
      d: "M88,176v32a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V176a8,8,0,0,1,8-8H80A8,8,0,0,1,88,176ZM144,32H112a8,8,0,0,0-8,8V72a8,8,0,0,0,8,8h32a8,8,0,0,0,8-8V40A8,8,0,0,0,144,32Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ r.createElement("path", { d: "M96,54V40a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V72a16,16,0,0,1-16,16H127.61a8,8,0,0,1,0-16H144V40H112V54a8,8,0,0,1-16,0ZM213.92,210.62a8,8,0,1,1-11.84,10.76L117.19,128H72v32h8a16,16,0,0,1,16,16v32a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V176a16,16,0,0,1,16-16h8V128H24a8,8,0,0,1,0-16h78.64L42.08,45.38A8,8,0,1,1,53.92,34.62ZM80,176H48v32H80Zm152-64H164a8,8,0,0,0,0,16h20v22.83a8,8,0,1,0,16,0V128h32a8,8,0,0,0,0-16Z" }));
});
M.displayName = "Duotone";
export {
  M as Duotone
};
