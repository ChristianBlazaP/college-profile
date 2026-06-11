// src/data/faculties.js
// All faculty portrait images imported individually and then exported.
// Also collected into a structured array export.

import alvaroFerdinand from "../assets/faculties/ALVARO, Ferdinand p. CRUZ, ROLF IRWIN C.png";
import amacNacho from "../assets/faculties/AMAC, Nacho B.png";
import angloEdwin from "../assets/faculties/ANGLO, Edwin.png";
import bairanRyan from "../assets/faculties/BAIRAN, Ryan Alexie L.png";
import barbaErwin from "../assets/faculties/BARBA, Erwin C.png";
import basiMaureen from "../assets/faculties/BASI, Maureen D.png";
import bediadesiree from "../assets/faculties/BEDIA, Desiree Joyce L.png";
import bernardoJay from "../assets/faculties/BERNARDO, Jay C.png";
import bucaoIrving from "../assets/faculties/BUCAO, Irving E.png";
import buencuchilloRodita from "../assets/faculties/BUENCUCHILLO, Rodita M.png";
import castillanoIvan from "../assets/faculties/CASTILLANO, Ivan F.png";
import danglaCruz from "../assets/faculties/DANGLA CRUZ, ROLF IRWIN C.png";
import datuJordan from "../assets/faculties/DATU, Jordan A.png";
import dinerosDaniel from "../assets/faculties/DINEROS, Daniel D.png";
import doctoleroArnel from "../assets/faculties/DOCTOLERO, Arnel A.png";
import doctorMario from "../assets/faculties/DOCTOR III, Mario Manuel B.png";
import delaCruzSofia from "../assets/faculties/Dela cruz, Sofia.png";
import drErwinOrdovez from "../assets/faculties/Dr. ERWIN P. ORDOVEZ.png";
import gabasEvelyn from "../assets/faculties/GABAS, Evelyn A.png";
import jameroFelipe from "../assets/faculties/JAMERO, Felipe K.png";
import jameroRichard from "../assets/faculties/JAMERO, Richard K.png";
import mangahasJanice from "../assets/faculties/MANGAHAS, Janice P.png";
import marceloMerelyn from "../assets/faculties/MARCELO, Merelyn A.png";
import nanaliMara from "../assets/faculties/NANALI, MARA FLORIZA B.png";
import naridoVincent from "../assets/faculties/NARIDO, VINCENT A.png";
import ordovezDennis from "../assets/faculties/ORDOVEZ, Dennis P.png";
import parasjillianne from "../assets/faculties/PARAS, JILLIANNE D.png";
import peraltaDerick from "../assets/faculties/PERALTA, DERICK O.png";
import perezEldon from "../assets/faculties/PEREZ, ELDON P.png";
import pielagoMithos from "../assets/faculties/PIELAGO, Mithos Arth M.png";
import reynosoRoberto from "../assets/faculties/REYNOSO, Roberto E., Evelyn A.png";
import riveraSherwin from "../assets/faculties/RIVERA, Sherwin Keith T.png";
import sanJuanRhyca from "../assets/faculties/SAN JUAN Rhyca Mae C.png";
import sandovalAllan from "../assets/faculties/SANDOVAL, Allan A.png";
import tabucol from "../assets/faculties/TABUCOL, EMMANUEL.png";
import tanada from "../assets/faculties/TANADA.png";
import tanuecozJoseph from "../assets/faculties/TANUECOZ, Joseph Angelo C.png";
import tobiasAriel from "../assets/faculties/TOBIAS ARIEL E.png";
import ubaldoJorge from "../assets/faculties/UBALDO, Jorge S.png";
import villadolidRowena from "../assets/faculties/VILLADOLID, Rowena M.png";
import villanueva from "../assets/faculties/VILLANUEVA, Christian.png";

export {
  alvaroFerdinand,
  amacNacho,
  angloEdwin,
  bairanRyan,
  barbaErwin,
  basiMaureen,
  bediadesiree,
  bernardoJay,
  bucaoIrving,
  buencuchilloRodita,
  castillanoIvan,
  danglaCruz,
  datuJordan,
  dinerosDaniel,
  doctoleroArnel,
  doctorMario,
  delaCruzSofia,
  drErwinOrdovez,
  gabasEvelyn,
  jameroFelipe,
  jameroRichard,
  mangahasJanice,
  marceloMerelyn,
  nanaliMara,
  naridoVincent,
  ordovezDennis,
  parasjillianne,
  peraltaDerick,
  perezEldon,
  pielagoMithos,
  reynosoRoberto,
  riveraSherwin,
  sanJuanRhyca,
  sandovalAllan,
  tabucol,
  tanada,
  tanuecozJoseph,
  tobiasAriel,
  ubaldoJorge,
  villadolidRowena,
  villanueva
};

export const allFacultyImages = [
  { name: "DR. ERWIN P. ORDOVEZ",                     role: "College Dean",                                      department: "Administration",                  image: drErwinOrdovez },
  { name: "PROF. EVELYN A. GABAS",                    role: "Associate Dean",                                    department: "Administration",                  image: gabasEvelyn },
  { name: "ALVARO, Ferdinand P. CRUZ, ROLF IRWIN C.", role: "Faculty",                                           department: "Electrical Technology",           image: alvaroFerdinand },
  { name: "AMAC, Nacho B.",                            role: "Faculty",                                           department: "General Education",               image: amacNacho },
  { name: "ANGLO, Edwin.",                             role: "Faculty",                                           department: "Automotive Technology",           image: angloEdwin },
  { name: "BAIRAN, Ryan Alexie L.",                    role: "Faculty",                                           department: "Electronics Technology",          image: bairanRyan },
  { name: "BARBA, Erwin C.",                           role: "Faculty",                                           department: "Electrical Technology",           image: barbaErwin },
  { name: "BASIA, Maureen D.",                         role: "Faculty",                                           department: "Food Trades",                     image: basiMaureen },
  { name: "BEDIA, Desiree Joyce L.",                   role: "Department Head - Apparel and Fashion Technology",  department: "Apparel and Fashion Technology",  image: bediadesiree },
  { name: "BERNARDO, Jay C.",                          role: "Faculty",                                           department: "Electronics Technology",          image: bernardoJay },
  { name: "BUCAO, Irving E.",                          role: "Faculty",                                           department: "Computer Technology",             image: bucaoIrving },
  { name: "BUENCUCHILLO, Rodita M.",                   role: "Faculty",                                           department: "General Education",               image: buencuchilloRodita },
  { name: "CASTILLANO, Ivan F.",                       role: "Faculty",                                           department: "Automotive Technology",           image: castillanoIvan },
  { name: "DATU, Jordan A.",                           role: "Department Head - Automotive Technology",           department: "Automotive Technology",           image: datuJordan },
  { name: "Dela Cruz, Sofia.",                         role: "Faculty",                                           department: "Apparel and Fashion Technology",  image: delaCruzSofia },
  { name: "DINEROS, Daniel D.",                        role: "Faculty",                                           department: "Mechanical Technology",           image: dinerosDaniel },
  { name: "DOCTOLERO, Arnel A.",                       role: "Faculty",                                           department: "General Education",               image: doctoleroArnel },
  { name: "DOCTOR III, Mario Manuel B.",               role: "Faculty",                                           department: "Food Trades",                     image: doctorMario },
  { name: "JAMERO, Felipe K.",                         role: "Faculty",                                           department: "General Education",               image: jameroFelipe },
  { name: "JAMERO, Richard K.",                        role: "Faculty",                                           department: "Electronics Technology",          image: jameroRichard },
  { name: "MANGAHAS, Janice P.",                       role: "Faculty",                                           department: "General Education",               image: mangahasJanice },
  { name: "MARCELO, Merelyn A.",                       role: "Faculty",                                           department: "Food Trades",                     image: marceloMerelyn },
  { name: "NANALI, MARA FLORIZA B.",                   role: "Faculty",                                           department: "General Education",               image: nanaliMara },
  { name: "NARIDO, VINCENT A.",                        role: "Faculty",                                           department: "Electronics Technology",          image: naridoVincent },
  { name: "ORDOVEZ, Dennis P.",                        role: "Faculty",                                           department: "Mechanical Technology",           image: ordovezDennis },
  { name: "PARAS, JILLIANNE D.",                       role: "Faculty",                                           department: "General Education",               image: parasjillianne },
  { name: "PERALTA, DERICK O.",                        role: "Department Head - General Education",               department: "General Education",               image: peraltaDerick },
  { name: "PEREZ, ELDON P.",                           role: "Faculty",                                           department: "Drafting Technology",             image: perezEldon },
  { name: "PIELAGO, Mithos Arth M.",                   role: "Faculty",                                           department: "Computer Technology",             image: pielagoMithos },
  { name: "REYNOSO, Roberto E., Evelyn A.",            role: "Faculty",                                           department: "General Education",               image: reynosoRoberto },
  { name: "RIVERA, Sherwin Keith T.",                  role: "Faculty",                                           department: "Automotive Technology",           image: riveraSherwin },
  { name: "SAN JUAN, Rhyca Mae C.",                    role: "Department Head - Food Trades",                     department: "Food Trades",                     image: sanJuanRhyca },
  { name: "SANDOVAL, Allan A.",                        role: "Department Head - Electronics Technology",          department: "Electronics Technology",          image: sandovalAllan },
  { name: "TABUCOL, EMMANUEL.",                        role: "Faculty",                                           department: "Mechanical Technology",           image: tabucol },
  { name: "TANADA",                                    role: "Faculty",                                           department: "General Education",               image: tanada },
  { name: "TANUECO, Joseph Angelo C.",                 role: "Department Head - Computer Technology",             department: "Computer Technology",             image: tanuecozJoseph },
  { name: "TOBIAS, Ariel E.",                          role: "Faculty",                                           department: "Electrical Technology",           image: tobiasAriel },
  { name: "UBALDO, Jorge S.",                          role: "Faculty",                                           department: "Drafting Technology",             image: ubaldoJorge },
  { name: "VILLADOLID, Rowena M.",                     role: "Faculty",                                           department: "Apparel and Fashion Technology",  image: villadolidRowena },
  { name: "VILLANUEVA, Christian.",                    role: "Faculty",                                           department: "General Education",               image: villanueva },
  { name: "DANGLA CRUZ, ROLF IRWIN C.",                role: "Department Head - Electrical Technology",           department: "Electrical Technology",           image: danglaCruz },
];

export default allFacultyImages;
