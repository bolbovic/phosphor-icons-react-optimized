import type { Icon } from "../lib/types";
/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNzYsMTZIODBBMjQsMjQsMCwwLDAsNTYsNDBWMjE2YTI0LDI0LDAsMCwwLDI0LDI0aDk2YTI0LDI0LDAsMCwwLDI0LTI0VjQwQTI0LDI0LDAsMCwwLDE3NiwxNlptOCwyMDBhOCw4LDAsMCwxLTgsOEg4MGE4LDgsMCwwLDEtOC04VjQwYTgsOCwwLDAsMSw4LThoOTZhOCw4LDAsMCwxLDgsOFpNMTQwLDYwYTEyLDEyLDAsMSwxLTEyLTEyQTEyLDEyLDAsMCwxLDE0MCw2MFoiLz48L3N2Zz4=)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNzYsMjBIODBBMjAsMjAsMCwwLDAsNjAsNDBWMjE2YTIwLDIwLDAsMCwwLDIwLDIwaDk2YTIwLDIwLDAsMCwwLDIwLTIwVjQwQTIwLDIwLDAsMCwwLDE3NiwyMFptMTIsMTk2YTEyLDEyLDAsMCwxLTEyLDEySDgwYTEyLDEyLDAsMCwxLTEyLTEyVjQwQTEyLDEyLDAsMCwxLDgwLDI4aDk2YTEyLDEyLDAsMCwxLDEyLDEyWk0xMzYsNjBhOCw4LDAsMSwxLTgtOEE4LDgsMCwwLDEsMTM2LDYwWiIvPjwvc3ZnPg==)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNzYsMThIODBBMjIsMjIsMCwwLDAsNTgsNDBWMjE2YTIyLDIyLDAsMCwwLDIyLDIyaDk2YTIyLDIyLDAsMCwwLDIyLTIyVjQwQTIyLDIyLDAsMCwwLDE3NiwxOFptMTAsMTk4YTEwLDEwLDAsMCwxLTEwLDEwSDgwYTEwLDEwLDAsMCwxLTEwLTEwVjQwQTEwLDEwLDAsMCwxLDgwLDMwaDk2YTEwLDEwLDAsMCwxLDEwLDEwWk0xMzgsNjBhMTAsMTAsMCwxLDEtMTAtMTBBMTAsMTAsMCwwLDEsMTM4LDYwWiIvPjwvc3ZnPg==)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNzYsMTJIODBBMjgsMjgsMCwwLDAsNTIsNDBWMjE2YTI4LDI4LDAsMCwwLDI4LDI4aDk2YTI4LDI4LDAsMCwwLDI4LTI4VjQwQTI4LDI4LDAsMCwwLDE3NiwxMlptNCwyMDRhNCw0LDAsMCwxLTQsNEg4MGE0LDQsMCwwLDEtNC00VjQwYTQsNCwwLDAsMSw0LTRoOTZhNCw0LDAsMCwxLDQsNFpNMTQ0LDY4YTE2LDE2LDAsMSwxLTE2LTE2QTE2LDE2LDAsMCwxLDE0NCw2OFoiLz48L3N2Zz4=)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNzYsMTZIODBBMjQsMjQsMCwwLDAsNTYsNDBWMjE2YTI0LDI0LDAsMCwwLDI0LDI0aDk2YTI0LDI0LDAsMCwwLDI0LTI0VjQwQTI0LDI0LDAsMCwwLDE3NiwxNlpNMTI4LDcyYTEyLDEyLDAsMSwxLDEyLTEyQTEyLDEyLDAsMCwxLDEyOCw3MloiLz48L3N2Zz4=)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xOTIsNDBWMjE2YTE2LDE2LDAsMCwxLTE2LDE2SDgwYTE2LDE2LDAsMCwxLTE2LTE2VjQwQTE2LDE2LDAsMCwxLDgwLDI0aDk2QTE2LDE2LDAsMCwxLDE5Miw0MFoiIG9wYWNpdHk9IjAuMiIvPjxwYXRoIGQ9Ik0xNzYsMTZIODBBMjQsMjQsMCwwLDAsNTYsNDBWMjE2YTI0LDI0LDAsMCwwLDI0LDI0aDk2YTI0LDI0LDAsMCwwLDI0LTI0VjQwQTI0LDI0LDAsMCwwLDE3NiwxNlptOCwyMDBhOCw4LDAsMCwxLTgsOEg4MGE4LDgsMCwwLDEtOC04VjQwYTgsOCwwLDAsMSw4LThoOTZhOCw4LDAsMCwxLDgsOFpNMTQwLDYwYTEyLDEyLDAsMSwxLTEyLTEyQTEyLDEyLDAsMCwxLDE0MCw2MFoiLz48L3N2Zz4=)
 */
declare const I: Icon;
export { I as DeviceMobileCamera };