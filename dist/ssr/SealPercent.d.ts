import type { Icon } from "../lib/types";
/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjUuODYsMTAyLjgyYy0zLjc3LTMuOTQtNy42Ny04LTkuMTQtMTEuNTctMS4zNi0zLjI3LTEuNDQtOC42OS0xLjUyLTEzLjk0LS4xNS05Ljc2LS4zMS0yMC44Mi04LTI4LjUxcy0xOC43NS03Ljg1LTI4LjUxLThjLTUuMjUtLjA4LTEwLjY3LS4xNi0xMy45NC0xLjUyLTMuNTYtMS40Ny03LjYzLTUuMzctMTEuNTctOS4xNEMxNDYuMjgsMjMuNTEsMTM4LjQ0LDE2LDEyOCwxNnMtMTguMjcsNy41MS0yNS4xOCwxNC4xNGMtMy45NCwzLjc3LTgsNy42Ny0xMS41Nyw5LjE0Qzg4LDQwLjY0LDgyLjU2LDQwLjcyLDc3LjMxLDQwLjhjLTkuNzYuMTUtMjAuODIuMzEtMjguNTEsOFM0MSw2Ny41NSw0MC44LDc3LjMxYy0uMDgsNS4yNS0uMTYsMTAuNjctMS41MiwxMy45NC0xLjQ3LDMuNTYtNS4zNyw3LjYzLTkuMTQsMTEuNTdDMjMuNTEsMTA5LjczLDE2LDExNy41NiwxNiwxMjhzNy41MSwxOC4yNywxNC4xNCwyNS4xOGMzLjc3LDMuOTQsNy42Nyw4LDkuMTQsMTEuNTcsMS4zNiwzLjI3LDEuNDQsOC42OSwxLjUyLDEzLjk0LjE1LDkuNzYuMzEsMjAuODIsOCwyOC41MXMxOC43NSw3Ljg1LDI4LjUxLDhjNS4yNS4wOCwxMC42Ny4xNiwxMy45NCwxLjUyLDMuNTYsMS40Nyw3LjYzLDUuMzcsMTEuNTcsOS4xNEMxMDkuNzIsMjMyLjQ5LDExNy41NiwyNDAsMTI4LDI0MHMxOC4yNy03LjUxLDI1LjE4LTE0LjE0YzMuOTQtMy43Nyw4LTcuNjcsMTEuNTctOS4xNCwzLjI3LTEuMzYsOC42OS0xLjQ0LDEzLjk0LTEuNTIsOS43Ni0uMTUsMjAuODItLjMxLDI4LjUxLThzNy44NS0xOC43NSw4LTI4LjUxYy4wOC01LjI1LjE2LTEwLjY3LDEuNTItMTMuOTQsMS40Ny0zLjU2LDUuMzctNy42Myw5LjE0LTExLjU3QzIzMi40OSwxNDYuMjcsMjQwLDEzOC40NCwyNDAsMTI4UzIzMi40OSwxMDkuNzMsMjI1Ljg2LDEwMi44MlptLTExLjU1LDM5LjI5Yy00Ljc5LDUtOS43NSwxMC4xNy0xMi4zOCwxNi41Mi0yLjUyLDYuMS0yLjYzLDEzLjA3LTIuNzMsMTkuODItLjEsNy0uMjEsMTQuMzMtMy4zMiwxNy40M3MtMTAuMzksMy4yMi0xNy40MywzLjMyYy02Ljc1LjEtMTMuNzIuMjEtMTkuODIsMi43My02LjM1LDIuNjMtMTEuNTIsNy41OS0xNi41MiwxMi4zOFMxMzIsMjI0LDEyOCwyMjRzLTkuMTUtNC45Mi0xNC4xMS05LjY5LTEwLjE3LTkuNzUtMTYuNTItMTIuMzhjLTYuMS0yLjUyLTEzLjA3LTIuNjMtMTkuODItMi43My03LS4xLTE0LjMzLS4yMS0xNy40My0zLjMycy0zLjIyLTEwLjM5LTMuMzItMTcuNDNjLS4xLTYuNzUtLjIxLTEzLjcyLTIuNzMtMTkuODItMi42My02LjM1LTcuNTktMTEuNTItMTIuMzgtMTYuNTJTMzIsMTMyLDMyLDEyOHM0LjkyLTkuMTQsOS42OS0xNC4xMSw5Ljc1LTEwLjE3LDEyLjM4LTE2LjUyYzIuNTItNi4xLDIuNjMtMTMuMDcsMi43My0xOS44Mi4xLTcsLjIxLTE0LjMzLDMuMzItMTcuNDNTNzAuNTEsNTYuOSw3Ny41NSw1Ni44YzYuNzUtLjEsMTMuNzItLjIxLDE5LjgyLTIuNzMsNi4zNS0yLjYzLDExLjUyLTcuNTksMTYuNTItMTIuMzhTMTI0LDMyLDEyOCwzMnM5LjE1LDQuOTIsMTQuMTEsOS42OSwxMC4xNyw5Ljc1LDE2LjUyLDEyLjM4YzYuMSwyLjUyLDEzLjA3LDIuNjMsMTkuODIsMi43Myw3LC4xLDE0LjMzLjIxLDE3LjQzLDMuMzJzMy4yMiwxMC4zOSwzLjMyLDE3LjQzYy4xLDYuNzUuMjEsMTMuNzIsMi43MywxOS44MiwyLjYzLDYuMzUsNy41OSwxMS41MiwxMi4zOCwxNi41MlMyMjQsMTI0LDIyNCwxMjgsMjE5LjA4LDEzNy4xNCwyMTQuMzEsMTQyLjExWk0xMjAsOTZhMjQsMjQsMCwxLDAtMjQsMjRBMjQsMjQsMCwwLDAsMTIwLDk2Wk04OCw5NmE4LDgsMCwxLDEsOCw4QTgsOCwwLDAsMSw4OCw5NlptNzIsNDBhMjQsMjQsMCwxLDAsMjQsMjRBMjQsMjQsMCwwLDAsMTYwLDEzNlptMCwzMmE4LDgsMCwxLDEsOC04QTgsOCwwLDAsMSwxNjAsMTY4Wm0xMy42Ni03NC4zNC04MCw4MGE4LDgsMCwwLDEtMTEuMzItMTEuMzJsODAtODBhOCw4LDAsMCwxLDExLjMyLDExLjMyWiIvPjwvc3ZnPg==)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjMsMTA1LjU4Yy00LTQuMi04LjItOC41NC0xMC0xMi44LTEuNjUtNC0xLjczLTkuNTMtMS44Mi0xNS40MS0uMTQtOS0uMjktMTkuMTktNi44My0yNS43NHMtMTYuNzQtNi42OS0yNS43NC02LjgzYy01Ljg4LS4wOS0xMS40My0uMTctMTUuNDEtMS44Mi00LjI2LTEuNzYtOC42LTUuOTMtMTIuOC0xMC02LjY4LTYuNC0xMy41OS0xMy0yMi40Mi0xM3MtMTUuNzQsNi42Mi0yMi40MiwxM2MtNC4yLDQtOC41NCw4LjItMTIuOCwxMC00LDEuNjUtOS41MywxLjczLTE1LjQxLDEuODItOSwuMTQtMTkuMTkuMjktMjUuNzQsNi44M1M0NC45NCw2OC4zNyw0NC44LDc3LjM3Yy0uMDksNS44OC0uMTcsMTEuNDMtMS44MiwxNS40MS0xLjc2LDQuMjYtNS45Myw4LjYtMTAsMTIuOC02LjQsNi42OC0xMywxMy41OS0xMywyMi40MnM2LjYyLDE1Ljc0LDEzLDIyLjQyYzQsNC4yLDguMiw4LjU0LDEwLDEyLjgsMS42NSw0LDEuNzMsOS41MywxLjgyLDE1LjQxLjE0LDksLjI5LDE5LjE5LDYuODMsMjUuNzRzMTYuNzQsNi42OSwyNS43NCw2LjgzYzUuODguMDksMTEuNDMuMTcsMTUuNDEsMS44Miw0LjI2LDEuNzYsOC42LDUuOTMsMTIuOCwxMCw2LjY4LDYuNCwxMy41OSwxMywyMi40MiwxM3MxNS43NC02LjYyLDIyLjQyLTEzYzQuMi00LDguNTQtOC4yLDEyLjgtMTAsNC0xLjY1LDkuNTMtMS43MywxNS40MS0xLjgyLDktLjE0LDE5LjE5LS4yOSwyNS43NC02LjgzczYuNjktMTYuNzQsNi44My0yNS43NGMuMDktNS44OC4xNy0xMS40MywxLjgyLTE1LjQxLDEuNzYtNC4yNiw1LjkzLTguNiwxMC0xMi44LDYuNC02LjY4LDEzLTEzLjU5LDEzLTIyLjQyUzIyOS4zOCwxMTIuMjYsMjIzLDEwNS41OFptLTUuNzgsMzkuM2MtNC41NCw0LjczLTkuMjQsOS42My0xMS41NywxNS4yOC0yLjIzLDUuMzktMi4zMywxMi0yLjQzLDE4LjM1LS4xMiw4LjItLjI0LDE2LTQuNDksMjAuMnMtMTIsNC4zNy0yMC4yLDQuNDljLTYuMzcuMS0xMywuMi0xOC4zNSwyLjQzLTUuNjUsMi4zNC0xMC41NSw3LTE1LjI4LDExLjU3QzEzOS4wOSwyMjIuNzUsMTMzLjYyLDIyOCwxMjgsMjI4cy0xMS4wOS01LjI1LTE2Ljg4LTEwLjhjLTQuNzMtNC41NC05LjYzLTkuMjMtMTUuMjgtMTEuNTctNS4zOS0yLjIzLTEyLTIuMzMtMTguMzUtMi40My04LjItLjEyLTE1Ljk1LS4yNC0yMC4yLTQuNDlzLTQuMzctMTItNC40OS0yMC4yYy0uMS02LjM3LS4yLTEzLTIuNDMtMTguMzUtMi4zMy01LjY1LTctMTAuNTUtMTEuNTctMTUuMjhDMzMuMjUsMTM5LjA5LDI4LDEzMy42MiwyOCwxMjhzNS4yNS0xMS4wOSwxMC44LTE2Ljg4YzQuNTQtNC43Myw5LjI0LTkuNjMsMTEuNTctMTUuMjgsMi4yMy01LjM5LDIuMzMtMTIsMi40My0xOC4zNS4xMi04LjIuMjQtMTUuOTUsNC40OS0yMC4yczEyLTQuMzcsMjAuMi00LjQ5YzYuMzctLjEsMTMtLjIsMTguMzUtMi40Myw1LjY1LTIuMzQsMTAuNTUtNywxNS4yOC0xMS41N0MxMTYuOTEsMzMuMjUsMTIyLjM4LDI4LDEyOCwyOHMxMS4wOSw1LjI1LDE2Ljg4LDEwLjhjNC43Myw0LjU0LDkuNjMsOS4yMywxNS4yOCwxMS41Nyw1LjM5LDIuMjMsMTIsMi4zMywxOC4zNSwyLjQzLDguMi4xMiwxNiwuMjQsMjAuMiw0LjQ5czQuMzcsMTIsNC40OSwyMC4yYy4xLDYuMzcuMiwxMywyLjQzLDE4LjM1LDIuMzMsNS42NSw3LDEwLjU1LDExLjU3LDE1LjI4LDUuNTUsNS43OSwxMC44LDExLjI2LDEwLjgsMTYuODhTMjIyLjc1LDEzOS4wOSwyMTcuMiwxNDQuODhaTTExNiw5NmEyMCwyMCwwLDEsMC0yMCwyMEEyMCwyMCwwLDAsMCwxMTYsOTZaTTg0LDk2YTEyLDEyLDAsMSwxLDEyLDEyQTEyLDEyLDAsMCwxLDg0LDk2Wm03Niw0NGEyMCwyMCwwLDEsMCwyMCwyMEEyMCwyMCwwLDAsMCwxNjAsMTQwWm0wLDMyYTEyLDEyLDAsMSwxLDEyLTEyQTEyLDEyLDAsMCwxLDE2MCwxNzJabTEwLjgzLTgxLjE3LTgwLDgwYTQsNCwwLDAsMS01LjY2LTUuNjZsODAtODBhNCw0LDAsMSwxLDUuNjYsNS42NloiLz48L3N2Zz4=)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQuNDIsMTA0LjJjLTMuOS00LjA3LTcuOTMtOC4yNy05LjU1LTEyLjE4LTEuNS0zLjYzLTEuNTgtOS0xLjY3LTE0LjY4LS4xNC05LjM4LS4zLTIwLTcuNDItMjcuMTJTMTg4LDQyLjk0LDE3OC42Niw0Mi44Yy01LjY4LS4wOS0xMS0uMTctMTQuNjgtMS42Ny0zLjkxLTEuNjItOC4xMS01LjY1LTEyLjE4LTkuNTVDMTQ1LjE2LDI1LjIyLDEzNy42NCwxOCwxMjgsMThzLTE3LjE2LDcuMjItMjMuOCwxMy41OGMtNC4wNywzLjktOC4yNyw3LjkzLTEyLjE4LDkuNTUtMy42MywxLjUtOSwxLjU4LTE0LjY4LDEuNjctOS4zOC4xNC0yMCwuMy0yNy4xMiw3LjQyUzQyLjk0LDY4LDQyLjgsNzcuMzRjLS4wOSw1LjY4LS4xNywxMS0xLjY3LDE0LjY4LTEuNjIsMy45MS01LjY1LDguMTEtOS41NSwxMi4xOEMyNS4yMiwxMTAuODQsMTgsMTE4LjM2LDE4LDEyOHM3LjIyLDE3LjE2LDEzLjU4LDIzLjhjMy45LDQuMDcsNy45Myw4LjI3LDkuNTUsMTIuMTgsMS41LDMuNjMsMS41OCw5LDEuNjcsMTQuNjguMTQsOS4zOC4zLDIwLDcuNDIsMjcuMTJTNjgsMjEzLjA2LDc3LjM0LDIxMy4yYzUuNjguMDksMTEsLjE3LDE0LjY4LDEuNjcsMy45MSwxLjYyLDguMTEsNS42NSwxMi4xOCw5LjU1QzExMC44NCwyMzAuNzgsMTE4LjM2LDIzOCwxMjgsMjM4czE3LjE2LTcuMjIsMjMuOC0xMy41OGM0LjA3LTMuOSw4LjI3LTcuOTMsMTIuMTgtOS41NSwzLjYzLTEuNSw5LTEuNTgsMTQuNjgtMS42Nyw5LjM4LS4xNCwyMC0uMywyNy4xMi03LjQyczcuMjgtMTcuNzQsNy40Mi0yNy4xMmMuMDktNS42OC4xNy0xMSwxLjY3LTE0LjY4LDEuNjItMy45MSw1LjY1LTguMTEsOS41NS0xMi4xOEMyMzAuNzgsMTQ1LjE2LDIzOCwxMzcuNjQsMjM4LDEyOFMyMzAuNzgsMTEwLjg0LDIyNC40MiwxMDQuMlptLTguNjYsMzkuMjljLTQuNjcsNC44Ny05LjUsOS45MS0xMiwxNS45MS0yLjM4LDUuNzQtMi40OCwxMi41Mi0yLjU4LDE5LjA4LS4xMSw3LjQ0LS4yMywxNS4xNC0zLjksMTguODJzLTExLjM4LDMuNzktMTguODIsMy45Yy02LjU2LjEtMTMuMzQuMi0xOS4wOCwyLjU4LTYsMi40OC0xMSw3LjMxLTE1LjkxLDEyLTUuMjUsNS0xMC42OCwxMC4yNC0xNS40OSwxMC4yNHMtMTAuMjQtNS4yMS0xNS41LTEwLjI0Yy00Ljg2LTQuNjctOS45LTkuNS0xNS45LTEyLTUuNzQtMi4zOC0xMi41Mi0yLjQ4LTE5LjA4LTIuNTgtNy40NC0uMTEtMTUuMTQtLjIzLTE4LjgyLTMuOXMtMy43OS0xMS4zOC0zLjktMTguODJjLS4xLTYuNTYtLjItMTMuMzQtMi41OC0xOS4wOC0yLjQ4LTYtNy4zMS0xMS0xMi0xNS45MUMzNS4yMSwxMzguMjQsMzAsMTMyLjgxLDMwLDEyOHM1LjIxLTEwLjI0LDEwLjI0LTE1LjQ5YzQuNjctNC44Nyw5LjUtOS45MSwxMi0xNS45MSwyLjM4LTUuNzQsMi40OC0xMi41MiwyLjU4LTE5LjA4LjExLTcuNDQuMjMtMTUuMTQsMy45LTE4LjgyczExLjM4LTMuNzksMTguODItMy45YzYuNTYtLjEsMTMuMzQtLjIsMTkuMDgtMi41OCw2LTIuNDgsMTEtNy4zMSwxNS45MS0xMkMxMTcuNzYsMzUuMjEsMTIzLjE5LDMwLDEyOCwzMHMxMC4yNCw1LjIxLDE1LjUsMTAuMjRjNC44Niw0LjY3LDkuOSw5LjUsMTUuOSwxMiw1Ljc0LDIuMzgsMTIuNTIsMi40OCwxOS4wOCwyLjU4LDcuNDQuMTEsMTUuMTQuMjMsMTguODIsMy45czMuNzksMTEuMzgsMy45LDE4LjgyYy4xLDYuNTYuMiwxMy4zNCwyLjU4LDE5LjA4LDIuNDgsNiw3LjMxLDExLDEyLDE1LjkxLDUsNS4yNSwxMC4yNCwxMC42OCwxMC4yNCwxNS40OVMyMjAuNzksMTM4LjI0LDIxNS43NiwxNDMuNDlaTTExOCw5NmEyMiwyMiwwLDEsMC0yMiwyMkEyMiwyMiwwLDAsMCwxMTgsOTZaTTg2LDk2YTEwLDEwLDAsMSwxLDEwLDEwQTEwLDEwLDAsMCwxLDg2LDk2Wm03NCw0MmEyMiwyMiwwLDEsMCwyMiwyMkEyMiwyMiwwLDAsMCwxNjAsMTM4Wm0wLDMyYTEwLDEwLDAsMSwxLDEwLTEwQTEwLDEwLDAsMCwxLDE2MCwxNzBabTEyLjI0LTc3Ljc2LTgwLDgwYTYsNiwwLDAsMS04LjQ4LTguNDhsODAtODBhNiw2LDAsMCwxLDguNDgsOC40OFoiLz48L3N2Zz4=)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjguNzUsMTAwLjA1Yy0zLjUyLTMuNjctNy4xNS03LjQ2LTguMzQtMTAuMzMtMS4wNi0yLjU2LTEuMTQtNy44My0xLjIxLTEyLjQ3LS4xNS0xMC0uMzQtMjIuNDQtOS4xOC0zMS4yN3MtMjEuMjctOS0zMS4yNy05LjE4Yy00LjY0LS4wNy05LjktLjE1LTEyLjQ3LTEuMjEtMi44Ny0xLjE5LTYuNjYtNC44Mi0xMC4zMy04LjM0QzE0OC44NywyMC40NiwxNDAuMDUsMTIsMTI4LDEycy0yMC44Nyw4LjQ2LTI3Ljk1LDE1LjI1Yy0zLjY3LDMuNTItNy40Niw3LjE1LTEwLjMzLDguMzQtMi41NiwxLjA2LTcuODMsMS4xNC0xMi40NywxLjIxQzY3LjI1LDM3LDU0LjgxLDM3LjE0LDQ2LDQ2UzM3LDY3LjI1LDM2LjgsNzcuMjVjLS4wNyw0LjY0LS4xNSw5LjkxLTEuMjEsMTIuNDctMS4xOSwyLjg3LTQuODIsNi42Ni04LjM0LDEwLjMzQzIwLjQ2LDEwNy4xMywxMiwxMTYsMTIsMTI4UzIwLjQ2LDE0OC44NywyNy4yNSwxNTZjMy41MiwzLjY3LDcuMTUsNy40Niw4LjM0LDEwLjMzLDEuMDYsMi41NiwxLjE0LDcuODMsMS4yMSwxMi40Ny4xNSwxMCwuMzQsMjIuNDQsOS4xOCwzMS4yN3MyMS4yNyw5LDMxLjI3LDkuMThjNC42NC4wNyw5LjkuMTUsMTIuNDcsMS4yMSwyLjg3LDEuMTksNi42Niw0LjgyLDEwLjMzLDguMzRDMTA3LjEzLDIzNS41NCwxMTYsMjQ0LDEyOCwyNDRzMjAuODctOC40NiwyNy45NS0xNS4yNWMzLjY3LTMuNTIsNy40Ni03LjE1LDEwLjMzLTguMzQsMi41Ni0xLjA2LDcuODMtMS4xNCwxMi40Ny0xLjIxLDEwLS4xNSwyMi40NC0uMzQsMzEuMjctOS4xOHM5LTIxLjI3LDkuMTgtMzEuMjdjLjA3LTQuNjQuMTUtOS45MSwxLjIxLTEyLjQ3LDEuMTktMi44Nyw0LjgyLTYuNjYsOC4zNC0xMC4zM0MyMzUuNTQsMTQ4Ljg3LDI0NCwxNDAuMDUsMjQ0LDEyOFMyMzUuNTQsMTA3LjEzLDIyOC43NSwxMDAuMDVabS0xNy4zMiwzOS4yOWMtNC44Miw1LTEwLjI4LDEwLjcyLTEzLjE5LDE3Ljc2LTIuODIsNi44LTIuOTMsMTQuMTctMywyMS4yOS0uMDgsNS4zNi0uMTksMTIuNzEtMi4xNSwxNC42NnMtOS4zLDIuMDctMTQuNjYsMi4xNWMtNy4xMy4xMS0xNC40OS4yMi0yMS4yOSwzLTcsMi45Mi0xMi43Myw4LjM4LTE3Ljc2LDEzLjJDMTM1Ljc4LDIxNC44NCwxMzAuNCwyMjAsMTI4LDIyMHMtNy43OC01LjE2LTExLjM0LTguNTdjLTUtNC44Mi0xMC43Mi0xMC4yOC0xNy43Ni0xMy4yLTYuOC0yLjgxLTE0LjE3LTIuOTItMjEuMjktMy01LjM2LS4wOC0xMi43MS0uMTktMTQuNjYtMi4xNXMtMi4wNy05LjMtMi4xNS0xNC42NmMtLjExLTcuMTMtLjIyLTE0LjQ5LTMtMjEuMjktMi45MS03LTguMzctMTIuNzQtMTMuMTktMTcuNzZDNDEuMTYsMTM1Ljc4LDM2LDEzMC40LDM2LDEyOHM1LjE2LTcuNzgsOC41Ny0xMS4zNGM0LjgyLTUsMTAuMjgtMTAuNzIsMTMuMTktMTcuNzYsMi44Mi02LjgsMi45My0xNC4xNywzLTIxLjI5QzYwLjg4LDcyLjI1LDYxLDY0LjksNjMsNjNzOS4zLTIuMDcsMTQuNjYtMi4xNWM3LjEzLS4xMSwxNC40OS0uMjIsMjEuMjktMyw3LTIuOTIsMTIuNzMtOC4zOCwxNy43Ni0xMy4yQzEyMC4yMiw0MS4xNiwxMjUuNiwzNiwxMjgsMzZzNy43OCw1LjE2LDExLjM0LDguNTdjNSw0LjgyLDEwLjcyLDEwLjI4LDE3Ljc2LDEzLjIsNi44LDIuODEsMTQuMTcsMi45MiwyMS4yOSwzLDUuMzYuMDgsMTIuNzEuMTksMTQuNjYsMi4xNXMyLjA3LDkuMywyLjE1LDE0LjY2Yy4xMSw3LjEzLjIyLDE0LjQ5LDMsMjEuMjksMi45MSw3LDguMzcsMTIuNzQsMTMuMTksMTcuNzYsMy40MSwzLjU2LDguNTcsOC45NCw4LjU3LDExLjM0UzIxNC44NCwxMzUuNzgsMjExLjQzLDEzOS4zNFpNODAsOTZhMTYsMTYsMCwxLDEsMTYsMTZBMTYsMTYsMCwwLDEsODAsOTZabTk2LDY0YTE2LDE2LDAsMSwxLTE2LTE2QTE2LDE2LDAsMCwxLDE3NiwxNjBabS40OS04MC40OWExMiwxMiwwLDAsMSwwLDE3bC04MCw4MGExMiwxMiwwLDAsMS0xNy0xN2w4MC04MEExMiwxMiwwLDAsMSwxNzYuNDksNzkuNTFaIi8+PC9zdmc+)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik05NiwxMDRhOCw4LDAsMSwxLDgtOEE4LDgsMCwwLDEsOTYsMTA0Wm02NCw0OGE4LDgsMCwxLDAsOCw4QTgsOCwwLDAsMCwxNjAsMTUyWm04MC0yNGMwLDEwLjQ0LTcuNTEsMTguMjctMTQuMTQsMjUuMTgtMy43NywzLjk0LTcuNjcsOC05LjE0LDExLjU3LTEuMzYsMy4yNy0xLjQ0LDguNjktMS41MiwxMy45NC0uMTUsOS43Ni0uMzEsMjAuODItOCwyOC41MXMtMTguNzUsNy44NS0yOC41MSw4Yy01LjI1LjA4LTEwLjY3LjE2LTEzLjk0LDEuNTItMy41NywxLjQ3LTcuNjMsNS4zNy0xMS41Nyw5LjE0QzE0Ni4yNywyMzIuNDksMTM4LjQ0LDI0MCwxMjgsMjQwcy0xOC4yNy03LjUxLTI1LjE4LTE0LjE0Yy0zLjk0LTMuNzctOC03LjY3LTExLjU3LTkuMTQtMy4yNy0xLjM2LTguNjktMS40NC0xMy45NC0xLjUyLTkuNzYtLjE1LTIwLjgyLS4zMS0yOC41MS04cy03Ljg1LTE4Ljc1LTgtMjguNTFjLS4wOC01LjI1LS4xNi0xMC42Ny0xLjUyLTEzLjk0LTEuNDctMy41Ny01LjM3LTcuNjMtOS4xNC0xMS41N0MyMy41MSwxNDYuMjcsMTYsMTM4LjQ0LDE2LDEyOHM3LjUxLTE4LjI3LDE0LjE0LTI1LjE4YzMuNzctMy45NCw3LjY3LTgsOS4xNC0xMS41NywxLjM2LTMuMjcsMS40NC04LjY5LDEuNTItMTMuOTQuMTUtOS43Ni4zMS0yMC44Miw4LTI4LjUxczE4Ljc1LTcuODUsMjguNTEtOGM1LjI1LS4wOCwxMC42Ny0uMTYsMTMuOTQtMS41MiwzLjU3LTEuNDcsNy42My01LjM3LDExLjU3LTkuMTRDMTA5LjczLDIzLjUxLDExNy41NiwxNiwxMjgsMTZzMTguMjcsNy41MSwyNS4xOCwxNC4xNGMzLjk0LDMuNzcsOCw3LjY3LDExLjU3LDkuMTQsMy4yNywxLjM2LDguNjksMS40NCwxMy45NCwxLjUyLDkuNzYuMTUsMjAuODIuMzEsMjguNTEsOHM3Ljg1LDE4Ljc1LDgsMjguNTFjLjA4LDUuMjUuMTYsMTAuNjcsMS41MiwxMy45NCwxLjQ3LDMuNTcsNS4zNyw3LjYzLDkuMTQsMTEuNTdDMjMyLjQ5LDEwOS43MywyNDAsMTE3LjU2LDI0MCwxMjhaTTk2LDEyMEEyNCwyNCwwLDEsMCw3Miw5NiwyNCwyNCwwLDAsMCw5NiwxMjBabTc3LjY2LTI2LjM0YTgsOCwwLDAsMC0xMS4zMi0xMS4zMmwtODAsODBhOCw4LDAsMCwwLDExLjMyLDExLjMyWk0xODQsMTYwYTI0LDI0LDAsMSwwLTI0LDI0QTI0LDI0LDAsMCwwLDE4NCwxNjBaIi8+PC9zdmc+)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIsMTI4YzAsMTIuNTEtMTcuODIsMjEuOTUtMjIuNjgsMzMuNjktNC42OCwxMS4zMiwxLjQyLDMwLjY1LTcuNzgsMzkuODVzLTI4LjUzLDMuMS0zOS44NSw3Ljc4QzE1MCwyMTQuMTgsMTQwLjUsMjMyLDEyOCwyMzJzLTIyLTE3LjgyLTMzLjY5LTIyLjY4Yy0xMS4zMi00LjY4LTMwLjY0LDEuNDItMzkuODUtNy43OHMtMy4xLTI4LjUzLTcuNzgtMzkuODVDNDEuODIsMTUwLDI0LDE0MC41LDI0LDEyOHMxNy44Mi0yMiwyMi42OC0zMy42OUM1MS4zNiw4Myw0NS4yNiw2My42Niw1NC40Niw1NC40NlM4Myw1MS4zNiw5NC4zMSw0Ni42OEMxMDYuMDUsNDEuODIsMTE1LjUsMjQsMTI4LDI0UzE1MCw0MS44MiwxNjEuNjksNDYuNjhjMTEuMzIsNC42OCwzMC42NC0xLjQyLDM5Ljg1LDcuNzhzMy4xLDI4LjUzLDcuNzgsMzkuODVDMjE0LjE4LDEwNi4wNSwyMzIsMTE1LjUsMjMyLDEyOFoiIG9wYWNpdHk9IjAuMiIvPjxwYXRoIGQ9Ik0yMjUuODYsMTAyLjgyYy0zLjc3LTMuOTQtNy42Ny04LTkuMTQtMTEuNTctMS4zNi0zLjI3LTEuNDQtOC42OS0xLjUyLTEzLjk0LS4xNS05Ljc2LS4zMS0yMC44Mi04LTI4LjUxcy0xOC43NS03Ljg1LTI4LjUxLThjLTUuMjUtLjA4LTEwLjY3LS4xNi0xMy45NC0xLjUyLTMuNTYtMS40Ny03LjYzLTUuMzctMTEuNTctOS4xNEMxNDYuMjgsMjMuNTEsMTM4LjQ0LDE2LDEyOCwxNnMtMTguMjcsNy41MS0yNS4xOCwxNC4xNGMtMy45NCwzLjc3LTgsNy42Ny0xMS41Nyw5LjE0Qzg4LDQwLjY0LDgyLjU2LDQwLjcyLDc3LjMxLDQwLjhjLTkuNzYuMTUtMjAuODIuMzEtMjguNTEsOFM0MSw2Ny41NSw0MC44LDc3LjMxYy0uMDgsNS4yNS0uMTYsMTAuNjctMS41MiwxMy45NC0xLjQ3LDMuNTYtNS4zNyw3LjYzLTkuMTQsMTEuNTdDMjMuNTEsMTA5LjczLDE2LDExNy41NiwxNiwxMjhzNy41MSwxOC4yNywxNC4xNCwyNS4xOGMzLjc3LDMuOTQsNy42Nyw4LDkuMTQsMTEuNTcsMS4zNiwzLjI3LDEuNDQsOC42OSwxLjUyLDEzLjk0LjE1LDkuNzYuMzEsMjAuODIsOCwyOC41MXMxOC43NSw3Ljg1LDI4LjUxLDhjNS4yNS4wOCwxMC42Ny4xNiwxMy45NCwxLjUyLDMuNTYsMS40Nyw3LjYzLDUuMzcsMTEuNTcsOS4xNEMxMDkuNzIsMjMyLjQ5LDExNy41NiwyNDAsMTI4LDI0MHMxOC4yNy03LjUxLDI1LjE4LTE0LjE0YzMuOTQtMy43Nyw4LTcuNjcsMTEuNTctOS4xNCwzLjI3LTEuMzYsOC42OS0xLjQ0LDEzLjk0LTEuNTIsOS43Ni0uMTUsMjAuODItLjMxLDI4LjUxLThzNy44NS0xOC43NSw4LTI4LjUxYy4wOC01LjI1LjE2LTEwLjY3LDEuNTItMTMuOTQsMS40Ny0zLjU2LDUuMzctNy42Myw5LjE0LTExLjU3QzIzMi40OSwxNDYuMjcsMjQwLDEzOC40NCwyNDAsMTI4UzIzMi40OSwxMDkuNzMsMjI1Ljg2LDEwMi44MlptLTExLjU1LDM5LjI5Yy00Ljc5LDUtOS43NSwxMC4xNy0xMi4zOCwxNi41Mi0yLjUyLDYuMS0yLjYzLDEzLjA3LTIuNzMsMTkuODItLjEsNy0uMjEsMTQuMzMtMy4zMiwxNy40M3MtMTAuMzksMy4yMi0xNy40MywzLjMyYy02Ljc1LjEtMTMuNzIuMjEtMTkuODIsMi43My02LjM1LDIuNjMtMTEuNTIsNy41OS0xNi41MiwxMi4zOFMxMzIsMjI0LDEyOCwyMjRzLTkuMTUtNC45Mi0xNC4xMS05LjY5LTEwLjE3LTkuNzUtMTYuNTItMTIuMzhjLTYuMS0yLjUyLTEzLjA3LTIuNjMtMTkuODItMi43My03LS4xLTE0LjMzLS4yMS0xNy40My0zLjMycy0zLjIyLTEwLjM5LTMuMzItMTcuNDNjLS4xLTYuNzUtLjIxLTEzLjcyLTIuNzMtMTkuODItMi42My02LjM1LTcuNTktMTEuNTItMTIuMzgtMTYuNTJTMzIsMTMyLDMyLDEyOHM0LjkyLTkuMTQsOS42OS0xNC4xMSw5Ljc1LTEwLjE3LDEyLjM4LTE2LjUyYzIuNTItNi4xLDIuNjMtMTMuMDcsMi43My0xOS44Mi4xLTcsLjIxLTE0LjMzLDMuMzItMTcuNDNTNzAuNTEsNTYuOSw3Ny41NSw1Ni44YzYuNzUtLjEsMTMuNzItLjIxLDE5LjgyLTIuNzMsNi4zNS0yLjYzLDExLjUyLTcuNTksMTYuNTItMTIuMzhTMTI0LDMyLDEyOCwzMnM5LjE1LDQuOTIsMTQuMTEsOS42OSwxMC4xNyw5Ljc1LDE2LjUyLDEyLjM4YzYuMSwyLjUyLDEzLjA3LDIuNjMsMTkuODIsMi43Myw3LC4xLDE0LjMzLjIxLDE3LjQzLDMuMzJzMy4yMiwxMC4zOSwzLjMyLDE3LjQzYy4xLDYuNzUuMjEsMTMuNzIsMi43MywxOS44MiwyLjYzLDYuMzUsNy41OSwxMS41MiwxMi4zOCwxNi41MlMyMjQsMTI0LDIyNCwxMjgsMjE5LjA4LDEzNy4xNCwyMTQuMzEsMTQyLjExWk0xMjAsOTZhMjQsMjQsMCwxLDAtMjQsMjRBMjQsMjQsMCwwLDAsMTIwLDk2Wk04OCw5NmE4LDgsMCwxLDEsOCw4QTgsOCwwLDAsMSw4OCw5NlptNzIsNDBhMjQsMjQsMCwxLDAsMjQsMjRBMjQsMjQsMCwwLDAsMTYwLDEzNlptMCwzMmE4LDgsMCwxLDEsOC04QTgsOCwwLDAsMSwxNjAsMTY4Wm0xMy42Ni03NC4zNC04MCw4MGE4LDgsMCwwLDEtMTEuMzItMTEuMzJsODAtODBhOCw4LDAsMCwxLDExLjMyLDExLjMyWiIvPjwvc3ZnPg==)
 */
declare const I: Icon;
export { I as SealPercent };