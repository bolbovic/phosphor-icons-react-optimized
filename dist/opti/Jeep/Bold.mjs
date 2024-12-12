var d = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var V = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var r = (a, H, e) => H in a ? d(a, H, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[H] = e, l = (a, H) => {
  for (var e in H || (H = {}))
    V.call(H, e) && r(a, e, H[e]);
  if (m)
    for (var e of m(H))
      h.call(H, e) && r(a, e, H[e]);
  return a;
};
var p = (a, H) => {
  var e = {};
  for (var t in a)
    V.call(a, t) && H.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      H.indexOf(t) < 0 && h.call(a, t) && (e[t] = a[t]);
  return e;
};
import v, { forwardRef as Z } from "react";
import c from "../../lib/OptiBase.mjs";
const f = Z((t, e) => {
  var o = t, { children: a } = o, H = p(o, ["children"]);
  return /* @__PURE__ */ v.createElement(c, l({ ref: e }, H), a, /* @__PURE__ */ v.createElement("path", { d: "M240,84h-6.3l-8.61-40.19A20.11,20.11,0,0,0,205.53,28H50.47A20.11,20.11,0,0,0,30.91,43.81L22.3,84H16a12,12,0,0,0,0,24h4v92a20,20,0,0,0,20,20H68a20,20,0,0,0,20-20V180h80v20a20,20,0,0,0,20,20h28a20,20,0,0,0,20-20V108h4a12,12,0,0,0,0-24ZM53.7,52H202.3l6.86,32H46.84ZM64,196H44V180H64Zm128,0V180h20v16Zm20-40H180V132a12,12,0,0,0-24,0v24H140V132a12,12,0,0,0-24,0v24H100V132a12,12,0,0,0-24,0v24H44V108H212Z" }));
});
f.displayName = "Bold";
export {
  f as Bold
};
