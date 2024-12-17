var h = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, H, e) => H in a ? h(a, H, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[H] = e, V = (a, H) => {
  for (var e in H || (H = {}))
    l.call(H, e) && o(a, e, H[e]);
  if (t)
    for (var e of t(H))
      p.call(H, e) && o(a, e, H[e]);
  return a;
};
var c = (a, H) => {
  var e = {};
  for (var r in a)
    l.call(a, r) && H.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && t)
    for (var r of t(a))
      H.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import f, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const v = i((r, e) => {
  var m = r, { children: a } = m, H = c(m, ["children"]);
  return /* @__PURE__ */ f.createElement(s, V({ ref: e }, H), a, /* @__PURE__ */ f.createElement("path", { d: "M240,80H108.94L87.16,36.42A8,8,0,0,0,80,32H48a8,8,0,0,0-8,8V80H24a8,8,0,0,0,0,16H40V208H24a8,8,0,0,0,0,16H128a8,8,0,0,0,0-16H112V96h96v88H192v-8a8,8,0,0,0-16,0v8a16,16,0,0,0,16,16h16a16,16,0,0,0,16-16V96h16a8,8,0,0,0,0-16ZM56,48H75.06l16,32H56Zm0,160V160H96v48Zm40-64H56V96H96Z" }));
});
v.displayName = "Regular";
export {
  v as Regular
};
