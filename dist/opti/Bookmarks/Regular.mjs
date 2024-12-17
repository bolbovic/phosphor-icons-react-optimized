var i = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var V = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (e, r, a) => r in e ? i(e, r, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[r] = a, A = (e, r) => {
  for (var a in r || (r = {}))
    V.call(r, a) && o(e, a, r[a]);
  if (l)
    for (var a of l(r))
      p.call(r, a) && o(e, a, r[a]);
  return e;
};
var c = (e, r) => {
  var a = {};
  for (var t in e)
    V.call(e, t) && r.indexOf(t) < 0 && (a[t] = e[t]);
  if (e != null && l)
    for (var t of l(e))
      r.indexOf(t) < 0 && p.call(e, t) && (a[t] = e[t]);
  return a;
};
import f, { forwardRef as s } from "react";
import R from "../../lib/OptiBase.mjs";
const d = s((t, a) => {
  var m = t, { children: e } = m, r = c(m, ["children"]);
  return /* @__PURE__ */ f.createElement(R, A({ ref: a }, r), e, /* @__PURE__ */ f.createElement("path", { d: "M192,24H96A16,16,0,0,0,80,40V56H64A16,16,0,0,0,48,72V224a8,8,0,0,0,12.65,6.51L112,193.83l51.36,36.68A8,8,0,0,0,176,224V184.69l19.35,13.82A8,8,0,0,0,208,192V40A16,16,0,0,0,192,24ZM160,208.46l-43.36-31a8,8,0,0,0-9.3,0L64,208.45V72h96Zm32-32L176,165V72a16,16,0,0,0-16-16H96V40h96Z" }));
});
d.displayName = "Regular";
export {
  d as Regular
};
