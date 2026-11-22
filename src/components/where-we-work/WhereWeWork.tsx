// import { MapPin } from "lucide-react";
// import { useTranslation } from "react-i18next";

// import Container from "../common/Container";
// import SectionHeading from "../common/SectionHeading";

// interface City {
//   city: string;
//   region: string;
//   places: string[];
// }

// interface WhereContent {
//   title: string;
//   intro: string;
//   cities: City[];
//   farmT: string;
//   farm: string;
// }

// const WhereWeWork = () => {
//   const { t } = useTranslation();

//   const where = t("where", {
//     returnObjects: true,
//   }) as WhereContent;

//   return (
//     <section
//       id="where-we-work"
//       aria-labelledby="where-heading"
//       className="bg-paper-deep py-20 sm:py-28"
//     >
//       <Container size="narrow">
//         <SectionHeading id="where-heading" className="text-forest-900">
//           {where.title}
//         </SectionHeading>

//         <p className="mt-5 max-w-[62ch] text-lg leading-relaxed text-ink/85 sm:text-xl">
//           {where.intro}
//         </p>

//         {/* Cities */}
//         <div className="mt-12 grid gap-8 md:grid-cols-2">
//           {where.cities.map((city) => (
//             <div
//               key={city.city}
//               className="rounded-[1.75rem] bg-paper p-7 sm:p-10"
//             >
//               <MapPin size={28} className="text-leaf-600" aria-hidden="true" />

//               <h3 className="mt-4 font-display text-2xl font-bold text-forest-900">
//                 {city.city}
//               </h3>

//               <p className="mt-1 font-display font-semibold text-leaf-600">
//                 {city.region}
//               </p>

//               <ul className="mt-6 flex flex-wrap gap-2">
//                 {city.places.map((place) => (
//                   <li
//                     key={place}
//                     className="rounded-full border border-forest-900/15 px-3 py-1.5 text-sm text-forest-900"
//                   >
//                     {place}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>

//         {/* Farm sites */}
//         <div className="mt-12 border-t border-forest-900/15 pt-8">
//           <h3 className="font-display text-2xl font-bold text-forest-900">
//             {where.farmT}
//           </h3>

//           <p className="mt-3 max-w-[62ch] leading-relaxed text-ink/85">
//             {where.farm}
//           </p>
//         </div>
//       </Container>
//     </section>
//   );
// };

// export default WhereWeWork;
