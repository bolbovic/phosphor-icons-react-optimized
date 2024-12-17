var f = Object.defineProperty;
var a = Object.getOwnPropertySymbols;
var m = Object.prototype.hasOwnProperty, C = Object.prototype.propertyIsEnumerable;
var r = (e, c, t) => c in e ? f(e, c, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[c] = t, l = (e, c) => {
  for (var t in c || (c = {}))
    m.call(c, t) && r(e, t, c[t]);
  if (a)
    for (var t of a(c))
      C.call(c, t) && r(e, t, c[t]);
  return e;
};
var p = (e, c) => {
  var t = {};
  for (var s in e)
    m.call(e, s) && c.indexOf(s) < 0 && (t[s] = e[s]);
  if (e != null && a)
    for (var s of a(e))
      c.indexOf(s) < 0 && C.call(e, s) && (t[s] = e[s]);
  return t;
};
import d, { forwardRef as i } from "react";
import V from "../../lib/OptiBase.mjs";
const n = i((s, t) => {
  var o = s, { children: e } = o, c = p(o, ["children"]);
  return /* @__PURE__ */ d.createElement(V, l({ ref: t }, c), e, /* @__PURE__ */ d.createElement("path", { d: "M179.14,24.08C165.28,16.29,147.12,12,128,12S90.72,16.29,76.86,24.08C60.83,33.1,52,45.86,52,60V196c0,14.14,8.83,26.9,24.86,35.92C90.72,239.71,108.88,244,128,244s37.28-4.29,51.14-12.08c16-9,24.86-21.78,24.86-35.92V60C204,45.86,195.17,33.1,179.14,24.08ZM88.63,45c10.17-5.72,24.52-9,39.37-9s29.2,3.28,39.37,9c8,4.52,12.63,10,12.63,15s-4.6,10.48-12.63,15c-10.17,5.72-24.52,9-39.37,9s-29.2-3.28-39.37-9C80.6,70.48,76,65,76,60S80.6,49.52,88.63,45Zm78.74,166c-10.17,5.72-24.52,9-39.37,9s-29.2-3.28-39.37-9C80.6,206.48,76,201,76,196V95.4l.86.52C90.72,103.71,108.88,108,128,108s37.28-4.29,51.14-12.08l.86-.52V196C180,201,175.4,206.48,167.37,211Z" }));
});
n.displayName = "Bold";
export {
  n as Bold
};
