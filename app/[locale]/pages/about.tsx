
import Image from "next/image";
import {useTranslations} from 'next-intl';
import { CSSProperties } from 'react';
import UFRGS from "../../img/UFRGS.png";
import INF from "../../img/INF.png";
import IFRS from "../../img/IFRS.png";
import Card from "../components/Card";

export default function About() {
  const t = useTranslations('about');

  function handleCardClick(URL: string) {
    window.open(URL, '_blank');
  }
  return (
    <main id="about" className="flex flex-col h-screen bg-[white] min-h-[600px]
    md:flex-row items-center justify-center gap-8 px-8
    2xl: w-full max-h-[900px]
    ">
    <div className="flex flex-col items-center justify-center w-full max-w-[1440px] md:w-7/12 text-center gap-10">
        <div className="flex flex-col w-full justify-center items-center gap-5">
            <p className="text-2xl font-bold self-center">{t('aboutme')}</p>
            <p className="max-w-[850px] text-left">{t('description')}</p>
        </div>

        <div className="flex flex-col gap-10 justify-center items-center px-5 w-full md:flex-row">
            <Card className="h-[200px] w-[200px] min-w-[200px] min-h-[200px]" onClick={() => handleCardClick("https://www.ufrgs.br/site/a-ufrgs/apresentacao/")}>
                <Image
                className="dark:invert"
                src={UFRGS}
                alt="Icone UFRGS"
                />
            </Card>
            
            <Card className="h-[200px] w-[200px] min-w-[200px] min-h-[200px]" onClick={() => handleCardClick("https://www.inf.ufrgs.br/site/institucional/apresentacao/")}>
                <Image
                className="dark:invert"
                src={INF}
                alt="Icone INF"
                />
            </Card>

            <Card className="h-[200px] w-[200px] min-w-[200px] min-h-[200px]" onClick={() => handleCardClick("https://ifrs.edu.br/canoas/institucional/historico/")}>
                <Image
                className="dark:invert"
                src={IFRS}
                alt="Icone IFRS"
                />
            </Card>
        </div>
    </div>
    </main>
  );
}
// import Image from "next/image";
// import {useTranslations} from 'next-intl';
// import { CSSProperties } from 'react';
// import UFRGS from "../../img/UFRGS.png";
// import INF from "../../img/INF.png";
// import IFRS from "../../img/IFRS.png";
// import Card from "../components/Card";

// export default function About() {
//   const t = useTranslations('about');

//   function handleCardClick(URL: string) {
//     window.open(URL, '_blank');
//   }
//   return (
//    <>
//     <div style={styles.container}>
//       <main style={styles.display}>
//         <div style={styles.topBlock}>
//             <div style={styles.textBlock}>
//                 <p style={styles.text}>{t('title')}</p>
//             </div>
//         </div>

//         <div style={styles.bottomBlock}>
//           <div style={styles.leftBlock}>
//             <p style={styles.text}>{t('description')}</p>
//           </div>

//           <div style={styles.rightBlock}>
//               <div style={styles.internalBlock}>
//                 <Card  onClick={() => handleCardClick("https://www.ufrgs.br/site/a-ufrgs/apresentacao/")}>
//                     <Image
//                     className="dark:invert"
//                     src={UFRGS}
//                     alt="Fotografia de um homem sorridente"
//                     style={styles.photo}
//                     />
//                 </Card>
                
//                 <Card  onClick={() => handleCardClick("https://www.inf.ufrgs.br/site/institucional/apresentacao/")}>
//                     <Image
//                     className="dark:invert"
//                     src={INF}
//                     alt="Fotografia de um homem sorridente"
//                     style={styles.photo}
//                     />
//                 </Card>
//               </div>
              
//               <div style={styles.internalBlock}>
//                 <Card  onClick={() => handleCardClick("https://ifrs.edu.br/canoas/institucional/historico/")}>
//                     <Image
//                     className="dark:invert"
//                     src={IFRS}
//                     alt="Fotografia de um homem sorridente"
//                     style={styles.photo}
//                     />
//                 </Card>

//                 <Card onClick={() => handleCardClick("https://ifrs.edu.br/canoas/institucional/historico/")}>
//                     <Image
//                     className="dark:invert"
//                     src={IFRS}
//                     alt="Fotografia de um homem sorridente"
//                     style={styles.photo}
//                     />
//                 </Card>
//               </div>
//           </div>
//         </div>
//       </main>
//     </div>

//      <div style={styles.container}>
//       <main style={styles.display}>
//         <div style={styles.topBlock}>
//             <div style={styles.textBlock}>
//                 <p style={styles.text}>{t('title')}</p>
//             </div>
//         </div>

//         <div style={styles.bottomBlock}>
//           <div style={styles.leftBlock}>
//             <p style={styles.text}>{t('description')}</p>
//           </div>

//           <div style={styles.rightBlock}>
//               <div style={styles.internalBlock}>
//                 <Card onClick={() => handleCardClick("https://www.ufrgs.br/site/a-ufrgs/apresentacao/")}>
//                     <Image
//                     className="dark:invert"
//                     src={UFRGS}
//                     alt="Fotografia de um homem sorridente"
//                     style={styles.photo}
//                     />
//                 </Card>
                
//                 <Card onClick={() => handleCardClick("https://www.inf.ufrgs.br/site/institucional/apresentacao/")}>
//                     <Image
//                     className="dark:invert"
//                     src={INF}
//                     alt="Fotografia de um homem sorridente"
//                     style={styles.photo}
//                     />
//                 </Card>
//               </div>
              
//               <div style={styles.internalBlock}>
//                 <Card onClick={() => handleCardClick("https://ifrs.edu.br/canoas/institucional/historico/")}>
//                     <Image
//                     className="dark:invert"
//                     src={IFRS}
//                     alt="Fotografia de um homem sorridente"
//                     style={styles.photo}
//                     />
//                 </Card>

//                 <Card onClick={() => handleCardClick("https://ifrs.edu.br/canoas/institucional/historico/")}>
//                     <Image
//                     className="dark:invert"
//                     src={IFRS}
//                     alt="Fotografia de um homem sorridente"
//                     style={styles.photo}
//                     />
//                 </Card>
//               </div>
//           </div>
//         </div>
//       </main>
//     </div>
//    </>
//   );
// }

// const styles: { [key: string]: CSSProperties } = {
//   container:{
//     padding:'0 5vw',
//     height:'100vh',
//   },
//   display: {
//     display: 'flex',
//     flexDirection:'column',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   topBlock:{
//     display:'flex',
//     flexDirection:"column",
//     alignSelf:'center',
//     height:"25vh",
//     alignItems:'center',
//     justifyContent:'center',
//     gap:'1vh',
//     backgroundColor:'red',
//     width:"100%",
//   },
//   bottomBlock:{
//     display:'flex',
//     flexDirection:"row",
//     height:"75vh",
//     width:"100%",
//   },
//   leftBlock:{
//     display:'flex',
//     flexDirection:"column",
//     width:"30%",
//     backgroundColor:'yellow',
//     height:"100%",
//   },
//   rightBlock:{
//     display:'flex',
//     flexDirection:"column",
//     alignSelf:'center',
//     width:"70%",
//     backgroundColor:'blue',
//     height:"100%",
//     alignItems:'center',
//     justifyContent:'center',
//     gap:'1vw',
//   },
//   internalBlock:{
//     display:'flex',
//     flexDirection:"row",
//     gap:'1vw',
//   },
//   textBlock:{
//     display:'flex',
//     flexDirection:"column",
//     alignSelf:'center',
//     width:"45%",
//     height:"25vh",
//     alignItems:'center',
//     justifyContent:'center',
//     gap:'1vh',
//   },
//   text:{
//     fontFamily:'Arial',
//     fontSize:'0.9em'
//   },
//   schools:{
//     display:'flex',
//     flexDirection:'row',
//     gap:'10vw',
//     justifyContent:"center",
//     alignItems:'center',
//     height:"70vh",
//   },
//   photo:{
//     width:"70%",
//   }
// }

