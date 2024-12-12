var s = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, Z = (a, t) => {
  for (var e in t || (t = {}))
    c.call(t, e) && o(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var f = (a, t) => {
  var e = {};
  for (var r in a)
    c.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import h, { forwardRef as H } from "react";
import d from "../../lib/OptiBase.mjs";
const i = H((r, e) => {
  var l = r, { children: a } = l, t = f(l, ["children"]);
  return /* @__PURE__ */ h.createElement(d, Z({ ref: e }, t), a, /* @__PURE__ */ h.createElement("path", { d: "M176,104a8,8,0,0,1-8,8H88a8,8,0,0,1,0-16h80A8,8,0,0,1,176,104Zm-8,24H88a8,8,0,0,0,0,16h80a8,8,0,0,0,0-16Zm88-24v24a32,32,0,0,1-32,32h-5.19c-7.19,15.8-21.79,29.43-43.23,40.16a191.16,191.16,0,0,1-46.15,15.71,7.93,7.93,0,0,1-2.86,0,191.16,191.16,0,0,1-46.15-15.71C59,189.43,44.38,175.8,37.19,160H32A32,32,0,0,1,0,128V104A32,32,0,0,1,32,72h.85a16,16,0,0,1,9.68-10l80-29.09a16.06,16.06,0,0,1,10.94,0l80,29.09a16,16,0,0,1,9.68,10H224A32,32,0,0,1,256,104ZM32.55,144a58.74,58.74,0,0,1-.55-8V88a16,16,0,0,0-16,16v24a16,16,0,0,0,16,16ZM208,136V77.09L128,48,48,77.09V136c0,45,69.09,61.52,80,63.84C138.89,197.52,208,181,208,136Zm32-32a16,16,0,0,0-16-16v48a58.74,58.74,0,0,1-.55,8H224a16,16,0,0,0,16-16Z" }));
});
i.displayName = "Regular";
export {
  i as Regular,
  i as default
};
