import { Language } from '@/context/LanguageContext';

export interface TechnicalSpec {
  label: string;
  value: string;
  sub?: string;
}

export interface MachineParkItem {
  code: string;
  name: string;
  specs: string;
  power?: string;
}

export interface TechnicalDetail {
  specs: Record<Language, TechnicalSpec[]>;
  capabilities: Record<Language, string[]>;
  materials?: Record<Language, string[]>;
  machines?: MachineParkItem[];
}

export const technicalData: Record<string, TechnicalDetail> = {
  // 1. LAZER BÖLÜMÜ
  'lazer-bolumu': {
    specs: {
      tr: [
        { label: 'Kesim Kapasitesi', value: '2000 x 4000 mm', sub: 'Çift Tabla Otomasyonu' },
        { label: 'Lazer Gücü', value: '2x 4.4 kW - 15 kW', sub: 'Yüksek Hassasiyetli Fiber' },
        { label: 'Kesim Toleransı', value: '±0.05 mm', sub: 'Mikron Düzeyinde Pozisyonlama' },
        { label: 'Maks. Sac Kalınlığı', value: '25 mm Siyah / 20 mm Inox', sub: 'Azot & Oksijen Kesim' },
      ],
      en: [
        { label: 'Cutting Capacity', value: '2000 x 4000 mm', sub: 'Dual Shuttle Table' },
        { label: 'Laser Power', value: '2x 4.4 kW - 15 kW', sub: 'High-Precision Fiber' },
        { label: 'Tolerance', value: '±0.05 mm', sub: 'Micron-Level Accuracy' },
        { label: 'Max Thickness', value: '25 mm Steel / 20 mm Inox', sub: 'Nitrogen & Oxygen Assist' },
      ],
      de: [
        { label: 'Schneidkapazität', value: '2000 x 4000 mm', sub: 'Doppelter Wechseltisch' },
        { label: 'Laserleistung', value: '2x 4.4 kW - 15 kW', sub: 'Hochpräziser Faserlaser' },
        { label: 'Toleranz', value: '±0.05 mm', sub: 'Mikropräzise Positionierung' },
        { label: 'Max. Blechstärke', value: '25 mm Stahl / 20 mm Inox', sub: 'Stickstoff & Sauerstoff' },
      ],
      fr: [
        { label: 'Capacité de coupe', value: '2000 x 4000 mm', sub: 'Double table automatique' },
        { label: 'Puissance laser', value: '2x 4.4 kW - 15 kW', sub: 'Fibre haute précision' },
        { label: 'Tolérance', value: '±0.05 mm', sub: 'Précision micrométrique' },
        { label: 'Épaisseur max.', value: '25 mm Acier / 20 mm Inox', sub: 'Azote & Oxygène' },
      ],
    },
    capabilities: {
      tr: [
        'CAD/CAM entegrasyonu ile sıfır fireye yakın optimize yerleşim (nesting)',
        'Azot gazı korumalı kesim ile paslanmaz ve alüminyumda oksitsiz, direkt kaynağa hazır kenarlar',
        'Zırh çelikleri (Armox), Hardox ve yüksek dayanımlı alaşımlarda deformasyonsuz kesim',
        'Mikro eklem (micro-joint) ve ortak hat kesimi ile yüksek verimli seri üretim',
      ],
      en: [
        'CAD/CAM integration with optimized nesting for minimal material waste',
        'Nitrogen-assisted cutting for oxide-free, weld-ready edges on stainless steel and aluminum',
        'Deformation-free cutting of armor steels (Armox), Hardox, and high-strength alloys',
        'High-efficiency mass production via micro-jointing and common-line cutting',
      ],
      de: [
        'CAD/CAM-Integration mit optimierter Schachtelung für minimalen Verschnitt',
        'Stickstoffunterstütztes Schneiden für oxidfreie Kanten bei Edelstahl und Aluminium',
        'Verzugfreies Schneiden von Panzerstählen (Armox), Hardox und hochfesten Legierungen',
        'Hocheffiziente Serienfertigung durch Micro-Joint- und Gemeinschnitt-Techniken',
      ],
      fr: [
        'Intégration CAO/FAO avec imbrication optimisée pour réduire les chutes',
        'Découpe sous azote garantissant des bords sans oxyde, directement prêts à souder',
        'Découpe sans déformation des aciers de blindage (Armox), Hardox et alliages haute résistance',
        'Production en série haute cadence avec micro-attaches et découpe commune',
      ],
    },
    materials: {
      tr: ['Karbon Çelikleri (S235, S355, St37, St52)', 'Paslanmaz Çelik (AISI 304, 316, 430)', 'Alüminyum Alaşımları (5083, 5754, 6082)', 'Zırh ve Aşınma Plakaları (Armox 500, Hardox 450)'],
      en: ['Carbon Steels (S235, S355, St37, St52)', 'Stainless Steel (AISI 304, 316, 430)', 'Aluminum Alloys (5083, 5754, 6082)', 'Armor & Wear Plates (Armox 500, Hardox 450)'],
      de: ['Kohlenstoffstähle (S235, S355, St37, St52)', 'Edelstahl (AISI 304, 316, 430)', 'Aluminiumlegierungen (5083, 5754, 6082)', 'Panzer- und Verschleißbleche (Armox 500, Hardox 450)'],
      fr: ['Aciers au carbone (S235, S355, St37, St52)', 'Acier inoxydable (AISI 304, 316, 430)', 'Alliages d\'aluminium (5083, 5754, 6082)', 'Tôles de blindage & d\'usure (Armox 500, Hardox 450)'],
    },
    machines: [
      { code: 'M-2301', name: 'CNC Fiber Lazer Kesim', specs: 'Bystronic 2000x4000 mm Çift Tabla', power: '4.4 kW' },
      { code: 'M-2302', name: 'CNC Fiber Lazer Kesim', specs: 'Bystronic 2000x4000 mm Çift Tabla', power: '4.4 kW' },
    ],
  },

  // 2. ABKANT PRES BÖLÜMÜ
  'abkant-pres': {
    specs: {
      tr: [
        { label: 'Büküm Boyu', value: '3000 mm', sub: 'Çok Eksenli CNC Senkronizasyon' },
        { label: 'Pres Kuvveti', value: '175 - 320 Ton', sub: 'Dinamik Bombeleme (Crowning)' },
        { label: 'Açı Hassasiyeti', value: '±0.2°', sub: 'Lazer Açı Ölçüm Sistemi' },
        { label: 'Eksen Sayısı', value: '6 + 1 Eksen', sub: 'Otomatik Arka Dayama' },
      ],
      en: [
        { label: 'Bending Length', value: '3000 mm', sub: 'Multi-Axis CNC Synchronization' },
        { label: 'Press Force', value: '175 - 320 Tons', sub: 'Dynamic Crowning Compensation' },
        { label: 'Angular Precision', value: '±0.2°', sub: 'Laser Angle Measurement' },
        { label: 'Control Axes', value: '6 + 1 Axes', sub: 'Automated Backgauge' },
      ],
      de: [
        { label: 'Biegelänge', value: '3000 mm', sub: 'Mehrachsige CNC-Synchronisation' },
        { label: 'Presskraft', value: '175 - 320 Tonnen', sub: 'Dynamische Bombierung' },
        { label: 'Winkelgenauigkeit', value: '±0.2°', sub: 'Lasergestützte Winkelmessung' },
        { label: 'Steuerachsen', value: '6 + 1 Achsen', sub: 'Automatischer Hinteranschlag' },
      ],
      fr: [
        { label: 'Longueur de pliage', value: '3000 mm', sub: 'Synchronisation CNC multi-axes' },
        { label: 'Force de pliage', value: '175 - 320 Tonnes', sub: 'Bombage dynamique automatique' },
        { label: 'Précision angulaire', value: '±0.2°', sub: 'Mesure d\'angle laser' },
        { label: 'Axes contrôlés', value: '6 + 1 Axes', sub: 'Butée arrière numérique' },
      ],
    },
    capabilities: {
      tr: [
        'Parçalı kalıp sistemiyle karmaşık geometriye sahip çok kademeli kutu ve profil bükümleri',
        'Dinamik hidrolik bombeleme ile 3 metre boyunca homojen açı doğruluğu',
        'Çizilmez özel takımlar ve poliüretan korumalar ile paslanmaz ve alüminyumda izsiz büküm',
        'Yüksek tonajlı bükümlerde Hardox ve zırh çeliği büküm kabiliyeti',
      ],
      en: [
        'Segmented tooling for complex multi-stage box and profile bending geometries',
        'Dynamic hydraulic crowning ensuring uniform angle precision along 3 meters',
        'Scratch-free bending for stainless steel and aluminum using polyurethane-protected tooling',
        'Heavy-tonnage bending capability for Hardox wear plates and structural armor steels',
      ],
      de: [
        'Segmentierte Werkzeuge für komplexe mehrstufige Gehäuse- und Profilbiegungen',
        'Dynamische Bombierung für gleichbleibende Winkelpräzision über 3 Meter Biegelänge',
        'Kratzfreies Biegen von Edelstahl und Aluminium mit polyurethangeschützten Werkzeugen',
        'Biegen von Hardox und Panzerstahl unter hohen Presskräften',
      ],
      fr: [
        'Outillage fractionné pour pliages étagés complexes de caissons et profilés',
        'Système de bombage dynamique garantissant un angle rigoureusement uniforme sur 3 mètres',
        'Pliage sans marquage pour inox et aluminium avec protections polyuréthane',
        'Capacité de pliage fort tonnage pour aciers anti-usure Hardox et aciers blindés',
      ],
    },
    machines: [
      { code: 'M-0606', name: 'CNC Abkant Pres 3000 mm', specs: '320 Ton Çok Eksenli CNC Kontrol', power: '32 kW' },
      { code: 'M-0607', name: 'CNC Abkant Pres 3000 mm', specs: '175 Ton Çok Eksenli CNC Kontrol', power: '23 kW' },
    ],
  },

  // 3. EKSANTRİK PRES BÖLÜMÜ
  'eksantrik-pres-bolumu': {
    specs: {
      tr: [
        { label: 'Tonaj Aralığı', value: '5 - 250 Ton', sub: '14 Adet Mekanik Pres Parkuru' },
        { label: 'Vuruş Hızı', value: '45 - 120 vuruş/dk', sub: 'Yüksek Hızlı Seri İmalat' },
        { label: 'Otomasyon', value: 'Rulo Besleme & Doğrultucu', sub: 'Otomatik Progresif Hat' },
        { label: 'Kalıp Bağlama', value: '1200 x 900 mm Tabla', sub: 'Hızlı Kalıp Değiştirme Sistemi' },
      ],
      en: [
        { label: 'Tonnage Range', value: '5 - 250 Tons', sub: '14 Mechanical Press Fleet' },
        { label: 'Stroke Speed', value: '45 - 120 strokes/min', sub: 'High-Speed Mass Stamping' },
        { label: 'Automation', value: 'Coil Feeder & Straightener', sub: 'Automatic Progressive Line' },
        { label: 'Bolster Area', value: 'Up to 1200 x 900 mm', sub: 'Quick Die Change System' },
      ],
      de: [
        { label: 'Presskraftbereich', value: '5 - 250 Tonnen', sub: '14 mechanische Pressen' },
        { label: 'Hubzahl', value: '45 - 120 Hübe/Min', sub: 'Hochgeschwindigkeitsstanzung' },
        { label: 'Automatisierung', value: 'Haspel & Richtmaschine', sub: 'Automatische Folgeverbundlinie' },
        { label: 'Tischgröße', value: 'Bis 1200 x 900 mm', sub: 'Schnellspannsystem' },
      ],
      fr: [
        { label: 'Gamme de tonnage', value: '5 - 250 Tonnes', sub: 'Parc de 14 presses mécaniques' },
        { label: 'Cadence', value: '45 - 120 coups/min', sub: 'Estampage grande série' },
        { label: 'Automatisation', value: 'Dévidoir & Redresseur', sub: 'Ligne progressive continue' },
        { label: 'Dimensions table', value: 'Jusqu\'à 1200 x 900 mm', sub: 'Changement rapide d\'outil' },
      ],
    },
    capabilities: {
      tr: [
        'Progresif ve transfer kalıplarla tek vuruşta kesme, delme, kabartma ve bükme',
        'Rulo sac açıcı ve elektronik sürücü entegrasyonu ile el değmeden yüksek hacimli imalat',
        'Aşırı yük koruma (hidrolik sigorta) ve çift el kumanda emniyet sistemleri',
        'Otomotiv ve beyaz eşya OEM parçalarında yüksek tekrarlanabilirlik ve Cpk değerleri',
      ],
      en: [
        'Simultaneous blanking, piercing, embossing, and forming with progressive tooling',
        'Unattended high-volume stamping with automatic uncoiler and servo feeder systems',
        'Hydraulic overload protection and dual-hand safety interlock systems',
        'High capability index (Cpk) and dimensional repeatability for automotive OEM components',
      ],
      de: [
        'Simultanes Stanzen, Lochen, Prägen und Biegen mit Folgeverbundwerkzeugen',
        'Vollautomatischer Betrieb über Servo-Bandanlagen für große Losgrößen',
        'Hydraulische Überlastsicherung und moderne Arbeitsschutzsysteme',
        'Hohe Prozessfähigkeit (Cpk) und Wiederholgenauigkeit für Automobilzulieferteile',
      ],
      fr: [
        'Découpe, perçage, emboutissage et cambrage simultanés sur outils à suivre',
        'Production continue automatisée via dérouleur et amenage électronique asservi',
        'Protection hydraulique contre les surcharges et sécurités conformes aux normes CE',
        'Capabilité de procédé (Cpk) élevée et répétabilité dimensionnelle pour l\'automobile',
      ],
    },
    machines: [
      { code: 'M-0501', name: 'Eksantrik Pres', specs: '250 Ton Ağır Tip Şekillendirme', power: '18.5 kW' },
      { code: 'M-0502', name: 'Eksantrik Pres', specs: '250 Ton Ağır Tip Şekillendirme', power: '18.5 kW' },
      { code: 'M-0503', name: 'Eksantrik Pres', specs: '150 Ton Hassas Kesme-Bükme', power: '11 kW' },
      { code: 'M-0504..06', name: 'Eksantrik Presler (3x)', specs: '100 Ton Seri Üretim Presleri', power: '7.5 kW' },
      { code: 'M-0507..08', name: 'Eksantrik Presler (2x)', specs: '80 Ton Çift Biyelli Presler', power: '7.5 kW' },
      { code: 'M-0509..11', name: 'Eksantrik Presler (3x)', specs: '60 Ton Delme & Form Presleri', power: '5.5 kW' },
      { code: 'M-0512..14', name: 'Eksantrik Presler (3x)', specs: '5 - 30 Ton Yardımcı Presler', power: '2 - 3.5 kW' },
    ],
  },

  // 4. HİDROLİK PRES BÖLÜMÜ
  'hidrolik-pres-bolumu': {
    specs: {
      tr: [
        { label: 'Baskı Kapasitesi', value: '40 - 300 Ton', sub: 'H Tipi ve C Tipi Gövde' },
        { label: 'Derin Çekme Gücü', value: 'Hidrolik Yastık Destekli', sub: 'Kırışma Önleyici Blankholder' },
        { label: 'Strok Kontrolü', value: 'Oransal Valf Kontrollü', sub: 'Hassas Basınç & Hız Ayarı' },
        { label: 'Tabla Boyutu', value: '1400 x 1100 mm', sub: 'Geniş Kalıp Alanı' },
      ],
      en: [
        { label: 'Press Capacity', value: '40 - 300 Tons', sub: 'H-Frame & C-Frame Design' },
        { label: 'Deep Drawing', value: 'Hydraulic Cushion Assisted', sub: 'Wrinkle-Free Blankholder' },
        { label: 'Stroke Control', value: 'Proportional Valve Control', sub: 'Precise Pressure & Speed Control' },
        { label: 'Bed Area', value: 'Up to 1400 x 1100 mm', sub: 'Large Die Bolster Space' },
      ],
      de: [
        { label: 'Presskapazität', value: '40 - 300 Tonnen', sub: 'H- und C-Gestellbauweise' },
        { label: 'Tiefziehen', value: 'Hydraulisches Ziehkissen', sub: 'Faltenfreier Niederhalter' },
        { label: 'Hubregelung', value: 'Proportionalventil-Steuerung', sub: 'Präzise Druck- & Geschwindigkeitsregelung' },
        { label: 'Tischabmessung', value: 'Bis 1400 x 1100 mm', sub: 'Großzügiger Werkzeugeinbauraum' },
      ],
      fr: [
        { label: 'Capacité de presse', value: '40 - 300 Tonnes', sub: 'Bâti en col de cygne et arcade' },
        { label: 'Emboutissage profond', value: 'Coussin hydraulique asservi', sub: 'Serre-flan anti-plissement' },
        { label: 'Contrôle de course', value: 'Servovalves proportionnelles', sub: 'Régulation précise vitesse & pression' },
        { label: 'Dimensions plateau', value: 'Jusqu\'à 1400 x 1100 mm', sub: 'Grand volume sous coulisseau' },
      ],
    },
    capabilities: {
      tr: [
        'Otomotiv gövde, yağ karteri ve muhafaza saclarında çatlamasız derin çekme (deep drawing)',
        'Hidrolik yastık (cushion) sistemiyle sac akışının kusursuz kontrolü',
        'Farklı sac kalınlıklarında homojen et kalınlığı dağılımı ve pürüzsüz yüzey',
        'Sıvama, şişirme ve hidromekanik şekillendirme operasyonları',
      ],
      en: [
        'Crack-free deep drawing of automotive structural, oil pan, and housing panels',
        'Precise blank material flow control via hydraulic cushion pressure regulation',
        'Uniform wall thickness distribution and smooth cosmetic surface finish across varied gauges',
        'Bulging, stretch forming, and hydromechanical forming operations',
      ],
      de: [
        'Rissfreies Tiefziehen von Automobil- und Strukturbauteilen wie Ölwannen und Gehäusen',
        'Präzise Steuerung des Materialflusses durch geregelte Ziehkissendrücke',
        'Gleichmäßige Wandstärkenverteilung und makellose Oberflächenqualität',
        'Hydromechanisches Umformen und Streckziehen',
      ],
      fr: [
        'Emboutissage profond sans striction ni déchirure de carters et pièces de structure',
        'Régulation dynamique de l\'écoulement matière par coussin hydraulique programmable',
        'Répartition homogène des épaisseurs et excellente finition de surface',
        'Opérations d\'hydroformage, de conformation et d\'expansion mécanique',
      ],
    },
    machines: [
      { code: 'M-0602', name: 'Hidrolik Pres', specs: '300 Ton H Tipi Derin Çekme Presi', power: '22 kW' },
      { code: 'M-0601', name: 'Hidrolik Pres', specs: '100 Ton Genel Form Presi', power: '15 kW' },
      { code: 'M-0604', name: 'Hidrolik Pres', specs: '80 Ton C Tipi Pres', power: '5.5 kW' },
      { code: 'M-0603', name: 'Hidrolik Pres', specs: '40 Ton Yardımcı Montaj Presi', power: '4 kW' },
    ],
  },

  // 5. CNC TALAŞLI İMALAT BÖLÜMÜ
  'cnc-bolumu': {
    specs: {
      tr: [
        { label: 'İşleme Alanı', value: '1300 x 650 x 600 mm', sub: '3 & 4 Eksen Dik İşleme' },
        { label: 'Mil Hızı (Spindle)', value: '10.000 - 15.000 RPM', sub: 'BT40 / Yüksek Rijitlik' },
        { label: 'İşleme Hassasiyeti', value: '±0.008 mm', sub: 'CMM Doğrulamalı Mikron Tolerans' },
        { label: 'Torna Çap / Boy', value: 'Ø350 mm x 600 mm', sub: 'Otomatik Çubuk Sürücülü' },
      ],
      en: [
        { label: 'Working Envelope', value: '1300 x 650 x 600 mm', sub: '3 & 4 Axis VMC' },
        { label: 'Spindle Speed', value: '10,000 - 15,000 RPM', sub: 'BT40 Rigid Tapping' },
        { label: 'Machining Precision', value: '±0.008 mm', sub: 'CMM-Verified Micron Tolerance' },
        { label: 'Turning Capacity', value: 'Ø350 mm x 600 mm', sub: 'Automated Bar Feeder' },
      ],
      de: [
        { label: 'Bearbeitungsbereich', value: '1300 x 650 x 600 mm', sub: '3- & 4-Achs-BAZ' },
        { label: 'Spindeldrehzahl', value: '10.000 - 15.000 U/Min', sub: 'BT40 Hohe Steifigkeit' },
        { label: 'Präzision', value: '±0.008 mm', sub: 'CMM-geprüfte Mikrotoleranz' },
        { label: 'Drehkapazität', value: 'Ø350 mm x 600 mm', sub: 'Automatischer Stangenvorschub' },
      ],
      fr: [
        { label: 'Courses d\'usinage', value: '1300 x 650 x 600 mm', sub: 'Centres d\'usinage 3 & 4 axes' },
        { label: 'Vitesse de broche', value: '10 000 - 15 000 tr/min', sub: 'Attachement BT40 rigide' },
        { label: 'Précision d\'usinage', value: '±0.008 mm', sub: 'Tolérance micrométrique contrôlée MMT' },
        { label: 'Capacité de tournage', value: 'Ø350 mm x 600 mm', sub: 'Embarreur automatique' },
      ],
    },
    capabilities: {
      tr: [
        'Döküm, dövme ve sac kaynaklı konstrüksiyonların tek bağlamada hassas talaşlı imalatı',
        'Otomatik çubuk sürücülü CNC tornalar ile yüksek adetli burç, pim ve mil üretimi',
        'Savunma ve medikal endüstrisi için titanyum, inconel ve paslanmaz çelik işleme kabiliyeti',
        'Mitutoyo 3D CMM cihazı ile %100 ölçüsel raporlama ve PPAP Seviye 3 dokümantasyonu',
      ],
      en: [
        'Single-setup precision machining of castings, forgings, and welded sheet assemblies',
        'High-volume production of precision bushings, pins, and shafts via bar-fed CNC lathes',
        'Machining capability for titanium, inconel, and stainless alloys for defense and medical OEM',
        '100% dimensional reporting with Mitutoyo 3D CMM and PPAP Level 3 documentation',
      ],
      de: [
        'Präzisionszerspanung von Guss-, Schmiede- und Schweißbaugruppen in einer Aufspannung',
        'Serienfertigung von Präzisionsbuchsen, Bolzen und Wellen auf Stangendrehautomaten',
        'Zerspanungskompetenz für Titan, Inconel und Edelstähle für Wehr- und Medizintechnik',
        '100%ige Maßkontrolle mit Mitutoyo 3D-KMG und PPAP Level 3 Dokumentation',
      ],
      fr: [
        'Usinage de haute précision en montage unique de pièces de fonderie, forge et mécano-soudées',
        'Production de masse de bagues, axes et arbres de précision sur tours avec embarreur',
        'Capacité d\'usinage du titane, de l\'inconel et de l\'inox pour la défense et le médical',
        'Rapports de contrôle tridimensionnel MMT Mitutoyo et soumission de dossiers PPAP Niveau 3',
      ],
    },
    machines: [
      { code: 'M-0204', name: 'CNC Dik İşleme Merkezi', specs: '1300 x 650 mm Tabla / 4. Eksen Divizörlü', power: '37.5 kW' },
      { code: 'M-0101', name: 'CNC Dik İşleme Merkezi', specs: '1000 x 550 mm Tabla / Yüksek Devir', power: '25 kW' },
      { code: 'M-0102', name: 'CNC Dik İşleme Merkezi', specs: '850 x 500 mm Tabla / Seri İmalat', power: '15 kW' },
      { code: 'M-0201', name: 'CNC Torna Tezgahı', specs: 'Ø350 mm x 600 mm İşleme Çapı', power: '25 kW' },
      { code: 'M-0202', name: 'CNC Torna (Çubuk Sürücülü)', specs: 'Ø65 mm Çubuk Kapasitesi / Otomatik Besleme', power: '30 kW' },
    ],
  },

  // 6. ROBOTİK KAYNAK BÖLÜMÜ
  'robot-kaynak-bolumu': {
    specs: {
      tr: [
        { label: 'Robot Hücreleri', value: 'Çift İstasyonlu H-Fikstür', sub: 'Sıfır Duruş Süresi' },
        { label: 'Kaynak Yöntemi', value: 'MIG / MAG / Pulse', sub: 'Sinerjik İnvertör Teknolojisi' },
        { label: 'Sertifikasyon', value: 'ISO 3834-2 Onaylı', sub: 'Kaynak Mühendisi Gözetimi' },
        { label: 'Tekrarlanabilirlik', value: '±0.08 mm', sub: 'Homojen Nüfuziyet & Dikiş Formu' },
      ],
      en: [
        { label: 'Robot Cells', value: 'Dual-Station H-Turn Table', sub: 'Zero Operator Idle Time' },
        { label: 'Welding Process', value: 'MIG / MAG / Pulse Gas-Metal', sub: 'Synergic Inverter Technology' },
        { label: 'Certification', value: 'ISO 3834-2 Certified', sub: 'Welding Engineer Supervised' },
        { label: 'Repeatability', value: '±0.08 mm', sub: 'Uniform Penetration & Seam Geometry' },
      ],
      de: [
        { label: 'Schweißzellen', value: 'Doppelstationen-Drehtisch', sub: 'Unterbrechungsfreier Zyklus' },
        { label: 'Schweißverfahren', value: 'MIG / MAG / Impulsschweißen', sub: 'Synergische Inverter-Technik' },
        { label: 'Zertifizierung', value: 'ISO 3834-2 zertifiziert', sub: 'Schweißfachingenieur-Aufsicht' },
        { label: 'Wiederholgenauigkeit', value: '±0.08 mm', sub: 'Homogener Einbrand & Nahtoptik' },
      ],
      fr: [
        { label: 'Cellules robotisées', value: 'Double poste table pivotante', sub: 'Temps masqué sans arrêt cycle' },
        { label: 'Procédé de soudage', value: 'MIG / MAG / Arc pulsé', sub: 'Technologie onduleur synergique' },
        { label: 'Certification', value: 'ISO 3834-2 certifié', sub: 'Supervision par Ingénieur Soudeur' },
        { label: 'Répétabilité', value: '±0.08 mm', sub: 'Pénétration constante & cordon parfait' },
      ],
    },
    capabilities: {
      tr: [
        'Otomotiv şasisi, askeri zırh parçaları ve iş makinesi alt gruplarında %100 tekrarlanabilir kaynak',
        'Dikiş takip sensörleri ve sıçrantısız (spatter-free) pulse kaynak kontrolü',
        'Kaynak sonrası gerilim giderme ve penetrant muayene (tahribatsız test) kontrolleri',
        'Müşteriye özel kaynak fikstürü tasarımı ile sıfır kaynak çekmesi ve boyutsal sapma',
      ],
      en: [
        '100% repeatable welding on automotive chassis, defense armor, and construction sub-assemblies',
        'Seam tracking sensors and spatter-free pulsed arc control',
        'Post-weld stress relief and penetrant testing (NDT non-destructive evaluation)',
        'Custom fixture design eliminating weld distortion and dimensional drift',
      ],
      de: [
        '100% reproduzierbare Schweißnähte für Fahrgestelle, Wehrtechnik und Baumaschinenmodule',
        'Nahtverfolgungssensoren und spritzerarmes Impulsschweißen',
        'Spannungsarmglühen und zerstörungsfreie Eindringprüfung (PT)',
        'Eigens konstruierte Schweißvorrichtungen zur Vermeidung von Verzug und Maßabweichungen',
      ],
      fr: [
        'Soudure 100% reproductible sur châssis automobiles, blindages et ensembles pour le BTP',
        'Capteurs de suivi de joint et arc pulsé sans projections métalliques',
        'Traitement thermique de détensionnement et contrôle par ressuage (CND non destructif)',
        'Conception de gabarits sur mesure éliminant les déformations et les retraits de soudage',
      ],
    },
    machines: [
      { code: 'M-0917', name: 'Robotik Kaynak Hücresi', specs: '6 Eksenli Robot + Çift Pozisyoner Tabla', power: 'DP 320' },
      { code: 'M-0918', name: 'Robotik Kaynak Hücresi', specs: '6 Eksenli Robot + Çift Pozisyoner Tabla', power: 'DP 320' },
    ],
  },

  // 7. MANUEL KAYNAK BÖLÜMÜ
  'kaynak-bolumu': {
    specs: {
      tr: [
        { label: 'Makine Sayısı', value: '18 Adet Kaynak Ünitesi', sub: 'Sinerjik Gazaltı & TIG' },
        { label: 'Personel Yetkinliği', value: 'EN ISO 9606-1 Sertifikalı', sub: 'Onaylı Kaynakçılar' },
        { label: 'Kaynak Prosedürü', value: 'WPS / PQR Onaylı', sub: 'EN 1090 & ISO 3834-2' },
        { label: 'Test & Kontrol', value: 'VT, PT, MT Tahribatsız Test', sub: 'Seviye II Uzman Denetimi' },
      ],
      en: [
        { label: 'Equipment Fleet', value: '18 Welding Stations', sub: 'Synergic GMAW & GTAW / TIG' },
        { label: 'Welder Qualification', value: 'EN ISO 9606-1 Certified', sub: 'Approved Welders' },
        { label: 'Procedures', value: 'Qualified WPS / PQR', sub: 'EN 1090 & ISO 3834-2' },
        { label: 'Quality Testing', value: 'Visual, Penetrant, Magnetic NDT', sub: 'Level II Certified Inspectors' },
      ],
      de: [
        { label: 'Maschinenpark', value: '18 Schweißstationen', sub: 'Synergische MAG- & WIG-Anlagen' },
        { label: 'Qualifikation', value: 'EN ISO 9606-1 geprüft', sub: 'Zertifizierte Fachschweißer' },
        { label: 'Verfahren', value: 'Qualifizierte WPS / PQR', sub: 'EN 1090 & ISO 3834-2' },
        { label: 'Prüfverfahren', value: 'VT, PT, MT ZfP-Prüfungen', sub: 'Stufe II zertifizierte Prüfer' },
      ],
      fr: [
        { label: 'Parc matériel', value: '18 Postes de soudage', sub: 'MIG/MAG synergique & TIG' },
        { label: 'Qualification soudeurs', value: 'Certifiés EN ISO 9606-1', sub: 'Soudeurs qualifiés' },
        { label: 'Procédures', value: 'DMOS / QMOS validés', sub: 'EN 1090 & ISO 3834-2' },
        { label: 'Contrôles', value: 'Visuel (VT), Ressuage (PT), Magnéto (MT)', sub: 'Inspecteurs certifiés Niveau II' },
      ],
    },
    capabilities: {
      tr: [
        'Ağır şasi konstrüksiyonları ve kompleks braket montajlarında çok pasolu mukavemet kaynağı',
        'Paslanmaz çelik ve alüminyum yapılarda sızdırmaz TIG (argon) kaynağı',
        'WPS ve PQR dokümantasyonu doğrultusunda tüm kaynak parametrelerinin dijital kaydı',
        'Kaynak ağzı açma ve kaynak öncesi ön ısıtma protokolleri ile çatlak riskinin sıfırlanması',
      ],
      en: [
        'Multi-pass structural welding for heavy chassis and complex bracket assemblies',
        'Hermetic TIG (argon) welding for stainless steel and architectural aluminum structures',
        'Digital monitoring of all welding parameters in full compliance with WPS and PQR records',
        'Beveling preparation and pre-heating protocols eliminating hydrogen cracking risks',
      ],
      de: [
        'Mehrlagenschweißen für schwere Fahrgestelle und komplexe Trägerbaugruppen',
        'Dichtes WIG-Schweißen von Edelstahl- und Aluminiumkonstruktionen',
        'Digitale Protokollierung aller Schweißparameter gemäß WPS- und PQR-Vorgaben',
        'Schweißnahtvorbereitung und Vorwärmung zur vollständigen Vermeidung von Rissbildung',
      ],
      fr: [
        'Soudage multipasse à haute résistance pour châssis lourds et sous-ensembles complexes',
        'Soudage TIG étanche de précision pour structures inox et aluminium',
        'Enregistrement numérique de tous les paramètres de soudage selon les DMOS validés',
        'Chanfreinage et préchauffage maîtrisés éliminant tout risque de fissuration',
      ],
    },
    machines: [
      { code: 'M-0901..12', name: 'Gazaltı Kaynak Makineleri (12x)', specs: 'MIG/MAG 500A Sinerjik İnvertör', power: '24 kW' },
      { code: 'M-0913..16', name: 'TIG / Argon Kaynak Makineleri (4x)', specs: 'AC/DC Pulse TIG Kaynağı', power: '15 kW' },
      { code: 'M-0919..20', name: 'Punta & Saplama Kaynak', specs: 'Pnömatik Nokta Direnç Kaynağı', power: '35 kVA' },
    ],
  },

  // 8. KALIP BÖLÜMÜ
  'kalip-bolumu': {
    specs: {
      tr: [
        { label: 'Kalıp Türleri', value: 'Progresif, Derin Çekme, Kesme', sub: 'Tasarım & İmalat Kendi Bünyemizde' },
        { label: 'CAD/CAM Yazılımı', value: 'Siemens NX & Tebis', sub: '3D Katı Modelleme & Simülasyon' },
        { label: 'Kalıp İşleme Parkuru', value: 'CNC Freze, Torna, Taşlama', sub: 'Sertleştirilmiş Çelik İşleme' },
        { label: 'Kalıp Bakım', value: 'Periyodik Önleyici Bakım', sub: '500.000+ Baskı Ömrü Garantisi' },
      ],
      en: [
        { label: 'Die Categories', value: 'Progressive, Deep Draw, Stamping', sub: '100% In-House Tooling' },
        { label: 'CAD/CAM Suites', value: 'Siemens NX & Tebis', sub: '3D Solid Modeling & Stamping Simulation' },
        { label: 'Machining Fleet', value: 'CNC Mills, Lathes, Surface Grinders', sub: 'Hardened Tool Steel Machining' },
        { label: 'Die Maintenance', value: 'Preventive Die Maintenance', sub: 'Guaranteed 500,000+ Stroke Life' },
      ],
      de: [
        { label: 'Werkzeugtypen', value: 'Folgeverbund-, Zieh- & Stanzwerkzeuge', sub: 'Hauseigener Werkzeugbau' },
        { label: 'CAD/CAM-Systeme', value: 'Siemens NX & Tebis', sub: '3D-Modellierung & Umformsimulation' },
        { label: 'Maschinenpark', value: 'CNC-Fräsen, Drehbänke, Schleifmaschinen', sub: 'Bearbeitung gehärteter Werkzeugstähle' },
        { label: 'Instandhaltung', value: 'Präventive Werkzeugwartung', sub: 'Standzeitgarantie > 500.000 Hübe' },
      ],
      fr: [
        { label: 'Types d\'outillages', value: 'Progressifs, Emboutissage, Découpe', sub: 'Conception & Usinage 100% intégrés' },
        { label: 'Logiciels CAO/FAO', value: 'Siemens NX & Tebis', sub: 'Modélisation 3D & Simulation emboutissage' },
        { label: 'Parc machines', value: 'Fraiseuses CNC, Tours, Rectifieuses', sub: 'Usinage d\'aciers traités trempés' },
        { label: 'Maintenance', value: 'Entretien préventif systématique', sub: 'Garantie de vie > 500 000 coups' },
      ],
    },
    capabilities: {
      tr: [
        'Sac parça geometrisine göre sıfırdan anahtar teslim progresif kalıp tasarımı ve imalatı',
        'Simülasyon programları ile sac yırtılma, incelme ve geri esneme (springback) analizleri',
        '1.2379, 1.2344 ve Böhler gibi yüksek dayanımlı takım çelikleri ile uzun kalıp ömrü',
        'Kalıp arıza ve revizyonlarına kendi atölyemizde anında müdahale ile kesintisiz üretim',
      ],
      en: [
        'Turnkey progressive and transfer die design and manufacturing from concept to production',
        'Forming simulation analyzing thinning, tearing, and springback behavior before machining',
        'Extended tool life utilizing premium grade tool steels (1.2379, 1.2344, Böhler)',
        'Immediate in-house die modification and repair eliminating customer production downtime',
      ],
      de: [
        'Schlüsselfertige Konstruktion und Fertigung von Folgeverbundwerkzeugen aus einer Hand',
        'Umformsimulation zur Analyse von Rissgefahr, Ausdünnung und Rückfederung vor dem Fräsen',
        'Lange Werkzeugstandzeiten durch hochwertige Werkzeugstähle (1.2379, 1.2344, Böhler)',
        'Sofortige Inhouse-Wartung und Werkzeuganpassungen für unterbrechungsfreie Kundenbelieferung',
      ],
      fr: [
        'Conception et fabrication clés en main d\'outils progressifs et moules d\'emboutissage',
        'Simulation numérique d\'emboutissage prévenant déchirures, strictions et retour élastique',
        'Durabilité maximale grâce aux aciers d\'outillage haut de gamme (1.2379, 1.2344, Böhler)',
        'Intervention immédiate en atelier interne pour modifications et maintenance d\'outillage',
      ],
    },
    machines: [
      { code: 'M-0301', name: 'Kalıpçı Frezesi (NCS)', specs: 'Dijital Cetvelli Hassas Frezeleme', power: '15 kW' },
      { code: 'M-0302', name: 'Kalıpçı Frezesi', specs: 'Ağır Kalıp Gövde Frezeleme', power: '12.5 kW' },
      { code: 'M-0203', name: 'Universal Torna Tezgahı', specs: 'Ø500 mm x 1500 mm Kalıp Parça Tornalama', power: '6.6 kW' },
      { code: 'M-0304..05', name: 'Universal Frezeler (2x)', specs: 'Kalıp İnce Alıştırma Tezgahları', power: '4.5 kW' },
    ],
  },

  // 9. ELEKTROSTATİK TOZ BOYA BÖLÜMÜ
  'elektrostatik-toz-boya': {
    specs: {
      tr: [
        { label: 'Tesis Tipi', value: 'Otomatik Konveyörlü Hat', sub: 'Tünel Kürleme Fırını' },
        { label: 'Fırın Sıcaklığı', value: '180°C - 220°C', sub: 'Hassas Sıcaklık Kontrolü' },
        { label: 'Korozyon Direnci', value: '500 - 1000 Saat', sub: 'Tuz Testi (ASTM B117) Dayanımı' },
        { label: 'Kaplama Kalınlığı', value: '60 - 120 µm', sub: 'Homojen Film Kalınlığı' },
      ],
      en: [
        { label: 'Line Architecture', value: 'Automated Conveyorized Line', sub: 'Continuous Tunnel Curing Oven' },
        { label: 'Curing Temperature', value: '180°C - 220°C', sub: 'Microprocessor PID Control' },
        { label: 'Corrosion Resistance', value: '500 - 1000 Hours', sub: 'Salt Spray Resistance (ASTM B117)' },
        { label: 'Film Thickness', value: '60 - 120 µm', sub: 'Uniform Electrostatic Coating' },
      ],
      de: [
        { label: 'Anlagentyp', value: 'Automatische Förderbandlinie', sub: 'Durchlauftunnelofen' },
        { label: 'Einbrenntemperatur', value: '180°C - 220°C', sub: 'Genaue Temperaturführung' },
        { label: 'Korrosionsbeständigkeit', value: '500 - 1000 Stunden', sub: 'Salzsprühtest nach ASTM B117' },
        { label: 'Schichtdicke', value: '60 - 120 µm', sub: 'Homogene Pulverschicht' },
      ],
      fr: [
        { label: 'Type d\'installation', value: 'Ligne convoyée automatisée', sub: 'Four tunnel de polymérisation' },
        { label: 'Température de cuisson', value: '180°C - 220°C', sub: 'Régulation thermique précise' },
        { label: 'Tenue corrosion', value: '500 - 1000 Heures', sub: 'Résistance brouillard salin ASTM B117' },
        { label: 'Épaisseur déposée', value: '60 - 120 µm', sub: 'Épaisseur de film homogène' },
      ],
    },
    capabilities: {
      tr: [
        'Demir fosfat ve nano-seramik yüzey şartlandırma ile üstün boya yapışma (adhezyon) mukavemeti',
        'Tüm RAL kodlarında polyester, epoksi ve poliüretan toz boya uygulamaları',
        'Dış ortam, UV dayanımı ve otomotiv taş çarpma testlerine uygun yüzey sertliği',
        'Elcometer dijital cihazlarla kuru film kalınlığı, parlaklık ve çapraz kesim (cross-cut) kontrolleri',
      ],
      en: [
        'Iron phosphate and nano-ceramic pre-treatment providing exceptional paint adhesion strength',
        'Application of polyester, epoxy, and polyurethane powder systems across all RAL shades',
        'High surface hardness meeting severe outdoor weathering, UV, and automotive stone-chip tests',
        'Dry film thickness, gloss level, and cross-cut adhesion verification with Elcometer gauges',
      ],
      de: [
        'Eisenphosphatierung und Nanokeramik-Vorbehandlung für maximale Lackhaftung',
        'Verarbeitung aller RAL-Farbtöne in Polyester-, Epoxid- und Polyurethanqualitäten',
        'Witterungs-, UV- und Steinschlagbeständigkeit nach Automobil- und Baumaschinenstandards',
        'Laufende Schichtdicken-, Glanzgrad- und Gitterschnittprüfungen mit Elcometer-Messtechnik',
      ],
      fr: [
        'Prétraitement par phosphatation et nanotechnologie céramique pour une adhérence parfaite',
        'Application de poudres polyester, époxy et mixtes dans l\'ensemble du nuancier RAL',
        'Excellente résistance aux UV, aux intempéries sévères et aux impacts de gravillons',
        'Contrôles continus de l\'épaisseur de film, de la brillance et adhérence par quadrillage',
      ],
    },
  },

  // 10. KUMLAMA VE YÜZEY İŞLEM BÖLÜMÜ
  'kumlama-boya-bolumu': {
    specs: {
      tr: [
        { label: 'Yüzey Temizliği', value: 'Sa 2.5 Standart', sub: 'ISO 8501-1 Uyumlu' },
        { label: 'Aşındırıcı Tipi', value: 'Çelik Grit & Bilya', sub: 'Geri Dönüşümlü Sistem' },
        { label: 'Boya Yöntemi', value: 'Airless Islak Boya & Astar', sub: 'Epoksi & Poliüretan Kaplama' },
        { label: 'Parça Boyutu', value: 'Büyük Şasi ve Gövdeler', sub: 'Geniş Kumlama Odası' },
      ],
      en: [
        { label: 'Surface Cleanliness', value: 'Sa 2.5 Grade', sub: 'ISO 8501-1 Compliant' },
        { label: 'Blasting Media', value: 'Steel Grit & Round Shot', sub: 'Recirculating Blast System' },
        { label: 'Painting Method', value: 'Airless Wet Spray & Primer', sub: 'Epoxy & Polyurethane Systems' },
        { label: 'Workpiece Size', value: 'Large Frames & Welded Booms', sub: 'Spacious Blast Room' },
      ],
      de: [
        { label: 'Oberflächenreinheit', value: 'Sa 2.5 Reinheitsgrad', sub: 'Nach ISO 8501-1' },
        { label: 'Strahlmittel', value: 'Stahlgusskantkorn & Kugeln', sub: 'Rückgewinnungsanlage' },
        { label: 'Lackierverfahren', value: 'Airless-Nasslack & Grundierung', sub: 'Epoxid- & Polyurethanlacke' },
        { label: 'Bauteilgröße', value: 'Große Fahrgestelle & Maste', sub: 'Großraum-Strahlkabine' },
      ],
      fr: [
        { label: 'Degré de propreté', value: 'Sa 2.5 selon ISO 8501-1', sub: 'Décapage parfait' },
        { label: 'Abrasif utilisé', value: 'Grenailles d\'acier angulaires', sub: 'Système à recyclage' },
        { label: 'Application peinture', value: 'Pulvérisation Airless & Apprêt', sub: 'Systèmes époxy & polyuréthane' },
        { label: 'Dimensions pièces', value: 'Châssis mécano-soudés lourds', sub: 'Cabine de grenaillage spacieuse' },
      ],
    },
    capabilities: {
      tr: [
        'Kaynak tufalı, oksit tabakası ve pasın tamamen temizlenerek boya öncesi ideal yüzey pürüzlülüğü (Rz)',
        'Ağır iş makinesi ve savunma sanayi gövdelerinde epoksi çinko astar ile üstün korozyon koruması',
        'Airless yüksek basınçlı püskürtme ile homojen yaş boya film kalınlığı',
      ],
      en: [
        'Complete removal of mill scale, rust, and weld discoloration for ideal anchor profile (Rz)',
        'Heavy-duty epoxy zinc-rich priming delivering long-term barrier protection for defense frames',
        'Airless high-pressure spray application guaranteeing uniform wet and dry film thickness',
      ],
      de: [
        'Vollständige Zunder-, Rost- und Oxidentfernung für optimale Verankerungsprofile (Rz)',
        'Hochwertige Zinkstaub-Epoxid-Grundierungen für maximalen Korrosionsschutz schwerer Rahmen',
        'Airless-Hochdruckspritzen für absolut homogene Nass- und Trockenschichtdicken',
      ],
      fr: [
        'Élimination intégrale de la calamine, de la rouille et des traces de soudage (profil Rz idéal)',
        'Application d\'apprêts époxy riches en zinc offrant une protection anticorrosion renforcée',
        'Application Airless haute pression assurant un film de peinture liquide parfaitement régulier',
      ],
    },
  },

  // 11. GİYOTİN MAKAS BÖLÜMÜ
  'giyotin-makas': {
    specs: {
      tr: [
        { label: 'Kesim Boyu', value: '3000 mm', sub: 'Hassas Arka Dayama' },
        { label: 'Maks. Sac Kalınlığı', value: '10 mm Karbon Çeliği', sub: 'Hidrolik Baskı Çeneleri' },
        { label: 'Kesme Açısı', value: 'Ayarlanabilir Kesme Açısı', sub: 'Bükülme & Burulma Önleyici' },
        { label: 'Bıçak Tipi', value: '4 Ağızlı Özel Takım Çeliği', sub: 'Çapaksız Düzgün Kesim' },
      ],
      en: [
        { label: 'Cutting Length', value: '3000 mm', sub: 'Precision CNC Backgauge' },
        { label: 'Max Thickness', value: '10 mm Mild Steel', sub: 'Hydraulic Hold-Down Clamps' },
        { label: 'Rake Angle', value: 'Adjustable Rake Angle', sub: 'Anti-Twist Cutting Quality' },
        { label: 'Blade Material', value: '4-Edge High-Alloy Tool Steel', sub: 'Burr-Free Straight Cuts' },
      ],
      de: [
        { label: 'Schnittlänge', value: '3000 mm', sub: 'Präziser CNC-Hinteranschlag' },
        { label: 'Max. Blechstärke', value: '10 mm Baustahl', sub: 'Hydraulische Niederhalter' },
        { label: 'Schnittwinkel', value: 'Verstellbarer Schnittwinkel', sub: 'Verwindungsfreier Schnitt' },
        { label: 'Messertyp', value: '4-Schneiden-Spezialstahl', sub: 'Gratfreie Schnittkanten' },
      ],
      fr: [
        { label: 'Longueur de coupe', value: '3000 mm', sub: 'Butée arrière numérique précise' },
        { label: 'Épaisseur max.', value: '10 mm Acier doux', sub: 'Serre-tôles hydrauliques' },
        { label: 'Angle de coupe', value: 'Angle réglable', sub: 'Évite le vrillage des bandes' },
        { label: 'Lames de coupe', value: 'Acier allié à 4 arêtes réversibles', sub: 'Coupe droite sans bavure' },
      ],
    },
    capabilities: {
      tr: [
        'Pres ve lazer öncesi sac plakaların hızlı, çapaksız ve ekonomik ebatlanması',
        'Hidrolik baskı çeneleri ile sac yüzeyinde kayma ve çizilme olmadan hassas kesim',
        'Geniş ebatlı plaka saclardan seri şerit ve dikdörtgen parçaların çıkarılması',
      ],
      en: [
        'Fast, cost-effective, and burr-free preliminary blank shearing before laser and press lines',
        'Hydraulic clamping cylinders preventing sheet slippage and cosmetic scratching during cutting',
        'High-capacity production of rectangular blanks and structural strip components',
      ],
      de: [
        'Schneller, wirtschaftlicher und gratfreier Grobzuschnitt vor Laserschneid- und Presslinien',
        'Hydraulische Niederhalter verhindern Verrutschen und schonen die Blechoberfläche',
        'Serienzuschnitt von Bändern und rechteckigen Ronden aus Großformatblechen',
      ],
      fr: [
        'Cisaillage préliminaire rapide, propre et économique des flans avant laser et emboutissage',
        'Serre-tôles hydrauliques évitant tout glissement et protégeant la surface des tôles',
        'Débitage en série de bandes et tôles rectangulaires à partir de formats marchands',
      ],
    },
  },

  // 12. MATKAP VE KILAVUZ BÖLÜMÜ
  'matkap': {
    specs: {
      tr: [
        { label: 'Tezgah Parkuru', value: 'Radyal & Sütunlu Matkaplar', sub: 'Çok Milli Delme Kabiliyeti' },
        { label: 'Delme Çapı', value: 'Ø1 mm - Ø65 mm', sub: 'Hassas Pozisyonlama' },
        { label: 'Kılavuz Kapasitesi', value: 'M3 - M36 Diş Açma', sub: 'Pnömatik & Mekanik Kılavuz Kolları' },
        { label: 'Özel İşlemler', value: 'Havşa, Rayba, Lamba Açma', sub: 'Tekrarlanabilir Derinlik Stoperi' },
      ],
      en: [
        { label: 'Machinery Fleet', value: 'Radial & Pillar Drilling Machines', sub: 'Multi-Spindle Capability' },
        { label: 'Drilling Range', value: 'Ø1 mm - Ø65 mm', sub: 'Precision Positioning' },
        { label: 'Tapping Capacity', value: 'M3 - M36 Threading', sub: 'Pneumatic Articulated Arms' },
        { label: 'Operations', value: 'Countersinking, Reaming, Counterboring', sub: 'Repeatable Depth Stop Control' },
      ],
      de: [
        { label: 'Maschinenbestand', value: 'Radial- & Säulenbohrmaschinen', sub: 'Mehrspindelige Bearbeitung' },
        { label: 'Bohrbereich', value: 'Ø1 mm - Ø65 mm', sub: 'Präzise Bohrpositionierung' },
        { label: 'Gewindeschneiden', value: 'M3 - M36 Gewindekapazität', sub: 'Pneumatische Gelenkarme' },
        { label: 'Zusatzoperationen', value: 'Senken, Reiben, Anspiegeln', sub: 'Tiefenanschlag-Wiederholung' },
      ],
      fr: [
        { label: 'Parc machines', value: 'Perceuses radiales & à colonne', sub: 'Capacité multi-broches' },
        { label: 'Diamètre de perçage', value: 'Ø1 mm - Ø65 mm', sub: 'Positionnement de précision' },
        { label: 'Taraudage', value: 'M3 - M36 Filetage métrique', sub: 'Bras articulés pneumatiques' },
        { label: 'Opérations annexes', value: 'Chanfreinage, Alésage, Lamage', sub: 'Butée de profondeur micrométrique' },
      ],
    },
    capabilities: {
      tr: [
        'Kaynaklı ve preslenmiş parçalarda montaj delikleri, cıvata havşaları ve kılavuz çekme operasyonları',
        'Pnömatik kılavuz çekme kolları ile kırılmasız, dik açılı ve hızlı diş açma',
        'Büyük ebatlı şasi parçalarında radyal kol ile geniş hareket alanı ve esnek delme',
      ],
      en: [
        'Precision hole drilling, bolt countersinking, and tapping on welded and stamped assemblies',
        'Pneumatic articulated tapping arms ensuring perpendicular, unbroken, high-speed threading',
        'Radial arm reach accommodating large chassis structures with flexible multi-point drilling',
      ],
      de: [
        'Bohren von Montagelöchern, Senkungen und Gewindeschneiden an Schweiß- und Pressteilen',
        'Pneumatische Gewindeschneidarme garantieren winkelgerechte, bruchsichere Gewinde',
        'Große Ausladung für flexible Mehrpunktbearbeitung an schweren Fahrgestellrahmen',
      ],
      fr: [
        'Perçage de trous de fixation, fraisures et taraudages sur ensembles mécano-soudés',
        'Bras de taraudage articulé pneumatique garantissant un filetage rapide et sans casse',
        'Grand rayon d\'action des perceuses radiales permettant d\'usiner de grands châssis',
      ],
    },
  },

  // 13. PRES ATÖLYESİ GENEL
  'pres': {
    specs: {
      tr: [
        { label: 'Toplam Pres Sayısı', value: '18 Adet Pres', sub: 'Eksantrik ve Hidrolik Entegrasyonu' },
        { label: 'Kuvvet Yelpazesi', value: '5 Ton - 300 Ton', sub: 'Hafif Parçadan Ağır Sanayiye' },
        { label: 'Üretim Türü', value: 'Seri İmalat & Prototip', sub: 'Yıllık 10M+ Parça Kapasitesi' },
        { label: 'Kalite Güvence', value: 'IATF 16949 Onaylı', sub: 'İstatistiksel Proses Kontrol (SPC)' },
      ],
      en: [
        { label: 'Total Presses', value: '18 Dedicated Presses', sub: 'Integrated Mechanical & Hydraulic' },
        { label: 'Tonnage Range', value: '5 Tons - 300 Tons', sub: 'From Precision Stamping to Heavy Draw' },
        { label: 'Production Mode', value: 'Mass Production & Prototypes', sub: '10M+ Components / Year' },
        { label: 'Quality Assurance', value: 'IATF 16949 Certified', sub: 'Statistical Process Control (SPC)' },
      ],
      de: [
        { label: 'Gesamtpressen', value: '18 Pressanlagen', sub: 'Integrierte mechanische & hydraulische Linien' },
        { label: 'Druckkraftbereich', value: '5 Tonnen - 300 Tonnen', sub: 'Von Präzisions- bis Schwerumformung' },
        { label: 'Fertigungsart', value: 'Großserie & Prototypenbau', sub: 'Über 10 Mio. Teile / Jahr' },
        { label: 'Qualität', value: 'IATF 16949 auditiert', sub: 'Statistische Prozesslenkung (SPC)' },
      ],
      fr: [
        { label: 'Total presses', value: '18 Presses spécialisées', sub: 'Lignes mécaniques et hydrauliques' },
        { label: 'Gamme d\'effort', value: '5 Tonnes - 300 Tonnes', sub: 'Du découpage fin à l\'emboutissage lourd' },
        { label: 'Mode opératoire', value: 'Grandes séries & Prototypage', sub: 'Plus de 10M pièces / an' },
        { label: 'Assurance Qualité', value: 'Certifié IATF 16949', sub: 'Maîtrise statistique des procédés (MSP)' },
      ],
    },
    capabilities: {
      tr: [
        'Otomotiv ve savunma ana üreticileri için çok istasyonlu transfer ve progresif şekillendirme',
        'Kalıp sensörleri ve otomatik yağlama ile kalıp ömrünün ve parça kalitesinin maksimizasyonu',
        'Sac kalınlığı 0.5 mm\'den 12 mm\'ye kadar geniş aralıkta form verme ve büküm',
      ],
      en: [
        'Multi-station progressive and transfer forming dedicated to automotive and defense OEMs',
        'Die protection sensors and automatic micro-lubrication maximizing tool life and part finish',
        'Sheet forming and blanking across an extensive gauge range from 0.5 mm up to 12 mm',
      ],
      de: [
        'Folgeverbund- und Transferumformung für weltweite Automobil- und Wehrtechnikhersteller',
        'Werkzeugüberwachungssensoren und automatische Schmierung für höchste Standzeiten',
        'Blechumformung über ein breites Dickenband von 0.5 mm bis 12 mm',
      ],
      fr: [
        'Emboutissage et découpage sur outils progressifs et transfert pour donneurs d\'ordres majeurs',
        'Capteurs de détection d\'effort et micro-lubrification automatique préservant les outillages',
        'Formage de tôles sur une large plage d\'épaisseurs s\'étendant de 0.5 mm à 12 mm',
      ],
    },
  },

  // 14. SERTİFİKALAR VE KALİTE
  'sertifikalar': {
    specs: {
      tr: [
        { label: 'Otomotiv Standardı', value: 'IATF 16949:2016', sub: 'TÜV Rheinland Onaylı' },
        { label: 'Kalite Yönetimi', value: 'ISO 9001:2015', sub: 'Uluslararası Kalite Güvencesi' },
        { label: 'Kaynak Güvencesi', value: 'ISO 3834-2', sub: 'Ergimiş Kaynak Kalite Standardı' },
        { label: 'Çevre & İSG', value: 'ISO 14001 & ISO 45001', sub: 'Sürdürülebilir & Güvenli Üretim' },
      ],
      en: [
        { label: 'Automotive Quality', value: 'IATF 16949:2016', sub: 'TÜV Rheinland Certified' },
        { label: 'Quality Management', value: 'ISO 9001:2015', sub: 'International Quality Assurance' },
        { label: 'Welding Quality', value: 'ISO 3834-2', sub: 'Fusion Welding Standard' },
        { label: 'EHS Standards', value: 'ISO 14001 & ISO 45001', sub: 'Environmental & Occupational Health' },
      ],
      de: [
        { label: 'Automobilnorm', value: 'IATF 16949:2016', sub: 'TÜV Rheinland zertifiziert' },
        { label: 'Qualitätsmanagement', value: 'ISO 9001:2015', sub: 'Weltweit anerkanntes QMS' },
        { label: 'Schweißzertifikat', value: 'ISO 3834-2', sub: 'Umfassende Qualitätsanforderungen' },
        { label: 'Umwelt & SGA', value: 'ISO 14001 & ISO 45001', sub: 'Nachhaltige Arbeitsplatzsicherheit' },
      ],
      fr: [
        { label: 'Qualité Automobile', value: 'IATF 16949:2016', sub: 'Certifié TÜV Rheinland' },
        { label: 'Système Qualité', value: 'ISO 9001:2015', sub: 'Assurance Qualité Internationale' },
        { label: 'Qualité Soudage', value: 'ISO 3834-2', sub: 'Exigences de qualité complètes' },
        { label: 'Environnement & SST', value: 'ISO 14001 & ISO 45001', sub: 'Sécurité et respect environnemental' },
      ],
    },
    capabilities: {
      tr: [
        'Mitutoyo 3D Koordinat Ölçüm Cihazı (CMM) ile mikron düzeyinde boyutsal doğrulama',
        'PPAP (Parça Onay Süreci), FMEA, APQP ve MSA metodolojileri ile sıfır hata hedefi',
        'Spektrometre ile kimyasal malzeme analizi ve sertlik (Brinell / Rockwell) testleri',
        'Tahribatsız muayene (NDT): Görsel (VT), Sıvı Penetrant (PT) ve Manyetik Parçacık (MT)',
      ],
      en: [
        'Mitutoyo 3D Coordinate Measuring Machine (CMM) delivering micron-accurate inspection reports',
        'Zero defect strategy supported by PPAP, PFMEA, APQP, and MSA automotive core tools',
        'Material verification via optical spectrometer analysis and Brinell/Rockwell hardness testing',
        'Non-destructive testing (NDT): Visual (VT), Liquid Penetrant (PT), and Magnetic Particle (MT)',
      ],
      de: [
        'Mitutoyo 3D-Koordinatenmessgerät (KMG) für mikrometergenaue Prüfprotokolle',
        'Null-Fehler-Strategie durch automotive Core Tools: PPAP, FMEA, APQP und MSA',
        'Materialprüfung mittels optischer Spektralanalyse und Härteprüfung (Brinell/Rockwell)',
        'Zerstörungsfreie Prüfungen (ZfP): Sichtprüfung (VT), Farbeindring- (PT) und Magnetpulverprüfung (MT)',
      ],
      fr: [
        'Machine à mesurer tridimensionnelle (MMT) Mitutoyo pour rapports de contrôle micrométriques',
        'Stratégie Zéro Défaut basée sur les outils qualité automobiles : PPAP, AMDEC, APQP et MSA',
        'Contrôle matière par spectrométrie d\'émission optique et essais de dureté Brinell/Rockwell',
        'Contrôles non destructifs (CND) : Examen visuel (VT), Ressuage (PT) et Magnétoscopie (MT)',
      ],
    },
  },

  // -------------------------------------------------------------
  // SEKTÖRLER
  // -------------------------------------------------------------

  // 15. OTOMOTİV SEKTÖRÜ
  'otomotiv': {
    specs: {
      tr: [
        { label: 'Kalite Standardı', value: 'IATF 16949:2016', sub: 'Otomotiv Onaylı Tedarikçi' },
        { label: 'Üretim Hacmi', value: 'Yıllık 8.000.000+ Parça', sub: 'Yüksek Hacimli Seri İmalat' },
        { label: 'Lojistik Modeli', value: 'JIT & EDI Entegrasyonu', sub: 'Tam Zamanında Sevkiyat' },
        { label: 'Tolerans Sınıfı', value: 'ISO 2768-mK / Özel OEM', sub: 'Yüksek Boyutsal Kararlılık' },
      ],
      en: [
        { label: 'Quality Standard', value: 'IATF 16949:2016', sub: 'Approved Tier-1/Tier-2 Supplier' },
        { label: 'Volume Capacity', value: '8,000,000+ Parts / Year', sub: 'High-Volume Production' },
        { label: 'Supply Chain', value: 'JIT & EDI Integration', sub: 'Just-In-Time Sequencing' },
        { label: 'Tolerance Standard', value: 'ISO 2768-mK / OEM Specs', sub: 'Superior Dimensional Repeatability' },
      ],
      de: [
        { label: 'Qualitätsnorm', value: 'IATF 16949:2016', sub: 'Anerkannter Automobilzulieferer' },
        { label: 'Serienvolumen', value: 'Über 8.000.000 Teile/Jahr', sub: 'Großserienfertigung' },
        { label: 'Logistik', value: 'JIT & EDI-Anbindung', sub: 'Just-in-Time Lieferungen' },
        { label: 'Toleranzklasse', value: 'ISO 2768-mK / OEM-Vorgaben', sub: 'Hohe Maßstabilität' },
      ],
      fr: [
        { label: 'Norme Qualité', value: 'IATF 16949:2016', sub: 'Fournisseur automobile agréé' },
        { label: 'Capacité de volume', value: 'Plus de 8 000 000 pièces/an', sub: 'Fabrication grande série' },
        { label: 'Logistique', value: 'Intégration JIT & EDI', sub: 'Livraisons Juste-à-Temps' },
        { label: 'Tolérances', value: 'ISO 2768-mK / Cahier des charges', sub: 'Excellente stabilité dimensionnelle' },
      ],
    },
    capabilities: {
      tr: [
        'Binek ve ticari araçlar için şasi takviye traversleri, süspansiyon kolları ve motor bağlantı braketleri',
        'Kabin ve gövde güvenlik parçaları, kapı kilit mekanizmaları ve menteşe donanımları',
        'Yüksek dayanımlı çift fazlı çelikler (DP600, DP800) ve mikroalaşımlı sacların şekillendirilmesi',
        'PPAP Seviye 3, Kontrol Planları, FMEA ve MSA ile tam izlenebilir otomotiv kalite güvencesi',
      ],
      en: [
        'Chassis crossmembers, suspension link brackets, and engine mounting assemblies for passenger & CVs',
        'Body-in-white (BIW) structural reinforcements, door latch mechanisms, and hinge components',
        'Advanced forming of high-strength dual-phase steels (DP600, DP800) and micro-alloyed sheets',
        'Full traceability backed by PPAP Level 3, Control Plans, PFMEA, and Gauge R&R studies',
      ],
      de: [
        'Fahrwerkstraversen, Achs- und Motoraufhängungen für Pkw und Nutzfahrzeuge',
        'Karosseriestrukturverstärkungen, Türschlosskomponenten und Scharnierbaugruppen',
        'Umformung hochfester Mehrphasenstähle (DP600, DP800) und mikrolegierter Feinkornbaustähle',
        'Umfassende Rückverfolgbarkeit mit PPAP Level 3, Prüfplänen, FMEA und MSA-Analysen',
      ],
      fr: [
        'Traverses de châssis, bras de suspension et supports moteur pour véhicules légers et utilitaires',
        'Renforts de structure de caisse (BIW), ferrures de portes et charnières de sécurité',
        'Formage d\'aciers avancés haute résistance (DP600, DP800) et tôles micro-alliées',
        'Traçabilité totale assurée par les dossiers PPAP Niveau 3, Plans de surveillance et AMDEC',
      ],
    },
  },

  // 16. SAVUNMA SANAYİİ
  'savunma-sanayi': {
    specs: {
      tr: [
        { label: 'Kalite Güvencesi', value: 'AS9100 Uyumlu', sub: 'Askeri Standartlarda Üretim' },
        { label: 'İşlenen Malzeme', value: 'Armox 500/600, Ramor', sub: 'Sertifikalı Zırh Çelikleri' },
        { label: 'Kaynak Sertifikası', value: 'ISO 3834-2 / Zırh Kaynağı', sub: 'WPS/PQR Onaylı Zırh Birleştirme' },
        { label: 'İzlenebilirlik', value: '%100 Malzeme Sertifikası', sub: '3.1 / 3.2 Muayene Belgesi' },
      ],
      en: [
        { label: 'Quality Standard', value: 'AS9100 Compliant', sub: 'Military-Grade Manufacturing' },
        { label: 'Processed Materials', value: 'Armox 500/600, Ramor', sub: 'Certified Ballistic Armor Steels' },
        { label: 'Welding Qualification', value: 'ISO 3834-2 Armor Welding', sub: 'Qualified WPS/PQR for Armor Steel' },
        { label: 'Traceability', value: '100% Heat Number Tracking', sub: 'EN 10204 3.1 / 3.2 Mill Certificates' },
      ],
      de: [
        { label: 'Qualitätsstandard', value: 'AS9100 konform', sub: 'Militärtechnische Fertigung' },
        { label: 'Verarbeitete Stähle', value: 'Armox 500/600, Ramor', sub: 'Zertifizierter ballistischer Panzerstahl' },
        { label: 'Schweißkompetenz', value: 'ISO 3834-2 Panzerschweißen', sub: 'Geprüfte Schweißanweisungen WPS/PQR' },
        { label: 'Rückverfolgbarkeit', value: '100% Chargenrückverfolgung', sub: 'EN 10204 3.1 / 3.2 Prüfbescheinigungen' },
      ],
      fr: [
        { label: 'Norme Qualité', value: 'Conforme AS9100', sub: 'Exigences militaires et de défense' },
        { label: 'Matières premières', value: 'Armox 500/600, Ramor', sub: 'Aciers balistiques certifiés' },
        { label: 'Qualification soudage', value: 'ISO 3834-2 Soudage blindage', sub: 'DMOS/QMOS spécifiques aciers trempés' },
        { label: 'Traçabilité', value: '100% Suivi numéro de coulée', sub: 'Certificats matière EN 10204 3.1 / 3.2' },
      ],
    },
    capabilities: {
      tr: [
        'Zırhlı askeri kara araçları için taban mayın koruma plakaları, kule braketleri ve gövde panelleri',
        'Zırh çeliklerinin mikro yapısal bozulma olmadan düşük ısı girdili fiber lazerle kesimi ve bükümü',
        'Özel ön ısıtma ve pasolar arası sıcaklık kontrollü zırh kaynağı prosedürleri',
        'Tahribatsız muayene (NDT) ile %100 kaynak dikişi çatlak ve penetrasyon kontrolü',
      ],
      en: [
        'Underbelly mine-protection blast shields, turret brackets, and armor hulls for military vehicles',
        'Laser cutting and heavy press brake bending of ballistic steels without metallurgical heat damage',
        'Strict preheat and interpass temperature-controlled welding procedures on armor plates',
        '100% weld inspection for volumetric integrity and surface crack prevention via NDT methods',
      ],
      de: [
        'Minenschutzböden, Turmlagerungen und Strukturteile für gepanzerte Gefechtsfahrzeuge',
        'Thermisch schonendes Laserschneiden und Kanten von Panzerblechen ohne Festigkeitsverlust',
        'Kontrolliertes Panzerschweißen mit streng überwachter Vorwärm- und Zwischenlagentemperatur',
        '100%ige zerstörungsfreie Prüfung (ZfP) aller sicherheitskritischen Schweißnähte',
      ],
      fr: [
        'Plaques de protection ventrale anti-mines, supports de tourelle et blindages de caisse',
        'Découpe laser et pliage grande puissance sans altération des propriétés balistiques de l\'acier',
        'Procédures de soudage des aciers blindés avec strict contrôle des températures de préchauffage',
        'Contrôle non destructif (CND) systématique des cordons de soudure critiques',
      ],
    },
  },

  // 17. İŞ MAKİNALARI SEKTÖRÜ
  'is-makinalari': {
    specs: {
      tr: [
        { label: 'Mukavemet Sınıfı', value: 'Hardox 450 & St52-3', sub: 'Aşınmaya Karşı Maksimum Direnç' },
        { label: 'Kaynak Güvencesi', value: 'ISO 3834-2 Sertifikalı', sub: 'Ağır Dinamik Yük Dayanımı' },
        { label: 'İşleme Aralığı', value: 'Sac Kalınlığı 2 - 40 mm', sub: 'Ağır Sanayi Parça Parkuru' },
        { label: 'Yüzey Koruma', value: 'Kumlama + Epoksi Astar', sub: 'Zorlu Şantiye & Maden Şartları' },
      ],
      en: [
        { label: 'Strength Grade', value: 'Hardox 450 & St52-3', sub: 'Maximum Abrasion & Impact Resistance' },
        { label: 'Weld Integrity', value: 'ISO 3834-2 Certified', sub: 'High Dynamic Fatigue Strength' },
        { label: 'Thickness Range', value: 'Plate Gauges 2 - 40 mm', sub: 'Heavy Industrial Fabrication' },
        { label: 'Corrosion Barrier', value: 'Shot Blast + Epoxy Primer', sub: 'Harsh Mining & Site Durability' },
      ],
      de: [
        { label: 'Stahlgüte', value: 'Hardox 450 & St52-3', sub: 'Höchster Verschleiß- & Stoßwiderstand' },
        { label: 'Schweißgüte', value: 'ISO 3834-2 zertifiziert', sub: 'Ausgelegt für dynamische Wechsellasten' },
        { label: 'Blechdicken', value: 'Materialstärken 2 - 40 mm', sub: 'Schwere Stahlbaufertigung' },
        { label: 'Korrosionsschutz', value: 'Kugelstrahlen + Epoxid', sub: 'Extremer Baustellen- & Bergbaueinsatz' },
      ],
      fr: [
        { label: 'Nuance d\'acier', value: 'Hardox 450 & St52-3', sub: 'Résistance maximale à l\'abrasion' },
        { label: 'Intégrité soudure', value: 'Certifié ISO 3834-2', sub: 'Haute résistance à la fatigue dynamique' },
        { label: 'Épaisseurs', value: 'Tôles de 2 à 40 mm', sub: 'Chaudronnerie industrielle lourde' },
        { label: 'Revêtement', value: 'Grenaillage + Apprêt époxy', sub: 'Conçu pour environnements miniers sévères' },
      ],
    },
    capabilities: {
      tr: [
        'Ekskavatör, beko loder ve yükleyiciler için şasi gövdesi, kabin montaj parçaları ve palet aktarma elemanları',
        'Hardox aşınma plakalarından imal edilen kepçe takviye bıçakları ve aşınma pabuçları',
        'Robotik hücrelerde derin nüfuziyetli, gerilimi alınmış çok pasolu kaynaklı imalat',
        'Sa 2.5 kumlanmış yüzey üzerine darbe ve korozyon dirençli endüstriyel boya uygulaması',
      ],
      en: [
        'Chassis frames, operator cabin mounting structures, and crawler track transfer plates',
        'Bucket wear blades, cutting edges, and wear shoes fabricated from Hardox 450/500 plates',
        'Deep penetration, stress-relieved multi-pass robotic welding for heavy structural assemblies',
        'Industrial coating systems over Sa 2.5 blasted substrate offering superior outdoor resilience',
      ],
      de: [
        'Hauptrahmen, Kabinenhalterungen und Fahrwerkskomponenten für Bagger und Radlader',
        'Verschleißschienen und Schaufelmesser aus abriebfestem Hardox 450/500 Stahl',
        'Tief eingebrannte, spannungsarm ausgeführte Roboterschweißnähte für schwere Belastungen',
        'Industrielackierung auf Sa 2.5 gestrahltem Untergrund für maximale Langlebigkeit',
      ],
      fr: [
        'Châssis porteurs, bâtis de cabine et composants de roulement pour pelles et chargeuses',
        'Lames d\'usure et renforts de godet confectionnés en tôles d\'usure Hardox 450/500',
        'Soudage robotisé multipasse à forte pénétration, libéré de contraintes résiduelles',
        'Peinture industrielle haute durabilité appliquée sur subjectile grenaillé au degré Sa 2.5',
      ],
    },
  },

  // 18. TARIM MAKİNALARI SEKTÖRÜ
  'tarim-makinalari': {
    specs: {
      tr: [
        { label: 'Yıllık Parça Adedi', value: '500.000+ Ünite', sub: 'Traktör ve Ekipman Üreticilerine' },
        { label: 'Hammadde Kalitesi', value: 'S355MC / S420MC', sub: 'Yüksek Akma Dayanımlı Çelik' },
        { label: 'İmalat Yöntemi', value: 'Lazer + Pres + Robot Kaynak', sub: 'Entegre Tesis Avantajı' },
        { label: 'Korozyon Koruması', value: 'Elektrostatik Toz Boya', sub: 'Güneş, Gübre ve Neme Dayanıklı' },
      ],
      en: [
        { label: 'Annual Output', value: '500,000+ Units', sub: 'To Leading Tractor & Implement OEMs' },
        { label: 'Steel Grades', value: 'S355MC / S420MC', sub: 'High-Yield Cold-Forming Steel' },
        { label: 'Integrated Process', value: 'Laser + Stamping + Robot Weld', sub: 'Single-Roof Capability' },
        { label: 'Corrosion Shield', value: 'Powder Coating Curing', sub: 'Chemical, Fertilizer & UV Resistant' },
      ],
      de: [
        { label: 'Jahresausstoß', value: 'Über 500.000 Einheiten', sub: 'Für Traktor- & Landmaschinenbauer' },
        { label: 'Stahlqualität', value: 'S355MC / S420MC', sub: 'Hochfester Kaltumformstahl' },
        { label: 'Fertigungstiefe', value: 'Laser + Presse + Roboterschweißen', sub: 'Alles unter einem Dach' },
        { label: 'Oberflächenschutz', value: 'Pulverbeschichtung', sub: 'Dünger-, UV- & Chemikalienbeständig' },
      ],
      fr: [
        { label: 'Production annuelle', value: 'Plus de 500 000 pièces', sub: 'Pour tracteurs et matériels agricoles' },
        { label: 'Nuances d\'acier', value: 'S355MC / S420MC', sub: 'Acier haute limite élastique' },
        { label: 'Process intégré', value: 'Laser + Emboutissage + Soudure', sub: 'Toutes étapes en usine intégrée' },
        { label: 'Revêtement', value: 'Poudrage thermolaqué', sub: 'Résistant aux UV, engrais et produits chimiques' },
      ],
    },
    capabilities: {
      tr: [
        'Traktör üç nokta askı kolları, çeki demiri braketleri, aks bağlantı sacları ve ağırlık taşıyıcıları',
        'Toprak işleme makineleri, pulluk ve mibzer şasisi bağlantı elemanlarında yorulma dayanımı',
        'Otomatik toz boya hattında tarımsal kimyasallara ve gübre korozyonuna karşı koruyucu kaplama',
        'Çiftçilerin zorlu arazi şartlarında güvenle kullanabileceği darbe ve titreşime dayanıklı yapı',
      ],
      en: [
        'Tractor 3-point linkage arms, drawbar brackets, axle connection plates, and ballast brackets',
        'Fatigue-resistant linkage frames for soil cultivation tillage, plows, and seed drill implements',
        'High-performance powder coating resistant to fertilizers, agricultural chemicals, and weathering',
        'Heavy-duty construction engineered to endure harsh terrain vibrations and dynamic shocks',
      ],
      de: [
        'Dreipunkt-Unterlenker, Anhängeböcke, Achsverbindungslaschen und Frontgewichtsträger',
        'Dauerfeste Baugruppen für Bodenbearbeitungsgeräte, Pflüge und Drillmaschinen',
        'Robuste Pulverbeschichtung beständig gegen Düngemittel und Witterungseinflüsse',
        'Konstruiert für härteste Feldbedingungen und dauerhafte Schlagbelastung',
      ],
      fr: [
        'Bras de relevage 3 points, chapes d\'attelage, brides d\'essieu et supports de masses',
        'Ensembles mécaniques endurants pour outils de travail du sol, charrues et semoirs',
        'Thermolaquage résistant aux agressions chimiques des engrais et aux intempéries',
        'Pièces robustes conçues pour résister aux vibrations intenses et aux chocs en plein champ',
      ],
    },
  },

  // 19. ÖZEL UYGULAMALAR
  'ozel-uygulamalar': {
    specs: {
      tr: [
        { label: 'Mühendislik Desteği', value: 'CAD/CAM & FEA Analizi', sub: 'Müşteri Projesine Özel Tasarım' },
        { label: 'Prototip Yeteneği', value: 'Hızlı Prototip & Fikstür', sub: 'Kısa Termin Süresi' },
        { label: 'Malzeme Çeşitliliği', value: 'Çelik, Paslanmaz, Alüminyum', sub: 'Geniş Hammadde Portföyü' },
        { label: 'Ölçüm & Raporlama', value: '3D Boyutsal Rapor', sub: 'İlk Numune Onay Dosyası (FAI)' },
      ],
      en: [
        { label: 'Engineering Support', value: 'CAD/CAM & FEA Simulation', sub: 'Custom Engineering Solutions' },
        { label: 'Prototyping', value: 'Rapid Prototypes & Fixturing', sub: 'Short Lead Times' },
        { label: 'Material Flexibility', value: 'Carbon Steel, Inox, Aluminum', sub: 'Extensive Raw Material Portfolio' },
        { label: 'Validation', value: '3D CMM Inspection Reports', sub: 'First Article Inspection (FAI)' },
      ],
      de: [
        { label: 'Engineering', value: 'CAD/CAM & FEA-Berechnung', sub: 'Kundenspezifische Lösungen' },
        { label: 'Prototyping', value: 'Schneller Muster- & Vorrichtungsbau', sub: 'Kurze Lieferzeiten' },
        { label: 'Werkstoffspektrum', value: 'Stahl, Edelstahl, Aluminium', sub: 'Breite Werkstoffauswahl' },
        { label: 'Messtechnik', value: '3D-Messprotokolle', sub: 'Erstmusterprüfberichte (EMPB)' },
      ],
      fr: [
        { label: 'Support Ingénierie', value: 'CAO/FAO & Calculs éléments finis', sub: 'Développement sur cahier des charges' },
        { label: 'Prototypage', value: 'Prototypes rapides & outillages', sub: 'Délais courts maîtrisés' },
        { label: 'Diversité matières', value: 'Acier, Inox, Aluminium, Cuivre', sub: 'Large gamme d\'alliages' },
        { label: 'Validation contrôle', value: 'Rapports tridimensionnels MMT', sub: 'Revue de premier article (FAI)' },
      ],
    },
    capabilities: {
      tr: [
        'Raylı sistemler, enerji santralleri, vinç ve konveyör sistemleri için özel tasarım metal parçalar',
        'Müşteri teknik çizimlerine göre tersine mühendislik ve imalat optimizasyonu',
        'Az adetli butik projelerden yüksek adetli endüstriyel serilere esnek üretim adaptasyonu',
      ],
      en: [
        'Custom sheet metal parts for rail systems, power generation, overhead cranes, and conveyor handling',
        'Reverse engineering and manufacturability optimization based on customer 2D/3D models',
        'Flexible shop floor adaptation from low-volume prototypes to high-rate production runs',
      ],
      de: [
        'Sonderbauteile für Bahntechnik, Energieanlagen, Kranbau und Schüttgut-Fördertechnik',
        'Reverse Engineering und Fertigungsoptimierung auf Basis von Kundendaten',
        'Flexible Fertigungsanpassung von Kleinserien und Prototypen bis zu Serienprojekten',
      ],
      fr: [
        'Pièces métalliques spécifiques pour le ferroviaire, l\'énergie, les ponts roulants et convoyeurs',
        'Rétro-ingénierie et reconception pour fabrication optimale selon les plans clients',
        'Adaptabilité de l\'outil industriel depuis les petites séries pilotes jusqu\'aux grands volumes',
      ],
    },
  },

  // 20. MEDİKAL SEKTÖRÜ
  'medikal': {
    specs: {
      tr: [
        { label: 'Malzeme Uyumluluğu', value: 'AISI 304 & 316L Paslanmaz', sub: 'Biyouyumlu & Korozyonsuz' },
        { label: 'Yüzey Kalitesi', value: 'Elektropolisaj & Hijyenik', sub: 'Pürüzsüz & Sterilize Edilebilir' },
        { label: 'Talaşlı Hassasiyet', value: '±0.01 mm Mikron Tolerans', sub: 'Yüksek Hassasiyetli CNC' },
        { label: 'Kalite Standartları', value: 'ISO 9001:2015 & IATF 16949', sub: 'İzlenebilir Kalite Sistemi' },
      ],
      en: [
        { label: 'Biocompatibility', value: 'AISI 304 & 316L Stainless', sub: 'Medical-Grade Corrosion Resistance' },
        { label: 'Surface Finish', value: 'Electropolished & Hygienic', sub: 'Smooth & Autoclavable Surfaces' },
        { label: 'Machining Precision', value: '±0.01 mm Micron Tolerance', sub: 'High-Precision CNC Machining' },
        { label: 'Quality Standards', value: 'ISO 9001:2015 & IATF 16949', sub: 'Fully Audited Quality System' },
      ],
      de: [
        { label: 'Biokompatibilität', value: 'AISI 304 & 316L Edelstahl', sub: 'Medizinische Korrosionsbeständigkeit' },
        { label: 'Oberfläche', value: 'Elektropoliert & Hygienisch', sub: 'Glatt & Sterilisierbar' },
        { label: 'Zerspanpräzision', value: '±0.01 mm Mikrometergenau', sub: 'Hochpräzise CNC-Fertigung' },
        { label: 'Qualitätsnormen', value: 'ISO 9001:2015 & IATF 16949', sub: 'Rückverfolgbare Qualitätskette' },
      ],
      fr: [
        { label: 'Biocompatibilité', value: 'Inox AISI 304 & 316L', sub: 'Qualité médicale résistante à la corrosion' },
        { label: 'État de surface', value: 'Électropoli & Hygiénique', sub: 'Surfaces lisses et autoclavables' },
        { label: 'Précision d\'usinage', value: 'Tolérance ±0.01 mm', sub: 'Usinage CNC micrométrique' },
        { label: 'Standards Qualité', value: 'ISO 9001:2015 & IATF 16949', sub: 'Système d\'assurance qualité audité' },
      ],
    },
    capabilities: {
      tr: [
        'Hastane hasta yatak mekanizmaları, transfer sedye şasileri ve serum askı aparatları',
        'Ameliyathane medikal cihaz kasaları, paslanmaz cerrahi alet sepetleri ve tepsileri',
        'Lazer kesim ve TIG kaynağı sonrası yüzey pasivasyonu ile bakteri barındırmayan hijyenik yapı',
      ],
      en: [
        'Hospital patient bed articulation mechanisms, stretcher chassis, and IV pole assemblies',
        'Operating room medical equipment chassis, stainless surgical tray consoles, and enclosures',
        'Post-laser and post-TIG passivation producing crevice-free, hygienic, antibacterial surfaces',
      ],
      de: [
        'Krankenhausbett-Verstellmechanik, Tragenfahrgestelle und Infusionsständerelemente',
        'OP-Gerätegehäuse, chirurgische Instrumentenkörbe und Edelstahltabletts',
        'Passivierung nach dem Laserschneiden und WIG-Schweißen für keimfreie, glatte Oberflächen',
      ],
      fr: [
        'Mécanismes articulés de lits médicalisés, châssis de brancards et potences à perfusion',
        'Bâtis d\'équipements pour blocs opératoires, paniers inox et consoles de stérilisation',
        'Passivation après découpe laser et soudure TIG pour surfaces bactéricides ultra-lisses',
      ],
    },
  },
};
