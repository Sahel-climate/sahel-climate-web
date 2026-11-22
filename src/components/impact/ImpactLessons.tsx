// interface ImpactLessonsProps {
//   title: string;
//   lessons: string[];
//   challengesTitle: string;
//   challenges: string;
// }

// const ImpactLessons = ({
//   title,
//   lessons,
//   challengesTitle,
//   challenges,
// }: ImpactLessonsProps) => {
//   return (
//     <div>
//       <h3 className="font-display text-2xl font-bold text-forest-900">
//         {title}
//       </h3>

//       <ul className="mt-6 space-y-3">
//         {lessons.map((lesson) => (
//           <li key={lesson} className="flex gap-3">
//             <span
//               className="mt-[0.7rem] h-2 w-2 shrink-0 rounded-full bg-leaf-500"
//               aria-hidden="true"
//             />

//             <span>{lesson}</span>
//           </li>
//         ))}
//       </ul>

//       <h3 className="mt-10 font-display text-2xl font-bold text-forest-900">
//         {challengesTitle}
//       </h3>

//       <p className="mt-3 leading-relaxed text-ink/85">{challenges}</p>
//     </div>
//   );
// };

// export default ImpactLessons;
