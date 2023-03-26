import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <>
      <div className={darkMode ? "darkTheme" : "lightTheme"}>
        <div className="main">

          <h1 className='flex-d'>Dark Mode - Toggle 2
            <div className="toggle-container">
              <label className='toggle-naming'>{darkMode ? "Light" : "Dark"} </label>
              <label className="switch">
                <input type="checkbox" onChange={() => setDarkMode(!darkMode)} />
                <span className="slider round"></span>
              </label>
            </div>
          </h1>
        </div>

        <div className='text-vampire'>
            <span style={{ fontSize: "55px" }}>A</span> vampire is a mythical creature that subsists by feeding on the vital essence (generally in the form of blood) of the living. In European folklore, vampires are undead creatures that often visited loved ones and caused mischief or deaths in the neighbourhoods which they inhabited while they were alive. They wore shrouds and were often described as bloated and of ruddy or dark countenance, markedly different from today's gaunt, pale vampire which dates from the early 19th century. Vampiric entities have been recorded in cultures around the world; the term vampire was popularized in Western Europe after reports of an 18th-century mass hysteria of a pre-existing folk belief in Southeastern and Eastern Europe that in some cases resulted in corpses being staked and people being accused of vampirism. Local variants in Southeastern Europe were also known by different names, such as shtriga in Albania, vrykolakas in Greece and strigoi in Romania.

            In modern times, the vampire is generally held to be a fictitious entity, although belief in similar vampiric creatures (such as the chupacabra) still persists in some cultures. Early folk belief in vampires has sometimes been ascribed to the ignorance of the body's process of decomposition after death and how people in pre-industrial societies tried to rationalize this, creating the figure of the vampire to explain the mysteries of death. Porphyria was linked with legends of vampirism in 1985 and received much media exposure, but has since been largely discredited.[1]

            The term "vampire" is the earliest recorded in English, Latin and French and they refer to vampirism in Russia, Poland and North Macedonia.[2] The English term was derived (possibly via French vampyre) from the German Vampir, in turn derived in the early 18th century from the Serbian вампир (vampir).[3][4][5] The Serbian form has parallels in virtually all Slavic languages: Bulgarian and Macedonian вампир (vampir), Bosnian: вампир (vampir), Croatian vampir, Czech and Slovak upír, Polish wąpierz, and (perhaps East Slavic-influenced) upiór, Ukrainian упир (upyr), Russian упырь (upyr'), Belarusian упыр (upyr), from Old East Slavic упирь (upir') (many of these languages have also borrowed forms such as "vampir/wampir" subsequently from the West; these are distinct from the original local words for the creature). The exact etymology is unclear.[6] Among the proposed Proto-Slavic forms are *ǫpyrь and *ǫpirь.[7] In Albanian the words lu(v)gat and dhampir are used; the latter seems to be derived from the Gheg Albanian words dham 'tooth' and pir 'to drink'.[8]

            Another less widespread theory is that the Slavic languages have borrowed the word from a Turkic term for witch (e.g., Tatar ubyr, although the first folk legends about it were recorded only at the end of the 18th century).[7][9] Czech linguist Václav Machek proposes Slovak verb vrepiť sa 'stick to, thrust into', or its hypothetical anagram vperiť sa (in Czech, the archaic verb vpeřit means 'to thrust violently') as an etymological background, and thus translates upír as 'someone who thrusts, bites'.[10] The term was introduced to German readers by the Polish Jesuit priest Gabriel Rzączyński in 1721.[11] An early use of the Old Russian word is in the anti-pagan treatise "Word of Saint Grigoriy" (Russian Слово святого Григория), dated variously to the 11th–13th centuries, where pagan worship of upyri is reported.[12][13]

            The word vampire (as vampyre) first appeared in English in 1732, in news reports about vampire "epidemics" in eastern Europe.[14][a] After Austria gained control of northern Serbia and Oltenia with the Treaty of Passarowitz in 1718, officials noted the local practice of exhuming bodies and "killing vampires".[16] These reports, prepared between 1725 and 1732, received widespread publicity
          </div>
      </div>
    </>
  );
}

export default App;
