var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, r, e) => r in a ? f(a, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[r] = e, Z = (a, r) => {
  for (var e in r || (r = {}))
    c.call(r, e) && o(a, e, r[e]);
  if (m)
    for (var e of m(r))
      p.call(r, e) && o(a, e, r[e]);
  return a;
};
var h = (a, r) => {
  var e = {};
  for (var t in a)
    c.call(a, t) && r.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      r.indexOf(t) < 0 && p.call(a, t) && (e[t] = a[t]);
  return e;
};
import H, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const A = i((t, e) => {
  var l = t, { children: a } = l, r = h(l, ["children"]);
  return /* @__PURE__ */ H.createElement(s, Z({ ref: e }, r), a, /* @__PURE__ */ H.createElement("path", { d: "M176,104a8,8,0,0,1-8,8H88a8,8,0,0,1,0-16h80A8,8,0,0,1,176,104Zm-8,24H88a8,8,0,0,0,0,16h80a8,8,0,0,0,0-16Zm88-24v24a32,32,0,0,1-32,32h-5.19c-7.19,15.8-21.79,29.43-43.23,40.16a191.16,191.16,0,0,1-46.15,15.71,7.93,7.93,0,0,1-2.86,0,191.16,191.16,0,0,1-46.15-15.71C59,189.43,44.38,175.8,37.19,160H32A32,32,0,0,1,0,128V104A32,32,0,0,1,32,72h.85a16,16,0,0,1,9.68-10l80-29.09a16.06,16.06,0,0,1,10.94,0l80,29.09a16,16,0,0,1,9.68,10H224A32,32,0,0,1,256,104ZM32.55,144a58.74,58.74,0,0,1-.55-8V88a16,16,0,0,0-16,16v24a16,16,0,0,0,16,16ZM208,136V77.09L128,48,48,77.09V136c0,45,69.09,61.52,80,63.84C138.89,197.52,208,181,208,136Zm32-32a16,16,0,0,0-16-16v48a58.74,58.74,0,0,1-.55,8H224a16,16,0,0,0,16-16Z" }));
});
A.displayName = "Regular";
export {
  A as Regular
};