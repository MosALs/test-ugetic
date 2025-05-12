import { Component } from '@angular/core';

@Component({
  selector: 'app-software-development',
  templateUrl: './software-development.component.html',
  styleUrls: ['./software-development.component.css']
})
export class SoftwareDevelopmentComponent {
  tabsData = [
    { id: 1, titleKey: 'التكامل مع منصات الإدارة المختلفة', descKey: 'برامجنا تدعم الربط مع الأنظمة المحاسبية، أنظمة الموارد البشرية، وإدارة العملاء، لضمان تدفق البيانات بسهولة', imageUrl: 'assets/images/software/التكامل-مع-المنصات-التسويقية-الأخرى.png' },
    { id: 2, titleKey: 'تحليل وإعداد التقارير المالية:', descKey: 'نظام متكامل يوفر لك تقارير مالية دقيقة لمساعدتك في اتخاذ القرارات الصحيحة.', imageUrl: 'assets/images/software/تحسين-محركات-البحث.png' },
    { id: 3, titleKey: 'إدارة الفواتير والمدفوعات', descKey: ' مكانية إصدار الفواتير الإلكترونية وربطها بأنظمة الضرائب المعتمدة', imageUrl: 'assets/images/software/توفير-وسائل-الدفع-المتنوعة.png' },
    { id:4, titleKey:'إدارة المخزون', descKey:'نظام ذكي لمتابعة حركة المنتجات وإدارة مستويات المخزون بكفاءة', imageUrl:'assets/images/software/نشر-المحتوى.png'},
    { id:5, titleKey:'مراجعات وتقييمات', descKey:'تعتبر أداة حيوية لتحسين تجربة المستخدم وتعزيز الثقة في العلامات التجارية.', imageUrl:'assets/images/software/مراجعات-وتقييمات.png'},

  ];
  tabsMetadata = [
       { header: 'أنظمة مخصصة وفق احتياجاتك', paragraph: '' },
  ]
  dynamicSectionData = {
    headerKey: 'نبتكر برامج وأنظمة إدارية ومحاسبية تعزز',
    rotatingTextKeys: [
      'إنتاجيتك',
      'كفاءة عملياتك',
      'نجاح أعمالك',
      'تفوقك التكنولوجي'
    ],
    staticTextKey: 'هل تبحث عن تصميم نظام إداري أو محاسبي يُحدث نقلة نوعية في أعمالك؟ نقدم لك حلول برمجية مخصصة تلبي احتياجاتك، مع تصميم عصري وتجربة مستخدم استثنائية',
    watchButtonKey: 'اطلب نظامك الآن',
    downloadButtonKey: 'شاهد فيديو',
    imageUrl: 'assets/images/software/'
  };
  
  featureTwoData = {
    headerKey: 'تصميم سهل وسلس لأنظمتك الإدارية',
    descKey: 'نوفر لك برامج محاسبية وإدارية متجاوبة وسلسة تعمل بكفاءة على مختلف الأجهزة، مما يضمن سهولة إدارتها من أي مكان وفي أي وقت ',
    items: [
      { headerKey: 'أداء سريع واستجابة عالية ', iconColor: '#d3a00f' },
      { headerKey: 'تكامل مع أنظمة الدفع المتنوعة', iconColor: '#d3a00f' },
      { headerKey: 'أمان متقدم لحماية بيانات المستخدمين', iconColor: '#d3a00f' },
     
    ],
    imageUrl: 'assets/images/software/تصميم-متجاوب-وسلس.png'
  };
  
  
  featureThreeData = {
    headerKey: 'مواصفات متكاملة تدعم أعمالك',
    descKey: '',
    items: [
      { headerKey: 'استضافة قوية وموثوقة', descKey: 'وفر لك استضافة سحابية موثوقة من أفضل مزودي الخدمة لضمان تشغيل سلس وآمن لأنظمتك. ', icon: 'assets/images/software/باقات استضافة متنوعة.svg' },
      { headerKey: 'تكامل مع الأنظمة الأخرى', descKey: 'يدعم برامجنا التكامل مع أنظمة المحاسبة والمخزون والمبيعات، والموارد البشرية.', icon: 'assets/images/software/حجز الدومين.svg' },
    ],
    imageUrl: 'assets/images/software/مواصفات-متكاملة-تخدم-عملك.png'
  };

  featureCards = [
    { icon: 'assets/images/software/دعم أكثر من لغة.svg', captionKey: 'دعم أكثر من لغة. ' },
    { icon: 'assets/images/software/واجهة سهلة الاستخدام.svg', captionKey: 'واجهة سهلة الاستخدام' },
    { icon: 'assets/images/software/سابقة الأعمال copy.svg', captionKey: 'إدارة متكاملة للحسابات والمخزون.' },
    { icon: 'assets/images/software/المدونة.svg', captionKey: 'تقارير تحليلية دقيقة' },
    { icon: 'assets/images/software/التكامل مع السوشيال ميديا.svg', captionKey: 'تكامل مع أنظمة الضرائب والفواتير الإلكترونية' },
  ];
}
