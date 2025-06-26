export const zone1Scenes = {
    
    ZONA1_TEST_PREDMETU: {
        id: 'ZONA1_TEST_PREDMETU',
        location: 'Zóna Nestabilní Gravitace - Test předmětů',
        text: `
            <p>Rozhodnete se systematicky otestovat různé předměty, abyste lépe pochopili anomálii.</p>
            
            <p>Máte k dispozici různé objekty:</p>
            <ul>
                <li>🪨 Malý kámen (přibližně 100g)</li>
                <li>🧱 Středně velký kámen (přibližně 500g)</li>
                <li>🏗️ Velký kámen (přibližně 2kg)</li>
                <li>🍃 Lehký list (přibližně 1g)</li>
                <li>⚙️ Kovová součástka (přibližně 50g)</li>
            </ul>
            
            <p>Jeden po druhém je pustíte ze stejné výšky a pozorujete:</p>
            
            <p><strong>Výsledky experimentu:</strong></p>
            <ul>
                <li>🍃 List: Odlétl rychle směrem <strong>nahoru</strong>!</li>
                <li>⚙️ Kovová součástka: Pomalu stoupá vzhůru</li>
                <li>🪨 Malý kámen: Stoupá pomaleji</li>
                <li>🧱 Střední kámen: Stoupá ještě pomaleji</li>
                <li>🏗️ Velký kámen: Stoupá velmi pomalu</li>
            </ul>
            
            <p><em>Fascinující!</em> Zdá se, že <strong>lehčí předměty jsou více ovlivněny</strong> 
            touto obrácenéu gravitací!</p>
        `,
        choices: [
            {
                id: 'analyze_results',
                text: 'Analyzovat výsledky s Kwarkem',
                nextScene: 'ZONA1_KWARK_VYPOCTY',
                actions: [
                    { type: 'addPhysicsFragment' },
                    { type: 'increaseUnderstanding' }
                ]
            },
            {
                id: 'document_findings',
                text: 'Dokumentovat pozorování',
                nextScene: 'ZONA1_DOKUMENTACE',
                actions: [
                    { type: 'addPhysicsFragment' }
                ]
            }
        ]
    },

    ZONA1_KWARK_VYPOCTY: {
        id: 'ZONA1_KWARK_VYPOCTY',
        location: 'Zóna Nestabilní Gravitace - Kwarovy výpočty',
        text: `
            <p><em>Professor Kwark analyzuje vaše pozorování:</em></p>
            
            <p><strong>Kwark:</strong> "Výborně! Vaše systematické testování odhalilo klíčové zákonitosti. 
            Podívejme se na to matematicky."</p>
            
            <p>MAZ zobrazuje výpočty:</p>
            
            <div class="bg-blue-50 p-4 rounded-lg font-mono text-sm">
                <p><strong>Normální gravitace:</strong> F = mg (směrem dolů)</p>
                <p><strong>ARFZ gravitace:</strong> F = -mg/k (směrem nahoru)</p>
                <p>kde k = hmotnost objektu + 1</p>
                <br>
                <p><strong>Příklady:</strong></p>
                <p>List (0.001 kg): F = -9.8 × 0.001 / 1.001 = -0.0098 N</p>
                <p>Malý kámen (0.1 kg): F = -9.8 × 0.1 / 1.1 = -0.89 N</p>
                <p>Velký kámen (2 kg): F = -9.8 × 2 / 3 = -6.53 N</p>
            </div>
            
            <p><strong>Kwark:</strong> "Vidíte? Lehčí předměty mají relativně větší zrychlení! 
            To je úplně opačné než v normální gravitaci, kde všechny objekty padají stejně rychle."</p>
            
            <p><strong>Závěr:</strong> V ARFZ gravitace <em>nepůsobí rovnoměrně</em> - 
            je <strong>nepřímo úměrná hmotnosti</strong>!</p>
        `,
        choices: [
            {
                id: 'understand_mechanism',
                text: 'Chci pochopit, proč to tak funguje',
                nextScene: 'ZONA1_MECHANISMUS_POCHOPENI',
                actions: [
                    { type: 'increaseUnderstanding' },
                    { type: 'addPhysicsFragment' }
                ]
            },
            {
                id: 'practical_application',
                text: 'Jak to využít k opravě anomálie?',
                nextScene: 'ZONA1_PRAKTICKY_VYUZITI',
                actions: [
                    { type: 'addPhysicsFragment' }
                ]
            }
        ]
    },

    ZONA1_DOKUMENTACE: {
        id: 'ZONA1_DOKUMENTACE',
        location: 'Zóna Nestabilní Gravitace - Vědecká dokumentace',
        text: `
            <p>Rozhodnete se pečlivě zdokumentovat všechna pozorování pro budoucí výzkum.</p>
            
            <p>MAZ vytváří podrobný záznam:</p>
            
            <div class="bg-gray-50 p-4 rounded-lg text-sm">
                <h4 class="font-bold">VĚDECKÝ ZÁZNAM - GRAVITAČNÍ ANOMÁLIE</h4>
                <p><strong>Datum:</strong> [ARFZ čas neznámý]</p>
                <p><strong>Lokace:</strong> Zóna 1 - Nestabilní gravitace</p>
                <p><strong>Pozorovatel:</strong> Student</p>
                <br>
                <p><strong>HYPOTÉZA:</strong> Gravitace v této zóně působí opačně než na Zemi</p>
                <br>
                <p><strong>EXPERIMENT:</strong> Testování volného pádu různých objektů</p>
                <p><strong>METODA:</strong> Uvolnění objektů ze stejné výšky, měření rychlosti stoupání</p>
                <br>
                <p><strong>POZOROVÁNÍ:</strong></p>
                <ul>
                    <li>Všechny objekty stoupají namísto pádu</li>
                    <li>Lehčí objekty stoupají rychleji</li>
                    <li>Těžší objekty stoupají pomaleji</li>
                    <li>Vztah není lineární</li>
                </ul>
                <br>
                <p><strong>ZÁVĚR:</strong> Gravitace je nepřímo úměrná hmotnosti objektu</p>
                <p><strong>DOPORUČENÍ:</strong> Další výzkum mechanismu anomálie</p>
            </div>
            
            <p><em>Kwark:</em> "Vynikající vědecký přístup! Takto se dělá správný výzkum."</p>
        `,
        choices: [
            {
                id: 'share_with_kwark',
                text: 'Sdílet dokumentaci s Kwarkem',
                nextScene: 'ZONA1_KWARK_RADA',
                actions: [
                    { type: 'addPhysicsFragment' },
                    { type: 'setStoryFlag', flag: 'documentationShared', value: true }
                ]
            },
            {
                id: 'continue_research',
                text: 'Pokračovat ve výzkumu',
                nextScene: 'ZONA1_POKRACOVAT_VYZKUM',
                actions: [
                    { type: 'addPhysicsFragment' }
                ]
            }
        ]
    },

    ZONA1_CASTECNA_OPRAVA: {
        id: 'ZONA1_CASTECNA_OPRAVA',
        location: 'Zóna Nestabilní Gravitace - Částečná oprava',
        text: `
            <p>Rozhodnete se pokusit o částečnou opravu anomálie na základě vašich pozorování.</p>
            
            <p>Přistoupíte ke kontrolnímu panelu u krystalické anomálie. 
            Jsou tu různé přepínače a ciferníky.</p>
            
            <p>Na základě svých pozorování zkusíte:</p>
            <ul>
                <li>🔧 Snížit intenzitu gravitačního pole</li>
                <li>🔄 Obrátit polaritu gravitačního generátoru</li>
                <li>⚖️ Zkalibrovat váhový sensor</li>
            </ul>
            
            <p><strong>Výsledek:</strong></p>
            <p>Gravitační anomálie se <em>částečně</em> stabilizuje! Objekty už nestoupají tak rychle, 
            ale gravitace stále není úplně normální.</p>
            
            <p><em>Kwark:</em> "Dobrá práce! Částečně jste anomálii opravili. Ale pro úplnou opravu 
            budeme potřebovat hlubší pochopení mechanismu."</p>
            
            <p>Získáváte: <strong>Částečné energetické jádro</strong> (hodnota 0.5)</p>
        `,
        choices: [
            {
                id: 'study_mechanism',
                text: 'Studovat mechanismus anomálie podrobněji',
                nextScene: 'ZONA1_MECHANISMUS_STUDIE',
                actions: [
                    { type: 'addPhysicsFragment' },
                    { type: 'setStoryFlag', flag: 'partialRepair', value: true }
                ]
            },
            {
                id: 'seek_help',
                text: 'Požádat Kwarka o pomoc',
                nextScene: 'ZONA1_KWARK_RADA',
                actions: [
                    { type: 'addPhysicsFragment' }
                ]
            }
        ]
    },

    ZONA1_KWARK_RADA: {
        id: 'ZONA1_KWARK_RADA',
        location: 'Zóna Nestabilní Gravitace - Kwarkova rada',
        text: `
            <p><em>Professor Kwark si prohlíží vaše pozorování a kývne hlavou:</em></p>
            
            <p><strong>Kwark:</strong> "Vaše práce je impresivní! Vidím, že jste pochopili základní principy 
            této gravitační anomálie. Dovolte mi vám dát několik rad."</p>
            
            <p><strong>Vědecký přístup:</strong></p>
            <ul>
                <li>✅ Pozorování - Dokázali jste identifikovat neobvyklé chování</li>
                <li>✅ Hypotéza - Vytvořili jste teorii o opačné gravitaci</li>
                <li>✅ Testování - Systematicky jste testovali různé objekty</li>
                <li>❓ Analýza - Teď musíme pochopit <em>proč</em> to tak funguje</li>
            </ul>
            
            <p><strong>Kwark:</strong> "Klíčové je pochopit, že tato anomálie není jen 'obrácená gravitace'. 
            Je to <strong>fundamentální změna v působení gravitační síly</strong>. 
            Síla je zde nepřímo úměrná hmotnosti objektu!"</p>
            
            <p><strong>Fyzikální vysvětlení:</strong></p>
            <p>Normálně: F = mg (síla roste s hmotností)</p>
            <p>ARFZ: F = -k/m (síla klesá s hmotností)</p>
            
            <p><strong>Praktický důsledek:</strong> Lehčí objekty jsou více ovlivněny!</p>
        `,
        choices: [
            {
                id: 'apply_knowledge',
                text: 'Aplikovat tyto znalosti na opravu',
                nextScene: 'ZONA1_APLIKACE_ZNALOSTI',
                actions: [
                    { type: 'increaseUnderstanding' },
                    { type: 'addPhysicsFragment' }
                ]
            },
            {
                id: 'ask_about_solution',
                text: 'Zeptat se na konkrétní řešení',
                nextScene: 'ZONA1_KONKRETNI_RESENI',
                actions: [
                    { type: 'addPhysicsFragment' }
                ]
            }
        ]
    },
    KWARK_UVOD: {
        id: 'KWARK_UVOD',
        location: 'ARFZ - Vstupní bod',
        text: `
            <p><em>Professor Kwark na displeji MAZ se rozčiluje a jeho vlasy se zdají ještě divočejší:</em></p>
            
            <p><strong>"Kde to jsi?"</strong> Dobrá otázka! Jsi v Alternativní Realitě Fyzikálních Zákonů, 
            zkráceně ARFZ. Před lety jsem byl fyzik jako ty, ale pak jsem také našel portál... 
            a teď jsem uvězněn v tomto zařízení jako virtuální mentor.</p>
            
            <p>ARFZ je místo, kde jsou fyzikální zákony našeho světa... no, řekněme <em>kreativně upravené</em>. 
            Gravitace může táhnout nahoru, teplo může téci z chladných míst do teplých, 
            a světlo si občas dělá, co chce.</p>
            
            <p>Abys se dostal domů, musíš projít různými zónami ARFZ a v každé opravit 
            fyzikální anomálii. Tím získáš energetické jádro potřebné k stabilizaci portálu.</p>
            
            <p><strong>Začneme v Zóně Nestabilní Gravitace.</strong> Připrav se na to, 
            že se tu všechno chová trochu... jinak.</p>
        `,
        choices: [
            {
                id: 'ready_for_zone1',
                text: 'Jsem připraven na první zónu',
                description: 'Chcete začít dobrodružství',
                nextScene: 'ZONA1_UVOD',
                actions: [
                    { type: 'setStoryFlag', flag: 'kwarkDialogueSeen', value: true }
                ]
            },
            {
                id: 'ask_more_questions',
                text: 'Mám ještě několik otázek...',
                description: 'Potřebujete více informací',
                nextScene: 'KWARK_OTAZKY'
            },
            {
                id: 'ask_about_escape',
                text: 'Jak se dostanu zpět domů?',
                description: 'Hlavní cíl je návrat',
                nextScene: 'KWARK_NAVRAT_DOMOV'
            }
        ]
    },

    KWARK_OTAZKY: {
        id: 'KWARK_OTAZKY',
        location: 'ARFZ - Vstupní bod',
        text: `
            <p><em>Professor Kwark si upraví brýle a usmívá se:</em></p>
            
            <p>"Samozřejmě! Ptej se na cokoliv. Jsem tu proto, abych ti pomohl pochopit 
            tuto podivnou realitu."</p>
            
            <p><strong>Co bys rád věděl?</strong></p>
            
            <ul>
                <li><strong>O MAZ:</strong> Tento záznamník ti pomůže s výpočty a pozorováními</li>
                <li><strong>O fyzice v ARFZ:</strong> Základní zákony platí, ale s "úpravami"</li>
                <li><strong>O energetických jádrech:</strong> Potřebuješ je k návratu domů</li>
                <li><strong>O mně:</strong> Jsem bývalý fyzik, teď tvůj průvodce</li>
            </ul>
        `,
        choices: [
            {
                id: 'ask_about_maz',
                text: 'Jak funguje MAZ?',
                nextScene: 'KWARK_MAZ_INFO',
                actions: [
                    { type: 'addPhysicsFragment' }
                ]
            },
            {
                id: 'ask_about_physics',
                text: 'Jaká je fyzika v ARFZ?',
                nextScene: 'KWARK_FYZIKA_INFO',
                actions: [
                    { type: 'addPhysicsFragment' }
                ]
            },
            {
                id: 'ask_about_return',
                text: 'Jak se dostanu zpět domů?',
                nextScene: 'KWARK_NAVRAT_DOMOV'
            },
            {
                id: 'ready_now',
                text: 'To stačí, jdeme na to!',
                nextScene: 'ZONA1_UVOD'
            }
        ]
    },

    KWARK_NAVRAT_DOMOV: {
        id: 'KWARK_NAVRAT_DOMOV',
        location: 'ARFZ - Vstupní bod',
        text: `
            <p><em>Kwarkov výraz zesmutní:</em></p>
            
            <p>"Ahá, to je otázka, kterou si klade každý, kdo se zde ocitne. Portál, kterým jsi přišel, 
            se uzavřel okamžitě po tvém průchodu. To je bezpečnostní mechanismus."</p>
            
            <p>Cesta zpět vyžaduje <strong>stabilizaci portálu</strong>, což znamená získání 
            energetických jader ze všech hlavních zón ARFZ:</p>
            
            <ul>
                <li><strong>Gravitační jádro</strong> - ze Zóny Nestabilní Gravitace</li>
                <li><strong>Termodynamické jádro</strong> - ze Zóny Termodynamického Chaosu</li>
                <li><strong>Elektromagnetické jádro</strong> - ze Zóny Elektrických Bouří</li>
                <li><strong>Optické jádro</strong> - ze Zóny Světelných Iluzí</li>
            </ul>
            
            <p>"Každé jádro představuje pochopení a zvládnutí jednoho typu fyzikální anomálie. 
            Když získáš všechna čtyři, portál se stabilizuje a můžeš se vrátit domů."</p>
            
            <p>"Neboj se - já jsem tady už 15 let a stále věřím, že se mi podaří najít cestu ven. 
            S tvou pomocí možná konečně uspějeme oba!"</p>
        `,
        choices: [
            {
                id: 'ask_about_kwark',
                text: 'Jak jste se sem dostal vy?',
                nextScene: 'KWARK_PRIBEH',
                actions: [
                    { type: 'addPhysicsFragment' }
                ]
            },
            {
                id: 'start_immediately',
                text: 'Začneme hned teď!',
                nextScene: 'ZONA1_UVOD',
                actions: [
                    { type: 'setStoryFlag', flag: 'determinedToReturn', value: true }
                ]
            },
            {
                id: 'ask_more',
                text: 'Zeptat se na něco jiného',
                nextScene: 'KWARK_OTAZKY'
            }
        ]
    },

    KWARK_PRIBEH: {
        id: 'KWARK_PRIBEH',
        location: 'ARFZ - Vstupní bod',
        text: `
            <p><em>Kwark si povzdechne a jeho oči se zakalí vzpomínkami:</em></p>
            
            <p>"Byl jsem teoretický fyzik na univerzitě v Cambridge. Zkoušel jsem experimentovat 
            s kvantovými tunely a vícerozměrnými prostory. Jednoho dne jsem postavil stroj, 
            který podle mých výpočtů měl otevřít okno do paralelní reality..."</p>
            
            <p>"Moc dobře to fungovalo. Příliš dobře. Místo okna jsem otevřel bránu 
            a byl jsem vtažen sem. Můj fyzický tvar zůstal v laboratoři, ale moje vědomí 
            skončilo tady, uvězněné v síti MAZ zařízení."</p>
            
            <p>"Zjistil jsem, že ARFZ je místo, kde lze 'upravovat' fyzikální zákony. 
            Možná je to testovací prostředí nějaké vyspělé civilizace, nebo možná 
            je to přirozený jev - vesmír si zkouší různé konfigurace fyziky."</p>
            
            <p>"Každopádně, pokud společně vyřešíme anomálie, možná se mi podaří nastavit 
            portál tak, aby nás dostal oba zpět - tebe do tvého světa, a mě zpět do mého těla."</p>
        `,
        choices: [
            {
                id: 'promise_to_help',
                text: 'Slibuji, že vám pomůžu',
                nextScene: 'ZONA1_UVOD',
                actions: [
                    { type: 'addPhysicsFragment' },
                    { type: 'setStoryFlag', flag: 'promisedToHelpKwark', value: true },
                    { type: 'increaseUnderstanding' }
                ]
            },
            {
                id: 'ask_about_other_visitors',
                text: 'Byli tady i jiní lidé?',
                nextScene: 'KWARK_JINI_NAVSTEVNICI'
            }
        ]
    },

    KWARK_JINI_NAVSTEVNICI: {
        id: 'KWARK_JINI_NAVSTEVNICI',
        location: 'ARFZ - Vstupní bod',
        text: `
            <p>"Ano, za těch 15 let jsem potkal několik dalších 'turistů'. Většinou to byli 
            vědci jako my, kteří experimentovali s podobnými technologiemi."</p>
            
            <p>"Dr. Elena Novakova byla biofyzička - studovala gravitační vliv na rostliny. 
            Prof. Mark Thompson zkoumal termodynamiku. Byly tu i děti - mladí vynálezci, 
            kteří našli staré artefakty podobné tvému portálu."</p>
            
            <p>"Dobře zpráva je, že se jim podařilo projít několika zónami a vrátit se domů. 
            Špatná zpráva je, že každý musí projít vlastní cestou učení - nemohu ti prostě 
            říct odpovědi na hádanky. Fyziku se musíš naučit pochopit sám."</p>
            
            <p>"Ale zanechali tu poznámky a rady, které můžeš najít během své cesty. 
            Někdy najdeš jejich zápisky v nejrůznějších koutech ARFZ."</p>
        `,
        choices: [
            {
                id: 'ready_for_journey',
                text: 'Jsem připraven na cestu',
                nextScene: 'ZONA1_UVOD',
                actions: [
                    { type: 'addPhysicsFragment' },
                    { type: 'setStoryFlag', flag: 'knowsAboutOthers', value: true }
                ]
            }
        ]
    },

    KWARK_FYZIKA_INFO: {
        id: 'KWARK_FYZIKA_INFO',
        location: 'ARFZ - Vstupní bod',
        text: `
            <p><em>Kwark se nadšeně rozhovoří:</em></p>
            
            <p>"Fyzika v ARFZ je fascinující! Základní zákony jako zachování energie 
            a hybnosti stále platí, ale konstanty a směry sil jsou... flexibilní."</p>
            
            <p><strong>Například:</strong></p>
            <ul>
                <li><strong>Gravitace:</strong> g může být záporné, proměnné, nebo závislé na hmotnosti</li>
                <li><strong>Termodynamika:</strong> Teplo může téct z chladných míst do teplých</li>
                <li><strong>Elektromagnetismus:</strong> Naboje mohou měnit svou polaritu</li>
                <li><strong>Optika:</strong> Světlo se může ohýbat podle nálady</li>
            </ul>
            
            <p>"Klíčem k přežití je <strong>pozorování a experimentování</strong>. 
            Nikdy nepřijímej nic za samozřejmé. Vždy si změř, spočítej, a ověř!"</p>
            
            <p>"MAZ ti s tím pomůže - má zabudované senzory a kalkulačku. 
            Ale mozek a logické myšlení musíš použít ty sám."</p>
        `,
        choices: [
            {
                id: 'ask_about_dangers',
                text: 'Jsou tu nějaká nebezpečí?',
                nextScene: 'KWARK_NEBEZPECI',
                actions: [
                    { type: 'addPhysicsFragment' }
                ]
            },
            {
                id: 'start_exploring',
                text: 'Začneme prozkoumávat',
                nextScene: 'ZONA1_UVOD',
                actions: [
                    { type: 'increaseUnderstanding' }
                ]
            }
        ]
    },

    KWARK_NEBEZPECI: {
        id: 'KWARK_NEBEZPECI',
        location: 'ARFZ - Vstupní bod',
        text: `
            <p>"Skutečná fyzická nebezpečí jsou minimální - ARFZ má vestavěné 
            bezpečnostní mechanismy. Nemůžeš zde zemřít natrvalo."</p>
            
            <p>"Největší nebezpečí je <strong>frustrace a vzdání se</strong>. Některé hádanky 
            jsou náročné a vyžadují trpělivost. Pokud se pokusíš uhádnout odpovědi 
            místo jejich pochopení, budeš se točit v kruhu."</p>
            
            <p>"Druhé nebezpečí je <strong>opomenutí detailů</strong>. V ARFZ je každé 
            pozorování důležité. Malá změna barvy, neobvyklý zvuk, podivný pohyb - 
            to všechno může být klíčem k řešení."</p>
            
            <p>"A konečně, dávej si pozor na <strong>Energetického Skřeta</strong>. 
            Je to místní bytost, která se živí fyzikální energií z anomálií. 
            Není zlovodná, ale jeho rady jsou někdy... zavádějící."</p>
        `,
        choices: [
            {
                id: 'ask_about_skret',
                text: 'Řekněte mi více o Energetickém Skřetovi',
                nextScene: 'KWARK_SKRET_INFO',
                actions: [
                    { type: 'addPhysicsFragment' }
                ]
            },
            {
                id: 'ready_to_start',
                text: 'Jsem připraven začít',
                nextScene: 'ZONA1_UVOD'
            }
        ]
    },

    KWARK_SKRET_INFO: {
        id: 'KWARK_SKRET_INFO',
        location: 'ARFZ - Vstupní bod',
        text: `
            <p>"Energetický Skřet je jeden z původních obyvatel ARFZ. Vypadá jako 
            malé, roztomilé stvoření s velkými očima a svítícími tečkami na kůži."</p>
            
            <p>"Živí se energií z fyzikálních anomálií - čím víc jsou věci 'rozbité', 
            tím má více jídla. To znamená, že někdy ti může poradit způsob, jak 
            <em>zhoršit</em> situaci místo jejího vyřešení."</p>
            
            <p>"Není zlý - jen hladový. Pokud s ním mluvíš zdvořile a vysvětlíš mu, 
            že potřebuješ anomálie opravit, většinou pochopí a pomůže ti najít 
            jiný zdroj potravy."</p>
            
            <p>"Občas má velmi užitečné informace o fungování ARFZ. Jeho perspektiva 
            je jiná než naše - vidí energie a síly způsobem, jak my nedokážeme."</p>
            
            <p>"Jedno varování: nikdy mu nedávej přímý přístup k MAZ. Pokusil by se 
            ho sníst a ty bys zůstal bez průvodce!"</p>
        `,
        choices: [
            {
                id: 'understand_skret',
                text: 'Rozumím, budu opatrný',
                nextScene: 'ZONA1_UVOD',
                actions: [
                    { type: 'addPhysicsFragment' },
                    { type: 'setStoryFlag', flag: 'knowsAboutSkret', value: true }
                ]
            }
        ]
    },

    KWARK_MAZ_INFO: {
        id: 'KWARK_MAZ_INFO',
        location: 'ARFZ - Vstupní bod',
        text: `
            <p><em>Kwark se nadšeně rozhovořil:</em></p>
            
            <p>"MAZ je tvůj nejlepší přítel v ARFZ! Může:</p>
            
            <ul>
                <li><strong>Provádět výpočty</strong> - když potřebuješ spočítat sílu, rychlost, atd.</li>
                <li><strong>Zaznamenávat pozorování</strong> - všechno důležité si pamatuje</li>
                <li><strong>Poskytovat nápovědy</strong> - když si nebudeš vědět rady</li>
                <li><strong>Komunikovat se mnou</strong> - jsem tu vždycky, když mě potřebuješ</li>
            </ul>
            
            <p>Stačí kliknout na tlačítko MAZ a najdeš všechny funkce. Nezapomeň, 
            že pozorování je základem vědy - čím víc si všímáš, tím líp rozumíš fyzice!</p>
        `,
        choices: [
            {
                id: 'test_maz',
                text: 'Vyzkoušet MAZ hned teď',
                description: 'Praktické seznámení se zařízením',
                nextScene: 'ZONA1_UVOD',
                actions: [
                    { type: 'addPhysicsFragment' },
                    { type: 'increaseUnderstanding' }
                ]
            },
            {
                id: 'continue_questions',
                text: 'Zeptat se na něco jiného',
                nextScene: 'KWARK_OTAZKY'
            }
        ]
    },

    ZONA1_UVOD: {
        id: 'ZONA1_UVOD',
        location: 'Zóna Nestabilní Gravitace - Vstup',
        text: `
            <p>Vstupujete do první zóny ARFZ a okamžitě poznáte, že tady něco není v pořádku.</p>
            
            <p>Kolem vás létají kameny různých velikostí - ale ne náhodně. Některé padají k zemi, 
            jiné <strong>stoupají k obloze</strong>, a několik jich se prostě vznáší na místě 
            jako by si nemohly rozmyslet, kterým směrem mají jít.</p>
            
            <p>Vzduch je tichý, ale občas uslyšíte podivné "PLOP" - to když se kámen rozhodne 
            změnit směr gravitace a začne padat opačným směrem.</p>
            
            <p>Professor Kwark se ozvává z MAZ: <em>"Vítej v Zóně Nestabilní Gravitace! 
            Zde je gravitační konstanta... trochu nekonzistentní. Tvým úkolem je najít 
            hlavní anomálii a opravit ji."</em></p>
            
            <p>Před vámi vidíte několik možných cest:</p>
        `,
        choices: [
            {
                id: 'investigate_stones',
                text: 'Prozkoumat létající kameny',
                description: 'Pozorování anomálií může být klíčové',
                nextScene: 'ZONA1_KAMENY_POZOROVANJE',
                actions: [
                    { type: 'addPhysicsFragment' }
                ]
            },
            {
                id: 'follow_falling_up',
                text: 'Následovat kameny padající nahoru',
                description: 'Možná vedou ke zdroji problému',
                nextScene: 'ZONA1_CESTA_NAHORU'
            },
            {
                id: 'examine_floating',
                text: 'Zkoumat vznášející se kameny',
                description: 'Proč zůstávají na místě?',
                nextScene: 'ZONA1_VZNASEJICI_KAMENY',
                actions: [
                    { type: 'addToInventory', item: 'mericiPasmo' }
                ]
            },
            {
                id: 'random_exploration',
                text: 'Prozkoumat okolí více náhodně',
                description: 'Možná objevíte něco nečekaného',
                nextScene: 'ENCOUNTER_SKRET_1'
            }
        ],
        hint: 'Pozorování je základ vědy. Zkuste si všímat detailů!'
    },

    ZONA1_KAMENY_POZOROVANJE: {
        id: 'ZONA1_KAMENY_POZOROVANJE',
        location: 'Zóna Nestabilní Gravitace - Pozorování',
        text: `
            <p>Rozhodnete se věnovat čas pozorování. Vytáhnete MAZ a začnete zaznamenávat:</p>
            
            <p><strong>Pozorování #1:</strong> Malé kameny (< 1 kg) většinou padají směrem nahoru</p>
            <p><strong>Pozorování #2:</strong> Střední kameny (1-5 kg) se vznášejí</p>
            <p><strong>Pozorování #3:</strong> Velké kameny (> 5 kg) padají dolů jako normálně</p>
            
            <p><em>Kwark se ozvává:</em> "Výborně! Vidíš vzorec? Gravitace zde závisí na hmotnosti 
            objektu, ale ne tak, jak bychom čekali. V našem světě platí F = mg, ale tady..."</p>
            
            <p>MAZ automaticky spočítá: <strong>F = mg × (-1)^(m/2)</strong></p>
            
            <p>"Gravitační síla se obrací podle hmotnosti! To je matematicky elegantní, 
            ale fyzikálně naprosto šílené!"</p>
            
            <p>Vaše pozorování vás dovedlo k důležitému závěru o fungování gravitace v této zóně.</p>
        `,
        choices: [
            {
                id: 'test_hypothesis',
                text: 'Otestovat hypotézu s vlastním experimentem',
                description: 'Vědecký přístup - ověřit teorii praxí',
                nextScene: 'ZONA1_EXPERIMENT',
                actions: [
                    { type: 'increaseUnderstanding' },
                    { type: 'addPhysicsFragment' }
                ]
            },
            {
                id: 'look_for_source',
                text: 'Hledat zdroj této anomálie',
                description: 'Něco must způsobovat tuto podivnou gravitaci',
                nextScene: 'ZONA1_HLEDANI_ZDROJE'
            },
            {
                id: 'ask_kwark_advice',
                text: 'Požádat Kwarka o radu',
                nextScene: 'ZONA1_KWARK_RADA'
            }
        ]
    },

    ZONA1_EXPERIMENT: {
        id: 'ZONA1_EXPERIMENT',
        location: 'Zóna Nestabilní Gravitace - Experimentální oblast',
        text: `
            <p>Rozhodnete se otestovat svou hypotézu. Najdete několik objektů různých hmotností 
            a připravíte experiment.</p>
            
            <p><strong>Experiment:</strong> Pustíte současně:</p>
            <ul>
                <li>Malý kámen (0.5 kg) - <em>vystřelí směrem nahoru!</em></li>
                <li>Střední kámen (3 kg) - <em>zůstává ve vzduchu</em></li>
                <li>Velký kámen (8 kg) - <em>padá dolů</em></li>
            </ul>
            
            <p>MAZ automaticky měří a vypočítává:</p>
            <p><strong>Malý kámen:</strong> F = 0.5 × 9.8 × (-1)^(0.25) = 4.9 N nahoru</p>
            <p><strong>Střední kámen:</strong> F = 3 × 9.8 × (-1)^(1.5) ≈ 0 N (beztíže)</p>
            <p><strong>Velký kámen:</strong> F = 8 × 9.8 × (-1)^4 = 78.4 N dolů</p>
            
            <p><em>Kwark jásá:</em> "Perfektní! Experimentálně jsi potvrdil hypotézu! 
            Toto je přesně to, jak by měl pracovat každý fyzik!"</p>
            
            <p>Náhle si všimnete něčeho podivného - v dálce vidíte velký krystal, 
            který pulzuje ve stejném rytmu jako gravitační změny...</p>
        `,
        choices: [
            {
                id: 'investigate_crystal',
                text: 'Prozkoumat pulzující krystal',
                description: 'Možná je to zdroj anomálie',
                nextScene: 'ZONA1_KRYSTAL_ANOMALIE',
                actions: [
                    { type: 'increaseUnderstanding' }
                ]
            },
            {
                id: 'document_findings',
                text: 'Nejdříve důkladně zdokumentovat objev',
                description: 'Vědecká metoda - poznámky jsou důležité',
                nextScene: 'ZONA1_DOKUMENTACE',
                actions: [
                    { type: 'addPhysicsFragment' },
                    { type: 'addPhysicsFragment' }
                ]
            }
        ]
    },

    ZONA1_KRYSTAL_ANOMALIE: {
        id: 'ZONA1_KRYSTAL_ANOMALIE',
        location: 'Zóna Nestabilní Gravitace - Gravitační krystal',
        text: `
            <p>Přiblížíte se k obrovskému krystalu, který je vysoký skoro jako strom. 
            Jeho povrch je pokryt světélkujícími symboly a rytmicky pulzuje modrým světlem.</p>
            
            <p>S každým pulzem cítíte, jak se gravitace kolem vás mění. Když krystal 
            zesílí své světlo, kameny kolem začnou padat nahoru. Když světlo zeslábne, 
            gravitace se vrátí k normálu.</p>
            
            <p><em>Kwark šeptá:</em> "To je ono! Gravitační Rezonátor! Něco narušuje 
            jeho harmonii a způsobuje chaos v gravitačních polích."</p>
            
            <p>Na krystalu vidíte panel s několika tlačítky a displejem, který ukazuje 
            divnou rovnici: <strong>g = 9.8 × sin(ωt + φ)</strong></p>
            
            <p>"Gravitační konstanta osciluje! Proto se gravitace mění v čase. 
            Musíš najít správnou frekvenci a fázi, aby se stabilizovala."</p>
            
            <p>Na panelu jsou tři nastavení:</p>
            <ul>
                <li><strong>Frekvence (ω):</strong> Aktuálně 2.5 Hz</li>
                <li><strong>Fáze (φ):</strong> Aktuálně 45°</li>
                <li><strong>Amplituda:</strong> Aktuálně 100%</li>
            </ul>
        `,
        choices: [
            {
                id: 'adjust_frequency',
                text: 'Zkusit změnit frekvenci na 0 Hz',
                description: 'Nulová frekvence = konstantní gravitace',
                nextScene: 'ZONA1_OPRAVA_USPESNA',
                actions: [
                    { type: 'addEnergeticCore' },
                    { type: 'increaseUnderstanding' },
                    { type: 'setStoryFlag', flag: 'zone1AnomalySolved', value: true }
                ]
            },
            {
                id: 'adjust_phase',
                text: 'Změnit fázi na 0°',
                description: 'Možná problém je v posunutí',
                nextScene: 'ZONA1_CASTECNA_OPRAVA'
            },
            {
                id: 'ask_kwark_help',
                text: 'Požádat Kwarka o pomoc s výpočty',
                nextScene: 'ZONA1_KWARK_VYPOCTY',
                actions: [
                    { type: 'addPhysicsFragment' }
                ]
            }
        ],
        hint: 'Představte si gravitaci jako vlnu. Co by se stalo, kdyby vlna neoscilovala?'
    },

    ZONA1_OPRAVA_USPESNA: {
        id: 'ZONA1_OPRAVA_USPESNA',
        location: 'Zóna Nestabilní Gravitace - Stabilizováno',
        text: `
            <p>Nastavíte frekvenci na nulu a stisknete potvrzovací tlačítko.</p>
            
            <p><strong>BZZZT!</strong></p>
            
            <p>Krystal přestane pulzovat a začne svítit stálým, klidným světlem. 
            Všechny kameny, které se vznášely, pomalu klesnou k zemi. 
            Gravitace je konečně stabilní!</p>
            
            <p><em>Kwark nadšeně tleskne:</em> "Výborně! Pochopil jsi to! Když nastavíš 
            frekvenci na nulu, gravitační konstanta se stane skutečně konstantní. 
            g = 9.8 × sin(0×t + φ) = 9.8 × 0 = 9.8 N/kg - stabilní gravitace!"</p>
            
            <p>Z krystalu se uvolní zářící energetické jádro, které vletí do vašeho MAZ.</p>
            
            <p><strong>ZÍSKALI JSTE: Energetické jádro gravitace!</strong></p>
            
            <p>"To je tvoje první jádro! Ještě potřebuješ několik dalších z ostatních zón, 
            ale tohle je skvělý začátek. Cesta do Zóny Termodynamického Chaosu se právě otevřela!"</p>
        `,
        choices: [
            {
                id: 'continue_to_zone2',
                text: 'Pokračovat do další zóny',
                description: 'Dobrodružství pokračuje',
                nextScene: 'ZONA2_PRECHOD'
            },
            {
                id: 'explore_more_zone1',
                text: 'Prozkoumat ještě více Zóny 1',
                description: 'Možná tu jsou další věci k objevení',
                nextScene: 'ZONA1_DALSI_EXPLORACE',
                actions: [
                    { type: 'addPhysicsFragment' }
                ]
            }
        ]
    },

    ZONA1_DALSI_EXPLORACE: {
        id: 'ZONA1_DALSI_EXPLORACE',
        location: 'Zóna Nestabilní Gravitace - Průzkum',
        text: `
            <p>Rozhodnete se ještě chvíli prozkoumat stabilizovanou zónu. 
            Teď, když je gravitace normální, můžete si všimnout věcí, 
            které předtím létaly kolem.</p>
            
            <p>Najdete starou knihu s názvem "Fyzikální anomálie v praxi" a několik 
            poznámek od předchozích návštěvníků ARFZ:</p>
            
            <p><em>"Gravitace je jen začátek. V dalších zónách jsou ještě podivnější věci." 
            - Dr. Elena Novakova, 2019</em></p>
            
            <p><em>"Nezapomeň na zákon zachování energie. I v ARFZ platí!" 
            - Prof. Mark Thompson, 2020</em></p>
            
            <p>Kwark komentuje: "Vidíš? Nejsi první, kdo tady byl. Ale každý musí 
            projít vlastní cestou učení."</p>
        `,
        choices: [
            {
                id: 'read_more_notes',
                text: 'Přečíst si více poznámek',
                description: 'Moudrost předchozích návštěvníků',
                nextScene: 'ZONA1_POZNAMKY_PDF',
                actions: [
                    { type: 'addPhysicsFragment' },
                    { type: 'addPhysicsFragment' }
                ]
            },
            {
                id: 'ready_for_zone2',
                text: 'Nyní jsem připraven na další zónu',
                nextScene: 'ZONA2_PRECHOD'
            }
        ]
    },

    ZONA2_PRECHOD: {
        id: 'ZONA2_PRECHOD',
        location: 'Přechod mezi zónami',
        text: `
            <p>Stojíte na hranici mezi Zónou Nestabilní Gravitace a další oblastí ARFZ. 
            Za vámi je teď klidná krajina se stabilní gravitací, před vámi vidíte 
            něco úplně jiného...</p>
            
            <p>Vzduch před vámi se třpytí teplem a občas vidíte barevné blesky. 
            Slyšíte podivné zvuky - jako když voda vře, ale současne i jako když něco zamrzá.</p>
            
            <p><em>Kwark se ozvává:</em> "Vítej u Zóny Termodynamického Chaosu! 
            Tady se teplo a energie chovají... kreativně. Připrav se na horko, 
            zimu, a všechno mezi tím!"</p>
            
            <p><strong>Pokračování dobrodružství bude v příštím dílu!</strong></p>
            
            <p>Máte možnost uložit svůj pokrok nebo pokračovat v prozkoumávání první zóny.</p>
        `,
        choices: [
            {
                id: 'save_and_wait',
                text: 'Uložit pokrok a počkat na pokračování',
                description: 'Konec první kapitoly',
                nextScene: 'KONEC_DILU_1'
            },
            {
                id: 'explore_zone1_more',
                text: 'Vrátit se a prozkoumat více Zóny 1',
                nextScene: 'ZONA1_DALSI_EXPLORACE'
            }
        ]
    },

    KONEC_DILU_1: {
        id: 'KONEC_DILU_1',
        location: 'Konec prvního dílu',
        text: `
            <p><strong>🎉 Gratulujeme!</strong></p>
            
            <p>Úspěšně jste dokončili první díl Fyzikálního dobrodružství! 
            Vyřešili jste gravitační anomálii a získali své první energetické jádro.</p>
            
            <p><strong>Vaše úspěchy:</strong></p>
            <ul>
                <li>✅ Pochopili jste alternativní gravitaci v ARFZ</li>
                <li>✅ Provedli jste vědecké experimenty</li>
                <li>✅ Vyřešili jste gravitační rezonátor</li>
                <li>✅ Získali jste energetické jádro</li>
                <li>✅ Nasbírali jste několik fyzikálních fragmentů</li>
            </ul>
            
            <p><em>Professor Kwark:</em> "Jsem na tebe hrdý! Ukázal jsi skutečného ducha vědce. 
            V příštím dílu tě čekají ještě větší výzvy s termodynamikou, optikou a elektromagnetismem!"</p>
            
            <p>Vaše hra byla automaticky uložena. Těšíme se na vás v dalším pokračování!</p>
        `,
        choices: [
            {
                id: 'play_again',
                text: 'Hrát znovu od začátku',
                description: 'Zkusit jiné rozhodnutí',
                nextScene: 'UVOD_PORTAL_AKTIVACE',
                actions: [
                    { type: 'resetGame' }
                ]
            },
            {
                id: 'explore_current',
                text: 'Prozkoumat současný stav světa',
                nextScene: 'ZONA1_DALSI_EXPLORACE'
            }
        ]
    },

    // Missing scenes referenced in the main story flow
    ZONA1_CESTA_NAHORU: {
        id: 'ZONA1_CESTA_NAHORU',
        location: 'Zóna Nestabilní Gravitace - Cesta nahoru',
        text: `
            <p>Rozhodnete se následovat kameny, které "padají" směrem k obloze. 
            Je to zvláštní pocit - sledovat objekty, které místo dolů létají nahoru!</p>
            
            <p>Po několika minutách chůze narazíte na zajímavý jev: všechny kameny 
            směřují k jednomu místu na obloze - k velkému, pulzujícímu krystalu, 
            který visí asi 20 metrů nad zemí.</p>
            
            <p>Kolem krystalu obíhají kameny různých velikostí jako planety kolem slunce. 
            Menší kameny obíhají rychleji, větší pomaleji.</p>
            
            <p><em>Kwark komentuje:</em> "Fascinující! Tento krystal vytvořil gravitační 
            anomálii - stal se 'antigravitačním centrem'. Objekty k němu nepřitahuje, 
            ale odpuzuje je podle jejich hmotnosti!"</p>
            
            <p>Při bližším pohledu si všimnete, že kolem krystalu je spirálovitá stezka, 
            která vede přímo k němu.</p>
        `,
        choices: [
            {
                id: 'climb_spiral_path',
                text: 'Vylézt po spirálovité stezce ke krystalu',
                description: 'Přímý přístup k anomálii',
                nextScene: 'ZONA1_KRYSTAL_ANOMALIE',
                actions: [
                    { type: 'addPhysicsFragment' }
                ]
            },
            {
                id: 'study_orbiting_stones',
                text: 'Nejdříve studovat obíhající kameny',
                description: 'Vědecký přístup',
                nextScene: 'ZONA1_STUDIE_ORBIT',
                actions: [
                    { type: 'addPhysicsFragment' },
                    { type: 'increaseUnderstanding' }
                ]
            },
            {
                id: 'test_with_own_object',
                text: 'Vyzkoušet, co se stane s vlastním předmětem',
                nextScene: 'ZONA1_TEST_PREDMETU'
            }
        ]
    },

    ZONA1_STUDIE_ORBIT: {
        id: 'ZONA1_STUDIE_ORBIT',
        location: 'Zóna Nestabilní Gravitace - Studium orbit',
        text: `
            <p>Rozhodnete se věnovat čas pozorování obíhajících kamenů. 
            Vytáhnete MAZ a začnete měřit jejich pohyb.</p>
            
            <p><strong>Pozorování:</strong></p>
            <ul>
                <li>Malý kámen (0.2 kg): oběžná doba 8 sekund, vzdálenost 3 metry</li>
                <li>Střední kámen (2 kg): oběžná doba 15 sekund, vzdálenost 5 metrů</li>
                <li>Velký kámen (8 kg): oběžná doba 30 sekund, vzdálenost 8 metrů</li>
            </ul>
            
            <p>MAZ automaticky spočítá vztah: <strong>T² ∝ r³/m</strong></p>
            
            <p><em>Kwark se nadchne:</em> "To je úžasné! Je to jako Keplerův třetí zákon, 
            ale s dodatečnou závislostí na hmotnosti. V normálním vesmíru hmotnost 
            oběžnou dobu neovlivňuje, ale tady ano!"</p>
            
            <p>"Čím těžší objekt, tím pomaleji obíhá a tím dál je od krystalu. 
            Je to jako obrácená gravitace s korekcí na hmotnost!"</p>
            
            <p>Váš pozorný přístup vám dal cenné informace o fungování anomálie.</p>
        `,
        choices: [
            {
                id: 'approach_crystal_informed',
                text: 'Přiblížit se ke krystalu s těmito znalostmi',
                nextScene: 'ZONA1_KRYSTAL_ANOMALIE',
                actions: [
                    { type: 'addPhysicsFragment' },
                    { type: 'setStoryFlag', flag: 'studiedOrbits', value: true }
                ]
            },
            {
                id: 'calculate_more',
                text: 'Spočítat přesnou gravitační konstantu',
                nextScene: 'ZONA1_GRAVITACNI_VYPOCTY',
                actions: [
                    { type: 'increaseUnderstanding' }
                ]
            }
        ]
    },

    ZONA1_GRAVITACNI_VYPOCTY: {
        id: 'ZONA1_GRAVITACNI_VYPOCTY',
        location: 'Zóna Nestabilní Gravitace - Pokročilé výpočty',
        text: `
            <p>Rozhodnete se provést detailní výpočty gravitační konstanty v této anomálii.</p>
            
            <p>Používáte pozorovaná data a počítáte:</p>
            <p><strong>F = G × M × m / r²</strong>, ale s negativním znaménkem</p>
            
            <p>MAZ vám pomáhá s výpočty:</p>
            <ul>
                <li>Pro malý kámen: g_efektivní = -2.1 m/s²</li>
                <li>Pro střední kámen: g_efektivní = -0.8 m/s²</li>
                <li>Pro velký kámen: g_efektivní = -0.3 m/s²</li>
            </ul>
            
            <p><strong>Závěr:</strong> Gravitační konstanta není pouze záporná, 
            ale také <em>nepřímo úměrná hmotnosti objektu</em>!</p>
            
            <p><strong>g_anomální = -9.8 / (m + 1)</strong></p>
            
            <p><em>Kwark aplauduje:</em> "Excelentní! Odvodil jsi matematickou formuli 
            pro gravitační anomálii. To je skutečně vědecký přístup!"</p>
            
            <p>S tímto pochopením jste nyní připraveni anomálii opravit.</p>
        `,
        choices: [
            {
                id: 'use_formula_to_fix',
                text: 'Použít formuli k opravě krystalu',
                nextScene: 'ZONA1_KRYSTAL_ANOMALIE',
                actions: [
                    { type: 'addPhysicsFragment' },
                    { type: 'addPhysicsFragment' },
                    { type: 'increaseUnderstanding' },
                    { type: 'setStoryFlag', flag: 'masterPhysicist', value: true }
                ]
            }
        ]
    },

    ZONA1_VZNASEJICI_KAMENY: {
        id: 'ZONA1_VZNASEJICI_KAMENY',
        location: 'Zóna Nestabilní Gravitace - Plovoucí kameny',
        text: `
            <p>Přiblížíte se ke skupině kamenů, které se prostě vznášejí ve vzduchu, 
            jako by se nemohly rozhodnout, kterým směrem mají spadnout.</p>
            
            <p>Když se jich dotknete, cítíte podivnou vibraci. Kameny se točí 
            kolem vlastní osy, ale zůstávají na místě.</p>
            
            <p>MAZ detekuje: <em>"Gravitační síla = 0. Objekty jsou v dokonalé 
            rovnováze mezi přitažlivými a odpudivými silami."</em></p>
            
            <p>Objevíte si v trávě měřicí pásmo, které zřejmě ztratil někdo z předchozích návštěvníků. 
            Je na něm štítek: <em>"Dr. E. Novakova - pro přesná měření"</em></p>
            
            <p>S měřicím pásmo začnete přesně zaměřovat vzdálenosti mezi vznášejícími se kameny. 
            Zjišťujete, že jsou uspořádány v dokonalém geometrickém vzorci!</p>
        `,
        choices: [
            {
                id: 'analyze_pattern',
                text: 'Analyzovat geometrický vzorec',
                description: 'Matematický přístup',
                nextScene: 'ZONA1_GEOMETRICKY_VZOREC',
                actions: [
                    { type: 'addPhysicsFragment' }
                ]
            },
            {
                id: 'try_to_move_stone',
                text: 'Pokusit se pohnout s kamenem',
                description: 'Fyzikální experiment',
                nextScene: 'ZONA1_POHYB_KAMENE',
                actions: [
                    { type: 'addPhysicsFragment' }
                ]
            },
            {
                id: 'follow_pattern_to_source',
                text: 'Následovat vzorec k jeho zdroji',
                nextScene: 'ZONA1_HLEDANI_ZDROJE'
            }
        ]
    },

    ZONA1_GEOMETRICKY_VZOREC: {
        id: 'ZONA1_GEOMETRICKY_VZOREC',
        location: 'Zóna Nestabilní Gravitace - Geometrická analýza',
        text: `
            <p>Pomocí měřicího pásma pečlivě zaměříte pozice všech vznášejících se kamenů.</p>
            
            <p><strong>Zjištění:</strong></p>
            <ul>
                <li>Kameny tvoří dokonalý hexagon (šestiúhelník)</li>
                <li>Každý kámen je vzdálen od sousedních přesně 1.732 metrů (√3)</li>
                <li>Ve středu hexagonu je prázdné místo</li>
                <li>Celý vzorec pulzuje velmi jemně každé 3 sekundy</li>
            </ul>
            
            <p>MAZ analyzuje: <em>"Hexagonální struktura je typická pro krystalovou mřížku. 
            Pravděpodobně existuje centrální řídící prvek."</em></p>
            
            <p><em>Kwark dodává:</em> "Výborně! Našel jsi skrytý řád v chaosu. 
            Geometrie je základem fyziky - i v ARFZ!"</p>
            
            <p>V centru hexagonu si všímnete slabého světélkování pod zemí...</p>
        `,
        choices: [
            {
                id: 'investigate_center',
                text: 'Prozkoumat centrum hexagonu',
                description: 'Najít skrytý zdroj',
                nextScene: 'ZONA1_SKRYTY_KRYSTAL',
                actions: [
                    { type: 'increaseUnderstanding' }
                ]
            },
            {
                id: 'calculate_forces',
                text: 'Spočítat síly působící na kameny',
                nextScene: 'ZONA1_VYPOCET_SIL',
                actions: [
                    { type: 'addPhysicsFragment' }
                ]
            }
        ]
    },

    ZONA1_SKRYTY_KRYSTAL: {
        id: 'ZONA1_SKRYTY_KRYSTAL',
        location: 'Zóna Nestabilní Gravitace - Skrytý krystal',
        text: `
            <p>Klečíte si do centra hexagonu a začnete opatrně kopat v měkké půdě. 
            Po chvíli narazíte na něco tvrdého - další krystal, ale mnohem menší 
            než ten, který jste viděli na obloze.</p>
            
            <p>Tento krystal je pohřbený asi 30 centimetrů pod zemí a pulzuje 
            synchronně se vznášejícími se kameny.</p>
            
            <p><em>Kwark šeptá:</em> "To je podřídný rezonátor! Hlavní krystal 
            na obloze vytváří velkou anomálii, ale tento malý krystal 
            vytváří lokální 'mrtvé zóny' kde se síly vyrovnávají."</p>
            
            <p>Na krystalu je malý panel s jedním tlačítkem a jednoduchý displej 
            ukazující: <strong>"SYNC: ON | FORCE: BALANCED"</strong></p>
            
            <p>Pokud by jste deaktivovali synchronizaci, vznášející se kameny by spadly, 
            ale získali byste přístup k hlavnímu krystalu bez překážek.</p>
        `,
        choices: [
            {
                id: 'deactivate_sync',
                text: 'Deaktivovat synchronizaci',
                description: 'Umožní přístup k hlavnímu krystalu',
                nextScene: 'ZONA1_CESTA_UVOLNENA',
                actions: [
                    { type: 'setStoryFlag', flag: 'syncDeactivated', value: true }
                ]
            },
            {
                id: 'study_mechanism',
                text: 'Nejdříve důkladně prostudovat mechanismus',
                nextScene: 'ZONA1_STUDIE_MECHANISMU',
                actions: [
                    { type: 'addPhysicsFragment' }
                ]
            },
            {
                id: 'leave_untouched',
                text: 'Nechat krystal nedotčený a najít jinou cestu',
                nextScene: 'ZONA1_HLEDANI_ALTERNATIVY'
            }
        ]
    },

    ZONA1_CESTA_UVOLNENA: {
        id: 'ZONA1_CESTA_UVOLNENA',
        location: 'Zóna Nestabilní Gravitace - Volná cesta',
        text: `
            <p>Stisknete tlačítko a krystal přestane pulzovat. Okamžitě všechny 
            vznášející se kameny spadnou k zemi s hluchými rány.</p>
            
            <p><strong>PRÁSK! PRÁSK! PRÁSK!</strong></p>
            
            <p>Cesta je nyní volná, ale také jste změnili gravitační rovnováhu 
            celé oblasti. Hlavní krystal na obloze začne pulzovat rychleji 
            a intenzivněji.</p>
            
            <p><em>Kwark komentuje:</em> "Dobrá volba! Někdy musíš změnit systém, 
            abys získal přístup k jeho řídící jednotce. Teď můžeš přijít 
            k hlavnímu krystalu bez překážek."</p>
            
            <p>Spirálovitá cesta k hlavnímu krystalu je nyní jasně viditelná 
            a nic vám nebrání se k němu dostat.</p>
        `,
        choices: [
            {
                id: 'climb_to_main_crystal',
                text: 'Vylézt k hlavnímu krystalu',
                nextScene: 'ZONA1_KRYSTAL_ANOMALIE',
                actions: [
                    { type: 'setStoryFlag', flag: 'clearPath', value: true }
                ]
            }
        ]
    },

    // Additional missing scenes
    ZONA1_HLEDANI_ZDROJE: {
        id: 'ZONA1_HLEDANI_ZDROJE',
        location: 'Zóna Nestabilní Gravitace - Hledání zdroje',
        text: `
            <p>Rozhodnete se systematicky prozkoumat oblast a najít zdroj gravitačních anomálií.</p>
            
            <p>Při procházení krajiny si všímnete několika věcí:</p>
            <ul>
                <li>Anomálie nejsou náhodné - mají geometrické vzorce</li>
                <li>Všechny směřují k nebo od konkrétních bodů</li>
                <li>Existuje hlavní zdroj (krystal na obloze) a několik menších</li>
            </ul>
            
            <p>Po půl hodině hledání najdete zajímavou věc: na skále je vyrytá zpráva 
            od předchozího návštěvníka:</p>
            
            <p><em>"Gravitace zde není rozbita - je jen přenastavena. Hledej rezonátory, 
            ne jednotlivé anomálie. - Dr. Elena N."</em></p>
            
            <p>Pod zprávou je šipka směřující k hlavnímu krystalu na obloze.</p>
        `,
        choices: [
            {
                id: 'follow_advice',
                text: 'Následovat radu Dr. Novakové',
                nextScene: 'ZONA1_KRYSTAL_ANOMALIE',
                actions: [
                    { type: 'addPhysicsFragment' },
                    { type: 'setStoryFlag', flag: 'foundNovakovaNote', value: true }
                ]
            },
            {
                id: 'look_for_more_notes',
                text: 'Hledat další poznámky',
                nextScene: 'ZONA1_POZNAMKY_PDF',
                actions: [
                    { type: 'addPhysicsFragment' }
                ]
            }
        ]
    },

    ZONA1_POZNAMKY_PDF: {
        id: 'ZONA1_POZNAMKY_PDF',
        location: 'Zóna Nestabilní Gravitace - Archiv poznámek',
        text: `
            <p>V malé jeskyni najdete improvizovaný archiv - předchozí návštěvníci 
            tu zanechali své poznámky a pozorování.</p>
            
            <p><strong>Poznámky Dr. Elena Novakova:</strong></p>
            <p><em>"Gravitační konstanta v ARFZ není konstanta! Mění se podle: 
            1) hmotnosti objektu, 2) vzdálenosti od rezonátorů, 3) času (cyklicky). 
            Klíčem je najít master rezonátor a přenastavit jeho frekvenci."</em></p>
            
            <p><strong>Poznámky Prof. Mark Thompson:</strong></p>
            <p><em>"Pamatuj na zachování energie! I když se gravitace chová podivně, 
            energie se stále zachovává. Používej to ve svůj prospěch při řešení hádanek."</em></p>
            
            <p><strong>Poznámky od dítěte - Alex (věk 12):</strong></p>
            <p><em>"Nejlepší způsob jak pochopit ARFZ je hrát si s ní! Zkoušej různé věci, 
            dělej experimenty. Fyzika je zábava, ne jen rovnice!"</em></p>
            
            <p>Tyto poznámky vám dávají cenné informace o přístupu k problémům v ARFZ.</p>
        `,
        choices: [
            {
                id: 'use_scientific_approach',
                text: 'Použít vědecký přístup Dr. Novakové',
                nextScene: 'ZONA1_KRYSTAL_ANOMALIE',
                actions: [
                    { type: 'addPhysicsFragment' },
                    { type: 'increaseUnderstanding' },
                    { type: 'setStoryFlag', flag: 'scientificApproach', value: true }
                ]
            },
            {
                id: 'try_playful_approach',
                text: 'Zkusit hravý přístup malého Alexe',
                nextScene: 'ZONA1_EXPERIMENTALNI_PRISTUP',
                actions: [
                    { type: 'addPhysicsFragment' }
                ]
            }
        ]
    },

    ZONA1_EXPERIMENTALNI_PRISTUP: {
        id: 'ZONA1_EXPERIMENTALNI_PRISTUP',
        location: 'Zóna Nestabilní Gravitace - Experimenty',
        text: `
            <p>Rozhodnete se pro hravý, experimentální přístup. Začnete zkoušet 
            různé věci s gravitačními anomáliemi.</p>
            
            <p><strong>Experiment 1:</strong> Hodíte kámen do vzduchu - vyletí nahoru a nevrátí se!</p>
            <p><strong>Experiment 2:</strong> Snažíte se skočit - poskočíte, ale gravitace vás 
            stáhne zpět normálně (jste příliš těžcí)</p>
            <p><strong>Experiment 3:</strong> Najdete peříčko - to se vznáší úplně volně!</p>
            
            <p>Při experimentování náhodou upustíte MAZ. Místo pádu však začne kroužit 
            kolem vašich nohou jako družice!</p>
            
            <p><em>Kwark se směje:</em> "Haha! Výborně! MAZ má hmotnost právě takovou, 
            že se stal tvou osobní družicí. Tohle mi ukázalo nový aspekt anomálie!"</p>
            
            <p>Díky experimentování jste objevili, že gravitační anomálie má různé 
            'zóny' podle hmotnosti objektů.</p>
        `,
        choices: [
            {
                id: 'use_discovery',
                text: 'Využít toto objevení k řešení anomálie',
                nextScene: 'ZONA1_KRYSTAL_ANOMALIE',
                actions: [
                    { type: 'addPhysicsFragment' },
                    { type: 'increaseUnderstanding' },
                    { type: 'setStoryFlag', flag: 'playfulDiscovery', value: true }
                ]
            }
        ]
    }
};