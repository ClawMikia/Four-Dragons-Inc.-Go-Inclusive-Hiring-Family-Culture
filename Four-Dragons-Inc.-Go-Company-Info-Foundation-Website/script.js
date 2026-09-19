(() => {
  const html = document.documentElement;
  const nav = document.getElementById('siteNav');
  const scrim = document.getElementById('scrim');
  const drawerToggle = document.getElementById('drawerToggle');
  const navClose = document.getElementById('navClose');
  const themeToggleMobile = document.getElementById('themeToggleMobile');
  const langSwitch = document.getElementById('langSwitch');

  const STORE_KEY_THEME = 'fourDragons.theme';
  const STORE_KEY_NAV = 'fourDragons.navPosition';
  const STORE_KEY_LANG = 'fourDragons.language';

  const translations = {
    en: {
      navHome: 'Home',
      navCreations: 'Our Creations',
      navStandards: 'Content Standards',
      navHiring: 'Hiring Process',
      navHiringStandards: 'Hiring Standards',
      navConstitution: 'Constitution',
      navCulture: 'Culture',
      navAikido: 'Atatakasa Aikido',
      navPhilosophy: 'Creative Philosophy',
      themeLabel: 'Theme',
      themeDark: 'Dark',
      themeLight: 'Light',
      navLabel: 'Navbar position',
      navTop: 'Top',
      navLeft: 'Left',
      navRight: 'Right',
      langLabel: 'Language',
      heroEyebrow: 'Tokyo, Japan · Main Headquarters & Decentralized Worldwide',
      heroTitle: 'Four Dragons Inc. Go <span class="jp">(演劇)</span>',
      heroSub: 'An inclusive, character-first entertainment family where willingness, curiosity, passion, and human dignity come before every resume.',
      heroFounder: 'Christopher Lee Cajes — Founder, CEO & Chairman',
      heroPrimary: 'View Our Creations',
      heroSecondary: 'Our Hiring Process',
      creationsVol: 'Our Work',
      creationsTitle: 'What we make',
      creationsLead: 'Any entertainment and creativity products — from the heart of every member of the family as creators.',
      standardsVol: 'Product Standards',
      standardsTitle: 'The line we don\'t cross',
      standardsLead: 'All Four Dragons products must uplift, inspire, and bring people together. The following themes are never permitted — across games, anime, film, music or books:',
      standard1: 'Brutal or excessively violent content and gore',
      standard2: 'Horror, scary, or disturbing imagery',
      standard3: 'Inappropriate or mature themes',
      standard4: 'Anything that creates a negative emotional impact',
      standard5: 'Profanity, vulgar language, or crude humor',
      standard6: 'Sexual content or suggestive material',
      standard7: 'Substance abuse or glorification of drugs and alcohol',
      standard8: 'Discrimination, hate speech, or prejudice-based messaging',
      standard10: 'Manipulative, exploitative, or fear-based storytelling',
      standardsLead2: 'Instead, every project strives to be friendly, hopeful, and positive:',
      standardsList1: '+ Friendly &amp; Welcoming',
      standardsList2: '+ Inspirational &amp; Hopeful',
      standardsList3: '+ Positive &amp; Joyful',
      standardsList4: '+ Kind &amp; Compassionate',
      standardsList5: '+ Courageous &amp; Adventurous',
      prod1Category: 'Open-World Action RPG',
      prod1Title: 'Dragon Rising: Ember Chronicles',
      prod1Tagline: 'Carve your legend across the Nine Realms.',
      prod2Category: 'Cozy Life MMO',
      prod2Title: 'Atatakasa Online',
      prod2Tagline: 'Build. Share. Belong.',
      prod3Category: 'Animated Series',
      prod3Title: 'The Four Dragons Saga',
      prod3Tagline: 'Four siblings. Four elements. One destiny.',
      prod4Category: 'Animated Feature Film',
      prod4Title: 'Mona no Hoshi',
      prod4Tagline: "A painter's promise. A dragon's gift.",
      prod5Category: 'Original Soundtrack',
      prod5Title: 'Symphony of Warmth',
      prod5Tagline: 'Music that feels like home.',
      prod6Category: 'Philosophy & Culture Book',
      prod6Title: "The Founder's Blueprint",
      prod6Tagline: 'How to build a company — not a machine.',
      statusAvailable: 'Available',
      statusInDev: 'In Development',
      statusStreaming: 'Streaming Now',
      statusTheaters: 'In Theaters',
      hiringVol: 'Hiring Process',
      hiringTitle: 'Join the family through a human conversation',
      hiringLead: 'Four Dragons welcomes anyone who is willing, interested, and excited to join the family. The process is simple, respectful, and built to meet people where they are.',
      hiringStep1Title: 'Submit a resume',
      hiringStep1Text: 'A resume is required for every applicant. If you cannot create one, you are still welcome. We will help you prepare it without judgment.',
      hiringStep2Title: 'Say hello',
      hiringStep2Text: 'The interview is 100% informal. Say hi and hello, tell your story politely and friendly, and be yourself. Skills, knowledge, achievements, education, life status, and background do not decide your worth.',
      hiringStep3Title: 'Show your character',
      hiringStep3Text: 'Character matters most. Skills can be taught and patiently developed. The hardest thing to change is attitude. We do not hire toxic behavior that treats people badly at their lowest or damages human dignity.',
      hiringStep4Title: 'No skill assessments',
      hiringStep4Text: 'No skills assessment, test, examination, assignment, or practical demonstration is required at any stage of hiring.',
      learningNote: 'Not everything can be taught in schools or universities. Character, attitude, willingness, and humanity are lived and learned through life.',
      hiringQuote: '“We should have a heart. These people have passions and purpose in life, especially when building a true family and a real impact of creativity and innovation to the world.”',
      hiringStandardsVol: 'Hiring Standards',
      hiringStandardsTitle: 'People before profiles',
      hiringStandardsLead: 'Hiring is an act of trust. We protect each person\'s dignity, passions, career, and future while looking for the character that helps a family grow together.',
      hiringWelcomeTitle: 'We welcome',
      hiringWelcome1: 'Anyone who is willing, interested, and excited to join the family',
      hiringWelcome2: 'Applicants who need support creating a resume',
      hiringWelcome3: 'People of every skill level, achievement, education, and life status',
      hiringWelcome4: 'Polite, friendly storytellers who bring curiosity and heart',
      hiringRejectTitle: 'We never reject because of',
      hiringReject1: 'A lack of a skill, qualification, achievement, or experience',
      hiringReject2: 'A person\'s physical looks, personal status, or life circumstances',
      hiringReject3: 'Anything that would destroy a person\'s career, passions, or future',
      hiringManagerTitle: 'Hiring manager policy',
      hiringManagerText: 'The founder\'s current policy does not appoint Filipino applicants as hiring managers, based on the founder\'s experiences with harmful hiring practices in the Philippines. Filipino applicants are welcome to join the family in every other role.',
      scriptTitle: 'Scripts we never use',
      scriptLead: 'The following rejection scripts and email subjects represent inappropriate and unprofessional hiring communication. They are not part of Four Dragons hiring communication and show language the founder will not tolerate.',
      script1: '“After careful review of your qualifications, we regret to inform you that we are moving forward with other candidates whose profiles more closely align with the current requirements of this role.”',
      script2: '“While we were highly impressed by your background, we have decided to move forward with another candidate who possesses more specialized experience in [mention specific skill, e.g., advanced developer].”',
      script3: '“Unfortunately, we are not able to offer you an interview for the [Position Title] role.”',
      script4: 'Email subject: “Not Selected”',
      script2Note: 'This script\'s true meaning is unprofessionalism. It is unreasonable to reduce a person to a narrow comparison of specialized experience.',
      scriptNote: 'The word “unfortunately” is not part of our hiring dictionary and will not be tolerated in hiring.',
      constitutionVol: 'Corporate Constitution',
      constitutionTitle: 'These almost never change.',
      article1Title: 'Every person deserves dignity.',
      article2Title: 'Good human beings come before great talent.',
      article2Text: 'Character outweighs skill. Skills can be learned. Character must be lived.',
      article3Title: 'Zero corruption.',
      article3Text: 'No bribery. No abuse of authority. No favoritism. No exploitation.',
      article4Title: 'The company exists to improve people\'s lives.',
      article4Text: 'Profit sustains the mission — it does not replace it.',
      article5Title: 'Everyone is a creator.',
      article5Text: 'Teams and individuals may create. Original pitches are welcomed. Passion projects encouraged.',
      article6Title: 'No layoffs for financial optimization alone.',
      article6Text: 'Relocate. Retrain. Create opportunities. The Founder protects his children\'s jobs, dreams, and futures — first, always.',
      article7Title: 'Anyone may leave peacefully to chase their own dreams.',
      article7Text: 'Entrepreneurship is celebrated. Leaving to build your own venture is a success — not betrayal. Former members stay family.',
      article8Title: 'Treat everyone equally.',
      article8Text: 'Titles do not determine worth. Everyone deserves equal human respect.',
      article9Title: 'No forced participation.',
      article9Quote: '“Walang sapilitan.”',
      article9Text: 'Real teamwork comes from willingness — not coercion.',
      article10Title: 'Continuous learning.',
      article10Text: 'Everyone remains a student. Everyone remains a teacher.',
      cultureVol: 'Culture Book',
      cultureTitle: 'Our Values',
      valueKindness: 'Kindness',
      valueRespect: 'Respect',
      valueHonesty: 'Honesty',
      valuePassion: 'Passion',
      valueFamily: 'Family',
      valueHumility: 'Humility',
      valueCreativity: 'Creativity',
      valueCourage: 'Courage',
      valueResponsibility: 'Responsibility',
      valueCompassion: 'Compassion',
      valueCuriosity: 'Curiosity',
      valueGratitude: 'Gratitude',
      valueOptimism: 'Optimism',
      valueService: 'Service',
      rejectTitle: 'We Reject',
      rejectCorruption: 'Corruption',
      rejectBullying: 'Bullying',
      rejectHarassment: 'Harassment',
      rejectDiscrimination: 'Discrimination',
      rejectManipulation: 'Manipulation',
      rejectRacism: 'Racism',
      rejectCruelty: 'Cruelty',
      rejectAbuse: 'Abuse',
      rejectPolitics: 'Workplace politics',
      rejectCongress: 'Congress',
      rejectToxicCompetition: 'Toxic competition',
      rejectFearMgmt: 'Fear-based management',
      rejectToxicWork: 'Toxic work culture',
      rejectScam: 'Scam',
      rejectReframe1: 'The word <em>"Micromanage" / "Micromanagement"</em> doesn\'t exist — not in this dictionary, not here.',
      rejectReframe2: '<strong>"We speak respectfully. We don\'t criticize people. We lift each other up."</strong>',
      rejectQuote: '“Four Dragons has zero tolerance for toxic work culture. If the environment stops feeling safe, the Founder will act — and protect his family.”',
      aikidoVol: 'Atatakasa Aikido (温かさ)',
      aikidoTitle: '温かさ — Atatakasa',
      aikidoLead: 'Warmth. Kindness. Compassion. An optional weekend program — not a job requirement — open to everyone: families, children, and guests alike.',
      aikidoPurposeTitle: 'Purpose',
      aikidoPurposeText: 'Strengthen health. Build trust. Reduce stress. Promote humility. Encourage lifelong learning.',
      aikidoWeekendTitle: 'Weekend Activities',
      aikidoWeekendText: 'Optional Aikido practice, meditation, stretching, tea gathering — family participation welcome.',
      aikidoPhilosophyTitle: 'Philosophy',
      aikidoPhilosophyText: '温かさ — Warmth. Kindness. Compassion.',
      aikidoInclusivityTitle: 'Radical Inclusivity & Open Sensei Policy',
      aikidoInclusivityText: 'Aikido ranks and dan boundaries are removed. Any martial artist ranked higher than the Chairman is welcomed to take the floor as guest sensei. The organization holds an open aspiration to host Doshu Moriteru Ueshiba as leading master sensei.',
      aikidoUkemiTitle: 'The “Weekend Ukemi” Healing Protocol',
      aikidoUkemiText: 'When children or students face emotional hardship, the Chairman steps down from the dominant nage role on weekends and acts as ukemi — receiver who takes the fall. Reversing the traditional power dynamic creates a space of humility, mutual trust, and active recovery.',
      aikidoSubhead: 'Four Dragons Inc. Go · Atatakasa Aikido — Tokyo, Japan',
      philosophyVol: 'Creative Philosophy',
      philosophyTitle: 'No deadlines. Just great work.',
      philosophyLead1: 'The best work comes when creators are free to explore, iterate, and let ideas breathe — not when a calendar is breathing down their neck.',
      philosophyLine1: '"I\'m not chasing the clock on this."',
      philosophyLine2: '"I\'m focused on the work, not the pressure of the date."',
      philosophyLine3: '"I\'m staying ahead of the game so the deadline isn\'t an issue."',
      philosophyLead2: 'When people aren\'t stressed about arbitrary timelines, they take risks, experiment, and produce work they\'re proud of. Rushing creates mediocrity; patience creates masterpieces.',
      philosophySubhead: 'A living proof — Leonardo da Vinci',
      philosophyPara1: 'Leonardo kept refining the <em>Mona Lisa</em> for 16 years — from 1503 until his death in 1519 — never delivering it, because it wasn\'t finished.',
      philosophyPara2: 'One painting. Nearly two decades. No deadline over his head. The result: the most famous painting on Earth — not because he rushed, but because he refused to settle.',
      philosophyQuote: 'He didn\'t build something to meet a date. He built something to be extraordinary.',
      philosophyPara3: 'That\'s the energy Four Dragons was founded on. Our games, anime, films, music, and books deserve that same patience. We\'d rather take our time and ship something people love than chase a calendar and ship something forgettable.',
      footerText: 'Four Dragons Inc. Go (演劇) — Tokyo, Japan & Decentralized Worldwide',
      footerSub: 'Christopher Lee Cajes · Founder, CEO & Chairman'
    },
    ja: {
      navHome: 'ホーム',
      navCreations: '作品',
      navStandards: 'コンテンツ基準',
      navHiring: '採用プロセス',
      navHiringStandards: '採用基準',
      navConstitution: '憲章',
      navCulture: '文化',
      navAikido: 'アタタカサ・アイキドー',
      navPhilosophy: '創造哲学',
      themeLabel: 'テーマ',
      themeDark: 'ダーク',
      themeLight: 'ライト',
      navLabel: 'ナビゲーション位置',
      navTop: '上',
      navLeft: '左',
      navRight: '右',
      langLabel: '言語',
      heroEyebrow: '日本・東京 主要拠点・世界的な分散型拠点',
      heroTitle: 'Four Dragons Inc. Go <span class="jp">（演劇）</span>',
      heroSub: '意志、好奇心、情熱、人間の尊厳をすべての経歴より大切にする、包摂的で人柄を重視するエンターテインメント家族。',
      heroFounder: 'クリストファー・リー・カヘス — 創業者・CEO・会長',
      heroPrimary: '作品を見る',
      heroSecondary: '採用プロセス',
      creationsVol: '私たちの作品',
      creationsTitle: '私たちが作るもの',
      creationsLead: '家族の全メンバーが創作者として、心を込めて生み出すあらゆるエンターテインメント。',
      standardsVol: '製品基準',
      standardsTitle: '越えない線',
      standardsLead: 'すべての Four Dragons 製品は、力づけ・鼓舞・人々をつなぐべきである。以下のテーマは、ゲーム・アニメ・映画・音楽・書籍を問わず許可されない。',
      standard1: '残虐または過度に暴力的な内容',
      standard2: '恐怖、怖い、または不気味なイメージ',
      standard3: '不適切または成熟したテーマ',
      standard4: 'ネガティブな感情的影響を与えるもの',
      standard5: '汚言、下品な表現、粗野な冗談',
      standard6: '性的内容または示唆的な素材',
      standard7: '薬物乱用、薬物やアルコールの美化',
      standard8: '差別、ヘイトスピーチ、偏見に基づくメッセージ',
      standard10: '操作的、搾取的、または恐怖に基づくストーリーテリング',
      standardsLead2: 'その代わり、すべてのプロジェクトは親しみやすく希望に満ち、前向きであるべきである。',
      standardsList1: '+ 親しみやすく歓迎的',
      standardsList2: '+ 鼓舞的で希望に満ち',
      standardsList3: '+ 前向きで楽しさに満ち',
      standardsList4: '+ 優しく思いやり深く',
      standardsList5: '+ 勇敢で冒険的',
      prod1Category: 'オープンワールドアクションRPG',
      prod1Title: 'ドラゴンライジング：エンバー・クロニクルズ',
      prod1Tagline: '九界を駆ける、伝説を刻め。',
      prod2Category: 'コージー・ライフMMO',
      prod2Title: 'アタタカサ・オンライン',
      prod2Tagline: '造る。分かち合う。属する。',
      prod3Category: 'アニメシリーズ',
      prod3Title: 'ザ・フォー・ドラゴンズ・サーガ',
      prod3Tagline: '四兄弟。四元素。運命ひとつ。',
      prod4Category: '劇場用アニメフィーチャー',
      prod4Title: 'モナの星',
      prod4Tagline: '画家の約束。龍の贈り物。',
      prod5Category: 'オリジナルサウンドトラック',
      prod5Title: 'シンフォニー・オブ・ウォームス',
      prod5Tagline: '家のような音楽。',
      prod6Category: '哲学・文化書',
      prod6Title: 'ザ・ファウンダー\'ズ・ブループリント',
      prod6Tagline: '会社の作り方。機械ではなく。',
      statusAvailable: '配信中',
      statusInDev: '開発中',
      statusStreaming: '配信中',
      statusTheaters: '映館上映中',
      hiringVol: '採用プロセス',
      hiringTitle: '人との会話を通じて家族に加わる',
      hiringLead: 'Four Dragons は、参加したいという意志、興味、情熱を持つ人を歓迎します。プロセスはシンプルで敬意に満ち、一人ひとりの状況に寄り添うものです。',
      hiringStep1Title: '履歴書を提出する',
      hiringStep1Text: '応募者には履歴書の提出が必要です。作成できない場合も歓迎します。判断や批判をせず、準備をサポートします。',
      hiringStep2Title: 'こんにちはと言う',
      hiringStep2Text: '面接は完全にカジュアルです。こんにちはとあいさつし、丁寧で友好的に自分の物語を話してください。技能、知識、実績、学歴、生活状況、経歴は、あなたの価値を決めません。',
      hiringStep3Title: '人柄を示す',
      hiringStep3Text: '最も重要なのはその人の人柄です。技能は教えられ、忍耐強く育てられます。変えるのが最も難しいのは態度です。人の最低な瞬間に悪く接したり、人間の尊厳を傷つけたりする有毒な行動を持つ人は採用しません。',
      hiringStep4Title: '技能評価は不要',
      hiringStep4Text: '採用のどの段階でも、技能の評価、テスト、試験、課題、実技の提示は必要ありません。',
      learningNote: 'すべてを学校や大学で教えられるわけではありません。人柄、態度、意志、人間性は、人生を通して生き、学ぶものです。',
      hiringQuote: '「私たちは心を持つべきです。これらの人々には情熱と人生の目的があります。特に、本当の家族と、創造性と革新が世界に与える本物の影響を築くときには。」',
      hiringStandardsVol: '採用基準',
      hiringStandardsTitle: '経歴より人を大切に',
      hiringStandardsLead: '採用は信頼を築く行為です。家族の成長に役立つ人柄を見ながら、一人ひとりの尊厳、情熱、キャリア、未来を守ります。',
      hiringWelcomeTitle: '歓迎する人',
      hiringWelcome1: '家族に加わる意志、興味、情熱を持つすべての人',
      hiringWelcome2: '履歴書作成のサポートが必要な応募者',
      hiringWelcome3: 'あらゆる技能レベル、実績、学歴、生活状況の人',
      hiringWelcome4: '好奇心と心を持ち、丁寧で友好的に語る人',
      hiringRejectTitle: '次の理由だけで不採用にしない',
      hiringReject1: '技能、資格、実績、経験の不足',
      hiringReject2: '外見、個人的な地位、生活状況',
      hiringReject3: 'その人のキャリア、情熱、未来を壊すもの',
      hiringManagerTitle: '採用担当者の方針',
      hiringManagerText: '創設者はフィリピンでの有害な採用慣行に関する経験に基づき、現在の方針としてフィリピン人の応募者を採用担当者に任命していません。フィリピン人の応募者は、その他のすべての役割に歓迎されます。',
      scriptTitle: '決して使わない文言',
      scriptLead: '以下の不採用通知とメール件名は、不適切で非専門的な採用連絡であり、Four Dragons では使用しません。創設者が許容しない表現の例です。',
      script1: '「履歴書などを慎重に確認した結果、現在の職種要件により合致するプロフィールを持つ他の候補者を進めることになりました。」',
      script2: '「あなたの経歴に深く感銘を受けましたが、より専門的な経験を持つ別の候補者を進めることにしました。」',
      script3: '「面接の機会を提供できません。」',
      script4: 'メール件名：「選考外」',
      script2Note: 'この文言が本当に表しているのは非専門性です。専門経験の狭い比較だけで一人の人間を判断するのは不合理です。',
      scriptNote: '「残念ながら」という言葉は、私たちの採用の辞書にはなく、採用では許容されません。',
      constitutionVol: '企業憲章',
      constitutionTitle: 'ほとんど変わることのないもの',
      article1Title: 'すべての人に尊厳がある。',
      article2Title: '偉大な才能より、良き人間性を優先する。',
      article2Text: '人格は能力より重い。能力は学べる。人格は生きるものである。',
      article3Title: '腐敗ゼロ。',
      article3Text: '賄賂・権力濫用・忖度・搾取のすべてを拒む。',
      article4Title: '会社は人々の人生を改善するために存在する。',
      article4Text: '利益は使命を支えるものであり、使命に代わるものではない。',
      article5Title: '誰もが創作者である。',
      article5Text: 'チームも個人も創作できる。オリジナルな企画を歓迎する。情熱のプロジェクトを奨励する。',
      article6Title: '財務最適化だけが理由の人員削減はしない。',
      article6Text: '人を移動し、再教育し、新しい機会を作る。創設者は子どもたちの仕事・夢・未来を最優先に守る。',
      article7Title: '誰でも平穏に辞めて、自分の夢を追える。',
      article7Text: '起業を称える。自分の事業を立ち上げるために辞めることは裏切りではなく成功である。元メンバーは家族のまま。',
      article8Title: 'すべての人を平等に扱う。',
      article8Text: '肩書きが価値を決めるのではない。誰もが平等な人間的尊重を受ける。',
      article9Title: '強制参加はしない。',
      article9Quote: '「Walang sapilitan。」',
      article9Text: '真の協働とは、強制ではなく意志によって成り立つ。',
      article10Title: '継続的な学習。',
      article10Text: '誰もが学び続け、誰もが教える存在である。',
      cultureVol: '文化書',
      cultureTitle: '私たちの価値観',
      valueKindness: '優しさ',
      valueRespect: '尊重',
      valueHonesty: '誠実',
      valuePassion: '情熱',
      valueFamily: '家族',
      valueHumility: '謙虚',
      valueCreativity: '創造性',
      valueCourage: '勇気',
      valueResponsibility: '責任',
      valueCompassion: '思いやり',
      valueCuriosity: '好奇心',
      valueGratitude: '感謝',
      valueOptimism: '楽観',
      valueService: '奉仕',
      rejectTitle: '私たちが拒絶するもの',
      rejectCorruption: '腐敗',
      rejectBullying: 'いじめ',
      rejectHarassment: '嫌がらせ',
      rejectDiscrimination: '差別',
      rejectManipulation: '操作',
      rejectRacism: '人種差別',
      rejectCruelty: '残酷さ',
      rejectAbuse: '虐待',
      rejectPolitics: '職場の政治',
      rejectCongress: '議会',
      rejectToxicCompetition: '有害な競争',
      rejectFearMgmt: '恐怖に基づくマネジメント',
      rejectToxicWork: '有害な労働文化',
      rejectScam: '詐欺',
      rejectReframe1: '「Micromanage / Micromanagement」という言葉は存在しない — ここの辞書にはない。',
      rejectReframe2: '<strong>「私たちは敬意をもって話す。人を批判しない。互いを支え合う。」</strong>',
      rejectQuote: '「Four Dragons は有害な労働文化に対してゼロトレランスです。安心できない環境が生まれたら創設者は行動する — そして家族を守る。」',
      aikidoVol: 'アタタカサ・アイキドー（温かさ）',
      aikidoTitle: '温かさ — Atatakasa',
      aikidoLead: '温かさ。優しさ。思いやり。任意の週末プログラムで、仕事の義務ではない。家族・子ども・ゲストを問わず参加できる。',
      aikidoPurposeTitle: '目的',
      aikidoPurposeText: '健康を強める。信頼を築く。ストレスを減らす。謙虚さを育む。生涯学び続けることを奨励する。',
      aikidoWeekendTitle: '週末の活動',
      aikidoWeekendText: '任意の合気道練習、瞑想、ストレッチ、茶会 — 家族参加も歓迎。',
      aikidoPhilosophyTitle: '哲学',
      aikidoPhilosophyText: '温かさ — Atatakasa. Warmth. Kindness. Compassion.',
      aikidoInclusivityTitle: '過激な包摂性とオープン・センセイ方針',
      aikidoInclusivityText: '合気道のランクや段位の境界を完全に撤廃する。会長より上位の武道家は、ゲスト先生としてフロアに上がるよう歓迎する。組織は、月城盛矩を主導的な先生として迎えることを常に望む。',
      aikidoUkemiTitle: '「週末 Ukemi」ヒーリング・プロトコル',
      aikidoUkemiText: '子どもや生徒が感情的苦痛に直面したとき、会長は週末に支配的な nage の役割から降り、ukemi（受ける側）として身体的な影響を受け入れる。伝統的な権力関係を逆転させることで、謙虚さ・相互信頼・積極的な回復の空間を作る。',
      aikidoSubhead: 'Four Dragons Inc. Go · Atatakasa Aikido — 東京、日本',
      philosophyVol: '創造哲学',
      philosophyTitle: '締め切りはない。素晴らしい仕事だけがある。',
      philosophyLead1: '最良の仕事は、創作者が自由に探求し・試し・アイデアを息づかせられるときに生まれる。カレンダーに追われるときではない。',
      philosophyLine1: '「この件に関しては、時刻に追われてはいない。」',
      philosophyLine2: '「日付のプレッシャーではなく、仕事に集中している。」',
      philosophyLine3: '「締め切りが問題にならないよう、常に先回りしている。」',
      philosophyLead2: '恣意的な時間軸に縛られない人は、リスクを取って試し、誇りを持てる仕事を生み出す。急ぐことは平凡さを生み、忍耐は傑作を生む。',
      philosophySubhead: '生きた証拠 — レオナルド・ダ・ヴィンチ',
      philosophyPara1: 'ダ・ヴィンチは <em>モナ・リザ</em> を16年間 — 1503年から1519年没まで — 完成したと思えないので鋭意改良を重ねた。',
      philosophyPara2: '1枚の絵画。20年に近い歳月。締め切りはなかった。結果は地球で最も有名な絵画 — 急いだからではなく、妥協を拒んだから。',
      philosophyQuote: '彼は締め切りに合わせて何かを作ったのではない。並外れのものを作ったのだ。',
      philosophyPara3: 'これこそ Four Dragons が誕生した原動力である。私たちのゲーム・アニメ・映画・音楽・書籍も同じ忍耐を必要とする。カレンダーを追いかけて忘れられる作品より、時間をかけて愛される作品を出したい。',
      footerText: 'Four Dragons Inc. Go (演劇) — 東京、日本と分散型の世界各地',
      footerSub: 'クリストファー・リー・カヘス · 創業者・CEO・会長'
    }
  };

  /* ---------- restore saved preferences ---------- */
  const savedTheme = safeGet(STORE_KEY_THEME);
  const savedNav = safeGet(STORE_KEY_NAV);
  const savedLanguage = safeGet(STORE_KEY_LANG);
  const systemPrefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;

  setTheme(savedTheme || (systemPrefersLight ? 'light' : 'dark'), false);
  setNavPosition(savedNav || 'top', false);
  setLanguage(savedLanguage || 'en', false);

  function safeGet(key){
    try { return localStorage.getItem(key); } catch (e) { return null; }
  }
  function safeSet(key, value){
    try { localStorage.setItem(key, value); } catch (e) { /* storage unavailable, ignore */ }
  }

  /* ---------- language ---------- */
  function setLanguage(language, persist = true){
    html.setAttribute('data-lang', language);
    document.querySelectorAll('[data-i18n-key]').forEach(el => {
      const key = el.getAttribute('data-i18n-key');
      const value = translations[language]?.[key];
      if (!value) return;
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.value = value;
      } else {
        el.innerHTML = value;
      }
    });
    if (langSwitch) {
      langSwitch.setAttribute('aria-checked', language === 'ja' ? 'true' : 'false');
      const active = langSwitch.querySelectorAll('.lang-switch-option');
      active.forEach(option => option.classList.toggle('active', option.dataset.lang === language));
    }
    if (persist) safeSet(STORE_KEY_LANG, language);
  }

  if (langSwitch) {
    langSwitch.addEventListener('click', () => {
      const next = html.getAttribute('data-lang') === 'ja' ? 'en' : 'ja';
      setLanguage(next);
    });
  }

  /* ---------- theme ---------- */
  function setTheme(theme, persist = true){
    html.setAttribute('data-theme', theme);
    document.querySelectorAll('[data-theme-choice]').forEach(btn => {
      const active = btn.dataset.themeChoice === theme;
      btn.setAttribute('aria-checked', active ? 'true' : 'false');
    });
    if (persist) safeSet(STORE_KEY_THEME, theme);
  }

  document.querySelectorAll('[data-theme-choice]').forEach(btn => {
    btn.addEventListener('click', () => setTheme(btn.dataset.themeChoice));
  });

  themeToggleMobile.addEventListener('click', () => {
    const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    setTheme(next);
  });

  /* ---------- navbar position ---------- */
  function setNavPosition(position, persist = true){
    html.setAttribute('data-nav', position);
    document.querySelectorAll('[data-nav-choice]').forEach(btn => {
      const active = btn.dataset.navChoice === position;
      btn.setAttribute('aria-checked', active ? 'true' : 'false');
    });
    if (persist) safeSet(STORE_KEY_NAV, position);
  }

  document.querySelectorAll('[data-nav-choice]').forEach(btn => {
    btn.addEventListener('click', () => setNavPosition(btn.dataset.navChoice));
  });

  /* ---------- mobile drawer ---------- */
  function openDrawer(){
    html.classList.add('nav-open');
    scrim.classList.add('show');
    drawerToggle.setAttribute('aria-expanded', 'true');
  }
  function closeDrawer(){
    html.classList.remove('nav-open');
    scrim.classList.remove('show');
    drawerToggle.setAttribute('aria-expanded', 'false');
  }
  drawerToggle.addEventListener('click', () => {
    html.classList.contains('nav-open') ? closeDrawer() : openDrawer();
  });
  navClose.addEventListener('click', closeDrawer);
  scrim.addEventListener('click', closeDrawer);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeDrawer();
  });
  nav.querySelectorAll('.nav-links a').forEach(a => {
    a.addEventListener('click', closeDrawer);
  });
  window.addEventListener('resize', () => {
    if (window.innerWidth > 960) closeDrawer();
  });

  /* ---------- scroll-spy active link ---------- */
  const links = Array.from(document.querySelectorAll('.nav-links a'));
  const sections = links
    .map(a => document.querySelector(a.getAttribute('href')))
    .filter(Boolean);

  const spy = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const id = '#' + entry.target.id;
      const link = links.find(a => a.getAttribute('href') === id);
      if (!link) return;
      if (entry.isIntersecting) {
        links.forEach(a => a.classList.remove('active'));
        link.classList.add('active');
      }
    });
  }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });

  sections.forEach(sec => spy.observe(sec));

  /* ---------- copyright year ---------- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  document.addEventListener('contextmenu', e => e.preventDefault());
})();
