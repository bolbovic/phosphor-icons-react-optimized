var c = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var l = (a, H, e) => H in a ? c(a, H, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[H] = e, V = (a, H) => {
  for (var e in H || (H = {}))
    o.call(H, e) && l(a, e, H[e]);
  if (r)
    for (var e of r(H))
      p.call(H, e) && l(a, e, H[e]);
  return a;
};
var f = (a, H) => {
  var e = {};
  for (var t in a)
    o.call(a, t) && H.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && r)
    for (var t of r(a))
      H.indexOf(t) < 0 && p.call(a, t) && (e[t] = a[t]);
  return e;
};
import s, { forwardRef as d } from "react";
import h from "../../lib/OptiBase.mjs";
const i = d((t, e) => {
  var m = t, { children: a } = m, H = f(m, ["children"]);
  return /* @__PURE__ */ s.createElement(h, V({ ref: e }, H), a, /* @__PURE__ */ s.createElement("path", { d: "M240,80H108.94L87.16,36.42A8,8,0,0,0,80,32H48a8,8,0,0,0-8,8V80H24a8,8,0,0,0,0,16H40V208H24a8,8,0,0,0,0,16H128a8,8,0,0,0,0-16H112V96h96v88H192v-8a8,8,0,0,0-16,0v8a16,16,0,0,0,16,16h16a16,16,0,0,0,16-16V96h16a8,8,0,0,0,0-16ZM56,48H75.06l16,32H56Zm0,160V160H96v48Zm40-64H56V96H96Z" }));
});
i.displayName = "Regular";
export {
  i as Regular,
  i as default
};
