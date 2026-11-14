import { Language } from '@/context/LanguageContext';

export interface FAQItem {
  question: string;
  answer: string;
}

export const faqData: Record<string, Record<Language, FAQItem[]>> = {
  "lazer-bolumu": {
    "tr": [
      {
        "question": "CNC Lazer kesimde maksimum sac kalınlığı ve işleme ebadı nedir?",
        "answer": "CNC fiber lazer kesim parkurumuzda 2000 x 4000 mm çift tabla otomasyonu ile siyah sacda 25 mm, paslanmaz çelikte (Inox) 20 mm ve alüminyum alaşımlarında 15 mm kalınlığa kadar yüksek hassasiyetli kesim yapılabilmektedir."
      },
      {
        "question": "Lazer kesimde hangi koruyucu gazlar kullanılır ve kenar kalitesi nasıldır?",
        "answer": "Paslanmaz çelik ve alüminyum kesimlerinde oksitsiz, çapaksız ve doğrudan boyaya/kaynağa hazır yüzey kalitesi için yüksek saflıkta azot gazı (N2); kalın karbon çeliklerinde ise yüksek kesim hızı ve derinlik için oksijen gazı (O2) kullanılmaktadır."
      },
      {
        "question": "Lazer kesim parçalarında tolerans hassasiyeti nedir?",
        "answer": "Fiber optik rezonatör ve lineer motor sürücü altyapımız sayesinde pozisyonlama hassasiyeti ±0.03 mm, genel kesim boyutsal toleransı ise ±0.05 mm sınırları içinde kalarak otomotiv ve savunma sanayi standartlarını eksiksiz karşılar."
      }
    ],
    "en": [
      {
        "question": "What is the maximum sheet thickness and cutting dimension in CNC laser cutting?",
        "answer": "Our CNC fiber laser cutting park features a 2000 x 4000 mm dual shuttle table handling up to 25 mm mild steel, 20 mm stainless steel (Inox), and 15 mm aluminum alloys with exceptional accuracy."
      },
      {
        "question": "Which assist gases are used and what is the resulting edge quality?",
        "answer": "High-purity Nitrogen (N2) is utilized for stainless steel and aluminum to achieve oxide-free, burr-free edges ready for immediate welding or coating; Oxygen (O2) assist is deployed for thicker carbon steels."
      },
      {
        "question": "What dimensional tolerances are achieved in laser-cut parts?",
        "answer": "With direct optical linear drives and advanced CNC controllers, positioning repeatability is within ±0.03 mm and overall cutting dimensional tolerance is held strictly within ±0.05 mm."
      }
    ],
    "de": [
      {
        "question": "Was sind die maximalen Blechdicken und Arbeitsmaße beim CNC-Laserschneiden?",
        "answer": "Unsere CNC-Faserlaseranlagen mit 2000 x 4000 mm Wechseltisch bearbeiten Baustahl bis 25 mm, Edelstahl bis 20 mm und Aluminiumlegierungen bis 15 mm mit höchster Schnittpräzision."
      },
      {
        "question": "Welche Schneidgase werden eingesetzt und wie ist die Kantenqualität?",
        "answer": "Für Edelstahl und Aluminium verwenden wir hochreinen Stickstoff (N2) für oxid- und gratfreie Schnittkanten; für dickwandigen Kohlenstoffstahl kommt Sauerstoff (O2) zum Einsatz."
      },
      {
        "question": "Welche Schnitttoleranzen werden garantiert?",
        "answer": "Dank moderner Linearantriebe und Faseroptik liegt die Positioniergenauigkeit bei ±0,03 mm und die Bauteiltoleranz innerhalb von ±0,05 mm."
      }
    ],
    "fr": [
      {
        "question": "Quelles sont les dimensions et épaisseurs maximales en découpe laser CNC ?",
        "answer": "Notre parc de découpe laser fibre CNC avec double table 2000 x 4000 mm traite l'acier carbone jusqu'à 25 mm, l'acier inoxydable jusqu'à 20 mm et l'aluminium jusqu'à 15 mm."
      },
      {
        "question": "Quels gaz d'assistance sont utilisés et quelle est la qualité de coupe ?",
        "answer": "L'azote haute pureté (N2) est utilisé pour l'inox et l'aluminium garantissant des arêtes sans bavure ni oxydation; l'oxygène (O2) est utilisé pour les fortes épaisseurs d'acier."
      },
      {
        "question": "Quelles sont les tolérances dimensionnelles obtenues ?",
        "answer": "Grâce aux moteurs linéaires et commandes CNC de pointe, la précision de positionnement est de ±0,03 mm et la tolérance dimensionnelle globale est de ±0,05 mm."
      }
    ]
  },
  "abkant-pres": {
    "tr": [
      {
        "question": "CNC abkant bükümde maksimum tonaj ve büküm boyu kapasiteniz nedir?",
        "answer": "Parkurumuzda 320 ton baskı gücü ve 4000 mm büküm boyuna sahip 7 eksenli CNC abkant presler yer almakta olup, ince saclardan kalın zırh plakalarına kadar geniş bir skalada büküm gerçekleştirilmektedir."
      },
      {
        "question": "Yüksek mukavemetli zırh çelikleri (Hardox, Armox) bükülebiliyor mu?",
        "answer": "Evet, hidrolik dinamik bombeleme (crowning) ve özel açılı sertleştirilmiş takım setlerimiz sayesinde Hardox 450/500 ve Armox 500T sınıfı yüksek mukavemetli zırh sacları çatlama olmaksızın hassas açıyla bükülmektedir."
      },
      {
        "question": "Büküm açısı ve boyutsal toleranslar nasıl denetlenir?",
        "answer": "Lazerli otomatik açı ölçüm sensörleri ve CNC geri dayama sistemleri sayesinde büküm açısı ±0.5° ve eksenel büküm toleransı ±0.1 mm sınırları içerisinde hassasiyetle kontrol edilmektedir."
      }
    ],
    "en": [
      {
        "question": "What is your maximum tonnage and bending length capacity in CNC press brakes?",
        "answer": "Our facility operates 7-axis CNC press brakes with up to 320 tons pressing capacity and 4000 mm bending length, capable of forming both thin sheet metals and heavy structural plates."
      },
      {
        "question": "Can high-strength armor and wear steels (Hardox, Armox) be bent?",
        "answer": "Yes, equipped with dynamic hydraulic crowning systems and specialized hardened tooling, we bend high-yield steels such as Hardox 450/500 and Armox 500T without micro-cracking."
      },
      {
        "question": "How are bending angles and dimensional tolerances verified?",
        "answer": "Real-time laser angle measurement sensors and multi-axis CNC backgauges ensure angular precision within ±0.5° and linear repeatability within ±0.1 mm."
      }
    ],
    "de": [
      {
        "question": "Welche maximale Tonnage und Biegelänge bieten Ihre CNC-Gesenkbiegepressen?",
        "answer": "Wir verfügen über 7-Achs-CNC-Abkantpressen mit bis zu 320 Tonnen Presskraft und 4000 mm Biegelänge für Feinbleche bis hin zu schweren Strukturblechen."
      },
      {
        "question": "Können hochfeste Panzer- und Verschleißstähle (Hardox, Armox) gebogen werden?",
        "answer": "Ja, mit dynamischer hydraulischer Bombierung und gehärteten Spezialwerkzeugen biegen wir Hardox 450/500 und Armox 500T prozesssicher und rissfrei."
      },
      {
        "question": "Wie werden Biegewinkel und Toleranzen kontrolliert?",
        "answer": "Lasergestützte Echtzeit-Winkelmesssysteme und CNC-Hinteranschläge garantieren Winkelgenauigkeiten von ±0,5° und Maßtoleranzen von ±0,1 mm."
      }
    ],
    "fr": [
      {
        "question": "Quelles sont les capacités de tonnage et de longueur de pliage en presse plieuse CNC ?",
        "answer": "Nous disposons de presses plieuses CNC 7 axes jusqu'à 320 tonnes de poussée et 4000 mm de longueur utile pour tôles fines et fortes épaisseurs."
      },
      {
        "question": "Pouvez-vous plier des aciers blindés et anti-abrasion (Hardox, Armox) ?",
        "answer": "Oui, grâce au bombage hydraulique dynamique et à un outillage trempé adapté, nous formons les aciers Hardox 450/500 et Armox 500T sans fissuration."
      },
      {
        "question": "Comment la précision angulaire et les tolérances sont-elles garanties ?",
        "answer": "Des contrôleurs d'angle laser en temps réel et des butées CNC multi-axes assurent une précision angulaire de ±0,5° et dimensionnelle de ±0,1 mm."
      }
    ]
  },
  "eksantrik-pres-bolumu": {
    "tr": [
      {
        "question": "Eksantrik pres parkurunuzun tonaj aralığı ve vuruş kapasitesi nedir?",
        "answer": "Parkurumuzda 30 tondan 300 tona kadar C tipi ve H tipi eksantrik presler yer almaktadır. Dakikada 25 ila 90 vuruş hızıyla yüksek serili sac kesme, form verme ve delme işlemleri gerçekleştirilir."
      },
      {
        "question": "Progresif kalıplı seri sac şekillendirme ve rulo besleme mevcut mu?",
        "answer": "Evet, otomatik rulo açıcı, doğrultucu ve servo sürücü hatlarımızla progresif kalıplarda kesintisiz ve yüksek tekrarlanabilirlikte seri üretim yapılmaktadır."
      },
      {
        "question": "Seri üretimde parça kalite kontrolü ve kalıp güvenliği nasıl sağlanır?",
        "answer": "Preslerimizde hidrolik aşırı yük emniyeti (overload), optik güvenlik bariyerleri ve kalıp içi parça algılama sensörleri ile IATF 16949 kalite şartlarına uygun sıfır hata prensibi uygulanır."
      }
    ],
    "en": [
      {
        "question": "What is the tonnage range and stroke capacity of your eccentric press fleet?",
        "answer": "Our press fleet features C-frame and H-frame mechanical eccentric presses from 30 to 300 tons, operating at 25 to 90 strokes per minute for high-volume blanking, piercing, and stamping."
      },
      {
        "question": "Do you support progressive die stamping with automated coil feeding?",
        "answer": "Yes, our integrated automated decoiler, straightener, and servo feed lines enable continuous, highly repeatable progressive die production."
      },
      {
        "question": "How are quality control and die safety managed in serial production?",
        "answer": "Presses are equipped with hydraulic overload protection, optical light curtains, and in-die sensors conforming to IATF 16949 zero-defect automotive requirements."
      }
    ],
    "de": [
      {
        "question": "Welche Tonnagen und Hubzahlen bieten Ihre Exzenterpressen?",
        "answer": "Unser Maschinenpark umfasst C- und H-Gestell-Exzenterpressen von 30 bis 300 Tonnen mit 25 bis 90 Hüben pro Minute für Serienstanzen und Umformen."
      },
      {
        "question": "Unterstützen Sie Folgeverbundwerkzeuge mit automatischem Bandvorschub?",
        "answer": "Ja, automatische Abwickelhaspeln, Richtmaschinen und Servovorschübe ermöglichen eine kontinuierliche und präzise Serienfertigung mit Folgeverbundwerkzeugen."
      },
      {
        "question": "Wie wird die Qualitätssicherung und Werkzeugsicherheit gewährleistet?",
        "answer": "Hydraulische Überlastsicherungen, Lichtschranken und Werkzeugüberwachungssensoren sichern die Null-Fehler-Produktion nach IATF 16949."
      }
    ],
    "fr": [
      {
        "question": "Quelle est la plage de tonnage et la cadence de vos presses mécaniques excentriques ?",
        "answer": "Notre parc comprend des presses excentriques à col de cygne et à arcade de 30 à 300 tonnes, avec des cadences de 25 à 90 coups/minute pour l'emboutissage grande série."
      },
      {
        "question": "Proposez-vous le découpage-emboutissage sur outils progressifs avec alimentation en bande ?",
        "answer": "Oui, nos lignes avec dévidoir automatique, redresseur et ameneur numérique permettent une production continue sur outils progressifs."
      },
      {
        "question": "Comment garantissez-vous la sécurité de l'outillage et le contrôle qualité ?",
        "answer": "Sécurité hydraulique contre les surcharges, barrières immatérielles et capteurs de détection d'engagement garantissent la conformité IATF 16949."
      }
    ]
  },
  "hidrolik-pres-bolumu": {
    "tr": [
      {
        "question": "Hidrolik pres bölümünde derin çekme ve kalıplama kapasiteniz nedir?",
        "answer": "Bölümümüzde 1000 ton ana baskı ve 300 ton hidrolik alt yastık (çift etkili derin çekme) kapasitesine sahip presler yer almakta olup, 2500 x 1800 mm tabla ebadında kalın sac derin çekme yapılabilmektedir."
      },
      {
        "question": "Hidrolik preslerde hangi tür gövde ve şasi parçaları üretilir?",
        "answer": "Savunma sanayi zırhlı araç taban plakaları, şasi traversleri, yakıt depoları, otomotiv gövde yapısal panelleri ve ağır iş makinesi bağlantı braketleri üretilmektedir."
      },
      {
        "question": "Presleme prosesinde basınç ve hız profili nasıl kontrol edilir?",
        "answer": "Oransal valf teknolojisi ve PLC dokunmatik arayüzleri ile baskı hızı, kademeli tonaj artışı ve sac tutucu basıncı mikron hassasiyetinde programlanarak yırtılma ve potlaşma önlenir."
      }
    ],
    "en": [
      {
        "question": "What is your deep drawing and forming capacity in the hydraulic press division?",
        "answer": "Our division features up to 1000-ton main pressing and 300-ton hydraulic cushion (double action deep drawing) with 2500 x 1800 mm bolster dimensions for heavy gauge forming."
      },
      {
        "question": "What types of body and chassis components are produced on hydraulic presses?",
        "answer": "We produce armored vehicle belly plates, chassis crossmembers, fuel tanks, automotive structural panels, and heavy construction equipment bracket assemblies."
      },
      {
        "question": "How are pressure and velocity profiles controlled during deep drawing?",
        "answer": "Proportional hydraulic valving and PLC controls precisely regulate forming speed and blank holder tonnage across multi-stage stroke curves to eliminate wrinkling and tearing."
      }
    ],
    "de": [
      {
        "question": "Welche Tiefzieh- und Presskapazitäten bietet Ihre hydraulische Pressenabteilung?",
        "answer": "Mit bis zu 1000 Tonnen Hauptpresskraft und 300 Tonnen Ziehkissen (doppeltwirkend) auf 2500 x 1800 mm Tischfläche fertigen wir schwere Tiefziehteile."
      },
      {
        "question": "Welche Komponenten werden auf den hydraulischen Pressen hergestellt?",
        "answer": "Panzerplatten für Militärfahrzeuge, Fahrgestellquerträger, Kraftstofftanks und hochbelastbare Halterungen für Baumaschinen."
      },
      {
        "question": "Wie werden Druck- und Geschwindigkeitsprofile geregelt?",
        "answer": "Proportionalventiltechnik und PLC-Steuerung ermöglichen eine präzise Anpassung der Ziehkraft und Ziehkissendrücke zur Vermeidung von Rissen und Falten."
      }
    ],
    "fr": [
      {
        "question": "Quelles sont vos capacités d'emboutissage profond sur presses hydrauliques ?",
        "answer": "Nous disposons d'une presse double effet jusqu'à 1000 tonnes avec coussin hydraulique de 300 tonnes et table de 2500 x 1800 mm pour l'emboutissage de fortes épaisseurs."
      },
      {
        "question": "Quelles pièces de châssis et structurelles y sont fabriquées ?",
        "answer": "Planchers de véhicules blindés de défense, traverses de châssis, réservoirs et supports renforcés pour engins de travaux publics."
      },
      {
        "question": "Comment contrôlez-vous le profil d'effort et de vitesse ?",
        "answer": "La servorégulation hydraulique proportionnelle et le pilotage automate optimisent l'effort de serre-flan et préviennent les risques de déchirure."
      }
    ]
  },
  "cnc-bolumu": {
    "tr": [
      {
        "question": "CNC talaşlı imalat bölümünde eksen kabiliyeti ve işleme zarfı nedir?",
        "answer": "3, 4 ve 5 eksenli CNC dik işleme merkezleri ve C eksenli, tahrikli takımlı CNC tornalarımızla X: 1600 mm, Y: 800 mm, Z: 750 mm işleme hacminde karmaşık parçalar tek bağlamada işlenmektedir."
      },
      {
        "question": "Ulaşılan pozisyonlama ve yüzey pürüzlülüğü toleransları nelerdir?",
        "answer": "Lineer cetvel geri beslemeli CNC tezgahlarımızda tekrarlanabilirlik ±0.005 mm, işleme toleransı ±0.01 mm ve yüzey pürüzlülüğü Ra 0.4 µm seviyesine kadar hassasiyetle kontrol edilir."
      },
      {
        "question": "Hangi sertlikteki malzemeler ve alaşımlar işlenebilmektedir?",
        "answer": "Dövme çelikler, paslanmaz alaşımlar, titanyum, 60 HRC'ye kadar ıslah edilmiş ve sertleştirilmiş kalıp çelikleri ile yüksek mukavemetli havacılık alüminyumları (7075-T6) işlenmektedir."
      }
    ],
    "en": [
      {
        "question": "What axis capabilities and working envelopes do your CNC machining centers offer?",
        "answer": "With 3, 4, and 5-axis vertical machining centers and live-tooled C-axis CNC lathes, we machine parts up to X: 1600 mm, Y: 800 mm, Z: 750 mm in single setups."
      },
      {
        "question": "What positioning repeatability and surface roughness are achievable?",
        "answer": "Utilizing optical linear encoders, we achieve ±0.005 mm repeatability, ±0.01 mm dimensional tolerance, and surface finishes down to Ra 0.4 µm."
      },
      {
        "question": "What material hardnesses and aerospace-grade alloys can be machined?",
        "answer": "We machine forged carbon steels, stainless grades, titanium, hardened tool steels up to 60 HRC, and aerospace aluminum alloys (e.g. 7075-T6)."
      }
    ],
    "de": [
      {
        "question": "Welche Achsen und Verfahrwege bieten Ihre CNC-Bearbeitungszentren?",
        "answer": "Unsere 3-, 4- und 5-Achs-BAZ sowie angetriebene CNC-Drehzentren decken Verfahrwege bis X: 1600 mm, Y: 800 mm, Z: 750 mm ab."
      },
      {
        "question": "Welche Maßhaltigkeit und Oberflächengüten werden erreicht?",
        "answer": "Mit optischen Glasmaßstäben erreichen wir Wiederholgenauigkeiten von ±0,005 mm, Bauteiltoleranzen von ±0,01 mm und Rauheiten bis Ra 0,4 µm."
      },
      {
        "question": "Welche Werkstoffe und Härten können zerspant werden?",
        "answer": "Schmiedestähle, Edelstähle, Titan, gehärtete Werkzeugstähle bis 60 HRC sowie Luftfahrtaluminium (z.B. 7075-T6)."
      }
    ],
    "fr": [
      {
        "question": "Quelles sont les capacités d'axes et de courses en usinage CNC ?",
        "answer": "Nos centres d'usinage 3, 4 et 5 axes et tours CNC avec outils motorisés offrent des courses jusqu'à X: 1600 mm, Y: 800 mm, Z: 750 mm en reprise unique."
      },
      {
        "question": "Quelles précisions géométriques et rugosités de surface atteignez-vous ?",
        "answer": "Grâce aux règles de mesure optiques, nous garantissons une répétabilité de ±0,005 mm, une tolérance de ±0,01 mm et un état de surface jusqu'à Ra 0,4 µm."
      },
      {
        "question": "Quelles duretés et nuances d'alliages pouvez-vous usiner ?",
        "answer": "Aciers forgés, inoxydables, titane, aciers à outils trempés jusqu'à 60 HRC et alliages d'aluminium aéronautique (7075-T6)."
      }
    ]
  },
  "robot-kaynak-bolumu": {
    "tr": [
      {
        "question": "Robot kaynak hücrelerinde hangi kaynak yöntemleri ve pozisyonerler kullanılır?",
        "answer": "Hücrelerimizde Fanuc ve ABB 6 eksenli endüstriyel robotlar, çift istasyonlu H-tipi servo pozisyonerler ve synergic darbeli (pulse) GMAW/FCAW kaynak güç üniteleri entegre şekilde çalışmaktadır."
      },
      {
        "question": "Robotik kaynakta hangi kalite sertifikasyonları ve standartlar uygulanır?",
        "answer": "Kaynaklı imalatlarımız uluslararası ISO 3834-2 Kapsamlı Kalite Şartları standardına ve otomotiv IATF 16949 gerekliliklerine göre sertifikalandırılmış kaynak prosedür şartnameleri (WPS/PQR) ile yürütülür."
      },
      {
        "question": "Kaynak dikişlerinin penetrasyon ve dayanım doğrulaması nasıl yapılır?",
        "answer": "Periyodik makro dağlama testleri, optik penetrasyon derinliği analizleri ve Seviye II sertifikalı uzmanlarımızca Manyetik Parçacık (MT) ve Penetrant (PT) tahribatsız muayeneleri uygulanır."
      }
    ],
    "en": [
      {
        "question": "What welding methods and positioning hardware are utilized in robotic cells?",
        "answer": "Cells feature 6-axis Fanuc and ABB industrial robots coupled with dual-station servo positioners and synergic pulsed GMAW/FCAW power sources."
      },
      {
        "question": "Which international certifications govern your robotic welding operations?",
        "answer": "Our robotic welding conforms strictly to ISO 3834-2 Comprehensive Quality Requirements and IATF 16949 with fully qualified WPS and PQR records."
      },
      {
        "question": "How are weld penetration and mechanical integrity verified?",
        "answer": "Through systematic macro-etch examination, weld throat penetration testing, and Level II certified Non-Destructive Testing (MT and PT)."
      }
    ],
    "de": [
      {
        "question": "Welche Roboter und Schweißverfahren kommen in den Schweißzellen zum Einsatz?",
        "answer": "Eingesetzt werden 6-Achs-Roboter von Fanuc und ABB mit 2-Stationen-Servodrehtischen und impulsgesteuerten GMAW/FCAW-Schweißstromquellen."
      },
      {
        "question": "Welche Zertifizierungen gelten für das Roboterschweißen?",
        "answer": "Die Fertigung ist zertifiziert nach ISO 3834-2 (Umfassende Qualitätsanforderungen) und IATF 16949 mit qualifizierten Schweißanweisungen (WPS/WPQR)."
      },
      {
        "question": "Wie werden Einbrand und Schweißnahtfestigkeit geprüft?",
        "answer": "Mittels Makroschliffuntersuchungen sowie zerstörungsfreien Prüfverfahren (MT/PT) durch zertifizierte Prüfer der Stufe II."
      }
    ],
    "fr": [
      {
        "question": "Quels équipements et procédés équipent vos cellules robotisées de soudage ?",
        "answer": "Nos cellules intègrent des robots 6 axes Fanuc et ABB, des positionneurs double station asservis et des générateurs MIG/MAG pulsés synergiques."
      },
      {
        "question": "Quelles normes et certifications régissent vos soudures robotisées ?",
        "answer": "Nos opérations sont certifiées ISO 3834-2 (exigences de qualité complètes) et IATF 16949 avec DMOS et QMOS qualifiés."
      },
      {
        "question": "Comment la pénétration et la tenue mécanique sont-elles validées ?",
        "answer": "Par macrographies d'attaque acide régulières et contrôles non destructifs (magnétoscopie et ressuage) par inspecteurs niveau II."
      }
    ]
  },
  "kaynak-bolumu": {
    "tr": [
      {
        "question": "Manuel ve yarı otomatik kaynak personelinizin yetkinliği nedir?",
        "answer": "Tüm kaynak operatörlerimiz EN ISO 9606-1 uluslararası kaynakçı yeterlilik sertifikasına sahiptir ve imalatlarımız IWE (Uluslararası Kaynak Mühendisi) denetiminde gerçekleştirilir."
      },
      {
        "question": "Hangi kaynak yöntemleri (MIG/MAG, TIG, Punta vb.) uygulanabilmektedir?",
        "answer": "MIG/MAG (gazaltı), TIG (argon), direnç punta kaynağı, saplama (stud) kaynağı ve özel alaşımlı zırh çeliği birleştirme yöntemleri uygulanmaktadır."
      },
      {
        "question": "Kaynaklı montajlarda parça çarpılmaları (distorsiyon) nasıl önlenir?",
        "answer": "Kendi kalıphanemizde tasarlanan özel hidrolik ve pnömatik sıkma fikstürleri, ön ısıtma fırınları ve simetrik kaynak pasosu dizilimleri ile kaynak distorsiyonu sıfıra indirilir."
      }
    ],
    "en": [
      {
        "question": "What certifications and qualifications do your manual welders hold?",
        "answer": "All welding operators are certified under EN ISO 9606-1, with production supervised on-site by certified International Welding Engineers (IWE)."
      },
      {
        "question": "Which welding processes (MIG/MAG, TIG, Spot, Stud) are available?",
        "answer": "We offer MIG/MAG, TIG, resistance spot welding, capacitor discharge stud welding, and specialized alloy joining for armor steel grades."
      },
      {
        "question": "How do you control thermal distortion during welded assembly?",
        "answer": "Using custom pneumatic/hydraulic clamping fixtures manufactured in-house, pre-heating protocols, and balanced weld sequence programming."
      }
    ],
    "de": [
      {
        "question": "Welche Qualifikationen besitzen Ihre Schweißer?",
        "answer": "Unsere Fachkräfte sind nach EN ISO 9606-1 zertifiziert und die Schweißaufsicht erfolgt durch qualifizierte Schweißfachingenieure (IWE/EWE)."
      },
      {
        "question": "Welche Schweißverfahren stehen zur Verfügung?",
        "answer": "MIG/MAG, WIG, Widerstandspunktschweißen, Bolzenschweißen sowie Sonderschweißverfahren für Panzerstähle."
      },
      {
        "question": "Wie wird Schweißverzug bei Baugruppen verhindert?",
        "answer": "Durch hausintern gefertigte Spannvorrichtungen, Vorwärmprozesse und optimierte Schweißfolgen zur Minimierung von Eigenspannungen."
      }
    ],
    "fr": [
      {
        "question": "Quelles sont les qualifications de vos soudeurs ?",
        "answer": "Tous nos soudeurs sont qualifiés selon l'EN ISO 9606-1 sous la supervision directe d'un Ingénieur International en Soudage (IWS/IWE)."
      },
      {
        "question": "Quels procédés de soudage sont maîtrisés en atelier ?",
        "answer": "MIG/MAG, TIG, soudage par points par résistance, soudage de goujons et soudage d'aciers blindés spécifiques."
      },
      {
        "question": "Comment maîtrisez-vous les déformations thermiques ?",
        "answer": "Grâce à des gabarits de bridage conçus en interne, au préchauffage thermique et à l'équilibrage rigoureux des passes de soudure."
      }
    ]
  },
  "kalip-bolumu": {
    "tr": [
      {
        "question": "Kalıp ve kaynak fikstürü tasarımı kendi bünyenizde mi yapılmaktadır?",
        "answer": "Evet, Ar Grup bünyesindeki CAD/CAM mühendislik ekibimiz Siemens NX ve SolidWorks ile sac şekillendirme simülasyonları (AutoForm) yaparak tüm kalıp ve fikstürleri sıfırdan tasarlar."
      },
      {
        "question": "Hangi kalıp tipleri üretilmektedir?",
        "answer": "Progresif kesme-bükme kalıpları, transfer kalıpları, derin çekme kalıpları, robotik kaynak aparatları ve CMM kontrol mastarları imal edilmektedir."
      },
      {
        "question": "Kalıp ömrü ve bakım süreçleri nasıl garanti edilir?",
        "answer": "Kalıp elemanlarında 1.2379 (D2), Vanadis gibi yüksek aşınma dirençli toz metalürjik çelikler ve TiN/PVD kaplamalar kullanılır; planlı önleyici bakım kartları ERP sistemimizle takip edilir."
      }
    ],
    "en": [
      {
        "question": "Are tooling, stamping dies, and fixtures designed fully in-house?",
        "answer": "Yes, our in-house engineering team utilizes Siemens NX and SolidWorks along with AutoForm sheet metal forming simulation to design all dies and fixtures from scratch."
      },
      {
        "question": "What types of tooling and dies do you manufacture?",
        "answer": "We manufacture progressive dies, transfer dies, deep drawing tooling, robotic welding fixtures, and CMM checking fixtures."
      },
      {
        "question": "How do you ensure long die life and maintenance reliability?",
        "answer": "We utilize premium tool steels (1.2379/D2, Vanadis) and PVD coatings; all tooling maintenance schedules are digitally tracked in our ERP system."
      }
    ],
    "de": [
      {
        "question": "Werden Stanzwerkzeuge und Vorrichtungen im eigenen Haus konstruiert?",
        "answer": "Ja, unser CAD/CAM-Team konstruiert Werkzeuge mit Siemens NX und SolidWorks und validiert Umformprozesse mittels AutoForm-Simulation."
      },
      {
        "question": "Welche Werkzeugarten werden hergestellt?",
        "answer": "Folgeverbundwerkzeuge, Transferwerkzeuge, Tiefziehwerkzeuge sowie Schweißvorrichtungen und CMM-Prüflehren."
      },
      {
        "question": "Wie wird die Standzeit der Werkzeuge maximiert?",
        "answer": "Verwendung hochfester Kaltarbeitsstähle (1.2379, Vanadis), TiN/PVD-Verschleißschutzschichten und vorausschauende Wartung im ERP-System."
      }
    ],
    "fr": [
      {
        "question": "La conception des outillages et gabarits est-elle réalisée en interne ?",
        "answer": "Oui, notre bureau d'études conçoit sous Siemens NX/SolidWorks et simule l'emboutissage avec AutoForm pour des outillages 100% maîtrisés."
      },
      {
        "question": "Quels types d'outillages de presse fabriquez-vous ?",
        "answer": "Outils à suivre (progressifs), outils de transfert, matrices d'emboutissage profond, gabarits de soudage robotisé et calibres de contrôle CMM."
      },
      {
        "question": "Comment la longévité et la maintenance des outillages sont-elles assurées ?",
        "answer": "Utilisation d'aciers de haute qualité (1.2379, Vanadis) avec revêtements PVD et maintenance préventive planifiée dans notre ERP."
      }
    ]
  },
  "elektrostatik-toz-boya": {
    "tr": [
      {
        "question": "Elektrostatik toz boya tesisinizin parça ebat ve konveyör kapasitesi nedir?",
        "answer": "Tam otomatik tünel konveyörlü tesisimizde maksimum 3000 x 1500 x 1000 mm boyutlarındaki metal parçalar kesintisiz olarak boyanabilmektedir."
      },
      {
        "question": "Boya öncesi hangi yüzey işlem ve kimyasal hazırlıklar uygulanır?",
        "answer": "Yağ alma, pas giderme ve nano-seramik / zirkonyum veya demir fosfatlama banyolarından oluşan çok aşamalı yıkama tüneli ile mükemmel boya tutunması sağlanır."
      },
      {
        "question": "Korozyon dayanımı ve tuz sisi (salt spray) test performansı nedir?",
        "answer": "Yapılan yüzey hazırlığı ve Qualicoat onaylı polyester/epoksi toz boyalar sayesinde 1000 saat tuz sisi (ASTM B117) korozyon dayanımı garanti edilir."
      }
    ],
    "en": [
      {
        "question": "What is the maximum part size and conveyor capacity of your powder coating line?",
        "answer": "Our fully automated overhead conveyor system coats metal parts up to 3000 x 1500 x 1000 mm in a continuous process."
      },
      {
        "question": "What chemical pre-treatment stages are applied prior to coating?",
        "answer": "Multi-stage automated spray tunnels apply degreasing, pickling, and zirconium/nano-ceramic or iron phosphating to ensure superior paint adhesion."
      },
      {
        "question": "What is the corrosion resistance and salt spray test performance?",
        "answer": "With proper pre-treatment and Qualicoat-approved architectural powders, we achieve up to 1000 hours of neutral salt spray resistance (ASTM B117)."
      }
    ],
    "de": [
      {
        "question": "Welche Bauteilabmessungen und Durchlaufkapazitäten bietet Ihre Pulverbeschichtung?",
        "answer": "Unsere automatische Hängebahn-Beschichtungsanlage verarbeitet Teile bis 3000 x 1500 x 1000 mm im kontinuierlichen Durchlauf."
      },
      {
        "question": "Welche chemische Vorbehandlung wird vor dem Pulverauftrag durchgeführt?",
        "answer": "Ein mehrstufiger Vorbehandlungstunnel mit Entfettung, Beize und Zirkon-/Nanokeramik-Konversionsschicht garantiert optimale Haftung."
      },
      {
        "question": "Welche Korrosionsbeständigkeit im Salzsprühtest wird erreicht?",
        "answer": "Wir erreichen bis zu 1000 Stunden Salzsprühbeständigkeit nach ASTM B117 mit Qualicoat-zertifizierten Pulverlacken."
      }
    ],
    "fr": [
      {
        "question": "Quelles sont les dimensions maximales admissibles sur la chaîne de thermolaquage ?",
        "answer": "Notre chaîne automatisée à convoyeur aérien traite des pièces métalliques jusqu'à 3000 x 1500 x 1000 mm en continu."
      },
      {
        "question": "Quels traitements de surface chimiques préparent les pièces avant poudrage ?",
        "answer": "Un tunnel multi-étapes assure le dégraissage, décapage et une conversion nanothéramique/zirconium assurant une adhérence irréprochable."
      },
      {
        "question": "Quelles sont les performances de résistance au brouillard salin ?",
        "answer": "Nous garantissons jusqu'à 1000 heures de tenue au brouillard salin neutre (ASTM B117) avec des poudres certifiées Qualicoat."
      }
    ]
  },
  "kumlama-boya-bolumu": {
    "tr": [
      {
        "question": "Kumlama tesisinde hangi yüzey temizlik standardı (Sa derecesi) elde edilir?",
        "answer": "Otomatik türbinli ve basınçlı kumlama odalarımızda ISO 8501-1 standardına uygun olarak Sa 2.5 ve Sa 3 seviyesinde homojen, oksitsiz yüzey pürüzlülüğü sağlanır."
      },
      {
        "question": "Büyük gövdeli iş makineleri ve savunma parçaları kumlanabiliyor mu?",
        "answer": "Evet, 8000 x 4000 x 3500 mm ölçülerindeki geniş kumlama ve endüstriyel yaş boya kabinlerimizde ağır tonajlı kaynaklı konstrüksiyonlar ve şasiler rahatlıkla işlenir."
      },
      {
        "question": "Endüstriyel yaş boyada epoksi ve poliüretan kaplama kalınlığı nasıl ölçülür?",
        "answer": "Kalibre edilmiş manyetik ve girdap akımlı dijital kalınlık ölçerler ile kuru film kalınlığı (DFT) şartnamelere uygun olarak mikron mertebesinde raporlanır."
      }
    ],
    "en": [
      {
        "question": "What surface cleanliness standards (Sa grade) are achieved in shot blasting?",
        "answer": "Our automated turbine and manual blasting chambers achieve Sa 2.5 to Sa 3 surface cleanliness in strict accordance with ISO 8501-1."
      },
      {
        "question": "Can heavy vehicle frames and large defense assemblies be processed?",
        "answer": "Yes, our spacious 8000 x 4000 x 3500 mm blast and liquid coating booths readily accommodate heavy chassis and welded structural frames."
      },
      {
        "question": "How are epoxy and polyurethane dry film thicknesses (DFT) verified?",
        "answer": "Digital magnetic and eddy-current coating thickness gauges verify micron-level dry film thickness compliance against customer specifications."
      }
    ],
    "de": [
      {
        "question": "Welche Oberflächenreinheitsgrade werden beim Strahlen erreicht?",
        "answer": "In unseren Strahlanlagen erzielen wir normgerechte Reinheitsgrade nach ISO 8501-1 von Sa 2,5 bis Sa 3 für optimale Lackhaftung."
      },
      {
        "question": "Können große Schweißkonstruktionen und Baggerrahmen bearbeitet werden?",
        "answer": "Ja, unsere Strahl- und Lackierkabinen mit 8000 x 4000 x 3500 mm fassen schwere Schweißbaugruppen und Fahrzeugrahmen."
      },
      {
        "question": "Wie wird die Trockenschichtdicke (DFT) kontrolliert?",
        "answer": "Mit kalibrierten Schichtdickenmessgeräten dokumentieren wir die DFT von Epoxid- und Polyurethanbeschichtungen mikrometergenau."
      }
    ],
    "fr": [
      {
        "question": "Quel niveau de préparation de surface (degré de soin Sa) est garanti par grenaillage ?",
        "answer": "Nos cabines de grenaillage automatique et manuel garantissent les degrés de propreté Sa 2.5 et Sa 3 selon l'ISO 8501-1."
      },
      {
        "question": "Pouvez-vous traiter de grandes structures de défense ou châssis d'engins TP ?",
        "answer": "Oui, notre cabine grand volume de 8000 x 4000 x 3500 mm permet le grenaillage et la mise en peinture de grands ensembles mécano-soudés."
      },
      {
        "question": "Comment contrôlez-vous l'épaisseur des peintures époxy et polyuréthane ?",
        "answer": "Des mesureurs d'épaisseur numériques étalonnés contrôlent l'épaisseur de film sec (DFT) au micromètre près."
      }
    ]
  },
  "giyotin-makas": {
    "tr": [
      {
        "question": "Giyotin makas hattında kesilebilen maksimum ebat ve kalınlık nedir?",
        "answer": "CNC kontrollü giyotin makaslarımızda 3000 mm kesme boyunda 12 mm siyah sac ve 8 mm paslanmaz çelik saclar hassas açılı bıçak aralığıyla kesilebilmektedir."
      },
      {
        "question": "Giyotin kesimde kenar eğrilmesi ve bükülme (torsiyon) nasıl önlenir?",
        "answer": "Otomatik CNC bıçak boşluğu ayarı, hidrolik baskı pistonları ve açı ayarı sayesinde sac şeritlerde burulma ve çapaklanma minimize edilir."
      },
      {
        "question": "Giyotin makas kesimi hangi parçalar için lazer kesime ekonomik alternatiftir?",
        "answer": "Yüksek adetli düz şeritler, kasetler, takviye sacları ve kaynak ağzı hazırlığı gerektirmeyen standart dikdörtgen plakalar için yüksek hızlı ve uygun maliyetli çözümdür."
      }
    ],
    "en": [
      {
        "question": "What is the maximum sheet thickness and cutting length on guillotine shears?",
        "answer": "Our CNC guillotine shears cut up to 12 mm mild steel and 8 mm stainless steel across a 3000 mm working length with high edge straightness."
      },
      {
        "question": "How do you eliminate twisting and burrs during shearing?",
        "answer": "Automatic CNC blade clearance adjustment and independent hydraulic sheet hold-down clamps prevent distortion and minimize burr formation."
      },
      {
        "question": "When is guillotine shearing an economical alternative to laser cutting?",
        "answer": "For high-volume rectangular blanks, reinforcing gussets, and straight strips where laser piercing and assist gas costs can be eliminated."
      }
    ],
    "de": [
      {
        "question": "Welche Blechstärken und Längen können mit der Tafelschere geschnitten werden?",
        "answer": "Unsere CNC-Tafelscheren trennen Baustahl bis 12 mm und Edelstahl bis 8 mm bei einer maximalen Schnittlänge von 3000 mm."
      },
      {
        "question": "Wie wird Verwindung und Gratbildung beim Scherschneiden verhindert?",
        "answer": "Automatische Schnittspaltverstellung und hydraulische Niederhalter sichern plane und gratfreie Zuschnitte."
      },
      {
        "question": "Für welche Teile ist das Scherschneiden günstiger als Laserschneiden?",
        "answer": "Für rechteckige Serienzuschnitte, Streifen und Versteifungsbleche stellt es eine besonders wirtschaftliche und schnelle Lösung dar."
      }
    ],
    "fr": [
      {
        "question": "Quelles sont les capacités maximales de découpe sur cisaille guillotine ?",
        "answer": "Nos cisailles guillotines CNC coupent jusqu'à 12 mm d'acier doux et 8 mm d'inox sur une longueur utile de 3000 mm."
      },
      {
        "question": "Comment évitez-vous la torsion et les bavures lors du cisaillage ?",
        "answer": "Le réglage automatique du jeu entre lames et des serre-tôles hydrauliques indépendants garantissent une coupe rectiligne sans déformation."
      },
      {
        "question": "Dans quels cas le cisaillage est-il plus rentable que le laser ?",
        "answer": "Pour les découpes rectangulaires en grande série, goussets et feuillards où la découpe laser génère des surcoûts inutiles."
      }
    ]
  },
  "matkap": {
    "tr": [
      {
        "question": "Radyal ve sütunlu matkap parkurunuzda maksimum delik delme kapasitesi nedir?",
        "answer": "Parkurumuzda Ø60 mm çapa kadar delik delme, havşa açma, raybalama ve M42 ölçüsüne kadar kılavuzla diş açma işlemleri yapılabilmektedir."
      },
      {
        "question": "Yüksek sertlikteki aşınma plakalarına (Hardox) diş açılabilir mi?",
        "answer": "Evet, özel karbür takımlar, düşük devirli yüksek torklu şanzımanlar ve soğutmalı kılavuz sistemleriyle 450-500 HBW sertlikteki çeliklerde diş açılabilmektedir."
      },
      {
        "question": "Delik eksen hassasiyeti ve merkezkaç toleransı nasıl korunur?",
        "answer": "Kendi imalatımız olan sertleştirilmiş burçlu delme fikstürleri ve koordinat sehpaları kullanılarak delik eksen toleransı ±0.1 mm sınırlarında tutulur."
      }
    ],
    "en": [
      {
        "question": "What is the maximum drilling and tapping capacity in your radial drill park?",
        "answer": "We drill holes up to Ø60 mm, counterbore, ream, and tap threads up to M42 on heavy structural plates and forged forgings."
      },
      {
        "question": "Can you tap threads into high-hardness wear steels such as Hardox?",
        "answer": "Yes, using solid carbide tooling, high-torque geared spindles, and specialized high-pressure tapping lubricants on steels up to 500 HBW."
      },
      {
        "question": "How do you maintain hole pitch and center-to-center accuracy?",
        "answer": "Hardened drill jig bushings and coordinate fixturing tables ensure hole pitch accuracy within ±0.1 mm."
      }
    ],
    "de": [
      {
        "question": "Welche Bohrdurchmesser und Gewindegrößen können bearbeitet werden?",
        "answer": "Wir bohren bis Ø60 mm, senken, reiben und schneiden Gewinde bis M42 in schwere Stahlplatten und Schweißkonstruktionen."
      },
      {
        "question": "Können Gewinde in verschleißfeste Stähle (Hardox) geschnitten werden?",
        "answer": "Ja, mit Vollhartmetallwerkzeugen und drehmomentstarken Spindeln schneiden wir Gewinde in Stähle bis 500 HBW."
      },
      {
        "question": "Wie wird die Lagetoleranz von Bohrbildern eingehalten?",
        "answer": "Präzise Bohrschablonen mit gehärteten Bohrbuchsen sichern Lochabstandstoleranzen von ±0,1 mm."
      }
    ],
    "fr": [
      {
        "question": "Quelles capacités de perçage et taraudage offrent vos perceuses radiales ?",
        "answer": "Nous forons jusqu'à Ø60 mm, lamons, alésons et taraudons jusqu'à M42 sur pièces forgées et ensembles mécano-soudés."
      },
      {
        "question": "Pouvez-vous tarauder dans des aciers très durs comme le Hardox ?",
        "answer": "Oui, grâce à des tarauds carbure monobloc et lubrifiants haute pression adaptés aux aciers jusqu'à 500 HBW."
      },
      {
        "question": "Comment l'entraxe et la concentricité des trous sont-ils garantis ?",
        "answer": "Des canons de perçage trempés et des gabarits indexés assurent des tolérances d'entraxe de ±0,1 mm."
      }
    ]
  },
  "pres": {
    "tr": [
      {
        "question": "Genel pres parkurunuzda kaç tonajlık presler bulunmaktadır?",
        "answer": "30 tondan 1000 tona kadar uzanan 20'yi aşkın mekanik ve hidrolik presimizle tek vuruşluk operasyonlardan çok istasyonlu derin çekmeye kadar geniş bir yelpazede hizmet sunulmaktadır."
      },
      {
        "question": "Preslerde kalıp bağlama ve ayar süreleri (SMED) nasıl optimize edilir?",
        "answer": "Hızlı kalıp sıkma hidrolik pabuçları, standartlaştırılmış alt plakalar ve kalıp yükleme arabaları sayesinde SMED standartlarında hızlı geçiş sağlanır."
      },
      {
        "question": "Pres hattında fason veya anahtar teslim parça üretimi mümkün müdür?",
        "answer": "Müşterinin kalıbıyla seri basım yapılabileceği gibi, hammadde temini, kalıp üretimi, presleme, kaynak, boya ve montaj dahil anahtar teslim parça teslimatı da yapılmaktadır."
      }
    ],
    "en": [
      {
        "question": "What is the total tonnage range and fleet size in your stamping press park?",
        "answer": "Our press fleet includes over 20 mechanical and hydraulic presses ranging from 30 to 1000 tons, supporting single-hit forming to deep drawing."
      },
      {
        "question": "How do you minimize die changeover times (SMED) on the press lines?",
        "answer": "Hydraulic die clamps, standardized bolster plates, and dedicated die change carts ensure rapid changeovers adhering to SMED lean principles."
      },
      {
        "question": "Do you offer contract stamping or complete turnkey parts supply?",
        "answer": "We run customer-supplied dies or provide full turnkey service covering raw material, die tooling, stamping, welding, coating, and sub-assembly."
      }
    ],
    "de": [
      {
        "question": "Welche Tonnagen umfasst Ihr gesamter Pressenpark?",
        "answer": "Über 20 mechanische und hydraulische Pressen von 30 bis 1000 Tonnen decken Einzelhübe, Folgeverbundstanzen und Tiefziehen ab."
      },
      {
        "question": "Wie werden Rüstzeiten (SMED) optimiert?",
        "answer": "Hydraulische Werkzeugschnellspannsysteme und Standardaufspannplatten ermöglichen schnelle Werkzeugwechsel nach Lean-Prinzipien."
      },
      {
        "question": "Bieten Sie Lohnstanzen oder schlüsselfertige Baugruppenfertigung an?",
        "answer": "Sowohl die Lohnfertigung auf Kundenwerkzeugen als auch Turnkey-Lösungen von Rohmaterial über Stanzen bis zur montagefertigen Baugruppe."
      }
    ],
    "fr": [
      {
        "question": "Quel est le parc global de presses d'emboutissage ?",
        "answer": "Plus de 20 presses mécaniques et hydrauliques de 30 à 1000 tonnes pour découpage, cambrage et emboutissage profond."
      },
      {
        "question": "Comment réduisez-vous les temps de changement d'outils (SMED) ?",
        "answer": "Des brides hydrauliques rapides et des tables d'outillage standardisées réduisent les temps de réglage selon les standards SMED."
      },
      {
        "question": "Proposez-vous de la sous-traitance d'emboutissage ou du clé en main ?",
        "answer": "Nous produisons sur vos outils existants ou livrons des ensembles complets : matière, outillage, frappe, soudure, peinture et montage."
      }
    ]
  },
  "sertifikalar": {
    "tr": [
      {
        "question": "Ar Grup Makine hangi uluslararası kalite sertifikalarına sahiptir?",
        "answer": "Şirketimiz otomotivde IATF 16949:2016, genel kalitede ISO 9001:2015, kaynaklı imalat yeterliliğinde ISO 3834-2, çevre yönetiminde ISO 14001:2015 ve iş sağlığında ISO 45001:2018 sertifikalarına sahiptir."
      },
      {
        "question": "Kalite kontrol laboratuvarınızda hangi test ve ölçüm ekipmanları bulunmaktadır?",
        "answer": "3D CMM koordinat ölçüm cihazı, optik emisyon spektrometresi (malzeme kimyasal analizi), dijital kaplama kalınlığı ölçerler, sertlik ölçüm cihazı ve profil projeksiyon cihazları mevcuttur."
      },
      {
        "question": "Ürün teslimatında hangi kalite dokümantasyonu sağlanır?",
        "answer": "Talebe göre EN 10204 3.1 malzeme sertifikaları, CMM boyutsal ölçüm raporları, NDT kaynak raporları ve otomotiv için PPAP Seviye 3 onay paketleri sunulur."
      }
    ],
    "en": [
      {
        "question": "What international quality accreditations does Ar Grup Makine hold?",
        "answer": "We hold IATF 16949:2016 (Automotive), ISO 9001:2015 (Quality), ISO 3834-2 (Fusion Welding), ISO 14001:2015 (Environmental), and ISO 45001:2018 (H&S)."
      },
      {
        "question": "What testing and inspection equipment is available in your QA lab?",
        "answer": "Our lab features a 3D CMM machine, optical emission spectrometer for chemical alloy analysis, coating thickness gauges, hardness testers, and profile projectors."
      },
      {
        "question": "What quality documentation is delivered with production lots?",
        "answer": "We provide EN 10204 3.1 mill certificates, 3D CMM inspection reports, NDT weld reports, and full automotive PPAP Level 3 documentation."
      }
    ],
    "de": [
      {
        "question": "Welche internationalen Qualitätszertifikate besitzt Ar Grup Makine?",
        "answer": "IATF 16949:2016 (Automotive), ISO 9001:2015, ISO 3834-2 (Schweißzertifizierung), ISO 14001 (Umwelt) und ISO 45001 (Arbeitsschutz)."
      },
      {
        "question": "Welche Prüfeinrichtungen stehen im Qualitätslabor zur Verfügung?",
        "answer": "3D-Koordinatenmessmaschine (KMG), Funkenemissionsspektrometer, Schichtdickenmessgeräte, Härteprüfer und optische Profilprojektoren."
      },
      {
        "question": "Welche Prüfdokumente werden mit den Bauteilen geliefert?",
        "answer": "Abnahmeprüfzeugnisse nach EN 10204 3.1, 3D-Messberichte, ZfP-Schweißprüfprotokolle und vollständige PPAP-Level-3-Freigabedokumentationen."
      }
    ],
    "fr": [
      {
        "question": "Quelles certifications internationales possède Ar Grup Makine ?",
        "answer": "Nous sommes certifiés IATF 16949:2016 (automobile), ISO 9001:2015, ISO 3834-2 (qualité de soudage), ISO 14001 (environnement) et ISO 45001."
      },
      {
        "question": "Quels équipements de mesure équipent votre laboratoire qualité ?",
        "answer": "Machine à mesurer tridimensionnelle (MMT 3D), spectromètre d'émission optique, mesureurs d'épaisseur, duromètres et projecteurs de profil."
      },
      {
        "question": "Quels certificats et rapports de contrôle sont livrés avec les pièces ?",
        "answer": "Certificats matière EN 10204 3.1, rapports dimensionnels 3D, rapports CND de soudage et dossiers d'homologation PPAP niveau 3."
      }
    ]
  },
  "otomotiv": {
    "tr": [
      {
        "question": "Otomotiv OEM ve Tier-1 tedarikçileri için hangi parçaları üretiyorsunuz?",
        "answer": "Şasi traversleri, salıncak kolları, amortisör kuleleri, motor bağlantı braketleri, egzoz askıları ve gövde yapısal sac parçaları üretilmektedir."
      },
      {
        "question": "Otomotiv projelerinde PPAP ve APQP süreçleri nasıl yönetilir?",
        "answer": "Tüm projeler APQP kılavuzuna göre aşamalandırılır; FMEA, kontrol planı, MSA ve Cpk yetenek analizlerini içeren PPAP Seviye 3 dosyası sunulur."
      },
      {
        "question": "Yüksek serili otomotiv üretiminde teslimat güvenilirliği nasıl sağlanır?",
        "answer": "ERP tabanlı EDI veri aktarımı, güvenlik stokları ve Kanban / Just-in-Time (JIT) sevkiyat modeliyle %99.8 zamanında teslimat oranı korunur."
      }
    ],
    "en": [
      {
        "question": "Which components do you manufacture for automotive OEM and Tier-1 clients?",
        "answer": "We manufacture chassis crossmembers, suspension control arms, shock towers, engine mounting brackets, exhaust hangers, and body structural pressings."
      },
      {
        "question": "How are PPAP and APQP workflows managed for automotive programs?",
        "answer": "Programs follow APQP milestones; comprehensive PPAP Level 3 packages are submitted including PFMEA, Control Plans, MSA, and process capability (Cpk) data."
      },
      {
        "question": "How do you ensure delivery reliability for high-volume automotive lines?",
        "answer": "Through integrated ERP with EDI scheduling, safety buffer stocks, and Kanban / Just-in-Time delivery mechanisms maintaining >99.8% on-time delivery."
      }
    ],
    "de": [
      {
        "question": "Welche Komponenten fertigen Sie für Automobil-OEMs und Tier-1-Zulieferer?",
        "answer": "Fahrgestellquerträger, Querlenker, Federbeindome, Motorhalterungen, Auspuffaufhängungen und Karosseriestrukturteile."
      },
      {
        "question": "Wie werden PPAP- und APQP-Prozesse abgewickelt?",
        "answer": "Projekte durchlaufen standardisierte APQP-Phasen mit vollständiger PPAP-Level-3-Freigabe (FMEA, Produktionslenkungsplan, MSA und Cpk-Nachweise)."
      },
      {
        "question": "Wie wird die Liefersicherheit in der automobilen Großserie garantiert?",
        "answer": "Durch ERP-gestützten EDI-Datenaustausch, Pufferlager und Kanban/JIT-Liefermodelle mit einer On-Time-Delivery-Rate von über 99,8%."
      }
    ],
    "fr": [
      {
        "question": "Quels composants fabriquez-vous pour les constructeurs et équipementiers automobiles ?",
        "answer": "Traverses de châssis, bras de suspension, coupelles d'amortisseur, supports moteur, fixations d'échappement et pièces d'emboutissage de carrosserie."
      },
      {
        "question": "Comment gérez-vous les démarches APQP et dossiers PPAP ?",
        "answer": "Chaque projet suit les jalons APQP avec soumission complète d'un dossier PPAP niveau 3 comprenant AMDEC, plan de surveillance, MSA et capabilités Cpk."
      },
      {
        "question": "Comment garantissez-vous la régularité des livraisons en grande série ?",
        "answer": "Par interconnexion ERP via EDI, stocks de sécurité et gestion en flux tendu Kanban/JIT assurant un taux de ponctualité de 99,8%."
      }
    ]
  },
  "savunma-sanayi": {
    "tr": [
      {
        "question": "Savunma sanayi projelerinde tesis güvenliği ve gizlilik nasıl sağlanır?",
        "answer": "Tesisimiz Savunma Sanayii Başkanlığı güvenlik kriterlerine uygun, kontrollü giriş sistemleri, gizlilik sözleşmeleri (NDA) ve izole üretim alanları ile korunmaktadır."
      },
      {
        "question": "Balistik zırh çelikleri (Armox, Ramor, Hardox) işleme yetkinliğiniz nedir?",
        "answer": "400-600 HBW sertlikteki balistik çeliklerin lazerle hassas kesimi, çatlamasız bükümü ve zırh kaynak tellerine uygun onaylı WPS/PQR kaynaklı birleştirmesi yapılmaktadır."
      },
      {
        "question": "Savunma sanayi parçalarında izlenebilirlik nasıl garanti edilir?",
        "answer": "Hammadde döküm numarası, lazer markalama / QR kod, CMM ölçümleri ve Seviye II NDT test raporları dijital arşivimizde 10 yıl boyunca saklanmaktadır."
      }
    ],
    "en": [
      {
        "question": "How are facility security and data confidentiality guaranteed for defense programs?",
        "answer": "Our facility strictly complies with defense security standards featuring controlled access zones, NDAs, and dedicated isolated production areas."
      },
      {
        "question": "What is your capability in processing ballistic armor steels (Armox, Ramor)?",
        "answer": "We process 400-600 HBW ballistic steels with fiber laser cutting, crack-free press brake bending, and certified welding using ballistic-qualified filler wires."
      },
      {
        "question": "How is part traceability maintained for defense sector components?",
        "answer": "Every part is marked with laser/QR serials linked to mill heat numbers, 3D CMM reports, and Level II NDT certificates archived for 10 years."
      }
    ],
    "de": [
      {
        "question": "Wie werden Geheimhaltung und Werkssicherheit für Rüstungsprojekte gewährleistet?",
        "answer": "Zutrittskontrollierte Sicherheitsbereiche, Geheimhaltungsvereinbarungen und getrennte Fertigungszonen entsprechen den Sicherheitsstandards der Verteidigungsindustrie."
      },
      {
        "question": "Welche Kompetenz besitzen Sie bei ballistischen Panzerstählen (Armox, Ramor)?",
        "answer": "Präzises Faserlaserschneiden, rissfreies Biegen und qualifiziertes Fügen von 400-600 HBW Panzerstählen mit zertifizierten Schweißzusatzwerkstoffen."
      },
      {
        "question": "Wie wird die lückenlose Rückverfolgbarkeit sichergestellt?",
        "answer": "Lasermarkierte Seriennummern verknüpft mit Schmelzennummern, CMM-Prüfberichten und ZfP-Protokollen werden digital 10 Jahre archiviert."
      }
    ],
    "fr": [
      {
        "question": "Comment la sécurité industrielle et la confidentialité défense sont-elles assurées ?",
        "answer": "Accès réglementés, accords de confidentialité stricts et îlots de fabrication isolés conformes aux exigences de l'industrie de défense."
      },
      {
        "question": "Quelle est votre expertise dans la transformation des aciers blindés (Armox, Ramor) ?",
        "answer": "Découpe laser fibre, pliage contrôlé et soudage qualifié d'aciers de 400 à 600 HBW avec métaux d'apport homologués défense."
      },
      {
        "question": "Comment garantissez-vous la traçabilité des pièces militaires ?",
        "answer": "Marquage laser unitaire, traçabilité des coulées matière, rapports MMT 3D et procès-verbaux CND archivés numériquement pendant 10 ans."
      }
    ]
  },
  "is-makinalari": {
    "tr": [
      {
        "question": "Ağır iş makineleri için hangi yapısal bileşenler üretilmektedir?",
        "answer": "Ekskavatör bom ve arm takviyeleri, yükleyici kova gövdeleri, dozer şasi traversleri, hidrolik tanklar ve yüksek mukavemetli pim kovanları üretilmektedir."
      },
      {
        "question": "Yüksek aşınmaya ve darbeye maruz kalan parçalarda hangi saclar kullanılır?",
        "answer": "Hardox 450/500, Raex ve Weldox (S690QL / S960QL) yüksek akma dayanımlı yapısal çelikler işlenerek aşınma ömrü maksimize edilir."
      },
      {
        "question": "Ağır kaynaklı konstrüksiyonlarda çatlama riskine karşı hangi önlemler alınır?",
        "answer": "Kalın saclarda kaynak ağzı açma, kontrollü ön ısıtma fırınları, çok pasolu robotik kaynak ve kumlama sonrası gerilim giderme süreçleri uygulanır."
      }
    ],
    "en": [
      {
        "question": "Which structural components are manufactured for heavy construction machinery?",
        "answer": "We produce excavator boom and arm reinforcements, loader bucket shells, dozer chassis frames, hydraulic fluid reservoirs, and heavy-duty bushing sleeves."
      },
      {
        "question": "Which wear-resistant and high-yield steels are deployed for heavy impact areas?",
        "answer": "We process Hardox 450/500, Raex, and high-yield structural steels like S690QL and S960QL for maximum operational service life."
      },
      {
        "question": "What measures prevent cracking in heavy-gauge welded structural assemblies?",
        "answer": "Precision weld beveling, controlled pre-heating furnaces, multi-pass robotic welding, and post-blast stress relieving treatments."
      }
    ],
    "de": [
      {
        "question": "Welche Komponenten werden für schwere Baumaschinen gefertigt?",
        "answer": "Baggerausleger-Verstärkungen, Ladeschaufeln, Fahrwerksrahmen, Hydrauliköltanks und Buchsenaufnahmen für extreme Beanspruchung."
      },
      {
        "question": "Welche Verschleiß- und Feinkornbaustähle werden verarbeitet?",
        "answer": "Hardox 450/500 sowie hochfeste Feinkornbaustähle wie S690QL und S960QL für höchste Schlag- und Verschleißfestigkeit."
      },
      {
        "question": "Wie wird Rissbildung bei dickwandigen Schweißkonstruktionen vermieden?",
        "answer": "Fasenvorbereitung, kontrolliertes Vorwärmen, mehrlagiges Roboterschweißen und gezieltes Spannungsarmglühen."
      }
    ],
    "fr": [
      {
        "question": "Quels ensembles structurels fabriquez-vous pour les engins de chantier ?",
        "answer": "Renforts de flèches et balanciers de pelles, corps de godets de chargeuses, châssis de bulldozers et réservoirs hydrauliques mécano-soudés."
      },
      {
        "question": "Quels aciers anti-usure et à haute limite élastique transformez-vous ?",
        "answer": "Nuances Hardox 450/500 et aciers à haute limite d'élasticité S690QL et S960QL assurant une durabilité maximale sur le terrain."
      },
      {
        "question": "Comment évitez-vous les risques de fissuration sous fortes épaisseurs ?",
        "answer": "Chanfreinage précis, préchauffage thermique régulé, soudage robotisé multi-passes et grenaillage de relaxation des contraintes."
      }
    ]
  },
  "tarim-makinalari": {
    "tr": [
      {
        "question": "Tarım makineleri sektörü için hangi parçalar imal edilmektedir?",
        "answer": "Traktör kabin şasileri, 3 nokta askı kolları, pulluk ve diskaro bağlantı elemanları, biçerdöver dane hazneleri ve ekim makinesi sac parçaları üretilmektedir."
      },
      {
        "question": "Tarım ekipmanlarında zorlu dış ortam şartlarına karşı boya kalitesi nasıldır?",
        "answer": "Nano-seramik yüzey işlem ve UV dayanımlı elektrostatik toz boya ile gübre, nem ve çamur korozyonuna karşı 1000 saat tuz sisi dayanımı sağlanır."
      },
      {
        "question": "Tarımsal sezon dalgalanmalarında esnek üretim ve teslimat yapabiliyor musunuz?",
        "answer": "Esnek pres ve lazer parkurumuz, modüler kalıplarımız ve müşteri sipariş tahminleriyle senkronize güvenlik stokları ile sezonluk pik talepler eksiksiz karşılanır."
      }
    ],
    "en": [
      {
        "question": "What components are manufactured for the agricultural equipment industry?",
        "answer": "Tractor cabin frames, 3-point hitch linkages, plow and harrow mounting brackets, combine harvester grain tanks, and seeder sheet components."
      },
      {
        "question": "How is paint durability ensured against harsh agricultural outdoor environments?",
        "answer": "Nano-ceramic pre-treatment and UV-resistant powder coating provide up to 1000 hours of salt spray protection against fertilizer and humidity corrosion."
      },
      {
        "question": "Can you accommodate seasonal demand peaks in agricultural manufacturing?",
        "answer": "Our high-capacity stamping and laser fleets, modular tooling, and safety stock strategies readily absorb seasonal agricultural spikes."
      }
    ],
    "de": [
      {
        "question": "Welche Teile werden für Landmaschinenhersteller gefertigt?",
        "answer": "Traktorkabinenrahmen, Dreipunkt-Gestänge, Pflug- und Eggenhalterungen, Mähdrescher-Korntanks und Sämaschinengehäuse."
      },
      {
        "question": "Wie wird die Beständigkeit gegen aggressive Umwelteinflüsse garantiert?",
        "answer": "Nanokeramische Vorbehandlung und UV-beständige Pulverlacke gewährleisten 1000 Stunden Salzsprühfestigkeit gegen Düngemittel und Witterung."
      },
      {
        "question": "Können Sie saisonale Nachfragespitzen in der Landtechnik abfedern?",
        "answer": "Dank flexibler Fertigungskapazitäten und kundenindividueller Sicherheitslager beliefern wir Hersteller termingerecht zur Erntesaison."
      }
    ],
    "fr": [
      {
        "question": "Quels composants réalisez-vous pour le machinisme agricole ?",
        "answer": "Châssis de cabines de tracteurs, attelages 3 points, supports de herses et charrues, trémies de moissonneuses et pièces de semoirs."
      },
      {
        "question": "Comment garantissez-vous la protection face aux agressions extérieures ?",
        "answer": "Conversion nanothéramique et poudrage polyester résistant aux UV assurant 1000 heures au brouillard salin face aux engrais et intempéries."
      },
      {
        "question": "Comment gérez-vous la saisonnalité des productions agricoles ?",
        "answer": "Notre parc de découpe et d'emboutissage associé à des stocks tampons absorbe les pics d'activité saisonniers des constructeurs."
      }
    ]
  },
  "ozel-uygulamalar": {
    "tr": [
      {
        "question": "Özel mühendislik projelerinde prototip ve numune üretimi yapıyor musunuz?",
        "answer": "Evet, seri kalıp yatırımına girmeden önce lazer kesim, CNC büküm ve talaşlı imalatla fonksiyonel prototip ve numuneler hızla imal edilmektedir."
      },
      {
        "question": "Tasarım için üretilebilirlik (DFM) analizi ve mühendislik desteği veriyor musunuz?",
        "answer": "Teknik ofisimiz müşteri teknik resimlerini inceleyerek ağırlık azaltma, maliyet optimizasyonu ve kalıplanabilirlik (DFM) önerileri sunar."
      },
      {
        "question": "Düşük adetli veya butik endüstriyel makine şasisi üretebiliyor musunuz?",
        "answer": "Evet, proje bazlı özel üretim hatlarımızda tek parça prototipten orta ölçekli özel makine gövdelerine kadar esnek üretim gerçekleştirilir."
      }
    ],
    "en": [
      {
        "question": "Do you provide rapid functional prototyping for custom engineering projects?",
        "answer": "Yes, we produce functional prototypes rapidly using laser cutting, CNC bending, and precision machining before hard tooling investment."
      },
      {
        "question": "Do you offer Design for Manufacturability (DFM) and cost reduction support?",
        "answer": "Our engineering department reviews customer drawings to recommend weight reduction, stamping feasibility, and cost-saving DFM optimizations."
      },
      {
        "question": "Can you manufacture low-volume or project-based custom machine frames?",
        "answer": "Yes, our flexible production cells handle custom structural fabrications ranging from one-off prototypes to specialized machinery batches."
      }
    ],
    "de": [
      {
        "question": "Bieten Sie Prototypenbau für kundenindividuelle Sonderprojekte an?",
        "answer": "Ja, wir fertigen funktionale Muster und Prototypen mittels Laserschneiden, Abkanten und Zerspanung vor Werkzeuginvestitionen."
      },
      {
        "question": "Unterstützen Sie Kunden mit DFM-Analysen (Design for Manufacturing)?",
        "answer": "Unsere Ingenieure analysieren CAD-Daten und optimieren Baugruppen hinsichtlich Gewicht, Fertigungskosten und Umformbarkeit."
      },
      {
        "question": "Können Kleinserien oder Sondermaschinenrahmen gefertigt werden?",
        "answer": "Ja, unsere Fertigung ist sowohl auf Einzelanfertigungen von Spezialgestellen als auch auf projektbezogene Kleinserien ausgelegt."
      }
    ],
    "fr": [
      {
        "question": "Proposez-vous le prototypage rapide pour projets spéciaux ?",
        "answer": "Oui, nous produisons rapidement des prototypes fonctionnels par découpe laser, pliage et usinage avant tout investissement d'outillage."
      },
      {
        "question": "Fournissez-vous une assistance DFM (Design for Manufacturing) et reconception ?",
        "answer": "Notre bureau d'études analyse vos plans pour suggérer des optimisations de masse, de faisabilité et d'abaissement des coûts de revient."
      },
      {
        "question": "Pouvez-vous fabriquer des bâtis spéciaux en petite série ou à l'unité ?",
        "answer": "Oui, nos lignes flexibles s'adaptent de la fabrication unitaire de châssis complexes jusqu'aux séries pilotes personnalisées."
      }
    ]
  },
  "medikal": {
    "tr": [
      {
        "question": "Medikal sektör için hangi parça ve sistemler imal edilmektedir?",
        "answer": "Hastane yatak gövdeleri, hasta taşıma lift mekanizmaları, ameliyathane paslanmaz dolap ve tepsileri ile cerrahi cihaz şasi karkasları üretilmektedir."
      },
      {
        "question": "Medikal parçalarda paslanmaz çelik (AISI 304/316L) işleme kalitesi nasıldır?",
        "answer": "Özel paslanmaz işleme hattımızda karbon kontaminasyonu engellenir; argon (TIG) kaynak, elektro-polisaj ve asitleme ile pürüzsüz hijyenik yüzeyler elde edilir."
      },
      {
        "question": "Medikal ürünlerde biyouyumluluk ve temizlik standartları nasıl karşılanır?",
        "answer": "Keskin kenarsız çapak alma prosesleri, pürüzsüz kaynak dikişleri ve medikal dezenfeksiyona dayanıklı elektrostatik toz boyalar ile sterilizasyona uygunluk sağlanır."
      }
    ],
    "en": [
      {
        "question": "Which medical equipment assemblies and parts do you manufacture?",
        "answer": "We manufacture hospital bed frames, patient lift linkages, surgical stainless cabinetry, and diagnostic medical equipment chassis."
      },
      {
        "question": "What stainless steel (AISI 304/316L) processing standards are implemented?",
        "answer": "In our dedicated stainless bay, cross-contamination is prevented; TIG welding, passivating, and electropolishing ensure hygienic, clean surfaces."
      },
      {
        "question": "How do you achieve medical-grade cleanliness and biocompatibility standards?",
        "answer": "Through radius deburring, sanitary weld grinds, and antimicrobial medical-grade powder coatings resistant to hospital disinfectants."
      }
    ],
    "de": [
      {
        "question": "Welche Komponenten fertigen Sie für die Medizintechnik?",
        "answer": "Pflegebettgestelle, Patientenhebevorrichtungen, OP-Edelstahlmöbel und Gehäusestrukturen für diagnostische Medizingeräte."
      },
      {
        "question": "Welche Standards gelten für die Edelstahlverarbeitung (AISI 304/316L)?",
        "answer": "Ferritfreie Verarbeitung, WIG-Schweißen, Beizen und Elektropolieren sichern hygienische, leicht sterilisierbare Oberflächen."
      },
      {
        "question": "Wie werden Hygiene- und Reinheitsanforderungen erfüllt?",
        "answer": "Kantenverrundung, spaltfreie Schweißnähte und desinfektionsmittelbeständige Pulverbeschichtungen garantieren absolute Praxistauglichkeit."
      }
    ],
    "fr": [
      {
        "question": "Quels équipements et composants réalisez-vous pour le secteur médical ?",
        "answer": "Châssis de lits médicalisés, mécanismes de lève-malade, mobilier inox de bloc opératoire et carters pour appareils de diagnostic."
      },
      {
        "question": "Quels standards appliquez-vous pour l'acier inoxydable (AISI 304/316L) ?",
        "answer": "Zone dédiée sans contamination ferreuse, soudage TIG soigné, passivation et électropolissage pour une hygiène irréprochable."
      },
      {
        "question": "Comment garantissez-vous la conformité aux exigences de propreté médicale ?",
        "answer": "Ébavurage soigné, cordons de soudure arasés sans rétention et revêtements poudre résistant aux décontaminations chimiques."
      }
    ]
  }
};
