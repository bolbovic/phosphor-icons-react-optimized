var f = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var r = (a, m, e) => m in a ? f(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, p = (a, m) => {
  for (var e in m || (m = {}))
    s.call(m, e) && r(a, e, m[e]);
  if (l)
    for (var e of l(m))
      c.call(m, e) && r(a, e, m[e]);
  return a;
};
var Z = (a, m) => {
  var e = {};
  for (var t in a)
    s.call(a, t) && m.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && l)
    for (var t of l(a))
      m.indexOf(t) < 0 && c.call(a, t) && (e[t] = a[t]);
  return e;
};
import d, { forwardRef as i } from "react";
import S from "../../lib/OptiBase.mjs";
const n = i((t, e) => {
  var o = t, { children: a } = o, m = Z(o, ["children"]);
  return /* @__PURE__ */ d.createElement(S, p({ ref: e }, m), a, /* @__PURE__ */ d.createElement("path", { d: "M92,24C68.45,24,52,43.74,52,72s16.45,48,40,48,40-19.74,40-48S115.55,24,92,24Zm0,72C76.45,96,76,74.46,76,72s.45-24,16-24,16,21.54,16,24S107.55,96,92,96Zm53.27-42.63a12,12,0,0,1,5.36-16.1l24-12A12,12,0,0,1,192,36v72a12,12,0,0,1-24,0V55.42l-6.63,3.31A12,12,0,0,1,145.27,53.37ZM164,136c-23.55,0-40,19.74-40,48s16.45,48,40,48,40-19.74,40-48S187.55,136,164,136Zm0,72c-15.55,0-16-21.54-16-24s.45-24,16-24,16,21.54,16,24S179.55,208,164,208Zm-60-60v72a12,12,0,0,1-24,0V167.42l-6.63,3.31a12,12,0,1,1-10.74-21.46l24-12A12,12,0,0,1,104,148Z" }));
});
n.displayName = "Bold";
export {
  n as Bold
};
