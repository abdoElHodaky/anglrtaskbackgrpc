import { Router } from "express";
import { Author } from "../entity/";
import { Article } from "../entity/"
import { AppDataSource } from "../_datasource";

export const articlesroute=Router()

articlesroute.get("/articles",(req,res)=>{
    /* 	#swagger.tags = ['Article']
        #swagger.description = 'Endpoint to get articles' */


   /* AppDataSource.manager.find(Article).
    then(d=>{
        res.json(d)
    }).catch(console.log)*/ 
})

    
/*articlesroute.get("/articles/seed",(req,res)=>{
    let author:Author;
    let articles:Article[]=<Article[]>[
        {
            cateogry:"MINS",
            imgurl:"https://moe.gov.eg//media/poujpoin/whatsapp-image-2022-11-03-at-2-30-16-pm.jpeg?anchor=center&mode=crop&width=1560&height=528&rnd=133119532090370000",
            title: 'وزير التربية والتعليم يترأس اجتماع أعضاء المجلس الأعلى للأمناء والآباء والمعلمين', 
            content:`
            وفي بداية الاجتماع رحب الدكتور رضا حجازي، بأعضاء المجلس، مؤكدًا أن المجلس هو الممثل الشرعى لآراء أولياء الأمور والمعلمين،
            مشيدًا بدورهم في التغلب على العديد من مشكلات العملية التعليمية والمجهودات المبذولة لإنجاح منظومة التعليم الجديدة. وقال حجازي، إننا نسعى إلى تطوير العملية التعليمية وتنمية مهارات المعلمين، والعمل على توفير منظومة تعليمية متميزة من شأنها تحقيق أهداف التنمية المستدامة. واستعرض الوزير، خلال الاجتماع، الإجراءات التي اتخذتها الوزارة لتطوير المنظومة التعليمية، حيث استهدفت الوزارة عودة الطلاب للمدرسة، ودمج التكنولوجيا في التعليم وتخصيص يوم للأنشطة الفنية والرياضية والثقافية بالتعاون مع وزارتي الشباب والرياضة والثقافة. ووجه الوزير، أعضاء المجلس بضرورة إطلاق مبادرات من شأنها التعريف بالحقوق والواجبات لكل أطراف المنظومة التعليمية، وتحويل تلك المبادرات لتصبح بمثابة ميثاق عمل، سواء لأعضاء مجالس الأمناء، أو للمعلمين وأولياء الأمور، كما تهدف تلك المبادرات للتقريب بين أطراف العملية التعليمية على أرض الواقع. وناقش المجلس العديد من القضايا والتي من أهمها تفعيل دور المجلس بالمدارس والتواصل مع أولياء الأمور والتوعية بجهود الوزارة والتي تهدف في المقام الأول إلي الحفاظ على حق الطلاب في الحصول على خدمة تعليمية تليق بهم، فضًلا عن مناقشة العديد من القضايا الأخرى. حضر الاجتماع الدكتورة إيمان حسن المدير التنفيذي للمجلس، ورئيس الإدارة المركزية للأنشطة الطلابية، والدكتور أكرم حسن رئيس الإدارة المركزية لتطوير المناهج، والمستشار أشرف سيد المستشار القانوني لوزارة التربية والتعليم،
            وعبد الرؤوف علام رئيس المجلس الأعلى للأمناء والآباء والمعلمين وأعضاء المجلس بمختلف المحافظات.
        `},
        {
            imgurl:"https://moe.gov.eg//media/rzrpa3ga/whatsapp-image-2022-11-18-at-5-00-10-pm.jpeg?anchor=center&mode=crop&width=1560&height=528&rnd=133132895330070000",
            category:"MINS", title: 'وزير التربية والتعليم يكلف الأستاذ الدكتور أحمد المحمدي للعمل كمساعد وزير لشؤون المديريات التعليمية', content: `رر الدكتور رضا حجازي وزير التربية والتعليم والتعليم الفني، تكليف الأستاذ الدكتور أحمد المحمدي الأمين العام لضمان جودة التعليم برئاسة مجلس الوزراء، للعمل كمساعد وزير التربية والتعليم لشؤون المديريات التعليمية.
        
            وشغل المحمدي، منصب أمين عام اللجنة العليا لاعتماد المؤسسات التعليمية العسكرية التابعة لوزارة الدفاع والداخلية والمؤسسات ذات الطابع الخاص خلال الفترة من 2019 إلى 2022، كما عمل كمساعد رئيس هيئة ضمان جودة التعليم في الفترة من 2017 إلى 2019.
            
            كما تم تكليف الدكتور أحمد المحمدي للقيام بأعمال الأمين العام لهيئة ضمان جودة التعليم إلى جانب عمله كمساعد رئيس للهيئة في 2019، فضًلا عن عمله في منصب نائب مدير وحدة جودة التعليم بكلية طب الأسنان في الفترة من 2015 إلى 2017.
            
            وحصل الدكتور أحمد المحمدي على درجة أستاذ مساعد في عام 2022، فضًلا عن عمله بشئون المتابعة بوزارة الصحة والسكان، وفي الأمانة العامة للمركز القومي للبحوث بالإضافة إلى عضوية هيئة تدريس جامة الأزهر منذ عام 2010.
            
            كما حصل بإلاضافة إلى درجة الدكتوراه في التخصص علي دبلومة إدارة الموارد البشرية جامعة عين شمس 2014، ودبلومة إعداد القادة المتكاملة للترقي للمناصب الإدارية العليا مركز إعداد القادة - جامعة عين شمس 2015، ودبلومة الأزمات والكوارث بالجامعة الأمريكية2017، وماجستير الإدارة والدعم اللوجستي 2019 من الأكاديمية البحرية للعلوم والتكنولوجيا.`
        },
        {
            imgurl:"https://moe.gov.eg//media/cpxmib4i/whatsapp-image-2022-11-17-at-3-22-07-pm.jpeg?anchor=center&mode=crop&width=1560&height=528&rnd=133131661665030000",
            category:'MINS',title:`"التعليم" توقع بروتوكول تعاون مشترك لإنشاء مدرسة جديدة للتكنولوجيا التطبيقية فـي مجال زراعة وإنتاج التمور بالجيزة`,
            content:`شهد الدكتور رضا حجازى وزير التربية والتعليم والتعليم الفني، اليوم، بروتوكول تعاون مشترك مع شركة لينة للتنمية السياحية والعمرانية؛ بشأن إنشاء مدرسة لينة للتكنولوجيا التطبيقية للبنين، التابعة لإدارة الواحات البحرية، بمحافظة الجيزة.
      
            وقع البروتوكول الدكتور محمد مجاهد نائب الوزير للتعليم الفنى، ومهند السيد إسماعيل خضر نائب رئيس مجلس إدارة شركة لينة للتنمية السياحية والعمرانية، بحضور الدكتور عمرو بصيلة رئيس الإدارة المركزية لتطوير التعليم الفنى ومدير وحدة تشغيل وإدارة مدارس التكنولوجيا التطبيقية، وأشرف سلومة مدير مديرية التربية والتعليم بالجيزة.
            
            وأكد الدكتور رضا حجازى وزير التربية والتعليم أن الوزارة تسعى دائمًا إلى تطوير منظومة التعليم الفني، والتدريب المهني، بهدف تحسين نوعية مخرجات، ومستويات المهارات المهنية؛ حتى تواكب المستويات العالمية، مشيرًا إلى أن ثلثي احتياجات سوق العمل من المهن، والتخصصات الجديدة، وتساهم في زيادة نسب التشغيل لخريجي المدارس الفنية، ويزيد من دورها في تلبية الاحتياجات المطلوبة؛ لتنفيذ خطط التنمية الاقتصادية، والاجتماعية في مصر.
            
            وأشار الوزير إلى أن هذا البروتوكول يتوافق مع المحور الرئيسى لمؤتمر الصناعة الأخير والتوسع فى المجال الزراعى، والسعى إلى زيادة الصادرات، وإعداد كوادر مدربة تدريب تقنى على الزراعة والتصنيع، لافتًا إلى أن الوزارة تسعى إلى التوسع فى إنشاء العديد من مدارس التكنولوجيا التطبيقية فى مختلف التخصصات، وأن عدد هذه المدارس بلغ 43 مدرسة.
            
            وقال الدكتور محمد مجاهد، إن الوزارة تعمل على تشجيع التعليم الفني والتقني، والتدريب المهني وتطويره، والتوسع في أنواعه كافة، طبقًا لمعايير الجودة العالمية، وبما يتناسب مع احتياجات سوق العمل، مشيرًا إلى أن هذا البروتوكول يأتى في إطار تطوير التعليم الفني فى المجال الزراعى والتربية الزراعية، وتم استحداث مدارس التكنولوجيا التطبيقية، كنموذج جديد لتعليم فني متطور، يشارك في تطويره القطاع الخاص، انطلاقًا من مسئوليته المجتمعية، تجاه الوطن، إلى جانب الفائدة التي ستعود عليهما، وعلى الصناعة المصرية من كوادر فنية مؤهلة على مستوى عال.
            
            ومن جهته قال الدكتور عمرو بصيلة، إن هذا البروتوكول يهدف إلى استحداث تخصصات عملية في مجال زراعة وإنتاج التمور بمدارس التكنولوجيا التطبيقية؛ مما يساعد فى جذب الشباب نحو دراسة هذه التخصصات التكنولوجية الحديثة، وإيجاد فرص عمل جديدة لخريجي التعليم الفني تخاطب مهن المستقبل.
            
            وأضاف أن هذا البروتوكول ينص على أن هذه المدرسة تتخصص في تخريج فنيين مؤهلين للعمل في مجال زراعة وإنتاج التمور، ومدة الدراسة بها ثلاث سنوات، ويمنح الطلاب الناجحون في نهاية الصف الثالث شهادة إتمام الدراسة لدبلوم المدارس الثانوية للتكنولوجيا التطبيقية (نظام السنوات الثلاث)، معتمدة من وزارة التربية والتعليم والتعليم الفني، بالإضافة إلى شهادة خبرة معتمدة من الشركة.
            
            وأشار مهند السيد إسماعيل خضر مدير شركة لينة للتنمية السياحية والعمرانية، أن الشركة من الشركات الرائدة في مجال زراعة التمور، والتي تسعى إلى إنتاج وفرة من التمور بالطرق الحديثة، وتحرص على اغتنام كل الفرص الممكنة للقيام بدورها الوطني، والوفاء بمسئوليتها تجاه الدولة التي تتوجه إلى عمل طفرة في هذا المجال، كما تحرص الشركة على تكوين العنصر البشري الكفء، والمؤهل في مجال تخصصه، والتعامل مع كافة المشروعات بجدية تتضمن إتقان العمل.
            
            وأضاف، أننا لدينا قناعة بأن التعليم من العناصر الهامة التى تساعد الشركة فى المساهمة فى تنمية وتطوير بلادنا، ونسعى لإعداد عمالة فنية ماهرة مدربة فى مجال زراعة وإنتاج التمور، وتوفير فرص عمل وتطوير فى المجال الزراعى.`
          },
          {
              imgurl:"https://moe.gov.eg//media/2tgjcbxk/img-20221121-wa0010.jpeg?anchor=center&mode=crop&width=1560&height=528&rnd=133135103288900000",
              category:"MIS",
              title:"وزير التربية والتعليم يلتقي مديري إدارات التدريب على مستوى الجمهورية",
              content:`الدكتور رضا حجازي: التدريب يعد استكمالاً للجهود التى يتم بذلها لتطوير المنظومة التعليمية
      
              عقد الدكتور رضا حجازي وزير التربية والتعليم والتعليم الفني، اليوم، اجتماعًا مع مديري إدارات التدريب على مستوى الجمهورية، وذلك بقاعة الاجتماعات بالإدارة المركزية لإعداد القيادات التوبوية.
              ورحب الوزير بالحضور، وأكد أن مديري إدارات التدريب بالمحافظات هم أحد أدوات التطوير والتقدم في العملية التعليمية، مشيرًا إلى أهمية التدريب فى رفع مستوى أداء المعلم والعمل علي زيادة قدراته على الإبداع وإستخدام الأساليب الحديثة وتعزيز خبراته فى مجال تخصصه، بالإضافة إلي تعميق وعى المعلم لاستيعاب التطوير ورفع كفاءاته وإكسابه أساليب تعلم حديثة.
              وأكد حجازي، أنه فى إطار ما تقوم به الوزارة من تطوير المناهج الدراسية من أجل الإستمرار فى نجاح المنظومة التعليمية الجديدة، فإن التدريب يعد استكمالاً للجهود التى يتم بذلها لتطوير المنظومة التعليمية، حيث إن الغاية الأساسية للتدريب هى تحسين أداءات المعلم وتدريبه لإيجاد الطرق الأساسية لبناءه العلمى والتربوى، مما ييسر على المعلم تنمية ذاته علميًا وتربويًا ومايقدمه من أساليب تعليم وتعلم وأساليب تقييم.
              ووجه الوزير بعقد تدريبات لموجهي المواد على مستوى الجمهورية على نظام التقييم الجديد، وكيفية تدريب المعلمين على التعامل مع نظام التقييم الجديد.
              وأشار الدكتور رضا حجازي وزير التربية والتعليم والتعليم الفني، إلى أن المعلم أصبح ميسر وموجه وليس ملقن للمعلومة لذا تعمل الوزارة على تأهيل وتدريب المعلمين على إستخدام آليات التدريب والتطوير على أحدث المهارات والوسائل التكنولوجية لكى تتوافق مهارات المعلم مع التطوير والتغيير وذلك إيمانًا بدور المعلم.
              وحرص الوزير على تفقد مقر الإدارة المركزية لإعداد القيادات التوبوية، والحديث مع جميع العاملين بالمركز.`
          },
          {
              imgurl:"https://moe.gov.eg//media/sl3eg4cc/img-20221117-wa0019.jpeg?anchor=center&mode=crop&width=1560&height=528&rnd=133132886994200000",
              category:"MIS",
              title:"وزير التربية والتعليم يجتمع مع مديري المديريات التعليمية لمتابعة انتظام العملية التعليمية",
              content:`عقد الدكتور رضا حجازي وزير التربية والتعليم والتعليم الفني، مساء أمس، اجتماعًا مع السادة مديري المديريات التعليمية بمختلف المحافظات والقيادات التربوية؛ لمناقشة عدد من النقاط المهمة والتي من شأنها تحقيق انضباط العملية التعليمية.
              استهل الوزير اللقاء بتهنئة القيادات الجديدة، متمنيًا لهم كل النجاح والتوفيق في مهامهم التي يحددها الهيكل التنظيمي الجديد للوزارة، وإسهامهم بشكل فعال في تطوير العملية التعليمية في مصر.
              وشدد الدكتور رضا حجازي على الالتزام بالكتاب الدوري الخاص بمتابعة الغياب اليومي وانضباط سير الدراسة لضمان حسن سير العملية التعليمية بمختلف مراحل التعليم والتأكيد على تفعيل التسجيل الإلكتروني للغياب أُسْبُوعِيًّا لجميع المراحل التعليمية وخاصة غياب طلاب الشهادة الإعدادية والثانوية العامة، فضلًا عن تفعيل جدول الحصص المقرر لمعلمي الصفين الثالث الثانوي والثالث الإعدادي، مؤكدًا أهمية جذب الطلاب للمدرسة للاستفادة من العملية التعليمية.
              وأكد الوزير على تفعيل وحدة التواصل والدعم للمعلمين بالمديريات التعليمية وذلك في إطار اهتمام الوزارة بالمعلمين وأهمية دورهم الأصيل في تطوير منظومة التعليم، موجهًا بالاهتمام بالتواصل مع جميع المعلمين بالمديريات التعليمية لتلقي أي شكاوى خاصة بهم ودراسة وبحث هذه الشكاوى بهدف حلها وإزالة المعوقات والصعوبات التي تواجه المعلمين، ودراسة وبحث أية مقترحات مقدمة من المعلمين لدعم وتطوير العملية التعليمية.
              أما بالنسبة لاختبارات الصفين الأول والثاني الثانوي، أشار الوزير إلى أن الاختبارات ستكون إلكترونية على مستوى الإدارة التعليمية بعد إعداد بنوك الأسئلة، وفقًا للمواصفات التي حددها المركز القومي للامتحانات والإدارة المركزية للتعليم الثانوي، حيث تشتمل الورقة الامتحانية على أسئلة اختيار من متعدد MCQ وعودة الأسئلة المقالية القصيرة Short Essay بنسبة لا تتعدى 15% وفق طبيعة كل مادة دراسية.
              وأكد الوزير إلى أنه بالنسبة لاختبارات الصف الثالث الثانوي العام، سيتم تدريب الموجهين الأوائل في كل التخصصات على صياغة المفردات التدريبية والممارسات التدريسية وفق كل مواصفة وعلى آلية وضع الأسئلة تحت إشراف الإدارة المركزية لتطوير المناهج والمركز القومي للامتحانات على أن يقوم مديرو عموم تنمية المواد بالتأكيد على أن الأسئلة تأتي في إطار المنهج المقرر لكل مادة.
              وفيما يخص دمج التكنولوجيا في البرنامج الدراسي، وجه الوزير بتطبيق المرحلة الثانية من نسبة ال 25% لفترات المشاهدة بالمدارس على مستوى الجمهورية، وممارسة الأنشطة بمختلف أنواعها الرياضية والثقافية والفنية؛ مما يسهم في اكتشاف الموهوبين ورعايتهم بالتعاون مع وزارتي الشباب والرياضة والثقافة.
              كما وجه الوزير بتنظيم رحلات للطلاب إلى المشروعات القومية؛ لتعريفهم بما تم إنجازه على أرض الواقع من هذه المشروعات، وكذلك تنمية روح الولاء والانتماء لدى الطلاب، وقدرات التعلم الذاتي والثقافة العامة والمعرفة بالأحداث الجارية على كافة المستويات، بالإضافة إلى إثراء معلومات الطلاب من خلال البحث والاطلاع المباشر.
              وأشار الوزير إلى أن الاهتمام بالقراءة والكتابة لدى لطلاب على رأس أولوياتنا، مؤكدًا أن الوزارة تهتم بتعليم الطفل اللغة العربية قراءًة وكتابًة بجودة عالية، حتى يجيد تعلم العلوم الأخرى.
              وأوضح الوزير أن الوزارة تسعى إلى التوسع في إنشاء المدارس المصرية اليابانية، ومدارس النيل المصرية، ومدارس التكنولوجيا التطبيقية على مستوى المحافظات، وفقًا للتكليفات الرئاسية التي صدرت مؤخرًا خلال المؤتمر الاقتصادي، والمعرض والملتقى الصناعي، مشيرًا إلى أن هناك استحسانا كبيرًا لإنشاء مدارس التكنولوجيا التطبيقية، حيث إن عددها الآن يبلغ 43 مدرسة، ونستهدف التوسع في إنشاء هذه المدارس بالشراكة مع المستثمرين والقطاع الخاص.
              حضر الاجتماع الدكتور محمد مجاهد نائب الوزير للتعليم الفني، والدكتور أحمد ضاهر نائب الوزير للتطوير التكنولوجي، والدكتورة شيرين حمدي مستشار الوزير للتطوير الإداري والمشرف على الإدارة المركزية لشئون مكتب الوزير، ورؤساء الإدارات المركزية، ومديري مديريات التربية والتعليم، ومديري عموم تنمية المواد التعليمية.`
          },
          {
             imgurl:"https://moe.gov.eg//media/51bc51ap/whatsapp-image-2022-11-16-at-4-04-32-pm.jpeg?anchor=center&mode=crop&width=1560&height=528&rnd=133130815976570000",
             category:"MIS",
             title:`تحت شعار "اتحضر للأخضر" مدارس النيل المصرية الدولية تُنظم يومًا خاصًا بالبيئة والمناخ`,
             content:`في ضوء توجيهات الدكتور رضا حجازي وزير التربية والتعليم والتعليم الفني، برفع الوعي الطلابي بقضية التغير المناخي، أسبابها وتأثيراتها السلبية على الإنسان والبيئة والكائنات الحية وكيفية مواجهتها والحد منها، وذلك حفاظًا على العالم من التأثيرات الناتجة عنها، نظمت مدرسة النيل المصرية الدولية "فرع الياسمين"، ‎يومًا للتعلم والاستمتاع تحت شعار "أتحضر للأخضر"، مواكبة لأحداث العالم بالدورة السابعة والعشرين لمؤتمر الأطراف (COP 27) لإتفاقية الأمم المتحدة الإطارية بشأن تغير المناخ.
      
              وتضمنت فعاليات اليوم، مشاركة طلاب المرحلة الابتدائية والإعدادية في عمل محاكاة لما حدث في مؤتمر الأمم المتحدة للتغير المناخي COP27؛ وعمل تقارير وحملات توعية لتغير المناخ ولوحات إرشادية وصناعة مجسمات لحيوانات يظهر على بعضها أثر التغير المناخي، حيث قدم الطلاب خلال العرض مقترحات وحلوًلا بناءة من أجل مواجهة التغير المناخي.
      
              كما تضمن اليوم، مشاركة الطلاب في إعادة تدوير المخلفات "الزجاجات الفارغة" وتحويلها إلى أواني زهور وصناديق قمامة بهدف إحياء لكل ما هو قديم ومستهلك، مما يعزز لديهم فكرة التنمية المستدامة، حيث رفع الطلاب شعارات منها "لا لإلقاء النفايات" و"نعم للتنمية المستدامة" و"أوقفوا الإهدار".
      
              وقدم الطلاب عرضًا تقديميًا يتحدثون فيه باستفاضة عن قمة التغير المناخي بشرم الشيخ، وعن الحلول والمقترحات التي وُضعت من أجل التقليل من أضرار التغير المناخي، ومَثّل هذا العرض الختامي تتويجًا ليوم حفِل بالأحداث والعروض الرائعة، وعبر بصورة جلية عن وعي عميق وفهم أعمق عند الطلاب لقضية (التغير المُناخي).
      
              وسيشارك طلاب مدارس النيل في مسابقة "المدارس البيئية" عن كل مدرسة والتي تتمثل في السياج الأخضر، زراعة أسطح المدرسة، زراعة المنتجات الأورجانيك دون كيماويات، استخدام الطاقة الشمسية من خلال ألواح الطاقة المستدامة.
      
              وتُعد شهادة النيل الثانوية الدولية هي شهادة مصرية مصممة وفقًا للمعايير العالمية بالشراكة مع جامعة كامبريدج البريطانية وهي شهادة معادلة للشهادة الثانوية بالمملكة المتحدة ومعترف بها عَالَمِيًّا.
      ` 
          
          },{
              imgurl:"https://moe.gov.eg//media/guymjmdp/whatsapp-image-2022-11-24-at-4-47-42-pm.jpeg?anchor=center&mode=crop&width=1560&height=528&rnd=133137982533670000",
              category:"MINS",
              title:`وزير التربية والتعليم يلتقى عدد من طلاب إدارة بني مزار التعليمية بالمنيا ضمن مبادرة "حوار مع الكبار"`,
              content:`استقبل الدكتور رضا حجازي وزير التربية والتعليم والتعليم الفني، اليوم، عددًا من طلاب إدارة بني مزار التعليمية بمحافظة المنيا، وذلك في إطار التواصل مع الطلاب بمختلف المراحل التعليمية وإجراء حوار مجتمعي بشأن عدد من القضايا المتعلقة بالعملية التعليمية.
      
              وأعرب الوزير، عن سعادته بهذا اللقاء الذي يعد أداة للتواصل بين الوزارة والطلاب، ومعرفة آرائهم وقياس درجة قبولهم للمناهج الجديدة والتي طبقتها الوزارة في الصفوف الدراسية من KG1 وحتى الصف الخامس الابتدائي.
              
              وخلال اللقاء طرح الطلاب العديد من الأسئلة على الوزير بشأن العملية التعليمية والمناهج الدراسية، حيث أجاب الوزير على كافة تساؤلاتهم، كما أوضح نهج وزارة التربية والتعليم في تحقيق الفهم والتفكير الناقد ونواتج التعلم بدلاً من الاعتماد على أسلوب الحفظ، وهو الأمر الذي أشاد به الطلاب.
              
              وضم الحضور كلاً من عبير إبراهيم عفيفي مديرة المدرسة، والمعتز محمد فايز محمد أخصائي إعلام، وانجي جابر عبد الرحيم أخصائي إعلام، والطالبة مريم إبراهيم دكروري "الصف الثاني الإعدادي"، والطالب أحمد شريف جمال محمود "الصف السادس الابتدائي"، والطالبة حلا رضا أحمد أبوزيد "الصف الثالث الابتدائي"، والطالبة سلمى سمير كامل عثمان "الصف الخامس الابتدائي"، والطالب علي أسامة عبد الغني خلف " الصف الثالث الابتدائي"، والطالبة يارا أحمد حسن عبدالحميد "الصف الثالث الإعدادي".`
      
          },
          {
              title:`وزيرا "التعليم" و "الأوقاف" يكرمان الفائزين في المسابقة الثقافية الدينية الكبرى`,
              category:"MINS",
              imgurl:"https://moe.gov.eg//media/z1fp50bq/img-20221126-wa0013.jpeg?anchor=center&mode=crop&width=1560&height=528&rnd=133139419451700000",
              content:`كرّم الدكتور رضا حجازي وزير التربية والتعليم والتعليم الفني، والدكتور محمد مختار جمعة وزير الأوقاف، ورئيس المجلس الأعلى للشئون الإسلامية، الفائزين في المسابقة الثقافية الدينية الكبرى، والتي تهدف إلى نشر الفكر الديني المعتدل في المجتمع المصري.
              وفي كلمته، قال الدكتور رضا حجازي، إن أجهزة الدولة المصرية جميعها تسعى إلى تحقيق التنمية الشاملة المستدامة من خلال تنفيذ رؤية مصر 2030، وأهم أهدافِها على الإطلاق هي بناء شخصية الإنسان المصري المتكاملة، وإطلاق إمكانياتها إلى أقصى مدى لمواطن معتز بذاته ومستنير ومبدع ومسئول وقابل للتعددية ويحترم الاختلاف وفخور بتاريخ بلاده وشغوف ببناء مستقبلها.
              وأضاف أن الوزارة لا تألو جهدًا في بناء وعي الطفل المصري، وتنشئته التنشئة الصالحة، ليخرج إلى الحياة العملية، مؤمنًا بالله عز وجل، مدركًا أن الله -سبحانه وتعالى- قد أمرنا بالعلم، وأن الإيمان والعلم هما المعياران اللذان ترتفع بهما درجة الإنسان.
              وتابع: "مع اهتمام وزارة التربية والتعليم بكافة المواد الدراسية، إلا أنها تولي مادة التربية الدينية أهمية قصوى، فتحرص أشد الحرص على الارتقاء بها، وتطوير مناهجها، وتحديث أساليبها، وتدريب معلميها، وتكثيف أنشطتها، لتتحول التربية الدينية من مادة دراسية، إلى سلوك فعلي يعيشه الطالب، وينعكس على معاملاته".
              وأشار إلى أن هذه المسابقة لا تقتصر على مرحلة عمرية واحدة، ولا تستهدف فئة الطلاب فقط، بل هي مسابقة شاملة، تستهدف أطراف العملية التعليمية كلها: من طلاب، وأولياء أمور، وإداريين، ومعلمين، وقيادات تعليمية.
              واختتم الوزير كلمته، قائلاً: "ونحن إذ نكرم اليوم أوائل الفائزين في المسابقة، نؤكد أن جميع من شارك فيها قد فاز بالفعل، فاز بما حصل من علم نافع، وبما إطلع عليه من معرفة دينية صحيحة".
              ومن جانبه أكد الدكتور محمد مختار جمعه وزير الاوقاف، أن قضية بناء الوعي هي قضية تكاملية تسهم فيها العديد من المؤسسات الوطنية، لافتًا إلى أن هناك شراكات واسعة في هذا المجال بين وزارة الأوقاف، ووزارة التربية والتعليم والتعليم الفني، ووزارة التعليم العالي، ووزارة الثقافة، ووزارة الشباب والرياضة، والعديد من المؤسسات الوطنية.
              وأضاف وزير الأوقاف أن الوزارة تولى اهتمامًا كبيرًا بالنشء، قائلا "ندرك جميعًا أهمية التشكيل المبكر لعقلية الطفل وغرس الفضائل فيها وتنمية الوعي لديهم، فما ينطبع في عقلية الأطفال من أفكار مغلوطة يحتاج إلى جهود مضاعفة لتصحيحه بعد ذلك"، مشيرًا إلى أن المعلمين والموجهين يلعبون دورًا هامًا فى الاهتمام بعقلية الطفل وتصحيح المفاهيم الخاطئة لديهم وتكوين العقلية المستنيرة.
              واستعرض وزير الأوقاف جهود وزارة الأوقاف في حماية النشء الجديد من صغار السن من الفكر الهدام وتوعيتهم دينيًّا توعية صحيحة بما يحميهم من الانزلاق إلى بؤر التشدد والإرهاب، مشيرًا إلى أن وزارة الأوقاف أطلقت مبادرة حق الطفل بنهاية عام 2021، وهي مبادرة تستهدف الأطفال داخل المساجد، مع فتح المساجد وتزامنها مع أجازة آخر العام قامت الوزارة بالتوسع في المبادرة وإطلاقها على مستوى الجمهورية من خلال البرنامج الصيفي للطفل، والذي لاقى إقبالًا كبيرًا من الأطفال، واهتمامًا بالغًا من أولياء الأمور، وحرصًا شديدًا على مشاركة أبنائهم.
              ووجه وزير الأوقاف إلى استضافة الفائزين في المسابقة الثقافية المشتركة بمعسكر أبي بكر الصديق في الإسكندرية تكريمًا لهم، وإقامة معسكر ترفيهي لهم يتضمن زيارة لمكتبة الإسكندرية التي يتوافر بها أمهات الكتب.
              وفى ختام الحفل كرم الوزيران الطلاب الفائزين في المسابقة الدينية الكبري للعام الدراسي 2021/2022 وعددهم 74 فائزًا شاركوا في المسابقة، وحصل كل فائز على جائزة مالية مقدمة من وزارة الأوقاف، وشهادة تقدير، ومجموعة كتب من إصدارات المجلس الأعلى للشؤون الإسلامية.
              جدير بالذكر أن هذه المسابقة الدينية الكبرى مسابقة بحثية تهدف إلى زيادة وعي المجتمع المدرسي بصحيح الدين، وتصويب الأفكار الخاطئة التى قد تتسرب إلى عقول الطلاب من المواقع غير الموثقة على شبكة الإنترنت، وتقدم لهذه المسابقة عدد 58311 متسابق، وهى موجهة إلى سبع فئات، ثلاثة منها للطلاب في المراحل الابتدائية والإعدادية والثانوية (عام وفني)، وأربعة موجهة لبقية أطراف العملية التعليمية من أولياء الأمور، والإداريين في المدارس والإدارات التعليمية، والمعلمين، والقيادات التعليمية.
              حضر الاحتفالية الدكتور أكرم حسن رئيس الإدارة المركزية لتطوير المناهج، والدكتور أيمن أبو عمر رئيس الإدارة المركزية لشؤون الدعوة بوزارة الأوقاف، والدكتور محمود فؤاد مستشار التربية الدينية، وعماد منصور مدير عام الإدارة العامة للخدمات المركزية، والسادة موجهي عموم مادة التربية الدينية بالمديريات التعليمية.`
          },
          {
              imgurl:"https://moe.gov.eg//media/z54ppf53/minstry.jpeg?anchor=center&mode=crop&width=1560&height=528&rnd=133137634209000000",
              title:`"التعليم" تشارك في المؤتمر العالمى للرعاية والتربية في مرحلة الطفولة المبكرة`,
              category:"MINS",
              content:`بناءً على توجيهات الدكتور رضا حجازي وزير التربية والتعليم والتعليم الفني، شاركت وزارة التربية والتعليم والتعليم الفني، في فعاليات المؤتمر العالمى للرعاية والتربية في مرحلة الطفولة المبكرة، والذي انعقد في العاصمة الأوزباكستانية طشقند، بمشاركة نحو 1500 مشارك من مختلف دول العالم.
              وجاءت مشاركة الوزارة، ممثلة في الدكتورة رانده شاهين رئيس الإدارة المركزية للتعليم العام، تجسيدًا لحرص الدولة على التنافسية والتنمية المهنية المستدامة، والتزام الوزارة بتعزيز تنمية الطفولة المبكرة كأحد أهم جوانب التنمية الشاملة للأطفال.
              ويهدف المؤتمر العالمي للرعاية والتربية في مرحلة الطفولة المبكرة الذي استضافته جمهورية أوزبكستان وبتنظيم من منظمة الأمم المتحدة للتربية والعلم والثقافة (اليونسكو)، إلى إعادة التأكيد على حق جميع الأطفال في الحصول على خدمات رعاية الطفولة المبكرة والتعليم السليم من خلال تجديد الالتزام والاستثمار في الهدف 4.2 (SDG 4.2) من أهداف التنمية المستدامة للأمم المتحدة الذي يدعو إلى ضمان "أن تتاح لجميع الفتيات والفتيان فرص الحصول على نوعية جيدة من النماء والرعاية في مرحلة الطفولة المبكرة والتعليم قبل الابتدائي حتى يصبحوا مستعدين للتعليم الابتدائي".`
      
          },
          {
           title:`في إطار بروتوكول التعاون بين الثقافة والتربية والتعليم تنظيم 1040 نشاطًا في 890 مدرسة واستفاد منها أكثر من 47 ألف طالب`, category:"MINS",
           imgurl:"https://moe.gov.eg//media/r4mdg4ua/img-20221207-wa0012.jpeg?anchor=center&amp;mode=crop&amp;width=1560&amp;height=528&amp;rnd=133148983898630000",
           content:`في إطار التعاون المشترك بين وزارتي الثقافة والتربية والتعليم والتعليم والفني، أعلنت الإدارة المركزية للأنشطة الطلابية والهيئة العامة لقصور الثقافة، نتاج تفعيل بروتوكول التعاون الموقع بين الوزارتين لتنفيذ سلسلة من الفعاليات لطلبة المدارس في مختلف محافظات الجمهورية خلال شهري نوفمبر وأكتوبر، بهدف الوصول بالمنتج الثقافي إلى الطلاب في مختلف محافظات مصر واكتشاف مواهبهم ورفع وعيهم في مراحل التعليم المختلفة.
                  حيث بلغ عدد الأنشطة التي نُفذت خلال تلك الفترة 1040 نشاطًا في 890 مدرسة على مستوى الجمهورية واستفاد منها أكثر من 47 ألف طالب في المراحل العمرية المختلفة.
                  وقال الدكتور رضا حجازي وزير التربية والتعليم والتعليم الفني، إن يوم الأنشطة الذي تم تطبيقه بداية من العام الدراسي الحالي يهدف إلى تنويع المهارات لدى الطلاب واكتشاف المواهب في مختلف المجالات ضمن استراتيجية بناء الإنسان المصري وهي من أهم محاور رؤية مصر التنموية 2030، مشيرًا إلى أهمية اكتشاف الموهوبين والفائقين في المدارس، حيث إنهم من يستطيعون صنع الفارق في المستقبل، حتى نصل إلى التعليم المنتج للإبداع.
                  وقالت الدكتورة نيفين الكيلاني، وزيرة الثقافة، إن التعاون مع وزارة التربية والتعليم والتعليم الفني يمثل خطوة مهمة في استراتيجية بناء الإنسان المصري، حيث تساهم الأنشطة والفعاليات التي تنظمها الوزارة على يد المتخصصين في كافة مجالات الإبداع، في اكتشاف وصقل مهارات الموهوبين في مجالات الفنون والآداب في مرحلة النشء والشباب، بما يساعد على خلق جيل واع ومستنير، وأكدت وزيرة الثقافة على تكثيف العمل خلال المرحلة المقبلة واستمرار التعاون للوصول بالمنتج الثقافي لأكبر عدد من المدارس في كل محافظات مصر.
                  وأوضح الفنان هشام عطوة رئيس الهيئة العامة لقصور الثقافة، أن الفعاليات التي قدمها نخبة من المتخصصين من الهيئة داخل مدارس 24 محافظة وبعدد من قصور الثقافة شملت عروضًا فنية ومسرح العرائس، وورش مهارات واكتشاف مواهب في الفنون والآداب والابتكارات العلمية، إلى جانب ورش الحكي والقراءة ومسابقات المعلومات، وعروض سينمائية خاصة بالطفل، وندوات توعوية، وورش الفنون التشكيلية ومعارض فنية للمشاركين فيها.
                  وأكدت الدكتورة إيمان حسن، رئيس الإدارة المركزية للأنشطة الطلابية، أنه في إطار دعم الدكتور رضا حجازي للأنشطة وممارستها؛ نعمل على تمكين الطلاب من التعبير عن ذاتهم والارتقاءبسلوكياتهم وتنمية قدراتهم ومواهبهم، ولزيادة الوعي واكتساب أبنائنا مهارات التفاعل مع البيئة والتواصل مع المحيطين به والمساهمة في بناء شخصيتهم ثقافيًا وفنيًا واجتماعيًا.
                  وبلغ إجمالي الأنشطة والفعاليات في إقليم القاهرة الكبرى وشمال الصعيد الثقافي 224 نشاطًا تم تنفيذها في 172 مدرسة من مدارس القاهرة والجيزة والقليوبية والفيوم وبني سويف، بإجمالي 10036مستفيدًا من الطلاب.
                  كما بلغ إجمال الأنشطة والفاعليات بمدارس الإسماعيلية والسويس وبورسعيد وجنوب سيناء وشمال سيناء 166 نشاطًا في 150 مدرسة بإجمالي 6059 مستفيدًا.
                  أما إقليم جنوب الصعيد الثقافي فبلغ إجمالي الأنشطة والفعاليات والذي يضم محافظات أسوان والبحر الأحمر وقنا والأقصر فشهد تنفيذ 94 نشاطًا في 82 مدرسة بإجمالي 3179 مستفيد.
                  وبلغ إجمالي الأنشطة والفعاليات بمدارس دمياط وكفر الشيخ والشرقية والدقهلية 201 نشاط، في 178 مدرسة بإجمالي 8685 مستفيد.
                  وفي إقليم غرب ووسط الدلتا بلغ إجمالي الأنشطة والفعاليات بمدارس الغربية والبحيرة ومطروح والإسكندرية والمنوفية، 293 نشاطًا في 249 مدرسة بإجمالي 14403 مستفيد.
                  وفي أقليم شمال الصعيد والذي يضم أسيوط والمنيا والوادي الجديد وسوهاج بلغ إجمالي الأنشطة61 قدمت ل4719 طالب في 59 مدرسة.`
          },
          {
           title:`التعليم تنظم تدريب حول ضمان الجودة والاعتماد المؤسسى فى مدارس التكنولوجيا التطبيقية`, category:"MINS",
           imgurl:"https://moe.gov.eg//media/lv3b5j2u/img-20221207-wa0021.jpeg?anchor=center&amp;mode=crop&amp;width=1560&amp;height=528&amp;rnd=133148995023200000",
           content:`نظمت وزارة التربية والتعليم والتعليم الفنى برنامج تدريبى لمديرى مدارس التكنولوجيا التطبيقية ومسئولى الجودة حول ضمان الجودة والاعتماد المؤسسى فى مدارس التكنولوجيا التطبيقية،وذلك بدءً من يوم الثلاثاء الموافق 2022/12/6، وحتى يوم السبت الموافق 2022/12/10، ضمن سلسلة من البرامج التدريبية التي تنفذها الوحدة لجميع العاملين في مدارس التكنولوجيا التطبيقية، يتم خلالها تدريب مديري ومسئولي الجودة ب 17 مدرسة من مدارس التكنولوجيا التطبيقية بمحافظات القاهرة الكبرى، وذلك فى ضوء توجيهات الدكتور رضا حجازي وزير التربية والتعليم والتعليم الفني بتعزيز مهارات وخبرات العاملين بمدارس التكنولوجيا التطبيقية، وقيادة الدكتور محمد مجاهد نائب الوزير للتعليم الفنى، وإشراف الدكتور عمرو بصيلة رئيس الإدارة المركزية لتطوير التعليم الفني، ومدير وحدة تشغيل وإدارة مدارس التكنولوجيا التطبيقية.
           وفي هذا السياق قال الدكتور عمرو بصيلة، رئيس الإدارة المركزية لتطوير التعليم الفني، ومدير وحدة تشغيل وإدارة مدارس التكنولوجيا التطبيقية، أن الوزارة تولي اهتمام كبير نحو إداري ومعلمي مدارس التكنولوجيا التطبيقية، باعتبارهم الركيزة الأساسية لنجاح المنظومة، وعليه توفر الوحدة تدريبات دورية لتعزيز مهاراتهم وثقل قدراتهم، وإمدادهم بمستجدات النظم التعليمية المطبقة بمختلف أنحاء العالم؛ بما يثري العملية التعليمية بمدارس التكنولوجيا التطبيقية، مشيرًا إلى أنه فيما يتعلق بالبرنامج التدريبي الخاص بضمان الجودة والاعتماد المؤسسي لمدارس التكنولوجيا التطبيقية، فمن المستهدف توفيره خلال الأيام القليلة القادمة لمديري ومسئولي جودة مدارس التكنولوجيا التطبيقية بباقي محافظات الجمهورية، وبنهاية التدريب فسيكون المتدرب قادر على التعرف على مراحل تأهيل المدرسة للاعتماد، وتحديد فجوات الأداء، وخطط تحسينها ومتابعتها، ذلك بالإضافة إلى القدرة على تصميم خطط متابعة وتحسين الأداء وفق نتائج التقويم الذاتي، ويقوم بالتدريب نخبة من الأساتذة المدربين.`
          },
          {
            imgurl:"https://moe.gov.eg//media/zjzegogp/whatsapp-image-2022-12-05-at-2-46-20-pm.jpeg?anchor=center&amp;mode=crop&amp;width=1560&amp;height=528&amp;rnd=133147195511300000"
             ,
            category:"MINS", title:`التعليم تنظم ورشة لتدريب موجهى المواد بالمرحلة الثانوية على أساليب وفنيات صياغة الأسئلة وفقًا لنظام التقييم الجديد`,
            content:`نظمت وزارة التربية والتعليم والتعليم الفنى اليوم ورشة عمل لتدريب موجهى المواد للمرحلة الثانوية بالمديريات التعليمية، على أساليب وفنيات وصياغة الأسئلة وفقًا لنظام التقييم الجديد لطلاب المرحلة الثانوية، وذلك بدءً من يوم الأثنين الموافق 2022/12/5، وحتى يوم الثلاثاء الموافق 2022/12/6.
      
                   جاء ذلك بحضور كلٍ من الدكتور أحمد المحمدي مساعد الوزير لشؤون المديريات التعليمية، والدكتور رمضان محمد رمضان مساعد أول الوزير للتقويم ونظم الامتحانات، والأستاذ أكرم حسن رئيس الإدارة المركزية لتطوير المناهج، والأستاذة نادية عبد الله رئيس الإدارة المركزية لشئون المعلمين، والدكتور حسن جاويش مدير الترقي بالأكاديمية المهنية للمعلمين.
      
                   وأوضحت الوزارة أن المستهدفين من التدريب عدد 378 موجه لكل مادة من مواد التعليم الثانوي، وعدد 27 مسئول تدريب بكل مديرية تعليمية، بالإضافة إلى عدد 15 مدرب وعدد 10 مشرفين على التدريب، وتحتوي الحقيبة التدريبية على المواد الأساسية (العلوم والدراسات والرياضيات واللغة العربية واللغة الإنجليزية واللغة الثانية وعلم النفس والفلسفة)، ويوجد في كل حقيبة من المواد التدريبية (دليل المتدرب - دليل المشارك - المادة المرجعية - عرض تقديمي عن اليوم الأول، واليوم الثاني - تقويم البرنامج التدريبي - تقويم متدرب - الاختبار القبلي والبعدي)، ويقوم بالتدريب نخبة من الأساتذة المدربين.
      
                   وفى نفس السياق، أشارت الوزارة إلى عقد ورشة عمل لإدارات التدريب بالمديريات التعليمية، وذلك في إطار تطوير العمل بإدارات التدريب بالمديريات التعليمية، تستهدف مديري إدارات التدريب بالمديريات؛ وذلك لمناقشة وضع تصور لمعدلات العاملين بأقسام وإدارات التدريب.`
          }
        
            


    ]
    AppDataSource.manager.findOneByOrFail(Author,{id:22}).then(d=>{
        author=d;
        return author
    }).then(a=>{
        a.articles=[...articles]
        a.articles.forEach((v,i)=>{
            v.author=a
            AppDataSource.manager.save(Article,v)
        })
        return a
    }).then(a=>{
        AppDataSource.manager.save(Author,a)
        //AppDataSource.manager.save(a.user)
        res.json({message:"created successfully"})
    })




})*/

articlesroute.post("/articles",({body},res)=>{
    /* 	#swagger.tags = ['Article']
        #swagger.description = 'Endpoint to add new article' 
        #swagger.parameters['body'] = {
            in: 'body',
            description: 'Add new article.',
            schema: { $ref: '#/definitions/AddArticle' }
    } */
    
   /* let article:Article=body.article
    let userid=body.userid
    let author:Author;
    AppDataSource.manager.findOneByOrFail(Author,{id:userid}).then(d=>{
        author=d;
        return author
    }).then(a=>{
        article.author=a;
        a.articles=[]
        a.articles.push(article)
        return article
    }).then(a=>{
        AppDataSource.manager.save(Article,a)
        //AppDataSource.manager.save(a.user)
        res.json({message:"created successfully"})
    })*/
})

/*articlesroute.post("/articles/create",(req,res)=>{
    let article:Article=<Article>{...req.body.ticket}
    let userid=req.body.userid
    let author:Author;
    AppDataSource.manager.findOneByOrFail(Author,{id:userid}).then(d=>{
        author=d;
        return author
    }).then(a=>{
        article.author=a;
        a.articles=[]
        a.articles.push(article)
        return article
    }).then(a=>{
        AppDataSource.manager.save(Article,a)
        //AppDataSource.manager.save(a.user)
        res.json({message:"created successfully"})
    })
    .catch(console.log);
})
*/
