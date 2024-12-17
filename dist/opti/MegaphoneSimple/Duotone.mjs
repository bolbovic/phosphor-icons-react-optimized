var Z = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var V = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var p = (e, a, t) => a in e ? Z(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[a] = t, n = (e, a) => {
  for (var t in a || (a = {}))
    V.call(a, t) && p(e, t, a[t]);
  if (m)
    for (var t of m(a))
      c.call(a, t) && p(e, t, a[t]);
  return e;
};
var i = (e, a) => {
  var t = {};
  for (var o in e)
    V.call(e, o) && a.indexOf(o) < 0 && (t[o] = e[o]);
  if (e != null && m)
    for (var o of m(e))
      a.indexOf(o) < 0 && c.call(e, o) && (t[o] = e[o]);
  return t;
};
import r, { forwardRef as d } from "react";
import f from "../../lib/OptiBase.mjs";
const s = d((o, t) => {
  var l = o, { children: e } = l, a = i(l, ["children"]);
  return /* @__PURE__ */ r.createElement(f, n({ ref: t }, a), e, /* @__PURE__ */ r.createElement(
    "path",
    {
      d: "M144,69.09V170.91L50.24,199.67A8,8,0,0,1,40,192V48a8,8,0,0,1,10.24-7.67Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ r.createElement("path", { d: "M228.54,86.66l-176.06-54A16,16,0,0,0,32,48V192a16,16,0,0,0,16,16,16,16,0,0,0,4.52-.65L136,181.73V192a16,16,0,0,0,16,16h32a16,16,0,0,0,16-16v-29.9l28.54-8.75A16.09,16.09,0,0,0,240,138V102A16.09,16.09,0,0,0,228.54,86.66ZM136,165,48,192V48l88,27Zm48,27H152V176.82L184,167Zm40-54-.11,0L152,160.08V79.92l71.89,22,.11,0v36Z" }));
});
s.displayName = "Duotone";
export {
  s as Duotone
};
