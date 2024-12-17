var i = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var p = (a, t, e) => t in a ? i(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, Z = (a, t) => {
  for (var e in t || (t = {}))
    d.call(t, e) && p(a, e, t[e]);
  if (o)
    for (var e of o(t))
      l.call(t, e) && p(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var m in a)
    d.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && o)
    for (var m of o(a))
      t.indexOf(m) < 0 && l.call(a, m) && (e[m] = a[m]);
  return e;
};
import f, { forwardRef as s } from "react";
import A from "../../lib/OptiBase.mjs";
const H = s((m, e) => {
  var r = m, { children: a } = r, t = c(r, ["children"]);
  return /* @__PURE__ */ f.createElement(A, Z({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M208,36H48A20,20,0,0,0,28,56V200a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V56A20,20,0,0,0,208,36Zm-4,24v56H52V60ZM52,196V140H204v56ZM160,88a16,16,0,1,1,16,16A16,16,0,0,1,160,88Zm32,80a16,16,0,1,1-16-16A16,16,0,0,1,192,168Z" }));
});
H.displayName = "Bold";
export {
  H as Bold
};
