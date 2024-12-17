var M = Object.defineProperty;
var Z = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var r = (e, t, a) => t in e ? M(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, c = (e, t) => {
  for (var a in t || (t = {}))
    p.call(t, a) && r(e, a, t[a]);
  if (Z)
    for (var a of Z(t))
      h.call(t, a) && r(e, a, t[a]);
  return e;
};
var n = (e, t) => {
  var a = {};
  for (var m in e)
    p.call(e, m) && t.indexOf(m) < 0 && (a[m] = e[m]);
  if (e != null && Z)
    for (var m of Z(e))
      t.indexOf(m) < 0 && h.call(e, m) && (a[m] = e[m]);
  return a;
};
import o, { forwardRef as i } from "react";
import l from "../../lib/OptiBase.mjs";
const d = i((m, a) => {
  var A = m, { children: e } = A, t = n(A, ["children"]);
  return /* @__PURE__ */ o.createElement(l, c({ ref: a }, t), e, /* @__PURE__ */ o.createElement(
    "path",
    {
      d: "M60,195.88h0l.12.12ZM60,60h0a96.43,96.43,0,0,0,0,135.88,96.09,96.09,0,0,0,28-67.94A96.09,96.09,0,0,0,60,60Zm136,0h0a96.43,96.43,0,0,0,0,135.88A96.43,96.43,0,0,0,196,60Zm0,135.88.12.12-.12-.12Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ o.createElement("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM40.37,136H79.63A87.2,87.2,0,0,1,60,183.83,87.54,87.54,0,0,1,40.37,136ZM136,120V40.37a87.59,87.59,0,0,1,48.68,20.37A103.06,103.06,0,0,0,160.3,120Zm-16,0H95.7A103.06,103.06,0,0,0,71.32,60.74,87.59,87.59,0,0,1,120,40.37Zm-40.37,0H40.37A87.54,87.54,0,0,1,60,72.17,87.2,87.2,0,0,1,79.63,120ZM95.7,136H120v79.63a87.59,87.59,0,0,1-48.68-20.37A103.09,103.09,0,0,0,95.7,136Zm40.3,0h24.3a103.09,103.09,0,0,0,24.38,59.26A87.59,87.59,0,0,1,136,215.63Zm40.37,0h39.26A87.54,87.54,0,0,1,196,183.83,87.2,87.2,0,0,1,176.37,136Zm0-16A87.2,87.2,0,0,1,196,72.17,87.54,87.54,0,0,1,215.63,120Z" }));
});
d.displayName = "Duotone";
export {
  d as Duotone
};
