var n = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var A = Object.prototype.hasOwnProperty, H = Object.prototype.propertyIsEnumerable;
var p = (a, t, e) => t in a ? n(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, c = (a, t) => {
  for (var e in t || (t = {}))
    A.call(t, e) && p(a, e, t[e]);
  if (m)
    for (var e of m(t))
      H.call(t, e) && p(a, e, t[e]);
  return a;
};
var Z = (a, t) => {
  var e = {};
  for (var o in a)
    A.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && m)
    for (var o of m(a))
      t.indexOf(o) < 0 && H.call(a, o) && (e[o] = a[o]);
  return e;
};
import r, { forwardRef as i } from "react";
import l from "../../lib/OptiBase.mjs";
const d = i((o, e) => {
  var h = o, { children: a } = h, t = Z(h, ["children"]);
  return /* @__PURE__ */ r.createElement(l, c({ ref: e }, t), a, /* @__PURE__ */ r.createElement(
    "path",
    {
      d: "M112,80h0v72a20,20,0,0,0,0,40v32H96A72,72,0,0,1,96,80Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ r.createElement("path", { d: "M136,116a12,12,0,1,1,12,12A12,12,0,0,1,136,116Zm87.8-30.62A80.09,80.09,0,0,1,144,160H112a12,12,0,0,0,0,24h56a8,8,0,0,1,0,16H120v16h32a8,8,0,0,1,0,16H96A80,80,0,0,1,96,72H212a12,12,0,0,0,0-24H128a24,24,0,0,1-24-24,8,8,0,0,1,16,0,8,8,0,0,0,8,8h84a28,28,0,0,1,11.8,53.38Zm-173,111.91,33.22-23.73c0-.51,0-1,0-1.56a28,28,0,0,1,1-7.48L33,140.87a63.74,63.74,0,0,0,17.84,56.42Zm39-8.2L64.12,207.46A63.6,63.6,0,0,0,96,216h8V198.83A28.13,28.13,0,0,1,89.84,189.09ZM104,145.17V88H96a64.07,64.07,0,0,0-58.22,37.48l55.87,25.39A28,28,0,0,1,104,145.17ZM207.5,88H120v56h24A64.09,64.09,0,0,0,207.5,88Z" }));
});
d.displayName = "Duotone";
export {
  d as Duotone
};
