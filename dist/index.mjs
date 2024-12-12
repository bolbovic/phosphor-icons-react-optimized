import * as r from "./ssr/index.mjs";
import * as o from "./opti/index.mjs";
import { Acorn as p } from "./csr/Acorn.mjs";
import { AddressBook as f } from "./csr/AddressBook.mjs";
import { AddressBookTabs as i } from "./csr/AddressBookTabs.mjs";
import { AirTrafficControl as l } from "./csr/AirTrafficControl.mjs";
import { Airplane as s } from "./csr/Airplane.mjs";
import { AirplaneInFlight as c } from "./csr/AirplaneInFlight.mjs";
import { AirplaneLanding as g } from "./csr/AirplaneLanding.mjs";
import { AirplaneTakeoff as h } from "./csr/AirplaneTakeoff.mjs";
import { AirplaneTaxiing as w } from "./csr/AirplaneTaxiing.mjs";
import { AirplaneTilt as P } from "./csr/AirplaneTilt.mjs";
import { Airplay as T } from "./csr/Airplay.mjs";
import { Alarm as F } from "./csr/Alarm.mjs";
import { Alien as b } from "./csr/Alien.mjs";
import { AlignBottom as y } from "./csr/AlignBottom.mjs";
import { AlignBottomSimple as M } from "./csr/AlignBottomSimple.mjs";
import { AlignCenterHorizontal as U } from "./csr/AlignCenterHorizontal.mjs";
import { AlignCenterHorizontalSimple as v } from "./csr/AlignCenterHorizontalSimple.mjs";
import { AlignCenterVertical as O } from "./csr/AlignCenterVertical.mjs";
import { AlignCenterVerticalSimple as W } from "./csr/AlignCenterVerticalSimple.mjs";
import { AlignLeft as V } from "./csr/AlignLeft.mjs";
import { AlignLeftSimple as z } from "./csr/AlignLeftSimple.mjs";
import { AlignRight as K } from "./csr/AlignRight.mjs";
import { AlignRightSimple as Q } from "./csr/AlignRightSimple.mjs";
import { AlignTop as j } from "./csr/AlignTop.mjs";
import { AlignTopSimple as $ } from "./csr/AlignTopSimple.mjs";
import { AmazonLogo as rr } from "./csr/AmazonLogo.mjs";
import { Ambulance as er } from "./csr/Ambulance.mjs";
import { Anchor as pr } from "./csr/Anchor.mjs";
import { AnchorSimple as fr } from "./csr/AnchorSimple.mjs";
import { AndroidLogo as ir } from "./csr/AndroidLogo.mjs";
import { Angle as lr } from "./csr/Angle.mjs";
import { AngularLogo as sr } from "./csr/AngularLogo.mjs";
import { Aperture as cr } from "./csr/Aperture.mjs";
import { AppStoreLogo as gr } from "./csr/AppStoreLogo.mjs";
import { AppWindow as hr } from "./csr/AppWindow.mjs";
import { AppleLogo as wr } from "./csr/AppleLogo.mjs";
import { ApplePodcastsLogo as Pr } from "./csr/ApplePodcastsLogo.mjs";
import { ApproximateEquals as Tr } from "./csr/ApproximateEquals.mjs";
import { Archive as Fr } from "./csr/Archive.mjs";
import { Armchair as br } from "./csr/Armchair.mjs";
import { ArrowArcLeft as yr } from "./csr/ArrowArcLeft.mjs";
import { ArrowArcRight as Mr } from "./csr/ArrowArcRight.mjs";
import { ArrowBendDoubleUpLeft as Ur } from "./csr/ArrowBendDoubleUpLeft.mjs";
import { ArrowBendDoubleUpRight as vr } from "./csr/ArrowBendDoubleUpRight.mjs";
import { ArrowBendDownLeft as Or } from "./csr/ArrowBendDownLeft.mjs";
import { ArrowBendDownRight as Wr } from "./csr/ArrowBendDownRight.mjs";
import { ArrowBendLeftDown as Vr } from "./csr/ArrowBendLeftDown.mjs";
import { ArrowBendLeftUp as zr } from "./csr/ArrowBendLeftUp.mjs";
import { ArrowBendRightDown as Kr } from "./csr/ArrowBendRightDown.mjs";
import { ArrowBendRightUp as Qr } from "./csr/ArrowBendRightUp.mjs";
import { ArrowBendUpLeft as jr } from "./csr/ArrowBendUpLeft.mjs";
import { ArrowBendUpRight as $r } from "./csr/ArrowBendUpRight.mjs";
import { ArrowCircleDown as ro } from "./csr/ArrowCircleDown.mjs";
import { ArrowCircleDownLeft as eo } from "./csr/ArrowCircleDownLeft.mjs";
import { ArrowCircleDownRight as po } from "./csr/ArrowCircleDownRight.mjs";
import { ArrowCircleLeft as fo } from "./csr/ArrowCircleLeft.mjs";
import { ArrowCircleRight as io } from "./csr/ArrowCircleRight.mjs";
import { ArrowCircleUp as lo } from "./csr/ArrowCircleUp.mjs";
import { ArrowCircleUpLeft as so } from "./csr/ArrowCircleUpLeft.mjs";
import { ArrowCircleUpRight as co } from "./csr/ArrowCircleUpRight.mjs";
import { ArrowClockwise as go } from "./csr/ArrowClockwise.mjs";
import { ArrowCounterClockwise as ho } from "./csr/ArrowCounterClockwise.mjs";
import { ArrowDown as Lo } from "./csr/ArrowDown.mjs";
import { ArrowDownLeft as Ao } from "./csr/ArrowDownLeft.mjs";
import { ArrowDownRight as ko } from "./csr/ArrowDownRight.mjs";
import { ArrowElbowDownLeft as Bo } from "./csr/ArrowElbowDownLeft.mjs";
import { ArrowElbowDownRight as Do } from "./csr/ArrowElbowDownRight.mjs";
import { ArrowElbowLeft as Ho } from "./csr/ArrowElbowLeft.mjs";
import { ArrowElbowLeftDown as Ro } from "./csr/ArrowElbowLeftDown.mjs";
import { ArrowElbowLeftUp as No } from "./csr/ArrowElbowLeftUp.mjs";
import { ArrowElbowRight as Go } from "./csr/ArrowElbowRight.mjs";
import { ArrowElbowRightDown as Eo } from "./csr/ArrowElbowRightDown.mjs";
import { ArrowElbowRightUp as qo } from "./csr/ArrowElbowRightUp.mjs";
import { ArrowElbowUpLeft as Io } from "./csr/ArrowElbowUpLeft.mjs";
import { ArrowElbowUpRight as Xo } from "./csr/ArrowElbowUpRight.mjs";
import { ArrowFatDown as Jo } from "./csr/ArrowFatDown.mjs";
import { ArrowFatLeft as Zo } from "./csr/ArrowFatLeft.mjs";
import { ArrowFatLineDown as Yo } from "./csr/ArrowFatLineDown.mjs";
import { ArrowFatLineLeft as _o } from "./csr/ArrowFatLineLeft.mjs";
import { ArrowFatLineRight as oe } from "./csr/ArrowFatLineRight.mjs";
import { ArrowFatLineUp as te } from "./csr/ArrowFatLineUp.mjs";
import { ArrowFatLinesDown as me } from "./csr/ArrowFatLinesDown.mjs";
import { ArrowFatLinesLeft as xe } from "./csr/ArrowFatLinesLeft.mjs";
import { ArrowFatLinesRight as ae } from "./csr/ArrowFatLinesRight.mjs";
import { ArrowFatLinesUp as ne } from "./csr/ArrowFatLinesUp.mjs";
import { ArrowFatRight as Se } from "./csr/ArrowFatRight.mjs";
import { ArrowFatUp as ue } from "./csr/ArrowFatUp.mjs";
import { ArrowLeft as Ce } from "./csr/ArrowLeft.mjs";
import { ArrowLineDown as de } from "./csr/ArrowLineDown.mjs";
import { ArrowLineDownLeft as Le } from "./csr/ArrowLineDownLeft.mjs";
import { ArrowLineDownRight as Ae } from "./csr/ArrowLineDownRight.mjs";
import { ArrowLineLeft as ke } from "./csr/ArrowLineLeft.mjs";
import { ArrowLineRight as Be } from "./csr/ArrowLineRight.mjs";
import { ArrowLineUp as De } from "./csr/ArrowLineUp.mjs";
import { ArrowLineUpLeft as He } from "./csr/ArrowLineUpLeft.mjs";
import { ArrowLineUpRight as Re } from "./csr/ArrowLineUpRight.mjs";
import { ArrowRight as Ne } from "./csr/ArrowRight.mjs";
import { ArrowSquareDown as Ge } from "./csr/ArrowSquareDown.mjs";
import { ArrowSquareDownLeft as Ee } from "./csr/ArrowSquareDownLeft.mjs";
import { ArrowSquareDownRight as qe } from "./csr/ArrowSquareDownRight.mjs";
import { ArrowSquareIn as Ie } from "./csr/ArrowSquareIn.mjs";
import { ArrowSquareLeft as Xe } from "./csr/ArrowSquareLeft.mjs";
import { ArrowSquareOut as Je } from "./csr/ArrowSquareOut.mjs";
import { ArrowSquareRight as Ze } from "./csr/ArrowSquareRight.mjs";
import { ArrowSquareUp as Ye } from "./csr/ArrowSquareUp.mjs";
import { ArrowSquareUpLeft as _e } from "./csr/ArrowSquareUpLeft.mjs";
import { ArrowSquareUpRight as ot } from "./csr/ArrowSquareUpRight.mjs";
import { ArrowUDownLeft as tt } from "./csr/ArrowUDownLeft.mjs";
import { ArrowUDownRight as mt } from "./csr/ArrowUDownRight.mjs";
import { ArrowULeftDown as xt } from "./csr/ArrowULeftDown.mjs";
import { ArrowULeftUp as at } from "./csr/ArrowULeftUp.mjs";
import { ArrowURightDown as nt } from "./csr/ArrowURightDown.mjs";
import { ArrowURightUp as St } from "./csr/ArrowURightUp.mjs";
import { ArrowUUpLeft as ut } from "./csr/ArrowUUpLeft.mjs";
import { ArrowUUpRight as Ct } from "./csr/ArrowUUpRight.mjs";
import { ArrowUp as dt } from "./csr/ArrowUp.mjs";
import { ArrowUpLeft as Lt } from "./csr/ArrowUpLeft.mjs";
import { ArrowUpRight as At } from "./csr/ArrowUpRight.mjs";
import { ArrowsClockwise as kt } from "./csr/ArrowsClockwise.mjs";
import { ArrowsCounterClockwise as Bt } from "./csr/ArrowsCounterClockwise.mjs";
import { ArrowsDownUp as Dt } from "./csr/ArrowsDownUp.mjs";
import { ArrowsHorizontal as Ht } from "./csr/ArrowsHorizontal.mjs";
import { ArrowsIn as Rt } from "./csr/ArrowsIn.mjs";
import { ArrowsInCardinal as Nt } from "./csr/ArrowsInCardinal.mjs";
import { ArrowsInLineHorizontal as Gt } from "./csr/ArrowsInLineHorizontal.mjs";
import { ArrowsInLineVertical as Et } from "./csr/ArrowsInLineVertical.mjs";
import { ArrowsInSimple as qt } from "./csr/ArrowsInSimple.mjs";
import { ArrowsLeftRight as It } from "./csr/ArrowsLeftRight.mjs";
import { ArrowsMerge as Xt } from "./csr/ArrowsMerge.mjs";
import { ArrowsOut as Jt } from "./csr/ArrowsOut.mjs";
import { ArrowsOutCardinal as Zt } from "./csr/ArrowsOutCardinal.mjs";
import { ArrowsOutLineHorizontal as Yt } from "./csr/ArrowsOutLineHorizontal.mjs";
import { ArrowsOutLineVertical as _t } from "./csr/ArrowsOutLineVertical.mjs";
import { ArrowsOutSimple as op } from "./csr/ArrowsOutSimple.mjs";
import { ArrowsSplit as tp } from "./csr/ArrowsSplit.mjs";
import { ArrowsVertical as mp } from "./csr/ArrowsVertical.mjs";
import { Article as xp } from "./csr/Article.mjs";
import { ArticleMedium as ap } from "./csr/ArticleMedium.mjs";
import { ArticleNyTimes as np } from "./csr/ArticleNyTimes.mjs";
import { Asclepius as Sp, Asclepius as cp } from "./csr/Asclepius.mjs";
import { Asterisk as gp } from "./csr/Asterisk.mjs";
import { AsteriskSimple as hp } from "./csr/AsteriskSimple.mjs";
import { At as wp } from "./csr/At.mjs";
import { Atom as Pp } from "./csr/Atom.mjs";
import { Avocado as Tp } from "./csr/Avocado.mjs";
import { Axe as Fp } from "./csr/Axe.mjs";
import { Baby as bp } from "./csr/Baby.mjs";
import { BabyCarriage as yp } from "./csr/BabyCarriage.mjs";
import { Backpack as Mp } from "./csr/Backpack.mjs";
import { Backspace as Up } from "./csr/Backspace.mjs";
import { Bag as vp } from "./csr/Bag.mjs";
import { BagSimple as Op } from "./csr/BagSimple.mjs";
import { Balloon as Wp } from "./csr/Balloon.mjs";
import { Bandaids as Vp } from "./csr/Bandaids.mjs";
import { Bank as zp } from "./csr/Bank.mjs";
import { Barbell as Kp } from "./csr/Barbell.mjs";
import { Barcode as Qp } from "./csr/Barcode.mjs";
import { Barn as jp } from "./csr/Barn.mjs";
import { Barricade as $p } from "./csr/Barricade.mjs";
import { Baseball as rm } from "./csr/Baseball.mjs";
import { BaseballCap as em } from "./csr/BaseballCap.mjs";
import { BaseballHelmet as pm } from "./csr/BaseballHelmet.mjs";
import { Basket as fm } from "./csr/Basket.mjs";
import { Basketball as im } from "./csr/Basketball.mjs";
import { Bathtub as lm } from "./csr/Bathtub.mjs";
import { BatteryCharging as sm } from "./csr/BatteryCharging.mjs";
import { BatteryChargingVertical as cm } from "./csr/BatteryChargingVertical.mjs";
import { BatteryEmpty as gm } from "./csr/BatteryEmpty.mjs";
import { BatteryFull as hm } from "./csr/BatteryFull.mjs";
import { BatteryHigh as wm } from "./csr/BatteryHigh.mjs";
import { BatteryLow as Pm } from "./csr/BatteryLow.mjs";
import { BatteryMedium as Tm } from "./csr/BatteryMedium.mjs";
import { BatteryPlus as Fm } from "./csr/BatteryPlus.mjs";
import { BatteryPlusVertical as bm } from "./csr/BatteryPlusVertical.mjs";
import { BatteryVerticalEmpty as ym } from "./csr/BatteryVerticalEmpty.mjs";
import { BatteryVerticalFull as Mm } from "./csr/BatteryVerticalFull.mjs";
import { BatteryVerticalHigh as Um } from "./csr/BatteryVerticalHigh.mjs";
import { BatteryVerticalLow as vm } from "./csr/BatteryVerticalLow.mjs";
import { BatteryVerticalMedium as Om } from "./csr/BatteryVerticalMedium.mjs";
import { BatteryWarning as Wm } from "./csr/BatteryWarning.mjs";
import { BatteryWarningVertical as Vm } from "./csr/BatteryWarningVertical.mjs";
import { BeachBall as zm } from "./csr/BeachBall.mjs";
import { Beanie as Km } from "./csr/Beanie.mjs";
import { Bed as Qm } from "./csr/Bed.mjs";
import { BeerBottle as jm } from "./csr/BeerBottle.mjs";
import { BeerStein as $m } from "./csr/BeerStein.mjs";
import { BehanceLogo as rf } from "./csr/BehanceLogo.mjs";
import { Bell as ef } from "./csr/Bell.mjs";
import { BellRinging as pf } from "./csr/BellRinging.mjs";
import { BellSimple as ff } from "./csr/BellSimple.mjs";
import { BellSimpleRinging as af } from "./csr/BellSimpleRinging.mjs";
import { BellSimpleSlash as nf } from "./csr/BellSimpleSlash.mjs";
import { BellSimpleZ as Sf } from "./csr/BellSimpleZ.mjs";
import { BellSlash as uf } from "./csr/BellSlash.mjs";
import { BellZ as Cf } from "./csr/BellZ.mjs";
import { Belt as df } from "./csr/Belt.mjs";
import { BezierCurve as Lf } from "./csr/BezierCurve.mjs";
import { Bicycle as Af } from "./csr/Bicycle.mjs";
import { Binary as kf } from "./csr/Binary.mjs";
import { Binoculars as Bf } from "./csr/Binoculars.mjs";
import { Biohazard as Df } from "./csr/Biohazard.mjs";
import { Bird as Hf } from "./csr/Bird.mjs";
import { Blueprint as Rf } from "./csr/Blueprint.mjs";
import { Bluetooth as Nf } from "./csr/Bluetooth.mjs";
import { BluetoothConnected as Gf } from "./csr/BluetoothConnected.mjs";
import { BluetoothSlash as Ef } from "./csr/BluetoothSlash.mjs";
import { BluetoothX as qf } from "./csr/BluetoothX.mjs";
import { Boat as If } from "./csr/Boat.mjs";
import { Bomb as Xf } from "./csr/Bomb.mjs";
import { Bone as Jf } from "./csr/Bone.mjs";
import { Book as Zf } from "./csr/Book.mjs";
import { BookBookmark as Yf } from "./csr/BookBookmark.mjs";
import { BookOpen as _f } from "./csr/BookOpen.mjs";
import { BookOpenText as ox } from "./csr/BookOpenText.mjs";
import { BookOpenUser as tx } from "./csr/BookOpenUser.mjs";
import { Bookmark as mx } from "./csr/Bookmark.mjs";
import { BookmarkSimple as xx } from "./csr/BookmarkSimple.mjs";
import { Bookmarks as ax } from "./csr/Bookmarks.mjs";
import { BookmarksSimple as nx } from "./csr/BookmarksSimple.mjs";
import { Books as Sx } from "./csr/Books.mjs";
import { Boot as ux } from "./csr/Boot.mjs";
import { Boules as Cx } from "./csr/Boules.mjs";
import { BoundingBox as dx } from "./csr/BoundingBox.mjs";
import { BowlFood as Lx } from "./csr/BowlFood.mjs";
import { BowlSteam as Ax } from "./csr/BowlSteam.mjs";
import { BowlingBall as kx } from "./csr/BowlingBall.mjs";
import { BoxArrowDown as Bx, BoxArrowDown as bx } from "./csr/BoxArrowDown.mjs";
import { BoxArrowUp as yx } from "./csr/BoxArrowUp.mjs";
import { BoxingGlove as Mx } from "./csr/BoxingGlove.mjs";
import { BracketsAngle as Ux } from "./csr/BracketsAngle.mjs";
import { BracketsCurly as vx } from "./csr/BracketsCurly.mjs";
import { BracketsRound as Ox } from "./csr/BracketsRound.mjs";
import { BracketsSquare as Wx } from "./csr/BracketsSquare.mjs";
import { Brain as Vx } from "./csr/Brain.mjs";
import { Brandy as zx } from "./csr/Brandy.mjs";
import { Bread as Kx } from "./csr/Bread.mjs";
import { Bridge as Qx } from "./csr/Bridge.mjs";
import { Briefcase as jx } from "./csr/Briefcase.mjs";
import { BriefcaseMetal as $x } from "./csr/BriefcaseMetal.mjs";
import { Broadcast as ri } from "./csr/Broadcast.mjs";
import { Broom as ei } from "./csr/Broom.mjs";
import { Browser as pi } from "./csr/Browser.mjs";
import { Browsers as fi } from "./csr/Browsers.mjs";
import { BugBeetle as ii } from "./csr/BugBeetle.mjs";
import { Bug as li } from "./csr/Bug.mjs";
import { BugDroid as si } from "./csr/BugDroid.mjs";
import { BuildingApartment as ci } from "./csr/BuildingApartment.mjs";
import { Building as gi } from "./csr/Building.mjs";
import { BuildingOffice as hi } from "./csr/BuildingOffice.mjs";
import { Buildings as wi } from "./csr/Buildings.mjs";
import { Bulldozer as Pi } from "./csr/Bulldozer.mjs";
import { Bus as Ti } from "./csr/Bus.mjs";
import { Butterfly as Fi } from "./csr/Butterfly.mjs";
import { CableCar as bi } from "./csr/CableCar.mjs";
import { Cactus as yi } from "./csr/Cactus.mjs";
import { Cake as Mi } from "./csr/Cake.mjs";
import { Calculator as Ui } from "./csr/Calculator.mjs";
import { CalendarBlank as vi } from "./csr/CalendarBlank.mjs";
import { Calendar as Oi } from "./csr/Calendar.mjs";
import { CalendarCheck as Wi } from "./csr/CalendarCheck.mjs";
import { CalendarDot as Vi } from "./csr/CalendarDot.mjs";
import { CalendarDots as zi } from "./csr/CalendarDots.mjs";
import { CalendarHeart as Ki } from "./csr/CalendarHeart.mjs";
import { CalendarMinus as Qi } from "./csr/CalendarMinus.mjs";
import { CalendarPlus as ji } from "./csr/CalendarPlus.mjs";
import { CalendarSlash as $i } from "./csr/CalendarSlash.mjs";
import { CalendarStar as ra } from "./csr/CalendarStar.mjs";
import { CalendarX as ea } from "./csr/CalendarX.mjs";
import { CallBell as pa } from "./csr/CallBell.mjs";
import { Camera as fa } from "./csr/Camera.mjs";
import { CameraPlus as ia } from "./csr/CameraPlus.mjs";
import { CameraRotate as la } from "./csr/CameraRotate.mjs";
import { CameraSlash as sa } from "./csr/CameraSlash.mjs";
import { Campfire as ca } from "./csr/Campfire.mjs";
import { CarBattery as ga } from "./csr/CarBattery.mjs";
import { Car as ha } from "./csr/Car.mjs";
import { CarProfile as wa } from "./csr/CarProfile.mjs";
import { CarSimple as Pa } from "./csr/CarSimple.mjs";
import { Cardholder as Ta } from "./csr/Cardholder.mjs";
import { Cards as Fa } from "./csr/Cards.mjs";
import { CardsThree as ba } from "./csr/CardsThree.mjs";
import { CaretCircleDoubleDown as ya } from "./csr/CaretCircleDoubleDown.mjs";
import { CaretCircleDoubleLeft as Ma } from "./csr/CaretCircleDoubleLeft.mjs";
import { CaretCircleDoubleRight as Ua } from "./csr/CaretCircleDoubleRight.mjs";
import { CaretCircleDoubleUp as va } from "./csr/CaretCircleDoubleUp.mjs";
import { CaretCircleDown as Oa } from "./csr/CaretCircleDown.mjs";
import { CaretCircleLeft as Wa } from "./csr/CaretCircleLeft.mjs";
import { CaretCircleRight as Va } from "./csr/CaretCircleRight.mjs";
import { CaretCircleUp as za } from "./csr/CaretCircleUp.mjs";
import { CaretCircleUpDown as Ka } from "./csr/CaretCircleUpDown.mjs";
import { CaretDoubleDown as Qa } from "./csr/CaretDoubleDown.mjs";
import { CaretDoubleLeft as ja } from "./csr/CaretDoubleLeft.mjs";
import { CaretDoubleRight as $a } from "./csr/CaretDoubleRight.mjs";
import { CaretDoubleUp as rl } from "./csr/CaretDoubleUp.mjs";
import { CaretDown as el } from "./csr/CaretDown.mjs";
import { CaretLeft as pl } from "./csr/CaretLeft.mjs";
import { CaretLineDown as fl } from "./csr/CaretLineDown.mjs";
import { CaretLineLeft as il } from "./csr/CaretLineLeft.mjs";
import { CaretLineRight as ll } from "./csr/CaretLineRight.mjs";
import { CaretLineUp as sl } from "./csr/CaretLineUp.mjs";
import { CaretRight as cl } from "./csr/CaretRight.mjs";
import { CaretUp as gl } from "./csr/CaretUp.mjs";
import { CaretUpDown as hl } from "./csr/CaretUpDown.mjs";
import { Carrot as wl } from "./csr/Carrot.mjs";
import { CashRegister as Pl } from "./csr/CashRegister.mjs";
import { CassetteTape as Tl } from "./csr/CassetteTape.mjs";
import { CastleTurret as Fl } from "./csr/CastleTurret.mjs";
import { Cat as bl } from "./csr/Cat.mjs";
import { CellSignalFull as yl } from "./csr/CellSignalFull.mjs";
import { CellSignalHigh as Ml } from "./csr/CellSignalHigh.mjs";
import { CellSignalLow as Ul } from "./csr/CellSignalLow.mjs";
import { CellSignalMedium as vl } from "./csr/CellSignalMedium.mjs";
import { CellSignalNone as Ol } from "./csr/CellSignalNone.mjs";
import { CellSignalSlash as Wl } from "./csr/CellSignalSlash.mjs";
import { CellSignalX as Vl } from "./csr/CellSignalX.mjs";
import { CellTower as zl } from "./csr/CellTower.mjs";
import { Certificate as Kl } from "./csr/Certificate.mjs";
import { Chair as Ql } from "./csr/Chair.mjs";
import { Chalkboard as jl } from "./csr/Chalkboard.mjs";
import { ChalkboardSimple as $l } from "./csr/ChalkboardSimple.mjs";
import { ChalkboardTeacher as rn } from "./csr/ChalkboardTeacher.mjs";
import { Champagne as en } from "./csr/Champagne.mjs";
import { ChargingStation as pn } from "./csr/ChargingStation.mjs";
import { ChartBar as fn } from "./csr/ChartBar.mjs";
import { ChartBarHorizontal as an } from "./csr/ChartBarHorizontal.mjs";
import { ChartDonut as nn } from "./csr/ChartDonut.mjs";
import { ChartLine as Sn } from "./csr/ChartLine.mjs";
import { ChartLineDown as un } from "./csr/ChartLineDown.mjs";
import { ChartLineUp as Cn } from "./csr/ChartLineUp.mjs";
import { ChartPie as dn } from "./csr/ChartPie.mjs";
import { ChartPieSlice as Ln } from "./csr/ChartPieSlice.mjs";
import { ChartPolar as An } from "./csr/ChartPolar.mjs";
import { ChartScatter as kn } from "./csr/ChartScatter.mjs";
import { Chat as Bn } from "./csr/Chat.mjs";
import { ChatCentered as Dn } from "./csr/ChatCentered.mjs";
import { ChatCenteredDots as Hn } from "./csr/ChatCenteredDots.mjs";
import { ChatCenteredSlash as Rn } from "./csr/ChatCenteredSlash.mjs";
import { ChatCenteredText as Nn } from "./csr/ChatCenteredText.mjs";
import { ChatCircle as Gn } from "./csr/ChatCircle.mjs";
import { ChatCircleDots as En } from "./csr/ChatCircleDots.mjs";
import { ChatCircleSlash as qn } from "./csr/ChatCircleSlash.mjs";
import { ChatCircleText as In } from "./csr/ChatCircleText.mjs";
import { ChatDots as Xn } from "./csr/ChatDots.mjs";
import { ChatSlash as Jn } from "./csr/ChatSlash.mjs";
import { ChatTeardrop as Zn } from "./csr/ChatTeardrop.mjs";
import { ChatTeardropDots as Yn } from "./csr/ChatTeardropDots.mjs";
import { ChatTeardropSlash as _n } from "./csr/ChatTeardropSlash.mjs";
import { ChatTeardropText as os } from "./csr/ChatTeardropText.mjs";
import { ChatText as ts } from "./csr/ChatText.mjs";
import { Chats as ms } from "./csr/Chats.mjs";
import { ChatsCircle as xs } from "./csr/ChatsCircle.mjs";
import { ChatsTeardrop as as } from "./csr/ChatsTeardrop.mjs";
import { Check as ns } from "./csr/Check.mjs";
import { CheckCircle as Ss } from "./csr/CheckCircle.mjs";
import { CheckFat as us } from "./csr/CheckFat.mjs";
import { CheckSquare as Cs } from "./csr/CheckSquare.mjs";
import { CheckSquareOffset as ds } from "./csr/CheckSquareOffset.mjs";
import { Checkerboard as Ls } from "./csr/Checkerboard.mjs";
import { Checks as As } from "./csr/Checks.mjs";
import { Cheers as ks } from "./csr/Cheers.mjs";
import { Cheese as Bs } from "./csr/Cheese.mjs";
import { ChefHat as Ds } from "./csr/ChefHat.mjs";
import { Cherries as Hs } from "./csr/Cherries.mjs";
import { Church as Rs } from "./csr/Church.mjs";
import { Cigarette as Ns } from "./csr/Cigarette.mjs";
import { CigaretteSlash as Gs } from "./csr/CigaretteSlash.mjs";
import { Circle as Es } from "./csr/Circle.mjs";
import { CircleDashed as qs } from "./csr/CircleDashed.mjs";
import { CircleHalf as Is } from "./csr/CircleHalf.mjs";
import { CircleHalfTilt as Xs } from "./csr/CircleHalfTilt.mjs";
import { CircleNotch as Js } from "./csr/CircleNotch.mjs";
import { CirclesFour as Zs } from "./csr/CirclesFour.mjs";
import { CirclesThree as Ys } from "./csr/CirclesThree.mjs";
import { CirclesThreePlus as _s } from "./csr/CirclesThreePlus.mjs";
import { Circuitry as oS } from "./csr/Circuitry.mjs";
import { City as tS } from "./csr/City.mjs";
import { Clipboard as mS } from "./csr/Clipboard.mjs";
import { ClipboardText as xS } from "./csr/ClipboardText.mjs";
import { ClockAfternoon as aS } from "./csr/ClockAfternoon.mjs";
import { Clock as nS } from "./csr/Clock.mjs";
import { ClockClockwise as SS } from "./csr/ClockClockwise.mjs";
import { ClockCountdown as uS } from "./csr/ClockCountdown.mjs";
import { ClockCounterClockwise as CS } from "./csr/ClockCounterClockwise.mjs";
import { ClockUser as dS } from "./csr/ClockUser.mjs";
import { ClosedCaptioning as LS } from "./csr/ClosedCaptioning.mjs";
import { CloudArrowDown as AS } from "./csr/CloudArrowDown.mjs";
import { CloudArrowUp as kS } from "./csr/CloudArrowUp.mjs";
import { Cloud as BS } from "./csr/Cloud.mjs";
import { CloudCheck as DS } from "./csr/CloudCheck.mjs";
import { CloudFog as HS } from "./csr/CloudFog.mjs";
import { CloudLightning as RS } from "./csr/CloudLightning.mjs";
import { CloudMoon as NS } from "./csr/CloudMoon.mjs";
import { CloudRain as GS } from "./csr/CloudRain.mjs";
import { CloudSlash as ES } from "./csr/CloudSlash.mjs";
import { CloudSnow as qS } from "./csr/CloudSnow.mjs";
import { CloudSun as IS } from "./csr/CloudSun.mjs";
import { CloudWarning as XS } from "./csr/CloudWarning.mjs";
import { CloudX as JS } from "./csr/CloudX.mjs";
import { Clover as ZS } from "./csr/Clover.mjs";
import { Club as YS } from "./csr/Club.mjs";
import { CoatHanger as _S } from "./csr/CoatHanger.mjs";
import { CodaLogo as oc } from "./csr/CodaLogo.mjs";
import { CodeBlock as tc } from "./csr/CodeBlock.mjs";
import { Code as mc } from "./csr/Code.mjs";
import { CodeSimple as xc } from "./csr/CodeSimple.mjs";
import { CodepenLogo as ac } from "./csr/CodepenLogo.mjs";
import { CodesandboxLogo as nc } from "./csr/CodesandboxLogo.mjs";
import { CoffeeBean as Sc } from "./csr/CoffeeBean.mjs";
import { Coffee as uc } from "./csr/Coffee.mjs";
import { Coin as Cc } from "./csr/Coin.mjs";
import { CoinVertical as dc } from "./csr/CoinVertical.mjs";
import { Coins as Lc } from "./csr/Coins.mjs";
import { Columns as Ac } from "./csr/Columns.mjs";
import { ColumnsPlusLeft as kc } from "./csr/ColumnsPlusLeft.mjs";
import { ColumnsPlusRight as Bc } from "./csr/ColumnsPlusRight.mjs";
import { Command as Dc } from "./csr/Command.mjs";
import { Compass as Hc } from "./csr/Compass.mjs";
import { CompassRose as Rc } from "./csr/CompassRose.mjs";
import { CompassTool as Nc } from "./csr/CompassTool.mjs";
import { ComputerTower as Gc } from "./csr/ComputerTower.mjs";
import { Confetti as Ec } from "./csr/Confetti.mjs";
import { ContactlessPayment as qc } from "./csr/ContactlessPayment.mjs";
import { Control as Ic } from "./csr/Control.mjs";
import { Cookie as Xc } from "./csr/Cookie.mjs";
import { CookingPot as Jc } from "./csr/CookingPot.mjs";
import { Copy as Zc } from "./csr/Copy.mjs";
import { CopySimple as Yc } from "./csr/CopySimple.mjs";
import { Copyleft as _c } from "./csr/Copyleft.mjs";
import { Copyright as ou } from "./csr/Copyright.mjs";
import { CornersIn as tu } from "./csr/CornersIn.mjs";
import { CornersOut as mu } from "./csr/CornersOut.mjs";
import { Couch as xu } from "./csr/Couch.mjs";
import { CourtBasketball as au } from "./csr/CourtBasketball.mjs";
import { Cow as nu } from "./csr/Cow.mjs";
import { CowboyHat as Su } from "./csr/CowboyHat.mjs";
import { Cpu as uu } from "./csr/Cpu.mjs";
import { Crane as Cu } from "./csr/Crane.mjs";
import { CraneTower as du } from "./csr/CraneTower.mjs";
import { CreditCard as Lu } from "./csr/CreditCard.mjs";
import { Cricket as Au } from "./csr/Cricket.mjs";
import { Crop as ku } from "./csr/Crop.mjs";
import { Cross as Bu } from "./csr/Cross.mjs";
import { Crosshair as Du } from "./csr/Crosshair.mjs";
import { CrosshairSimple as Hu } from "./csr/CrosshairSimple.mjs";
import { Crown as Ru } from "./csr/Crown.mjs";
import { CrownCross as Nu } from "./csr/CrownCross.mjs";
import { CrownSimple as Gu } from "./csr/CrownSimple.mjs";
import { Cube as Eu } from "./csr/Cube.mjs";
import { CubeFocus as qu } from "./csr/CubeFocus.mjs";
import { CubeTransparent as Iu } from "./csr/CubeTransparent.mjs";
import { CurrencyBtc as Xu } from "./csr/CurrencyBtc.mjs";
import { CurrencyCircleDollar as Ju } from "./csr/CurrencyCircleDollar.mjs";
import { CurrencyCny as Zu } from "./csr/CurrencyCny.mjs";
import { CurrencyDollar as Yu } from "./csr/CurrencyDollar.mjs";
import { CurrencyDollarSimple as _u } from "./csr/CurrencyDollarSimple.mjs";
import { CurrencyEth as og } from "./csr/CurrencyEth.mjs";
import { CurrencyEur as tg } from "./csr/CurrencyEur.mjs";
import { CurrencyGbp as mg } from "./csr/CurrencyGbp.mjs";
import { CurrencyInr as xg } from "./csr/CurrencyInr.mjs";
import { CurrencyJpy as ag } from "./csr/CurrencyJpy.mjs";
import { CurrencyKrw as ng } from "./csr/CurrencyKrw.mjs";
import { CurrencyKzt as Sg } from "./csr/CurrencyKzt.mjs";
import { CurrencyNgn as ug } from "./csr/CurrencyNgn.mjs";
import { CurrencyRub as Cg } from "./csr/CurrencyRub.mjs";
import { Cursor as dg } from "./csr/Cursor.mjs";
import { CursorClick as Lg } from "./csr/CursorClick.mjs";
import { CursorText as Ag } from "./csr/CursorText.mjs";
import { Cylinder as kg } from "./csr/Cylinder.mjs";
import { Database as Bg } from "./csr/Database.mjs";
import { Desk as Dg } from "./csr/Desk.mjs";
import { Desktop as Hg } from "./csr/Desktop.mjs";
import { DesktopTower as Rg } from "./csr/DesktopTower.mjs";
import { Detective as Ng } from "./csr/Detective.mjs";
import { DevToLogo as Gg } from "./csr/DevToLogo.mjs";
import { DeviceMobile as Eg } from "./csr/DeviceMobile.mjs";
import { DeviceMobileCamera as qg } from "./csr/DeviceMobileCamera.mjs";
import { DeviceMobileSlash as Ig } from "./csr/DeviceMobileSlash.mjs";
import { DeviceMobileSpeaker as Xg } from "./csr/DeviceMobileSpeaker.mjs";
import { DeviceRotate as Jg } from "./csr/DeviceRotate.mjs";
import { DeviceTablet as Zg } from "./csr/DeviceTablet.mjs";
import { DeviceTabletCamera as Yg } from "./csr/DeviceTabletCamera.mjs";
import { DeviceTabletSpeaker as _g } from "./csr/DeviceTabletSpeaker.mjs";
import { Devices as oC } from "./csr/Devices.mjs";
import { Diamond as tC } from "./csr/Diamond.mjs";
import { DiamondsFour as mC } from "./csr/DiamondsFour.mjs";
import { DiceFive as xC } from "./csr/DiceFive.mjs";
import { DiceFour as aC } from "./csr/DiceFour.mjs";
import { DiceOne as nC } from "./csr/DiceOne.mjs";
import { DiceSix as SC } from "./csr/DiceSix.mjs";
import { DiceThree as uC } from "./csr/DiceThree.mjs";
import { DiceTwo as CC } from "./csr/DiceTwo.mjs";
import { Disc as dC } from "./csr/Disc.mjs";
import { DiscoBall as LC } from "./csr/DiscoBall.mjs";
import { DiscordLogo as AC } from "./csr/DiscordLogo.mjs";
import { Divide as kC } from "./csr/Divide.mjs";
import { Dna as BC } from "./csr/Dna.mjs";
import { Dog as DC } from "./csr/Dog.mjs";
import { Door as HC } from "./csr/Door.mjs";
import { DoorOpen as RC } from "./csr/DoorOpen.mjs";
import { Dot as NC } from "./csr/Dot.mjs";
import { DotOutline as GC } from "./csr/DotOutline.mjs";
import { DotsNine as EC } from "./csr/DotsNine.mjs";
import { DotsSix as qC } from "./csr/DotsSix.mjs";
import { DotsSixVertical as IC } from "./csr/DotsSixVertical.mjs";
import { DotsThree as XC } from "./csr/DotsThree.mjs";
import { DotsThreeCircle as JC } from "./csr/DotsThreeCircle.mjs";
import { DotsThreeCircleVertical as ZC } from "./csr/DotsThreeCircleVertical.mjs";
import { DotsThreeOutline as YC } from "./csr/DotsThreeOutline.mjs";
import { DotsThreeOutlineVertical as _C } from "./csr/DotsThreeOutlineVertical.mjs";
import { DotsThreeVertical as oh } from "./csr/DotsThreeVertical.mjs";
import { Download as th } from "./csr/Download.mjs";
import { DownloadSimple as mh } from "./csr/DownloadSimple.mjs";
import { Dress as xh } from "./csr/Dress.mjs";
import { Dresser as ah } from "./csr/Dresser.mjs";
import { DribbbleLogo as nh } from "./csr/DribbbleLogo.mjs";
import { Drone as Sh } from "./csr/Drone.mjs";
import { Drop as uh } from "./csr/Drop.mjs";
import { DropHalf as Ch } from "./csr/DropHalf.mjs";
import { DropHalfBottom as dh } from "./csr/DropHalfBottom.mjs";
import { DropSimple as Lh } from "./csr/DropSimple.mjs";
import { DropSlash as Ah } from "./csr/DropSlash.mjs";
import { DropboxLogo as kh } from "./csr/DropboxLogo.mjs";
import { Ear as Bh } from "./csr/Ear.mjs";
import { EarSlash as Dh } from "./csr/EarSlash.mjs";
import { Egg as Hh } from "./csr/Egg.mjs";
import { EggCrack as Rh } from "./csr/EggCrack.mjs";
import { Eject as Nh } from "./csr/Eject.mjs";
import { EjectSimple as Gh } from "./csr/EjectSimple.mjs";
import { Elevator as Eh } from "./csr/Elevator.mjs";
import { Empty as qh } from "./csr/Empty.mjs";
import { Engine as Ih } from "./csr/Engine.mjs";
import { Envelope as Xh } from "./csr/Envelope.mjs";
import { EnvelopeOpen as Jh } from "./csr/EnvelopeOpen.mjs";
import { EnvelopeSimple as Zh } from "./csr/EnvelopeSimple.mjs";
import { EnvelopeSimpleOpen as Yh } from "./csr/EnvelopeSimpleOpen.mjs";
import { Equalizer as _h } from "./csr/Equalizer.mjs";
import { Equals as od } from "./csr/Equals.mjs";
import { Eraser as td } from "./csr/Eraser.mjs";
import { EscalatorDown as md } from "./csr/EscalatorDown.mjs";
import { EscalatorUp as xd } from "./csr/EscalatorUp.mjs";
import { Exam as ad } from "./csr/Exam.mjs";
import { ExclamationMark as nd } from "./csr/ExclamationMark.mjs";
import { Exclude as Sd } from "./csr/Exclude.mjs";
import { ExcludeSquare as ud } from "./csr/ExcludeSquare.mjs";
import { Export as Cd } from "./csr/Export.mjs";
import { Eye as dd } from "./csr/Eye.mjs";
import { EyeClosed as Ld } from "./csr/EyeClosed.mjs";
import { EyeSlash as Ad } from "./csr/EyeSlash.mjs";
import { Eyedropper as kd } from "./csr/Eyedropper.mjs";
import { EyedropperSample as Bd } from "./csr/EyedropperSample.mjs";
import { Eyeglasses as Dd } from "./csr/Eyeglasses.mjs";
import { Eyes as Hd } from "./csr/Eyes.mjs";
import { FaceMask as Rd } from "./csr/FaceMask.mjs";
import { FacebookLogo as Nd } from "./csr/FacebookLogo.mjs";
import { Factory as Gd } from "./csr/Factory.mjs";
import { Faders as Ed } from "./csr/Faders.mjs";
import { FadersHorizontal as qd } from "./csr/FadersHorizontal.mjs";
import { FalloutShelter as Id } from "./csr/FalloutShelter.mjs";
import { Fan as Xd } from "./csr/Fan.mjs";
import { Farm as Jd } from "./csr/Farm.mjs";
import { FastForward as Zd } from "./csr/FastForward.mjs";
import { FastForwardCircle as Yd } from "./csr/FastForwardCircle.mjs";
import { Feather as _d } from "./csr/Feather.mjs";
import { FediverseLogo as ow } from "./csr/FediverseLogo.mjs";
import { FigmaLogo as tw } from "./csr/FigmaLogo.mjs";
import { FileArchive as mw } from "./csr/FileArchive.mjs";
import { FileArrowDown as xw } from "./csr/FileArrowDown.mjs";
import { FileArrowUp as aw } from "./csr/FileArrowUp.mjs";
import { FileAudio as nw } from "./csr/FileAudio.mjs";
import { File as Sw } from "./csr/File.mjs";
import { FileC as uw } from "./csr/FileC.mjs";
import { FileCSharp as Cw } from "./csr/FileCSharp.mjs";
import { FileCloud as dw } from "./csr/FileCloud.mjs";
import { FileCode as Lw } from "./csr/FileCode.mjs";
import { FileCpp as Aw } from "./csr/FileCpp.mjs";
import { FileCss as kw } from "./csr/FileCss.mjs";
import { FileCsv as Bw } from "./csr/FileCsv.mjs";
import { FileDashed as Dw, FileDashed as yw } from "./csr/FileDashed.mjs";
import { FileDoc as Mw } from "./csr/FileDoc.mjs";
import { FileHtml as Uw } from "./csr/FileHtml.mjs";
import { FileImage as vw } from "./csr/FileImage.mjs";
import { FileIni as Ow } from "./csr/FileIni.mjs";
import { FileJpg as Ww } from "./csr/FileJpg.mjs";
import { FileJs as Vw } from "./csr/FileJs.mjs";
import { FileJsx as zw } from "./csr/FileJsx.mjs";
import { FileLock as Kw } from "./csr/FileLock.mjs";
import { FileMagnifyingGlass as Qw, FileMagnifyingGlass as Zw } from "./csr/FileMagnifyingGlass.mjs";
import { FileMd as Yw } from "./csr/FileMd.mjs";
import { FileMinus as _w } from "./csr/FileMinus.mjs";
import { FilePdf as oL } from "./csr/FilePdf.mjs";
import { FilePlus as tL } from "./csr/FilePlus.mjs";
import { FilePng as mL } from "./csr/FilePng.mjs";
import { FilePpt as xL } from "./csr/FilePpt.mjs";
import { FilePy as aL } from "./csr/FilePy.mjs";
import { FileRs as nL } from "./csr/FileRs.mjs";
import { FileSql as SL } from "./csr/FileSql.mjs";
import { FileSvg as uL } from "./csr/FileSvg.mjs";
import { FileText as CL } from "./csr/FileText.mjs";
import { FileTs as dL } from "./csr/FileTs.mjs";
import { FileTsx as LL } from "./csr/FileTsx.mjs";
import { FileTxt as AL } from "./csr/FileTxt.mjs";
import { FileVideo as kL } from "./csr/FileVideo.mjs";
import { FileVue as BL } from "./csr/FileVue.mjs";
import { FileX as DL } from "./csr/FileX.mjs";
import { FileXls as HL } from "./csr/FileXls.mjs";
import { FileZip as RL } from "./csr/FileZip.mjs";
import { Files as NL } from "./csr/Files.mjs";
import { FilmReel as GL } from "./csr/FilmReel.mjs";
import { FilmScript as EL } from "./csr/FilmScript.mjs";
import { FilmSlate as qL } from "./csr/FilmSlate.mjs";
import { FilmStrip as IL } from "./csr/FilmStrip.mjs";
import { Fingerprint as XL } from "./csr/Fingerprint.mjs";
import { FingerprintSimple as JL } from "./csr/FingerprintSimple.mjs";
import { FinnTheHuman as ZL } from "./csr/FinnTheHuman.mjs";
import { Fire as YL } from "./csr/Fire.mjs";
import { FireExtinguisher as _L } from "./csr/FireExtinguisher.mjs";
import { FireSimple as oP } from "./csr/FireSimple.mjs";
import { FireTruck as tP } from "./csr/FireTruck.mjs";
import { FirstAid as mP } from "./csr/FirstAid.mjs";
import { FirstAidKit as xP } from "./csr/FirstAidKit.mjs";
import { Fish as aP } from "./csr/Fish.mjs";
import { FishSimple as nP } from "./csr/FishSimple.mjs";
import { FlagBanner as SP } from "./csr/FlagBanner.mjs";
import { FlagBannerFold as uP } from "./csr/FlagBannerFold.mjs";
import { Flag as CP } from "./csr/Flag.mjs";
import { FlagCheckered as dP } from "./csr/FlagCheckered.mjs";
import { FlagPennant as LP } from "./csr/FlagPennant.mjs";
import { Flame as AP } from "./csr/Flame.mjs";
import { Flashlight as kP } from "./csr/Flashlight.mjs";
import { Flask as BP } from "./csr/Flask.mjs";
import { FlipHorizontal as DP } from "./csr/FlipHorizontal.mjs";
import { FlipVertical as HP } from "./csr/FlipVertical.mjs";
import { FloppyDiskBack as RP } from "./csr/FloppyDiskBack.mjs";
import { FloppyDisk as NP } from "./csr/FloppyDisk.mjs";
import { FlowArrow as GP } from "./csr/FlowArrow.mjs";
import { Flower as EP } from "./csr/Flower.mjs";
import { FlowerLotus as qP } from "./csr/FlowerLotus.mjs";
import { FlowerTulip as IP } from "./csr/FlowerTulip.mjs";
import { FlyingSaucer as XP } from "./csr/FlyingSaucer.mjs";
import { Folder as JP, Folder as QP } from "./csr/Folder.mjs";
import { FolderDashed as jP, FolderDashed as YP } from "./csr/FolderDashed.mjs";
import { FolderLock as _P } from "./csr/FolderLock.mjs";
import { FolderMinus as oA, FolderMinus as eA } from "./csr/FolderMinus.mjs";
import { FolderOpen as pA, FolderOpen as mA } from "./csr/FolderOpen.mjs";
import { FolderPlus as xA, FolderPlus as iA } from "./csr/FolderPlus.mjs";
import { FolderSimple as lA } from "./csr/FolderSimple.mjs";
import { FolderSimpleDashed as sA, FolderSimpleDashed as SA } from "./csr/FolderSimpleDashed.mjs";
import { FolderSimpleLock as uA } from "./csr/FolderSimpleLock.mjs";
import { FolderSimpleMinus as CA } from "./csr/FolderSimpleMinus.mjs";
import { FolderSimplePlus as dA } from "./csr/FolderSimplePlus.mjs";
import { FolderSimpleStar as LA } from "./csr/FolderSimpleStar.mjs";
import { FolderSimpleUser as AA } from "./csr/FolderSimpleUser.mjs";
import { FolderStar as kA } from "./csr/FolderStar.mjs";
import { FolderUser as BA } from "./csr/FolderUser.mjs";
import { Folders as DA } from "./csr/Folders.mjs";
import { Football as HA } from "./csr/Football.mjs";
import { FootballHelmet as RA } from "./csr/FootballHelmet.mjs";
import { Footprints as NA } from "./csr/Footprints.mjs";
import { ForkKnife as GA } from "./csr/ForkKnife.mjs";
import { FourK as EA } from "./csr/FourK.mjs";
import { FrameCorners as qA } from "./csr/FrameCorners.mjs";
import { FramerLogo as IA } from "./csr/FramerLogo.mjs";
import { Function as XA } from "./csr/Function.mjs";
import { Funnel as JA } from "./csr/Funnel.mjs";
import { FunnelSimple as ZA } from "./csr/FunnelSimple.mjs";
import { FunnelSimpleX as YA } from "./csr/FunnelSimpleX.mjs";
import { FunnelX as _A } from "./csr/FunnelX.mjs";
import { GameController as oT } from "./csr/GameController.mjs";
import { Garage as tT } from "./csr/Garage.mjs";
import { GasCan as mT } from "./csr/GasCan.mjs";
import { GasPump as xT } from "./csr/GasPump.mjs";
import { Gauge as aT } from "./csr/Gauge.mjs";
import { Gavel as nT } from "./csr/Gavel.mjs";
import { Gear as ST } from "./csr/Gear.mjs";
import { GearFine as uT } from "./csr/GearFine.mjs";
import { GearSix as CT } from "./csr/GearSix.mjs";
import { GenderFemale as dT } from "./csr/GenderFemale.mjs";
import { GenderIntersex as LT } from "./csr/GenderIntersex.mjs";
import { GenderMale as AT } from "./csr/GenderMale.mjs";
import { GenderNeuter as kT } from "./csr/GenderNeuter.mjs";
import { GenderNonbinary as BT } from "./csr/GenderNonbinary.mjs";
import { GenderTransgender as DT } from "./csr/GenderTransgender.mjs";
import { Ghost as HT } from "./csr/Ghost.mjs";
import { Gif as RT } from "./csr/Gif.mjs";
import { Gift as NT } from "./csr/Gift.mjs";
import { GitBranch as GT } from "./csr/GitBranch.mjs";
import { GitCommit as ET } from "./csr/GitCommit.mjs";
import { GitDiff as qT } from "./csr/GitDiff.mjs";
import { GitFork as IT } from "./csr/GitFork.mjs";
import { GitMerge as XT } from "./csr/GitMerge.mjs";
import { GitPullRequest as JT } from "./csr/GitPullRequest.mjs";
import { GithubLogo as ZT } from "./csr/GithubLogo.mjs";
import { GitlabLogo as YT } from "./csr/GitlabLogo.mjs";
import { GitlabLogoSimple as _T } from "./csr/GitlabLogoSimple.mjs";
import { Globe as ok } from "./csr/Globe.mjs";
import { GlobeHemisphereEast as tk } from "./csr/GlobeHemisphereEast.mjs";
import { GlobeHemisphereWest as mk } from "./csr/GlobeHemisphereWest.mjs";
import { GlobeSimple as xk } from "./csr/GlobeSimple.mjs";
import { GlobeSimpleX as ak } from "./csr/GlobeSimpleX.mjs";
import { GlobeStand as nk } from "./csr/GlobeStand.mjs";
import { GlobeX as Sk } from "./csr/GlobeX.mjs";
import { Goggles as uk } from "./csr/Goggles.mjs";
import { Golf as Ck } from "./csr/Golf.mjs";
import { GoodreadsLogo as dk } from "./csr/GoodreadsLogo.mjs";
import { GoogleCardboardLogo as Lk } from "./csr/GoogleCardboardLogo.mjs";
import { GoogleChromeLogo as Ak } from "./csr/GoogleChromeLogo.mjs";
import { GoogleDriveLogo as kk } from "./csr/GoogleDriveLogo.mjs";
import { GoogleLogo as Bk } from "./csr/GoogleLogo.mjs";
import { GooglePhotosLogo as Dk } from "./csr/GooglePhotosLogo.mjs";
import { GooglePlayLogo as Hk } from "./csr/GooglePlayLogo.mjs";
import { GooglePodcastsLogo as Rk } from "./csr/GooglePodcastsLogo.mjs";
import { Gps as Nk } from "./csr/Gps.mjs";
import { GpsFix as Gk } from "./csr/GpsFix.mjs";
import { GpsSlash as Ek } from "./csr/GpsSlash.mjs";
import { Gradient as qk } from "./csr/Gradient.mjs";
import { GraduationCap as Ik } from "./csr/GraduationCap.mjs";
import { Grains as Xk } from "./csr/Grains.mjs";
import { GrainsSlash as Jk } from "./csr/GrainsSlash.mjs";
import { Graph as Zk } from "./csr/Graph.mjs";
import { GraphicsCard as Yk } from "./csr/GraphicsCard.mjs";
import { GreaterThan as _k } from "./csr/GreaterThan.mjs";
import { GreaterThanOrEqual as oF } from "./csr/GreaterThanOrEqual.mjs";
import { GridFour as tF } from "./csr/GridFour.mjs";
import { GridNine as mF } from "./csr/GridNine.mjs";
import { Guitar as xF } from "./csr/Guitar.mjs";
import { HairDryer as aF } from "./csr/HairDryer.mjs";
import { Hamburger as nF } from "./csr/Hamburger.mjs";
import { Hammer as SF } from "./csr/Hammer.mjs";
import { HandArrowDown as uF } from "./csr/HandArrowDown.mjs";
import { HandArrowUp as CF } from "./csr/HandArrowUp.mjs";
import { Hand as dF } from "./csr/Hand.mjs";
import { HandCoins as LF } from "./csr/HandCoins.mjs";
import { HandDeposit as AF } from "./csr/HandDeposit.mjs";
import { HandEye as kF } from "./csr/HandEye.mjs";
import { HandFist as BF } from "./csr/HandFist.mjs";
import { HandGrabbing as DF } from "./csr/HandGrabbing.mjs";
import { HandHeart as HF } from "./csr/HandHeart.mjs";
import { HandPalm as RF } from "./csr/HandPalm.mjs";
import { HandPeace as NF } from "./csr/HandPeace.mjs";
import { HandPointing as GF } from "./csr/HandPointing.mjs";
import { HandSoap as EF } from "./csr/HandSoap.mjs";
import { HandSwipeLeft as qF } from "./csr/HandSwipeLeft.mjs";
import { HandSwipeRight as IF } from "./csr/HandSwipeRight.mjs";
import { HandTap as XF } from "./csr/HandTap.mjs";
import { HandWaving as JF } from "./csr/HandWaving.mjs";
import { HandWithdraw as ZF } from "./csr/HandWithdraw.mjs";
import { Handbag as YF } from "./csr/Handbag.mjs";
import { HandbagSimple as _F } from "./csr/HandbagSimple.mjs";
import { HandsClapping as oB } from "./csr/HandsClapping.mjs";
import { HandsPraying as tB } from "./csr/HandsPraying.mjs";
import { Handshake as mB } from "./csr/Handshake.mjs";
import { HardDrive as xB } from "./csr/HardDrive.mjs";
import { HardDrives as aB } from "./csr/HardDrives.mjs";
import { HardHat as nB } from "./csr/HardHat.mjs";
import { Hash as SB } from "./csr/Hash.mjs";
import { HashStraight as uB } from "./csr/HashStraight.mjs";
import { HeadCircuit as CB } from "./csr/HeadCircuit.mjs";
import { Headlights as dB } from "./csr/Headlights.mjs";
import { Headphones as LB } from "./csr/Headphones.mjs";
import { Headset as AB } from "./csr/Headset.mjs";
import { Heart as kB } from "./csr/Heart.mjs";
import { HeartBreak as BB } from "./csr/HeartBreak.mjs";
import { HeartHalf as DB } from "./csr/HeartHalf.mjs";
import { HeartStraight as HB } from "./csr/HeartStraight.mjs";
import { HeartStraightBreak as RB } from "./csr/HeartStraightBreak.mjs";
import { Heartbeat as NB } from "./csr/Heartbeat.mjs";
import { Hexagon as GB } from "./csr/Hexagon.mjs";
import { HighDefinition as EB } from "./csr/HighDefinition.mjs";
import { HighHeel as qB } from "./csr/HighHeel.mjs";
import { Highlighter as IB } from "./csr/Highlighter.mjs";
import { HighlighterCircle as XB } from "./csr/HighlighterCircle.mjs";
import { Hockey as JB } from "./csr/Hockey.mjs";
import { Hoodie as ZB } from "./csr/Hoodie.mjs";
import { Horse as YB } from "./csr/Horse.mjs";
import { Hospital as _B } from "./csr/Hospital.mjs";
import { Hourglass as ob } from "./csr/Hourglass.mjs";
import { HourglassHigh as tb } from "./csr/HourglassHigh.mjs";
import { HourglassLow as mb } from "./csr/HourglassLow.mjs";
import { HourglassMedium as xb } from "./csr/HourglassMedium.mjs";
import { HourglassSimple as ab } from "./csr/HourglassSimple.mjs";
import { HourglassSimpleHigh as nb } from "./csr/HourglassSimpleHigh.mjs";
import { HourglassSimpleLow as Sb } from "./csr/HourglassSimpleLow.mjs";
import { HourglassSimpleMedium as ub } from "./csr/HourglassSimpleMedium.mjs";
import { House as Cb } from "./csr/House.mjs";
import { HouseLine as db } from "./csr/HouseLine.mjs";
import { HouseSimple as Lb } from "./csr/HouseSimple.mjs";
import { Hurricane as Ab } from "./csr/Hurricane.mjs";
import { IceCream as kb } from "./csr/IceCream.mjs";
import { IdentificationBadge as Bb } from "./csr/IdentificationBadge.mjs";
import { IdentificationCard as Db } from "./csr/IdentificationCard.mjs";
import { Image as Hb } from "./csr/Image.mjs";
import { ImageBroken as Rb } from "./csr/ImageBroken.mjs";
import { ImageSquare as Nb } from "./csr/ImageSquare.mjs";
import { Images as Gb } from "./csr/Images.mjs";
import { ImagesSquare as Eb } from "./csr/ImagesSquare.mjs";
import { Infinity as qb, Infinity as Vb } from "./csr/Infinity.mjs";
import { Info as zb } from "./csr/Info.mjs";
import { InstagramLogo as Kb } from "./csr/InstagramLogo.mjs";
import { Intersect as Qb } from "./csr/Intersect.mjs";
import { IntersectSquare as jb } from "./csr/IntersectSquare.mjs";
import { IntersectThree as $b } from "./csr/IntersectThree.mjs";
import { Intersection as rD } from "./csr/Intersection.mjs";
import { Invoice as eD } from "./csr/Invoice.mjs";
import { Island as pD } from "./csr/Island.mjs";
import { Jar as fD } from "./csr/Jar.mjs";
import { JarLabel as iD } from "./csr/JarLabel.mjs";
import { Jeep as lD } from "./csr/Jeep.mjs";
import { Joystick as sD } from "./csr/Joystick.mjs";
import { Kanban as cD } from "./csr/Kanban.mjs";
import { Key as gD } from "./csr/Key.mjs";
import { KeyReturn as hD } from "./csr/KeyReturn.mjs";
import { Keyboard as wD } from "./csr/Keyboard.mjs";
import { Keyhole as PD } from "./csr/Keyhole.mjs";
import { Knife as TD } from "./csr/Knife.mjs";
import { Ladder as FD } from "./csr/Ladder.mjs";
import { LadderSimple as bD } from "./csr/LadderSimple.mjs";
import { Lamp as yD } from "./csr/Lamp.mjs";
import { LampPendant as MD } from "./csr/LampPendant.mjs";
import { Laptop as UD } from "./csr/Laptop.mjs";
import { Lasso as vD } from "./csr/Lasso.mjs";
import { LastfmLogo as OD } from "./csr/LastfmLogo.mjs";
import { Layout as WD } from "./csr/Layout.mjs";
import { Leaf as VD } from "./csr/Leaf.mjs";
import { Lectern as zD } from "./csr/Lectern.mjs";
import { Lego as KD } from "./csr/Lego.mjs";
import { LegoSmiley as QD } from "./csr/LegoSmiley.mjs";
import { LessThan as jD } from "./csr/LessThan.mjs";
import { LessThanOrEqual as $D } from "./csr/LessThanOrEqual.mjs";
import { LetterCircleH as ry } from "./csr/LetterCircleH.mjs";
import { LetterCircleP as ey } from "./csr/LetterCircleP.mjs";
import { LetterCircleV as py } from "./csr/LetterCircleV.mjs";
import { Lifebuoy as fy } from "./csr/Lifebuoy.mjs";
import { Lightbulb as iy } from "./csr/Lightbulb.mjs";
import { LightbulbFilament as ly } from "./csr/LightbulbFilament.mjs";
import { Lighthouse as sy } from "./csr/Lighthouse.mjs";
import { LightningA as cy } from "./csr/LightningA.mjs";
import { Lightning as gy } from "./csr/Lightning.mjs";
import { LightningSlash as hy } from "./csr/LightningSlash.mjs";
import { LineSegment as wy } from "./csr/LineSegment.mjs";
import { LineSegments as Py } from "./csr/LineSegments.mjs";
import { LineVertical as Ty } from "./csr/LineVertical.mjs";
import { Link as Fy } from "./csr/Link.mjs";
import { LinkBreak as by } from "./csr/LinkBreak.mjs";
import { LinkSimple as yy } from "./csr/LinkSimple.mjs";
import { LinkSimpleBreak as My } from "./csr/LinkSimpleBreak.mjs";
import { LinkSimpleHorizontal as Uy } from "./csr/LinkSimpleHorizontal.mjs";
import { LinkSimpleHorizontalBreak as vy } from "./csr/LinkSimpleHorizontalBreak.mjs";
import { LinkedinLogo as Oy } from "./csr/LinkedinLogo.mjs";
import { LinktreeLogo as Wy } from "./csr/LinktreeLogo.mjs";
import { LinuxLogo as Vy } from "./csr/LinuxLogo.mjs";
import { List as zy } from "./csr/List.mjs";
import { ListBullets as Ky } from "./csr/ListBullets.mjs";
import { ListChecks as Qy } from "./csr/ListChecks.mjs";
import { ListDashes as jy } from "./csr/ListDashes.mjs";
import { ListHeart as $y } from "./csr/ListHeart.mjs";
import { ListMagnifyingGlass as rH } from "./csr/ListMagnifyingGlass.mjs";
import { ListNumbers as eH } from "./csr/ListNumbers.mjs";
import { ListPlus as pH } from "./csr/ListPlus.mjs";
import { ListStar as fH } from "./csr/ListStar.mjs";
import { Lock as iH } from "./csr/Lock.mjs";
import { LockKey as lH } from "./csr/LockKey.mjs";
import { LockKeyOpen as sH } from "./csr/LockKeyOpen.mjs";
import { LockLaminated as cH } from "./csr/LockLaminated.mjs";
import { LockLaminatedOpen as gH } from "./csr/LockLaminatedOpen.mjs";
import { LockOpen as hH } from "./csr/LockOpen.mjs";
import { LockSimple as wH } from "./csr/LockSimple.mjs";
import { LockSimpleOpen as PH } from "./csr/LockSimpleOpen.mjs";
import { Lockers as TH } from "./csr/Lockers.mjs";
import { Log as FH } from "./csr/Log.mjs";
import { MagicWand as bH } from "./csr/MagicWand.mjs";
import { Magnet as yH } from "./csr/Magnet.mjs";
import { MagnetStraight as MH } from "./csr/MagnetStraight.mjs";
import { MagnifyingGlass as UH } from "./csr/MagnifyingGlass.mjs";
import { MagnifyingGlassMinus as vH } from "./csr/MagnifyingGlassMinus.mjs";
import { MagnifyingGlassPlus as OH } from "./csr/MagnifyingGlassPlus.mjs";
import { Mailbox as WH } from "./csr/Mailbox.mjs";
import { MapPinArea as VH } from "./csr/MapPinArea.mjs";
import { MapPin as zH } from "./csr/MapPin.mjs";
import { MapPinLine as KH } from "./csr/MapPinLine.mjs";
import { MapPinPlus as QH } from "./csr/MapPinPlus.mjs";
import { MapPinSimpleArea as jH } from "./csr/MapPinSimpleArea.mjs";
import { MapPinSimple as $H } from "./csr/MapPinSimple.mjs";
import { MapPinSimpleLine as rM } from "./csr/MapPinSimpleLine.mjs";
import { MapTrifold as eM } from "./csr/MapTrifold.mjs";
import { MarkdownLogo as pM } from "./csr/MarkdownLogo.mjs";
import { MarkerCircle as fM } from "./csr/MarkerCircle.mjs";
import { Martini as iM } from "./csr/Martini.mjs";
import { MaskHappy as lM } from "./csr/MaskHappy.mjs";
import { MaskSad as sM } from "./csr/MaskSad.mjs";
import { MastodonLogo as cM } from "./csr/MastodonLogo.mjs";
import { MathOperations as gM } from "./csr/MathOperations.mjs";
import { MatrixLogo as hM } from "./csr/MatrixLogo.mjs";
import { Medal as wM } from "./csr/Medal.mjs";
import { MedalMilitary as PM } from "./csr/MedalMilitary.mjs";
import { MediumLogo as TM } from "./csr/MediumLogo.mjs";
import { Megaphone as FM } from "./csr/Megaphone.mjs";
import { MegaphoneSimple as bM } from "./csr/MegaphoneSimple.mjs";
import { MemberOf as yM } from "./csr/MemberOf.mjs";
import { Memory as MM } from "./csr/Memory.mjs";
import { MessengerLogo as UM } from "./csr/MessengerLogo.mjs";
import { MetaLogo as vM } from "./csr/MetaLogo.mjs";
import { Meteor as OM } from "./csr/Meteor.mjs";
import { Metronome as WM } from "./csr/Metronome.mjs";
import { Microphone as VM } from "./csr/Microphone.mjs";
import { MicrophoneSlash as zM } from "./csr/MicrophoneSlash.mjs";
import { MicrophoneStage as KM } from "./csr/MicrophoneStage.mjs";
import { Microscope as QM } from "./csr/Microscope.mjs";
import { MicrosoftExcelLogo as jM } from "./csr/MicrosoftExcelLogo.mjs";
import { MicrosoftOutlookLogo as $M } from "./csr/MicrosoftOutlookLogo.mjs";
import { MicrosoftPowerpointLogo as rR } from "./csr/MicrosoftPowerpointLogo.mjs";
import { MicrosoftTeamsLogo as eR } from "./csr/MicrosoftTeamsLogo.mjs";
import { MicrosoftWordLogo as pR } from "./csr/MicrosoftWordLogo.mjs";
import { Minus as fR } from "./csr/Minus.mjs";
import { MinusCircle as iR } from "./csr/MinusCircle.mjs";
import { MinusSquare as lR } from "./csr/MinusSquare.mjs";
import { Money as sR } from "./csr/Money.mjs";
import { MoneyWavy as cR } from "./csr/MoneyWavy.mjs";
import { MonitorArrowUp as gR } from "./csr/MonitorArrowUp.mjs";
import { Monitor as hR } from "./csr/Monitor.mjs";
import { MonitorPlay as wR } from "./csr/MonitorPlay.mjs";
import { Moon as PR } from "./csr/Moon.mjs";
import { MoonStars as TR } from "./csr/MoonStars.mjs";
import { Moped as FR } from "./csr/Moped.mjs";
import { MopedFront as bR } from "./csr/MopedFront.mjs";
import { Mosque as yR } from "./csr/Mosque.mjs";
import { Motorcycle as MR } from "./csr/Motorcycle.mjs";
import { Mountains as UR } from "./csr/Mountains.mjs";
import { Mouse as vR } from "./csr/Mouse.mjs";
import { MouseLeftClick as OR } from "./csr/MouseLeftClick.mjs";
import { MouseMiddleClick as WR } from "./csr/MouseMiddleClick.mjs";
import { MouseRightClick as VR } from "./csr/MouseRightClick.mjs";
import { MouseScroll as zR } from "./csr/MouseScroll.mjs";
import { MouseSimple as KR } from "./csr/MouseSimple.mjs";
import { MusicNote as QR } from "./csr/MusicNote.mjs";
import { MusicNoteSimple as jR } from "./csr/MusicNoteSimple.mjs";
import { MusicNotes as $R } from "./csr/MusicNotes.mjs";
import { MusicNotesMinus as rU } from "./csr/MusicNotesMinus.mjs";
import { MusicNotesPlus as eU } from "./csr/MusicNotesPlus.mjs";
import { MusicNotesSimple as pU } from "./csr/MusicNotesSimple.mjs";
import { NavigationArrow as fU } from "./csr/NavigationArrow.mjs";
import { Needle as iU } from "./csr/Needle.mjs";
import { Network as lU } from "./csr/Network.mjs";
import { NetworkSlash as sU } from "./csr/NetworkSlash.mjs";
import { NetworkX as cU } from "./csr/NetworkX.mjs";
import { Newspaper as gU } from "./csr/Newspaper.mjs";
import { NewspaperClipping as hU } from "./csr/NewspaperClipping.mjs";
import { NotEquals as wU } from "./csr/NotEquals.mjs";
import { NotMemberOf as PU } from "./csr/NotMemberOf.mjs";
import { NotSubsetOf as TU } from "./csr/NotSubsetOf.mjs";
import { NotSupersetOf as FU } from "./csr/NotSupersetOf.mjs";
import { Notches as bU } from "./csr/Notches.mjs";
import { NoteBlank as yU } from "./csr/NoteBlank.mjs";
import { Note as MU } from "./csr/Note.mjs";
import { NotePencil as UU } from "./csr/NotePencil.mjs";
import { Notebook as vU } from "./csr/Notebook.mjs";
import { Notepad as OU } from "./csr/Notepad.mjs";
import { Notification as WU } from "./csr/Notification.mjs";
import { NotionLogo as VU } from "./csr/NotionLogo.mjs";
import { NuclearPlant as zU } from "./csr/NuclearPlant.mjs";
import { NumberCircleEight as KU } from "./csr/NumberCircleEight.mjs";
import { NumberCircleFive as QU } from "./csr/NumberCircleFive.mjs";
import { NumberCircleFour as jU } from "./csr/NumberCircleFour.mjs";
import { NumberCircleNine as $U } from "./csr/NumberCircleNine.mjs";
import { NumberCircleOne as rN } from "./csr/NumberCircleOne.mjs";
import { NumberCircleSeven as eN } from "./csr/NumberCircleSeven.mjs";
import { NumberCircleSix as pN } from "./csr/NumberCircleSix.mjs";
import { NumberCircleThree as fN } from "./csr/NumberCircleThree.mjs";
import { NumberCircleTwo as iN } from "./csr/NumberCircleTwo.mjs";
import { NumberCircleZero as lN } from "./csr/NumberCircleZero.mjs";
import { NumberEight as sN } from "./csr/NumberEight.mjs";
import { NumberFive as cN } from "./csr/NumberFive.mjs";
import { NumberFour as gN } from "./csr/NumberFour.mjs";
import { NumberNine as hN } from "./csr/NumberNine.mjs";
import { NumberOne as wN } from "./csr/NumberOne.mjs";
import { NumberSeven as PN } from "./csr/NumberSeven.mjs";
import { NumberSix as TN } from "./csr/NumberSix.mjs";
import { NumberSquareEight as FN } from "./csr/NumberSquareEight.mjs";
import { NumberSquareFive as bN } from "./csr/NumberSquareFive.mjs";
import { NumberSquareFour as yN } from "./csr/NumberSquareFour.mjs";
import { NumberSquareNine as MN } from "./csr/NumberSquareNine.mjs";
import { NumberSquareOne as UN } from "./csr/NumberSquareOne.mjs";
import { NumberSquareSeven as vN } from "./csr/NumberSquareSeven.mjs";
import { NumberSquareSix as ON } from "./csr/NumberSquareSix.mjs";
import { NumberSquareThree as WN } from "./csr/NumberSquareThree.mjs";
import { NumberSquareTwo as VN } from "./csr/NumberSquareTwo.mjs";
import { NumberSquareZero as zN } from "./csr/NumberSquareZero.mjs";
import { NumberThree as KN } from "./csr/NumberThree.mjs";
import { NumberTwo as QN } from "./csr/NumberTwo.mjs";
import { NumberZero as jN } from "./csr/NumberZero.mjs";
import { Numpad as $N } from "./csr/Numpad.mjs";
import { Nut as rv } from "./csr/Nut.mjs";
import { NyTimesLogo as ev } from "./csr/NyTimesLogo.mjs";
import { Octagon as pv } from "./csr/Octagon.mjs";
import { OfficeChair as fv } from "./csr/OfficeChair.mjs";
import { Onigiri as iv } from "./csr/Onigiri.mjs";
import { OpenAiLogo as lv } from "./csr/OpenAiLogo.mjs";
import { Option as sv } from "./csr/Option.mjs";
import { Orange as cv } from "./csr/Orange.mjs";
import { OrangeSlice as gv } from "./csr/OrangeSlice.mjs";
import { Oven as hv } from "./csr/Oven.mjs";
import { Package as wv } from "./csr/Package.mjs";
import { PaintBrush as Pv } from "./csr/PaintBrush.mjs";
import { PaintBrushBroad as Tv } from "./csr/PaintBrushBroad.mjs";
import { PaintBrushHousehold as Fv } from "./csr/PaintBrushHousehold.mjs";
import { PaintBucket as bv } from "./csr/PaintBucket.mjs";
import { PaintRoller as yv } from "./csr/PaintRoller.mjs";
import { Palette as Mv } from "./csr/Palette.mjs";
import { Panorama as Uv } from "./csr/Panorama.mjs";
import { Pants as vv } from "./csr/Pants.mjs";
import { PaperPlane as Ov } from "./csr/PaperPlane.mjs";
import { PaperPlaneRight as Wv } from "./csr/PaperPlaneRight.mjs";
import { PaperPlaneTilt as Vv } from "./csr/PaperPlaneTilt.mjs";
import { Paperclip as zv } from "./csr/Paperclip.mjs";
import { PaperclipHorizontal as Kv } from "./csr/PaperclipHorizontal.mjs";
import { Parachute as Qv } from "./csr/Parachute.mjs";
import { Paragraph as jv } from "./csr/Paragraph.mjs";
import { Parallelogram as $v } from "./csr/Parallelogram.mjs";
import { Park as rG } from "./csr/Park.mjs";
import { Password as eG } from "./csr/Password.mjs";
import { Path as pG } from "./csr/Path.mjs";
import { PatreonLogo as fG } from "./csr/PatreonLogo.mjs";
import { Pause as iG } from "./csr/Pause.mjs";
import { PauseCircle as lG } from "./csr/PauseCircle.mjs";
import { PawPrint as sG } from "./csr/PawPrint.mjs";
import { PaypalLogo as cG } from "./csr/PaypalLogo.mjs";
import { Peace as gG } from "./csr/Peace.mjs";
import { Pen as hG } from "./csr/Pen.mjs";
import { PenNib as wG } from "./csr/PenNib.mjs";
import { PenNibStraight as PG } from "./csr/PenNibStraight.mjs";
import { Pencil as TG } from "./csr/Pencil.mjs";
import { PencilCircle as FG } from "./csr/PencilCircle.mjs";
import { PencilLine as bG } from "./csr/PencilLine.mjs";
import { PencilRuler as yG } from "./csr/PencilRuler.mjs";
import { PencilSimple as MG } from "./csr/PencilSimple.mjs";
import { PencilSimpleLine as UG } from "./csr/PencilSimpleLine.mjs";
import { PencilSimpleSlash as vG } from "./csr/PencilSimpleSlash.mjs";
import { PencilSlash as OG } from "./csr/PencilSlash.mjs";
import { Pentagon as WG } from "./csr/Pentagon.mjs";
import { Pentagram as VG } from "./csr/Pentagram.mjs";
import { Pepper as zG } from "./csr/Pepper.mjs";
import { Percent as KG } from "./csr/Percent.mjs";
import { PersonArmsSpread as QG } from "./csr/PersonArmsSpread.mjs";
import { Person as jG } from "./csr/Person.mjs";
import { PersonSimpleBike as $G } from "./csr/PersonSimpleBike.mjs";
import { PersonSimple as rO } from "./csr/PersonSimple.mjs";
import { PersonSimpleCircle as eO } from "./csr/PersonSimpleCircle.mjs";
import { PersonSimpleHike as pO } from "./csr/PersonSimpleHike.mjs";
import { PersonSimpleRun as fO } from "./csr/PersonSimpleRun.mjs";
import { PersonSimpleSki as iO } from "./csr/PersonSimpleSki.mjs";
import { PersonSimpleSnowboard as lO } from "./csr/PersonSimpleSnowboard.mjs";
import { PersonSimpleSwim as sO } from "./csr/PersonSimpleSwim.mjs";
import { PersonSimpleTaiChi as cO } from "./csr/PersonSimpleTaiChi.mjs";
import { PersonSimpleThrow as gO } from "./csr/PersonSimpleThrow.mjs";
import { PersonSimpleWalk as hO } from "./csr/PersonSimpleWalk.mjs";
import { Perspective as wO } from "./csr/Perspective.mjs";
import { Phone as PO } from "./csr/Phone.mjs";
import { PhoneCall as TO } from "./csr/PhoneCall.mjs";
import { PhoneDisconnect as FO } from "./csr/PhoneDisconnect.mjs";
import { PhoneIncoming as bO } from "./csr/PhoneIncoming.mjs";
import { PhoneList as yO } from "./csr/PhoneList.mjs";
import { PhoneOutgoing as MO } from "./csr/PhoneOutgoing.mjs";
import { PhonePause as UO } from "./csr/PhonePause.mjs";
import { PhonePlus as vO } from "./csr/PhonePlus.mjs";
import { PhoneSlash as OO } from "./csr/PhoneSlash.mjs";
import { PhoneTransfer as WO } from "./csr/PhoneTransfer.mjs";
import { PhoneX as VO } from "./csr/PhoneX.mjs";
import { PhosphorLogo as zO } from "./csr/PhosphorLogo.mjs";
import { Pi as KO } from "./csr/Pi.mjs";
import { PianoKeys as QO } from "./csr/PianoKeys.mjs";
import { PicnicTable as jO } from "./csr/PicnicTable.mjs";
import { PictureInPicture as $O } from "./csr/PictureInPicture.mjs";
import { PiggyBank as rE } from "./csr/PiggyBank.mjs";
import { Pill as eE } from "./csr/Pill.mjs";
import { PingPong as pE } from "./csr/PingPong.mjs";
import { PintGlass as fE } from "./csr/PintGlass.mjs";
import { PinterestLogo as iE } from "./csr/PinterestLogo.mjs";
import { Pinwheel as lE } from "./csr/Pinwheel.mjs";
import { Pipe as sE } from "./csr/Pipe.mjs";
import { PipeWrench as cE } from "./csr/PipeWrench.mjs";
import { PixLogo as gE } from "./csr/PixLogo.mjs";
import { Pizza as hE } from "./csr/Pizza.mjs";
import { Placeholder as wE } from "./csr/Placeholder.mjs";
import { Planet as PE } from "./csr/Planet.mjs";
import { Plant as TE } from "./csr/Plant.mjs";
import { Play as FE } from "./csr/Play.mjs";
import { PlayCircle as bE } from "./csr/PlayCircle.mjs";
import { PlayPause as yE } from "./csr/PlayPause.mjs";
import { Playlist as ME } from "./csr/Playlist.mjs";
import { Plug as UE } from "./csr/Plug.mjs";
import { PlugCharging as vE } from "./csr/PlugCharging.mjs";
import { Plugs as OE } from "./csr/Plugs.mjs";
import { PlugsConnected as WE } from "./csr/PlugsConnected.mjs";
import { Plus as VE } from "./csr/Plus.mjs";
import { PlusCircle as zE } from "./csr/PlusCircle.mjs";
import { PlusMinus as KE } from "./csr/PlusMinus.mjs";
import { PlusSquare as QE } from "./csr/PlusSquare.mjs";
import { PokerChip as jE } from "./csr/PokerChip.mjs";
import { PoliceCar as $E } from "./csr/PoliceCar.mjs";
import { Polygon as rW } from "./csr/Polygon.mjs";
import { Popcorn as eW } from "./csr/Popcorn.mjs";
import { Popsicle as pW } from "./csr/Popsicle.mjs";
import { PottedPlant as fW } from "./csr/PottedPlant.mjs";
import { Power as iW } from "./csr/Power.mjs";
import { Prescription as lW } from "./csr/Prescription.mjs";
import { Presentation as sW } from "./csr/Presentation.mjs";
import { PresentationChart as cW } from "./csr/PresentationChart.mjs";
import { Printer as gW } from "./csr/Printer.mjs";
import { Prohibit as hW } from "./csr/Prohibit.mjs";
import { ProhibitInset as wW } from "./csr/ProhibitInset.mjs";
import { ProjectorScreen as PW } from "./csr/ProjectorScreen.mjs";
import { ProjectorScreenChart as TW } from "./csr/ProjectorScreenChart.mjs";
import { Pulse as FW, Pulse as BW } from "./csr/Pulse.mjs";
import { PushPin as DW } from "./csr/PushPin.mjs";
import { PushPinSimple as HW } from "./csr/PushPinSimple.mjs";
import { PushPinSimpleSlash as RW } from "./csr/PushPinSimpleSlash.mjs";
import { PushPinSlash as NW } from "./csr/PushPinSlash.mjs";
import { PuzzlePiece as GW } from "./csr/PuzzlePiece.mjs";
import { QrCode as EW } from "./csr/QrCode.mjs";
import { Question as qW } from "./csr/Question.mjs";
import { QuestionMark as IW } from "./csr/QuestionMark.mjs";
import { Queue as XW } from "./csr/Queue.mjs";
import { Quotes as JW } from "./csr/Quotes.mjs";
import { Rabbit as ZW } from "./csr/Rabbit.mjs";
import { Racquet as YW } from "./csr/Racquet.mjs";
import { Radical as _W } from "./csr/Radical.mjs";
import { Radio as oq } from "./csr/Radio.mjs";
import { RadioButton as tq } from "./csr/RadioButton.mjs";
import { Radioactive as mq } from "./csr/Radioactive.mjs";
import { Rainbow as xq } from "./csr/Rainbow.mjs";
import { RainbowCloud as aq } from "./csr/RainbowCloud.mjs";
import { Ranking as nq } from "./csr/Ranking.mjs";
import { ReadCvLogo as Sq } from "./csr/ReadCvLogo.mjs";
import { Receipt as uq } from "./csr/Receipt.mjs";
import { ReceiptX as Cq } from "./csr/ReceiptX.mjs";
import { Record as dq } from "./csr/Record.mjs";
import { Rectangle as Lq } from "./csr/Rectangle.mjs";
import { RectangleDashed as Aq } from "./csr/RectangleDashed.mjs";
import { Recycle as kq } from "./csr/Recycle.mjs";
import { RedditLogo as Bq } from "./csr/RedditLogo.mjs";
import { Repeat as Dq } from "./csr/Repeat.mjs";
import { RepeatOnce as Hq } from "./csr/RepeatOnce.mjs";
import { ReplitLogo as Rq } from "./csr/ReplitLogo.mjs";
import { Resize as Nq } from "./csr/Resize.mjs";
import { Rewind as Gq } from "./csr/Rewind.mjs";
import { RewindCircle as Eq } from "./csr/RewindCircle.mjs";
import { RoadHorizon as qq } from "./csr/RoadHorizon.mjs";
import { Robot as Iq } from "./csr/Robot.mjs";
import { Rocket as Xq } from "./csr/Rocket.mjs";
import { RocketLaunch as Jq } from "./csr/RocketLaunch.mjs";
import { Rows as Zq } from "./csr/Rows.mjs";
import { RowsPlusBottom as Yq } from "./csr/RowsPlusBottom.mjs";
import { RowsPlusTop as _q } from "./csr/RowsPlusTop.mjs";
import { Rss as oV } from "./csr/Rss.mjs";
import { RssSimple as tV } from "./csr/RssSimple.mjs";
import { Rug as mV } from "./csr/Rug.mjs";
import { Ruler as xV } from "./csr/Ruler.mjs";
import { Sailboat as aV } from "./csr/Sailboat.mjs";
import { Scales as nV } from "./csr/Scales.mjs";
import { Scan as SV } from "./csr/Scan.mjs";
import { ScanSmiley as uV } from "./csr/ScanSmiley.mjs";
import { Scissors as CV } from "./csr/Scissors.mjs";
import { Scooter as dV } from "./csr/Scooter.mjs";
import { Screencast as LV } from "./csr/Screencast.mjs";
import { Screwdriver as AV } from "./csr/Screwdriver.mjs";
import { Scribble as kV } from "./csr/Scribble.mjs";
import { ScribbleLoop as BV } from "./csr/ScribbleLoop.mjs";
import { Scroll as DV } from "./csr/Scroll.mjs";
import { Seal as HV, Seal as MV } from "./csr/Seal.mjs";
import { SealCheck as UV, SealCheck as NV } from "./csr/SealCheck.mjs";
import { SealPercent as GV } from "./csr/SealPercent.mjs";
import { SealQuestion as EV, SealQuestion as WV } from "./csr/SealQuestion.mjs";
import { SealWarning as VV, SealWarning as IV } from "./csr/SealWarning.mjs";
import { Seat as XV } from "./csr/Seat.mjs";
import { Seatbelt as JV } from "./csr/Seatbelt.mjs";
import { SecurityCamera as ZV } from "./csr/SecurityCamera.mjs";
import { SelectionAll as YV } from "./csr/SelectionAll.mjs";
import { SelectionBackground as _V } from "./csr/SelectionBackground.mjs";
import { Selection as oI } from "./csr/Selection.mjs";
import { SelectionForeground as tI } from "./csr/SelectionForeground.mjs";
import { SelectionInverse as mI } from "./csr/SelectionInverse.mjs";
import { SelectionPlus as xI } from "./csr/SelectionPlus.mjs";
import { SelectionSlash as aI } from "./csr/SelectionSlash.mjs";
import { Shapes as nI } from "./csr/Shapes.mjs";
import { Share as SI } from "./csr/Share.mjs";
import { ShareFat as uI } from "./csr/ShareFat.mjs";
import { ShareNetwork as CI } from "./csr/ShareNetwork.mjs";
import { Shield as dI } from "./csr/Shield.mjs";
import { ShieldCheck as LI } from "./csr/ShieldCheck.mjs";
import { ShieldCheckered as AI } from "./csr/ShieldCheckered.mjs";
import { ShieldChevron as kI } from "./csr/ShieldChevron.mjs";
import { ShieldPlus as BI } from "./csr/ShieldPlus.mjs";
import { ShieldSlash as DI } from "./csr/ShieldSlash.mjs";
import { ShieldStar as HI } from "./csr/ShieldStar.mjs";
import { ShieldWarning as RI } from "./csr/ShieldWarning.mjs";
import { ShippingContainer as NI } from "./csr/ShippingContainer.mjs";
import { ShirtFolded as GI } from "./csr/ShirtFolded.mjs";
import { ShootingStar as EI } from "./csr/ShootingStar.mjs";
import { ShoppingBag as qI } from "./csr/ShoppingBag.mjs";
import { ShoppingBagOpen as II } from "./csr/ShoppingBagOpen.mjs";
import { ShoppingCart as XI } from "./csr/ShoppingCart.mjs";
import { ShoppingCartSimple as JI } from "./csr/ShoppingCartSimple.mjs";
import { Shovel as ZI } from "./csr/Shovel.mjs";
import { Shower as YI } from "./csr/Shower.mjs";
import { Shrimp as _I } from "./csr/Shrimp.mjs";
import { ShuffleAngular as oz } from "./csr/ShuffleAngular.mjs";
import { Shuffle as tz } from "./csr/Shuffle.mjs";
import { ShuffleSimple as mz } from "./csr/ShuffleSimple.mjs";
import { Sidebar as xz } from "./csr/Sidebar.mjs";
import { SidebarSimple as az } from "./csr/SidebarSimple.mjs";
import { Sigma as nz } from "./csr/Sigma.mjs";
import { SignIn as Sz } from "./csr/SignIn.mjs";
import { SignOut as uz } from "./csr/SignOut.mjs";
import { Signature as Cz } from "./csr/Signature.mjs";
import { Signpost as dz } from "./csr/Signpost.mjs";
import { SimCard as Lz } from "./csr/SimCard.mjs";
import { Siren as Az } from "./csr/Siren.mjs";
import { SketchLogo as kz } from "./csr/SketchLogo.mjs";
import { SkipBack as Bz } from "./csr/SkipBack.mjs";
import { SkipBackCircle as Dz } from "./csr/SkipBackCircle.mjs";
import { SkipForward as Hz } from "./csr/SkipForward.mjs";
import { SkipForwardCircle as Rz } from "./csr/SkipForwardCircle.mjs";
import { Skull as Nz } from "./csr/Skull.mjs";
import { SkypeLogo as Gz } from "./csr/SkypeLogo.mjs";
import { SlackLogo as Ez } from "./csr/SlackLogo.mjs";
import { Sliders as qz } from "./csr/Sliders.mjs";
import { SlidersHorizontal as Iz } from "./csr/SlidersHorizontal.mjs";
import { Slideshow as Xz } from "./csr/Slideshow.mjs";
import { SmileyAngry as Jz } from "./csr/SmileyAngry.mjs";
import { SmileyBlank as Zz } from "./csr/SmileyBlank.mjs";
import { Smiley as Yz } from "./csr/Smiley.mjs";
import { SmileyMeh as _z } from "./csr/SmileyMeh.mjs";
import { SmileyMelting as oX } from "./csr/SmileyMelting.mjs";
import { SmileyNervous as tX } from "./csr/SmileyNervous.mjs";
import { SmileySad as mX } from "./csr/SmileySad.mjs";
import { SmileySticker as xX } from "./csr/SmileySticker.mjs";
import { SmileyWink as aX } from "./csr/SmileyWink.mjs";
import { SmileyXEyes as nX } from "./csr/SmileyXEyes.mjs";
import { SnapchatLogo as SX } from "./csr/SnapchatLogo.mjs";
import { Sneaker as uX } from "./csr/Sneaker.mjs";
import { SneakerMove as CX } from "./csr/SneakerMove.mjs";
import { Snowflake as dX } from "./csr/Snowflake.mjs";
import { SoccerBall as LX } from "./csr/SoccerBall.mjs";
import { Sock as AX } from "./csr/Sock.mjs";
import { SolarPanel as kX } from "./csr/SolarPanel.mjs";
import { SolarRoof as BX } from "./csr/SolarRoof.mjs";
import { SortAscending as DX } from "./csr/SortAscending.mjs";
import { SortDescending as HX } from "./csr/SortDescending.mjs";
import { SoundcloudLogo as RX } from "./csr/SoundcloudLogo.mjs";
import { Spade as NX } from "./csr/Spade.mjs";
import { Sparkle as GX } from "./csr/Sparkle.mjs";
import { SpeakerHifi as EX } from "./csr/SpeakerHifi.mjs";
import { SpeakerHigh as qX } from "./csr/SpeakerHigh.mjs";
import { SpeakerLow as IX } from "./csr/SpeakerLow.mjs";
import { SpeakerNone as XX } from "./csr/SpeakerNone.mjs";
import { SpeakerSimpleHigh as JX } from "./csr/SpeakerSimpleHigh.mjs";
import { SpeakerSimpleLow as ZX } from "./csr/SpeakerSimpleLow.mjs";
import { SpeakerSimpleNone as YX } from "./csr/SpeakerSimpleNone.mjs";
import { SpeakerSimpleSlash as _X } from "./csr/SpeakerSimpleSlash.mjs";
import { SpeakerSimpleX as oK } from "./csr/SpeakerSimpleX.mjs";
import { SpeakerSlash as tK } from "./csr/SpeakerSlash.mjs";
import { SpeakerX as mK } from "./csr/SpeakerX.mjs";
import { Speedometer as xK } from "./csr/Speedometer.mjs";
import { Sphere as aK } from "./csr/Sphere.mjs";
import { SpinnerBall as nK } from "./csr/SpinnerBall.mjs";
import { Spinner as SK } from "./csr/Spinner.mjs";
import { SpinnerGap as uK } from "./csr/SpinnerGap.mjs";
import { Spiral as CK } from "./csr/Spiral.mjs";
import { SplitHorizontal as dK } from "./csr/SplitHorizontal.mjs";
import { SplitVertical as LK } from "./csr/SplitVertical.mjs";
import { SpotifyLogo as AK } from "./csr/SpotifyLogo.mjs";
import { SprayBottle as kK } from "./csr/SprayBottle.mjs";
import { Square as BK } from "./csr/Square.mjs";
import { SquareHalf as DK } from "./csr/SquareHalf.mjs";
import { SquareHalfBottom as HK } from "./csr/SquareHalfBottom.mjs";
import { SquareLogo as RK } from "./csr/SquareLogo.mjs";
import { SquareSplitHorizontal as NK } from "./csr/SquareSplitHorizontal.mjs";
import { SquareSplitVertical as GK } from "./csr/SquareSplitVertical.mjs";
import { SquaresFour as EK } from "./csr/SquaresFour.mjs";
import { Stack as qK } from "./csr/Stack.mjs";
import { StackMinus as IK } from "./csr/StackMinus.mjs";
import { StackOverflowLogo as XK } from "./csr/StackOverflowLogo.mjs";
import { StackPlus as JK } from "./csr/StackPlus.mjs";
import { StackSimple as ZK } from "./csr/StackSimple.mjs";
import { Stairs as YK } from "./csr/Stairs.mjs";
import { Stamp as _K } from "./csr/Stamp.mjs";
import { StandardDefinition as oJ } from "./csr/StandardDefinition.mjs";
import { StarAndCrescent as tJ } from "./csr/StarAndCrescent.mjs";
import { Star as mJ } from "./csr/Star.mjs";
import { StarFour as xJ } from "./csr/StarFour.mjs";
import { StarHalf as aJ } from "./csr/StarHalf.mjs";
import { StarOfDavid as nJ } from "./csr/StarOfDavid.mjs";
import { SteamLogo as SJ } from "./csr/SteamLogo.mjs";
import { SteeringWheel as uJ } from "./csr/SteeringWheel.mjs";
import { Steps as CJ } from "./csr/Steps.mjs";
import { Stethoscope as dJ } from "./csr/Stethoscope.mjs";
import { Sticker as LJ } from "./csr/Sticker.mjs";
import { Stool as AJ } from "./csr/Stool.mjs";
import { Stop as kJ } from "./csr/Stop.mjs";
import { StopCircle as BJ } from "./csr/StopCircle.mjs";
import { Storefront as DJ } from "./csr/Storefront.mjs";
import { Strategy as HJ } from "./csr/Strategy.mjs";
import { StripeLogo as RJ } from "./csr/StripeLogo.mjs";
import { Student as NJ } from "./csr/Student.mjs";
import { SubsetOf as GJ } from "./csr/SubsetOf.mjs";
import { SubsetProperOf as EJ } from "./csr/SubsetProperOf.mjs";
import { Subtitles as qJ } from "./csr/Subtitles.mjs";
import { SubtitlesSlash as IJ } from "./csr/SubtitlesSlash.mjs";
import { Subtract as XJ } from "./csr/Subtract.mjs";
import { SubtractSquare as JJ } from "./csr/SubtractSquare.mjs";
import { Subway as ZJ } from "./csr/Subway.mjs";
import { Suitcase as YJ } from "./csr/Suitcase.mjs";
import { SuitcaseRolling as _J } from "./csr/SuitcaseRolling.mjs";
import { SuitcaseSimple as oQ } from "./csr/SuitcaseSimple.mjs";
import { Sun as tQ } from "./csr/Sun.mjs";
import { SunDim as mQ } from "./csr/SunDim.mjs";
import { SunHorizon as xQ } from "./csr/SunHorizon.mjs";
import { Sunglasses as aQ } from "./csr/Sunglasses.mjs";
import { SupersetOf as nQ } from "./csr/SupersetOf.mjs";
import { SupersetProperOf as SQ } from "./csr/SupersetProperOf.mjs";
import { Swap as uQ } from "./csr/Swap.mjs";
import { Swatches as CQ } from "./csr/Swatches.mjs";
import { SwimmingPool as dQ } from "./csr/SwimmingPool.mjs";
import { Sword as LQ } from "./csr/Sword.mjs";
import { Synagogue as AQ } from "./csr/Synagogue.mjs";
import { Syringe as kQ } from "./csr/Syringe.mjs";
import { TShirt as BQ } from "./csr/TShirt.mjs";
import { Table as DQ } from "./csr/Table.mjs";
import { Tabs as HQ } from "./csr/Tabs.mjs";
import { Tag as RQ } from "./csr/Tag.mjs";
import { TagChevron as NQ } from "./csr/TagChevron.mjs";
import { TagSimple as GQ } from "./csr/TagSimple.mjs";
import { Target as EQ } from "./csr/Target.mjs";
import { Taxi as qQ } from "./csr/Taxi.mjs";
import { TeaBag as IQ } from "./csr/TeaBag.mjs";
import { TelegramLogo as XQ } from "./csr/TelegramLogo.mjs";
import { Television as JQ } from "./csr/Television.mjs";
import { TelevisionSimple as ZQ } from "./csr/TelevisionSimple.mjs";
import { TennisBall as YQ } from "./csr/TennisBall.mjs";
import { Tent as _Q } from "./csr/Tent.mjs";
import { Terminal as oZ } from "./csr/Terminal.mjs";
import { TerminalWindow as tZ } from "./csr/TerminalWindow.mjs";
import { TestTube as mZ } from "./csr/TestTube.mjs";
import { TextAUnderline as xZ } from "./csr/TextAUnderline.mjs";
import { TextAa as aZ } from "./csr/TextAa.mjs";
import { TextAlignCenter as nZ } from "./csr/TextAlignCenter.mjs";
import { TextAlignJustify as SZ } from "./csr/TextAlignJustify.mjs";
import { TextAlignLeft as uZ } from "./csr/TextAlignLeft.mjs";
import { TextAlignRight as CZ } from "./csr/TextAlignRight.mjs";
import { TextB as dZ, TextB as wZ } from "./csr/TextB.mjs";
import { TextColumns as PZ } from "./csr/TextColumns.mjs";
import { TextH as TZ } from "./csr/TextH.mjs";
import { TextHFive as FZ } from "./csr/TextHFive.mjs";
import { TextHFour as bZ } from "./csr/TextHFour.mjs";
import { TextHOne as yZ } from "./csr/TextHOne.mjs";
import { TextHSix as MZ } from "./csr/TextHSix.mjs";
import { TextHThree as UZ } from "./csr/TextHThree.mjs";
import { TextHTwo as vZ } from "./csr/TextHTwo.mjs";
import { TextIndent as OZ } from "./csr/TextIndent.mjs";
import { TextItalic as WZ } from "./csr/TextItalic.mjs";
import { TextOutdent as VZ } from "./csr/TextOutdent.mjs";
import { TextStrikethrough as zZ } from "./csr/TextStrikethrough.mjs";
import { TextSubscript as KZ } from "./csr/TextSubscript.mjs";
import { TextSuperscript as QZ } from "./csr/TextSuperscript.mjs";
import { TextT as jZ } from "./csr/TextT.mjs";
import { TextTSlash as $Z } from "./csr/TextTSlash.mjs";
import { TextUnderline as rj } from "./csr/TextUnderline.mjs";
import { Textbox as ej } from "./csr/Textbox.mjs";
import { Thermometer as pj } from "./csr/Thermometer.mjs";
import { ThermometerCold as fj } from "./csr/ThermometerCold.mjs";
import { ThermometerHot as ij } from "./csr/ThermometerHot.mjs";
import { ThermometerSimple as lj } from "./csr/ThermometerSimple.mjs";
import { ThreadsLogo as sj } from "./csr/ThreadsLogo.mjs";
import { ThreeD as cj } from "./csr/ThreeD.mjs";
import { ThumbsDown as gj } from "./csr/ThumbsDown.mjs";
import { ThumbsUp as hj } from "./csr/ThumbsUp.mjs";
import { Ticket as wj } from "./csr/Ticket.mjs";
import { TidalLogo as Pj } from "./csr/TidalLogo.mjs";
import { TiktokLogo as Tj } from "./csr/TiktokLogo.mjs";
import { Tilde as Fj } from "./csr/Tilde.mjs";
import { Timer as bj } from "./csr/Timer.mjs";
import { TipJar as yj } from "./csr/TipJar.mjs";
import { Tipi as Mj } from "./csr/Tipi.mjs";
import { Tire as Uj } from "./csr/Tire.mjs";
import { ToggleLeft as vj } from "./csr/ToggleLeft.mjs";
import { ToggleRight as Oj } from "./csr/ToggleRight.mjs";
import { Toilet as Wj } from "./csr/Toilet.mjs";
import { ToiletPaper as Vj } from "./csr/ToiletPaper.mjs";
import { Toolbox as zj } from "./csr/Toolbox.mjs";
import { Tooth as Kj } from "./csr/Tooth.mjs";
import { Tornado as Qj } from "./csr/Tornado.mjs";
import { Tote as jj } from "./csr/Tote.mjs";
import { ToteSimple as $j } from "./csr/ToteSimple.mjs";
import { Towel as rY } from "./csr/Towel.mjs";
import { Tractor as eY } from "./csr/Tractor.mjs";
import { Trademark as pY } from "./csr/Trademark.mjs";
import { TrademarkRegistered as fY } from "./csr/TrademarkRegistered.mjs";
import { TrafficCone as iY } from "./csr/TrafficCone.mjs";
import { TrafficSign as lY } from "./csr/TrafficSign.mjs";
import { TrafficSignal as sY } from "./csr/TrafficSignal.mjs";
import { Train as cY } from "./csr/Train.mjs";
import { TrainRegional as gY } from "./csr/TrainRegional.mjs";
import { TrainSimple as hY } from "./csr/TrainSimple.mjs";
import { Tram as wY } from "./csr/Tram.mjs";
import { Translate as PY } from "./csr/Translate.mjs";
import { Trash as TY } from "./csr/Trash.mjs";
import { TrashSimple as FY } from "./csr/TrashSimple.mjs";
import { TrayArrowDown as bY, TrayArrowDown as DY } from "./csr/TrayArrowDown.mjs";
import { TrayArrowUp as HY } from "./csr/TrayArrowUp.mjs";
import { Tray as RY } from "./csr/Tray.mjs";
import { TreasureChest as NY } from "./csr/TreasureChest.mjs";
import { Tree as GY } from "./csr/Tree.mjs";
import { TreeEvergreen as EY } from "./csr/TreeEvergreen.mjs";
import { TreePalm as qY } from "./csr/TreePalm.mjs";
import { TreeStructure as IY } from "./csr/TreeStructure.mjs";
import { TreeView as XY } from "./csr/TreeView.mjs";
import { TrendDown as JY } from "./csr/TrendDown.mjs";
import { TrendUp as ZY } from "./csr/TrendUp.mjs";
import { Triangle as YY } from "./csr/Triangle.mjs";
import { TriangleDashed as _Y } from "./csr/TriangleDashed.mjs";
import { Trolley as o1 } from "./csr/Trolley.mjs";
import { TrolleySuitcase as t1 } from "./csr/TrolleySuitcase.mjs";
import { Trophy as m1 } from "./csr/Trophy.mjs";
import { Truck as x1 } from "./csr/Truck.mjs";
import { TruckTrailer as a1 } from "./csr/TruckTrailer.mjs";
import { TumblrLogo as n1 } from "./csr/TumblrLogo.mjs";
import { TwitchLogo as S1 } from "./csr/TwitchLogo.mjs";
import { TwitterLogo as u1 } from "./csr/TwitterLogo.mjs";
import { Umbrella as C1 } from "./csr/Umbrella.mjs";
import { UmbrellaSimple as d1 } from "./csr/UmbrellaSimple.mjs";
import { Union as L1 } from "./csr/Union.mjs";
import { Unite as A1 } from "./csr/Unite.mjs";
import { UniteSquare as k1 } from "./csr/UniteSquare.mjs";
import { Upload as B1 } from "./csr/Upload.mjs";
import { UploadSimple as D1 } from "./csr/UploadSimple.mjs";
import { Usb as H1 } from "./csr/Usb.mjs";
import { User as R1 } from "./csr/User.mjs";
import { UserCheck as N1 } from "./csr/UserCheck.mjs";
import { UserCircle as G1 } from "./csr/UserCircle.mjs";
import { UserCircleCheck as E1 } from "./csr/UserCircleCheck.mjs";
import { UserCircleDashed as q1 } from "./csr/UserCircleDashed.mjs";
import { UserCircleGear as I1 } from "./csr/UserCircleGear.mjs";
import { UserCircleMinus as X1 } from "./csr/UserCircleMinus.mjs";
import { UserCirclePlus as J1 } from "./csr/UserCirclePlus.mjs";
import { UserFocus as Z1 } from "./csr/UserFocus.mjs";
import { UserGear as Y1 } from "./csr/UserGear.mjs";
import { UserList as _1 } from "./csr/UserList.mjs";
import { UserMinus as o$ } from "./csr/UserMinus.mjs";
import { UserPlus as t$ } from "./csr/UserPlus.mjs";
import { UserRectangle as m$ } from "./csr/UserRectangle.mjs";
import { UserSound as x$ } from "./csr/UserSound.mjs";
import { UserSquare as a$ } from "./csr/UserSquare.mjs";
import { UserSwitch as n$ } from "./csr/UserSwitch.mjs";
import { Users as S$ } from "./csr/Users.mjs";
import { UsersFour as u$ } from "./csr/UsersFour.mjs";
import { UsersThree as C$ } from "./csr/UsersThree.mjs";
import { Van as d$ } from "./csr/Van.mjs";
import { Vault as L$ } from "./csr/Vault.mjs";
import { VectorThree as A$ } from "./csr/VectorThree.mjs";
import { VectorTwo as k$ } from "./csr/VectorTwo.mjs";
import { Vibrate as B$ } from "./csr/Vibrate.mjs";
import { Video as D$ } from "./csr/Video.mjs";
import { VideoCamera as H$ } from "./csr/VideoCamera.mjs";
import { VideoCameraSlash as R$ } from "./csr/VideoCameraSlash.mjs";
import { VideoConference as N$ } from "./csr/VideoConference.mjs";
import { Vignette as G$ } from "./csr/Vignette.mjs";
import { VinylRecord as E$ } from "./csr/VinylRecord.mjs";
import { VirtualReality as q$ } from "./csr/VirtualReality.mjs";
import { Virus as I$ } from "./csr/Virus.mjs";
import { Visor as X$ } from "./csr/Visor.mjs";
import { Voicemail as J$ } from "./csr/Voicemail.mjs";
import { Volleyball as Z$ } from "./csr/Volleyball.mjs";
import { Wall as Y$ } from "./csr/Wall.mjs";
import { Wallet as _$ } from "./csr/Wallet.mjs";
import { Warehouse as o0 } from "./csr/Warehouse.mjs";
import { Warning as t0 } from "./csr/Warning.mjs";
import { WarningCircle as m0 } from "./csr/WarningCircle.mjs";
import { WarningDiamond as x0 } from "./csr/WarningDiamond.mjs";
import { WarningOctagon as a0 } from "./csr/WarningOctagon.mjs";
import { WashingMachine as n0 } from "./csr/WashingMachine.mjs";
import { Watch as S0 } from "./csr/Watch.mjs";
import { WaveSawtooth as u0 } from "./csr/WaveSawtooth.mjs";
import { WaveSine as C0 } from "./csr/WaveSine.mjs";
import { WaveSquare as d0 } from "./csr/WaveSquare.mjs";
import { WaveTriangle as L0 } from "./csr/WaveTriangle.mjs";
import { Waveform as A0 } from "./csr/Waveform.mjs";
import { WaveformSlash as k0 } from "./csr/WaveformSlash.mjs";
import { Waves as B0 } from "./csr/Waves.mjs";
import { Webcam as D0 } from "./csr/Webcam.mjs";
import { WebcamSlash as H0 } from "./csr/WebcamSlash.mjs";
import { WebhooksLogo as R0 } from "./csr/WebhooksLogo.mjs";
import { WechatLogo as N0 } from "./csr/WechatLogo.mjs";
import { WhatsappLogo as G0 } from "./csr/WhatsappLogo.mjs";
import { Wheelchair as E0 } from "./csr/Wheelchair.mjs";
import { WheelchairMotion as q0 } from "./csr/WheelchairMotion.mjs";
import { WifiHigh as I0 } from "./csr/WifiHigh.mjs";
import { WifiLow as X0 } from "./csr/WifiLow.mjs";
import { WifiMedium as J0 } from "./csr/WifiMedium.mjs";
import { WifiNone as Z0 } from "./csr/WifiNone.mjs";
import { WifiSlash as Y0 } from "./csr/WifiSlash.mjs";
import { WifiX as _0 } from "./csr/WifiX.mjs";
import { Wind as o2 } from "./csr/Wind.mjs";
import { Windmill as t2 } from "./csr/Windmill.mjs";
import { WindowsLogo as m2 } from "./csr/WindowsLogo.mjs";
import { Wine as x2 } from "./csr/Wine.mjs";
import { Wrench as a2 } from "./csr/Wrench.mjs";
import { X as n2 } from "./csr/X.mjs";
import { XCircle as S2 } from "./csr/XCircle.mjs";
import { XLogo as u2 } from "./csr/XLogo.mjs";
import { XSquare as C2 } from "./csr/XSquare.mjs";
import { Yarn as d2 } from "./csr/Yarn.mjs";
import { YinYang as L2 } from "./csr/YinYang.mjs";
import { YoutubeLogo as A2 } from "./csr/YoutubeLogo.mjs";
import { default as k2 } from "./lib/IconBase.mjs";
import { IconContext as B2 } from "./lib/context.mjs";
export {
  p as Acorn,
  FW as Activity,
  f as AddressBook,
  i as AddressBookTabs,
  l as AirTrafficControl,
  s as Airplane,
  c as AirplaneInFlight,
  g as AirplaneLanding,
  h as AirplaneTakeoff,
  w as AirplaneTaxiing,
  P as AirplaneTilt,
  T as Airplay,
  F as Alarm,
  b as Alien,
  y as AlignBottom,
  M as AlignBottomSimple,
  U as AlignCenterHorizontal,
  v as AlignCenterHorizontalSimple,
  O as AlignCenterVertical,
  W as AlignCenterVerticalSimple,
  V as AlignLeft,
  z as AlignLeftSimple,
  K as AlignRight,
  Q as AlignRightSimple,
  j as AlignTop,
  $ as AlignTopSimple,
  rr as AmazonLogo,
  er as Ambulance,
  pr as Anchor,
  fr as AnchorSimple,
  ir as AndroidLogo,
  lr as Angle,
  sr as AngularLogo,
  cr as Aperture,
  gr as AppStoreLogo,
  hr as AppWindow,
  wr as AppleLogo,
  Pr as ApplePodcastsLogo,
  Tr as ApproximateEquals,
  Fr as Archive,
  Bx as ArchiveBox,
  bY as ArchiveTray,
  br as Armchair,
  yr as ArrowArcLeft,
  Mr as ArrowArcRight,
  Ur as ArrowBendDoubleUpLeft,
  vr as ArrowBendDoubleUpRight,
  Or as ArrowBendDownLeft,
  Wr as ArrowBendDownRight,
  Vr as ArrowBendLeftDown,
  zr as ArrowBendLeftUp,
  Kr as ArrowBendRightDown,
  Qr as ArrowBendRightUp,
  jr as ArrowBendUpLeft,
  $r as ArrowBendUpRight,
  ro as ArrowCircleDown,
  eo as ArrowCircleDownLeft,
  po as ArrowCircleDownRight,
  fo as ArrowCircleLeft,
  io as ArrowCircleRight,
  lo as ArrowCircleUp,
  so as ArrowCircleUpLeft,
  co as ArrowCircleUpRight,
  go as ArrowClockwise,
  ho as ArrowCounterClockwise,
  Lo as ArrowDown,
  Ao as ArrowDownLeft,
  ko as ArrowDownRight,
  Bo as ArrowElbowDownLeft,
  Do as ArrowElbowDownRight,
  Ho as ArrowElbowLeft,
  Ro as ArrowElbowLeftDown,
  No as ArrowElbowLeftUp,
  Go as ArrowElbowRight,
  Eo as ArrowElbowRightDown,
  qo as ArrowElbowRightUp,
  Io as ArrowElbowUpLeft,
  Xo as ArrowElbowUpRight,
  Jo as ArrowFatDown,
  Zo as ArrowFatLeft,
  Yo as ArrowFatLineDown,
  _o as ArrowFatLineLeft,
  oe as ArrowFatLineRight,
  te as ArrowFatLineUp,
  me as ArrowFatLinesDown,
  xe as ArrowFatLinesLeft,
  ae as ArrowFatLinesRight,
  ne as ArrowFatLinesUp,
  Se as ArrowFatRight,
  ue as ArrowFatUp,
  Ce as ArrowLeft,
  de as ArrowLineDown,
  Le as ArrowLineDownLeft,
  Ae as ArrowLineDownRight,
  ke as ArrowLineLeft,
  Be as ArrowLineRight,
  De as ArrowLineUp,
  He as ArrowLineUpLeft,
  Re as ArrowLineUpRight,
  Ne as ArrowRight,
  Ge as ArrowSquareDown,
  Ee as ArrowSquareDownLeft,
  qe as ArrowSquareDownRight,
  Ie as ArrowSquareIn,
  Xe as ArrowSquareLeft,
  Je as ArrowSquareOut,
  Ze as ArrowSquareRight,
  Ye as ArrowSquareUp,
  _e as ArrowSquareUpLeft,
  ot as ArrowSquareUpRight,
  tt as ArrowUDownLeft,
  mt as ArrowUDownRight,
  xt as ArrowULeftDown,
  at as ArrowULeftUp,
  nt as ArrowURightDown,
  St as ArrowURightUp,
  ut as ArrowUUpLeft,
  Ct as ArrowUUpRight,
  dt as ArrowUp,
  Lt as ArrowUpLeft,
  At as ArrowUpRight,
  kt as ArrowsClockwise,
  Bt as ArrowsCounterClockwise,
  Dt as ArrowsDownUp,
  Ht as ArrowsHorizontal,
  Rt as ArrowsIn,
  Nt as ArrowsInCardinal,
  Gt as ArrowsInLineHorizontal,
  Et as ArrowsInLineVertical,
  qt as ArrowsInSimple,
  It as ArrowsLeftRight,
  Xt as ArrowsMerge,
  Jt as ArrowsOut,
  Zt as ArrowsOutCardinal,
  Yt as ArrowsOutLineHorizontal,
  _t as ArrowsOutLineVertical,
  op as ArrowsOutSimple,
  tp as ArrowsSplit,
  mp as ArrowsVertical,
  xp as Article,
  ap as ArticleMedium,
  np as ArticleNyTimes,
  Sp as Asclepius,
  gp as Asterisk,
  hp as AsteriskSimple,
  wp as At,
  Pp as Atom,
  Tp as Avocado,
  Fp as Axe,
  bp as Baby,
  yp as BabyCarriage,
  Mp as Backpack,
  Up as Backspace,
  vp as Bag,
  Op as BagSimple,
  Wp as Balloon,
  Vp as Bandaids,
  zp as Bank,
  Kp as Barbell,
  Qp as Barcode,
  jp as Barn,
  $p as Barricade,
  rm as Baseball,
  em as BaseballCap,
  pm as BaseballHelmet,
  fm as Basket,
  im as Basketball,
  lm as Bathtub,
  sm as BatteryCharging,
  cm as BatteryChargingVertical,
  gm as BatteryEmpty,
  hm as BatteryFull,
  wm as BatteryHigh,
  Pm as BatteryLow,
  Tm as BatteryMedium,
  Fm as BatteryPlus,
  bm as BatteryPlusVertical,
  ym as BatteryVerticalEmpty,
  Mm as BatteryVerticalFull,
  Um as BatteryVerticalHigh,
  vm as BatteryVerticalLow,
  Om as BatteryVerticalMedium,
  Wm as BatteryWarning,
  Vm as BatteryWarningVertical,
  zm as BeachBall,
  Km as Beanie,
  Qm as Bed,
  jm as BeerBottle,
  $m as BeerStein,
  rf as BehanceLogo,
  ef as Bell,
  pf as BellRinging,
  ff as BellSimple,
  af as BellSimpleRinging,
  nf as BellSimpleSlash,
  Sf as BellSimpleZ,
  uf as BellSlash,
  Cf as BellZ,
  df as Belt,
  Lf as BezierCurve,
  Af as Bicycle,
  kf as Binary,
  Bf as Binoculars,
  Df as Biohazard,
  Hf as Bird,
  Rf as Blueprint,
  Nf as Bluetooth,
  Gf as BluetoothConnected,
  Ef as BluetoothSlash,
  qf as BluetoothX,
  If as Boat,
  Xf as Bomb,
  Jf as Bone,
  Zf as Book,
  Yf as BookBookmark,
  _f as BookOpen,
  ox as BookOpenText,
  tx as BookOpenUser,
  mx as Bookmark,
  xx as BookmarkSimple,
  ax as Bookmarks,
  nx as BookmarksSimple,
  Sx as Books,
  ux as Boot,
  Cx as Boules,
  dx as BoundingBox,
  Lx as BowlFood,
  Ax as BowlSteam,
  kx as BowlingBall,
  bx as BoxArrowDown,
  yx as BoxArrowUp,
  Mx as BoxingGlove,
  Ux as BracketsAngle,
  vx as BracketsCurly,
  Ox as BracketsRound,
  Wx as BracketsSquare,
  Vx as Brain,
  zx as Brandy,
  Kx as Bread,
  Qx as Bridge,
  jx as Briefcase,
  $x as BriefcaseMetal,
  ri as Broadcast,
  ei as Broom,
  pi as Browser,
  fi as Browsers,
  li as Bug,
  ii as BugBeetle,
  si as BugDroid,
  gi as Building,
  ci as BuildingApartment,
  hi as BuildingOffice,
  wi as Buildings,
  Pi as Bulldozer,
  Ti as Bus,
  Fi as Butterfly,
  bi as CableCar,
  yi as Cactus,
  cp as Caduceus,
  Mi as Cake,
  Ui as Calculator,
  Oi as Calendar,
  vi as CalendarBlank,
  Wi as CalendarCheck,
  Vi as CalendarDot,
  zi as CalendarDots,
  Ki as CalendarHeart,
  Qi as CalendarMinus,
  ji as CalendarPlus,
  $i as CalendarSlash,
  ra as CalendarStar,
  ea as CalendarX,
  pa as CallBell,
  fa as Camera,
  ia as CameraPlus,
  la as CameraRotate,
  sa as CameraSlash,
  ca as Campfire,
  ha as Car,
  ga as CarBattery,
  wa as CarProfile,
  Pa as CarSimple,
  Ta as Cardholder,
  Fa as Cards,
  ba as CardsThree,
  ya as CaretCircleDoubleDown,
  Ma as CaretCircleDoubleLeft,
  Ua as CaretCircleDoubleRight,
  va as CaretCircleDoubleUp,
  Oa as CaretCircleDown,
  Wa as CaretCircleLeft,
  Va as CaretCircleRight,
  za as CaretCircleUp,
  Ka as CaretCircleUpDown,
  Qa as CaretDoubleDown,
  ja as CaretDoubleLeft,
  $a as CaretDoubleRight,
  rl as CaretDoubleUp,
  el as CaretDown,
  pl as CaretLeft,
  fl as CaretLineDown,
  il as CaretLineLeft,
  ll as CaretLineRight,
  sl as CaretLineUp,
  cl as CaretRight,
  gl as CaretUp,
  hl as CaretUpDown,
  wl as Carrot,
  Pl as CashRegister,
  Tl as CassetteTape,
  Fl as CastleTurret,
  bl as Cat,
  yl as CellSignalFull,
  Ml as CellSignalHigh,
  Ul as CellSignalLow,
  vl as CellSignalMedium,
  Ol as CellSignalNone,
  Wl as CellSignalSlash,
  Vl as CellSignalX,
  zl as CellTower,
  Kl as Certificate,
  Ql as Chair,
  jl as Chalkboard,
  $l as ChalkboardSimple,
  rn as ChalkboardTeacher,
  en as Champagne,
  pn as ChargingStation,
  fn as ChartBar,
  an as ChartBarHorizontal,
  nn as ChartDonut,
  Sn as ChartLine,
  un as ChartLineDown,
  Cn as ChartLineUp,
  dn as ChartPie,
  Ln as ChartPieSlice,
  An as ChartPolar,
  kn as ChartScatter,
  Bn as Chat,
  Dn as ChatCentered,
  Hn as ChatCenteredDots,
  Rn as ChatCenteredSlash,
  Nn as ChatCenteredText,
  Gn as ChatCircle,
  En as ChatCircleDots,
  qn as ChatCircleSlash,
  In as ChatCircleText,
  Xn as ChatDots,
  Jn as ChatSlash,
  Zn as ChatTeardrop,
  Yn as ChatTeardropDots,
  _n as ChatTeardropSlash,
  os as ChatTeardropText,
  ts as ChatText,
  ms as Chats,
  xs as ChatsCircle,
  as as ChatsTeardrop,
  ns as Check,
  Ss as CheckCircle,
  us as CheckFat,
  Cs as CheckSquare,
  ds as CheckSquareOffset,
  Ls as Checkerboard,
  As as Checks,
  ks as Cheers,
  Bs as Cheese,
  Ds as ChefHat,
  Hs as Cherries,
  Rs as Church,
  Ns as Cigarette,
  Gs as CigaretteSlash,
  Es as Circle,
  qs as CircleDashed,
  Is as CircleHalf,
  Xs as CircleHalfTilt,
  Js as CircleNotch,
  HV as CircleWavy,
  UV as CircleWavyCheck,
  EV as CircleWavyQuestion,
  VV as CircleWavyWarning,
  Zs as CirclesFour,
  Ys as CirclesThree,
  _s as CirclesThreePlus,
  oS as Circuitry,
  tS as City,
  mS as Clipboard,
  xS as ClipboardText,
  nS as Clock,
  aS as ClockAfternoon,
  SS as ClockClockwise,
  uS as ClockCountdown,
  CS as ClockCounterClockwise,
  dS as ClockUser,
  LS as ClosedCaptioning,
  BS as Cloud,
  AS as CloudArrowDown,
  kS as CloudArrowUp,
  DS as CloudCheck,
  HS as CloudFog,
  RS as CloudLightning,
  NS as CloudMoon,
  GS as CloudRain,
  ES as CloudSlash,
  qS as CloudSnow,
  IS as CloudSun,
  XS as CloudWarning,
  JS as CloudX,
  ZS as Clover,
  YS as Club,
  _S as CoatHanger,
  oc as CodaLogo,
  mc as Code,
  tc as CodeBlock,
  xc as CodeSimple,
  ac as CodepenLogo,
  nc as CodesandboxLogo,
  uc as Coffee,
  Sc as CoffeeBean,
  Cc as Coin,
  dc as CoinVertical,
  Lc as Coins,
  Ac as Columns,
  kc as ColumnsPlusLeft,
  Bc as ColumnsPlusRight,
  Dc as Command,
  Hc as Compass,
  Rc as CompassRose,
  Nc as CompassTool,
  Gc as ComputerTower,
  Ec as Confetti,
  qc as ContactlessPayment,
  Ic as Control,
  Xc as Cookie,
  Jc as CookingPot,
  Zc as Copy,
  Yc as CopySimple,
  _c as Copyleft,
  ou as Copyright,
  tu as CornersIn,
  mu as CornersOut,
  xu as Couch,
  au as CourtBasketball,
  nu as Cow,
  Su as CowboyHat,
  uu as Cpu,
  Cu as Crane,
  du as CraneTower,
  Lu as CreditCard,
  Au as Cricket,
  ku as Crop,
  Bu as Cross,
  Du as Crosshair,
  Hu as CrosshairSimple,
  Ru as Crown,
  Nu as CrownCross,
  Gu as CrownSimple,
  Eu as Cube,
  qu as CubeFocus,
  Iu as CubeTransparent,
  Xu as CurrencyBtc,
  Ju as CurrencyCircleDollar,
  Zu as CurrencyCny,
  Yu as CurrencyDollar,
  _u as CurrencyDollarSimple,
  og as CurrencyEth,
  tg as CurrencyEur,
  mg as CurrencyGbp,
  xg as CurrencyInr,
  ag as CurrencyJpy,
  ng as CurrencyKrw,
  Sg as CurrencyKzt,
  ug as CurrencyNgn,
  Cg as CurrencyRub,
  dg as Cursor,
  Lg as CursorClick,
  Ag as CursorText,
  kg as Cylinder,
  Bg as Database,
  Dg as Desk,
  Hg as Desktop,
  Rg as DesktopTower,
  Ng as Detective,
  Gg as DevToLogo,
  Eg as DeviceMobile,
  qg as DeviceMobileCamera,
  Ig as DeviceMobileSlash,
  Xg as DeviceMobileSpeaker,
  Jg as DeviceRotate,
  Zg as DeviceTablet,
  Yg as DeviceTabletCamera,
  _g as DeviceTabletSpeaker,
  oC as Devices,
  tC as Diamond,
  mC as DiamondsFour,
  xC as DiceFive,
  aC as DiceFour,
  nC as DiceOne,
  SC as DiceSix,
  uC as DiceThree,
  CC as DiceTwo,
  dC as Disc,
  LC as DiscoBall,
  AC as DiscordLogo,
  kC as Divide,
  BC as Dna,
  DC as Dog,
  HC as Door,
  RC as DoorOpen,
  NC as Dot,
  GC as DotOutline,
  EC as DotsNine,
  qC as DotsSix,
  IC as DotsSixVertical,
  XC as DotsThree,
  JC as DotsThreeCircle,
  ZC as DotsThreeCircleVertical,
  YC as DotsThreeOutline,
  _C as DotsThreeOutlineVertical,
  oh as DotsThreeVertical,
  th as Download,
  mh as DownloadSimple,
  xh as Dress,
  ah as Dresser,
  nh as DribbbleLogo,
  Sh as Drone,
  uh as Drop,
  Ch as DropHalf,
  dh as DropHalfBottom,
  Lh as DropSimple,
  Ah as DropSlash,
  kh as DropboxLogo,
  Bh as Ear,
  Dh as EarSlash,
  Hh as Egg,
  Rh as EggCrack,
  Nh as Eject,
  Gh as EjectSimple,
  Eh as Elevator,
  qh as Empty,
  Ih as Engine,
  Xh as Envelope,
  Jh as EnvelopeOpen,
  Zh as EnvelopeSimple,
  Yh as EnvelopeSimpleOpen,
  _h as Equalizer,
  od as Equals,
  td as Eraser,
  md as EscalatorDown,
  xd as EscalatorUp,
  ad as Exam,
  nd as ExclamationMark,
  Sd as Exclude,
  ud as ExcludeSquare,
  Cd as Export,
  dd as Eye,
  Ld as EyeClosed,
  Ad as EyeSlash,
  kd as Eyedropper,
  Bd as EyedropperSample,
  Dd as Eyeglasses,
  Hd as Eyes,
  Rd as FaceMask,
  Nd as FacebookLogo,
  Gd as Factory,
  Ed as Faders,
  qd as FadersHorizontal,
  Id as FalloutShelter,
  Xd as Fan,
  Jd as Farm,
  Zd as FastForward,
  Yd as FastForwardCircle,
  _d as Feather,
  ow as FediverseLogo,
  tw as FigmaLogo,
  Sw as File,
  mw as FileArchive,
  xw as FileArrowDown,
  aw as FileArrowUp,
  nw as FileAudio,
  uw as FileC,
  Cw as FileCSharp,
  dw as FileCloud,
  Lw as FileCode,
  Aw as FileCpp,
  kw as FileCss,
  Bw as FileCsv,
  Dw as FileDashed,
  Mw as FileDoc,
  yw as FileDotted,
  Uw as FileHtml,
  vw as FileImage,
  Ow as FileIni,
  Ww as FileJpg,
  Vw as FileJs,
  zw as FileJsx,
  Kw as FileLock,
  Qw as FileMagnifyingGlass,
  Yw as FileMd,
  _w as FileMinus,
  oL as FilePdf,
  tL as FilePlus,
  mL as FilePng,
  xL as FilePpt,
  aL as FilePy,
  nL as FileRs,
  Zw as FileSearch,
  SL as FileSql,
  uL as FileSvg,
  CL as FileText,
  dL as FileTs,
  LL as FileTsx,
  AL as FileTxt,
  kL as FileVideo,
  BL as FileVue,
  DL as FileX,
  HL as FileXls,
  RL as FileZip,
  NL as Files,
  GL as FilmReel,
  EL as FilmScript,
  qL as FilmSlate,
  IL as FilmStrip,
  XL as Fingerprint,
  JL as FingerprintSimple,
  ZL as FinnTheHuman,
  YL as Fire,
  _L as FireExtinguisher,
  oP as FireSimple,
  tP as FireTruck,
  mP as FirstAid,
  xP as FirstAidKit,
  aP as Fish,
  nP as FishSimple,
  CP as Flag,
  SP as FlagBanner,
  uP as FlagBannerFold,
  dP as FlagCheckered,
  LP as FlagPennant,
  AP as Flame,
  kP as Flashlight,
  BP as Flask,
  DP as FlipHorizontal,
  HP as FlipVertical,
  NP as FloppyDisk,
  RP as FloppyDiskBack,
  GP as FlowArrow,
  EP as Flower,
  qP as FlowerLotus,
  IP as FlowerTulip,
  XP as FlyingSaucer,
  JP as Folder,
  jP as FolderDashed,
  YP as FolderDotted,
  _P as FolderLock,
  oA as FolderMinus,
  QP as FolderNotch,
  eA as FolderNotchMinus,
  pA as FolderNotchOpen,
  xA as FolderNotchPlus,
  mA as FolderOpen,
  iA as FolderPlus,
  lA as FolderSimple,
  sA as FolderSimpleDashed,
  SA as FolderSimpleDotted,
  uA as FolderSimpleLock,
  CA as FolderSimpleMinus,
  dA as FolderSimplePlus,
  LA as FolderSimpleStar,
  AA as FolderSimpleUser,
  kA as FolderStar,
  BA as FolderUser,
  DA as Folders,
  HA as Football,
  RA as FootballHelmet,
  NA as Footprints,
  GA as ForkKnife,
  EA as FourK,
  qA as FrameCorners,
  IA as FramerLogo,
  XA as Function,
  JA as Funnel,
  ZA as FunnelSimple,
  YA as FunnelSimpleX,
  _A as FunnelX,
  oT as GameController,
  tT as Garage,
  mT as GasCan,
  xT as GasPump,
  aT as Gauge,
  nT as Gavel,
  ST as Gear,
  uT as GearFine,
  CT as GearSix,
  dT as GenderFemale,
  LT as GenderIntersex,
  AT as GenderMale,
  kT as GenderNeuter,
  BT as GenderNonbinary,
  DT as GenderTransgender,
  HT as Ghost,
  RT as Gif,
  NT as Gift,
  GT as GitBranch,
  ET as GitCommit,
  qT as GitDiff,
  IT as GitFork,
  XT as GitMerge,
  JT as GitPullRequest,
  ZT as GithubLogo,
  YT as GitlabLogo,
  _T as GitlabLogoSimple,
  ok as Globe,
  tk as GlobeHemisphereEast,
  mk as GlobeHemisphereWest,
  xk as GlobeSimple,
  ak as GlobeSimpleX,
  nk as GlobeStand,
  Sk as GlobeX,
  uk as Goggles,
  Ck as Golf,
  dk as GoodreadsLogo,
  Lk as GoogleCardboardLogo,
  Ak as GoogleChromeLogo,
  kk as GoogleDriveLogo,
  Bk as GoogleLogo,
  Dk as GooglePhotosLogo,
  Hk as GooglePlayLogo,
  Rk as GooglePodcastsLogo,
  Nk as Gps,
  Gk as GpsFix,
  Ek as GpsSlash,
  qk as Gradient,
  Ik as GraduationCap,
  Xk as Grains,
  Jk as GrainsSlash,
  Zk as Graph,
  Yk as GraphicsCard,
  _k as GreaterThan,
  oF as GreaterThanOrEqual,
  tF as GridFour,
  mF as GridNine,
  xF as Guitar,
  aF as HairDryer,
  nF as Hamburger,
  SF as Hammer,
  dF as Hand,
  uF as HandArrowDown,
  CF as HandArrowUp,
  LF as HandCoins,
  AF as HandDeposit,
  kF as HandEye,
  BF as HandFist,
  DF as HandGrabbing,
  HF as HandHeart,
  RF as HandPalm,
  NF as HandPeace,
  GF as HandPointing,
  EF as HandSoap,
  qF as HandSwipeLeft,
  IF as HandSwipeRight,
  XF as HandTap,
  JF as HandWaving,
  ZF as HandWithdraw,
  YF as Handbag,
  _F as HandbagSimple,
  oB as HandsClapping,
  tB as HandsPraying,
  mB as Handshake,
  xB as HardDrive,
  aB as HardDrives,
  nB as HardHat,
  SB as Hash,
  uB as HashStraight,
  CB as HeadCircuit,
  dB as Headlights,
  LB as Headphones,
  AB as Headset,
  kB as Heart,
  BB as HeartBreak,
  DB as HeartHalf,
  HB as HeartStraight,
  RB as HeartStraightBreak,
  NB as Heartbeat,
  GB as Hexagon,
  EB as HighDefinition,
  qB as HighHeel,
  IB as Highlighter,
  XB as HighlighterCircle,
  JB as Hockey,
  ZB as Hoodie,
  YB as Horse,
  _B as Hospital,
  ob as Hourglass,
  tb as HourglassHigh,
  mb as HourglassLow,
  xb as HourglassMedium,
  ab as HourglassSimple,
  nb as HourglassSimpleHigh,
  Sb as HourglassSimpleLow,
  ub as HourglassSimpleMedium,
  Cb as House,
  db as HouseLine,
  Lb as HouseSimple,
  Ab as Hurricane,
  kb as IceCream,
  k2 as IconBase,
  B2 as IconContext,
  Bb as IdentificationBadge,
  Db as IdentificationCard,
  Hb as Image,
  Rb as ImageBroken,
  Nb as ImageSquare,
  Gb as Images,
  Eb as ImagesSquare,
  qb as Infinity,
  zb as Info,
  Kb as InstagramLogo,
  Qb as Intersect,
  jb as IntersectSquare,
  $b as IntersectThree,
  rD as Intersection,
  eD as Invoice,
  pD as Island,
  fD as Jar,
  iD as JarLabel,
  lD as Jeep,
  sD as Joystick,
  cD as Kanban,
  gD as Key,
  hD as KeyReturn,
  wD as Keyboard,
  PD as Keyhole,
  TD as Knife,
  FD as Ladder,
  bD as LadderSimple,
  yD as Lamp,
  MD as LampPendant,
  UD as Laptop,
  vD as Lasso,
  OD as LastfmLogo,
  WD as Layout,
  VD as Leaf,
  zD as Lectern,
  KD as Lego,
  QD as LegoSmiley,
  Vb as Lemniscate,
  jD as LessThan,
  $D as LessThanOrEqual,
  ry as LetterCircleH,
  ey as LetterCircleP,
  py as LetterCircleV,
  fy as Lifebuoy,
  iy as Lightbulb,
  ly as LightbulbFilament,
  sy as Lighthouse,
  gy as Lightning,
  cy as LightningA,
  hy as LightningSlash,
  wy as LineSegment,
  Py as LineSegments,
  Ty as LineVertical,
  Fy as Link,
  by as LinkBreak,
  yy as LinkSimple,
  My as LinkSimpleBreak,
  Uy as LinkSimpleHorizontal,
  vy as LinkSimpleHorizontalBreak,
  Oy as LinkedinLogo,
  Wy as LinktreeLogo,
  Vy as LinuxLogo,
  zy as List,
  Ky as ListBullets,
  Qy as ListChecks,
  jy as ListDashes,
  $y as ListHeart,
  rH as ListMagnifyingGlass,
  eH as ListNumbers,
  pH as ListPlus,
  fH as ListStar,
  iH as Lock,
  lH as LockKey,
  sH as LockKeyOpen,
  cH as LockLaminated,
  gH as LockLaminatedOpen,
  hH as LockOpen,
  wH as LockSimple,
  PH as LockSimpleOpen,
  TH as Lockers,
  FH as Log,
  bH as MagicWand,
  yH as Magnet,
  MH as MagnetStraight,
  UH as MagnifyingGlass,
  vH as MagnifyingGlassMinus,
  OH as MagnifyingGlassPlus,
  WH as Mailbox,
  zH as MapPin,
  VH as MapPinArea,
  KH as MapPinLine,
  QH as MapPinPlus,
  $H as MapPinSimple,
  jH as MapPinSimpleArea,
  rM as MapPinSimpleLine,
  eM as MapTrifold,
  pM as MarkdownLogo,
  fM as MarkerCircle,
  iM as Martini,
  lM as MaskHappy,
  sM as MaskSad,
  cM as MastodonLogo,
  gM as MathOperations,
  hM as MatrixLogo,
  wM as Medal,
  PM as MedalMilitary,
  TM as MediumLogo,
  FM as Megaphone,
  bM as MegaphoneSimple,
  yM as MemberOf,
  MM as Memory,
  UM as MessengerLogo,
  vM as MetaLogo,
  OM as Meteor,
  WM as Metronome,
  VM as Microphone,
  zM as MicrophoneSlash,
  KM as MicrophoneStage,
  QM as Microscope,
  jM as MicrosoftExcelLogo,
  $M as MicrosoftOutlookLogo,
  rR as MicrosoftPowerpointLogo,
  eR as MicrosoftTeamsLogo,
  pR as MicrosoftWordLogo,
  fR as Minus,
  iR as MinusCircle,
  lR as MinusSquare,
  sR as Money,
  cR as MoneyWavy,
  hR as Monitor,
  gR as MonitorArrowUp,
  wR as MonitorPlay,
  PR as Moon,
  TR as MoonStars,
  FR as Moped,
  bR as MopedFront,
  yR as Mosque,
  MR as Motorcycle,
  UR as Mountains,
  vR as Mouse,
  OR as MouseLeftClick,
  WR as MouseMiddleClick,
  VR as MouseRightClick,
  zR as MouseScroll,
  KR as MouseSimple,
  QR as MusicNote,
  jR as MusicNoteSimple,
  $R as MusicNotes,
  rU as MusicNotesMinus,
  eU as MusicNotesPlus,
  pU as MusicNotesSimple,
  fU as NavigationArrow,
  iU as Needle,
  lU as Network,
  sU as NetworkSlash,
  cU as NetworkX,
  gU as Newspaper,
  hU as NewspaperClipping,
  wU as NotEquals,
  PU as NotMemberOf,
  TU as NotSubsetOf,
  FU as NotSupersetOf,
  bU as Notches,
  MU as Note,
  yU as NoteBlank,
  UU as NotePencil,
  vU as Notebook,
  OU as Notepad,
  WU as Notification,
  VU as NotionLogo,
  zU as NuclearPlant,
  KU as NumberCircleEight,
  QU as NumberCircleFive,
  jU as NumberCircleFour,
  $U as NumberCircleNine,
  rN as NumberCircleOne,
  eN as NumberCircleSeven,
  pN as NumberCircleSix,
  fN as NumberCircleThree,
  iN as NumberCircleTwo,
  lN as NumberCircleZero,
  sN as NumberEight,
  cN as NumberFive,
  gN as NumberFour,
  hN as NumberNine,
  wN as NumberOne,
  PN as NumberSeven,
  TN as NumberSix,
  FN as NumberSquareEight,
  bN as NumberSquareFive,
  yN as NumberSquareFour,
  MN as NumberSquareNine,
  UN as NumberSquareOne,
  vN as NumberSquareSeven,
  ON as NumberSquareSix,
  WN as NumberSquareThree,
  VN as NumberSquareTwo,
  zN as NumberSquareZero,
  KN as NumberThree,
  QN as NumberTwo,
  jN as NumberZero,
  $N as Numpad,
  rv as Nut,
  ev as NyTimesLogo,
  pv as Octagon,
  fv as OfficeChair,
  iv as Onigiri,
  lv as OpenAiLogo,
  o as Opti,
  sv as Option,
  cv as Orange,
  gv as OrangeSlice,
  hv as Oven,
  wv as Package,
  Pv as PaintBrush,
  Tv as PaintBrushBroad,
  Fv as PaintBrushHousehold,
  bv as PaintBucket,
  yv as PaintRoller,
  Mv as Palette,
  Uv as Panorama,
  vv as Pants,
  Ov as PaperPlane,
  Wv as PaperPlaneRight,
  Vv as PaperPlaneTilt,
  zv as Paperclip,
  Kv as PaperclipHorizontal,
  Qv as Parachute,
  jv as Paragraph,
  $v as Parallelogram,
  rG as Park,
  eG as Password,
  pG as Path,
  fG as PatreonLogo,
  iG as Pause,
  lG as PauseCircle,
  sG as PawPrint,
  cG as PaypalLogo,
  gG as Peace,
  hG as Pen,
  wG as PenNib,
  PG as PenNibStraight,
  TG as Pencil,
  FG as PencilCircle,
  bG as PencilLine,
  yG as PencilRuler,
  MG as PencilSimple,
  UG as PencilSimpleLine,
  vG as PencilSimpleSlash,
  OG as PencilSlash,
  WG as Pentagon,
  VG as Pentagram,
  zG as Pepper,
  KG as Percent,
  jG as Person,
  QG as PersonArmsSpread,
  rO as PersonSimple,
  $G as PersonSimpleBike,
  eO as PersonSimpleCircle,
  pO as PersonSimpleHike,
  fO as PersonSimpleRun,
  iO as PersonSimpleSki,
  lO as PersonSimpleSnowboard,
  sO as PersonSimpleSwim,
  cO as PersonSimpleTaiChi,
  gO as PersonSimpleThrow,
  hO as PersonSimpleWalk,
  wO as Perspective,
  PO as Phone,
  TO as PhoneCall,
  FO as PhoneDisconnect,
  bO as PhoneIncoming,
  yO as PhoneList,
  MO as PhoneOutgoing,
  UO as PhonePause,
  vO as PhonePlus,
  OO as PhoneSlash,
  WO as PhoneTransfer,
  VO as PhoneX,
  zO as PhosphorLogo,
  KO as Pi,
  QO as PianoKeys,
  jO as PicnicTable,
  $O as PictureInPicture,
  rE as PiggyBank,
  eE as Pill,
  pE as PingPong,
  fE as PintGlass,
  iE as PinterestLogo,
  lE as Pinwheel,
  sE as Pipe,
  cE as PipeWrench,
  gE as PixLogo,
  hE as Pizza,
  wE as Placeholder,
  PE as Planet,
  TE as Plant,
  FE as Play,
  bE as PlayCircle,
  yE as PlayPause,
  ME as Playlist,
  UE as Plug,
  vE as PlugCharging,
  OE as Plugs,
  WE as PlugsConnected,
  VE as Plus,
  zE as PlusCircle,
  KE as PlusMinus,
  QE as PlusSquare,
  jE as PokerChip,
  $E as PoliceCar,
  rW as Polygon,
  eW as Popcorn,
  pW as Popsicle,
  fW as PottedPlant,
  iW as Power,
  lW as Prescription,
  sW as Presentation,
  cW as PresentationChart,
  gW as Printer,
  hW as Prohibit,
  wW as ProhibitInset,
  PW as ProjectorScreen,
  TW as ProjectorScreenChart,
  BW as Pulse,
  DW as PushPin,
  HW as PushPinSimple,
  RW as PushPinSimpleSlash,
  NW as PushPinSlash,
  GW as PuzzlePiece,
  EW as QrCode,
  qW as Question,
  IW as QuestionMark,
  XW as Queue,
  JW as Quotes,
  ZW as Rabbit,
  YW as Racquet,
  _W as Radical,
  oq as Radio,
  tq as RadioButton,
  mq as Radioactive,
  xq as Rainbow,
  aq as RainbowCloud,
  nq as Ranking,
  Sq as ReadCvLogo,
  uq as Receipt,
  Cq as ReceiptX,
  dq as Record,
  Lq as Rectangle,
  Aq as RectangleDashed,
  kq as Recycle,
  Bq as RedditLogo,
  Dq as Repeat,
  Hq as RepeatOnce,
  Rq as ReplitLogo,
  Nq as Resize,
  Gq as Rewind,
  Eq as RewindCircle,
  qq as RoadHorizon,
  Iq as Robot,
  Xq as Rocket,
  Jq as RocketLaunch,
  Zq as Rows,
  Yq as RowsPlusBottom,
  _q as RowsPlusTop,
  oV as Rss,
  tV as RssSimple,
  mV as Rug,
  xV as Ruler,
  r as SSR,
  aV as Sailboat,
  nV as Scales,
  SV as Scan,
  uV as ScanSmiley,
  CV as Scissors,
  dV as Scooter,
  LV as Screencast,
  AV as Screwdriver,
  kV as Scribble,
  BV as ScribbleLoop,
  DV as Scroll,
  MV as Seal,
  NV as SealCheck,
  GV as SealPercent,
  WV as SealQuestion,
  IV as SealWarning,
  XV as Seat,
  JV as Seatbelt,
  ZV as SecurityCamera,
  oI as Selection,
  YV as SelectionAll,
  _V as SelectionBackground,
  tI as SelectionForeground,
  mI as SelectionInverse,
  xI as SelectionPlus,
  aI as SelectionSlash,
  nI as Shapes,
  SI as Share,
  uI as ShareFat,
  CI as ShareNetwork,
  dI as Shield,
  LI as ShieldCheck,
  AI as ShieldCheckered,
  kI as ShieldChevron,
  BI as ShieldPlus,
  DI as ShieldSlash,
  HI as ShieldStar,
  RI as ShieldWarning,
  NI as ShippingContainer,
  GI as ShirtFolded,
  EI as ShootingStar,
  qI as ShoppingBag,
  II as ShoppingBagOpen,
  XI as ShoppingCart,
  JI as ShoppingCartSimple,
  ZI as Shovel,
  YI as Shower,
  _I as Shrimp,
  tz as Shuffle,
  oz as ShuffleAngular,
  mz as ShuffleSimple,
  xz as Sidebar,
  az as SidebarSimple,
  nz as Sigma,
  Sz as SignIn,
  uz as SignOut,
  Cz as Signature,
  dz as Signpost,
  Lz as SimCard,
  Az as Siren,
  kz as SketchLogo,
  Bz as SkipBack,
  Dz as SkipBackCircle,
  Hz as SkipForward,
  Rz as SkipForwardCircle,
  Nz as Skull,
  Gz as SkypeLogo,
  Ez as SlackLogo,
  qz as Sliders,
  Iz as SlidersHorizontal,
  Xz as Slideshow,
  Yz as Smiley,
  Jz as SmileyAngry,
  Zz as SmileyBlank,
  _z as SmileyMeh,
  oX as SmileyMelting,
  tX as SmileyNervous,
  mX as SmileySad,
  xX as SmileySticker,
  aX as SmileyWink,
  nX as SmileyXEyes,
  SX as SnapchatLogo,
  uX as Sneaker,
  CX as SneakerMove,
  dX as Snowflake,
  LX as SoccerBall,
  AX as Sock,
  kX as SolarPanel,
  BX as SolarRoof,
  DX as SortAscending,
  HX as SortDescending,
  RX as SoundcloudLogo,
  NX as Spade,
  GX as Sparkle,
  EX as SpeakerHifi,
  qX as SpeakerHigh,
  IX as SpeakerLow,
  XX as SpeakerNone,
  JX as SpeakerSimpleHigh,
  ZX as SpeakerSimpleLow,
  YX as SpeakerSimpleNone,
  _X as SpeakerSimpleSlash,
  oK as SpeakerSimpleX,
  tK as SpeakerSlash,
  mK as SpeakerX,
  xK as Speedometer,
  aK as Sphere,
  SK as Spinner,
  nK as SpinnerBall,
  uK as SpinnerGap,
  CK as Spiral,
  dK as SplitHorizontal,
  LK as SplitVertical,
  AK as SpotifyLogo,
  kK as SprayBottle,
  BK as Square,
  DK as SquareHalf,
  HK as SquareHalfBottom,
  RK as SquareLogo,
  NK as SquareSplitHorizontal,
  GK as SquareSplitVertical,
  EK as SquaresFour,
  qK as Stack,
  IK as StackMinus,
  XK as StackOverflowLogo,
  JK as StackPlus,
  ZK as StackSimple,
  YK as Stairs,
  _K as Stamp,
  oJ as StandardDefinition,
  mJ as Star,
  tJ as StarAndCrescent,
  xJ as StarFour,
  aJ as StarHalf,
  nJ as StarOfDavid,
  SJ as SteamLogo,
  uJ as SteeringWheel,
  CJ as Steps,
  dJ as Stethoscope,
  LJ as Sticker,
  AJ as Stool,
  kJ as Stop,
  BJ as StopCircle,
  DJ as Storefront,
  HJ as Strategy,
  RJ as StripeLogo,
  NJ as Student,
  GJ as SubsetOf,
  EJ as SubsetProperOf,
  qJ as Subtitles,
  IJ as SubtitlesSlash,
  XJ as Subtract,
  JJ as SubtractSquare,
  ZJ as Subway,
  YJ as Suitcase,
  _J as SuitcaseRolling,
  oQ as SuitcaseSimple,
  tQ as Sun,
  mQ as SunDim,
  xQ as SunHorizon,
  aQ as Sunglasses,
  nQ as SupersetOf,
  SQ as SupersetProperOf,
  uQ as Swap,
  CQ as Swatches,
  dQ as SwimmingPool,
  LQ as Sword,
  AQ as Synagogue,
  kQ as Syringe,
  BQ as TShirt,
  DQ as Table,
  HQ as Tabs,
  RQ as Tag,
  NQ as TagChevron,
  GQ as TagSimple,
  EQ as Target,
  qQ as Taxi,
  IQ as TeaBag,
  XQ as TelegramLogo,
  JQ as Television,
  ZQ as TelevisionSimple,
  YQ as TennisBall,
  _Q as Tent,
  oZ as Terminal,
  tZ as TerminalWindow,
  mZ as TestTube,
  xZ as TextAUnderline,
  aZ as TextAa,
  nZ as TextAlignCenter,
  SZ as TextAlignJustify,
  uZ as TextAlignLeft,
  CZ as TextAlignRight,
  dZ as TextB,
  wZ as TextBolder,
  PZ as TextColumns,
  TZ as TextH,
  FZ as TextHFive,
  bZ as TextHFour,
  yZ as TextHOne,
  MZ as TextHSix,
  UZ as TextHThree,
  vZ as TextHTwo,
  OZ as TextIndent,
  WZ as TextItalic,
  VZ as TextOutdent,
  zZ as TextStrikethrough,
  KZ as TextSubscript,
  QZ as TextSuperscript,
  jZ as TextT,
  $Z as TextTSlash,
  rj as TextUnderline,
  ej as Textbox,
  pj as Thermometer,
  fj as ThermometerCold,
  ij as ThermometerHot,
  lj as ThermometerSimple,
  sj as ThreadsLogo,
  cj as ThreeD,
  gj as ThumbsDown,
  hj as ThumbsUp,
  wj as Ticket,
  Pj as TidalLogo,
  Tj as TiktokLogo,
  Fj as Tilde,
  bj as Timer,
  yj as TipJar,
  Mj as Tipi,
  Uj as Tire,
  vj as ToggleLeft,
  Oj as ToggleRight,
  Wj as Toilet,
  Vj as ToiletPaper,
  zj as Toolbox,
  Kj as Tooth,
  Qj as Tornado,
  jj as Tote,
  $j as ToteSimple,
  rY as Towel,
  eY as Tractor,
  pY as Trademark,
  fY as TrademarkRegistered,
  iY as TrafficCone,
  lY as TrafficSign,
  sY as TrafficSignal,
  cY as Train,
  gY as TrainRegional,
  hY as TrainSimple,
  wY as Tram,
  PY as Translate,
  TY as Trash,
  FY as TrashSimple,
  RY as Tray,
  DY as TrayArrowDown,
  HY as TrayArrowUp,
  NY as TreasureChest,
  GY as Tree,
  EY as TreeEvergreen,
  qY as TreePalm,
  IY as TreeStructure,
  XY as TreeView,
  JY as TrendDown,
  ZY as TrendUp,
  YY as Triangle,
  _Y as TriangleDashed,
  o1 as Trolley,
  t1 as TrolleySuitcase,
  m1 as Trophy,
  x1 as Truck,
  a1 as TruckTrailer,
  n1 as TumblrLogo,
  S1 as TwitchLogo,
  u1 as TwitterLogo,
  C1 as Umbrella,
  d1 as UmbrellaSimple,
  L1 as Union,
  A1 as Unite,
  k1 as UniteSquare,
  B1 as Upload,
  D1 as UploadSimple,
  H1 as Usb,
  R1 as User,
  N1 as UserCheck,
  G1 as UserCircle,
  E1 as UserCircleCheck,
  q1 as UserCircleDashed,
  I1 as UserCircleGear,
  X1 as UserCircleMinus,
  J1 as UserCirclePlus,
  Z1 as UserFocus,
  Y1 as UserGear,
  _1 as UserList,
  o$ as UserMinus,
  t$ as UserPlus,
  m$ as UserRectangle,
  x$ as UserSound,
  a$ as UserSquare,
  n$ as UserSwitch,
  S$ as Users,
  u$ as UsersFour,
  C$ as UsersThree,
  d$ as Van,
  L$ as Vault,
  A$ as VectorThree,
  k$ as VectorTwo,
  B$ as Vibrate,
  D$ as Video,
  H$ as VideoCamera,
  R$ as VideoCameraSlash,
  N$ as VideoConference,
  G$ as Vignette,
  E$ as VinylRecord,
  q$ as VirtualReality,
  I$ as Virus,
  X$ as Visor,
  J$ as Voicemail,
  Z$ as Volleyball,
  Y$ as Wall,
  _$ as Wallet,
  o0 as Warehouse,
  t0 as Warning,
  m0 as WarningCircle,
  x0 as WarningDiamond,
  a0 as WarningOctagon,
  n0 as WashingMachine,
  S0 as Watch,
  u0 as WaveSawtooth,
  C0 as WaveSine,
  d0 as WaveSquare,
  L0 as WaveTriangle,
  A0 as Waveform,
  k0 as WaveformSlash,
  B0 as Waves,
  D0 as Webcam,
  H0 as WebcamSlash,
  R0 as WebhooksLogo,
  N0 as WechatLogo,
  G0 as WhatsappLogo,
  E0 as Wheelchair,
  q0 as WheelchairMotion,
  I0 as WifiHigh,
  X0 as WifiLow,
  J0 as WifiMedium,
  Z0 as WifiNone,
  Y0 as WifiSlash,
  _0 as WifiX,
  o2 as Wind,
  t2 as Windmill,
  m2 as WindowsLogo,
  x2 as Wine,
  a2 as Wrench,
  n2 as X,
  S2 as XCircle,
  u2 as XLogo,
  C2 as XSquare,
  d2 as Yarn,
  L2 as YinYang,
  A2 as YoutubeLogo
};
