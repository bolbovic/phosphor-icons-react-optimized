var i = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var s = (a, r, e) => r in a ? i(a, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[r] = e, p = (a, r) => {
  for (var e in r || (r = {}))
    c.call(r, e) && s(a, e, r[e]);
  if (m)
    for (var e of m(r))
      o.call(r, e) && s(a, e, r[e]);
  return a;
};
var Z = (a, r) => {
  var e = {};
  for (var t in a)
    c.call(a, t) && r.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      r.indexOf(t) < 0 && o.call(a, t) && (e[t] = a[t]);
  return e;
};
import f, { forwardRef as R } from "react";
import S from "../../lib/OptiBase.mjs";
const d = R((t, e) => {
  var l = t, { children: a } = l, r = Z(l, ["children"]);
  return /* @__PURE__ */ f.createElement(S, p({ ref: e }, r), a, /* @__PURE__ */ f.createElement("path", { d: "M94,24C71.63,24,56,43.74,56,72s15.63,48,38,48,38-19.74,38-48S116.37,24,94,24Zm0,80c-17.37,0-22-20.11-22-32s4.63-32,22-32,22,20.11,22,32S111.37,104,94,104Zm72,32c-22.37,0-38,19.74-38,48s15.63,48,38,48,38-19.74,38-48S188.37,136,166,136Zm0,80c-17.37,0-22-20.11-22-32s4.63-32,22-32,22,20.11,22,32S183.37,216,166,216ZM145,49.22a8,8,0,0,1,3.11-10.88l24-13.33A8,8,0,0,1,184,32v80a8,8,0,0,1-16,0V45.6l-12.12,6.73A8,8,0,0,1,145,49.22ZM104,144v80a8,8,0,0,1-16,0V157.6l-12.12,6.73a8,8,0,0,1-7.76-14l24-13.33A8,8,0,0,1,104,144Z" }));
});
d.displayName = "Regular";
export {
  d as Regular
};
