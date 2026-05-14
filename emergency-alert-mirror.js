const alerts = {
  en: {
    back: "Combined console",
    eyebrow: "Emergency alert concept",
    title: "Mirror every alert into every language",
    languageLabel: "Language",
    translatedLabel: "Translated public alert",
    releaseGate: "Release gate",
    approve: "Approve translated alert",
    interpreter: "Send to interpreter",
    alternate: "Request alternate wording",
    headline: "Severe storms: move indoors now",
    body: "Severe thunderstorms are moving through Cumberland County. Move indoors now. Avoid flooded roads. Keep your phone charged and monitor local officials for updates.",
    steps: ["Go inside a sturdy building.", "Stay away from windows.", "Do not drive through water over the road.", "Check on neighbors who may need language or mobility support."]
  },
  ko: {
    back: "통합 콘솔",
    eyebrow: "긴급 알림 개념",
    title: "모든 알림을 모든 언어로 미러링",
    languageLabel: "언어",
    translatedLabel: "번역된 공개 알림",
    releaseGate: "배포 승인 단계",
    approve: "번역 알림 승인",
    interpreter: "통역자에게 보내기",
    alternate: "대체 문구 요청",
    headline: "강한 폭풍: 지금 실내로 이동하세요",
    body: "강한 뇌우가 컴벌랜드 카운티를 지나고 있습니다. 지금 실내로 이동하세요. 침수된 도로를 피하세요. 휴대전화를 충전해 두고 지역 당국의 안내를 확인하세요.",
    steps: ["튼튼한 건물 안으로 들어가세요.", "창문에서 떨어져 있으세요.", "도로 위 물을 절대 차로 지나가지 마세요.", "언어 또는 이동 지원이 필요한 이웃을 확인하세요."]
  },
  es: {
    back: "Consola combinada",
    eyebrow: "Concepto de alerta de emergencia",
    title: "Reflejar cada alerta en cada idioma",
    languageLabel: "Idioma",
    translatedLabel: "Alerta pública traducida",
    releaseGate: "Puerta de publicación",
    approve: "Aprobar alerta traducida",
    interpreter: "Enviar a intérprete",
    alternate: "Solicitar redacción alternativa",
    headline: "Tormentas severas: entre ahora",
    body: "Tormentas eléctricas severas avanzan por el condado de Cumberland. Entre ahora. Evite caminos inundados. Mantenga su teléfono cargado y siga las indicaciones de las autoridades locales.",
    steps: ["Entre a un edificio resistente.", "Manténgase lejos de las ventanas.", "No conduzca por agua sobre la carretera.", "Revise a vecinos que puedan necesitar apoyo de idioma o movilidad."]
  },
  ar: {
    back: "لوحة التحكم المجمعة",
    eyebrow: "تصور تنبيه الطوارئ",
    title: "اعكس كل تنبيه إلى كل لغة",
    languageLabel: "اللغة",
    translatedLabel: "تنبيه عام مترجم",
    releaseGate: "بوابة الإصدار",
    approve: "اعتماد التنبيه المترجم",
    interpreter: "إرساله إلى مترجم",
    alternate: "طلب صياغة بديلة",
    headline: "عواصف شديدة: ادخل إلى مكان آمن الآن",
    body: "تتحرك عواصف رعدية شديدة عبر مقاطعة كمبرلاند. ادخل الآن. تجنب الطرق المغمورة بالمياه. أبق هاتفك مشحونا وتابع تعليمات المسؤولين المحليين.",
    steps: ["ادخل إلى مبنى متين.", "ابتعد عن النوافذ.", "لا تقد فوق المياه على الطريق.", "اطمئن على الجيران الذين قد يحتاجون إلى دعم لغوي أو حركي."]
  },
  fr: {
    back: "Console combinée",
    eyebrow: "Concept d'alerte d'urgence",
    title: "Reproduire chaque alerte dans chaque langue",
    languageLabel: "Langue",
    translatedLabel: "Alerte publique traduite",
    releaseGate: "Validation avant diffusion",
    approve: "Approuver l'alerte traduite",
    interpreter: "Envoyer à un interprète",
    alternate: "Demander une autre formulation",
    headline: "Orages violents : mettez-vous à l'abri maintenant",
    body: "Des orages violents traversent le comté de Cumberland. Rentrez maintenant. Évitez les routes inondées. Gardez votre téléphone chargé et suivez les autorités locales.",
    steps: ["Entrez dans un bâtiment solide.", "Éloignez-vous des fenêtres.", "Ne conduisez pas dans l'eau sur la route.", "Vérifiez les voisins qui peuvent avoir besoin d'aide linguistique ou de mobilité."]
  },
  ht: {
    back: "Konsole konbine",
    eyebrow: "Konsèp alèt ijans",
    title: "Mete chak alèt nan chak lang",
    languageLabel: "Lang",
    translatedLabel: "Alèt piblik tradui",
    releaseGate: "Pòt validasyon",
    approve: "Apwouve alèt tradui a",
    interpreter: "Voye bay entèprèt",
    alternate: "Mande lòt mo",
    headline: "Gwo tanpèt: antre andedan kounye a",
    body: "Gwo loraj ap pase nan Cumberland County. Antre andedan kounye a. Evite wout ki inonde. Kenbe telefòn ou chaje epi swiv otorite lokal yo.",
    steps: ["Antre nan yon bilding solid.", "Rete lwen fenèt yo.", "Pa kondwi nan dlo sou wout la.", "Tcheke vwazen ki bezwen sipò lang oswa deplasman."]
  },
  vi: {
    back: "Bảng điều khiển chung",
    eyebrow: "Khái niệm cảnh báo khẩn cấp",
    title: "Phản chiếu mọi cảnh báo sang mọi ngôn ngữ",
    languageLabel: "Ngôn ngữ",
    translatedLabel: "Cảnh báo công khai đã dịch",
    releaseGate: "Cổng phát hành",
    approve: "Phê duyệt cảnh báo đã dịch",
    interpreter: "Gửi cho phiên dịch viên",
    alternate: "Yêu cầu cách viết khác",
    headline: "Bão mạnh: vào trong nhà ngay",
    body: "Giông bão mạnh đang đi qua Quận Cumberland. Vào trong nhà ngay. Tránh đường ngập nước. Giữ điện thoại được sạc và theo dõi chính quyền địa phương.",
    steps: ["Vào một tòa nhà chắc chắn.", "Tránh xa cửa sổ.", "Không lái xe qua nước trên đường.", "Kiểm tra hàng xóm cần hỗ trợ ngôn ngữ hoặc di chuyển."]
  },
  zh: {
    back: "组合控制台",
    eyebrow: "紧急警报概念",
    title: "将每条警报镜像到每种语言",
    languageLabel: "语言",
    translatedLabel: "已翻译的公众警报",
    releaseGate: "发布审核",
    approve: "批准已翻译警报",
    interpreter: "发送给口译人员",
    alternate: "请求替代表述",
    headline: "强风暴：立即进入室内",
    body: "强雷暴正在经过坎伯兰县。请立即进入室内。避开积水道路。保持手机有电并关注当地官员的更新。",
    steps: ["进入坚固建筑内。", "远离窗户。", "不要驾车穿过路面积水。", "查看可能需要语言或行动协助的邻居。"]
  }
};

const language = document.querySelector("#alertLanguage");
const headline = document.querySelector("#alertHeadline");
const body = document.querySelector("#alertBody");
const steps = document.querySelector("#alertSteps");

function renderAlert() {
  const data = alerts[language.value] || alerts.en;
  document.documentElement.lang = language.value;
  document.documentElement.dir = ["ar"].includes(language.value) ? "rtl" : "ltr";
  document.querySelectorAll("[data-text]").forEach((node) => {
    const key = node.dataset.text;
    if (data[key]) node.textContent = data[key];
  });
  headline.textContent = data.headline;
  body.textContent = data.body;
  steps.innerHTML = "";
  data.steps.forEach((step) => {
    const item = document.createElement("li");
    item.textContent = step;
    steps.appendChild(item);
  });
}

language.addEventListener("change", renderAlert);
renderAlert();
