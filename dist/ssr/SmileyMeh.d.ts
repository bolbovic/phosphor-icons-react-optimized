import type { Icon } from "../lib/types";
/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMjRBMTA0LDEwNCwwLDEsMCwyMzIsMTI4LDEwNC4xMSwxMDQuMTEsMCwwLDAsMTI4LDI0Wm0wLDE5MmE4OCw4OCwwLDEsMSw4OC04OEE4OC4xLDg4LjEsMCwwLDEsMTI4LDIxNlptNDgtNTZhOCw4LDAsMCwxLTgsOEg4OGE4LDgsMCwwLDEsMC0xNmg4MEE4LDgsMCwwLDEsMTc2LDE2MFpNODAsMTA4YTEyLDEyLDAsMSwxLDEyLDEyQTEyLDEyLDAsMCwxLDgwLDEwOFptOTYsMGExMiwxMiwwLDEsMS0xMi0xMkExMiwxMiwwLDAsMSwxNzYsMTA4WiIvPjwvc3ZnPg==)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMjhBMTAwLDEwMCwwLDEsMCwyMjgsMTI4LDEwMC4xMSwxMDAuMTEsMCwwLDAsMTI4LDI4Wm0wLDE5MmE5Miw5MiwwLDEsMSw5Mi05MkE5Mi4xLDkyLjEsMCwwLDEsMTI4LDIyMFptNDQtNjBhNCw0LDAsMCwxLTQsNEg4OGE0LDQsMCwwLDEsMC04aDgwQTQsNCwwLDAsMSwxNzIsMTYwWk04NCwxMDhhOCw4LDAsMSwxLDgsOEE4LDgsMCwwLDEsODQsMTA4Wm04OCwwYTgsOCwwLDEsMS04LThBOCw4LDAsMCwxLDE3MiwxMDhaIi8+PC9zdmc+)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMjZBMTAyLDEwMiwwLDEsMCwyMzAsMTI4LDEwMi4xMiwxMDIuMTIsMCwwLDAsMTI4LDI2Wm0wLDE5MmE5MCw5MCwwLDEsMSw5MC05MEE5MC4xLDkwLjEsMCwwLDEsMTI4LDIxOFptNDYtNThhNiw2LDAsMCwxLTYsNkg4OGE2LDYsMCwwLDEsMC0xMmg4MEE2LDYsMCwwLDEsMTc0LDE2MFpNODIsMTA4YTEwLDEwLDAsMSwxLDEwLDEwQTEwLDEwLDAsMCwxLDgyLDEwOFptOTIsMGExMCwxMCwwLDEsMS0xMC0xMEExMCwxMCwwLDAsMSwxNzQsMTA4WiIvPjwvc3ZnPg==)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMjBBMTA4LDEwOCwwLDEsMCwyMzYsMTI4LDEwOC4xMiwxMDguMTIsMCwwLDAsMTI4LDIwWm0wLDE5MmE4NCw4NCwwLDEsMSw4NC04NEE4NC4wOSw4NC4wOSwwLDAsMSwxMjgsMjEyWm01Mi01MmExMiwxMiwwLDAsMS0xMiwxMkg4OGExMiwxMiwwLDAsMSwwLTI0aDgwQTEyLDEyLDAsMCwxLDE4MCwxNjBaTTc2LDEwOGExNiwxNiwwLDEsMSwxNiwxNkExNiwxNiwwLDAsMSw3NiwxMDhabTEwNCwwYTE2LDE2LDAsMSwxLTE2LTE2QTE2LDE2LDAsMCwxLDE4MCwxMDhaIi8+PC9zdmc+)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMjRBMTA0LDEwNCwwLDEsMCwyMzIsMTI4LDEwNC4xMywxMDQuMTMsMCwwLDAsMTI4LDI0Wk05Miw5NmExMiwxMiwwLDEsMS0xMiwxMkExMiwxMiwwLDAsMSw5Miw5NlptNzYsNzJIODhhOCw4LDAsMCwxLDAtMTZoODBhOCw4LDAsMCwxLDAsMTZabS00LTQ4YTEyLDEyLDAsMSwxLDEyLTEyQTEyLDEyLDAsMCwxLDE2NCwxMjBaIi8+PC9zdmc+)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsMTI4YTk2LDk2LDAsMSwxLTk2LTk2QTk2LDk2LDAsMCwxLDIyNCwxMjhaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMTI4LDI0QTEwNCwxMDQsMCwxLDAsMjMyLDEyOCwxMDQuMTEsMTA0LjExLDAsMCwwLDEyOCwyNFptMCwxOTJhODgsODgsMCwxLDEsODgtODhBODguMSw4OC4xLDAsMCwxLDEyOCwyMTZabTQ4LTU2YTgsOCwwLDAsMS04LDhIODhhOCw4LDAsMCwxLDAtMTZoODBBOCw4LDAsMCwxLDE3NiwxNjBaTTgwLDEwOGExMiwxMiwwLDEsMSwxMiwxMkExMiwxMiwwLDAsMSw4MCwxMDhabTk2LDBhMTIsMTIsMCwxLDEtMTItMTJBMTIsMTIsMCwwLDEsMTc2LDEwOFoiLz48L3N2Zz4=)
 */
declare const I: Icon;
export { I as SmileyMeh };