const languages = [
  ["ko", "Korean"], ["es", "Spanish"], ["ar", "Arabic"], ["fr", "French"],
  ["ht", "Haitian Creole"], ["vi", "Vietnamese"], ["zh-Hans", "Chinese, Simplified"],
  ["pt", "Portuguese"], ["ru", "Russian"], ["tl", "Tagalog"], ["hi", "Hindi"],
  ["uk", "Ukrainian"], ["af", "Afrikaans"], ["sq", "Albanian"], ["am", "Amharic"],
  ["hy", "Armenian"], ["as", "Assamese"], ["ay", "Aymara"], ["az", "Azerbaijani"],
  ["bm", "Bambara"], ["eu", "Basque"], ["be", "Belarusian"], ["bn", "Bengali"],
  ["bho", "Bhojpuri"], ["bs", "Bosnian"], ["bg", "Bulgarian"], ["my", "Burmese"],
  ["ca", "Catalan"], ["ceb", "Cebuano"], ["ny", "Chichewa"], ["zh-Hant", "Chinese, Traditional"],
  ["co", "Corsican"], ["hr", "Croatian"], ["cs", "Czech"], ["da", "Danish"],
  ["dv", "Dhivehi"], ["doi", "Dogri"], ["nl", "Dutch"], ["dz", "Dzongkha"],
  ["en", "English"], ["eo", "Esperanto"], ["et", "Estonian"], ["ee", "Ewe"],
  ["fil", "Filipino"], ["fi", "Finnish"], ["fy", "Frisian"], ["gl", "Galician"],
  ["ka", "Georgian"], ["de", "German"], ["el", "Greek"], ["gn", "Guarani"],
  ["gu", "Gujarati"], ["ha", "Hausa"], ["haw", "Hawaiian"], ["he", "Hebrew"],
  ["hmn", "Hmong"], ["hu", "Hungarian"], ["is", "Icelandic"], ["ig", "Igbo"],
  ["ilo", "Ilocano"], ["id", "Indonesian"], ["ga", "Irish"], ["it", "Italian"],
  ["ja", "Japanese"], ["jv", "Javanese"], ["kn", "Kannada"], ["kk", "Kazakh"],
  ["km", "Khmer"], ["rw", "Kinyarwanda"], ["gom", "Konkani"], ["kri", "Krio"],
  ["ku", "Kurdish"], ["ckb", "Kurdish, Sorani"], ["ky", "Kyrgyz"], ["lo", "Lao"],
  ["la", "Latin"], ["lv", "Latvian"], ["ln", "Lingala"], ["lt", "Lithuanian"],
  ["lg", "Luganda"], ["lb", "Luxembourgish"], ["mk", "Macedonian"], ["mai", "Maithili"],
  ["mg", "Malagasy"], ["ms", "Malay"], ["ml", "Malayalam"], ["mt", "Maltese"],
  ["mi", "Maori"], ["mr", "Marathi"], ["mni-Mtei", "Meiteilon"], ["lus", "Mizo"],
  ["mn", "Mongolian"], ["ne", "Nepali"], ["no", "Norwegian"], ["or", "Odia"],
  ["om", "Oromo"], ["ps", "Pashto"], ["fa", "Persian"], ["pl", "Polish"],
  ["pa", "Punjabi"], ["qu", "Quechua"], ["ro", "Romanian"], ["sm", "Samoan"],
  ["sa", "Sanskrit"], ["gd", "Scottish Gaelic"], ["nso", "Sepedi"], ["sr", "Serbian"],
  ["st", "Sesotho"], ["sn", "Shona"], ["sd", "Sindhi"], ["si", "Sinhala"],
  ["sk", "Slovak"], ["sl", "Slovenian"], ["so", "Somali"], ["su", "Sundanese"],
  ["sw", "Swahili"], ["sv", "Swedish"], ["tg", "Tajik"], ["ta", "Tamil"],
  ["tt", "Tatar"], ["te", "Telugu"], ["th", "Thai"], ["ti", "Tigrinya"],
  ["ts", "Tsonga"], ["tr", "Turkish"], ["tk", "Turkmen"], ["ak", "Twi"],
  ["ur", "Urdu"], ["ug", "Uyghur"], ["uz", "Uzbek"], ["cy", "Welsh"],
  ["xh", "Xhosa"], ["yi", "Yiddish"], ["yo", "Yoruba"], ["zu", "Zulu"]
];

const reviewedPacks = new Set(["en", "ko", "es", "ar", "fr", "ht", "vi", "zh-Hans", "pt", "ru", "tl", "hi", "uk"]);

const translations = {
  en: {
    volunteerTitle: "Volunteer application mirror",
    fullName: "Full name",
    preferredName: "Preferred name",
    email: "Email",
    phone: "Mobile phone",
    zip: "ZIP code",
    age: "I am 18 or older",
    yes: "Yes",
    no: "No",
    skills: "Skills and languages",
    skillsPlaceholder: "Native Korean speaker. Comfortable with phones, translation, shelter support, and maps.",
    interests: "Volunteer interests",
    intakeOption: "Disaster response and community support",
    bloodOption: "Blood donor ambassador",
    virtualOption: "Remote or virtual support",
    languageOption: "Language access and interpretation",
    availability: "Availability",
    availabilityPlaceholder: "Weeknights after 6 PM and weekends. Can help remotely during alerts.",
    consent: "I understand this is a concept intake mirror and not an official volunteer submission.",
    reviewTitle: "What the applicant sees",
    welcome: "You can apply in the language you use best.",
    support: "Your language preference and interpreter skills travel with your application so local teams can follow up appropriately.",
    auditOneTitle: "No language dead end",
    auditOneBody: "The first screen asks for the applicant's language before account creation.",
    auditTwoTitle: "Interpreter signal captured",
    auditTwoBody: "Native-language skill is stored as structured volunteer capacity, not buried in notes.",
    auditThreeTitle: "Support fallback visible",
    auditThreeBody: "Phone and email help remain available when translation confidence is low.",
    alertsTitle: "Emergency alert mirror",
    area: "Area",
    urgency: "Urgency",
    immediate: "Immediate",
    expires: "Expires",
    headline: "Severe storms: move indoors now",
    alertBody: "Severe thunderstorms are moving through Cumberland County. Move indoors now. Avoid flooded roads. Keep your phone charged and monitor local officials for updates.",
    alertSteps: ["Go inside a sturdy building.", "Stay away from windows.", "Do not drive through water over the road.", "Check on neighbors who may need language or mobility support."]
  },
  ko: {
    volunteerTitle: "자원봉사 신청 미러",
    fullName: "성명",
    preferredName: "선호 이름",
    email: "이메일",
    phone: "휴대전화",
    zip: "우편번호",
    age: "만 18세 이상입니다",
    yes: "예",
    no: "아니요",
    skills: "기술 및 사용 언어",
    skillsPlaceholder: "한국어 원어민입니다. 전화, 번역, 대피소 지원, 지도 업무를 도울 수 있습니다.",
    interests: "자원봉사 관심 분야",
    intakeOption: "재난 대응 및 지역사회 지원",
    bloodOption: "헌혈자 안내 봉사",
    virtualOption: "원격 또는 온라인 지원",
    languageOption: "언어 접근 및 통역",
    availability: "가능 시간",
    availabilityPlaceholder: "평일 오후 6시 이후와 주말 가능. 긴급 알림 중 원격 지원 가능.",
    consent: "이 양식은 공식 자원봉사 제출이 아닌 개념용 신청 미러임을 이해합니다.",
    reviewTitle: "신청자가 보는 화면",
    welcome: "가장 편한 언어로 신청할 수 있습니다.",
    support: "선호 언어와 통역 가능 여부가 신청 정보와 함께 전달되어 지역 팀이 적절히 연락할 수 있습니다.",
    auditOneTitle: "언어 장벽 없는 시작",
    auditOneBody: "계정 생성 전에 먼저 신청자의 언어를 묻습니다.",
    auditTwoTitle: "통역 역량 수집",
    auditTwoBody: "원어민 언어 역량을 메모가 아니라 구조화된 봉사 역량으로 저장합니다.",
    auditThreeTitle: "지원 방법 표시",
    auditThreeBody: "번역 신뢰도가 낮을 때 전화와 이메일 도움을 계속 제공합니다.",
    alertsTitle: "긴급 알림 미러",
    area: "지역",
    urgency: "긴급도",
    immediate: "즉시",
    expires: "만료",
    headline: "강한 폭풍: 지금 실내로 이동하세요",
    alertBody: "강한 뇌우가 컴벌랜드 카운티를 지나고 있습니다. 지금 실내로 이동하세요. 침수된 도로를 피하세요. 휴대전화를 충전해 두고 지역 당국의 안내를 확인하세요.",
    alertSteps: ["튼튼한 건물 안으로 들어가세요.", "창문에서 떨어져 있으세요.", "도로 위 물을 절대 차로 지나가지 마세요.", "언어 또는 이동 지원이 필요한 이웃을 확인하세요."]
  },
  es: {
    volunteerTitle: "Copia de solicitud de voluntariado",
    fullName: "Nombre completo",
    preferredName: "Nombre preferido",
    email: "Correo electrónico",
    phone: "Teléfono móvil",
    zip: "Código postal",
    age: "Tengo 18 años o más",
    yes: "Sí",
    no: "No",
    skills: "Habilidades e idiomas",
    skillsPlaceholder: "Hablante nativo de coreano. Puede apoyar por teléfono, traducción, refugios y mapas.",
    interests: "Intereses de voluntariado",
    intakeOption: "Respuesta a desastres y apoyo comunitario",
    bloodOption: "Embajador de donantes de sangre",
    virtualOption: "Apoyo remoto o virtual",
    languageOption: "Acceso lingüístico e interpretación",
    availability: "Disponibilidad",
    availabilityPlaceholder: "Entre semana después de las 6 PM y fines de semana. Puede ayudar de forma remota durante alertas.",
    consent: "Entiendo que esto es un concepto y no una solicitud oficial.",
    reviewTitle: "Lo que ve el solicitante",
    welcome: "Puede solicitar en el idioma que usa mejor.",
    support: "Su idioma preferido y habilidades de interpretación viajan con la solicitud para que los equipos locales puedan responder correctamente.",
    alertsTitle: "Copia de alerta de emergencia",
    area: "Área",
    urgency: "Urgencia",
    immediate: "Inmediata",
    expires: "Vence",
    headline: "Tormentas severas: entre ahora",
    alertBody: "Tormentas eléctricas severas avanzan por el condado de Cumberland. Entre ahora. Evite caminos inundados. Mantenga su teléfono cargado y siga las indicaciones de las autoridades locales.",
    alertSteps: ["Entre a un edificio resistente.", "Manténgase lejos de las ventanas.", "No conduzca por agua sobre la carretera.", "Revise a vecinos que puedan necesitar apoyo de idioma o movilidad."]
  },
  ar: {
    volunteerTitle: "نموذج طلب تطوع متعدد اللغات",
    fullName: "الاسم الكامل",
    preferredName: "الاسم المفضل",
    email: "البريد الإلكتروني",
    phone: "الهاتف المحمول",
    zip: "الرمز البريدي",
    age: "عمري 18 سنة أو أكثر",
    yes: "نعم",
    no: "لا",
    skills: "المهارات واللغات",
    interests: "اهتمامات التطوع",
    availability: "التوفر",
    consent: "أفهم أن هذا نموذج تجريبي وليس طلبا رسميا.",
    reviewTitle: "ما يراه مقدم الطلب",
    welcome: "يمكنك التقديم باللغة التي تستخدمها بشكل أفضل.",
    support: "ينتقل تفضيل اللغة ومهارات الترجمة مع طلبك حتى تتمكن الفرق المحلية من المتابعة بشكل مناسب.",
    alertsTitle: "نسخة تنبيه الطوارئ",
    area: "المنطقة",
    urgency: "درجة الاستعجال",
    immediate: "فوري",
    expires: "ينتهي",
    headline: "عواصف شديدة: ادخل إلى مكان آمن الآن",
    alertBody: "تتحرك عواصف رعدية شديدة عبر مقاطعة كمبرلاند. ادخل الآن. تجنب الطرق المغمورة بالمياه. أبق هاتفك مشحونا وتابع تعليمات المسؤولين المحليين.",
    alertSteps: ["ادخل إلى مبنى متين.", "ابتعد عن النوافذ.", "لا تقد فوق المياه على الطريق.", "اطمئن على الجيران الذين قد يحتاجون إلى دعم لغوي أو حركي."]
  },
  fr: {
    volunteerTitle: "Miroir de demande bénévole",
    fullName: "Nom complet",
    preferredName: "Nom préféré",
    email: "Courriel",
    phone: "Téléphone mobile",
    zip: "Code postal",
    age: "J'ai 18 ans ou plus",
    yes: "Oui",
    no: "Non",
    skills: "Compétences et langues",
    interests: "Intérêts bénévoles",
    availability: "Disponibilité",
    consent: "Je comprends qu'il s'agit d'un concept et non d'une demande officielle.",
    reviewTitle: "Ce que voit le demandeur",
    welcome: "Vous pouvez présenter votre demande dans la langue que vous utilisez le mieux.",
    support: "Votre préférence linguistique et vos compétences d'interprétation accompagnent votre demande.",
    alertsTitle: "Miroir d'alerte d'urgence",
    area: "Zone",
    urgency: "Urgence",
    immediate: "Immédiate",
    expires: "Expire",
    headline: "Orages violents : mettez-vous à l'abri maintenant",
    alertBody: "Des orages violents traversent le comté de Cumberland. Rentrez maintenant. Évitez les routes inondées. Gardez votre téléphone chargé et suivez les autorités locales.",
    alertSteps: ["Entrez dans un bâtiment solide.", "Éloignez-vous des fenêtres.", "Ne conduisez pas dans l'eau sur la route.", "Vérifiez les voisins qui peuvent avoir besoin d'aide linguistique ou de mobilité."]
  },
  ht: {
    volunteerTitle: "Kopi aplikasyon volontè",
    fullName: "Non konplè",
    preferredName: "Non ou pito itilize",
    email: "Imèl",
    phone: "Telefòn mobil",
    zip: "Kòd postal",
    age: "Mwen gen 18 an oswa plis",
    yes: "Wi",
    no: "Non",
    skills: "Konpetans ak lang",
    interests: "Enterè volontè",
    availability: "Disponiblite",
    consent: "Mwen konprann sa a se yon modèl konsèp, se pa yon aplikasyon ofisyèl.",
    reviewTitle: "Sa aplikan an wè",
    welcome: "Ou ka aplike nan lang ou pi alèz la.",
    support: "Preferans lang ou ak kapasite entèpretasyon ou rete ak aplikasyon an.",
    alertsTitle: "Kopi alèt ijans",
    area: "Zòn",
    urgency: "Ijans",
    immediate: "Touswit",
    expires: "Ekspire",
    headline: "Gwo tanpèt: antre andedan kounye a",
    alertBody: "Gwo loraj ap pase nan Cumberland County. Antre andedan kounye a. Evite wout ki inonde. Kenbe telefòn ou chaje epi swiv otorite lokal yo.",
    alertSteps: ["Antre nan yon bilding solid.", "Rete lwen fenèt yo.", "Pa kondwi nan dlo sou wout la.", "Tcheke vwazen ki bezwen sipò lang oswa deplasman."]
  },
  vi: {
    volunteerTitle: "Bản phản chiếu đơn tình nguyện",
    fullName: "Họ và tên",
    preferredName: "Tên muốn dùng",
    email: "Email",
    phone: "Điện thoại di động",
    zip: "Mã ZIP",
    age: "Tôi từ 18 tuổi trở lên",
    yes: "Có",
    no: "Không",
    skills: "Kỹ năng và ngôn ngữ",
    interests: "Lĩnh vực tình nguyện",
    availability: "Thời gian có thể tham gia",
    consent: "Tôi hiểu đây là bản mẫu ý tưởng, không phải đơn chính thức.",
    reviewTitle: "Người nộp đơn nhìn thấy gì",
    welcome: "Bạn có thể nộp đơn bằng ngôn ngữ bạn dùng tốt nhất.",
    support: "Ngôn ngữ ưu tiên và kỹ năng phiên dịch đi cùng hồ sơ để nhóm địa phương liên hệ phù hợp.",
    alertsTitle: "Bản phản chiếu cảnh báo khẩn cấp",
    area: "Khu vực",
    urgency: "Mức khẩn cấp",
    immediate: "Ngay lập tức",
    expires: "Hết hạn",
    headline: "Bão mạnh: vào trong nhà ngay",
    alertBody: "Giông bão mạnh đang đi qua Quận Cumberland. Vào trong nhà ngay. Tránh đường ngập nước. Giữ điện thoại được sạc và theo dõi chính quyền địa phương.",
    alertSteps: ["Vào một tòa nhà chắc chắn.", "Tránh xa cửa sổ.", "Không lái xe qua nước trên đường.", "Kiểm tra hàng xóm cần hỗ trợ ngôn ngữ hoặc di chuyển."]
  },
  "zh-Hans": {
    volunteerTitle: "志愿者申请镜像",
    fullName: "姓名",
    preferredName: "常用名",
    email: "电子邮件",
    phone: "手机",
    zip: "邮政编码",
    age: "我已满18岁",
    yes: "是",
    no: "否",
    skills: "技能和语言",
    interests: "志愿服务兴趣",
    availability: "可服务时间",
    consent: "我了解这只是概念原型，不是正式申请。",
    reviewTitle: "申请人看到的内容",
    welcome: "您可以使用最熟悉的语言申请。",
    support: "您的语言偏好和口译能力会随申请一起传递。",
    alertsTitle: "紧急警报镜像",
    area: "地区",
    urgency: "紧急程度",
    immediate: "立即",
    expires: "到期",
    headline: "强风暴：立即进入室内",
    alertBody: "强雷暴正在经过坎伯兰县。请立即进入室内。避开积水道路。保持手机有电并关注当地官员的更新。",
    alertSteps: ["进入坚固建筑内。", "远离窗户。", "不要驾车穿过路面积水。", "查看可能需要语言或行动协助的邻居。"]
  },
  pt: {
    welcome: "Você pode se candidatar no idioma que usa melhor.",
    support: "Sua preferência de idioma e suas habilidades de interpretação acompanham a inscrição.",
    headline: "Tempestades severas: entre agora",
    alertBody: "Tempestades fortes passam pelo Condado de Cumberland. Entre agora. Evite estradas alagadas. Mantenha o telefone carregado e acompanhe autoridades locais.",
    alertSteps: ["Entre em um prédio seguro.", "Fique longe das janelas.", "Não dirija por água na estrada.", "Verifique vizinhos que possam precisar de apoio."]
  },
  ru: {
    welcome: "Вы можете подать заявку на языке, которым владеете лучше всего.",
    support: "Предпочтительный язык и навыки устного перевода сохраняются вместе с заявкой.",
    headline: "Сильные грозы: немедленно зайдите в помещение",
    alertBody: "Сильные грозы проходят через округ Камберленд. Зайдите в помещение сейчас. Избегайте затопленных дорог. Держите телефон заряженным и следите за сообщениями местных властей.",
    alertSteps: ["Зайдите в прочное здание.", "Держитесь подальше от окон.", "Не проезжайте по воде на дороге.", "Проверьте соседей, которым может понадобиться помощь."]
  },
  tl: {
    welcome: "Maaari kang mag-apply sa wikang pinakamadali para sa iyo.",
    support: "Kasama sa aplikasyon ang iyong gustong wika at kakayahan sa interpretasyon.",
    headline: "Malalakas na bagyo: pumasok na sa loob",
    alertBody: "May malalakas na bagyo sa Cumberland County. Pumasok sa loob ngayon. Iwasan ang binahang kalsada. Panatilihing may baterya ang telepono at sundin ang lokal na opisyal.",
    alertSteps: ["Pumasok sa matibay na gusali.", "Lumayo sa mga bintana.", "Huwag magmaneho sa tubig sa kalsada.", "Kumustahin ang kapitbahay na nangangailangan ng tulong."]
  },
  hi: {
    welcome: "आप अपनी सबसे सहज भाषा में आवेदन कर सकते हैं।",
    support: "आपकी भाषा पसंद और दुभाषिया कौशल आवेदन के साथ सुरक्षित रहते हैं।",
    headline: "तेज तूफान: अभी अंदर जाएं",
    alertBody: "कम्बरलैंड काउंटी में तेज आंधी-तूफान आ रहे हैं। अभी अंदर जाएं। पानी भरी सड़कों से बचें। फोन चार्ज रखें और स्थानीय अधिकारियों के अपडेट देखें।",
    alertSteps: ["मजबूत इमारत के अंदर जाएं।", "खिड़कियों से दूर रहें।", "सड़क पर पानी से होकर गाड़ी न चलाएं।", "भाषा या गतिशीलता सहायता चाहने वाले पड़ोसियों की जांच करें।"]
  },
  uk: {
    welcome: "Ви можете подати заявку мовою, якою вам найзручніше користуватися.",
    support: "Ваша мовна перевага та навички перекладу зберігаються разом із заявкою.",
    headline: "Сильні грози: негайно зайдіть у приміщення",
    alertBody: "Сильні грози проходять через округ Камберленд. Зайдіть у приміщення зараз. Уникайте затоплених доріг. Тримайте телефон зарядженим і стежте за місцевими повідомленнями.",
    alertSteps: ["Зайдіть у міцну будівлю.", "Тримайтеся подалі від вікон.", "Не їдьте через воду на дорозі.", "Перевірте сусідів, яким може знадобитися допомога."]
  }
};

const fallbackCopy = translations.en;
let activeLanguage = "ko";

const languageList = document.querySelector("#languageList");
const languageCount = document.querySelector("#languageCount");
const opsLanguageCount = document.querySelector("#opsLanguageCount");
const languageSearch = document.querySelector("#languageSearch");
const activeLanguageTitle = document.querySelector("#activeLanguageTitle");
const coverageLabel = document.querySelector("#coverageLabel");
const coverageDetail = document.querySelector("#coverageDetail");
const volunteerBadge = document.querySelector("#volunteerBadge");
const translatedWelcome = document.querySelector("#translatedWelcome");
const translatedSupport = document.querySelector("#translatedSupport");
const alertHeadline = document.querySelector("#alertHeadline");
const alertBody = document.querySelector("#alertBody");
const alertSteps = document.querySelector("#alertSteps");
const confidenceScore = document.querySelector("#confidenceScore");
const meterBar = document.querySelector("#meterBar");
const queueRows = document.querySelector("#queueRows");
const toast = document.querySelector("#toast");

function nativeName(code, english) {
  try {
    const display = new Intl.DisplayNames([code], { type: "language" });
    return display.of(code) || english;
  } catch {
    return english;
  }
}

function copyFor(code) {
  return { ...fallbackCopy, ...(translations[code] || {}) };
}

function renderLanguages() {
  const query = languageSearch.value.trim().toLowerCase();
  languageList.innerHTML = "";

  languages
    .filter(([code, english]) => {
      const native = nativeName(code, english);
      return `${code} ${english} ${native}`.toLowerCase().includes(query);
    })
    .forEach(([code, english]) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = `language-option${code === activeLanguage ? " active" : ""}`;
      button.setAttribute("role", "option");
      button.setAttribute("aria-selected", code === activeLanguage ? "true" : "false");
      button.innerHTML = `
        <span>
          <span class="native-name">${nativeName(code, english)}</span>
          <span class="english-name">${english}</span>
        </span>
        <span class="pack-chip ${reviewedPacks.has(code) ? "" : "ai"}">${reviewedPacks.has(code) ? "Pack" : "AI"}</span>
      `;
      button.addEventListener("click", () => {
        activeLanguage = code;
        renderLanguages();
        updateInterface();
      });
      languageList.appendChild(button);
    });
}

function updateInterface() {
  const [code, english] = languages.find(([languageCode]) => languageCode === activeLanguage) || ["en", "English"];
  const text = copyFor(code);
  const reviewed = reviewedPacks.has(code);

  document.documentElement.lang = code;
  document.documentElement.dir = ["ar", "he", "fa", "ur"].includes(code) ? "rtl" : "ltr";
  activeLanguageTitle.textContent = `${nativeName(code, english)} / ${english}`;
  coverageLabel.textContent = reviewed ? "Human-reviewed core pack" : "Machine-translation lane";
  coverageDetail.textContent = reviewed
    ? "Volunteer intake and emergency alert text are available in the selected language."
    : "This language is selectable now; production release would route text through machine translation and human review.";
  volunteerBadge.textContent = reviewed ? "Reviewed" : "AI draft";
  volunteerBadge.className = `badge ${reviewed ? "ready" : "ai"}`;

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    if (text[key]) node.textContent = text[key];
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
    const key = node.dataset.i18nPlaceholder;
    if (text[key]) node.placeholder = text[key];
  });

  translatedWelcome.textContent = text.welcome;
  translatedSupport.textContent = text.support;
  document.querySelector("[name='skills']").value = text.skillsPlaceholder;
  document.querySelector("[name='availability']").value = text.availabilityPlaceholder;
  alertHeadline.textContent = text.headline;
  alertBody.textContent = text.alertBody;
  alertSteps.innerHTML = "";
  text.alertSteps.forEach((step) => {
    const item = document.createElement("li");
    item.textContent = step;
    alertSteps.appendChild(item);
  });

  const confidence = reviewed ? 98 : 83;
  confidenceScore.textContent = `${confidence}%`;
  meterBar.style.width = `${confidence}%`;
  meterBar.style.background = reviewed ? "var(--green)" : "var(--amber)";
  renderQueue(english, reviewed);
}

function renderQueue(english, reviewed) {
  const queue = [
    ["Volunteer intake labels", reviewed ? "Approved" : "Drafted"],
    ["Emergency alert instructions", reviewed ? "Ready" : "Needs review"],
    [`${english} glossary`, reviewed ? "Current" : "Create pack"],
    ["Operator audit packet", "Staged"]
  ];

  queueRows.innerHTML = queue
    .map(([title, state]) => `
      <div class="queue-row">
        <div>
          <strong>${title}</strong>
          <span>${new Date().toLocaleDateString()} release packet</span>
        </div>
        <span class="queue-state">${state}</span>
      </div>
    `)
    .join("");
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("visible");
  window.setTimeout(() => toast.classList.remove("visible"), 2200);
}

document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach((button) => button.classList.remove("active"));
    document.querySelectorAll(".workspace").forEach((workspace) => workspace.classList.remove("active"));
    tab.classList.add("active");
    document.querySelector(`#${tab.dataset.tab}`).classList.add("active");
  });
});

document.querySelector("#translatePacket").addEventListener("click", () => {
  const [, english] = languages.find(([code]) => code === activeLanguage) || ["en", "English"];
  showToast(`${english} packet staged for form labels, alert text, glossary, and reviewer audit.`);
});

document.querySelector("#copySummary").addEventListener("click", async () => {
  const [, english] = languages.find(([code]) => code === activeLanguage) || ["en", "English"];
  const summary = `Universal language access concept: ask preferred language before account creation; support ${languages.length} selectable languages; keep reviewed packs for priority languages; route long-tail ${english} content through machine translation, interpreter review, and source-text audit.`;
  try {
    await navigator.clipboard.writeText(summary);
    showToast("Concept brief copied.");
  } catch {
    showToast(summary);
  }
});

languageSearch.addEventListener("input", renderLanguages);

languageCount.textContent = languages.length;
opsLanguageCount.textContent = languages.length;
renderLanguages();
updateInterface();
