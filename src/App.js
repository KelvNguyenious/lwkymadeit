import React, { useState, useEffect, useRef, useCallback } from "react";

/* ─── Lazy-loading image with fade-in ─── */
function LazyImage({ src, alt = "", style = {}, draggable, onLoad: onLoadProp, ...rest }) {
  const imgRef = useRef(null);
  const [inView, setInView] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const el = imgRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); observer.disconnect(); } },
      { rootMargin: "200px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handleLoad = useCallback((e) => {
    setLoaded(true);
    if (onLoadProp) onLoadProp(e);
  }, [onLoadProp]);

  return (
    <img
      ref={imgRef}
      src={inView ? src : undefined}
      alt={alt}
      draggable={draggable}
      onLoad={handleLoad}
      {...rest}
      style={{
        ...style,
        opacity: loaded ? (style.opacity ?? 1) : 0,
        transition: [
          `opacity 0.5s ease`,
          style.transition || "",
        ].filter(Boolean).join(", "),
      }}
    />
  );
}

const projects = [
  {
    id: 1, title: "Triumph Strength & Performance", category: "Since 23'", year: "2024",
    thumbnail: "https://i.imgur.com/U0wKO9G.png",
    images: [
      "https://i.imgur.com/5QVgpld.png",
      "https://i.imgur.com/Eb7Rfd1.png",
      "https://i.imgur.com/Etp7KkK.png",
      "https://i.imgur.com/zuGSLzy.png",
      "https://i.imgur.com/qhsEdVv.png",
      "https://i.imgur.com/GzTL3o3.png",
      "https://i.imgur.com/nmTlNu4.png",
      "https://i.imgur.com/qEMkpiF.png",
      "https://i.imgur.com/IOy1V5I.png",
      "https://i.imgur.com/Rne7twN.png",
    ],
    description: "It all started with making the first tees for the quickly growing powerlifting team, TSP. Kevin Sras introduced me to his coaches and after one Zoom call from Tampa I made a connection that would change the path of LWKY and my creative career forever. After creating this first batch of tees (slide 1), the crew came back seeking competition style tees for their upcoming meet (slide 2). So I created the first Triumph comp tee and the rest was history... an entire collection born from just one 'follow for follow' way back in 2021. I continue to fulfill TSP orders to this day, and to Kevin and the rest of the TSP family I am eternally grateful for giving me my first real shot.",
  },
  {
    id: 2, title: "Team Hogan // UTOPIA BRAND", category: "Since 23'", year: "2024",
    thumbnail: "https://i.imgur.com/58sLfkT.jpeg",
    images: [
      "https://i.imgur.com/NsKIcpi.png",
      "https://i.imgur.com/hBgo8lA.png",
      "https://i.imgur.com/ZIizxk4.png",
      "https://i.imgur.com/UEm8EjC.png",
      "https://i.imgur.com/PDfbxTj.png",
      "https://i.imgur.com/i6gkD4z.png",
      "https://i.imgur.com/hNhHyRF.png",
      "https://i.imgur.com/rMOT2EB.png",
      "https://i.imgur.com/z5yxhO8.jpeg",
      "https://i.imgur.com/pMgaT4W.jpeg",
      "https://i.imgur.com/xWpNFuY.png",
      "https://i.imgur.com/f6wTBrV.jpeg",
      "https://i.imgur.com/6sjPXi0.jpeg",
      "https://i.imgur.com/J66WcXG.jpeg",
      "https://i.imgur.com/4C8v1Wg.jpeg",
      "https://i.imgur.com/hj2wksd.jpeg",
      "https://i.imgur.com/q8Lsjmp.jpeg",
      "https://i.imgur.com/B68ZcTj.png",
      "https://i.imgur.com/H8fSHlr.jpeg",
      "https://i.imgur.com/h3IqsmM.jpeg",
      "https://i.imgur.com/ZPVGG2P.jpeg",
      "https://i.imgur.com/aqzfqsu.jpeg",
      "https://i.imgur.com/FtNU5CD.jpeg",
      "https://i.imgur.com/hAbJlsm.jpeg",
    ],
    description: "After my first collab with TSP, Erik reached out to me with a vision of creating Utopia Beach, competition tees with a Miami Vice theme that paid homage to Maine's Old Orchard Beach. Within that vision was a seed for utopia but back then, that's all it was... a seed. Erik came with the color scheme and theme, while I was given free roam to execute as best as I could. Overtime Erik and I continued to water our connection, through the Oasis and into the Inferno... Utopia Frost is when I'd say Utopia Brand was born. It was the first drop where instead of only creating competition tees, we expanded to embroidered crewnecks as well. After good reception from the people we decided to come back with Utopia Ecstasy, which is where we really took the next leap. Oversized tees, hoodies, and the usual competition tees were created and from here I felt like we were on fire, everything Utopia related did well and had substance, it felt like a good representation of the both of us. Post-ecstasy we realized we had a pretty solid system going, which is the foundation of how I do most of my other collaborations now as well. Through Erik I got to really hone my skills by having the freedom to do (almost) whatever I wanted and to this day we continue to work together to bring the people to UTOPIA.",
  },
  {
    id: 3, title: "Saillant Strength Systems", category: "Since 24'", year: "2024",
    thumbnail: "https://i.imgur.com/1sftPfj.png",
    images: [
      "https://i.imgur.com/c9M8Tr2.png",
      "https://i.imgur.com/E5q5a8S.jpeg",
      "https://i.imgur.com/BxBcdOs.jpeg",
      "https://i.imgur.com/l6KRran.jpeg",
    ],
    description: "A close friend of TSP and Team Hogan, Andrew took notice of the collabs and soon reached out to have his own competition tees done as well. The crew already had this dope snake aesthetic going for them, so I simply expanded on it. We made the our first competition tees together and they did really well. It wasn't until about a year later than Andrew would reach back out again seeking to do another batch of tees while also looking to experiment a bit. He was inspired by the grungey, heavy metal band aesthetic and asked me to put my own spin on it. This was a step outside my comfort zone as I had never done anything in this lane, but I had his confidence behind me so I just started drawing and YouTubing tutorials until I finally ended up with something I was proud of. From there this alternative heavy metal logo was made, we created another competition tee with an oversized shirt to match. After this collab I started to feel more confident in my abilities to bring visions to life.",
  },
  {
    id: 4, title: "Prevail Performance", category: "Since 25'", year: "2024",
    thumbnail: "https://i.imgur.com/2I4nn45.png",
    images: [
      "https://i.imgur.com/q9nRz0B.png",
      "https://i.imgur.com/SBVoOVb.png",
      "https://i.imgur.com/cRbVI8q.png",
    ],
    description: "An athlete of TSP, Tyler was looking to take his coaching to the next level by creating a brand and logo. There wasn't much direction besides this AI-generated logo of a barbell going through a plate and at the time Invincible Season 3 had just came out. The definition of 'Prevail' and Invincible intertwined in my head, as the main character spends most of his time getting smacked around in the show, he eventually always PREVAILS. Real fans will peep that the font family here is heavily inspired by the title card from the show. I also put some cracks in the type face to lean into that 'beat up' aesthetic. Tyler resonated with this look and from there we created two competition tees for his athletes that I still fulfill today.",
  },
  {
    id: 5, title: "DECO", category: "Since 25'", year: "2023",
    thumbnail: "https://i.imgur.com/9LjX8Lg.jpeg",
    images: [
      "https://i.imgur.com/W7U5exQ.png",
      "https://i.imgur.com/7nDO7fT.png",
      "https://i.imgur.com/BOn78SO.jpeg",
      "https://i.imgur.com/FJ6WB3a.jpeg",
      "https://i.imgur.com/Rl6fQz6.jpeg",
      "https://i.imgur.com/474ijaO.jpeg",
      "https://i.imgur.com/QXrgYbw.jpeg",
      "https://i.imgur.com/ouLSZDh.jpeg",
      "https://i.imgur.com/E1V7KGe.jpeg",
    ],
    description: "Matthew Armas, a visionary, househead, and childhood friend. While making a name for himself in the Orlando house music scene he sought to create something that he couldn't find already existing around him. A community rooted in intentional, intimate, good energy. He came to me already with a brand aesthetic, shown in these first two pictures. My job was to create a shirt with the given brand assets, from there I came up with two shirts, one with a DJ deck and figures dancing around it and another more simple brand logo on the front. The merch was made to supplement the brands first ever pop up event at Sessions Orlando. Which did well due to its tightly knit and extremely supportive community. After great reception from our first collab, Matt came back for round 2 but this time with a motto: 'Dance like nobody's watching'. I played around with a couple of fonts until we found something bold and minimal, added some assets like the figures dancing to replace the word itself. And the next day he approved of what I had and we went on to make the next batch continuing what I knew what was special the moment he announced it to me",
  },
  {
    id: 6, title: "Potentia Viribus", category: "Since 26'", year: "2023",
    thumbnail: "https://i.imgur.com/6QQOTN1.jpeg",
    images: [
      "https://i.imgur.com/310MyTH.png",
      "https://i.imgur.com/GFCWYJa.png",
      "https://i.imgur.com/ahBZ0WR.jpeg",
      "https://i.imgur.com/oC5oGPh.jpeg",
    ],
    description: "Slowly I was making a small name for myself in the powerlifting scene as teams I collabed with began to take on bigger stages. Soon I caught Peter's eye after recently finishing a project with his friend Evan of Hawk Strength (shoutout Adesh). We initially began scheming on comp tees as I usually do with powerlifters, but didn't lock in on a project. I did however make it known that I thought his teams aesthetic had a lot of potential, and a connection was made.. as 3 months later, we would collaborate on a Lifestyle drop. He came with the Adamas definition concept already (credit to About TMW) and I just had to help him with putting it on quality blank. This was about to be the end of this collab but it wasn't until I saw a TikTok video of somebody screen-printing on the collar of a shirt. Wanting to try it out for myself I immediately hit up Peter to see what he thought about it and he was on board, all that was left was finding a clean minimal font to use. Since his intention was to let the quality material of the shirt do most of the talking, I refrained from going heavy on the graphics, opting for a subtle but powerful look. With more planned for 2026...",
  },
  {
    id: 7, title: "Team Lobster King", category: "Since 24'", year: "2023",
    thumbnail: "https://i.imgur.com/cnGQN0q.png",
    images: [
      "https://i.imgur.com/jcdZZuu.jpeg",
      "https://i.imgur.com/zdK5yjH.png",
      "https://i.imgur.com/JnaxnuN.png",
    ],
    description: "Brandon, an athlete of TSP wanted some comp tees done for him and his upcoming team. He knew he wanted to represent the team by having a lobster and crown be the main graphics. Eventually he came with this drawing shown in the first picture, from there we had something going... putting my own spin on it was next. What you see next is my own version of it, opting for a basquiat type of crown on top of a buff lobster. Next was finding a typeface that fit the new logo nicely, once he approved we got straight to production. ",
  },
  {
    id: 8, title: "LBS Systems", category: "Since 26'", year: "2023",
    thumbnail: "https://i.imgur.com/UXi38wB.png",
    images: [
      "https://i.imgur.com/J8grnUR.png",
      "https://i.imgur.com/EN0OwCH.png",
    ],
    description: "Liam and Bruno were looking for a revamp from their initial run of competition tees and reached out to me. They sent me their logo and I decided to add more flair by moving that top line down into the middle to represent a barbell. Then I added some blocks on each side to represent some plates weighing down the barbell, put a drop shadow to continue that look from their original logo. All we were looking for on the shoulder designs was 'athlete' and 'coach' with Tampa, FL included so the rest concept was rinse and repeat.", 
  },
  {
    id: 9, title: "United Through God", category: "Since 26'", year: "2023",
    thumbnail: "https://i.imgur.com/FH6Tc7Y.png",
    images: [
      "https://i.imgur.com/wcKKS9m.png",
      "https://i.imgur.com/yC9tbPm.png",
    ],
    description: "Troy was looking to get some shirts done for his upcoming team UTG. An American flag and bible verse were the requirements for this collab, so I knew faith had a big role here. First step was finding a font that was grungey and textured. After typing it out over and over, I noticed that the 't' in the middle looked like a cross, so I leaned into it and began using the warp tool to intertwine the letters more by making them drip into each other. It still felt too plain so I began looking for some imagery and continuing to stick with the faith theme settled on a rosary. I played around with wrapping it around the 'utg' like a necklace and interlacing it between the barbell and letters. He ended up really enjoying this aesthetic and we locked in the bottom right version.",
  },
];

const productItems = [
  "https://i.imgur.com/0x1y3Qs.png",
  "https://i.imgur.com/JhlJpI1.png",
  "https://i.imgur.com/zwx25o8.png",
  "https://i.imgur.com/nsbnAvi.png",
  "https://i.imgur.com/d1xZ2mm.png",
  "https://i.imgur.com/SJezu9I.png",
  "https://i.imgur.com/hj88Ux2.png",
  "https://i.imgur.com/Ri692ar.png",
  "https://i.imgur.com/fjCdclY.png",
  "https://i.imgur.com/c0iwrl9.png",
  "https://i.imgur.com/5tYyeV2.png",
  "https://i.imgur.com/tpXT2Mt.png",
  "https://i.imgur.com/RxCLJLw.png",
  "https://i.imgur.com/ciRizEx.png",
  "https://i.imgur.com/mNcYGHv.png",
  "https://i.imgur.com/odjAnAn.png",
  "https://i.imgur.com/lKP9un3.png",
  "https://i.imgur.com/jYCyl3R.png",
  "https://i.imgur.com/UihfjPt.png",
  "https://i.imgur.com/mdz7mma.png",
  "https://i.imgur.com/TvO4LLz.png",
  "https://i.imgur.com/omcr8aA.png",
  "https://i.imgur.com/4he8f1b.png",
  "https://i.imgur.com/MK0tP7l.png",
  "https://i.imgur.com/F37nHsZ.png",
  "https://i.imgur.com/LTjpA7X.png",
  "https://i.imgur.com/VYPK4hr.png",
  "https://i.imgur.com/bYzIxQe.png",
  "https://i.imgur.com/RYrRmDb.png",
  "https://i.imgur.com/MAufv67.png",
  "https://i.imgur.com/fScdOoq.png",
  "https://i.imgur.com/FaTktrZ.png",
  "https://i.imgur.com/qAvsDQ8.png",
  "https://i.imgur.com/ZtMUvoZ.png",
  "https://i.imgur.com/7BIRgwk.png",
  "https://i.imgur.com/rn75SR0.png",
  "https://i.imgur.com/1y3Y0SU.png"
].map((url, i) => ({ id: i, image: url, imageLg: url.replace('w=600', 'w=1200') }));

const NAV_ITEMS = ["Work", "Collaborations", "Photos", "About"];

/* ─── Photo collections ─── */
const photoCollections = [
  { id: "all", label: "All" },
  { id: "bodega", label: "BODEGA" },
  { id: "bet-on-self", label: "BET ON SELF." },
  { id: "from-the-homies", label: "FROM THE HOMIES" },
  { id: "dguw", label: "DON'T GIVE UP, WORLD!" },
  { id: "kims-baby-boy", label: "KIM'S BABY BOY" },
  { id: "utopia-brand", label: "UTOPIA BRAND" },
  { id: "deco", label: "DECO" },
  { id: "potentia-x-viribus", label: "POTENTIA X VIRIBUS" },
];

/* ─── Photo data ─── */
const photos = [
  { id: "photo-1",  src: "https://i.imgur.com/qgQLnZl.jpeg",  srcLg:"https://i.imgur.com/qgQLnZl.jpeg",  collection: "bodega" },
  { id: "photo-2",  src: "https://i.imgur.com/oxWtUZm.jpeg",  srcLg: "https://i.imgur.com/oxWtUZm.jpeg",  collection: "bodega" },
  { id: "photo-3",  src: "https://i.imgur.com/spZoz4M.jpeg",  srcLg: "https://i.imgur.com/spZoz4M.jpeg",  collection: "bodega" },
  { id: "photo-4",  src: "https://i.imgur.com/pv4SrrJ.jpeg",  srcLg: "https://i.imgur.com/pv4SrrJ.jpeg",  collection: "bodega" },
  { id: "photo-1b",  src: "https://i.imgur.com/f20rOkz.jpeg",  srcLg:"https://i.imgur.com/f20rOkz.jpeg",  collection: "bodega" },
  { id: "photo-2b",  src: "https://i.imgur.com/QVe6jW3.jpeg",  srcLg: "https://i.imgur.com/QVe6jW3.jpeg",  collection: "bodega" },
  { id: "photo-3b",  src: "https://i.imgur.com/9scByjk.jpeg",  srcLg: "https://i.imgur.com/9scByjk.jpeg",  collection: "bodega" },
  { id: "photo-4b",  src: "https://i.imgur.com/iK68Ovw.jpeg",  srcLg: "https://i.imgur.com/iK68Ovw.jpeg",  collection: "bodega" },
  { id: "photo-5",  src: "https://i.imgur.com/MUTLYcL.jpeg",     srcLg: "https://i.imgur.com/MUTLYcL.jpeg",     collection: "bet-on-self" },
  { id: "photo-6",  src: "https://i.imgur.com/PdNCr7j.jpeg",     srcLg: "https://i.imgur.com/PdNCr7j.jpeg",     collection: "bet-on-self" },
  { id: "photo-7",  src: "https://i.imgur.com/6W7AreH.jpeg",     srcLg: "https://i.imgur.com/6W7AreH.jpeg",     collection: "bet-on-self" },
  { id: "photo-8",  src: "https://i.imgur.com/VnT3iH6.jpeg",     srcLg: "https://i.imgur.com/VnT3iH6.jpeg",     collection: "bet-on-self" },
  { id: "photo-5b",  src: "https://i.imgur.com/T1xKVHE.jpeg",     srcLg: "https://i.imgur.com/T1xKVHE.jpeg",     collection: "bet-on-self" },
  { id: "photo-7ab",  src: "https://i.imgur.com/DrgEine.jpeg",     srcLg: "https://i.imgur.com/DrgEine.jpeg",     collection: "bet-on-self" },
  { id: "photo-7b",  src: "https://i.imgur.com/QQtePL5.jpeg",     srcLg: "https://i.imgur.com/QQtePL5.jpeg",     collection: "bet-on-self" },
  { id: "photo-8b",  src: "https://i.imgur.com/TMo9eK6.jpeg",     srcLg: "https://i.imgur.com/TMo9eK6.jpeg",     collection: "bet-on-self" },
  { id: "photo-8a",  src: "https://i.imgur.com/t8UOa2V.jpeg",     srcLg: "https://i.imgur.com/t8UOa2V.jpeg",     collection: "bet-on-self" },
  { id: "photo-5ab",  src: "https://i.imgur.com/G01vmd7.jpeg",     srcLg: "https://i.imgur.com/G01vmd7.jpeg",     collection: "bet-on-self" },
  { id: "photo-8ab",  src: "https://i.imgur.com/IdX4xG7.jpeg",     srcLg: "https://i.imgur.com/IdX4xG7.jpeg",     collection: "bet-on-self" },
  { id: "photo-9",  src: "https://i.imgur.com/iCoL6b9.jpeg",     srcLg: "https://i.imgur.com/iCoL6b9.jpeg",     collection: "from-the-homies" },
  { id: "photo-10", src: "https://i.imgur.com/yHICCPQ.jpeg",     srcLg: "https://i.imgur.com/yHICCPQ.jpeg",     collection: "from-the-homies" },
  { id: "photo-11", src: "https://i.imgur.com/ZShsheb.jpeg",     srcLg: "https://i.imgur.com/ZShsheb.jpeg",     collection: "from-the-homies" },
  { id: "photo-12", src: "https://i.imgur.com/umonX2c.jpeg",     srcLg: "https://i.imgur.com/umonX2c.jpeg",     collection: "from-the-homies" },
  { id: "photo-9b",  src: "https://i.imgur.com/ZmElkzl.jpeg",     srcLg: "https://i.imgur.com/ZmElkzl.jpeg",     collection: "from-the-homies" },
  { id: "photo-10b", src: "https://i.imgur.com/l79zlwp.jpeg",     srcLg: "https://i.imgur.com/l79zlwp.jpeg",     collection: "from-the-homies" },
  { id: "photo-11b", src: "https://i.imgur.com/3TRd2V0.jpeg",     srcLg: "https://i.imgur.com/3TRd2V0.jpeg",     collection: "from-the-homies" },
  { id: "photo-12b", src: "https://i.imgur.com/Oxor5aq.jpeg",     srcLg: "https://i.imgur.com/Oxor5aq.jpeg",     collection: "from-the-homies" },
  { id: "photo-13", src: "https://i.imgur.com/bIL8e8J.png",    srcLg: "https://i.imgur.com/bIL8e8J.png",    collection: "dguw" },
  { id: "photo-14", src: "https://i.imgur.com/5yYSkSS.png",    srcLg: "https://i.imgur.com/5yYSkSS.png",    collection: "dguw" },
  { id: "photo-15", src: "https://i.imgur.com/HrasDIM.png",    srcLg: "https://i.imgur.com/HrasDIM.png",    collection: "dguw" },
  { id: "photo-16", src: "https://i.imgur.com/3Um6z4c.png",    srcLg: "https://i.imgur.com/3Um6z4c.png",    collection: "dguw" },
  { id: "photo-13b", src: "https://i.imgur.com/KJFiTjY.png",    srcLg: "https://i.imgur.com/KJFiTjY.png",    collection: "dguw" },
  { id: "photo-14b", src: "https://i.imgur.com/8ZCrAJu.jpeg",    srcLg: "https://i.imgur.com/8ZCrAJu.jpeg",    collection: "dguw" },
  { id: "photo-15b", src: "https://i.imgur.com/RFn5cto.jpeg",    srcLg: "https://i.imgur.com/RFn5cto.jpeg",    collection: "dguw" },
  { id: "photo-16b", src: "https://i.imgur.com/o9VmM7F.jpeg",    srcLg: "https://i.imgur.com/o9VmM7F.jpeg",    collection: "dguw" },
  { id: "photo-17", src: "https://i.imgur.com/vqg0kYA.jpeg",     srcLg: "https://i.imgur.com/vqg0kYA.jpeg",     collection: "kims-baby-boy" },
  { id: "photo-18", src: "https://i.imgur.com/6yfiFBn.jpeg",     srcLg: "https://i.imgur.com/6yfiFBn.jpeg",     collection: "kims-baby-boy" },
  { id: "photo-19", src: "https://i.imgur.com/SGHrqlp.jpeg",     srcLg: "https://i.imgur.com/SGHrqlp.jpeg",     collection: "kims-baby-boy" },
  { id: "photo-20", src: "https://i.imgur.com/kuQbJ2J.jpeg",     srcLg: "https://i.imgur.com/kuQbJ2J.jpeg",     collection: "kims-baby-boy" },
  { id: "photo-17b", src: "https://i.imgur.com/PWIrbyH.jpeg",     srcLg: "https://i.imgur.com/PWIrbyH.jpeg",     collection: "kims-baby-boy" },
  { id: "photo-18b", src: "https://i.imgur.com/4u1L0av.jpeg",     srcLg: "https://i.imgur.com/4u1L0av.jpeg",     collection: "kims-baby-boy" },
  { id: "photo-19b", src: "https://i.imgur.com/v8OSPnO.jpeg",     srcLg: "https://i.imgur.com/v8OSPnO.jpeg",     collection: "kims-baby-boy" },
  { id: "photo-20b", src: "https://i.imgur.com/O5fmpf3.jpeg",     srcLg: "https://i.imgur.com/O5fmpf3.jpeg",     collection: "kims-baby-boy" },
  { id: "photo-17c", src: "https://i.imgur.com/xo72hOM.jpeg",     srcLg: "https://i.imgur.com/xo72hOM.jpeg",     collection: "kims-baby-boy" },
  { id: "photo-18c", src: "https://i.imgur.com/GHNaHjr.jpeg",     srcLg: "https://i.imgur.com/GHNaHjr.jpeg",     collection: "kims-baby-boy" },
  { id: "photo-19c", src: "https://i.imgur.com/0cWJAUn.jpeg",     srcLg: "https://i.imgur.com/0cWJAUn.jpeg",     collection: "kims-baby-boy" },
  { id: "photo-20c", src: "https://i.imgur.com/HBw4yn7.jpeg",     srcLg: "https://i.imgur.com/HBw4yn7.jpeg",     collection: "kims-baby-boy" },
  { id: "photo-21", src: "https://i.imgur.com/3Sf5zpt.jpeg", srcLg: "https://i.imgur.com/3Sf5zpt.jpeg", collection: "utopia-brand" },
  { id: "photo-22", src: "https://i.imgur.com/QuNs6tM.jpeg", srcLg: "https://i.imgur.com/QuNs6tM.jpeg", collection: "utopia-brand" },
  { id: "photo-23", src: "https://i.imgur.com/bwPIVfh.jpeg", srcLg: "https://i.imgur.com/bwPIVfh.jpeg", collection: "utopia-brand" },
  { id: "photo-24", src: "https://i.imgur.com/WQ9fTAI.jpeg", srcLg: "https://i.imgur.com/WQ9fTAI.jpeg", collection: "utopia-brand" },
  { id: "photo-21b", src: "https://i.imgur.com/xtJdQOn.jpeg", srcLg: "https://i.imgur.com/xtJdQOn.jpeg", collection: "utopia-brand" },
  { id: "photo-22b", src: "https://i.imgur.com/SmhHyrN.jpeg", srcLg: "https://i.imgur.com/SmhHyrN.jpeg", collection: "utopia-brand" },
  { id: "photo-23b", src: "https://i.imgur.com/CnbQ5lO.jpeg", srcLg: "https://i.imgur.com/CnbQ5lO.jpeg", collection: "utopia-brand" },
  { id: "photo-24b", src: "https://i.imgur.com/kVe3t4Q.jpeg", srcLg: "https://i.imgur.com/kVe3t4Q.jpeg", collection: "utopia-brand" },
  { id: "photo-21c", src: "https://i.imgur.com/1emLncv.jpeg", srcLg: "https://i.imgur.com/1emLncv.jpeg", collection: "utopia-brand" },
  { id: "photo-22c", src: "https://i.imgur.com/7ivsT6g.jpeg", srcLg: "https://i.imgur.com/7ivsT6g.jpeg", collection: "utopia-brand" },
  { id: "photo-23c", src: "https://i.imgur.com/sYflGgG.jpeg", srcLg: "https://i.imgur.com/sYflGgG.jpeg", collection: "utopia-brand" },
  { id: "photo-24c", src: "https://i.imgur.com/VxuGdfu.jpeg", srcLg: "https://i.imgur.com/VxuGdfu.jpeg", collection: "utopia-brand" },
  { id: "photo-21d", src: "https://i.imgur.com/rIY3iq1.jpeg", srcLg: "https://i.imgur.com/rIY3iq1.jpeg", collection: "utopia-brand" },
  { id: "photo-22d", src: "https://i.imgur.com/I27YNuM.jpeg", srcLg: "https://i.imgur.com/I27YNuM.jpeg", collection: "utopia-brand" },
  { id: "photo-23d", src: "https://i.imgur.com/PuwAUTz.jpeg", srcLg: "https://i.imgur.com/PuwAUTz.jpeg", collection: "utopia-brand" },
  { id: "photo-24d", src: "https://i.imgur.com/Oe9eCoF.jpeg", srcLg: "https://i.imgur.com/Oe9eCoF.jpeg", collection: "utopia-brand" },
  { id: "photo-21e", src: "https://i.imgur.com/H2ZeuFu.jpeg", srcLg: "https://i.imgur.com/H2ZeuFu.jpeg", collection: "utopia-brand" },
  { id: "photo-22e", src: "https://i.imgur.com/ZnnkCw9.jpeg", srcLg: "https://i.imgur.com/ZnnkCw9.jpeg", collection: "utopia-brand" },
  { id: "photo-23e", src: "https://i.imgur.com/9FYq9ce.jpeg", srcLg: "https://i.imgur.com/9FYq9ce.jpeg", collection: "utopia-brand" },
  { id: "photo-24e", src: "https://i.imgur.com/6P0sGE0.jpeg", srcLg: "https://i.imgur.com/6P0sGE0.jpeg", collection: "utopia-brand" },
  { id: "photo-21f", src: "https://i.imgur.com/V4a2ns5.jpeg", srcLg: "https://i.imgur.com/V4a2ns5.jpeg", collection: "utopia-brand" },
  { id: "photo-22f", src: "https://i.imgur.com/zB4ZTJU.jpeg", srcLg: "https://i.imgur.com/zB4ZTJU.jpeg", collection: "utopia-brand" },
  { id: "photo-23f", src: "https://i.imgur.com/Gy3VNCi.jpeg", srcLg: "https://i.imgur.com/Gy3VNCi.jpeg", collection: "utopia-brand" },
  { id: "photo-24f", src: "https://i.imgur.com/t0BOJjW.jpeg", srcLg: "https://i.imgur.com/t0BOJjW.jpeg", collection: "utopia-brand" },
  { id: "photo-25", src: "https://i.imgur.com/BOn78SO.jpeg",  srcLg: "https://i.imgur.com/BOn78SO.jpeg",  collection: "deco" },
  { id: "photo-26", src: "https://i.imgur.com/FJ6WB3a.jpeg",  srcLg: "https://i.imgur.com/FJ6WB3a.jpeg",  collection: "deco" },
  { id: "photo-27", src: "https://i.imgur.com/lKsfb8S.jpeg",  srcLg: "https://i.imgur.com/lKsfb8S.jpeg",  collection: "deco" },
  { id: "photo-28", src: "https://i.imgur.com/HmIuBcu.jpeg",  srcLg: "https://i.imgur.com/HmIuBcu.jpeg",  collection: "deco" },
  { id: "photo-26b", src: "https://i.imgur.com/Rl6fQz6.jpeg",  srcLg: "https://i.imgur.com/Rl6fQz6.jpeg",  collection: "deco" },
  { id: "photo-27b", src: "https://i.imgur.com/474ijaO.jpeg",  srcLg: "https://i.imgur.com/474ijaO.jpeg",  collection: "deco" },
  { id: "photo-28b", src: "https://i.imgur.com/E1V7KGe.jpeg",  srcLg: "https://i.imgur.com/E1V7KGe.jpeg",  collection: "deco" },
  { id: "photo-26c", src: "https://i.imgur.com/ouLSZDh.jpeg",  srcLg: "https://i.imgur.com/ouLSZDh.jpeg",  collection: "deco" },
  { id: "photo-27c", src: "https://i.imgur.com/QXrgYbw.jpeg",  srcLg: "https://i.imgur.com/QXrgYbw.jpeg",  collection: "deco" },
  { id: "photo-28c", src: "https://i.imgur.com/Q9kiXwR.jpeg",  srcLg: "https://i.imgur.com/Q9kiXwR.jpeg",  collection: "deco" },
  { id: "photo-26d", src: "https://i.imgur.com/vZ2F4fs.jpeg",  srcLg: "https://i.imgur.com/vZ2F4fs.jpeg",  collection: "deco" },
  { id: "photo-27d", src: "https://i.imgur.com/tSq2Ojl.jpeg",  srcLg: "https://i.imgur.com/tSq2Ojl.jpeg",  collection: "deco" },
  { id: "photo-28d", src: "https://i.imgur.com/DB79o0r.jpeg",  srcLg: "https://i.imgur.com/DB79o0r.jpeg",  collection: "deco" },
  { id: "photo-26e", src: "https://i.imgur.com/ZREmw0t.jpeg",  srcLg: "https://i.imgur.com/ZREmw0t.jpeg",  collection: "deco" },
  { id: "photo-27e", src: "https://i.imgur.com/GzUJZyE.jpeg",  srcLg: "https://i.imgur.com/GzUJZyE.jpeg",  collection: "deco" },
  { id: "photo-28e", src: "https://i.imgur.com/iCVOWaN.jpeg",  srcLg: "https://i.imgur.com/iCVOWaN.jpeg",  collection: "deco" },
  { id: "photo-29", src: "https://i.imgur.com/OkyP7AR.jpeg",     srcLg: "https://i.imgur.com/OkyP7AR.jpeg",     collection: "potentia-x-viribus" },
  { id: "photo-30", src: "https://i.imgur.com/ahBZ0WR.jpeg",     srcLg: "https://i.imgur.com/ahBZ0WR.jpeg",     collection: "potentia-x-viribus" },
  { id: "photo-31", src: "https://i.imgur.com/J6RhewI.jpeg",     srcLg: "https://i.imgur.com/J6RhewI.jpeg",     collection: "potentia-x-viribus" },
  { id: "photo-32", src: "https://i.imgur.com/Werv0wS.jpeg",     srcLg: "https://i.imgur.com/Werv0wS.jpeg",     collection: "potentia-x-viribus" },
  { id: "photo-29b", src: "https://i.imgur.com/5VrRChJ.jpeg",     srcLg: "https://i.imgur.com/5VrRChJ.jpeg",     collection: "potentia-x-viribus" },
  { id: "photo-30b", src: "https://i.imgur.com/3fnNDWx.jpeg",     srcLg: "https://i.imgur.com/3fnNDWx.jpeg",     collection: "potentia-x-viribus" },
  { id: "photo-31b", src: "https://i.imgur.com/B8nz73V.jpeg",     srcLg: "https://i.imgur.com/B8nz73V.jpeg",     collection: "potentia-x-viribus" },
  { id: "photo-32b", src: "https://i.imgur.com/PAQdGJK.jpeg",     srcLg: "https://i.imgur.com/PAQdGJK.jpeg",     collection: "potentia-x-viribus" },
  { id: "photo-29c", src: "https://i.imgur.com/oC5oGPh.jpeg",     srcLg: "https://i.imgur.com/oC5oGPh.jpeg",     collection: "potentia-x-viribus" },
  { id: "photo-30c", src: "https://i.imgur.com/f6FbfCt.jpeg",     srcLg: "https://i.imgur.com/f6FbfCt.jpeg",     collection: "potentia-x-viribus" },
  { id: "photo-31c", src: "https://i.imgur.com/qZYw6W4.jpeg",     srcLg: "https://i.imgur.com/qZYw6W4.jpeg",     collection: "potentia-x-viribus" },
  { id: "photo-32c", src: "https://i.imgur.com/U4Izy4l.jpeg",     srcLg: "https://i.imgur.com/U4Izy4l.jpeg",     collection: "potentia-x-viribus" },
  { id: "photo-30d", src: "https://i.imgur.com/weAKazH.jpeg",     srcLg: "https://i.imgur.com/weAKazH.jpeg",     collection: "potentia-x-viribus" },
  { id: "photo-31d", src: "https://i.imgur.com/XmbdLdv.jpeg",     srcLg: "https://i.imgur.com/XmbdLdv.jpeg",     collection: "potentia-x-viribus" },
  { id: "photo-32d", src: "https://i.imgur.com/h1ABkGq.jpeg",     srcLg: "https://i.imgur.com/h1ABkGq.jpeg",     collection: "potentia-x-viribus" },
];

/* ─── Lightbox for product mockups ─── */
function ProductLightbox({ item, onClose, onPrev, onNext }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => setShow(true));
    document.body.style.overflow = "hidden";
    const handleKey = (e) => {
      if (e.key === "Escape") handleClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", handleKey);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", handleKey); };
  }, []);

  const handleClose = () => { setShow(false); setTimeout(onClose, 350); };

  return (
    <div onClick={handleClose} style={{
      position: "fixed", inset: 0, zIndex: 2000,
      background: show ? "rgba(250,250,248,0.96)" : "rgba(250,250,248,0)",
      backdropFilter: "blur(16px)",
      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
      cursor: "pointer", transition: "background 0.35s ease",
    }}>
      <button onClick={handleClose} style={{
        position: "absolute", top: 32, right: 32,
        background: "none", border: "none", cursor: "pointer",
        fontFamily: "'DM Sans', sans-serif", fontSize: 14, letterSpacing: "0.08em",
        textTransform: "uppercase", color: "#1a1a1a",
        padding: "8px 0", borderBottom: "1px solid #1a1a1a",
      }}>Close</button>

      <button onClick={(e) => { e.stopPropagation(); onPrev(); }} style={{
        position: "absolute", left: 32, top: "50%", transform: "translateY(-50%)",
        background: "none", border: "1px solid #ccc", borderRadius: "50%",
        width: 48, height: 48, cursor: "pointer", fontSize: 20, color: "#1a1a1a",
        display: "flex", alignItems: "center", justifyContent: "center", transition: "border-color 0.3s",
      }} onMouseEnter={(e) => e.currentTarget.style.borderColor = "#1a1a1a"}
         onMouseLeave={(e) => e.currentTarget.style.borderColor = "#ccc"}>&#8592;</button>

      <button onClick={(e) => { e.stopPropagation(); onNext(); }} style={{
        position: "absolute", right: 32, top: "50%", transform: "translateY(-50%)",
        background: "none", border: "1px solid #ccc", borderRadius: "50%",
        width: 48, height: 48, cursor: "pointer", fontSize: 20, color: "#1a1a1a",
        display: "flex", alignItems: "center", justifyContent: "center", transition: "border-color 0.3s",
      }} onMouseEnter={(e) => e.currentTarget.style.borderColor = "#1a1a1a"}
         onMouseLeave={(e) => e.currentTarget.style.borderColor = "#ccc"}>&#8594;</button>

      <img onClick={(e) => e.stopPropagation()} src={item.imageLg} alt="" style={{
        maxWidth: "70vw", maxHeight: "75vh", objectFit: "contain",
        opacity: show ? 1 : 0, transform: show ? "scale(1)" : "scale(0.92)",
        transition: "opacity 0.4s ease, transform 0.4s cubic-bezier(0.16,1,0.3,1)", cursor: "default",
      }} />
    </div>
  );
}

/* ─── Product grid item ─── */
function ProductGridItem({ item, index, onClick }) {
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} onClick={onClick}
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex", flexDirection: "column", alignItems: "center", cursor: "pointer",
        opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.6s cubic-bezier(0.16,1,0.3,1) ${Math.min(index * 40, 400)}ms, transform 0.6s cubic-bezier(0.16,1,0.3,1) ${Math.min(index * 40, 400)}ms`,
      }}>
      <div style={{
        width: "100%", aspectRatio: "1/1",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: 0, background: "transparent",
      }}>
        <LazyImage src={item.image} alt="" style={{
          width: "100%", height: "100%", objectFit: "cover", display: "block",
          transform: hovered ? "scale(1.05)" : "scale(1)",
          transition: "transform 0.5s cubic-bezier(0.16,1,0.3,1)", mixBlendMode: "multiply",
        }} />
      </div>
    </div>
  );
}

/* ─── Project detail overlay ─── */
function ProjectDetail({ project, onClose, onNext, onPrev, hasNext, hasPrev }) {
  const [loaded, setLoaded] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    requestAnimationFrame(() => setLoaded(true));
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = 0;
  }, [project.id]);

  const handleClose = () => { setLoaded(false); setTimeout(onClose, 500); };

  const nextProject = hasNext ? projects[projects.findIndex(p => p.id === project.id) + 1] : null;

  return (
    <div ref={scrollRef} style={{
      position: "fixed", inset: 0, zIndex: 1000, background: "#fafaf8",
      overflowY: "auto", opacity: loaded ? 1 : 0, transition: "opacity 0.5s ease",
    }}>
      <button onClick={handleClose} style={{
        position: "fixed", top: 32, right: 32, zIndex: 1001,
        background: "none", border: "none", cursor: "pointer",
        fontFamily: "'DM Sans', sans-serif", fontSize: 14, letterSpacing: "0.08em",
        textTransform: "uppercase", color: "#1a1a1a", padding: "8px 0", borderBottom: "1px solid #1a1a1a",
      }}>Close</button>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "120px 40px 80px" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 60,
          alignItems: "start",
        }}>
          {/* LEFT: Info */}
          <div style={{ position: "sticky", top: 120 }}>
            <p style={{
              fontFamily: "'DM Sans', sans-serif", fontSize: 12, letterSpacing: "0.12em",
              textTransform: "uppercase", color: "#999", marginBottom: 16,
            }}>
              {project.category}
            </p>
            <h1 style={{
              fontFamily: "'PP Editorial New', 'Playfair Display', Georgia, serif",
              fontSize: "clamp(28px, 3.5vw, 48px)", fontWeight: 400, lineHeight: 1.15,
              color: "#1a1a1a", margin: "0 0 32px",
            }}>{project.title}</h1>

            <div style={{ borderTop: "1px solid #e0e0dc", paddingTop: 32 }}>
              <p style={{
                fontFamily: "'DM Sans', sans-serif", fontSize: 12, letterSpacing: "0.12em",
                textTransform: "uppercase", color: "#999", marginBottom: 12,
              }}>About</p>
              <p style={{
                fontFamily: "'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.8,
                color: "#3a3a3a", margin: 0,
              }}>{project.description}</p>
            </div>

            <div style={{
              marginTop: 48,
              display: "flex", alignItems: "center", gap: 12,
            }}>
              <div style={{ width: 1, height: 48, background: "#ccc", position: "relative", overflow: "hidden" }}>
                <div style={{ width: 1, height: 48, background: "#1a1a1a", animation: "scrollLine 2s ease-in-out infinite" }} />
              </div>
              <span style={{
                fontFamily: "'DM Sans', sans-serif", fontSize: 11,
                letterSpacing: "0.1em", textTransform: "uppercase", color: "#999",
              }}>Scroll</span>
            </div>
          </div>

          {/* RIGHT: Images */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {project.images.map((img, i) => (
              <div key={i} style={{
                width: "100%", overflow: "hidden", borderRadius: 4, background: "#eee",
              }}>
                <LazyImage src={img} alt={`${project.title} ${i + 1}`} style={{
                  width: "100%", height: "auto", display: "block", objectFit: "contain",
                }} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Fixed back button — left side */}
      {hasPrev && (
        <button
          onClick={onPrev}
          style={{
            position: "fixed", top: "50%", left: 32, zIndex: 1001,
            transform: "translateY(-50%)",
            background: "none", border: "1px solid #ccc", borderRadius: "50%",
            width: 48, height: 48, cursor: "pointer", fontSize: 20, color: "#1a1a1a",
            display: "flex", alignItems: "center", justifyContent: "center",
            transition: "border-color 0.3s",
          }}
          onMouseEnter={(e) => e.currentTarget.style.borderColor = "#1a1a1a"}
          onMouseLeave={(e) => e.currentTarget.style.borderColor = "#ccc"}
        >&#8592;</button>
      )}

      {/* Fixed next button — right side */}
      {hasNext && (
        <button
          onClick={onNext}
          style={{
            position: "fixed", top: "50%", right: 32, zIndex: 1001,
            transform: "translateY(-50%)",
            background: "none", border: "1px solid #ccc", borderRadius: "50%",
            width: 48, height: 48, cursor: "pointer", fontSize: 20, color: "#1a1a1a",
            display: "flex", alignItems: "center", justifyContent: "center",
            transition: "border-color 0.3s",
          }}
          onMouseEnter={(e) => e.currentTarget.style.borderColor = "#1a1a1a"}
          onMouseLeave={(e) => e.currentTarget.style.borderColor = "#ccc"}
        >&#8594;</button>
      )}

      <style>{`
        @media (max-width: 768px) {
          div[style*="grid-template-columns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          div[style*="position: sticky"] {
            position: relative !important;
            top: auto !important;
          }
        }
      `}</style>
    </div>
  );
}

/* ─── Collaborations Carousel ─── */
function CollaborationsCarousel({ onSelectProject }) {
  const trackRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hovered, setHovered] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [cardWidth, setCardWidth] = useState(480);
  const gap = 32;
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => setEntered(true));
  }, []);

  // Responsive card width
  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w < 600) setCardWidth(w - 80);
      else if (w < 900) setCardWidth(400);
      else setCardWidth(480);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const maxIndex = projects.length - 1;

  const goTo = (idx) => {
    setCurrentIndex(Math.max(0, Math.min(idx, maxIndex)));
  };

  const translateX = -(currentIndex * (cardWidth + gap)) + dragOffset;

  // Mouse / touch drag
  const handlePointerDown = (e) => {
    setIsDragging(true);
    setDragStartX(e.clientX || e.touches?.[0]?.clientX || 0);
    setDragOffset(0);
  };

  const handlePointerMove = (e) => {
    if (!isDragging) return;
    const x = e.clientX || e.touches?.[0]?.clientX || 0;
    setDragOffset(x - dragStartX);
  };

  const handlePointerUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    const threshold = cardWidth * 0.2;
    if (dragOffset < -threshold) goTo(currentIndex + 1);
    else if (dragOffset > threshold) goTo(currentIndex - 1);
    setDragOffset(0);
  };

  // Keyboard nav
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowLeft") goTo(currentIndex - 1);
      if (e.key === "ArrowRight") goTo(currentIndex + 1);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [currentIndex]);

  // Trackpad / wheel scroll support
  const wheelAccum = useRef(0);
  const wheelTimeout = useRef(null);
  const wheelLocked = useRef(false);

  const handleWheel = (e) => {
    // Only respond to horizontal swipe gestures — ignore vertical scrolling
    if (Math.abs(e.deltaX) < Math.abs(e.deltaY) || Math.abs(e.deltaX) < 2) return;

    e.preventDefault();

    if (wheelLocked.current) return;

    wheelAccum.current += e.deltaX;
    clearTimeout(wheelTimeout.current);

    const threshold = 60;

    if (Math.abs(wheelAccum.current) >= threshold) {
      wheelLocked.current = true;
      if (wheelAccum.current > 0) goTo(currentIndex + 1);
      else goTo(currentIndex - 1);
      wheelAccum.current = 0;

      // Lock briefly to prevent rapid-fire scrolling
      setTimeout(() => { wheelLocked.current = false; }, 500);
    }

    // Reset accumulator if user stops scrolling
    wheelTimeout.current = setTimeout(() => {
      wheelAccum.current = 0;
    }, 150);
  };

  return (
    <section style={{
      padding: "100px 0 120px",
      overflow: "hidden",
      opacity: entered ? 1 : 0,
      transform: entered ? "translateY(0)" : "translateY(40px)",
      transition: "opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1)",
    }}>

      {/* Carousel track */}
      <div
        style={{
          paddingLeft: "max(40px, calc((100vw - 1200px) / 2 + 40px))",
          cursor: isDragging ? "grabbing" : "grab",
          userSelect: "none",
        }}
        onWheel={handleWheel}
        onMouseDown={handlePointerDown}
        onMouseMove={handlePointerMove}
        onMouseUp={handlePointerUp}
        onMouseLeave={handlePointerUp}
        onTouchStart={handlePointerDown}
        onTouchMove={handlePointerMove}
        onTouchEnd={handlePointerUp}
      >
        <div
          ref={trackRef}
          style={{
            display: "flex",
            gap: gap,
            transform: `translateX(${translateX}px)`,
            transition: isDragging ? "none" : "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
            willChange: "transform",
          }}
        >
          {projects.map((project, i) => {
            const isActive = i === currentIndex;
            const isHovered = hovered === i;
            const distance = Math.abs(i - currentIndex);
            const scale = distance === 0 ? 1 : 0.85;
            const opacity = distance === 0 ? 1 : distance === 1 ? 0.65 : 0.4;
            const blur = distance === 0 ? 0 : distance === 1 ? 3 : 6;

            return (
              <div
                key={project.id}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => {
                  if (Math.abs(dragOffset) < 5) {
                    if (i === currentIndex) onSelectProject(project);
                    else goTo(i);
                  }
                }}
                style={{
                  flex: "0 0 auto",
                  width: cardWidth,
                  transform: `scale(${isHovered && isActive ? 1.01 : scale})`,
                  opacity: isDragging ? 0.85 : opacity,
                  filter: distance === 0 ? "none" : `blur(${blur}px)`,
                  transition: isDragging
                    ? "none"
                    : "transform 0.6s cubic-bezier(0.16,1,0.3,1), opacity 0.6s cubic-bezier(0.16,1,0.3,1), filter 0.6s cubic-bezier(0.16,1,0.3,1)",
                  willChange: "transform, opacity, filter",
                }}
              >
                {/* Image */}
                <div style={{
                  width: "100%",
                  aspectRatio: "4/5",
                  overflow: "hidden",
                  borderRadius: 4,
                  background: "#eee",
                  marginBottom: 20,
                }}>
                  <LazyImage
                    src={project.thumbnail}
                    alt={project.title}
                    draggable={false}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                      transform: isHovered ? "scale(1.06)" : "scale(1)",
                      transition: "transform 0.7s cubic-bezier(0.16,1,0.3,1)",
                      pointerEvents: "none",
                    }}
                  />
                </div>

                {/* Title & meta */}
                <div style={{
                  display: "flex", justifyContent: "space-between", alignItems: "baseline",
                }}>
                  <h3 style={{
                    fontFamily: "'PP Editorial New', 'Playfair Display', Georgia, serif",
                    fontSize: 20, fontWeight: 400, color: "#1a1a1a", margin: 0,
                    transition: "color 0.3s",
                  }}>{project.title}</h3>
                  <span style={{
                    fontFamily: "'DM Sans', sans-serif", fontSize: 11,
                    letterSpacing: "0.1em", textTransform: "uppercase", color: "#999",
                    flexShrink: 0, marginLeft: 16,
                  }}>{project.category}</span>
                </div>

                {/* Role line — visible on active card */}
                <p style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 13,
                  color: "#999",
                  marginTop: 8,
                  letterSpacing: "0.02em",
                  opacity: isActive ? 1 : 0,
                  transform: isActive ? "translateY(0)" : "translateY(6px)",
                  transition: "opacity 0.5s ease 0.1s, transform 0.5s ease 0.1s",
                }}>{project.role}</p>
              </div>
            );
          })}
          {/* Spacer at end so last card can be scrolled to */}
          <div style={{ flex: "0 0 auto", width: "calc(100vw - 520px)" }} />
        </div>
      </div>

      {/* Navigation controls */}
      <div style={{
        maxWidth: 1200, margin: "0 auto", padding: "0 40px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        marginTop: 48,
      }}>
        {/* Progress dots */}
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              style={{
                width: i === currentIndex ? 32 : 8,
                height: 8,
                borderRadius: 4,
                border: "none",
                background: i === currentIndex ? "#1a1a1a" : "#d4d4d0",
                cursor: "pointer",
                padding: 0,
                transition: "all 0.4s cubic-bezier(0.16,1,0.3,1)",
              }}
            />
          ))}
        </div>

        {/* Counter + arrows */}
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <span style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: 13,
            color: "#999",
            letterSpacing: "0.04em",
            minWidth: 48,
            textAlign: "center",
          }}>
            {String(currentIndex + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
          </span>

          <button
            onClick={() => goTo(currentIndex - 1)}
            disabled={currentIndex === 0}
            style={{
              background: "none",
              border: "1px solid",
              borderColor: currentIndex === 0 ? "#e0e0dc" : "#ccc",
              borderRadius: "50%",
              width: 44,
              height: 44,
              cursor: currentIndex === 0 ? "default" : "pointer",
              fontSize: 18,
              color: currentIndex === 0 ? "#ccc" : "#1a1a1a",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.3s ease",
              opacity: currentIndex === 0 ? 0.4 : 1,
            }}
            onMouseEnter={(e) => { if (currentIndex > 0) e.currentTarget.style.borderColor = "#1a1a1a"; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = currentIndex === 0 ? "#e0e0dc" : "#ccc"; }}
          >&#8592;</button>

          <button
            onClick={() => goTo(currentIndex + 1)}
            disabled={currentIndex === maxIndex}
            style={{
              background: "none",
              border: "1px solid",
              borderColor: currentIndex === maxIndex ? "#e0e0dc" : "#ccc",
              borderRadius: "50%",
              width: 44,
              height: 44,
              cursor: currentIndex === maxIndex ? "default" : "pointer",
              fontSize: 18,
              color: currentIndex === maxIndex ? "#ccc" : "#1a1a1a",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.3s ease",
              opacity: currentIndex === maxIndex ? 0.4 : 1,
            }}
            onMouseEnter={(e) => { if (currentIndex < maxIndex) e.currentTarget.style.borderColor = "#1a1a1a"; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = currentIndex === maxIndex ? "#e0e0dc" : "#ccc"; }}
          >&#8594;</button>
        </div>
      </div>
    </section>
  );
}

/* ─── Photo lightbox (dark, immersive) ─── */
function PhotoLightbox({ photo, onClose, onPrev, onNext }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => setShow(true));
    document.body.style.overflow = "hidden";
    const handleKey = (e) => {
      if (e.key === "Escape") handleCloseFn();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", handleKey);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", handleKey); };
  }, []);

  const handleCloseFn = () => { setShow(false); setTimeout(onClose, 350); };

  return (
    <div onClick={handleCloseFn} style={{
      position: "fixed", inset: 0, zIndex: 2000,
      background: show ? "rgba(10,10,10,0.94)" : "rgba(10,10,10,0)",
      backdropFilter: "blur(20px)",
      display: "flex", alignItems: "center", justifyContent: "center",
      cursor: "pointer", transition: "background 0.35s ease",
    }}>
      <button onClick={handleCloseFn} style={{
        position: "absolute", top: 32, right: 32,
        background: "none", border: "none", cursor: "pointer",
        fontFamily: "'DM Sans', sans-serif", fontSize: 14, letterSpacing: "0.08em",
        textTransform: "uppercase", color: "#fff",
        padding: "8px 0", borderBottom: "1px solid rgba(255,255,255,0.4)",
      }}>Close</button>

      <button onClick={(e) => { e.stopPropagation(); onPrev(); }} style={{
        position: "absolute", left: 24, top: "50%", transform: "translateY(-50%)",
        background: "none", border: "1px solid rgba(255,255,255,0.25)", borderRadius: "50%",
        width: 48, height: 48, cursor: "pointer", fontSize: 20, color: "#fff",
        display: "flex", alignItems: "center", justifyContent: "center", transition: "border-color 0.3s",
      }} onMouseEnter={(e) => e.currentTarget.style.borderColor = "#fff"}
         onMouseLeave={(e) => e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)"}>&#8592;</button>

      <button onClick={(e) => { e.stopPropagation(); onNext(); }} style={{
        position: "absolute", right: 24, top: "50%", transform: "translateY(-50%)",
        background: "none", border: "1px solid rgba(255,255,255,0.25)", borderRadius: "50%",
        width: 48, height: 48, cursor: "pointer", fontSize: 20, color: "#fff",
        display: "flex", alignItems: "center", justifyContent: "center", transition: "border-color 0.3s",
      }} onMouseEnter={(e) => e.currentTarget.style.borderColor = "#fff"}
         onMouseLeave={(e) => e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)"}>&#8594;</button>

      <img onClick={(e) => e.stopPropagation()} src={photo.srcLg} alt="" style={{
        maxWidth: "88vw", maxHeight: "90vh", objectFit: "contain",
        opacity: show ? 1 : 0, transform: show ? "scale(1)" : "scale(0.95)",
        transition: "opacity 0.4s ease, transform 0.4s cubic-bezier(0.16,1,0.3,1)", cursor: "default",
      }} />
    </div>
  );
}

/* ─── Collage photo cell ─── */
function CollageCell({ photo, index, onClick, style: cellStyle }) {
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} onClick={onClick}
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      style={{
        ...cellStyle,
        cursor: "pointer", overflow: "hidden", position: "relative",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.6s cubic-bezier(0.16,1,0.3,1) ${Math.min(index * 50, 250)}ms, transform 0.6s cubic-bezier(0.16,1,0.3,1) ${Math.min(index * 50, 250)}ms`,
      }}>
      <LazyImage src={photo.src} alt="" style={{
        width: "100%", height: "auto", display: "block",
        transform: hovered ? "scale(1.03)" : "scale(1)",
        transition: "transform 0.7s cubic-bezier(0.16,1,0.3,1)",
      }} />
    </div>
  );
}

/* ─── Photos section ─── */
function PhotosSection() {
  const [activeCollection, setActiveCollection] = useState("all");
  const [lightboxPhoto, setLightboxPhoto] = useState(null);

  const filtered = activeCollection === "all"
    ? photos
    : photos.filter((p) => p.collection === activeCollection);

  const navPhoto = (dir) => {
    const idx = filtered.findIndex((p) => p.id === lightboxPhoto.id);
    const next = (idx + dir + filtered.length) % filtered.length;
    setLightboxPhoto(filtered[next]);
  };

  return (
    <>
      <section style={{ padding: "140px 40px 120px", margin: "0 auto" }}>
        <div style={{
          padding: "0", marginBottom: 32,
          display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap",
        }}>
          {photoCollections.map((col) => (
            <button key={col.id}
              onClick={() => setActiveCollection(col.id)}
              style={{
                fontFamily: "'DM Sans', sans-serif", fontSize: 12, fontWeight: 500,
                letterSpacing: "0.08em", textTransform: "uppercase",
                padding: "10px 22px", borderRadius: 0, cursor: "pointer",
                border: "none", borderBottom: activeCollection === col.id ? "2px solid #1a1a1a" : "2px solid transparent",
                background: "transparent",
                color: activeCollection === col.id ? "#1a1a1a" : "#999",
                transition: "all 0.3s ease",
              }}>
              {col.label}
            </button>
          ))}
        </div>

        <div style={{ columnCount: 3, columnGap: 6 }}>
          {filtered.map((photo, i) => (
            <CollageCell
              key={photo.id}
              photo={photo}
              index={i}
              onClick={() => setLightboxPhoto(photo)}
              style={{ breakInside: "avoid", marginBottom: 6 }}
            />
          ))}
        </div>

        {filtered.length === 0 && (
          <div style={{
            padding: "120px 40px", textAlign: "center",
            fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: "#999",
            letterSpacing: "0.06em",
          }}>
            No photos in this collection yet.
          </div>
        )}
      </section>

      {lightboxPhoto && (
        <PhotoLightbox photo={lightboxPhoto} onClose={() => setLightboxPhoto(null)}
          onPrev={() => navPhoto(-1)} onNext={() => navPhoto(1)} />
      )}
    </>
  );
}

/* ─── Scroll-animated hero name ─── */
function HeroName() {
  const ref = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const vh = window.innerHeight;
      const scrollY = window.scrollY;
      // progress goes 0→1 as user scrolls down
      const p = Math.max(0, Math.min(1, scrollY / (vh * 0.45)));
      setProgress(p);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const name = "Kelvin Nguyen";

  return (
    <h1 ref={ref} style={{
      fontFamily: "'PP Editorial New', 'Playfair Display', Georgia, serif",
      fontSize: "clamp(42px, 7vw, 110px)", fontWeight: 400,
      lineHeight: 1.2, margin: 0, letterSpacing: "-0.02em",
      whiteSpace: "nowrap", overflow: "visible", paddingBottom: 8,
    }}>
      {name.split("").map((char, i) => {
        if (char === " ") return <span key={i}>&nbsp;</span>;
        const total = name.length;
        // Stagger: each letter starts dissolving at a slightly different point
        const letterStart = (i / total) * 0.3;
        const letterEnd = letterStart + 0.7;
        const t = Math.max(0, Math.min(1, (progress - letterStart) / (letterEnd - letterStart)));
        const ease = t * t; // ease-in for dissolve
        const spreadX = ease * ((i - total / 2) * 10);
        const opacity = 1 - ease * 0.92;
        const blur = ease * 6;
        return (
          <span key={i} style={{
            display: "inline-block",
            transform: `translateX(${spreadX}px)`,
            opacity,
            filter: blur > 0.2 ? `blur(${blur}px)` : "none",
            willChange: "transform, opacity, filter",
            fontStyle: i > name.indexOf(" ") ? "italic" : "normal",
            overflow: "visible",
          }}>
            {char}
          </span>
        );
      })}
    </h1>
  );
}

/* ─── Scroll-animated hero subtext ─── */
function HeroSubtext() {
  const ref = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const vh = window.innerHeight;
      const p = Math.max(0, Math.min(1, 1 - (rect.top / (vh * 0.48))));
      setProgress(p);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sans = "'DM Sans', sans-serif";
  const serif = "'PP Editorial New', 'Playfair Display', Georgia, serif";
  const smallSize = "clamp(18px, 2.5vw, 28px)";
  const bigSize = "clamp(28px, 4vw, 48px)";

  const words = [
    { text: "what started out as a gym brand, turned into", font: sans, size: smallSize, weight: 300, color: "#999", italic: false },
    { text: "an ever-evolving project.", font: serif, size: bigSize, weight: 400, color: "#1a1a1a", italic: true, break: true },
  ];

  return (
    <div ref={ref} style={{ maxWidth: 700, marginTop: 40, lineHeight: 1.2, overflow: "visible" }}>
      {words.map((w, i) => {
        const total = words.length;
        const wordStart = (i / total) * 0.35;
        const wordEnd = wordStart + 0.65;
        const t = Math.max(0, Math.min(1, (progress - wordStart) / (wordEnd - wordStart)));
        const ease = 1 - Math.pow(1 - t, 3);
        const y = (1 - ease) * 24;
        const opacity = 0.06 + ease * 0.94;
        const blur = (1 - ease) * 4;
        return (
          <span key={i}>
            {w.break && <br />}
            <span style={{
              display: "inline-block",
              fontFamily: w.font, fontSize: w.size, fontWeight: w.weight,
              fontStyle: w.italic ? "italic" : "normal", color: w.color,
              letterSpacing: w.font === sans ? "0.02em" : "0",
              transform: `translateY(${y}px)`, opacity,
              filter: blur > 0.2 ? `blur(${blur}px)` : "none",
              willChange: "transform, opacity, filter",
            }}>
              {w.text}
            </span>
          </span>
        );
      })}
    </div>
  );
}

/* ─── Scroll-animated LWKY logo ─── */
function HeroLogo() {
  const ref = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const vh = window.innerHeight;
      const p = Math.max(0, Math.min(1, 1 - (rect.top / (vh * 0.42))));
      setProgress(p);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const ease = 1 - Math.pow(1 - progress, 3);
  const y = (1 - ease) * 30;
  const opacity = 0.05 + ease * 0.95;
  const blur = (1 - ease) * 5;

  return (
    <div ref={ref} style={{
      marginTop: 35, position: "relative", zIndex: 2,
      paddingLeft: "clamp(140px, 22vw, 320px)",
      transform: `translateY(${y}px)`, opacity,
      filter: blur > 0.2 ? `blur(${blur}px)` : "none",
      willChange: "transform, opacity, filter",
    }}>
      <img
        src="https://i.imgur.com/5qUiUvI.png"
        alt="LWKY"
        style={{
          height: "clamp(32px, 4.5vw, 60px)", width: "auto", display: "block",
          objectFit: "contain",
        }}
      />
    </div>
  );
}

/* ─── Hero image ─── */
function HeroImage() {
  return (
    <div style={{
      position: "absolute", right: 0, bottom: 0, zIndex: 1,
      width: "clamp(255px, 35.7vw, 510px)", height: "auto",
      pointerEvents: "none",
      animation: "heroFloat 6s ease-in-out infinite",
    }}>
      <img
        src="https://i.imgur.com/BWqOzEM.png"
        alt=""
        style={{ width: "100%", height: "auto", display: "block", objectFit: "contain" }}
      />
    </div>
  );
}

/* ═══════════════════════════════════════
   MAIN PORTFOLIO COMPONENT
   ═══════════════════════════════════════ */
export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("Work");
  const [selectedProject, setSelectedProject] = useState(null);
  const [lightboxItem, setLightboxItem] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400;500&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Playfair+Display:ital,wght@0,400;0,500;1,400&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openLightbox = (item) => setLightboxItem(item);
  const closeLightbox = () => setLightboxItem(null);
  const navLightbox = (dir) => {
    const idx = productItems.findIndex((p) => p.id === lightboxItem.id);
    const next = (idx + dir + productItems.length) % productItems.length;
    setLightboxItem(productItems[next]);
  };

  return (
    <div style={{ background: "#fafaf8", minHeight: "100vh", color: "#1a1a1a", overflowX: "hidden" }}>

      {/* ─── NAV ─── */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        display: "flex", justifyContent: "center", alignItems: "center",
        padding: "0 40px", height: 72,
        background: scrolled ? "rgba(250,250,248,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(0,0,0,0.06)" : "1px solid transparent",
        transition: "all 0.4s ease",
      }}>
        <a href="#" onClick={(e) => { e.preventDefault(); setActiveSection("Work"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          style={{ position: "absolute", left: 40, textDecoration: "none", display: "flex", alignItems: "center" }}>
          <img
            src="https://i.imgur.com/o55Wr1q.png"
            alt="K.Nguyen"
            style={{ height: 36, width: "auto", objectFit: "contain", display: "block" }}
          />
        </a>
        <div style={{ display: "flex", gap: 36 }}>
          {NAV_ITEMS.map((item) => (
            <button key={item} onClick={() => { setActiveSection(item); window.scrollTo({ top: 0, behavior: "smooth" }); }}
              style={{
                background: "none", border: "none", cursor: "pointer", padding: "4px 0",
                fontFamily: "'DM Sans', sans-serif", fontSize: 13, letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: activeSection === item ? "#1a1a1a" : "#999",
                borderBottom: activeSection === item ? "1px solid #1a1a1a" : "1px solid transparent",
                transition: "all 0.3s ease",
              }}>{item}</button>
          ))}
        </div>
      </nav>

      {/* ═══ WORK TAB ═══ */}
      {activeSection === "Work" && (
        <>
          <section style={{
            minHeight: "100vh", display: "flex", flexDirection: "column",
            justifyContent: "center", padding: "0 40px",
            position: "relative", overflow: "hidden",
          }}>
            <HeroImage />
            <div style={{ maxWidth: 1200, margin: "0 auto", width: "100%", position: "relative", zIndex: 2 }}>
              <div style={{ overflow: "hidden", marginBottom: 12 }}>
                <p style={{
                  fontFamily: "'DM Sans', sans-serif", fontSize: 13,
                  letterSpacing: "0.12em", textTransform: "uppercase", color: "#999",
                  margin: 0, opacity: 0,
                  animation: "fadeUp 0.9s cubic-bezier(0.16,1,0.3,1) 0.2s forwards",
                }}>Apparel & Graphic Designer</p>
              </div>
              <div style={{ overflow: "visible" }}>
                <HeroName />
              </div>
              <HeroSubtext />
              <HeroLogo />
            </div>
            <div style={{
              position: "absolute", bottom: 40, left: 40,
              display: "flex", alignItems: "center", gap: 12,
              opacity: 0, animation: "fadeUp 1s cubic-bezier(0.16,1,0.3,1) 0.8s forwards",
            }}>
              <div style={{ width: 1, height: 48, background: "#ccc", position: "relative", overflow: "hidden" }}>
                <div style={{ width: 1, height: 48, background: "#1a1a1a", animation: "scrollLine 2s ease-in-out infinite" }} />
              </div>
              <span style={{
                fontFamily: "'DM Sans', sans-serif", fontSize: 11,
                letterSpacing: "0.1em", textTransform: "uppercase", color: "#999",
              }}>Scroll</span>
            </div>
          </section>

          <section style={{ padding: "40px 40px 100px", maxWidth: 1200, margin: "0 auto" }}>
            <div style={{
              display: "flex", justifyContent: "space-between", alignItems: "baseline",
              marginBottom: 48, borderBottom: "1px solid #e0e0dc", paddingBottom: 20,
            }}>
              <h2 style={{
                fontFamily: "'DM Sans', sans-serif", fontSize: 12,
                letterSpacing: "0.12em", textTransform: "uppercase",
                color: "#999", margin: 0, fontWeight: 400,
              }}>Designs & Mockups</h2>
              <span style={{
                fontFamily: "'DM Sans', sans-serif", fontSize: 12, letterSpacing: "0.1em", color: "#999",
              }}>{productItems.length} Items</span>
            </div>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(170px, 1fr))",
              gap: "4px 4px",
            }}>
              {productItems.map((item, i) => (
                <ProductGridItem key={item.id} item={item} index={i} onClick={() => openLightbox(item)} />
              ))}
            </div>
          </section>
        </>
      )}

      {/* ═══ COLLABORATIONS TAB — now a carousel ═══ */}
      {activeSection === "Collaborations" && (
        <CollaborationsCarousel onSelectProject={setSelectedProject} />
      )}

      {/* ═══ PHOTOS TAB ═══ */}
      {activeSection === "Photos" && <PhotosSection />}

      {/* ═══ ABOUT TAB ═══ */}
      {activeSection === "About" && (
        <section style={{ minHeight: "100vh", padding: "140px 40px 120px", maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }}>
            <div style={{
              aspectRatio: "3/4", background: "#eee", borderRadius: 4, overflow: "hidden",
              opacity: 0, animation: "fadeUp 1s cubic-bezier(0.16,1,0.3,1) 0.2s forwards",
            }}>
              <LazyImage src="https://i.imgur.com/Ek5qz6r.jpeg"
                alt="Portrait" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            </div>
            <div style={{ opacity: 0, animation: "fadeUp 1s cubic-bezier(0.16,1,0.3,1) 0.4s forwards" }}>
              <p style={{
                fontFamily: "'DM Sans', sans-serif", fontSize: 12, letterSpacing: "0.12em",
                textTransform: "uppercase", color: "#999", marginBottom: 24,
              }}>About</p>
              <h2 style={{
                fontFamily: "'PP Editorial New', 'Playfair Display', Georgia, serif",
                fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 400,
                lineHeight: 1.15, margin: "0 0 32px", color: "#1a1a1a",
              }}>Designer, brand builder, <em style={{ fontStyle: "italic" }}>creative</em>.</h2>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, lineHeight: 1.8, color: "#555" }}>
                <p style={{ margin: "0 0 20px" }}>
                  I'm a self-taught designer based in Florida with a background in streetwear, screen printing, and finance. My work has ranged from powerlifting teams to house music apparel. I started my journey in 2021, right after my first semester in University. I quickly realized that only going down the traditional degree route wouldn't leave behind the legacy that I desired. Being heavily inspired by Russell Orhii and his GBT Brand, Lowkey Apparel was born in an attempt to become the next Gymshark. After receiving lots of love for my first run of tees I continued the momentum to shorts and other garments until I eventually burned out trying to balance both the pursuit of my major (which I changed 3 times) and my brand. 
                </p>
                <p style={{ margin: "0 0 20px" }}>
                  After a year long hiatus I came back with a new perspective, wanting to shift away from only motivational gym apparel to having the brand become an overall expression of myself. I shortened the name from Lowkey Apparel to LWKY Brand and this is when the evolution really started. Without constraining myself to a lift-only setting I started to make things that reflected my current era in life, incorporating more graphics and experimenting more which reinvigorated my love for it again. 
                </p>
                <p style={{ margin: 0 }}>
                  Through LWKY, I've built something from the ground up — from concepts to physical garments. I learned a lot about the manufacturing process working with suppliers overseas but grew tired of the excessive lead times it took to recieve samples. YouTube, Instagram, and Tiktok became my mentor as I began learning how to create my own samples which transitioned into taking me over the entire production-side. I stacked up skills of how to use vinyl, screen-printing, embroidery, and a little bit of sowing in order to turn visions into reality. Now I use those skills for myself and to collaborate with others to continue the ever-evolving project. 
                </p>
              </div>
              <div style={{ marginTop: 48, paddingTop: 32, borderTop: "1px solid #e0e0dc", display: "flex", gap: 32 }}>
                {["Instagram", "Email", "LinkedIn"].map((link) => (
                  <a key={link} href="#" style={{
                    fontFamily: "'DM Sans', sans-serif", fontSize: 13,
                    letterSpacing: "0.06em", textDecoration: "none",
                    color: "#1a1a1a", borderBottom: "1px solid #ccc",
                    paddingBottom: 2, transition: "border-color 0.3s",
                  }}
                    onMouseEnter={(e) => e.target.style.borderColor = "#1a1a1a"}
                    onMouseLeave={(e) => e.target.style.borderColor = "#ccc"}
                  >{link}</a>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ─── Overlays ─── */}
      {selectedProject && (() => {
        const idx = projects.findIndex(p => p.id === selectedProject.id);
        return (
          <ProjectDetail
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
            onNext={() => setSelectedProject(projects[idx + 1])}
            onPrev={() => setSelectedProject(projects[idx - 1])}
            hasNext={idx < projects.length - 1}
            hasPrev={idx > 0}
          />
        );
      })()}
      {lightboxItem && <ProductLightbox item={lightboxItem} onClose={closeLightbox} onPrev={() => navLightbox(-1)} onNext={() => navLightbox(1)} />}

      <style>{`
        @keyframes heroFloat {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-12px) translateX(4px); }
          50% { transform: translateY(-6px) translateX(-3px); }
          75% { transform: translateY(-16px) translateX(2px); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scrollLine {
          0% { transform: translateY(-100%); }
          50% { transform: translateY(0); }
          100% { transform: translateY(100%); }
        }
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        ::selection { background: #1a1a1a; color: #fafaf8; }
        @media (max-width: 768px) {
          section > div[style*="grid-template-columns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </div>
  );
}