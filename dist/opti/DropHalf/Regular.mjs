var A = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var h = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, r, e) => r in a ? A(a, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[r] = e, V = (a, r) => {
  for (var e in r || (r = {}))
    h.call(r, e) && o(a, e, r[e]);
  if (m)
    for (var e of m(r))
      p.call(r, e) && o(a, e, r[e]);
  return a;
};
var c = (a, r) => {
  var e = {};
  for (var t in a)
    h.call(a, t) && r.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      r.indexOf(t) < 0 && p.call(a, t) && (e[t] = a[t]);
  return e;
};
import l, { forwardRef as M } from "react";
import f from "../../lib/OptiBase.mjs";
const i = M((t, e) => {
  var Z = t, { children: a } = Z, r = c(Z, ["children"]);
  return /* @__PURE__ */ l.createElement(f, V({ ref: e }, r), a, /* @__PURE__ */ l.createElement("path", { d: "M174,47.75a254.19,254.19,0,0,0-41.45-38.3,8,8,0,0,0-9.18,0A254.19,254.19,0,0,0,82,47.75C54.51,79.32,40,112.6,40,144a88,88,0,0,0,176,0C216,112.6,201.49,79.32,174,47.75ZM200,144a70.57,70.57,0,0,1-.46,8H136V136h63.64Q200,140,200,144ZM183.39,88H136V72h36.89A175.85,175.85,0,0,1,183.39,88ZM136,200h37.19A71.67,71.67,0,0,1,136,215.54Zm0-16V168h59.87a72,72,0,0,1-8,16Zm0-64V104h55.39a116.84,116.84,0,0,1,5.45,16Zm23.89-64H136V32.6A257.22,257.22,0,0,1,159.89,56ZM56,144c0-50,42.26-92.71,64-111.4V215.54A72.08,72.08,0,0,1,56,144Z" }));
});
i.displayName = "Regular";
export {
  i as Regular
};
