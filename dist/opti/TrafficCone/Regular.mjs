var s = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var l = (e, r, a) => r in e ? s(e, r, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[r] = a, c = (e, r) => {
  for (var a in r || (r = {}))
    o.call(r, a) && l(e, a, r[a]);
  if (m)
    for (var a of m(r))
      p.call(r, a) && l(e, a, r[a]);
  return e;
};
var f = (e, r) => {
  var a = {};
  for (var t in e)
    o.call(e, t) && r.indexOf(t) < 0 && (a[t] = e[t]);
  if (e != null && m)
    for (var t of m(e))
      r.indexOf(t) < 0 && p.call(e, t) && (a[t] = e[t]);
  return a;
};
import i, { forwardRef as R } from "react";
import Z from "../../lib/OptiBase.mjs";
const d = R((t, a) => {
  var H = t, { children: e } = H, r = f(H, ["children"]);
  return /* @__PURE__ */ i.createElement(Z, c({ ref: a }, r), e, /* @__PURE__ */ i.createElement("path", { d: "M232,208H213.69L153.42,34.75A16,16,0,0,0,138.31,24H117.69a16,16,0,0,0-15.11,10.74L42.31,208H24a8,8,0,0,0,0,16H232a8,8,0,0,0,0-16ZM95.43,104h65.14l16.7,48H78.73Zm22.26-64h20.62L155,88H101ZM73.17,168H182.83l13.92,40H59.25Z" }));
});
d.displayName = "Regular";
export {
  d as Regular
};
