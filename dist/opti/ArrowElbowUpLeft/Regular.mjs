var i = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var m = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var s = (a, l, e) => l in a ? i(a, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[l] = e, p = (a, l) => {
  for (var e in l || (l = {}))
    m.call(l, e) && s(a, e, l[e]);
  if (r)
    for (var e of r(l))
      o.call(l, e) && s(a, e, l[e]);
  return a;
};
var f = (a, l) => {
  var e = {};
  for (var t in a)
    m.call(a, t) && l.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && r)
    for (var t of r(a))
      l.indexOf(t) < 0 && o.call(a, t) && (e[t] = a[t]);
  return e;
};
import d, { forwardRef as R } from "react";
import n from "../../lib/OptiBase.mjs";
const u = R((t, e) => {
  var c = t, { children: a } = c, l = f(c, ["children"]);
  return /* @__PURE__ */ d.createElement(n, p({ ref: e }, l), a, /* @__PURE__ */ d.createElement("path", { d: "M200,80V224a8,8,0,0,1-16,0V88H67.31l34.35,34.34a8,8,0,0,1-11.32,11.32l-48-48-.06-.07c-.16-.16-.32-.34-.47-.52l-.23-.31a3.71,3.71,0,0,1-.23-.32l-.23-.37a2.91,2.91,0,0,1-.17-.3c-.07-.12-.13-.25-.19-.38s-.1-.21-.15-.33-.09-.25-.14-.37l-.13-.36-.09-.39c0-.13-.07-.25-.1-.37s0-.31-.06-.46,0-.21-.05-.32a8.34,8.34,0,0,1,0-1.58c0-.11,0-.21.05-.32s0-.31.06-.46.06-.24.1-.37l.09-.39.13-.36c.05-.12.09-.25.14-.37s.1-.22.15-.33.12-.26.19-.38a2.91,2.91,0,0,1,.17-.3l.23-.37a3.71,3.71,0,0,1,.23-.32l.23-.31c.15-.18.31-.36.47-.52l.06-.07,48-48a8,8,0,0,1,11.32,11.32L67.31,72H192A8,8,0,0,1,200,80Z" }));
});
u.displayName = "Regular";
export {
  u as Regular,
  u as default
};
