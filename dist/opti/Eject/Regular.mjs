var s = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var H = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var p = (a, r, e) => r in a ? s(a, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[r] = e, c = (a, r) => {
  for (var e in r || (r = {}))
    H.call(r, e) && p(a, e, r[e]);
  if (m)
    for (var e of m(r))
      l.call(r, e) && p(a, e, r[e]);
  return a;
};
var f = (a, r) => {
  var e = {};
  for (var t in a)
    H.call(a, t) && r.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      r.indexOf(t) < 0 && l.call(a, t) && (e[t] = a[t]);
  return e;
};
import i, { forwardRef as R } from "react";
import Z from "../../lib/OptiBase.mjs";
const d = R((t, e) => {
  var o = t, { children: a } = o, r = f(o, ["children"]);
  return /* @__PURE__ */ i.createElement(Z, c({ ref: e }, r), a, /* @__PURE__ */ i.createElement("path", { d: "M208,152H48a16,16,0,0,0-16,16v24a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V168A16,16,0,0,0,208,152Zm0,40H48V168H208ZM48.24,136H207.76a16.18,16.18,0,0,0,14.93-9.76,15.59,15.59,0,0,0-3.1-17.12L145.86,31.61a24.76,24.76,0,0,0-35.72,0L36.41,109.12h0a15.59,15.59,0,0,0-3.1,17.12A16.18,16.18,0,0,0,48.24,136Zm73.49-93.36a8.77,8.77,0,0,1,12.54,0L207.85,120H48.14Z" }));
});
d.displayName = "Regular";
export {
  d as Regular
};
