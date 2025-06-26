export const introScenes = {
    UVOD_PORTAL_AKTIVACE: {
        id: 'UVOD_PORTAL_AKTIVACE',
        location: 'Váš pokoj/laboratoř',
        text: `
            <p>Sedíte ve svém pokoji obklopen starými učebnicemi fyziky a nedokončenými projekty. 
            Za zatažených závěsů se prach vznáší v tichém vzduchu. Poslední týdny jste se nudili 
            při běžném učení - vzorce z učebnic vám připadají tak... teoretické.</p>
            
            <p>Náhle vás zaujme podivný předmět v rohu místnosti, který jste tu nikdy předtím neviděli. 
            Je pokrytý prachem a má na sobě divné runy a symboly, které nedokážete rozluštit. 
            Vypadá jako nějaký druh brány nebo portálu...</p>
            
            <p><strong>Zvědavost přemůže rozum.</strong> Přiblížíte se k artefaktu a začnete zkoumat 
            jeho povrch. Vaše prsty nechtěně narazí na skrytý mechanismus...</p>
        `,
        choices: [
            {
                id: 'touch_portal',
                text: 'Dotknout se artefaktu a zkusit ho aktivovat',
                description: 'Vaše zvědavost je silnější než opatrnost',
                nextScene: 'UVOD_AKTIVACE_PORTALU',
                actions: [
                    { type: 'setStoryFlag', flag: 'portalTouched', value: true }
                ]
            },
            {
                id: 'examine_closely',
                text: 'Nejdříve si artefakt pečlivě prohlédnout',
                description: 'Možná je lepší být opatrný',
                nextScene: 'UVOD_PROZKOUMANI_ARTEFAKTU'
            },
            {
                id: 'back_away',
                text: 'Odstoupit a zapomenout na podivný předmět',
                description: 'Někdy je lepší nechat věci být...',
                nextScene: 'UVOD_UTEK_OD_ARTEFAKTU'
            }
        ],
        hint: 'Každá volba vás povede jiným směrem příběhu. Nebojte se experimentovat!'
    },

    UVOD_PROZKOUMANI_ARTEFAKTU: {
        id: 'UVOD_PROZKOUMANI_ARTEFAKTU',
        location: 'Váš pokoj/laboratoř',
        text: `
            <p>Rozhodnete se být opatrní. Klečíte si před artefaktem a pozorně studujete jeho povrch. 
            Runy a symboly se zdají být starověké, ale přesto vám něco připomínají... 
            <em>Fyzikální rovnice?</em></p>
            
            <p>Jeden ze symbolů vypadá jako <strong>F = ma</strong>, jiný jako <strong>E = mc²</strong>. 
            Jak je to možné? Tyto rovnice objevili vědci až v posledních stoletích!</p>
            
            <p>Při pozornějším zkoumání si všimněte, že někde uprostřed artefaktu je malé 
            kuplovité tlačítko, které pulzuje slabým modrým světlem...</p>
        `,
        choices: [
            {
                id: 'press_button',
                text: 'Stisknout pulzující tlačítko',
                description: 'Fyzikální symboly vás přesvědčily - tohle musí být vědecký přístroj',
                nextScene: 'UVOD_AKTIVACE_PORTALU',
                actions: [
                    { type: 'addPhysicsFragment' },
                    { type: 'setStoryFlag', flag: 'portalExamined', value: true }
                ]
            },
            {
                id: 'study_symbols',
                text: 'Pokusit se rozluštit více symbolů',
                description: 'Možná obsahují důležité informace',
                nextScene: 'UVOD_STUDIE_SYMBOLU'
            },
            {
                id: 'leave_it',
                text: 'Je to příliš podezřelé - odejít',
                nextScene: 'UVOD_UTEK_OD_ARTEFAKTU'
            }
        ]
    },

    UVOD_STUDIE_SYMBOLU: {
        id: 'UVOD_STUDIE_SYMBOLU',
        location: 'Váš pokoj/laboratoř',
        text: `
            <p>Věnujete dlouhé minuty studiu symbolů. Postupně rozpoznáváte více fyzikálních zákonů:</p>
            
            <ul>
                <li><strong>Newtonovy zákony pohybu</strong> - ale něco je jinak...</li>
                <li><strong>Zákony termodynamiky</strong> - s podivnými dodatky</li>
                <li><strong>Gravitační rovnice</strong> - s konstantou, která má <em>záporné znaménko?</em></li>
            </ul>
            
            <p>Zdá se, že tento artefakt není jen starožitnost - je to vědecký přístroj předvídající 
            alternativní fyzikální zákony! Vědci před tisíci lety nemohli znát tyto rovnice... 
            ledaže...</p>
            
            <p><em>Ledaže tento artefakt pochází z jiného světa.</em></p>
            
            <p>Tlačítko pulzuje stále intenzivněji.</p>
        `,
        choices: [
            {
                id: 'activate_with_knowledge',
                text: 'Aktivovat portál s vědomím, co může následovat',
                description: 'Jste připraveni na alternativní fyziku',
                nextScene: 'UVOD_AKTIVACE_PORTALU',
                actions: [
                    { type: 'addPhysicsFragment' },
                    { type: 'addPhysicsFragment' },
                    { type: 'setStoryFlag', flag: 'symbolsStudied', value: true },
                    { type: 'increaseUnderstanding' }
                ]
            },
            {
                id: 'document_first',
                text: 'Nejdříve si symboly pečlivě zakreslit',
                description: 'Vědecký přístup - důkazy jsou důležité',
                nextScene: 'UVOD_DOKUMENTACE'
            }
        ]
    },

    UVOD_DOKUMENTACE: {
        id: 'UVOD_DOKUMENTACE',
        location: 'Váš pokoj/laboratoř',
        text: `
            <p>Rozhodnete se postupovat vědecky. Vezměte si notebook a začnete pečlivě 
            zakreslovat všechny symboly a rovnice. Trvá to téměř hodinu, ale máte 
            kompletní dokumentaci artefaktu.</p>
            
            <p>Když končíte s posledním symbolem, artefakt náhle začne silněji pulzovat. 
            <strong>Jako by reagoval na vaši pozornost!</strong></p>
            
            <p>Vaše poznámky se náhle rozžhaví stejným modrým světlem jako artefakt. 
            Text v notebooku se mění - původní rovnice se transformují před vašima očima!</p>
            
            <p>Pochopíte, že artefakt se aktivuje sám... možná jste jeho pozorováním 
            spustili nějaký kvantový jev?</p>
        `,
        choices: [
            {
                id: 'embrace_science',
                text: 'Přijmout vědecké dobrodružství',
                description: 'Tohle je přesně to, co jste hledali!',
                nextScene: 'UVOD_AKTIVACE_PORTALU',
                actions: [
                    { type: 'addPhysicsFragment' },
                    { type: 'addPhysicsFragment' },
                    { type: 'addPhysicsFragment' },
                    { type: 'increaseUnderstanding' },
                    { type: 'setStoryFlag', flag: 'scientificApproach', value: true }
                ]
            }
        ]
    },

    UVOD_UTEK_OD_ARTEFAKTU: {
        id: 'UVOD_UTEK_OD_ARTEFAKTU',
        location: 'Váš pokoj/laboratoř',
        text: `
            <p>Rozhodnete se být opatrní a odstoupit od podivného artefaktu. 
            Něco na něm není v pořádku a nechcete riskovat.</p>
            
            <p>Odcházíte k oknu a snažíte se zapomenout na celou věc. Venku je krásný den, 
            možná byste měli jít ven místo zírání na podivné předměty...</p>
            
            <p>Ale když se otočíte směrem ke dveřím, zjistíte, že artefakt začal pulzovat 
            sám od sebe! Modré světlo se stupňuje a celý pokoj se začína třást.</p>
            
            <p><strong>Někdy prostě nemůžete uniknout osudu.</strong></p>
            
            <p>Před tím, než stačíte reagovat, vás do sebe artefakt...</p>
        `,
        choices: [
            {
                id: 'pulled_in',
                text: 'Nelze se tomu vyhnout - být vtažen do portálu',
                nextScene: 'UVOD_AKTIVACE_PORTALU',
                actions: [
                    { type: 'setStoryFlag', flag: 'forcedEntry', value: true }
                ]
            }
        ]
    },

    UVOD_AKTIVACE_PORTALU: {
        id: 'UVOD_AKTIVACE_PORTALU',
        location: 'Portálový přechod',
        text: `
            <p><strong>PULS!</strong></p>
            
            <p>Modré světlo zaleje celou místnost. Předměty na stole se začnou vznášet ve vzduchu, 
            knihy se otevírají a jejich stránky vlají jako v silném větru - ale žádný vzduch necítíte.</p>
            
            <p><em>Gravitace se zřejmě rozhodla vzít si pauzu.</em></p>
            
            <p>Před tím, než stačíte cokoliv udělat, vás obklopí víř barev a zvuků. 
            Cítíte se, jako byste byli vtaženi do obrovského kaleidoskopu, kde se fyzikální 
            zákony rozhodly hrát si na schovávanou.</p>
            
            <p>Vaše poslední vědomá myšlenka je: <em>"Tohle rozhodně nebylo v učebnici fyziky..."</em></p>
            
            <p><strong>A pak... tma.</strong></p>
        `,
        choices: [
            {
                id: 'wake_up',
                text: 'Probouzíte se...',
                nextScene: 'ARFZ_PROBUZENI',
                actions: [
                    { type: 'setStoryFlag', flag: 'enteredARFZ', value: true },
                    { type: 'addToInventory', item: 'MAZ' }
                ]
            }
        ]
    },

    ARFZ_PROBUZENI: {
        id: 'ARFZ_PROBUZENI',
        location: 'Alternativní Realita Fyzikálních Zákonů (ARFZ) - Vstupní bod',
        text: `
            <p>Pomalu otvíráte oči a zjišťujete, že ležíte na čem-si, co vypadá jako tráva... 
            ale tráva je <strong>fialová</strong> a roste směrem dolů od vašich nohou.</p>
            
            <p>Zvedáte hlavu a rozhlížíte se kolem. Obloha má barvu jako když smícháte 
            oranžovou s růžovou, a místo jednoho slunce na nebi visí <em>tři měsíce</em> 
            různých velikostí.</p>
            
            <p>V kapse cítíte něco, co tam předtím nebylo. Vytahujete malé zařízení 
            s displejem - na něm bliká text: <strong>"MAZ - Multifunkční Analytický Záznamník 
            - AKTIVOVÁN"</strong></p>
            
            <p>Náhle se na displeji objeví obličej starého muže s divokými vlasy:</p>
            
            <p><em>"Ahá! Nový student! Vítej v Alternativní Realitě Fyzikálních Zákonů! 
            Jsem profesor Kwark a stal jsem se tvým průvodcem. Tohle místo je... no... 
            řekněme, že fyzika zde má své vlastní nápady!"</em></p>
        `,
        choices: [
            {
                id: 'ask_kwark',
                text: 'Zeptat se profesora Kwarka, kde to jsem',
                description: 'Potřebujete odpovědi',
                nextScene: 'KWARK_UVOD',
                actions: [
                    { type: 'setStoryFlag', flag: 'metKwark', value: true }
                ]
            },
            {
                id: 'explore_surroundings',
                text: 'Nejdříve se rozhlédnout kolem sebe',
                description: 'Chcete porozumět novému prostředí',
                nextScene: 'ARFZ_PROZKOUMANI',
                actions: [
                    { type: 'addPhysicsFragment' }
                ]
            },
            {
                id: 'try_to_return',
                text: 'Pokusit se najít cestu zpět domů',
                description: 'Tohle místo vás děsí',
                nextScene: 'ARFZ_HLEDANI_CESTY'
            }
        ]
    },

    ARFZ_PROZKOUMANI: {
        id: 'ARFZ_PROZKOUMANI',
        location: 'ARFZ - Vstupní bod - Okolní průzkum',
        text: `
            <p>Rozhodnete se nejdříve rozhlédnout kolem sebe a lépe pochopit toto podivné místo.</p>
            
            <p>Země pod nohama je skutečně zvláštní - půda má konzistenci jako normální hlína, 
            ale má fialový odstín a občas z ní vylétnou malé jiskřičky. Když se k nim přiblížíte, 
            zdají se být miniaturní blesky statické elektřiny.</p>
            
            <p>Na obloze kromě tří měsíců vidíte také dzivné formace, které připomínají 
            <strong>aurora borealis</strong>, ale místo zelené barvy svítí oranžově a růžově. 
            Jejich pohyb není náhodný - zdá se, že následují nějaký matematický vzorec.</p>
            
            <p>V dálce vidíte několik oblastí s různými "atmosférami":</p>
            <ul>
                <li>Oblast vlevo, kde věci <em>padají nahoru</em></li>
                <li>Oblast vpravo, kde vzduch <em>třpytí teplem</em></li>
                <li>Oblast přímo před vámi, kde se <em>světlo láme podivně</em></li>
            </ul>
            
            <p>MAZ pípá a ukazuje: <em>"Detekováno: Více fyzikálních anomálií. Doporučuji systematický přístup."</em></p>
        `,
        choices: [
            {
                id: 'talk_to_kwark_now',
                text: 'Promluvit si s profesorem Kwarkem',
                description: 'Potřebujete expertní radu',
                nextScene: 'KWARK_UVOD',
                actions: [
                    { type: 'addPhysicsFragment' },
                    { type: 'setStoryFlag', flag: 'exploredFirst', value: true }
                ]
            },
            {
                id: 'approach_gravity_zone',
                text: 'Jít směrem k oblasti s obrácenovu gravitací',
                description: 'Začít s gravitační anomálií',
                nextScene: 'ZONA1_UVOD'
            },
            {
                id: 'stay_and_observe',
                text: 'Zůstat a pozorovat okolí déle',
                description: 'Vědecký přístup - nejdříve pozorovat',
                nextScene: 'ARFZ_DETAILNI_POZOROVANJE',
                actions: [
                    { type: 'addPhysicsFragment' },
                    { type: 'increaseUnderstanding' }
                ]
            }
        ]
    },

    ARFZ_DETAILNI_POZOROVANJE: {
        id: 'ARFZ_DETAILNI_POZOROVANJE',
        location: 'ARFZ - Vstupní bod - Detailní studium',
        text: `
            <p>Rozhodnete se věnovat více času pozorování. Vytáhnete MAZ a začnete systematicky zaznamenávat anomálie:</p>
            
            <p><strong>Pozorování atmosférických jevů:</strong></p>
            <ul>
                <li>Aurora se pohybuje podle sinusové křivky</li>
                <li>Měsíce na obloze nerespektují gravitační zákony</li>
                <li>Vzduch má jinou hustotu - dýchá se snadněji</li>
            </ul>
            
            <p><strong>Pozorování půdy:</strong></p>
            <ul>
                <li>Elektrická aktivita: ~0.3V na centimetr</li>
                <li>Magnetické pole: nestabilní, 0.1-2.5 Tesla</li>
                <li>Teplota: kolísá mezi 15-25°C bez zjevného důvodu</li>
            </ul>
            
            <p>MAZ automaticky analyzuje: <em>"Fascinující! Toto místo porušuje nejméně 15 známých fyzikálních zákonů současně. 
            Doporučuji začít se základními silami - gravitací, elektromagnetismem, teplem."</em></p>
            
            <p>Váš vědecký přístup vás již něco naučil o této podivné realitě!</p>
        `,
        choices: [
            {
                id: 'start_with_gravity',
                text: 'Začít studiem gravitace',
                description: 'Nejzákladnější síla',
                nextScene: 'ZONA1_UVOD',
                actions: [
                    { type: 'addPhysicsFragment' },
                    { type: 'setStoryFlag', flag: 'scientificObserver', value: true }
                ]
            },
            {
                id: 'consult_kwark_first',
                text: 'Nejdříve se poradit s profesorem Kwarkem',
                nextScene: 'KWARK_UVOD',
                actions: [
                    { type: 'addPhysicsFragment' }
                ]
            }
        ]
    },

    ARFZ_HLEDANI_CESTY: {
        id: 'ARFZ_HLEDANI_CESTY',
        location: 'ARFZ - Hledání východu',
        text: `
            <p>Panika se vás zmocňuje a rozhodnete se najít cestu zpět domů co nejrychleji. 
            Otočíte se a snažíte se najít portál, kterým jste sem přišli.</p>
            
            <p>Ale za vámi není nic! Žádný portál, žádná brána - jen prázdná krajina 
            s fialovou trávou se táhne k horizontu.</p>
            
            <p><em>"Pomoč! POMOČ!"</em> křičíte, ale vaše volání se ztrácí v tichém vzduchu.</p>
            
            <p>MAZ na vašem opasku začne blikat červeně a ozývá se mechanický hlas:</p>
            
            <p><strong>"UPOZORNĚNÍ: Portál se automaticky uzavřel po 3.7 sekundách. 
            Návrat domů vyžaduje získání energetických jader ze všech zón ARFZ. 
            Běžet pryč problém nevyřeší."</strong></p>
            
            <p>Uvědomíte si, že jediná cesta vpřed je... vpřed. Není cesty zpět 
            bez pochopení a vyřešení anomálií tohoto světa.</p>
        `,
        choices: [
            {
                id: 'accept_situation',
                text: 'Přijmout situaci a zeptat se MAZ na radu',
                description: 'Logický přístup k problému',
                nextScene: 'KWARK_UVOD',
                actions: [
                    { type: 'setStoryFlag', flag: 'acceptedFate', value: true }
                ]
            },
            {
                id: 'keep_searching',
                text: 'Pokračovat v hledání portálu',
                description: 'Nevzdávat se tak snadno',
                nextScene: 'ARFZ_MARNY_HLEDANI'
            }
        ]
    },

    ARFZ_MARNY_HLEDANI: {
        id: 'ARFZ_MARNY_HLEDANI',
        location: 'ARFZ - Marné hledání',
        text: `
            <p>Strávíte další půl hodiny prohledáváním okolí, ale nenajdete absolutně nic, 
            co by připomínalo portál nebo cestu domů.</p>
            
            <p>Během hledání narazíte na pár zvláštních věcí:</p>
            <ul>
                <li>Kámen, který se vznáší ve vzduchu a odmítá spadnout</li>
                <li>Loužičku vody, která teče <em>do kopce</em></li>
                <li>Strom, jehož listí svítí vlastním světlem</li>
            </ul>
            
            <p>Je jasné, že tohle místo funguje podle vlastních pravidel. 
            Professor Kwark na MAZ se konečně odmlčí a řekne:</p>
            
            <p><em>"Vidím, že jsi pochopil. Nelze uprchnou před fyzikou - ani před alternativní fyzikou. 
            Jedinou cestou vpřed je porozumění. Jsi připraven se učit?"</em></p>
        `,
        choices: [
            {
                id: 'ready_to_learn',
                text: 'Ano, jsem připraven se učit',
                nextScene: 'KWARK_UVOD',
                actions: [
                    { type: 'setStoryFlag', flag: 'reluctantlyAccepted', value: true },
                    { type: 'addPhysicsFragment' }
                ]
            }
        ]
    }
};